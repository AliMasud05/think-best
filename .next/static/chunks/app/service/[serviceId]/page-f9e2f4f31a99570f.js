(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{65317:function(e,s,t){Promise.resolve().then(t.bind(t,92162))},80679:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return c}});let l=t(21024),n=t(7929),r=t(92637),a=t(90413),i=l._(t(69950)),unstable_getImgProps=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},c=a.Image},92162:function(e,s,t){"use strict";t.r(s);var l=t(57437),n=t(78688),r=t(29222),a=t(16691),i=t.n(a),c=t(2265);s.default=e=>{let{serviceId:s}=e.params;console.log(s);let[t,a]=(0,c.useState)([]),[o,d]=(0,c.useState)([]),[m,u]=(0,c.useState)({name:"",email:"",numberOfTickets:1});(0,c.useEffect)(()=>{let e="https://think-best.vercel.app/api/posts/?id=".concat(s);r.Z.get(e).then(e=>{a(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[s]);let h=null==t?void 0:t[0],f=null==h?void 0:h.rating;console.log("get rating",f),(0,c.useEffect)(()=>{let e="https://think-best.vercel.app/api/posts/?rating=".concat(f);r.Z.get(e).then(e=>{d(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[f]);let handleInputChange=e=>{let{name:s,value:t}=e.target;u({...m,[s]:t})};return console.log("get related data",o),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"flex justify-center w-screen",children:(0,l.jsxs)("div",{className:"w-full md:w-3/4 lg:w-2/3",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold mb-4 text-red-300",children:"Featured Event"}),(0,l.jsxs)("h1",{className:"text-xl font-semibold mb-2",children:["Event Title :",null==h?void 0:h.title]}),(0,l.jsx)("div",{className:"relative h-96",children:(0,l.jsx)(i(),{src:"https://i.ibb.co/jDPVwhX/book2.jpg",width:500,height:500,alt:"Event Image",className:"w-full h-80  rounded-t-md "})}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4",children:[(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:"T"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"ml-2",children:"Event Time"}),(0,l.jsx)("h1",{className:"ml-2",children:"30 November 2023"})]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:"L"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"ml-2",children:"Event Location"}),(0,l.jsx)("h1",{className:"ml-2",children:null==h?void 0:h.location})]})]}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center",children:"D"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"ml-2",children:"Event Date"}),(0,l.jsx)("h1",{className:"ml-2",children:"30 November 2023"})]})]})]}),(0,l.jsxs)("h1",{className:"text-xl font-semibold mt-4",children:["Pricing: ",null==h?void 0:h.price]}),(0,l.jsxs)("h1",{className:"text-xl font-semibold",children:["Available Ticket :",null==h?void 0:h.ticket]}),(0,l.jsx)("h1",{className:"text-xl font-semibold mt-4",children:null==h?void 0:h.about})]})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log("Form data submitted:",m)},className:" mx-auto w-1/2 col-span-4  mt-8 p-4 bg-white shadow-md rounded-lg",children:[(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"name",className:"block text-gray-700 font-bold mb-2",children:"Name:"}),(0,l.jsx)("input",{type:"text",id:"name",name:"name",value:m.name,onChange:handleInputChange,className:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300",required:!0})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"email",className:"block text-gray-700 font-bold mb-2",children:"Email:"}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:m.email,onChange:handleInputChange,className:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300",required:!0})]}),(0,l.jsxs)("div",{className:"mb-4",children:[(0,l.jsx)("label",{htmlFor:"numberOfTickets",className:"block text-gray-700 font-bold mb-2",children:"Number of Tickets:"}),(0,l.jsx)("input",{type:"number",id:"numberOfTickets",name:"numberOfTickets",value:m.numberOfTickets,onChange:handleInputChange,min:"1",className:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300",required:!0})]}),(0,l.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300",children:"Book Tickets"})]}),(0,l.jsx)("h1",{className:"text-2xl font-bold text-center mb-4",children:"Related Package"}),(0,l.jsx)("div",{className:"flex  justify-center  items-baseline col-span-8",children:o.slice(0,3).map(e=>(0,l.jsx)(n.Z,{product:e},e.id))})]})]})}},78688:function(e,s,t){"use strict";var l=t(57437),n=t(16691),r=t.n(n),a=t(61396),i=t.n(a);t(2265);var c=t(58910),o=t(99150);s.Z=e=>{let{product:s}=e;return(0,l.jsx)(i(),{href:"/service/".concat(s._id),className:"flex justify-around m-2",children:(0,l.jsxs)("div",{className:" bg-slate-300 rounded-lg shadow-lg p",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsxs)("div",{className:"absolute  font-serif h-8 bg-red-300",children:[(0,l.jsx)("span",{className:"",children:"26"}),(0,l.jsx)("small",{className:"",children:"June"})]}),(0,l.jsx)(r(),{src:"https://i.ibb.co/jDPVwhX/book2.jpg",width:500,height:500,alt:"Event Image",className:"w-full h-48 object-cover rounded-t-md "})]}),(0,l.jsxs)("div",{className:"mt-2 p-2 ",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h3",{className:"font-semibold",children:s.title}),(0,l.jsxs)("span",{className:"",children:["Tickets from $",s.price]}),(0,l.jsxs)("p",{children:["Available Ticket :",s.ticket," "]}),(0,l.jsxs)("p",{children:["Rating :",s.rating," "]}),(0,l.jsxs)("p",{children:["Host :",s.guest," "]})]}),(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)(o.cjn,{size:20,color:"red"})}),"Start 20:00pm - 22:00pm"]}),(0,l.jsxs)("li",{className:"flex",children:[(0,l.jsx)("span",{className:"mr-1",children:(0,l.jsx)(c.NK0,{size:24,color:"red"})}),s.location,", Bangladesh"]})]})}),(0,l.jsx)(i(),{href:"",children:" tickets & details"})]})]})})}},16691:function(e,s,t){e.exports=t(80679)},61396:function(e,s,t){e.exports=t(68326)},91172:function(e,s,t){"use strict";t.d(s,{w_:function(){return GenIcon}});var l=t(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=l.createContext&&l.createContext(n),__assign=function(){return(__assign=Object.assign||function(e){for(var s,t=1,l=arguments.length;t<l;t++)for(var n in s=arguments[t])Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);return e}).apply(this,arguments)},__rest=function(e,s){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>s.indexOf(l)&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,l=Object.getOwnPropertySymbols(e);n<l.length;n++)0>s.indexOf(l[n])&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]]);return t};function GenIcon(e){return function(s){return l.createElement(IconBase,__assign({attr:__assign({},e.attr)},s),function Tree2Element(e){return e&&e.map(function(e,s){return l.createElement(e.tag,__assign({key:s},e.attr),Tree2Element(e.child))})}(e.child))}}function IconBase(e){var elem=function(s){var t,n=e.attr,r=e.size,a=e.title,i=__rest(e,["attr","size","title"]),c=r||s.size||"1em";return s.className&&(t=s.className),e.className&&(t=(t?t+" ":"")+e.className),l.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,n,i,{className:t,style:__assign(__assign({color:e.color||s.color},s.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),a&&l.createElement("title",null,a),e.children)};return void 0!==r?l.createElement(r.Consumer,null,function(e){return elem(e)}):elem(n)}}},function(e){e.O(0,[582,712,326,750,413,971,472,744],function(){return e(e.s=65317)}),_N_E=e.O()}]);