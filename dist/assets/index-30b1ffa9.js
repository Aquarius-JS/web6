import{_ as h,r as n,o as f,w as g,u as _,a as d,c as l,F as m,b as x,d as b,e as y,f as s,t as e,p as I,g as w}from"./index-41ed546b.js";import{v as k}from"./request-f06beff8.js";import{t as B,E as L}from"./tiezi-ea6d2b94.js";const r=a=>(I("data-v-ab24374d"),a=a(),w(),a),S={class:"five"},D={class:"card-body"},E={class:"top"},A={class:"title"},C={class:"detail"},F={class:"bottom"},z=r(()=>s("span",{class:"id"},"用户id: ",-1)),M={class:"i1"},N=r(()=>s("span",{class:"id"},"帖子id: ",-1)),P={class:"i2"},V={__name:"index",setup(a){let i=n(""),o=n(!1);async function p(){o.value=!0;let c=await B.getAll();i.value=c.data,o.value=!1}return f(()=>{p()}),(c,j)=>{const u=L,v=k;return g((d(),l("div",S,[(d(!0),l(m,null,x(_(i),t=>(d(),b(u,{key:t.id,class:"card"},{default:y(()=>[s("div",D,[s("div",E,[s("div",A,[s("span",null,e(t.title),1)]),s("div",C,[s("span",null,e(t.body),1)])]),s("div",F,[s("div",null,[z,s("span",M,e(t.userId),1)]),s("div",null,[N,s("span",P,e(t.id),1)])])])]),_:2},1024))),128))])),[[v,_(o)]])}}},J=h(V,[["__scopeId","data-v-ab24374d"]]);export{J as default};
