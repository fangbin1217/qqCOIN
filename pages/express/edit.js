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
    winner_id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var winner_id = decodeURIComponent(options.winner_id);
    this.setData({
      winner_id: winner_id
    });
    console.log(winner_id);
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
          
        }
      },
      fail: () => {
        qq.hideLoading();
        qq.showToast({
          title: '请求超时！',
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
      data: { access_token: access_token, is_coin: 1, mobile: this.data.mobile, contact_name: this.data.contact_name, address: this.data.address, province_name: this.data.region[0], city_name: this.data.region[1], area_name: this.data.region[2] },
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
          var winner_id = parseInt(this.data.winner_id);
          if (this.data.winner_id > 0) { //如果是来源中奖用户，跳转到兑奖详情页
            setTimeout(function(){
              qq.navigateTo({
                url: '/pages/express/detail?winner_id='+winner_id
              });
            }, 1500);
          }
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

  getMobile: function (e) {
    var val = e.detail.value;
    if (val) {
      this.setData({
        mobile: val
      });
    }
  },

  getContactName: function (e) {
    var val = e.detail.value;
    if (val) {
      this.setData({
        contact_name: val
      });
    }
  },

  getAddress: function (e) {
    var val = e.detail.value;
    if (val) {
      this.setData({
        address: val
      });
    }
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }

})