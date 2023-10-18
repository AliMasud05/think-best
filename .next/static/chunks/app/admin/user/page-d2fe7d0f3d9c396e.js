(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{49750:function(e,r,n){Promise.resolve().then(n.bind(n,35408))},35408:function(e,r,n){"use strict";n.r(r);var d=n(57437),l=n(29222),c=n(2265),m=n(5925);r.default=()=>{let[e,r]=(0,c.useState)([]),[n,f]=(0,c.useState)(!1),handleDeleteUser=e=>{let r="https://think-best.vercel.app/api/auth/register?id=".concat(e);l.Z.delete(r).then(()=>{m.ZP.success("Successfully delete!"),f(!1),getUser()}).catch(e=>{console.error("Error deleting user:",e)})},getUser=()=>{l.Z.get("https://think-best.vercel.app/api/auth/register").then(e=>{r(e.data)}).catch(e=>{console.error("Error fetching data:",e)})};return getUser(),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"overflow-x-auto",children:[(0,d.jsx)("div",{}),(0,d.jsxs)("table",{className:"table",children:[(0,d.jsx)("thead",{children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{}),(0,d.jsx)("th",{children:"Name"}),(0,d.jsx)("th",{children:"Job"}),(0,d.jsx)("th",{children:"Favorite Color"})]})}),n?"<div>loading</div>":(0,d.jsx)("tbody",{children:e.map(e=>(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("tr",{className:"bg-base-200",children:[(0,d.jsx)("th",{children:"1"}),(0,d.jsx)("td",{children:e.name}),(0,d.jsx)("td",{children:e.email}),(0,d.jsx)("button",{className:"bg-red-500 px-3 rounded font-bold py-2 text-base",onClick:()=>handleDeleteUser(e._id),children:"Delete"})]})}))})]})]})})}},5925:function(e,r,n){"use strict";let d,l;n.d(r,{ZP:function(){return Q}});var c,m=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,b=/\n+/g,o=(e,r)=>{let n="",d="",l="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":d+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?d+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),l+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&l?r+"{"+l+"}":l)+d},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,d,l)=>{var c;let m=s(e),f=y[m]||(y[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!y[f]){let r=m!==e?e:(e=>{let r,n,d=[{}];for(;r=h.exec(e.replace(g,""));)r[4]?d.shift():r[3]?(n=r[3].replace(b," ").trim(),d.unshift(d[0][n]=d[0][n]||{})):d[0][r[1]]=r[2].replace(b," ").trim();return d[0]})(e);y[f]=o(l?{["@keyframes "+f]:r}:r,n?"":"."+f)}let x=n&&y.g?y.g:null;return n&&(y.g=y[f]),c=y[f],x?r.data=r.data.replace(x,c):-1===r.data.indexOf(c)&&(r.data=d?c+r.data:r.data+c),f},p=(e,r,n)=>e.reduce((e,d,l)=>{let c=r[l];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+d+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let x,_,j,w=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let d=arguments;function a(l,c){let m=Object.assign({},l),f=m.className||a.className;n.p=Object.assign({theme:_&&_()},m),n.o=/ *go\d+/.test(f),m.className=u.apply(n,d)+(f?" "+f:""),r&&(m.ref=c);let h=e;return e[0]&&(h=m.as||e,delete m.as),j&&h[0]&&j(m),x(h,m)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,E=(d=0,()=>(++d).toString()),dist_b=()=>{if(void 0===l&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");l=!e||e.matches}return l},k=new Map,$=e=>{if(k.has(e))return;let r=setTimeout(()=>{k.delete(e),dist_u({type:4,toastId:e})},1e3);k.set(e,r)},J=e=>{let r=k.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:d}=r;return d?$(d):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===d||void 0===d?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let l=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+l}))}}},N=[],A={toasts:[],pausedAt:void 0},dist_u=e=>{A=v(A,e),N.forEach(e=>{e(A)})},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||E()}),dist_h=e=>(r,n)=>{let d=G(r,e,n);return dist_u({type:2,toast:d}),d.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let d=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:d,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:d,...n,...null==n?void 0:n.error})}),e};var z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,C=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,F=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${C} 0.15s ease-out forwards;
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
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,O=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,I=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${O} 1s linear infinite;
`,P=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,S=w`
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
}`,U=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${S} 0.2s ease-out forwards;
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
`,Z=goober_modern_j("div")`
  position: absolute;
`,L=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,H=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:d}=e;return void 0!==r?"string"==typeof r?m.createElement(H,null,r):r:"blank"===n?null:m.createElement(L,null,m.createElement(I,{...d}),"loading"!==n&&m.createElement(Z,null,"error"===n?m.createElement(F,{...d}):m.createElement(U,{...d})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,B=goober_modern_j("div")`
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
`,K=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[d,l]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${w(d)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(l)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:d})=>{let l=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),f=m.createElement(K,{...e.ariaProps},T(e.message,e));return m.createElement(B,{className:e.className,style:{...l,...n,...e.style}},"function"==typeof d?d({icon:c,message:f}):m.createElement(m.Fragment,null,c,f))}),c=m.createElement,o.p=void 0,x=c,_=void 0,j=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Q=dist_n}},function(e){e.O(0,[750,971,472,744],function(){return e(e.s=49750)}),_N_E=e.O()}]);