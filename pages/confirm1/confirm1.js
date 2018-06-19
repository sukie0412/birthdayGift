// pages/page1/page1.js
var app = getApp();
var text = getApp().text;
// var input = e.detail.value;
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
      
      if (input == 0) {
        infoMess: 'xxx'
      } else {

      }
      wx.setStorageSync('text', this.data.text);
      wx.switchTab({
        url: '../confirm2/confirm2'
      }),
      this.setData({
        hiddenmodalput:true
      }),
      // if(this.data.text1.length == 0){
      //   this.setData({
      //     infoMess:'想为空蒙混过去吗'
      //   })
      // },
    wx.navigateTo({
      // url: '../page2/page2'
    })
    },
    getValue:function(e){

      this.setData({
        text1:e.detail.value
      })
      console.log(0,text1)
    },
    bindViewTap:function(){
      wx.navigateTo({
        url: '../index/index',
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