(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a7fb1d0"],{bb51:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),o=Object(n["R"])("data-v-33cb83f4");Object(n["A"])("data-v-33cb83f4");var a=Object(n["h"])("分类页面"),i={id:"mainbox"},l={class:"ordertab"},u={class:"goodslist"},r={class:"content"};Object(n["y"])();var s=o((function(e,t,c,s,d,b){var f=Object(n["F"])("NavBar"),O=Object(n["F"])("van-tab"),j=Object(n["F"])("van-tabs"),v=Object(n["F"])("van-sidebar-item"),p=Object(n["F"])("van-collapse-item"),m=Object(n["F"])("van-collapse"),g=Object(n["F"])("van-sidebar"),h=Object(n["F"])("van-card"),k=Object(n["F"])("BackTop");return Object(n["x"])(),Object(n["f"])("div",null,[Object(n["i"])(f,null,{default:o((function(){return[a]})),_:1}),Object(n["i"])("div",i,[Object(n["i"])("div",l,[Object(n["i"])(j,{modelValue:s.active,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.active=e}),onClick:s.tabClick},{default:o((function(){return[Object(n["i"])(O,{title:"销量排序"}),Object(n["i"])(O,{title:"价格排序"}),Object(n["i"])(O,{title:"评论排序"})]})),_:1},8,["modelValue","onClick"])]),Object(n["i"])(g,{class:"leftmenu",modelValue:s.activeKey,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.activeKey=e})},{default:o((function(){return[Object(n["i"])(m,{modelValue:s.activeName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.activeName=e}),accordion:""},{default:o((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(s.categories,(function(e){return Object(n["x"])(),Object(n["f"])(p,{key:e.id,title:e.name,name:e.name},{default:o((function(){return[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(e.children,(function(e){return Object(n["x"])(),Object(n["f"])(v,{key:e.id,title:e.name,onClick:function(t){return s.getGoods(e.id)}},null,8,["title","onClick"])})),128))]})),_:2},1032,["title","name"])})),128))]})),_:1},8,["modelValue"])]})),_:1},8,["modelValue"]),Object(n["i"])("div",u,[Object(n["i"])("div",r,[(Object(n["x"])(!0),Object(n["f"])(n["a"],null,Object(n["D"])(s.showGoods,(function(e){return Object(n["x"])(),Object(n["f"])(h,{onClick:function(t){return s.itemClick(e.id)},key:e.id,num:e.comments_count,tag:e.comments_count>=0?"流行":"标签",price:e.price,desc:e.updated_at,title:e.title,thumb:e.cover_url,"lazy-load":!0},null,8,["onClick","num","tag","price","desc","title","thumb"])})),128))])])]),Object(n["P"])(Object(n["i"])(k,{onBTop:s.bTop},null,8,["onBTop"]),[[n["L"],s.isShowBackTop]])])})),d=c("2909"),b=c("a7ac"),f=c("725f"),O=(c("99af"),c("1bab"));function j(){return Object(O["a"])({url:"/api/goods"})}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sales",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Object(O["a"])({url:"/api/goods?category_id=".concat(t,"&page=").concat(c,"&").concat(e,"=1")})}var p=c("6c02"),m=c("f40f"),g={components:{NavBar:b["a"],BackTop:f["a"]},setup:function(){var e=Object(p["d"])(),t=Object(n["C"])(1),c=Object(n["C"])(0),o=Object(n["C"])([]),a=Object(n["C"])(0),i=Object(n["C"])(!1),l=Object(n["C"])("sales"),u=Object(n["C"])(0),r=Object(n["B"])({sales:{page:1,list:[]},price:{page:1,list:[]},comments_count:{page:1,list:[]}}),s=Object(n["B"])({}),b=Object(n["d"])((function(){return r[l.value].list})),f=function(){v("sales",u.value).then((function(e){r.sales.list=e.goods.data})),v("price",u.value).then((function(e){r.price.list=e.goods.data})),v("comments_count",u.value).then((function(e){r.comments_count.list=e.goods.data}))};Object(n["u"])((function(){j().then((function(e){o.value=e.categories})),f(),s=new m["a"](document.querySelector(".goodslist"),{probeType:3,click:!0,pullUpLoad:!0}),s.on("scroll",(function(e){i.value=-e.y>300})),s.on("pullingUp",(function(){console.log("上拉加载更多");var e=r[l.value].page+1;v(l.value,u.value,e).then((function(e){var t;console.log(e.goods.data),(t=r[l.value].list).push.apply(t,Object(d["a"])(e.goods.data)),r[l.value].page+=1})),s.finishPullUp(),console.log("当前类型:"+u.value+",当前页："+e),s.refresh(),console.log("contentTheHeight："+document.querySelector(".content").clientHeight)}))}));var O=function(e){var t=["sales","price","comments_count"];l.value=t[e],v(l.value,u.value).then((function(e){r.sales.list=e.goods.data,Object(n["p"])((function(){s&&s.refresh()}))}))},g=function(e){u.value=e,console.log("当前的id："+e),v("sales",u.value).then((function(e){r.sales.list=e.goods.data}))};Object(n["N"])((function(){Object(n["p"])((function(){s&&s.refresh()}))}));var h=function(){s.scrollTo(0,0,500)};return{activeKey:c,categories:o,activeName:a,active:t,tabClick:O,currentOrder:l,getGoods:g,currentCid:u,showGoods:b,isShowBackTop:i,bTop:h,itemClick:function(t){e.push({path:"/detail",query:{id:t}})}}}};c("d495");g.render=s,g.__scopeId="data-v-33cb83f4";t["default"]=g},d495:function(e,t,c){"use strict";c("edc3")},edc3:function(e,t,c){}}]);
//# sourceMappingURL=chunk-5a7fb1d0.6c7d228f.js.map