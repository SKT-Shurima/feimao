import axios from 'axios'
import md5 from 'md5';
// 开发
let base = '/feimao' ;
// let base = 'http://feimao.zertone1.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

const trans = (params) => {
  params.time = new Date().getTime()/1000;
  params.content='pinet.FeiMao.2017';
  var sparams=Object.keys(params).sort();
  var obj ={};
  sparams.forEach(function(e){
    obj[e] = params[e]
  }
  var ret = ''
  for (var it in obj) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(params[it]) + '&'
  }
  return md5(ret) ;
}) 
//获取jssdk信息
export const  getWeixinInfo = (params) =>{
  params = trans(params);
  return axios.post(`${base}/app/init/getWeixinInfo`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}

export const  sendcode = (params) =>{
  params = trans(params);
  return axios.post(`${base}/app/user/sendcode`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
// 登录/注册
export const login=(params)=>{
  params=trans(params)
  return axios.post(`${base}/app/user/Login`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
export const getUserInfo=(params)=>{
  params = trans(params);
  return axios({
    method:'post',
    url:`${base}/app/user/getUserInfo`,
    data:params,
  }).then(res=>res.data).catch(error=>{
    return error
  });
}
//shoppingmall
export const getShoppingMall=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/mall/getGoodsHomeData`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
// 商城首页
export const getGoodsHomeData=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/mall/getGoodsHomeData`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}

//分类商品列表
export const getCategoryGoods=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/mall/getCategoryGoods`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//首页商品列表
export const getHomeGoods=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/mall/getHomeGoods`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
//活动商品列表
export const getActivityGoods=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/mall/getActivityGoods`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
//shoppingdetail
export const getShoppingDetail=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/goods/getGoodsDetail`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
//购买记录
export const getPurchaseHistory=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/goods/getBuyRecord`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
//取消收藏商品
export const collect=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/goods/goodsCollection`,params).then(res=>res.data).catch(error=>{
    return error;
  });
}
//修改性别
export const changeSex=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/changeSex`,params).then(res=>res.data).catch(error=>{
  return error;
  });
}


//购物车列表
export const getShoppingCart=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/cart/getCarts`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//加入购物车
export const addcart=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/cart/addcart`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//删除购物车商品
export const delCart=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/cart/delCart`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//编辑购物车数量
export const editCart=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/cart/editCart`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//收货地址列表
export const getAdress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/address/getAllAddress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取单个地址
export const getSingleAddress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/address/getAddress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//新增编辑地址
export const saveAdress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/address/saveAddress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取优惠券
export const getCoupons=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/coupon/getCoupons`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取运费
export const getExpressFee=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getExpressFee`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
// 上传到七牛图片
export const uploadQiniu=(base64,qiniuToken)=>{
  return axios({
    method:'post',
    url:'http://upload.qiniup.com/putb64/-1',
    data:base64,
    headers:{"Content-Type":"application/octet-stream","Authorization":"UpToken "+qiniuToken}
  }).then(res=>res.data).catch(error=>error)
}
//修改头像
export const changeAvater=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/changeAvater`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取七牛token
export const getUploadConfig=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/upload/getUploadConfig`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//立即购买/结算
export const settlement=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/cart/settlement`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}

//生成订单，页面中立即付款按钮的接口
export const generate=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/generate`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取所有地址
export const getAllAddress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/address/getAllAddress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}

//支付订单
export const payorder=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/payorder`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//取消订单
export const cancel=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/cancel`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//删除订单
export const deleteOrder=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/deleteOrder`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//订单列表
export const getOrders=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getOrders`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//订单详情
export const getOrderDetail=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getOrderDetail`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//确认收货
export const delivery=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/delivery`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//删除地址
export const deleteAddress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/address/deleteAddress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//社区首页
export const getBaseData=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/community/getBaseData`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//文章详情
export const articleDetail=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/article/articleDetail`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//文章评论
export const comment=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/article/comment`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取文章评论
export const getComments=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/article/getComments`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//文章收藏
export const collection=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/article/collection`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//文章点赞
export const like=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/article/like`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//关注/取消关注
export const attention=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/community/attention`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取所有推荐关注
export const getAllRecoAtte=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/community/getAllRecoAtte`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//商品搜索
export const searchGoods=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/search/searchGoods`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//文章搜索
export const searchArticle=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/search/searchArticle`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//修改昵称
export const changeNickname=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/changeNickname`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//修改手机
export const changePhone=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/changePhone`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//修改简介
export const changeIntroduction=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/changeIntroduction`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//我的文章
export const getMyArticles=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getMyArticles`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//草稿箱
export const getDrafts=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getDrafts`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//意见反馈
export const feedback=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/feedback`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//申请退款/退货
export const refund=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/refund`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//退款/退货列表接口
export const getRefundOrders=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getRefundOrders`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//售后详情
export const getRefundDetails=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getRefundDetails`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取订单消息
export const getOrderMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getOrderMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取系统消息
export const getSystemMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getSystemMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取粉丝消息
export const getFansMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getFansMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取关注消息
export const getAttentionMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getAttentionMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取点赞消息
export const getLikeMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getLikeMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取评论消息
export const getCommentMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getCommentMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//读消息
export const readMessage=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/readMessage`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//消息列表
export const getMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/getMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//清空消息
export const deleteMessages=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/deleteMessages`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取最大退款金额
export const getRefundMoney=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getRefundMoney`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//取消退款申请
export const cancal_refund=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/cancal_refund`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//评论
export const orderComment=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/comment`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取二维码
export const getQrcode=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getQrcode`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取快递公司
export const getExpress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getExpress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//上传快递单号
export const uploadExpress=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/uploadExpress`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//申请详情
export const refundDetail=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/refundDetail`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//我的账户
export const getMyAccount=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getMyAccount`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//资金明细
export const finance=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/finance`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//资金详情
export const financeDetail=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/financeDetail`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//我的积分
export const myPoint=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/myPoint`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//积分记录
export const pointRecord=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/pointRecord`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//申请提现
export const withdraw=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/withdraw`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//回复
export const reply=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/message/reply`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//我是代言人
export const spokesman=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/spokesman`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}


//收藏
export const getCollections=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getCollections`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//收藏商品删除
export const deleteGoods=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/deleteGoods`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//收藏文章删除
export const deleteArticle=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/deleteArticle`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//热门搜索
export const hotSearch=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/search/hotSearch`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//推荐美食
export const recommendFood=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/setting/recommendFood`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//商品详情回复
export const shoppingdeatilReply=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/goods/reply`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//个人主页
export const getAttenInfo=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/community/getAttenInfo`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取微信授权信息
export const getOauthInfo=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/getOauthInfo`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//三方登录
export const oauthLogin=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/oauthLogin`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//三方注册
export const oauthRegister=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/oauthRegister`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//保证金转入余额
export const depositToAccount=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/depositToAccount`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取热门文章
export const getArticles=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/community/getArticles`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//获取物流信息
export const getLogistics=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/order/getLogistics`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
//充值
export const recharge=(params)=>{
  params = trans(params);
  return axios.post(`${base}/app/user/recharge`,params).then(res=>res.data).catch(error=>{
    return error;
  })
}
