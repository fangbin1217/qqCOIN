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
    var that = this;
    qq.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        that.setData({
          viewWidth: windowWidth,
          lotteryGiftImage: app.globalData.imgHost + 'support/reward0202.png'
        })
      },
    })
    this.initIndex();
  },

  initIndex: function() {
    this.setData({
      tipsTitle: '2019年第1期抽奖',
      giftValue: '2019年鼠年生肖纪念币1枚',
      expressUser: '张三',
      expressMobile: '18888888888',
      expressAddress: '浙江省杭州市拱墅区文岚街158号X楼N幢1单元2902室',
      remark: '审核不通过，快递信息错误，请到（关于）页面联系管理员处理'
    });
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})