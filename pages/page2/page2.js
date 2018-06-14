// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ccc:{}
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
    // var tie = document.getElementById('te');
    // console.log(88,tie)
    function tab(date) {
      
      var oDate = new Date();
      var nY = oDate.getFullYear();
      var nM = oDate.getMonth();
      var nD = oDate.getDate();
      var newDate = new Date(nY, nM, nD, 0, 0, 0);
      var date = date.split('-');
      var lastDate = new Date(date[0], (date[1] - 1), date[2], 0, 0, 0);
      var result = '';
      if (newDate.getTime() > lastDate.getTime()) {
        result = date[0] + '年' + date[1] + '月' + date[2] + '日到今天已经过去了（' + (newDate.getTime() - lastDate.getTime()) / 86400000 + '）天了';
      } else {
        result = date[0] + '年' + date[1] + '月' + date[2] + '日到今天还有（' + Math.abs(newDate.getTime() - lastDate.getTime()) / 86400000 + '）天了';
      }
      // time.innerHTML = result;
      return result;

    }
    console.log(tab('2019-09-20'));
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

 
})