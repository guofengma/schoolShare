// component/list-1/list-1.js
var fetch = require('../../common/script/fetch')
var config = require('../../common/script/config')
var util = require('../../utils/util')
const app = getApp();
var api = config.apiList,
  disAgreeClickFlag = true,
  agreeClickFlag = true,
  listTypeIndex = 0;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    listType: {
      type: String,
      value: ""
    },
    isShowDelete:{
      type: String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _toUserDetail: function () {
      // console.log("enterIMG");
    },
    enterDetail:function(index){
      var that = this;
      let typeIndex = config.typeList.indexOf(that.data.listType);
      let { id } = that.data.list[index];
      console.log(that.data.list[index] ,typeIndex)
      let _url = `../../pages/listDetail/listDetail?mid=${id}&typeIndex=${typeIndex}`;
      wx.navigateTo({
        url: _url
      });
    },
    checkEnter: function (e) {
      var that = this;
      let { mid, index } = e.currentTarget.dataset;
      let { name, uid } = e.target.dataset;
      var _avaterUrl = "../../pages/personal/personal?uid=" + uid;
      // 判断当前点击对象
      switch (name) {
        case "avater-img":
          wx.navigateTo({
            url: _avaterUrl
          });
          break;
        case "more":
          wx.showActionSheet({
            itemList: ['收藏', '举报'],
            success: function (res) {
              if (!res.cancel) {
                switch (res.tapIndex) {
                  case 0:
                    that.toggleCollect(mid, index);
                    break;//收藏
                  case 1:
                    that.report(mid, index);
                    break;//举报
                }
              }
            }
          });
          break;
        default:
          that.enterDetail(index);
          break;
      }
    },
    enterPersonal: function (e) {
      var that = this;
      var _uid = e.currentTarget.dataset.uid;
      wx.navigateTo({
        url: _avaterUrl
      });
    },
    showToastSu: function (arr) {
      wx.showToast({
        title: arr,
        icon: 'success',
        duration: 1000
      });
    },
    changeAct: function (e) {
      let that = this;
      let data = e.currentTarget.dataset;
      let name = e.target.dataset.name;
      // console.log(e);
      switch (name) {
        case "useless":
          that.toggleDisagree(data);
          break;
        case "useful":
          that.toggleAgree(data);
          break;
        case "delete":
          that.deleteByUid(data);
        break;
      }

    },
    deleteByUid(dataArr){
      var that = this;
      util.showConfirmModal.call(that,"确定要删除该条消息？！",function(){
        var myEventDetail = { deleteFlag: true,...dataArr} // detail对象，提供给事件监听函数
        var myEventOption = {} // 触发事件的选项
        that.triggerEvent('observeDelete', myEventDetail, myEventOption)
      })
    },
    toggleCollect: function (mid, index) {//切换收藏
      var that = this;
      let nowFlag = that.data.list[index].collectFlag;
      let typeIndex = config.typeList.indexOf(that.data.listType);
      fetch._get.call(that, api.setCollect, {
        type: typeIndex,
        mid: mid,
        uid: config.openID,
        collectFlag: nowFlag
      }, function () {
        that.data.list[index].collectFlag = nowFlag == 0 ? 1 : 0;
        that.setData({
          list: that.data.list
        })
        if (nowFlag === 0) {
          that.showToastSu("收藏成功！");
        } else {
          that.showToastSu("取消收藏成功！");
        }
      }, function () {

        console.log("toggleAgree fail");
      })

    },
    report: function (mid, index) {//举报
    let that = this ;
      let nowFlag = that.data.list[index].reportFlag;
      let typeIndex = config.typeList.indexOf(that.data.listType);
      if (nowFlag === 0) {
        fetch._get.call(that, api.setCollect, {
          type: typeIndex,
          mid: mid,
          uid: config.openID,
          collectFlag: nowFlag
        }, function () {
          that.data.list[index].reportFlag = 1;
          that.setData({
            list: that.data.list
          })
          that.showToastSu("举报成功！");
        }, function () {

          console.log("toggleAgree fail");
        })
      } else {
        that.showToastSu("已经举报过了！");
      }

    },
    toggleDisagree: function (dataArr) {

      if (disAgreeClickFlag) {
        disAgreeClickFlag = false;
        var that = this;
        var nowFlag = that.properties.list[dataArr.index].disagreeFlag;
        let typeIndex = config.typeList.indexOf(that.data.listType);
        fetch._get.call(that, api.setDisagree, {
          ...dataArr,
          uid: config.openID,
          type: typeIndex,
          disagreeFlag: nowFlag
        }, function (res) {
          that.properties.list[dataArr.index].disagreeFlag = nowFlag == 0 ? 1 : 0;
          that.setData({
            list: that.properties.list
          })
          disAgreeClickFlag = true;
        }, function () {
          console.log("disagreeFlag fail");
        })

      }
    },
    toggleAgree: function (dataArr) {
      if (agreeClickFlag) {
        var that = this;
        agreeClickFlag = false;
        let typeIndex = config.typeList.indexOf(that.data.listType);
        let nowFlag = that.data.list[dataArr.index].agreeFlag;
        fetch._get.call(that, api.setAgree, {
          ...dataArr,
          type: typeIndex,
          uid: config.openID,
          agreeFlag: nowFlag
        }, function () {
          that.data.list[dataArr.index].agreeFlag = nowFlag == 0 ? 1 : 0;
          that.setData({
            list: that.data.list
          })
          agreeClickFlag = true;
        }, function () {
          console.log("toggleAgree fail");
        })

      } else {

      }
    },
    refresh(){

    }
  }
})
