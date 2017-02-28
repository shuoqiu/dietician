// pages/collection/collection.js
var app = getApp();
Page({
  data:{
    userInfo: {},
    inputValueShengao: '',
    inputValueTizhong: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.getUserInfo(function(userInfo) {
      that.setData({
        userInfo: userInfo
      });
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  findManuals: function() {
    wx.navigateTo({
      url: '../manuals/manuals',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  findContent: function() {
    var that = this;
    if(that.data.inputValueShengao === '' || that.data.inputValueTizhong === '') {
      wx.showToast({
        icon: 'success',
        title: '输入框为空',
        duration: 1000
      });
    }else {
      wx.navigateTo({
      url: '../content/content',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    }
  },
  restart: function() {
    var that = this;
    if(that.data.inputValueShengao != '' || that.data.inputValueTizhong != '') {
      that.setData({
        inputValueShengao: '',
        inputValueTizhong: ''
      });
    }else {
      wx.showToast({
        icon: 'success',
        title: '输入框为空',
        duration: 1000
      })
    }
  },
  save: function() {
    var _this = this;
    if(_this.data.inputValueShengao != '' || _this.data.inputValueTizhong != ''){
      _this.inputShengao();
      _this.inputTizhong();
      wx.showToast({
        icon: 'success',
        title: '保存成功!',
        duration: 1000
      });
    }else {
      wx.showToast({
        icon: 'success',
        title: '输入框为空',
        duration: 1000
      });
    }
  },
  inputShengao: function(e) {
    var _this = this;
    _this.setData({
      inputValueShengao: e.detail.value
    });
    try {
      wx.setStorageSync('shengao', e.detail.value);
    } catch(e) {
      console.warn('缓存出现问题');
    }
    // console.log(this.data.inputValueShengao);
  },
  inputTizhong: function(e) {
    var _this = this;
    _this.setData({
      inputValueTizhong: e.detail.value
    });
    try {
      wx.setStorageSync('tizhong', e.detail.value);
    } catch(e) {
      console.warn('缓存出现问题');
    }
  }
})