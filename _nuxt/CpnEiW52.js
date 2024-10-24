import{_ as C}from"./Drdg6kvU.js";import{_ as P}from"./DHz0RSXC.js";import{c as w}from"./DJ5N8z8s.js";import{d as g,r as $,c as n,U as p,w as f,V as x,W as k,y as d,n as b,X as v,f as s,s as j,e as h,i as r,R as B,M as A,F as I,Y as N}from"./CP1vxl8s.js";import{_ as q}from"./DlAUqK2U.js";import{r as m}from"./Cr2Ye6En.js";import{u as Z}from"./DNchuUq6.js";import{q as D}from"./CD6O5XVb.js";import"./DZl1gAQ4.js";import"./Dnd51l0P.js";import"./BmMokTMZ.js";const L=g({__name:"BaseSpotlightCard",props:{as:{type:String,default:"div"},from:{type:String,default:"rgba(255,255,255,0.8)"},via:{type:String,required:!1,default:null},to:{type:String,default:"transparent"},size:{type:Number,default:400},mode:{type:String,default:"before"}},setup(t){const e=t,i=$(),{elementX:u,elementY:a}=w(i),c=[e.from,e.via,e.to].filter(o=>!!o).join(",");return(o,l)=>(n(),p(v(t.as),{ref_key:"card",ref:i,style:k({"--x":`${d(u)}px`,"--y":`${d(a)}px`,"--spotlight-color-stops":d(c),"--spotlight-size":`${t.size}px`}),class:b([{"before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="before","after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="after"},"relative transform-gpu overflow-hidden"])},{default:f(()=>[x(o.$slots,"default")]),_:3},8,["style","class"]))}}),R={class:"relative flex h-full flex-col"},S=g({__name:"SpotlightCard",props:{as:{type:String,default:"div"},from:{type:String,default:"rgba(255,255,255,0.8)"},via:{type:String,required:!1,default:null},to:{type:String,default:"transparent"},size:{type:Number,default:250},mode:{type:String,default:"before"},white:{type:Boolean,default:!1},radius:{type:String,default:"2xl"}},setup(t){const e=t,i=$(),{elementX:u,elementY:a}=w(i),c=[e.from,e.via,e.to].filter(o=>!!o).join(",");return(o,l)=>{const _=L;return t.white?(n(),p(_,{key:1,from:"rgba(255,255,255,0.2)",class:"relative rounded-[--radius] [--radius:theme(borderRadius.xl)] lg:[--radius:theme(borderRadius.2xl)]"},{default:f(()=>[l[0]||(l[0]=s("div",{class:"absolute inset-x-0 bottom-[--radius] top-0 rounded-t-[--radius] bg-gradient-to-b from-white/20 to-transparent"},null,-1)),l[1]||(l[1]=s("div",{class:"absolute inset-x-[--radius] top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"},null,-1)),l[2]||(l[2]=s("div",{class:"absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-950"},null,-1)),l[3]||(l[3]=s("div",{class:"absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"},null,-1)),s("div",R,[x(o.$slots,"default")])]),_:3})):(n(),p(v(t.as),{key:0,ref_key:"card",ref:i,style:k({"--x":`${d(u)}px`,"--y":`${d(a)}px`,"--spotlight-color-stops":d(c),"--spotlight-size":`${t.size}px`}),class:b([{"before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="before","after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]":t.mode==="after"},"relative transform-gpu overflow-hidden"])},{default:f(()=>[x(o.$slots,"default")]),_:3},8,["style","class"]))}}}),V={class:"flex justify-center"},X={class:"relative"},Y=g({__name:"ProfilePicture",setup(t){const{profilePicture:e}=j();return(i,u)=>{const a=P,c=S;return n(),h("div",V,[r(c,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group hidden w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:flex"},{default:f(()=>[s("div",X,[r(a,{width:"256",src:d(e),class:"absolute inset-0 size-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",alt:"yjineey Profile Picture","aria-label":"yjineey Profile Picture"},null,8,["src"]),r(a,{width:"256",src:"/assets/hugo-richard-light.webp",class:"relative size-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0",alt:"yjineey Profile Picture","aria-label":"yjineey Profile Picture"})])]),_:1}),r(c,{mode:"after",from:"rgba(255,255,255,0.1)",size:400,class:"group w-64 rounded-2xl border border-white/10 bg-white/5 p-2 pb-4 sm:hidden"},{default:f(()=>[r(a,{width:"256",src:d(e),class:"size-64 rounded-xl object-cover transition-all duration-300",alt:"yjineey Profile Picture","aria-label":"yjineey Profile Picture"},null,8,["src"])]),_:1})])}}}),E={},F={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 375.38 299.03",width:"250",fill:"none",class:"signature"};function M(t,e){return n(),h("svg",F,e[0]||(e[0]=[s("path",{class:"signature","stroke-width":"2","stroke-linecap":"round",d:"m79.64,192.08c11.73,6.09,25.62,12.61,41.68,19.56,16.06,6.95,34.08,13.6,54.08,19.93,19.99,6.33,41.79,11.63,65.4,15.88,22.61,4.01,44.09,6.53,64.43,7.57,20.34,1.04,40.45.54,60.35-1.48,2.67-.3,4.9-.41,6.68-.33s2.82.51,3.12,1.3c.2.99-2.7,2.33-8.68,4.01-12.03,3.17-25.5,4.91-40.42,5.23-14.92.32-29.9-.24-44.95-1.67-15.04-1.44-28.78-3.24-41.2-5.42-23.16-4.11-44.6-9.22-64.32-15.33-19.72-6.11-37.61-12.58-53.67-19.41-16.06-6.83-30.1-13.39-42.12-19.67-1.63-.79-2.92-1.13-3.86-1-.94.12-1.66.51-2.15,1.15-.5.64-.89,1.36-1.19,2.15-3.56,9.11-6.95,18.55-10.17,28.32-3.22,9.77-6.36,19.61-9.43,29.51-3.46,11.38-7.03,22.52-10.69,33.4-.25.84-.69,1.63-1.34,2.38-.64.74-1.48,1.01-2.52.82-.79-.2-1.31-.66-1.56-1.37-.25-.72-.33-1.5-.26-2.34.07-.84.19-1.56.33-2.15,3.31-15.74,7.31-30.99,11.99-45.76,4.68-14.77,9.66-29.58,14.96-44.43.45-1.29.89-2.57,1.34-3.86.59-1.88.63-3.27.11-4.16s-1.3-1.58-2.34-2.08c-9.35-5.44-16.5-9.93-21.45-13.47-4.95-3.54-7.6-5.48-7.94-5.83l-.07-.07c-.94-.89-1.21-2.04-.82-3.45.4-1.41,1.21-2.44,2.45-3.08.64-.45,2.05-1.09,4.23-1.93,2.18-.84,4.5-1.68,6.98-2.52,2.47-.84,4.48-1.48,6.01-1.93,6.63-1.93,13.26-3.88,19.89-5.86,2.57-.79,5.17-1.58,7.79-2.38,2.33-.74,3.93-2.25,4.82-4.53,1.73-4.26,3.49-8.54,5.27-12.84,4.11-9.9,8.13-19.82,12.06-29.77,3.93-9.95,7.61-19.99,11.02-30.14.84-1.88,1.27-3.55,1.3-5.01.02-1.46-.78-2.04-2.41-1.74-11.09,2.67-23.16,6.52-36.22,11.54-13.06,5.02-25.55,10.91-37.45,17.67-11.9,6.75-21.69,13.99-29.36,21.71-1.63,1.68-2.52,3.74-2.67,6.16-.05.89-.37,1.56-.96,2s-1.26.59-2,.45c-1.93-.59-3.09-1.61-3.49-3.04-.4-1.43-.25-2.92.45-4.45,1.83-3.46,4.26-6.36,7.27-8.68,14.05-11.33,30-21.28,47.84-29.84,17.84-8.56,35.74-15.09,53.7-19.6,2.92-.74,5.06-1.37,6.42-1.89,1.36-.52,2.31-1.22,2.86-2.12.54-.89,1.09-2.23,1.63-4.01.25-.69.52-1.51.82-2.45.15-.45.43-1.1.85-1.97.42-.87.93-1.57,1.52-2.12.59-.54,1.24-.54,1.93,0,.84.74,1.34,1.6,1.48,2.56s.17,1.99.07,3.08v1.93c.05.5.33.98.85,1.45.52.47,1.05.68,1.6.63,1.93-.15,3.86-.32,5.79-.52,7.22-.74,14.3-1.31,21.23-1.71,6.93-.4,14.3-.4,22.12,0,4.21.2,9.19.93,14.96,2.19,5.76,1.26,11.29,3.11,16.59,5.53,5.29,2.43,9.3,5.47,12.03,9.13,2.87,4.35,3.77,8.61,2.71,12.77-1.06,4.16-3.28,8.08-6.64,11.77-3.37,3.69-7.09,6.99-11.17,9.91-4.08,2.92-7.76,5.32-11.02,7.2-15.34,9.16-30.47,16.86-45.39,23.12-14.92,6.26-30.52,12.31-46.8,18.15-2.48.89-4.97,1.81-7.5,2.75-2.97,1.04-5,2.09-6.09,3.15-1.09,1.06-2.2,2.98-3.34,5.75-1.58,3.61-3.15,7.55-4.71,11.8-1.56,4.26-2.81,7.72-3.75,10.39-.1.3-.2.57-.3.82-.4,1.14.07,2,1.41,2.6Zm-6.61-14.18c1.73-5,3.56-9.8,5.49-14.4.64-2.08-1.76-2.38-7.2-.89-.79.3-2.05.72-3.79,1.26-2.57.89-5.67,1.92-9.28,3.08-3.61,1.16-7.23,2.19-10.84,3.08-.69.2-1.01.54-.96,1.04.05.5.32.92.82,1.26.45.35.92.67,1.41.96,4.35,3.02,10.37,6.83,18.04,11.43.3.2.59.37.89.52.89.64,1.55.89,1.97.74.42-.15.9-1.01,1.45-2.6.69-1.78,1.36-3.61,2-5.49Zm137.14-107.33c-3.29-1.88-7.04-3.45-11.25-4.71-4.21-1.26-8.28-2.23-12.21-2.89-3.93-.67-7.16-1.08-9.69-1.22-8.96-.59-17.41-.59-25.35,0-7.94.59-16.22,1.56-24.83,2.89-2.08.4-3.49,1.56-4.23,3.49-.69,1.78-1.31,3.59-1.86,5.42-3.46,11.04-7.15,21.92-11.06,32.66-3.91,10.74-7.94,21.48-12.1,32.22-.15.4-.3.77-.45,1.11-.3.74-.59,1.72-.89,2.93-.3,1.21-.3,2.23,0,3.04s1.21.98,2.75.48c1.58-.54,3.17-1.09,4.75-1.63,15.14-5.2,29.77-10.6,43.87-16.22,14.1-5.62,28.23-12.43,42.38-20.45,2.18-1.24,4.99-2.97,8.42-5.2,3.44-2.23,6.8-4.75,10.1-7.57,3.29-2.82,5.81-5.75,7.57-8.8,1.76-3.04,2.07-6,.93-8.87-1.29-2.57-3.58-4.8-6.87-6.68Z"},null,-1),s("path",{class:"signature","stroke-width":"2","stroke-linecap":"round",d:"m170.91,9.09l-38.28,114.82c-.5.64-22.94,68.39-23.24,69.19-3.56,9.1-6.96,18.55-10.17,28.31-3.22,9.78-6.36,19.61-9.43,29.51-3.47,11.38-7.03,22.51-10.69,33.4-.25.84-.69,1.63-1.33,2.38-.65.74-1.49,1.02-2.53.82-.79-.2-1.31-.67-1.55-1.38-.26-.71-.34-1.49-.27-2.33.08-.84.19-1.56.34-2.16,3.31-15.73,7.32-30.99,11.99-45.76,4.68-14.76,9.66-29.58,14.96-44.42.44-1.28.89-2.57,1.33-3.86.6-1.88,15.37-45.87,14.85-46.76L161.52,10.94c.54-.89,1.09-2.22,1.62-4,.26-.69.53-1.51.82-2.45.15-.44.44-1.1.86-1.96.42-.88.92-1.58,1.52-2.12.6-.54,1.24-.54,1.93,0,.84.75,1.34,1.6,1.49,2.57.14.96-.42,1.84-.51,2.94v1.93c.05.49-.09.49.44.96.47.41.59.27,1.07.28h.05l.11.02Z"},null,-1)]))}const O=q(E,[["render",M],["__scopeId","data-v-293d3aa5"]]),U=g({__name:"StackItem",props:{item:{type:Object,required:!0}},setup(t){return(e,i)=>{const u=B,a=S;return n(),p(a,{white:"",class:"p-6"},{default:f(()=>[r(u,{to:t.item.link,target:"_blank","aria-label":t.item.name+" link",class:"flex gap-2"},{default:f(()=>[(n(),p(v(t.item.logo),{class:b(["size-8 text-main",t.item.logo.includes("Color")?"":"text-main"]),"font-controlled":!1,alt:t.item.name+" logo",filled:t.item.logo.includes("Color"),"aria-label":t.item.name+" logo"},null,8,["class","alt","filled","aria-label"]))]),_:1},8,["to","aria-label"])]),_:1})}}}),W={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},G={class:"font-newsreader italic text-white-shadow text-center text-4xl"},H={class:"text-center text-lg font-extralight italic text-muted"},J={class:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"},K={class:"relative flex flex-col gap-3 sm:ml-4"},Q={class:"flex flex-col gap-4 text-main"},T={class:"flex flex-col gap-3"},tt={class:"mb-6 flex flex-col gap-1"},et={class:"text-white-shadow font-newsreader italic text-3xl"},st={class:"text-sm text-muted"},at={class:"flex flex-wrap gap-4"},gt=g({__name:"About",async setup(t){let e,i;const{data:u}=([e,i]=A(()=>Z("stack",()=>D("/stack").findOne())),e=await e,i(),e);return(a,c)=>{const o=C,l=Y,_=O,z=U;return n(),h("section",W,[s("h1",G,[m(a.$slots,"title")]),s("h2",H,[m(a.$slots,"subtitle")]),r(o,{class:"mb-8 mt-2"}),s("div",J,[r(l),s("div",K,[c[0]||(c[0]=s("h3",{class:"text-lg text-muted"}," Intro ",-1)),s("div",Q,[m(a.$slots,"intro")]),r(_,{class:"absolute -bottom-24 right-0 hidden w-40 sm:block"}),r(_,{class:"black absolute -bottom-24 -right-2 w-32 sm:hidden"})])]),r(o,{class:"my-8"}),m(a.$slots,"experiences"),r(o,{class:"my-8"}),s("div",T,[s("div",tt,[s("h3",et,[m(a.$slots,"stack_title")]),s("p",st,[m(a.$slots,"stack_description")])]),s("div",at,[(n(!0),h(I,null,N(d(u).items,y=>(n(),p(z,{key:y.name,item:y},null,8,["item"]))),128))])])])}}});export{gt as default};