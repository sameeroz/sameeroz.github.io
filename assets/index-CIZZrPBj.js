var mg=t=>{throw TypeError(t)};var md=(t,e,n)=>e.has(t)||mg("Cannot "+n);var re=(t,e,n)=>(md(t,e,"read from private field"),n?n.call(t):e.get(t)),ct=(t,e,n)=>e.has(t)?mg("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),$e=(t,e,n,i)=>(md(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),sn=(t,e,n)=>(md(t,e,"access private method"),n);var Rl=(t,e,n,i)=>({set _(r){$e(t,e,r,n)},get _(){return re(t,e,i)}});function cw(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function xx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _x={exports:{}},Du={},yx={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),uw=Symbol.for("react.portal"),dw=Symbol.for("react.fragment"),fw=Symbol.for("react.strict_mode"),hw=Symbol.for("react.profiler"),pw=Symbol.for("react.provider"),mw=Symbol.for("react.context"),gw=Symbol.for("react.forward_ref"),vw=Symbol.for("react.suspense"),xw=Symbol.for("react.memo"),_w=Symbol.for("react.lazy"),gg=Symbol.iterator;function yw(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var Sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wx=Object.assign,Mx={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||Sx}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ex(){}Ex.prototype=Zo.prototype;function Dp(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||Sx}var Ip=Dp.prototype=new Ex;Ip.constructor=Dp;wx(Ip,Zo.prototype);Ip.isPureReactComponent=!0;var vg=Array.isArray,bx=Object.prototype.hasOwnProperty,Up={current:null},Tx={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bx.call(e,i)&&!Tx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:gl,type:t,key:s,ref:o,props:r,_owner:Up.current}}function Sw(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function ww(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xg=/\/+/g;function gd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ww(""+t.key):e.toString(36)}function Ec(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case uw:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gd(o,0):i,vg(r)?(n="",t!=null&&(n=t.replace(xg,"$&/")+"/"),Ec(r,e,n,"",function(c){return c})):r!=null&&(Fp(r)&&(r=Sw(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gd(s,a);o+=Ec(s,e,n,l,r)}else if(l=yw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gd(s,a++),o+=Ec(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pl(t,e,n){if(t==null)return t;var i=[],r=0;return Ec(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Mw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wn={current:null},bc={transition:null},Ew={ReactCurrentDispatcher:wn,ReactCurrentBatchConfig:bc,ReactCurrentOwner:Up};function Cx(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Pl,forEach:function(t,e,n){Pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pl(t,function(){e++}),e},toArray:function(t){return Pl(t,function(e){return e})||[]},only:function(t){if(!Fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Zo;Qe.Fragment=dw;Qe.Profiler=hw;Qe.PureComponent=Dp;Qe.StrictMode=fw;Qe.Suspense=vw;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ew;Qe.act=Cx;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=wx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Up.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bx.call(e,l)&&!Tx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:gl,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:mw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:pw,_context:t},t.Consumer=t};Qe.createElement=Ax;Qe.createFactory=function(t){var e=Ax.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:gw,render:t}};Qe.isValidElement=Fp;Qe.lazy=function(t){return{$$typeof:_w,_payload:{_status:-1,_result:t},_init:Mw}};Qe.memo=function(t,e){return{$$typeof:xw,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=bc.transition;bc.transition={};try{t()}finally{bc.transition=e}};Qe.unstable_act=Cx;Qe.useCallback=function(t,e){return wn.current.useCallback(t,e)};Qe.useContext=function(t){return wn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return wn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return wn.current.useEffect(t,e)};Qe.useId=function(){return wn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return wn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return wn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return wn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return wn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return wn.current.useReducer(t,e,n)};Qe.useRef=function(t){return wn.current.useRef(t)};Qe.useState=function(t){return wn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return wn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return wn.current.useTransition()};Qe.version="18.3.1";yx.exports=Qe;var N=yx.exports;const xe=xx(N),bw=cw({__proto__:null,default:xe},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw=N,Aw=Symbol.for("react.element"),Cw=Symbol.for("react.fragment"),Rw=Object.prototype.hasOwnProperty,Pw=Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nw={key:!0,ref:!0,__self:!0,__source:!0};function Rx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Rw.call(e,i)&&!Nw.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Aw,type:t,key:s,ref:o,props:r,_owner:Pw.current}}Du.Fragment=Cw;Du.jsx=Rx;Du.jsxs=Rx;_x.exports=Du;var w=_x.exports,Px={exports:{}},jn={},Nx={exports:{}},Lx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,H){var G=D.length;D.push(H);e:for(;0<G;){var q=G-1>>>1,te=D[q];if(0<r(te,H))D[q]=H,D[G]=te,G=q;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],G=D.pop();if(G!==H){D[0]=G;e:for(var q=0,te=D.length,he=te>>>1;q<he;){var ue=2*(q+1)-1,ve=D[ue],$=ue+1,se=D[$];if(0>r(ve,G))$<te&&0>r(se,ve)?(D[q]=se,D[$]=G,q=$):(D[q]=ve,D[ue]=G,q=ue);else if($<te&&0>r(se,G))D[q]=se,D[$]=G,q=$;else break e}}return H}function r(D,H){var G=D.sortIndex-H.sortIndex;return G!==0?G:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,u=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=D)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function S(D){if(x=!1,_(D),!v)if(n(l)!==null)v=!0,k(b);else{var H=n(c);H!==null&&O(S,H.startTime-D)}}function b(D,H){v=!1,x&&(x=!1,f(y),y=-1),p=!0;var G=u;try{for(_(H),h=n(l);h!==null&&(!(h.expirationTime>H)||D&&!P());){var q=h.callback;if(typeof q=="function"){h.callback=null,u=h.priorityLevel;var te=q(h.expirationTime<=H);H=t.unstable_now(),typeof te=="function"?h.callback=te:h===n(l)&&i(l),_(H)}else i(l);h=n(l)}if(h!==null)var he=!0;else{var ue=n(c);ue!==null&&O(S,ue.startTime-H),he=!1}return he}finally{h=null,u=G,p=!1}}var E=!1,A=null,y=-1,R=5,L=-1;function P(){return!(t.unstable_now()-L<R)}function U(){if(A!==null){var D=t.unstable_now();L=D;var H=!0;try{H=A(!0,D)}finally{H?j():(E=!1,A=null)}}else E=!1}var j;if(typeof g=="function")j=function(){g(U)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,I=z.port2;z.port1.onmessage=U,j=function(){I.postMessage(null)}}else j=function(){m(U,0)};function k(D){A=D,E||(E=!0,j())}function O(D,H){y=m(function(){D(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,k(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(u){case 1:case 2:case 3:var H=3;break;default:H=u}var G=u;u=H;try{return D()}finally{u=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=u;u=D;try{return H()}finally{u=G}},t.unstable_scheduleCallback=function(D,H,G){var q=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?q+G:q):G=q,D){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=G+te,D={id:d++,callback:H,priorityLevel:D,startTime:G,expirationTime:te,sortIndex:-1},G>q?(D.sortIndex=G,e(c,D),n(l)===null&&D===n(c)&&(x?(f(y),y=-1):x=!0,O(S,G-q))):(D.sortIndex=te,e(l,D),v||p||(v=!0,k(b))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var H=u;return function(){var G=u;u=H;try{return D.apply(this,arguments)}finally{u=G}}}})(Lx);Nx.exports=Lx;var Lw=Nx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=N,Wn=Lw;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dx=new Set,Ga={};function ks(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(Ga[t]=e,t=0;t<e.length;t++)Dx.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nf=Object.prototype.hasOwnProperty,Iw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},yg={};function Uw(t){return Nf.call(yg,t)?!0:Nf.call(_g,t)?!1:Iw.test(t)?yg[t]=!0:(_g[t]=!0,!1)}function Fw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ow(t,e,n,i){if(e===null||typeof e>"u"||Fw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Op=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Op,kp);nn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Op,kp);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Op,kp);nn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});nn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,i){var r=nn.hasOwnProperty(e)?nn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ow(e,n,r,i)&&(n=null),i||r===null?Uw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gr=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),ro=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),zp=Symbol.for("react.strict_mode"),Lf=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),Vp=Symbol.for("react.forward_ref"),Df=Symbol.for("react.suspense"),If=Symbol.for("react.suspense_list"),Hp=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Fx=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function aa(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,vd;function Ta(t){if(vd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vd=e&&e[1]||""}return`
`+vd+t}var xd=!1;function _d(t,e){if(!t||xd)return"";xd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function kw(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=_d(t.type,!1),t;case 11:return t=_d(t.type.render,!1),t;case 1:return t=_d(t.type,!0),t;default:return""}}function Uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case so:return"Fragment";case ro:return"Portal";case Lf:return"Profiler";case zp:return"StrictMode";case Df:return"Suspense";case If:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ux:return(t.displayName||"Context")+".Consumer";case Ix:return(t._context.displayName||"Context")+".Provider";case Vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hp:return e=t.displayName||null,e!==null?e:Uf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Uf(t(e))}catch{}}return null}function Bw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uf(e);case 8:return e===zp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ox(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zw(t){var e=Ox(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ll(t){t._valueTracker||(t._valueTracker=zw(t))}function kx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ox(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function jc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ff(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bx(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function Of(t,e){Bx(t,e);var n=Qr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&kf(t,e.type,Qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kf(t,e,n){(e!=="number"||jc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function vo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Qr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Aa(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qr(n)}}function zx(t,e){var n=Qr(e.value),i=Qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Dl,Hx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Dl=Dl||document.createElement("div"),Dl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Dl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vw=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){Vw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function Gx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function Wx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Hw=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vf(t,e){if(e){if(Hw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Hf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gf=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wf=null,xo=null,_o=null;function Tg(t){if(t=_l(t)){if(typeof Wf!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=ku(e),Wf(t.stateNode,t.type,e))}}function jx(t){xo?_o?_o.push(t):_o=[t]:xo=t}function Xx(){if(xo){var t=xo,e=_o;if(_o=xo=null,Tg(t),e)for(t=0;t<e.length;t++)Tg(e[t])}}function $x(t,e){return t(e)}function qx(){}var yd=!1;function Yx(t,e,n){if(yd)return t(e,n);yd=!0;try{return $x(t,e,n)}finally{yd=!1,(xo!==null||_o!==null)&&(qx(),Xx())}}function ja(t,e){var n=t.stateNode;if(n===null)return null;var i=ku(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var jf=!1;if(ar)try{var la={};Object.defineProperty(la,"passive",{get:function(){jf=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{jf=!1}function Gw(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ia=!1,Xc=null,$c=!1,Xf=null,Ww={onError:function(t){Ia=!0,Xc=t}};function jw(t,e,n,i,r,s,o,a,l){Ia=!1,Xc=null,Gw.apply(Ww,arguments)}function Xw(t,e,n,i,r,s,o,a,l){if(jw.apply(this,arguments),Ia){if(Ia){var c=Xc;Ia=!1,Xc=null}else throw Error(ce(198));$c||($c=!0,Xf=c)}}function Bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(Bs(t)!==t)throw Error(ce(188))}function $w(t){var e=t.alternate;if(!e){if(e=Bs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ag(r),t;if(s===i)return Ag(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function Zx(t){return t=$w(t),t!==null?Qx(t):null}function Qx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qx(t);if(e!==null)return e;t=t.sibling}return null}var Jx=Wn.unstable_scheduleCallback,Cg=Wn.unstable_cancelCallback,qw=Wn.unstable_shouldYield,Yw=Wn.unstable_requestPaint,Ot=Wn.unstable_now,Kw=Wn.unstable_getCurrentPriorityLevel,Wp=Wn.unstable_ImmediatePriority,e_=Wn.unstable_UserBlockingPriority,qc=Wn.unstable_NormalPriority,Zw=Wn.unstable_LowPriority,t_=Wn.unstable_IdlePriority,Iu=null,Ui=null;function Qw(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:tM,Jw=Math.log,eM=Math.LN2;function tM(t){return t>>>=0,t===0?32:31-(Jw(t)/eM|0)|0}var Il=64,Ul=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ca(a):(s&=o,s!==0&&(i=Ca(s)))}else o=n&~r,o!==0?i=Ca(o):s!==0&&(i=Ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),r=1<<n,i|=t[n],e&=~r;return i}function nM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=nM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n_(){var t=Il;return Il<<=1,!(Il&4194240)&&(Il=64),t}function Sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function rM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-mi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function jp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function i_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var r_,Xp,s_,o_,a_,qf=!1,Fl=[],Wr=null,jr=null,Xr=null,Xa=new Map,$a=new Map,Lr=[],sM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rg(t,e){switch(t){case"focusin":case"focusout":Wr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_l(e),e!==null&&Xp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function oM(t,e,n,i,r){switch(e){case"focusin":return Wr=ca(Wr,t,e,n,i,r),!0;case"dragenter":return jr=ca(jr,t,e,n,i,r),!0;case"mouseover":return Xr=ca(Xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xa.set(s,ca(Xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,ca($a.get(s)||null,t,e,n,i,r)),!0}return!1}function l_(t){var e=xs(t.target);if(e!==null){var n=Bs(e);if(n!==null){if(e=n.tag,e===13){if(e=Kx(n),e!==null){t.blockedOn=e,a_(t.priority,function(){s_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gf=i,n.target.dispatchEvent(i),Gf=null}else return e=_l(n),e!==null&&Xp(e),t.blockedOn=n,!1;e.shift()}return!0}function Pg(t,e,n){Tc(t)&&n.delete(e)}function aM(){qf=!1,Wr!==null&&Tc(Wr)&&(Wr=null),jr!==null&&Tc(jr)&&(jr=null),Xr!==null&&Tc(Xr)&&(Xr=null),Xa.forEach(Pg),$a.forEach(Pg)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,qf||(qf=!0,Wn.unstable_scheduleCallback(Wn.unstable_NormalPriority,aM)))}function qa(t){function e(r){return ua(r,t)}if(0<Fl.length){ua(Fl[0],t);for(var n=1;n<Fl.length;n++){var i=Fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wr!==null&&ua(Wr,t),jr!==null&&ua(jr,t),Xr!==null&&ua(Xr,t),Xa.forEach(e),$a.forEach(e),n=0;n<Lr.length;n++)i=Lr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Lr.length&&(n=Lr[0],n.blockedOn===null);)l_(n),n.blockedOn===null&&Lr.shift()}var yo=gr.ReactCurrentBatchConfig,Kc=!0;function lM(t,e,n,i){var r=ft,s=yo.transition;yo.transition=null;try{ft=1,$p(t,e,n,i)}finally{ft=r,yo.transition=s}}function cM(t,e,n,i){var r=ft,s=yo.transition;yo.transition=null;try{ft=4,$p(t,e,n,i)}finally{ft=r,yo.transition=s}}function $p(t,e,n,i){if(Kc){var r=Yf(t,e,n,i);if(r===null)Nd(t,e,i,Zc,n),Rg(t,i);else if(oM(r,t,e,n,i))i.stopPropagation();else if(Rg(t,i),e&4&&-1<sM.indexOf(t)){for(;r!==null;){var s=_l(r);if(s!==null&&r_(s),s=Yf(t,e,n,i),s===null&&Nd(t,e,i,Zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nd(t,e,i,null,n)}}var Zc=null;function Yf(t,e,n,i){if(Zc=null,t=Gp(i),t=xs(t),t!==null)if(e=Bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zc=t,null}function c_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kw()){case Wp:return 1;case e_:return 4;case qc:case Zw:return 16;case t_:return 536870912;default:return 16}default:return 16}}var zr=null,qp=null,Ac=null;function u_(){if(Ac)return Ac;var t,e=qp,n=e.length,i,r="value"in zr?zr.value:zr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ac=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ol(){return!0}function Ng(){return!1}function Xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ol:Ng,this.isPropagationStopped=Ng,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=Xn(Qo),xl=Rt({},Qo,{view:0,detail:0}),uM=Xn(xl),wd,Md,da,Uu=Rt({},xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(wd=t.screenX-da.screenX,Md=t.screenY-da.screenY):Md=wd=0,da=t),wd)},movementY:function(t){return"movementY"in t?t.movementY:Md}}),Lg=Xn(Uu),dM=Rt({},Uu,{dataTransfer:0}),fM=Xn(dM),hM=Rt({},xl,{relatedTarget:0}),Ed=Xn(hM),pM=Rt({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),mM=Xn(pM),gM=Rt({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vM=Xn(gM),xM=Rt({},Qo,{data:0}),Dg=Xn(xM),_M={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SM[t])?!!e[t]:!1}function Kp(){return wM}var MM=Rt({},xl,{key:function(t){if(t.key){var e=_M[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),EM=Xn(MM),bM=Rt({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ig=Xn(bM),TM=Rt({},xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),AM=Xn(TM),CM=Rt({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),RM=Xn(CM),PM=Rt({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NM=Xn(PM),LM=[9,13,27,32],Zp=ar&&"CompositionEvent"in window,Ua=null;ar&&"documentMode"in document&&(Ua=document.documentMode);var DM=ar&&"TextEvent"in window&&!Ua,d_=ar&&(!Zp||Ua&&8<Ua&&11>=Ua),Ug=" ",Fg=!1;function f_(t,e){switch(t){case"keyup":return LM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function h_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oo=!1;function IM(t,e){switch(t){case"compositionend":return h_(e);case"keypress":return e.which!==32?null:(Fg=!0,Ug);case"textInput":return t=e.data,t===Ug&&Fg?null:t;default:return null}}function UM(t,e){if(oo)return t==="compositionend"||!Zp&&f_(t,e)?(t=u_(),Ac=qp=zr=null,oo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d_&&e.locale!=="ko"?null:e.data;default:return null}}var FM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FM[t.type]:e==="textarea"}function p_(t,e,n,i){jx(i),e=Qc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fa=null,Ya=null;function OM(t){b_(t,0)}function Fu(t){var e=co(t);if(kx(e))return t}function kM(t,e){if(t==="change")return e}var m_=!1;if(ar){var bd;if(ar){var Td="oninput"in document;if(!Td){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),Td=typeof kg.oninput=="function"}bd=Td}else bd=!1;m_=bd&&(!document.documentMode||9<document.documentMode)}function Bg(){Fa&&(Fa.detachEvent("onpropertychange",g_),Ya=Fa=null)}function g_(t){if(t.propertyName==="value"&&Fu(Ya)){var e=[];p_(e,Ya,t,Gp(t)),Yx(OM,e)}}function BM(t,e,n){t==="focusin"?(Bg(),Fa=e,Ya=n,Fa.attachEvent("onpropertychange",g_)):t==="focusout"&&Bg()}function zM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fu(Ya)}function VM(t,e){if(t==="click")return Fu(e)}function HM(t,e){if(t==="input"||t==="change")return Fu(e)}function GM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:GM;function Ka(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nf.call(e,r)||!vi(t[r],e[r]))return!1}return!0}function zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,e){var n=zg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zg(n)}}function v_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function x_(){for(var t=window,e=jc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jc(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WM(t){var e=x_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v_(n.ownerDocument.documentElement,n)){if(i!==null&&Qp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vg(n,s);var o=Vg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jM=ar&&"documentMode"in document&&11>=document.documentMode,ao=null,Kf=null,Oa=null,Zf=!1;function Hg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zf||ao==null||ao!==jc(i)||(i=ao,"selectionStart"in i&&Qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Oa&&Ka(Oa,i)||(Oa=i,i=Qc(Kf,"onSelect"),0<i.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ao)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var lo={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Ad={},__={};ar&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete lo.animationend.animation,delete lo.animationiteration.animation,delete lo.animationstart.animation),"TransitionEvent"in window||delete lo.transitionend.transition);function Ou(t){if(Ad[t])return Ad[t];if(!lo[t])return t;var e=lo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in __)return Ad[t]=e[n];return t}var y_=Ou("animationend"),S_=Ou("animationiteration"),w_=Ou("animationstart"),M_=Ou("transitionend"),E_=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rs(t,e){E_.set(t,e),ks(e,[t])}for(var Cd=0;Cd<Gg.length;Cd++){var Rd=Gg[Cd],XM=Rd.toLowerCase(),$M=Rd[0].toUpperCase()+Rd.slice(1);rs(XM,"on"+$M)}rs(y_,"onAnimationEnd");rs(S_,"onAnimationIteration");rs(w_,"onAnimationStart");rs("dblclick","onDoubleClick");rs("focusin","onFocus");rs("focusout","onBlur");rs(M_,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Wg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Xw(i,e,void 0,t),t.currentTarget=null}function b_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wg(r,a,c),s=l}}}if($c)throw t=Xf,$c=!1,Xf=null,t}function wt(t,e){var n=e[nh];n===void 0&&(n=e[nh]=new Set);var i=t+"__bubble";n.has(i)||(T_(e,t,2,!1),n.add(i))}function Pd(t,e,n){var i=0;e&&(i|=4),T_(n,t,i,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Bl]){t[Bl]=!0,Dx.forEach(function(n){n!=="selectionchange"&&(qM.has(n)||Pd(n,!1,t),Pd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,Pd("selectionchange",!1,e))}}function T_(t,e,n,i){switch(c_(e)){case 1:var r=lM;break;case 4:r=cM;break;default:r=$p}n=r.bind(null,e,n,t),r=void 0,!jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nd(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Yx(function(){var c=s,d=Gp(n),h=[];e:{var u=E_.get(t);if(u!==void 0){var p=Yp,v=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":p=EM;break;case"focusin":v="focus",p=Ed;break;case"focusout":v="blur",p=Ed;break;case"beforeblur":case"afterblur":p=Ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=fM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=AM;break;case y_:case S_:case w_:p=mM;break;case M_:p=RM;break;case"scroll":p=uM;break;case"wheel":p=NM;break;case"copy":case"cut":case"paste":p=vM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ig}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?u!==null?u+"Capture":null:u;x=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,f!==null&&(S=ja(g,f),S!=null&&x.push(Qa(g,S,_)))),m)break;g=g.return}0<x.length&&(u=new p(u,v,null,n,d),h.push({event:u,listeners:x}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",u&&n!==Gf&&(v=n.relatedTarget||n.fromElement)&&(xs(v)||v[lr]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?xs(v):null,v!==null&&(m=Bs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Lg,S="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ig,S="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?u:co(p),_=v==null?u:co(v),u=new x(S,g+"leave",p,n,d),u.target=m,u.relatedTarget=_,S=null,xs(d)===c&&(x=new x(f,g+"enter",v,n,d),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,f=v,g=0,_=x;_;_=Gs(_))g++;for(_=0,S=f;S;S=Gs(S))_++;for(;0<g-_;)x=Gs(x),g--;for(;0<_-g;)f=Gs(f),_--;for(;g--;){if(x===f||f!==null&&x===f.alternate)break t;x=Gs(x),f=Gs(f)}x=null}else x=null;p!==null&&jg(h,u,p,x,!1),v!==null&&m!==null&&jg(h,m,v,x,!0)}}e:{if(u=c?co(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var b=kM;else if(Og(u))if(m_)b=HM;else{b=zM;var E=BM}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(b=VM);if(b&&(b=b(t,c))){p_(h,b,n,d);break e}E&&E(t,u,c),t==="focusout"&&(E=u._wrapperState)&&E.controlled&&u.type==="number"&&kf(u,"number",u.value)}switch(E=c?co(c):window,t){case"focusin":(Og(E)||E.contentEditable==="true")&&(ao=E,Kf=c,Oa=null);break;case"focusout":Oa=Kf=ao=null;break;case"mousedown":Zf=!0;break;case"contextmenu":case"mouseup":case"dragend":Zf=!1,Hg(h,n,d);break;case"selectionchange":if(jM)break;case"keydown":case"keyup":Hg(h,n,d)}var A;if(Zp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else oo?f_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(d_&&n.locale!=="ko"&&(oo||y!=="onCompositionStart"?y==="onCompositionEnd"&&oo&&(A=u_()):(zr=d,qp="value"in zr?zr.value:zr.textContent,oo=!0)),E=Qc(c,y),0<E.length&&(y=new Dg(y,t,null,n,d),h.push({event:y,listeners:E}),A?y.data=A:(A=h_(n),A!==null&&(y.data=A)))),(A=DM?IM(t,n):UM(t,n))&&(c=Qc(c,"onBeforeInput"),0<c.length&&(d=new Dg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}b_(h,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ja(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=ja(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ja(n,s),l!=null&&o.unshift(Qa(n,l,a))):r||(l=ja(n,s),l!=null&&o.push(Qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YM=/\r\n?/g,KM=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(YM,`
`).replace(KM,"")}function zl(t,e,n){if(e=Xg(e),Xg(t)!==e&&n)throw Error(ce(425))}function Jc(){}var Qf=null,Jf=null;function eh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,ZM=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,QM=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(JM)}:th;function JM(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function $r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Jo,Ja="__reactProps$"+Jo,lr="__reactContainer$"+Jo,nh="__reactEvents$"+Jo,eE="__reactListeners$"+Jo,tE="__reactHandles$"+Jo;function xs(t){var e=t[Ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qg(t);t!==null;){if(n=t[Ni])return n;t=qg(t)}return e}t=n,n=t.parentNode}return null}function _l(t){return t=t[Ni]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function co(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function ku(t){return t[Ja]||null}var ih=[],uo=-1;function ss(t){return{current:t}}function Mt(t){0>uo||(t.current=ih[uo],ih[uo]=null,uo--)}function _t(t,e){uo++,ih[uo]=t.current,t.current=e}var Jr={},pn=ss(Jr),Cn=ss(!1),Rs=Jr;function Bo(t,e){var n=t.type.contextTypes;if(!n)return Jr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Rn(t){return t=t.childContextTypes,t!=null}function eu(){Mt(Cn),Mt(pn)}function Yg(t,e,n){if(pn.current!==Jr)throw Error(ce(168));_t(pn,e),_t(Cn,n)}function A_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Bw(t)||"Unknown",r));return Rt({},n,i)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jr,Rs=pn.current,_t(pn,t),_t(Cn,Cn.current),!0}function Kg(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=A_(t,e,Rs),i.__reactInternalMemoizedMergedChildContext=t,Mt(Cn),Mt(pn),_t(pn,t)):Mt(Cn),_t(Cn,n)}var Ji=null,Bu=!1,Dd=!1;function C_(t){Ji===null?Ji=[t]:Ji.push(t)}function nE(t){Bu=!0,C_(t)}function os(){if(!Dd&&Ji!==null){Dd=!0;var t=0,e=ft;try{var n=Ji;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ji=null,Bu=!1}catch(r){throw Ji!==null&&(Ji=Ji.slice(t+1)),Jx(Wp,os),r}finally{ft=e,Dd=!1}}return null}var fo=[],ho=0,nu=null,iu=0,Zn=[],Qn=0,Ps=null,tr=1,nr="";function hs(t,e){fo[ho++]=iu,fo[ho++]=nu,nu=t,iu=e}function R_(t,e,n){Zn[Qn++]=tr,Zn[Qn++]=nr,Zn[Qn++]=Ps,Ps=t;var i=tr;t=nr;var r=32-mi(i)-1;i&=~(1<<r),n+=1;var s=32-mi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,tr=1<<32-mi(e)+r|n<<r|i,nr=s+t}else tr=1<<s|n<<r|i,nr=t}function Jp(t){t.return!==null&&(hs(t,1),R_(t,1,0))}function em(t){for(;t===nu;)nu=fo[--ho],fo[ho]=null,iu=fo[--ho],fo[ho]=null;for(;t===Ps;)Ps=Zn[--Qn],Zn[Qn]=null,nr=Zn[--Qn],Zn[Qn]=null,tr=Zn[--Qn],Zn[Qn]=null}var Hn=null,Vn=null,Et=!1,fi=null;function P_(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Vn=$r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Vn=null,!0):!1;default:return!1}}function rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sh(t){if(Et){var e=Vn;if(e){var n=e;if(!Zg(t,e)){if(rh(t))throw Error(ce(418));e=$r(n.nextSibling);var i=Hn;e&&Zg(t,e)?P_(i,n):(t.flags=t.flags&-4097|2,Et=!1,Hn=t)}}else{if(rh(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Et=!1,Hn=t}}}function Qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function Vl(t){if(t!==Hn)return!1;if(!Et)return Qg(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eh(t.type,t.memoizedProps)),e&&(e=Vn)){if(rh(t))throw N_(),Error(ce(418));for(;e;)P_(t,e),e=$r(e.nextSibling)}if(Qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vn=$r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vn=null}}else Vn=Hn?$r(t.stateNode.nextSibling):null;return!0}function N_(){for(var t=Vn;t;)t=$r(t.nextSibling)}function zo(){Vn=Hn=null,Et=!1}function tm(t){fi===null?fi=[t]:fi.push(t)}var iE=gr.ReactCurrentBatchConfig;function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Hl(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jg(t){var e=t._init;return e(t._payload)}function L_(t){function e(f,g){if(t){var _=f.deletions;_===null?(f.deletions=[g],f.flags|=16):_.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Zr(f,g),f.index=0,f.sibling=null,f}function s(f,g,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<g?(f.flags|=2,g):_):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,_,S){return g===null||g.tag!==6?(g=zd(_,f.mode,S),g.return=f,g):(g=r(g,_),g.return=f,g)}function l(f,g,_,S){var b=_.type;return b===so?d(f,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Pr&&Jg(b)===g.type)?(S=r(g,_.props),S.ref=fa(f,g,_),S.return=f,S):(S=Uc(_.type,_.key,_.props,null,f.mode,S),S.ref=fa(f,g,_),S.return=f,S)}function c(f,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Vd(_,f.mode,S),g.return=f,g):(g=r(g,_.children||[]),g.return=f,g)}function d(f,g,_,S,b){return g===null||g.tag!==7?(g=Cs(_,f.mode,S,b),g.return=f,g):(g=r(g,_),g.return=f,g)}function h(f,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zd(""+g,f.mode,_),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Nl:return _=Uc(g.type,g.key,g.props,null,f.mode,_),_.ref=fa(f,null,g),_.return=f,_;case ro:return g=Vd(g,f.mode,_),g.return=f,g;case Pr:var S=g._init;return h(f,S(g._payload),_)}if(Aa(g)||aa(g))return g=Cs(g,f.mode,_,null),g.return=f,g;Hl(f,g)}return null}function u(f,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(f,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:return _.key===b?l(f,g,_,S):null;case ro:return _.key===b?c(f,g,_,S):null;case Pr:return b=_._init,u(f,g,b(_._payload),S)}if(Aa(_)||aa(_))return b!==null?null:d(f,g,_,S,null);Hl(f,_)}return null}function p(f,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(_)||null,a(g,f,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Nl:return f=f.get(S.key===null?_:S.key)||null,l(g,f,S,b);case ro:return f=f.get(S.key===null?_:S.key)||null,c(g,f,S,b);case Pr:var E=S._init;return p(f,g,_,E(S._payload),b)}if(Aa(S)||aa(S))return f=f.get(_)||null,d(g,f,S,b,null);Hl(g,S)}return null}function v(f,g,_,S){for(var b=null,E=null,A=g,y=g=0,R=null;A!==null&&y<_.length;y++){A.index>y?(R=A,A=null):R=A.sibling;var L=u(f,A,_[y],S);if(L===null){A===null&&(A=R);break}t&&A&&L.alternate===null&&e(f,A),g=s(L,g,y),E===null?b=L:E.sibling=L,E=L,A=R}if(y===_.length)return n(f,A),Et&&hs(f,y),b;if(A===null){for(;y<_.length;y++)A=h(f,_[y],S),A!==null&&(g=s(A,g,y),E===null?b=A:E.sibling=A,E=A);return Et&&hs(f,y),b}for(A=i(f,A);y<_.length;y++)R=p(A,f,y,_[y],S),R!==null&&(t&&R.alternate!==null&&A.delete(R.key===null?y:R.key),g=s(R,g,y),E===null?b=R:E.sibling=R,E=R);return t&&A.forEach(function(P){return e(f,P)}),Et&&hs(f,y),b}function x(f,g,_,S){var b=aa(_);if(typeof b!="function")throw Error(ce(150));if(_=b.call(_),_==null)throw Error(ce(151));for(var E=b=null,A=g,y=g=0,R=null,L=_.next();A!==null&&!L.done;y++,L=_.next()){A.index>y?(R=A,A=null):R=A.sibling;var P=u(f,A,L.value,S);if(P===null){A===null&&(A=R);break}t&&A&&P.alternate===null&&e(f,A),g=s(P,g,y),E===null?b=P:E.sibling=P,E=P,A=R}if(L.done)return n(f,A),Et&&hs(f,y),b;if(A===null){for(;!L.done;y++,L=_.next())L=h(f,L.value,S),L!==null&&(g=s(L,g,y),E===null?b=L:E.sibling=L,E=L);return Et&&hs(f,y),b}for(A=i(f,A);!L.done;y++,L=_.next())L=p(A,f,y,L.value,S),L!==null&&(t&&L.alternate!==null&&A.delete(L.key===null?y:L.key),g=s(L,g,y),E===null?b=L:E.sibling=L,E=L);return t&&A.forEach(function(U){return e(f,U)}),Et&&hs(f,y),b}function m(f,g,_,S){if(typeof _=="object"&&_!==null&&_.type===so&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:e:{for(var b=_.key,E=g;E!==null;){if(E.key===b){if(b=_.type,b===so){if(E.tag===7){n(f,E.sibling),g=r(E,_.props.children),g.return=f,f=g;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Pr&&Jg(b)===E.type){n(f,E.sibling),g=r(E,_.props),g.ref=fa(f,E,_),g.return=f,f=g;break e}n(f,E);break}else e(f,E);E=E.sibling}_.type===so?(g=Cs(_.props.children,f.mode,S,_.key),g.return=f,f=g):(S=Uc(_.type,_.key,_.props,null,f.mode,S),S.ref=fa(f,g,_),S.return=f,f=S)}return o(f);case ro:e:{for(E=_.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(f,g.sibling),g=r(g,_.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Vd(_,f.mode,S),g.return=f,f=g}return o(f);case Pr:return E=_._init,m(f,g,E(_._payload),S)}if(Aa(_))return v(f,g,_,S);if(aa(_))return x(f,g,_,S);Hl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,_),g.return=f,f=g):(n(f,g),g=zd(_,f.mode,S),g.return=f,f=g),o(f)):n(f,g)}return m}var Vo=L_(!0),D_=L_(!1),ru=ss(null),su=null,po=null,nm=null;function im(){nm=po=su=null}function rm(t){var e=ru.current;Mt(ru),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function So(t,e){su=t,nm=po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function ni(t){var e=t._currentValue;if(nm!==t)if(t={context:t,memoizedValue:e,next:null},po===null){if(su===null)throw Error(ce(308));po=t,su.dependencies={lanes:0,firstContext:t}}else po=po.next=t;return e}var _s=null;function sm(t){_s===null?_s=[t]:_s.push(t)}function I_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sm(e)):(n.next=r.next,r.next=n),e.interleaved=n,cr(t,i)}function cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,cr(t,n)}return r=i.interleaved,r===null?(e.next=e,sm(i)):(e.next=r.next,r.next=e),i.interleaved=e,cr(t,n)}function Rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jp(t,n)}}function e0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,i){var r=t.updateQueue;Nr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(u=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,u);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,u=typeof v=="function"?v.call(p,h,u):v,u==null)break e;h=Rt({},h,u);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=h):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=h}}function t0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var yl={},Fi=ss(yl),el=ss(yl),tl=ss(yl);function ys(t){if(t===yl)throw Error(ce(174));return t}function am(t,e){switch(_t(tl,e),_t(el,t),_t(Fi,yl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zf(e,t)}Mt(Fi),_t(Fi,e)}function Ho(){Mt(Fi),Mt(el),Mt(tl)}function F_(t){ys(tl.current);var e=ys(Fi.current),n=zf(e,t.type);e!==n&&(_t(el,t),_t(Fi,n))}function lm(t){el.current===t&&(Mt(Fi),Mt(el))}var Tt=ss(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Id=[];function cm(){for(var t=0;t<Id.length;t++)Id[t]._workInProgressVersionPrimary=null;Id.length=0}var Pc=gr.ReactCurrentDispatcher,Ud=gr.ReactCurrentBatchConfig,Ns=0,Ct=null,Ht=null,qt=null,lu=!1,ka=!1,nl=0,rE=0;function on(){throw Error(ce(321))}function um(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function dm(t,e,n,i,r,s){if(Ns=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pc.current=t===null||t.memoizedState===null?lE:cE,t=n(i,r),ka){s=0;do{if(ka=!1,nl=0,25<=s)throw Error(ce(301));s+=1,qt=Ht=null,e.updateQueue=null,Pc.current=uE,t=n(i,r)}while(ka)}if(Pc.current=cu,e=Ht!==null&&Ht.next!==null,Ns=0,qt=Ht=Ct=null,lu=!1,e)throw Error(ce(300));return t}function fm(){var t=nl!==0;return nl=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Ct.memoizedState=qt=t:qt=qt.next=t,qt}function ii(){if(Ht===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var e=qt===null?Ct.memoizedState:qt.next;if(e!==null)qt=e,Ht=t;else{if(t===null)throw Error(ce(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},qt===null?Ct.memoizedState=qt=t:qt=qt.next=t}return qt}function il(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ns&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=d,Ls|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,vi(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Od(t){var e=ii(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);vi(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O_(){}function k_(t,e){var n=Ct,i=ii(),r=e(),s=!vi(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,hm(V_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(n.flags|=2048,rl(9,z_.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(ce(349));Ns&30||B_(n,e,r)}return r}function B_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function z_(t,e,n,i){e.value=n,e.getSnapshot=i,H_(e)&&G_(t)}function V_(t,e,n){return n(function(){H_(e)&&G_(t)})}function H_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function G_(t){var e=cr(t,1);e!==null&&gi(e,t,1,-1)}function n0(t){var e=Ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=aE.bind(null,Ct,t),[e.memoizedState,t]}function rl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function W_(){return ii().memoizedState}function Nc(t,e,n,i){var r=Ti();Ct.flags|=t,r.memoizedState=rl(1|e,n,void 0,i===void 0?null:i)}function zu(t,e,n,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(Ht!==null){var o=Ht.memoizedState;if(s=o.destroy,i!==null&&um(i,o.deps)){r.memoizedState=rl(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=rl(1|e,n,s,i)}function i0(t,e){return Nc(8390656,8,t,e)}function hm(t,e){return zu(2048,8,t,e)}function j_(t,e){return zu(4,2,t,e)}function X_(t,e){return zu(4,4,t,e)}function $_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q_(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,$_.bind(null,e,t),n)}function pm(){}function Y_(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&um(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function K_(t,e){var n=ii();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&um(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Z_(t,e,n){return Ns&21?(vi(n,e)||(n=n_(),Ct.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function sE(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=Ud.transition;Ud.transition={};try{t(!1),e()}finally{ft=n,Ud.transition=i}}function Q_(){return ii().memoizedState}function oE(t,e,n){var i=Kr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},J_(t))ey(e,n);else if(n=I_(t,e,n,i),n!==null){var r=_n();gi(n,t,i,r),ty(n,e,i)}}function aE(t,e,n){var i=Kr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(J_(t))ey(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,vi(a,o)){var l=e.interleaved;l===null?(r.next=r,sm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=I_(t,e,r,i),n!==null&&(r=_n(),gi(n,t,i,r),ty(n,e,i))}}function J_(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function ey(t,e){ka=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ty(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jp(t,n)}}var cu={readContext:ni,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},lE={readContext:ni,useCallback:function(t,e){return Ti().memoizedState=[t,e===void 0?null:e],t},useContext:ni,useEffect:i0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4194308,4,$_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nc(4,2,t,e)},useMemo:function(t,e){var n=Ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=oE.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=Ti();return t={current:t},e.memoizedState=t},useState:n0,useDebugValue:pm,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=n0(!1),e=t[0];return t=sE.bind(null,t[1]),Ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=Ti();if(Et){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Yt===null)throw Error(ce(349));Ns&30||B_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,i0(V_.bind(null,i,s,t),[t]),i.flags|=2048,rl(9,z_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ti(),e=Yt.identifierPrefix;if(Et){var n=nr,i=tr;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cE={readContext:ni,useCallback:Y_,useContext:ni,useEffect:hm,useImperativeHandle:q_,useInsertionEffect:j_,useLayoutEffect:X_,useMemo:K_,useReducer:Fd,useRef:W_,useState:function(){return Fd(il)},useDebugValue:pm,useDeferredValue:function(t){var e=ii();return Z_(e,Ht.memoizedState,t)},useTransition:function(){var t=Fd(il)[0],e=ii().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:k_,useId:Q_,unstable_isNewReconciler:!1},uE={readContext:ni,useCallback:Y_,useContext:ni,useEffect:hm,useImperativeHandle:q_,useInsertionEffect:j_,useLayoutEffect:X_,useMemo:K_,useReducer:Od,useRef:W_,useState:function(){return Od(il)},useDebugValue:pm,useDeferredValue:function(t){var e=ii();return Ht===null?e.memoizedState=t:Z_(e,Ht.memoizedState,t)},useTransition:function(){var t=Od(il)[0],e=ii().memoizedState;return[t,e]},useMutableSource:O_,useSyncExternalStore:k_,useId:Q_,unstable_isNewReconciler:!1};function li(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ah(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vu={isMounted:function(t){return(t=t._reactInternals)?Bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Kr(t),s=rr(i,r);s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(gi(e,t,r,i),Rc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=Kr(t),s=rr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qr(t,s,r),e!==null&&(gi(e,t,r,i),Rc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=Kr(t),r=rr(n,i);r.tag=2,e!=null&&(r.callback=e),e=qr(t,r,i),e!==null&&(gi(e,t,i,n),Rc(e,t,i))}};function r0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,s):!0}function ny(t,e,n){var i=!1,r=Jr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=Rn(e)?Rs:pn.current,i=e.contextTypes,s=(i=i!=null)?Bo(t,r):Jr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function s0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vu.enqueueReplaceState(e,e.state,null)}function lh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},om(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=Rn(e)?Rs:pn.current,r.context=Bo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ah(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vu.enqueueReplaceState(r,r.state,null),ou(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",i=e;do n+=kw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function kd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dE=typeof WeakMap=="function"?WeakMap:Map;function iy(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){du||(du=!0,_h=i),ch(t,e)},n}function ry(t,e,n){n=rr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof i!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function o0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new dE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bE.bind(null,t,e,n),e.then(t,t))}function a0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function l0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var fE=gr.ReactCurrentOwner,Tn=!1;function vn(t,e,n,i){e.child=t===null?D_(e,null,n,i):Vo(e,t.child,n,i)}function c0(t,e,n,i,r){n=n.render;var s=e.ref;return So(e,r),i=dm(t,e,n,i,s,r),n=fm(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Et&&n&&Jp(e),e.flags|=1,vn(t,e,i,r),e.child)}function u0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sy(t,e,s,i,r)):(t=Uc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(o,i)&&t.ref===e.ref)return ur(t,e,r)}return e.flags|=1,t=Zr(s,i),t.ref=e.ref,t.return=e,e.child=t}function sy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ka(s,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,ur(t,e,r)}return uh(t,e,n,i,r)}function oy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(go,kn),kn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(go,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(go,kn),kn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(go,kn),kn|=i;return vn(t,e,r,n),e.child}function ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,i,r){var s=Rn(n)?Rs:pn.current;return s=Bo(e,s),So(e,r),n=dm(t,e,n,i,s,r),i=fm(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ur(t,e,r)):(Et&&i&&Jp(e),e.flags|=1,vn(t,e,n,r),e.child)}function d0(t,e,n,i,r){if(Rn(n)){var s=!0;tu(e)}else s=!1;if(So(e,r),e.stateNode===null)Lc(t,e),ny(e,n,i),lh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ni(c):(c=Rn(n)?Rs:pn.current,c=Bo(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&s0(e,o,i,c),Nr=!1;var u=e.memoizedState;o.state=u,ou(e,i,o,r),l=e.memoizedState,a!==i||u!==l||Cn.current||Nr?(typeof d=="function"&&(ah(e,n,d,i),l=e.memoizedState),(a=Nr||r0(e,n,a,i,u,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,U_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:li(e.type,a),o.props=c,h=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=Rn(n)?Rs:pn.current,l=Bo(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||u!==l)&&s0(e,o,i,l),Nr=!1,u=e.memoizedState,o.state=u,ou(e,i,o,r);var v=e.memoizedState;a!==h||u!==v||Cn.current||Nr?(typeof p=="function"&&(ah(e,n,p,i),v=e.memoizedState),(c=Nr||r0(e,n,c,i,u,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return dh(t,e,n,i,s,r)}function dh(t,e,n,i,r,s){ay(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kg(e,n,!1),ur(t,e,s);i=e.stateNode,fE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Vo(e,t.child,null,s),e.child=Vo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Kg(e,n,!0),e.child}function ly(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),am(t,e.containerInfo)}function f0(t,e,n,i,r){return zo(),tm(r),e.flags|=256,vn(t,e,n,i),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function cy(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Tt,r&1),t===null)return sh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wu(o,i,0,null),t=Cs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=fh,t):mm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return hE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=Cs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fh,i}return s=t.child,t=s.sibling,i=Zr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mm(t,e){return e=Wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gl(t,e,n,i){return i!==null&&tm(i),Vo(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=kd(Error(ce(422))),Gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wu({mode:"visible",children:i.children},r,0,null),s=Cs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vo(e,t.child,null,o),e.child.memoizedState=hh(o),e.memoizedState=fh,s);if(!(e.mode&1))return Gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=kd(s,i,void 0),Gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Tn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,cr(t,r),gi(i,t,r,-1))}return Sm(),i=kd(Error(ce(421))),Gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=TE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Vn=$r(r.nextSibling),Hn=e,Et=!0,fi=null,t!==null&&(Zn[Qn++]=tr,Zn[Qn++]=nr,Zn[Qn++]=Ps,tr=t.id,nr=t.overflow,Ps=e),e=mm(e,i.children),e.flags|=4096,e)}function h0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),oh(t.return,e,n)}function Bd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,n,e);else if(t.tag===19)h0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&au(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ur(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pE(t,e,n){switch(e.tag){case 3:ly(e),zo();break;case 5:F_(e);break;case 1:Rn(e.type)&&tu(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(ru,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?cy(t,e,n):(_t(Tt,Tt.current&1),t=ur(t,e,n),t!==null?t.sibling:null);_t(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,oy(t,e,n)}return ur(t,e,n)}var dy,ph,fy,hy;dy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ph=function(){};fy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ys(Fi.current);var s=null;switch(n){case"input":r=Ff(t,r),i=Ff(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Bf(t,r),i=Bf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jc)}Vf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&wt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};hy=function(t,e,n,i){n!==i&&(e.flags|=4)};function ha(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function an(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mE(t,e,n){var i=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(e),null;case 1:return Rn(e.type)&&eu(),an(e),null;case 3:return i=e.stateNode,Ho(),Mt(Cn),Mt(pn),cm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fi!==null&&(wh(fi),fi=null))),ph(t,e),an(e),null;case 5:lm(e);var r=ys(tl.current);if(n=e.type,t!==null&&e.stateNode!=null)fy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return an(e),null}if(t=ys(Fi.current),Vl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ni]=e,i[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<Ra.length;r++)wt(Ra[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":wg(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":Eg(i,s),wt("invalid",i)}Vf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&zl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zl(i.textContent,a,t),r=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&wt("scroll",i)}switch(n){case"input":Ll(i),Mg(i,s,!0);break;case"textarea":Ll(i),bg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ni]=e,t[Ja]=i,dy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hf(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ra.length;r++)wt(Ra[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":wg(t,i),r=Ff(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),wt("invalid",t);break;case"textarea":Eg(t,i),r=Bf(t,i),wt("invalid",t);break;default:r=i}Vf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Wx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wa(t,l):typeof l=="number"&&Wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&wt("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":Ll(t),Mg(t,i,!1);break;case"textarea":Ll(t),bg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Qr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vo(t,!!i.multiple,s,!1):i.defaultValue!=null&&vo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return an(e),null;case 6:if(t&&e.stateNode!=null)hy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=ys(tl.current),ys(Fi.current),Vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ni]=e,(s=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:zl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ni]=e,e.stateNode=i}return an(e),null;case 13:if(Mt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Vn!==null&&e.mode&1&&!(e.flags&128))N_(),zo(),e.flags|=98560,s=!1;else if(s=Vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ni]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;an(e),s=!1}else fi!==null&&(wh(fi),fi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?Wt===0&&(Wt=3):Sm())),e.updateQueue!==null&&(e.flags|=4),an(e),null);case 4:return Ho(),ph(t,e),t===null&&Za(e.stateNode.containerInfo),an(e),null;case 10:return rm(e.type._context),an(e),null;case 17:return Rn(e.type)&&eu(),an(e),null;case 19:if(Mt(Tt),s=e.memoizedState,s===null)return an(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ha(s,!1);else{if(Wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,ha(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ot()>Wo&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304)}else{if(!i)if(t=au(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Et)return an(e),null}else 2*Ot()-s.renderingStartTime>Wo&&n!==1073741824&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ot(),e.sibling=null,n=Tt.current,_t(Tt,i?n&1|2:n&1),e):(an(e),null);case 22:case 23:return ym(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(an(e),e.subtreeFlags&6&&(e.flags|=8192)):an(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function gE(t,e){switch(em(e),e.tag){case 1:return Rn(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),Mt(Cn),Mt(pn),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lm(e),null;case 13:if(Mt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Tt),null;case 4:return Ho(),null;case 10:return rm(e.type._context),null;case 22:case 23:return ym(),null;case 24:return null;default:return null}}var Wl=!1,dn=!1,vE=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Lt(t,e,i)}else n.current=null}function mh(t,e,n){try{n()}catch(i){Lt(t,e,i)}}var p0=!1;function xE(t,e){if(Qf=Kc,t=x_(),Qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,u=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)u=h,h=p;for(;;){if(h===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jf={focusedElem:t,selectionRange:n},Kc=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:li(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Lt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return v=p0,p0=!1,v}function Ba(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&mh(e,n,s)}r=r.next}while(r!==i)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function py(t){var e=t.alternate;e!==null&&(t.alternate=null,py(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ni],delete e[Ja],delete e[nh],delete e[eE],delete e[tE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function my(t){return t.tag===5||t.tag===3||t.tag===4}function m0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||my(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jc));else if(i!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}function xh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}var Zt=null,di=!1;function yr(t,e,n){for(n=n.child;n!==null;)gy(t,e,n),n=n.sibling}function gy(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:dn||mo(n,e);case 6:var i=Zt,r=di;Zt=null,yr(t,e,n),Zt=i,di=r,Zt!==null&&(di?(t=Zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Zt.removeChild(n.stateNode));break;case 18:Zt!==null&&(di?(t=Zt,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),qa(t)):Ld(Zt,n.stateNode));break;case 4:i=Zt,r=di,Zt=n.stateNode.containerInfo,di=!0,yr(t,e,n),Zt=i,di=r;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mh(n,e,o),r=r.next}while(r!==i)}yr(t,e,n);break;case 1:if(!dn&&(mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Lt(n,e,a)}yr(t,e,n);break;case 21:yr(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,yr(t,e,n),dn=i):yr(t,e,n);break;default:yr(t,e,n)}}function g0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vE),e.forEach(function(i){var r=AE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ri(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,di=!1;break e;case 3:Zt=a.stateNode.containerInfo,di=!0;break e;case 4:Zt=a.stateNode.containerInfo,di=!0;break e}a=a.return}if(Zt===null)throw Error(ce(160));gy(s,o,r),Zt=null,di=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Lt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vy(e,t),e=e.sibling}function vy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(e,t),Mi(t),i&4){try{Ba(3,t,t.return),Hu(3,t)}catch(x){Lt(t,t.return,x)}try{Ba(5,t,t.return)}catch(x){Lt(t,t.return,x)}}break;case 1:ri(e,t),Mi(t),i&512&&n!==null&&mo(n,n.return);break;case 5:if(ri(e,t),Mi(t),i&512&&n!==null&&mo(n,n.return),t.flags&32){var r=t.stateNode;try{Wa(r,"")}catch(x){Lt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bx(r,s),Hf(a,o);var c=Hf(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Wx(r,h):d==="dangerouslySetInnerHTML"?Hx(r,h):d==="children"?Wa(r,h):Bp(r,d,h,c)}switch(a){case"input":Of(r,s);break;case"textarea":zx(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vo(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?vo(r,!!s.multiple,s.defaultValue,!0):vo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ja]=s}catch(x){Lt(t,t.return,x)}}break;case 6:if(ri(e,t),Mi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Lt(t,t.return,x)}}break;case 3:if(ri(e,t),Mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(x){Lt(t,t.return,x)}break;case 4:ri(e,t),Mi(t);break;case 13:ri(e,t),Mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(xm=Ot())),i&4&&g0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(c=dn)||d,ri(e,t),dn=c):ri(e,t),Mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Ne=t,d=t.child;d!==null;){for(h=Ne=d;Ne!==null;){switch(u=Ne,p=u.child,u.tag){case 0:case 11:case 14:case 15:Ba(4,u,u.return);break;case 1:mo(u,u.return);var v=u.stateNode;if(typeof v.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Lt(i,n,x)}}break;case 5:mo(u,u.return);break;case 22:if(u.memoizedState!==null){x0(h);continue}}p!==null?(p.return=u,Ne=p):x0(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Gx("display",o))}catch(x){Lt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Lt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ri(e,t),Mi(t),i&4&&g0(t);break;case 21:break;default:ri(e,t),Mi(t)}}function Mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(my(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Wa(r,""),i.flags&=-33);var s=m0(t);xh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=m0(t);vh(t,a,o);break;default:throw Error(ce(161))}}catch(l){Lt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _E(t,e,n){Ne=t,xy(t)}function xy(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Wl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||dn;a=Wl;var c=dn;if(Wl=o,(dn=l)&&!c)for(Ne=r;Ne!==null;)o=Ne,l=o.child,o.tag===22&&o.memoizedState!==null?_0(r):l!==null?(l.return=o,Ne=l):_0(r);for(;s!==null;)Ne=s,xy(s),s=s.sibling;Ne=r,Wl=a,dn=c}v0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):v0(t)}}function v0(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||Hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}t0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&qa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}dn||e.flags&512&&gh(e)}catch(u){Lt(e,e.return,u)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function x0(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function _0(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){Lt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Lt(e,r,l)}}var s=e.return;try{gh(e)}catch(l){Lt(e,s,l)}break;case 5:var o=e.return;try{gh(e)}catch(l){Lt(e,o,l)}}}catch(l){Lt(e,e.return,l)}if(e===t){Ne=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ne=a;break}Ne=e.return}}var yE=Math.ceil,uu=gr.ReactCurrentDispatcher,gm=gr.ReactCurrentOwner,ti=gr.ReactCurrentBatchConfig,rt=0,Yt=null,Vt=null,en=0,kn=0,go=ss(0),Wt=0,sl=null,Ls=0,Gu=0,vm=0,za=null,bn=null,xm=0,Wo=1/0,Qi=null,du=!1,_h=null,Yr=null,jl=!1,Vr=null,fu=0,Va=0,yh=null,Dc=-1,Ic=0;function _n(){return rt&6?Ot():Dc!==-1?Dc:Dc=Ot()}function Kr(t){return t.mode&1?rt&2&&en!==0?en&-en:iE.transition!==null?(Ic===0&&(Ic=n_()),Ic):(t=ft,t!==0||(t=window.event,t=t===void 0?16:c_(t.type)),t):1}function gi(t,e,n,i){if(50<Va)throw Va=0,yh=null,Error(ce(185));vl(t,n,i),(!(rt&2)||t!==Yt)&&(t===Yt&&(!(rt&2)&&(Gu|=n),Wt===4&&Dr(t,en)),Pn(t,i),n===1&&rt===0&&!(e.mode&1)&&(Wo=Ot()+500,Bu&&os()))}function Pn(t,e){var n=t.callbackNode;iM(t,e);var i=Yc(t,t===Yt?en:0);if(i===0)n!==null&&Cg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cg(n),e===1)t.tag===0?nE(y0.bind(null,t)):C_(y0.bind(null,t)),QM(function(){!(rt&6)&&os()}),n=null;else{switch(i_(i)){case 1:n=Wp;break;case 4:n=e_;break;case 16:n=qc;break;case 536870912:n=t_;break;default:n=qc}n=Ty(n,_y.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _y(t,e){if(Dc=-1,Ic=0,rt&6)throw Error(ce(327));var n=t.callbackNode;if(wo()&&t.callbackNode!==n)return null;var i=Yc(t,t===Yt?en:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hu(t,i);else{e=i;var r=rt;rt|=2;var s=Sy();(Yt!==t||en!==e)&&(Qi=null,Wo=Ot()+500,As(t,e));do try{ME();break}catch(a){yy(t,a)}while(!0);im(),uu.current=s,rt=r,Vt!==null?e=0:(Yt=null,en=0,e=Wt)}if(e!==0){if(e===2&&(r=$f(t),r!==0&&(i=r,e=Sh(t,r))),e===1)throw n=sl,As(t,0),Dr(t,i),Pn(t,Ot()),n;if(e===6)Dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!SE(r)&&(e=hu(t,i),e===2&&(s=$f(t),s!==0&&(i=s,e=Sh(t,s))),e===1))throw n=sl,As(t,0),Dr(t,i),Pn(t,Ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:ps(t,bn,Qi);break;case 3:if(Dr(t,i),(i&130023424)===i&&(e=xm+500-Ot(),10<e)){if(Yc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){_n(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=th(ps.bind(null,t,bn,Qi),e);break}ps(t,bn,Qi);break;case 4:if(Dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-mi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yE(i/1960))-i,10<i){t.timeoutHandle=th(ps.bind(null,t,bn,Qi),i);break}ps(t,bn,Qi);break;case 5:ps(t,bn,Qi);break;default:throw Error(ce(329))}}}return Pn(t,Ot()),t.callbackNode===n?_y.bind(null,t):null}function Sh(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(As(t,e).flags|=256),t=hu(t,e),t!==2&&(e=bn,bn=n,e!==null&&wh(e)),t}function wh(t){bn===null?bn=t:bn.push.apply(bn,t)}function SE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~vm,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function y0(t){if(rt&6)throw Error(ce(327));wo();var e=Yc(t,0);if(!(e&1))return Pn(t,Ot()),null;var n=hu(t,e);if(t.tag!==0&&n===2){var i=$f(t);i!==0&&(e=i,n=Sh(t,i))}if(n===1)throw n=sl,As(t,0),Dr(t,e),Pn(t,Ot()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ps(t,bn,Qi),Pn(t,Ot()),null}function _m(t,e){var n=rt;rt|=1;try{return t(e)}finally{rt=n,rt===0&&(Wo=Ot()+500,Bu&&os())}}function Ds(t){Vr!==null&&Vr.tag===0&&!(rt&6)&&wo();var e=rt;rt|=1;var n=ti.transition,i=ft;try{if(ti.transition=null,ft=1,t)return t()}finally{ft=i,ti.transition=n,rt=e,!(rt&6)&&os()}}function ym(){kn=go.current,Mt(go)}function As(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZM(n)),Vt!==null)for(n=Vt.return;n!==null;){var i=n;switch(em(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&eu();break;case 3:Ho(),Mt(Cn),Mt(pn),cm();break;case 5:lm(i);break;case 4:Ho();break;case 13:Mt(Tt);break;case 19:Mt(Tt);break;case 10:rm(i.type._context);break;case 22:case 23:ym()}n=n.return}if(Yt=t,Vt=t=Zr(t.current,null),en=kn=e,Wt=0,sl=null,vm=Gu=Ls=0,bn=za=null,_s!==null){for(e=0;e<_s.length;e++)if(n=_s[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_s=null}return t}function yy(t,e){do{var n=Vt;try{if(im(),Pc.current=cu,lu){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lu=!1}if(Ns=0,qt=Ht=Ct=null,ka=!1,nl=0,gm.current=null,n===null||n.return===null){Wt=1,sl=e,Vt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=en,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=a0(o);if(p!==null){p.flags&=-257,l0(p,o,a,s,e),p.mode&1&&o0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){o0(s,c,e),Sm();break e}l=Error(ce(426))}}else if(Et&&a.mode&1){var m=a0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),l0(m,o,a,s,e),tm(Go(l,a));break e}}s=l=Go(l,a),Wt!==4&&(Wt=2),za===null?za=[s]:za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=iy(s,l,e);e0(s,f);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Yr===null||!Yr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ry(s,a,e);e0(s,S);break e}}s=s.return}while(s!==null)}My(n)}catch(b){e=b,Vt===n&&n!==null&&(Vt=n=n.return);continue}break}while(!0)}function Sy(){var t=uu.current;return uu.current=cu,t===null?cu:t}function Sm(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Yt===null||!(Ls&268435455)&&!(Gu&268435455)||Dr(Yt,en)}function hu(t,e){var n=rt;rt|=2;var i=Sy();(Yt!==t||en!==e)&&(Qi=null,As(t,e));do try{wE();break}catch(r){yy(t,r)}while(!0);if(im(),rt=n,uu.current=i,Vt!==null)throw Error(ce(261));return Yt=null,en=0,Wt}function wE(){for(;Vt!==null;)wy(Vt)}function ME(){for(;Vt!==null&&!qw();)wy(Vt)}function wy(t){var e=by(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?My(t):Vt=e,gm.current=null}function My(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gE(n,e),n!==null){n.flags&=32767,Vt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Vt=null;return}}else if(n=mE(n,e,kn),n!==null){Vt=n;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=t}while(e!==null);Wt===0&&(Wt=5)}function ps(t,e,n){var i=ft,r=ti.transition;try{ti.transition=null,ft=1,EE(t,e,n,i)}finally{ti.transition=r,ft=i}return null}function EE(t,e,n,i){do wo();while(Vr!==null);if(rt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rM(t,s),t===Yt&&(Vt=Yt=null,en=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jl||(jl=!0,Ty(qc,function(){return wo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=ft;ft=1;var a=rt;rt|=4,gm.current=null,xE(t,n),vy(n,t),WM(Jf),Kc=!!Qf,Jf=Qf=null,t.current=n,_E(n),Yw(),rt=a,ft=o,ti.transition=s}else t.current=n;if(jl&&(jl=!1,Vr=t,fu=r),s=t.pendingLanes,s===0&&(Yr=null),Qw(n.stateNode),Pn(t,Ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(du)throw du=!1,t=_h,_h=null,t;return fu&1&&t.tag!==0&&wo(),s=t.pendingLanes,s&1?t===yh?Va++:(Va=0,yh=t):Va=0,os(),null}function wo(){if(Vr!==null){var t=i_(fu),e=ti.transition,n=ft;try{if(ti.transition=null,ft=16>t?16:t,Vr===null)var i=!1;else{if(t=Vr,Vr=null,fu=0,rt&6)throw Error(ce(331));var r=rt;for(rt|=4,Ne=t.current;Ne!==null;){var s=Ne,o=s.child;if(Ne.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ne=c;Ne!==null;){var d=Ne;switch(d.tag){case 0:case 11:case 15:Ba(8,d,s)}var h=d.child;if(h!==null)h.return=d,Ne=h;else for(;Ne!==null;){d=Ne;var u=d.sibling,p=d.return;if(py(d),d===c){Ne=null;break}if(u!==null){u.return=p,Ne=u;break}Ne=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Ne=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ne=o;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ne=f;break e}Ne=s.return}}var g=t.current;for(Ne=g;Ne!==null;){o=Ne;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ne=_;else e:for(o=g;Ne!==null;){if(a=Ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(b){Lt(a,a.return,b)}if(a===o){Ne=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ne=S;break e}Ne=a.return}}if(rt=r,os(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(Iu,t)}catch{}i=!0}return i}finally{ft=n,ti.transition=e}}return!1}function S0(t,e,n){e=Go(n,e),e=iy(t,e,1),t=qr(t,e,1),e=_n(),t!==null&&(vl(t,1,e),Pn(t,e))}function Lt(t,e,n){if(t.tag===3)S0(t,t,n);else for(;e!==null;){if(e.tag===3){S0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yr===null||!Yr.has(i))){t=Go(n,t),t=ry(e,t,1),e=qr(e,t,1),t=_n(),e!==null&&(vl(e,1,t),Pn(e,t));break}}e=e.return}}function bE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=_n(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(en&n)===n&&(Wt===4||Wt===3&&(en&130023424)===en&&500>Ot()-xm?As(t,0):vm|=n),Pn(t,e)}function Ey(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var n=_n();t=cr(t,e),t!==null&&(vl(t,e,n),Pn(t,n))}function TE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ey(t,n)}function AE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Ey(t,n)}var by;by=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,pE(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Et&&e.flags&1048576&&R_(e,iu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=Bo(e,pn.current);So(e,n),r=dm(null,e,i,t,r,n);var s=fm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rn(i)?(s=!0,tu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,om(e),r.updater=Vu,e.stateNode=r,r._reactInternals=e,lh(e,i,t,n),e=dh(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Jp(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=RE(i),t=li(i,t),r){case 0:e=uh(null,e,i,t,n);break e;case 1:e=d0(null,e,i,t,n);break e;case 11:e=c0(null,e,i,t,n);break e;case 14:e=u0(null,e,i,li(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),uh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),d0(t,e,i,r,n);case 3:e:{if(ly(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,U_(t,e),ou(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Go(Error(ce(423)),e),e=f0(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(ce(424)),e),e=f0(t,e,i,n,r);break e}else for(Vn=$r(e.stateNode.containerInfo.firstChild),Hn=e,Et=!0,fi=null,n=D_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=ur(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return F_(e),t===null&&sh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,eh(i,r)?o=null:s!==null&&eh(i,s)&&(e.flags|=32),ay(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&sh(e),null;case 13:return cy(t,e,n);case 4:return am(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),c0(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,_t(ru,i._currentValue),i._currentValue=o,s!==null)if(vi(s.value,o)){if(s.children===r.children&&!Cn.current){e=ur(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),oh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,n),r=ni(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),u0(t,e,i,r,n);case 15:return sy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),Lc(t,e),e.tag=1,Rn(i)?(t=!0,tu(e)):t=!1,So(e,n),ny(e,i,r),lh(e,i,r,n),dh(null,e,i,!0,t,n);case 19:return uy(t,e,n);case 22:return oy(t,e,n)}throw Error(ce(156,e.tag))};function Ty(t,e){return Jx(t,e)}function CE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new CE(t,e,n,i)}function wm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RE(t){if(typeof t=="function")return wm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vp)return 11;if(t===Hp)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case so:return Cs(n.children,r,s,e);case zp:o=8,r|=8;break;case Lf:return t=ei(12,n,e,r|2),t.elementType=Lf,t.lanes=s,t;case Df:return t=ei(13,n,e,r),t.elementType=Df,t.lanes=s,t;case If:return t=ei(19,n,e,r),t.elementType=If,t.lanes=s,t;case Fx:return Wu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ix:o=10;break e;case Ux:o=9;break e;case Vp:o=11;break e;case Hp:o=14;break e;case Pr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cs(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function Wu(t,e,n,i){return t=ei(22,t,i,e),t.elementType=Fx,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function Vd(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Mm(t,e,n,i,r,s,o,a,l){return t=new PE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),t}function NE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ay(t){if(!t)return Jr;t=t._reactInternals;e:{if(Bs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(Rn(n))return A_(t,n,e)}return e}function Cy(t,e,n,i,r,s,o,a,l){return t=Mm(n,i,!0,t,r,s,o,a,l),t.context=Ay(null),n=t.current,i=_n(),r=Kr(n),s=rr(i,r),s.callback=e??null,qr(n,s,r),t.current.lanes=r,vl(t,r,i),Pn(t,i),t}function ju(t,e,n,i){var r=e.current,s=_n(),o=Kr(r);return n=Ay(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qr(r,e,o),t!==null&&(gi(t,r,o,s),Rc(t,r,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function w0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Em(t,e){w0(t,e),(t=t.alternate)&&w0(t,e)}function LE(){return null}var Ry=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}Xu.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));ju(t,e,null,null)};Xu.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){ju(null,t,null,null)}),e[lr]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=o_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Lr.length&&e!==0&&e<Lr[n].priority;n++);Lr.splice(n,0,t),n===0&&l_(t)}};function Tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M0(){}function DE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=pu(o);s.call(c)}}var o=Cy(e,i,t,0,null,!1,!1,"",M0);return t._reactRootContainer=o,t[lr]=o.current,Za(t.nodeType===8?t.parentNode:t),Ds(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=pu(l);a.call(c)}}var l=Mm(t,0,!1,null,null,!1,!1,"",M0);return t._reactRootContainer=l,t[lr]=l.current,Za(t.nodeType===8?t.parentNode:t),Ds(function(){ju(e,l,n,i)}),l}function qu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=pu(o);a.call(l)}}ju(e,o,t,r)}else o=DE(n,e,t,r,i);return pu(o)}r_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ca(e.pendingLanes);n!==0&&(jp(e,n|1),Pn(e,Ot()),!(rt&6)&&(Wo=Ot()+500,os()))}break;case 13:Ds(function(){var i=cr(t,1);if(i!==null){var r=_n();gi(i,t,1,r)}}),Em(t,1)}};Xp=function(t){if(t.tag===13){var e=cr(t,134217728);if(e!==null){var n=_n();gi(e,t,134217728,n)}Em(t,134217728)}};s_=function(t){if(t.tag===13){var e=Kr(t),n=cr(t,e);if(n!==null){var i=_n();gi(n,t,e,i)}Em(t,e)}};o_=function(){return ft};a_=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Wf=function(t,e,n){switch(e){case"input":if(Of(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ku(i);if(!r)throw Error(ce(90));kx(i),Of(i,r)}}}break;case"textarea":zx(t,n);break;case"select":e=n.value,e!=null&&vo(t,!!n.multiple,e,!1)}};$x=_m;qx=Ds;var IE={usingClientEntryPoint:!1,Events:[_l,co,ku,jx,Xx,_m]},pa={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},UE={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zx(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||LE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Iu=Xl.inject(UE),Ui=Xl}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IE;jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tm(e))throw Error(ce(200));return NE(t,e,null,n)};jn.createRoot=function(t,e){if(!Tm(t))throw Error(ce(299));var n=!1,i="",r=Ry;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Mm(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,Za(t.nodeType===8?t.parentNode:t),new bm(e)};jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=Zx(e),t=t===null?null:t.stateNode,t};jn.flushSync=function(t){return Ds(t)};jn.hydrate=function(t,e,n){if(!$u(e))throw Error(ce(200));return qu(null,t,e,!0,n)};jn.hydrateRoot=function(t,e,n){if(!Tm(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Ry;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cy(e,null,t,1,n??null,r,!1,s,o),t[lr]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xu(e)};jn.render=function(t,e,n){if(!$u(e))throw Error(ce(200));return qu(null,t,e,!1,n)};jn.unmountComponentAtNode=function(t){if(!$u(t))throw Error(ce(40));return t._reactRootContainer?(Ds(function(){qu(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};jn.unstable_batchedUpdates=_m;jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!$u(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return qu(t,e,n,!1,i)};jn.version="18.3.1-next-f1338f8080-20240426";function Py(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Py)}catch(t){console.error(t)}}Py(),Px.exports=jn;var Sl=Px.exports;const Ny=xx(Sl);var Ly,E0=Sl;Ly=E0.createRoot,E0.hydrateRoot;const FE=1,OE=1e6;let Hd=0;function kE(){return Hd=(Hd+1)%Number.MAX_SAFE_INTEGER,Hd.toString()}const Gd=new Map,b0=t=>{if(Gd.has(t))return;const e=setTimeout(()=>{Gd.delete(t),Ha({type:"REMOVE_TOAST",toastId:t})},OE);Gd.set(t,e)},BE=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,FE)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?b0(n):t.toasts.forEach(i=>{b0(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Fc=[];let Oc={toasts:[]};function Ha(t){Oc=BE(Oc,t),Fc.forEach(e=>{e(Oc)})}function zE({...t}){const e=kE(),n=r=>Ha({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Ha({type:"DISMISS_TOAST",toastId:e});return Ha({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function VE(){const[t,e]=N.useState(Oc);return N.useEffect(()=>(Fc.push(e),()=>{const n=Fc.indexOf(e);n>-1&&Fc.splice(n,1)}),[t]),{...t,toast:zE,dismiss:n=>Ha({type:"DISMISS_TOAST",toastId:n})}}function Gt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function HE(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function Dy(...t){return e=>t.forEach(n=>HE(n,e))}function xi(...t){return N.useCallback(Dy(...t),t)}function GE(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];function c(h){const{scope:u,children:p,...v}=h,x=(u==null?void 0:u[t][l])||a,m=N.useMemo(()=>v,Object.values(v));return w.jsx(x.Provider,{value:m,children:p})}function d(h,u){const p=(u==null?void 0:u[t][l])||a,v=N.useContext(p);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return c.displayName=s+"Provider",[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,WE(r,...e)]}function WE(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var mu=N.forwardRef((t,e)=>{const{children:n,...i}=t,r=N.Children.toArray(n),s=r.find(jE);if(s){const o=s.props.children,a=r.map(l=>l===s?N.Children.count(o)>1?N.Children.only(null):N.isValidElement(o)?o.props.children:null:l);return w.jsx(Mh,{...i,ref:e,children:N.isValidElement(o)?N.cloneElement(o,void 0,a):null})}return w.jsx(Mh,{...i,ref:e,children:n})});mu.displayName="Slot";var Mh=N.forwardRef((t,e)=>{const{children:n,...i}=t;if(N.isValidElement(n)){const r=$E(n);return N.cloneElement(n,{...XE(i,n.props),ref:e?Dy(e,r):r})}return N.Children.count(n)>1?N.Children.only(null):null});Mh.displayName="SlotClone";var Iy=({children:t})=>w.jsx(w.Fragment,{children:t});function jE(t){return N.isValidElement(t)&&t.type===Iy}function XE(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{s(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function $E(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function qE(t){const e=t+"CollectionProvider",[n,i]=GE(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=p=>{const{scope:v,children:x}=p,m=xe.useRef(null),f=xe.useRef(new Map).current;return w.jsx(r,{scope:v,itemMap:f,collectionRef:m,children:x})};o.displayName=e;const a=t+"CollectionSlot",l=xe.forwardRef((p,v)=>{const{scope:x,children:m}=p,f=s(a,x),g=xi(v,f.collectionRef);return w.jsx(mu,{ref:g,children:m})});l.displayName=a;const c=t+"CollectionItemSlot",d="data-radix-collection-item",h=xe.forwardRef((p,v)=>{const{scope:x,children:m,...f}=p,g=xe.useRef(null),_=xi(v,g),S=s(c,x);return xe.useEffect(()=>(S.itemMap.set(g,{ref:g,...f}),()=>void S.itemMap.delete(g))),w.jsx(mu,{[d]:"",ref:_,children:m})});h.displayName=c;function u(p){const v=s(t+"CollectionConsumer",p);return xe.useCallback(()=>{const m=v.collectionRef.current;if(!m)return[];const f=Array.from(m.querySelectorAll(`[${d}]`));return Array.from(v.itemMap.values()).sort((S,b)=>f.indexOf(S.ref.current)-f.indexOf(b.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:o,Slot:l,ItemSlot:h},u,i]}function Uy(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];const c=h=>{var f;const{scope:u,children:p,...v}=h,x=((f=u==null?void 0:u[t])==null?void 0:f[l])||a,m=N.useMemo(()=>v,Object.values(v));return w.jsx(x.Provider,{value:m,children:p})};c.displayName=s+"Provider";function d(h,u){var x;const p=((x=u==null?void 0:u[t])==null?void 0:x[l])||a,v=N.useContext(p);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,YE(r,...e)]}function YE(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}var KE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Ln=KE.reduce((t,e)=>{const n=N.forwardRef((i,r)=>{const{asChild:s,...o}=i,a=s?mu:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),w.jsx(a,{...o,ref:r})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function Fy(t,e){t&&Sl.flushSync(()=>t.dispatchEvent(e))}function zi(t){const e=N.useRef(t);return N.useEffect(()=>{e.current=t}),N.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function ZE(t,e=globalThis==null?void 0:globalThis.document){const n=zi(t);N.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var QE="DismissableLayer",Eh="dismissableLayer.update",JE="dismissableLayer.pointerDownOutside",eb="dismissableLayer.focusOutside",T0,Oy=N.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Am=N.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=N.useContext(Oy),[d,h]=N.useState(null),u=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=N.useState({}),v=xi(e,A=>h(A)),x=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),f=x.indexOf(m),g=d?x.indexOf(d):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,S=g>=f,b=nb(A=>{const y=A.target,R=[...c.branches].some(L=>L.contains(y));!S||R||(r==null||r(A),o==null||o(A),A.defaultPrevented||a==null||a())},u),E=ib(A=>{const y=A.target;[...c.branches].some(L=>L.contains(y))||(s==null||s(A),o==null||o(A),A.defaultPrevented||a==null||a())},u);return ZE(A=>{g===c.layers.size-1&&(i==null||i(A),!A.defaultPrevented&&a&&(A.preventDefault(),a()))},u),N.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(T0=u.body.style.pointerEvents,u.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),A0(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(u.body.style.pointerEvents=T0)}},[d,u,n,c]),N.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),A0())},[d,c]),N.useEffect(()=>{const A=()=>p({});return document.addEventListener(Eh,A),()=>document.removeEventListener(Eh,A)},[]),w.jsx(Ln.div,{...l,ref:v,style:{pointerEvents:_?S?"auto":"none":void 0,...t.style},onFocusCapture:Gt(t.onFocusCapture,E.onFocusCapture),onBlurCapture:Gt(t.onBlurCapture,E.onBlurCapture),onPointerDownCapture:Gt(t.onPointerDownCapture,b.onPointerDownCapture)})});Am.displayName=QE;var tb="DismissableLayerBranch",ky=N.forwardRef((t,e)=>{const n=N.useContext(Oy),i=N.useRef(null),r=xi(e,i);return N.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),w.jsx(Ln.div,{...t,ref:r})});ky.displayName=tb;function nb(t,e=globalThis==null?void 0:globalThis.document){const n=zi(t),i=N.useRef(!1),r=N.useRef(()=>{});return N.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){By(JE,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function ib(t,e=globalThis==null?void 0:globalThis.document){const n=zi(t),i=N.useRef(!1);return N.useEffect(()=>{const r=s=>{s.target&&!i.current&&By(eb,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function A0(){const t=new CustomEvent(Eh);document.dispatchEvent(t)}function By(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Fy(r,s):r.dispatchEvent(s)}var rb=Am,sb=ky,Is=globalThis!=null&&globalThis.document?N.useLayoutEffect:()=>{},ob="Portal",zy=N.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=N.useState(!1);Is(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?Ny.createPortal(w.jsx(Ln.div,{...i,ref:e}),o):null});zy.displayName=ob;function ab(t,e){return N.useReducer((n,i)=>e[n][i]??n,t)}var Cm=t=>{const{present:e,children:n}=t,i=lb(e),r=typeof n=="function"?n({present:i.isPresent}):N.Children.only(n),s=xi(i.ref,cb(r));return typeof n=="function"||i.isPresent?N.cloneElement(r,{ref:s}):null};Cm.displayName="Presence";function lb(t){const[e,n]=N.useState(),i=N.useRef({}),r=N.useRef(t),s=N.useRef("none"),o=t?"mounted":"unmounted",[a,l]=ab(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return N.useEffect(()=>{const c=$l(i.current);s.current=a==="mounted"?c:"none"},[a]),Is(()=>{const c=i.current,d=r.current;if(d!==t){const u=s.current,p=$l(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&u!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Is(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,h=p=>{const x=$l(i.current).includes(p.animationName);if(p.target===e&&x&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},u=p=>{p.target===e&&(s.current=$l(i.current))};return e.addEventListener("animationstart",u),e.addEventListener("animationcancel",h),e.addEventListener("animationend",h),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",u),e.removeEventListener("animationcancel",h),e.removeEventListener("animationend",h)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:N.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function $l(t){return(t==null?void 0:t.animationName)||"none"}function cb(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function ub({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=db({defaultProp:e,onChange:n}),s=t!==void 0,o=s?t:i,a=zi(n),l=N.useCallback(c=>{if(s){const h=typeof c=="function"?c(t):c;h!==t&&a(h)}else r(c)},[s,t,r,a]);return[o,l]}function db({defaultProp:t,onChange:e}){const n=N.useState(t),[i]=n,r=N.useRef(i),s=zi(e);return N.useEffect(()=>{r.current!==i&&(s(i),r.current=i)},[i,r,s]),n}var fb="VisuallyHidden",Yu=N.forwardRef((t,e)=>w.jsx(Ln.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Yu.displayName=fb;var hb=Yu,Rm="ToastProvider",[Pm,pb,mb]=qE("Toast"),[Vy,kI]=Uy("Toast",[mb]),[gb,Ku]=Vy(Rm),Hy=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=N.useState(null),[c,d]=N.useState(0),h=N.useRef(!1),u=N.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Rm}\`. Expected non-empty \`string\`.`),w.jsx(Pm.Provider,{scope:e,children:w.jsx(gb,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:N.useCallback(()=>d(p=>p+1),[]),onToastRemove:N.useCallback(()=>d(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:u,children:o})})};Hy.displayName=Rm;var Gy="ToastViewport",vb=["F8"],bh="toast.viewportPause",Th="toast.viewportResume",Wy=N.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=vb,label:r="Notifications ({hotkey})",...s}=t,o=Ku(Gy,n),a=pb(n),l=N.useRef(null),c=N.useRef(null),d=N.useRef(null),h=N.useRef(null),u=xi(e,h,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=o.toastCount>0;N.useEffect(()=>{const m=f=>{var _;i.length!==0&&i.every(S=>f[S]||f.code===S)&&((_=h.current)==null||_.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),N.useEffect(()=>{const m=l.current,f=h.current;if(v&&m&&f){const g=()=>{if(!o.isClosePausedRef.current){const E=new CustomEvent(bh);f.dispatchEvent(E),o.isClosePausedRef.current=!0}},_=()=>{if(o.isClosePausedRef.current){const E=new CustomEvent(Th);f.dispatchEvent(E),o.isClosePausedRef.current=!1}},S=E=>{!m.contains(E.relatedTarget)&&_()},b=()=>{m.contains(document.activeElement)||_()};return m.addEventListener("focusin",g),m.addEventListener("focusout",S),m.addEventListener("pointermove",g),m.addEventListener("pointerleave",b),window.addEventListener("blur",g),window.addEventListener("focus",_),()=>{m.removeEventListener("focusin",g),m.removeEventListener("focusout",S),m.removeEventListener("pointermove",g),m.removeEventListener("pointerleave",b),window.removeEventListener("blur",g),window.removeEventListener("focus",_)}}},[v,o.isClosePausedRef]);const x=N.useCallback(({tabbingDirection:m})=>{const g=a().map(_=>{const S=_.ref.current,b=[S,...Pb(S)];return m==="forwards"?b:b.reverse()});return(m==="forwards"?g.reverse():g).flat()},[a]);return N.useEffect(()=>{const m=h.current;if(m){const f=g=>{var b,E,A;const _=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!_){const y=document.activeElement,R=g.shiftKey;if(g.target===m&&R){(b=c.current)==null||b.focus();return}const U=x({tabbingDirection:R?"backwards":"forwards"}),j=U.findIndex(z=>z===y);Wd(U.slice(j+1))?g.preventDefault():R?(E=c.current)==null||E.focus():(A=d.current)==null||A.focus()}};return m.addEventListener("keydown",f),()=>m.removeEventListener("keydown",f)}},[a,x]),w.jsxs(sb,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&w.jsx(Ah,{ref:c,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"forwards"});Wd(m)}}),w.jsx(Pm.Slot,{scope:n,children:w.jsx(Ln.ol,{tabIndex:-1,...s,ref:u})}),v&&w.jsx(Ah,{ref:d,onFocusFromOutsideViewport:()=>{const m=x({tabbingDirection:"backwards"});Wd(m)}})]})});Wy.displayName=Gy;var jy="ToastFocusProxy",Ah=N.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Ku(jy,n);return w.jsx(Yu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});Ah.displayName=jy;var Zu="Toast",xb="toast.swipeStart",_b="toast.swipeMove",yb="toast.swipeCancel",Sb="toast.swipeEnd",Xy=N.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a=!0,l]=ub({prop:i,defaultProp:r,onChange:s});return w.jsx(Cm,{present:n||a,children:w.jsx(Eb,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:zi(t.onPause),onResume:zi(t.onResume),onSwipeStart:Gt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Gt(t.onSwipeMove,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:Gt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Gt(t.onSwipeEnd,c=>{const{x:d,y:h}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),l(!1)})})})});Xy.displayName=Zu;var[wb,Mb]=Vy(Zu,{onClose(){}}),Eb=N.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:u,onSwipeEnd:p,...v}=t,x=Ku(Zu,n),[m,f]=N.useState(null),g=xi(e,z=>f(z)),_=N.useRef(null),S=N.useRef(null),b=r||x.duration,E=N.useRef(0),A=N.useRef(b),y=N.useRef(0),{onToastAdd:R,onToastRemove:L}=x,P=zi(()=>{var I;(m==null?void 0:m.contains(document.activeElement))&&((I=x.viewport)==null||I.focus()),o()}),U=N.useCallback(z=>{!z||z===1/0||(window.clearTimeout(y.current),E.current=new Date().getTime(),y.current=window.setTimeout(P,z))},[P]);N.useEffect(()=>{const z=x.viewport;if(z){const I=()=>{U(A.current),c==null||c()},k=()=>{const O=new Date().getTime()-E.current;A.current=A.current-O,window.clearTimeout(y.current),l==null||l()};return z.addEventListener(bh,k),z.addEventListener(Th,I),()=>{z.removeEventListener(bh,k),z.removeEventListener(Th,I)}}},[x.viewport,b,l,c,U]),N.useEffect(()=>{s&&!x.isClosePausedRef.current&&U(b)},[s,b,x.isClosePausedRef,U]),N.useEffect(()=>(R(),()=>L()),[R,L]);const j=N.useMemo(()=>m?Jy(m):null,[m]);return x.viewport?w.jsxs(w.Fragment,{children:[j&&w.jsx(bb,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:j}),w.jsx(wb,{scope:n,onClose:P,children:Sl.createPortal(w.jsx(Pm.ItemSlot,{scope:n,children:w.jsx(rb,{asChild:!0,onEscapeKeyDown:Gt(a,()=>{x.isFocusedToastEscapeKeyDownRef.current||P(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:w.jsx(Ln.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":x.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Gt(t.onKeyDown,z=>{z.key==="Escape"&&(a==null||a(z.nativeEvent),z.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,P()))}),onPointerDown:Gt(t.onPointerDown,z=>{z.button===0&&(_.current={x:z.clientX,y:z.clientY})}),onPointerMove:Gt(t.onPointerMove,z=>{if(!_.current)return;const I=z.clientX-_.current.x,k=z.clientY-_.current.y,O=!!S.current,D=["left","right"].includes(x.swipeDirection),H=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,G=D?H(0,I):0,q=D?0:H(0,k),te=z.pointerType==="touch"?10:2,he={x:G,y:q},ue={originalEvent:z,delta:he};O?(S.current=he,ql(_b,h,ue,{discrete:!1})):C0(he,x.swipeDirection,te)?(S.current=he,ql(xb,d,ue,{discrete:!1}),z.target.setPointerCapture(z.pointerId)):(Math.abs(I)>te||Math.abs(k)>te)&&(_.current=null)}),onPointerUp:Gt(t.onPointerUp,z=>{const I=S.current,k=z.target;if(k.hasPointerCapture(z.pointerId)&&k.releasePointerCapture(z.pointerId),S.current=null,_.current=null,I){const O=z.currentTarget,D={originalEvent:z,delta:I};C0(I,x.swipeDirection,x.swipeThreshold)?ql(Sb,p,D,{discrete:!0}):ql(yb,u,D,{discrete:!0}),O.addEventListener("click",H=>H.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),bb=t=>{const{__scopeToast:e,children:n,...i}=t,r=Ku(Zu,e),[s,o]=N.useState(!1),[a,l]=N.useState(!1);return Cb(()=>o(!0)),N.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:w.jsx(zy,{asChild:!0,children:w.jsx(Yu,{...i,children:s&&w.jsxs(w.Fragment,{children:[r.label," ",n]})})})},Tb="ToastTitle",$y=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ln.div,{...i,ref:e})});$y.displayName=Tb;var Ab="ToastDescription",qy=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return w.jsx(Ln.div,{...i,ref:e})});qy.displayName=Ab;var Yy="ToastAction",Ky=N.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?w.jsx(Qy,{altText:n,asChild:!0,children:w.jsx(Nm,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Yy}\`. Expected non-empty \`string\`.`),null)});Ky.displayName=Yy;var Zy="ToastClose",Nm=N.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=Mb(Zy,n);return w.jsx(Qy,{asChild:!0,children:w.jsx(Ln.button,{type:"button",...i,ref:e,onClick:Gt(t.onClick,r.onClose)})})});Nm.displayName=Zy;var Qy=N.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return w.jsx(Ln.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function Jy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),Rb(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...Jy(i))}}),e}function ql(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Fy(r,s):r.dispatchEvent(s)}var C0=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function Cb(t=()=>{}){const e=zi(t);Is(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function Rb(t){return t.nodeType===t.ELEMENT_NODE}function Pb(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Wd(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var Nb=Hy,eS=Wy,tS=Xy,nS=$y,iS=qy,rS=Ky,sS=Nm;function oS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=oS(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function aS(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=oS(t))&&(i&&(i+=" "),i+=e);return i}const R0=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,P0=aS,lS=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return P0(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],h=s==null?void 0:s[c];if(d===null)return null;const u=R0(d)||R0(h);return r[c][u]}),a=n&&Object.entries(n).reduce((c,d)=>{let[h,u]=d;return u===void 0||(c[h]=u),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:h,className:u,...p}=d;return Object.entries(p).every(v=>{let[x,m]=v;return Array.isArray(m)?m.includes({...s,...a}[x]):{...s,...a}[x]===m})?[...c,h,u]:c},[]);return P0(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Db={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>N.createElement("svg",{ref:l,...Db,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:cS("lucide",r),...a},[...o.map(([c,d])=>N.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=(t,e)=>{const n=N.forwardRef(({className:i,...r},s)=>N.createElement(Ib,{ref:s,iconNode:e,className:cS(`lucide-${Lb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=st("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=st("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=st("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=st("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=st("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=st("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=st("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=st("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=st("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=st("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=st("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=st("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=st("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=st("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=st("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=st("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=st("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=st("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=st("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=st("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=st("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=st("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=st("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=st("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=st("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=st("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=st("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=st("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=st("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=st("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=st("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=st("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Lm="-",oT=t=>{const e=lT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Lm);return a[0]===""&&a.length!==1&&a.shift(),mS(a,e)||aT(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},mS=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?mS(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Lm);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},N0=/^\[(.+)\]$/,aT=t=>{if(N0.test(t)){const e=N0.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},lT=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return uT(Object.entries(t.classGroups),n).forEach(([s,o])=>{Ch(o,i,s,e)}),i},Ch=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:L0(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(cT(r)){Ch(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{Ch(o,L0(e,s),n,i)})})},L0=(t,e)=>{let n=t;return e.split(Lm).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},cT=t=>t.isThemeGetter,uT=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,dT=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},gS="!",fT=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,d=0,h;for(let m=0;m<a.length;m++){let f=a[m];if(c===0){if(f===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(d,m)),d=m+s;continue}if(f==="/"){h=m;continue}}f==="["?c++:f==="]"&&c--}const u=l.length===0?a:a.substring(d),p=u.startsWith(gS),v=p?u.substring(1):u,x=h&&h>d?h-d:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:v,maybePostfixModifierPosition:x}};return n?a=>n({className:a,parseClassName:o}):o},hT=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},pT=t=>({cache:dT(t.cacheSize),parseClassName:fT(t),...oT(t)}),mT=/\s+/,gT=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(mT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:d,hasImportantModifier:h,baseClassName:u,maybePostfixModifierPosition:p}=n(c);let v=!!p,x=i(v?u.substring(0,p):u);if(!x){if(!v){a=c+(a.length>0?" "+a:a);continue}if(x=i(u),!x){a=c+(a.length>0?" "+a:a);continue}v=!1}const m=hT(d).join(":"),f=h?m+gS:m,g=f+x;if(s.includes(g))continue;s.push(g);const _=r(x,v);for(let S=0;S<_.length;++S){const b=_[S];s.push(f+b)}a=c+(a.length>0?" "+a:a)}return a};function vT(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=vS(e))&&(i&&(i+=" "),i+=n);return i}const vS=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=vS(t[i]))&&(n&&(n+=" "),n+=e);return n};function xT(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((d,h)=>h(d),t());return n=pT(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=gT(l,n);return r(l,d),d}return function(){return s(vT.apply(null,arguments))}}const St=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},xS=/^\[(?:([a-z-]+):)?(.+)\]$/i,_T=/^\d+\/\d+$/,yT=new Set(["px","full","screen"]),ST=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,wT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,MT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ET=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,bT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ji=t=>Mo(t)||yT.has(t)||_T.test(t),Sr=t=>ea(t,"length",DT),Mo=t=>!!t&&!Number.isNaN(Number(t)),jd=t=>ea(t,"number",Mo),ma=t=>!!t&&Number.isInteger(Number(t)),TT=t=>t.endsWith("%")&&Mo(t.slice(0,-1)),Xe=t=>xS.test(t),wr=t=>ST.test(t),AT=new Set(["length","size","percentage"]),CT=t=>ea(t,AT,_S),RT=t=>ea(t,"position",_S),PT=new Set(["image","url"]),NT=t=>ea(t,PT,UT),LT=t=>ea(t,"",IT),ga=()=>!0,ea=(t,e,n)=>{const i=xS.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},DT=t=>wT.test(t)&&!MT.test(t),_S=()=>!1,IT=t=>ET.test(t),UT=t=>bT.test(t),FT=()=>{const t=St("colors"),e=St("spacing"),n=St("blur"),i=St("brightness"),r=St("borderColor"),s=St("borderRadius"),o=St("borderSpacing"),a=St("borderWidth"),l=St("contrast"),c=St("grayscale"),d=St("hueRotate"),h=St("invert"),u=St("gap"),p=St("gradientColorStops"),v=St("gradientColorStopPositions"),x=St("inset"),m=St("margin"),f=St("opacity"),g=St("padding"),_=St("saturate"),S=St("scale"),b=St("sepia"),E=St("skew"),A=St("space"),y=St("translate"),R=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",Xe,e],U=()=>[Xe,e],j=()=>["",ji,Sr],z=()=>["auto",Mo,Xe],I=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],k=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],H=()=>["","0",Xe],G=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>[Mo,Xe];return{cacheSize:500,separator:":",theme:{colors:[ga],spacing:[ji,Sr],blur:["none","",wr,Xe],brightness:q(),borderColor:[t],borderRadius:["none","","full",wr,Xe],borderSpacing:U(),borderWidth:j(),contrast:q(),grayscale:H(),hueRotate:q(),invert:H(),gap:U(),gradientColorStops:[t],gradientColorStopPositions:[TT,Sr],inset:P(),margin:P(),opacity:q(),padding:U(),saturate:q(),scale:q(),sepia:H(),skew:q(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",Xe]}],container:["container"],columns:[{columns:[wr]}],"break-after":[{"break-after":G()}],"break-before":[{"break-before":G()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...I(),Xe]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ma,Xe]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Xe]}],grow:[{grow:H()}],shrink:[{shrink:H()}],order:[{order:["first","last","none",ma,Xe]}],"grid-cols":[{"grid-cols":[ga]}],"col-start-end":[{col:["auto",{span:["full",ma,Xe]},Xe]}],"col-start":[{"col-start":z()}],"col-end":[{"col-end":z()}],"grid-rows":[{"grid-rows":[ga]}],"row-start-end":[{row:["auto",{span:[ma,Xe]},Xe]}],"row-start":[{"row-start":z()}],"row-end":[{"row-end":z()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Xe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Xe]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[A]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[A]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Xe,e]}],"min-w":[{"min-w":[Xe,e,"min","max","fit"]}],"max-w":[{"max-w":[Xe,e,"none","full","min","max","fit","prose",{screen:[wr]},wr]}],h:[{h:[Xe,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Xe,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Xe,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Xe,e,"auto","min","max","fit"]}],"font-size":[{text:["base",wr,Sr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",jd]}],"font-family":[{font:[ga]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Xe]}],"line-clamp":[{"line-clamp":["none",Mo,jd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ji,Xe]}],"list-image":[{"list-image":["none",Xe]}],"list-style-type":[{list:["none","disc","decimal",Xe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...k(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ji,Sr]}],"underline-offset":[{"underline-offset":["auto",ji,Xe]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...I(),RT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",CT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},NT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...k(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:k()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...k()]}],"outline-offset":[{"outline-offset":[ji,Xe]}],"outline-w":[{outline:[ji,Sr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:j()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[ji,Sr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",wr,LT]}],"shadow-color":[{shadow:[ga]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",wr,Xe]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[_]}],sepia:[{sepia:[b]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[b]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Xe]}],duration:[{duration:q()}],ease:[{ease:["linear","in","out","in-out",Xe]}],delay:[{delay:q()}],animate:[{animate:["none","spin","ping","pulse","bounce",Xe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ma,Xe]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[E]}],"skew-y":[{"skew-y":[E]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Xe]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xe]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xe]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[ji,Sr,jd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},OT=xT(FT);function as(...t){return OT(aS(t))}const kT=Nb,yS=N.forwardRef(({className:t,...e},n)=>w.jsx(eS,{ref:n,className:as("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));yS.displayName=eS.displayName;const BT=lS("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),SS=N.forwardRef(({className:t,variant:e,...n},i)=>w.jsx(tS,{ref:i,className:as(BT({variant:e}),t),...n}));SS.displayName=tS.displayName;const zT=N.forwardRef(({className:t,...e},n)=>w.jsx(rS,{ref:n,className:as("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));zT.displayName=rS.displayName;const wS=N.forwardRef(({className:t,...e},n)=>w.jsx(sS,{ref:n,className:as("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-blue-300 group-[.destructive]:hover:text-blue-50 group-[.destructive]:focus:ring-blue-400 group-[.destructive]:focus:ring-offset-blue-600",t),"toast-close":"",...e,children:w.jsx(pS,{className:"h-4 w-4"})}));wS.displayName=sS.displayName;const MS=N.forwardRef(({className:t,...e},n)=>w.jsx(nS,{ref:n,className:as("text-sm font-semibold",t),...e}));MS.displayName=nS.displayName;const ES=N.forwardRef(({className:t,...e},n)=>w.jsx(iS,{ref:n,className:as("text-sm opacity-90",t),...e}));ES.displayName=iS.displayName;function VT(){const{toasts:t}=VE();return w.jsxs(kT,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return w.jsxs(SS,{...s,children:[w.jsxs("div",{className:"grid gap-1",children:[n&&w.jsx(MS,{children:n}),i&&w.jsx(ES,{children:i})]}),r,w.jsx(wS,{})]},e)}),w.jsx(yS,{})]})}var D0=["light","dark"],HT="(prefers-color-scheme: dark)",GT=N.createContext(void 0),WT={setTheme:t=>{},themes:[]},jT=()=>{var t;return(t=N.useContext(GT))!=null?t:WT};N.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let c=s==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=r?D0.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(v,x=!1,m=!0)=>{let f=o?o[v]:v,g=x?v+"|| ''":`'${f}'`,_="";return r&&m&&!x&&D0.includes(v)&&(_+=`d.style.colorScheme = '${v}';`),n==="class"?x||f?_+=`c.add(${g})`:_+="null":f&&(_+=`d[s](n,${g})`),_},p=t?`!function(){${d}${u(t)}}()`:i?`!function(){try{${d}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${HT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}${c?"":"else{"+u(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${e}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${u(o?"x[e]":"e",!0)}}else{${u(s,!1,!1)};}${h}}catch(t){}}();`;return N.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var XT=t=>{switch(t){case"success":return YT;case"info":return ZT;case"warning":return KT;case"error":return QT;default:return null}},$T=Array(12).fill(0),qT=({visible:t})=>xe.createElement("div",{className:"sonner-loading-wrapper","data-visible":t},xe.createElement("div",{className:"sonner-spinner"},$T.map((e,n)=>xe.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${n}`})))),YT=xe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},xe.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),KT=xe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},xe.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),ZT=xe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},xe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),QT=xe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},xe.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),JT=()=>{let[t,e]=xe.useState(document.hidden);return xe.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},Rh=1,eA=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:Rh++,s=this.toasts.find(a=>a.id===r),o=t.dismissible===void 0?!0:t.dismissible;return s?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:o,title:n}):a):this.addToast({title:n,...i,dismissible:o,id:r}),r},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0;return i.then(async s=>{if(nA(s)&&!s.ok){r=!1;let o=typeof e.error=="function"?await e.error(`HTTP error! status: ${s.status}`):e.error,a=typeof e.description=="function"?await e.description(`HTTP error! status: ${s.status}`):e.description;this.create({id:n,type:"error",message:o,description:a})}else if(e.success!==void 0){r=!1;let o=typeof e.success=="function"?await e.success(s):e.success,a=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"success",message:o,description:a})}}).catch(async s=>{if(e.error!==void 0){r=!1;let o=typeof e.error=="function"?await e.error(s):e.error,a=typeof e.description=="function"?await e.description(s):e.description;this.create({id:n,type:"error",message:o,description:a})}}).finally(()=>{var s;r&&(this.dismiss(n),n=void 0),(s=e.finally)==null||s.call(e)}),n},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||Rh++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},On=new eA,tA=(t,e)=>{let n=(e==null?void 0:e.id)||Rh++;return On.addToast({title:t,...e,id:n}),n},nA=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",iA=tA,rA=()=>On.toasts;Object.assign(iA,{success:On.success,info:On.info,warning:On.warning,error:On.error,custom:On.custom,message:On.message,promise:On.promise,dismiss:On.dismiss,loading:On.loading},{getHistory:rA});function sA(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}sA(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Yl(t){return t.label!==void 0}var oA=3,aA="32px",lA=4e3,cA=356,uA=14,dA=20,fA=200;function hA(...t){return t.filter(Boolean).join(" ")}var pA=t=>{var e,n,i,r,s,o,a,l,c,d;let{invert:h,toast:u,unstyled:p,interacting:v,setHeights:x,visibleToasts:m,heights:f,index:g,toasts:_,expanded:S,removeToast:b,defaultRichColors:E,closeButton:A,style:y,cancelButtonStyle:R,actionButtonStyle:L,className:P="",descriptionClassName:U="",duration:j,position:z,gap:I,loadingIcon:k,expandByDefault:O,classNames:D,icons:H,closeButtonAriaLabel:G="Close toast",pauseWhenPageIsHidden:q,cn:te}=t,[he,ue]=xe.useState(!1),[ve,$]=xe.useState(!1),[se,oe]=xe.useState(!1),[Re,Oe]=xe.useState(!1),[Ue,tt]=xe.useState(0),[ze,Ke]=xe.useState(0),Ve=xe.useRef(null),ke=xe.useRef(null),bt=g===0,mt=g+1<=m,ot=u.type,B=u.dismissible!==!1,Dt=u.className||"",Ze=u.descriptionClassName||"",at=xe.useMemo(()=>f.findIndex(J=>J.toastId===u.id)||0,[f,u.id]),_e=xe.useMemo(()=>{var J;return(J=u.closeButton)!=null?J:A},[u.closeButton,A]),yt=xe.useMemo(()=>u.duration||j||lA,[u.duration,j]),C=xe.useRef(0),M=xe.useRef(0),W=xe.useRef(0),ee=xe.useRef(null),[ae,fe]=z.split("-"),pe=xe.useMemo(()=>f.reduce((J,be,Ae)=>Ae>=at?J:J+be.height,0),[f,at]),Q=JT(),ie=u.invert||h,ye=ot==="loading";M.current=xe.useMemo(()=>at*I+pe,[at,pe]),xe.useEffect(()=>{ue(!0)},[]),xe.useLayoutEffect(()=>{if(!he)return;let J=ke.current,be=J.style.height;J.style.height="auto";let Ae=J.getBoundingClientRect().height;J.style.height=be,Ke(Ae),x(He=>He.find(F=>F.toastId===u.id)?He.map(F=>F.toastId===u.id?{...F,height:Ae}:F):[{toastId:u.id,height:Ae,position:u.position},...He])},[he,u.title,u.description,x,u.id]);let Se=xe.useCallback(()=>{$(!0),tt(M.current),x(J=>J.filter(be=>be.toastId!==u.id)),setTimeout(()=>{b(u)},fA)},[u,b,x,M]);xe.useEffect(()=>{if(u.promise&&ot==="loading"||u.duration===1/0||u.type==="loading")return;let J,be=yt;return S||v||q&&Q?(()=>{if(W.current<C.current){let Ae=new Date().getTime()-C.current;be=be-Ae}W.current=new Date().getTime()})():be!==1/0&&(C.current=new Date().getTime(),J=setTimeout(()=>{var Ae;(Ae=u.onAutoClose)==null||Ae.call(u,u),Se()},be)),()=>clearTimeout(J)},[S,v,O,u,yt,Se,u.promise,ot,q,Q]),xe.useEffect(()=>{let J=ke.current;if(J){let be=J.getBoundingClientRect().height;return Ke(be),x(Ae=>[{toastId:u.id,height:be,position:u.position},...Ae]),()=>x(Ae=>Ae.filter(He=>He.toastId!==u.id))}},[x,u.id]),xe.useEffect(()=>{u.delete&&Se()},[Se,u.delete]);function me(){return H!=null&&H.loading?xe.createElement("div",{className:"sonner-loader","data-visible":ot==="loading"},H.loading):k?xe.createElement("div",{className:"sonner-loader","data-visible":ot==="loading"},k):xe.createElement(qT,{visible:ot==="loading"})}return xe.createElement("li",{"aria-live":u.important?"assertive":"polite","aria-atomic":"true",role:"status",tabIndex:0,ref:ke,className:te(P,Dt,D==null?void 0:D.toast,(e=u==null?void 0:u.classNames)==null?void 0:e.toast,D==null?void 0:D.default,D==null?void 0:D[ot],(n=u==null?void 0:u.classNames)==null?void 0:n[ot]),"data-sonner-toast":"","data-rich-colors":(i=u.richColors)!=null?i:E,"data-styled":!(u.jsx||u.unstyled||p),"data-mounted":he,"data-promise":!!u.promise,"data-removed":ve,"data-visible":mt,"data-y-position":ae,"data-x-position":fe,"data-index":g,"data-front":bt,"data-swiping":se,"data-dismissible":B,"data-type":ot,"data-invert":ie,"data-swipe-out":Re,"data-expanded":!!(S||O&&he),style:{"--index":g,"--toasts-before":g,"--z-index":_.length-g,"--offset":`${ve?Ue:M.current}px`,"--initial-height":O?"auto":`${ze}px`,...y,...u.style},onPointerDown:J=>{ye||!B||(Ve.current=new Date,tt(M.current),J.target.setPointerCapture(J.pointerId),J.target.tagName!=="BUTTON"&&(oe(!0),ee.current={x:J.clientX,y:J.clientY}))},onPointerUp:()=>{var J,be,Ae,He;if(Re||!B)return;ee.current=null;let F=Number(((J=ke.current)==null?void 0:J.style.getPropertyValue("--swipe-amount").replace("px",""))||0),de=new Date().getTime()-((be=Ve.current)==null?void 0:be.getTime()),ne=Math.abs(F)/de;if(Math.abs(F)>=dA||ne>.11){tt(M.current),(Ae=u.onDismiss)==null||Ae.call(u,u),Se(),Oe(!0);return}(He=ke.current)==null||He.style.setProperty("--swipe-amount","0px"),oe(!1)},onPointerMove:J=>{var be;if(!ee.current||!B)return;let Ae=J.clientY-ee.current.y,He=J.clientX-ee.current.x,F=(ae==="top"?Math.min:Math.max)(0,Ae),de=J.pointerType==="touch"?10:2;Math.abs(F)>de?(be=ke.current)==null||be.style.setProperty("--swipe-amount",`${Ae}px`):Math.abs(He)>de&&(ee.current=null)}},_e&&!u.jsx?xe.createElement("button",{"aria-label":G,"data-disabled":ye,"data-close-button":!0,onClick:ye||!B?()=>{}:()=>{var J;Se(),(J=u.onDismiss)==null||J.call(u,u)},className:te(D==null?void 0:D.closeButton,(r=u==null?void 0:u.classNames)==null?void 0:r.closeButton)},xe.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},xe.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),xe.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))):null,u.jsx||xe.isValidElement(u.title)?u.jsx||u.title:xe.createElement(xe.Fragment,null,ot||u.icon||u.promise?xe.createElement("div",{"data-icon":"",className:te(D==null?void 0:D.icon,(s=u==null?void 0:u.classNames)==null?void 0:s.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||me():null,u.type!=="loading"?u.icon||(H==null?void 0:H[ot])||XT(ot):null):null,xe.createElement("div",{"data-content":"",className:te(D==null?void 0:D.content,(o=u==null?void 0:u.classNames)==null?void 0:o.content)},xe.createElement("div",{"data-title":"",className:te(D==null?void 0:D.title,(a=u==null?void 0:u.classNames)==null?void 0:a.title)},u.title),u.description?xe.createElement("div",{"data-description":"",className:te(U,Ze,D==null?void 0:D.description,(l=u==null?void 0:u.classNames)==null?void 0:l.description)},u.description):null),xe.isValidElement(u.cancel)?u.cancel:u.cancel&&Yl(u.cancel)?xe.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||R,onClick:J=>{var be,Ae;Yl(u.cancel)&&B&&((Ae=(be=u.cancel).onClick)==null||Ae.call(be,J),Se())},className:te(D==null?void 0:D.cancelButton,(c=u==null?void 0:u.classNames)==null?void 0:c.cancelButton)},u.cancel.label):null,xe.isValidElement(u.action)?u.action:u.action&&Yl(u.action)?xe.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||L,onClick:J=>{var be,Ae;Yl(u.action)&&(J.defaultPrevented||((Ae=(be=u.action).onClick)==null||Ae.call(be,J),Se()))},className:te(D==null?void 0:D.actionButton,(d=u==null?void 0:u.classNames)==null?void 0:d.actionButton)},u.action.label):null))};function I0(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var mA=t=>{let{invert:e,position:n="bottom-right",hotkey:i=["altKey","KeyT"],expand:r,closeButton:s,className:o,offset:a,theme:l="light",richColors:c,duration:d,style:h,visibleToasts:u=oA,toastOptions:p,dir:v=I0(),gap:x=uA,loadingIcon:m,icons:f,containerAriaLabel:g="Notifications",pauseWhenPageIsHidden:_,cn:S=hA}=t,[b,E]=xe.useState([]),A=xe.useMemo(()=>Array.from(new Set([n].concat(b.filter(q=>q.position).map(q=>q.position)))),[b,n]),[y,R]=xe.useState([]),[L,P]=xe.useState(!1),[U,j]=xe.useState(!1),[z,I]=xe.useState(l!=="system"?l:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),k=xe.useRef(null),O=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=xe.useRef(null),H=xe.useRef(!1),G=xe.useCallback(q=>{var te;(te=b.find(he=>he.id===q.id))!=null&&te.delete||On.dismiss(q.id),E(he=>he.filter(({id:ue})=>ue!==q.id))},[b]);return xe.useEffect(()=>On.subscribe(q=>{if(q.dismiss){E(te=>te.map(he=>he.id===q.id?{...he,delete:!0}:he));return}setTimeout(()=>{Ny.flushSync(()=>{E(te=>{let he=te.findIndex(ue=>ue.id===q.id);return he!==-1?[...te.slice(0,he),{...te[he],...q},...te.slice(he+1)]:[q,...te]})})})}),[]),xe.useEffect(()=>{if(l!=="system"){I(l);return}l==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?I("dark"):I("light")),typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:q})=>{I(q?"dark":"light")})},[l]),xe.useEffect(()=>{b.length<=1&&P(!1)},[b]),xe.useEffect(()=>{let q=te=>{var he,ue;i.every(ve=>te[ve]||te.code===ve)&&(P(!0),(he=k.current)==null||he.focus()),te.code==="Escape"&&(document.activeElement===k.current||(ue=k.current)!=null&&ue.contains(document.activeElement))&&P(!1)};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[i]),xe.useEffect(()=>{if(k.current)return()=>{D.current&&(D.current.focus({preventScroll:!0}),D.current=null,H.current=!1)}},[k.current]),b.length?xe.createElement("section",{"aria-label":`${g} ${O}`,tabIndex:-1},A.map((q,te)=>{var he;let[ue,ve]=q.split("-");return xe.createElement("ol",{key:q,dir:v==="auto"?I0():v,tabIndex:-1,ref:k,className:o,"data-sonner-toaster":!0,"data-theme":z,"data-y-position":ue,"data-x-position":ve,style:{"--front-toast-height":`${((he=y[0])==null?void 0:he.height)||0}px`,"--offset":typeof a=="number"?`${a}px`:a||aA,"--width":`${cA}px`,"--gap":`${x}px`,...h},onBlur:$=>{H.current&&!$.currentTarget.contains($.relatedTarget)&&(H.current=!1,D.current&&(D.current.focus({preventScroll:!0}),D.current=null))},onFocus:$=>{$.target instanceof HTMLElement&&$.target.dataset.dismissible==="false"||H.current||(H.current=!0,D.current=$.relatedTarget)},onMouseEnter:()=>P(!0),onMouseMove:()=>P(!0),onMouseLeave:()=>{U||P(!1)},onPointerDown:$=>{$.target instanceof HTMLElement&&$.target.dataset.dismissible==="false"||j(!0)},onPointerUp:()=>j(!1)},b.filter($=>!$.position&&te===0||$.position===q).map(($,se)=>{var oe,Re;return xe.createElement(pA,{key:$.id,icons:f,index:se,toast:$,defaultRichColors:c,duration:(oe=p==null?void 0:p.duration)!=null?oe:d,className:p==null?void 0:p.className,descriptionClassName:p==null?void 0:p.descriptionClassName,invert:e,visibleToasts:u,closeButton:(Re=p==null?void 0:p.closeButton)!=null?Re:s,interacting:U,position:q,style:p==null?void 0:p.style,unstyled:p==null?void 0:p.unstyled,classNames:p==null?void 0:p.classNames,cancelButtonStyle:p==null?void 0:p.cancelButtonStyle,actionButtonStyle:p==null?void 0:p.actionButtonStyle,removeToast:G,toasts:b.filter(Oe=>Oe.position==$.position),heights:y.filter(Oe=>Oe.position==$.position),setHeights:R,expandByDefault:r,gap:x,loadingIcon:m,expanded:L,pauseWhenPageIsHidden:_,cn:S})}))})):null};const gA=({...t})=>{const{theme:e="system"}=jT();return w.jsx(mA,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},vA=["top","right","bottom","left"],es=Math.min,Bn=Math.max,vu=Math.round,Kl=Math.floor,ts=t=>({x:t,y:t}),xA={left:"right",right:"left",bottom:"top",top:"bottom"},_A={start:"end",end:"start"};function Ph(t,e,n){return Bn(t,es(e,n))}function dr(t,e){return typeof t=="function"?t(e):t}function fr(t){return t.split("-")[0]}function ta(t){return t.split("-")[1]}function Dm(t){return t==="x"?"y":"x"}function Im(t){return t==="y"?"height":"width"}function ns(t){return["top","bottom"].includes(fr(t))?"y":"x"}function Um(t){return Dm(ns(t))}function yA(t,e,n){n===void 0&&(n=!1);const i=ta(t),r=Um(t),s=Im(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=xu(o)),[o,xu(o)]}function SA(t){const e=xu(t);return[Nh(t),e,Nh(e)]}function Nh(t){return t.replace(/start|end/g,e=>_A[e])}function wA(t,e,n){const i=["left","right"],r=["right","left"],s=["top","bottom"],o=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:i:e?i:r;case"left":case"right":return e?s:o;default:return[]}}function MA(t,e,n,i){const r=ta(t);let s=wA(fr(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(Nh)))),s}function xu(t){return t.replace(/left|right|bottom|top/g,e=>xA[e])}function EA(t){return{top:0,right:0,bottom:0,left:0,...t}}function bS(t){return typeof t!="number"?EA(t):{top:t,right:t,bottom:t,left:t}}function _u(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function U0(t,e,n){let{reference:i,floating:r}=t;const s=ns(e),o=Um(e),a=Im(o),l=fr(e),c=s==="y",d=i.x+i.width/2-r.width/2,h=i.y+i.height/2-r.height/2,u=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:d,y:i.y-r.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:h};break;case"left":p={x:i.x-r.width,y:h};break;default:p={x:i.x,y:i.y}}switch(ta(e)){case"start":p[o]-=u*(n&&c?-1:1);break;case"end":p[o]+=u*(n&&c?-1:1);break}return p}const bA=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:d,y:h}=U0(c,i,l),u=i,p={},v=0;for(let x=0;x<a.length;x++){const{name:m,fn:f}=a[x],{x:g,y:_,data:S,reset:b}=await f({x:d,y:h,initialPlacement:i,placement:u,strategy:r,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});d=g??d,h=_??h,p={...p,[m]:{...p[m],...S}},b&&v<=50&&(v++,typeof b=="object"&&(b.placement&&(u=b.placement),b.rects&&(c=b.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:d,y:h}=U0(c,u,l)),x=-1)}return{x:d,y:h,placement:u,strategy:r,middlewareData:p}};async function al(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:u=!1,padding:p=0}=dr(e,t),v=bS(p),m=a[u?h==="floating"?"reference":"floating":h],f=_u(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),g=h==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),S=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},b=_u(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:g,offsetParent:_,strategy:l}):g);return{top:(f.top-b.top+v.top)/S.y,bottom:(b.bottom-f.bottom+v.bottom)/S.y,left:(f.left-b.left+v.left)/S.x,right:(b.right-f.right+v.right)/S.x}}const TA=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:d=0}=dr(t,e)||{};if(c==null)return{};const h=bS(d),u={x:n,y:i},p=Um(r),v=Im(p),x=await o.getDimensions(c),m=p==="y",f=m?"top":"left",g=m?"bottom":"right",_=m?"clientHeight":"clientWidth",S=s.reference[v]+s.reference[p]-u[p]-s.floating[v],b=u[p]-s.reference[p],E=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let A=E?E[_]:0;(!A||!await(o.isElement==null?void 0:o.isElement(E)))&&(A=a.floating[_]||s.floating[v]);const y=S/2-b/2,R=A/2-x[v]/2-1,L=es(h[f],R),P=es(h[g],R),U=L,j=A-x[v]-P,z=A/2-x[v]/2+y,I=Ph(U,z,j),k=!l.arrow&&ta(r)!=null&&z!==I&&s.reference[v]/2-(z<U?L:P)-x[v]/2<0,O=k?z<U?z-U:z-j:0;return{[p]:u[p]+O,data:{[p]:I,centerOffset:z-I-O,...k&&{alignmentOffset:O}},reset:k}}}),AA=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:x=!0,...m}=dr(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const f=fr(r),g=ns(a),_=fr(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),b=u||(_||!x?[xu(a)]:SA(a)),E=v!=="none";!u&&E&&b.push(...MA(a,x,v,S));const A=[a,...b],y=await al(e,m),R=[];let L=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&R.push(y[f]),h){const z=yA(r,o,S);R.push(y[z[0]],y[z[1]])}if(L=[...L,{placement:r,overflows:R}],!R.every(z=>z<=0)){var P,U;const z=(((P=s.flip)==null?void 0:P.index)||0)+1,I=A[z];if(I)return{data:{index:z,overflows:L},reset:{placement:I}};let k=(U=L.filter(O=>O.overflows[0]<=0).sort((O,D)=>O.overflows[1]-D.overflows[1])[0])==null?void 0:U.placement;if(!k)switch(p){case"bestFit":{var j;const O=(j=L.filter(D=>{if(E){const H=ns(D.placement);return H===g||H==="y"}return!0}).map(D=>[D.placement,D.overflows.filter(H=>H>0).reduce((H,G)=>H+G,0)]).sort((D,H)=>D[1]-H[1])[0])==null?void 0:j[0];O&&(k=O);break}case"initialPlacement":k=a;break}if(r!==k)return{reset:{placement:k}}}return{}}}};function F0(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function O0(t){return vA.some(e=>t[e]>=0)}const CA=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=dr(t,e);switch(i){case"referenceHidden":{const s=await al(e,{...r,elementContext:"reference"}),o=F0(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:O0(o)}}}case"escaped":{const s=await al(e,{...r,altBoundary:!0}),o=F0(s,n.floating);return{data:{escapedOffsets:o,escaped:O0(o)}}}default:return{}}}}};async function RA(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=fr(n),a=ta(n),l=ns(n)==="y",c=["left","top"].includes(o)?-1:1,d=s&&l?-1:1,h=dr(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:v}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof v=="number"&&(p=a==="end"?v*-1:v),l?{x:p*d,y:u*c}:{x:u*c,y:p*d}}const PA=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await RA(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},NA=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:f,y:g}=m;return{x:f,y:g}}},...l}=dr(t,e),c={x:n,y:i},d=await al(e,l),h=ns(fr(r)),u=Dm(h);let p=c[u],v=c[h];if(s){const m=u==="y"?"top":"left",f=u==="y"?"bottom":"right",g=p+d[m],_=p-d[f];p=Ph(g,p,_)}if(o){const m=h==="y"?"top":"left",f=h==="y"?"bottom":"right",g=v+d[m],_=v-d[f];v=Ph(g,v,_)}const x=a.fn({...e,[u]:p,[h]:v});return{...x,data:{x:x.x-n,y:x.y-i,enabled:{[u]:s,[h]:o}}}}}},LA=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=dr(t,e),d={x:n,y:i},h=ns(r),u=Dm(h);let p=d[u],v=d[h];const x=dr(a,e),m=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(l){const _=u==="y"?"height":"width",S=s.reference[u]-s.floating[_]+m.mainAxis,b=s.reference[u]+s.reference[_]-m.mainAxis;p<S?p=S:p>b&&(p=b)}if(c){var f,g;const _=u==="y"?"width":"height",S=["top","left"].includes(fr(r)),b=s.reference[h]-s.floating[_]+(S&&((f=o.offset)==null?void 0:f[h])||0)+(S?0:m.crossAxis),E=s.reference[h]+s.reference[_]+(S?0:((g=o.offset)==null?void 0:g[h])||0)-(S?m.crossAxis:0);v<b?v=b:v>E&&(v=E)}return{[u]:p,[h]:v}}}},DA=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=dr(t,e),d=await al(e,c),h=fr(r),u=ta(r),p=ns(r)==="y",{width:v,height:x}=s.floating;let m,f;h==="top"||h==="bottom"?(m=h,f=u===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(f=h,m=u==="end"?"top":"bottom");const g=x-d.top-d.bottom,_=v-d.left-d.right,S=es(x-d[m],g),b=es(v-d[f],_),E=!e.middlewareData.shift;let A=S,y=b;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(y=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(A=g),E&&!u){const L=Bn(d.left,0),P=Bn(d.right,0),U=Bn(d.top,0),j=Bn(d.bottom,0);p?y=v-2*(L!==0||P!==0?L+P:Bn(d.left,d.right)):A=x-2*(U!==0||j!==0?U+j:Bn(d.top,d.bottom))}await l({...e,availableWidth:y,availableHeight:A});const R=await o.getDimensions(a.floating);return v!==R.width||x!==R.height?{reset:{rects:!0}}:{}}}};function Qu(){return typeof window<"u"}function na(t){return TS(t)?(t.nodeName||"").toLowerCase():"#document"}function Gn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Gi(t){var e;return(e=(TS(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function TS(t){return Qu()?t instanceof Node||t instanceof Gn(t).Node:!1}function _i(t){return Qu()?t instanceof Element||t instanceof Gn(t).Element:!1}function Vi(t){return Qu()?t instanceof HTMLElement||t instanceof Gn(t).HTMLElement:!1}function k0(t){return!Qu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Gn(t).ShadowRoot}function wl(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=yi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function IA(t){return["table","td","th"].includes(na(t))}function Ju(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Fm(t){const e=Om(),n=_i(t)?yi(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function UA(t){let e=is(t);for(;Vi(e)&&!jo(e);){if(Fm(e))return e;if(Ju(e))return null;e=is(e)}return null}function Om(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function jo(t){return["html","body","#document"].includes(na(t))}function yi(t){return Gn(t).getComputedStyle(t)}function ed(t){return _i(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function is(t){if(na(t)==="html")return t;const e=t.assignedSlot||t.parentNode||k0(t)&&t.host||Gi(t);return k0(e)?e.host:e}function AS(t){const e=is(t);return jo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Vi(e)&&wl(e)?e:AS(e)}function ll(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=AS(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=Gn(r);if(s){const a=Lh(o);return e.concat(o,o.visualViewport||[],wl(r)?r:[],a&&n?ll(a):[])}return e.concat(r,ll(r,[],n))}function Lh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function CS(t){const e=yi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Vi(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=vu(n)!==s||vu(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function km(t){return _i(t)?t:t.contextElement}function Eo(t){const e=km(t);if(!Vi(e))return ts(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=CS(e);let o=(s?vu(n.width):n.width)/i,a=(s?vu(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const FA=ts(0);function RS(t){const e=Gn(t);return!Om()||!e.visualViewport?FA:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function OA(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Gn(t)?!1:e}function Us(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=km(t);let o=ts(1);e&&(i?_i(i)&&(o=Eo(i)):o=Eo(t));const a=OA(s,n,i)?RS(s):ts(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,d=r.width/o.x,h=r.height/o.y;if(s){const u=Gn(s),p=i&&_i(i)?Gn(i):i;let v=u,x=Lh(v);for(;x&&i&&p!==v;){const m=Eo(x),f=x.getBoundingClientRect(),g=yi(x),_=f.left+(x.clientLeft+parseFloat(g.paddingLeft))*m.x,S=f.top+(x.clientTop+parseFloat(g.paddingTop))*m.y;l*=m.x,c*=m.y,d*=m.x,h*=m.y,l+=_,c+=S,v=Gn(x),x=Lh(v)}}return _u({width:d,height:h,x:l,y:c})}function kA(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Gi(i),a=e?Ju(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=ts(1);const d=ts(0),h=Vi(i);if((h||!h&&!s)&&((na(i)!=="body"||wl(o))&&(l=ed(i)),Vi(i))){const u=Us(i);c=Eo(i),d.x=u.x+i.clientLeft,d.y=u.y+i.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+d.x,y:n.y*c.y-l.scrollTop*c.y+d.y}}function BA(t){return Array.from(t.getClientRects())}function Dh(t,e){const n=ed(t).scrollLeft;return e?e.left+n:Us(Gi(t)).left+n}function zA(t){const e=Gi(t),n=ed(t),i=t.ownerDocument.body,r=Bn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Bn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+Dh(t);const a=-n.scrollTop;return yi(i).direction==="rtl"&&(o+=Bn(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function VA(t,e){const n=Gn(t),i=Gi(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=Om();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function HA(t,e){const n=Us(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Vi(t)?Eo(t):ts(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function B0(t,e,n){let i;if(e==="viewport")i=VA(t,n);else if(e==="document")i=zA(Gi(t));else if(_i(e))i=HA(e,n);else{const r=RS(t);i={...e,x:e.x-r.x,y:e.y-r.y}}return _u(i)}function PS(t,e){const n=is(t);return n===e||!_i(n)||jo(n)?!1:yi(n).position==="fixed"||PS(n,e)}function GA(t,e){const n=e.get(t);if(n)return n;let i=ll(t,[],!1).filter(a=>_i(a)&&na(a)!=="body"),r=null;const s=yi(t).position==="fixed";let o=s?is(t):t;for(;_i(o)&&!jo(o);){const a=yi(o),l=Fm(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||wl(o)&&!l&&PS(t,o))?i=i.filter(d=>d!==o):r=a,o=is(o)}return e.set(t,i),i}function WA(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Ju(e)?[]:GA(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,d)=>{const h=B0(e,d,r);return c.top=Bn(h.top,c.top),c.right=es(h.right,c.right),c.bottom=es(h.bottom,c.bottom),c.left=Bn(h.left,c.left),c},B0(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function jA(t){const{width:e,height:n}=CS(t);return{width:e,height:n}}function XA(t,e,n){const i=Vi(e),r=Gi(e),s=n==="fixed",o=Us(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=ts(0);if(i||!i&&!s)if((na(e)!=="body"||wl(r))&&(a=ed(e)),i){const p=Us(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&(l.x=Dh(r));let c=0,d=0;if(r&&!i&&!s){const p=r.getBoundingClientRect();d=p.top+a.scrollTop,c=p.left+a.scrollLeft-Dh(r,p)}const h=o.left+a.scrollLeft-l.x-c,u=o.top+a.scrollTop-l.y-d;return{x:h,y:u,width:o.width,height:o.height}}function Xd(t){return yi(t).position==="static"}function z0(t,e){if(!Vi(t)||yi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Gi(t)===n&&(n=n.ownerDocument.body),n}function NS(t,e){const n=Gn(t);if(Ju(t))return n;if(!Vi(t)){let r=is(t);for(;r&&!jo(r);){if(_i(r)&&!Xd(r))return r;r=is(r)}return n}let i=z0(t,e);for(;i&&IA(i)&&Xd(i);)i=z0(i,e);return i&&jo(i)&&Xd(i)&&!Fm(i)?n:i||UA(t)||n}const $A=async function(t){const e=this.getOffsetParent||NS,n=this.getDimensions,i=await n(t.floating);return{reference:XA(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function qA(t){return yi(t).direction==="rtl"}const YA={convertOffsetParentRelativeRectToViewportRelativeRect:kA,getDocumentElement:Gi,getClippingRect:WA,getOffsetParent:NS,getElementRects:$A,getClientRects:BA,getDimensions:jA,getScale:Eo,isElement:_i,isRTL:qA};function KA(t,e){let n=null,i;const r=Gi(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:c,top:d,width:h,height:u}=t.getBoundingClientRect();if(a||e(),!h||!u)return;const p=Kl(d),v=Kl(r.clientWidth-(c+h)),x=Kl(r.clientHeight-(d+u)),m=Kl(c),g={rootMargin:-p+"px "+-v+"px "+-x+"px "+-m+"px",threshold:Bn(0,es(1,l))||1};let _=!0;function S(b){const E=b[0].intersectionRatio;if(E!==l){if(!_)return o();E?o(!1,E):i=setTimeout(()=>{o(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(S,{...g,root:r.ownerDocument})}catch{n=new IntersectionObserver(S,g)}n.observe(t)}return o(!0),s}function ZA(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=km(t),d=r||s?[...c?ll(c):[],...ll(e)]:[];d.forEach(f=>{r&&f.addEventListener("scroll",n,{passive:!0}),s&&f.addEventListener("resize",n)});const h=c&&a?KA(c,n):null;let u=-1,p=null;o&&(p=new ResizeObserver(f=>{let[g]=f;g&&g.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(u),u=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let v,x=l?Us(t):null;l&&m();function m(){const f=Us(t);x&&(f.x!==x.x||f.y!==x.y||f.width!==x.width||f.height!==x.height)&&n(),x=f,v=requestAnimationFrame(m)}return n(),()=>{var f;d.forEach(g=>{r&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),h==null||h(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(v)}}const QA=PA,JA=NA,eC=AA,tC=DA,nC=CA,V0=TA,iC=LA,rC=(t,e,n)=>{const i=new Map,r={platform:YA,...n},s={...r.platform,_c:i};return bA(t,e,{...r,platform:s})};var kc=typeof document<"u"?N.useLayoutEffect:N.useEffect;function yu(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!yu(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!yu(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function LS(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function H0(t,e){const n=LS(t);return Math.round(e*n)/n}function $d(t){const e=N.useRef(t);return kc(()=>{e.current=t}),e}function sC(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[d,h]=N.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[u,p]=N.useState(i);yu(u,i)||p(i);const[v,x]=N.useState(null),[m,f]=N.useState(null),g=N.useCallback(D=>{D!==E.current&&(E.current=D,x(D))},[]),_=N.useCallback(D=>{D!==A.current&&(A.current=D,f(D))},[]),S=s||v,b=o||m,E=N.useRef(null),A=N.useRef(null),y=N.useRef(d),R=l!=null,L=$d(l),P=$d(r),U=$d(c),j=N.useCallback(()=>{if(!E.current||!A.current)return;const D={placement:e,strategy:n,middleware:u};P.current&&(D.platform=P.current),rC(E.current,A.current,D).then(H=>{const G={...H,isPositioned:U.current!==!1};z.current&&!yu(y.current,G)&&(y.current=G,Sl.flushSync(()=>{h(G)}))})},[u,e,n,P,U]);kc(()=>{c===!1&&y.current.isPositioned&&(y.current.isPositioned=!1,h(D=>({...D,isPositioned:!1})))},[c]);const z=N.useRef(!1);kc(()=>(z.current=!0,()=>{z.current=!1}),[]),kc(()=>{if(S&&(E.current=S),b&&(A.current=b),S&&b){if(L.current)return L.current(S,b,j);j()}},[S,b,j,L,R]);const I=N.useMemo(()=>({reference:E,floating:A,setReference:g,setFloating:_}),[g,_]),k=N.useMemo(()=>({reference:S,floating:b}),[S,b]),O=N.useMemo(()=>{const D={position:n,left:0,top:0};if(!k.floating)return D;const H=H0(k.floating,d.x),G=H0(k.floating,d.y);return a?{...D,transform:"translate("+H+"px, "+G+"px)",...LS(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:H,top:G}},[n,a,k.floating,d.x,d.y]);return N.useMemo(()=>({...d,update:j,refs:I,elements:k,floatingStyles:O}),[d,j,I,k,O])}const oC=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?V0({element:i.current,padding:r}).fn(n):{}:i?V0({element:i,padding:r}).fn(n):{}}}},aC=(t,e)=>({...QA(t),options:[t,e]}),lC=(t,e)=>({...JA(t),options:[t,e]}),cC=(t,e)=>({...iC(t),options:[t,e]}),uC=(t,e)=>({...eC(t),options:[t,e]}),dC=(t,e)=>({...tC(t),options:[t,e]}),fC=(t,e)=>({...nC(t),options:[t,e]}),hC=(t,e)=>({...oC(t),options:[t,e]});var pC="Arrow",DS=N.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return w.jsx(Ln.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:w.jsx("polygon",{points:"0,0 30,0 15,10"})})});DS.displayName=pC;var mC=DS;function gC(t,e=[]){let n=[];function i(s,o){const a=N.createContext(o),l=n.length;n=[...n,o];function c(h){const{scope:u,children:p,...v}=h,x=(u==null?void 0:u[t][l])||a,m=N.useMemo(()=>v,Object.values(v));return w.jsx(x.Provider,{value:m,children:p})}function d(h,u){const p=(u==null?void 0:u[t][l])||a,v=N.useContext(p);if(v)return v;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${s}\``)}return c.displayName=s+"Provider",[c,d]}const r=()=>{const s=n.map(o=>N.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return N.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,vC(r,...e)]}function vC(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const h=l(s)[`__scope${c}`];return{...a,...h}},{});return N.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function xC(t){const[e,n]=N.useState(void 0);return Is(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var IS="Popper",[US,FS]=gC(IS),[BI,OS]=US(IS),kS="PopperAnchor",BS=N.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=OS(kS,n),o=N.useRef(null),a=xi(e,o);return N.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:w.jsx(Ln.div,{...r,ref:a})});BS.displayName=kS;var Bm="PopperContent",[_C,yC]=US(Bm),zS=N.forwardRef((t,e)=>{var se,oe,Re,Oe,Ue,tt;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:u=!1,updatePositionStrategy:p="optimized",onPlaced:v,...x}=t,m=OS(Bm,n),[f,g]=N.useState(null),_=xi(e,ze=>g(ze)),[S,b]=N.useState(null),E=xC(S),A=(E==null?void 0:E.width)??0,y=(E==null?void 0:E.height)??0,R=i+(s!=="center"?"-"+s:""),L=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},P=Array.isArray(c)?c:[c],U=P.length>0,j={padding:L,boundary:P.filter(wC),altBoundary:U},{refs:z,floatingStyles:I,placement:k,isPositioned:O,middlewareData:D}=sC({strategy:"fixed",placement:R,whileElementsMounted:(...ze)=>ZA(...ze,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[aC({mainAxis:r+y,alignmentAxis:o}),l&&lC({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?cC():void 0,...j}),l&&uC({...j}),dC({...j,apply:({elements:ze,rects:Ke,availableWidth:Ve,availableHeight:ke})=>{const{width:bt,height:mt}=Ke.reference,ot=ze.floating.style;ot.setProperty("--radix-popper-available-width",`${Ve}px`),ot.setProperty("--radix-popper-available-height",`${ke}px`),ot.setProperty("--radix-popper-anchor-width",`${bt}px`),ot.setProperty("--radix-popper-anchor-height",`${mt}px`)}}),S&&hC({element:S,padding:a}),MC({arrowWidth:A,arrowHeight:y}),u&&fC({strategy:"referenceHidden",...j})]}),[H,G]=GS(k),q=zi(v);Is(()=>{O&&(q==null||q())},[O,q]);const te=(se=D.arrow)==null?void 0:se.x,he=(oe=D.arrow)==null?void 0:oe.y,ue=((Re=D.arrow)==null?void 0:Re.centerOffset)!==0,[ve,$]=N.useState();return Is(()=>{f&&$(window.getComputedStyle(f).zIndex)},[f]),w.jsx("div",{ref:z.setFloating,"data-radix-popper-content-wrapper":"",style:{...I,transform:O?I.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ve,"--radix-popper-transform-origin":[(Oe=D.transformOrigin)==null?void 0:Oe.x,(Ue=D.transformOrigin)==null?void 0:Ue.y].join(" "),...((tt=D.hide)==null?void 0:tt.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:w.jsx(_C,{scope:n,placedSide:H,onArrowChange:b,arrowX:te,arrowY:he,shouldHideArrow:ue,children:w.jsx(Ln.div,{"data-side":H,"data-align":G,...x,ref:_,style:{...x.style,animation:O?void 0:"none"}})})})});zS.displayName=Bm;var VS="PopperArrow",SC={top:"bottom",right:"left",bottom:"top",left:"right"},HS=N.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=yC(VS,i),o=SC[s.placedSide];return w.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:w.jsx(mC,{...r,ref:n,style:{...r.style,display:"block"}})})});HS.displayName=VS;function wC(t){return t!==null}var MC=t=>({name:"transformOrigin",options:t,fn(e){var m,f,g;const{placement:n,rects:i,middlewareData:r}=e,o=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,d]=GS(n),h={start:"0%",center:"50%",end:"100%"}[d],u=(((f=r.arrow)==null?void 0:f.x)??0)+a/2,p=(((g=r.arrow)==null?void 0:g.y)??0)+l/2;let v="",x="";return c==="bottom"?(v=o?h:`${u}px`,x=`${-l}px`):c==="top"?(v=o?h:`${u}px`,x=`${i.floating.height+l}px`):c==="right"?(v=`${-l}px`,x=o?h:`${p}px`):c==="left"&&(v=`${i.floating.width+l}px`,x=o?h:`${p}px`),{data:{x:v,y:x}}}});function GS(t){const[e,n="center"]=t.split("-");return[e,n]}var EC=BS,bC=zS,TC=HS,[td,zI]=Uy("Tooltip",[FS]),zm=FS(),WS="TooltipProvider",AC=700,G0="tooltip.open",[CC,jS]=td(WS),XS=t=>{const{__scopeTooltip:e,delayDuration:n=AC,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,[o,a]=N.useState(!0),l=N.useRef(!1),c=N.useRef(0);return N.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),w.jsx(CC,{scope:e,isOpenDelayed:o,delayDuration:n,onOpen:N.useCallback(()=>{window.clearTimeout(c.current),a(!1)},[]),onClose:N.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a(!0),i)},[i]),isPointerInTransitRef:l,onPointerInTransitChange:N.useCallback(d=>{l.current=d},[]),disableHoverableContent:r,children:s})};XS.displayName=WS;var $S="Tooltip",[VI,nd]=td($S),Ih="TooltipTrigger",RC=N.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=nd(Ih,n),s=jS(Ih,n),o=zm(n),a=N.useRef(null),l=xi(e,a,r.onTriggerChange),c=N.useRef(!1),d=N.useRef(!1),h=N.useCallback(()=>c.current=!1,[]);return N.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),w.jsx(EC,{asChild:!0,...o,children:w.jsx(Ln.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Gt(t.onPointerMove,u=>{u.pointerType!=="touch"&&!d.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),d.current=!0)}),onPointerLeave:Gt(t.onPointerLeave,()=>{r.onTriggerLeave(),d.current=!1}),onPointerDown:Gt(t.onPointerDown,()=>{c.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:Gt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Gt(t.onBlur,r.onClose),onClick:Gt(t.onClick,r.onClose)})})});RC.displayName=Ih;var PC="TooltipPortal",[HI,NC]=td(PC,{forceMount:void 0}),Xo="TooltipContent",qS=N.forwardRef((t,e)=>{const n=NC(Xo,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=nd(Xo,t.__scopeTooltip);return w.jsx(Cm,{present:i||o.open,children:o.disableHoverableContent?w.jsx(YS,{side:r,...s,ref:e}):w.jsx(LC,{side:r,...s,ref:e})})}),LC=N.forwardRef((t,e)=>{const n=nd(Xo,t.__scopeTooltip),i=jS(Xo,t.__scopeTooltip),r=N.useRef(null),s=xi(e,r),[o,a]=N.useState(null),{trigger:l,onClose:c}=n,d=r.current,{onPointerInTransitChange:h}=i,u=N.useCallback(()=>{a(null),h(!1)},[h]),p=N.useCallback((v,x)=>{const m=v.currentTarget,f={x:v.clientX,y:v.clientY},g=FC(f,m.getBoundingClientRect()),_=OC(f,g),S=kC(x.getBoundingClientRect()),b=zC([..._,...S]);a(b),h(!0)},[h]);return N.useEffect(()=>()=>u(),[u]),N.useEffect(()=>{if(l&&d){const v=m=>p(m,d),x=m=>p(m,l);return l.addEventListener("pointerleave",v),d.addEventListener("pointerleave",x),()=>{l.removeEventListener("pointerleave",v),d.removeEventListener("pointerleave",x)}}},[l,d,p,u]),N.useEffect(()=>{if(o){const v=x=>{const m=x.target,f={x:x.clientX,y:x.clientY},g=(l==null?void 0:l.contains(m))||(d==null?void 0:d.contains(m)),_=!BC(f,o);g?u():_&&(u(),c())};return document.addEventListener("pointermove",v),()=>document.removeEventListener("pointermove",v)}},[l,d,o,c,u]),w.jsx(YS,{...t,ref:s})}),[DC,IC]=td($S,{isInside:!1}),YS=N.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=nd(Xo,n),c=zm(n),{onClose:d}=l;return N.useEffect(()=>(document.addEventListener(G0,d),()=>document.removeEventListener(G0,d)),[d]),N.useEffect(()=>{if(l.trigger){const h=u=>{const p=u.target;p!=null&&p.contains(l.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[l.trigger,d]),w.jsx(Am,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:w.jsxs(bC,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[w.jsx(Iy,{children:i}),w.jsx(DC,{scope:n,isInside:!0,children:w.jsx(hb,{id:l.contentId,role:"tooltip",children:r||i})})]})})});qS.displayName=Xo;var KS="TooltipArrow",UC=N.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=zm(n);return IC(KS,n).isInside?null:w.jsx(TC,{...r,...i,ref:e})});UC.displayName=KS;function FC(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function OC(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function kC(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function BC(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s].x,l=e[s].y,c=e[o].x,d=e[o].y;l>i!=d>i&&n<(c-a)*(i-l)/(d-l)+a&&(r=!r)}return r}function zC(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),VC(e)}function VC(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var HC=XS,ZS=qS;const GC=HC,WC=N.forwardRef(({className:t,sideOffset:e=4,...n},i)=>w.jsx(ZS,{ref:i,sideOffset:e,className:as("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));WC.displayName=ZS.displayName;var id=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},rd=typeof window>"u"||"Deno"in globalThis;function ci(){}function jC(t,e){return typeof t=="function"?t(e):t}function XC(t){return typeof t=="number"&&t>=0&&t!==1/0}function $C(t,e){return Math.max(t+(e||0)-Date.now(),0)}function W0(t,e){return typeof t=="function"?t(e):t}function qC(t,e){return typeof t=="function"?t(e):t}function j0(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==Vm(o,e.options))return!1}else if(!ul(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function X0(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(cl(e.options.mutationKey)!==cl(s))return!1}else if(!ul(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function Vm(t,e){return((e==null?void 0:e.queryKeyHashFn)||cl)(t)}function cl(t){return JSON.stringify(t,(e,n)=>Uh(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function ul(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!ul(t[n],e[n])):!1}function QS(t,e){if(t===e)return t;const n=$0(t)&&$0(e);if(n||Uh(t)&&Uh(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{};let l=0;for(let c=0;c<o;c++){const d=n?c:s[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=QS(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===o&&l===r?t:a}return e}function $0(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Uh(t){if(!q0(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!q0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function q0(t){return Object.prototype.toString.call(t)==="[object Object]"}function YC(t){return new Promise(e=>{setTimeout(e,t)})}function KC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?QS(t,e):e}function ZC(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function QC(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Hm=Symbol();function JS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Hm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var Ms,Ur,Ro,ux,JC=(ux=class extends id{constructor(){super();ct(this,Ms);ct(this,Ur);ct(this,Ro);$e(this,Ro,e=>{if(!rd&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){re(this,Ur)||this.setEventListener(re(this,Ro))}onUnsubscribe(){var e;this.hasListeners()||((e=re(this,Ur))==null||e.call(this),$e(this,Ur,void 0))}setEventListener(e){var n;$e(this,Ro,e),(n=re(this,Ur))==null||n.call(this),$e(this,Ur,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){re(this,Ms)!==e&&($e(this,Ms,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof re(this,Ms)=="boolean"?re(this,Ms):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},Ms=new WeakMap,Ur=new WeakMap,Ro=new WeakMap,ux),e1=new JC,Po,Fr,No,dx,e2=(dx=class extends id{constructor(){super();ct(this,Po,!0);ct(this,Fr);ct(this,No);$e(this,No,e=>{if(!rd&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){re(this,Fr)||this.setEventListener(re(this,No))}onUnsubscribe(){var e;this.hasListeners()||((e=re(this,Fr))==null||e.call(this),$e(this,Fr,void 0))}setEventListener(e){var n;$e(this,No,e),(n=re(this,Fr))==null||n.call(this),$e(this,Fr,e(this.setOnline.bind(this)))}setOnline(e){re(this,Po)!==e&&($e(this,Po,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return re(this,Po)}},Po=new WeakMap,Fr=new WeakMap,No=new WeakMap,dx),Su=new e2;function t2(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function n2(t){return Math.min(1e3*2**t,3e4)}function t1(t){return(t??"online")==="online"?Su.isOnline():!0}var n1=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function qd(t){return t instanceof n1}function i1(t){let e=!1,n=0,i=!1,r;const s=t2(),o=x=>{var m;i||(u(new n1(x)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>e1.isFocused()&&(t.networkMode==="always"||Su.isOnline())&&t.canRun(),d=()=>t1(t.networkMode)&&t.canRun(),h=x=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,x),r==null||r(),s.resolve(x))},u=x=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,x),r==null||r(),s.reject(x))},p=()=>new Promise(x=>{var m;r=f=>{(i||c())&&x(f)},(m=t.onPause)==null||m.call(t)}).then(()=>{var x;r=void 0,i||(x=t.onContinue)==null||x.call(t)}),v=()=>{if(i)return;let x;const m=n===0?t.initialPromise:void 0;try{x=m??t.fn()}catch(f){x=Promise.reject(f)}Promise.resolve(x).then(h).catch(f=>{var E;if(i)return;const g=t.retry??(rd?0:3),_=t.retryDelay??n2,S=typeof _=="function"?_(n,f):_,b=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,f);if(e||!b){u(f);return}n++,(E=t.onFail)==null||E.call(t,n,f),YC(S).then(()=>c()?void 0:p()).then(()=>{e?u(f):v()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?v():p().then(v),s)}}function i2(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var xn=i2(),Es,fx,r1=(fx=class{constructor(){ct(this,Es)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),XC(this.gcTime)&&$e(this,Es,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(rd?1/0:5*60*1e3))}clearGcTimeout(){re(this,Es)&&(clearTimeout(re(this,Es)),$e(this,Es,void 0))}},Es=new WeakMap,fx),Lo,Do,Yn,un,pl,bs,ui,Zi,hx,r2=(hx=class extends r1{constructor(e){super();ct(this,ui);ct(this,Lo);ct(this,Do);ct(this,Yn);ct(this,un);ct(this,pl);ct(this,bs);$e(this,bs,!1),$e(this,pl,e.defaultOptions),this.setOptions(e.options),this.observers=[],$e(this,Yn,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,$e(this,Lo,o2(this.options)),this.state=e.state??re(this,Lo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=re(this,un))==null?void 0:e.promise}setOptions(e){this.options={...re(this,pl),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&re(this,Yn).remove(this)}setData(e,n){const i=KC(this.state.data,e,this.options);return sn(this,ui,Zi).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){sn(this,ui,Zi).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=re(this,un))==null?void 0:i.promise;return(r=re(this,un))==null||r.cancel(e),n?n.then(ci).catch(ci):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(re(this,Lo))}isActive(){return this.observers.some(e=>qC(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Hm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!$C(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=re(this,un))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=re(this,un))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),re(this,Yn).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(re(this,un)&&(re(this,bs)?re(this,un).cancel({revert:!0}):re(this,un).cancelRetry()),this.scheduleGc()),re(this,Yn).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||sn(this,ui,Zi).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(re(this,un))return re(this,un).continueRetry(),re(this,un).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(u=>u.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>($e(this,bs,!0),i.signal)})},s=()=>{const h=JS(this.options,n),u={queryKey:this.queryKey,meta:this.meta};return r(u),$e(this,bs,!1),this.options.persister?this.options.persister(h,u,this):h(u)},o={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:s};r(o),(l=this.options.behavior)==null||l.onFetch(o,this),$e(this,Do,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=o.fetchOptions)==null?void 0:c.meta))&&sn(this,ui,Zi).call(this,{type:"fetch",meta:(d=o.fetchOptions)==null?void 0:d.meta});const a=h=>{var u,p,v,x;qd(h)&&h.silent||sn(this,ui,Zi).call(this,{type:"error",error:h}),qd(h)||((p=(u=re(this,Yn).config).onError)==null||p.call(u,h,this),(x=(v=re(this,Yn).config).onSettled)==null||x.call(v,this.state.data,h,this)),this.scheduleGc()};return $e(this,un,i1({initialPromise:n==null?void 0:n.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:h=>{var u,p,v,x;if(h===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(m){a(m);return}(p=(u=re(this,Yn).config).onSuccess)==null||p.call(u,h,this),(x=(v=re(this,Yn).config).onSettled)==null||x.call(v,h,this.state.error,this),this.scheduleGc()},onError:a,onFail:(h,u)=>{sn(this,ui,Zi).call(this,{type:"failed",failureCount:h,error:u})},onPause:()=>{sn(this,ui,Zi).call(this,{type:"pause"})},onContinue:()=>{sn(this,ui,Zi).call(this,{type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0})),re(this,un).start()}},Lo=new WeakMap,Do=new WeakMap,Yn=new WeakMap,un=new WeakMap,pl=new WeakMap,bs=new WeakMap,ui=new WeakSet,Zi=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...s2(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return qd(r)&&r.revert&&re(this,Do)?{...re(this,Do),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),xn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),re(this,Yn).notify({query:this,type:"updated",action:e})})},hx);function s2(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:t1(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function o2(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Ai,px,a2=(px=class extends id{constructor(e={}){super();ct(this,Ai);this.config=e,$e(this,Ai,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??Vm(r,n);let o=this.get(s);return o||(o=new r2({cache:this,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){re(this,Ai).has(e.queryHash)||(re(this,Ai).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=re(this,Ai).get(e.queryHash);n&&(e.destroy(),n===e&&re(this,Ai).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){xn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return re(this,Ai).get(e)}getAll(){return[...re(this,Ai).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>j0(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>j0(e,i)):n}notify(e){xn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){xn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){xn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Ai=new WeakMap,px),Ci,gn,Ts,Ri,Rr,mx,l2=(mx=class extends r1{constructor(e){super();ct(this,Ri);ct(this,Ci);ct(this,gn);ct(this,Ts);this.mutationId=e.mutationId,$e(this,gn,e.mutationCache),$e(this,Ci,[]),this.state=e.state||c2(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){re(this,Ci).includes(e)||(re(this,Ci).push(e),this.clearGcTimeout(),re(this,gn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){$e(this,Ci,re(this,Ci).filter(n=>n!==e)),this.scheduleGc(),re(this,gn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){re(this,Ci).length||(this.state.status==="pending"?this.scheduleGc():re(this,gn).remove(this))}continue(){var e;return((e=re(this,Ts))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,s,o,a,l,c,d,h,u,p,v,x,m,f,g,_,S,b,E,A;$e(this,Ts,i1({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(y,R)=>{sn(this,Ri,Rr).call(this,{type:"failed",failureCount:y,error:R})},onPause:()=>{sn(this,Ri,Rr).call(this,{type:"pause"})},onContinue:()=>{sn(this,Ri,Rr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>re(this,gn).canRun(this)}));const n=this.state.status==="pending",i=!re(this,Ts).canStart();try{if(!n){sn(this,Ri,Rr).call(this,{type:"pending",variables:e,isPaused:i}),await((s=(r=re(this,gn).config).onMutate)==null?void 0:s.call(r,e,this));const R=await((a=(o=this.options).onMutate)==null?void 0:a.call(o,e));R!==this.state.context&&sn(this,Ri,Rr).call(this,{type:"pending",context:R,variables:e,isPaused:i})}const y=await re(this,Ts).start();return await((c=(l=re(this,gn).config).onSuccess)==null?void 0:c.call(l,y,e,this.state.context,this)),await((h=(d=this.options).onSuccess)==null?void 0:h.call(d,y,e,this.state.context)),await((p=(u=re(this,gn).config).onSettled)==null?void 0:p.call(u,y,null,this.state.variables,this.state.context,this)),await((x=(v=this.options).onSettled)==null?void 0:x.call(v,y,null,e,this.state.context)),sn(this,Ri,Rr).call(this,{type:"success",data:y}),y}catch(y){try{throw await((f=(m=re(this,gn).config).onError)==null?void 0:f.call(m,y,e,this.state.context,this)),await((_=(g=this.options).onError)==null?void 0:_.call(g,y,e,this.state.context)),await((b=(S=re(this,gn).config).onSettled)==null?void 0:b.call(S,void 0,y,this.state.variables,this.state.context,this)),await((A=(E=this.options).onSettled)==null?void 0:A.call(E,void 0,y,e,this.state.context)),y}finally{sn(this,Ri,Rr).call(this,{type:"error",error:y})}}finally{re(this,gn).runNext(this)}}},Ci=new WeakMap,gn=new WeakMap,Ts=new WeakMap,Ri=new WeakSet,Rr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),xn.batch(()=>{re(this,Ci).forEach(i=>{i.onMutationUpdate(e)}),re(this,gn).notify({mutation:this,type:"updated",action:e})})},mx);function c2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Fn,ml,gx,u2=(gx=class extends id{constructor(e={}){super();ct(this,Fn);ct(this,ml);this.config=e,$e(this,Fn,new Map),$e(this,ml,Date.now())}build(e,n,i){const r=new l2({mutationCache:this,mutationId:++Rl(this,ml)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=Zl(e),i=re(this,Fn).get(n)??[];i.push(e),re(this,Fn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=Zl(e);if(re(this,Fn).has(n)){const r=(i=re(this,Fn).get(n))==null?void 0:i.filter(s=>s!==e);r&&(r.length===0?re(this,Fn).delete(n):re(this,Fn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=re(this,Fn).get(Zl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=re(this,Fn).get(Zl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){xn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...re(this,Fn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>X0(n,i))}findAll(e={}){return this.getAll().filter(n=>X0(e,n))}notify(e){xn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return xn.batch(()=>Promise.all(e.map(n=>n.continue().catch(ci))))}},Fn=new WeakMap,ml=new WeakMap,gx);function Zl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Y0(t){return{onFetch:(e,n)=>{var d,h,u,p,v;const i=e.options,r=(u=(h=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:u.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let x=!1;const m=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?x=!0:e.signal.addEventListener("abort",()=>{x=!0}),e.signal)})},f=JS(e.options,e.fetchOptions),g=async(_,S,b)=>{if(x)return Promise.reject();if(S==null&&_.pages.length)return Promise.resolve(_);const E={queryKey:e.queryKey,pageParam:S,direction:b?"backward":"forward",meta:e.options.meta};m(E);const A=await f(E),{maxPages:y}=e.options,R=b?QC:ZC;return{pages:R(_.pages,A,y),pageParams:R(_.pageParams,S,y)}};if(r&&s.length){const _=r==="backward",S=_?d2:K0,b={pages:s,pageParams:o},E=S(i,b);a=await g(b,E,_)}else{const _=t??s.length;do{const S=l===0?o[0]??i.initialPageParam:K0(i,a);if(l>0&&S==null)break;a=await g(a,S),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var x,m;return(m=(x=e.options).persister)==null?void 0:m.call(x,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function K0(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function d2(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var Nt,Or,kr,Io,Uo,Br,Fo,Oo,vx,f2=(vx=class{constructor(t={}){ct(this,Nt);ct(this,Or);ct(this,kr);ct(this,Io);ct(this,Uo);ct(this,Br);ct(this,Fo);ct(this,Oo);$e(this,Nt,t.queryCache||new a2),$e(this,Or,t.mutationCache||new u2),$e(this,kr,t.defaultOptions||{}),$e(this,Io,new Map),$e(this,Uo,new Map),$e(this,Br,0)}mount(){Rl(this,Br)._++,re(this,Br)===1&&($e(this,Fo,e1.subscribe(async t=>{t&&(await this.resumePausedMutations(),re(this,Nt).onFocus())})),$e(this,Oo,Su.subscribe(async t=>{t&&(await this.resumePausedMutations(),re(this,Nt).onOnline())})))}unmount(){var t,e;Rl(this,Br)._--,re(this,Br)===0&&((t=re(this,Fo))==null||t.call(this),$e(this,Fo,void 0),(e=re(this,Oo))==null||e.call(this),$e(this,Oo,void 0))}isFetching(t){return re(this,Nt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return re(this,Or).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=re(this,Nt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=re(this,Nt).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(W0(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return re(this,Nt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=re(this,Nt).get(i.queryHash),s=r==null?void 0:r.state.data,o=jC(e,s);if(o!==void 0)return re(this,Nt).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return xn.batch(()=>re(this,Nt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=re(this,Nt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=re(this,Nt);xn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=re(this,Nt),i={type:"active",...t};return xn.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=xn.batch(()=>re(this,Nt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ci).catch(ci)}invalidateQueries(t={},e={}){return xn.batch(()=>{if(re(this,Nt).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=xn.batch(()=>re(this,Nt).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(ci)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(ci)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=re(this,Nt).build(this,e);return n.isStaleByTime(W0(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ci).catch(ci)}fetchInfiniteQuery(t){return t.behavior=Y0(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ci).catch(ci)}ensureInfiniteQueryData(t){return t.behavior=Y0(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Su.isOnline()?re(this,Or).resumePausedMutations():Promise.resolve()}getQueryCache(){return re(this,Nt)}getMutationCache(){return re(this,Or)}getDefaultOptions(){return re(this,kr)}setDefaultOptions(t){$e(this,kr,t)}setQueryDefaults(t,e){re(this,Io).set(cl(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...re(this,Io).values()];let n={};return e.forEach(i=>{ul(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){re(this,Uo).set(cl(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...re(this,Uo).values()];let n={};return e.forEach(i=>{ul(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...re(this,kr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=Vm(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Hm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...re(this,kr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){re(this,Nt).clear(),re(this,Or).clear()}},Nt=new WeakMap,Or=new WeakMap,kr=new WeakMap,Io=new WeakMap,Uo=new WeakMap,Br=new WeakMap,Fo=new WeakMap,Oo=new WeakMap,vx),h2=N.createContext(void 0),p2=({client:t,children:e})=>(N.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),w.jsx(h2.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wu(){return wu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wu.apply(this,arguments)}var Hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hr||(Hr={}));const Z0="popstate";function m2(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Fh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:o1(r)}return v2(e,n,null,t)}function Nn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function s1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function g2(){return Math.random().toString(36).substr(2,8)}function Q0(t,e){return{usr:t.state,key:t.key,idx:e}}function Fh(t,e,n,i){return n===void 0&&(n=null),wu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?sd(e):e,{state:n,key:e&&e.key||i||g2()})}function o1(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function sd(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function v2(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Hr.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(wu({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Hr.Pop;let m=d(),f=m==null?null:m-c;c=m,l&&l({action:a,location:x.location,delta:f})}function u(m,f){a=Hr.Push;let g=Fh(x.location,m,f);c=d()+1;let _=Q0(g,c),S=x.createHref(g);try{o.pushState(_,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(S)}s&&l&&l({action:a,location:x.location,delta:1})}function p(m,f){a=Hr.Replace;let g=Fh(x.location,m,f);c=d();let _=Q0(g,c),S=x.createHref(g);o.replaceState(_,"",S),s&&l&&l({action:a,location:x.location,delta:0})}function v(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof m=="string"?m:o1(m);return g=g.replace(/ $/,"%20"),Nn(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let x={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Z0,h),l=m,()=>{r.removeEventListener(Z0,h),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let f=v(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:u,replace:p,go(m){return o.go(m)}};return x}var J0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(J0||(J0={}));function x2(t,e,n){return n===void 0&&(n="/"),_2(t,e,n,!1)}function _2(t,e,n,i){let r=typeof e=="string"?sd(e):e,s=c1(r.pathname||"/",n);if(s==null)return null;let o=a1(t);y2(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=N2(s);a=R2(o[l],c,i)}return a}function a1(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Nn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=bo([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Nn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),a1(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:A2(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of l1(s.path))r(s,o,l)}),e}function l1(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=l1(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function y2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:C2(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const S2=/^:[\w-]+$/,w2=3,M2=2,E2=1,b2=10,T2=-2,ev=t=>t==="*";function A2(t,e){let n=t.split("/"),i=n.length;return n.some(ev)&&(i+=T2),e&&(i+=M2),n.filter(r=>!ev(r)).reduce((r,s)=>r+(S2.test(s)?w2:s===""?E2:b2),i)}function C2(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function R2(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=tv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),u=l.route;if(!h&&c&&n&&!i[i.length-1].route.index&&(h=tv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:bo([s,h.pathname]),pathnameBase:L2(bo([s,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(s=bo([s,h.pathnameBase]))}return o}function tv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=P2(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:u,isOptional:p}=d;if(u==="*"){let x=a[h]||"";o=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[h];return p&&!v?c[u]=void 0:c[u]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function P2(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),s1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function N2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return s1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function c1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const bo=t=>t.join("/").replace(/\/\/+/g,"/"),L2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function D2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const u1=["post","put","patch","delete"];new Set(u1);const I2=["get",...u1];new Set(I2);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mu(){return Mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Mu.apply(this,arguments)}const U2=N.createContext(null),F2=N.createContext(null),d1=N.createContext(null),od=N.createContext(null),ad=N.createContext({outlet:null,matches:[],isDataRoute:!1}),f1=N.createContext(null);function Gm(){return N.useContext(od)!=null}function h1(){return Gm()||Nn(!1),N.useContext(od).location}function O2(t,e){return k2(t,e)}function k2(t,e,n,i){Gm()||Nn(!1);let{navigator:r}=N.useContext(d1),{matches:s}=N.useContext(ad),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=h1(),d;if(e){var h;let m=typeof e=="string"?sd(e):e;l==="/"||(h=m.pathname)!=null&&h.startsWith(l)||Nn(!1),d=m}else d=c;let u=d.pathname||"/",p=u;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+u.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=x2(t,{pathname:p}),x=G2(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:bo([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:bo([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&x?N.createElement(od.Provider,{value:{location:Mu({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Hr.Pop}},x):x}function B2(){let t=$2(),e=D2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:r},n):null,null)}const z2=N.createElement(B2,null);class V2 extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(ad.Provider,{value:this.props.routeContext},N.createElement(f1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function H2(t){let{routeContext:e,match:n,children:i}=t,r=N.useContext(U2);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(ad.Provider,{value:e},i)}function G2(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Nn(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:u,errors:p}=n,v=h.route.loader&&u[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,u)=>{let p,v=!1,x=null,m=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,x=h.route.errorElement||z2,l&&(c<0&&u===0?(v=!0,m=null):c===u&&(v=!0,m=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,u+1)),g=()=>{let _;return p?_=x:v?_=m:h.route.Component?_=N.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=d,N.createElement(H2,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:_})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?N.createElement(V2,{location:n.location,revalidation:n.revalidation,component:x,error:p,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Oh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Oh||{});function W2(t){let e=N.useContext(F2);return e||Nn(!1),e}function j2(t){let e=N.useContext(ad);return e||Nn(!1),e}function X2(t){let e=j2(),n=e.matches[e.matches.length-1];return n.route.id||Nn(!1),n.route.id}function $2(){var t;let e=N.useContext(f1),n=W2(Oh.UseRouteError),i=X2(Oh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function kh(t){Nn(!1)}function q2(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Hr.Pop,navigator:s,static:o=!1,future:a}=t;Gm()&&Nn(!1);let l=e.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:s,static:o,future:Mu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=sd(i));let{pathname:d="/",search:h="",hash:u="",state:p=null,key:v="default"}=i,x=N.useMemo(()=>{let m=c1(d,l);return m==null?null:{location:{pathname:m,search:h,hash:u,state:p,key:v},navigationType:r}},[l,d,h,u,p,v,r]);return x==null?null:N.createElement(d1.Provider,{value:c},N.createElement(od.Provider,{children:n,value:x}))}function Y2(t){let{children:e,location:n}=t;return O2(Bh(e),n)}new Promise(()=>{});function Bh(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(i,r)=>{if(!N.isValidElement(i))return;let s=[...e,r];if(i.type===N.Fragment){n.push.apply(n,Bh(i.props.children,s));return}i.type!==kh&&Nn(!1),!i.props.index||!i.props.children||Nn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Bh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const K2="6";try{window.__reactRouterVersion=K2}catch{}const Z2="startTransition",nv=bw[Z2];function Q2(t){let{basename:e,children:n,future:i,window:r}=t,s=N.useRef();s.current==null&&(s.current=m2({window:r,v5Compat:!0}));let o=s.current,[a,l]=N.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},d=N.useCallback(h=>{c&&nv?nv(()=>l(h)):l(h)},[l,c]);return N.useLayoutEffect(()=>o.listen(d),[o,d]),N.createElement(q2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var iv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(iv||(iv={}));var rv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rv||(rv={}));const Yd=[{label:"About",href:"#about"},{label:"Experience",href:"#experience"},{label:"Projects",href:"#projects"},{label:"Skills",href:"#skills"},{label:"Contact",href:"#contact"}],J2=()=>{const[t,e]=N.useState(!1),[n,i]=N.useState(!1),[r,s]=N.useState("");N.useEffect(()=>{const a=()=>{e(window.scrollY>50);const l=Yd.map(d=>d.href.replace("#",""));let c="";for(const d of l){const h=document.getElementById(d);h&&h.getBoundingClientRect().top<=150&&(c=d)}s(c)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const o=a=>{i(!1);const l=document.querySelector(a);l&&l.scrollIntoView({behavior:"smooth"})};return w.jsxs(w.Fragment,{children:[w.jsx("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${t?"glass-nav shadow-lg shadow-black/20":"bg-transparent"}`,children:w.jsx("div",{className:"max-w-7xl mx-auto px-6 py-4",children:w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsxs("a",{href:"#",onClick:a=>{a.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"relative group",children:[w.jsx("span",{className:"text-xl font-bold text-gradient-primary",children:"SA"}),w.jsx("span",{className:"text-xl font-light text-white/80 ml-1",children:"Sameer Anwar"}),w.jsx("div",{className:"absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300"})]}),w.jsxs("div",{className:"hidden md:flex items-center gap-1",children:[Yd.map(a=>w.jsx("button",{onClick:()=>o(a.href),className:`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${r===a.href.replace("#","")?"text-white bg-white/10":"text-white/60 hover:text-white hover:bg-white/5"}`,children:a.label},a.href)),w.jsx("div",{className:"w-px h-6 bg-white/10 mx-3"}),w.jsxs("div",{className:"flex items-center gap-1",children:[w.jsx("a",{href:"https://www.linkedin.com/in/sameer-anwar-a8b1b5225/",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300",children:w.jsx(gu,{size:16})}),w.jsx("a",{href:"https://github.com/sameeroz",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-300",children:w.jsx(ol,{size:16})}),w.jsx("a",{href:"mailto:gdrboy11@gmail.com",className:"ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:from-violet-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20",children:w.jsxs("span",{className:"flex items-center gap-2",children:[w.jsx(fS,{size:14}),"Hire Me"]})})]})]}),w.jsx("button",{onClick:()=>i(!n),className:"md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all",children:n?w.jsx(pS,{size:22}):w.jsx(Kb,{size:22})})]})})}),w.jsxs("div",{className:`fixed inset-0 z-40 md:hidden transition-all duration-500 ${n?"visible":"invisible"}`,children:[w.jsx("div",{className:`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${n?"opacity-100":"opacity-0"}`,onClick:()=>i(!1)}),w.jsx("div",{className:`absolute top-[72px] left-4 right-4 glass-card rounded-2xl p-4 transition-all duration-500 ${n?"translate-y-0 opacity-100":"-translate-y-4 opacity-0"}`,children:w.jsxs("div",{className:"flex flex-col gap-1",children:[Yd.map(a=>w.jsx("button",{onClick:()=>o(a.href),className:`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300 ${r===a.href.replace("#","")?"text-white bg-white/10":"text-white/60 hover:text-white hover:bg-white/5"}`,children:a.label},a.href)),w.jsx("div",{className:"h-px bg-white/10 my-2"}),w.jsxs("div",{className:"flex items-center gap-2 px-4 py-2",children:[w.jsx("a",{href:"https://www.linkedin.com/in/sameer-anwar-a8b1b5225/",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all",children:w.jsx(gu,{size:18})}),w.jsx("a",{href:"https://github.com/sameeroz",target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all",children:w.jsx(ol,{size:18})}),w.jsx("a",{href:"mailto:gdrboy11@gmail.com",className:"ml-auto px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white",children:"Hire Me"})]})]})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wm="184",eR=0,sv=1,tR=2,Bc=1,nR=2,Pa=3,hr=0,hn=1,er=2,sr=0,To=1,Li=2,ov=3,av=4,iR=5,gs=100,rR=101,sR=102,oR=103,aR=104,lR=200,cR=201,uR=202,dR=203,zh=204,Vh=205,fR=206,hR=207,pR=208,mR=209,gR=210,vR=211,xR=212,_R=213,yR=214,Hh=0,Gh=1,Wh=2,$o=3,jh=4,Xh=5,$h=6,qh=7,p1=0,SR=1,wR=2,Oi=0,m1=1,g1=2,v1=3,x1=4,_1=5,y1=6,S1=7,w1=300,Fs=301,qo=302,Kd=303,Zd=304,ld=306,Yh=1e3,ir=1001,Kh=1002,Qt=1003,MR=1004,Ql=1005,fn=1006,Qd=1007,Ss=1008,Jn=1009,M1=1010,E1=1011,dl=1012,jm=1013,Hi=1014,Di=1015,pr=1016,Xm=1017,$m=1018,fl=1020,b1=35902,T1=35899,A1=1021,C1=1022,pi=1023,mr=1026,ws=1027,R1=1028,qm=1029,Os=1030,Ym=1031,Km=1033,zc=33776,Vc=33777,Hc=33778,Gc=33779,Zh=35840,Qh=35841,Jh=35842,ep=35843,tp=36196,np=37492,ip=37496,rp=37488,sp=37489,Eu=37490,op=37491,ap=37808,lp=37809,cp=37810,up=37811,dp=37812,fp=37813,hp=37814,pp=37815,mp=37816,gp=37817,vp=37818,xp=37819,_p=37820,yp=37821,Sp=36492,wp=36494,Mp=36495,Ep=36283,bp=36284,bu=36285,Tp=36286,ER=3200,lv=0,bR=1,Ir="",Kn="srgb",Tu="srgb-linear",Au="linear",dt="srgb",Ws=7680,cv=519,TR=512,AR=513,CR=514,Zm=515,RR=516,PR=517,Qm=518,NR=519,uv=35044,va=35048,dv="300 es",Ii=2e3,Cu=2001;function LR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ru(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DR(){const t=Ru("canvas");return t.style.display="block",t}const fv={};function hv(...t){const e="THREE."+t.shift();console.log(e,...t)}function P1(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=P1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=P1(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Ap(...t){const e=t.join(" ");e in fv||(fv[e]=!0,Be(...t))}function IR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const UR={[Hh]:Gh,[Wh]:$h,[jh]:qh,[$o]:Xh,[Gh]:Hh,[$h]:Wh,[qh]:jh,[Xh]:$o};class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=Math.PI/180,Cp=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function FR(t,e){return(t%e+e)%e}function ef(t,e,n){return(1-n)*t+n*e}function xa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function En(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ng=class ng{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ng.prototype.isVector2=!0;let ut=ng;class ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],u=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(h!==x||l!==u||c!==p||d!==v){let m=l*u+c*p+d*v+h*x;m<0&&(u=-u,p=-p,v=-v,x=-x,m=-m);let f=1-a;if(m<.9995){const g=Math.acos(m),_=Math.sin(g);f=Math.sin(f*g)/_,a=Math.sin(a*g)/_,l=l*f+u*a,c=c*f+p*a,d=d*f+v*a,h=h*f+x*a}else{l=l*f+u*a,c=c*f+p*a,d=d*f+v*a,h=h*f+x*a;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],u=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+d*h+l*p-c*u,e[n+1]=l*v+d*u+c*h-a*p,e[n+2]=c*v+d*p+a*u-l*h,e[n+3]=d*v-a*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),u=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"YXZ":this._x=u*d*h+c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"ZXY":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h-u*p*v;break;case"ZYX":this._x=u*d*h-c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h+u*p*v;break;case"YZX":this._x=u*d*h+c*p*v,this._y=c*p*h+u*d*v,this._z=c*d*v-u*p*h,this._w=c*d*h-u*p*v;break;case"XZY":this._x=u*d*h-c*p*v,this._y=c*p*h-u*d*v,this._z=c*d*v+u*p*h,this._w=c*d*h+u*p*v;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],u=i+a+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ig=class ig{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(pv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ig.prototype.isVector3=!0;let X=ig;const tf=new X,pv=new ia,rg=class rg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],u=i[2],p=i[5],v=i[8],x=r[0],m=r[3],f=r[6],g=r[1],_=r[4],S=r[7],b=r[2],E=r[5],A=r[8];return s[0]=o*x+a*g+l*b,s[3]=o*m+a*_+l*E,s[6]=o*f+a*S+l*A,s[1]=c*x+d*g+h*b,s[4]=c*m+d*_+h*E,s[7]=c*f+d*S+h*A,s[2]=u*x+p*g+v*b,s[5]=u*m+p*_+v*E,s[8]=u*f+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,u=a*l-d*s,p=c*s-o*l,v=n*h+i*u+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=u*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nf.makeScale(e,n)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,n){return this.premultiply(nf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rg.prototype.isMatrix3=!0;let Ge=rg;const nf=new Ge,mv=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gv=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OR(){const t={enabled:!0,workingColorSpace:Tu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===dt&&(r.r=or(r.r),r.g=or(r.g),r.b=or(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(r.r=Ao(r.r),r.g=Ao(r.g),r.b=Ao(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ir?Au:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ap("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ap("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tu]:{primaries:e,whitePoint:i,transfer:Au,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:mv,fromXYZ:gv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),t}const Je=OR();function or(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ao(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let js;class kR{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{js===void 0&&(js=Ru("canvas")),js.width=e.width,js.height=e.height;const r=js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=js}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ru("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=or(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(or(n[i]/255)*255):n[i]=or(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BR=0;class Jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(rf(r[o].image)):s.push(rf(r[o]))}else s=rf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function rf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let zR=0;const sf=new X;class yn extends zs{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=ir,r=ir,s=fn,o=Ss,a=pi,l=Jn,c=yn.DEFAULT_ANISOTROPY,d=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zR++}),this.uuid=Ml(),this.name="",this.source=new Jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yh:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Kh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yh:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Kh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=w1;yn.DEFAULT_ANISOTROPY=1;const sg=class sg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],v=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,b=(f+1)/2,E=(d+u)/4,A=(h+x)/4,y=(v+m)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=E/i,s=A/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=y/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=y/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(u-d)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sg.prototype.isVector4=!0;let kt=sg;class VR extends zs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new yn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Jm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends VR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class N1 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HR extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lu=class Lu{constructor(e,n,i,r,s,o,a,l,c,d,h,u,p,v,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,u,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,d,h,u,p,v,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=v,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xs.setFromMatrixColumn(e,0).length(),s=1/Xs.setFromMatrixColumn(e,1).length(),o=1/Xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*h,v=a*d,x=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=p+v*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,v=c*d,x=c*h;n[0]=u+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=p*a-v,n[6]=x+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,v=c*d,x=c*h;n[0]=u-x*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*d,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*h,v=a*d,x=a*h;n[0]=l*d,n[4]=v*c-p,n[8]=u*c+x,n[1]=l*h,n[5]=x*c+u,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=x-u*h,n[8]=v*h+p,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=p*h+v,n[10]=u-x*h}else if(e.order==="XZY"){const u=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=u*h+x,n[5]=o*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*d,n[10]=x*h+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GR,e,WR)}lookAt(e,n,i){const r=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),Mr.crossVectors(i,In),Mr.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Mr.crossVectors(i,In)),Mr.normalize(),Jl.crossVectors(In,Mr),r[0]=Mr.x,r[4]=Jl.x,r[8]=In.x,r[1]=Mr.y,r[5]=Jl.y,r[9]=In.y,r[2]=Mr.z,r[6]=Jl.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],u=i[9],p=i[13],v=i[2],x=i[6],m=i[10],f=i[14],g=i[3],_=i[7],S=i[11],b=i[15],E=r[0],A=r[4],y=r[8],R=r[12],L=r[1],P=r[5],U=r[9],j=r[13],z=r[2],I=r[6],k=r[10],O=r[14],D=r[3],H=r[7],G=r[11],q=r[15];return s[0]=o*E+a*L+l*z+c*D,s[4]=o*A+a*P+l*I+c*H,s[8]=o*y+a*U+l*k+c*G,s[12]=o*R+a*j+l*O+c*q,s[1]=d*E+h*L+u*z+p*D,s[5]=d*A+h*P+u*I+p*H,s[9]=d*y+h*U+u*k+p*G,s[13]=d*R+h*j+u*O+p*q,s[2]=v*E+x*L+m*z+f*D,s[6]=v*A+x*P+m*I+f*H,s[10]=v*y+x*U+m*k+f*G,s[14]=v*R+x*j+m*O+f*q,s[3]=g*E+_*L+S*z+b*D,s[7]=g*A+_*P+S*I+b*H,s[11]=g*y+_*U+S*k+b*G,s[15]=g*R+_*j+S*O+b*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],v=e[3],x=e[7],m=e[11],f=e[15],g=l*p-c*u,_=a*p-c*h,S=a*u-l*h,b=o*p-c*d,E=o*u-l*d,A=o*h-a*d;return n*(x*g-m*_+f*S)-i*(v*g-m*b+f*E)+r*(v*_-x*b+f*A)-s*(v*S-x*E+m*A)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],v=e[12],x=e[13],m=e[14],f=e[15],g=n*a-i*o,_=n*l-r*o,S=n*c-s*o,b=i*l-r*a,E=i*c-s*a,A=r*c-s*l,y=d*x-h*v,R=d*m-u*v,L=d*f-p*v,P=h*m-u*x,U=h*f-p*x,j=u*f-p*m,z=g*j-_*U+S*P+b*L-E*R+A*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return e[0]=(a*j-l*U+c*P)*I,e[1]=(r*U-i*j-s*P)*I,e[2]=(x*A-m*E+f*b)*I,e[3]=(u*E-h*A-p*b)*I,e[4]=(l*L-o*j-c*R)*I,e[5]=(n*j-r*L+s*R)*I,e[6]=(m*S-v*A-f*_)*I,e[7]=(d*A-u*S+p*_)*I,e[8]=(o*U-a*L+c*y)*I,e[9]=(i*L-n*U-s*y)*I,e[10]=(v*E-x*S+f*g)*I,e[11]=(h*S-d*E-p*g)*I,e[12]=(a*R-o*P-l*y)*I,e[13]=(n*P-i*R+r*y)*I,e[14]=(x*_-v*b-m*g)*I,e[15]=(d*b-h*_+u*g)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,u=s*c,p=s*d,v=s*h,x=o*d,m=o*h,f=a*h,g=l*c,_=l*d,S=l*h,b=i.x,E=i.y,A=i.z;return r[0]=(1-(x+f))*b,r[1]=(p+S)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-S)*E,r[5]=(1-(u+f))*E,r[6]=(m+g)*E,r[7]=0,r[8]=(v+_)*A,r[9]=(m-g)*A,r[10]=(1-(u+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Xs.set(r[0],r[1],r[2]).length();const a=Xs.set(r[4],r[5],r[6]).length(),l=Xs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),si.copy(this);const c=1/o,d=1/a,h=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,n.setFromRotationMatrix(si),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ii,l=!1){const c=this.elements,d=2*s/(n-e),h=2*s/(i-r),u=(n+e)/(n-e),p=(i+r)/(i-r);let v,x;if(l)v=s/(o-s),x=o*s/(o-s);else if(a===Ii)v=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Cu)v=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ii,l=!1){const c=this.elements,d=2/(n-e),h=2/(i-r),u=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,x;if(l)v=1/(o-s),x=o/(o-s);else if(a===Ii)v=-2/(o-s),x=-(o+s)/(o-s);else if(a===Cu)v=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Lu.prototype.isMatrix4=!0;let Bt=Lu;const Xs=new X,si=new Bt,GR=new X(0,0,0),WR=new X(1,1,1),Mr=new X,Jl=new X,In=new X,vv=new Bt,xv=new ia;class Bi{constructor(e=0,n=0,i=0,r=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],u=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class L1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jR=0;const _v=new X,$s=new ia,Xi=new Bt,ec=new X,_a=new X,XR=new X,$R=new ia,yv=new X(1,0,0),Sv=new X(0,1,0),wv=new X(0,0,1),Mv={type:"added"},qR={type:"removed"},qs={type:"childadded",child:null},of={type:"childremoved",child:null};class Sn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jR++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new X,n=new Bi,i=new ia,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new Ge}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,n){return $s.setFromAxisAngle(e,n),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,n){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ec.copy(e):ec.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(_a,ec,this.up):Xi.lookAt(ec,_a,this.up),this.quaternion.setFromRotationMatrix(Xi),r&&(Xi.extractRotation(r.matrixWorld),$s.setFromRotationMatrix(Xi),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mv),qs.child=e,this.dispatchEvent(qs),qs.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qR),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mv),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,XR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,$R,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),u=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Sn.DEFAULT_UP=new X(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YR={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&u>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const D1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Er={h:0,s:0,l:0},tc={h:0,s:0,l:0};function lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=FR(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lf(o,s,e+1/3),this.g=lf(o,s,e),this.b=lf(o,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const i=D1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Je.workingToColorSpace(cn.copy(this),e),Math.round(et(cn.r*255,0,255))*65536+Math.round(et(cn.g*255,0,255))*256+Math.round(et(cn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Kn){Je.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Er),this.setHSL(Er.h+e,Er.s+n,Er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Er),e.getHSL(tc);const i=ef(Er.h,tc.h,n),r=ef(Er.s,tc.s,n),s=ef(Er.l,tc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new lt;lt.NAMES=D1;class I1 extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const oi=new X,$i=new X,cf=new X,qi=new X,Ys=new X,Ks=new X,Ev=new X,uf=new X,df=new X,ff=new X,hf=new kt,pf=new kt,mf=new kt;class hi{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){oi.subVectors(r,n),$i.subVectors(i,n),cf.subVectors(e,n);const o=oi.dot(oi),a=oi.dot($i),l=oi.dot(cf),c=$i.dot($i),d=$i.dot(cf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const u=1/h,p=(c*l-a*d)*u,v=(o*d-a*l)*u;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return hf.setScalar(0),pf.setScalar(0),mf.setScalar(0),hf.fromBufferAttribute(e,n),pf.fromBufferAttribute(e,i),mf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(hf,s.x),o.addScaledVector(pf,s.y),o.addScaledVector(mf,s.z),o}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),$i.subVectors(e,n),oi.cross($i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),oi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return hi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return hi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ys.subVectors(r,i),Ks.subVectors(s,i),uf.subVectors(e,i);const l=Ys.dot(uf),c=Ks.dot(uf);if(l<=0&&c<=0)return n.copy(i);df.subVectors(e,r);const d=Ys.dot(df),h=Ks.dot(df);if(d>=0&&h<=d)return n.copy(r);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Ys,o);ff.subVectors(e,s);const p=Ys.dot(ff),v=Ks.dot(ff);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Ks,a);const m=d*v-p*h;if(m<=0&&h-d>=0&&p-v>=0)return Ev.subVectors(s,r),a=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(Ev,a);const f=1/(m+x+u);return o=x*f,a=u*f,n.copy(i).addScaledVector(Ys,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),ic.subVectors(this.max,ya),Zs.subVectors(e.a,ya),Qs.subVectors(e.b,ya),Js.subVectors(e.c,ya),br.subVectors(Qs,Zs),Tr.subVectors(Js,Qs),cs.subVectors(Zs,Js);let n=[0,-br.z,br.y,0,-Tr.z,Tr.y,0,-cs.z,cs.y,br.z,0,-br.x,Tr.z,0,-Tr.x,cs.z,0,-cs.x,-br.y,br.x,0,-Tr.y,Tr.x,0,-cs.y,cs.x,0];return!gf(n,Zs,Qs,Js,ic)||(n=[1,0,0,0,1,0,0,0,1],!gf(n,Zs,Qs,Js,ic))?!1:(rc.crossVectors(br,Tr),n=[rc.x,rc.y,rc.z],gf(n,Zs,Qs,Js,ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new X,new X,new X,new X,new X,new X,new X,new X],ai=new X,nc=new El,Zs=new X,Qs=new X,Js=new X,br=new X,Tr=new X,cs=new X,ya=new X,ic=new X,rc=new X,us=new X;function gf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){us.fromArray(t,s);const a=r.x*Math.abs(us.x)+r.y*Math.abs(us.y)+r.z*Math.abs(us.z),l=e.dot(us),c=n.dot(us),d=i.dot(us);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const zt=new X,sc=new ut;let KR=0;class At extends zs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KR++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=uv,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)sc.fromBufferAttribute(this,n),sc.applyMatrix3(e),this.setXY(n,sc.x,sc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=xa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=En(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=xa(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=xa(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=xa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=xa(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),i=En(i,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uv&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class U1 extends At{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F1 extends At{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class tn extends At{constructor(e,n,i){super(new Float32Array(e),n,i)}}const ZR=new El,Sa=new X,vf=new X;class bl{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);const n=Sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(vf)),this.expandByPoint(Sa.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QR=0;const qn=new Bt,xf=new Sn,eo=new X,Un=new El,wa=new El,$t=new X;class Kt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LR(e)?F1:U1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return xf.lookAt(e),xf.updateMatrix(),this.applyMatrix4(xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];wa.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(Un.min,wa.min),Un.expandByPoint($t),$t.addVectors(Un.max,wa.max),Un.expandByPoint($t)):(Un.expandByPoint(wa.min),Un.expandByPoint(wa.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)$t.fromBufferAttribute(a,c),l&&(eo.fromBufferAttribute(e,c),$t.add(eo)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new X,l[y]=new X;const c=new X,d=new X,h=new X,u=new ut,p=new ut,v=new ut,x=new X,m=new X;function f(y,R,L){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,R),h.fromBufferAttribute(i,L),u.fromBufferAttribute(s,y),p.fromBufferAttribute(s,R),v.fromBufferAttribute(s,L),d.sub(c),h.sub(c),p.sub(u),v.sub(u);const P=1/(p.x*v.y-v.x*p.y);isFinite(P)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(P),a[y].add(x),a[R].add(x),a[L].add(x),l[y].add(m),l[R].add(m),l[L].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let y=0,R=g.length;y<R;++y){const L=g[y],P=L.start,U=L.count;for(let j=P,z=P+U;j<z;j+=3)f(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const _=new X,S=new X,b=new X,E=new X;function A(y){b.fromBufferAttribute(r,y),E.copy(b);const R=a[y];_.copy(R),_.sub(b.multiplyScalar(b.dot(R))).normalize(),S.crossVectors(E,R);const P=S.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,P)}for(let y=0,R=g.length;y<R;++y){const L=g[y],P=L.start,U=L.count;for(let j=P,z=P+U;j<z;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,d=new X,h=new X;if(e)for(let u=0,p=e.count;u<p;u+=3){const v=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,u=new c.constructor(l.length*d);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*d;for(let f=0;f<d;f++)u[v++]=c[p++]}return new At(u,d,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let JR=0;class ra extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=To,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Vh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==To&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zh&&(i.blendSrc=this.blendSrc),this.blendDst!==Vh&&(i.blendDst=this.blendDst),this.blendEquation!==gs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ki=new X,_f=new X,oc=new X,Ar=new X,yf=new X,ac=new X,Sf=new X;class eg{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,n),Ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_f.copy(e).add(n).multiplyScalar(.5),oc.copy(n).sub(e).normalize(),Ar.copy(this.origin).sub(_f);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oc),a=Ar.dot(this.direction),l=-Ar.dot(oc),c=Ar.lengthSq(),d=Math.abs(1-o*o);let h,u,p,v;if(d>0)if(h=o*l-a,u=o*a-l,v=s*d,h>=0)if(u>=-v)if(u<=v){const x=1/d;h*=x,u*=x,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-v?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c):u<=v?(h=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_f).addScaledVector(oc,u),p}intersectSphere(e,n){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),r=Ki.dot(Ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(a=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,n,i,r,s){yf.subVectors(n,e),ac.subVectors(i,e),Sf.crossVectors(yf,ac);let o=this.direction.dot(Sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);const l=a*this.direction.dot(ac.crossVectors(Ar,ac));if(l<0)return null;const c=a*this.direction.dot(yf.cross(Ar));if(c<0||l+c>o)return null;const d=-a*Ar.dot(Sf);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cd extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=p1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bv=new Bt,ds=new eg,lc=new bl,Tv=new X,cc=new X,uc=new X,dc=new X,wf=new X,fc=new X,Av=new X,hc=new X;class An extends Sn{constructor(e=new Kt,n=new cd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){fc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(wf.fromBufferAttribute(h,e),o?fc.addScaledVector(wf,d):fc.addScaledVector(wf.sub(n),d))}n.add(fc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),ds.copy(e.ray).recast(e.near),!(lc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(lc,Tv)===null||ds.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(bv.copy(s).invert(),ds.copy(e.ray).applyMatrix4(bv),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const m=u[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const E=a.getX(S),A=a.getX(S+1),y=a.getX(S+2);r=pc(this,f,e,i,c,d,h,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=pc(this,o,e,i,c,d,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=u.length;v<x;v++){const m=u[v],f=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const E=S,A=S+1,y=S+2;r=pc(this,f,e,i,c,d,h,E,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,f=x;m<f;m+=3){const g=m,_=m+1,S=m+2;r=pc(this,o,e,i,c,d,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function eP(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===hr,a),l===null)return null;hc.copy(a),hc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(hc);return c<n.near||c>n.far?null:{distance:c,point:hc.clone(),object:t}}function pc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,cc),t.getVertexPosition(l,uc),t.getVertexPosition(c,dc);const d=eP(t,e,n,i,cc,uc,dc,Av);if(d){const h=new X;hi.getBarycoord(Av,cc,uc,dc,h),r&&(d.uv=hi.getInterpolatedAttribute(r,a,l,c,h,new ut)),s&&(d.uv1=hi.getInterpolatedAttribute(s,a,l,c,h,new ut)),o&&(d.normal=hi.getInterpolatedAttribute(o,a,l,c,h,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new X,materialIndex:0};hi.getNormal(cc,uc,dc,u.normal),d.face=u,d.barycoord=h}return d}class tP extends yn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Qt,d=Qt,h,u){super(null,o,a,l,c,d,r,s,h,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mf=new X,nP=new X,iP=new Ge;class ms{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mf.subVectors(i,n).cross(nP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Mf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||iP.getNormalMatrix(e),r=this.coplanarPoint(Mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new bl,rP=new ut(.5,.5),mc=new X;class O1{constructor(e=new ms,n=new ms,i=new ms,r=new ms,s=new ms,o=new ms){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ii,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],h=s[5],u=s[6],p=s[7],v=s[8],x=s[9],m=s[10],f=s[11],g=s[12],_=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-o,p-d,f-v,b-g).normalize(),r[1].setComponents(c+o,p+d,f+v,b+g).normalize(),r[2].setComponents(c+a,p+h,f+x,b+_).normalize(),r[3].setComponents(c-a,p-h,f-x,b-_).normalize(),i)r[4].setComponents(l,u,m,S).normalize(),r[5].setComponents(c-l,p-u,f-m,b-S).normalize();else if(r[4].setComponents(c-l,p-u,f-m,b-S).normalize(),n===Ii)r[5].setComponents(c+l,p+u,f+m,b+S).normalize();else if(n===Cu)r[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const n=rP.distanceTo(e.center);return fs.radius=.7071067811865476+n,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class k1 extends ra{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pu=new X,Nu=new X,Cv=new Bt,Ma=new eg,gc=new bl,Ef=new X,Rv=new X;class sP extends Sn{constructor(e=new Kt,n=new k1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pu.fromBufferAttribute(n,r-1),Nu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pu.distanceTo(Nu);e.setAttribute("lineDistance",new tn(i,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(r),gc.radius+=s,e.ray.intersectsSphere(gc)===!1)return;Cv.copy(r).invert(),Ma.copy(e.ray).applyMatrix4(Cv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const f=d.getX(x),g=d.getX(x+1),_=vc(this,e,Ma,l,f,g,x);_&&n.push(_)}if(this.isLineLoop){const x=d.getX(v-1),m=d.getX(p),f=vc(this,e,Ma,l,x,m,v-1);f&&n.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const f=vc(this,e,Ma,l,x,x+1,x);f&&n.push(f)}if(this.isLineLoop){const x=vc(this,e,Ma,l,v-1,p,v-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vc(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Pu.fromBufferAttribute(a,r),Nu.fromBufferAttribute(a,s),n.distanceSqToSegment(Pu,Nu,Ef,Rv)>i)return;Ef.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Ef);if(!(c<e.near||c>e.far))return{distance:c,point:Rv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Pv=new X,Nv=new X;class B1 extends sP{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Pv.fromBufferAttribute(n,r),Nv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pv.distanceTo(Nv);e.setAttribute("lineDistance",new tn(i,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oP extends ra{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lv=new Bt,Rp=new eg,xc=new bl,_c=new X;class Pp extends Sn{constructor(e=new Kt,n=new oP){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(r),xc.radius+=s,e.ray.intersectsSphere(xc)===!1)return;Lv.copy(r).invert(),Rp.copy(e.ray).applyMatrix4(Lv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=u,x=p;v<x;v++){const m=c.getX(v);_c.fromBufferAttribute(h,m),Dv(_c,m,l,r,e,n,this)}}else{const u=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=u,x=p;v<x;v++)_c.fromBufferAttribute(h,v),Dv(_c,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Dv(t,e,n,i,r,s,o){const a=Rp.distanceSqToPoint(t);if(a<n){const l=new X;Rp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class z1 extends yn{constructor(e=[],n=Fs,i,r,s,o,a,l,c,d){super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yo extends yn{constructor(e,n,i=Hi,r,s,o,a=Qt,l=Qt,c,d=mr,h=1){if(d!==mr&&d!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:h};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class aP extends Yo{constructor(e,n=Hi,i=Fs,r,s,o=Qt,a=Qt,l,c=mr){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class V1 extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Kt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let u=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2));function v(x,m,f,g,_,S,b,E,A,y,R){const L=S/A,P=b/y,U=S/2,j=b/2,z=E/2,I=A+1,k=y+1;let O=0,D=0;const H=new X;for(let G=0;G<k;G++){const q=G*P-j;for(let te=0;te<I;te++){const he=te*L-U;H[x]=he*g,H[m]=q*_,H[f]=z,c.push(H.x,H.y,H.z),H[x]=0,H[m]=0,H[f]=E>0?1:-1,d.push(H.x,H.y,H.z),h.push(te/A),h.push(1-G/y),O+=1}}for(let G=0;G<y;G++)for(let q=0;q<A;q++){const te=u+q+I*G,he=u+q+I*(G+1),ue=u+(q+1)+I*(G+1),ve=u+(q+1)+I*G;l.push(te,he,ve),l.push(he,ue,ve),D+=6}a.addGroup(p,D,R),p+=D,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ud extends Kt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,u=n/l,p=[],v=[],x=[],m=[];for(let f=0;f<d;f++){const g=f*u-o;for(let _=0;_<c;_++){const S=_*h-s;v.push(S,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,S=g+c*(f+1),b=g+1+c*(f+1),E=g+1+c*f;p.push(_,S,E),p.push(S,b,E)}this.setIndex(p),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ud(e.width,e.height,e.widthSegments,e.heightSegments)}}class Co extends Kt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new X,u=new X,p=[],v=[],x=[],m=[];for(let f=0;f<=i;f++){const g=[],_=f/i;let S=0;f===0&&o===0?S=.5/n:f===i&&l===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const E=b/n;h.x=-e*Math.cos(r+E*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(E+S,1-_),g.push(c++)}d.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const _=d[f][g+1],S=d[f][g],b=d[f+1][g],E=d[f+1][g+1];(f!==0||o>0)&&p.push(_,S,E),(f!==i-1||l<Math.PI)&&p.push(S,b,E)}this.setIndex(p),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class tg extends Kt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],h=[],u=new X,p=new X,v=new X;for(let x=0;x<=i;x++){const m=o+x/i*a;for(let f=0;f<=r;f++){const g=f/r*s;p.x=(e+n*Math.cos(m))*Math.cos(g),p.y=(e+n*Math.cos(m))*Math.sin(g),p.z=n*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),v.subVectors(p,u).normalize(),d.push(v.x,v.y,v.z),h.push(f/r),h.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=r;m++){const f=(r+1)*x+m-1,g=(r+1)*(x-1)+m-1,_=(r+1)*(x-1)+m,S=(r+1)*x+m;l.push(f,g,S),l.push(g,_,S)}this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tg(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Iv(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Iv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=Ko(t[n]);for(const r in i)e[r]=i[r]}return e}function Iv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function lP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function H1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cP={clone:Ko,merge:mn};var uP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uP,this.fragmentShader=dP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=lP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class fP extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hP extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ER,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pP extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yc=new X,Sc=new ia,Ei=new X;class G1 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yc,Sc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Sc,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(yc,Sc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yc,Sc,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new X,Uv=new ut,Fv=new ut;class zn extends G1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Cp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cp*2*Math.atan(Math.tan(Jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Uv,Fv),n.subVectors(Fv,Uv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class W1 extends G1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=-90,no=1;class mP extends Sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(to,no,e,n);r.layers=this.layers,this.add(r);const s=new zn(to,no,e,n);s.layers=this.layers,this.add(s);const o=new zn(to,no,e,n);o.layers=this.layers,this.add(o);const a=new zn(to,no,e,n);a.layers=this.layers,this.add(a);const l=new zn(to,no,e,n);l.layers=this.layers,this.add(l);const c=new zn(to,no,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,u,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class gP extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class j1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Be("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const og=class og{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};og.prototype.isMatrix2=!0;let Ov=og;function kv(t,e,n,i){const r=vP(i);switch(n){case A1:return t*e;case R1:return t*e/r.components*r.byteLength;case qm:return t*e/r.components*r.byteLength;case Os:return t*e*2/r.components*r.byteLength;case Ym:return t*e*2/r.components*r.byteLength;case C1:return t*e*3/r.components*r.byteLength;case pi:return t*e*4/r.components*r.byteLength;case Km:return t*e*4/r.components*r.byteLength;case zc:case Vc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:case ep:return Math.max(t,16)*Math.max(e,8)/4;case Zh:case Jh:return Math.max(t,8)*Math.max(e,8)/2;case tp:case np:case rp:case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ip:case Eu:case op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sp:case wp:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ep:case bp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bu:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vP(t){switch(t){case Jn:case M1:return{byteLength:1,components:1};case dl:case E1:case pr:return{byteLength:2,components:1};case Xm:case $m:return{byteLength:2,components:4};case Hi:case jm:case Di:return{byteLength:4,components:1};case b1:case T1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wm}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function xP(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<h.length;p++){const v=h[u],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var _P=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,TP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,BP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,HP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,GP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$P=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YP="gl_FragColor = linearToOutputTexel( gl_FragColor );",KP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,QP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,d3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,F3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _N=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yN=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wN=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,RN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ON=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GN=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$N=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:_P,alphahash_pars_fragment:yP,alphamap_fragment:SP,alphamap_pars_fragment:wP,alphatest_fragment:MP,alphatest_pars_fragment:EP,aomap_fragment:bP,aomap_pars_fragment:TP,batching_pars_vertex:AP,batching_vertex:CP,begin_vertex:RP,beginnormal_vertex:PP,bsdfs:NP,iridescence_fragment:LP,bumpmap_pars_fragment:DP,clipping_planes_fragment:IP,clipping_planes_pars_fragment:UP,clipping_planes_pars_vertex:FP,clipping_planes_vertex:OP,color_fragment:kP,color_pars_fragment:BP,color_pars_vertex:zP,color_vertex:VP,common:HP,cube_uv_reflection_fragment:GP,defaultnormal_vertex:WP,displacementmap_pars_vertex:jP,displacementmap_vertex:XP,emissivemap_fragment:$P,emissivemap_pars_fragment:qP,colorspace_fragment:YP,colorspace_pars_fragment:KP,envmap_fragment:ZP,envmap_common_pars_fragment:QP,envmap_pars_fragment:JP,envmap_pars_vertex:e3,envmap_physical_pars_fragment:d3,envmap_vertex:t3,fog_vertex:n3,fog_pars_vertex:i3,fog_fragment:r3,fog_pars_fragment:s3,gradientmap_pars_fragment:o3,lightmap_pars_fragment:a3,lights_lambert_fragment:l3,lights_lambert_pars_fragment:c3,lights_pars_begin:u3,lights_toon_fragment:f3,lights_toon_pars_fragment:h3,lights_phong_fragment:p3,lights_phong_pars_fragment:m3,lights_physical_fragment:g3,lights_physical_pars_fragment:v3,lights_fragment_begin:x3,lights_fragment_maps:_3,lights_fragment_end:y3,lightprobes_pars_fragment:S3,logdepthbuf_fragment:w3,logdepthbuf_pars_fragment:M3,logdepthbuf_pars_vertex:E3,logdepthbuf_vertex:b3,map_fragment:T3,map_pars_fragment:A3,map_particle_fragment:C3,map_particle_pars_fragment:R3,metalnessmap_fragment:P3,metalnessmap_pars_fragment:N3,morphinstance_vertex:L3,morphcolor_vertex:D3,morphnormal_vertex:I3,morphtarget_pars_vertex:U3,morphtarget_vertex:F3,normal_fragment_begin:O3,normal_fragment_maps:k3,normal_pars_fragment:B3,normal_pars_vertex:z3,normal_vertex:V3,normalmap_pars_fragment:H3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:W3,clearcoat_pars_fragment:j3,iridescence_pars_fragment:X3,opaque_fragment:$3,packing:q3,premultiplied_alpha_fragment:Y3,project_vertex:K3,dithering_fragment:Z3,dithering_pars_fragment:Q3,roughnessmap_fragment:J3,roughnessmap_pars_fragment:eN,shadowmap_pars_fragment:tN,shadowmap_pars_vertex:nN,shadowmap_vertex:iN,shadowmask_pars_fragment:rN,skinbase_vertex:sN,skinning_pars_vertex:oN,skinning_vertex:aN,skinnormal_vertex:lN,specularmap_fragment:cN,specularmap_pars_fragment:uN,tonemapping_fragment:dN,tonemapping_pars_fragment:fN,transmission_fragment:hN,transmission_pars_fragment:pN,uv_pars_fragment:mN,uv_pars_vertex:gN,uv_vertex:vN,worldpos_vertex:xN,background_vert:_N,background_frag:yN,backgroundCube_vert:SN,backgroundCube_frag:wN,cube_vert:MN,cube_frag:EN,depth_vert:bN,depth_frag:TN,distance_vert:AN,distance_frag:CN,equirect_vert:RN,equirect_frag:PN,linedashed_vert:NN,linedashed_frag:LN,meshbasic_vert:DN,meshbasic_frag:IN,meshlambert_vert:UN,meshlambert_frag:FN,meshmatcap_vert:ON,meshmatcap_frag:kN,meshnormal_vert:BN,meshnormal_frag:zN,meshphong_vert:VN,meshphong_frag:HN,meshphysical_vert:GN,meshphysical_frag:WN,meshtoon_vert:jN,meshtoon_frag:XN,points_vert:$N,points_frag:qN,shadow_vert:YN,shadow_frag:KN,sprite_vert:ZN,sprite_frag:QN},we={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Pi={basic:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:mn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:mn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:mn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new lt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:mn([we.points,we.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:mn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:mn([we.common,we.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:mn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:mn([we.sprite,we.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:mn([we.common,we.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:mn([we.lights,we.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Pi.physical={uniforms:mn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const wc={r:0,b:0,g:0},JN=new Bt,$1=new Ge;$1.set(-1,0,0,0,1,0,0,0,1);function eL(t,e,n,i,r,s){const o=new lt(0);let a=r===!0?0:1,l,c,d=null,h=0,u=null;function p(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const S=g.backgroundBlurriness>0;_=e.get(_,S)}return _}function v(g){let _=!1;const S=p(g);S===null?m(o,a):S&&S.isColor&&(m(S,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(g,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===ld)?(c===void 0&&(c=new An(new Tl(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ko(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(JN.makeRotationFromEuler(_.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($1),c.material.toneMapped=Je.getTransfer(S.colorSpace)!==dt,(d!==S||h!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,u=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new An(new ud(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ko(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,u=t.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,_){g.getRGB(wc,H1(t)),n.buffers.color.setClear(wc.r,wc.g,wc.b,_,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:v,addToRenderList:x,dispose:f}}function tL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(P,U,j,z,I){let k=!1;const O=h(P,z,j,U);s!==O&&(s=O,c(s.object)),k=p(P,z,j,I),k&&v(P,z,j,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(P,U,j,z),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function h(P,U,j,z){const I=z.wireframe===!0;let k=i[U.id];k===void 0&&(k={},i[U.id]=k);const O=P.isInstancedMesh===!0?P.id:0;let D=k[O];D===void 0&&(D={},k[O]=D);let H=D[j.id];H===void 0&&(H={},D[j.id]=H);let G=H[I];return G===void 0&&(G=u(l()),H[I]=G),G}function u(P){const U=[],j=[],z=[];for(let I=0;I<n;I++)U[I]=0,j[I]=0,z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:j,attributeDivisors:z,object:P,attributes:{},index:null}}function p(P,U,j,z){const I=s.attributes,k=U.attributes;let O=0;const D=j.getAttributes();for(const H in D)if(D[H].location>=0){const q=I[H];let te=k[H];if(te===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;O++}return s.attributesNum!==O||s.index!==z}function v(P,U,j,z){const I={},k=U.attributes;let O=0;const D=j.getAttributes();for(const H in D)if(D[H].location>=0){let q=k[H];q===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(q=P.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),I[H]=te,O++}s.attributes=I,s.attributesNum=O,s.index=z}function x(){const P=s.newAttributes;for(let U=0,j=P.length;U<j;U++)P[U]=0}function m(P){f(P,0)}function f(P,U){const j=s.newAttributes,z=s.enabledAttributes,I=s.attributeDivisors;j[P]=1,z[P]===0&&(t.enableVertexAttribArray(P),z[P]=1),I[P]!==U&&(t.vertexAttribDivisor(P,U),I[P]=U)}function g(){const P=s.newAttributes,U=s.enabledAttributes;for(let j=0,z=U.length;j<z;j++)U[j]!==P[j]&&(t.disableVertexAttribArray(j),U[j]=0)}function _(P,U,j,z,I,k,O){O===!0?t.vertexAttribIPointer(P,U,j,I,k):t.vertexAttribPointer(P,U,j,z,I,k)}function S(P,U,j,z){x();const I=z.attributes,k=j.getAttributes(),O=U.defaultAttributeValues;for(const D in k){const H=k[D];if(H.location>=0){let G=I[D];if(G===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const q=G.normalized,te=G.itemSize,he=e.get(G);if(he===void 0)continue;const ue=he.buffer,ve=he.type,$=he.bytesPerElement,se=ve===t.INT||ve===t.UNSIGNED_INT||G.gpuType===jm;if(G.isInterleavedBufferAttribute){const oe=G.data,Re=oe.stride,Oe=G.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<H.locationSize;Ue++)f(H.location+Ue,oe.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<H.locationSize;Ue++)m(H.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let Ue=0;Ue<H.locationSize;Ue++)_(H.location+Ue,te/H.locationSize,ve,q,Re*$,(Oe+te/H.locationSize*Ue)*$,se)}else{if(G.isInstancedBufferAttribute){for(let oe=0;oe<H.locationSize;oe++)f(H.location+oe,G.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let oe=0;oe<H.locationSize;oe++)m(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,ue);for(let oe=0;oe<H.locationSize;oe++)_(H.location+oe,te/H.locationSize,ve,q,te*$,te/H.locationSize*oe*$,se)}}else if(O!==void 0){const q=O[D];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(H.location,q);break;case 3:t.vertexAttrib3fv(H.location,q);break;case 4:t.vertexAttrib4fv(H.location,q);break;default:t.vertexAttrib1fv(H.location,q)}}}}g()}function b(){R();for(const P in i){const U=i[P];for(const j in U){const z=U[j];for(const I in z){const k=z[I];for(const O in k)d(k[O].object),delete k[O];delete z[I]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const j in U){const z=U[j];for(const I in z){const k=z[I];for(const O in k)d(k[O].object),delete k[O];delete z[I]}}delete i[P.id]}function A(P){for(const U in i){const j=i[U];for(const z in j){const I=j[z];if(I[P.id]===void 0)continue;const k=I[P.id];for(const O in k)d(k[O].object),delete k[O];delete I[P.id]}}}function y(P){for(const U in i){const j=i[U],z=P.isInstancedMesh===!0?P.id:0,I=j[z];if(I!==void 0){for(const k in I){const O=I[k];for(const D in O)d(O[D].object),delete O[D];delete I[k]}delete j[z],Object.keys(j).length===0&&delete i[U]}}}function R(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:L,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function nL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,d){d!==0&&(t.drawArraysInstanced(i,l,c,d),n.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function iL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==pi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const y=A===pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Jn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,maxSamples:b,samples:E}}function rL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ms,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||i!==0||r;return r=u,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){n=d(h,u,0)},this.setState=function(h,u,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,_=g*4;let S=f.clippingState||null;l.value=S,S=d(v,u,_,p);for(let b=0;b!==_;++b)S[b]=n[b];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,u,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const f=p+x*4,g=u.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,S=p;_!==x;++_,S+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Gr=4,Bv=[.125,.215,.35,.446,.526,.582],vs=20,sL=256,Ea=new W1,zv=new lt;let bf=null,Tf=0,Af=0,Cf=!1;const oL=new X;class Vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=oL}=s;bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Tf,Af),this._renderer.xr.enabled=Cf,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Fs||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Af=this._renderer.getActiveMipmapLevel(),Cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pr,format:pi,colorSpace:Tu,depthBuffer:!1},r=Hv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hv(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aL(s)),this._blurMaterial=cL(s,e,n),this._ggxMaterial=lL(s,e,n)}return r}_compileMaterial(e){const n=new An(new Kt,e);this._renderer.compile(n,Ea)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(zv),h.toneMapping=Oi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new An(new Tl,new cd({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,f=!0):(m.color.copy(zv),f=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const b=this._cubeSize;io(r,S*b,_>2?b:0,b,b),h.setRenderTarget(r),f&&h.render(x,l),h.render(e,l)}h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Fs||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;io(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),u=0+c*1.25,p=h*u,{_lodMax:v}=this,x=this._sizeLods[i],m=3*x*(i>v-Gr?i-v+Gr:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,io(s,m,f,3*x,2*x),r.setRenderTarget(s),r.render(a,Ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,io(e,m,f,3*x,2*x),r.setRenderTarget(e),r.render(a,Ea)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vs-1),x=s/v,m=isFinite(s)?1+Math.floor(d*x):vs;m>vs&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const f=[];let g=0;for(let A=0;A<vs;++A){const y=A/x,R=Math.exp(-y*y/2);f.push(R),A===0?g+=R:A<m&&(g+=2*R)}for(let A=0;A<f.length;A++)f[A]=f[A]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=v,u.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-Gr?r-_+Gr:0),E=4*(this._cubeSize-S);io(n,b,E,3*S,2*S),l.setRenderTarget(n),l.render(h,Ea)}}function aL(t){const e=[],n=[],i=[];let r=t;const s=t-Gr+1+Bv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Gr?l=Bv[o-t+Gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,x=3,m=2,f=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(f*v*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,y=E>2?0:-1,R=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];g.set(R,x*v*E),_.set(u,m*v*E);const L=[E,E,E,E,E,E];S.set(L,f*v*E)}const b=new Kt;b.setAttribute("position",new At(g,x)),b.setAttribute("uv",new At(_,m)),b.setAttribute("faceIndex",new At(S,f)),i.push(new An(b,null)),r>Gr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Hv(t,e,n){const i=new ki(t,e,n);return i.texture.mapping=ld,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function io(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lL(t,e,n){return new Jt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function cL(t,e,n){const i=new Float32Array(vs),r=new X(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Gv(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Wv(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class q1 extends ki{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new z1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tl(5,5,5),s=new Jt({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:sr});s.uniforms.tEquirect.value=n;const o=new An(r,s),a=n.minFilter;return n.minFilter===Ss&&(n.minFilter=fn),new mP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function uL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Kd||p===Zd)if(e.has(u)){const v=e.get(u).texture;return a(v,u.mapping)}else{const v=u.image;if(v&&v.height>0){const x=new q1(v.height);return x.fromEquirectangularTexture(t,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,v=p===Kd||p===Zd,x=p===Fs||p===qo;if(v||x){let m=n.get(u);const f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Vv(t)),m=v?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const g=u.image;return v&&g&&g.height>0||x&&g&&l(g)?(i===null&&(i=new Vv(t)),m=v?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===Kd?u.mapping=Fs:p===Zd&&(u.mapping=qo),u}function l(u){let p=0;const v=6;for(let x=0;x<v;x++)u[x]!==void 0&&p++;return p===v}function c(u){const p=u.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function dL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ap("WebGLRenderer: "+i+" extension not supported."),r}}}function fL(t,e,n,i){const r={},s=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const v in u.attributes)e.remove(u.attributes[v]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(h){const u=h.attributes;for(const p in u)e.update(u[p],t.ARRAY_BUFFER)}function c(h){const u=[],p=h.index,v=h.attributes.position;let x=0;if(v===void 0)return;if(p!==null){const g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){const b=g[_+0],E=g[_+1],A=g[_+2];u.push(b,E,E,A,A,b)}}else{const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const b=_+0,E=_+1,A=_+2;u.push(b,E,E,A,A,b)}}const m=new(v.count>=65535?F1:U1)(u,1);m.version=x;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function d(h){const u=s.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function hL(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){t.drawElements(i,u,s,h*o),n.update(u,i,1)}function c(h,u,p){p!==0&&(t.drawElementsInstanced(i,u,s,h*o,p),n.update(u,i,p))}function d(h,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,h,0,p);let x=0;for(let m=0;m<p;m++)x+=u[m];n.update(x,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function pL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mL(t,e,n){const i=new WeakMap,r=new kt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==h){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;u!==void 0&&u.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*h),y=new N1(A,b,E,h);y.type=Di,y.needsUpdate=!0;const R=S*4;for(let P=0;P<h;P++){const U=f[P],j=g[P],z=_[P],I=b*E*4*P;for(let k=0;k<U.count;k++){const O=k*R;v===!0&&(r.fromBufferAttribute(U,k),A[I+O+0]=r.x,A[I+O+1]=r.y,A[I+O+2]=r.z,A[I+O+3]=0),x===!0&&(r.fromBufferAttribute(j,k),A[I+O+4]=r.x,A[I+O+5]=r.y,A[I+O+6]=r.z,A[I+O+7]=0),m===!0&&(r.fromBufferAttribute(z,k),A[I+O+8]=r.x,A[I+O+9]=r.y,A[I+O+10]=r.z,A[I+O+11]=z.itemSize===4?r.w:1)}}u={count:h,texture:y,size:new ut(b,E)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function gL(t,e,n,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:a}}const vL={[m1]:"LINEAR_TONE_MAPPING",[g1]:"REINHARD_TONE_MAPPING",[v1]:"CINEON_TONE_MAPPING",[x1]:"ACES_FILMIC_TONE_MAPPING",[y1]:"AGX_TONE_MAPPING",[S1]:"NEUTRAL_TONE_MAPPING",[_1]:"CUSTOM_TONE_MAPPING"};function xL(t,e,n,i,r){const s=new ki(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Yo(e,n):void 0}),o=new ki(e,n,{type:pr,depthBuffer:!1,stencilBuffer:!1}),a=new Kt;a.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new fP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new An(a,l),d=new W1(-1,1,1,-1,0,1);let h=null,u=null,p=!1,v,x=null,m=[],f=!1;this.setSize=function(g,_){s.setSize(g,_),o.setSize(g,_);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(g,_)}},this.setEffects=function(g){m=g,f=m.length>0&&m[0].isRenderPass===!0;const _=s.width,S=s.height;for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(_,S)}},this.begin=function(g,_){if(p||g.toneMapping===Oi&&m.length===0)return!1;if(x=_,_!==null){const S=_.width,b=_.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return f===!1&&g.setRenderTarget(s),v=g.toneMapping,g.toneMapping=Oi,!0},this.hasRenderPass=function(){return f},this.end=function(g,_){g.toneMapping=v,p=!0;let S=s,b=o;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(g,b,S,_),A.needsSwap!==!1)){const y=S;S=b,b=y}}if(h!==g.outputColorSpace||u!==g.toneMapping){h=g.outputColorSpace,u=g.toneMapping,l.defines={},Je.getTransfer(h)===dt&&(l.defines.SRGB_TRANSFER="");const E=vL[u];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(x),g.render(c,d),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Y1=new yn,Np=new Yo(1,1),K1=new N1,Z1=new HR,Q1=new z1,jv=[],Xv=[],$v=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=jv[r];if(s===void 0&&(s=new Float32Array(r),jv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fd(t,e){let n=Xv[e];n===void 0&&(n=new Int32Array(e),Xv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _L(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function SL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function wL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function ML(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;Yv.set(i),t.uniformMatrix2fv(this.addr,!1,Yv),Xt(n,i)}}function EL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;qv.set(i),t.uniformMatrix3fv(this.addr,!1,qv),Xt(n,i)}}function bL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(jt(n,i))return;$v.set(i),t.uniformMatrix4fv(this.addr,!1,$v),Xt(n,i)}}function TL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function CL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function RL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function PL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function NL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function LL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function DL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function IL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Np.compareFunction=n.isReversedDepthBuffer()?Qm:Zm,s=Np):s=Y1,n.setTexture2D(e||s,r)}function UL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Z1,r)}function FL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q1,r)}function OL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||K1,r)}function kL(t){switch(t){case 5126:return _L;case 35664:return yL;case 35665:return SL;case 35666:return wL;case 35674:return ML;case 35675:return EL;case 35676:return bL;case 5124:case 35670:return TL;case 35667:case 35671:return AL;case 35668:case 35672:return CL;case 35669:case 35673:return RL;case 5125:return PL;case 36294:return NL;case 36295:return LL;case 36296:return DL;case 35678:case 36198:case 36298:case 36306:case 35682:return IL;case 35679:case 36299:case 36307:return UL;case 35680:case 36300:case 36308:case 36293:return FL;case 36289:case 36303:case 36311:case 36292:return OL}}function BL(t,e){t.uniform1fv(this.addr,e)}function zL(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function VL(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function HL(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function GL(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WL(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jL(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XL(t,e){t.uniform1iv(this.addr,e)}function $L(t,e){t.uniform2iv(this.addr,e)}function qL(t,e){t.uniform3iv(this.addr,e)}function YL(t,e){t.uniform4iv(this.addr,e)}function KL(t,e){t.uniform1uiv(this.addr,e)}function ZL(t,e){t.uniform2uiv(this.addr,e)}function QL(t,e){t.uniform3uiv(this.addr,e)}function JL(t,e){t.uniform4uiv(this.addr,e)}function eD(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Np:o=Y1;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function tD(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Z1,s[o])}function nD(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Q1,s[o])}function iD(t,e,n){const i=this.cache,r=e.length,s=fd(n,r);jt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||K1,s[o])}function rD(t){switch(t){case 5126:return BL;case 35664:return zL;case 35665:return VL;case 35666:return HL;case 35674:return GL;case 35675:return WL;case 35676:return jL;case 5124:case 35670:return XL;case 35667:case 35671:return $L;case 35668:case 35672:return qL;case 35669:case 35673:return YL;case 5125:return KL;case 36294:return ZL;case 36295:return QL;case 36296:return JL;case 35678:case 36198:case 36298:case 36306:case 35682:return eD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}class sD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kL(n.type)}}class oD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rD(n.type)}}class aD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Rf=/(\w+)(\])?(\[|\.)?/g;function Kv(t,e){t.seq.push(e),t.map[e.id]=e}function lD(t,e,n){const i=t.name,r=i.length;for(Rf.lastIndex=0;;){const s=Rf.exec(i),o=Rf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kv(n,c===void 0?new sD(a,t,e):new oD(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new aD(a),Kv(n,h)),n=h}}}class Wc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);lD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Zv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cD=37297;let uD=0;function dD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Qv=new Ge;function fD(t){Je._getMatrix(Qv,Je.workingColorSpace,t);const e=`mat3( ${Qv.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Au:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+dD(t.getShaderSource(e),a)}else return s}function hD(t,e){const n=fD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pD={[m1]:"Linear",[g1]:"Reinhard",[v1]:"Cineon",[x1]:"ACESFilmic",[y1]:"AgX",[S1]:"Neutral",[_1]:"Custom"};function mD(t,e){const n=pD[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Mc=new X;function gD(){Je.getLuminanceCoefficients(Mc);const t=Mc.x.toFixed(4),e=Mc.y.toFixed(4),n=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function xD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _D(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function La(t){return t!==""}function ex(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(t){return t.replace(yD,wD)}const SD=new Map;function wD(t,e){let n=qe[e];if(n===void 0){const i=SD.get(e);if(i!==void 0)n=qe[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lp(n)}const MD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(t){return t.replace(MD,ED)}function ED(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ix(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bD={[Bc]:"SHADOWMAP_TYPE_PCF",[Pa]:"SHADOWMAP_TYPE_VSM"};function TD(t){return bD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AD={[Fs]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE",[ld]:"ENVMAP_TYPE_CUBE_UV"};function CD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":AD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RD={[qo]:"ENVMAP_MODE_REFRACTION"};function PD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ND={[p1]:"ENVMAP_BLENDING_MULTIPLY",[SR]:"ENVMAP_BLENDING_MIX",[wR]:"ENVMAP_BLENDING_ADD"};function LD(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ND[t.combine]||"ENVMAP_BLENDING_NONE"}function DD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ID(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TD(n),c=CD(n),d=PD(n),h=LD(n),u=DD(n),p=vD(n),v=xD(s),x=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(La).join(`
`),f.length>0&&(f+=`
`)):(m=[ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),f=[ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?qe.tonemapping_pars_fragment:"",n.toneMapping!==Oi?mD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,hD("linearToOutputTexel",n.outputColorSpace),gD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(La).join(`
`)),o=Lp(o),o=ex(o,n),o=tx(o,n),a=Lp(a),a=ex(a,n),a=tx(a,n),o=nx(o),a=nx(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+m+o,S=g+f+a,b=Zv(r,r.VERTEX_SHADER,_),E=Zv(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",j=r.getShaderInfoLog(b)||"",z=r.getShaderInfoLog(E)||"",I=U.trim(),k=j.trim(),O=z.trim();let D=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,E);else{const G=Jv(r,b,"vertex"),q=Jv(r,E,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+G+`
`+q)}else I!==""?Be("WebGLProgram: Program Info Log:",I):(k===""||O==="")&&(H=!1);H&&(P.diagnostics={runnable:D,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:f}})}r.deleteShader(b),r.deleteShader(E),y=new Wc(r,x),R=_D(r,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,cD)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uD++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}let UD=0;class FD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OD(e),n.set(e,i)),i}}class OD{constructor(e){this.id=UD++,this.code=e,this.usedTimes=0}}function kD(t){return t===Os||t===Eu||t===bu}function BD(t,e,n,i,r,s){const o=new L1,a=new FD,l=new Set,c=[],d=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,R,L,P,U,j){const z=P.fog,I=U.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,D=e.get(y.envMap||k,O),H=D&&D.mapping===ld?D.image.height:null,G=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Be("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,te=q!==void 0?q.length:0;let he=0;I.morphAttributes.position!==void 0&&(he=1),I.morphAttributes.normal!==void 0&&(he=2),I.morphAttributes.color!==void 0&&(he=3);let ue,ve,$,se;if(G){const We=Pi[G];ue=We.vertexShader,ve=We.fragmentShader}else ue=y.vertexShader,ve=y.fragmentShader,a.update(y),$=a.getVertexShaderID(y),se=a.getFragmentShaderID(y);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Oe=U.isInstancedMesh===!0,Ue=U.isBatchedMesh===!0,tt=!!y.map,ze=!!y.matcap,Ke=!!D,Ve=!!y.aoMap,ke=!!y.lightMap,bt=!!y.bumpMap,mt=!!y.normalMap,ot=!!y.displacementMap,B=!!y.emissiveMap,Dt=!!y.metalnessMap,Ze=!!y.roughnessMap,at=y.anisotropy>0,_e=y.clearcoat>0,yt=y.dispersion>0,C=y.iridescence>0,M=y.sheen>0,W=y.transmission>0,ee=at&&!!y.anisotropyMap,ae=_e&&!!y.clearcoatMap,fe=_e&&!!y.clearcoatNormalMap,pe=_e&&!!y.clearcoatRoughnessMap,Q=C&&!!y.iridescenceMap,ie=C&&!!y.iridescenceThicknessMap,ye=M&&!!y.sheenColorMap,Se=M&&!!y.sheenRoughnessMap,me=!!y.specularMap,J=!!y.specularColorMap,be=!!y.specularIntensityMap,Ae=W&&!!y.transmissionMap,He=W&&!!y.thicknessMap,F=!!y.gradientMap,de=!!y.alphaMap,ne=y.alphaTest>0,Te=!!y.alphaHash,ge=!!y.extensions;let le=Oi;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(le=t.toneMapping);const De={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:ue,fragmentShader:ve,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ue,batchingColor:Ue&&U._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&U.instanceColor!==null,instancingMorph:Oe&&U.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:ze,envMap:Ke,envMapMode:Ke&&D.mapping,envMapCubeUVHeight:H,aoMap:Ve,lightMap:ke,bumpMap:bt,normalMap:mt,displacementMap:ot,emissiveMap:B,normalMapObjectSpace:mt&&y.normalMapType===bR,normalMapTangentSpace:mt&&y.normalMapType===lv,packedNormalMap:mt&&y.normalMapType===lv&&kD(y.normalMap.format),metalnessMap:Dt,roughnessMap:Ze,anisotropy:at,anisotropyMap:ee,clearcoat:_e,clearcoatMap:ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:pe,dispersion:yt,iridescence:C,iridescenceMap:Q,iridescenceThicknessMap:ie,sheen:M,sheenColorMap:ye,sheenRoughnessMap:Se,specularMap:me,specularColorMap:J,specularIntensityMap:be,transmission:W,transmissionMap:Ae,thicknessMap:He,gradientMap:F,opaque:y.transparent===!1&&y.blending===To&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ne,alphaHash:Te,combine:y.combine,mapUv:tt&&v(y.map.channel),aoMapUv:Ve&&v(y.aoMap.channel),lightMapUv:ke&&v(y.lightMap.channel),bumpMapUv:bt&&v(y.bumpMap.channel),normalMapUv:mt&&v(y.normalMap.channel),displacementMapUv:ot&&v(y.displacementMap.channel),emissiveMapUv:B&&v(y.emissiveMap.channel),metalnessMapUv:Dt&&v(y.metalnessMap.channel),roughnessMapUv:Ze&&v(y.roughnessMap.channel),anisotropyMapUv:ee&&v(y.anisotropyMap.channel),clearcoatMapUv:ae&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(y.sheenRoughnessMap.channel),specularMapUv:me&&v(y.specularMap.channel),specularColorMapUv:J&&v(y.specularColorMap.channel),specularIntensityMapUv:be&&v(y.specularIntensityMap.channel),transmissionMapUv:Ae&&v(y.transmissionMap.channel),thicknessMapUv:He&&v(y.thicknessMap.channel),alphaMapUv:de&&v(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(mt||at),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(tt||de),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&mt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:B&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===er,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function m(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)R.push(L),R.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(f(R,y),g(R,y),R.push(t.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function f(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function g(y,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function _(y){const R=p[y.type];let L;if(R){const P=Pi[R];L=cP.clone(P.uniforms)}else L=y.uniforms;return L}function S(y,R){let L=d.get(R);return L!==void 0?++L.usedTimes:(L=new ID(t,R,y,r),c.push(L),d.set(R,L)),L}function b(y){if(--y.usedTimes===0){const R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:_,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:A}}function zD(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function VD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function rx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function sx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,v,x,m,f){let g=t[e];return g===void 0?(g={id:u.id,object:u,geometry:p,material:v,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},t[e]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=v,g.materialVariant=o(u),g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=m,g.group=f),e++,g}function l(u,p,v,x,m,f){const g=a(u,p,v,x,m,f);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function c(u,p,v,x,m,f){const g=a(u,p,v,x,m,f);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function d(u,p){n.length>1&&n.sort(u||VD),i.length>1&&i.sort(p||rx),r.length>1&&r.sort(p||rx)}function h(){for(let u=e,p=t.length;u<p;u++){const v=t[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:d}}function HD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new sx,t.set(i,[o])):r>=s.length?(o=new sx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function GD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new lt};break;case"SpotLight":n={position:new X,direction:new X,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function WD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jD=0;function XD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $D(t){const e=new GD,n=WD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Bt,o=new Bt;function a(c){let d=0,h=0,u=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let p=0,v=0,x=0,m=0,f=0,g=0,_=0,S=0,b=0,E=0,A=0;c.sort(XD);for(let R=0,L=c.length;R<L;R++){const P=c[R],U=P.color,j=P.intensity,z=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Os?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=U.r*j,h+=U.g*j,u+=U.b*j;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],j);A++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(U).multiplyScalar(j),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[x]=k;const O=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,O.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[x]=O.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=I,S++}x++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(U).multiplyScalar(j),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const O=P.shadow,D=n.get(P);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,i.pointShadow[v]=D,i.pointShadowMap[v]=I,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=k,v++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(j),k.groundColor.copy(P.groundColor).multiplyScalar(j),i.hemi[f]=k,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==p||y.pointLength!==v||y.spotLength!==x||y.rectAreaLength!==m||y.hemiLength!==f||y.numDirectionalShadows!==g||y.numPointShadows!==_||y.numSpotShadows!==S||y.numSpotMaps!==b||y.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,y.directionalLength=p,y.pointLength=v,y.spotLength=x,y.rectAreaLength=m,y.hemiLength=f,y.numDirectionalShadows=g,y.numPointShadows=_,y.numSpotShadows=S,y.numSpotMaps=b,y.numLightProbes=A,i.version=jD++)}function l(c,d){let h=0,u=0,p=0,v=0,x=0;const m=d.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function ox(t){const e=new $D(t),n=[],i=[],r=[];function s(u){h.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function d(u){e.setupView(n,u)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function qD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ox(t),e.set(r,[a])):s>=o.length?(a=new ox(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const YD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZD=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],QD=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],ax=new Bt,ba=new X,Pf=new X;function JD(t,e,n){let i=new O1;const r=new ut,s=new ut,o=new kt,a=new hP,l=new pP,c={},d=n.maxTextureSize,h={[hr]:hn,[hn]:hr,[er]:er},u=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:YD,fragmentShader:KD}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new Kt;v.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new An(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let f=this.type;this.render=function(E,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===nR&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const R=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),U=t.state;U.setBlending(sr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const j=f!==this.type;j&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(I=>I.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,I=E.length;z<I;z++){const k=E[z],O=k.shadow;if(O===void 0){Be("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const D=O.getFrameExtents();r.multiply(D),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/D.x),r.x=s.x*D.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/D.y),r.y=s.y*D.y,O.mapSize.y=s.y));const H=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||j===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Pa){if(k.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ki(r.x,r.y,{format:Os,type:pr,minFilter:fn,magFilter:fn,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new Yo(r.x,r.y,Di),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=mr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt}else k.isPointLight?(O.map=new q1(r.x),O.map.depthTexture=new aP(r.x,Hi)):(O.map=new ki(r.x,r.y),O.map.depthTexture=new Yo(r.x,r.y,Hi)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=mr,this.type===Bc?(O.map.depthTexture.compareFunction=H?Qm:Zm,O.map.depthTexture.minFilter=fn,O.map.depthTexture.magFilter=fn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Qt,O.map.depthTexture.magFilter=Qt);O.camera.updateProjectionMatrix()}const G=O.map.isWebGLCubeRenderTarget?6:1;for(let q=0;q<G;q++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,q),t.clear();else{q===0&&(t.setRenderTarget(O.map),t.clear());const te=O.getViewport(q);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),U.viewport(o)}if(k.isPointLight){const te=O.camera,he=O.matrix,ue=k.distance||te.far;ue!==te.far&&(te.far=ue,te.updateProjectionMatrix()),ba.setFromMatrixPosition(k.matrixWorld),te.position.copy(ba),Pf.copy(te.position),Pf.add(ZD[q]),te.up.copy(QD[q]),te.lookAt(Pf),te.updateMatrixWorld(),he.makeTranslation(-ba.x,-ba.y,-ba.z),ax.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ax,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(k);i=O.getFrustum(),S(A,y,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===Pa&&g(O,y),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(R,L,P)};function g(E,A){const y=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ki(r.x,r.y,{format:Os,type:pr})),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(A,null,y,u,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(A,null,y,p,x,null)}function _(E,A,y,R){let L=null;const P=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)L=P;else if(L=y.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=L.uuid,j=A.uuid;let z=c[U];z===void 0&&(z={},c[U]=z);let I=z[j];I===void 0&&(I=L.clone(),z[j]=I,A.addEventListener("dispose",b)),L=I}if(L.visible=A.visible,L.wireframe=A.wireframe,R===Pa?L.side=A.shadowSide!==null?A.shadowSide:A.side:L.side=A.shadowSide!==null?A.shadowSide:h[A.side],L.alphaMap=A.alphaMap,L.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,L.map=A.map,L.clipShadows=A.clipShadows,L.clippingPlanes=A.clippingPlanes,L.clipIntersection=A.clipIntersection,L.displacementMap=A.displacementMap,L.displacementScale=A.displacementScale,L.displacementBias=A.displacementBias,L.wireframeLinewidth=A.wireframeLinewidth,L.linewidth=A.linewidth,y.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=t.properties.get(L);U.light=y}return L}function S(E,A,y,R,L){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Pa)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const j=e.update(E),z=E.material;if(Array.isArray(z)){const I=j.groups;for(let k=0,O=I.length;k<O;k++){const D=I[k],H=z[D.materialIndex];if(H&&H.visible){const G=_(E,H,R,L);E.onBeforeShadow(t,E,A,y,j,G,D),t.renderBufferDirect(y,null,j,G,E,D),E.onAfterShadow(t,E,A,y,j,G,D)}}}else if(z.visible){const I=_(E,z,R,L);E.onBeforeShadow(t,E,A,y,j,I,null),t.renderBufferDirect(y,null,j,I,E,null),E.onAfterShadow(t,E,A,y,j,I,null)}}const U=E.children;for(let j=0,z=U.length;j<z;j++)S(U[j],A,y,R,L)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const R=c[y],L=E.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function eI(t,e){function n(){let F=!1;const de=new kt;let ne=null;const Te=new kt(0,0,0,0);return{setMask:function(ge){ne!==ge&&!F&&(t.colorMask(ge,ge,ge,ge),ne=ge)},setLocked:function(ge){F=ge},setClear:function(ge,le,De,We,It){It===!0&&(ge*=We,le*=We,De*=We),de.set(ge,le,De,We),Te.equals(de)===!1&&(t.clearColor(ge,le,De,We),Te.copy(de))},reset:function(){F=!1,ne=null,Te.set(-1,0,0,0)}}}function i(){let F=!1,de=!1,ne=null,Te=null,ge=null;return{setReversed:function(le){if(de!==le){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),de=le;const We=ge;ge=null,this.setClear(We)}},getReversed:function(){return de},setTest:function(le){le?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(le){ne!==le&&!F&&(t.depthMask(le),ne=le)},setFunc:function(le){if(de&&(le=UR[le]),Te!==le){switch(le){case Hh:t.depthFunc(t.NEVER);break;case Gh:t.depthFunc(t.ALWAYS);break;case Wh:t.depthFunc(t.LESS);break;case $o:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Xh:t.depthFunc(t.GEQUAL);break;case $h:t.depthFunc(t.GREATER);break;case qh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Te=le}},setLocked:function(le){F=le},setClear:function(le){ge!==le&&(ge=le,de&&(le=1-le),t.clearDepth(le))},reset:function(){F=!1,ne=null,Te=null,ge=null,de=!1}}}function r(){let F=!1,de=null,ne=null,Te=null,ge=null,le=null,De=null,We=null,It=null;return{setTest:function(ht){F||(ht?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(ht){de!==ht&&!F&&(t.stencilMask(ht),de=ht)},setFunc:function(ht,Wi,Si){(ne!==ht||Te!==Wi||ge!==Si)&&(t.stencilFunc(ht,Wi,Si),ne=ht,Te=Wi,ge=Si)},setOp:function(ht,Wi,Si){(le!==ht||De!==Wi||We!==Si)&&(t.stencilOp(ht,Wi,Si),le=ht,De=Wi,We=Si)},setLocked:function(ht){F=ht},setClear:function(ht){It!==ht&&(t.clearStencil(ht),It=ht)},reset:function(){F=!1,de=null,ne=null,Te=null,ge=null,le=null,De=null,We=null,It=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},h={},u={},p=new WeakMap,v=[],x=null,m=!1,f=null,g=null,_=null,S=null,b=null,E=null,A=null,y=new lt(0,0,0),R=0,L=!1,P=null,U=null,j=null,z=null,I=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,D=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=D>=1):H.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=D>=2);let G=null,q={};const te=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),ue=new kt().fromArray(te),ve=new kt().fromArray(he);function $(F,de,ne,Te){const ge=new Uint8Array(4),le=t.createTexture();t.bindTexture(F,le),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<ne;De++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(de+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return le}const se={};se[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc($o),bt(!1),mt(sv),oe(t.CULL_FACE),Ve(sr);function oe(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function Re(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Oe(F,de){return u[F]!==de?(t.bindFramebuffer(F,de),u[F]=de,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(F,de){let ne=v,Te=!1;if(F){ne=p.get(de),ne===void 0&&(ne=[],p.set(de,ne));const ge=F.textures;if(ne.length!==ge.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let le=0,De=ge.length;le<De;le++)ne[le]=t.COLOR_ATTACHMENT0+le;ne.length=ge.length,Te=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,Te=!0);Te&&t.drawBuffers(ne)}function tt(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const ze={[gs]:t.FUNC_ADD,[rR]:t.FUNC_SUBTRACT,[sR]:t.FUNC_REVERSE_SUBTRACT};ze[oR]=t.MIN,ze[aR]=t.MAX;const Ke={[lR]:t.ZERO,[cR]:t.ONE,[uR]:t.SRC_COLOR,[zh]:t.SRC_ALPHA,[gR]:t.SRC_ALPHA_SATURATE,[pR]:t.DST_COLOR,[fR]:t.DST_ALPHA,[dR]:t.ONE_MINUS_SRC_COLOR,[Vh]:t.ONE_MINUS_SRC_ALPHA,[mR]:t.ONE_MINUS_DST_COLOR,[hR]:t.ONE_MINUS_DST_ALPHA,[vR]:t.CONSTANT_COLOR,[xR]:t.ONE_MINUS_CONSTANT_COLOR,[_R]:t.CONSTANT_ALPHA,[yR]:t.ONE_MINUS_CONSTANT_ALPHA};function Ve(F,de,ne,Te,ge,le,De,We,It,ht){if(F===sr){m===!0&&(Re(t.BLEND),m=!1);return}if(m===!1&&(oe(t.BLEND),m=!0),F!==iR){if(F!==f||ht!==L){if((g!==gs||b!==gs)&&(t.blendEquation(t.FUNC_ADD),g=gs,b=gs),ht)switch(F){case To:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Li:t.blendFunc(t.ONE,t.ONE);break;case ov:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case av:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",F);break}else switch(F){case To:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Li:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ov:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",F);break}_=null,S=null,E=null,A=null,y.set(0,0,0),R=0,f=F,L=ht}return}ge=ge||de,le=le||ne,De=De||Te,(de!==g||ge!==b)&&(t.blendEquationSeparate(ze[de],ze[ge]),g=de,b=ge),(ne!==_||Te!==S||le!==E||De!==A)&&(t.blendFuncSeparate(Ke[ne],Ke[Te],Ke[le],Ke[De]),_=ne,S=Te,E=le,A=De),(We.equals(y)===!1||It!==R)&&(t.blendColor(We.r,We.g,We.b,It),y.copy(We),R=It),f=F,L=!1}function ke(F,de){F.side===er?Re(t.CULL_FACE):oe(t.CULL_FACE);let ne=F.side===hn;de&&(ne=!ne),bt(ne),F.blending===To&&F.transparent===!1?Ve(sr):Ve(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Te=F.stencilWrite;a.setTest(Te),Te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),B(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function bt(F){P!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),P=F)}function mt(F){F!==eR?(oe(t.CULL_FACE),F!==U&&(F===sv?t.cullFace(t.BACK):F===tR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),U=F}function ot(F){F!==j&&(O&&t.lineWidth(F),j=F)}function B(F,de,ne){F?(oe(t.POLYGON_OFFSET_FILL),(z!==de||I!==ne)&&(z=de,I=ne,o.getReversed()&&(de=-de),t.polygonOffset(de,ne))):Re(t.POLYGON_OFFSET_FILL)}function Dt(F){F?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=t.TEXTURE0+k-1),G!==F&&(t.activeTexture(F),G=F)}function at(F,de,ne){ne===void 0&&(G===null?ne=t.TEXTURE0+k-1:ne=G);let Te=q[ne];Te===void 0&&(Te={type:void 0,texture:void 0},q[ne]=Te),(Te.type!==F||Te.texture!==de)&&(G!==ne&&(t.activeTexture(ne),G=ne),t.bindTexture(F,de||se[F]),Te.type=F,Te.texture=de)}function _e(){const F=q[G];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function yt(){try{t.compressedTexImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function W(){try{t.texSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ae(){try{t.compressedTexSubImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function fe(){try{t.texStorage2D(...arguments)}catch(F){it("WebGLState:",F)}}function pe(){try{t.texStorage3D(...arguments)}catch(F){it("WebGLState:",F)}}function Q(){try{t.texImage2D(...arguments)}catch(F){it("WebGLState:",F)}}function ie(){try{t.texImage3D(...arguments)}catch(F){it("WebGLState:",F)}}function ye(F){return h[F]!==void 0?h[F]:t.getParameter(F)}function Se(F,de){h[F]!==de&&(t.pixelStorei(F,de),h[F]=de)}function me(F){ue.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function J(F){ve.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),ve.copy(F))}function be(F,de){let ne=c.get(de);ne===void 0&&(ne=new WeakMap,c.set(de,ne));let Te=ne.get(F);Te===void 0&&(Te=t.getUniformBlockIndex(de,F.name),ne.set(F,Te))}function Ae(F,de){const Te=c.get(de).get(F);l.get(de)!==Te&&(t.uniformBlockBinding(de,Te,F.__bindingPointIndex),l.set(de,Te))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},h={},G=null,q={},u={},p=new WeakMap,v=[],x=null,m=!1,f=null,g=null,_=null,S=null,b=null,E=null,A=null,y=new lt(0,0,0),R=0,L=!1,P=null,U=null,j=null,z=null,I=null,ue.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:Oe,drawBuffers:Ue,useProgram:tt,setBlending:Ve,setMaterial:ke,setFlipSided:bt,setCullFace:mt,setLineWidth:ot,setPolygonOffset:B,setScissorTest:Dt,activeTexture:Ze,bindTexture:at,unbindTexture:_e,compressedTexImage2D:yt,compressedTexImage3D:C,texImage2D:Q,texImage3D:ie,pixelStorei:Se,getParameter:ye,updateUBOMapping:be,uniformBlockBinding:Ae,texStorage2D:fe,texStorage3D:pe,texSubImage2D:M,texSubImage3D:W,compressedTexSubImage2D:ee,compressedTexSubImage3D:ae,scissor:me,viewport:J,reset:He}}function tI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,d=new WeakMap,h=new Set;let u;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return v?new OffscreenCanvas(C,M):Ru("canvas")}function m(C,M,W){let ee=1;const ae=yt(C);if((ae.width>W||ae.height>W)&&(ee=W/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const fe=Math.floor(ee*ae.width),pe=Math.floor(ee*ae.height);u===void 0&&(u=x(fe,pe));const Q=M?x(fe,pe):u;return Q.width=fe,Q.height=pe,Q.getContext("2d").drawImage(C,0,0,fe,pe),Be("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+fe+"x"+pe+")."),Q}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function f(C){return C.generateMipmaps}function g(C){t.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,M,W,ee,ae,fe=!1){if(C!==null){if(t[C]!==void 0)return t[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;ee&&(pe=e.get("EXT_texture_norm16"),pe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===t.RED&&(W===t.FLOAT&&(Q=t.R32F),W===t.HALF_FLOAT&&(Q=t.R16F),W===t.UNSIGNED_BYTE&&(Q=t.R8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.R16_EXT),W===t.SHORT&&pe&&(Q=pe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.R8UI),W===t.UNSIGNED_SHORT&&(Q=t.R16UI),W===t.UNSIGNED_INT&&(Q=t.R32UI),W===t.BYTE&&(Q=t.R8I),W===t.SHORT&&(Q=t.R16I),W===t.INT&&(Q=t.R32I)),M===t.RG&&(W===t.FLOAT&&(Q=t.RG32F),W===t.HALF_FLOAT&&(Q=t.RG16F),W===t.UNSIGNED_BYTE&&(Q=t.RG8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RG16_EXT),W===t.SHORT&&pe&&(Q=pe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RG8UI),W===t.UNSIGNED_SHORT&&(Q=t.RG16UI),W===t.UNSIGNED_INT&&(Q=t.RG32UI),W===t.BYTE&&(Q=t.RG8I),W===t.SHORT&&(Q=t.RG16I),W===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),W===t.UNSIGNED_INT&&(Q=t.RGB32UI),W===t.BYTE&&(Q=t.RGB8I),W===t.SHORT&&(Q=t.RGB16I),W===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),W===t.UNSIGNED_INT&&(Q=t.RGBA32UI),W===t.BYTE&&(Q=t.RGBA8I),W===t.SHORT&&(Q=t.RGBA16I),W===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&(W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGB16_EXT),W===t.SHORT&&pe&&(Q=pe.RGB16_SNORM_EXT),W===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const ie=fe?Au:Je.getTransfer(ae);W===t.FLOAT&&(Q=t.RGBA32F),W===t.HALF_FLOAT&&(Q=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Q=ie===dt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT&&pe&&(Q=pe.RGBA16_EXT),W===t.SHORT&&pe&&(Q=pe.RGBA16_SNORM_EXT),W===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function b(C,M){let W;return C?M===null||M===Hi||M===fl?W=t.DEPTH24_STENCIL8:M===Di?W=t.DEPTH32F_STENCIL8:M===dl&&(W=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===fl?W=t.DEPTH_COMPONENT24:M===Di?W=t.DEPTH_COMPONENT32F:M===dl&&(W=t.DEPTH_COMPONENT16),W}function E(C,M){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&d.delete(M),M.isHTMLTexture&&h.delete(M)}function y(C){const M=C.target;M.removeEventListener("dispose",y),P(M)}function R(C){const M=i.get(C);if(M.__webglInit===void 0)return;const W=C.source,ee=p.get(W);if(ee){const ae=ee[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(C),Object.keys(ee).length===0&&p.delete(W)}i.remove(C)}function L(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const W=C.source,ee=p.get(W);delete ee[M.__cacheKey],o.memory.textures--}function P(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ae=0;ae<M.__webglFramebuffer[ee].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=C.textures;for(let ee=0,ae=W.length;ee<ae;ee++){const fe=i.get(W[ee]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(W[ee])}i.remove(C)}let U=0;function j(){U=0}function z(){return U}function I(C){U=C}function k(){const C=U;return C>=r.maxTextures&&Be("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),U+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function D(C,M){const W=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const ee=C.image;if(ee===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(W,C,M);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function H(C,M){const W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Re(W,C,M);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function G(C,M){const W=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){Re(W,C,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function q(C,M){const W=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&W.__version!==C.version){Oe(W,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const te={[Yh]:t.REPEAT,[ir]:t.CLAMP_TO_EDGE,[Kh]:t.MIRRORED_REPEAT},he={[Qt]:t.NEAREST,[MR]:t.NEAREST_MIPMAP_NEAREST,[Ql]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[Qd]:t.LINEAR_MIPMAP_NEAREST,[Ss]:t.LINEAR_MIPMAP_LINEAR},ue={[TR]:t.NEVER,[NR]:t.ALWAYS,[AR]:t.LESS,[Zm]:t.LEQUAL,[CR]:t.EQUAL,[Qm]:t.GEQUAL,[RR]:t.GREATER,[PR]:t.NOTEQUAL};function ve(C,M){if(M.type===Di&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===Qd||M.magFilter===Ql||M.magFilter===Ss||M.minFilter===fn||M.minFilter===Qd||M.minFilter===Ql||M.minFilter===Ss)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,te[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,te[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,te[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,he[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,he[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Qt||M.minFilter!==Ql&&M.minFilter!==Ss||M.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const ee=M.source;let ae=p.get(ee);ae===void 0&&(ae={},p.set(ee,ae));const fe=O(M);if(fe!==C.__cacheKey){ae[fe]===void 0&&(ae[fe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[fe].usedTimes++;const pe=ae[C.__cacheKey];pe!==void 0&&(ae[C.__cacheKey].usedTimes--,pe.usedTimes===0&&L(M)),C.__cacheKey=fe,C.__webglTexture=ae[fe].texture}return W}function se(C,M,W){return Math.floor(Math.floor(C/W)/M)}function oe(C,M,W,ee){const fe=C.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,W,ee,M.data);else{fe.sort((Se,me)=>Se.start-me.start);let pe=0;for(let Se=1;Se<fe.length;Se++){const me=fe[pe],J=fe[Se],be=me.start+me.count,Ae=se(J.start,M.width,4),He=se(me.start,M.width,4);J.start<=be+1&&Ae===He&&se(J.start+J.count-1,M.width,4)===Ae?me.count=Math.max(me.count,J.start+J.count-me.start):(++pe,fe[pe]=J)}fe.length=pe+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ye=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Se=0,me=fe.length;Se<me;Se++){const J=fe[Se],be=Math.floor(J.start/4),Ae=Math.ceil(J.count/4),He=be%M.width,F=Math.floor(be/M.width),de=Ae,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,He),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,He,F,de,ne,W,ee,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye)}}function Re(C,M,W){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ae=$(C,M),fe=M.source;n.bindTexture(ee,C.__webglTexture,t.TEXTURE0+W);const pe=i.get(fe);if(fe.version!==pe.__version||ae===!0){if(n.activeTexture(t.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=Je.getPrimaries(Je.workingColorSpace),Te=M.colorSpace===Ir?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Ir||ne===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=m(M.image,!1,r.maxTextureSize);ie=_e(M,ie);const ye=s.convert(M.format,M.colorSpace),Se=s.convert(M.type);let me=S(M.internalFormat,ye,Se,M.normalized,M.colorSpace,M.isVideoTexture);ve(ee,M);let J;const be=M.mipmaps,Ae=M.isVideoTexture!==!0,He=pe.__version===void 0||ae===!0,F=fe.dataReady,de=E(M,ie);if(M.isDepthTexture)me=b(M.format===ws,M.type),He&&(Ae?n.texStorage2D(t.TEXTURE_2D,1,me,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,ye,Se,null));else if(M.isDataTexture)if(be.length>0){Ae&&He&&n.texStorage2D(t.TEXTURE_2D,de,me,be[0].width,be[0].height);for(let ne=0,Te=be.length;ne<Te;ne++)J=be[ne],Ae?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,J.width,J.height,ye,Se,J.data):n.texImage2D(t.TEXTURE_2D,ne,me,J.width,J.height,0,ye,Se,J.data);M.generateMipmaps=!1}else Ae?(He&&n.texStorage2D(t.TEXTURE_2D,de,me,ie.width,ie.height),F&&oe(M,ie,ye,Se)):n.texImage2D(t.TEXTURE_2D,0,me,ie.width,ie.height,0,ye,Se,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ae&&He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,me,be[0].width,be[0].height,ie.depth);for(let ne=0,Te=be.length;ne<Te;ne++)if(J=be[ne],M.format!==pi)if(ye!==null)if(Ae){if(F)if(M.layerUpdates.size>0){const ge=kv(J.width,J.height,M.format,M.type);for(const le of M.layerUpdates){const De=J.data.subarray(le*ge/J.data.BYTES_PER_ELEMENT,(le+1)*ge/J.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,le,J.width,J.height,1,ye,De)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,J.width,J.height,ie.depth,ye,J.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,me,J.width,J.height,ie.depth,0,J.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,J.width,J.height,ie.depth,ye,Se,J.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,me,J.width,J.height,ie.depth,0,ye,Se,J.data)}else{Ae&&He&&n.texStorage2D(t.TEXTURE_2D,de,me,be[0].width,be[0].height);for(let ne=0,Te=be.length;ne<Te;ne++)J=be[ne],M.format!==pi?ye!==null?Ae?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,J.width,J.height,ye,J.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,me,J.width,J.height,0,J.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,J.width,J.height,ye,Se,J.data):n.texImage2D(t.TEXTURE_2D,ne,me,J.width,J.height,0,ye,Se,J.data)}else if(M.isDataArrayTexture)if(Ae){if(He&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,me,ie.width,ie.height,ie.depth),F)if(M.layerUpdates.size>0){const ne=kv(ie.width,ie.height,M.format,M.type);for(const Te of M.layerUpdates){const ge=ie.data.subarray(Te*ne/ie.data.BYTES_PER_ELEMENT,(Te+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Te,ie.width,ie.height,1,ye,Se,ge)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ye,Se,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,ye,Se,ie.data);else if(M.isData3DTexture)Ae?(He&&n.texStorage3D(t.TEXTURE_3D,de,me,ie.width,ie.height,ie.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ye,Se,ie.data)):n.texImage3D(t.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,ye,Se,ie.data);else if(M.isFramebufferTexture){if(He)if(Ae)n.texStorage2D(t.TEXTURE_2D,de,me,ie.width,ie.height);else{let ne=ie.width,Te=ie.height;for(let ge=0;ge<de;ge++)n.texImage2D(t.TEXTURE_2D,ge,me,ne,Te,0,ye,Se,null),ne>>=1,Te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),h.add(M),ne.onpaint=We=>{const It=We.changedElements;for(const ht of h)It.includes(ht.image)&&(ht.needsUpdate=!0)},ne.requestPaint();return}const Te=0,ge=t.RGBA,le=t.RGBA,De=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,Te,ge,le,De,ie),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ae&&He){const ne=yt(be[0]);n.texStorage2D(t.TEXTURE_2D,de,me,ne.width,ne.height)}for(let ne=0,Te=be.length;ne<Te;ne++)J=be[ne],Ae?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ye,Se,J):n.texImage2D(t.TEXTURE_2D,ne,me,ye,Se,J);M.generateMipmaps=!1}else if(Ae){if(He){const ne=yt(ie);n.texStorage2D(t.TEXTURE_2D,de,me,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Se,ie)}else n.texImage2D(t.TEXTURE_2D,0,me,ye,Se,ie);f(M)&&g(ee),pe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Oe(C,M,W){if(M.image.length!==6)return;const ee=$(C,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const fe=i.get(ae);if(ae.version!==fe.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const pe=Je.getPrimaries(Je.workingColorSpace),Q=M.colorSpace===Ir?null:Je.getPrimaries(M.colorSpace),ie=M.colorSpace===Ir||pe===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,me=[];for(let le=0;le<6;le++)!ye&&!Se?me[le]=m(M.image[le],!0,r.maxCubemapSize):me[le]=Se?M.image[le].image:M.image[le],me[le]=_e(M,me[le]);const J=me[0],be=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type),He=S(M.internalFormat,be,Ae,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,de=fe.__version===void 0||ee===!0,ne=ae.dataReady;let Te=E(M,J);ve(t.TEXTURE_CUBE_MAP,M);let ge;if(ye){F&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,He,J.width,J.height);for(let le=0;le<6;le++){ge=me[le].mipmaps;for(let De=0;De<ge.length;De++){const We=ge[De];M.format!==pi?be!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,We.width,We.height,be,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,He,We.width,We.height,0,We.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,We.width,We.height,be,Ae,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,He,We.width,We.height,0,be,Ae,We.data)}}}else{if(ge=M.mipmaps,F&&de){ge.length>0&&Te++;const le=yt(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,He,le.width,le.height)}for(let le=0;le<6;le++)if(Se){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,me[le].width,me[le].height,be,Ae,me[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,He,me[le].width,me[le].height,0,be,Ae,me[le].data);for(let De=0;De<ge.length;De++){const It=ge[De].image[le].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,It.width,It.height,be,Ae,It.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,He,It.width,It.height,0,be,Ae,It.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be,Ae,me[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,He,be,Ae,me[le]);for(let De=0;De<ge.length;De++){const We=ge[De];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,be,Ae,We.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,He,be,Ae,We.image[le])}}}f(M)&&g(t.TEXTURE_CUBE_MAP),fe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,W,ee,ae,fe){const pe=s.convert(W.format,W.colorSpace),Q=s.convert(W.type),ie=S(W.internalFormat,pe,Q,W.normalized,W.colorSpace),ye=i.get(M),Se=i.get(W);if(Se.__renderTarget=M,!ye.__hasExternalTextures){const me=Math.max(1,M.width>>fe),J=Math.max(1,M.height>>fe);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,fe,ie,me,J,M.depth,0,pe,Q,null):n.texImage2D(ae,fe,ie,me,J,0,pe,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ae,Se.__webglTexture,0,Dt(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ae,Se.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(C,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const ee=M.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,fe=b(M.stencilBuffer,ae),pe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ze(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(M),fe,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(M),fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,C)}else{const ee=M.textures;for(let ae=0;ae<ee.length;ae++){const fe=ee[ae],pe=s.convert(fe.format,fe.colorSpace),Q=s.convert(fe.type),ie=S(fe.internalFormat,pe,Q,fe.normalized,fe.colorSpace);Ze(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(M),ie,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(M),ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(C,M,W){const ee=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(M.depthTexture);if(ae.__renderTarget=M,(!ae.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),ae.__webglTexture===void 0){ae.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),ve(t.TEXTURE_CUBE_MAP,M.depthTexture);const ye=s.convert(M.depthTexture.format),Se=s.convert(M.depthTexture.type);let me;M.depthTexture.format===mr?me=t.DEPTH_COMPONENT24:M.depthTexture.format===ws&&(me=t.DEPTH24_STENCIL8);for(let J=0;J<6;J++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,me,M.width,M.height,0,ye,Se,null)}}else D(M.depthTexture,0);const fe=ae.__webglTexture,pe=Dt(M),Q=ee?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,ie=M.depthTexture.format===ws?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===mr)Ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Q,fe,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Q,fe,0);else if(M.depthTexture.format===ws)Ze(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Q,fe,0,pe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Q,fe,0);else throw new Error("Unknown depthTexture format")}function Ke(C){const M=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=ee}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let ee=0;ee<6;ee++)ze(M.__webglFramebuffer[ee],C,ee);else{const ee=C.texture.mipmaps;ee&&ee.length>0?ze(M.__webglFramebuffer[0],C,0):ze(M.__webglFramebuffer,C,0)}else if(W){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),tt(M.__webglDepthbuffer[ee],C,!1);else{const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,fe)}}else{const ee=C.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),tt(M.__webglDepthbuffer,C,!1);else{const ae=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(C,M,W){const ee=i.get(C);M!==void 0&&Ue(ee.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ke(C)}function ke(C){const M=C.texture,W=i.get(C),ee=i.get(M);C.addEventListener("dispose",y);const ae=C.textures,fe=C.isWebGLCubeRenderTarget===!0,pe=ae.length>1;if(pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++),fe){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let ie=0;ie<M.mipmaps.length;ie++)W.__webglFramebuffer[Q][ie]=t.createFramebuffer()}else W.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)W.__webglFramebuffer[Q]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(pe)for(let Q=0,ie=ae.length;Q<ie;Q++){const ye=i.get(ae[Q]);ye.__webglTexture===void 0&&(ye.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ze(C)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<ae.length;Q++){const ie=ae[Q];W.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);const ye=s.convert(ie.format,ie.colorSpace),Se=s.convert(ie.type),me=S(ie.internalFormat,ye,Se,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),J=Dt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,J,me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),ve(t.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Ue(W.__webglFramebuffer[Q][ie],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else Ue(W.__webglFramebuffer[Q],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(M)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pe){for(let Q=0,ie=ae.length;Q<ie;Q++){const ye=ae[Q],Se=i.get(ye);let me=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Se.__webglTexture),ve(me,ye),Ue(W.__webglFramebuffer,C,ye,t.COLOR_ATTACHMENT0+Q,me,0),f(ye)&&g(me)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ee.__webglTexture),ve(Q,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)Ue(W.__webglFramebuffer[ie],C,M,t.COLOR_ATTACHMENT0,Q,ie);else Ue(W.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,Q,0);f(M)&&g(Q),n.unbindTexture()}C.depthBuffer&&Ke(C)}function bt(C){const M=C.textures;for(let W=0,ee=M.length;W<ee;W++){const ae=M[W];if(f(ae)){const fe=_(C),pe=i.get(ae).__webglTexture;n.bindTexture(fe,pe),g(fe),n.unbindTexture()}}}const mt=[],ot=[];function B(C){if(C.samples>0){if(Ze(C)===!1){const M=C.textures,W=C.width,ee=C.height;let ae=t.COLOR_BUFFER_BIT;const fe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(C),Q=M.length>1;if(Q)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ie=C.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Se=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ae,t.NEAREST),l===!0&&(mt.length=0,ot.length=0,mt.push(t.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(mt.push(fe),ot.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,mt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);const Se=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Dt(C){return Math.min(r.maxSamples,C.samples)}function Ze(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function _e(C,M){const W=C.colorSpace,ee=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Tu&&W!==Ir&&(Je.getTransfer(W)===dt?(ee!==pi||ae!==Jn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",W)),M}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.getTextureUnits=z,this.setTextureUnits=I,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=Ve,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nI(t,e){function n(i,r=Ir){let s;const o=Je.getTransfer(r);if(i===Jn)return t.UNSIGNED_BYTE;if(i===Xm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$m)return t.UNSIGNED_SHORT_5_5_5_1;if(i===b1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===T1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===M1)return t.BYTE;if(i===E1)return t.SHORT;if(i===dl)return t.UNSIGNED_SHORT;if(i===jm)return t.INT;if(i===Hi)return t.UNSIGNED_INT;if(i===Di)return t.FLOAT;if(i===pr)return t.HALF_FLOAT;if(i===A1)return t.ALPHA;if(i===C1)return t.RGB;if(i===pi)return t.RGBA;if(i===mr)return t.DEPTH_COMPONENT;if(i===ws)return t.DEPTH_STENCIL;if(i===R1)return t.RED;if(i===qm)return t.RED_INTEGER;if(i===Os)return t.RG;if(i===Ym)return t.RG_INTEGER;if(i===Km)return t.RGBA_INTEGER;if(i===zc||i===Vc||i===Hc||i===Gc)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zh||i===Qh||i===Jh||i===ep)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tp||i===np||i===ip||i===rp||i===sp||i===Eu||i===op)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===tp||i===np)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ip)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===rp)return s.COMPRESSED_R11_EAC;if(i===sp)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Eu)return s.COMPRESSED_RG11_EAC;if(i===op)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ap||i===lp||i===cp||i===up||i===dp||i===fp||i===hp||i===pp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ap)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_p)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sp||i===wp||i===Mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sp)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===bp||i===bu||i===Tp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ep)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new V1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Jt({vertexShader:iI,fragmentShader:rI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new ud(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oI extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,v=null;const x=typeof XRWebGLBinding<"u",m=new sI,f={},g=n.getContextAttributes();let _=null,S=null;const b=[],E=[],A=new ut;let y=null;const R=new zn;R.viewport=new kt;const L=new zn;L.viewport=new kt;const P=[R,L],U=new gP;let j=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=b[$];return se===void 0&&(se=new af,b[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=b[$];return se===void 0&&(se=new af,b[$]=se),se.getGripSpace()},this.getHand=function($){let se=b[$];return se===void 0&&(se=new af,b[$]=se),se.getHandSpace()};function I($){const se=E.indexOf($.inputSource);if(se===-1)return;const oe=b[se];oe!==void 0&&(oe.update($.inputSource,$.frame,c||o),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let $=0;$<b.length;$++){const se=E[$];se!==null&&(E[$]=null,b[$].disconnect(se))}j=null,z=null,m.reset();for(const $ in f)delete f[$];e.setRenderTarget(_),p=null,u=null,h=null,r=null,S=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,Oe=null;g.depth&&(Oe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=g.stencil?ws:mr,Re=g.stencil?fl:Hi);const Ue={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(Ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ki(u.textureWidth,u.textureHeight,{format:pi,type:Jn,depthTexture:new Yo(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ki(p.framebufferWidth,p.framebufferHeight,{format:pi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ve.setContext(r),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O($){for(let se=0;se<$.removed.length;se++){const oe=$.removed[se],Re=E.indexOf(oe);Re>=0&&(E[Re]=null,b[Re].disconnect(oe))}for(let se=0;se<$.added.length;se++){const oe=$.added[se];let Re=E.indexOf(oe);if(Re===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=E.length){E.push(oe),Re=Ue;break}else if(E[Ue]===null){E[Ue]=oe,Re=Ue;break}if(Re===-1)break}const Oe=b[Re];Oe&&Oe.connect(oe)}}const D=new X,H=new X;function G($,se,oe){D.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const Re=D.distanceTo(H),Oe=se.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,tt=Oe[14]/(Oe[10]-1),ze=Oe[14]/(Oe[10]+1),Ke=(Oe[9]+1)/Oe[5],Ve=(Oe[9]-1)/Oe[5],ke=(Oe[8]-1)/Oe[0],bt=(Ue[8]+1)/Ue[0],mt=tt*ke,ot=tt*bt,B=Re/(-ke+bt),Dt=B*-ke;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Dt),$.translateZ(B),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Oe[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Ze=tt+B,at=ze+B,_e=mt-Dt,yt=ot+(Re-Dt),C=Ke*ze/at*Ze,M=Ve*ze/at*Ze;$.projectionMatrix.makePerspective(_e,yt,C,M,Ze,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function q($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,oe=$.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),U.near=L.near=R.near=se,U.far=L.far=R.far=oe,(j!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),j=U.near,z=U.far),U.layers.mask=$.layers.mask|6,R.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Re=$.parent,Oe=U.cameras;q(U,Re);for(let Ue=0;Ue<Oe.length;Ue++)q(Oe[Ue],Re);Oe.length===2?G(U,R,L):U.projectionMatrix.copy(R.projectionMatrix),te($,U,Re)};function te($,se,oe){oe===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cp*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function($){return f[$]};let he=null;function ue($,se){if(d=se.getViewerPose(c||o),v=se,d!==null){const oe=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;oe.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let ze=0;ze<oe.length;ze++){const Ke=oe[ze];let Ve=null;if(p!==null)Ve=p.getViewport(Ke);else{const bt=h.getViewSubImage(u,Ke);Ve=bt.viewport,ze===0&&(e.setRenderTargetTextures(S,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(S))}let ke=P[ze];ke===void 0&&(ke=new zn,ke.layers.enable(ze),ke.viewport=new kt,P[ze]=ke),ke.matrix.fromArray(Ke.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ke.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ze===0&&(U.matrix.copy(ke.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(ke)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ze=h.getDepthInformation(oe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ze=0;ze<oe.length;ze++){const Ke=oe[ze].camera;if(Ke){let Ve=f[Ke];Ve||(Ve=new V1,f[Ke]=Ve);const ke=h.getCameraImage(Ke);Ve.sourceTexture=ke}}}}for(let oe=0;oe<b.length;oe++){const Re=E[oe],Oe=b[oe];Re!==null&&Oe!==void 0&&Oe.update(Re,se,c||o)}he&&he($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),v=null}const ve=new X1;ve.setAnimationLoop(ue),this.setAnimationLoop=function($){he=$},this.dispose=function(){}}}const aI=new Bt,J1=new Ge;J1.set(-1,0,0,0,1,0,0,0,1);function lI(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,H1(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,_,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),d(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),x(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,m.envMapRotation.value.setFromMatrix4(aI.makeRotationFromEuler(S)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(J1),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(v(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const E=e.render.frame;s[g.id]!==E&&(u(g),s[g.id]=E)}function d(g){const _=h();g.__bindingPointIndex=_;const S=t.createBuffer(),b=g.__size,E=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const _=r[g.id],S=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let E=0,A=S.length;E<A;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let R=0,L=y.length;R<L;R++){const P=y[R];if(p(P,E,R,b)===!0){const U=P.__offset,j=Array.isArray(P.value)?P.value:[P.value];let z=0;for(let I=0;I<j.length;I++){const k=j[I],O=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,U+z,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):ArrayBuffer.isView(k)?P.__data.set(new k.constructor(k.buffer,k.byteOffset,P.__data.length)):(k.toArray(P.__data,z),z+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,b){const E=g.value,A=_+"_"+S;if(b[A]===void 0)return typeof E=="number"||typeof E=="boolean"?b[A]=E:ArrayBuffer.isView(E)?b[A]=E.slice():b[A]=E.clone(),!0;{const y=b[A];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return b[A]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function v(g){const _=g.uniforms;let S=0;const b=16;for(let A=0,y=_.length;A<y;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let L=0,P=R.length;L<P;L++){const U=R[L],j=Array.isArray(U.value)?U.value:[U.value];for(let z=0,I=j.length;z<I;z++){const k=j[z],O=x(k),D=S%b,H=D%O.boundary,G=D+H;S+=H,G!==0&&b-G<O.storage&&(S+=b-G),U.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=O.storage}}}const E=S%b;return E>0&&(S+=b-E),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(_.boundary=16,_.storage=g.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}const uI=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bi=null;function dI(){return bi===null&&(bi=new tP(uI,16,16,Os,pr),bi.name="DFG_LUT",bi.minFilter=fn,bi.magFilter=fn,bi.wrapS=ir,bi.wrapT=ir,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}class ew{constructor(e={}){const{canvas:n=DR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Jn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const x=p,m=new Set([Km,Ym,qm]),f=new Set([Jn,Hi,dl,fl,Xm,$m]),g=new Uint32Array(4),_=new Int32Array(4),S=new X;let b=null,E=null;const A=[],y=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,U=null;this._outputColorSpace=Kn;let j=0,z=0,I=null,k=-1,O=null;const D=new kt,H=new kt;let G=null;const q=new lt(0);let te=0,he=n.width,ue=n.height,ve=1,$=null,se=null;const oe=new kt(0,0,he,ue),Re=new kt(0,0,he,ue);let Oe=!1;const Ue=new O1;let tt=!1,ze=!1;const Ke=new Bt,Ve=new X,ke=new kt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function ot(){return I===null?ve:1}let B=i;function Dt(T,V){return n.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wm}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",We,!1),B===null){const V="webgl2";if(B=Dt(V,T),B===null)throw Dt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw it("WebGLRenderer: "+T.message),T}let Ze,at,_e,yt,C,M,W,ee,ae,fe,pe,Q,ie,ye,Se,me,J,be,Ae,He,F,de,ne;function Te(){Ze=new dL(B),Ze.init(),F=new nI(B,Ze),at=new iL(B,Ze,e,F),_e=new eI(B,Ze),at.reversedDepthBuffer&&u&&_e.buffers.depth.setReversed(!0),yt=new pL(B),C=new zD,M=new tI(B,Ze,_e,C,at,F,yt),W=new uL(L),ee=new xP(B),de=new tL(B,ee),ae=new fL(B,ee,yt,de),fe=new gL(B,ae,ee,de,yt),be=new mL(B,at,M),Se=new rL(C),pe=new BD(L,W,Ze,at,de,Se),Q=new lI(L,C),ie=new HD,ye=new qD(Ze),J=new eL(L,W,_e,fe,v,l),me=new JD(L,fe,at),ne=new cI(B,yt,at,_e),Ae=new nL(B,Ze,yt),He=new hL(B,Ze,yt),yt.programs=pe.programs,L.capabilities=at,L.extensions=Ze,L.properties=C,L.renderLists=ie,L.shadowMap=me,L.state=_e,L.info=yt}Te(),x!==Jn&&(R=new xL(x,n.width,n.height,r,s));const ge=new oI(L,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(he,ue,!1))},this.getSize=function(T){return T.set(he,ue)},this.setSize=function(T,V,Z=!0){if(ge.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}he=T,ue=V,n.width=Math.floor(T*ve),n.height=Math.floor(V*ve),Z===!0&&(n.style.width=T+"px",n.style.height=V+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(he*ve,ue*ve).floor()},this.setDrawingBufferSize=function(T,V,Z){he=T,ue=V,ve=Z,n.width=Math.floor(T*Z),n.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===Jn){it("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){Be("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,V,Z,Y){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,V,Z,Y),_e.viewport(D.copy(oe).multiplyScalar(ve).round())},this.getScissor=function(T){return T.copy(Re)},this.setScissor=function(T,V,Z,Y){T.isVector4?Re.set(T.x,T.y,T.z,T.w):Re.set(T,V,Z,Y),_e.scissor(H.copy(Re).multiplyScalar(ve).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){_e.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor(...arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Z=!0){let Y=0;if(T){let K=!1;if(I!==null){const Ee=I.texture.format;K=m.has(Ee)}if(K){const Ee=I.texture.type,Pe=f.has(Ee),Me=J.getClearColor(),Le=J.getClearAlpha(),Ie=Me.r,je=Me.g,Ye=Me.b;Pe?(g[0]=Ie,g[1]=je,g[2]=Ye,g[3]=Le,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Ie,_[1]=je,_[2]=Ye,_[3]=Le,B.clearBufferiv(B.COLOR,0,_))}else Y|=B.COLOR_BUFFER_BIT}V&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",We,!1),J.dispose(),ie.dispose(),ye.dispose(),C.dispose(),W.dispose(),fe.dispose(),de.dispose(),ne.dispose(),pe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ag),ge.removeEventListener("sessionend",lg),ls.stop()};function le(T){T.preventDefault(),hv("WebGLRenderer: Context Lost."),P=!0}function De(){hv("WebGLRenderer: Context Restored."),P=!1;const T=yt.autoReset,V=me.enabled,Z=me.autoUpdate,Y=me.needsUpdate,K=me.type;Te(),yt.autoReset=T,me.enabled=V,me.autoUpdate=Z,me.needsUpdate=Y,me.type=K}function We(T){it("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function It(T){const V=T.target;V.removeEventListener("dispose",It),ht(V)}function ht(T){Wi(T),C.remove(T)}function Wi(T){const V=C.get(T).programs;V!==void 0&&(V.forEach(function(Z){pe.releaseProgram(Z)}),T.isShaderMaterial&&pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,Y,K,Ee){V===null&&(V=bt);const Pe=K.isMesh&&K.matrixWorld.determinant()<0,Me=iw(T,V,Z,Y,K);_e.setMaterial(Y,Pe);let Le=Z.index,Ie=1;if(Y.wireframe===!0){if(Le=ae.getWireframeAttribute(Z),Le===void 0)return;Ie=2}const je=Z.drawRange,Ye=Z.attributes.position;let Fe=je.start*Ie,pt=(je.start+je.count)*Ie;Ee!==null&&(Fe=Math.max(Fe,Ee.start*Ie),pt=Math.min(pt,(Ee.start+Ee.count)*Ie)),Le!==null?(Fe=Math.max(Fe,0),pt=Math.min(pt,Le.count)):Ye!=null&&(Fe=Math.max(Fe,0),pt=Math.min(pt,Ye.count));const Ut=pt-Fe;if(Ut<0||Ut===1/0)return;de.setup(K,Y,Me,Z,Le);let Pt,gt=Ae;if(Le!==null&&(Pt=ee.get(Le),gt=He,gt.setIndex(Pt)),K.isMesh)Y.wireframe===!0?(_e.setLineWidth(Y.wireframeLinewidth*ot()),gt.setMode(B.LINES)):gt.setMode(B.TRIANGLES);else if(K.isLine){let rn=Y.linewidth;rn===void 0&&(rn=1),_e.setLineWidth(rn*ot()),K.isLineSegments?gt.setMode(B.LINES):K.isLineLoop?gt.setMode(B.LINE_LOOP):gt.setMode(B.LINE_STRIP)}else K.isPoints?gt.setMode(B.POINTS):K.isSprite&&gt.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const rn=K._multiDrawStarts,Ce=K._multiDrawCounts,Dn=K._multiDrawCount,nt=Le?ee.get(Le).bytesPerElement:1,$n=C.get(Y).currentProgram.getUniforms();for(let wi=0;wi<Dn;wi++)$n.setValue(B,"_gl_DrawID",wi),gt.render(rn[wi]/nt,Ce[wi])}else if(K.isInstancedMesh)gt.renderInstances(Fe,Ut,K.count);else if(Z.isInstancedBufferGeometry){const rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,rn);gt.renderInstances(Fe,Ut,Ce)}else gt.render(Fe,Ut)};function Si(T,V,Z){T.transparent===!0&&T.side===er&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Cl(T,V,Z),T.side=hr,T.needsUpdate=!0,Cl(T,V,Z),T.side=er):Cl(T,V,Z)}this.compile=function(T,V,Z=null){Z===null&&(Z=T),E=ye.get(Z),E.init(V),y.push(E),Z.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),T!==Z&&T.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(E.pushLight(K),K.castShadow&&E.pushShadow(K))}),E.setupLights();const Y=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Me=Ee[Pe];Si(Me,Z,K),Y.add(Me)}else Si(Ee,Z,K),Y.add(Ee)}),E=y.pop(),Y},this.compileAsync=function(T,V,Z=null){const Y=this.compile(T,V,Z);return new Promise(K=>{function Ee(){if(Y.forEach(function(Pe){C.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){K(T);return}setTimeout(Ee,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let hd=null;function tw(T){hd&&hd(T)}function ag(){ls.stop()}function lg(){ls.start()}const ls=new X1;ls.setAnimationLoop(tw),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(T){hd=T,ge.setAnimationLoop(T),T===null?ls.stop():ls.start()},ge.addEventListener("sessionstart",ag),ge.addEventListener("sessionend",lg),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(T,V);const Z=ge.enabled===!0&&ge.isPresenting===!0,Y=R!==null&&(I===null||Z)&&R.begin(L,I);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(V),V=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,V,I),E=ye.get(T,y.length),E.init(V),E.state.textureUnits=M.getTextureUnits(),y.push(E),Ke.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ue.setFromProjectionMatrix(Ke,Ii,V.reversedDepth),ze=this.localClippingEnabled,tt=Se.init(this.clippingPlanes,ze),b=ie.get(T,A.length),b.init(),A.push(b),ge.enabled===!0&&ge.isPresenting===!0){const Pe=L.xr.getDepthSensingMesh();Pe!==null&&pd(Pe,V,-1/0,L.sortObjects)}pd(T,V,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort($,se),mt=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,mt&&J.addToRenderList(b,T),this.info.render.frame++,tt===!0&&Se.beginShadows();const K=E.state.shadowsArray;if(me.render(K,T,V),tt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&R.hasRenderPass())===!1){const Pe=b.opaque,Me=b.transmissive;if(E.setupLights(),V.isArrayCamera){const Le=V.cameras;if(Me.length>0)for(let Ie=0,je=Le.length;Ie<je;Ie++){const Ye=Le[Ie];ug(Pe,Me,T,Ye)}mt&&J.render(T);for(let Ie=0,je=Le.length;Ie<je;Ie++){const Ye=Le[Ie];cg(b,T,Ye,Ye.viewport)}}else Me.length>0&&ug(Pe,Me,T,V),mt&&J.render(T),cg(b,T,V)}I!==null&&z===0&&(M.updateMultisampleRenderTarget(I),M.updateRenderTargetMipmap(I)),Y&&R.end(L),T.isScene===!0&&T.onAfterRender(L,T,V),de.resetDefaultState(),k=-1,O=null,y.pop(),y.length>0?(E=y[y.length-1],M.setTextureUnits(E.state.textureUnits),tt===!0&&Se.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,U!==null&&U.renderEnd()};function pd(T,V,Z,Y){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){Y&&ke.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ke);const Pe=fe.update(T),Me=T.material;Me.visible&&b.push(T,Pe,Me,Z,ke.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const Pe=fe.update(T),Me=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ke.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ke.copy(Pe.boundingSphere.center)),ke.applyMatrix4(T.matrixWorld).applyMatrix4(Ke)),Array.isArray(Me)){const Le=Pe.groups;for(let Ie=0,je=Le.length;Ie<je;Ie++){const Ye=Le[Ie],Fe=Me[Ye.materialIndex];Fe&&Fe.visible&&b.push(T,Pe,Fe,Z,ke.z,Ye)}}else Me.visible&&b.push(T,Pe,Me,Z,ke.z,null)}}const Ee=T.children;for(let Pe=0,Me=Ee.length;Pe<Me;Pe++)pd(Ee[Pe],V,Z,Y)}function cg(T,V,Z,Y){const{opaque:K,transmissive:Ee,transparent:Pe}=T;E.setupLightsView(Z),tt===!0&&Se.setGlobalState(L.clippingPlanes,Z),Y&&_e.viewport(D.copy(Y)),K.length>0&&Al(K,V,Z),Ee.length>0&&Al(Ee,V,Z),Pe.length>0&&Al(Pe,V,Z),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ug(T,V,Z,Y){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Fe=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new ki(1,1,{generateMipmaps:!0,type:Fe?pr:Jn,minFilter:Ss,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ee=E.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||D;Ee.setSize(Pe.z*L.transmissionResolutionScale,Pe.w*L.transmissionResolutionScale);const Me=L.getRenderTarget(),Le=L.getActiveCubeFace(),Ie=L.getActiveMipmapLevel();L.setRenderTarget(Ee),L.getClearColor(q),te=L.getClearAlpha(),te<1&&L.setClearColor(16777215,.5),L.clear(),mt&&J.render(Z);const je=L.toneMapping;L.toneMapping=Oi;const Ye=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),tt===!0&&Se.setGlobalState(L.clippingPlanes,Y),Al(T,Z,Y),M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let pt=0,Ut=V.length;pt<Ut;pt++){const Pt=V[pt],{object:gt,geometry:rn,material:Ce,group:Dn}=Pt;if(Ce.side===er&&gt.layers.test(Y.layers)){const nt=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,dg(gt,Z,Y,rn,Ce,Dn),Ce.side=nt,Ce.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(Ee),M.updateRenderTargetMipmap(Ee))}L.setRenderTarget(Me,Le,Ie),L.setClearColor(q,te),Ye!==void 0&&(Y.viewport=Ye),L.toneMapping=je}function Al(T,V,Z){const Y=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Ee=T.length;K<Ee;K++){const Pe=T[K],{object:Me,geometry:Le,group:Ie}=Pe;let je=Pe.material;je.allowOverride===!0&&Y!==null&&(je=Y),Me.layers.test(Z.layers)&&dg(Me,V,Z,Le,je,Ie)}}function dg(T,V,Z,Y,K,Ee){T.onBeforeRender(L,V,Z,Y,K,Ee),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(L,V,Z,Y,T,Ee),K.transparent===!0&&K.side===er&&K.forceSinglePass===!1?(K.side=hn,K.needsUpdate=!0,L.renderBufferDirect(Z,V,Y,K,T,Ee),K.side=hr,K.needsUpdate=!0,L.renderBufferDirect(Z,V,Y,K,T,Ee),K.side=er):L.renderBufferDirect(Z,V,Y,K,T,Ee),T.onAfterRender(L,V,Z,Y,K,Ee)}function Cl(T,V,Z){V.isScene!==!0&&(V=bt);const Y=C.get(T),K=E.state.lights,Ee=E.state.shadowsArray,Pe=K.state.version,Me=pe.getParameters(T,K.state,Ee,V,Z,E.state.lightProbeGridArray),Le=pe.getProgramCacheKey(Me);let Ie=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,Y.fog=V.fog;const je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=W.get(T.envMap||Y.environment,je),Y.envMapRotation=Y.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ie===void 0&&(T.addEventListener("dispose",It),Ie=new Map,Y.programs=Ie);let Ye=Ie.get(Le);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Pe)return hg(T,Me),Ye}else Me.uniforms=pe.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,Z,Me),T.onBeforeCompile(Me,L),Ye=pe.acquireProgram(Me,Le),Ie.set(Le,Ye),Y.uniforms=Me.uniforms;const Fe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=Se.uniform),hg(T,Me),Y.needsLights=sw(T),Y.lightsStateVersion=Pe,Y.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotLightMatrix.value=K.state.spotLightMatrix,Fe.spotLightMap.value=K.state.spotLightMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=Ye,Y.uniformsList=null,Ye}function fg(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Wc.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function hg(T,V){const Z=C.get(T);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function nw(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let Z=0,Y=T.length;Z<Y;Z++){const K=T[Z];if(K.texture!==null&&K.boundingBox.containsPoint(S))return K}return null}function iw(T,V,Z,Y,K){V.isScene!==!0&&(V=bt),M.resetTextureUnits();const Ee=V.fog,Pe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?V.environment:null,Me=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Je.workingColorSpace,Le=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ie=W.get(Y.envMap||Pe,Le),je=Y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Fe=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let Pt=Oi;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Pt=L.toneMapping);const gt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=gt!==void 0?gt.length:0,Ce=C.get(Y),Dn=E.state.lights;if(tt===!0&&(ze===!0||T!==O)){const xt=T===O&&Y.id===k;Se.setState(Y,T,xt)}let nt=!1;Y.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Dn.state.version||Ce.outputColorSpace!==Me||K.isBatchedMesh&&Ce.batching===!1||!K.isBatchedMesh&&Ce.batching===!0||K.isBatchedMesh&&Ce.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Ce.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Ce.instancing===!1||!K.isInstancedMesh&&Ce.instancing===!0||K.isSkinnedMesh&&Ce.skinning===!1||!K.isSkinnedMesh&&Ce.skinning===!0||K.isInstancedMesh&&Ce.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ce.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ce.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ce.instancingMorph===!1&&K.morphTexture!==null||Ce.envMap!==Ie||Y.fog===!0&&Ce.fog!==Ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Se.numPlanes||Ce.numIntersection!==Se.numIntersection)||Ce.vertexAlphas!==je||Ce.vertexTangents!==Ye||Ce.morphTargets!==Fe||Ce.morphNormals!==pt||Ce.morphColors!==Ut||Ce.toneMapping!==Pt||Ce.morphTargetsCount!==rn||!!Ce.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=Y.version);let $n=Ce.currentProgram;nt===!0&&($n=Cl(Y,V,K),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,$n,Ce));let wi=!1,vr=!1,Vs=!1;const vt=$n.getUniforms(),Ft=Ce.uniforms;if(_e.useProgram($n.program)&&(wi=!0,vr=!0,Vs=!0),Y.id!==k&&(k=Y.id,vr=!0),Ce.needsLights){const xt=nw(E.state.lightProbeGridArray,K);Ce.lightProbeGrid!==xt&&(Ce.lightProbeGrid=xt,vr=!0)}if(wi||O!==T){_e.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",T.projectionMatrix),vt.setValue(B,"viewMatrix",T.matrixWorldInverse);const _r=vt.map.cameraPosition;_r!==void 0&&_r.setValue(B,Ve.setFromMatrixPosition(T.matrixWorld)),at.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),O!==T&&(O=T,vr=!0,Vs=!0)}if(Ce.needsLights&&(Dn.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Dn.state.directionalShadowMap,M),Dn.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Dn.state.spotShadowMap,M),Dn.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Dn.state.pointShadowMap,M)),K.isSkinnedMesh){vt.setOptional(B,K,"bindMatrix"),vt.setOptional(B,K,"bindMatrixInverse");const xt=K.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),vt.setValue(B,"boneTexture",xt.boneTexture,M))}K.isBatchedMesh&&(vt.setOptional(B,K,"batchingTexture"),vt.setValue(B,"batchingTexture",K._matricesTexture,M),vt.setOptional(B,K,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",K._indirectTexture,M),vt.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",K._colorsTexture,M));const xr=Z.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&be.update(K,Z,$n),(vr||Ce.receiveShadow!==K.receiveShadow)&&(Ce.receiveShadow=K.receiveShadow,vt.setValue(B,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&V.environment!==null&&(Ft.envMapIntensity.value=V.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=dI()),vr){if(vt.setValue(B,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&rw(Ft,Vs),Ee&&Y.fog===!0&&Q.refreshFogUniforms(Ft,Ee),Q.refreshMaterialUniforms(Ft,Y,ve,ue,E.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.lightProbeGrid){const xt=Ce.lightProbeGrid;Ft.probesSH.value=xt.texture,Ft.probesMin.value.copy(xt.boundingBox.min),Ft.probesMax.value.copy(xt.boundingBox.max),Ft.probesResolution.value.copy(xt.resolution)}Wc.upload(B,fg(Ce),Ft,M)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wc.upload(B,fg(Ce),Ft,M),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(B,"center",K.center),vt.setValue(B,"modelViewMatrix",K.modelViewMatrix),vt.setValue(B,"normalMatrix",K.normalMatrix),vt.setValue(B,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const xt=Y.uniformsGroups;for(let _r=0,Hs=xt.length;_r<Hs;_r++){const pg=xt[_r];ne.update(pg,$n),ne.bind(pg,$n)}}return $n}function rw(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function sw(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,V,Z){const Y=C.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),C.get(T.texture).__webglTexture=V,C.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const Z=C.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0};const ow=B.createFramebuffer();this.setRenderTarget=function(T,V=0,Z=0){I=T,j=V,z=Z;let Y=null,K=!1,Ee=!1;if(T){const Me=C.get(T);if(Me.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),D.copy(T.viewport),H.copy(T.scissor),G=T.scissorTest,_e.viewport(D),_e.scissor(H),_e.setScissorTest(G),k=-1;return}else if(Me.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Me.__hasExternalTextures)M.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const je=T.depthTexture;if(Me.__boundDepthTexture!==je){if(je!==null&&C.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);const Ie=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[V])?Y=Ie[V][Z]:Y=Ie[V],K=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?Y=C.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?Y=Ie[Z]:Y=Ie,D.copy(T.viewport),H.copy(T.scissor),G=T.scissorTest}else D.copy(oe).multiplyScalar(ve).floor(),H.copy(Re).multiplyScalar(ve).floor(),G=Oe;if(Z!==0&&(Y=ow),_e.bindFramebuffer(B.FRAMEBUFFER,Y)&&_e.drawBuffers(T,Y),_e.viewport(D),_e.scissor(H),_e.setScissorTest(G),K){const Me=C.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Me.__webglTexture,Z)}else if(Ee){const Me=V;for(let Le=0;Le<T.textures.length;Le++){const Ie=C.get(T.textures[Le]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Le,Ie.__webglTexture,Z,Me)}}else if(T!==null&&Z!==0){const Me=C.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Z)}k=-1},this.readRenderTargetPixels=function(T,V,Z,Y,K,Ee,Pe,Me=0){if(!(T&&T.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){_e.bindFramebuffer(B.FRAMEBUFFER,Le);try{const Ie=T.textures[Me],je=Ie.format,Ye=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!at.textureFormatReadable(je)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ye)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-Y&&Z>=0&&Z<=T.height-K&&B.readPixels(V,Z,Y,K,F.convert(je),F.convert(Ye),Ee)}finally{const Ie=I!==null?C.get(I).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(T,V,Z,Y,K,Ee,Pe,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(V>=0&&V<=T.width-Y&&Z>=0&&Z<=T.height-K){_e.bindFramebuffer(B.FRAMEBUFFER,Le);const Ie=T.textures[Me],je=Ie.format,Ye=Ie.type;if(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),!at.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),B.readPixels(V,Z,Y,K,F.convert(je),F.convert(Ye),0);const pt=I!==null?C.get(I).__webglFramebuffer:null;_e.bindFramebuffer(B.FRAMEBUFFER,pt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await IR(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Fe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(Fe),B.deleteSync(Ut),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Z=0){const Y=Math.pow(2,-Z),K=Math.floor(T.image.width*Y),Ee=Math.floor(T.image.height*Y),Pe=V!==null?V.x:0,Me=V!==null?V.y:0;M.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Pe,Me,K,Ee),_e.unbindTexture()};const aw=B.createFramebuffer(),lw=B.createFramebuffer();this.copyTextureToTexture=function(T,V,Z=null,Y=null,K=0,Ee=0){let Pe,Me,Le,Ie,je,Ye,Fe,pt,Ut;const Pt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ie=Z.min.x,je=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const Ft=Math.pow(2,-K);Pe=Math.floor(Pt.width*Ft),Me=Math.floor(Pt.height*Ft),T.isDataArrayTexture?Le=Pt.depth:T.isData3DTexture?Le=Math.floor(Pt.depth*Ft):Le=1,Ie=0,je=0,Ye=0}Y!==null?(Fe=Y.x,pt=Y.y,Ut=Y.z):(Fe=0,pt=0,Ut=0);const gt=F.convert(V.format),rn=F.convert(V.type);let Ce;V.isData3DTexture?(M.setTexture3D(V,0),Ce=B.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(M.setTexture2DArray(V,0),Ce=B.TEXTURE_2D_ARRAY):(M.setTexture2D(V,0),Ce=B.TEXTURE_2D),_e.activeTexture(B.TEXTURE0),_e.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),_e.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_e.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Dn=_e.getParameter(B.UNPACK_ROW_LENGTH),nt=_e.getParameter(B.UNPACK_IMAGE_HEIGHT),$n=_e.getParameter(B.UNPACK_SKIP_PIXELS),wi=_e.getParameter(B.UNPACK_SKIP_ROWS),vr=_e.getParameter(B.UNPACK_SKIP_IMAGES);_e.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),_e.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),_e.pixelStorei(B.UNPACK_SKIP_PIXELS,Ie),_e.pixelStorei(B.UNPACK_SKIP_ROWS,je),_e.pixelStorei(B.UNPACK_SKIP_IMAGES,Ye);const Vs=T.isDataArrayTexture||T.isData3DTexture,vt=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const Ft=C.get(T),xr=C.get(V),xt=C.get(Ft.__renderTarget),_r=C.get(xr.__renderTarget);_e.bindFramebuffer(B.READ_FRAMEBUFFER,xt.__webglFramebuffer),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Hs=0;Hs<Le;Hs++)Vs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(T).__webglTexture,K,Ye+Hs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,C.get(V).__webglTexture,Ee,Ut+Hs)),B.blitFramebuffer(Ie,je,Pe,Me,Fe,pt,Pe,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);_e.bindFramebuffer(B.READ_FRAMEBUFFER,null),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||C.has(T)){const Ft=C.get(T),xr=C.get(V);_e.bindFramebuffer(B.READ_FRAMEBUFFER,aw),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,lw);for(let xt=0;xt<Le;xt++)Vs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,K,Ye+xt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ft.__webglTexture,K),vt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xr.__webglTexture,Ee,Ut+xt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xr.__webglTexture,Ee),K!==0?B.blitFramebuffer(Ie,je,Pe,Me,Fe,pt,Pe,Me,B.COLOR_BUFFER_BIT,B.NEAREST):vt?B.copyTexSubImage3D(Ce,Ee,Fe,pt,Ut+xt,Ie,je,Pe,Me):B.copyTexSubImage2D(Ce,Ee,Fe,pt,Ie,je,Pe,Me);_e.bindFramebuffer(B.READ_FRAMEBUFFER,null),_e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ce,Ee,Fe,pt,Ut,Pe,Me,Le,gt,rn,Pt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ce,Ee,Fe,pt,Ut,Pe,Me,Le,gt,Pt.data):B.texSubImage3D(Ce,Ee,Fe,pt,Ut,Pe,Me,Le,gt,rn,Pt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,Fe,pt,Pe,Me,gt,rn,Pt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,Fe,pt,Pt.width,Pt.height,gt,Pt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,Fe,pt,Pe,Me,gt,rn,Pt);_e.pixelStorei(B.UNPACK_ROW_LENGTH,Dn),_e.pixelStorei(B.UNPACK_IMAGE_HEIGHT,nt),_e.pixelStorei(B.UNPACK_SKIP_PIXELS,$n),_e.pixelStorei(B.UNPACK_SKIP_ROWS,wi),_e.pixelStorei(B.UNPACK_SKIP_IMAGES,vr),Ee===0&&V.generateMipmaps&&B.generateMipmap(Ce),_e.unbindTexture()},this.initRenderTarget=function(T){C.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),_e.unbindTexture()},this.resetState=function(){j=0,z=0,I=null,_e.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const fI=()=>{const t=N.useRef(null);return N.useEffect(()=>{const e=t.current;if(!e)return;const n=new ew({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(0,0),e.appendChild(n.domElement);const i=new I1,r=new zn(60,window.innerWidth/window.innerHeight,.1,2e3);r.position.z=180;const s=new ut(0,0),o=new ut(0,0),a=ue=>{s.x=(ue.clientX/window.innerWidth-.5)*2,s.y=-(ue.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",a);const l=120,c=160,d=[];for(let ue=0;ue<l;ue++){const ve=new X((Math.random()-.5)*c,(Math.random()-.5)*c,(Math.random()-.5)*c*.6);d.push({position:ve.clone(),velocity:new X((Math.random()-.5)*.08,(Math.random()-.5)*.08,(Math.random()-.5)*.04),originalPosition:ve.clone(),phase:Math.random()*Math.PI*2,speed:.3+Math.random()*.7})}const h=new Kt,u=new Float32Array(l*3),p=new Float32Array(l),v=new Float32Array(l*3);for(let ue=0;ue<l;ue++){const ve=d[ue].position;u[ue*3]=ve.x,u[ue*3+1]=ve.y,u[ue*3+2]=ve.z,p[ue]=2+Math.random()*4,Math.random()>.5?(v[ue*3]=.06,v[ue*3+1]=.71,v[ue*3+2]=.83):(v[ue*3]=.54,v[ue*3+1]=.36,v[ue*3+2]=.96)}h.setAttribute("position",new At(u,3)),h.setAttribute("size",new At(p,1)),h.setAttribute("color",new At(v,3));const x=new Jt({uniforms:{time:{value:0}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float dist = length(mvPosition.xyz);
          vAlpha = smoothstep(200.0, 80.0, dist) * 0.9;
          gl_PointSize = size * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float core = 1.0 - smoothstep(0.0, 0.3, r);
          float glow = 1.0 - smoothstep(0.2, 0.5, r);
          float alpha = (core * 0.9 + glow * 0.5) * vAlpha;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Li,vertexColors:!0}),m=new Pp(h,x);i.add(m);const f=300,g=new Float32Array(f*2*3),_=new Float32Array(f*2),S=new Float32Array(f*2*3),b=new Kt;b.setAttribute("position",new At(g,3).setUsage(va)),b.setAttribute("alpha",new At(_,1).setUsage(va)),b.setAttribute("color",new At(S,3).setUsage(va));const E=new Jt({uniforms:{},vertexShader:`
        attribute float alpha;
        attribute vec3 color;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vAlpha = alpha;
          vColor = color;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, vAlpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Li,vertexColors:!0}),A=new B1(b,E);i.add(A);const y=40,R=new Kt,L=new Float32Array(y*3),P=new Float32Array(y);R.setAttribute("position",new At(L,3).setUsage(va)),R.setAttribute("alpha",new At(P,1).setUsage(va));const U=new Jt({uniforms:{},vertexShader:`
        attribute float alpha;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 4.0 * (200.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float a = (1.0 - r * 2.0) * vAlpha;
          gl_FragColor = vec4(1.0, 1.0, 1.0, a);
        }
      `,transparent:!0,depthWrite:!1,blending:Li}),j=new Pp(R,U);i.add(j);let z=[];const I=Array.from({length:y},(ue,ve)=>({conn:ve%Math.max(z.length,1),t:Math.random(),speed:.002+Math.random()*.005})),k=new Co(90,32,32),O=new cd({color:new lt(7093472),transparent:!0,opacity:.03,side:hn});i.add(new An(k,O));const D=new j1;let H;const G=ue=>{let $=0;z=[];for(let se=0;se<l&&$<f;se++)for(let oe=se+1;oe<l&&$<f;oe++){const Re=d[se].position.x-d[oe].position.x,Oe=d[se].position.y-d[oe].position.y,Ue=d[se].position.z-d[oe].position.z,tt=Math.sqrt(Re*Re+Oe*Oe+Ue*Ue);if(tt<42){const ze=(1-tt/42)*.25,Ke=$*2,Ve=Ke*3;g[Ve]=d[se].position.x,g[Ve+1]=d[se].position.y,g[Ve+2]=d[se].position.z,g[Ve+3]=d[oe].position.x,g[Ve+4]=d[oe].position.y,g[Ve+5]=d[oe].position.z,_[Ke]=ze,_[Ke+1]=ze;const ke=(d[se].position.x+c/2)/c;S[Ve]=.54+ke*(.06-.54),S[Ve+1]=.36+ke*(.71-.36),S[Ve+2]=.96+ke*(.83-.96),S[Ve+3]=S[Ve],S[Ve+4]=S[Ve+1],S[Ve+5]=S[Ve+2],z.push({a:se,b:oe,dist:tt}),$++}}b.setDrawRange(0,$*2),b.attributes.position.needsUpdate=!0,b.attributes.alpha.needsUpdate=!0,b.attributes.color.needsUpdate=!0},q=()=>{if(z.length!==0){for(let ue=0;ue<y;ue++){const ve=I[ue];ve.t+=ve.speed,ve.t>1&&(ve.t=0,ve.conn=Math.floor(Math.random()*z.length),ve.speed=.002+Math.random()*.005);const $=z[ve.conn%z.length];if(!$)continue;const se=d[$.a].position,oe=d[$.b].position,Re=ve.t;L[ue*3]=se.x+(oe.x-se.x)*Re,L[ue*3+1]=se.y+(oe.y-se.y)*Re,L[ue*3+2]=se.z+(oe.z-se.z)*Re,P[ue]=Math.sin(Re*Math.PI)*.8}R.attributes.position.needsUpdate=!0,R.attributes.alpha.needsUpdate=!0}},te=()=>{H=requestAnimationFrame(te);const ue=D.getElapsedTime();x.uniforms.time.value=ue;for(let ve=0;ve<l;ve++){const $=d[ve],se=ue*$.speed+$.phase;$.position.x=$.originalPosition.x+Math.sin(se*.5)*8,$.position.y=$.originalPosition.y+Math.cos(se*.4)*8,$.position.z=$.originalPosition.z+Math.sin(se*.3)*4,u[ve*3]=$.position.x,u[ve*3+1]=$.position.y,u[ve*3+2]=$.position.z}h.attributes.position.needsUpdate=!0,G(),q(),o.x+=(s.x*12-o.x)*.04,o.y+=(s.y*8-o.y)*.04,r.position.x=o.x,r.position.y=o.y,r.lookAt(i.position),n.render(i,r)};te();const he=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",he),()=>{cancelAnimationFrame(H),window.removeEventListener("mousemove",a),window.removeEventListener("resize",he),n.dispose(),e.contains(n.domElement)&&e.removeChild(n.domElement)}},[]),w.jsx("div",{ref:t,className:"fixed inset-0 z-0 pointer-events-none",style:{opacity:.75}})},hI=({size:t=420})=>{const e=N.useRef(null);return N.useEffect(()=>{const n=e.current;if(!n)return;const i=n.clientWidth||t,r=n.clientHeight||t,s=new ew({antialias:!0,alpha:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setSize(i,r),s.setClearColor(0,0),n.appendChild(s.domElement);const o=new I1,a=new zn(50,i/r,.1,500);a.position.z=80;const l=new Jt({uniforms:{time:{value:0}},vertexShader:`
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
          float pulse = 0.5 + 0.5 * sin(time * 1.5);
          vec3 innerColor = vec3(0.42, 0.22, 0.88);
          vec3 outerColor = vec3(0.06, 0.71, 0.83);
          vec3 color = mix(innerColor, outerColor, fresnel);
          float alpha = fresnel * (0.55 + 0.2 * pulse);
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,side:hr,depthWrite:!1,blending:Li}),c=new An(new Co(18,64,64),l);o.add(c);const d=new Jt({uniforms:{time:{value:0}},vertexShader:`
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        void main() {
          float pulse = 0.5 + 0.5 * sin(time * 2.0);
          gl_FragColor = vec4(0.18, 0.1, 0.35, 0.4 + 0.1 * pulse);
        }
      `,transparent:!0,depthWrite:!1});o.add(new An(new Co(10,32,32),d));const h=[],u=[{radius:24,tube:.25,rot:new Bi(.3,0,0),color:9133302,speed:.4},{radius:30,tube:.18,rot:new Bi(1.2,.6,0),color:440020,speed:-.25},{radius:36,tube:.12,rot:new Bi(.7,1.4,.5),color:12616956,speed:.18}];u.forEach(G=>{const q=new tg(G.radius,G.tube,16,100),te=new cd({color:G.color,transparent:!0,opacity:.6,blending:Li}),he=new An(q,te);he.rotation.copy(G.rot),o.add(he),h.push(he)});const p=200,v=new Float32Array(p*3),x=new Float32Array(p),m=new Float32Array(p*3),f=new Float32Array(p);for(let G=0;G<p;G++){const q=Math.acos(1-2*(G+.5)/p),te=Math.PI*(1+Math.sqrt(5))*G,he=20+Math.random()*14;v[G*3]=he*Math.sin(q)*Math.cos(te),v[G*3+1]=he*Math.sin(q)*Math.sin(te),v[G*3+2]=he*Math.cos(q),x[G]=1.2+Math.random()*2,f[G]=Math.random()*Math.PI*2;const ue=Math.random();m[G*3]=.54+ue*(.06-.54),m[G*3+1]=.36+ue*(.71-.36),m[G*3+2]=.96+ue*(.83-.96)}const g=new Kt;g.setAttribute("position",new At(v,3)),g.setAttribute("size",new At(x,1)),g.setAttribute("color",new At(m,3)),g.setAttribute("phase",new At(f,1));const _=new Jt({uniforms:{time:{value:0}},vertexShader:`
        attribute float size;
        attribute vec3 color;
        attribute float phase;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float time;
        void main() {
          vColor = color;
          float pulse = 0.7 + 0.3 * sin(time * 2.0 + phase);
          vAlpha = pulse;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * pulse * (200.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float r = length(uv);
          if (r > 0.5) discard;
          float a = (1.0 - r * 2.0) * vAlpha;
          gl_FragColor = vec4(vColor, a);
        }
      `,transparent:!0,depthWrite:!1,blending:Li,vertexColors:!0}),S=new Pp(g,_);o.add(S);const b=[],E=14;for(let G=0;G<p;G++)for(let q=G+1;q<p;q++){const te=v[G*3]-v[q*3],he=v[G*3+1]-v[q*3+1],ue=v[G*3+2]-v[q*3+2];Math.sqrt(te*te+he*he+ue*ue)<E&&b.push(v[G*3],v[G*3+1],v[G*3+2],v[q*3],v[q*3+1],v[q*3+2])}const A=new Kt;A.setAttribute("position",new At(new Float32Array(b),3));const y=new k1({color:9133302,transparent:!0,opacity:.15,blending:Li}),R=new B1(A,y);o.add(R);const L=new Jt({uniforms:{time:{value:0}},vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float time;
        varying vec3 vNormal;
        void main() {
          float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0,0.0,1.0))), 4.0);
          float pulse = 0.5 + 0.5 * sin(time * 0.8);
          gl_FragColor = vec4(0.54, 0.36, 0.96, fresnel * 0.25 * pulse);
        }
      `,transparent:!0,side:hn,depthWrite:!1,blending:Li});o.add(new An(new Co(44,32,32),L));let P=0,U=0;const j=G=>{const q=n.getBoundingClientRect(),te=q.left+q.width/2,he=q.top+q.height/2;U=(G.clientX-te)/q.width*.8,P=-((G.clientY-he)/q.height)*.6};window.addEventListener("mousemove",j);const z=new j1;let I;const k=new Na;k.add(c,S,R,...h),o.add(k);const O=()=>{I=requestAnimationFrame(O);const G=z.getElapsedTime();l.uniforms.time.value=G,d.uniforms.time.value=G,L.uniforms.time.value=G,_.uniforms.time.value=G,k.rotation.y+=(U-k.rotation.y)*.05,k.rotation.x+=(P-k.rotation.x)*.05,k.rotation.y+=.002,h.forEach((q,te)=>{q.rotation.z+=u[te].speed*.01}),s.render(o,a)};O();const D=()=>{const G=n.clientWidth,q=n.clientHeight;a.aspect=G/q,a.updateProjectionMatrix(),s.setSize(G,q)},H=new ResizeObserver(D);return H.observe(n),()=>{cancelAnimationFrame(I),window.removeEventListener("mousemove",j),H.disconnect(),s.dispose(),n.contains(s.domElement)&&n.removeChild(s.domElement)}},[t]),w.jsx("div",{ref:e,style:{width:"100%",height:"100%",minHeight:t},className:"select-none"})},lx=["AI Engineer","LLM Systems Architect","Voice AI Builder","RAG Pipeline Expert","Agentic Workflow Designer"],pI=()=>{const[t,e]=N.useState(!1),[n,i]=N.useState(0),[r,s]=N.useState(""),[o,a]=N.useState(!1),l=N.useRef(null),c=N.useRef(null);N.useEffect(()=>{const u=setTimeout(()=>e(!0),200);return()=>clearTimeout(u)},[]),N.useEffect(()=>{const u=lx[n];let p;return o?r.length>0?p=setTimeout(()=>s(r.slice(0,-1)),28):(a(!1),i(v=>(v+1)%lx.length)):r.length<u.length?p=setTimeout(()=>s(u.slice(0,r.length+1)),60):p=setTimeout(()=>a(!0),2200),()=>clearTimeout(p)},[r,o,n]);const d=(u,p)=>{const v=p.current;if(!v)return;const x=v.getBoundingClientRect(),m=x.left+x.width/2,f=x.top+x.height/2,g=(u.clientX-m)*.3,_=(u.clientY-f)*.3;v.style.transform=`translate(${g}px, ${_}px) scale(1.04)`},h=u=>{const p=u.current;p&&(p.style.transform="translate(0,0) scale(1)")};return w.jsxs("section",{className:"relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden",children:[w.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[w.jsx("div",{className:"absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[140px]"}),w.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"})]}),w.jsxs("div",{className:"max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10",children:[w.jsxs("div",{className:"flex flex-col justify-center order-2 lg:order-1",children:[w.jsx("div",{className:`transition-all duration-1000 delay-300 ${t?"translate-y-0 opacity-100":"translate-y-6 opacity-0"}`,children:w.jsxs("div",{className:"inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8 text-sm w-fit",children:[w.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[w.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),w.jsx("span",{className:"relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"})]}),w.jsx("span",{className:"text-white/70",children:"Available for new opportunities"})]})}),w.jsxs("div",{className:`transition-all duration-1000 delay-500 ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400/80 text-sm font-semibold tracking-[0.3em] uppercase mb-3",children:"Hi, I'm"}),w.jsxs("h1",{className:"text-6xl sm:text-7xl lg:text-8xl font-black mb-4 leading-[0.95] tracking-tight",children:[w.jsx("span",{className:"text-gradient-hero block",children:"Sameer"}),w.jsx("span",{className:"text-white/90 block text-5xl sm:text-6xl lg:text-7xl font-bold mt-1",children:"Anwar"})]})]}),w.jsx("div",{className:`transition-all duration-1000 delay-700 ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:w.jsxs("div",{className:"h-10 flex items-center mb-8",children:[w.jsx("span",{className:"text-xl md:text-2xl font-semibold text-white/80 font-mono tracking-wide",children:r}),w.jsx("span",{className:"inline-block w-[2px] h-6 bg-violet-400 ml-1 animate-pulse"})]})}),w.jsx("div",{className:`transition-all duration-1000 delay-[900ms] ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:w.jsxs("p",{className:"text-base md:text-lg text-white/50 mb-10 max-w-xl leading-relaxed",children:["I architect production-grade AI systems — from"," ",w.jsx("span",{className:"text-violet-400 font-medium",children:"RAG pipelines"})," and"," ",w.jsx("span",{className:"text-cyan-400 font-medium",children:"autonomous agents"})," to"," ",w.jsx("span",{className:"text-violet-300 font-medium",children:"Voice AI"})," — turning complex problems into intelligent, scalable solutions."]})}),w.jsxs("div",{className:`transition-all duration-1000 delay-[1100ms] ${t?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsxs("div",{className:"flex flex-wrap gap-4 items-center mb-10",children:[w.jsxs("a",{ref:l,href:"#projects",onClick:u=>{var p;u.preventDefault(),(p=document.getElementById("projects"))==null||p.scrollIntoView({behavior:"smooth"})},onMouseMove:u=>d(u,l),onMouseLeave:()=>h(l),className:"magnetic-btn group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-base shadow-xl shadow-violet-500/25 hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden",style:{transition:"transform 0.15s ease, box-shadow 0.3s ease"},children:[w.jsx("span",{className:"absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),w.jsx(rT,{size:16,className:"relative z-10 group-hover:rotate-12 transition-transform duration-300"}),w.jsx("span",{className:"relative z-10",children:"View My Work"})]}),w.jsx("a",{ref:c,href:"mailto:gdrboy11@gmail.com",onMouseMove:u=>d(u,c),onMouseLeave:()=>h(c),className:"magnetic-btn px-8 py-4 rounded-2xl border border-white/10 text-white/75 font-semibold text-base hover:bg-white/5 hover:border-violet-500/30 hover:text-white transition-all duration-300",style:{transition:"transform 0.15s ease, border-color 0.3s ease, color 0.3s ease"},children:"Let's Talk"})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("a",{href:"https://github.com/sameeroz",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 hover:scale-110",children:w.jsx(ol,{size:16})}),w.jsx("a",{href:"https://www.linkedin.com/in/sameer-anwar-a8b1b5225/",target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-110",children:w.jsx(gu,{size:16})}),w.jsx("div",{className:"w-px h-5 bg-white/10 mx-1"}),w.jsx("span",{className:"text-white/25 text-xs font-mono tracking-widest",children:"@sameeroz"})]})]})]}),w.jsx("div",{className:`flex justify-center items-center order-1 lg:order-2 transition-all duration-1500 delay-700 ${t?"opacity-100 scale-100":"opacity-0 scale-95"}`,children:w.jsxs("div",{className:"relative w-full max-w-[420px] aspect-square",children:[w.jsx("div",{className:"absolute inset-0 rounded-full bg-violet-600/10 blur-[60px] animate-pulse-glow"}),w.jsx("div",{className:"absolute inset-[10%] rounded-full bg-cyan-500/8 blur-[40px] animate-float-slow"}),w.jsx("div",{className:"relative w-full h-full rounded-full overflow-visible",children:w.jsx(hI,{})}),w.jsxs("div",{className:"absolute -top-3 -right-4 glass-card rounded-2xl px-4 py-3 border border-violet-500/20 shadow-lg shadow-violet-500/10 animate-float",children:[w.jsx("p",{className:"text-white font-bold text-lg leading-none",children:"10+"}),w.jsx("p",{className:"text-white/50 text-xs mt-0.5",children:"AI Projects"})]}),w.jsxs("div",{className:"absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 animate-float-delayed",children:[w.jsx("p",{className:"text-white font-bold text-lg leading-none",children:"8+"}),w.jsx("p",{className:"text-white/50 text-xs mt-0.5",children:"Production Deploys"})]}),w.jsxs("div",{className:"absolute top-1/2 -right-8 -translate-y-1/2 glass-card rounded-2xl px-4 py-3 border border-white/8 animate-float-slow",children:[w.jsx("p",{className:"text-white font-bold text-lg leading-none",children:"2+"}),w.jsx("p",{className:"text-white/50 text-xs mt-0.5",children:"Years in AI"})]})]})})]}),w.jsx("div",{className:`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1500ms] ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-4"}`,children:w.jsxs("button",{onClick:()=>{var u;return(u=document.getElementById("about"))==null?void 0:u.scrollIntoView({behavior:"smooth"})},className:"flex flex-col items-center gap-2 text-white/25 hover:text-white/60 transition-colors group",children:[w.jsx("span",{className:"text-xs tracking-widest uppercase font-mono",children:"Scroll"}),w.jsx(Ub,{size:16,className:"animate-bounce"})]})})]})},oa=(t=.1)=>{const[e,n]=N.useState(!1),i=N.useRef(null);return N.useEffect(()=>{const r=new IntersectionObserver(([s])=>{s.isIntersecting&&n(!0)},{threshold:t});return i.current&&r.observe(i.current),()=>r.disconnect()},[t]),[i,e]},mI=lS("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function hl({className:t,variant:e,...n}){return w.jsx("div",{className:as(mI({variant:e}),t),...n})}const gI=[{icon:zb,value:"2+",label:"Years in AI"},{icon:jb,value:"10+",label:"AI Projects"},{icon:Xb,value:"8+",label:"Production Deployments"},{icon:uS,value:"AWS",label:"Certified"}],vI=["Retrieval-Augmented Generation (RAG)","Autonomous Agentic Workflows","Multilingual NLP (Arabic Focus)","Voice AI Pipelines","LLM Integration & Fine-tuning","Cloud Deployment (AWS)"],xI=()=>{const[t,e]=oa();return w.jsx("section",{id:"about",ref:t,className:"section-padding",children:w.jsxs("div",{className:"max-w-6xl mx-auto",children:[w.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4",children:"About Me"}),w.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4",children:w.jsx("span",{className:"text-gradient-primary",children:"Turning Ideas into Intelligent Systems"})})]}),w.jsxs("div",{className:"grid lg:grid-cols-5 gap-12 items-start",children:[w.jsxs("div",{className:`lg:col-span-3 transition-all duration-1000 delay-200 ${e?"translate-x-0 opacity-100":"-translate-x-8 opacity-0"}`,children:[w.jsxs("div",{className:"space-y-5 text-white/70 text-lg leading-relaxed",children:[w.jsxs("p",{children:["I'm a ",w.jsx("span",{className:"text-white font-medium",children:"results-driven AI Engineer"})," with hands-on experience architecting and deploying production-grade AI systems across diverse verticals — including"," ",w.jsx("span",{className:"text-violet-300",children:"e-commerce"}),","," ",w.jsx("span",{className:"text-cyan-300",children:"customer service"}),","," ",w.jsx("span",{className:"text-violet-300",children:"automotive"}),", and"," ",w.jsx("span",{className:"text-cyan-300",children:"enterprise ERP"}),"."]}),w.jsxs("p",{children:["My work spans the full AI lifecycle — from proof-of-concept through scalable cloud deployment. I specialize in building systems that don't just demo well, but"," ",w.jsx("span",{className:"text-white font-medium",children:"perform reliably in production"}),"."]}),w.jsx("p",{children:"Proficient in both open-source and cloud-hosted LLM ecosystems, I bring deep expertise in RAG architectures, autonomous agent design, multilingual NLP with a strong Arabic-language focus, and end-to-end Voice AI pipelines."})]}),w.jsx("div",{className:"flex flex-wrap gap-2 mt-8",children:vI.map(n=>w.jsx(hl,{variant:"secondary",className:"bg-white/5 text-white/80 border border-white/10 hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 px-3 py-1.5 text-sm",children:n},n))})]}),w.jsxs("div",{className:`lg:col-span-2 transition-all duration-1000 delay-400 ${e?"translate-x-0 opacity-100":"translate-x-8 opacity-0"}`,children:[w.jsx("div",{className:"grid grid-cols-2 gap-4",children:gI.map((n,i)=>w.jsxs("div",{className:`glass-card glass-card-hover glow-border rounded-2xl p-6 text-center transition-all duration-500 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,style:{transitionDelay:`${600+i*150}ms`},children:[w.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3",children:w.jsx(n.icon,{size:22,className:"text-violet-400"})}),w.jsx("div",{className:"text-3xl font-bold text-white mb-1",children:n.value}),w.jsx("div",{className:"text-sm text-white/50",children:n.label})]},n.label))}),w.jsxs("div",{className:"mt-4 glass-card glow-border rounded-2xl p-5 flex items-center gap-4",children:[w.jsx("div",{className:"w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0",children:w.jsx("span",{className:"text-2xl",children:"☁️"})}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-semibold text-sm",children:"AWS Certified Cloud Practitioner"}),w.jsx("p",{className:"text-white/40 text-xs mt-0.5",children:"Issued June 2025"})]})]})]})]})]})})},_I=[{title:"AI Engineer",company:"NexuMind",period:"May 2024 – Present",description:"Building production-grade AI systems spanning RAG, autonomous agents, Voice AI, and cloud deployments.",highlights:["Architected a university-grade internal Knowledge Base using RAG pipelines with support for local LLMs and AWS Bedrock cloud models","Engineered an AI Shopping Assistant for the Rakhys e-commerce platform with conversational AI and real-time Langfuse observability","Built a text-based Customer Service AI Agent with RAG integration, reducing human escalation rates within an existing support platform","Developed an AI Lead Qualification Agent for an automobile dealership, automating prospect engagement and sales funnel optimization","Designed an Agentic AI system integrated with Odoo ERP for autonomous sales orders, invoices, and multi-customer management via natural language","Delivered dual-mode Voice Agent — fully local (on-prem STT + LLM + TTS) and cloud-native — for privacy-constrained environments","Fine-tuned TTS models on Arabic dialects, producing high-fidelity, low-latency speech synthesis for production voice pipelines","Deployed a full-stack Customer Service Platform on AWS ECS with Docker containerization and CI/CD automation"],tech:["Python","LangChain","LlamaIndex","OpenAI","AWS Bedrock","RAG","Voice AI","Docker","AWS ECS","Langfuse","FastAPI"],accent:"from-violet-500 to-cyan-500"},{title:"Software Engineer",company:"Innova-Tech",period:"Dec 2023 – May 2024",description:"Mobile and web application development across client projects.",highlights:["Developed and delivered cross-platform mobile and web applications using Flutter, Laravel, and modern JavaScript frameworks","Adhered to agile delivery timelines across multiple concurrent client projects"],tech:["Flutter","Laravel","JavaScript","Dart","Firebase"],accent:"from-blue-500 to-violet-500"},{title:"Software Engineer",company:"Yemen Cloud",period:"Jul 2023 – Nov 2023",description:"Government-sector web application development.",highlights:["Engineered a comprehensive web application for the Yemen Medical Council","Managed physician registration, licensing workflows, and official documentation processes"],tech:["Laravel","PHP","MySQL","Web Development"],accent:"from-cyan-500 to-blue-500"}],yI=()=>{const[t,e]=oa();return w.jsx("section",{id:"experience",ref:t,className:"section-padding",children:w.jsxs("div",{className:"max-w-5xl mx-auto",children:[w.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4",children:"Career Path"}),w.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4",children:w.jsx("span",{className:"text-gradient-primary",children:"Professional Experience"})}),w.jsx("p",{className:"text-lg text-white/50 max-w-2xl mx-auto",children:"Building intelligent systems across diverse industries and platforms"})]}),w.jsxs("div",{className:"relative",children:[w.jsx("div",{className:"absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent"}),w.jsx("div",{className:"space-y-12",children:_I.map((n,i)=>w.jsxs("div",{className:`relative pl-8 md:pl-20 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,style:{transitionDelay:`${300+i*200}ms`},children:[w.jsxs("div",{className:"absolute left-0 md:left-8 -translate-x-1/2 top-2",children:[w.jsx("div",{className:`w-4 h-4 rounded-full bg-gradient-to-r ${n.accent} shadow-lg`}),w.jsx("div",{className:`absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r ${n.accent} animate-ping opacity-20`})]}),w.jsxs("div",{className:"glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500 hover:translate-x-1",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl md:text-2xl font-bold text-white group-hover:text-gradient-primary transition-all",children:n.title}),w.jsxs("div",{className:"flex items-center gap-3 mt-1 text-white/50 text-sm",children:[w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx(Vb,{size:14,className:"text-violet-400"}),n.company]}),w.jsxs("span",{className:"flex items-center gap-1.5",children:[w.jsx(Hb,{size:14,className:"text-cyan-400"}),n.period]})]})]}),i===0&&w.jsx(hl,{className:"bg-emerald-500/10 text-emerald-400 border-emerald-500/20 self-start text-xs",children:"Current"})]}),w.jsx("p",{className:"text-white/60 mb-5 text-sm",children:n.description}),w.jsx("ul",{className:"space-y-2.5 mb-6",children:n.highlights.map((r,s)=>w.jsxs("li",{className:"flex items-start gap-3 text-white/70 text-sm leading-relaxed",children:[w.jsx(Wb,{size:14,className:"text-violet-400 mt-1 flex-shrink-0"}),w.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:r})]},s))}),w.jsx("div",{className:"flex flex-wrap gap-2",children:n.tech.map(r=>w.jsx(hl,{variant:"secondary",className:"bg-white/5 text-white/60 border border-white/8 text-xs hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/20 transition-all duration-300",children:r},r))})]})]},i))})]})]})})},cx=[{title:"University Knowledge Base",description:"RAG pipeline with hybrid retrieval supporting local LLMs and AWS Bedrock cloud models for institutional document Q&A with high accuracy.",icon:Bb,tech:["RAG","AWS Bedrock","LangChain","Vector DB","Python"],category:"AI Systems",accent:"from-violet-500 to-purple-600",glowColor:"rgba(139,92,246,0.2)",featured:!0},{title:"Rakhys AI Shopping Assistant",description:"Conversational shopping agent with intent recognition and product recommendation, integrated with Langfuse for real-time tracing and evaluation.",icon:nT,tech:["LangChain","OpenAI","Langfuse","FastAPI","RAG"],category:"E-Commerce AI",accent:"from-cyan-500 to-blue-600",glowColor:"rgba(6,182,212,0.2)",featured:!0},{title:"Odoo ERP AI Agent",description:"Agentic system interfacing with Odoo ERP to autonomously create sales orders, generate invoices, and manage multi-customer records via natural language.",icon:kb,tech:["AI Agents","Odoo","Python","MCP","FastMCP"],category:"Enterprise AI",accent:"from-violet-600 to-indigo-600",glowColor:"rgba(99,102,241,0.2)",featured:!0},{title:"Dual-Mode Voice Agent",description:"Voice agent with two deployment strategies: fully on-premises stack (STT + LLM + TTS) and cloud-native — balancing privacy, cost, and latency.",icon:Qb,tech:["Voice AI","STT","TTS","LLM","LiveKit","Python"],category:"Voice AI",accent:"from-pink-500 to-violet-600",glowColor:"rgba(236,72,153,0.15)",featured:!0},{title:"Customer Service AI Agent",description:"Text-based autonomous support agent with RAG integration deployed inside an existing platform to reduce human escalation rates.",icon:Zb,tech:["RAG","LangChain","FastAPI","Python"],category:"AI Systems",accent:"from-blue-500 to-cyan-600",glowColor:"rgba(59,130,246,0.15)"},{title:"Automotive Lead Qualification",description:"AI agent that qualifies and engages inbound sales leads for an automobile dealership, automating early-stage CRM pipeline tasks.",icon:Gb,tech:["AI Agents","LLM","Python","Automation"],category:"Sales AI",accent:"from-amber-500 to-orange-600",glowColor:"rgba(245,158,11,0.15)"},{title:"Arabic TTS Fine-Tuning",description:"Fine-tuned leading TTS models on specific Arabic dialects, producing high-fidelity, low-latency speech synthesis for production voice pipelines.",icon:qb,tech:["TTS","Hugging Face","PyTorch","Arabic NLP"],category:"Voice AI",accent:"from-emerald-500 to-teal-600",glowColor:"rgba(16,185,129,0.15)"},{title:"Customer Service Platform — AWS",description:"End-to-end deployment of an AI-powered customer service platform and admin dashboard on AWS ECS using Docker and CI/CD pipelines.",icon:tT,tech:["AWS ECS","Docker","CI/CD","GitHub Actions","Next.js"],category:"DevOps",accent:"from-orange-500 to-red-600",glowColor:"rgba(249,115,22,0.15)"},{title:"Flutter Smart Home IoT App",description:"Mobile application integrating real-time IoT device control and monitoring via Flutter with responsive UI.",icon:iT,tech:["Flutter","Dart","IoT","Firebase"],category:"Mobile",accent:"from-sky-500 to-blue-600",glowColor:"rgba(14,165,233,0.15)"},{title:"Ministry Exam Simulator",description:"Flutter mobile app simulating official ministry examinations with an embedded AI assistant for guided learning.",icon:dS,tech:["Flutter","AI","Dart","Firebase"],category:"Mobile",accent:"from-teal-500 to-emerald-600",glowColor:"rgba(20,184,166,0.15)"}],SI=["All","AI Systems","Voice AI","Enterprise AI","E-Commerce AI","Sales AI","DevOps","Mobile"];function wI(t){return{handleMouseMove:i=>{const r=t.current;if(!r)return;const s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width-.5,a=(i.clientY-s.top)/s.height-.5;r.style.transform=`perspective(800px) rotateX(${-a*8}deg) rotateY(${o*8}deg) translateZ(4px)`},handleMouseLeave:()=>{const i=t.current;i&&(i.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)")}}}function MI({project:t,index:e,isVisible:n}){const i=N.useRef(null),{handleMouseMove:r,handleMouseLeave:s}=wI(i);return w.jsx("div",{className:`transition-all duration-700 ${n?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,style:{transitionDelay:`${400+e*80}ms`},children:w.jsxs("div",{ref:i,onMouseMove:r,onMouseLeave:s,className:"glass-card glass-card-hover glow-border holo-shimmer rounded-2xl p-7 h-full group cursor-default",style:{transition:"transform 0.25s cubic-bezier(0.23,1,0.32,1), background 0.35s, border-color 0.35s, box-shadow 0.35s",transformStyle:"preserve-3d"},children:[w.jsx("div",{className:`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${t.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}),w.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[w.jsx("div",{className:`w-11 h-11 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`,style:{boxShadow:`0 0 0 0 ${t.glowColor}`,transition:"transform 0.3s, box-shadow 0.3s"},onMouseEnter:o=>{o.currentTarget.style.boxShadow=`0 0 20px 4px ${t.glowColor}`},onMouseLeave:o=>{o.currentTarget.style.boxShadow=`0 0 0 0 ${t.glowColor}`},children:w.jsx(t.icon,{size:20,className:"text-white/90"})}),w.jsxs("div",{className:"flex-1 min-w-0",children:[w.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[w.jsx("h3",{className:"text-base font-bold text-white group-hover:text-gradient-primary transition-all truncate",children:t.title}),t.featured&&w.jsx(hS,{size:12,className:"text-amber-400 flex-shrink-0",fill:"currentColor"})]}),w.jsx("span",{className:"text-xs text-violet-400/60 font-medium",children:t.category})]})]}),w.jsx("p",{className:"text-white/50 text-sm leading-relaxed mb-5 group-hover:text-white/65 transition-colors duration-300",children:t.description}),w.jsx("div",{className:"flex flex-wrap gap-1.5 mt-auto",children:t.tech.map(o=>w.jsx("span",{className:"tech-tag",children:o},o))})]})})}const EI=()=>{const[t,e]=oa(),[n,i]=N.useState("All"),r=n==="All"?cx:cx.filter(s=>s.category===n);return w.jsx("section",{id:"projects",ref:t,className:"section-padding",children:w.jsxs("div",{className:"max-w-7xl mx-auto",children:[w.jsxs("div",{className:`text-center mb-14 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-xs font-bold tracking-[0.35em] uppercase mb-4",children:"Portfolio"}),w.jsx("h2",{className:"text-4xl md:text-5xl font-black mb-4 tracking-tight",children:w.jsx("span",{className:"text-gradient-primary",children:"Featured Projects"})}),w.jsx("p",{className:"text-lg text-white/40 max-w-2xl mx-auto",children:"Production-grade AI systems delivering real business value"})]}),w.jsx("div",{className:`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:SI.map(s=>w.jsx("button",{onClick:()=>i(s),className:`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${n===s?"bg-violet-500/15 text-violet-300 border border-violet-500/35 shadow-sm shadow-violet-500/10":"text-white/40 hover:text-white/70 hover:bg-white/4 border border-transparent"}`,children:s},s))}),w.jsx("div",{className:`mb-12 transition-all duration-1000 delay-300 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:w.jsxs("div",{className:"relative glass-deep rounded-2xl p-8 overflow-hidden group hover:border-violet-500/25 transition-all duration-500",children:[w.jsx("div",{className:"absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",style:{animation:"scan-line 2s linear infinite",top:0}}),w.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"}),w.jsxs("div",{className:"relative flex flex-col md:flex-row items-start md:items-center gap-6",children:[w.jsx("div",{className:"w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-500/25 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300",children:w.jsx(hS,{size:28,className:"text-violet-300"})}),w.jsxs("div",{className:"flex-1",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-2 flex-wrap",children:[w.jsx("h3",{className:"text-xl font-bold text-white",children:"Odoo MCP Server"}),w.jsx("span",{className:"tech-tag",style:{background:"rgba(139,92,246,0.12)",borderColor:"rgba(139,92,246,0.25)",color:"#c4b5fd"},children:"Open Source"}),w.jsx("span",{className:"tech-tag",style:{background:"rgba(16,185,129,0.1)",borderColor:"rgba(16,185,129,0.2)",color:"#6ee7b7"},children:"MIT License"})]}),w.jsx("p",{className:"text-white/55 text-sm mb-4 max-w-3xl leading-relaxed",children:"A production-ready Model Context Protocol (MCP) server bridging AI agents with Odoo ERP — supporting Claude Desktop, Cursor, VS Code Copilot, and Zed. Features product catalog retrieval with multi-language support, sales order creation, automated invoice generation, and payment processing."}),w.jsx("div",{className:"flex flex-wrap gap-2",children:["Python 3.12+","FastMCP","XML-RPC","MCP Protocol","Odoo ERP"].map(s=>w.jsx("span",{className:"tech-tag",children:s},s))})]}),w.jsxs("a",{href:"https://github.com/sameeroz/odoo-mcp-server",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card border border-white/10 text-white/60 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-300 text-sm font-semibold flex-shrink-0 group/btn",children:[w.jsx(ol,{size:15}),"View on GitHub",w.jsx($b,{size:11,className:"opacity-50 group-hover/btn:opacity-100 transition-opacity"})]})]})]})}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:r.map((s,o)=>w.jsx(MI,{project:s,index:o,isVisible:e},s.title))})]})})},bI=[{title:"AI / ML",icon:"🧠",skills:[{name:"LangChain",level:95},{name:"LlamaIndex",level:90},{name:"OpenAI API",level:95},{name:"Hugging Face",level:85},{name:"AWS Bedrock",level:85},{name:"vLLM",level:80}],gradientFrom:"#8b5cf6",gradientTo:"#7c3aed",glowColor:"rgba(139,92,246,0.25)"},{title:"RAG & Agents",icon:"🔗",skills:[{name:"RAG Pipelines",level:95},{name:"Agentic Workflows",level:95},{name:"Langfuse",level:90},{name:"MCP Protocol",level:90},{name:"Vector Databases",level:90},{name:"Prompt Engineering",level:95}],gradientFrom:"#06b6d4",gradientTo:"#0284c7",glowColor:"rgba(6,182,212,0.25)"},{title:"Voice AI",icon:"🎙️",skills:[{name:"TTS Fine-tuning",level:90},{name:"Speech-to-Text",level:85},{name:"LiveKit",level:85},{name:"Voice Pipelines",level:90}],gradientFrom:"#ec4899",gradientTo:"#8b5cf6",glowColor:"rgba(236,72,153,0.2)"},{title:"Languages",icon:"💻",skills:[{name:"Python",level:95},{name:"JavaScript",level:85},{name:"Dart",level:80},{name:"PHP",level:75}],gradientFrom:"#f59e0b",gradientTo:"#ea580c",glowColor:"rgba(245,158,11,0.2)"},{title:"Frameworks",icon:"⚡",skills:[{name:"FastAPI",level:95},{name:"Flask",level:85},{name:"Next.js",level:80},{name:"Flutter",level:85},{name:"Laravel",level:80}],gradientFrom:"#10b981",gradientTo:"#0d9488",glowColor:"rgba(16,185,129,0.2)"},{title:"Cloud & DevOps",icon:"☁️",skills:[{name:"AWS (ECS, Bedrock)",level:90},{name:"Docker",level:90},{name:"GitHub Actions",level:85},{name:"CI/CD Pipelines",level:85}],gradientFrom:"#3b82f6",gradientTo:"#06b6d4",glowColor:"rgba(59,130,246,0.2)"},{title:"Databases",icon:"🗄️",skills:[{name:"PostgreSQL",level:90},{name:"MongoDB",level:85},{name:"MySQL",level:85},{name:"Firebase",level:80}],gradientFrom:"#f97316",gradientTo:"#ef4444",glowColor:"rgba(249,115,22,0.2)"}];function TI({level:t,from:e,to:n,size:i=52}){const r=(i-6)/2,s=2*Math.PI*r,o=t/100*s,a=`grad-${e.replace("#","")}`;return w.jsxs("svg",{width:i,height:i,className:"flex-shrink-0",children:[w.jsx("defs",{children:w.jsxs("linearGradient",{id:a,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[w.jsx("stop",{offset:"0%",stopColor:e}),w.jsx("stop",{offset:"100%",stopColor:n})]})}),w.jsx("circle",{cx:i/2,cy:i/2,r,fill:"none",stroke:"rgba(255,255,255,0.06)",strokeWidth:3}),w.jsx("circle",{cx:i/2,cy:i/2,r,fill:"none",stroke:`url(#${a})`,strokeWidth:3,strokeLinecap:"round",strokeDasharray:`${o} ${s}`,transform:`rotate(-90 ${i/2} ${i/2})`,style:{filter:`drop-shadow(0 0 3px ${e}88)`}})]})}function AI({category:t,catIndex:e,isVisible:n}){const i=N.useRef(null),r=o=>{const a=i.current;if(!a)return;const l=a.getBoundingClientRect(),c=(o.clientX-l.left)/l.width-.5,d=(o.clientY-l.top)/l.height-.5;a.style.transform=`perspective(700px) rotateX(${-d*6}deg) rotateY(${c*6}deg) translateZ(4px)`},s=()=>{i.current&&(i.current.style.transform="perspective(700px) rotateX(0) rotateY(0) translateZ(0)")};return w.jsx("div",{className:`transition-all duration-700 ${n?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,style:{transitionDelay:`${200+e*90}ms`},children:w.jsxs("div",{ref:i,onMouseMove:r,onMouseLeave:s,className:"glass-card glass-card-hover glow-border rounded-2xl p-6 h-full group",style:{transition:"transform 0.25s cubic-bezier(0.23,1,0.32,1), background 0.35s, border-color 0.35s, box-shadow 0.35s",transformStyle:"preserve-3d"},children:[w.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[w.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300",style:{background:`linear-gradient(135deg, ${t.gradientFrom}22, ${t.gradientTo}22)`,boxShadow:`0 0 0 1px ${t.gradientFrom}25`},children:t.icon}),w.jsx("h3",{className:"font-bold text-sm uppercase tracking-wider",style:{color:t.gradientFrom},children:t.title})]}),w.jsx("div",{className:"space-y-3",children:t.skills.map(o=>w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx(TI,{level:n?o.level:0,from:t.gradientFrom,to:t.gradientTo,size:44}),w.jsxs("div",{className:"flex-1 min-w-0",children:[w.jsxs("div",{className:"flex justify-between items-baseline mb-1",children:[w.jsx("span",{className:"text-sm text-white/70 group-hover:text-white/90 transition-colors truncate",children:o.name}),w.jsxs("span",{className:"text-xs font-mono ml-2 flex-shrink-0",style:{color:t.gradientFrom+"bb"},children:[o.level,"%"]})]}),w.jsx("div",{className:"h-1 bg-white/5 rounded-full overflow-hidden",children:w.jsx("div",{className:"skill-bar-fill",style:{width:n?`${o.level}%`:"0%",background:`linear-gradient(90deg, ${t.gradientFrom}, ${t.gradientTo})`,transition:`width 1.2s cubic-bezier(0.34,1.56,0.64,1) ${800+e*80}ms`}})})]})]},o.name))})]})})}const CI=()=>{const[t,e]=oa();return w.jsx("section",{id:"skills",ref:t,className:"section-padding",children:w.jsxs("div",{className:"max-w-7xl mx-auto",children:[w.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-xs font-bold tracking-[0.35em] uppercase mb-4",children:"Expertise"}),w.jsx("h2",{className:"text-4xl md:text-5xl font-black mb-4 tracking-tight",children:w.jsx("span",{className:"text-gradient-primary",children:"Technical Skills"})}),w.jsx("p",{className:"text-lg text-white/40 max-w-2xl mx-auto",children:"The tools and technologies I use to build intelligent solutions"})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:bI.map((n,i)=>w.jsx(AI,{category:n,catIndex:i,isVisible:e},n.title))})]})})},RI=()=>{const[t,e]=oa();return w.jsx("section",{ref:t,className:"section-padding",children:w.jsxs("div",{className:"max-w-5xl mx-auto",children:[w.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4",children:"Background"}),w.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4",children:w.jsx("span",{className:"text-gradient-primary",children:"Education & Certifications"})})]}),w.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[w.jsx("div",{className:`transition-all duration-1000 delay-200 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:w.jsxs("div",{className:"glass-card glass-card-hover glow-border rounded-2xl p-8 h-full group transition-all duration-500",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[w.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center",children:w.jsx(dS,{size:24,className:"text-violet-400"})}),w.jsx("h3",{className:"font-bold text-white text-lg",children:"Education"})]}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"border-l-2 border-violet-500/30 pl-5",children:[w.jsx("h4",{className:"text-white font-semibold",children:"B.Sc. in Computer Science"}),w.jsx("p",{className:"text-white/50 text-sm mt-1",children:"International University of TwinTech"}),w.jsx("p",{className:"text-white/40 text-xs mt-1",children:"Oct 2020 – May 2024"}),w.jsx(hl,{className:"mt-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs",children:"GPA: 3.95 / 4.0"})]}),w.jsxs("div",{className:"border-l-2 border-cyan-500/30 pl-5",children:[w.jsx("h4",{className:"text-white font-semibold",children:"High School — GCSE"}),w.jsx("p",{className:"text-white/50 text-sm mt-1",children:"Euro School · Scientific Stream, English Section"}),w.jsx("p",{className:"text-white/40 text-xs mt-1",children:"Graduated 2018"}),w.jsx(hl,{className:"mt-2 bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-xs",children:"GPA: 88.03%"})]})]})]})}),w.jsx("div",{className:`transition-all duration-1000 delay-400 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{className:"glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[w.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center",children:w.jsx(uS,{size:24,className:"text-amber-400"})}),w.jsx("h3",{className:"font-bold text-white text-lg",children:"Certifications"})]}),w.jsxs("div",{className:"space-y-4",children:[w.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors",children:[w.jsx("span",{className:"text-2xl",children:"☁️"}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-medium text-sm",children:"AWS Certified Cloud Practitioner"}),w.jsx("p",{className:"text-white/40 text-xs",children:"June 2025"})]})]}),w.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors",children:[w.jsx("span",{className:"text-2xl",children:"🎓"}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-medium text-sm",children:"INJAZ Yemen Trainee"}),w.jsx("p",{className:"text-white/40 text-xs",children:"Jul 2022 – Oct 2022"})]})]})]})]}),w.jsxs("div",{className:"glass-card glass-card-hover glow-border rounded-2xl p-8 group transition-all duration-500",children:[w.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[w.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center",children:w.jsx(sT,{size:24,className:"text-cyan-400"})}),w.jsx("h3",{className:"font-bold text-white text-lg",children:"Leadership"})]}),w.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] hover:bg-white/5 transition-colors",children:[w.jsx("span",{className:"text-2xl",children:"🚀"}),w.jsxs("div",{children:[w.jsx("p",{className:"text-white font-medium text-sm",children:"AWS Cloud Club Captain"}),w.jsx("p",{className:"text-white/40 text-xs",children:"Aug 2023 – Aug 2024"})]})]})]})]})})]})]})})},PI=[{icon:fS,label:"Email",value:"gdrboy11@gmail.com",link:"mailto:gdrboy11@gmail.com",accent:"from-violet-500 to-purple-600"},{icon:Jb,label:"Phone",value:"+967 775 657 990",link:"tel:+967775657990",accent:"from-cyan-500 to-blue-600"},{icon:Yb,label:"Location",value:"Sana'a, Yemen",link:null,accent:"from-emerald-500 to-teal-600"}],NI=[{icon:gu,label:"LinkedIn",href:"https://www.linkedin.com/in/sameer-anwar-a8b1b5225/",color:"hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/30"},{icon:ol,label:"GitHub",href:"https://github.com/sameeroz",color:"hover:bg-white/10 hover:text-white hover:border-white/20"}],LI=()=>{const[t,e]=oa();return w.jsxs("section",{id:"contact",ref:t,className:"section-padding relative",children:[w.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"}),w.jsxs("div",{className:"max-w-4xl mx-auto relative z-10",children:[w.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:[w.jsx("p",{className:"text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4",children:"Get in Touch"}),w.jsx("h2",{className:"text-4xl md:text-6xl font-bold mb-6",children:w.jsx("span",{className:"text-gradient-primary",children:"Let's Build Together"})}),w.jsx("p",{className:"text-lg text-white/50 max-w-xl mx-auto",children:"Ready to bring AI into your business? I'm always excited to collaborate on innovative projects that push boundaries."})]}),w.jsx("div",{className:`text-center mb-16 transition-all duration-1000 delay-300 ${e?"scale-100 opacity-100":"scale-95 opacity-0"}`,children:w.jsxs("a",{href:"mailto:gdrboy11@gmail.com",className:"inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xl font-bold shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 transition-all duration-300 hover:scale-[1.03] group",children:[w.jsx(eT,{size:22,className:"group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"}),"Start a Conversation",w.jsx(Fb,{size:18,className:"opacity-50 group-hover:opacity-100 transition-opacity"})]})}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12",children:PI.map((n,i)=>w.jsx("div",{className:`transition-all duration-700 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,style:{transitionDelay:`${500+i*100}ms`},children:n.link?w.jsxs("a",{href:n.link,className:"glass-card glass-card-hover glow-border rounded-2xl p-6 flex flex-col items-center text-center group transition-all duration-500 block",children:[w.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${n.accent} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`,style:{background:"linear-gradient(135deg, var(--tw-gradient-from) / 0.2, var(--tw-gradient-to) / 0.2)"},children:w.jsx(n.icon,{size:20,className:"text-white/80"})}),w.jsx("p",{className:"text-xs text-white/40 mb-1",children:n.label}),w.jsx("p",{className:"text-white/80 font-medium text-sm group-hover:text-white transition-colors",children:n.value})]}):w.jsxs("div",{className:"glass-card rounded-2xl p-6 flex flex-col items-center text-center",children:[w.jsx("div",{className:`w-12 h-12 rounded-xl bg-gradient-to-br ${n.accent} flex items-center justify-center mb-3`,style:{background:"linear-gradient(135deg, var(--tw-gradient-from) / 0.2, var(--tw-gradient-to) / 0.2)"},children:w.jsx(n.icon,{size:20,className:"text-white/80"})}),w.jsx("p",{className:"text-xs text-white/40 mb-1",children:n.label}),w.jsx("p",{className:"text-white/80 font-medium text-sm",children:n.value})]})},n.label))}),w.jsx("div",{className:`flex justify-center gap-4 transition-all duration-1000 delay-900 ${e?"translate-y-0 opacity-100":"translate-y-8 opacity-0"}`,children:NI.map(n=>w.jsx("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",className:`w-14 h-14 rounded-2xl glass-card border border-white/8 flex items-center justify-center text-white/50 transition-all duration-300 hover:scale-110 ${n.color}`,children:w.jsx(n.icon,{size:22})},n.label))})]})]})},DI=()=>{const[t,e]=N.useState(!1);return N.useEffect(()=>{const n=()=>e(window.scrollY>600);return window.addEventListener("scroll",n,{passive:!0}),()=>window.removeEventListener("scroll",n)},[]),w.jsxs("div",{className:"min-h-screen bg-background text-foreground noise-overlay grid-pattern",children:[w.jsx(fI,{}),w.jsx(J2,{}),w.jsxs("main",{className:"relative z-10",children:[w.jsx(pI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(xI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(yI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(EI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(CI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(RI,{}),w.jsx("div",{className:"section-divider mx-auto"}),w.jsx(LI,{})]}),w.jsx("footer",{className:"relative z-10 border-t border-white/5 py-10",children:w.jsx("div",{className:"max-w-7xl mx-auto px-6",children:w.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"text-gradient-primary font-bold text-lg",children:"SA"}),w.jsx("span",{className:"text-white/20 text-sm",children:"·"}),w.jsxs("p",{className:"text-white/30 text-sm",children:["© ",new Date().getFullYear()," Sameer Saeed Anwar"]})]}),w.jsx("p",{className:"text-white/15 text-xs font-mono tracking-wide",children:"Built with React · TypeScript · Three.js · Tailwind"})]})})}),w.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-violet-600/80 backdrop-blur-sm text-white flex items-center justify-center shadow-xl shadow-violet-500/25 hover:bg-violet-500 transition-all duration-300 hover:scale-110 ${t?"translate-y-0 opacity-100":"translate-y-16 opacity-0 pointer-events-none"}`,children:w.jsx(Ob,{size:18})})]})},II=()=>{const t=h1();return N.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),w.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:w.jsxs("div",{className:"text-center",children:[w.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404"}),w.jsx("p",{className:"text-xl text-gray-600 mb-4",children:"Oops! Page not found"}),w.jsx("a",{href:"/",className:"text-blue-500 hover:text-blue-700 underline",children:"Return to Home"})]})})},UI=new f2,FI=()=>w.jsx(p2,{client:UI,children:w.jsxs(GC,{children:[w.jsx(VT,{}),w.jsx(gA,{}),w.jsx(Q2,{children:w.jsxs(Y2,{children:[w.jsx(kh,{path:"/",element:w.jsx(DI,{})}),w.jsx(kh,{path:"*",element:w.jsx(II,{})})]})})]})});Ly(document.getElementById("root")).render(w.jsx(FI,{}));
