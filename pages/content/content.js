// pages/content/content.js
Page({
  data:{
    hotValue: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var hotValue = this.data.hotValue = wx.getStorageSync('shengao') * wx.getStorageSync('tizhong');
    this.setData({
      hotValue: hotValue
    });
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
<<<<<<< 87f450b4047d30a79b5a01dc00210107dc00273d
=======
  },
  onShareAppMessage: function() {
    return {
      title: '食谱推荐',
      path: '/pages/content/content'
    }
>>>>>>> 添加了分享功能
  }
})