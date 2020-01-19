//logs.js
const app = getApp()

Page({
  data: {
    userInfo: null
  },
  onLoad: function (options) {
    this.indexInit();
  },

  onShow: function(e) {
    if (!app.globalData.userInfo) {
      app.jumpLogin();
    }
    if (!this.data.userInfo && app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
  },

  indexInit: function() {
  
  },

  jumpExpress: function() {
    if (!this.data.userInfo.isLogin) {
      app.noLogin(0);
    } else {
      qq.navigateTo({
        url: '/pages/express/edit'
      })
    }
  },

  jumpLottery: function() {
    qq.navigateTo({
      url: '/pages/logs/lottery'
    });
  },

  jumpRecords: function() {
    if (!this.data.userInfo.isLogin) {
      app.noLogin(0);
    } else {
      qq.navigateTo({
        url: '/pages/logs/records'
      });
    }
  },

  jumpGift: function() {
    if (!this.data.userInfo.isLogin) {
      app.noLogin(0);
    } else {
      qq.navigateTo({
        url: '/pages/logs/gift'
      });
    }
  },

  getQQInfo: function(e) {
    console.log(e);
    var avatarUrl = '';
    var nickname = '';
    var userInfo = e.detail.userInfo || '';
    if (userInfo) {
      avatarUrl = e.detail.userInfo.avatarUrl;
      nickname = e.detail.userInfo.nickName;
      app.updQQInfo(avatarUrl, nickname);

      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res,
          isLogin: true
        })
      }
    }
  },

  aboutMe: function() {
    qq.navigateTo({
      url: '/pages/logs/about'
    })
  }

})
