const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./E_CnC7H0.js","./Dt8JS0bu.js","./fgAckFos.js","./BnCuOKQX.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{m as f,aw as p,_ as v,d as g,ax as d,B as l,l as h,ag as _,G as r,R as w}from"./Dt8JS0bu.js";import{u as y}from"./DMh23iPI.js";import{q as C,w as m,e as P,s as $,j as N,u as j}from"./fgAckFos.js";import{u as T}from"./BnCuOKQX.js";const x=async e=>{const{content:t}=f().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${P(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if($())return(await v(()=>import("./E_CnC7H0.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:N(a),previewToken:T().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=g({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=d(e),a=l(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&h("dd-navigation").value){const{navigation:n}=j();return{navigation:n}}const{data:s}=await y(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=_(),{navigation:a}=e,s=o=>r(w,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),O=D;export{O as default};
