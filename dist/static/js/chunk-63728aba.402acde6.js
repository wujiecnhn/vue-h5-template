(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63728aba"],{"0f5c":function(e,t,a){"use strict";a("17e8")},"17e8":function(e,t,a){},ab4c:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-container"},[e._m(0),a("van-form",{staticClass:"form",attrs:{"validate-trigger":"onSubmit","show-error":!1},on:{submit:e.onSubmit}},[a("van-field",{attrs:{type:"text",required:"",clearable:"",name:"邮箱",label:"邮箱",placeholder:"请输入邮箱地址",rules:[{required:!0,message:"请输入正确的邮箱地址!"}]},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),a("van-field",{attrs:{type:"password",required:"",center:"",clearable:"",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请输入正确的密码！"}]},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),a("div",{staticStyle:{margin:"36px"}},[a("van-button",{attrs:{round:"",block:"",loading:e.loading,type:"info","loading-text":"登录中...","native-type":"submit"}},[e._v("登录")]),a("van-button",{staticStyle:{"margin-top":"10px"},attrs:{plain:"",round:"",block:"",type:"info","native-type":"button",to:"/signup"}},[e._v("注册")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{staticClass:"header__logo",attrs:{src:a("cf05"),alt:"logo"}}),n("p",{staticClass:"header__title"},[e._v("Vue-H5-Template")])])}],o={name:"Login",data:function(){return{form:{username:"",password:"",captcha:"",isCaptchaShow:!1,sid:localStorage.getItem("sid")||""},loading:!1,captchaSvg:""}},methods:{onSubmit:function(){var e=this;this.loading=!0,this.$store.dispatch("user/signin",this.form).then((function(){e.$router.push("/power"),e.$notify({type:"success",message:"登录成功",duration:2e3,onOpened:function(){e.loading=!1}})})).catch((function(){e.loading=!1}))}}},r=o,i=(a("0f5c"),a("2877")),c=Object(i["a"])(r,n,s,!1,null,"9ff0efc8",null);t["default"]=c.exports},cf05:function(e,t,a){e.exports=a.p+"973a6b8517b03a242441098747d00766.png"}}]);
//# sourceMappingURL=chunk-63728aba.402acde6.js.map