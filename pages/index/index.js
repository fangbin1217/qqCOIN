const app = getApp();
const updateManager = qq.getUpdateManager();
// 在页面中定义插屏广告
var InterstitialAd = null;
Page({
  data: {
    userInfo:null,
    isLoading: false,
    isDisabled: false,
    timerNum:0,
    myTimer1: null,
    animation:null,
    animation2:null,
    coinInfo:null,
    pic_z:null,
    pic_f:null,
    index:0,
    coinId: 0,
    valueName:'请选择',
    notice: '免费抽奖活动开始啦，快来参与吧，大奖等你拿！！！',
    array:[
      {id:'0', name:'请选择'}, {id:'26', name:'2020鼠年生肖纪念币'}
    ],
    array2:[
      '请选择', '2020鼠年生肖纪念币'
    ],
    shareImage: null,
    myShareBtn: null,
    leftIcon: null,
    middleIcon: null
  },

  bindDateChange: function(e) {
    var index = e.detail.value;
    var coinId = this.data.array[index].id;
    coinId = parseInt(coinId);
    var valueName = this.data.array[index].name;
    console.log('picker:', index, coinId,valueName)

    this.setData({
      index: index,
      coinId: coinId,
      valueName: valueName
    })
  },

  search: function() {
    this.getData();
  },

  getData: function() {

    if (this.data.coinId == 0) {
      qq.showToast({
        title: '请选择！',
        image: app.globalData.image_warning,
        duration: 1200,
        mask: true
      });
    }

    this.setData({
      isLoading: true,
      isDisabled: true
    });

    qq.request({
      url: app.globalData.serverHost + 'common/animal',
      method: 'post',
      data: { coin_id: this.data.coinId },
      success: res => {
        var ret = res.data;
        //console.log(ret.data);

        if (ret.code == 0) {
          this.setData({
            isLoading: false,
            isDisabled: false,
            coinInfo: ret.data,
            pic_z: app.globalData.imgHost + ret.data.pic_z,
            pic_f: app.globalData.imgHost + ret.data.pic_f,
          });
        } else {
          this.setData({
            isLoading: false,
            isDisabled: false
          });
        }
      },
      fail: () => {
        this.setData({
          isLoading: false,
          isDisabled: false
        });
        // 这里调用你想设置的提示, 比如展示一个页面，一个toast提示
        qq.showToast({
          title: '查询超时！',
          image: app.globalData.image_warning,
          duration: 1200,
          mask: true
        });
      }
    });
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

    //创建动画实例animation2
    var animation2 = qq.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })
    this.animation2 = animation2;

    var next = true;
    //连续动画关键步骤
    var myTimer1 = setInterval(function () {
      //2: 调用动画实例方法来描述动画
      if (this.data.timerNum < 8) {
        if (next) {
          animation.translateX(2).step();
          animation.rotate(19).step();

          animation2.translateX(-2).step();
          animation2.rotate(-19).step();

          next = !next;
        } else {
          animation.translateX(-2).step();
          animation.rotate(-19).step();

          animation2.translateX(2).step();
          animation2.rotate(19).step();

          next = !next;
        }
      } else {
        animation.translateX(0).step();
        animation.rotate(0).step();

        animation2.translateX(0).step();
        animation2.rotate(0).step();
      }
      this.data.timerNum++;
      if (this.data.timerNum >= 16) {
        this.data.timerNum = 0;
      }
      //3: 将动画export导出，把动画数据传递组件animation的属性
      this.setData({
        animation: animation.export(),
        animation2: animation2.export(),
        timerNum: this.data.timerNum
      })
    }.bind(this), 300);
    this.setData({
      myTimer1: myTimer1
    })
  },

  bankCity: function(e) {
    var bank_city = e.currentTarget.dataset.bank_city;
    qq.navigateTo({ url: "/pages/index/result?bank_city="+bank_city });
  },


  onLoad: function (option) {

    //version update
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
      qq.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      qq.showModal({
        title: '升级失败',
        content: '新版本下载失败，请检查网络！',
        showCancel: false
      });
    })    
    this.indexInit();

    this.setData({
      myShareBtn: app.globalData.imgHost + 'support/share1226.png',
      leftIcon: app.globalData.imgHost + 'supportbmi0112.png',
      middleIcon: app.globalData.imgHost + 'support/gift0111.png'
    });
  },

  onShow: function() {
    this.mySupports();
  },


  onReady: function() {


      
  },

  indexInit: function () {
    var access_token = qq.getStorageSync('access_token') || ''
    qq.showLoading({
      title: '努力拉取数据..'
    });
    //没有access_token 就是第一次登录
    //access_token = '';
    if (!access_token) {
      console.log('first user');
      app.login(1);
    } else {
      //否则就根据没有access_token去获取用户信息
      console.log('old user');
      app.getUserInfo(access_token);
    }

    app.userInfoReadyCallback = res => {
      this.setData({
        userInfo: res
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

    var shareImage = app.globalData.imgHost + 'support/lotery0207.png';
    return {
      title: '抽奖啦！纪念币、话费等你来拿，快来试试你的手气吧！', //转发的标题。当前小程序名称
      path: '/pages/index/index', //转发的路径
      imageUrl: shareImage//自定义图片路径 支持PNG及JPG。显示图片长宽比是 5:4
    }

  },

  myResult: function () {
    if (!this.data.isDetail) {
      
      qq.showToast({
        title: '请先测试！',
        icon: 'none',
        image: app.globalData.warnImage,
        duration: 1500,
        mask: true
      });
      return false;
      
    }

    qq.navigateTo({
      url: '/pages/index/result?myLevel=' + this.data.myLevel + '&targetWeight=' + this.data.weightValue + '&myWeight=' + this.data.myWeight
    });
  },

  jumpMiddle: function() {
    qq.navigateTo({
      url: '/pages/logs/lottery'
    });
  },

  asd: function() {
    qq.navigateTo({
      url: '/pages/express/detail'
    });
  },
  
  jumpLeftXcx: function(e) {
    qq.navigateToMiniProgram({
      appId: '1109789768',
      extraData: {
        foo: 'bar'
      },
      success(res) {
        // 打开成功
        console.log('jump left success');
      }
    })
  },

  myLogin: function () {

    qq.navigateTo({
      url: '/pages/login/index'
    });
  },
  

})