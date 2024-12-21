// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
App({
  // 小程序启动时的生命周期函数
  onLaunch: function() {
    console.log('小程序启动');
  },

  // 小程序显示时的生命周期函数
  onShow: function() {
    console.log('小程序显示');
  },

  // 小程序隐藏时的生命周期函数
  onHide: function() {
    console.log('小程序隐藏');
  },

  // 全局数据，供全局访问
  globalData: {
    userInfo: null
  }
});