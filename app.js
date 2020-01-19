App({
  onLaunch: function (option) {

  },

  globalData: {
    userInfo: null,
    serverHost: 'http://api.fyy6.fb/',   //https://api.fyy6.com/   http://api.fyy6.fb/
    imgHost: 'https://img.fyy6.com/',
    avatar: '../../images/defaultAvatar.png',
    logo: 'sx/rat2020Z.png',
    shareImage: 'sx/share2020.png',
    image_warning: '../../images/Warning.png',
    pk: 'pk.png',
    isRefresh:false,
    version:'1.0.0'
  },

  login: function (isJump = 0) {
    //qq登录
    qq.login({
      success: res => {
        console.log('code:' + res.code); 
        // 登录开始
        qq.request({
          url: this.globalData.serverHost + 'login/coin',
          method: 'post',
          data: { code: res.code, is_coin: 1},
          success: res => {
            qq.hideLoading();
            var ret = res.data;
            console.log(ret)
            if (ret.code == 0) {
              qq.setStorageSync('access_token', ret.data.access_token)
              this.globalData.userInfo = ret.data;
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(this.globalData.userInfo)
              }

            } else {
              // 这里调用你想设置的提示, 比如展示一个页面，一个toast提示
              if (isJump) {
                  this.jumpLogin(ret.msg);
              } else {
                  qq.showToast({
                      title: ret.msg,
                      icon: 'none',
                      image: this.globalData.image_warning,
                      duration: 1500,
                      mask: true
                  });
              }
            }


          },
          fail: () => {
            qq.hideLoading();
            // 这里调用你想设置的提示, 比如展示一个页面，一个toast提示
            if (isJump) {
                this.jumpLogin('登录超时！');
            } else {
                qq.showToast({
                    title: '登录超时！',
                    icon: 'none',
                    image: this.globalData.image_warning,
                    duration: 1500,
                    mask: true
                });
            }
          }
        })
      }
    });
  },

  jumpLogin: function(msg = '') {
    if (!msg) {
      msg = '登录过期！';
    }
    qq.showToast({
      title: msg,
      image: this.globalData.image_warning,
      duration: 1200,
      mask: true,
      success: function () {
        setTimeout(function () {
          qq.navigateTo({ url: "/pages/login/index" })
        }, 1200)

      }
    })
  },

  getUserInfo: function (access_token) {
    qq.request({
      url: this.globalData.serverHost+'coin/info', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1 },
      success: res => {
        qq.hideLoading();
        
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {
          this.globalData.userInfo = ret.data;        
          // 所以此处加入 callback 以防止这种情况  登录成功回调
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(this.globalData.userInfo)
          }
        } else if (ret.code == 101) {  //如果access_token过期，则重新登录
          this.login(1);
        } else {
          this.login(1);
        }
      },
      fail: () => {
        qq.hideLoading();
        // 这里调用你想设置的提示, 比如展示一个页面，一个toast提示
        this.login(1);
      }
    }) 
  },

  updQQInfo: function (avatar, nickname) {
    qq.showLoading({
      title: '正在登录..',
    })
    var access_token = qq.getStorageSync('access_token') || ''
    qq.request({
      url: this.globalData.serverHost + 'coin/updinfo', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1, avatar: avatar, nickname: nickname }, 
      success: res => {
        qq.hideLoading();
        //console.log(res.data)
        qq.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 1500,
          mask: true
        })
        var ret = res.data;
        if (ret.code == 0) {
          this.globalData.userInfo = ret.data;
          // 所以此处加入 callback 以防止这种情况  登录成功回调
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(this.globalData.userInfo)
          }

        } else if (ret.code == 101) {  //如果access_token过期，则重新登录
          this.jumpLogin('登录过期！');
        } else {
          qq.showToast({
            title: '登录失败！',
            icon: 'none',
            image: this.globalData.image_warning,
            duration: 1500,
            mask: true
          });
        }
      },
      fail: () => {
        qq.hideLoading();
        qq.showToast({
          title: '登录超时！',
          icon: 'none',
          image: this.globalData.image_warning,
          duration: 1500,
          mask: true
        });
      }
    })
  },

  noLogin: function(isJump = 1) {
    qq.showToast({
      title: '未登录！',
      icon: 'none',
      image: this.globalData.image_warning,
      duration: 1500,
      mask: true
    });
    if (isJump == 1) {
      setTimeout(function(){
        qq.switchTab({
          url: '/pages/logs/logs'
        });
      }, 1500);
    }
  }

});