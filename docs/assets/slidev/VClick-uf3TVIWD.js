import{d as _,a9 as C,D as S,o as z,c as V,F as w,ax as B,v as n,ay as f,az as I,l as $,ac as D,aA as G}from"../modules/vue-B3VuktnJ.js";import{aj as M,b as T,ak as F,al as L,C as j}from"../index-XZcTaRFQ.js";import{u as E}from"./context-BEpCVocU.js";const K=_({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(l){const o=l,{$clicksContext:s}=E();return C(()=>{S(p=>{if(!s)return;let i=+o.size;Number.isNaN(i)&&(console.warn(`[slidev] Invalid size for VClickGap: ${o.size}`),i=1);const c=s.currentOffset+i-1,t=M();s.register(t,{max:c,delta:i}),p(()=>s.unregister(t))})}),(p,i)=>(z(),V(w))}}),O=T(K,[["__file","/Users/laurie/Desktop/doc/slides/test_slidev/montest/node_modules/@slidev/client/builtin/VClickGap.vue"]]),k=["ul","ol"],P=_({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var N,b;const l=+this.every,[o,s]=F(this.at),p=B("click"),i=(a,e)=>D(a,[[p,e,"",{hide:this.hide,fade:this.fade}]]),c=a=>a.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?c(e.children):[e]);let t=(b=(N=this.$slots).default)==null?void 0:b.call(N);if(!t)return;t=c(L(t));const x=(a,e=1)=>c(a).map(r=>{if(!f(r))return r;if(k.includes(r.type)&&Array.isArray(r.children)){const d=u(r.children,e+1);return n(r,{},d)}return n(r)});let A=1,h=0;const u=(a,e=1)=>c(a).map(r=>{if(!f(r)||r.type===I)return r;const d=+s+Math.ceil(A++/l)-1;let m;e<+this.depth&&Array.isArray(r.children)?m=n(r,{},x(r.children,e)):m=n(r);const v=d-h;return h=d,i(m,o?v>=0?`+${v}`:`${v}`:d)}),y=()=>$(O,{size:+s+Math.ceil((A-1)/l)-1-h});if(t.length===1&&k.includes(t[0].type)&&Array.isArray(t[0].children))return n(t[0],{},[...u(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const a=t[0];if(Array.isArray(a.children))return n(a,{},a.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?n(e,{},[...u(e.children),y()]):n(e):e))}return[...u(t),y()]}}),q=_({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:l=>n("span",l)}},render(){return n(P,{every:j,at:this.at,hide:this.hide,fade:this.fade},{default:()=>{var l,o;return(o=(l=this.$slots).default)==null?void 0:o.call(l).map(s=>s.type===G?this.wrapText(s):s)}})}});export{q as _};