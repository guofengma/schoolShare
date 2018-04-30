// pages/home/home.js
// import list from "../../templates/list/list.js";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '欢迎进入！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //搜索框
    inputShowed: false,
    inputVal: "",
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    //最新消息列表
    listData:{
      share: [
        {
          type: "share",
          nickName: "媛媛",
          avatarUrl: "http://p3.music.126.net/NgCeNHxZcuqCsJTo_tdRKA==/18637821604170727.jpg?param=30y30",
          coverUrl: "http://img1.gtimg.com/tj/pics/hv1/151/175/2020/131395276.jpg",
          title: "四六级又没过？这是我最后一次抢救你了（碾压四六级全套经验）",
          content: "英语四六级和普通的日常英语不一样，毕竟是考试，要求的是笔试和听力，并没有口语，所以提升起来也可以相对的快一些。所以呢，我觉得只要有一点点的英语基础，加上自己的重视，过4，6级其实并不难。",
          comment: "33",
          love: "3",
          uid: "11",

        }, {
          type: "wenda",
          nickName: "holy俊辉",
          avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053731750196.jpg",
          title: "标题标题标题标题标题",
          content: "摘要摘要",
          comment: "33",
          love: "3",
          uid: "22",
          isLove: true
        }, {
          type: "share",
          nickName: "怀左同学",
          avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053732525556.jpg",
          title: "有钱之前，先让自己值钱",
          content: "刚到北京的那几天，朋友正处于失业期，我们挑了一个时间，在紫阳公园聊了一下午。 工作后的人，通常比还在学校的同龄人成长要快，一个人",
          comment: "33",
          love: "3",
          uid: "33"
        }, {
          type: "share",
          nickName: "媛媛",
          avatarUrl: "http://p3.music.126.net/NgCeNHxZcuqCsJTo_tdRKA==/18637821604170727.jpg?param=30y30",
          title: "四六级又没过？这是我最后一次抢救你了（碾压四六级全套经验）",
          content: "英语四六级和普通的日常英语不一样，毕竟是考试，要求的是笔试和听力，并没有口语，所以提升起来也可以相对的快一些。所以呢，我觉得只要有一点点的英语基础，加上自己的重视，过4，6级其实并不难。",
          comment: "33",
          love: "3",
          uid: "11"
        }, {
          type: "share",
          nickName: "怀左同学",
          avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053732525556.jpg",
          title: "有钱之前，先让自己值钱",
          content: "刚到北京的那几天，朋友正处于失业期，我们挑了一个时间，在紫阳公园聊了一下午。 工作后的人，通常比还在学校的同龄人成长要快，一个人",
          comment: "33",
          love: "3",
          uid: "33"
        }],
      quiz: [{
        type: "wenda",
        nickName: "holy俊辉",
        avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053731750196.jpg",
        title: "福大东门怎么走？",
        content: "摘要摘要",
        comment: "4",
        love: "3",
        uid: "22",
        isLove: true
      }, {
          type: "quiz",
        nickName: "holy俊辉",
        avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053731750196.jpg",
        title: "这里是问答",
        content: "摘要摘要",
        comment: "4",
        love: "3",
        uid: "22",
        isLove: true
      },],
      lectures: [{
        type: "wenda",
        nickName: "holy俊辉",
        avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053731750196.jpg",
        title: "福大东门怎么走？",
        content: "摘要摘要",
        comment: "4",
        love: "3",
        uid: "22",
        isLove: true
      }, {
        type: "quiz",
        nickName: "holy俊辉",
        avatarUrl: "https://pic.qqtn.com/up/2018-4/15241053731750196.jpg",
        title: "这里是问答",
        content: "摘要摘要",
        comment: "4",
        love: "3",
        uid: "22",
        isLove: true
      },]

    },
    navtab: {
      list: [{
        id: 'quiz',
        title: '校内问答'
      }, {
        id: 'share',
        title: '经验分享'
      }, {
          id: 'lectures',
        title: '讲座'
      }, {
          id: 'activity',
        title: '社团/团立项活动'
      }, {
        id: 'reward',
        title: '悬赏求助'
      }, {
          id: ' preferential',
        title: '商家优惠'
      }, {
        id: ' lostandfound',
        title: '失物招领'
      }, 
       {
         id: ' 二手市场',
        title: '二手市场'
      },{
          id: 'employ',
        title: '招聘日历'
      }
      ],
      selectedId: 'share',
      scroll: true,
      height: 45
    }
  },//data
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({

    })
    // list.list.apply(this, []);
  },
  enterDetail:function(){
    console.log("enter");
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.showToast({
    //   title: '加载中',
    //   icon: "loading"
    // })
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
 
  //nav点击事件
  // tabClick: function (e) {
  //   this.setData({
  //     sliderOffset: e.currentTarget.offsetLeft,
  //     activeIndex: e.currentTarget.id
  //   });
  // },
  tabchange:function(e){
    var that = this;
    console.log(e.detail, that.data.navtab.selectedId);
    
    that.data.navtab.selectedId=e.detail;
    that.setData({
      navtab: that.data.navtab
    });
  }
})