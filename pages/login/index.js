// pages/login/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginImage:'',
    viewHeight:null,
    viewWidth:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    qq.getSystemInfo({
      success: function (res) {
        that.setData({
          viewWidth: res.windowWidth,
          viewHeight: res.windowHeight
        })
      },
    })

    this.setData({
      loginImage: app.globalData.imgHost + 'support/login0114.png'
    });
  },

  login: function () {
    qq.showLoading({
      title: '正在登录..',
    })
    app.login();
    app.userInfoReadyCallback = res => {
      qq.hideLoading();
      qq.switchTab({
        url: '/pages/index/index',
        success: function (e) {
          
        }
      })
    }
  }
})