(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a1bf9ac"],{"1ae7":function(t,e,c){},"50dc":function(t,e,c){"use strict";c("1ae7")},"8ce7":function(t,e,c){},efa1:function(t,e,c){"use strict";c("8ce7")},f86d:function(t,e,c){"use strict";c.r(e);var r=c("7a23"),n=Object(r["i"])("订单界面"),a={class:"box"},j={class:"tag-bar"},b={class:"order-list"},i={class:"tip-text"},l=Object(r["j"])("p",null,"暂时还没有订单哦!!!",-1);function u(t,e,c,u,o,s){var O=Object(r["G"])("NavBar"),d=Object(r["G"])("van-tab"),f=Object(r["G"])("van-tabs"),v=Object(r["G"])("orderItem");return Object(r["y"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(O,null,{default:Object(r["P"])((function(){return[n]})),_:1}),Object(r["j"])("div",a,[Object(r["j"])("div",j,[Object(r["j"])(f,{active:t.currentTab,"onUpdate:active":e[1]||(e[1]=function(e){return t.currentTab=e}),onClick:u.switchTab},{default:Object(r["P"])((function(){return[Object(r["j"])(d,{title:"全部"}),Object(r["j"])(d,{title:"已下单"}),Object(r["j"])(d,{title:"已支付"}),Object(r["j"])(d,{title:"已发货"}),Object(r["j"])(d,{title:"已收货"}),Object(r["j"])(d,{title:"已过期"})]})),_:1},8,["active","onClick"])]),Object(r["j"])("div",b,[(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(t.orderList,(function(t){return Object(r["y"])(),Object(r["g"])(v,{orderInfo:t,key:t.id},null,8,["orderInfo"])})),128))]),Object(r["Q"])(Object(r["j"])("div",i,[l],512),[[r["N"],!t.orderList.length]])])],64)}var o=c("5530"),s=c("a7ac"),O=c("a1e9"),d=c("e05b"),f=c("5c40"),v=Object(r["S"])("data-v-6c92137c");Object(r["B"])("data-v-6c92137c");var p={class:"order-card"},m={class:"order-status"},g={class:"status-item"},I=Object(r["j"])("label",null,"订单状态：",-1),h={class:"status-item"},k=Object(r["j"])("label",null,"订单编号：",-1),y={class:"status-item"},w=Object(r["j"])("label",null,"下单时间：",-1),T={class:"order-price"},_={class:"price-item"},L=Object(r["j"])("label",null,"商品总额：",-1),G=Object(r["j"])("div",{class:"price-item"},[Object(r["j"])("label",null,"配送方式："),Object(r["j"])("span",null,"普通快递")],-1);Object(r["z"])();var C=v((function(t,e,c,n,a,j){var b=Object(r["G"])("van-card");return Object(r["y"])(),Object(r["g"])("div",p,[Object(r["j"])("div",m,[Object(r["j"])("div",g,[I,Object(r["j"])("span",null,Object(r["K"])(n.orderStatus),1)]),Object(r["j"])("div",h,[k,Object(r["j"])("span",null,Object(r["K"])(c.orderInfo.order_no),1)]),Object(r["j"])("div",y,[w,Object(r["j"])("span",null,Object(r["K"])(c.orderInfo.created_at),1)])]),Object(r["j"])("div",T,[Object(r["j"])("div",_,[L,Object(r["j"])("span",null,"￥"+Object(r["K"])(c.orderInfo.amount+".00"),1)]),G]),(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["E"])(c.orderInfo.orderDetails.data,(function(t){return Object(r["y"])(),Object(r["g"])(b,{key:t.id,num:t.num,price:t.price,desc:"全场包邮",title:t.goods.title,thumb:t.goods.cover_url},null,8,["num","price","title","thumb"])})),128))])})),K={props:{orderInfo:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(f["f"])((function(){var e=["","已下单","已支付","等待发货","确认收货","已过期"];return e[t.orderInfo.status]}));return{orderStatus:e}}};c("50dc");K.render=C,K.__scopeId="data-v-6c92137c";var B=K,N=c("626a"),S={components:{NavBar:s["a"],orderItem:B},setup:function(){var t=Object(O["i"])({orderList:[],currentTab:0}),e=function(){Object(d["c"])().then((function(e){t.orderList=e.data}))};Object(f["A"])((function(){N["a"].loading({message:"加载中...",forbidClick:!0}),e(),N["a"].clear()}));var c=function(){N["a"].loading({message:"加载中...",forbidClick:!0}),t.currentTab,Object(d["c"])(t.currentTab).then((function(e){t.orderList=e.data,t.orderList.length,N["a"].clear()}))};return Object(o["a"])(Object(o["a"])({},Object(O["q"])(t)),{},{switchTab:c})}};c("efa1");S.render=u;e["default"]=S}}]);