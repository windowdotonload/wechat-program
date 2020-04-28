import {request} from '../../request/request.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperlist:[],
    catelist:[],
    floorlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperlist:result.data.message
    //     })
       
    //   },
    // })
    this.getSwiperList()
    this.getCateList()
    this.getFloorList()
  },

  getSwiperList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
    .then(
        (res) => {
          this.setData({
            swiperlist:res.data.message
          })
        }
    )
  },

  getCateList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems'})
    .then(
        (res) => {
          this.setData({
            catelist:res.data.message
          })
        }
    )
  },

  getFloorList(){
    request({url:'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'})
    .then(
        (res) => {
          this.setData({
            floorlist:res.data.message
          })
        }
    )
  }

})