// pages/login/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coins:12,
    cost:121,
    hasRecord: true,
    records: [],
    page: 1,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    this.initIndex();
    
  },

  initIndex: function() {
    
  },

  pageChange: function({ detail }) {
    const type = detail.type;
    if (type === 'next') {
      this.setData({
        page: this.data.page + 1
      });
    } else if (type === 'prev') {
      this.setData({
        page: this.data.page - 1
      });
    }
    this.search();
  },

  search: function() {

  }

})