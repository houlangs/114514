import{a as d}from"./axios-2ea3ab6f.js";import{u,r as c,o as r,c as h,a as n,b as t,w as a,F as m,d as s}from"./index-9203e50b.js";const b={class:"grid"},f={class:"col-12 xl:col-6"},p={class:"card"},g=t("div",{class:"flex align-items-center justify-content-between mb-4"},[t("h4",null,"📣 温馨提示")],-1),k=t("h4",{class:"block text-600 font-medium mb-3"},"厚浪域名-普及版",-1),x=t("h6",null,[s(" 🚀 提示：本站所有域名均0积分无限制解析，请勿滥用或用于违规。 "),t("br"),s(" 🌟 重要：该站域名不保证稳定性，需要高质量稳定域名请前往 "),t("a",{href:"https://app.houlangs.com",target:"_blank"},"厚浪-主站"),s("。 ")],-1),y=t("br",null,null,-1),v=t("span",{class:"block text-600 font-medium mb-3"},"🏆 常用功能",-1),w=t("br",null,null,-1),T=t("br",null,null,-1),q=t("br",null,null,-1),B=t("br",null,null,-1),D=t("br",null,null,-1),N=t("br",null,null,-1),V=t("span",{class:"block text-600 font-medium mb-3"},"🌝 认证方法",-1),F=t("h6",null,"点击右上角图标 -> 用户信息 -> 实名认证",-1),C={__name:"Dashboard",setup(O){const l=u(),i=()=>{d.get("/user/sign_in").then(function(o){o.data.code===200?l.add({severity:"success",summary:"签到成功",detail:"您已成功签到！",life:3e3}):(console.log(o.data),l.add({severity:"error",summary:"签到失败",detail:"今日已经签到过啦，明天再来吧",life:3e3}))}).catch(function(o){console.log(o)})};return(o,Q)=>{const _=c("Toast"),e=c("Button");return r(),h(m,null,[n(_),t("div",b,[t("div",f,[t("div",p,[g,k,x,y,v,t("h6",null,[n(e,{label:"📅 每日签到：签到有礼，节假日积分加倍！",onClick:i}),w,T,n(e,{onclick:"window.open('http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=73T48TWm3nzVt5jSF6SyDVY2AoyZfMSu&authKey=As1WSDrOpm3nmJNkH6q1OQ3r%2FkyOD24hR7OBXDs0MkfQD5be1hTQo2HU8LRUNn57&noverify=0&group_code=230832864')"},{default:a(()=>[s("📢 加入Q群：与我们一起交流技术")]),_:1}),q,B,n(e,{onclick:"window.open('https://forum.houlangs.com/d/6-hou-lang-geng-duo-lian-jie')"},{default:a(()=>[s("🔗 友链：探索更多有趣链接")]),_:1}),D]),N,V,F])])])],64)}}};export{C as default};
