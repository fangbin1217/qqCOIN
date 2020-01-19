// pages/login/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: '暂无记录！',
    tipsImage: '../../images/noRecord.png',
    color: '#1c2438',
    lottery_codes: [],
    my_codes: [],
    records: [],
    page: 1,
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        
  },

  onShow: function (options) {
    this.initIndex();
  },


  initIndex: function() {
    qq.showLoading();
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/records', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1, page: this.data.page },
      success: res => {
        qq.hideLoading();
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {
          this.setData({
            tips: ret.data.tips,
            tipsImage: ret.data.tipsImage,
            color: ret.data.color,
            lottery_codes: ret.data.lottery_codes,
            my_codes: ret.data.my_codes,
            reward_codes: ret.data.reward_codes,
            records: ret.data.list,
            page: ret.data.page,
            total: ret.data.total_page
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
  }

})