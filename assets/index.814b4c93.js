var x=Object.defineProperty;var y=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var v=(r,t,n)=>t in r?x(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,w=(r,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(r,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&v(r,n,t[n]);return r};import{j as g,F as C,a as L,r as p,R as B,b as P}from"./vendor.210fed97.js";const D=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};D();const e=g.exports.jsx,i=g.exports.jsxs,F=g.exports.Fragment,m=({title:r,children:t,style:n,id:d})=>i("article",{style:w({width:"25vw"},n),id:d,children:[e("h1",{style:{fontSize:"2.5rem",marginBottom:4,color:"white"},children:r}),e("p",{style:{fontSize:"1.25rem",margin:0,color:"white"},children:t})]}),c={margin:0,fontSize:20,marginBottom:6},I=({})=>i("footer",{children:[e("div",{style:{width:"100%",height:150,overflow:"hidden"},id:"kontakt",children:e("div",{style:{width:0,backgroundColor:"transparent",height:"0",borderBottom:"150px solid black",borderRight:"100vw solid transparent"}})}),i("div",{style:{backgroundColor:"black",color:"white",paddingLeft:60,paddingRight:60},children:[e("h1",{children:"Kontakt"}),i("div",{style:{display:"flex",flexDirection:"row",width:"100%",paddingTop:20,paddingBottom:40},children:[i("div",{style:{flex:1,display:"flex",flexDirection:"row"},children:[e(C,{color:"white",size:25}),i("div",{style:{marginLeft:10},children:[e("p",{style:c,children:"ul. Legion\xF3w 66"}),e("p",{style:c,children:"05-200 Wo\u0142omin"}),e("p",{style:c,children:"pn-nd 04:20-21:37"})]})]}),i("div",{style:{flex:1,display:"flex",flexDirection:"row"},children:[e(L,{color:"white",size:25}),i("div",{style:{marginLeft:10},children:[e("p",{style:c,children:"22 787 83 27"}),e("p",{style:c,children:"05-200 Wo\u0142omin"})]})]})]})]})]}),j=()=>e("svg",{style:{marginBottom:"-4px"},width:"100%",viewBox:"0 0 1438 800",fill:"none",children:e("path",{d:"M 1130,9.50004 C 1289.06,-12.0139 1385.5,21.5 1438,100.5 V 800 H 0 V 593 c 220.985,96.535 418.995,175.503 657,41.5 119,-67 56.397,-211.375 119.5,-347 67,-144 128,-247.5 353.5,-277.99996 z",fill:"#f2c94c"})}),z=()=>e("svg",{width:"100%",viewBox:"0 0 1438 283",fill:"none",children:e("path",{d:"m 0,0 h 1438 l 0,101.3815 c 0,0 -137.61,122.78 -246,160 -242.76692,83.36 -380.98185,-150.864 -637.49985,-160 -218.649,-7.788005 -554.50002481,80 -554.50002481,80 z",fill:"#f2c94c"})}),S=({children:r})=>i(F,{children:[e("div",{style:{backgroundColor:"#2F80ED",height:"24vw",position:"relative"},children:r}),e("div",{style:{backgroundColor:"#2F80ED",width:"100%",height:"25vw",borderBottomLeftRadius:"100% 200%",borderBottomRightRadius:"100% 200%"}})]});function h(r){var t;(t=document.getElementById(r))==null||t.scrollIntoView({behavior:"smooth"})}const a=({children:r,onClick:t=()=>{},filled:n=!1})=>{const[d,o]=p.exports.useState(!1);return console.log(d),i("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"6px 12px",backgroundColor:n?"#002ED2":void 0,borderRadius:"10px",cursor:"pointer"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:t,children:[e("h2",{style:{margin:0,color:n?"#ffffff":void 0},children:r}),e("div",{className:"PrimaryButtonUnderline",style:{width:d?"100%":"0%",backgroundColor:n?"#FFFFFF":void 0}})]})},E=({onClick:r=()=>{}})=>e("h1",{style:{margin:0,cursor:"pointer"},onClick:r,children:"LOGO"});const R=({})=>{const[r,t]=p.exports.useState(0),n=()=>{const d=window.pageYOffset;t(d)};return p.exports.useEffect(()=>(window.addEventListener("scroll",n,{passive:!0}),n(),()=>{window.removeEventListener("scroll",n)}),[]),i("header",{className:`header ${r>10?"sticky-header":"solid-header"}`,style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[e(E,{onClick:()=>{h("header")}}),i("div",{style:{display:"flex",flexDirection:"row",gap:5},children:[e(a,{onClick:()=>{h("o-nas")},children:"O Nas"}),e(a,{onClick:()=>{h("cennik")},children:"Cennik"}),e(a,{onClick:()=>{h("kontakt")},children:"Kontakt"}),e(a,{filled:!0,children:"Zaloguj si\u0119"})]})]})};const f=({title:r,price:t,children:n})=>i("div",{className:"PlanCardContainer",children:[i("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"space-between"},children:[e("h1",{style:{fontSize:"2.5rem",marginBottom:4},children:r}),i("h2",{style:{fontSize:"1.5rem",marginBottom:4},children:[t," z\u0142"]})]}),e("ul",{children:n}),e(a,{filled:!0,children:"Zam\xF3w"})]}),l=({children:r,enabled:t})=>e("li",{className:`PlanPoint ${t?"":"PlanPointDisabled"}`,children:r}),O=()=>i("div",{style:{display:"flex",flexDirection:"column",gap:60},id:"header",children:[e(R,{}),i("div",{children:[i("div",{style:{position:"relative"},children:[e(j,{}),i("div",{style:{position:"absolute",top:"3vw",left:"5vw",width:"50vw"},children:[e("h1",{style:{fontWeight:"bold",fontSize:"3rem"},children:"Lorem ipsum"}),e("h2",{style:{fontWeight:"normal",fontSize:"2rem"},children:"dolor sit, amet consectetur adipisicing elit."})]})]}),i("div",{style:{position:"relative"},id:"o-nas",children:[e("div",{style:{width:"100%",zIndex:2,backgroundColor:"#2F80ED"},children:e(z,{})}),i(S,{children:[e(m,{style:{position:"absolute",top:"4vw",left:"12vw"},title:"Lorem Ipsum",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit amet, sagittis ac lectus."}),e(m,{style:{position:"absolute",top:"12vw",left:"60vw"},title:"Lorem Ipsum",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit amet, sagittis ac lectus."}),e(m,{style:{position:"absolute",top:"24vw",left:"25vw"},title:"Lorem Ipsum",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus rhoncus mi. Integer quam justo, condimentum et aliquet sit amet, sagittis ac lectus."})]})]}),i("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",gap:"2%",marginTop:"3vw",marginBottom:"3vw"},id:"cennik",children:[i(f,{title:"Basic",price:5.99,children:[e(l,{enabled:!0,children:"abc"}),e(l,{enabled:!0,children:"def"}),e(l,{children:"ghi"}),e(l,{children:"jkl"}),e(l,{children:"mno"}),e(l,{children:"prs"}),e(l,{children:"tuw"}),e(l,{children:"xyz"})]}),i(f,{title:"Pro",price:14.99,children:[e(l,{enabled:!0,children:"abc"}),e(l,{enabled:!0,children:"def"}),e(l,{enabled:!0,children:"ghi"}),e(l,{enabled:!0,children:"jkl"}),e(l,{enabled:!0,children:"mno"}),e(l,{children:"prs"}),e(l,{children:"tuw"}),e(l,{children:"xyz"})]}),i(f,{title:"VIP",price:39.99,children:[e(l,{enabled:!0,children:"abc"}),e(l,{enabled:!0,children:"def"}),e(l,{enabled:!0,children:"ghi"}),e(l,{enabled:!0,children:"jkl"}),e(l,{enabled:!0,children:"mno"}),e(l,{enabled:!0,children:"prs"}),e(l,{enabled:!0,children:"tuw"}),e(l,{enabled:!0,children:"xyz"})]})]}),e(I,{})]})]});B.render(e(P.StrictMode,{children:e(O,{})}),document.getElementById("root"));
//# sourceMappingURL=index.814b4c93.js.map