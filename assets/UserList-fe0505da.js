import{e as n,u as J,f as Q,r as m,o as W,c as X,b as o,a as l,w as r,g as Y}from"./index-9203e50b.js";import{a as f}from"./axios-2ea3ab6f.js";const Z={class:"card"},ee=o("h4",{class:"m-0"},"用户列表",-1),le={class:"flex flex-wrap gap-2 align-items-center justify-content-between"},te={class:"p-input-icon-left"},ae=o("i",{class:"pi pi-search"},null,-1),oe={class:"p-buttonset"},ie={class:"field"},se=o("label",{for:"password"},"密码",-1),ne={class:"field"},de=o("label",{for:"role"},"角色",-1),re={class:"field"},ce=o("label",{for:"action"},"操作",-1),ue={class:"field"},me=o("label",{for:"balance"},"积分",-1),ve={class:"field"},fe=o("label",{for:"remark"},"备注",-1),pe=o("div",{class:"confirmation-content"},[o("i",{class:"pi pi-exclamation-triangle mr-3",style:{"font-size":"2rem"}}),o("span",null,"该角色删除后，域名记录也将一起删除，请确认是否继续操作")],-1),be={__name:"UserList",setup(ge){const V=n(),T=n(),p=n(),y=n(),I=n([{name:"增加"},{name:"扣除"}]),w=n(),k=n(),g=n(!1),h=n(!1),_=n(!1),d=n({}),C=n(""),c=J(),R=n({global:{value:null,matchMode:Y.CONTAINS}});Q(()=>{b(),E()});const E=()=>{f.get("/role/list",{params:{page:1,pageSize:10}}).then(function(t){T.value=t.data.data.records}).catch(function(t){console.log(t)})},b=()=>{f.get("/user/list",{params:{page:1,pageSize:10}}).then(function(t){V.value=t.data.data.records}).catch(function(t){console.log(t)})},L=(t,e,v)=>{f.put("/user/update",{id:t,password:e,roleId:v}).then(function(s){s.data.code===200?(g.value=!1,c.add({severity:"success",summary:"SUCCESS",detail:s.data.msg,life:3e3})):(console.log(s.data),c.add({severity:"error",summary:"ERROR",detail:s.data.msg,life:3e3})),b()}).catch(function(s){console.log(s)})},P=t=>{f.get("/user/lock",{params:{id:t}}).then(function(e){e.data.code===200?c.add({severity:"success",summary:"SUCCESS",detail:e.data.msg,life:3e3}):(console.log(e.data),c.add({severity:"error",summary:"ERROR",detail:e.data.msg,life:3e3})),b()}).catch(function(e){console.log(e)})},M=t=>{f.delete("/user/delete/"+t).then(function(e){e.data.code===200?(h.value=!1,c.add({severity:"success",summary:"SUCCESS",detail:e.data.msg,life:3e3})):(console.log(e.data),c.add({severity:"error",summary:"ERROR",detail:e.data.msg,life:3e3})),b()}).catch(function(e){console.log(e)})},O=(t,e,v,s)=>{f.post("/point_record/edit",{userId:t,action:e,balance:v,remark:s}).then(function(i){i.data.code===200?(_.value=!1,c.add({severity:"success",summary:"SUCCESS",detail:i.data.msg,life:3e3})):(console.log(i.data),c.add({severity:"error",summary:"ERROR",detail:i.data.msg,life:3e3})),b()}).catch(function(i){console.log(i)})},S=()=>{d.value={},g.value=!1,_.value=!1},N=t=>{d.value=t,p.value=d.value.roleId,g.value=!0},B=t=>{d.value=t,h.value=!0},$=t=>{d.value=t,_.value=!0},z=()=>{const t=d.value.id;M(t),d.value={}},A=()=>{const t=d.value.id;if(y.value==null)return c.add({severity:"error",summary:"ERROR",detail:"积分操作不能为空",life:3e3});const e=y.value.name,v=w.value,s=k.value;O(t,e,v,s),d.value={}},F=()=>{const t=d.value.id,e=C.value;if(p.value==null)return c.add({severity:"error",summary:"ERROR",detail:"角色不能为空",life:3e3});const v=p.value.id;L(t,e,v)},j=t=>{d.value=t;const e=d.value.id;P(e)};return(t,e)=>{const v=m("Toolbar"),s=m("InputText"),i=m("Column"),u=m("Button"),G=m("Tag"),K=m("DataTable"),q=m("Toast"),D=m("Dropdown"),U=m("Dialog"),H=m("Textarea");return W(),X("div",null,[o("div",Z,[l(v,{class:"mb-4"},{start:r(()=>[ee]),_:1}),l(K,{showGridlines:"",value:V.value,dataKey:"id",columnResizeMode:"fit",paginator:!0,rows:10,filters:R.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"第 {first} 页，本页 {last} 条记录，共 {totalRecords} 条记录"},{header:r(()=>[o("div",le,[o("span",te,[ae,l(s,{modelValue:R.value.global.value,"onUpdate:modelValue":e[0]||(e[0]=a=>R.value.global.value=a),placeholder:"搜索"},null,8,["modelValue"])])])]),default:r(()=>[l(i,{field:"id",header:"ID",style:{"min-width":"8rem"}}),l(i,{field:"email",header:"邮箱",style:{"min-width":"8rem"}}),l(i,{field:"phone",header:"手机号码",style:{"min-width":"8rem"}}),l(i,{field:"point",header:"积分",style:{"min-width":"8rem"}},{body:r(a=>[l(u,{label:String(a.data.point),outlined:"",style:{width:"6rem"},onClick:x=>$(a.data)},null,8,["label","onClick"])]),_:1}),l(i,{field:"roleId",header:"角色",style:{"min-width":"8rem"}}),l(i,{field:"status",header:"账号状态",style:{"min-width":"8rem"}},{body:r(a=>[l(G,{severity:a.data.status===1?"success":"danger",value:a.data.status===1?"正常":"已封禁"},null,8,["severity","value"])]),_:1}),l(i,{field:"loginTime",header:"最近登陆时间",style:{"min-width":"12rem"}}),l(i,{field:"createdTime",header:"注册时间",style:{"min-width":"12rem"}}),l(i,{field:"updatedTime",header:"更新时间",style:{"min-width":"12rem"}}),l(i,{exportable:!1,style:{"min-width":"24rem"}},{body:r(a=>[o("span",oe,[l(u,{label:"编辑",icon:"pi pi-pencil",onClick:x=>N(a.data)},null,8,["onClick"]),l(u,{label:a.data.status===1?"封禁":"解除封禁",icon:"pi pi-ban",severity:"warning",onClick:x=>j(a.data)},null,8,["label","onClick"]),l(u,{label:"注销",icon:"pi pi-trash",severity:"danger",onClick:x=>B(a.data)},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters"])]),l(q),l(U,{visible:g.value,"onUpdate:visible":e[3]||(e[3]=a=>g.value=a),style:{width:"450px"},header:"更新用户",modal:!0,class:"p-fluid"},{footer:r(()=>[l(u,{text:"",label:"取消",icon:"pi pi-times",onClick:S}),l(u,{text:"",type:"submit",label:"确认",icon:"pi pi-check",onClick:F})]),default:r(()=>[o("div",ie,[se,l(s,{id:"password",modelValue:C.value,"onUpdate:modelValue":e[1]||(e[1]=a=>C.value=a),modelModifiers:{trim:!0}},null,8,["modelValue"])]),o("div",ne,[de,l(D,{id:"role",modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),options:T.value,optionLabel:"roleName",placeholder:"选择角色",class:"w-full"},null,8,["modelValue","options"])])]),_:1},8,["visible"]),l(U,{visible:_.value,"onUpdate:visible":e[7]||(e[7]=a=>_.value=a),style:{width:"450px"},header:"更新积分",modal:!0,class:"p-fluid"},{footer:r(()=>[l(u,{text:"",label:"取消",icon:"pi pi-times",onClick:S}),l(u,{text:"",label:"确认",icon:"pi pi-check",onClick:A})]),default:r(()=>[o("div",re,[ce,l(D,{modelValue:y.value,"onUpdate:modelValue":e[4]||(e[4]=a=>y.value=a),options:I.value,optionLabel:"name",placeholder:"操作",class:"w-full",autofocus:""},null,8,["modelValue","options"])]),o("div",ue,[me,l(s,{id:"balance",modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=a=>w.value=a),modelModifiers:{trim:!0}},null,8,["modelValue"])]),o("div",ve,[fe,l(H,{id:"remark",modelValue:k.value,"onUpdate:modelValue":e[6]||(e[6]=a=>k.value=a),modelModifiers:{trim:!0},rows:"5",cols:"30"},null,8,["modelValue"])])]),_:1},8,["visible"]),l(U,{visible:h.value,"onUpdate:visible":e[9]||(e[9]=a=>h.value=a),style:{width:"500px"},header:"确认删除",modal:!0},{footer:r(()=>[l(u,{label:"取消",icon:"pi pi-times",text:"",onClick:e[8]||(e[8]=a=>h.value=!1)}),l(u,{label:"确认",icon:"pi pi-check",text:"",onClick:z})]),default:r(()=>[pe]),_:1},8,["visible"])])}}};export{be as default};
