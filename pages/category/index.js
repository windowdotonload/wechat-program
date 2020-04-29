import {request} from '../../request/request.js'
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      leftlist:[],
      rightlist:[]
  },
  Cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCate()
  },
  getCate(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/categories'})
      .then(
          (res) => {
           this.Cates = res.data.message

           let leftlist = this.Cates.map(v => v.cat_name)
           let rightlist = this.Cates[0].children

          this.setData({
              leftlist:leftlist,
              rightlist:rightlist
            })
          }
      )

     
  },

})