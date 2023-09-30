import{_ as w,e as r,u as k,m as V,r as o,o as I,c as S,a as s,b as e,w as C,F as T,d as B,p as L,n as R,q as U}from"./index-caddd06d.js";import{a as j}from"./axios-2ea3ab6f.js";const l=c=>(L("data-v-77aef82b"),c=c(),R(),c),E={class:"surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},N={class:"flex flex-column align-items-center justify-content-center"},F=l(()=>e("a",{href:"/"},[e("img",{src:U,alt:"Logo",class:"logo"})],-1)),M=l(()=>e("br",null,null,-1)),P={style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"}},q={class:"w-full surface-card py-8 px-5 sm:px-8",style:{"border-radius":"53px"}},D=l(()=>e("div",{class:"text-center mb-5"},[e("div",{class:"text-900 text-3xl font-medium mb-3"},"欢迎使用厚浪"),e("span",{class:"text-600 font-medium"},"登录您的账号")],-1)),O=l(()=>e("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"邮箱",-1)),z=l(()=>e("label",{for:"password",class:"block text-900 font-medium text-xl mb-2"},"密码",-1)),A={class:"flex align-items-center justify-content-between mb-5 gap-5"},G={class:"flex align-items-center"},H=l(()=>e("label",{for:"rememberme"},"记住登录",-1)),J={__name:"Login",setup(c){localStorage.clear();const i=r(""),u=r(""),m=r(!1),d=r(!1),_=k(),p=V(),f=()=>{d.value=!0,j.post("/user/login",{email:i.value,password:u.value,rememberMe:m.value}).then(function(t){t.data.code===200?(localStorage.setItem("accessToken",t.data.data.accessToken),localStorage.setItem("auth",t.data.data.userData.roleId),_.add({severity:"success",summary:"SUCCESS",detail:t.data.msg,life:3e3}),p.replace("/")):(console.log(t.data),_.add({severity:"error",summary:"ERROR",detail:t.data.msg,life:3e3})),d.value=!1}).catch(function(t){console.log(t),d.value=!1})};return(t,a)=>{const g=o("Toast"),x=o("InputText"),v=o("Password"),b=o("Checkbox"),h=o("router-link"),y=o("Button");return I(),S(T,null,[s(g),e("div",E,[e("div",N,[F,M,e("div",P,[e("div",q,[D,e("div",null,[O,s(x,{id:"email1",type:"text",placeholder:"您的邮件地址",class:"w-full md:w-30rem mb-5",style:{padding:"1rem"},modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=n=>i.value=n)},null,8,["modelValue"]),z,s(v,{id:"password",modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=n=>u.value=n),placeholder:"您的密码",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem",feedback:!1},null,8,["modelValue"]),e("div",A,[e("div",G,[s(b,{modelValue:m.value,"onUpdate:modelValue":a[2]||(a[2]=n=>m.value=n),id:"rememberme",binary:"",class:"mr-2"},null,8,["modelValue"]),H]),s(h,{to:"/auth/register",class:"font-medium no-underline ml-2 text-right cursor-pointer",style:{color:"var(--primary-color)"}},{default:C(()=>[B("没有账号？去注册")]),_:1})]),s(y,{label:"登录",class:"w-full p-3 text-xl",onClick:f,disabled:d.value},null,8,["disabled"])])])])])])],64)}}},W=w(J,[["__scopeId","data-v-77aef82b"]]);export{W as default};
