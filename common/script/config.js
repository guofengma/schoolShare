/*
备注
APP_ID: 小程序appID
count: 返回结果数量
baiduAK: 百度地图AK
apiList: api列表
userInfo: 用户信息存储（首次载入时获取）
openID: 用户唯一标识符（载入时缓存获取或者请求微信相关api获取）
skinList: “我的”页面背景列表
无线ip:192.168.1.102
*/

var url = 'http://www.yanoo.xyz:8082/school_share-0.0.1-SNAPSHOT/share'
module.exports = {
  APP_ID:'wx15734a2373afa7a8',
  APP_SECRET:'10c27dc6070ef03f708ccdbe3c072e21',
  SESSION_KEY:'',
  city: '',
  count: 20,
  openID: 0,
  userInfo:{},
  baiduAK: 'k28S8L69VGKML5GG2X6VBOKIFdhBQ6Bi',
  typeList: ["", "question", "share", "rewardhelp", "activity", "secondarymarket"],
  apiList: {
    // questionList: url + '/loadQuestionList.do',//加载问答列表
    // loadExperienceList: url + '/loadExperienceList.do',//加载问答列表
    loadTableList: url + '/loadTableList.do',//加载各类信息列表
    loadTableListByUid: url + '/loadTableListByUid.do',// 信息列表
    loadBookList: url + '/loadBookList.do',//加载图书列表
    loadCollectList: url + '/loadCollectList.do',//获取我的收藏列表
    loadShareList: url + '/loadShareList.do',//获取我的分享列表
    setUserInfo: url + '/setUserInfo.do',//更改个人资料
    loadQuesAndShareList: url + '/loadQuesAndShareList.do',
    getChatLogDetails: url + '/getChatLogDetails.do',//获取聊天记录详情
    getChats: url + '/getChats.do',//获取消息列表页
    getUnreadMessage: url + '/getUnreadMessage.do',
    getCarousel: url + '/getCarousel.do',//获取资料库最新轮播图
    searchCoursewareList: url + '/searchCoursewareList.do', //搜索课件资料
    getExperienceListByUid: url + '/getExperienceListByUid.do',
    loadUserInfoDetails: url + '/loadUserInfoDetails.do',//获取用户详情
    saveUserInfo: url + '/saveUserInfo.do',//保存用户信息
    setBioByUid: url + '/setBioByUid.do',//添加用户签名
    addToQuestion: url + '/addToQuestion.do',//添加问答
    addToFeedback: url + '/addToFeedback.do',//反馈
    deleteTableByMidAndType: url + '/deleteTableByMidAndType.do',//删除文档列表
    getQuestionListByUid: url + '/getQuestionListByUid.do',//获取用户问答列表；
    setReport: url + '/setReport.do',//举报文章
    setCollect: url + '/setCollect.do',//收藏文章
    setShare: url + '/setShare.do',//转发内容
    setAgree: url + '/setAgree.do',//点赞文章
    toggleShowWechat: url + '/toggleShowWechat.do',//显示微信号
    toggleShowQQ: url + '/toggleShowQQ.do',//显示QQ号
    getComment: url + '/getComment.do',//获取文章 评论信息
    addToComment: url + '/addToComment.do',//添加评论
    uploadFile: url + '/uploadFile.do',//上传文件
    publish: url + '/publish.do',//发布消息
    webSocket: 'ws://www.yanoo.xyz:8082/school_share-0.0.1-SNAPSHOT/websocket/',
    getMessageByMidAndType: url + '/getMessageByMidAndType.do',
    personDetail: 'https://api.douban.com/v2/movie/celebrity/',
    baiduMap: 'https://api.map.baidu.com/geocoder/v2/'
  },
  shakeWelcomeImg: url + '/images/shake_welcome.png'
}