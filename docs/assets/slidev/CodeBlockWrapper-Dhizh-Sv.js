import{I as A,J as E}from"../modules/unplugin-icons-gHFkEz3q.js";import{d as I,t as N,aB as q,D as v,a9 as D,z as C,aC as V,o as i,b as k,f as $,B as u,c as b,g as z,i as M,h as R}from"../modules/vue-B3VuktnJ.js";import{c as S,aj as U,aq as W,ar as j,b as J}from"../index-XZcTaRFQ.js";import{u as K}from"./context-BEpCVocU.js";const F=["title"],G=I({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:S.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(x){const e=x,{$clicksContext:a}=K(),o=N(),p=U();q(()=>{a.unregister(p)}),v(()=>{var t;(t=o.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),D(()=>{var m;if(!a||!((m=e.ranges)!=null&&m.length))return;const{start:t,end:s,delta:n}=a.resolve(e.at,e.ranges.length-1);a.register(p,{max:s,delta:n});const r=C(()=>Math.max(0,a.current-t+1)),c=C(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!o.value)return;let d=e.ranges[r.value]??c.value;const h=d==="hide";o.value.classList.toggle(W,h),h&&(d=e.ranges[r.value+1]??c.value);const f=o.value.querySelector(".shiki"),_=Array.from(f.querySelectorAll("code > .line")),w=_.length;if(j(d,w,e.startLine,l=>[_[l]]),e.maxHeight){const l=Array.from(f.querySelectorAll(".line.highlighted"));l.reduce((y,L)=>L.offsetHeight+y,0)>o.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:B}=V();function H(){var s,n;const t=(n=(s=o.value)==null?void 0:s.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&B(t)}return(t,s)=>{const n=A,r=E;return i(),k("div",{ref_key:"el",ref:o,class:M(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:R({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[$(t.$slots,"default"),u(S).codeCopy?(i(),k("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(g)?"Copied":"Copy",onClick:s[0]||(s[0]=c=>H())},[u(g)?(i(),b(n,{key:0,class:"p-2 w-8 h-8"})):(i(),b(r,{key:1,class:"p-2 w-8 h-8"}))],8,F)):z("v-if",!0)],6)}}}),Y=J(G,[["__file","/Users/laurie/Desktop/doc/slides/test_slidev/montest/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Y as _};
