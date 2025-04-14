// index.js
Page({
  data: {
    // 需要展示的文本数组
    textArray: [
      "如果你们能一层一层剥开我的内心，你们会发现，那颗心里写满了一句话：今天肯德基疯狂星期四，谁请我吃？",
      "穿过挪威的森林，让我走进你的梦里，夕阳落在我的铠甲，王子不一定骑白马，你不必故作冷淡，我也不想做最后的纠缠。最后问一句，疯狂星期四，谁请吃肯德基？",
      "后来不是报警了吗 那个男的隔了一个星期才找到 把他的父母和我朋友的父母喊到警察局里商量这件事到底怎么办 要不就结婚把这个孩子生下来 要么就打掉并赔偿我朋友30w 男方不想要这个孩子但是父母手头也没有这多钱 硬着头皮跟我朋友结婚了 彩礼才拿了八万 结婚后男的经常不归家在外面玩 我朋友挺着大肚子在家真的不容易 然后我实在看不下去了 就去照顾我朋友 我准备拿起手机给他打电话 又不小心点开肯德基 才想起来今天是肯德基Fucking Crazy Thursday 疯狂星期四 谁请我吃我继续说",
    `为防止长期摸鱼导致变笨，特此准备了几道题考考你!

    1.至今思项羽，不()过江东。
    
    2.阳春布()泽，万物生光辉。
    
    3.书籍是人类进步的阶梯。——高尔( )
    
    4.世人笑我太()癫，我笑他人看不穿。
    
    5.老夫聊发少年()，左牵黄，右擎苍。
    
    6.危楼高百尺，手可摘()辰。
    
    7.君问归期未有( )，巴山夜雨涨秋池。
    
    8.( )面边声连角起，千嶂里，长烟落日孤城闭。
    
    9.料峭春风吹酒醒,( )冷,山头斜照却相迎。
    
    10.( )闻琵琶已叹息，又闻此语重唧唧。
    
    11.锦瑟无端()()弦，一弦一柱思华年。`,
      "我本是夜上海的一名贫穷又自强的黄包车夫，看遍了这个城市的繁华和热闹，也体验了这个社会的冷漠与无情。直到那一天，我的车上坐上了一位穿着四季歌的千金小姐，我感到了我平静已久的内心再一次颤动，我知道不应该，但我却还是爱上了。我知道我的身份地位配不上她，只求有个好心人给我39.9，让我买一个疯狂星期四热辣鸡桶，带给她舔狗的关怀。",
      "其实我不介意她每天打游戏，因为我也爱打游戏，甚至她在游戏里小号找旁边人，给旁边充钱也没事。这次离婚的导火线是，我发现存折少了3万块，就问她钱哪去了。掘我当场就给了她两耳光，要是别的我也就忍了，你和我说今天疯狂星期四，却不给我买蛋挞，这我是忍不了的"
      , "生了孩子以后一直瘦不下去 老公像变了一个人似的 对我又打又骂 我好恨他 正当我打开手机想报警的时候 不小心打开了肯德基 想起来今天原来是疯狂星期四 谁请我吃肯德基？",
      "今日、我人生の中で最黑暗、最黑暗の時間ですが、わたし倒垃圾やログホールのような友人も不在、自分自身を消化すること挺好、天亮まで睡って目を醒ます、疲れた别の人にも不想疲れ、周围の友人に否定的な感情を影响たくない。但かし、我は私の友人が私に物質的な给我ほしい、今日はKFC疯狂木曜日です、来几个たまで朋友はKFCを食べるため请我したいです。"
      , "暗夜里，他的声音如恶魔般响起：“替我生个孩子！”他是尊贵的商界帝王，翻手为云，覆手为雨，而她只是他挑中的一枚棋子。十个月后，她被迫生下一个孩子逃之夭夭……当她再次出现时，她是落魄的小公司负责人，而他掌握她的生死。他强势夺情，“该死的女人，不想破产的话，今天就和我一起去吃疯狂星期四！今天原味鸡和蛋挞都值得！”", "刚给对象洗完衣服，手搓的，平时洗之前手都要消5遍毒。今天因为漏了一遍被对象打了两巴掌，现在心里有点委屈。今天疯狂星期四，谁请我吃KFC，我边吃边跟你说她平时都怎么骂我的"
      , "离婚了 前夫联合小三一起报复我 我已经做好了殊死一搏的准备 谁请我吃疯狂星期四 倾听我的复仇计划"
      , "蛮讽刺的，从凌晨开始等到现在，没有一个人和我说生日快乐。我的亲人没有说，朋友也没有说，我最在乎的人也没有说，直到现在我才明白：原来今天不是我生日。但是今天是肯德基疯狂星期四！谁请我吃？"
      , `我在兰州拉面馆愤怒的甩开了筷子
      - 老板，怎么一点肉没有
      - 穷逼事儿还挺多，十几块你能吃到什么肉？
      被羞辱的我，痛苦，落泪，难受，突然，我看到了一个广告：
      19.9，疯狂星期四，20个鸡块，兰州拉面一周的肉量！谁！谁请我吃`
      , `我直说了吧 我这么多年从来没要求过你们什么 之前看别人盛气凌人的还有朋友小心翼翼哄着 到我这里只有大家欺负我拿我当玩物 我说过什么了吗 我从不生气 也经常一笑而过 我不跟你们计较因为我在乎你们 那你们呢？你们真的在意我吗？如果真的在乎我的话今天肯德基疯狂星期四 谁请我吃？`,
      `他本是豪门少爷
      在新婚前夜却发现未婚妻和兄弟在喜床上翻滚
      她深夜买醉却撞上醉酒的他
      一夜痴缠他醒来后不见她的踪影
      只见床头压着一张纸：
      今 天 肯 德 基 疯 狂 星 期 四`,
      `正确约pao 的标准流程：一般都上午10点以后，女的打扮打扮，男的取点钱，见面了，女的假装
      不好意思，男的一般都夸女的比照片好看，然后问女的爱吃啥，就领吃饭去了，男的开始展示自己的幽默，然后溜达，看电影，一晃一下午，女的也不说回家。男的寻思这是没跟我呆够啊，就说咱俩唱歌去吧，女的说太晚了，男的说没事，一会我送你回家。一般这阶段男的不会把女的咋地，这时候时间也有点晚了，男的说走吧我送你回家，女的还得寻思，这男的是没看上我啊，心里有点小失落，两人心里就开始寻思怎么能不回家。男的说这么晚了，你回家我也不放心啊，我有点没待够，女的说我必须得回家，男的说我送你，结果两人墨迹墨迹的10 分钟没走几米。后来女的说我回不去家了，理由可能是寝室关门了，或者朋友对象回来了，男的一本正经的说，要不我给你找个宾guan吧，女的说，不过你得答应不碰我，男的说，放心吧，我不是坏人，然后微微一笑深藏功与名。然后两人就进宾guan了，先聊会天看会电视，男人时不时的说女的，你长的真好看，男的说，你明天还上班或者上学，早点睡吧，女的还得装不好意思，男的说我能抱着你睡么，什么也不干。女的说行，男的就狠狠的抱着女的说，亲爱的，我这么抱着你，你就不冷了，女的也抱上了，男的说我可以亲你吗，女的也默女的也默认了，可是一般这时候还不会发生啥。这时候男的想有进一步的动作，开始tuo女的衣服，tuo到底线，女的这时候开始拒绝，推开这个男的，男的一看情行不行，就说宝贝对不起，我太冲动了，你要知道我是个男的，何况你还长的这么好看。女的这时候就把男的当亲人，讲述自己情路坎坷，人生迷茫，男的这时候就开始展现自己的温柔，宝贝你要是早遇见我就好了，一定不会让你吃这么多苦，你别怕，还有我呢。突破了女的的心灵防线，大家就都放的开了，女的开始亲男的，然后男的翻身小声说道：今天肯德基疯狂星期四谁请我吃？`,
      `今天是2024年最后一次KFC疯狂星期四，前51个你们都没请我吃，希望你们不要留下遗憾，把握住最后一个星期四，也把握住我`,
      
      `还是分手了，谢谢大家。我们最终和平分手，其实从朋友到恋人我们发生了挺多事情，能走到一起也是很不容易。我喜欢你，很喜欢你，对啊，我总问我自己为什么还能坚持，可能没有答案，我没有备胎，
      也不玩暧昧，我所有的脾气爱笑爱哭都给了你，我能为你做的最后一件事竟然是走出你的人生。我一点都不后悔，更谢谢你教会我成长。我也不知道这是谁写的，挺感动的我就复制下来了，看到这里说明你很在乎我，天气很冷能请我喝热咖啡吗，如果可以我想吃两杯。如果不可以，今天肯德基疯狂星期四，我想吃八个蛋挞，谢谢。`,
      `有没有要找工作的？我这边内推入职，朝九晚六，做五休二，全国都有分公司。前三个月试用期每个月8000块，满三个月转正月薪26000，一年后给你买车，两年后给你买房。有意者点击头像私聊，并交50块押金。

      （不是想吃肯德基）`,
      `失业了，最近没有怎么哭了，我现在慢慢变好了吧！以前有多快乐，现在就有多难过。从人间烟火的日常，到红着眼睛告别，消失在彼此的世界里，很痛，也很难。今天是肯德基疯狂星期四，v我50，抚慰我支离破碎的心。`,
      `八条建议:

      1.谈恋爱首先要找你爱的，如果结婚就要找爱你的
      2.千万别输在“等”这个字身上
      3.永远留住70%的神秘
      4.不要低估任何一个人
      5.别把没教养当做有气场
      6.谈恋爱可以穷，结婚不可以
      7.谈恋爱一定要找我
      8.v50请我吃肯德基疯狂星期四
      牢记第8条，前7条没什么用`,
      `假如你是李华，你的英国笔友Peter给你写了一封信，向你询问你周四的安排，请你写一封回信。

      写作要点:
      
      你要去肯德基参加"疯狂星期四"活动。
      向他介绍"疯狂星期四"的活动。
      要求他V你50。
      注意事项:
      
      1.行文流畅，包含所有要点，无语法错误，可适当自由发挥,80词左右
      
      2.不出现真实的人名地名。
      
      3.请将Peter的50 V给我，否则不给分。
      
      
      
      Dear Peter
      
      I will introduce my plan in this Thurday for you，I will go to KFC and have__________________________________________________________________________________________________________________________________________________________________________________________
      
      I'm looking forward to your reply and the V 50 form you.
      
      Yours
      
      LiHua`,
      `有没有人和我一样很讨厌疯狂星期四的文案，尤其是朋友一发就是发一堆，后面还有人跟着发哈哈哈哈，我不知道笑点在哪里，但是我又不好意思叫他们不要发，然后我就想到一个办法，v我50今天疯狂星期四，我边吃边告诉你这个办法是什么`,
      `有一个国王叫肯，娶了一个歌姬为妾。国王的国家矿产资源发达，国王十分宠爱歌姬，将一部分矿产给了歌姬的家族开发，但歌姬十分贪婪，为了实现矿产垄断，歌姬把其他同行的矿井都给封了，当国王听说他贴身武士的矿井也遭到封闭，于是把歌姬抓起来审判，歌姬问定什么罪，国王说:死罪。后来民间传唱此事：“肯的姬封矿刑期死，为我武士`,
      `Actually, I wanted to reply to your WeChat last night, but I was afraid of bothering you with such a long post. Maybe I'm not that busy now
      From the contact with you during this period, I feel that you are slow to warm up, a bit closed off and protective of yourself. I have always believed that as long as time accumulates, it can be changed. I am not someone who gives up easily. The only thing that can make me give up is that he has always regarded me as a friend, while I have been doing useless work. I feel like you have been resisting me, indirectly rejecting me. Maybe it's because you have someone else in your heart? Or maybe you are not interested in developing a relationship now and want to focus on your studies and work. If the other party is not very interested in a relationship, no matter how hard I try, it will be useless. I comfort myself that you are still conflicted and have no interest in dealing with these things, so I can wait. However, the premise of waiting is mutual. I don't like to disturb others and cause trouble for them. I have been a little tired recently because I don't know if I am being stranded. If you don't like me or have no feelings for me, I respect you. After all, liking you is my business and has nothing to do with you. You don't have to feel embarrassed or refuse me. If you have any feelings for me, I will bravely continue. If not, I will tactfully walk away and slowly let go. I know you also have a lot to say, but now I'm hungry. Can you give me 50 yuan to order takeout first? I heard that 50 yuan from KFC on Thursday can make me full.`,
    `我00年，是个男大学生，身高178，相貌普通，在网上认识了一个少妇，他骗我说她28岁，因为之前学业事业都比较忙且工作环境异性少，所以没时间谈恋爱一直单身，她给我的感觉就是温柔体贴，而且身高168+，长相算是御姐。我本人其实一直喜欢御姐一点的女生，大概认识了一个月就在她的甜言蜜语中沦陷了，虽然是网恋，但是她会每天抽出所有空闲时间陪我聊天打电话，声音也挺好听，大概这段美好网恋关系持续了三个月。但是我前段时间无意中跟她打电话时听到了一个男人和小孩玩闹的声音，我就立马逼问她，她一开始支支吾吾的把我电话挂了，过了一会儿才又打电话过来给我解释说我听错了是电视剧声音，我也不傻，她很明显的骗我，在我的逼问下她告诉了我实情，她说她是因为年纪到了被迫被父母安排的结婚，按部就班的结婚生子，现在有一个孩子三岁，而且她也不是28，他已经32了，然后她就说我是他的真爱，如果我愿意可以当什么都没都没发生过，我们继续这样，一开始我是特别生气要和他断了联系，但是还是没忍住接了她的电话，她也一直这样哄我，也就一直这样不清不楚的联系着。直到最近她说她不想网恋了，她要来我家找我，我特别害怕，这样不清不楚的在网上还好，真到了现实中该怎么办，但是她一直逼问我是在哪个家，我也其实有点期待和他见面，就还是和她说了我在肯德基等你V我50`,
    `招美国陪读
    本人2025-2027打算去美国留学，但家人朋友都在国内，所以想找个人陪我在美国留学。飞机机票、吃住全部报销。
    
    一个月大概能有20W可商议。但是要能配合我的时间，需要会煮饭和打扫卫生得和我一起住，家里会安排house。主要内容是陪我玩，出去旅游，监督我学习等等。你也可以有自己的爱好，我会陪你一起玩。
    
    需要一些条件：
    1.能流利的普通话沟通最好是中国出生，母语中文，英语流利更好。
    2.因为我喜欢拍照，对方必须会构图。
    3.我是i人，嗯，对方是i人e人都行，要帮我按电话。
    4.如有符合条件的人推荐，我可以再承担你在美国的所有生活娱乐、购物的消费。
    5.最后报名费50因为今天疯狂星期四`,
    `关于我的瓜：1.首先谢谢大家对这件事情的关心，我事先根本没有想到会这样，既然已经出这件事情了，那我不如直接讲清楚吧，也不是博得大家的同情什么的，只是回应一下。2.那人所发出来的聊天记录、照片、视频、都是真的，无一造假，可我从未将这些东西流传在任何网络平台上面，至于那个人是怎么有的，我也不清楚。3.虽然这事出了，但我没有不尊重任何人，我不认为我有错，所以我不会认错。4.最后，想知道到底发生了什么的，小窗转我88请我吃 KFC疯狂星期四，小龙虾超级塔可秘制香辣我要吃四个，我把故事从头到尾给你编一遍`
    ],
    
    // 当前展示的文本
    displayText: "",
    currentIndex: 0, // 新增的属性
    
  },

  // 随机从数组中抽取一条文本
  initFirstindex: function () {
    const randomIndex = Math.floor(Math.random() * this.data.textArray.length);
    this.data.currentIndex =randomIndex;
  },

  // // 刷新文本
  // reloadText: function () {
  //   const newText = this.getRandomText();
  //   this.setData({
  //     displayText: newText
  //   });
  // },


getRandomText: function () {
    const nextIndex = this.data.currentIndex % this.data.textArray.length;
    console.log('文案个数', this.data.textArray.length);
    return this.data.textArray[nextIndex];
},

reloadText: function () {
    const newText = this.getRandomText();
    this.setData({
        displayText: newText,
        currentIndex: this.data.currentIndex + 1 // 更新索引值
    });
    if(this.data.currentIndex % 5 === 0 )
    this.interstitialAd.show().catch((err) => {
      console.error(err)
    })
},

  // 复制文本到剪贴板
  copyText: function () {
    const textToCopy = this.data.displayText;
    if (textToCopy) {
      wx.setClipboardData({
        data: textToCopy,
        success: function () {
          wx.showToast({
            title: '复制成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function () {
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
  // 专门的广告初始化方法
  initInterstitialAd() {
    // 将广告实例挂载到page对象上 (this.interstitialAd)
    this.interstitialAd = null;
    if (wx.createInterstitialAd) {
      this.interstitialAd = wx.createInterstitialAd({ 
        adUnitId: 'adunit-40570ae67d033089' 
      });
      this.interstitialAd.onLoad(() => {
        console.log('插屏广告加载成功');
      });
      this.interstitialAd.onError((err) => {
        console.error('插屏广告错误:', err);
      });
      this.interstitialAd.onClose((res) => {
        console.log('广告关闭', res);
        // 可以在这里添加关闭后的逻辑
      });
    }
  },
  // 页面初始化时加载一条随机文本
  onLoad: function () {
    this.initFirstindex()
    this.reloadText();
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
    this.initInterstitialAd(); // 改为调用初始化方法
  },
  onShareAppMessage: function (res) {
    return {
      title: '彻底疯狂', 
      path: '/pages/index/index', // 分享路径
      imageUrl: '/images/share.png', // 分享图片路径（可选）
      success: function(res) {
        // 分享成功后的回调
        console.log('分享成功', res);
      },
      fail: function(res) {
        // 分享失败后的回调
        console.log('分享失败', res);
      }
    }
  }
});
