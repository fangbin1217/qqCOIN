// pages/login/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipsTitle: '',
    viewWidth: '',
    lotteryGiftImage: '',
    expressAddress: '',
    isAdmin: true,
    remark:'',
    region: ['省', '市', '区'], //['广东省', '广州市', '海珠区']
    customItem: '请选择'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var winner_id = decodeURIComponent(options.winner_id);
    var that = this;
    qq.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        that.setData({
          viewWidth: windowWidth
        })
      },
    })
    this.initIndex(winner_id);
  },

  initIndex: function(winner_id) {
    qq.showLoading();
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/detail', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1, winner_id: winner_id },
      success: res => {
        qq.hideLoading();
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {
          this.setData({
            winner_id: winner_id,
            tipsTitle: ret.data.tipsTitle,
            giftValue: ret.data.giftValue,
            expressUser: ret.data.expressUser,
            expressMobile: ret.data.expressMobile,
            expressAddress: ret.data.expressAddress,
            remark: ret.data.remark,
            lotteryGiftImage: ret.data.lotteryGiftImage
          });
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

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})