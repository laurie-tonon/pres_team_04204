import{d as _,aa as u,z as h,b as a,e as t,x as s,B as r,F as f,a8 as v,o as l,ab as g,l as x,g as b}from"../modules/vue-B3VuktnJ.js";import{u as N,j as y,c as m,b as k}from"../index-XZcTaRFQ.js";import{N as w}from"./NoteDisplay-DudHGOb7.js";import"../modules/shiki-CQlAhvc8.js";const B={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:d,total:p}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),a("div",B,[t("div",D,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(l(!0),a(f,null,v(i.value,(e,c)=>(l(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(r(p)),1),g(" "+s(e==null?void 0:e.title)+" ",1),z])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(l(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),$=k(F,[["__file","/Users/laurie/Desktop/doc/slides/test_slidev/montest/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{$ as default};
