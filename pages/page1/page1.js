// pages/page1/page1.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //可以通过hidden是否隐藏弹出框的属性，来指定那个弹出框
    hiddenmodalput:true,
  },
    modalinput:function(){
      this.setData({
        hiddenmodalput: !this.data.hiddenmodalput 
      })
    },
    //取消按钮
    cancel:function(){
      this.setData({
        hiddenmodalput:true
      })
    },
    //确认按钮
    confirm:function(){
      this.setData({
        hiddenmodalput:true
      }),
      wx.navigateTo({
        url: '../letter/letter'
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  }
})