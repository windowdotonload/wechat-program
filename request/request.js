export const request = (params) => {
    return new Promise ((res,rej) => {
        wx.request({
          //   url: 'url',
          ...params, //params传入{url: }
          
          success: (result) => {
              res(result)
          },
        })
    })
}