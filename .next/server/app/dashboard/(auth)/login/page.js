(()=>{var e={};e.id=3997,e.ids=[3997],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},8175:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>p,routeModule:()=>_,tree:()=>u});var r=s(67096),a=s(16132),n=s(37284),i=s.n(n),o=s(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let u=["",{children:["dashboard",{children:["(auth)",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,48515)),"D:\\level-2\\assignment\\event-planning\\think-best\\src\\app\\dashboard\\(auth)\\login\\page.jsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,38281)),"D:\\level-2\\assignment\\event-planning\\think-best\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\level-2\\assignment\\event-planning\\think-best\\src\\app\\dashboard\\(auth)\\login\\page.jsx"],c="/dashboard/(auth)/login/page",d={require:s,loadChunk:()=>Promise.resolve()},_=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/(auth)/login/page",pathname:"/dashboard/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},87182:(e,t,s)=>{Promise.resolve().then(s.bind(s,98285))},98285:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(30784),a=s(9885),n=s(21388),i=s.n(n),o=s(74284),l=s(57114),u=s(11440),p=s.n(u);let __WEBPACK_DEFAULT_EXPORT__=({url:e})=>{let t=(0,o.useSession)(),s=(0,l.useRouter)(),n=(0,l.useSearchParams)(),[u,c]=(0,a.useState)(""),[d,_]=(0,a.useState)("");return((0,a.useEffect)(()=>{c(n.get("error")),_(n.get("success"))},[n]),"loading"===t.status)?r.jsx("p",{children:"Loading..."}):("authenticated"===t.status&&s?.push("/"),(0,r.jsxs)("div",{className:i().container,children:[r.jsx("h1",{className:i().title,children:d||"Welcome Back"}),r.jsx("h2",{className:i().subtitle,children:"Please sign in to see the dashboard."}),(0,r.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=e.target[0].value,s=e.target[1].value;(0,o.signIn)("credentials",{email:t,password:s})},className:i().form,children:[r.jsx("input",{type:"text",placeholder:"Email",required:!0,className:i().input}),r.jsx("input",{type:"password",placeholder:"Password",required:!0,className:i().input}),r.jsx("button",{className:i().button,children:"Login"}),u&&u]}),r.jsx("button",{onClick:()=>{(0,o.signIn)("google")},className:i().button+" "+i().google,children:"Login with Google"}),r.jsx("span",{className:i().or,children:"- OR -"}),r.jsx(p(),{className:i().link,href:"/dashboard/register",children:"Create new account"})]}))}},21388:e=>{e.exports={container:"page_container__yBSzi",title:"page_title__6HNKk",subtitle:"page_subtitle__5Oo7u",form:"page_form__4eG2j",input:"page_input__SYjDL",button:"page_button__TeBE5",or:"page_or__0_0_f",link:"page_link__KSREz",google:"page_google__wdc_B"}},48515:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var r=s(95153);let a=(0,r.createProxy)(String.raw`D:\level-2\assignment\event-planning\think-best\src\app\dashboard\(auth)\login\page.jsx`),{__esModule:n,$$typeof:i}=a,o=a.default,l=o},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(31323);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},57114:(e,t,s)=>{e.exports=s(4979)}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[6126,2162,4872,1323,7457],()=>__webpack_exec__(8175));module.exports=s})();