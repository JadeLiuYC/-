// pages/infosubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:[
      {
        name:"男",
        checked:false
      },
      {
        name: "女",
        checked: false
      }
    ],
    date: '1990-01-01',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  chooseSkill(){
    wx.navigateTo({
      url: '../chooseskill/chooseskill',
    })
  }
})