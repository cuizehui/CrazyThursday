// index.js
Page({
  data: {
    // 需要展示的文本数组
    textArray: [
      "如果你们能一层一层剥开我的内心，你们会发现，那颗心里写满了一句话：今天肯德基疯狂星期四，谁请我吃？",
      "他本是豪门少爷在新婚前夜却发现未婚妻和兄弟在喜床上翻滚她深夜买醉却撞上醉酒的他一夜痴缠他醒来后不见她的踪影只见床头压着一张纸：今 天 肯 德 基 疯 狂 星 期 四",
      "穿过挪威的森林，让我走进你的梦里，夕阳落在我的铠甲，王子不一定骑白马，你不必故作冷淡，我也不想做最后的纠缠。最后问一句，疯狂星期四，谁请吃肯德基？",
      "后来不是报警了吗 那个男的隔了一个星期才找到 把他的父母和我朋友的父母喊到警察局里商量这件事到底怎么办 要不就结婚把这个孩子生下来 要么就打掉并赔偿我朋友30w 男方不想要这个孩子但是父母手头也没有这多钱 硬着头皮跟我朋友结婚了 彩礼才拿了八万 结婚后男的经常不归家在外面玩 我朋友挺着大肚子在家真的不容易 然后我实在看不下去了 就去照顾我朋友 我准备拿起手机给他打电话 又不小心点开肯德基 才想起来今天是肯德基Fucking Crazy Thursday 疯狂星期四 谁请我吃我继续说",
      "我本是夜上海的一名贫穷又自强的黄包车夫，看遍了这个城市的繁华和热闹，也体验了这个社会的冷漠与无情。直到那一天，我的车上坐上了一位穿着四季歌的千金小姐，我感到了我平静已久的内心再一次颤动，我知道不应该，但我却还是爱上了。我知道我的身份地位配不上她，只求有个好心人给我39.9，让我买一个疯狂星期四热辣鸡桶，带给她舔狗的关怀。"
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
