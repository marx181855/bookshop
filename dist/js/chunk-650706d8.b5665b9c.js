(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-650706d8"],{"287f":function(e,t,n){},"34eb":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACOUlEQVRoQ9WaPUsdQRSG37e1tfVP+BMsgpUWgkqKFFpaB1ImtgFLy4CloBCCH4SImISQEIUggogQRAmiiCiSCCKBCQNHECF337M7487ddufOPM+ZM3e+lmj5CSE8ATAMoA/ANslpDxI9hVOXDSG8BPDqQb0LJMfUtloT+A/8HfcIybeKRCsCFfCR+wXJ10UKCPCR+ynJ+eIERPivAAZJ/ilKQITfAzBKcleBj2UeZQyI8PsAxkjuqPCPIiDC/7TIb3vgswuI8AcG/8MLn1VAhD+0tNmqA59NQIT/ZZH/Xhc+i4AIf2zw35rAJxcQ4U8sbb40hU8qIMKfWeQ/p4BPJiDCn1vkN1LBJxEQ4S8Mfj0lfGMBEf7K0mYtNXwjARH+t0X+fQ742gIi/LXBr+aCryUgwt8Y/FJOeLeACH9r8O9yw7sEQgj9AOLk09MB7K/BS/vZFILyfiCEMAVgtkOjweAXU4CpdXgEJgG86WaB7k6hGPmuHsR3qSNKlPk36pSIE9k4yRV1QNYpJw/ih5WLPVHmUsLZE3ExF49LPtSJcNVvaveAU+LSVqRlLaedEmVuaJwScUsZ0+lTVWqo7xun0P2GxIF9aulU1qbe2RPxWCX2RDyJbvQk7QGnRJkHW06JI0unso4WnRJlHu46Jco8XndKlHnB4ZQo84rJKVHmJZ9TYoLknDJBZJkHqhoWZuznJGeq6onvWxEQtqdDJJeLFugg8ZHkgALfag/cGxPPAMRPbnoBbHo/t/kHTXEWQOMPn6AAAAAASUVORK5CYII="},"834e":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),o=Object(a["h"])("新用户注册"),r={style:{"margin-top":"50px"}},u={style:{"text-align":"center","padding-top":"50px"}},c={style:{margin:"16px"}},i=Object(a["h"])("提交");function s(e,t,n,s,l,d){var b=Object(a["F"])("NavBar"),f=Object(a["F"])("van-image"),p=Object(a["F"])("van-field"),m=Object(a["F"])("van-button"),O=Object(a["F"])("van-form");return Object(a["x"])(),Object(a["f"])("div",null,[Object(a["i"])(b,null,{default:Object(a["O"])((function(){return[o]})),_:1}),Object(a["i"])("div",r,[Object(a["i"])("div",u,[Object(a["i"])(f,{width:"19rem",fit:"contain",src:"https://s3.amazonaws.com/prod.assets.thebanner/styles/article-large/s3/article/large/TIN-400%20Books%20from%20the%20Banner_large_all.jpg?itok=DUgsjKTH"}),Object(a["i"])(O,{onSubmit:s.onSubmit},{default:Object(a["O"])((function(){return[Object(a["i"])(p,{modelValue:s.userInfo.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.userInfo.name=e}),name:"name",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(a["i"])(p,{modelValue:s.userInfo.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.userInfo.email=e}),name:"email",label:"邮箱",placeholder:"邮箱",rules:[{required:!0,message:"请填写邮箱"}]},null,8,["modelValue"]),Object(a["i"])(p,{modelValue:s.userInfo.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.userInfo.password=e}),type:"password",name:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"]),Object(a["i"])(p,{modelValue:s.userInfo.password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.userInfo.password_confirmation=e}),type:"password",name:"password_confirmation",label:"确认密码",placeholder:"确认密码",rules:[{required:!0,message:"请填写一致的密码"}]},null,8,["modelValue"]),Object(a["i"])("div",c,[Object(a["i"])("div",{class:"link-login",onClick:t[5]||(t[5]=function(t){return e.$router.push({path:"/login"})})},"已有账号，立即登录"),Object(a["i"])(m,{color:"#44b883",round:"",block:"",type:"primary","native-type":"submit"},{default:Object(a["O"])((function(){return[i]})),_:1})])]})),_:1},8,["onSubmit"])])])])}var l=n("a7ac"),d=n("8d85"),b=n("d6e4"),f=n("626a"),p=n("6c02"),m={components:{NavBar:l["a"]},setup:function(){var e=Object(p["d"])(),t=Object(a["B"])({name:"",email:"",password:"",password_confirmation:""}),n=function(n){t.password!==t.password_confirmation?Object(b["a"])("两次密码不一致..."):Object(d["d"])(t).then((function(n){201===n.status&&(f["a"].success("注册成功..."),setTimeout((function(){e.push({path:"/login"})}),1e3)),t.password_confirmation="",t.password=""}))};return{userInfo:t,onSubmit:n}}};n("8c93");m.render=s;t["default"]=m},"89be":function(e,t,n){"use strict";n("287f")},"8c93":function(e,t,n){"use strict";n("b74e")},"8d85":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c}));var a=n("1bab");function o(e){return Object(a["a"])({url:"/api/auth/register",method:"post",data:e})}function r(e){return console.log(e),Object(a["a"])({url:"/api/auth/login",method:"post",data:e})}function u(){return Object(a["a"])({url:"/api/auth/logout",method:"post"})}function c(){return Object(a["a"])({url:"/api/user"})}},a7ac:function(e,t,n){"use strict";var a=n("7a23"),o=n("34eb"),r=n.n(o),u={class:"nav-bar"},c=Object(a["i"])("img",{src:r.a,alt:""},null,-1),i={class:"center"},s=Object(a["h"])("EWShop"),l={class:"right"};function d(e,t,n,o,r,d){return Object(a["x"])(),Object(a["f"])("div",u,[Object(a["i"])("div",{class:"left",onClick:t[1]||(t[1]=function(){return o.goback&&o.goback.apply(o,arguments)})},[Object(a["E"])(e.$slots,"left",{},(function(){return[c]}))]),Object(a["i"])("div",i,[Object(a["E"])(e.$slots,"default",{},(function(){return[s]}))]),Object(a["i"])("div",l,[Object(a["E"])(e.$slots,"right")])])}var b=n("6c02"),f={setup:function(){var e=Object(b["d"])(),t=function(){e.go(-1)};return{goback:t}}};n("89be");f.render=d;t["a"]=f},b0c0:function(e,t,n){var a=n("83ab"),o=n("9bf2").f,r=Function.prototype,u=r.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in r)&&o(r,i,{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(e){return""}}})},b74e:function(e,t,n){}}]);
//# sourceMappingURL=chunk-650706d8.b5665b9c.js.map