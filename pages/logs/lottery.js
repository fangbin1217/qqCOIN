const app = getApp()
Page({
    data: {
        viewWidth: '',
        animationMain:null,//正面
        animationBack:null,//背面
        lottery_codes: [],
        puke: '',
        timeLeftValue:'-时 -分 -秒',
        leftMarign:'',
        cjTitleImage:'',
        djsTitleImage: '',
        tipsImage: '',
        waitImage: '',
        lotteryTimeLeft: 0,
        rewardNum: 1, 
        rewardImage: '', 
        rewardTitle: '',
        isFirst: true,
        joinUsers: '',
        noticeList: [],
        myShareBtn: null,
        timerNum:0,
        myTimer1: null,
        animation:null,
        lotteryTitle: '',
        lottery_id: '',
        isLoading: false,
        isDisabled: false,
        userInfo: null
  },

  mySupports: function () {
    if (this.data.myTimer1) {
      clearInterval(this.data.myTimer1);
      this.setData({
        timerNum: 0,
        myTimer1: null
      });
    }
    //创建动画实例animation1
    var animation = qq.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    });
    this.animation = animation;

    var next = true;
    //连续动画关键步骤
    var myTimer1 = setInterval(function () {
      //2: 调用动画实例方法来描述动画
      if (this.data.timerNum < 8) {
        if (next) {
          animation.translateX(2).step();
          animation.rotate(19).step();

          next = !next;
        } else {
          animation.translateX(-2).step();
          animation.rotate(-19).step();

          next = !next;
        }
      } else {
        animation.translateX(0).step();
        animation.rotate(0).step();
      }
      this.data.timerNum++;
      if (this.data.timerNum >= 16) {
        this.data.timerNum = 0;
      }
      //3: 将动画export导出，把动画数据传递组件animation的属性
      this.setData({
        animation: animation.export(),
        timerNum: this.data.timerNum
      })
    }.bind(this), 300);
    this.setData({
      myTimer1: myTimer1
    })
  },


  onLoad: function(e) {

    var that = this;
    qq.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        console.log('w:',windowWidth);
        var xP = (windowWidth - 4*50 - 4*10)/2;
        if (xP < 0) {
          xP = 0;
        }
        
        var lottery_codes = [];
        for (var i=0;i<4;i++){
            lottery_codes.push({
                'image':'',
                'pkImage': app.globalData.imgHost + 'support/pk.png'
            });
        }
        that.setData({
          viewWidth: windowWidth,
          lottery_codes: lottery_codes,
          cjTitleImage: app.globalData.imgHost + 'support/cj0117.png',
          djsTitleImage: app.globalData.imgHost + 'support/djs0203.png',
          tipsImage: app.globalData.imgHost + 'support/tips0120.png',
          waitImage: app.globalData.imgHost + 'support/wait0209.png',
          leftMarign: xP,
          myShareBtn: app.globalData.imgHost + 'support/share1226.png'
        })
      },
    })
      
  },

  doStart: function() {
    this.rotateFn();
  },

  onShow: function() {
    if (!app.globalData.userInfo) {
      app.jumpLogin();
    }
    var userInfo = null;
    if (!this.data.userInfo && app.globalData.userInfo) {
      userInfo = app.globalData.userInfo;
    }
    this.setData({
      userInfo: app.globalData.userInfo,
      isLoading: false,
      isDisabled: false
    });
    
    this.initIndex();
    this.mySupports();
  },

  initIndex: function() {
    qq.showLoading();
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/mylottery', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1 },
      success: res => {
        qq.hideLoading();
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {

          this.setData({
            lotteryId: ret.data.lotteryId,
            isFirst: ret.data.isFirst,
            joinUsers: ret.data.joinUsers,
            noticeList: ret.data.historyLuckyUsers,
            rewardTitle: ret.data.rewardTitle,
            rewardNum: ret.data.rewardNum,
            rewardImage: ret.data.rewardImage,
            lotteryTitle: ret.data.lotteryTitle

          });
          this.timeLeftLoop(ret.data.timeLeft);
        } else if (ret.code == 101) {  //如果access_token过期，则重新登录
          this.login(1);
        } else {
          qq.showToast({
            title: ret.msg,
            icon: 'none',
            image: app.globalData.image_warning,
            duration: 1500,
            mask: true
          });
        }
      },
      fail: () => {
        qq.hideLoading();
        qq.showToast({
          title: ret.msg,
          icon: 'none',
          image: app.globalData.image_warning,
          duration: 1500,
          mask: true
        });
      }
    });

    
  },

  rotateFn: function() {
  	this.animation_main = wx.createAnimation({
        duration:400,
        timingFunction:'linear'
      })
      this.animation_back = wx.createAnimation({
        duration:400,
        timingFunction:'linear'
      })
  	// 点击正面
    this.animation_main.rotateY(180).step()
    this.animation_back.rotateY(0).step()
    this.setData({
      animationMain: this.animation_main.export(),
      animationBack: this.animation_back.export(),
    });

    /*
      点击背面
      this.animation_main.rotateY(0).step()
      this.animation_back.rotateY(-180).step()
      this.setData({
      	animationMain: this.animation_main.export(),
      	animationBack: this.animation_back.export(),
      })
      */
  },

  timeLeftLoop: function(second) {
    var timeLeftValue = '';
    if (second == 0) {
      clearTimeout(this.timer);
      timeLeftValue = '-时 -分 -秒';
    } else {
      timeLeftValue = this.timeLeft(second);
      var that = this;
      this.timer = setTimeout(function(){
        second--;
        that.timeLeftLoop(second);
      }, 1000);
    }

    this.setData({
        timeLeftValue: timeLeftValue
      });
    
  },

  timeLeft: function(second) {
    //相差的秒数
    var minutes = 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    //求出天数
    var d = Math.floor(second / days);
    //求出除开天数，剩余的毫秒数
    second %= days;
    var h = Math.floor(second / hours);
    if (h < 10) {
      h = '0' + h;
    }
    second %= hours;
    var m = Math.floor(second / minutes);
    if (m < 10) {
      m = '0' + m;
    }
    second %= minutes;
    var s = Math.floor(second / 1);
    if (s < 10) {
      s = '0' + s;
    }
    return h + '时 ' + m + '分 ' + s + '秒';

  },

  myRecords: function() {
    if (!this.data.userInfo.isLogin) {
      app.noLogin();
    } else {
      qq.navigateTo({
        url: '/pages/logs/records'
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var shareImage = app.globalData.imgHost + 'support/lotery0207.png';
    var that = this;
    return {
      title: '抽奖啦！纪念币、话费等你来拿，快来试试你的手气吧！', //转发的标题。当前小程序名称
      path: '/pages/logs/lottery', //转发的路径
      imageUrl: shareImage,//自定义图片路径 支持PNG及JPG。显示图片长宽比是 5:4
      success: function(e) {
        console.log(123)
        if (that.data.lotteryId) {
          var access_token = qq.getStorageSync('access_token') || '';
          qq.request({
            url: app.globalData.serverHost+'coin/join', //接口地址
            method: 'post',
            data: { access_token: access_token, is_coin: 1, lottery_id: that.data.lotteryId, is_reward: 1 },
            success: res => {
              console.log(res.data)
              var ret = res.data;
              if (ret.code == 0) {
                qq.showToast({
                  title: ret.msg,
                  icon: 'success',
                  duration: 1500,
                  mask: true
                });
                setTimeout(function(){
                  that.myRecords();
                }, 1800);
              } else if (ret.code == 101) {  //如果access_token过期，则重新登录
                this.login(1);
              } else {
                qq.showToast({
                  title: ret.msg,
                  icon: 'none',
                  image: app.globalData.image_warning,
                  duration: 1500,
                  mask: true
                });
              }
            },
            fail: () => {
              qq.showToast({
                title: ret.msg,
                icon: 'none',
                image: app.globalData.image_warning,
                duration: 1500,
                mask: true
              });
            }
          });
        }
      }
    }

  },

  joinLottery: function() {

    if (!this.data.userInfo.isLogin) {
      app.noLogin();
      return;
    }

    //this.doStart();
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/join', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1, lottery_id: this.data.lotteryId },
      success: res => {
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {
          this.setData({
            isLoading: false,
            isDisabled: true,
            lottery_codes: ret.data.lottery_codes,
          });
          this.doStart();
          var that = this;
          qq.showToast({
            title: ret.msg,
            icon: 'success',
            duration: 1500,
            mask: true
          });
          setTimeout(function(){
            that.myRecords();
          }, 1800);
        } else if (ret.code == 101) {  //如果access_token过期，则重新登录
          this.setData({
            isLoading: false,
            isDisabled: false
          });
          this.login(1);
        } else {
          this.setData({
            isLoading: false,
            isDisabled: false
          });
          qq.showToast({
            title: ret.msg,
            icon: 'none',
            image: app.globalData.image_warning,
            duration: 1500,
            mask: true
          });
        }
      },
      fail: () => {
        qq.showToast({
          title: ret.msg,
          icon: 'none',
          image: app.globalData.image_warning,
          duration: 1500,
          mask: true
        });
      }
    });
    
  },

  goHome: function() {
    qq.switchTab({
      url: '/pages/index/index',
      success: function (e) {
        
      }
    })
  }

})