// index.js
Page({
  data: {
    // 需要展示的文本数组
    textArray: [
      "这是第一个文本内容。",
      "这是第二个文本内容。",
      "这是第三个文本内容。",
      "这是第四个文本内容。",
      "这是第五个文本内容。"
    ],
    // 当前展示的文本
    displayText: ""
  },

  // 随机从数组中抽取一条文本
  getRandomText: function() {
    const randomIndex = Math.floor(Math.random() * this.data.textArray.length);
    return this.data.textArray[randomIndex];
  },

  // 刷新文本
  reloadText: function() {
    const newText = this.getRandomText();
    this.setData({
      displayText: newText
    });
  },

  // 复制文本到剪贴板
  copyText: function() {
    const textToCopy = this.data.displayText;
    if (textToCopy) {
      wx.setClipboardData({
        data: textToCopy,
        success: function() {
          wx.showToast({
            title: '复制成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function() {
          wx.showToast({
            title: '复制失败',
            icon: 'none',
            duration: 2000
          });
        }
      });
    } else {
      wx.showToast({
        title: '无文本可复制',
        icon: 'none',
        duration: 2000
      });
    }
  },

  // 页面初始化时加载一条随机文本
  onLoad: function() {
    this.reloadText();
  }
});
