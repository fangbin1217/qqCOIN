// pages/login/index.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['省', '市', '区'], //['广东省', '广州市', '海珠区']
    customItem: '请选择',
    contact_name: '',
    mobile: '',
    address: '',
    isLoading: false,
    isDisabled: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    
  },

  onShow: function() {
    this.setData({
      isLoading: false,
      isDisabled: false
    });
    this.initIndex();
  },

  initIndex: function() {
    qq.showLoading();
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/express', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1 },
      success: res => {
        qq.hideLoading();
        console.log(res.data)
        var ret = res.data;
        if (ret.code == 0) {
          this.setData({
            contact_name: ret.data.contact_name,
            mobile: ret.data.mobile,
            region: ret.data.region,
            address: ret.data.address

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

  doStart: function() {
    this.setData({
      isLoading: true,
      isDisabled: true
    });
    var access_token = qq.getStorageSync('access_token') || '';
    qq.request({
      url: app.globalData.serverHost+'coin/saveexpress', //接口地址
      method: 'post',
      data: { access_token: access_token, is_coin: 1 },
      success: res => {
        console.log(res.data)
        var ret = res.data;
        this.setData({
          isLoading: false,
          isDisabled: false
        });
        if (ret.code == 0) {
          qq.showToast({
            title: ret.msg,
            icon: 'success',
            duration: 1500,
            mask: true
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
    });
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})