import{d as N,O as S,p as T,M as V,N as A,r as B,c as I,e as P,f as t,i as o,w as l,t as a,y as i,P as q,m as z,R as D}from"./Dh0iPWJ5.js";import{_ as E,a as M}from"./Bue7iu6A.js";import{_ as O}from"./CMrY3OeB.js";import U from"./BnB0NYg4.js";import F from"./CBGGXdH-.js";import{V as g,R as H}from"./CycI56u9.js";import{u as K}from"./Z7tgrDul.js";import{q as Q}from"./oB55I0-n.js";import{u as j}from"./CLNB0-ps.js";import{u as G}from"./CJ57T_tx.js";import{d as J}from"./nKF4mR5p.js";import{_ as W}from"./DlAUqK2U.js";import"./B6qyKnlD.js";import"./BTuasr17.js";import"./D_YpCxqB.js";import"./CUBC85wn.js";import"./BVzaEogQ.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./DsNhwJii.js";import"./DJwp9WIK.js";const X={class:"selection:bg-white/60 selection:text-zinc-800"},Y={class:"text-sm font-extralight"},Z={class:"writing prose mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},tt={class:"info-section mt-1 flex flex-col gap-2 sm:flex-row sm:gap-4"},ot=N({__name:"[...slug]",async setup(et){let r,m;const{t:c,locale:x}=S(),p=T(),{data:e}=([r,m]=V(()=>K(`${p.path}`,()=>Q(p.path).findOne())),r=await r,m(),r);if(!e.value)throw A({statusCode:404,statusMessage:"Page not found"});j(e.value);const h=z(),w=B(`${h.public.siteUrl}${e.value._path}`),{copy:u}=G({source:w.value});function v(){u(),g.success(c("global.article_link_copied"))}return J({meta_k:{usingInput:!0,handler:()=>{u(),g.success(c("global.article_link_copied"))}}}),(s,n)=>{var _,d,f;const y=D,k=E,C=O,b=U,$=F,R=M;return I(),P("div",X,[t("div",null,[o(y,{to:"/writing",class:"mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted transition-colors duration-200 hover:text-main sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"},{default:l(()=>[n[0]||(n[0]=t("span",{class:"i-lucide-arrow-left size-4"},null,-1)),t("span",Y,a(s.$t("navigation.writing")),1)]),_:1}),o(k,{class:"fixed bottom-4 right-4 sm:bottom-4"}),t("article",Z,[t("h1",null,a((_=i(e))==null?void 0:_.title),1),t("div",tt,[t("p",null,a((d=i(e))==null?void 0:d.date),1),n[1]||(n[1]=t("p",{class:"hidden sm:block"}," | ",-1)),t("p",null,a((f=i(e))==null?void 0:f.readingTime)+" "+a(s.$t("writing.readingTime")),1),n[2]||(n[2]=t("p",{class:"hidden sm:block"}," | ",-1)),o(C,{text:s.$t("writing.copy_link"),shortcuts:["⌘","K"]},{default:l(()=>[t("p",{class:"flex cursor-pointer select-none items-center gap-1 transition-colors duration-200 hover:text-main",onClick:v},a(s.$t("writing.share")),1)]),_:1},8,["text"])]),o($,{path:(s._.provides[q]||s.$route).path,locale:i(x),find:"one"},{default:l(({data:L})=>[o(b,{value:L},null,8,["value"])]),_:1},8,["path","locale"])]),o(R,{class:"pt-6"}),o(i(H),{"close-button":""})])])}}}),bt=W(ot,[["__scopeId","data-v-0190544e"]]);export{bt as default};