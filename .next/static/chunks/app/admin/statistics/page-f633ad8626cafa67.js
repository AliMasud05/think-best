(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30],{24958:function(e,t,s){Promise.resolve().then(s.bind(s,28621))},28621:function(e,t,s){"use strict";s.r(t);var r=s(57437),n=s(2265),a=s(88110),i=s.n(a),c=s(18142),l=s(20020),h=s(84602),u=s(29222);t.default=()=>{let[e,t]=(0,n.useState)([]),[s,a]=(0,n.useState)([]);return(0,n.useEffect)(()=>{u.Z.get("https://think-best.vercel.app/api/posts").then(e=>{t(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,n.useEffect)(()=>{u.Z.get("https://think-best.vercel.app/api/auth/register").then(e=>{a(e.data)}).catch(e=>{console.error("Error fetching data:",e)})},[]),(0,r.jsxs)(l.Z,{gutter:16,children:[(0,r.jsx)(c.Z,{span:12,children:(0,r.jsx)(h.Z,{title:"Active Users",value:s.length})}),(0,r.jsxs)(c.Z,{span:12,children:[(0,r.jsx)(h.Z,{title:"Total Data (CNY)",value:e.length,precision:2}),(0,r.jsx)(i(),{style:{marginTop:16},type:"primary",children:"Recharge"})]}),(0,r.jsx)(c.Z,{span:12,children:(0,r.jsx)(h.Z,{title:"Active Users",value:112893,loading:!0})})]})}}},function(e){e.O(0,[750,334,131,971,472,744],function(){return e(e.s=24958)}),_N_E=e.O()}]);