const app = getApp();
var InterstitialAd = null;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank_city:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bank_city = decodeURIComponent(options.bank_city);
    if (bank_city) {
      this.setData({
        bank_city: app.globalData.imgHost + bank_city
      });
    }

    this.myInit();
  },

  myInit: function() {
    setTimeout(function(){
      /* 建议放在需要展示插屏广告的时机执行 */
      InterstitialAd.show().catch((err) => {
        console.error('show',err)
      });
    },2000);
  },

  onReady: function() {
    /* 建议放在onReady里执行，提前加载广告 */
    InterstitialAd = qq.createInterstitialAd({
      adUnitId: '69e08fdaa9bbc548902bc04b8d144eed'
    });
    InterstitialAd.load().catch((err) => {
      console.error('load',err)
    });       
    InterstitialAd.onLoad(() => {
      console.log('onLoad event emit') 
    });
    InterstitialAd.onClose(() => {
      console.log('close event emit')
    });
    InterstitialAd.onError((e) => {
      console.log('error', e)
    });
  }

  
})