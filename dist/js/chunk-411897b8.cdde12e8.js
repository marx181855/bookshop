(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-411897b8"],{6691:function(e,t,c){"use strict";c("ca82")},a38c:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),a={class:"create-order"},r=Object(n["h"])("订单预览"),o={class:"address-wrap"},i={class:"address"},s={class:"good"},d={class:"good-img"},l={alt:""},u={class:"good-desc"},b={class:"good-title"},O={class:"good-btn"},j={class:"price"},f=Object(n["i"])("small",null,"￥",-1),h=Object(n["h"])("商品余额"),p=Object(n["h"])(" 支付宝二维码 "),v=Object(n["i"])("br",null,null,-1),g=Object(n["h"])(" 微信支付二维码 "),m=Object(n["i"])("br",null,null,-1);function w(e,t,c,w,y,_){var F=Object(n["F"])("NavBar"),I=Object(n["F"])("van-icon"),N=Object(n["F"])("van-submit-bar"),k=Object(n["F"])("van-image"),C=Object(n["F"])("van-grid-item"),x=Object(n["F"])("van-grid"),P=Object(n["F"])("van-popup"),q=Object(n["G"])("lazy");return Object(n["x"])(),Object(n["f"])("div",a,[Object(n["i"])(F,null,{default:Object(n["O"])((function(){return[r]})),_:1}),Object(n["i"])("div",o,[Object(n["i"])("div",{class:"name",onClick:t[1]||(t[1]=function(){return w.goTo&&w.goTo.apply(w,arguments)})},[Object(n["i"])("span",null,Object(n["I"])(e.address.name),1),Object(n["i"])("span",null,Object(n["I"])(e.address.phone),1)]),Object(n["i"])("div",i,Object(n["I"])(e.address.province+e.address.city+e.address.county+e.address.address),1),Object(n["i"])(I,{class:"arrow",name:"arrow"})]),Object(n["i"])("div",s,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(e.cartList,(function(e,t){return Object(n["x"])(),Object(n["f"])("div",{class:"good-item",key:t},[Object(n["i"])("div",d,[Object(n["P"])(Object(n["i"])("img",l,null,512),[[q,e.goods.cover_url]])]),Object(n["i"])("div",u,[Object(n["i"])("div",b,[Object(n["i"])("span",null,Object(n["I"])(e.goods.title),1),Object(n["i"])("span",null,"x"+Object(n["I"])(e.num),1)]),Object(n["i"])("div",O,[Object(n["i"])("div",j,[f,Object(n["h"])(" "+Object(n["I"])(e.goods.price+".00"),1)])])])])})),128))]),Object(n["i"])(N,{class:"submit-all",price:100*w.total,"button-text":"生成订单",onSubmit:w.handleCreateOrder},{default:Object(n["O"])((function(){return[h]})),_:1},8,["price","onSubmit"]),Object(n["i"])(P,{show:e.showPay,"onUpdate:show":t[2]||(t[2]=function(t){return e.showPay=t}),closeable:"","close-on-click-overlay":!1,position:"bottom",style:{height:"40%"},onClose:w.close},{default:Object(n["O"])((function(){return[Object(n["i"])(x,{border:!1,"column-num":2},{default:Object(n["O"])((function(){return[Object(n["i"])(C,null,{default:Object(n["O"])((function(){return[p,v,Object(n["i"])(k,{width:"150",height:"150",src:e.aliyun},null,8,["src"])]})),_:1}),Object(n["i"])(C,null,{default:Object(n["O"])((function(){return[g,m,Object(n["i"])(k,{width:"150",height:"150",src:e.wechat},null,8,["src"])]})),_:1})]})),_:1})]})),_:1},8,["show","onClose"])])}var y=c("5530"),_=(c("4de4"),c("159b"),c("a7ac")),F=c("6c02"),I=c("5502"),N=c("e05b"),k=c("626a"),C={components:{NavBar:_["a"]},setup:function(){var e=Object(F["d"])(),t=Object(I["b"])(),c=Object(n["B"])({cartList:[],address:{},showPay:!1,orderNo:"",aliyun:"",wechat:""}),a=function(){k["a"].loading({message:"加载中...",forbidClick:!0}),Object(N["d"])().then((function(e){var t=e.address.filter((function(e){return"1"===e.is_default}));0===t.length?c.address={address:"还没有设置默认地址，选择或者填写地址信息"}:c.address=t[0],c.cartList=e.carts,console.log(e)}))};Object(n["u"])((function(){a()}));var r=function(){e.push({path:"/address"})},o=function(){var n={address_id:c.address.id};Object(N["b"])(n).then((function(n){k["a"].success("创建订单成功"),t.dispatch("updateCart"),c.showPay=!0,c.orderNo=n.id,Object(N["f"])(c.orderNo,{type:"aliyun"}).then((function(e){console.log(e),c.aliyun=e.qr_code_url,c.wechat=e.qr_code_url}));var a=setInterval((function(){Object(N["e"])(c.orderNo).then((function(t){"2"===t&&(clearInterval(a),e.push({path:"/orderdetail",query:{id:c.orderNo}}))}))}),2e3)}))},i=function(){e.push({path:"/orderdetail",query:{id:c.orderNo}})},s=Object(n["d"])((function(){var e=0;return c.cartList.forEach((function(t){e+=parseInt(t.num)*parseFloat(t.goods.price)})),e}));return Object(y["a"])(Object(y["a"])({},Object(n["J"])(c)),{},{goTo:r,handleCreateOrder:o,close:i,total:s})}};c("6691");C.render=w;t["default"]=C},b0c0:function(e,t,c){var n=c("83ab"),a=c("9bf2").f,r=Function.prototype,o=r.toString,i=/^\s*function ([^ (]*)/,s="name";n&&!(s in r)&&a(r,s,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(e){return""}}})},ca82:function(e,t,c){}}]);
//# sourceMappingURL=chunk-411897b8.cdde12e8.js.map