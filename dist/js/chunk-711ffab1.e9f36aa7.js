(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711ffab1"],{"23ac":function(e,t,n){},"576b":function(e,t,n){"use strict";n("23ac")},"99af":function(e,t,n){"use strict";var d=n("23e7"),a=n("d039"),c=n("e8b5"),r=n("861d"),o=n("7b0b"),i=n("50c4"),s=n("8418"),u=n("65f0"),l=n("1dde"),f=n("b622"),b=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",O=b>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),j=l("concat"),m=function(e){if(!r(e))return!1;var t=e[p];return void 0!==t?!!t:c(e)},g=!O||!j;d({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,d,a,c,r=o(this),l=u(r,0),f=0;for(t=-1,d=arguments.length;t<d;t++)if(c=-1===t?r:arguments[t],m(c)){if(a=i(c.length),f+a>h)throw TypeError(v);for(n=0;n<a;n++,f++)n in c&&s(l,f,c[n])}else{if(f>=h)throw TypeError(v);s(l,f++,c)}return l.length=f,l}})},d81d:function(e,t,n){"use strict";var d=n("23e7"),a=n("b727").map,c=n("1dde"),r=c("map");d({target:"Array",proto:!0,forced:!r},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},dea5:function(e,t,n){"use strict";n.r(t);var d=n("7a23"),a={class:"address-box"},c=Object(d["h"])("地址管理"),r={style:{"margin-top":"200px"}},o={class:"address-item"};function i(e,t,n,i,s,u){var l=Object(d["F"])("NavBar"),f=Object(d["F"])("van-address-list");return Object(d["x"])(),Object(d["f"])("div",a,[Object(d["i"])(l,null,{default:Object(d["O"])((function(){return[c]})),_:1}),Object(d["P"])(Object(d["i"])("div",r,"还没有地址信息，去添加吧！",512),[[d["L"],0==e.list.length]]),Object(d["i"])("div",o,[Object(d["i"])(f,{modelValue:e.chosenAddressId,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.chosenAddressId=t}),list:e.list,"default-tag-text":"默认",onAdd:i.onAdd,onEdit:i.onEdit,onSelect:i.select},null,8,["modelValue","list","onAdd","onEdit","onSelect"])])])}var s=n("5530"),u=(n("d81d"),n("b0c0"),n("99af"),n("a7ac")),l=n("6c02"),f=n("b3d1"),b=n("626a"),p={components:{NavBar:u["a"]},setup:function(){var e=Object(l["d"])(),t=Object(d["B"])({chosenAddressId:"1",list:[]});Object(d["u"])((function(){b["a"].loading("数据加载中..."),Object(f["e"])().then((function(e){b["a"].clear(),0!==e.data.length?t.list=e.data.map((function(e){return{id:e.id,name:e.name,tel:e.phone,address:"".concat(e.province," ").concat(e.city," ").concat(e.county," ").concat(e.address),isDefault:!!e.is_default}})):t.list=[]}))}));var n=function(){e.push({path:"/addressedit",query:{type:"add"}})},a=function(t){console.log(t),e.push({path:"/addressedit",query:{type:"edit",addressId:t.id}})},c=function(t){e.push({path:"createorder",query:{addressId:t.id}})};return Object(s["a"])(Object(s["a"])({},Object(d["J"])(t)),{},{onAdd:n,onEdit:a,select:c})}};n("576b");p.render=i;t["default"]=p}}]);
//# sourceMappingURL=chunk-711ffab1.e9f36aa7.js.map