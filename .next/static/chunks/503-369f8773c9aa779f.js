(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{80679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return l}});let i=n(21024),a=n(7929),s=n(92637),o=n(90413),u=i._(n(69950)),unstable_getImgProps=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},l=o.Image},36304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return s}});let i=n(21024),a=i._(n(2265)),s=a.default.createContext(null)},30622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var i,s={},d=null,c=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:a,type:e,key:d,ref:c,props:s,_owner:u.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},57437:function(e,t,n){"use strict";e.exports=n(30622)},16691:function(e,t,n){e.exports=n(80679)},24033:function(e,t,n){e.exports=n(50094)},81853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=n(2265),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useState,o=i.useEffect,u=i.useLayoutEffect,l=i.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!a(e,n)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),i=s({inst:{value:n,getSnapshot:t}}),a=i[0].inst,d=i[1];return u(function(){a.value=n,a.getSnapshot=t,r(a)&&d({inst:a})},[e,n,t]),o(function(){return r(a)&&d({inst:a}),e(function(){r(a)&&d({inst:a})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==i.useSyncExternalStore?i.useSyncExternalStore:d},26272:function(e,t,n){"use strict";e.exports=n(81853)},42333:function(e,t,n){"use strict";n.d(t,{ZP:function(){return I}});var i,a=n(2265),s=n(26272);let noop=()=>{},o=noop(),u=Object,isUndefined=e=>e===o,isFunction=e=>"function"==typeof e,mergeObjects=(e,t)=>({...e,...t}),isPromiseLike=e=>isFunction(e.then),l=new WeakMap,d=0,stableHash=e=>{let t,n;let i=typeof e,a=e&&e.constructor,s=a==Date;if(u(e)!==e||s||a==RegExp)t=s?e.toJSON():"symbol"==i?e.toString():"string"==i?JSON.stringify(e):""+e;else{if(t=l.get(e))return t;if(t=++d+"~",l.set(e,t),a==Array){for(n=0,t="@";n<e.length;n++)t+=stableHash(e[n])+",";l.set(e,t)}if(a==u){t="#";let i=u.keys(e).sort();for(;!isUndefined(n=i.pop());)isUndefined(e[n])||(t+=n+":"+stableHash(e[n])+",");l.set(e,t)}}return t},c=new WeakMap,f={},g={},p="undefined",m=typeof window!=p,b=typeof document!=p,hasRequestAnimationFrame=()=>m&&typeof window.requestAnimationFrame!=p,createCacheHelper=(e,t)=>{let n=c.get(e);return[()=>!isUndefined(t)&&e.get(t)||f,i=>{if(!isUndefined(t)){let a=e.get(t);t in g||(g[t]=a),n[5](t,mergeObjects(a,i),a||f)}},n[6],()=>!isUndefined(t)&&t in g?g[t]:!isUndefined(t)&&e.get(t)||f]},E=!0,[h,_]=m&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[noop,noop],v={initFocus:e=>(b&&document.addEventListener("visibilitychange",e),h("focus",e),()=>{b&&document.removeEventListener("visibilitychange",e),_("focus",e)}),initReconnect:e=>{let onOnline=()=>{E=!0,e()},onOffline=()=>{E=!1};return h("online",onOnline),h("offline",onOffline),()=>{_("online",onOnline),_("offline",onOffline)}}},y=!a.useId,O=!m||"Deno"in window,rAF=e=>hasRequestAnimationFrame()?window.requestAnimationFrame(e):setTimeout(e,1),C=O?a.useEffect:a.useLayoutEffect,S="undefined"!=typeof navigator&&navigator.connection,w=!O&&S&&(["slow-2g","2g"].includes(S.effectiveType)||S.saveData),dist_serialize=e=>{if(isFunction(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?stableHash(e):"",t]},R=0,getTimestamp=()=>++R;var U={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function internalMutate(...e){let[t,n,i,a]=e,s=mergeObjects({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),u=s.populateCache,l=s.rollbackOnError,d=s.optimisticData,f=!1!==s.revalidate,rollbackOnError=e=>"function"==typeof l?l(e):!1!==l,g=s.throwOnError;if(isFunction(n)){let e=[],i=t.keys();for(let a of i)!/^\$(inf|sub)\$/.test(a)&&n(t.get(a)._k)&&e.push(a);return Promise.all(e.map(mutateByKey))}return mutateByKey(n);async function mutateByKey(n){let a;let[s]=dist_serialize(n);if(!s)return;let[l,p]=createCacheHelper(t,s),[m,b,E,h]=c.get(t),startRevalidate=()=>{let e=m[s];return f&&(delete E[s],delete h[s],e&&e[0])?e[0](2).then(()=>l().data):l().data};if(e.length<3)return startRevalidate();let _=i,v=getTimestamp();b[s]=[v,0];let y=!isUndefined(d),O=l(),C=O.data,S=O._c,w=isUndefined(S)?C:S;if(y&&p({data:d=isFunction(d)?d(w,C):d,_c:w}),isFunction(_))try{_=_(w)}catch(e){a=e}if(_&&isPromiseLike(_)){if(_=await _.catch(e=>{a=e}),v!==b[s][0]){if(a)throw a;return _}a&&y&&rollbackOnError(a)&&(u=!0,p({data:w,_c:o}))}if(u&&!a){if(isFunction(u)){let e=u(_,w);p({data:e,error:o,_c:o})}else p({data:_,error:o,_c:o})}if(b[s][1]=getTimestamp(),Promise.resolve(startRevalidate()).then(()=>{p({_c:o})}),a){if(g)throw a;return}return _}}let revalidateAllKeys=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},initCache=(e,t)=>{if(!c.has(e)){let n=mergeObjects(v,t),i={},a=internalMutate.bind(o,e),s=noop,u={},subscribe=(e,t)=>{let n=u[e]||[];return u[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},setter=(t,n,i)=>{e.set(t,n);let a=u[t];if(a)for(let e of a)e(n,i)},initProvider=()=>{if(!c.has(e)&&(c.set(e,[i,{},{},{},a,setter,subscribe]),!O)){let t=n.initFocus(setTimeout.bind(o,revalidateAllKeys.bind(o,i,0))),a=n.initReconnect(setTimeout.bind(o,revalidateAllKeys.bind(o,i,1)));s=()=>{t&&t(),a&&a(),c.delete(e)}}};return initProvider(),[e,a,initProvider,s]}return[e,c.get(e)[4]]},[T,k]=initCache(new Map),V=mergeObjects({onLoadingSlow:noop,onSuccess:noop,onError:noop,onErrorRetry:(e,t,n,i,a)=>{let s=n.errorRetryCount,o=a.retryCount,u=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;(isUndefined(s)||!(o>s))&&setTimeout(i,u,a)},onDiscarded:noop,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:w?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:w?5e3:3e3,compare:(e,t)=>stableHash(e)==stableHash(t),isPaused:()=>!1,cache:T,mutate:k,fallback:{}},{isOnline:()=>E,isVisible:()=>{let e=b&&document.visibilityState;return isUndefined(e)||"hidden"!==e}}),mergeConfigs=(e,t)=>{let n=mergeObjects(e,t);if(t){let{use:i,fallback:a}=e,{use:s,fallback:o}=t;i&&s&&(n.use=i.concat(s)),a&&o&&(n.fallback=mergeObjects(a,o))}return n},A=(0,a.createContext)({}),L=m&&window.__SWR_DEVTOOLS_USE__,P=L?window.__SWR_DEVTOOLS_USE__:[],normalize=e=>isFunction(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],useSWRConfig=()=>mergeObjects(V,(0,a.useContext)(A)),x=P.concat(e=>(t,n,i)=>{let a=n&&((...e)=>{let[i]=dist_serialize(t),[,,,a]=c.get(T);if(i.startsWith("$inf$"))return n(...e);let s=a[i];return isUndefined(s)?n(...e):(delete a[i],s)});return e(t,a,i)}),subscribeCallback=(e,t,n)=>{let i=t[e]||(t[e]=[]);return i.push(n),()=>{let e=i.indexOf(n);e>=0&&(i[e]=i[i.length-1],i.pop())}};L&&(window.__SWR_DEVTOOLS_REACT__=a);let F=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),j={dedupe:!0};u.defineProperty(e=>{let{value:t}=e,n=(0,a.useContext)(A),i=isFunction(t),s=(0,a.useMemo)(()=>i?t(n):t,[i,n,t]),u=(0,a.useMemo)(()=>i?s:mergeConfigs(n,s),[i,n,s]),l=s&&s.provider,d=(0,a.useRef)(o);l&&!d.current&&(d.current=initCache(l(u.cache||T),s));let c=d.current;return c&&(u.cache=c[0],u.mutate=c[1]),C(()=>{if(c)return c[2]&&c[2](),c[3]},[]),(0,a.createElement)(A.Provider,mergeObjects(e,{value:u}))},"defaultValue",{value:V});let I=(i=(e,t,n)=>{let{cache:i,compare:u,suspense:l,fallbackData:d,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:p,refreshWhenHidden:m,refreshWhenOffline:b,keepPreviousData:E}=n,[h,_,v,S]=c.get(i),[w,R]=dist_serialize(e),T=(0,a.useRef)(!1),k=(0,a.useRef)(!1),V=(0,a.useRef)(w),A=(0,a.useRef)(t),L=(0,a.useRef)(n),getConfig=()=>L.current,isActive=()=>getConfig().isVisible()&&getConfig().isOnline(),[P,x,I,N]=createCacheHelper(i,w),D=(0,a.useRef)({}).current,M=isUndefined(d)?n.fallback[w]:d,isEqual=(e,t)=>{for(let n in D)if("data"===n){if(!u(e[n],t[n])&&(!isUndefined(e[n])||!u(Y,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},W=(0,a.useMemo)(()=>{let e=!!w&&!!t&&(isUndefined(f)?!getConfig().isPaused()&&!l&&(!!isUndefined(g)||g):f),getSelectedCache=t=>{let n=mergeObjects(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},n=P(),i=N(),a=getSelectedCache(n),s=n===i?a:getSelectedCache(i),o=a;return[()=>{let e=getSelectedCache(P()),t=isEqual(e,o);return t?(o.data=e.data,o.isLoading=e.isLoading,o.isValidating=e.isValidating,o.error=e.error,o):(o=e,e)},()=>s]},[i,w]),z=(0,s.useSyncExternalStore)((0,a.useCallback)(e=>I(w,(t,n)=>{isEqual(n,t)||e()}),[i,w]),W[0],W[1]),H=!T.current,K=h[w]&&h[w].length>0,$=z.data,B=isUndefined($)?M:$,J=z.error,G=(0,a.useRef)(B),Y=E?isUndefined($)?G.current:$:B,Z=(!K||!!isUndefined(J))&&(H&&!isUndefined(f)?f:!getConfig().isPaused()&&(l?!isUndefined(B)&&g:isUndefined(B)||g)),Q=!!(w&&t&&H&&Z),X=isUndefined(z.isValidating)?Q:z.isValidating,ee=isUndefined(z.isLoading)?Q:z.isLoading,et=(0,a.useCallback)(async e=>{let t,i;let a=A.current;if(!w||!a||k.current||getConfig().isPaused())return!1;let s=!0,l=e||{},d=!v[w]||!l.dedupe,callbackSafeguard=()=>y?!k.current&&w===V.current&&T.current:w===V.current,c={isValidating:!1,isLoading:!1},finishRequestAndUpdateState=()=>{x(c)},cleanupState=()=>{let e=v[w];e&&e[1]===i&&delete v[w]},f={isValidating:!0};isUndefined(P().data)&&(f.isLoading=!0);try{if(d&&(x(f),n.loadingTimeout&&isUndefined(P().data)&&setTimeout(()=>{s&&callbackSafeguard()&&getConfig().onLoadingSlow(w,n)},n.loadingTimeout),v[w]=[a(R),getTimestamp()]),[t,i]=v[w],t=await t,d&&setTimeout(cleanupState,n.dedupingInterval),!v[w]||v[w][1]!==i)return d&&callbackSafeguard()&&getConfig().onDiscarded(w),!1;c.error=o;let e=_[w];if(!isUndefined(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return finishRequestAndUpdateState(),d&&callbackSafeguard()&&getConfig().onDiscarded(w),!1;let l=P().data;c.data=u(l,t)?l:t,d&&callbackSafeguard()&&getConfig().onSuccess(t,w,n)}catch(n){cleanupState();let e=getConfig(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=n,d&&callbackSafeguard()&&(e.onError(n,w,e),(!0===t||isFunction(t)&&t(n))&&isActive()&&e.onErrorRetry(n,w,e,e=>{let t=h[w];t&&t[0]&&t[0](U.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return s=!1,finishRequestAndUpdateState(),!0},[w,i]),en=(0,a.useCallback)((...e)=>internalMutate(i,V.current,...e),[]);if(C(()=>{A.current=t,L.current=n,isUndefined($)||(G.current=$)}),C(()=>{if(!w)return;let e=et.bind(o,j),t=0,n=subscribeCallback(w,h,(n,i={})=>{if(n==U.FOCUS_EVENT){let n=Date.now();getConfig().revalidateOnFocus&&n>t&&isActive()&&(t=n+getConfig().focusThrottleInterval,e())}else if(n==U.RECONNECT_EVENT)getConfig().revalidateOnReconnect&&isActive()&&e();else if(n==U.MUTATE_EVENT)return et();else if(n==U.ERROR_REVALIDATE_EVENT)return et(i)});return k.current=!1,V.current=w,T.current=!0,x({_k:R}),Z&&(isUndefined(B)||O?e():rAF(e)),()=>{k.current=!0,n()}},[w]),C(()=>{let e;function next(){let t=isFunction(p)?p(P().data):p;t&&-1!==e&&(e=setTimeout(execute,t))}function execute(){!P().error&&(m||getConfig().isVisible())&&(b||getConfig().isOnline())?et(j).then(next):next()}return next(),()=>{e&&(clearTimeout(e),e=-1)}},[p,m,b,w]),(0,a.useDebugValue)(Y),l&&isUndefined(B)&&w){if(!y&&O)throw Error("Fallback data is required when using suspense in SSR.");A.current=t,L.current=n,k.current=!1;let e=S[w];if(!isUndefined(e)){let t=en(e);F(t)}if(isUndefined(J)){let e=et(j);isUndefined(Y)||(e.status="fulfilled",e.value=!0),F(e)}else throw J}return{mutate:en,get data(){return D.data=!0,Y},get error(){return D.error=!0,J},get isValidating(){return D.isValidating=!0,X},get isLoading(){return D.isLoading=!0,ee}}},function(...e){let t=useSWRConfig(),[n,a,s]=normalize(e),o=mergeConfigs(t,s),u=i,{use:l}=o,d=(l||[]).concat(x);for(let e=d.length;e--;)u=d[e](u);return u(n,a||o.fetcher||null,o)})}}]);