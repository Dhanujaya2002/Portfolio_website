(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1433:function(e,t,r){Promise.resolve().then(r.bind(r,7826)),Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.bind(r,9201)),Promise.resolve().then(r.bind(r,9380)),Promise.resolve().then(r.bind(r,8919)),Promise.resolve().then(r.t.bind(r,2126,23)),Promise.resolve().then(r.t.bind(r,7402,23))},7826:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(9268);r(6006);var i=r(8121),n=r(8691),o=r(5846),s=r.n(o),l=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,a,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(a=e(t[r]))&&(i&&(i+=" "),i+=a);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(a&&(a+=" "),a+=t);return a},c=r(9201);function d(){let{activeSection:e,setActiveSection:t,setTimeOfLastClick:r}=(0,c.useActiveSectionContext)();return(0,a.jsxs)("header",{className:"z-[999] relative",children:[(0,a.jsx)(i.E.div,{className:"fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75",initial:{y:-100,x:"-50%",opacity:0},animate:{y:0,x:"-50%",opacity:1}}),(0,a.jsx)("nav",{className:"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0",children:(0,a.jsx)("ul",{className:"flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5",children:n.Ok.map(n=>(0,a.jsx)(i.E.li,{className:"h-3/4 flex items-center justify-center relative",initial:{y:-100,opacity:0},animate:{y:0,opacity:1},children:(0,a.jsxs)(s(),{className:l("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",{"text-gray-950 dark:text-gray-200":e===n.name}),href:n.hash,onClick:()=>{t(n.name),r(Date.now())},children:[n.name,n.name===e&&(0,a.jsx)(i.E.span,{className:"bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800",layoutId:"activeSection",transition:{type:"spring",stiffness:380,damping:30}})]})},n.hash))})})]})}},8302:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(9268),i=r(9380);r(6006);var n=r(8136);function o(){let{theme:e,toggleTheme:t}=(0,i.useTheme)();return(0,a.jsx)("button",{className:"fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950",onClick:t,children:"light"===e?(0,a.jsx)(n.eSY,{}):(0,a.jsx)(n.s1t,{})})}},9201:function(e,t,r){"use strict";r.r(t),r.d(t,{ActiveSectionContext:function(){return n},default:function(){return o},useActiveSectionContext:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("Home"),[s,l]=(0,i.useState)(0);return(0,a.jsx)(n.Provider,{value:{activeSection:r,setActiveSection:o,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},9380:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o},useTheme:function(){return s}});var a=r(9268),i=r(6006);let n=(0,i.createContext)(null);function o(e){let{children:t}=e,[r,o]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let e=window.localStorage.getItem("theme");e?(o(e),"dark"===e&&document.documentElement.classList.add("dark")):window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.classList.add("dark"))},[]),(0,a.jsx)(n.Provider,{value:{theme:r,toggleTheme:()=>{"light"===r?(o("dark"),window.localStorage.setItem("theme","dark"),document.documentElement.classList.add("dark")):(o("light"),window.localStorage.setItem("theme","light"),document.documentElement.classList.remove("dark"))}},children:t})}function s(){let e=(0,i.useContext)(n);if(null===e)throw Error("useTheme must be used within a ThemeContextProvider");return e}},8691:function(e,t,r){"use strict";r.d(t,{$c:function(){return o},Ok:function(){return n},nD:function(){return s},ZU:function(){return l}});var a=r(6006),i=r(7782);let n=[{name:"Home",hash:"#home"},{name:"About",hash:"#about"},{name:"Projects",hash:"#projects"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Contact",hash:"#contact"}],o=[{title:"BSc IT Undergraduate",location:"University of Sri Jayewardenepura, Sri Lanka",description:"As an undergraduate, I am gaining practical experience in web designing and web development through hands-on projects and coursework, allowing me to apply my skills in real-world scenarios",icon:a.createElement(i.qWM),date:"2022 - present"}],s=[{title:"Past Paper Library",description:"This is a group project of a past paper management system created with Java and designed with forms and images for user and admin interfaces.",tags:["OOP","SQL"],imageUrl:{src:"/_next/static/media/pastpaper.afe9c2cb.png",height:720,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAARklEQVR42iVJCQ7AIAjz/5+dOkEoqGtmk96l1vbU1l8h6SI6hjytF9HpgE4zh7kjInOx8dAgAMr6cc5hLma2985IOO56jw8Nk107eZwbGwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},{title:"IT Community Mobile App",description:"A mobile app designed for IT students, featuring resources like past papers, learning aids, and departmental news.",tags:["React","Figma","JavaScript","SQL"],imageUrl:{src:"/_next/static/media/IT.f42ced59.png",height:720,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42mP48fPn0SOHJk5fNHvn/SnrzvX09Bw9euz79x8M////X792NQODltakk/ZTTzAwMKxetRIoCJLYtGkTkB+anOuQmgdkrFyxAiqxccNaPbeUSSvOzFxz3N03as2a1f///wcAAic7i+cRtJ8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},{title:"News Website UI design",description:"A news website UI design for university student to get all the information around them. ",tags:["React","Figma","SQL","CSS"],imageUrl:{src:"/_next/static/media/News.0144e605.png",height:720,width:1366,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42mP49evXHiDYvfvCuXO9fX29/f1Hjx79/v07w////69cvz6ttq5JQTNT34qBgWHt2rVAQZDEwydPlnR2VTAwTPUJj2dg2LBlM1Riw8b14c7Jy5ecWLX2RGJY2vr16/7//w8AnM8+3IYg1boAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}}],l=["HTML","CSS","JavaScript","UI/UX Design","Figma","Adobe Photoshop","React","Next.js","Tailwind","PostgreSQL","Python","Java","SQL","OOP","Problem-solving","Time Management","Collaboration","Adaptability","Communication","Resource management","Leadership"]},7402:function(){},2126:function(e){e.exports={style:{fontFamily:"'__Inter_a184c8', '__Inter_Fallback_a184c8'",fontStyle:"normal"},className:"__className_a184c8"}},8919:function(e,t,r){"use strict";let a,i;r.r(t),r.d(t,{CheckmarkIcon:function(){return Q},ErrorIcon:function(){return J},LoaderIcon:function(){return F},ToastBar:function(){return ee},ToastIcon:function(){return G},Toaster:function(){return ei},default:function(){return en},resolveValue:function(){return E},toast:function(){return $},useToaster:function(){return M},useToasterStore:function(){return R}});var n,o=r(6006);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let r="",a="",i="";for(let n in e){let o=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+o+";":a+="f"==n[1]?m(o,n):n+"{"+m(o,"k"==n[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=o&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(n,o):n+":"+o+";")}return r+(t&&i?t+"{"+i+"}":i)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+f(e[r]);return t}return e},g=(e,t,r,a,i)=>{var n;let o=f(e),s=p[o]||(p[o]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(o));if(!p[s]){let t=o!==e?e:(e=>{let t,r,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=m(i?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),n=p[s],l?t.data=t.data.replace(l,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),s},h=(e,t,r)=>e.reduce((e,a,i)=>{let n=t[i];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"");function b(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let y,x,v,A=b.bind({k:1});function w(e,t){let r=this||{};return function(){let a=arguments;function i(n,o){let s=Object.assign({},n),l=s.className||i.className;r.p=Object.assign({theme:x&&x()},s),r.o=/ *go\d+/.test(l),s.className=b.apply(r,a)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),v&&c[0]&&v(s),y(c,s)}return t?t(i):i}}var k=e=>"function"==typeof e,E=(e,t)=>k(e)?e(t):e,S=(a=0,()=>(++a).toString()),j=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},C=new Map,I=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),U({type:4,toastId:e})},1e3);C.set(e,t)},N=e=>{let t=C.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&N(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?O(e,{type:1,toast:r}):O(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?I(a):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},P=[],T={toasts:[],pausedAt:void 0},U=e=>{T=O(T,e),P.forEach(e=>{e(T)})},L={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,r]=(0,o.useState)(T);(0,o.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||L[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},_=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||S()}),z=e=>(t,r)=>{let a=_(t,e,r);return U({type:2,toast:a}),a.id},$=(e,t)=>z("blank")(e,t);$.error=z("error"),$.success=z("success"),$.loading=z("loading"),$.custom=z("custom"),$.dismiss=e=>{U({type:3,toastId:e})},$.remove=e=>U({type:4,toastId:e}),$.promise=(e,t,r)=>{let a=$.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>($.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{$.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var D=(e,t)=>{U({type:1,toast:{id:e,height:t}})},H=()=>{U({type:5,time:Date.now()})},M=e=>{let{toasts:t,pausedAt:r}=R(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&$.dismiss(t.id);return}return setTimeout(()=>$.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&U({type:6,time:Date.now()})},[r]),i=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:n}=r||{},o=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:D,startPause:H,endPause:a,calculateOffset:i}}},J=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,F=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${A`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,Q=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${A`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=w("div")`
  position: absolute;
`,B=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${A`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(Y,null,t):t:"blank"===r?null:o.createElement(B,null,o.createElement(F,{...a}),"loading"!==r&&o.createElement(V,null,"error"===r?o.createElement(J,{...a}):o.createElement(Q,{...a})))},W=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,X=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,q=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,K=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=j()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[W(r),X(r)];return{animation:t?`${A(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${A(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Z(e.position||t||"top-center",e.visible):{opacity:0},n=o.createElement(G,{toast:e}),s=o.createElement(K,{...e.ariaProps},E(e.message,e));return o.createElement(q,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:n,message:s}):o.createElement(o.Fragment,null,n,s))});n=o.createElement,m.p=void 0,y=n,x=void 0,v=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let n=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:n,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:j()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:n,containerClassName:s})=>{let{toasts:l,handlers:c}=M(r);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(r=>{let n=r.position||t,s=er(n,c.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(et,{id:r.id,key:r.id,onHeightUpdate:c.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?E(r.message,r):i?i(r):o.createElement(ee,{toast:r,position:n}))}))},en=$}},function(e){e.O(0,[680,166,584,253,769,744],function(){return e(e.s=1433)}),_N_E=e.O()}]);