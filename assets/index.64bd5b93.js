import{c as D,d as w,u as x,a as F,r as S,w as K,o as m,b as h,e as s,f as e,Q as _,g as R,h as U,i,j as u,t as k,k as O,l as C,m as b,n as M,p as N,q as V,s as p,v as W,x as I,y as j,F as z,z as $,A as G,B as H,C as y,D as B,E as T,G as Q,H as J,I as L,J as Z,K as q,R as A,L as E,M as X,N as Y,O as ee,P as te,S as oe,T as se}from"./vendor.a46be16c.js";const ae=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=r(a);fetch(a.href,l)}};ae();const v=Symbol(),ne=D({strict:!0,state:{botIsTyping:!1,botName:"Eliza",botOnline:!1,infoModalOpen:!1,messages:[],nameModalOpen:!0,username:"",ws:null},getters:{getBotName(t){return t.botName},getBotNameFirstLetter(t){return t.botName[0]},getMessages(t){return t.messages},getNameModalOpen(t){return t.nameModalOpen},getUsername(t){return t.username}},mutations:{addMessage(t,o){t.messages.push({author:o.author,text:o.text})},changeBotStatus(t){t.botOnline?t.botOnline=!1:t.botOnline=!0},enterName(t,o){t.nameModalOpen=!1,t.username=o},initializeWebSocket(t,o){t.ws=o},isTyping(t){t.botIsTyping=!t.botIsTyping},toggleModal(t){t.infoModalOpen=!t.infoModalOpen}},actions:{createConnection({commit:t,state:o}){return new Promise(function(r,n){const a=Date.now(),l="s",d="lit-wave-26704.herokuapp.com",c=new WebSocket(`ws${l}://${d}/ws/${a}`);t("initializeWebSocket",c),o.ws.onerror=function(){n({reason:"error",message:"Can't connect to chatbot server"})},o.ws.onopen=function(){t("changeBotStatus")},o.ws.onclose=function(f){f.code===1e3?setTimeout(()=>{t("changeBotStatus"),n({reason:"closed",message:"Connection closed. Refresh the page to start new conversation"})},3500):(o.botOnline&&t("changeBotStatus"),n({reason:"error",message:"Connection to the server dropped"}))},o.ws.onmessage=function(f){t("isTyping"),setTimeout(()=>{t("isTyping"),t("addMessage",{author:o.botName,text:[f.data]})},Math.floor(Math.random()*(3500-1500+1))+1500)}})},sendMessage({commit:t,state:o},r){o.ws.send(r),t("addMessage",{author:o.username,text:[r]})}}}),le=u(" View Info "),re={class:"col-grow q-ma-none"},ie={class:"q-pa-sm row reverse justify-center"},ce={style:{width:"100%","max-width":"100%"}},ue=u(" Send "),de=w({setup(t){const o=x(v),r=F(()=>o.state.botOnline?{text:"Online",color:"green"}:{text:"Offline",color:"red"}),n=S(""),a=S({getScroll:()=>({verticalSize:0}),setScrollPosition:()=>{}});function l(c){c.length>0&&!o.state.botIsTyping&&(o.dispatch("sendMessage",c),n.value="")}function d(){const c=a.value.getScroll();a.value.setScrollPosition("vertical",c.verticalSize,900)}return K(o.getters.getMessages,()=>{d()}),(c,f)=>(m(),h(Q,{bordered:"",class:"column col-grow shadow-1"},{default:s(()=>[e(N,null,{default:s(()=>[e(_,{avatar:""},{default:s(()=>[e(R,{color:"teal-2",rounded:"","text-color":"white"},{default:s(()=>[e(U,{color:i(r).color,floating:"",rounded:""},null,8,["color"]),u(" "+k(i(o).getters.getBotNameFirstLetter),1)]),_:1})]),_:1}),e(_,null,{default:s(()=>[e(O,null,{default:s(()=>[u(k(i(o).getters.getBotName),1)]),_:1}),e(O,{caption:""},{default:s(()=>[u(k(i(r).text),1)]),_:1})]),_:1}),e(C,null,{default:s(()=>[e(b,{color:"grey-7",flat:"",icon:"more_vert",round:"",size:"md",onClick:f[0]||(f[0]=g=>i(o).commit("toggleModal"))},{default:s(()=>[e(M,{class:"bg-teal"},{default:s(()=>[le]),_:1})]),_:1})]),_:1})]),_:1}),e(V),e(y,{class:"column col-grow"},{default:s(()=>[p("div",re,[e(W,{ref_key:"scrollAreaRef",ref:a,class:"full-height"},{default:s(()=>[p("div",ie,[p("div",ce,[(m(!0),I(z,null,j(i(o).getters.getMessages,(g,P)=>(m(),h($,{key:P,class:"q-py-xs",name:g.author,sent:g.author===i(o).getters.getUsername,size:"4",text:g.text},null,8,["name","sent","text"]))),128)),i(o).state.botIsTyping?(m(),h($,{key:0,class:"q-py-xs",name:i(o).state.botName,size:"4"},{default:s(()=>[e(G,{size:"2em"})]),_:1},8,["name"])):H("",!0)])])]),_:1},512)])]),_:1}),e(V),e(y,null,{default:s(()=>[e(B,{modelValue:n.value,"onUpdate:modelValue":f[2]||(f[2]=g=>n.value=g),color:"teal",outlined:"",rounded:"",onKeyup:f[3]||(f[3]=T(g=>l(n.value),["enter"]))},{append:s(()=>[e(b,{color:"teal",dense:"",disabled:i(o).state.botIsTyping,flat:"",icon:"send",round:"",onClick:f[1]||(f[1]=g=>l(n.value))},{default:s(()=>[e(M,{class:"bg-teal"},{default:s(()=>[ue]),_:1})]),_:1},8,["disabled"])]),_:1},8,["modelValue"])]),_:1})]),_:1}))}}),fe=p("div",{class:"text-h6"}," Introduce yourself ",-1),pe=w({setup(t){const o=J(),r=x(v),n=S("");function a(){n.value.length>0&&(r.commit("enterName",n),r.dispatch("createConnection").catch(l=>{l.reason==="error"?o.notify({actions:[{color:"white",handler:()=>{window.location.reload()},label:"Try Again"}],type:"negative",message:l.message,timeout:0}):o.notify({actions:[{color:"black",handler:()=>{window.location.reload()},label:"Reload"}],type:"warning",message:l.message,timeout:0})}))}return(l,d)=>(m(),h(L,{modelValue:i(r).getters.getNameModalOpen,"onUpdate:modelValue":d[1]||(d[1]=c=>i(r).getters.getNameModalOpen=c),persistent:""},{default:s(()=>[e(Q,{style:{"min-width":"350px"}},{default:s(()=>[e(y,null,{default:s(()=>[fe]),_:1}),e(y,{class:"q-pt-none"},{default:s(()=>[e(B,{modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=c=>n.value=c),color:"teal",dense:"",rules:[c=>!!c||"Name is required"],onKeyup:T(a,["enter"])},null,8,["modelValue","rules","onKeyup"])]),_:1}),e(C,{align:"right",class:"text-primary"},{default:s(()=>[e(b,{color:"teal",flat:"",label:"Enter",onClick:a})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),me={class:"row items-center no-wrap"},ge=p("h1",{class:"col-grow text-h4"}," Eliza Chatbot ",-1),he=u(" Close "),_e={class:"text-body1 text-grey-8"},be=u(" This app is an implementation of "),ye=u(" Websockets chatbot made with Vue3, Vite & Quasar Framework. "),we=p("p",{class:"text-body1 text-grey-8"},[u(" Send "),p("span",{class:"text-pink-7 text-subtitle2"},"quit"),u(" to finish conversation and disconnect. ")],-1),ve=p("h2",{class:"text-h6"}," Check out more ",-1),xe=u(" Source Code "),Se=u(" Chatbot Websockets Backend "),ke={class:"text-caption text-right text-grey-8"},Me=u(" App made by "),Ne=w({setup(t){const o=x(v);return(r,n)=>(m(),h(L,{modelValue:i(o).state.infoModalOpen,"onUpdate:modelValue":n[1]||(n[1]=a=>i(o).state.infoModalOpen=a),persistent:"",maximized:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:s(()=>[e(Q,{class:"row justify-center bg-blue-grey-1"},{default:s(()=>[e(y,{class:"column col-12 col-sm-10 col-md-8 col-lg-4 q-pa-lg",horizontal:""},{default:s(()=>[p("div",me,[ge,e(b,{dense:"",flat:"",icon:"close",onClick:n[0]||(n[0]=a=>i(o).commit("toggleModal"))},{default:s(()=>[e(M,{class:"bg-teal"},{default:s(()=>[he]),_:1})]),_:1})]),p("p",_e,[be,e(b,{color:"teal",flat:"",href:"https://en.wikipedia.org/wiki/ELIZA",label:"Eliza",padding:"xs xs"}),ye]),we,ve,e(Z,null,{default:s(()=>[q((m(),h(N,{clickable:"",href:"https://github.com/super16/eliza-chatbot"},{default:s(()=>[e(_,{avatar:""},{default:s(()=>[e(E,{name:"code"})]),_:1}),e(_,null,{default:s(()=>[xe]),_:1})]),_:1})),[[A]]),q((m(),h(N,{clickable:"",href:"https://github.com/super16/eliza-chatbot-fastapi"},{default:s(()=>[e(_,{avatar:""},{default:s(()=>[e(E,{name:"source"})]),_:1}),e(_,null,{default:s(()=>[Se]),_:1})]),_:1})),[[A]])]),_:1}),p("p",ke,[Me,e(b,{color:"teal",flat:"",href:"https://github.com/super16",label:"super16","no-caps":"",padding:"xs xs",size:"sm"})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Qe=w({setup(t){return(o,r)=>(m(),I(z,null,[e(pe),e(Ne),e(X,{class:"bg-blue-grey-2"},{default:s(()=>[e(Y,{class:"row justify-center"},{default:s(()=>[e(ee,{class:"column col-12 col-sm-10 col-md-8 col-lg-4"},{default:s(()=>[e(de)]),_:1})]),_:1})]),_:1})],64))}});te(Qe).use(oe,{plugins:{Notify:se}}).use(ne,v).mount("#app");