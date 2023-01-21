function m_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ao={},y_={get exports(){return Ao},set exports(t){Ao=t}},qu={},x={},v_={get exports(){return x},set exports(t){x=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),w_=Symbol.for("react.portal"),E_=Symbol.for("react.fragment"),S_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),C_=Symbol.for("react.context"),I_=Symbol.for("react.forward_ref"),k_=Symbol.for("react.suspense"),x_=Symbol.for("react.memo"),A_=Symbol.for("react.lazy"),$g=Symbol.iterator;function b_(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var r1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,s1={};function Is(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o1(){}o1.prototype=Is.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=s1,this.updater=n||r1}var up=lp.prototype=new o1;up.constructor=lp;i1(up,Is.prototype);up.isPureReactComponent=!0;var Lg=Array.isArray,a1=Object.prototype.hasOwnProperty,cp={current:null},l1={key:!0,ref:!0,__self:!0,__source:!0};function u1(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)a1.call(e,r)&&!l1.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:cp.current}}function R_(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function O_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mg=/\/+/g;function hh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O_(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case w_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hh(o,0):r,Lg(i)?(n="",t!=null&&(n=t.replace(Mg,"$&/")+"/"),gl(i,e,n,"",function(u){return u})):i!=null&&(hp(i)&&(i=R_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+hh(s,a);o+=gl(s,e,n,l,i)}else if(l=b_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+hh(s,a++),o+=gl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function N_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},yl={transition:null},P_={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:yl,ReactCurrentOwner:cp};ie.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Is;ie.Fragment=E_;ie.Profiler=T_;ie.PureComponent=lp;ie.StrictMode=S_;ie.Suspense=k_;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i1({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a1.call(e,l)&&!l1.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:C_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};ie.createElement=u1;ie.createFactory=function(t){var e=u1.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:I_,render:t}};ie.isValidElement=hp;ie.lazy=function(t){return{$$typeof:A_,_payload:{_status:-1,_result:t},_init:N_}};ie.memo=function(t,e){return{$$typeof:x_,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return bt.current.useCallback(t,e)};ie.useContext=function(t){return bt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return bt.current.useEffect(t,e)};ie.useId=function(){return bt.current.useId()};ie.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return bt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};ie.useRef=function(t){return bt.current.useRef(t)};ie.useState=function(t){return bt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return bt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(v_);const Ae=g_(x),gd=m_({__proto__:null,default:Ae},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_=x,$_=Symbol.for("react.element"),L_=Symbol.for("react.fragment"),M_=Object.prototype.hasOwnProperty,U_=D_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F_={key:!0,ref:!0,__self:!0,__source:!0};function c1(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)M_.call(e,r)&&!F_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$_,type:t,key:s,ref:o,props:i,_owner:U_.current}}qu.Fragment=L_;qu.jsx=c1;qu.jsxs=c1;(function(t){t.exports=qu})(y_);const j_=Ao.Fragment,T=Ao.jsx,z=Ao.jsxs;var yd={},Fl={},V_={get exports(){return Fl},set exports(t){Fl=t}},Wt={},vd={},z_={get exports(){return vd},set exports(t){vd=t}},h1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,H){var G=b.length;b.push(H);e:for(;0<G;){var ye=G-1>>>1,N=b[ye];if(0<i(N,H))b[ye]=H,b[G]=N,G=ye;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var H=b[0],G=b.pop();if(G!==H){b[0]=G;e:for(var ye=0,N=b.length,D=N>>>1;ye<D;){var $=2*(ye+1)-1,Q=b[$],S=$+1,se=b[S];if(0>i(Q,G))S<N&&0>i(se,Q)?(b[ye]=se,b[S]=G,ye=S):(b[ye]=Q,b[$]=G,ye=$);else if(S<N&&0>i(se,G))b[ye]=se,b[S]=G,ye=S;else break e}}return H}function i(b,H){var G=b.sortIndex-H.sortIndex;return G!==0?G:b.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var H=n(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=b)r(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(u)}}function w(b){if(y=!1,v(b),!g)if(n(l)!==null)g=!0,An(_);else{var H=n(u);H!==null&&It(w,H.startTime-b)}}function _(b,H){g=!1,y&&(y=!1,m(P),P=-1),p=!0;var G=d;try{for(v(H),h=n(l);h!==null&&(!(h.expirationTime>H)||b&&!_e());){var ye=h.callback;if(typeof ye=="function"){h.callback=null,d=h.priorityLevel;var N=ye(h.expirationTime<=H);H=t.unstable_now(),typeof N=="function"?h.callback=N:h===n(l)&&r(l),v(H)}else r(l);h=n(l)}if(h!==null)var D=!0;else{var $=n(u);$!==null&&It(w,$.startTime-H),D=!1}return D}finally{h=null,d=G,p=!1}}var A=!1,R=null,P=-1,J=5,F=-1;function _e(){return!(t.unstable_now()-F<J)}function Be(){if(R!==null){var b=t.unstable_now();F=b;var H=!0;try{H=R(!0,b)}finally{H?et():(A=!1,R=null)}}else A=!1}var et;if(typeof f=="function")et=function(){f(Be)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,ct=Mt.port2;Mt.port1.onmessage=Be,et=function(){ct.postMessage(null)}}else et=function(){E(Be,0)};function An(b){R=b,A||(A=!0,et())}function It(b,H){P=E(function(){b(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,An(_))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var G=d;d=H;try{return b()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,H){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var G=d;d=b;try{return H()}finally{d=G}},t.unstable_scheduleCallback=function(b,H,G){var ye=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ye+G:ye):G=ye,b){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=G+N,b={id:c++,callback:H,priorityLevel:b,startTime:G,expirationTime:N,sortIndex:-1},G>ye?(b.sortIndex=G,e(u,b),n(l)===null&&b===n(u)&&(y?(m(P),P=-1):y=!0,It(w,G-ye))):(b.sortIndex=N,e(l,b),g||p||(g=!0,An(_))),b},t.unstable_shouldYield=_e,t.unstable_wrapCallback=function(b){var H=d;return function(){var G=d;d=H;try{return b.apply(this,arguments)}finally{d=G}}}})(h1);(function(t){t.exports=h1})(z_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1=x,zt=vd;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f1=new Set,bo={};function gi(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(bo[t]=e,t=0;t<e.length;t++)f1.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,B_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Fg={};function H_(t){return wd.call(Fg,t)?!0:wd.call(Ug,t)?!1:B_.test(t)?Fg[t]=!0:(Ug[t]=!0,!1)}function W_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q_(t,e,n,r){if(e===null||typeof e>"u"||W_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Rt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new Rt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new Rt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new Rt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new Rt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new Rt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new Rt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new Rt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new Rt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new Rt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dp=/[\-:]([a-z])/g;function fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dp,fp);lt[e]=new Rt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dp,fp);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dp,fp);lt[e]=new Rt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new Rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new Rt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pp(t,e,n,r){var i=lt.hasOwnProperty(e)?lt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q_(e,n,i,r)&&(n=null),r||i===null?H_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gn=d1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ha=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),Ed=Symbol.for("react.profiler"),p1=Symbol.for("react.provider"),m1=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),g1=Symbol.for("react.offscreen"),jg=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=jg&&t[jg]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,dh;function Zs(t){if(dh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dh=e&&e[1]||""}return`
`+dh+t}var fh=!1;function ph(t,e){if(!t||fh)return"";fh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{fh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function K_(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=ph(t.type,!1),t;case 11:return t=ph(t.type.render,!1),t;case 1:return t=ph(t.type,!0),t;default:return""}}function _d(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case bi:return"Portal";case Ed:return"Profiler";case mp:return"StrictMode";case Sd:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m1:return(t.displayName||"Context")+".Consumer";case p1:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:_d(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return _d(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _d(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function y1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q_(t){var e=y1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=Q_(t))}function v1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=y1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cd(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w1(t,e){e=e.checked,e!=null&&pp(t,"checked",e,!1)}function Id(t,e){w1(t,e);var n=br(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&kd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kd(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var eo=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(eo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function E1(t,e){var n=br(e.value),r=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,T1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Y_=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){Y_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function _1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function C1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var X_=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bd(t,e){if(e){if(X_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,qi=null,Ki=null;function Wg(t){if(t=ma(t)){if(typeof Nd!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Xu(e),Nd(t.stateNode,t.type,e))}}function I1(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function k1(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Wg(t),e)for(t=0;t<e.length;t++)Wg(e[t])}}function x1(t,e){return t(e)}function A1(){}var mh=!1;function b1(t,e,n){if(mh)return t(e,n);mh=!0;try{return x1(t,e,n)}finally{mh=!1,(qi!==null||Ki!==null)&&(A1(),k1())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=Xu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Pd=!1;if(Un)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Pd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Pd=!1}function J_(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var fo=!1,Vl=null,zl=!1,Dd=null,Z_={onError:function(t){fo=!0,Vl=t}};function eC(t,e,n,r,i,s,o,a,l){fo=!1,Vl=null,J_.apply(Z_,arguments)}function tC(t,e,n,r,i,s,o,a,l){if(eC.apply(this,arguments),fo){if(fo){var u=Vl;fo=!1,Vl=null}else throw Error(I(198));zl||(zl=!0,Dd=u)}}function yi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function R1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(yi(t)!==t)throw Error(I(188))}function nC(t){var e=t.alternate;if(!e){if(e=yi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qg(i),t;if(s===r)return qg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function O1(t){return t=nC(t),t!==null?N1(t):null}function N1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N1(t);if(e!==null)return e;t=t.sibling}return null}var P1=zt.unstable_scheduleCallback,Kg=zt.unstable_cancelCallback,rC=zt.unstable_shouldYield,iC=zt.unstable_requestPaint,Le=zt.unstable_now,sC=zt.unstable_getCurrentPriorityLevel,wp=zt.unstable_ImmediatePriority,D1=zt.unstable_UserBlockingPriority,Bl=zt.unstable_NormalPriority,oC=zt.unstable_LowPriority,$1=zt.unstable_IdlePriority,Ku=null,En=null;function aC(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var cn=Math.clz32?Math.clz32:cC,lC=Math.log,uC=Math.LN2;function cC(t){return t>>>=0,t===0?32:31-(lC(t)/uC|0)|0}var Ka=64,Ga=4194304;function to(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=to(a):(s&=o,s!==0&&(r=to(s)))}else o=n&~i,o!==0?r=to(o):s!==0&&(r=to(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-cn(e),i=1<<n,r|=t[n],e&=~i;return r}function hC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-cn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=hC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function $d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function L1(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function gh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-cn(e),t[e]=n}function fC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-cn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function M1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U1,Sp,F1,j1,V1,Ld=!1,Qa=[],dr=null,fr=null,pr=null,No=new Map,Po=new Map,tr=[],pC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gg(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function mC(t,e,n,r,i){switch(e){case"focusin":return dr=Hs(dr,t,e,n,r,i),!0;case"dragenter":return fr=Hs(fr,t,e,n,r,i),!0;case"mouseover":return pr=Hs(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Hs(No.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Hs(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function z1(t){var e=Wr(t.target);if(e!==null){var n=yi(e);if(n!==null){if(e=n.tag,e===13){if(e=R1(n),e!==null){t.blockedOn=e,V1(t.priority,function(){F1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Od=r,n.target.dispatchEvent(r),Od=null}else return e=ma(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function Qg(t,e,n){vl(t)&&n.delete(e)}function gC(){Ld=!1,dr!==null&&vl(dr)&&(dr=null),fr!==null&&vl(fr)&&(fr=null),pr!==null&&vl(pr)&&(pr=null),No.forEach(Qg),Po.forEach(Qg)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Ld||(Ld=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,gC)))}function Do(t){function e(i){return Ws(i,t)}if(0<Qa.length){Ws(Qa[0],t);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Ws(dr,t),fr!==null&&Ws(fr,t),pr!==null&&Ws(pr,t),No.forEach(e),Po.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)z1(n),n.blockedOn===null&&tr.shift()}var Gi=Gn.ReactCurrentBatchConfig,Wl=!0;function yC(t,e,n,r){var i=pe,s=Gi.transition;Gi.transition=null;try{pe=1,Tp(t,e,n,r)}finally{pe=i,Gi.transition=s}}function vC(t,e,n,r){var i=pe,s=Gi.transition;Gi.transition=null;try{pe=4,Tp(t,e,n,r)}finally{pe=i,Gi.transition=s}}function Tp(t,e,n,r){if(Wl){var i=Md(t,e,n,r);if(i===null)kh(t,e,r,ql,n),Gg(t,r);else if(mC(i,t,e,n,r))r.stopPropagation();else if(Gg(t,r),e&4&&-1<pC.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&U1(s),s=Md(t,e,n,r),s===null&&kh(t,e,r,ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kh(t,e,r,null,n)}}var ql=null;function Md(t,e,n,r){if(ql=null,t=vp(r),t=Wr(t),t!==null)if(e=yi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=R1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function B1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sC()){case wp:return 1;case D1:return 4;case Bl:case oC:return 16;case $1:return 536870912;default:return 16}default:return 16}}var lr=null,_p=null,wl=null;function H1(){if(wl)return wl;var t,e=_p,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Yg(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Yg,this.isPropagationStopped=Yg,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cp=qt(ks),pa=Re({},ks,{view:0,detail:0}),wC=qt(pa),yh,vh,qs,Gu=Re({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(yh=t.screenX-qs.screenX,vh=t.screenY-qs.screenY):vh=yh=0,qs=t),yh)},movementY:function(t){return"movementY"in t?t.movementY:vh}}),Xg=qt(Gu),EC=Re({},Gu,{dataTransfer:0}),SC=qt(EC),TC=Re({},pa,{relatedTarget:0}),wh=qt(TC),_C=Re({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),CC=qt(_C),IC=Re({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kC=qt(IC),xC=Re({},ks,{data:0}),Jg=qt(xC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RC[t])?!!e[t]:!1}function Ip(){return OC}var NC=Re({},pa,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PC=qt(NC),DC=Re({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=qt(DC),$C=Re({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),LC=qt($C),MC=Re({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),UC=qt(MC),FC=Re({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jC=qt(FC),VC=[9,13,27,32],kp=Un&&"CompositionEvent"in window,po=null;Un&&"documentMode"in document&&(po=document.documentMode);var zC=Un&&"TextEvent"in window&&!po,W1=Un&&(!kp||po&&8<po&&11>=po),ey=String.fromCharCode(32),ty=!1;function q1(t,e){switch(t){case"keyup":return VC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function K1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function BC(t,e){switch(t){case"compositionend":return K1(e);case"keypress":return e.which!==32?null:(ty=!0,ey);case"textInput":return t=e.data,t===ey&&ty?null:t;default:return null}}function HC(t,e){if(Oi)return t==="compositionend"||!kp&&q1(t,e)?(t=H1(),wl=_p=lr=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return W1&&e.locale!=="ko"?null:e.data;default:return null}}var WC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WC[t.type]:e==="textarea"}function G1(t,e,n,r){I1(r),e=Kl(e,"onChange"),0<e.length&&(n=new Cp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,$o=null;function qC(t){sw(t,0)}function Qu(t){var e=Di(t);if(v1(e))return t}function KC(t,e){if(t==="change")return e}var Q1=!1;if(Un){var Eh;if(Un){var Sh="oninput"in document;if(!Sh){var ry=document.createElement("div");ry.setAttribute("oninput","return;"),Sh=typeof ry.oninput=="function"}Eh=Sh}else Eh=!1;Q1=Eh&&(!document.documentMode||9<document.documentMode)}function iy(){mo&&(mo.detachEvent("onpropertychange",Y1),$o=mo=null)}function Y1(t){if(t.propertyName==="value"&&Qu($o)){var e=[];G1(e,$o,t,vp(t)),b1(qC,e)}}function GC(t,e,n){t==="focusin"?(iy(),mo=e,$o=n,mo.attachEvent("onpropertychange",Y1)):t==="focusout"&&iy()}function QC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu($o)}function YC(t,e){if(t==="click")return Qu(e)}function XC(t,e){if(t==="input"||t==="change")return Qu(e)}function JC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dn=typeof Object.is=="function"?Object.is:JC;function Lo(t,e){if(dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wd.call(e,i)||!dn(t[i],e[i]))return!1}return!0}function sy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oy(t,e){var n=sy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sy(n)}}function X1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J1(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZC(t){var e=J1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X1(n.ownerDocument.documentElement,n)){if(r!==null&&xp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=oy(n,s);var o=oy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var eI=Un&&"documentMode"in document&&11>=document.documentMode,Ni=null,Ud=null,go=null,Fd=!1;function ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||Ni==null||Ni!==jl(r)||(r=Ni,"selectionStart"in r&&xp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&Lo(go,r)||(go=r,r=Kl(Ud,"onSelect"),0<r.length&&(e=new Cp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Pi={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionend:Xa("Transition","TransitionEnd")},Th={},Z1={};Un&&(Z1=document.createElement("div").style,"AnimationEvent"in window||(delete Pi.animationend.animation,delete Pi.animationiteration.animation,delete Pi.animationstart.animation),"TransitionEvent"in window||delete Pi.transitionend.transition);function Yu(t){if(Th[t])return Th[t];if(!Pi[t])return t;var e=Pi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Z1)return Th[t]=e[n];return t}var ew=Yu("animationend"),tw=Yu("animationiteration"),nw=Yu("animationstart"),rw=Yu("transitionend"),iw=new Map,ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){iw.set(t,e),gi(e,[t])}for(var _h=0;_h<ly.length;_h++){var Ch=ly[_h],tI=Ch.toLowerCase(),nI=Ch[0].toUpperCase()+Ch.slice(1);Lr(tI,"on"+nI)}Lr(ew,"onAnimationEnd");Lr(tw,"onAnimationIteration");Lr(nw,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(rw,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rI=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function uy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,tC(r,e,void 0,t),t.currentTarget=null}function sw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uy(i,a,u),s=l}}}if(zl)throw t=Dd,zl=!1,Dd=null,t}function Ee(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var r=t+"__bubble";n.has(r)||(ow(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),ow(n,t,r,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Mo(t){if(!t[Ja]){t[Ja]=!0,f1.forEach(function(n){n!=="selectionchange"&&(rI.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,Ih("selectionchange",!1,e))}}function ow(t,e,n,r){switch(B1(e)){case 1:var i=yC;break;case 4:i=vC;break;default:i=Tp}n=i.bind(null,e,n,t),i=void 0,!Pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}b1(function(){var u=s,c=vp(n),h=[];e:{var d=iw.get(t);if(d!==void 0){var p=Cp,g=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":p=PC;break;case"focusin":g="focus",p=wh;break;case"focusout":g="blur",p=wh;break;case"beforeblur":case"afterblur":p=wh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=SC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LC;break;case ew:case tw:case nw:p=CC;break;case rw:p=UC;break;case"scroll":p=wC;break;case"wheel":p=jC;break;case"copy":case"cut":case"paste":p=kC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?d!==null?d+"Capture":null:d;y=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,m!==null&&(w=Oo(f,m),w!=null&&y.push(Uo(f,w,v)))),E)break;f=f.return}0<y.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Od&&(g=n.relatedTarget||n.fromElement)&&(Wr(g)||g[Fn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Wr(g):null,g!==null&&(E=yi(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Xg,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zg,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=p==null?d:Di(p),v=g==null?d:Di(g),d=new y(w,f+"leave",p,n,c),d.target=E,d.relatedTarget=v,w=null,Wr(c)===u&&(y=new y(m,f+"enter",g,n,c),y.target=v,y.relatedTarget=E,w=y),E=w,p&&g)t:{for(y=p,m=g,f=0,v=y;v;v=Ci(v))f++;for(v=0,w=m;w;w=Ci(w))v++;for(;0<f-v;)y=Ci(y),f--;for(;0<v-f;)m=Ci(m),v--;for(;f--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ci(y),m=Ci(m)}y=null}else y=null;p!==null&&cy(h,d,p,y,!1),g!==null&&E!==null&&cy(h,E,g,y,!0)}}e:{if(d=u?Di(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var _=KC;else if(ny(d))if(Q1)_=XC;else{_=QC;var A=GC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(_=YC);if(_&&(_=_(t,u))){G1(h,_,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&kd(d,"number",d.value)}switch(A=u?Di(u):window,t){case"focusin":(ny(A)||A.contentEditable==="true")&&(Ni=A,Ud=u,go=null);break;case"focusout":go=Ud=Ni=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,ay(h,n,c);break;case"selectionchange":if(eI)break;case"keydown":case"keyup":ay(h,n,c)}var R;if(kp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Oi?q1(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(W1&&n.locale!=="ko"&&(Oi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Oi&&(R=H1()):(lr=c,_p="value"in lr?lr.value:lr.textContent,Oi=!0)),A=Kl(u,P),0<A.length&&(P=new Jg(P,t,null,n,c),h.push({event:P,listeners:A}),R?P.data=R:(R=K1(n),R!==null&&(P.data=R)))),(R=zC?BC(t,n):HC(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new Jg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=R))}sw(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=Oo(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function Ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Oo(n,s),l!=null&&o.unshift(Uo(n,l,a))):i||(l=Oo(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var iI=/\r\n?/g,sI=/\u0000|\uFFFD/g;function hy(t){return(typeof t=="string"?t:""+t).replace(iI,`
`).replace(sI,"")}function Za(t,e,n){if(e=hy(e),hy(t)!==e&&n)throw Error(I(425))}function Gl(){}var jd=null,Vd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,oI=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,aI=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(t){return dy.resolve(null).then(t).catch(lI)}:Bd;function lI(t){setTimeout(function(){throw t})}function xh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Do(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Do(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yn="__reactFiber$"+xs,Fo="__reactProps$"+xs,Fn="__reactContainer$"+xs,Hd="__reactEvents$"+xs,uI="__reactListeners$"+xs,cI="__reactHandles$"+xs;function Wr(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fy(t);t!==null;){if(n=t[yn])return n;t=fy(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[yn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Xu(t){return t[Fo]||null}var Wd=[],$i=-1;function Mr(t){return{current:t}}function Te(t){0>$i||(t.current=Wd[$i],Wd[$i]=null,$i--)}function ve(t,e){$i++,Wd[$i]=t.current,t.current=e}var Rr={},St=Mr(Rr),Dt=Mr(!1),ri=Rr;function as(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Ql(){Te(Dt),Te(St)}function py(t,e,n){if(St.current!==Rr)throw Error(I(168));ve(St,e),ve(Dt,n)}function aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,G_(t)||"Unknown",i));return Re({},n,r)}function Yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,ri=St.current,ve(St,t),ve(Dt,Dt.current),!0}function my(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=aw(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,Te(Dt),Te(St),ve(St,t)):Te(Dt),ve(Dt,n)}var Rn=null,Ju=!1,Ah=!1;function lw(t){Rn===null?Rn=[t]:Rn.push(t)}function hI(t){Ju=!0,lw(t)}function Ur(){if(!Ah&&Rn!==null){Ah=!0;var t=0,e=pe;try{var n=Rn;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,Ju=!1}catch(i){throw Rn!==null&&(Rn=Rn.slice(t+1)),P1(wp,Ur),i}finally{pe=e,Ah=!1}}return null}var Li=[],Mi=0,Xl=null,Jl=0,Qt=[],Yt=0,ii=null,On=1,Nn="";function Vr(t,e){Li[Mi++]=Jl,Li[Mi++]=Xl,Xl=t,Jl=e}function uw(t,e,n){Qt[Yt++]=On,Qt[Yt++]=Nn,Qt[Yt++]=ii,ii=t;var r=On;t=Nn;var i=32-cn(r)-1;r&=~(1<<i),n+=1;var s=32-cn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-cn(e)+i|n<<i|r,Nn=s+t}else On=1<<s|n<<i|r,Nn=t}function Ap(t){t.return!==null&&(Vr(t,1),uw(t,1,0))}function bp(t){for(;t===Xl;)Xl=Li[--Mi],Li[Mi]=null,Jl=Li[--Mi],Li[Mi]=null;for(;t===ii;)ii=Qt[--Yt],Qt[Yt]=null,Nn=Qt[--Yt],Qt[Yt]=null,On=Qt[--Yt],Qt[Yt]=null}var jt=null,Ft=null,Ie=!1,ln=null;function cw(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Ft=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Ft=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:On,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Ft=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kd(t){if(Ie){var e=Ft;if(e){var n=e;if(!gy(t,e)){if(qd(t))throw Error(I(418));e=mr(n.nextSibling);var r=jt;e&&gy(t,e)?cw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,jt=t)}}else{if(qd(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ie=!1,jt=t}}}function yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function el(t){if(t!==jt)return!1;if(!Ie)return yy(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=Ft)){if(qd(t))throw hw(),Error(I(418));for(;e;)cw(t,e),e=mr(e.nextSibling)}if(yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ft=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ft=null}}else Ft=jt?mr(t.stateNode.nextSibling):null;return!0}function hw(){for(var t=Ft;t;)t=mr(t.nextSibling)}function ls(){Ft=jt=null,Ie=!1}function Rp(t){ln===null?ln=[t]:ln.push(t)}var dI=Gn.ReactCurrentBatchConfig;function on(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zl=Mr(null),eu=null,Ui=null,Op=null;function Np(){Op=Ui=eu=null}function Pp(t){var e=Zl.current;Te(Zl),t._currentValue=e}function Gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){eu=t,Op=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function en(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(eu===null)throw Error(I(308));Ui=t,eu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var qr=null;function Dp(t){qr===null?qr=[t]:qr.push(t)}function dw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Dp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Dp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ep(t,n)}}function vy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Re({},h,d);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=h}}function wy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var pw=new d1.Component().refs;function Qd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?yi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=vr(t),s=Ln(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(hn(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=vr(t),s=Ln(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(hn(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=vr(t),i=Ln(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(hn(e,t,r,n),Sl(e,t,r))}};function Ey(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,r)||!Lo(i,s):!0}function mw(t,e,n){var r=!1,i=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(i=$t(e)?ri:St.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=pw,$p(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=en(s):(s=$t(e)?ri:St.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Qd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===pw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ty(t){var e=t._init;return e(t._payload)}function gw(t){function e(m,f){if(t){var v=m.deletions;v===null?(m.deletions=[f],m.flags|=16):v.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=wr(m,f),m.index=0,m.sibling=null,m}function s(m,f,v){return m.index=v,t?(v=m.alternate,v!==null?(v=v.index,v<f?(m.flags|=2,f):v):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,v,w){return f===null||f.tag!==6?(f=$h(v,m.mode,w),f.return=m,f):(f=i(f,v),f.return=m,f)}function l(m,f,v,w){var _=v.type;return _===Ri?c(m,f,v.props.children,w,v.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Zn&&Ty(_)===f.type)?(w=i(f,v.props),w.ref=Ks(m,f,v),w.return=m,w):(w=xl(v.type,v.key,v.props,null,m.mode,w),w.ref=Ks(m,f,v),w.return=m,w)}function u(m,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=Lh(v,m.mode,w),f.return=m,f):(f=i(f,v.children||[]),f.return=m,f)}function c(m,f,v,w,_){return f===null||f.tag!==7?(f=Jr(v,m.mode,w,_),f.return=m,f):(f=i(f,v),f.return=m,f)}function h(m,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=$h(""+f,m.mode,v),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ha:return v=xl(f.type,f.key,f.props,null,m.mode,v),v.ref=Ks(m,null,f),v.return=m,v;case bi:return f=Lh(f,m.mode,v),f.return=m,f;case Zn:var w=f._init;return h(m,w(f._payload),v)}if(eo(f)||zs(f))return f=Jr(f,m.mode,v,null),f.return=m,f;tl(m,f)}return null}function d(m,f,v,w){var _=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(m,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:return v.key===_?l(m,f,v,w):null;case bi:return v.key===_?u(m,f,v,w):null;case Zn:return _=v._init,d(m,f,_(v._payload),w)}if(eo(v)||zs(v))return _!==null?null:c(m,f,v,w,null);tl(m,v)}return null}function p(m,f,v,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(v)||null,a(f,m,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ha:return m=m.get(w.key===null?v:w.key)||null,l(f,m,w,_);case bi:return m=m.get(w.key===null?v:w.key)||null,u(f,m,w,_);case Zn:var A=w._init;return p(m,f,v,A(w._payload),_)}if(eo(w)||zs(w))return m=m.get(v)||null,c(f,m,w,_,null);tl(f,w)}return null}function g(m,f,v,w){for(var _=null,A=null,R=f,P=f=0,J=null;R!==null&&P<v.length;P++){R.index>P?(J=R,R=null):J=R.sibling;var F=d(m,R,v[P],w);if(F===null){R===null&&(R=J);break}t&&R&&F.alternate===null&&e(m,R),f=s(F,f,P),A===null?_=F:A.sibling=F,A=F,R=J}if(P===v.length)return n(m,R),Ie&&Vr(m,P),_;if(R===null){for(;P<v.length;P++)R=h(m,v[P],w),R!==null&&(f=s(R,f,P),A===null?_=R:A.sibling=R,A=R);return Ie&&Vr(m,P),_}for(R=r(m,R);P<v.length;P++)J=p(R,m,P,v[P],w),J!==null&&(t&&J.alternate!==null&&R.delete(J.key===null?P:J.key),f=s(J,f,P),A===null?_=J:A.sibling=J,A=J);return t&&R.forEach(function(_e){return e(m,_e)}),Ie&&Vr(m,P),_}function y(m,f,v,w){var _=zs(v);if(typeof _!="function")throw Error(I(150));if(v=_.call(v),v==null)throw Error(I(151));for(var A=_=null,R=f,P=f=0,J=null,F=v.next();R!==null&&!F.done;P++,F=v.next()){R.index>P?(J=R,R=null):J=R.sibling;var _e=d(m,R,F.value,w);if(_e===null){R===null&&(R=J);break}t&&R&&_e.alternate===null&&e(m,R),f=s(_e,f,P),A===null?_=_e:A.sibling=_e,A=_e,R=J}if(F.done)return n(m,R),Ie&&Vr(m,P),_;if(R===null){for(;!F.done;P++,F=v.next())F=h(m,F.value,w),F!==null&&(f=s(F,f,P),A===null?_=F:A.sibling=F,A=F);return Ie&&Vr(m,P),_}for(R=r(m,R);!F.done;P++,F=v.next())F=p(R,m,P,F.value,w),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?P:F.key),f=s(F,f,P),A===null?_=F:A.sibling=F,A=F);return t&&R.forEach(function(Be){return e(m,Be)}),Ie&&Vr(m,P),_}function E(m,f,v,w){if(typeof v=="object"&&v!==null&&v.type===Ri&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ha:e:{for(var _=v.key,A=f;A!==null;){if(A.key===_){if(_=v.type,_===Ri){if(A.tag===7){n(m,A.sibling),f=i(A,v.props.children),f.return=m,m=f;break e}}else if(A.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Zn&&Ty(_)===A.type){n(m,A.sibling),f=i(A,v.props),f.ref=Ks(m,A,v),f.return=m,m=f;break e}n(m,A);break}else e(m,A);A=A.sibling}v.type===Ri?(f=Jr(v.props.children,m.mode,w,v.key),f.return=m,m=f):(w=xl(v.type,v.key,v.props,null,m.mode,w),w.ref=Ks(m,f,v),w.return=m,m=w)}return o(m);case bi:e:{for(A=v.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){n(m,f.sibling),f=i(f,v.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Lh(v,m.mode,w),f.return=m,m=f}return o(m);case Zn:return A=v._init,E(m,f,A(v._payload),w)}if(eo(v))return g(m,f,v,w);if(zs(v))return y(m,f,v,w);tl(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,v),f.return=m,m=f):(n(m,f),f=$h(v,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return E}var us=gw(!0),yw=gw(!1),ga={},Sn=Mr(ga),jo=Mr(ga),Vo=Mr(ga);function Kr(t){if(t===ga)throw Error(I(174));return t}function Lp(t,e){switch(ve(Vo,e),ve(jo,t),ve(Sn,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}Te(Sn),ve(Sn,e)}function cs(){Te(Sn),Te(jo),Te(Vo)}function vw(t){Kr(Vo.current);var e=Kr(Sn.current),n=Ad(e,t.type);e!==n&&(ve(jo,t),ve(Sn,n))}function Mp(t){jo.current===t&&(Te(Sn),Te(jo))}var xe=Mr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bh=[];function Up(){for(var t=0;t<bh.length;t++)bh[t]._workInProgressVersionPrimary=null;bh.length=0}var Tl=Gn.ReactCurrentDispatcher,Rh=Gn.ReactCurrentBatchConfig,si=0,be=null,He=null,Ye=null,ru=!1,yo=!1,zo=0,fI=0;function dt(){throw Error(I(321))}function Fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dn(t[n],e[n]))return!1;return!0}function jp(t,e,n,r,i,s){if(si=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?yI:vI,t=n(r,i),yo){s=0;do{if(yo=!1,zo=0,25<=s)throw Error(I(301));s+=1,Ye=He=null,e.updateQueue=null,Tl.current=wI,t=n(r,i)}while(yo)}if(Tl.current=iu,e=He!==null&&He.next!==null,si=0,Ye=He=be=null,ru=!1,e)throw Error(I(300));return t}function Vp(){var t=zo!==0;return zo=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?be.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function tn(){if(He===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ye===null?be.memoizedState:Ye.next;if(e!==null)Ye=e,He=t;else{if(t===null)throw Error(I(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?be.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function Bo(t,e){return typeof e=="function"?e(t):e}function Oh(t){var e=tn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,be.lanes|=c,oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,dn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nh(t){var e=tn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ww(){}function Ew(t,e){var n=be,r=tn(),i=e(),s=!dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,zp(_w.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,Ho(9,Tw.bind(null,n,r,i,e),void 0,null),Xe===null)throw Error(I(349));si&30||Sw(n,e,i)}return i}function Sw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Tw(t,e,n,r){e.value=n,e.getSnapshot=r,Cw(e)&&Iw(t)}function _w(t,e,n){return n(function(){Cw(e)&&Iw(t)})}function Cw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dn(t,n)}catch{return!0}}function Iw(t){var e=jn(t,1);e!==null&&hn(e,t,1,-1)}function _y(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=gI.bind(null,be,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function kw(){return tn().memoizedState}function _l(t,e,n,r){var i=gn();be.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=tn();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Fp(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function Cy(t,e){return _l(8390656,8,t,e)}function zp(t,e){return ec(2048,8,t,e)}function xw(t,e){return ec(4,2,t,e)}function Aw(t,e){return ec(4,4,t,e)}function bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rw(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,bw.bind(null,e,t),n)}function Bp(){}function Ow(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Nw(t,e){var n=tn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Pw(t,e,n){return si&21?(dn(n,e)||(n=L1(),be.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function pI(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=Rh.transition;Rh.transition={};try{t(!1),e()}finally{pe=n,Rh.transition=r}}function Dw(){return tn().memoizedState}function mI(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$w(t))Lw(e,n);else if(n=dw(t,e,n,r),n!==null){var i=At();hn(n,t,r,i),Mw(n,e,r)}}function gI(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($w(t))Lw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dn(a,o)){var l=e.interleaved;l===null?(i.next=i,Dp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=dw(t,e,i,r),n!==null&&(i=At(),hn(n,t,r,i),Mw(n,e,r))}}function $w(t){var e=t.alternate;return t===be||e!==null&&e===be}function Lw(t,e){yo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ep(t,n)}}var iu={readContext:en,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},yI={readContext:en,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:en,useEffect:Cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=mI.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:_y,useDebugValue:Bp,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=_y(!1),e=t[0];return t=pI.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=gn();if(Ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Xe===null)throw Error(I(349));si&30||Sw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cy(_w.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,Tw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gn(),e=Xe.identifierPrefix;if(Ie){var n=Nn,r=On;n=(r&~(1<<32-cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=fI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},vI={readContext:en,useCallback:Ow,useContext:en,useEffect:zp,useImperativeHandle:Rw,useInsertionEffect:xw,useLayoutEffect:Aw,useMemo:Nw,useReducer:Oh,useRef:kw,useState:function(){return Oh(Bo)},useDebugValue:Bp,useDeferredValue:function(t){var e=tn();return Pw(e,He.memoizedState,t)},useTransition:function(){var t=Oh(Bo)[0],e=tn().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Dw,unstable_isNewReconciler:!1},wI={readContext:en,useCallback:Ow,useContext:en,useEffect:zp,useImperativeHandle:Rw,useInsertionEffect:xw,useLayoutEffect:Aw,useMemo:Nw,useReducer:Nh,useRef:kw,useState:function(){return Nh(Bo)},useDebugValue:Bp,useDeferredValue:function(t){var e=tn();return He===null?e.memoizedState=t:Pw(e,He.memoizedState,t)},useTransition:function(){var t=Nh(Bo)[0],e=tn().memoizedState;return[t,e]},useMutableSource:ww,useSyncExternalStore:Ew,useId:Dw,unstable_isNewReconciler:!1};function hs(t,e){try{var n="",r=e;do n+=K_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ph(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EI=typeof WeakMap=="function"?WeakMap:Map;function Uw(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,lf=r),Xd(t,e)},n}function Fw(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Iy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new EI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DI.bind(null,t,e,n),e.then(t,t))}function ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var SI=Gn.ReactCurrentOwner,Pt=!1;function kt(t,e,n,r){e.child=t===null?yw(e,null,n,r):us(e,t.child,n,r)}function Ay(t,e,n,r,i){n=n.render;var s=e.ref;return Qi(e,i),r=jp(t,e,n,r,s,i),n=Vp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Ie&&n&&Ap(e),e.flags|=1,kt(t,e,r,i),e.child)}function by(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jw(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function jw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Lo(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return Jd(t,e,n,r,i)}function Vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(ji,Ut),Ut|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(ji,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(ji,Ut),Ut|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(ji,Ut),Ut|=r;return kt(t,e,i,n),e.child}function zw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,r,i){var s=$t(n)?ri:St.current;return s=as(e,s),Qi(e,i),n=jp(t,e,n,r,s,i),r=Vp(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(Ie&&r&&Ap(e),e.flags|=1,kt(t,e,n,i),e.child)}function Ry(t,e,n,r,i){if($t(n)){var s=!0;Yl(e)}else s=!1;if(Qi(e,i),e.stateNode===null)Cl(t,e),mw(e,n,r),Yd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=en(u):(u=$t(n)?ri:St.current,u=as(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sy(e,o,r,u),er=!1;var d=e.memoizedState;o.state=d,tu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Dt.current||er?(typeof c=="function"&&(Qd(e,n,c,r),l=e.memoizedState),(a=er||Ey(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,fw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:on(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=en(l):(l=$t(n)?ri:St.current,l=as(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Sy(e,o,r,l),er=!1,d=e.memoizedState,o.state=d,tu(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||Dt.current||er?(typeof p=="function"&&(Qd(e,n,p,r),g=e.memoizedState),(u=er||Ey(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Zd(t,e,n,r,s,i)}function Zd(t,e,n,r,i,s){zw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&my(e,n,!1),Vn(t,e,s);r=e.stateNode,SI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&my(e,n,!0),e.child}function Bw(t){var e=t.stateNode;e.pendingContext?py(t,e.pendingContext,e.pendingContext!==e.context):e.context&&py(t,e.context,!1),Lp(t,e.containerInfo)}function Oy(t,e,n,r,i){return ls(),Rp(i),e.flags|=256,kt(t,e,n,r),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hw(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(xe,i&1),t===null)return Kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Hp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return TI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,r){return r!==null&&Rp(r),us(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function TI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ph(Error(I(422))),nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=Ph(s,r,void 0),nl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Pt||a){if(r=Xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),hn(r,t,i,-1))}return Yp(),r=Ph(Error(I(421))),nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=$I.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ft=mr(i.nextSibling),jt=e,Ie=!0,ln=null,t!==null&&(Qt[Yt++]=On,Qt[Yt++]=Nn,Qt[Yt++]=ii,On=t.id,Nn=t.overflow,ii=e),e=Hp(e,r.children),e.flags|=4096,e)}function Ny(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gd(t.return,e,n)}function Dh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ww(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ny(t,n,e);else if(t.tag===19)Ny(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dh(e,!0,n,null,s);break;case"together":Dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _I(t,e,n){switch(e.tag){case 3:Bw(e),ls();break;case 5:vw(e);break;case 1:$t(e.type)&&Yl(e);break;case 4:Lp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?Hw(t,e,n):(ve(xe,xe.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ve(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ww(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return Vn(t,e,n)}var qw,nf,Kw,Gw;qw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};Kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(Sn.current);var s=null;switch(n){case"input":i=Cd(t,i),r=Cd(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=xd(t,i),r=xd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gl)}bd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CI(t,e,n){var r=e.pendingProps;switch(bp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return $t(e.type)&&Ql(),ft(e),null;case 3:return r=e.stateNode,cs(),Te(Dt),Te(St),Up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(hf(ln),ln=null))),nf(t,e),ft(e),null;case 5:Mp(e);var i=Kr(Vo.current);if(n=e.type,t!==null&&e.stateNode!=null)Kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return ft(e),null}if(t=Kr(Sn.current),el(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yn]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)Ee(no[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Vg(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":Bg(r,s),Ee("invalid",r)}bd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,a,t),i=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Wa(r),zg(r,s,!0);break;case"textarea":Wa(r),Hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Fo]=r,qw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)Ee(no[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Vg(t,r),i=Cd(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":Bg(t,r),i=xd(t,r),Ee("invalid",t);break;default:i=r}bd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?C1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(t,l):typeof l=="number"&&Ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&pp(t,s,l,o))}switch(n){case"input":Wa(t),zg(t,r,!1);break;case"textarea":Wa(t),Hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+br(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Kr(Vo.current),Kr(Sn.current),el(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:Za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return ft(e),null;case 13:if(Te(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Ft!==null&&e.mode&1&&!(e.flags&128))hw(),ls(),e.flags|=98560,s=!1;else if(s=el(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[yn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else ln!==null&&(hf(ln),ln=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?We===0&&(We=3):Yp())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return cs(),nf(t,e),t===null&&Mo(e.stateNode.containerInfo),ft(e),null;case 10:return Pp(e.type._context),ft(e),null;case 17:return $t(e.type)&&Ql(),ft(e),null;case 19:if(Te(xe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if(We!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>ds&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ft(e),null}else 2*Le()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=xe.current,ve(xe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function II(t,e){switch(bp(e),e.tag){case 1:return $t(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),Te(Dt),Te(St),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mp(e),null;case 13:if(Te(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(xe),null;case 4:return cs(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var rl=!1,gt=!1,kI=typeof WeakSet=="function"?WeakSet:Set,L=null;function Fi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function rf(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Py=!1;function xI(t,e){if(jd=Wl,t=J1(),xp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},Wl=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:on(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){Ne(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return g=Py,Py=!1,g}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&rf(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qw(t){var e=t.alternate;e!==null&&(t.alternate=null,Qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Fo],delete e[Hd],delete e[uI],delete e[cI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yw(t){return t.tag===5||t.tag===3||t.tag===4}function Dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(r!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var it=null,an=!1;function Xn(t,e,n){for(n=n.child;n!==null;)Xw(t,e,n),n=n.sibling}function Xw(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:gt||Fi(n,e);case 6:var r=it,i=an;it=null,Xn(t,e,n),it=r,an=i,it!==null&&(an?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(an?(t=it,n=n.stateNode,t.nodeType===8?xh(t.parentNode,n):t.nodeType===1&&xh(t,n),Do(t)):xh(it,n.stateNode));break;case 4:r=it,i=an,it=n.stateNode.containerInfo,an=!0,Xn(t,e,n),it=r,an=i;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!gt&&(Fi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Xn(t,e,n),gt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function $y(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kI),e.forEach(function(r){var i=LI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,an=!1;break e;case 3:it=a.stateNode.containerInfo,an=!0;break e;case 4:it=a.stateNode.containerInfo,an=!0;break e}a=a.return}if(it===null)throw Error(I(160));Xw(s,o,i),it=null,an=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jw(e,t),e=e.sibling}function Jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),mn(t),r&4){try{vo(3,t,t.return),tc(3,t)}catch(y){Ne(t,t.return,y)}try{vo(5,t,t.return)}catch(y){Ne(t,t.return,y)}}break;case 1:sn(e,t),mn(t),r&512&&n!==null&&Fi(n,n.return);break;case 5:if(sn(e,t),mn(t),r&512&&n!==null&&Fi(n,n.return),t.flags&32){var i=t.stateNode;try{Ro(i,"")}catch(y){Ne(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&w1(i,s),Rd(a,o);var u=Rd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?C1(i,h):c==="dangerouslySetInnerHTML"?T1(i,h):c==="children"?Ro(i,h):pp(i,c,h,u)}switch(a){case"input":Id(i,s);break;case"textarea":E1(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Wi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Wi(i,!!s.multiple,s.defaultValue,!0):Wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(y){Ne(t,t.return,y)}}break;case 6:if(sn(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){Ne(t,t.return,y)}}break;case 3:if(sn(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(e.containerInfo)}catch(y){Ne(t,t.return,y)}break;case 4:sn(e,t),mn(t);break;case 13:sn(e,t),mn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kp=Le())),r&4&&$y(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(u=gt)||c,sn(e,t),gt=u):sn(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,p=d.child,d.tag){case 0:case 11:case 14:case 15:vo(4,d,d.return);break;case 1:Fi(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ne(r,n,y)}}break;case 5:Fi(d,d.return);break;case 22:if(d.memoizedState!==null){My(h);continue}}p!==null?(p.return=d,L=p):My(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_1("display",o))}catch(y){Ne(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){Ne(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:sn(e,t),mn(t),r&4&&$y(t);break;case 21:break;default:sn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yw(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var s=Dy(t);af(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dy(t);of(t,a,o);break;default:throw Error(I(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AI(t,e,n){L=t,Zw(t)}function Zw(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||gt;a=rl;var u=gt;if(rl=o,(gt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Uy(i):l!==null?(l.return=o,L=l):Uy(i);for(;s!==null;)L=s,Zw(s),s=s.sibling;L=i,rl=a,gt=u}Ly(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Ly(t)}}function Ly(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Do(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}gt||e.flags&512&&sf(e)}catch(d){Ne(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function My(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Uy(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{sf(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var bI=Math.ceil,su=Gn.ReactCurrentDispatcher,Wp=Gn.ReactCurrentOwner,Zt=Gn.ReactCurrentBatchConfig,ae=0,Xe=null,Fe=null,ot=0,Ut=0,ji=Mr(0),We=0,Wo=null,oi=0,nc=0,qp=0,wo=null,Nt=null,Kp=0,ds=1/0,bn=null,ou=!1,lf=null,yr=null,il=!1,ur=null,au=0,Eo=0,uf=null,Il=-1,kl=0;function At(){return ae&6?Le():Il!==-1?Il:Il=Le()}function vr(t){return t.mode&1?ae&2&&ot!==0?ot&-ot:dI.transition!==null?(kl===0&&(kl=L1()),kl):(t=pe,t!==0||(t=window.event,t=t===void 0?16:B1(t.type)),t):1}function hn(t,e,n,r){if(50<Eo)throw Eo=0,uf=null,Error(I(185));fa(t,n,r),(!(ae&2)||t!==Xe)&&(t===Xe&&(!(ae&2)&&(nc|=n),We===4&&nr(t,ot)),Lt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ds=Le()+500,Ju&&Ur()))}function Lt(t,e){var n=t.callbackNode;dC(t,e);var r=Hl(t,t===Xe?ot:0);if(r===0)n!==null&&Kg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kg(n),e===1)t.tag===0?hI(Fy.bind(null,t)):lw(Fy.bind(null,t)),aI(function(){!(ae&6)&&Ur()}),n=null;else{switch(M1(r)){case 1:n=wp;break;case 4:n=D1;break;case 16:n=Bl;break;case 536870912:n=$1;break;default:n=Bl}n=aE(n,eE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eE(t,e){if(Il=-1,kl=0,ae&6)throw Error(I(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Hl(t,t===Xe?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var i=ae;ae|=2;var s=nE();(Xe!==t||ot!==e)&&(bn=null,ds=Le()+500,Xr(t,e));do try{NI();break}catch(a){tE(t,a)}while(1);Np(),su.current=s,ae=i,Fe!==null?e=0:(Xe=null,ot=0,e=We)}if(e!==0){if(e===2&&(i=$d(t),i!==0&&(r=i,e=cf(t,i))),e===1)throw n=Wo,Xr(t,0),nr(t,r),Lt(t,Le()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!RI(i)&&(e=lu(t,r),e===2&&(s=$d(t),s!==0&&(r=s,e=cf(t,s))),e===1))throw n=Wo,Xr(t,0),nr(t,r),Lt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:zr(t,Nt,bn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Kp+500-Le(),10<e)){if(Hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bd(zr.bind(null,t,Nt,bn),e);break}zr(t,Nt,bn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-cn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bI(r/1960))-r,10<r){t.timeoutHandle=Bd(zr.bind(null,t,Nt,bn),r);break}zr(t,Nt,bn);break;case 5:zr(t,Nt,bn);break;default:throw Error(I(329))}}}return Lt(t,Le()),t.callbackNode===n?eE.bind(null,t):null}function cf(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=lu(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&hf(e)),t}function hf(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function RI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~qp,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-cn(e),r=1<<n;t[n]=-1,e&=~r}}function Fy(t){if(ae&6)throw Error(I(327));Yi();var e=Hl(t,0);if(!(e&1))return Lt(t,Le()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=$d(t);r!==0&&(e=r,n=cf(t,r))}if(n===1)throw n=Wo,Xr(t,0),nr(t,e),Lt(t,Le()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,Nt,bn),Lt(t,Le()),null}function Gp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ds=Le()+500,Ju&&Ur())}}function ai(t){ur!==null&&ur.tag===0&&!(ae&6)&&Yi();var e=ae;ae|=1;var n=Zt.transition,r=pe;try{if(Zt.transition=null,pe=1,t)return t()}finally{pe=r,Zt.transition=n,ae=e,!(ae&6)&&Ur()}}function Qp(){Ut=ji.current,Te(ji)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,oI(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(bp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:cs(),Te(Dt),Te(St),Up();break;case 5:Mp(r);break;case 4:cs();break;case 13:Te(xe);break;case 19:Te(xe);break;case 10:Pp(r.type._context);break;case 22:case 23:Qp()}n=n.return}if(Xe=t,Fe=t=wr(t.current,null),ot=Ut=e,We=0,Wo=null,qp=nc=oi=0,Nt=wo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function tE(t,e){do{var n=Fe;try{if(Np(),Tl.current=iu,ru){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(si=0,Ye=He=be=null,yo=!1,zo=0,Wp.current=null,n===null||n.return===null){We=1,Wo=e,Fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=ky(o);if(p!==null){p.flags&=-257,xy(p,o,a,s,e),p.mode&1&&Iy(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Iy(s,u,e),Yp();break e}l=Error(I(426))}}else if(Ie&&a.mode&1){var E=ky(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),xy(E,o,a,s,e),Rp(hs(l,a));break e}}s=l=hs(l,a),We!==4&&(We=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Uw(s,l,e);vy(s,m);break e;case 1:a=l;var f=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(yr===null||!yr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Fw(s,a,e);vy(s,w);break e}}s=s.return}while(s!==null)}iE(n)}catch(_){e=_,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(1)}function nE(){var t=su.current;return su.current=iu,t===null?iu:t}function Yp(){(We===0||We===3||We===2)&&(We=4),Xe===null||!(oi&268435455)&&!(nc&268435455)||nr(Xe,ot)}function lu(t,e){var n=ae;ae|=2;var r=nE();(Xe!==t||ot!==e)&&(bn=null,Xr(t,e));do try{OI();break}catch(i){tE(t,i)}while(1);if(Np(),ae=n,su.current=r,Fe!==null)throw Error(I(261));return Xe=null,ot=0,We}function OI(){for(;Fe!==null;)rE(Fe)}function NI(){for(;Fe!==null&&!rC();)rE(Fe)}function rE(t){var e=oE(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?iE(t):Fe=e,Wp.current=null}function iE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=II(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{We=6,Fe=null;return}}else if(n=CI(n,e,Ut),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);We===0&&(We=5)}function zr(t,e,n){var r=pe,i=Zt.transition;try{Zt.transition=null,pe=1,PI(t,e,n,r)}finally{Zt.transition=i,pe=r}return null}function PI(t,e,n,r){do Yi();while(ur!==null);if(ae&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(fC(t,s),t===Xe&&(Fe=Xe=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,aE(Bl,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zt.transition,Zt.transition=null;var o=pe;pe=1;var a=ae;ae|=4,Wp.current=null,xI(t,n),Jw(n,t),ZC(Vd),Wl=!!jd,Vd=jd=null,t.current=n,AI(n),iC(),ae=a,pe=o,Zt.transition=s}else t.current=n;if(il&&(il=!1,ur=t,au=i),s=t.pendingLanes,s===0&&(yr=null),aC(n.stateNode),Lt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,t=lf,lf=null,t;return au&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===uf?Eo++:(Eo=0,uf=t):Eo=0,Ur(),null}function Yi(){if(ur!==null){var t=M1(au),e=Zt.transition,n=pe;try{if(Zt.transition=null,pe=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,au=0,ae&6)throw Error(I(331));var i=ae;for(ae|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:vo(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,p=c.return;if(Qw(c),c===u){L=null;break}if(d!==null){d.return=p,L=d;break}L=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,L=v;else e:for(o=f;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(_){Ne(a,a.return,_)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(ae=i,Ur(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{pe=n,Zt.transition=e}}return!1}function jy(t,e,n){e=hs(n,e),e=Uw(t,e,1),t=gr(t,e,1),e=At(),t!==null&&(fa(t,1,e),Lt(t,e))}function Ne(t,e,n){if(t.tag===3)jy(t,t,n);else for(;e!==null;){if(e.tag===3){jy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=hs(n,t),t=Fw(e,t,1),e=gr(e,t,1),t=At(),e!==null&&(fa(e,1,t),Lt(e,t));break}}e=e.return}}function DI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(ot&n)===n&&(We===4||We===3&&(ot&130023424)===ot&&500>Le()-Kp?Xr(t,0):qp|=n),Lt(t,e)}function sE(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=At();t=jn(t,e),t!==null&&(fa(t,e,n),Lt(t,n))}function $I(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sE(t,n)}function LI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),sE(t,n)}var oE;oE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,_I(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Ie&&e.flags&1048576&&uw(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Cl(t,e),t=e.pendingProps;var i=as(e,St.current);Qi(e,n),i=jp(null,e,r,t,i,n);var s=Vp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(s=!0,Yl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$p(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Yd(e,r,t,n),e=Zd(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Ap(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Cl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=UI(r),t=on(r,t),i){case 0:e=Jd(null,e,r,t,n);break e;case 1:e=Ry(null,e,r,t,n);break e;case 11:e=Ay(null,e,r,t,n);break e;case 14:e=by(null,e,r,on(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Jd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Ry(t,e,r,i,n);case 3:e:{if(Bw(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,fw(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=hs(Error(I(423)),e),e=Oy(t,e,r,n,i);break e}else if(r!==i){i=hs(Error(I(424)),e),e=Oy(t,e,r,n,i);break e}else for(Ft=mr(e.stateNode.containerInfo.firstChild),jt=e,Ie=!0,ln=null,n=yw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=Vn(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return vw(e),t===null&&Kd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zd(r,i)?o=null:s!==null&&zd(r,s)&&(e.flags|=32),zw(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Kd(e),null;case 13:return Hw(t,e,n);case 4:return Lp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=us(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Ay(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Zl,r._currentValue),r._currentValue=o,s!==null)if(dn(s.value,o)){if(s.children===i.children&&!Dt.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ln(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=en(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=on(r,e.pendingProps),i=on(r.type,i),by(t,e,r,i,n);case 15:return jw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:on(r,i),Cl(t,e),e.tag=1,$t(r)?(t=!0,Yl(e)):t=!1,Qi(e,n),mw(e,r,i),Yd(e,r,i,n),Zd(null,e,r,!0,t,n);case 19:return Ww(t,e,n);case 22:return Vw(t,e,n)}throw Error(I(156,e.tag))};function aE(t,e){return P1(t,e)}function MI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new MI(t,e,n,r)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UI(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===yp)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Jr(n.children,i,s,e);case mp:o=8,i|=8;break;case Ed:return t=Jt(12,n,e,i|2),t.elementType=Ed,t.lanes=s,t;case Sd:return t=Jt(13,n,e,i),t.elementType=Sd,t.lanes=s,t;case Td:return t=Jt(19,n,e,i),t.elementType=Td,t.lanes=s,t;case g1:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p1:o=10;break e;case m1:o=9;break e;case gp:o=11;break e;case yp:o=14;break e;case Zn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=g1,t.lanes=n,t.stateNode={isHidden:!1},t}function $h(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function Lh(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gh(0),this.expirationTimes=gh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jp(t,e,n,r,i,s,o,a,l){return t=new FI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(s),t}function jI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function lE(t){if(!t)return Rr;t=t._reactInternals;e:{if(yi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if($t(n))return aw(t,n,e)}return e}function uE(t,e,n,r,i,s,o,a,l){return t=Jp(n,r,!0,t,i,s,o,a,l),t.context=lE(null),n=t.current,r=At(),i=vr(n),s=Ln(r,i),s.callback=e??null,gr(n,s,i),t.current.lanes=i,fa(t,i,r),Lt(t,r),t}function ic(t,e,n,r){var i=e.current,s=At(),o=vr(i);return n=lE(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(hn(t,i,o,s),Sl(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zp(t,e){Vy(t,e),(t=t.alternate)&&Vy(t,e)}function VI(){return null}var cE=typeof reportError=="function"?reportError:function(t){console.error(t)};function em(t){this._internalRoot=t}sc.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ic(t,e,null,null)};sc.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){ic(null,t,null,null)}),e[Fn]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=j1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&z1(t)}};function tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zy(){}function zI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uu(o);s.call(u)}}var o=uE(e,r,t,0,null,!1,!1,"",zy);return t._reactRootContainer=o,t[Fn]=o.current,Mo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uu(l);a.call(u)}}var l=Jp(t,0,!1,null,null,!1,!1,"",zy);return t._reactRootContainer=l,t[Fn]=l.current,Mo(t.nodeType===8?t.parentNode:t),ai(function(){ic(e,l,n,r)}),l}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uu(o);a.call(l)}}ic(e,o,t,i)}else o=zI(n,e,t,i,r);return uu(o)}U1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=to(e.pendingLanes);n!==0&&(Ep(e,n|1),Lt(e,Le()),!(ae&6)&&(ds=Le()+500,Ur()))}break;case 13:ai(function(){var r=jn(t,1);if(r!==null){var i=At();hn(r,t,1,i)}}),Zp(t,1)}};Sp=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=At();hn(e,t,134217728,n)}Zp(t,134217728)}};F1=function(t){if(t.tag===13){var e=vr(t),n=jn(t,e);if(n!==null){var r=At();hn(n,t,e,r)}Zp(t,e)}};j1=function(){return pe};V1=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};Nd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xu(r);if(!i)throw Error(I(90));v1(r),Id(r,i)}}}break;case"textarea":E1(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};x1=Gp;A1=ai;var BI={usingClientEntryPoint:!1,Events:[ma,Di,Xu,I1,k1,Gp]},Qs={findFiberByHostInstance:Wr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},HI={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||VI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Ku=sl.inject(HI),En=sl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(e))throw Error(I(200));return jI(t,e,null,n)};Wt.createRoot=function(t,e){if(!tm(t))throw Error(I(299));var n=!1,r="",i=cE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Jp(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Mo(t.nodeType===8?t.parentNode:t),new em(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=O1(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return ai(t)};Wt.hydrate=function(t,e,n){if(!oc(e))throw Error(I(200));return ac(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!tm(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=cE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=uE(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};Wt.render=function(t,e,n){if(!oc(e))throw Error(I(200));return ac(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!oc(t))throw Error(I(40));return t._reactRootContainer?(ai(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Wt.unstable_batchedUpdates=Gp;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return ac(t,e,n,!1,r)};Wt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Wt})(V_);var By=Fl;yd.createRoot=By.createRoot,yd.hydrateRoot=By.hydrateRoot;var df={},WI={get exports(){return df},set exports(t){df=t}},hE={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=x;function qI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var KI=typeof Object.is=="function"?Object.is:qI,GI=fs.useState,QI=fs.useEffect,YI=fs.useLayoutEffect,XI=fs.useDebugValue;function JI(t,e){var n=e(),r=GI({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return YI(function(){i.value=n,i.getSnapshot=e,Mh(i)&&s({inst:i})},[t,n,e]),QI(function(){return Mh(i)&&s({inst:i}),t(function(){Mh(i)&&s({inst:i})})},[t]),XI(n),n}function Mh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!KI(t,n)}catch{return!0}}function ZI(t,e){return e()}var ek=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ZI:JI;hE.useSyncExternalStore=fs.useSyncExternalStore!==void 0?fs.useSyncExternalStore:ek;(function(t){t.exports=hE})(WI);var ff={},tk={get exports(){return ff},set exports(t){ff=t}},dE={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lc=x,nk=df;function rk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ik=typeof Object.is=="function"?Object.is:rk,sk=nk.useSyncExternalStore,ok=lc.useRef,ak=lc.useEffect,lk=lc.useMemo,uk=lc.useDebugValue;dE.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=ok(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=lk(function(){function l(p){if(!u){if(u=!0,c=p,p=r(p),i!==void 0&&o.hasValue){var g=o.value;if(i(g,p))return h=g}return h=p}if(g=h,ik(c,p))return g;var y=r(p);return i!==void 0&&i(g,y)?g:(c=p,h=y)}var u=!1,c,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,r,i]);var a=sk(t,s[0],s[1]);return ak(function(){o.hasValue=!0,o.value=a},[a]),uk(a),a};(function(t){t.exports=dE})(tk);function ck(t){t()}let fE=ck;const hk=t=>fE=t,dk=()=>fE,Or=x.createContext(null);function pE(){return x.useContext(Or)}const fk=()=>{throw new Error("uSES not initialized!")};let mE=fk;const pk=t=>{mE=t},mk=(t,e)=>t===e;function gk(t=Or){const e=t===Or?pE:()=>x.useContext(t);return function(r,i=mk){const{store:s,subscription:o,getServerState:a}=e(),l=mE(o.addNestedSub,s.getState,a||s.getState,r,i);return x.useDebugValue(l),l}}const As=gk();var pf={},yk={get exports(){return pf},set exports(t){pf=t}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ze=typeof Symbol=="function"&&Symbol.for,nm=Ze?Symbol.for("react.element"):60103,rm=Ze?Symbol.for("react.portal"):60106,uc=Ze?Symbol.for("react.fragment"):60107,cc=Ze?Symbol.for("react.strict_mode"):60108,hc=Ze?Symbol.for("react.profiler"):60114,dc=Ze?Symbol.for("react.provider"):60109,fc=Ze?Symbol.for("react.context"):60110,im=Ze?Symbol.for("react.async_mode"):60111,pc=Ze?Symbol.for("react.concurrent_mode"):60111,mc=Ze?Symbol.for("react.forward_ref"):60112,gc=Ze?Symbol.for("react.suspense"):60113,vk=Ze?Symbol.for("react.suspense_list"):60120,yc=Ze?Symbol.for("react.memo"):60115,vc=Ze?Symbol.for("react.lazy"):60116,wk=Ze?Symbol.for("react.block"):60121,Ek=Ze?Symbol.for("react.fundamental"):60117,Sk=Ze?Symbol.for("react.responder"):60118,Tk=Ze?Symbol.for("react.scope"):60119;function Kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case nm:switch(t=t.type,t){case im:case pc:case uc:case hc:case cc:case gc:return t;default:switch(t=t&&t.$$typeof,t){case fc:case mc:case vc:case yc:case dc:return t;default:return e}}case rm:return e}}}function gE(t){return Kt(t)===pc}me.AsyncMode=im;me.ConcurrentMode=pc;me.ContextConsumer=fc;me.ContextProvider=dc;me.Element=nm;me.ForwardRef=mc;me.Fragment=uc;me.Lazy=vc;me.Memo=yc;me.Portal=rm;me.Profiler=hc;me.StrictMode=cc;me.Suspense=gc;me.isAsyncMode=function(t){return gE(t)||Kt(t)===im};me.isConcurrentMode=gE;me.isContextConsumer=function(t){return Kt(t)===fc};me.isContextProvider=function(t){return Kt(t)===dc};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===nm};me.isForwardRef=function(t){return Kt(t)===mc};me.isFragment=function(t){return Kt(t)===uc};me.isLazy=function(t){return Kt(t)===vc};me.isMemo=function(t){return Kt(t)===yc};me.isPortal=function(t){return Kt(t)===rm};me.isProfiler=function(t){return Kt(t)===hc};me.isStrictMode=function(t){return Kt(t)===cc};me.isSuspense=function(t){return Kt(t)===gc};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uc||t===pc||t===hc||t===cc||t===gc||t===vk||typeof t=="object"&&t!==null&&(t.$$typeof===vc||t.$$typeof===yc||t.$$typeof===dc||t.$$typeof===fc||t.$$typeof===mc||t.$$typeof===Ek||t.$$typeof===Sk||t.$$typeof===Tk||t.$$typeof===wk)};me.typeOf=Kt;(function(t){t.exports=me})(yk);var sm=pf,_k={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ck={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ik={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},om={};om[sm.ForwardRef]=Ik;om[sm.Memo]=yE;function Hy(t){return sm.isMemo(t)?yE:om[t.$$typeof]||_k}var kk=Object.defineProperty,xk=Object.getOwnPropertyNames,Wy=Object.getOwnPropertySymbols,Ak=Object.getOwnPropertyDescriptor,bk=Object.getPrototypeOf,qy=Object.prototype;function vE(t,e,n){if(typeof e!="string"){if(qy){var r=bk(e);r&&r!==qy&&vE(t,r,n)}var i=xk(e);Wy&&(i=i.concat(Wy(e)));for(var s=Hy(t),o=Hy(e),a=0;a<i.length;++a){var l=i[a];if(!Ck[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=Ak(e,l);try{kk(t,l,u)}catch{}}}}return t}var Rk=vE,cu={},Ok={get exports(){return cu},set exports(t){cu=t}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am=Symbol.for("react.element"),lm=Symbol.for("react.portal"),wc=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Tc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),Nk=Symbol.for("react.server_context"),Cc=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Ac=Symbol.for("react.lazy"),Pk=Symbol.for("react.offscreen"),wE;wE=Symbol.for("react.module.reference");function nn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case am:switch(t=t.type,t){case wc:case Sc:case Ec:case Ic:case kc:return t;default:switch(t=t&&t.$$typeof,t){case Nk:case _c:case Cc:case Ac:case xc:case Tc:return t;default:return e}}case lm:return e}}}ge.ContextConsumer=_c;ge.ContextProvider=Tc;ge.Element=am;ge.ForwardRef=Cc;ge.Fragment=wc;ge.Lazy=Ac;ge.Memo=xc;ge.Portal=lm;ge.Profiler=Sc;ge.StrictMode=Ec;ge.Suspense=Ic;ge.SuspenseList=kc;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(t){return nn(t)===_c};ge.isContextProvider=function(t){return nn(t)===Tc};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===am};ge.isForwardRef=function(t){return nn(t)===Cc};ge.isFragment=function(t){return nn(t)===wc};ge.isLazy=function(t){return nn(t)===Ac};ge.isMemo=function(t){return nn(t)===xc};ge.isPortal=function(t){return nn(t)===lm};ge.isProfiler=function(t){return nn(t)===Sc};ge.isStrictMode=function(t){return nn(t)===Ec};ge.isSuspense=function(t){return nn(t)===Ic};ge.isSuspenseList=function(t){return nn(t)===kc};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===wc||t===Sc||t===Ec||t===Ic||t===kc||t===Pk||typeof t=="object"&&t!==null&&(t.$$typeof===Ac||t.$$typeof===xc||t.$$typeof===Tc||t.$$typeof===_c||t.$$typeof===Cc||t.$$typeof===wE||t.getModuleId!==void 0)};ge.typeOf=nn;(function(t){t.exports=ge})(Ok);function Dk(){const t=dk();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=e;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,s=n={callback:r,next:null,prev:n};return s.prev?s.prev.next=s:e=s,function(){!i||e===null||(i=!1,s.next?s.next.prev=s.prev:n=s.prev,s.prev?s.prev.next=s.next:e=s.next)}}}}const Ky={notify(){},get:()=>[]};function $k(t,e){let n,r=Ky;function i(h){return l(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=Dk())}function u(){n&&(n(),n=void 0,r.clear(),r=Ky)}const c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return c}const Lk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mk=Lk?x.useLayoutEffect:x.useEffect;function Uk({store:t,context:e,children:n,serverState:r}){const i=x.useMemo(()=>{const a=$k(t);return{store:t,subscription:a,getServerState:r?()=>r:void 0}},[t,r]),s=x.useMemo(()=>t.getState(),[t]);Mk(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),s!==t.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,s]);const o=e||Or;return Ae.createElement(o.Provider,{value:i},n)}function EE(t=Or){const e=t===Or?pE:()=>x.useContext(t);return function(){const{store:r}=e();return r}}const Fk=EE();function jk(t=Or){const e=t===Or?Fk:EE(t);return function(){return e().dispatch}}const SE=jk();pk(ff.useSyncExternalStoreWithSelector);hk(Fl.unstable_batchedUpdates);/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hu.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Gy="popstate";function Vk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=vi(i.location.hash.substr(1));return mf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:qo(s))}function r(i,s){zk(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Wk(e,n,r,t)}function Ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zk(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bk(){return Math.random().toString(36).substr(2,8)}function Qy(t){return{usr:t.state,key:t.key}}function mf(t,e,n,r){return n===void 0&&(n=null),hu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?vi(e):e,{state:n,key:e&&e.key||r||Bk()})}function qo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function vi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hk(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:qo(t);return Ve(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function Wk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=cr.Pop,l=null;function u(){a=cr.Pop,l&&l({action:a,location:d.location})}function c(p,g){a=cr.Push;let y=mf(d.location,p,g);n&&n(y,p);let E=Qy(y),m=d.createHref(y);try{o.pushState(E,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:d.location})}function h(p,g){a=cr.Replace;let y=mf(d.location,p,g);n&&n(y,p);let E=Qy(y),m=d.createHref(y);o.replaceState(E,"",m),s&&l&&l({action:a,location:d.location})}let d={get action(){return a},get location(){return t(i,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gy,u),l=p,()=>{i.removeEventListener(Gy,u),l=null}},createHref(p){return e(i,p)},encodeLocation(p){let g=Hk(typeof p=="string"?p:qo(p));return{pathname:g.pathname,search:g.search,hash:g.hash}},push:c,replace:h,go(p){return o.go(p)}};return d}var Yy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Yy||(Yy={}));function qk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?vi(e):e,i=CE(r.pathname||"/",n);if(i==null)return null;let s=TE(t);Kk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nx(s[a],sx(i));return o}function TE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Er([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ve(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),TE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ex(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of _E(s.path))i(s,o,l)}),e}function _E(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_E(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Kk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gk=/^:\w+$/,Qk=3,Yk=2,Xk=1,Jk=10,Zk=-2,Xy=t=>t==="*";function ex(t,e){let n=t.split("/"),r=n.length;return n.some(Xy)&&(r+=Zk),e&&(r+=Yk),n.filter(i=>!Xy(i)).reduce((i,s)=>i+(Gk.test(s)?Qk:s===""?Xk:Jk),r)}function tx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=rx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Er([i,c.pathname]),pathnameBase:ux(Er([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Er([i,c.pathnameBase]))}return s}function rx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ix(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ox(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ix(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),um(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sx(t){try{return decodeURI(t)}catch(e){return um(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ox(t,e){try{return decodeURIComponent(t)}catch(n){return um(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function CE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function um(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ax(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?vi(t):t;return{pathname:n?n.startsWith("/")?n:lx(n,e):e,search:cx(r),hash:hx(i)}}function lx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=vi(t):(i=hu({},t),Ve(!i.pathname||!i.pathname.includes("?"),Uh("?","pathname","search",i)),Ve(!i.pathname||!i.pathname.includes("#"),Uh("#","pathname","hash",i)),Ve(!i.search||!i.search.includes("#"),Uh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=ax(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),ux=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dx{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function fx(t){return t instanceof dx}const px=["post","put","patch","delete"];[...px];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gf(){return gf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gf.apply(this,arguments)}function mx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const gx=typeof Object.is=="function"?Object.is:mx,{useState:yx,useEffect:vx,useLayoutEffect:wx,useDebugValue:Ex}=gd;function Sx(t,e,n){const r=e(),[{inst:i},s]=yx({inst:{value:r,getSnapshot:e}});return wx(()=>{i.value=r,i.getSnapshot=e,Fh(i)&&s({inst:i})},[t,r,e]),vx(()=>(Fh(i)&&s({inst:i}),t(()=>{Fh(i)&&s({inst:i})})),[t]),Ex(r),r}function Fh(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!gx(n,r)}catch{return!0}}function Tx(t,e,n){return e()}const _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cx=!_x,Ix=Cx?Tx:Sx;"useSyncExternalStore"in gd&&(t=>t.useSyncExternalStore)(gd);const xE=x.createContext(null),cm=x.createContext(null),bc=x.createContext(null),Rc=x.createContext(null),wi=x.createContext({outlet:null,matches:[]}),AE=x.createContext(null);function kx(t,e){let{relative:n}=e===void 0?{}:e;bs()||Ve(!1);let{basename:r,navigator:i}=x.useContext(bc),{hash:s,pathname:o,search:a}=bE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Er([r,o])),i.createHref({pathname:l,search:a,hash:s})}function bs(){return x.useContext(Rc)!=null}function Oc(){return bs()||Ve(!1),x.useContext(Rc).location}function Nc(){bs()||Ve(!1);let{basename:t,navigator:e}=x.useContext(bc),{matches:n}=x.useContext(wi),{pathname:r}=Oc(),i=JSON.stringify(IE(n).map(a=>a.pathnameBase)),s=x.useRef(!1);return x.useEffect(()=>{s.current=!0}),x.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=kE(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Er([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}const xx=x.createContext(null);function Ax(t){let e=x.useContext(wi).outlet;return e&&x.createElement(xx.Provider,{value:t},e)}function bE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=x.useContext(wi),{pathname:i}=Oc(),s=JSON.stringify(IE(r).map(o=>o.pathnameBase));return x.useMemo(()=>kE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function bx(t,e){bs()||Ve(!1);let{navigator:n}=x.useContext(bc),r=x.useContext(cm),{matches:i}=x.useContext(wi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Oc(),u;if(e){var c;let y=typeof e=="string"?vi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ve(!1),u=y}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",p=qk(t,{pathname:d}),g=Px(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Er([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Er([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&g?x.createElement(Rc.Provider,{value:{location:gf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:cr.Pop}},g):g}function Rx(){let t=Mx(),e=fx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unhandled Thrown Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"errorElement")," props on ",x.createElement("code",{style:s},"<Route>")))}class Ox extends x.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?x.createElement(wi.Provider,{value:this.props.routeContext},x.createElement(AE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Nx(t){let{routeContext:e,match:n,children:r}=t,i=x.useContext(xE);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(wi.Provider,{value:e},r)}function Px(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ve(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||x.createElement(Rx,null):null,c=e.concat(r.slice(0,a+1)),h=()=>x.createElement(Nx,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?x.createElement(Ox,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var Jy;(function(t){t.UseRevalidator="useRevalidator"})(Jy||(Jy={}));var du;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(du||(du={}));function Dx(t){let e=x.useContext(cm);return e||Ve(!1),e}function $x(t){let e=x.useContext(wi);return e||Ve(!1),e}function Lx(t){let e=$x(),n=e.matches[e.matches.length-1];return n.route.id||Ve(!1),n.route.id}function Mx(){var t;let e=x.useContext(AE),n=Dx(du.UseRouteError),r=Lx(du.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function hm(t){let{to:e,replace:n,state:r,relative:i}=t;bs()||Ve(!1);let s=x.useContext(cm),o=Nc();return x.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Ux(t){return Ax(t.context)}function ro(t){Ve(!1)}function Fx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:o=!1}=t;bs()&&Ve(!1);let a=e.replace(/^\/*/,"/"),l=x.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=vi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:p="default"}=r,g=x.useMemo(()=>{let y=CE(u,a);return y==null?null:{pathname:y,search:c,hash:h,state:d,key:p}},[a,u,c,h,d,p]);return g==null?null:x.createElement(bc.Provider,{value:l},x.createElement(Rc.Provider,{children:n,value:{location:g,navigationType:i}}))}function jx(t){let{children:e,location:n}=t,r=x.useContext(xE),i=r&&!e?r.router.routes:yf(e);return bx(i,n)}var Zy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Zy||(Zy={}));new Promise(()=>{});function yf(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;if(r.type===x.Fragment){n.push.apply(n,yf(r.props.children,e));return}r.type!==ro&&Ve(!1),!r.props.index||!r.props.children||Ve(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=yf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vf(){return vf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vf.apply(this,arguments)}function Vx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function zx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Bx(t,e){return t.button===0&&(!e||e==="_self")&&!zx(t)}const Hx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Wx(t){let{basename:e,children:n,window:r}=t,i=x.useRef();i.current==null&&(i.current=Vk({window:r,v5Compat:!0}));let s=i.current,[o,a]=x.useState({action:s.action,location:s.location});return x.useLayoutEffect(()=>s.listen(a),[s]),x.createElement(Fx,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const RE=x.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Vx(e,Hx),d=kx(u,{relative:i}),p=qx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(y){r&&r(y),y.defaultPrevented||p(y)}return x.createElement("a",vf({},h,{href:d,onClick:s?r:g,ref:n,target:l}))});var ev;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ev||(ev={}));var tv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(tv||(tv={}));function qx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Nc(),l=Oc(),u=bE(t,{relative:o});return x.useCallback(c=>{if(Bx(c,n)){c.preventDefault();let h=r!==void 0?r:qo(l)===qo(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Kx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},NE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Kx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gx=function(t){const e=OE(t);return NE.encodeByteArray(e,!0)},fu=function(t){return Gx(t).replace(/\./g,"")},PE=function(t){try{return NE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Yx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Xx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jx(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zx(){try{return typeof indexedDB=="object"}catch{return!1}}function eA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function tA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=()=>tA().__FIREBASE_DEFAULTS__,rA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&PE(t[1]);return e&&JSON.parse(e)},dm=()=>{try{return nA()||rA()||iA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},DE=t=>{var e,n;return(n=(e=dm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},sA=t=>{const e=DE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},oA=()=>{var t;return(t=dm())===null||t===void 0?void 0:t.config},$E=t=>{var e;return(e=dm())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uA,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Qn(i,a,r)}}function cA(t,e){return t.replace(hA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hA=/\{\$([^}]+)}/g;function dA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(nv(s)&&nv(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fA(t,e){const n=new pA(t,e);return n.subscribe.bind(n)}class pA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jh),i.error===void 0&&(i.error=jh),i.complete===void 0&&(i.complete=jh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class li{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new aA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vA(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yA(t){return t===Br?void 0:t}function vA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const EA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},SA=ue.INFO,TA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},_A=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fm{constructor(e){this.name=e,this._logLevel=SA,this._logHandler=_A,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const CA=(t,e)=>e.some(n=>t instanceof n);let rv,iv;function IA(){return rv||(rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kA(){return iv||(iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LE=new WeakMap,wf=new WeakMap,ME=new WeakMap,Vh=new WeakMap,pm=new WeakMap;function xA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&LE.set(n,t)}).catch(()=>{}),pm.set(e,t),e}function AA(t){if(wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wf.set(t,e)}let Ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ME.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bA(t){Ef=t(Ef)}function RA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zh(this),e,...n);return ME.set(r,e.sort?e.sort():[e]),Sr(r)}:kA().includes(t)?function(...e){return t.apply(zh(this),e),Sr(LE.get(this))}:function(...e){return Sr(t.apply(zh(this),e))}}function OA(t){return typeof t=="function"?RA(t):(t instanceof IDBTransaction&&AA(t),CA(t,IA())?new Proxy(t,Ef):t)}function Sr(t){if(t instanceof IDBRequest)return xA(t);if(Vh.has(t))return Vh.get(t);const e=OA(t);return e!==t&&(Vh.set(t,e),pm.set(e,t)),e}const zh=t=>pm.get(t);function NA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const PA=["get","getKey","getAll","getAllKeys","count"],DA=["put","add","delete","clear"],Bh=new Map;function sv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Bh.set(e,s),s}bA(t=>({...t,get:(e,n,r)=>sv(e,n)||t.get(e,n,r),has:(e,n)=>!!sv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sf="@firebase/app",ov="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new fm("@firebase/app"),MA="@firebase/app-compat",UA="@firebase/analytics-compat",FA="@firebase/analytics",jA="@firebase/app-check-compat",VA="@firebase/app-check",zA="@firebase/auth",BA="@firebase/auth-compat",HA="@firebase/database",WA="@firebase/database-compat",qA="@firebase/functions",KA="@firebase/functions-compat",GA="@firebase/installations",QA="@firebase/installations-compat",YA="@firebase/messaging",XA="@firebase/messaging-compat",JA="@firebase/performance",ZA="@firebase/performance-compat",eb="@firebase/remote-config",tb="@firebase/remote-config-compat",nb="@firebase/storage",rb="@firebase/storage-compat",ib="@firebase/firestore",sb="@firebase/firestore-compat",ob="firebase",ab="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="[DEFAULT]",lb={[Sf]:"fire-core",[MA]:"fire-core-compat",[FA]:"fire-analytics",[UA]:"fire-analytics-compat",[VA]:"fire-app-check",[jA]:"fire-app-check-compat",[zA]:"fire-auth",[BA]:"fire-auth-compat",[HA]:"fire-rtdb",[WA]:"fire-rtdb-compat",[qA]:"fire-fn",[KA]:"fire-fn-compat",[GA]:"fire-iid",[QA]:"fire-iid-compat",[YA]:"fire-fcm",[XA]:"fire-fcm-compat",[JA]:"fire-perf",[ZA]:"fire-perf-compat",[eb]:"fire-rc",[tb]:"fire-rc-compat",[nb]:"fire-gcs",[rb]:"fire-gcs-compat",[ib]:"fire-fst",[sb]:"fire-fst-compat","fire-js":"fire-js",[ob]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,_f=new Map;function ub(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(_f.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;_f.set(e,t);for(const n of mu.values())ub(n,t);return!0}function mm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tr=new ya("app","Firebase",cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=ab;function UE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=oA()),!n)throw Tr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new wA(i);for(const l of _f.values())o.addComponent(l);const a=new hb(n,r,o);return mu.set(i,a),a}function FE(t=Tf){const e=mu.get(t);if(!e&&t===Tf)return UE();if(!e)throw Tr.create("no-app",{appName:t});return e}function _r(t,e,n){var r;let i=(r=lb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}ps(new li(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db="firebase-heartbeat-database",fb=1,Ko="firebase-heartbeat-store";let Hh=null;function jE(){return Hh||(Hh=NA(db,fb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ko)}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),Hh}async function pb(t){try{return(await jE()).transaction(Ko).objectStore(Ko).get(VE(t))}catch(e){if(e instanceof Qn)ui.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function av(t,e){try{const r=(await jE()).transaction(Ko,"readwrite");return await r.objectStore(Ko).put(e,VE(t)),r.done}catch(n){if(n instanceof Qn)ui.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(r.message)}}}function VE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=1024,gb=30*24*60*60*1e3;class yb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lv(),{heartbeatsToSend:n,unsentEntries:r}=vb(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lv(){return new Date().toISOString().substring(0,10)}function vb(t,e=mb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zx()?eA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uv(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){ps(new li("platform-logger",e=>new $A(e),"PRIVATE")),ps(new li("heartbeat",e=>new yb(e),"PRIVATE")),_r(Sf,ov,t),_r(Sf,ov,"esm2017"),_r("fire-js","")}Eb("");function gm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sb=zE,BE=new ya("auth","Firebase",zE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=new fm("@firebase/auth");function Al(t,...e){cv.logLevel<=ue.ERROR&&cv.error(`Auth (${wa}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw ym(t,...e)}function Tn(t,...e){return ym(t,...e)}function Tb(t,e,n){const r=Object.assign(Object.assign({},Sb()),{[e]:n});return new ya("auth","Firebase",r).create(e,{appName:t.name})}function ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BE.create(t,...e)}function W(t,e,...n){if(!t)throw ym(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Al(e),new Error(e)}function zn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;function Dn(t){zn(t instanceof Function,"Expected a class definition");let e=hv.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hv.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(t,e){const n=mm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;fn(i,"already-initialized")}return n.initialize({options:e})}function Cb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ib(){return dv()==="http:"||dv()==="https:"}function dv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ib()||Yx()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=Qx()||Xx()}get(){return kb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=new Ea(3e4,6e4);function Sa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rs(t,e,n,r,i={}){return WE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=va(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),HE.fetch()(qE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function WE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ab),e);try{const i=new Rb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ol(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ol(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ol(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ol(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Tb(t,c,u);fn(t,c)}}catch(i){if(i instanceof Qn)throw i;fn(t,"network-request-failed")}}async function Ta(t,e,n,r,i={}){const s=await Rs(t,e,n,r,i);return"mfaPendingCredential"in s&&fn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vm(t.config,i):`${t.config.apiScheme}://${i}`}class Rb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),bb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ol(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(t,e){return Rs(t,"POST","/v1/accounts:delete",e)}async function Nb(t,e){return Rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pb(t,e=!1){const n=_t(t),r=await n.getIdToken(e),i=wm(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:So(Wh(i.auth_time)),issuedAtTime:So(Wh(i.iat)),expirationTime:So(Wh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wh(t){return Number(t)*1e3}function wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Al("JWT malformed, contained fewer than 3 sections"),null;try{const i=PE(n);return i?JSON.parse(i):(Al("Failed to decode base64 JWT payload"),null)}catch(i){return Al("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Db(t){const e=wm(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&$b(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $b({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=So(this.lastLoginAt),this.creationTime=So(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ms(t,Nb(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Fb(s.providerUserInfo):[],a=Ub(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new KE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Mb(t){const e=_t(t);await gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ub(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Fb(t){return t.map(e=>{var{providerId:n}=e,r=gm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e){const n=await WE(t,{},async()=>{const r=va({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",HE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Db(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Go;return r&&(W(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new KE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pb(this,e)}reload(){return Mb(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ms(this,Ob(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:A,stsTokenManager:R}=n;W(v&&R,e,"internal-error");const P=Go.fromJSON(this.name,R);W(typeof v=="string",e,"internal-error"),Jn(h,e.name),Jn(d,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof _=="boolean",e,"internal-error"),Jn(p,e.name),Jn(g,e.name),Jn(y,e.name),Jn(E,e.name),Jn(m,e.name),Jn(f,e.name);const J=new Zr({uid:v,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:_,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:P,createdAt:m,lastLoginAt:f});return A&&Array.isArray(A)&&(J.providerData=A.map(F=>Object.assign({},F))),E&&(J._redirectEventId=E),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Go;i.updateFromServerResponse(n);const s=new Zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}GE.type="NONE";const fv=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xi(Dn(fv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dn(fv);const o=bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Zr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Xi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Xi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(eS(e))return"Webos";if(Em(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(JE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QE(t=Tt()){return/firefox\//i.test(t)}function Em(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=Tt()){return/crios\//i.test(t)}function XE(t=Tt()){return/iemobile/i.test(t)}function JE(t=Tt()){return/android/i.test(t)}function ZE(t=Tt()){return/blackberry/i.test(t)}function eS(t=Tt()){return/webos/i.test(t)}function Pc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vb(t=Tt()){var e;return Pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zb(){return Jx()&&document.documentMode===10}function tS(t=Tt()){return Pc(t)||JE(t)||eS(t)||ZE(t)||/windows phone/i.test(t)||XE(t)}function Bb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e=[]){let n;switch(t){case"Browser":n=pv(Tt());break;case"Worker":n=`${pv(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wa}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new Hb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_t(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function _a(t){return _t(t)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=fA(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function qb(t,e,n){const r=_a(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rS(e),{host:o,port:a}=Kb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Gb()}function rS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kb(t){const e=rS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:gv(o)}}}function gv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function Qb(t,e){return Rs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",Sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Sa(t,e))}async function Jb(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends Sm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Yb(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Xb(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Qb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jb(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",Sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb="http://localhost";class ci extends Sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ji(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ji(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ji(e,n)}buildRequest(){const e={requestUri:Zb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=va(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tR(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,r=io(so(t)).deep_link_id;return(r?io(so(r)).link:null)||r||n||e||t}class Tm{constructor(e){var n,r,i,s,o,a;const l=io(so(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=eR((i=l.mode)!==null&&i!==void 0?i:null);W(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tR(e);try{return new Tm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tm.parseLink(n);return W(r,"argument-error"),Qo._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends iS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ca{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ca{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Ca{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e){return Ta(t,"POST","/v1/accounts:signUp",Sa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zr._fromIdTokenResponse(e,r,i),o=yv(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yv(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu extends Qn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yu(e,n,r,i)}}function sS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yu._fromErrorAndOperation(t,s,e,r):s})}async function rR(t,e,n=!1){const r=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ms(t,sS(r,i,e,t),n);W(s.idToken,r,"internal-error");const o=wm(s.idToken);W(o,r,"internal-error");const{sub:a}=o;return W(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&fn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e,n=!1){const r="signIn",i=await sS(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function sR(t,e){return oS(_a(t),e)}async function oR(t,e,n){const r=_a(t),i=await nR(r,{returnSecureToken:!0,email:e,password:n}),s=await hi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function aR(t,e,n){return sR(_t(t),Os.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(t,e){return Rs(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=_t(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ms(r,lR(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function cR(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function hR(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function dR(t,e,n,r){return _t(t).onAuthStateChanged(e,n,r)}const vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){const t=Tt();return Em(t)||Pc(t)}const pR=1e3,mR=10;class lS extends aS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fR()&&Bb(),this.fallbackToPolling=tS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zb()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lS.type="LOCAL";const gR=lS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS extends aS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uS.type="SESSION";const cS=uS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await yR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_m("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function wR(t){_n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function ER(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TR(){return hS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS="firebaseLocalStorageDb",_R=1,wu="firebaseLocalStorage",fS="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function CR(){const t=indexedDB.deleteDatabase(dS);return new Ia(t).toPromise()}function If(){const t=indexedDB.open(dS,_R);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:fS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await CR(),e(await If()))})})}async function vv(t,e,n){const r=$c(t,!0).put({[fS]:e,value:n});return new Ia(r).toPromise()}async function IR(t,e){const n=$c(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function wv(t,e){const n=$c(t,!0).delete(e);return new Ia(n).toPromise()}const kR=800,xR=3;class pS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(TR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ER(),!this.activeServiceWorker)return;this.sender=new vR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await vv(e,vu,"1"),await wv(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>IR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pS.type="LOCAL";const AR=pS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RR(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bR().appendChild(r)})}function OR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ea(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t,e){return e?Dn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm extends Sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ji(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ji(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PR(t){return oS(t.auth,new Cm(t),t.bypassAuthState)}function DR(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),iR(n,new Cm(t),t.bypassAuthState)}async function $R(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),rR(n,new Cm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PR;case"linkViaPopup":case"linkViaRedirect":return $R;case"reauthViaPopup":case"reauthViaRedirect":return DR;default:fn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new Ea(2e3,1e4);class Vi extends mS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,LR.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="pendingRedirect",Rl=new Map;class UR extends mS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rl.get(this.auth._key());if(!e){try{const r=await FR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rl.set(this.auth._key(),e)}return this.bypassAuthState||Rl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FR(t,e){const n=zR(e),r=VR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jR(t,e){Rl.set(t._key(),e)}function VR(t){return Dn(t._redirectPersistence)}function zR(t){return bl(MR,t.config.apiKey,t.name)}async function BR(t,e,n=!1){const r=_a(t),i=NR(r,e),o=await new UR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=10*60*1e3;class WR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(e))}saveEventToCache(e){this.cachedEventUids.add(Ev(e)),this.lastProcessedEventTime=Date.now()}}function Ev(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e={}){return Rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QR=/^https?/;async function YR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KR(t);for(const n of e)try{if(XR(n))return}catch{}fn(t,"unauthorized-domain")}function XR(t){const e=Cf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QR.test(n))return!1;if(GR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=new Ea(3e4,6e4);function Sv(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZR(t){return new Promise((e,n)=>{var r,i,s;function o(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),n(Tn(t,"network-request-failed"))},timeout:JR.get()})}if(!((i=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_n().gapi)===null||s===void 0)&&s.load)o();else{const a=OR("iframefcb");return _n()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},RR(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ol=null,e})}let Ol=null;function eO(t){return Ol=Ol||ZR(t),Ol}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Ea(5e3,15e3),nO="__/auth/iframe",rO="emulator/auth/iframe",iO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oO(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vm(e,rO):`https://${t.config.authDomain}/${nO}`,r={apiKey:e.apiKey,appName:t.name,v:wa},i=sO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${va(r).slice(1)}`}async function aO(t){const e=await eO(t),n=_n().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:oO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=_n().setTimeout(()=>{s(o)},tO.get());function l(){_n().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uO=500,cO=600,hO="_blank",dO="http://localhost";class Tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fO(t,e,n,r=uO,i=cO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Tt().toLowerCase();n&&(a=YE(u)?hO:n),QE(u)&&(e=e||dO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Vb(u)&&a!=="_self")return pO(e||"",a),new Tv(null);const h=window.open(e||"",a,c);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Tv(h)}function pO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="__/auth/handler",gO="emulator/auth/handler";function _v(t,e,n,r,i,s){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wa,eventId:i};if(e instanceof iS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ca){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${yO(t)}?${va(a).slice(1)}`}function yO({config:t}){return t.emulator?vm(t,gO):`https://${t.authDomain}/${mO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="webStorageSupport";class vO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cS,this._completeRedirectFn=BR,this._overrideRedirectResult=jR}async _openPopup(e,n,r,i){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_v(e,n,r,Cf(),i);return fO(e,o,_m())}async _openRedirect(e,n,r,i){return await this._originValidation(e),wR(_v(e,n,r,Cf(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aO(e),r=new WR(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qh,{type:qh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qh];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tS()||Em()||Pc()}}const wO=vO;var Cv="@firebase/auth",Iv="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TO(t){ps(new li("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{W(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nS(t)},c=new Wb(a,l,u);return Cb(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new li("auth-internal",e=>{const n=_a(e.getProvider("auth").getImmediate());return(r=>new EO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(Cv,Iv,SO(t)),_r(Cv,Iv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O=5*60,CO=$E("authIdTokenMaxAge")||_O;let kv=null;const IO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CO)return;const i=n==null?void 0:n.token;kv!==i&&(kv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kO(t=FE()){const e=mm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_b(t,{popupRedirectResolver:wO,persistence:[AR,gR,cS]}),r=$E("authTokenSyncURL");if(r){const s=IO(r);hR(n,s,()=>s(n.currentUser)),cR(n,o=>s(o))}const i=DE("auth");return i&&qb(n,`http://${i}`),n}TO("Browser");var ne={},xO={get exports(){return ne},set exports(t){ne=t}},AO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",bO=AO,RO=bO;function yS(){}function vS(){}vS.resetWarningCache=yS;var OO=function(){function t(r,i,s,o,a,l){if(l!==RO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vS,resetWarningCache:yS};return n.PropTypes=n,n};xO.exports=OO();var NO=typeof Element<"u",PO=typeof Map=="function",DO=typeof Set=="function",$O=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Nl(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Nl(t[r],e[r]))return!1;return!0}var s;if(PO&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;for(s=t.entries();!(r=s.next()).done;)if(!Nl(r.value[1],e.get(r.value[0])))return!1;return!0}if(DO&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(r=s.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if($O&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,i[r]))return!1;if(NO&&t instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&t.$$typeof)&&!Nl(t[i[r]],e[i[r]]))return!1;return!0}return t!==t&&e!==e}var LO=function(e,n){try{return Nl(e,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},MO=function(t,e,n,r,i,s,o,a){if(!t){var l;if(e===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,a],c=0;l=new Error(e.replace(/%s/g,function(){return u[c++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},xv=MO,UO=function(e,n,r,i){var s=r?r.call(i,e,n):void 0;if(s!==void 0)return!!s;if(e===n)return!0;if(typeof e!="object"||!e||typeof n!="object"||!n)return!1;var o=Object.keys(e),a=Object.keys(n);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),u=0;u<o.length;u++){var c=o[u];if(!l(c))return!1;var h=e[c],d=n[c];if(s=r?r.call(i,h,d,c):void 0,s===!1||s===void 0&&h!==d)return!1}return!0};function $e(){return $e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$e.apply(this,arguments)}function Im(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,kf(t,e)}function kf(t,e){return kf=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},kf(t,e)}function Av(t,e){if(t==null)return{};var n,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(i[n]=t[n]);return i}var B={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},FO={rel:["amphtml","canonical","alternate"]},jO={type:["application/ld+json"]},VO={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},bv=Object.keys(B).map(function(t){return B[t]}),Eu={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},zO=Object.keys(Eu).reduce(function(t,e){return t[Eu[e]]=e,t},{}),Zi=function(t,e){for(var n=t.length-1;n>=0;n-=1){var r=t[n];if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}return null},BO=function(t){var e=Zi(t,B.TITLE),n=Zi(t,"titleTemplate");if(Array.isArray(e)&&(e=e.join("")),n&&e)return n.replace(/%s/g,function(){return e});var r=Zi(t,"defaultTitle");return e||r||void 0},HO=function(t){return Zi(t,"onChangeClientState")||function(){}},Kh=function(t,e){return e.filter(function(n){return n[t]!==void 0}).map(function(n){return n[t]}).reduce(function(n,r){return $e({},n,r)},{})},WO=function(t,e){return e.filter(function(n){return n[B.BASE]!==void 0}).map(function(n){return n[B.BASE]}).reverse().reduce(function(n,r){if(!n.length)for(var i=Object.keys(r),s=0;s<i.length;s+=1){var o=i[s].toLowerCase();if(t.indexOf(o)!==-1&&r[o])return n.concat(r)}return n},[])},Ys=function(t,e,n){var r={};return n.filter(function(i){return!!Array.isArray(i[t])||(i[t]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+t+' should be of type "Array". Instead found type "'+typeof i[t]+'"'),!1)}).map(function(i){return i[t]}).reverse().reduce(function(i,s){var o={};s.filter(function(h){for(var d,p=Object.keys(h),g=0;g<p.length;g+=1){var y=p[g],E=y.toLowerCase();e.indexOf(E)===-1||d==="rel"&&h[d].toLowerCase()==="canonical"||E==="rel"&&h[E].toLowerCase()==="stylesheet"||(d=E),e.indexOf(y)===-1||y!=="innerHTML"&&y!=="cssText"&&y!=="itemprop"||(d=y)}if(!d||!h[d])return!1;var m=h[d].toLowerCase();return r[d]||(r[d]={}),o[d]||(o[d]={}),!r[d][m]&&(o[d][m]=!0,!0)}).reverse().forEach(function(h){return i.push(h)});for(var a=Object.keys(o),l=0;l<a.length;l+=1){var u=a[l],c=$e({},r[u],o[u]);r[u]=c}return i},[]).reverse()},qO=function(t,e){if(Array.isArray(t)&&t.length){for(var n=0;n<t.length;n+=1)if(t[n][e])return!0}return!1},wS=function(t){return Array.isArray(t)?t.join(""):t},Gh=function(t,e){return Array.isArray(t)?t.reduce(function(n,r){return function(i,s){for(var o=Object.keys(i),a=0;a<o.length;a+=1)if(s[o[a]]&&s[o[a]].includes(i[o[a]]))return!0;return!1}(r,e)?n.priority.push(r):n.default.push(r),n},{priority:[],default:[]}):{default:t}},Rv=function(t,e){var n;return $e({},t,((n={})[e]=void 0,n))},KO=[B.NOSCRIPT,B.SCRIPT,B.STYLE],Qh=function(t,e){return e===void 0&&(e=!0),e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ov=function(t){return Object.keys(t).reduce(function(e,n){var r=t[n]!==void 0?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r},"")},Nv=function(t,e){return e===void 0&&(e={}),Object.keys(t).reduce(function(n,r){return n[Eu[r]||r]=t[r],n},e)},Pl=function(t,e){return e.map(function(n,r){var i,s=((i={key:r})["data-rh"]=!0,i);return Object.keys(n).forEach(function(o){var a=Eu[o]||o;a==="innerHTML"||a==="cssText"?s.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:s[a]=n[o]}),Ae.createElement(t,s)})},Gt=function(t,e,n){switch(t){case B.TITLE:return{toComponent:function(){return i=e.titleAttributes,(s={key:r=e.title})["data-rh"]=!0,o=Nv(i,s),[Ae.createElement(B.TITLE,o,r)];var r,i,s,o},toString:function(){return function(r,i,s,o){var a=Ov(s),l=wS(i);return a?"<"+r+' data-rh="true" '+a+">"+Qh(l,o)+"</"+r+">":"<"+r+' data-rh="true">'+Qh(l,o)+"</"+r+">"}(t,e.title,e.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return Nv(e)},toString:function(){return Ov(e)}};default:return{toComponent:function(){return Pl(t,e)},toString:function(){return function(r,i,s){return i.reduce(function(o,a){var l=Object.keys(a).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,d){var p=a[d]===void 0?d:d+'="'+Qh(a[d],s)+'"';return h?h+" "+p:p},""),u=a.innerHTML||a.cssText||"",c=KO.indexOf(r)===-1;return o+"<"+r+' data-rh="true" '+l+(c?"/>":">"+u+"</"+r+">")},"")}(t,e,n)}}}},xf=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,s=t.noscriptTags,o=t.styleTags,a=t.title,l=a===void 0?"":a,u=t.titleAttributes,c=t.linkTags,h=t.metaTags,d=t.scriptTags,p={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var g=function(y){var E=y.linkTags,m=y.scriptTags,f=y.encode,v=Gh(y.metaTags,VO),w=Gh(E,FO),_=Gh(m,jO);return{priorityMethods:{toComponent:function(){return[].concat(Pl(B.META,v.priority),Pl(B.LINK,w.priority),Pl(B.SCRIPT,_.priority))},toString:function(){return Gt(B.META,v.priority,f)+" "+Gt(B.LINK,w.priority,f)+" "+Gt(B.SCRIPT,_.priority,f)}},metaTags:v.default,linkTags:w.default,scriptTags:_.default}}(t);p=g.priorityMethods,c=g.linkTags,h=g.metaTags,d=g.scriptTags}return{priority:p,base:Gt(B.BASE,e,r),bodyAttributes:Gt("bodyAttributes",n,r),htmlAttributes:Gt("htmlAttributes",i,r),link:Gt(B.LINK,c,r),meta:Gt(B.META,h,r),noscript:Gt(B.NOSCRIPT,s,r),script:Gt(B.SCRIPT,d,r),style:Gt(B.STYLE,o,r),title:Gt(B.TITLE,{title:l,titleAttributes:u},r)}},al=[],Af=function(t,e){var n=this;e===void 0&&(e=typeof document<"u"),this.instances=[],this.value={setHelmet:function(r){n.context.helmet=r},helmetInstances:{get:function(){return n.canUseDOM?al:n.instances},add:function(r){(n.canUseDOM?al:n.instances).push(r)},remove:function(r){var i=(n.canUseDOM?al:n.instances).indexOf(r);(n.canUseDOM?al:n.instances).splice(i,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=xf({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ES=Ae.createContext({}),GO=ne.shape({setHelmet:ne.func,helmetInstances:ne.shape({get:ne.func,add:ne.func,remove:ne.func})}),QO=typeof document<"u",zi=function(t){function e(n){var r;return(r=t.call(this,n)||this).helmetData=new Af(r.props.context,e.canUseDOM),r}return Im(e,t),e.prototype.render=function(){return Ae.createElement(ES.Provider,{value:this.helmetData.value},this.props.children)},e}(x.Component);zi.canUseDOM=QO,zi.propTypes={context:ne.shape({helmet:ne.shape()}),children:ne.node.isRequired},zi.defaultProps={context:{}},zi.displayName="HelmetProvider";var Ii=function(t,e){var n,r=document.head||document.querySelector(B.HEAD),i=r.querySelectorAll(t+"[data-rh]"),s=[].slice.call(i),o=[];return e&&e.length&&e.forEach(function(a){var l=document.createElement(t);for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(u==="innerHTML"?l.innerHTML=a.innerHTML:u==="cssText"?l.styleSheet?l.styleSheet.cssText=a.cssText:l.appendChild(document.createTextNode(a.cssText)):l.setAttribute(u,a[u]===void 0?"":a[u]));l.setAttribute("data-rh","true"),s.some(function(c,h){return n=h,l.isEqualNode(c)})?s.splice(n,1):o.push(l)}),s.forEach(function(a){return a.parentNode.removeChild(a)}),o.forEach(function(a){return r.appendChild(a)}),{oldTags:s,newTags:o}},Yh=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-rh"),i=r?r.split(","):[],s=[].concat(i),o=Object.keys(e),a=0;a<o.length;a+=1){var l=o[a],u=e[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),i.indexOf(l)===-1&&i.push(l);var c=s.indexOf(l);c!==-1&&s.splice(c,1)}for(var h=s.length-1;h>=0;h-=1)n.removeAttribute(s[h]);i.length===s.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==o.join(",")&&n.setAttribute("data-rh",o.join(","))}},Pv=function(t,e){var n=t.baseTag,r=t.htmlAttributes,i=t.linkTags,s=t.metaTags,o=t.noscriptTags,a=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,c=t.title,h=t.titleAttributes;Yh(B.BODY,t.bodyAttributes),Yh(B.HTML,r),function(y,E){y!==void 0&&document.title!==y&&(document.title=wS(y)),Yh(B.TITLE,E)}(c,h);var d={baseTag:Ii(B.BASE,n),linkTags:Ii(B.LINK,i),metaTags:Ii(B.META,s),noscriptTags:Ii(B.NOSCRIPT,o),scriptTags:Ii(B.SCRIPT,l),styleTags:Ii(B.STYLE,u)},p={},g={};Object.keys(d).forEach(function(y){var E=d[y],m=E.newTags,f=E.oldTags;m.length&&(p[y]=m),f.length&&(g[y]=d[y].oldTags)}),e&&e(),a(t,p,g)},Xs=null,Su=function(t){function e(){for(var r,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(r=t.call.apply(t,[this].concat(s))||this).rendered=!1,r}Im(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(r){return!UO(r,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var r,i,s=this.props.context,o=s.setHelmet,a=null,l=(r=s.helmetInstances.get().map(function(u){var c=$e({},u.props);return delete c.context,c}),{baseTag:WO(["href"],r),bodyAttributes:Kh("bodyAttributes",r),defer:Zi(r,"defer"),encode:Zi(r,"encodeSpecialCharacters"),htmlAttributes:Kh("htmlAttributes",r),linkTags:Ys(B.LINK,["rel","href"],r),metaTags:Ys(B.META,["name","charset","http-equiv","property","itemprop"],r),noscriptTags:Ys(B.NOSCRIPT,["innerHTML"],r),onChangeClientState:HO(r),scriptTags:Ys(B.SCRIPT,["src","innerHTML"],r),styleTags:Ys(B.STYLE,["cssText"],r),title:BO(r),titleAttributes:Kh("titleAttributes",r),prioritizeSeoTags:qO(r,"prioritizeSeoTags")});zi.canUseDOM?(i=l,Xs&&cancelAnimationFrame(Xs),i.defer?Xs=requestAnimationFrame(function(){Pv(i,function(){Xs=null})}):(Pv(i),Xs=null)):xf&&(a=xf(l)),o(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},e}(x.Component);Su.propTypes={context:GO.isRequired},Su.displayName="HelmetDispatcher";var YO=["children"],XO=["children"],es=function(t){function e(){return t.apply(this,arguments)||this}Im(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(r){return!LO(Rv(this.props,"helmetData"),Rv(r,"helmetData"))},n.mapNestedChildrenToProps=function(r,i){if(!i)return null;switch(r.type){case B.SCRIPT:case B.NOSCRIPT:return{innerHTML:i};case B.STYLE:return{cssText:i};default:throw new Error("<"+r.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(r){var i,s=r.child,o=r.arrayTypeChildren;return $e({},o,((i={})[s.type]=[].concat(o[s.type]||[],[$e({},r.newChildProps,this.mapNestedChildrenToProps(s,r.nestedChildren))]),i))},n.mapObjectTypeChildren=function(r){var i,s,o=r.child,a=r.newProps,l=r.newChildProps,u=r.nestedChildren;switch(o.type){case B.TITLE:return $e({},a,((i={})[o.type]=u,i.titleAttributes=$e({},l),i));case B.BODY:return $e({},a,{bodyAttributes:$e({},l)});case B.HTML:return $e({},a,{htmlAttributes:$e({},l)});default:return $e({},a,((s={})[o.type]=$e({},l),s))}},n.mapArrayTypeChildrenToProps=function(r,i){var s=$e({},i);return Object.keys(r).forEach(function(o){var a;s=$e({},s,((a={})[o]=r[o],a))}),s},n.warnOnInvalidChildren=function(r,i){return xv(bv.some(function(s){return r.type===s}),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+bv.join(", ")+" are allowed. Helmet does not support rendering <"+r.type+"> elements. Refer to our API for more information."),xv(!i||typeof i=="string"||Array.isArray(i)&&!i.some(function(s){return typeof s!="string"}),"Helmet expects a string as a child of <"+r.type+">. Did you forget to wrap your children in braces? ( <"+r.type+">{``}</"+r.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(r,i){var s=this,o={};return Ae.Children.forEach(r,function(a){if(a&&a.props){var l=a.props,u=l.children,c=Av(l,YO),h=Object.keys(c).reduce(function(p,g){return p[zO[g]||g]=c[g],p},{}),d=a.type;switch(typeof d=="symbol"?d=d.toString():s.warnOnInvalidChildren(a,u),d){case B.FRAGMENT:i=s.mapChildrenToProps(u,i);break;case B.LINK:case B.META:case B.NOSCRIPT:case B.SCRIPT:case B.STYLE:o=s.flattenArrayTypeChildren({child:a,arrayTypeChildren:o,newChildProps:h,nestedChildren:u});break;default:i=s.mapObjectTypeChildren({child:a,newProps:i,newChildProps:h,nestedChildren:u})}}}),this.mapArrayTypeChildrenToProps(o,i)},n.render=function(){var r=this.props,i=r.children,s=Av(r,XO),o=$e({},s),a=s.helmetData;return i&&(o=this.mapChildrenToProps(i,o)),!a||a instanceof Af||(a=new Af(a.context,a.instances)),a?Ae.createElement(Su,$e({},o,{context:a.value,helmetData:void 0})):Ae.createElement(ES.Consumer,null,function(l){return Ae.createElement(Su,$e({},o,{context:l}))})},e}(x.Component);es.propTypes={base:ne.object,bodyAttributes:ne.object,children:ne.oneOfType([ne.arrayOf(ne.node),ne.node]),defaultTitle:ne.string,defer:ne.bool,encodeSpecialCharacters:ne.bool,htmlAttributes:ne.object,link:ne.arrayOf(ne.object),meta:ne.arrayOf(ne.object),noscript:ne.arrayOf(ne.object),onChangeClientState:ne.func,script:ne.arrayOf(ne.object),style:ne.arrayOf(ne.object),title:ne.string,titleAttributes:ne.object,titleTemplate:ne.string,prioritizeSeoTags:ne.bool,helmetData:ne.object},es.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},es.displayName="Helmet";function JO(t){function e(N,D,$,Q,S){for(var se=0,O=0,Oe=0,ce=0,fe,te,tt=0,Ot=0,le,ht=le=fe=0,he=0,nt=0,js=0,rt=0,za=$.length,Vs=za-1,rn,X="",De="",uh="",ch="",Yn;he<za;){if(te=$.charCodeAt(he),he===Vs&&O+ce+Oe+se!==0&&(O!==0&&(te=O===47?10:47),ce=Oe=se=0,za++,Vs++),O+ce+Oe+se===0){if(he===Vs&&(0<nt&&(X=X.replace(d,"")),0<X.trim().length)){switch(te){case 32:case 9:case 59:case 13:case 10:break;default:X+=$.charAt(he)}te=59}switch(te){case 123:for(X=X.trim(),fe=X.charCodeAt(0),le=1,rt=++he;he<za;){switch(te=$.charCodeAt(he)){case 123:le++;break;case 125:le--;break;case 47:switch(te=$.charCodeAt(he+1)){case 42:case 47:e:{for(ht=he+1;ht<Vs;++ht)switch($.charCodeAt(ht)){case 47:if(te===42&&$.charCodeAt(ht-1)===42&&he+2!==ht){he=ht+1;break e}break;case 10:if(te===47){he=ht+1;break e}}he=ht}}break;case 91:te++;case 40:te++;case 34:case 39:for(;he++<Vs&&$.charCodeAt(he)!==te;);}if(le===0)break;he++}switch(le=$.substring(rt,he),fe===0&&(fe=(X=X.replace(h,"").trim()).charCodeAt(0)),fe){case 64:switch(0<nt&&(X=X.replace(d,"")),te=X.charCodeAt(1),te){case 100:case 109:case 115:case 45:nt=D;break;default:nt=An}if(le=e(D,nt,le,te,S+1),rt=le.length,0<b&&(nt=n(An,X,js),Yn=a(3,le,nt,D,et,Be,rt,te,S,Q),X=nt.join(""),Yn!==void 0&&(rt=(le=Yn.trim()).length)===0&&(te=0,le="")),0<rt)switch(te){case 115:X=X.replace(A,o);case 100:case 109:case 45:le=X+"{"+le+"}";break;case 107:X=X.replace(f,"$1 $2"),le=X+"{"+le+"}",le=ct===1||ct===2&&s("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=X+le,Q===112&&(le=(De+=le,""))}else le="";break;default:le=e(D,n(D,X,js),le,Q,S+1)}uh+=le,le=js=nt=ht=fe=0,X="",te=$.charCodeAt(++he);break;case 125:case 59:if(X=(0<nt?X.replace(d,""):X).trim(),1<(rt=X.length))switch(ht===0&&(fe=X.charCodeAt(0),fe===45||96<fe&&123>fe)&&(rt=(X=X.replace(" ",":")).length),0<b&&(Yn=a(1,X,D,N,et,Be,De.length,Q,S,Q))!==void 0&&(rt=(X=Yn.trim()).length)===0&&(X="\0\0"),fe=X.charCodeAt(0),te=X.charCodeAt(1),fe){case 0:break;case 64:if(te===105||te===99){ch+=X+$.charAt(he);break}default:X.charCodeAt(rt-1)!==58&&(De+=i(X,fe,te,X.charCodeAt(2)))}js=nt=ht=fe=0,X="",te=$.charCodeAt(++he)}}switch(te){case 13:case 10:O===47?O=0:1+fe===0&&Q!==107&&0<X.length&&(nt=1,X+="\0"),0<b*G&&a(0,X,D,N,et,Be,De.length,Q,S,Q),Be=1,et++;break;case 59:case 125:if(O+ce+Oe+se===0){Be++;break}default:switch(Be++,rn=$.charAt(he),te){case 9:case 32:if(ce+se+O===0)switch(tt){case 44:case 58:case 9:case 32:rn="";break;default:te!==32&&(rn=" ")}break;case 0:rn="\\0";break;case 12:rn="\\f";break;case 11:rn="\\v";break;case 38:ce+O+se===0&&(nt=js=1,rn="\f"+rn);break;case 108:if(ce+O+se+Mt===0&&0<ht)switch(he-ht){case 2:tt===112&&$.charCodeAt(he-3)===58&&(Mt=tt);case 8:Ot===111&&(Mt=Ot)}break;case 58:ce+O+se===0&&(ht=he);break;case 44:O+Oe+ce+se===0&&(nt=1,rn+="\r");break;case 34:case 39:O===0&&(ce=ce===te?0:ce===0?te:ce);break;case 91:ce+O+Oe===0&&se++;break;case 93:ce+O+Oe===0&&se--;break;case 41:ce+O+se===0&&Oe--;break;case 40:if(ce+O+se===0){if(fe===0)switch(2*tt+3*Ot){case 533:break;default:fe=1}Oe++}break;case 64:O+Oe+ce+se+ht+le===0&&(le=1);break;case 42:case 47:if(!(0<ce+se+Oe))switch(O){case 0:switch(2*te+3*$.charCodeAt(he+1)){case 235:O=47;break;case 220:rt=he,O=42}break;case 42:te===47&&tt===42&&rt+2!==he&&($.charCodeAt(rt+2)===33&&(De+=$.substring(rt,he+1)),rn="",O=0)}}O===0&&(X+=rn)}Ot=tt,tt=te,he++}if(rt=De.length,0<rt){if(nt=D,0<b&&(Yn=a(2,De,nt,N,et,Be,rt,Q,S,Q),Yn!==void 0&&(De=Yn).length===0))return ch+De+uh;if(De=nt.join(",")+"{"+De+"}",ct*Mt!==0){switch(ct!==2||s(De,2)||(Mt=0),Mt){case 111:De=De.replace(w,":-moz-$1")+De;break;case 112:De=De.replace(v,"::-webkit-input-$1")+De.replace(v,"::-moz-$1")+De.replace(v,":-ms-input-$1")+De}Mt=0}}return ch+De+uh}function n(N,D,$){var Q=D.trim().split(E);D=Q;var S=Q.length,se=N.length;switch(se){case 0:case 1:var O=0;for(N=se===0?"":N[0]+" ";O<S;++O)D[O]=r(N,D[O],$).trim();break;default:var Oe=O=0;for(D=[];O<S;++O)for(var ce=0;ce<se;++ce)D[Oe++]=r(N[ce]+" ",Q[O],$).trim()}return D}function r(N,D,$){var Q=D.charCodeAt(0);switch(33>Q&&(Q=(D=D.trim()).charCodeAt(0)),Q){case 38:return D.replace(m,"$1"+N.trim());case 58:return N.trim()+D.replace(m,"$1"+N.trim());default:if(0<1*$&&0<D.indexOf("\f"))return D.replace(m,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+D}function i(N,D,$,Q){var S=N+";",se=2*D+3*$+4*Q;if(se===944){N=S.indexOf(":",9)+1;var O=S.substring(N,S.length-1).trim();return O=S.substring(0,N).trim()+O+";",ct===1||ct===2&&s(O,1)?"-webkit-"+O+O:O}if(ct===0||ct===2&&!s(S,1))return S;switch(se){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(_e,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return O=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+O+"-webkit-"+S+"-ms-flex-pack"+O+S;case 1005:return g.test(S)?S.replace(p,":-webkit-")+S.replace(p,":-moz-")+S:S;case 1e3:switch(O=S.substring(13).trim(),D=O.indexOf("-")+1,O.charCodeAt(0)+O.charCodeAt(D)){case 226:O=S.replace(_,"tb");break;case 232:O=S.replace(_,"tb-rl");break;case 220:O=S.replace(_,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+O+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(D=(S=N).length-10,O=(S.charCodeAt(D)===33?S.substring(0,D):S).substring(N.indexOf(":",7)+1).trim(),se=O.charCodeAt(0)+(O.charCodeAt(7)|0)){case 203:if(111>O.charCodeAt(8))break;case 115:S=S.replace(O,"-webkit-"+O)+";"+S;break;case 207:case 102:S=S.replace(O,"-webkit-"+(102<se?"inline-":"")+"box")+";"+S.replace(O,"-webkit-"+O)+";"+S.replace(O,"-ms-"+O+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return O=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+O+"-ms-flex-"+O+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(P,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(P,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(F.test(N)===!0)return(O=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?i(N.replace("stretch","fill-available"),D,$,Q).replace(":fill-available",":stretch"):S.replace(O,"-webkit-"+O)+S.replace(O,"-moz-"+O.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,$+Q===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+S}return S}function s(N,D){var $=N.indexOf(D===1?":":"{"),Q=N.substring(0,D!==3?$:10);return $=N.substring($+1,N.length-1),H(D!==2?Q:Q.replace(J,"$1"),$,D)}function o(N,D){var $=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return $!==D+";"?$.replace(R," or ($1)").substring(4):"("+D+")"}function a(N,D,$,Q,S,se,O,Oe,ce,fe){for(var te=0,tt=D,Ot;te<b;++te)switch(Ot=It[te].call(c,N,tt,$,Q,S,se,O,Oe,ce,fe)){case void 0:case!1:case!0:case null:break;default:tt=Ot}if(tt!==D)return tt}function l(N){switch(N){case void 0:case null:b=It.length=0;break;default:if(typeof N=="function")It[b++]=N;else if(typeof N=="object")for(var D=0,$=N.length;D<$;++D)l(N[D]);else G=!!N|0}return l}function u(N){return N=N.prefix,N!==void 0&&(H=null,N?typeof N!="function"?ct=1:(ct=2,H=N):ct=0),u}function c(N,D){var $=N;if(33>$.charCodeAt(0)&&($=$.trim()),ye=$,$=[ye],0<b){var Q=a(-1,D,$,$,et,Be,0,0,0,0);Q!==void 0&&typeof Q=="string"&&(D=Q)}var S=e(An,$,D,0,0);return 0<b&&(Q=a(-2,S,$,$,et,Be,S.length,0,0,0),Q!==void 0&&(S=Q)),ye="",Mt=0,Be=et=1,S}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,y=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,w=/:(read-only)/g,_=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,P=/-self|flex-/g,J=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,_e=/([^-])(image-set\()/,Be=1,et=1,Mt=0,ct=1,An=[],It=[],b=0,H=null,G=0,ye="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var ZO={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function eN(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var tN=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Dv=eN(function(t){return tN.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function wn(){return(wn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var $v=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},bf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!cu.typeOf(t)},Tu=Object.freeze([]),Cr=Object.freeze({});function Yo(t){return typeof t=="function"}function Lv(t){return t.displayName||t.name||"Component"}function km(t){return t&&typeof t.styledComponentId=="string"}var gs=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",xm=typeof window<"u"&&"HTMLElement"in window,nN=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),rN={};function ka(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var iN=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&ka(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Dl=new Map,_u=new Map,To=1,ll=function(t){if(Dl.has(t))return Dl.get(t);for(;_u.has(To);)To++;var e=To++;return Dl.set(t,e),_u.set(e,t),e},sN=function(t){return _u.get(t)},oN=function(t,e){e>=To&&(To=e+1),Dl.set(t,e),_u.set(e,t)},aN="style["+gs+'][data-styled-version="5.3.6"]',lN=new RegExp("^"+gs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uN=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},cN=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(lN);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(oN(u,l),uN(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},hN=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},SS=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(gs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(gs,"active"),r.setAttribute("data-styled-version","5.3.6");var o=hN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},dN=function(){function t(n){var r=this.element=SS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}ka(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),fN=function(){function t(n){var r=this.element=SS(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),pN=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Mv=xm,mN={isServer:!xm,useCSSOMInjection:!nN},Cu=function(){function t(n,r,i){n===void 0&&(n=Cr),r===void 0&&(r={}),this.options=wn({},mN,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&xm&&Mv&&(Mv=!1,function(s){for(var o=document.querySelectorAll(aN),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(gs)!=="active"&&(cN(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return ll(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(wn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new pN(o):s?new dN(o):new fN(o),new iN(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(ll(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ll(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(ll(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=sN(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=gs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),gN=/(a)(d)/gi,Uv=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Uv(e%52)+n;return(Uv(e%52)+n).replace(gN,"$1-$2")}var Bi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},TS=function(t){return Bi(5381,t)};function _S(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Yo(n)&&!km(n))return!1}return!0}var yN=TS("5.3.6"),vN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_S(e),this.componentId=n,this.baseHash=Bi(yN,n),this.baseStyle=r,Cu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=di(this.rules,e,n,r).join(""),a=Rf(Bi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Bi(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=di(p,e,n,r),y=Array.isArray(g)?g.join(""):g;c=Bi(c,y+d),h+=y}}if(h){var E=Rf(c>>>0);if(!n.hasNameForId(i,E)){var m=r(h,"."+E,void 0,i);n.insertRules(i,E,m)}s.push(E)}}return s.join(" ")},t}(),wN=/^\s*\/\/.*$/gm,EN=[":","[",".","#"];function SN(t){var e,n,r,i,s=t===void 0?Cr:t,o=s.options,a=o===void 0?Cr:o,l=s.plugins,u=l===void 0?Tu:l,c=new JO(a),h=[],d=function(y){function E(m){if(m)try{y(m+"}")}catch{}}return function(m,f,v,w,_,A,R,P,J,F){switch(m){case 1:if(J===0&&f.charCodeAt(0)===64)return y(f+";"),"";break;case 2:if(P===0)return f+"/*|*/";break;case 3:switch(P){case 102:case 112:return y(v[0]+f),"";default:return f+(F===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(y){h.push(y)}),p=function(y,E,m){return E===0&&EN.indexOf(m[n.length])!==-1||m.match(i)?y:"."+e};function g(y,E,m,f){f===void 0&&(f="&");var v=y.replace(wN,""),w=E&&m?m+" "+E+" { "+v+" }":v;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,w)}return c.use([].concat(u,[function(y,E,m){y===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(y){if(y===-2){var E=h;return h=[],E}}])),g.hash=u.length?u.reduce(function(y,E){return E.name||ka(15),Bi(y,E.name)},5381).toString():"",g}var CS=Ae.createContext();CS.Consumer;var IS=Ae.createContext(),TN=(IS.Consumer,new Cu),Of=SN();function kS(){return x.useContext(CS)||TN}function xS(){return x.useContext(IS)||Of}var _N=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Of);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return ka(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=Of),this.name+e.hash},t}(),CN=/([A-Z])/,IN=/([A-Z])/g,kN=/^ms-/,xN=function(t){return"-"+t.toLowerCase()};function Fv(t){return CN.test(t)?t.replace(IN,xN).replace(kN,"-ms-"):t}var jv=function(t){return t==null||t===!1||t===""};function di(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=di(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(jv(t))return"";if(km(t))return"."+t.styledComponentId;if(Yo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return di(l,e,n,r)}var u;return t instanceof _N?n?(t.inject(n,r),t.getName(r)):t:bf(t)?function c(h,d){var p,g,y=[];for(var E in h)h.hasOwnProperty(E)&&!jv(h[E])&&(Array.isArray(h[E])&&h[E].isCss||Yo(h[E])?y.push(Fv(E)+":",h[E],";"):bf(h[E])?y.push.apply(y,c(h[E],E)):y.push(Fv(E)+": "+(p=E,(g=h[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in ZO?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(y,["}"]):y}(t):t.toString()}var Vv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function AS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Yo(t)||bf(t)?Vv(di($v(Tu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Vv(di($v(t,n)))}var bS=function(t,e,n){return n===void 0&&(n=Cr),t.theme!==n.theme&&t.theme||e||n.theme},AN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bN=/(^-|-$)/g;function Xh(t){return t.replace(AN,"-").replace(bN,"")}var RS=function(t){return Rf(TS(t)>>>0)};function ul(t){return typeof t=="string"&&!0}var Nf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},RN=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function ON(t,e,n){var r=t[n];Nf(e)&&Nf(r)?OS(r,e):t[n]=e}function OS(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Nf(o))for(var a in o)RN(a)&&ON(t,o[a],a)}return t}var Am=Ae.createContext();Am.Consumer;var Jh={};function NS(t,e,n){var r=km(t),i=!ul(t),s=e.attrs,o=s===void 0?Tu:s,a=e.componentId,l=a===void 0?function(f,v){var w=typeof f!="string"?"sc":Xh(f);Jh[w]=(Jh[w]||0)+1;var _=w+"-"+RS("5.3.6"+w+Jh[w]);return v?v+"-"+_:_}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return ul(f)?"styled."+f:"Styled("+Lv(f)+")"}(t):u,h=e.displayName&&e.componentId?Xh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,v,w){return t.shouldForwardProp(f,v,w)&&e.shouldForwardProp(f,v,w)}:t.shouldForwardProp);var g,y=new vN(n,h,r?t.componentStyle:void 0),E=y.isStatic&&o.length===0,m=function(f,v){return function(w,_,A,R){var P=w.attrs,J=w.componentStyle,F=w.defaultProps,_e=w.foldedComponentIds,Be=w.shouldForwardProp,et=w.styledComponentId,Mt=w.target,ct=function(Q,S,se){Q===void 0&&(Q=Cr);var O=wn({},S,{theme:Q}),Oe={};return se.forEach(function(ce){var fe,te,tt,Ot=ce;for(fe in Yo(Ot)&&(Ot=Ot(O)),Ot)O[fe]=Oe[fe]=fe==="className"?(te=Oe[fe],tt=Ot[fe],te&&tt?te+" "+tt:te||tt):Ot[fe]}),[O,Oe]}(bS(_,x.useContext(Am),F)||Cr,_,P),An=ct[0],It=ct[1],b=function(Q,S,se,O){var Oe=kS(),ce=xS(),fe=S?Q.generateAndInjectStyles(Cr,Oe,ce):Q.generateAndInjectStyles(se,Oe,ce);return fe}(J,R,An),H=A,G=It.$as||_.$as||It.as||_.as||Mt,ye=ul(G),N=It!==_?wn({},_,{},It):_,D={};for(var $ in N)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?D.as=N[$]:(Be?Be($,Dv,G):!ye||Dv($))&&(D[$]=N[$]));return _.style&&It.style!==_.style&&(D.style=wn({},_.style,{},It.style)),D.className=Array.prototype.concat(_e,et,b!==et?b:null,_.className,It.className).filter(Boolean).join(" "),D.ref=H,x.createElement(G,D)}(g,f,v,E)};return m.displayName=c,(g=Ae.forwardRef(m)).attrs=d,g.componentStyle=y,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):Tu,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var v=e.componentId,w=function(A,R){if(A==null)return{};var P,J,F={},_e=Object.keys(A);for(J=0;J<_e.length;J++)P=_e[J],R.indexOf(P)>=0||(F[P]=A[P]);return F}(e,["componentId"]),_=v&&v+"-"+(ul(f)?f:Xh(Lv(f)));return NS(f,wn({},w,{attrs:d,componentId:_}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?OS({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&Rk(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var Pf=function(t){return function e(n,r,i){if(i===void 0&&(i=Cr),!cu.isValidElementType(r))return ka(1,String(r));var s=function(){return n(r,i,AS.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,wn({},i,{},o))},s.attrs=function(o){return e(n,r,wn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(NS,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){Pf[t]=Pf(t)});var NN=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=_S(n),Cu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(di(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&Cu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function PN(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=AS.apply(void 0,[t].concat(n)),s="sc-global-"+RS(JSON.stringify(i)),o=new NN(i,s);function a(u){var c=kS(),h=xS(),d=x.useContext(Am),p=x.useRef(c.allocateGSInstance(s)).current;return c.server&&l(p,u,c,d,h),x.useLayoutEffect(function(){if(!c.server)return l(p,u,c,d,h),function(){return o.removeStyles(p,c)}},[p,u,c,d,h]),null}function l(u,c,h,d,p){if(o.isStatic)o.renderStyles(u,rN,h,p);else{var g=wn({},c,{theme:bS(c,d,a.defaultProps)});o.renderStyles(u,g,h,p)}}return Ae.memo(a)}const K=Pf,DN=PN`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'System-ui', sans-serif;
  }
  
  body {
    background: #F3F2EF;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
  }
  
  a {
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }
  `;var $N="firebase",LN="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r($N,LN,"app");var MN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,bm=bm||{},Y=MN||self;function Iu(){}function Lc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function UN(t){return Object.prototype.hasOwnProperty.call(t,Zh)&&t[Zh]||(t[Zh]=++FN)}var Zh="closure_uid_"+(1e9*Math.random()>>>0),FN=0;function jN(t,e,n){return t.call.apply(t.bind,arguments)}function VN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=jN:wt=VN,wt.apply(null,arguments)}function cl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ut(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fr(){this.s=this.s,this.o=this.o}var zN=0;Fr.prototype.s=!1;Fr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zN!=0)&&UN(this)};Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const PS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function zv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Lc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var BN=function(){if(!Y.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Y.addEventListener("test",Iu,e),Y.removeEventListener("test",Iu,e)}catch{}return t}();function ku(t){return/^[\s\xa0]*$/.test(t)}var Bv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ed(t,e){return t<e?-1:t>e?1:0}function Mc(){var t=Y.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return Mc().indexOf(t)!=-1}function Om(t){return Om[" "](t),t}Om[" "]=Iu;function HN(t){var e=KN;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var WN=vn("Opera"),ys=vn("Trident")||vn("MSIE"),DS=vn("Edge"),Df=DS||ys,$S=vn("Gecko")&&!(Mc().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),qN=Mc().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function LS(){var t=Y.document;return t?t.documentMode:void 0}var xu;e:{var td="",nd=function(){var t=Mc();if($S)return/rv:([^\);]+)(\)|;)/.exec(t);if(DS)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qN)return/WebKit\/(\S+)/.exec(t);if(WN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(nd&&(td=nd?nd[1]:""),ys){var rd=LS();if(rd!=null&&rd>parseFloat(td)){xu=String(rd);break e}}xu=td}var KN={};function GN(){return HN(function(){let t=0;const e=Bv(String(xu)).split("."),n=Bv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=ed(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||ed(i[2].length==0,s[2].length==0)||ed(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var $f;if(Y.document&&ys){var Hv=LS();$f=Hv||parseInt(xu,10)||void 0}else $f=void 0;var QN=$f;function Xo(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($S){e:{try{Om(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xo.X.h.call(this)}}ut(Xo,Et);var YN={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Aa="closure_listenable_"+(1e6*Math.random()|0),XN=0;function JN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++XN,this.ba=this.ea=!1}function Uc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Nm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function MS(t){const e={};for(const n in t)e[n]=t[n];return e}const Wv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function US(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wv.length;s++)n=Wv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Fc(t){this.src=t,this.g={},this.h=0}Fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Mf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new JN(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Lf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=PS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Uc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Mf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Pm="closure_lm_"+(1e6*Math.random()|0),id={};function FS(t,e,n,r,i){if(r&&r.once)return VS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)FS(t,e[s],n,r,i);return null}return n=Lm(n),t&&t[Aa]?t.N(e,n,xa(r)?!!r.capture:!!r,i):jS(t,e,n,!1,r,i)}function jS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xa(i)?!!i.capture:!!i,a=$m(t);if(a||(t[Pm]=a=new Fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ZN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)BN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(BS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ZN(){function t(n){return e.call(t.src,t.listener,n)}const e=eP;return t}function VS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)VS(t,e[s],n,r,i);return null}return n=Lm(n),t&&t[Aa]?t.O(e,n,xa(r)?!!r.capture:!!r,i):jS(t,e,n,!0,r,i)}function zS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)zS(t,e[s],n,r,i);else r=xa(r)?!!r.capture:!!r,n=Lm(n),t&&t[Aa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Mf(s,n,r,i),-1<n&&(Uc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=$m(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Mf(e,n,r,i)),(n=-1<t?e[t]:null)&&Dm(n))}function Dm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Aa])Lf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(BS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$m(e))?(Lf(n,t),n.h==0&&(n.src=null,e[Pm]=null)):Uc(t)}}}function BS(t){return t in id?id[t]:id[t]="on"+t}function eP(t,e){if(t.ba)t=!0;else{e=new Xo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Dm(t),t=n.call(r,e)}return t}function $m(t){return t=t[Pm],t instanceof Fc?t:null}var sd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Lm(t){return typeof t=="function"?t:(t[sd]||(t[sd]=function(e){return t.handleEvent(e)}),t[sd])}function Je(){Fr.call(this),this.i=new Fc(this),this.P=this,this.I=null}ut(Je,Fr);Je.prototype[Aa]=!0;Je.prototype.removeEventListener=function(t,e,n,r){zS(this,t,e,n,r)};function at(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(r,t),US(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=hl(o,r,!0,e)&&i}if(o=e.g=t,i=hl(o,r,!0,e)&&i,i=hl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=hl(o,r,!1,e)&&i}Je.prototype.M=function(){if(Je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Uc(n[r]);delete t.g[e],t.h--}}this.I=null};Je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function hl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Lf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Mm=Y.JSON.stringify;function tP(){var t=qS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class nP{constructor(){this.h=this.g=null}add(e,n){const r=HS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var HS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new rP,t=>t.reset());class rP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function iP(t){Y.setTimeout(()=>{throw t},0)}function WS(t,e){Uf||sP(),Ff||(Uf(),Ff=!0),qS.add(t,e)}var Uf;function sP(){var t=Y.Promise.resolve(void 0);Uf=function(){t.then(oP)}}var Ff=!1,qS=new nP;function oP(){for(var t;t=tP();){try{t.h.call(t.g)}catch(n){iP(n)}var e=HS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ff=!1}function jc(t,e){Je.call(this),this.h=t||1,this.g=e||Y,this.j=wt(this.lb,this),this.l=Date.now()}ut(jc,Je);U=jc.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),at(this,"tick"),this.ca&&(Um(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Um(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){jc.X.M.call(this),Um(this),delete this.g};function Fm(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Y.setTimeout(t,e||0)}function KS(t){t.g=Fm(()=>{t.g=null,t.i&&(t.i=!1,KS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class aP extends Fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:KS(this)}M(){super.M(),this.g&&(Y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jo(t){Fr.call(this),this.h=t,this.g={}}ut(Jo,Fr);var qv=[];function GS(t,e,n,r){Array.isArray(n)||(n&&(qv[0]=n.toString()),n=qv);for(var i=0;i<n.length;i++){var s=FS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function QS(t){Nm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dm(e)},t),t.g={}}Jo.prototype.M=function(){Jo.X.M.call(this),QS(this)};Jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vc(){this.g=!0}Vc.prototype.Aa=function(){this.g=!1};function lP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+hP(t,n)+(r?" "+r:"")})}function cP(t,e){t.info(function(){return"TIMEOUT: "+e})}Vc.prototype.info=function(){};function hP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Mm(n)}catch{return e}}var Ei={},Kv=null;function zc(){return Kv=Kv||new Je}Ei.Pa="serverreachability";function YS(t){Et.call(this,Ei.Pa,t)}ut(YS,Et);function Zo(t){const e=zc();at(e,new YS(e))}Ei.STAT_EVENT="statevent";function XS(t,e){Et.call(this,Ei.STAT_EVENT,t),this.stat=e}ut(XS,Et);function xt(t){const e=zc();at(e,new XS(e,t))}Ei.Qa="timingevent";function JS(t,e){Et.call(this,Ei.Qa,t),this.size=e}ut(JS,Et);function ba(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Y.setTimeout(function(){t()},e)}var Bc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ZS={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function jm(){}jm.prototype.h=null;function Gv(t){return t.h||(t.h=t.i())}function e2(){}var Ra={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vm(){Et.call(this,"d")}ut(Vm,Et);function zm(){Et.call(this,"c")}ut(zm,Et);var jf;function Hc(){}ut(Hc,jm);Hc.prototype.g=function(){return new XMLHttpRequest};Hc.prototype.i=function(){return{}};jf=new Hc;function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Jo(this),this.O=dP,t=Df?125:void 0,this.T=new jc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new t2}function t2(){this.i=null,this.g="",this.h=!1}var dP=45e3,Vf={},Au={};U=Oa.prototype;U.setTimeout=function(t){this.O=t};function zf(t,e,n){t.K=1,t.v=qc(Bn(e)),t.s=n,t.P=!0,n2(t,null)}function n2(t,e){t.F=Date.now(),Na(t),t.A=Bn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),c2(n.i,"t",r),t.C=0,n=t.l.H,t.h=new t2,t.g=O2(t.l,n?e:null,!t.s),0<t.N&&(t.L=new aP(wt(t.La,t,t.g),t.N)),GS(t.S,t.g,"readystatechange",t.ib),e=t.H?MS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zo(),lP(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&$n(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=$n(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Df||this.g&&(this.h.h||this.g.fa()||Jv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Zo(3):Zo(2)),Wc(this);var n=this.g.aa();this.Y=n;t:if(r2(this)){var r=Jv(this.g);t="";var i=r.length,s=$n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),_o(this);var o="";break t}this.h.i=new Y.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,uP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ku(a)){var u=a;break t}}u=null}if(n=u)Hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Bf(this,n);else{this.i=!1,this.o=3,xt(12),Gr(this),_o(this);break e}}this.P?(i2(this,c,o),Df&&this.i&&c==3&&(GS(this.S,this.T,"tick",this.hb),this.T.start())):(Hi(this.j,this.m,o,null),Bf(this,o)),c==4&&Gr(this),this.i&&!this.I&&(c==4?x2(this.l,this):(this.i=!1,Na(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,xt(12)):(this.o=0,xt(13)),Gr(this),_o(this)}}}catch{}finally{}};function r2(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function i2(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=fP(t,n),i==Au){e==4&&(t.o=4,xt(14),r=!1),Hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Vf){t.o=4,xt(15),Hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hi(t.j,t.m,i,null),Bf(t,i);r2(t)&&i!=Au&&i!=Vf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qm(e),e.K=!0,xt(11))):(Hi(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),_o(t))}U.hb=function(){if(this.g){var t=$n(this.g),e=this.g.fa();this.C<e.length&&(Wc(this),i2(this,t,e),this.i&&t!=4&&Na(this))}};function fP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Au:(n=Number(e.substring(n,r)),isNaN(n)?Vf:(r+=1,r+n>e.length?Au:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,Gr(this)};function Na(t){t.V=Date.now()+t.O,s2(t,t.O)}function s2(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ba(wt(t.gb,t),e)}function Wc(t){t.B&&(Y.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cP(this.j,this.A),this.K!=2&&(Zo(),xt(17)),Gr(this),this.o=2,_o(this)):s2(this,this.V-t)};function _o(t){t.l.G==0||t.I||x2(t.l,t)}function Gr(t){Wc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Um(t.T),QS(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Bf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Hf(n.h,t))){if(!t.J&&Hf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ou(n),Qc(n);else break e;Gm(n),xt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ba(wt(n.cb,n),6e3));if(1>=f2(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Qr(n,11)}else if((t.J||n.g==t)&&Ou(n),!ku(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bm(s,s.h),s.h=null))}if(r.D){const y=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,ke(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=R2(r,r.H?r.ka:null,r.V),o.J){p2(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Wc(a),Na(a)),r.g=o}else I2(r);0<n.i.length&&Yc(n)}else u[0]!="stop"&&u[0]!="close"||Qr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qr(n,7):Km(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Zo(4)}catch{}}function pP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Lc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function mP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Lc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function o2(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Lc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mP(t),r=pP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var a2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=e!==void 0?e:t.h,bu(this,t.j),this.s=t.s,this.g=t.g,Ru(this,t.m),this.l=t.l,e=t.i;var n=new ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qv(this,n),this.o=t.o}else t&&(n=String(t).match(a2))?(this.h=!!e,bu(this,n[1]||"",!0),this.s=oo(n[2]||""),this.g=oo(n[3]||"",!0),Ru(this,n[4]),this.l=oo(n[5]||"",!0),Qv(this,n[6]||"",!0),this.o=oo(n[7]||"")):(this.h=!!e,this.i=new ea(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ao(e,Yv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ao(e,Yv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ao(n,n.charAt(0)=="/"?wP:vP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ao(n,SP)),t.join("")};function Bn(t){return new ei(t)}function bu(t,e,n){t.j=n?oo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qv(t,e,n){e instanceof ea?(t.i=e,TP(t.i,t.h)):(n||(e=ao(e,EP)),t.i=new ea(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function qc(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ao(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yv=/[#\/\?@]/g,vP=/[#\?:]/g,wP=/[#\?]/g,EP=/[#\?@]/g,SP=/#/g;function ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&gP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=ea.prototype;U.add=function(t,e){jr(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function l2(t,e){jr(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function u2(t,e){return jr(t),e=Ns(t,e),t.g.has(e)}U.forEach=function(t,e){jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){jr(this);let e=[];if(typeof t=="string")u2(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return jr(this),this.i=null,t=Ns(this,t),u2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function c2(t,e,n){l2(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Rm(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function TP(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(l2(this,r),c2(this,i,n))},t)),t.j=e}var _P=class{constructor(e,n){this.h=e,this.g=n}};function h2(t){this.l=t||CP,Y.PerformanceNavigationTiming?(t=Y.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Y.g&&Y.g.Ga&&Y.g.Ga()&&Y.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CP=10;function d2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function f2(t){return t.h?1:t.g?t.g.size:0}function Hf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bm(t,e){t.g?t.g.add(e):t.h=e}function p2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}h2.prototype.cancel=function(){if(this.i=m2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function m2(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rm(t.i)}function Hm(){}Hm.prototype.stringify=function(t){return Y.JSON.stringify(t,void 0)};Hm.prototype.parse=function(t){return Y.JSON.parse(t,void 0)};function IP(){this.g=new Hm}function kP(t,e,n){const r=n||"";try{o2(t,function(i,s){let o=i;xa(i)&&(o=Mm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xP(t,e){const n=new Vc;if(Y.Image){const r=new Image;r.onload=cl(dl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=cl(dl,n,r,"TestLoadImage: error",!1,e),r.onabort=cl(dl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=cl(dl,n,r,"TestLoadImage: timeout",!1,e),Y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function dl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pa(t){this.l=t.ac||null,this.j=t.jb||!1}ut(Pa,jm);Pa.prototype.g=function(){return new Kc(this.l,this.j)};Pa.prototype.i=function(t){return function(){return t}}({});function Kc(t,e){Je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Wm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ut(Kc,Je);var Wm=0;U=Kc.prototype;U.open=function(t,e){if(this.readyState!=Wm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ta(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Y).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=Wm};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Y.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;g2(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function g2(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):ta(this),this.readyState==3&&g2(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Da(this))};U.Ua=function(t){this.g&&(this.response=t,Da(this))};U.ga=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ta(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AP=Y.JSON.parse;function Pe(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=y2,this.K=this.L=!1}ut(Pe,Je);var y2="",bP=/^https?$/i,RP=["POST","PUT"];U=Pe.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():jf.g(),this.C=this.u?Gv(this.u):Gv(jf),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Xv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Y.FormData&&t instanceof Y.FormData,!(0<=PS(RP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{E2(this),0<this.B&&((this.K=OP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=Fm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xv(this,s)}};function OP(t){return ys&&GN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof bm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function Xv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,v2(t),Gc(t)}function v2(t){t.D||(t.D=!0,at(t,"complete"),at(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),Gc(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gc(this,!0)),Pe.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?w2(this):this.fb())};U.fb=function(){w2(this)};function w2(t){if(t.h&&typeof bm<"u"&&(!t.C[1]||$n(t)!=4||t.aa()!=2)){if(t.v&&$n(t)==4)Fm(t.Ha,0,t);else if(at(t,"readystatechange"),$n(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(a2)[1]||null;if(!i&&Y.self&&Y.self.location){var s=Y.self.location.protocol;i=s.substr(0,s.length-1)}r=!bP.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var o=2<$n(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",v2(t)}}finally{Gc(t)}}}}function Gc(t,e){if(t.g){E2(t);const n=t.g,r=t.C[0]?Iu:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function E2(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Y.clearTimeout(t.A),t.A=null)}function $n(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AP(e)}};function Jv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case y2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function S2(t){let e="";return Nm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function qm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=S2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function Js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function T2(t){this.Ca=0,this.i=[],this.j=new Vc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Js("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Js("baseRetryDelayMs",5e3,t),this.bb=Js("retryDelaySeedMs",1e4,t),this.$a=Js("forwardChannelMaxRetries",2,t),this.ta=Js("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new h2(t&&t.concurrentRequestLimit),this.Fa=new IP,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=T2.prototype;U.ma=8;U.G=1;function Km(t){if(_2(t),t.G==3){var e=t.U++,n=Bn(t.F);ke(n,"SID",t.I),ke(n,"RID",e),ke(n,"TYPE","terminate"),$a(t,n),e=new Oa(t,t.j,e,void 0),e.K=2,e.v=qc(Bn(n)),n=!1,Y.navigator&&Y.navigator.sendBeacon&&(n=Y.navigator.sendBeacon(e.v.toString(),"")),!n&&Y.Image&&(new Image().src=e.v,n=!0),n||(e.g=O2(e.l,null),e.g.da(e.v)),e.F=Date.now(),Na(e)}b2(t)}function Qc(t){t.g&&(Qm(t),t.g.cancel(),t.g=null)}function _2(t){Qc(t),t.u&&(Y.clearTimeout(t.u),t.u=null),Ou(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Y.clearTimeout(t.m),t.m=null)}function Yc(t){d2(t.h)||t.m||(t.m=!0,WS(t.Ja,t),t.C=0)}function NP(t,e){return f2(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ba(wt(t.Ja,t,e),A2(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Oa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=MS(s),US(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=C2(this,i,e),n=Bn(this.F),ke(n,"RID",t),ke(n,"CVER",22),this.D&&ke(n,"X-HTTP-Session-Id",this.D),$a(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(S2(s)))+"&"+e:this.o&&qm(n,this.o,s)),Bm(this.h,i),this.Ya&&ke(n,"TYPE","init"),this.O?(ke(n,"$req",e),ke(n,"SID","null"),i.Z=!0,zf(i,n,null)):zf(i,n,e),this.G=2}}else this.G==3&&(t?Zv(this,t):this.i.length==0||d2(this.h)||Zv(this))};function Zv(t,e){var n;e?n=e.m:n=t.U++;const r=Bn(t.F);ke(r,"SID",t.I),ke(r,"RID",n),ke(r,"AID",t.T),$a(t,r),t.o&&t.s&&qm(r,t.o,t.s),n=new Oa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=C2(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Bm(t.h,n),zf(n,r,e)}function $a(t,e){t.ia&&Nm(t.ia,function(n,r){ke(e,r,n)}),t.l&&o2({},function(n,r){ke(e,r,n)})}function C2(t,e,n){n=Math.min(t.i.length,n);var r=t.l?wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{kP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function I2(t){t.g||t.u||(t.Z=1,WS(t.Ia,t),t.A=0)}function Gm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ba(wt(t.Ia,t),A2(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,k2(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ba(wt(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,xt(10),Qc(this),k2(this))};function Qm(t){t.B!=null&&(Y.clearTimeout(t.B),t.B=null)}function k2(t){t.g=new Oa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Bn(t.sa);ke(e,"RID","rpc"),ke(e,"SID",t.I),ke(e,"CI",t.L?"0":"1"),ke(e,"AID",t.T),ke(e,"TYPE","xmlhttp"),$a(t,e),t.o&&t.s&&qm(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qc(Bn(e)),n.s=null,n.P=!0,n2(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Qc(this),Gm(this),xt(19))};function Ou(t){t.v!=null&&(Y.clearTimeout(t.v),t.v=null)}function x2(t,e){var n=null;if(t.g==e){Ou(t),Qm(t),t.g=null;var r=2}else if(Hf(t.h,e))n=e.D,p2(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=zc(),at(r,new JS(r,n)),Yc(t)}else I2(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&NP(t,e)||r==2&&Gm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Qr(t,5);break;case 4:Qr(t,10);break;case 3:Qr(t,6);break;default:Qr(t,2)}}}function A2(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Qr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=wt(t.kb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),Y.location&&Y.location.protocol=="http"||bu(n,"https"),qc(n)),xP(n.toString(),r)}else xt(2);t.G=0,t.l&&t.l.va(e),b2(t),_2(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function b2(t){if(t.G=0,t.la=[],t.l){const e=m2(t.h);(e.length!=0||t.i.length!=0)&&(zv(t.la,e),zv(t.la,t.i),t.h.i.length=0,Rm(t.i),t.i.length=0),t.l.ua()}}function R2(t,e,n){var r=n instanceof ei?Bn(n):new ei(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ru(r,r.m);else{var i=Y.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null,void 0);r&&bu(s,r),e&&(s.g=e),i&&Ru(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ke(r,n,e),ke(r,"VER",t.ma),$a(t,r),r}function O2(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new Pa({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function N2(){}U=N2.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Nu(){if(ys&&!(10<=Number(QN)))throw Error("Environmental error: no available transport.")}Nu.prototype.g=function(t,e){return new Bt(t,e)};function Bt(t,e){Je.call(this),this.g=new T2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ku(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ku(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}ut(Bt,Je);Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;xt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=R2(t,null,t.V),Yc(t)};Bt.prototype.close=function(){Km(this.g)};Bt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Mm(t),t=n);e.i.push(new _P(e.ab++,t)),e.G==3&&Yc(e)};Bt.prototype.M=function(){this.g.l=null,delete this.j,Km(this.g),delete this.g,Bt.X.M.call(this)};function P2(t){Vm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ut(P2,Vm);function D2(){zm.call(this),this.status=1}ut(D2,zm);function Ps(t){this.g=t}ut(Ps,N2);Ps.prototype.xa=function(){at(this.g,"a")};Ps.prototype.wa=function(t){at(this.g,new P2(t))};Ps.prototype.va=function(t){at(this.g,new D2)};Ps.prototype.ua=function(){at(this.g,"b")};Nu.prototype.createWebChannel=Nu.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;Bc.NO_ERROR=0;Bc.TIMEOUT=8;Bc.HTTP_ERROR=6;ZS.COMPLETE="complete";e2.EventType=Ra;Ra.OPEN="a";Ra.CLOSE="b";Ra.ERROR="c";Ra.MESSAGE="d";Je.prototype.listen=Je.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var PP=function(){return new Nu},DP=function(){return zc()},od=Bc,$P=ZS,LP=Ei,e0={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},MP=Pa,fl=e2,UP=Pe;const t0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new fm("@firebase/firestore");function n0(){return fi.logLevel}function j(t,...e){if(fi.logLevel<=ue.DEBUG){const n=e.map(Ym);fi.debug(`Firestore (${Ds}): ${t}`,...n)}}function Hn(t,...e){if(fi.logLevel<=ue.ERROR){const n=e.map(Ym);fi.error(`Firestore (${Ds}): ${t}`,...n)}}function Wf(t,...e){if(fi.logLevel<=ue.WARN){const n=e.map(Ym);fi.warn(`Firestore (${Ds}): ${t}`,...n)}}function Ym(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function we(t,e){t||q()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let M=class extends Qn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ti=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $2=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};class FP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}let jP=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},VP=class{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ti,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ti)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new $2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new mt(e)}},zP=class{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(we(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}},BP=class{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new zP(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},HP=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},WP=class{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.A=n.token,new HP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L2=class{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}};function de(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new qe(0,0))}static max(){return new Z(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof na?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends na{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const KP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends na{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return KP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(Se.fromString(e))}static fromName(e){return new V(Se.fromString(e).popFirst(5))}static empty(){return new V(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new Se(e.slice()))}}function GP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Nr(i,V.empty(),e)}function QP(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(Z.min(),V.empty(),-1)}static max(){return new Nr(Z.max(),V.empty(),-1)}}function YP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class JP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==XP)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ma(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Xm.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function M2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return t==null}function Pu(t){return t===0&&1/t==-1/0}function e4(t){return typeof t=="number"&&Number.isInteger(t)&&!Pu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ct(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const t4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(we(!!t),typeof t=="string"){let e=0;const n=t4.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function F2(t){const e=t.mapValue.fields.__previous_value__;return U2(e)?F2(e):e}function ia(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?U2(t)?4:n4(t)?9007199254740991:10:q()}function xn(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pr(r.timestampValue),o=Pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ws(r.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ue(r.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ue(r.integerValue)===Ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ue(r.doubleValue),o=Ue(i.doubleValue);return s===o?Pu(s)===Pu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(r0(s)!==r0(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!xn(s[a],o[a])))return!1;return!0}(t,e);default:return q()}}function sa(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=pi(t),r=pi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ue(i.integerValue||i.doubleValue),a=Ue(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return i0(t.timestampValue,e.timestampValue);case 4:return i0(ia(t),ia(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ws(i),a=ws(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(Ue(i.latitude),Ue(s.latitude));return o!==0?o:de(Ue(i.longitude),Ue(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Es(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===pl.mapValue&&s===pl.mapValue)return 0;if(i===pl.mapValue)return 1;if(s===pl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const d=Es(o[a[c]],l[u[c]]);if(d!==0)return d}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw q()}}function i0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Pr(t),r=Pr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function Ss(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ws(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=qf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${qf(r.fields[a])}`;return s+"}"}(t.mapValue):q();var e,n}function s0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kf(t){return!!t&&"integerValue"in t}function Jm(t){return!!t&&"arrayValue"in t}function o0(t){return!!t&&"nullValue"in t}function a0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function n4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function l0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function u0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{}class je extends j2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new s4(e,n,r):n==="array-contains"?new l4(e,r):n==="in"?new u4(e,r):n==="not-in"?new c4(e,r):n==="array-contains-any"?new h4(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new o4(e,r):new a4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&pi(this.value)===pi(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class pn extends j2{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new pn(e,n)}matches(e){return V2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function V2(t){return t.op==="and"}function r4(t){return i4(t)&&V2(t)}function i4(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function z2(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Ss(t.value);{const e=t.filters.map(n=>z2(n)).join(",");return`${t.op}(${e})`}}function B2(t,e){return t instanceof je?function(n,r){return r instanceof je&&n.op===r.op&&n.field.isEqual(r.field)&&xn(n.value,r.value)}(t,e):t instanceof pn?function(n,r){return r instanceof pn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&B2(s,r.filters[o]),!0):!1}(t,e):void q()}function H2(t){return t instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${Ss(e.value)}`}(t):t instanceof pn?function(e){return e.op.toString()+" {"+e.getFilters().map(H2).join(" ,")+"}"}(t):"Filter"}class s4 extends je{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class o4 extends je{constructor(e,n){super(e,"in",n),this.keys=W2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class a4 extends je{constructor(e,n){super(e,"not-in",n),this.keys=W2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class l4 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jm(n)&&sa(n.arrayValue,this.value)}}class u4 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class c4 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}}class h4 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n="asc"){this.field=e,this.dir=n}}function d4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=s??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new st(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new st(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c0(this.data.getIterator())}getIteratorFrom(e){return new c0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class c0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Ke(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Co(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];$l(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$s(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Xt(Co(this.value))}}function q2(t){const e=[];return $s(t.fields,(n,r)=>{const i=new vt([n]);if($l(r)){const s=q2(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,Z.min(),Z.min(),Z.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,i){return new yt(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new yt(e,2,n,Z.min(),Z.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,Z.min(),Z.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f4=class{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}};function h0(t,e=null,n=[],r=[],i=null,s=null,o=null){return new f4(t,e,n,r,i,s,o)}function Zm(t){const e=ee(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>z2(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),e.ft=n}return e.ft}function eg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!d4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!u0(t.startAt,e.startAt)&&u0(t.endAt,e.endAt)}function Gf(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls=class{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}};function p4(t,e,n,r,i,s,o,a){return new Ls(t,e,n,r,i,s,o,a)}function tg(t){return new Ls(t)}function d0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ng(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function K2(t){return t.collectionGroup!==null}function ns(t){const e=ee(t);if(e.dt===null){e.dt=[];const n=Jc(e),r=ng(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new ts(n)),e.dt.push(new ts(vt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ts(vt.keyField(),s))}}}return e.dt}function Wn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=h0(e.path,e.collectionGroup,ns(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ns(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ts(s.field,o))}const r=e.endAt?new Du(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Du(e.startAt.position,e.startAt.inclusive):null;e._t=h0(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Qf(t,e){e.getFirstInequalityField(),Jc(t);const n=t.filters.concat([e]);return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yf(t,e,n){return new Ls(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zc(t,e){return eg(Wn(t),Wn(e))&&t.limitType===e.limitType}function G2(t){return`${Zm(Wn(t))}|lt:${t.limitType}`}function Xf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>H2(r)).join(", ")}]`),Xc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ss(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ss(r)).join(",")),`Target(${n})`}(Wn(t))}; limitType=${t.limitType})`}function rg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ns(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=l0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ns(n),r)||n.endAt&&!function(i,s,o){const a=l0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ns(n),r))}(t,e)}function m4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q2(t){return(e,n)=>{let r=!1;for(const i of ns(t)){const s=g4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function g4(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Es(a,l):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pu(e)?"-0":e}}function X2(t){return{integerValue:""+t}}function y4(t,e){return e4(e)?X2(e):Y2(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(){this._=void 0}}function v4(t,e,n){return t instanceof oa?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof aa?Z2(t,e):t instanceof la?eT(t,e):function(r,i){const s=J2(r,i),o=f0(s)+f0(r.gt);return Kf(s)&&Kf(r.gt)?X2(o):Y2(r.yt,o)}(t,e)}function w4(t,e,n){return t instanceof aa?Z2(t,e):t instanceof la?eT(t,e):n}function J2(t,e){return t instanceof $u?Kf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class oa extends eh{}class aa extends eh{constructor(e){super(),this.elements=e}}function Z2(t,e){const n=tT(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class la extends eh{constructor(e){super(),this.elements=e}}function eT(t,e){let n=tT(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class $u extends eh{constructor(e,n){super(),this.yt=e,this.gt=n}}function f0(t){return Ue(t.integerValue||t.doubleValue)}function tT(t){return Jm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(e,n){this.field=e,this.transform=n}}function S4(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof aa&&r instanceof aa||n instanceof la&&r instanceof la?vs(n.elements,r.elements,xn):n instanceof $u&&r instanceof $u?xn(n.gt,r.gt):n instanceof oa&&r instanceof oa}(t.transform,e.transform)}class T4{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class th{}function nT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iT(t.key,Mn.none()):new Ua(t.key,t.data,Mn.none());{const n=t.data,r=Xt.empty();let i=new Ke(vt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Si(t.key,r,new Cn(i.toArray()),Mn.none())}}function _4(t,e,n){t instanceof Ua?function(r,i,s){const o=r.value.clone(),a=m0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Si?function(r,i,s){if(!Ll(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=m0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(rT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof Ua?function(i,s,o,a){if(!Ll(i.precondition,s))return o;const l=i.value.clone(),u=g0(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Si?function(i,s,o,a){if(!Ll(i.precondition,s))return o;const l=g0(i.fieldTransforms,a,s),u=s.data;return u.setAll(rT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ll(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function C4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=J2(r.transform,i||null);s!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,s))}return n||null}function p0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&vs(n,r,(i,s)=>S4(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends th{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Si extends th{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function m0(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,w4(o,a,n[i]))}return r}function g0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,v4(s,o,e))}return r}class iT extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class I4 extends th{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,oe;function x4(t){switch(t){default:return q();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function sT(t){if(t===void 0)return Hn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Me.OK:return C.OK;case Me.CANCELLED:return C.CANCELLED;case Me.UNKNOWN:return C.UNKNOWN;case Me.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Me.INTERNAL:return C.INTERNAL;case Me.UNAVAILABLE:return C.UNAVAILABLE;case Me.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Me.NOT_FOUND:return C.NOT_FOUND;case Me.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Me.ABORTED:return C.ABORTED;case Me.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Me.DATA_LOSS:return C.DATA_LOSS;default:return q()}}(oe=Me||(Me={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return M2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=new Ge(V.comparator);function qn(){return A4}const oT=new Ge(V.comparator);function lo(...t){let e=oT;for(const n of t)e=e.insert(n.key,n);return e}function aT(t){let e=oT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return ko()}function lT(){return ko()}function ko(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const b4=new Ge(V.comparator),R4=new Ke(V.comparator);function re(...t){let e=R4;for(const n of t)e=e.add(n);return e}const O4=new Ke(de);function uT(){return O4}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new nh(Z.min(),i,uT(),qn(),re())}}class Fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fa(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class cT{constructor(e,n){this.targetId=e,this.Et=n}}class hT{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class y0{constructor(){this.At=0,this.Rt=w0(),this.bt=Ct.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=re(),n=re(),r=re();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Fa(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=w0()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class N4{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=qn(),this.qt=v0(),this.Ut=new Ke(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(Gf(s))if(r===0){const o=new V(s.path);this.Qt(n,o,yt.newNoDocument(o,Z.min()))}else we(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Gf(a.target)){const l=new V(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,yt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=re();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new nh(e,n,this.Ut,this.Lt,r);return this.Lt=qn(),this.qt=v0(),this.Ut=new Ke(de),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new y0,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ke(de),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new y0),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function v0(){return new Ge(V.comparator)}function w0(){return new Ge(V.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),D4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),$4=(()=>({and:"AND",or:"OR"}))();class L4{constructor(e,n){this.databaseId=e,this.wt=n}}function Lu(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dT(t,e){return t.wt?e.toBase64():e.toUint8Array()}function M4(t,e){return Lu(t,e.toTimestamp())}function In(t){return we(!!t),Z.fromTimestamp(function(e){const n=Pr(e);return new qe(n.seconds,n.nanos)}(t))}function ig(t,e){return function(n){return new Se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function fT(t){const e=Se.fromString(t);return we(yT(e)),e}function Jf(t,e){return ig(t.databaseId,e.path)}function ad(t,e){const n=fT(e);if(n.get(1)!==t.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(pT(n))}function Zf(t,e){return ig(t.databaseId,e)}function U4(t){const e=fT(t);return e.length===4?Se.emptyPath():pT(e)}function ep(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pT(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function E0(t,e,n){return{name:Jf(t,e),fields:n.value.mapValue.fields}}function F4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(we(u===void 0||typeof u=="string"),Ct.fromBase64String(u||"")):(we(u===void 0||u instanceof Uint8Array),Ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:sT(l.code);return new M(u,l.message||"")}(o);n=new hT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ad(t,r.document.name),s=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):Z.min(),a=new Xt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ml(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ad(t,r.document),s=r.readTime?In(r.readTime):Z.min(),o=yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ad(t,r.document),s=r.removedTargetIds||[];n=new Ml([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new k4(i),o=r.targetId;n=new cT(o,s)}}return n}function j4(t,e){let n;if(e instanceof Ua)n={update:E0(t,e.key,e.value)};else if(e instanceof iT)n={delete:Jf(t,e.key)};else if(e instanceof Si)n={update:E0(t,e.key,e.data),updateMask:Q4(e.fieldMask)};else{if(!(e instanceof I4))return q();n={verify:Jf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof oa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof aa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof la)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $u)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:M4(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:q()}(t,e.precondition)),n}function V4(t,e){return t&&t.length>0?(we(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?In(r.updateTime):In(i);return s.isEqual(Z.min())&&(s=In(i)),new T4(s,r.transformResults||[])}(n,e))):[]}function z4(t,e){return{documents:[Zf(t,e.path)]}}function B4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Zf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Zf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return gT(pn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:xi(c.field),direction:q4(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||Xc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function H4(t){let e=U4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=mT(c);return h instanceof pn&&r4(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new ts(Ai(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Xc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Du(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Du(d,h)}(n.endAt)),p4(e,i,o,s,a,"F",l,u)}function W4(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function mT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ai(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Ai(e.unaryFilter.field);return je.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(e.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ai(e.unaryFilter.field);return je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(e){return je.create(Ai(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return pn.create(e.compositeFilter.filters.map(n=>mT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q()}}(e.compositeFilter.op))}(t):q()}function q4(t){return P4[t]}function K4(t){return D4[t]}function G4(t){return $4[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return vt.fromServerFormat(t.fieldPath)}function gT(t){return t instanceof je?function(e){if(e.op==="=="){if(a0(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NAN"}};if(o0(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(a0(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NOT_NAN"}};if(o0(e.value))return{unaryFilter:{field:xi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(e.field),op:K4(e.op),value:e.value}}}(t):t instanceof pn?function(e){const n=e.getFilters().map(r=>gT(r));return n.length===1?n[0]:{compositeFilter:{op:G4(e.op),filters:n}}}(t):q()}function Q4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=nT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>p0(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>p0(n,r))}}class sg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length);let i=b4;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ct.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.ie=e}}function Z4(t){const e=H4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(){this.Je=new t3}addToCollectionParentIndex(e,n){return this.Je.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Nr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class t3{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ts(0)}static vn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Io(r.mutation,i,Cn.empty(),qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qn();const o=ko(),a=ko();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Si)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Io(c.mutation,u,c.mutation.getFieldMask(),qe.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new r3(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Ge((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Cn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=lT();c.forEach(d=>{if(!s.has(d)){const p=nT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(Yr());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:aT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=lo();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(u,c){return new Ls(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,yt.newInvalidDocument(u)))});let o=lo();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Io(u.mutation,l,Cn.empty(),qe.now()),rg(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s3{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:In(r.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Z4(r.bundledQuery),readTime:In(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(){this.overlays=new Ge(V.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X4(n,r));let s=this.es.get(n);s===void 0&&(s=re(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.ns=new Ke(Qe.ss),this.rs=new Ke(Qe.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Qe(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new V(new Se([])),r=new Qe(n,e),i=new Qe(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new V(new Se([])),r=new Qe(n,e),i=new Qe(n,e+1);let s=re();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Qe(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return V.comparator(e.key,n.key)||de(e._s,n._s)}static os(e,n){return de(e._s,n._s)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ke(Qe.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Qe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),i=new Qe(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(de);return n.forEach(i=>{const s=new Qe(i,0),o=new Qe(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),k.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Qe(new V(s),0);let a=new Ke(de);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return k.forEach(n.mutations,i=>{const s=new Qe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Qe(n,0),i=this.gs.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e){this.Es=e,this.docs=new Ge(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),k.resolve(r)}getAllFromCollection(e,n,r){let i=qn();const s=new V(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||YP(QP(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,i){q()}As(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new u3(this)}getSize(e){return k.resolve(this.size)}}class u3 extends n3{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c3{constructor(e){this.persistence=e,this.Rs=new Ms(n=>Zm(n),eg),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new og,this.targetCount=0,this.vs=Ts.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h3{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xm(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new c3(this),this.indexManager=new e3,this.remoteDocumentCache=function(r){return new l3(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new J4(n),this.Ns=new s3(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o3,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new a3(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new d3(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return k.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class d3 extends JP{constructor(e){super(),this.currentSequenceNumber=e}}class ag{constructor(e){this.persistence=e,this.Fs=new og,this.$s=null}static Bs(e){return new ag(e)}get Ls(){if(this.$s)return this.$s;throw q()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,r=>{const i=V.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f3{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(d0(n))return k.resolve(null);let r=Wn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yf(n,null,"F"),r=Wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Yf(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return d0(n)||i.isEqual(Z.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(n0()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xf(n)),this.Bi(e,o,n,GP(i,-1)))})}Fi(e,n){let r=new Ke(Q2(e));return n.forEach((i,s)=>{rg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return n0()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Xf(n)),this.Ni.getDocumentsMatchingQuery(e,n,Nr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ge(de),this.Ui=new Ms(s=>Zm(s),eg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i3(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function m3(t,e,n,r){return new p3(t,e,n,r)}async function vT(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function g3(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=k.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const y=l.docVersions.get(p);we(y!==null),g.version.compareTo(y)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wT(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function y3(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Ct.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&a.push(n.Cs.updateTargetData(s,p))});let l=qn(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(v3(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(Z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function v3(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function w3(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function E3(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new ni(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function tp(t,e,n){const r=ee(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ma(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function S0(t,e,n){const r=ee(t);let i=Z.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=ee(a),h=c.Ui.get(u);return h!==void 0?k.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,Wn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:re())).next(a=>(S3(r,m4(e),a),{documents:a,Hi:s})))}function S3(t,e,n){let r=t.Ki.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class T0{constructor(){this.activeTargetIds=uT()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class T3{constructor(){this.Lr=new T0,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new T0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C3={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I3{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(j("RestConnection","Received: ",l),l),l=>{throw Wf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ds,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=C3[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new UP;a.setWithCredentials(!0),a.listenOnce($P.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case od.NO_ERROR:const u=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(u)),s(u);break;case od.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case od.HTTP_ERROR:const c=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(d.status);o(new M(p,d.message))}else o(new M(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new M(C.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=PP(),o=DP(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new MP({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");j("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new I3({Hr:g=>{h?j("Connection","Not sending because WebChannel is closed:",g):(c||(j("Connection","Opening WebChannel transport."),u.open(),c=!0),j("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,y,E)=>{g.listen(y,m=>{try{E(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(u,fl.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),p(u,fl.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),d.io())}),p(u,fl.EventType.ERROR,g=>{h||(h=!0,Wf("Connection","WebChannel transport errored:",g),d.io(new M(C.UNAVAILABLE,"The operation could not be completed")))}),p(u,fl.EventType.MESSAGE,g=>{var y;if(!h){const E=g.data[0];we(!!E);const m=E,f=m.error||((y=m[0])===null||y===void 0?void 0:y.error);if(f){j("Connection","WebChannel received error:",f);const v=f.status;let w=function(A){const R=Me[A];if(R!==void 0)return sT(R)}(v),_=f.message;w===void 0&&(w=C.INTERNAL,_="Unknown error status: "+v+" with message "+f.message),h=!0,d.io(new M(w,_)),u.close()}else j("Connection","WebChannel received:",E),d.ro(E)}}),p(o,LP.STAT_EVENT,g=>{g.stat===e0.PROXY?j("Connection","Detected buffering proxy"):g.stat===e0.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t){return new L4(t,!0)}class ET{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ET(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x3 extends ST{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=F4(this.yt,e),r=function(i){if(!("targetChange"in i))return Z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Z.min():s.readTime?In(s.readTime):Z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=ep(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=Gf(a)?{documents:z4(i,a)}:{query:B4(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=dT(i,s.resumeToken):s.snapshotVersion.compareTo(Z.min())>0&&(o.readTime=Lu(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=W4(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=ep(this.yt),n.removeTarget=e,this.Bo(n)}}class A3 extends ST{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=V4(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.Zo(r,n)}return we(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ep(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>j4(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b3 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(C.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(C.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class R3{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Hn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ee(a);l._u.add(4),await ja(l),l.gu.set("Unknown"),l._u.delete(4),await ih(l)}(this))})}),this.gu=new R3(r,i)}}async function ih(t){if(Ti(t))for(const e of t.wu)await e(!0)}async function ja(t){for(const e of t.wu)await e(!1)}function TT(t,e){const n=ee(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),hg(n)?cg(n):Us(n).ko()&&ug(n,e))}function _T(t,e){const n=ee(t),r=Us(n);n.du.delete(e),r.ko()&&CT(n,e),n.du.size===0&&(r.ko()?r.Fo():Ti(n)&&n.gu.set("Unknown"))}function ug(t,e){t.yu.Ot(e.targetId),Us(t).zo(e)}function CT(t,e){t.yu.Ot(e),Us(t).Ho(e)}function cg(t){t.yu=new N4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Us(t).start(),t.gu.uu()}function hg(t){return Ti(t)&&!Us(t).No()&&t.du.size>0}function Ti(t){return ee(t)._u.size===0}function IT(t){t.yu=void 0}async function N3(t){t.du.forEach((e,n)=>{ug(t,e)})}async function P3(t,e){IT(t),hg(t)?(t.gu.hu(e),cg(t)):t.gu.set("Unknown")}async function D3(t,e,n){if(t.gu.set("Online"),e instanceof hT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(t,r)}else if(e instanceof Ml?t.yu.Kt(e):e instanceof cT?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Z.min()))try{const r=await wT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ct.EMPTY_BYTE_STRING,l.snapshotVersion)),CT(i,a);const u=new ni(l.target,a,1,l.sequenceNumber);ug(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Mu(t,r)}}async function Mu(t,e,n){if(!Ma(e))throw e;t._u.add(1),await ja(t),t.gu.set("Offline"),n||(n=()=>wT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ih(t)})}function kT(t,e){return e().catch(n=>Mu(t,n,e))}async function sh(t){const e=ee(t),n=Dr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;$3(e);)try{const i=await w3(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,L3(e,i)}catch(i){await Mu(e,i)}xT(e)&&AT(e)}function $3(t){return Ti(t)&&t.fu.length<10}function L3(t,e){t.fu.push(e);const n=Dr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function xT(t){return Ti(t)&&!Dr(t).No()&&t.fu.length>0}function AT(t){Dr(t).start()}async function M3(t){Dr(t).eu()}async function U3(t){const e=Dr(t);for(const n of t.fu)e.Xo(n.mutations)}async function F3(t,e,n){const r=t.fu.shift(),i=sg.from(r,e,n);await kT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await sh(t)}async function j3(t,e){e&&Dr(t).Yo&&await async function(n,r){if(i=r.code,x4(i)&&i!==C.ABORTED){const s=n.fu.shift();Dr(n).Mo(),await kT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await sh(n)}var i}(t,e),xT(t)&&AT(t)}async function C0(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n._u.add(3),await ja(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ih(n)}async function V3(t,e){const n=ee(t);e?(n._u.delete(2),await ih(n)):e||(n._u.add(2),await ja(n),n.gu.set("Unknown"))}function Us(t){return t.pu||(t.pu=function(e,n,r){const i=ee(e);return i.su(),new x3(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:N3.bind(null,t),Zr:P3.bind(null,t),Wo:D3.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),hg(t)?cg(t):t.gu.set("Unknown")):(await t.pu.stop(),IT(t))})),t.pu}function Dr(t){return t.Iu||(t.Iu=function(e,n,r){const i=ee(e);return i.su(),new A3(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:M3.bind(null,t),Zr:j3.bind(null,t),tu:U3.bind(null,t),Zo:F3.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await sh(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new dg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fg(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Ma(t))return new M(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Ge(this.comparator)}static emptySet(e){return new rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.Tu=new Ge(V.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _s(e,n,rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z3{constructor(){this.Au=void 0,this.listeners=[]}}class B3{constructor(){this.queries=new Ms(e=>G2(e),Zc),this.onlineState="Unknown",this.Ru=new Set}}async function H3(t,e){const n=ee(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new z3),i)try{s.Au=await n.onListen(r)}catch(o){const a=fg(o,`Initialization of query '${Xf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&pg(n)}async function W3(t,e){const n=ee(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function q3(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&pg(n)}function K3(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function pg(t){t.Ru.forEach(e=>{e.next()})}class G3{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.key=e}}class RT{constructor(e){this.key=e}}class Q3{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=re(),this.mutatedKeys=re(),this.Gu=Q2(e),this.Qu=new rs(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new I0,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=rg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==y&&(r.track({type:3,doc:p}),E=!0):this.Hu(d,p)||(r.track({type:2,doc:p}),E=!0,(l&&this.Gu(p,l)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return p(h)-p(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new _s(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new I0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=re(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new RT(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new bT(r))}),n}tc(e){this.qu=e.Hi,this.Ku=re();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return _s.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Y3{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class X3{constructor(e){this.key=e,this.nc=!1}}class J3{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ms(a=>G2(a),Zc),this.rc=new Map,this.oc=new Set,this.uc=new Ge(V.comparator),this.cc=new Map,this.ac=new og,this.hc={},this.lc=new Map,this.fc=Ts.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Z3(t,e){const n=uD(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await E3(n.localStore,Wn(e));n.isPrimaryClient&&TT(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await eD(n,e,r,a==="current",o.resumeToken)}return i}async function eD(t,e,n,r,i){t._c=(h,d,p)=>async function(g,y,E,m){let f=y.view.Wu(E);f.$i&&(f=await S0(g.localStore,y.query,!1).then(({documents:_})=>y.view.Wu(_,f)));const v=m&&m.targetChanges.get(y.targetId),w=y.view.applyChanges(f,g.isPrimaryClient,v);return x0(g,y.targetId,w.Xu),w.snapshot}(t,h,d,p);const s=await S0(t.localStore,e,!0),o=new Q3(e,s.Hi),a=o.Wu(s.documents),l=Fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);x0(t,n,u.Xu);const c=new Y3(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function tD(t,e){const n=ee(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Zc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await tp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_T(n.remoteStore,r.targetId),np(n,r.targetId)}).catch(La)):(np(n,r.targetId),await tp(n.localStore,r.targetId,!0))}async function nD(t,e,n){const r=cD(t);try{const i=await function(s,o){const a=ee(s),l=qe.now(),u=o.reduce((d,p)=>d.add(p.key),re());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=qn(),g=re();return a.Gi.getEntries(d,u).next(y=>{p=y,p.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(y=>{c=y;const E=[];for(const m of o){const f=C4(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new Si(m.key,f,q2(f.value.mapValue),Mn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(y=>{h=y;const E=y.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,y.batchId,E)})}).then(()=>({batchId:h.batchId,changes:aT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Ge(de)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Va(r,i.changes),await sh(r.remoteStore)}catch(i){const s=fg(i,"Failed to persist write");n.reject(s)}}async function OT(t,e){const n=ee(t);try{const r=await y3(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?we(o.nc):i.removedDocuments.size>0&&(we(o.nc),o.nc=!1))}),await Va(n,r,e)}catch(r){await La(r)}}function k0(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=ee(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&pg(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ge(V.comparator);o=o.insert(s,yt.newNoDocument(s,Z.min()));const a=re().add(s),l=new nh(Z.min(),new Map,new Ke(de),o,a);await OT(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),mg(r)}else await tp(r.localStore,e,!1).then(()=>np(r,e,n)).catch(La)}async function iD(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await g3(n.localStore,e);PT(n,r,null),NT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Va(n,i)}catch(i){await La(i)}}async function sD(t,e,n){const r=ee(t);try{const i=await function(s,o){const a=ee(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(we(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);PT(r,e,n),NT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Va(r,i)}catch(i){await La(i)}}function NT(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function PT(t,e,n){const r=ee(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function np(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||DT(t,r)})}function DT(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(_T(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),mg(t))}function x0(t,e,n){for(const r of n)r instanceof bT?(t.ac.addReference(r.key,e),oD(t,r)):r instanceof RT?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||DT(t,r.key)):q()}function oD(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),mg(t))}function mg(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new V(Se.fromString(e)),r=t.fc.next();t.cc.set(r,new X3(n)),t.uc=t.uc.insert(n,r),TT(t.remoteStore,new ni(Wn(tg(n.path)),r,2,Xm.at))}}async function Va(t,e,n){const r=ee(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=lg.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=ee(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>k.forEach(l,h=>k.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>k.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ma(c))throw c;j("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(r.localStore,s))}async function aD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await vT(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new M(C.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Va(n,r.ji)}}function lD(t,e){const n=ee(t),r=n.cc.get(e);if(r&&r.nc)return re().add(r.key);{let i=re();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function uD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=OT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rD.bind(null,e),e.sc.Wo=q3.bind(null,e.eventManager),e.sc.wc=K3.bind(null,e.eventManager),e}function cD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sD.bind(null,e),e}class hD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=rh(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return m3(this.persistence,new f3,e.initialUser,this.yt)}yc(e){return new h3(ag.Bs,this.yt)}gc(e){return new T3}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class dD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aD.bind(null,this.syncEngine),await V3(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new B3}createDatastore(e){const n=rh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new k3(i));var i;return function(s,o,a,l){return new b3(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>k0(this.syncEngine,a,0),o=_0.C()?new _0:new _3,new O3(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new J3(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ja(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e,n){if(!n)throw new M(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fD(t,e,n,r){if(e===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A0(t){if(!V.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function b0(t){if(V.isDocumentKey(t))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function xo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(t);throw new M(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=new Map;class O0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,fD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FP;switch(n.type){case"gapi":const r=n.client;return new BP(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=R0.get(e);n&&(j("ComponentProvider","Removing Datastore"),R0.delete(e),n.terminate())}(this),Promise.resolve()}}function pD(t,e,n,r={}){var i;const s=(t=xo(t,ah))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Wf("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=mt.MOCK_USER;else{o=lA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new mt(l)}t._authCredentials=new jP(new $2(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class _i{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _i(this.firestore,e,this._query)}}class Ir extends _i{constructor(e,n,r){super(e,n,tg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new V(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function N0(t,e,...n){if(t=_t(t),$T("collection","path",e),t instanceof ah){const r=Se.fromString(e,...n);return b0(r),new Ir(t,null,r)}{if(!(t instanceof Vt||t instanceof Ir))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return b0(r),new Ir(t.firestore,null,r)}}function mD(t,e,...n){if(t=_t(t),arguments.length===1&&(e=L2.R()),$T("doc","path",e),t instanceof ah){const r=Se.fromString(e,...n);return A0(r),new Vt(t,null,new V(r))}{if(!(t instanceof Vt||t instanceof Ir))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return A0(r),new Vt(t.firestore,t instanceof Ir?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=mt.UNAUTHENTICATED,this.clientId=L2.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vD(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function wD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ED(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>C0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>C0(e.remoteStore,s)),t.onlineComponents=e}async function ED(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await vD(t,new hD)),t.offlineComponents}async function LT(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await wD(t,new dD)),t.onlineComponents}function SD(t){return LT(t).then(e=>e.syncEngine)}async function P0(t){const e=await LT(t),n=e.eventManager;return n.onListen=Z3.bind(null,e.syncEngine),n.onUnlisten=tD.bind(null,e.syncEngine),n}class TD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ET(this,"async_queue_retry"),this.Wc=()=>{const n=ld();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=ld();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new ti;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ma(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=dg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function D0(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Uu extends ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new TD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UT(this),this._firestoreClient.terminate()}}function _D(t,e){const n=typeof t=="object"?t:FE(),r=typeof t=="string"?t:e||"(default)",i=mm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=sA("firestore");s&&pD(i,...s)}return i}function MT(t){return t._firestoreClient||UT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new ZP(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new yD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(Ct.fromBase64String(e))}catch(n){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=/^__.*__$/;class ID{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Si(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}function FT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class wg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new wg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Fu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(FT(this.sa)&&CD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class kD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||rh(e)}da(e,n,r,i=!1){return new wg({sa:e,methodName:n,fa:r,path:vt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function jT(t){const e=t._freezeSettings(),n=rh(t._databaseId);return new kD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);BT("Data must be an object, but it was:",o,r);const a=VT(r,o);let l,u;if(s.merge)l=new Cn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=bD(e,h,n);if(!o.contains(d))throw new M(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);OD(c,d)||c.push(d)}l=new Cn(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new ID(new Xt(a),l,u)}class Eg extends yg{_toFieldTransform(e){return new E4(e.path,new oa)}isEqual(e){return e instanceof Eg}}function AD(t,e,n,r=!1){return Sg(n,t.da(r?4:3,e))}function Sg(t,e){if(zT(t=_t(t)))return BT("Unsupported field value:",e,t),VT(t,e);if(t instanceof yg)return function(n,r){if(!FT(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Sg(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=_t(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return y4(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=qe.fromDate(n);return{timestampValue:Lu(r.yt,i)}}if(n instanceof qe){const i=new qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Lu(r.yt,i)}}if(n instanceof vg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cs)return{bytesValue:dT(r.yt,n._byteString)};if(n instanceof Vt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ig(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${oh(n)}`)}(t,e)}function VT(t,e){const n={};return M2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(t,(r,i)=>{const s=Sg(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof vg||t instanceof Cs||t instanceof Vt||t instanceof yg)}function BT(t,e,n){if(!zT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=oh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function bD(t,e,n){if((e=_t(e))instanceof gg)return e._internalPath;if(typeof e=="string")return HT(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const RD=new RegExp("[~\\*/\\[\\]]");function HT(t,e,n){if(e.search(RD)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gg(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(C.INVALID_ARGUMENT,a+t+l)}function OD(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ND(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ND extends WT{data(){return super.data()}}function Tg(t,e){return typeof e=="string"?HT(t,e):e instanceof gg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{}class qT extends _g{}function DD(t,e,...n){let r=[];e instanceof _g&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Ig).length,o=i.filter(a=>a instanceof Cg).length;if(s>1||s>0&&o>0)throw new M(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Cg extends qT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Cg(e,n,r)}_apply(e){const n=this._parse(e);return KT(e._query,n),new _i(e.firestore,e.converter,Qf(e._query,n))}_parse(e){const n=jT(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){L0(c,u);const d=[];for(const p of c)d.push($0(a,i,p));h={arrayValue:{values:d}}}else h=$0(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||L0(c,u),h=AD(o,s,c,u==="in"||u==="not-in");return je.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ig extends _g{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ig(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)KT(s,a),s=Qf(s,a)}(e._query,n),new _i(e.firestore,e.converter,Qf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class kg extends qT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new kg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ts(i,s);return function(a,l){if(ng(a)===null){const u=Jc(a);u!==null&&GT(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new _i(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Ls(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function $D(t,e="asc"){const n=e,r=Tg("orderBy",t);return kg._create(r,n)}function $0(t,e,n){if(typeof(n=_t(n))=="string"){if(n==="")throw new M(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!K2(e)&&n.indexOf("/")!==-1)throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!V.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return s0(t,new V(r))}if(n instanceof Vt)return s0(t,n._key);throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function L0(t,e){if(!Array.isArray(t)||t.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new M(C.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function KT(t,e){if(e.isInequality()){const r=Jc(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new M(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=ng(t);s!==null&&GT(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function GT(t,e,n){if(!n.isEqual(e))throw new M(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class LD{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){const r={};return $s(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new vg(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=F2(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);we(yT(r));const i=new ra(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QT extends WT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends QT{data(e={}){return super.data(e)}}class UD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ul(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:FD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function FD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}class YT extends LD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function jD(t,e){const n=xo(t.firestore,Uu),r=mD(t),i=MD(t.converter,e);return zD(n,[xD(jT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function VD(t,...e){var n,r,i;t=_t(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||D0(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(D0(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Vt)u=xo(t.firestore,Uu),c=tg(t._key.path),l={next:h=>{e[o]&&e[o](BD(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=xo(t,_i);u=xo(h.firestore,Uu),c=h._query;const d=new YT(u);l={next:p=>{e[o]&&e[o](new UD(u,d,h,p))},error:e[o+1],complete:e[o+2]},PD(t._query)}return function(h,d,p,g){const y=new gD(g),E=new G3(d,y,p);return h.asyncQueue.enqueueAndForget(async()=>H3(await P0(h),E)),()=>{y.bc(),h.asyncQueue.enqueueAndForget(async()=>W3(await P0(h),E))}}(MT(u),c,a,l)}function zD(t,e){return function(n,r){const i=new ti;return n.asyncQueue.enqueueAndForget(async()=>nD(await SD(n),r,i)),i.promise}(MT(t),e)}function BD(t,e,n){const r=n.docs.get(e._key),i=new YT(t);return new QT(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}function HD(){return new Eg("serverTimestamp")}(function(t,e=!0){(function(n){Ds=n})(wa),ps(new li("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Uu(new VP(n.getProvider("auth-internal")),new WP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),_r(t0,"3.8.0",t),_r(t0,"3.8.0","esm2017")})();const WD={apiKey:"AIzaSyCKfI4f81xXwUVemb2kodgFYh-GD_agbDE",authDomain:"linkedin-clone-e99cf.firebaseapp.com",projectId:"linkedin-clone-e99cf",storageBucket:"linkedin-clone-e99cf.appspot.com",messagingSenderId:"228753964806",appId:"1:228753964806:web:17ca60da51d3c4e9b9a887"},XT=UE(WD),M0=_D(XT),lh=kO(XT);function un(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function $r(t){return!!t&&!!t[Ce]}function Kn(t){var e;return!!t&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var i=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return i===Object||typeof i=="function"&&Function.toString.call(i)===e$}(t)||Array.isArray(t)||!!t[H0]||!!(!((e=t.constructor)===null||e===void 0)&&e[H0])||xg(t)||Ag(t))}function mi(t,e,n){n===void 0&&(n=!1),Fs(t)===0?(n?Object.keys:ss)(t).forEach(function(r){n&&typeof r=="symbol"||e(r,t[r],t)}):t.forEach(function(r,i){return e(i,r,t)})}function Fs(t){var e=t[Ce];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:xg(t)?2:Ag(t)?3:0}function is(t,e){return Fs(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function qD(t,e){return Fs(t)===2?t.get(e):t[e]}function JT(t,e,n){var r=Fs(t);r===2?t.set(e,n):r===3?(t.delete(e),t.add(n)):t[e]=n}function ZT(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function xg(t){return JD&&t instanceof Map}function Ag(t){return ZD&&t instanceof Set}function Hr(t){return t.o||t.t}function bg(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=t_(t);delete e[Ce];for(var n=ss(e),r=0;r<n.length;r++){var i=n[r],s=e[i];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[i]={configurable:!0,writable:!0,enumerable:s.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function Rg(t,e){return e===void 0&&(e=!1),Og(t)||$r(t)||!Kn(t)||(Fs(t)>1&&(t.set=t.add=t.clear=t.delete=KD),Object.freeze(t),e&&mi(t,function(n,r){return Rg(r,!0)},!0)),t}function KD(){un(2)}function Og(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function kn(t){var e=op[t];return e||un(18,t),e}function GD(t,e){op[t]||(op[t]=e)}function rp(){return ua}function ud(t,e){e&&(kn("Patches"),t.u=[],t.s=[],t.v=e)}function ju(t){ip(t),t.p.forEach(QD),t.p=null}function ip(t){t===ua&&(ua=t.l)}function U0(t){return ua={p:[],l:ua,h:t,m:!0,_:0}}function QD(t){var e=t[Ce];e.i===0||e.i===1?e.j():e.O=!0}function cd(t,e){e._=e.p.length;var n=e.p[0],r=t!==void 0&&t!==n;return e.h.g||kn("ES5").S(e,t,r),r?(n[Ce].P&&(ju(e),un(4)),Kn(t)&&(t=Vu(e,t),e.l||zu(e,t)),e.u&&kn("Patches").M(n[Ce].t,t,e.u,e.s)):t=Vu(e,n,[]),ju(e),e.u&&e.v(e.u,e.s),t!==e_?t:void 0}function Vu(t,e,n){if(Og(e))return e;var r=e[Ce];if(!r)return mi(e,function(s,o){return F0(t,r,e,s,o,n)},!0),e;if(r.A!==t)return e;if(!r.P)return zu(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=r.i===4||r.i===5?r.o=bg(r.k):r.o;mi(r.i===3?new Set(i):i,function(s,o){return F0(t,r,i,s,o,n)}),zu(t,i,!1),n&&t.u&&kn("Patches").N(r,n,t.u,t.s)}return r.o}function F0(t,e,n,r,i,s){if($r(i)){var o=Vu(t,i,s&&e&&e.i!==3&&!is(e.R,r)?s.concat(r):void 0);if(JT(n,r,o),!$r(o))return;t.m=!1}if(Kn(i)&&!Og(i)){if(!t.h.D&&t._<1)return;Vu(t,i),e&&e.A.l||zu(t,i)}}function zu(t,e,n){n===void 0&&(n=!1),t.h.D&&t.m&&Rg(e,n)}function hd(t,e){var n=t[Ce];return(n?Hr(n):t)[e]}function j0(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function ar(t){t.P||(t.P=!0,t.l&&ar(t.l))}function dd(t){t.o||(t.o=bg(t.t))}function sp(t,e,n){var r=xg(e)?kn("MapSet").F(e,n):Ag(e)?kn("MapSet").T(e,n):t.g?function(i,s){var o=Array.isArray(i),a={i:o?1:0,A:s?s.A:rp(),P:!1,I:!1,R:{},l:s,t:i,k:null,o:null,j:null,C:!1},l=a,u=ca;o&&(l=[a],u=co);var c=Proxy.revocable(l,u),h=c.revoke,d=c.proxy;return a.k=d,a.j=h,d}(e,n):kn("ES5").J(e,n);return(n?n.A:rp()).p.push(r),r}function YD(t){return $r(t)||un(22,t),function e(n){if(!Kn(n))return n;var r,i=n[Ce],s=Fs(n);if(i){if(!i.P&&(i.i<4||!kn("ES5").K(i)))return i.t;i.I=!0,r=V0(n,s),i.I=!1}else r=V0(n,s);return mi(r,function(o,a){i&&qD(i.t,o)===a||JT(r,o,e(a))}),s===3?new Set(r):r}(t)}function V0(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return bg(t)}function XD(){function t(s,o){var a=i[s];return a?a.enumerable=o:i[s]=a={configurable:!0,enumerable:o,get:function(){var l=this[Ce];return ca.get(l,s)},set:function(l){var u=this[Ce];ca.set(u,s,l)}},a}function e(s){for(var o=s.length-1;o>=0;o--){var a=s[o][Ce];if(!a.P)switch(a.i){case 5:r(a)&&ar(a);break;case 4:n(a)&&ar(a)}}}function n(s){for(var o=s.t,a=s.k,l=ss(a),u=l.length-1;u>=0;u--){var c=l[u];if(c!==Ce){var h=o[c];if(h===void 0&&!is(o,c))return!0;var d=a[c],p=d&&d[Ce];if(p?p.t!==h:!ZT(d,h))return!0}}var g=!!o[Ce];return l.length!==ss(o).length+(g?0:1)}function r(s){var o=s.k;if(o.length!==s.t.length)return!0;var a=Object.getOwnPropertyDescriptor(o,o.length-1);if(a&&!a.get)return!0;for(var l=0;l<o.length;l++)if(!o.hasOwnProperty(l))return!0;return!1}var i={};GD("ES5",{J:function(s,o){var a=Array.isArray(s),l=function(c,h){if(c){for(var d=Array(h.length),p=0;p<h.length;p++)Object.defineProperty(d,""+p,t(p,!0));return d}var g=t_(h);delete g[Ce];for(var y=ss(g),E=0;E<y.length;E++){var m=y[E];g[m]=t(m,c||!!g[m].enumerable)}return Object.create(Object.getPrototypeOf(h),g)}(a,s),u={i:a?5:4,A:o?o.A:rp(),P:!1,I:!1,R:{},l:o,t:s,k:l,o:null,O:!1,C:!1};return Object.defineProperty(l,Ce,{value:u,writable:!0}),l},S:function(s,o,a){a?$r(o)&&o[Ce].A===s&&e(s.p):(s.u&&function l(u){if(u&&typeof u=="object"){var c=u[Ce];if(c){var h=c.t,d=c.k,p=c.R,g=c.i;if(g===4)mi(d,function(v){v!==Ce&&(h[v]!==void 0||is(h,v)?p[v]||l(d[v]):(p[v]=!0,ar(c)))}),mi(h,function(v){d[v]!==void 0||is(d,v)||(p[v]=!1,ar(c))});else if(g===5){if(r(c)&&(ar(c),p.length=!0),d.length<h.length)for(var y=d.length;y<h.length;y++)p[y]=!1;else for(var E=h.length;E<d.length;E++)p[E]=!0;for(var m=Math.min(d.length,h.length),f=0;f<m;f++)d.hasOwnProperty(f)||(p[f]=!0),p[f]===void 0&&l(d[f])}}}}(s.p[0]),e(s.p))},K:function(s){return s.i===4?n(s):r(s)}})}var z0,ua,Ng=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",JD=typeof Map<"u",ZD=typeof Set<"u",B0=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",e_=Ng?Symbol.for("immer-nothing"):((z0={})["immer-nothing"]=!0,z0),H0=Ng?Symbol.for("immer-draftable"):"__$immer_draftable",Ce=Ng?Symbol.for("immer-state"):"__$immer_state",e$=""+Object.prototype.constructor,ss=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,t_=Object.getOwnPropertyDescriptors||function(t){var e={};return ss(t).forEach(function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)}),e},op={},ca={get:function(t,e){if(e===Ce)return t;var n=Hr(t);if(!is(n,e))return function(i,s,o){var a,l=j0(s,o);return l?"value"in l?l.value:(a=l.get)===null||a===void 0?void 0:a.call(i.k):void 0}(t,n,e);var r=n[e];return t.I||!Kn(r)?r:r===hd(t.t,e)?(dd(t),t.o[e]=sp(t.A.h,r,t)):r},has:function(t,e){return e in Hr(t)},ownKeys:function(t){return Reflect.ownKeys(Hr(t))},set:function(t,e,n){var r=j0(Hr(t),e);if(r!=null&&r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=hd(Hr(t),e),s=i==null?void 0:i[Ce];if(s&&s.t===n)return t.o[e]=n,t.R[e]=!1,!0;if(ZT(n,i)&&(n!==void 0||is(t.t,e)))return!0;dd(t),ar(t)}return t.o[e]===n&&(n!==void 0||e in t.o)||Number.isNaN(n)&&Number.isNaN(t.o[e])||(t.o[e]=n,t.R[e]=!0),!0},deleteProperty:function(t,e){return hd(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,dd(t),ar(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=Hr(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty:function(){un(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){un(12)}},co={};mi(ca,function(t,e){co[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),co.deleteProperty=function(t,e){return co.set.call(this,t,e,void 0)},co.set=function(t,e,n){return ca.set.call(this,t[0],e,n,t[0])};var t$=function(){function t(n){var r=this;this.g=B0,this.D=!0,this.produce=function(i,s,o){if(typeof i=="function"&&typeof s!="function"){var a=s;s=i;var l=r;return function(y){var E=this;y===void 0&&(y=a);for(var m=arguments.length,f=Array(m>1?m-1:0),v=1;v<m;v++)f[v-1]=arguments[v];return l.produce(y,function(w){var _;return(_=s).call.apply(_,[E,w].concat(f))})}}var u;if(typeof s!="function"&&un(6),o!==void 0&&typeof o!="function"&&un(7),Kn(i)){var c=U0(r),h=sp(r,i,void 0),d=!0;try{u=s(h),d=!1}finally{d?ju(c):ip(c)}return typeof Promise<"u"&&u instanceof Promise?u.then(function(y){return ud(c,o),cd(y,c)},function(y){throw ju(c),y}):(ud(c,o),cd(u,c))}if(!i||typeof i!="object"){if((u=s(i))===void 0&&(u=i),u===e_&&(u=void 0),r.D&&Rg(u,!0),o){var p=[],g=[];kn("Patches").M(i,u,p,g),o(p,g)}return u}un(21,i)},this.produceWithPatches=function(i,s){if(typeof i=="function")return function(u){for(var c=arguments.length,h=Array(c>1?c-1:0),d=1;d<c;d++)h[d-1]=arguments[d];return r.produceWithPatches(u,function(p){return i.apply(void 0,[p].concat(h))})};var o,a,l=r.produce(i,s,function(u,c){o=u,a=c});return typeof Promise<"u"&&l instanceof Promise?l.then(function(u){return[u,o,a]}):[l,o,a]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var e=t.prototype;return e.createDraft=function(n){Kn(n)||un(8),$r(n)&&(n=YD(n));var r=U0(this),i=sp(this,n,void 0);return i[Ce].C=!0,ip(r),i},e.finishDraft=function(n,r){var i=n&&n[Ce],s=i.A;return ud(s,r),cd(void 0,s)},e.setAutoFreeze=function(n){this.D=n},e.setUseProxies=function(n){n&&!B0&&un(20),this.g=n},e.applyPatches=function(n,r){var i;for(i=r.length-1;i>=0;i--){var s=r[i];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}i>-1&&(r=r.slice(i+1));var o=kn("Patches").$;return $r(n)?o(n,r):this.produce(n,function(a){return o(a,r)})},t}(),Ht=new t$,n_=Ht.produce;Ht.produceWithPatches.bind(Ht);Ht.setAutoFreeze.bind(Ht);Ht.setUseProxies.bind(Ht);Ht.applyPatches.bind(Ht);Ht.createDraft.bind(Ht);Ht.finishDraft.bind(Ht);function ha(t){return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ha(t)}function n$(t,e){if(ha(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ha(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function r$(t){var e=n$(t,"string");return ha(e)==="symbol"?e:String(e)}function i$(t,e,n){return e=r$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function W0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function q0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?W0(Object(n),!0).forEach(function(r){i$(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):W0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function pt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var K0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),fd=function(){return Math.random().toString(36).substring(7).split("").join(".")},Bu={INIT:"@@redux/INIT"+fd(),REPLACE:"@@redux/REPLACE"+fd(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+fd()}};function s$(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function r_(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(pt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(pt(1));return n(r_)(t,e)}if(typeof t!="function")throw new Error(pt(2));var i=t,s=e,o=[],a=o,l=!1;function u(){a===o&&(a=o.slice())}function c(){if(l)throw new Error(pt(3));return s}function h(y){if(typeof y!="function")throw new Error(pt(4));if(l)throw new Error(pt(5));var E=!0;return u(),a.push(y),function(){if(E){if(l)throw new Error(pt(6));E=!1,u();var f=a.indexOf(y);a.splice(f,1),o=null}}}function d(y){if(!s$(y))throw new Error(pt(7));if(typeof y.type>"u")throw new Error(pt(8));if(l)throw new Error(pt(9));try{l=!0,s=i(s,y)}finally{l=!1}for(var E=o=a,m=0;m<E.length;m++){var f=E[m];f()}return y}function p(y){if(typeof y!="function")throw new Error(pt(10));i=y,d({type:Bu.REPLACE})}function g(){var y,E=h;return y={subscribe:function(f){if(typeof f!="object"||f===null)throw new Error(pt(11));function v(){f.next&&f.next(c())}v();var w=E(v);return{unsubscribe:w}}},y[K0]=function(){return this},y}return d({type:Bu.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:p},r[K0]=g,r}function o$(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Bu.INIT});if(typeof r>"u")throw new Error(pt(12));if(typeof n(void 0,{type:Bu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(pt(13))})}function a$(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{o$(n)}catch(a){o=a}return function(l,u){if(l===void 0&&(l={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var p=s[d],g=n[p],y=l[p],E=g(y,u);if(typeof E>"u")throw u&&u.type,new Error(pt(14));h[p]=E,c=c||E!==y}return c=c||s.length!==Object.keys(l).length,c?h:l}}function Hu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function l$(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(pt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(l){return l(o)});return s=Hu.apply(void 0,a)(i.dispatch),q0(q0({},i),{},{dispatch:s})}}}function i_(t){var e=function(r){var i=r.dispatch,s=r.getState;return function(o){return function(a){return typeof a=="function"?a(i,s,t):o(a)}}};return e}var s_=i_();s_.withExtraArgument=i_;const G0=s_;var u$=globalThis&&globalThis.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),c$=globalThis&&globalThis.__generator||function(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},Wu=globalThis&&globalThis.__spreadArray||function(t,e){for(var n=0,r=e.length,i=t.length;n<r;n++,i++)t[i]=e[n];return t},h$=Object.defineProperty,d$=Object.defineProperties,f$=Object.getOwnPropertyDescriptors,Q0=Object.getOwnPropertySymbols,p$=Object.prototype.hasOwnProperty,m$=Object.prototype.propertyIsEnumerable,Y0=function(t,e,n){return e in t?h$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n},kr=function(t,e){for(var n in e||(e={}))p$.call(e,n)&&Y0(t,n,e[n]);if(Q0)for(var r=0,i=Q0(e);r<i.length;r++){var n=i[r];m$.call(e,n)&&Y0(t,n,e[n])}return t},pd=function(t,e){return d$(t,f$(e))},g$=function(t,e,n){return new Promise(function(r,i){var s=function(l){try{a(n.next(l))}catch(u){i(u)}},o=function(l){try{a(n.throw(l))}catch(u){i(u)}},a=function(l){return l.done?r(l.value):Promise.resolve(l.value).then(s,o)};a((n=n.apply(t,e)).next())})},y$=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hu:Hu.apply(null,arguments)};function v$(t){if(typeof t!="object"||t===null)return!1;var e=Object.getPrototypeOf(t);if(e===null)return!0;for(var n=e;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return e===n}var w$=function(t){u$(e,t);function e(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=t.apply(this,n)||this;return Object.setPrototypeOf(i,e.prototype),i}return Object.defineProperty(e,Symbol.species,{get:function(){return e},enumerable:!1,configurable:!0}),e.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t.prototype.concat.apply(this,n)},e.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(e.bind.apply(e,Wu([void 0],n[0].concat(this)))):new(e.bind.apply(e,Wu([void 0],n.concat(this))))},e}(Array);function ap(t){return Kn(t)?n_(t,function(){}):t}function E$(t){return typeof t=="boolean"}function S$(){return function(e){return T$(e)}}function T$(t){t===void 0&&(t={});var e=t.thunk,n=e===void 0?!0:e;t.immutableCheck,t.serializableCheck;var r=new w$;return n&&(E$(n)?r.push(G0):r.push(G0.withExtraArgument(n.extraArgument))),r}var _$=!0;function C$(t){var e=S$(),n=t||{},r=n.reducer,i=r===void 0?void 0:r,s=n.middleware,o=s===void 0?e():s,a=n.devTools,l=a===void 0?!0:a,u=n.preloadedState,c=u===void 0?void 0:u,h=n.enhancers,d=h===void 0?void 0:h,p;if(typeof i=="function")p=i;else if(v$(i))p=a$(i);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var g=o;typeof g=="function"&&(g=g(e));var y=l$.apply(void 0,g),E=Hu;l&&(E=y$(kr({trace:!_$},typeof l=="object"&&l)));var m=[y];Array.isArray(d)?m=Wu([y],d):typeof d=="function"&&(m=d(m));var f=E.apply(void 0,m);return r_(p,c,f)}function xr(t,e){function n(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];if(e){var s=e.apply(void 0,r);if(!s)throw new Error("prepareAction did not return an object");return kr(kr({type:t,payload:s.payload},"meta"in s&&{meta:s.meta}),"error"in s&&{error:s.error})}return{type:t,payload:r[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(r){return r.type===t},n}function o_(t){var e={},n=[],r,i={addCase:function(s,o){var a=typeof s=="string"?s:s.type;if(a in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[a]=o,i},addMatcher:function(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase:function(s){return r=s,i}};return t(i),[e,n,r]}function I$(t){return typeof t=="function"}function k$(t,e,n,r){n===void 0&&(n=[]);var i=typeof e=="function"?o_(e):[e,n,r],s=i[0],o=i[1],a=i[2],l;if(I$(t))l=function(){return ap(t())};else{var u=ap(t);l=function(){return u}}function c(h,d){h===void 0&&(h=l());var p=Wu([s[d.type]],o.filter(function(g){var y=g.matcher;return y(d)}).map(function(g){var y=g.reducer;return y}));return p.filter(function(g){return!!g}).length===0&&(p=[a]),p.reduce(function(g,y){if(y)if($r(g)){var E=g,m=y(E,d);return m===void 0?g:m}else{if(Kn(g))return n_(g,function(f){return y(f,d)});var m=y(g,d);if(m===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}return g},h)}return c.getInitialState=l,c}function x$(t,e){return t+"/"+e}function A$(t){var e=t.name;if(!e)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof t.initialState=="function"?t.initialState:ap(t.initialState),r=t.reducers||{},i=Object.keys(r),s={},o={},a={};i.forEach(function(c){var h=r[c],d=x$(e,c),p,g;"reducer"in h?(p=h.reducer,g=h.prepare):p=h,s[c]=p,o[d]=p,a[c]=g?xr(d,g):xr(d)});function l(){var c=typeof t.extraReducers=="function"?o_(t.extraReducers):[t.extraReducers],h=c[0],d=h===void 0?{}:h,p=c[1],g=p===void 0?[]:p,y=c[2],E=y===void 0?void 0:y,m=kr(kr({},d),o);return k$(n,function(f){for(var v in m)f.addCase(v,m[v]);for(var w=0,_=g;w<_.length;w++){var A=_[w];f.addMatcher(A.matcher,A.reducer)}E&&f.addDefaultCase(E)})}var u;return{name:e,reducer:function(c,h){return u||(u=l()),u(c,h)},actions:a,caseReducers:s,getInitialState:function(){return u||(u=l()),u.getInitialState()}}}var b$="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",R$=function(t){t===void 0&&(t=21);for(var e="",n=t;n--;)e+=b$[Math.random()*64|0];return e},O$=["name","message","stack","code"],md=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),X0=function(){function t(e,n){this.payload=e,this.meta=n}return t}(),N$=function(t){if(typeof t=="object"&&t!==null){for(var e={},n=0,r=O$;n<r.length;n++){var i=r[n];typeof t[i]=="string"&&(e[i]=t[i])}return e}return{message:String(t)}};(function(){function t(e,n,r){var i=xr(e+"/fulfilled",function(u,c,h,d){return{payload:u,meta:pd(kr({},d||{}),{arg:h,requestId:c,requestStatus:"fulfilled"})}}),s=xr(e+"/pending",function(u,c,h){return{payload:void 0,meta:pd(kr({},h||{}),{arg:c,requestId:u,requestStatus:"pending"})}}),o=xr(e+"/rejected",function(u,c,h,d,p){return{payload:d,error:(r&&r.serializeError||N$)(u||"Rejected"),meta:pd(kr({},p||{}),{arg:h,requestId:c,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function u(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return u.prototype.abort=function(){},u}();function l(u){return function(c,h,d){var p=r!=null&&r.idGenerator?r.idGenerator(u):R$(),g=new a,y;function E(f){y=f,g.abort()}var m=function(){return g$(this,null,function(){var f,v,w,_,A,R,P;return c$(this,function(J){switch(J.label){case 0:return J.trys.push([0,4,,5]),_=(f=r==null?void 0:r.condition)==null?void 0:f.call(r,u,{getState:h,extra:d}),D$(_)?[4,_]:[3,2];case 1:_=J.sent(),J.label=2;case 2:if(_===!1||g.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return A=new Promise(function(F,_e){return g.signal.addEventListener("abort",function(){return _e({name:"AbortError",message:y||"Aborted"})})}),c(s(p,u,(v=r==null?void 0:r.getPendingMeta)==null?void 0:v.call(r,{requestId:p,arg:u},{getState:h,extra:d}))),[4,Promise.race([A,Promise.resolve(n(u,{dispatch:c,getState:h,extra:d,requestId:p,signal:g.signal,abort:E,rejectWithValue:function(F,_e){return new md(F,_e)},fulfillWithValue:function(F,_e){return new X0(F,_e)}})).then(function(F){if(F instanceof md)throw F;return F instanceof X0?i(F.payload,p,u,F.meta):i(F,p,u)})])];case 3:return w=J.sent(),[3,5];case 4:return R=J.sent(),w=R instanceof md?o(null,p,u,R.payload,R.meta):o(R,p,u),[3,5];case 5:return P=r&&!r.dispatchConditionRejection&&o.match(w)&&w.meta.condition,P||c(w),[2,w]}})})}();return Object.assign(m,{abort:E,requestId:p,arg:u,unwrap:function(){return m.then(P$)}})}}return Object.assign(l,{pending:s,rejected:o,fulfilled:i,typePrefix:e})}return t.withTypes=function(){return t},t})();function P$(t){if(t.meta&&t.meta.rejectedWithValue)throw t.payload;if(t.error)throw t.error;return t.payload}function D$(t){return t!==null&&typeof t=="object"&&typeof t.then=="function"}var Pg="listenerMiddleware";xr(Pg+"/add");xr(Pg+"/removeAll");xr(Pg+"/remove");var J0;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);XD();const a_=A$({name:"user",initialState:{user:null},reducers:{login:(t,e)=>{t.user=e.payload},logout:t=>{t.user=null}}}),{login:$$,logout:l_}=a_.actions,L$=a_.reducer;function M$(){const t=SE();return x.useEffect(()=>{dR(lh,e=>{t(e?$$({email:e.email,displayName:e.displayName,uid:e.uid,photoURL:e.photoURL}):l_())})},[]),z(zi,{children:[T(DN,{}),T(Ux,{})]})}const u_=K.div`
  width: 100%;
  max-width: 1128px;
  padding: 0 10px;
`,U$=K(u_)`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;var c_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Z0=Ae.createContext&&Ae.createContext(c_),Ar=globalThis&&globalThis.__assign||function(){return Ar=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Ar.apply(this,arguments)},F$=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function h_(t){return t&&t.map(function(e,n){return Ae.createElement(e.tag,Ar({key:n},e.attr),h_(e.child))})}function ze(t){return function(e){return Ae.createElement(j$,Ar({attr:Ar({},t.attr)},e),h_(t.child))}}function j$(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=F$(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Ae.createElement("svg",Ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:Ar(Ar({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Ae.createElement("title",null,s),t.children)};return Z0!==void 0?Ae.createElement(Z0.Consumer,null,function(n){return e(n)}):e(c_)}function V$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"}}]})(t)}function z$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}},{tag:"path",attr:{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}}]})(t)}function B$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z"}},{tag:"path",attr:{d:"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"}}]})(t)}function H$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"}}]})(t)}function W$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}}]})(t)}function q$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"}}]})(t)}function K$(t){return ze({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"}}]})(t)}function G$(t){return ze({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}}]})(t)}function Q$(t){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM7 10v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"}}]}]})(t)}function Y$(t){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 6v4h4V6H7zm0 6v2h10v-2H7zm0 4v2h10v-2H7zm6-9v2h4V7h-4z"}}]}]})(t)}function d_(t){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 16l-6-6h12z"}}]}]})(t)}const X$=K.div`
  flex: 0.5;
  margin: 0 20px;

  > button {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
    margin: 8px 0;
    border: none;
    background: none;
    gap: 4px;
    font-size: 12px;
    color: #00000099;
    cursor: pointer;

    hr {
      flex-grow: 1;
    }

    span {
      color: #000000;
      font-weight: 600;
      display: flex;
      align-items: center;
    }
  }
`,J$=K.div`
  background-color: #fff;
  padding: 10px;
  padding-bottom: 6px;
  border-radius: 10px;
  border: 1px solid #ddd;

  > div:first-of-type {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: left;
    gap: 5px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    border-radius: 50%;
  }
`,Z$=K.div`
  flex-grow: 1;
  border: 1px solid #ddd;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: #ddd;
  background-color: #eee;
  padding-left: 15px;

  :focus-within {
    background: #fff;
    color: #000;
  }

  form {
    display: flex;
    width: 100%;

    input {
      border: none;
      flex: 1;
      margin-left: 10px;
      outline-width: 0;
      font-weight: 600;
      background-color: inherit;
    }

    button {
      display: none;
    }
  }
`,e6=K.div`
  display: flex;
  justify-content: space-between;
`,t6=K.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 14px;
  border-radius: 5px;
  padding: 10px 8px;
  cursor: pointer;

  :hover {
    background: #ebebeb;
  }

  span {
    opacity: 0.65;
    margin-left: 8px;
  }

  svg {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`,hr=({Icon:t,title:e,color:n})=>z(t6,{children:[T(t,{style:{color:n}}),T("span",{children:e})]});function n6(t){return ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"}}]})(t)}function r6(t){return ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"}}]})(t)}function i6(t){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.018 3.815 15.232 8h-4.966l.716-3.815-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805 1.965.369L8.766 16h4.966l-.714 3.805 1.965.369.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815-1.965-.37zM14.106 14H9.141l.751-4h4.966l-.752 4z"}}]})(t)}function s6(t){return ze({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"}},{tag:"path",attr:{d:"M7 7h10v2H7zm0 4h7v2H7z"}}]})(t)}function o6(t){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z"}}]})(t)}function a6(t){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"}}]})(t)}const l6=K.div`
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 15px;
  border: 1px solid #ddd;
`,u6=K.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`,c6=K.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  img {
    border-radius: 50%;
    object-fit: contain;
    width: 48px;
    height: 48px;
  }
`,h6=K.div`
  margin-left: 10px;

  h2 {
    font-size: 14px;
    font-weight: 600;
  }

  p {
    font-size: 12px;
    opacity: 0.6;
  }
`,d6=K.div`
  overflow-wrap: anywhere;
`,f6=K.div`
  display: flex;
  justify-content: space-between;
`,p6=({description:t,message:e,name:n,photoUrl:r})=>z(l6,{children:[z(u6,{children:[T(c6,{children:T("img",{src:r,alt:""})}),z(h6,{children:[T("h2",{children:n}),T("p",{children:t})]})]}),T(d6,{children:T("p",{children:e})}),z(f6,{children:[T(hr,{Icon:n6,title:"Gostei",color:"#5E5E5E"}),T(hr,{Icon:s6,title:"Comentar",color:"#5E5E5E"}),T(hr,{Icon:r6,title:"Compartilhar",color:"#5E5E5E"}),T(hr,{Icon:o6,title:"Enviar",color:"#5E5E5E"})]})]}),m6=()=>{const[t,e]=x.useState([]),n=As(i=>i.user.user);x.useEffect(()=>{const i=N0(M0,"posts"),s=DD(i,$D("timestamp","desc"));VD(s,o=>{e(o.docs.map(a=>({id:a.id,...a.data()})))})},[]);const r=async i=>{i.preventDefault();const s=N0(M0,"posts");await jD(s,{name:n==null?void 0:n.displayName,description:n==null?void 0:n.email,message:i.target.content.value,photoUrl:n.photoURL,timestamp:HD()}),i.target.reset()};return z(X$,{children:[z(J$,{children:[z("div",{children:[T("a",{href:"",children:T("img",{src:(n==null?void 0:n.photoURL)||"#",alt:""})}),T(Z$,{children:T("form",{onSubmit:i=>r(i),children:T("input",{type:"text",placeholder:"Começar publicação",name:"content"})})})]}),z(e6,{children:[T(hr,{Icon:G$,title:"Foto",color:"#378FE9"}),T(hr,{Icon:q$,title:"Vídeo",color:"#5F9B41"}),T(hr,{Icon:B$,title:"Evento",color:"#C37D16"}),T(hr,{Icon:Y$,title:"Escrever artigo",color:"#E16745"})]})]}),z("button",{children:[T("hr",{}),"Classificar por:"," ",z("span",{children:["Recentes ",T(d_,{})]})]}),t.map(i=>T(p6,{...i},i.id))]})};function g6(t){return ze({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"}}]})(t)}function y6(t){return ze({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"}},{tag:"path",attr:{d:"M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"}}]})(t)}const v6=K.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
  z-index: 999;
  background: #fff;
`,w6=K(u_)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,E6=K.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`,S6=K.a`
  color: #0a66c2;
  text-decoration: none;
  margin-right: 4px;

  svg {
    object-fit: contain;
    width: 40px;
    height: 40px;
  }
`,T6=K.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  color: #555;
  background: #eef3f8;
  gap: 6px;
  transition: all 0.3s ease;
  width: 255px;

  svg {
    width: 20px;
    height: 20px;
  }

  :focus-within {
    gap: 16px;
    flex-grow: 1;
    outline: auto;

    input {
      font-size: 1rem;
    }
  }

  input {
    border: none;
    background: none;
    outline: none;
    flex-grow: 1;
  }
`,_6=K.div`
  display: flex;
`,C6=K.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
  cursor: pointer;
  padding: 4px 0;
  position: relative;

  h3 {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  :hover {
    * {
      color: #000;
    }
  }

  &.active h3::after {
    content: ' ';
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: #000;
    height: 2px;
  }
`,I6=K.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 26px;

  svg {
    object-fit: contain;
    width: 24px;
    height: 24px;
  }
`,k6=K.div`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    object-fit: contain;
    width: 24px;
    height: 24px;
  }
`,ki=({Icon:t,title:e,avatar:n,onClick:r})=>z(C6,{onClick:()=>!!r&&r(),children:[t&&T(I6,{children:T(t,{})}),n&&T(k6,{children:T("img",{src:n,alt:""})}),z("h3",{children:[e," ",n&&T(d_,{})]})]}),x6=()=>{const t=As(r=>r.user.user),e=SE(),n=()=>{e(l_()),lh.signOut()};return T(v6,{children:z(w6,{children:[z(E6,{children:[T(S6,{href:"",children:T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","data-supported-dps":"24x24",fill:"currentColor",width:"24",height:"24",focusable:"false",children:T("path",{d:"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"})})}),z(T6,{children:[T(a6,{}),T("input",{type:"text",name:"",id:"",placeholder:"Pesquisar"})]})]}),z(_6,{children:[T(ki,{title:"Início",Icon:y6}),T(ki,{title:"Minha rede",Icon:g6}),T(ki,{title:"Vagas",Icon:z$}),T(ki,{title:"Mensagens",Icon:Q$}),T(ki,{title:"Notificações",Icon:V$}),T(ki,{title:"Eu",avatar:(t==null?void 0:t.photoURL)||"#",onClick:n})]})]})})},A6=K.aside`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,b6=K.div`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
`,R6=K.div`
  background: #fff;
  border-radius: 10px 10px 0 0;
  text-align: center;

  h2 {
    font-weight: 600;
    font-size: 16px;
    padding: 0 12px;
  }

  h4 {
    font-weight: 400;
    font-size: 12px;
    opacity: 0.6;
    padding: 0 12px 16px 12px;
  }

  img:first-of-type {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`,O6=K.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  position: relative;
  top: -38px;
  margin-bottom: -30px;
  border: 3px solid #fff;
  background: #fff;
`,N6=K.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 12px 0;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
`,e1=K.a`
  display: flex;
  justify-content: space-between;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    text-decoration: none;
    background: #ebebeb;
  }

  p {
    opacity: 0.6;
  }

  span {
    color: #0a66c2;
    opacity: 1;
  }
`,P6=K.div`
  position: sticky;
  top: 70px;
  border-radius: 10px;
  background: #fff;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;
  border: 1px solid #ddd;

  h3 {
    padding: 0 12px;
  }

  a {
    color: #0a66c2;
    font-weight: 600;
    font-size: 12px;
    padding: 4px 12px;
  }
`,D6=K.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  h3,
  a {
    opacity: 0.6;
  }

  h3 {
    font-size: 12px;
    font-weight: 400;
    padding: 4px 12px;
  }

  a {
    color: #000;
    display: flex;
    align-items: center;
    justify-content: left;

    :hover {
      text-decoration: none;
      background: #ebebeb;
    }
  }
`,$6=()=>{const t=As(e=>e.user.user);return z(A6,{children:[z(b6,{children:[z(R6,{children:[T("img",{src:"https://img.freepik.com/free-photo/gradient-dark-blue-futuristic-digital-grid-background_53876-129728.jpg?auto=format&h=200",alt:""}),T(O6,{src:(t==null?void 0:t.photoURL)||"#",alt:""}),T("h2",{children:t==null?void 0:t.displayName}),T("h4",{children:t==null?void 0:t.email})]}),z(N6,{children:[z(e1,{children:[T("p",{children:"Quem viu seu perfil"}),T("span",{children:"2.543"})]}),z(e1,{children:[T("p",{children:"Impressões da sua publicação"}),T("span",{children:"4.321"})]})]})]}),z(P6,{children:[z(D6,{children:[T("h3",{children:"Recentes"}),z("a",{href:"",children:[T(i6,{})," React"]})]}),T("a",{href:"",children:"Grupos"}),T("a",{href:"",children:"Eventos"}),T("a",{href:"",children:"Hashtags seguidas"})]})]})},L6=()=>z(M6,{children:[z("p",{children:["Adriel Santos, ",new Date().getFullYear()]}),T("a",{href:"https://github.com/br-adriel",target:"_blank",rel:"noopener noreferrer",children:"Github"}),T("a",{href:"https://linkedin.com/in/adriel-fsantos",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"})]}),M6=K.footer`
  display: flex;
  gap: 4px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: #0009;
  padding: 20px;

  a {
    color: inherit;
    font-weight: 600;
  }
`,U6=K.li`
  margin-left: 1rem;
  color: #555;
  cursor: pointer;

  h3 {
    color: #000;
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    opacity: 0.65;
  }

  > div > div {
    display: flex;
    align-items: center;
    width: 100%;
  }
`,F6=({title:t,subtitle:e,readers:n})=>T(U6,{children:z("div",{children:[T("h3",{children:t}),z("div",{children:[T("span",{children:e}),T(H$,{}),z("span",{children:[n," leitores"]})]})]})});function j6(t){return ze({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"}}]})(t)}const V6=K.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  padding: 0 10px;

  :hover {
    h3 {
      text-decoration: underline;
      color: #0a66c2;
    }

    svg {
      color: #0a66c2;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  svg {
    width: 30px;
    height: 30px;
  }
`,z6=({title:t,description:e,image:n})=>z(V6,{children:[T("img",{src:n,alt:""}),z("div",{children:[T("h3",{children:t}),T("p",{children:e})]}),T(j6,{})]}),B6=K.aside`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,t1=K.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #ddd;
`,n1=K.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  h2 {
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`,H6=K.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > div {
    padding: 2px 10px;

    :hover {
      background-color: #ebebeb;
    }
  }
`,W6=K.div`
  position: sticky;
  top: 70px;
`,q6=[{title:"Lorem ipsum dolor, sit amet",subtitle:"Notícias mais lidas",readers:1234},{title:"Lorem ipsum dolor, sit amet",subtitle:"Notícias mais lidas",readers:1234},{title:"Lorem ipsum dolor, sit amet",subtitle:"Notícias mais lidas",readers:1234},{title:"Lorem ipsum dolor, sit amet",subtitle:"Notícias mais lidas",readers:1234},{title:"Lorem ipsum dolor, sit amet",subtitle:"Notícias mais lidas",readers:1234}],K6=[{title:"Lorem ipsum dolor, sit amet",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.",image:"https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0"},{title:"Lorem ipsum dolor, sit amet",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.",image:"https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0"},{title:"Lorem ipsum dolor, sit amet",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic ut quia distinctio, laboriosam dignissimos.",image:"https://media.licdn.com/dms/image/C560EAQFtY0tsKSAGzA/rightRail-logo-shrink_200_200/0/1653061524124?e=1674853200&v=beta&t=Yv08egS8O37ngit6tyKqqdp0q4FPlvOCFM-SQdp0ML0"}],G6=()=>z(B6,{children:[z(t1,{children:[z(n1,{children:[T("h2",{children:"Linkedin Notícias"}),T(W$,{})]}),T(H6,{children:q6.map((t,e)=>T("div",{children:T(F6,{...t},`news${e}`)}))})]}),z(W6,{children:[z(t1,{children:[z(n1,{children:[T("h2",{style:{fontWeight:500,opacity:.75},children:"Promovido"}),T(K$,{})]}),K6.map((t,e)=>x.createElement(z6,{...t,key:`promoted${e}`}))]}),T(L6,{})]})]}),Q6=()=>As(e=>e.user.user)?z(j_,{children:[T(es,{children:T("title",{children:"Feed | LinkedIn"})}),T(x6,{}),z(U$,{children:[T($6,{}),T(m6,{}),T(G6,{})]})]}):T(hm,{to:"/login"}),Y6=K.footer`
  margin-top: auto;
  max-width: 1128px;
  width: 100%;
  padding: 20px;
  font-size: 12px;
  color: #0009;
  display: flex;
  justify-content: left;
  gap: 16px;

  a {
    color: inherit;
    font-weight: 600;
  }
`,f_=()=>z(Y6,{children:[z("p",{children:["Adriel Santos, ",new Date().getFullYear()]}),T("a",{href:"https://github.com/br-adriel",target:"_blank",rel:"noopener noreferrer",children:"Github"}),T("a",{href:"https://linkedin.com/in/adriel-fsantos",target:"_blank",rel:"noopener noreferrer",children:"Linkedin"})]}),X6=K.header`
  display: flex;
  justify-content: left;
  width: 100%;

  svg {
    margin-top: 32px;
    margin-left: 56px;
  }
`,p_=()=>T(X6,{children:T("svg",{width:"102",height:"26",viewBox:"0 0 102 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",id:"linkedin-logo",preserveAspectRatio:"xMinYMin meet",focusable:"false",children:T("path",{d:"M13 10H17V22H13V10ZM15 3.8C14.5671 3.80984 14.1468 3.94718 13.7917 4.19483C13.4365 4.44247 13.1623 4.7894 13.0035 5.19217C12.8446 5.59493 12.8081 6.03562 12.8985 6.45903C12.989 6.88244 13.2024 7.26975 13.5119 7.57245C13.8215 7.87514 14.2135 8.07976 14.6389 8.16067C15.0642 8.24159 15.504 8.1952 15.903 8.02732C16.3021 7.85943 16.6428 7.57752 16.8824 7.2169C17.122 6.85627 17.2499 6.43297 17.25 6C17.2515 5.70645 17.1939 5.4156 17.0807 5.14474C16.9675 4.87388 16.801 4.62854 16.5911 4.42331C16.3812 4.21808 16.1322 4.05714 15.8589 3.95006C15.5855 3.84299 15.2934 3.79195 15 3.8ZM4 4H0V22H11V18H4V4ZM57.9 16.2C57.9 16.61 57.9 16.86 57.9 17H48.9C48.9021 17.169 48.9256 17.337 48.97 17.5C49.1765 18.0933 49.5745 18.6011 50.1014 18.9433C50.6282 19.2855 51.254 19.4427 51.88 19.39C52.4142 19.4129 52.9468 19.3171 53.4396 19.1096C53.9324 18.9021 54.3731 18.5881 54.73 18.19L57.45 19.87C56.7533 20.6812 55.88 21.322 54.8971 21.7433C53.9142 22.1645 52.8479 22.3549 51.78 22.3C48.19 22.3 45.12 20.25 45.12 16.11C45.091 15.2506 45.2411 14.3946 45.5608 13.5963C45.8804 12.798 46.3626 12.075 46.9767 11.4731C47.5908 10.8712 48.3234 10.4037 49.128 10.1001C49.9325 9.7966 50.7914 9.66374 51.65 9.71C55.08 9.71 57.9 12 57.9 16.2ZM54.15 14.69C54.16 14.3669 54.0997 14.0455 53.9731 13.748C53.8466 13.4506 53.6569 13.1842 53.4172 12.9673C53.1775 12.7504 52.8935 12.5883 52.5849 12.492C52.2763 12.3958 51.9505 12.3678 51.63 12.41C50.9638 12.3515 50.3013 12.558 49.7865 12.9849C49.2716 13.4118 48.9459 14.0245 48.88 14.69H54.15ZM68 4H72V22H68.61V20.57C68.1486 21.1444 67.5541 21.5977 66.878 21.8904C66.2019 22.1832 65.4646 22.3066 64.73 22.25C62.22 22.25 59.18 20.39 59.18 16C59.18 12.08 61.87 9.75 64.68 9.75C65.299 9.72159 65.9167 9.82856 66.4902 10.0634C67.0636 10.2983 67.5788 10.6555 68 11.11V4ZM68.3 16C68.3 14.12 67.13 12.87 65.64 12.87C65.2366 12.8697 64.8373 12.9508 64.466 13.1084C64.0946 13.266 63.7589 13.4969 63.4788 13.7872C63.1988 14.0775 62.9801 14.4214 62.836 14.7981C62.6919 15.1749 62.6252 15.5769 62.64 15.98C62.6279 16.3815 62.6966 16.7813 62.842 17.1557C62.9874 17.5301 63.2064 17.8716 63.4862 18.1597C63.766 18.4479 64.1008 18.677 64.4708 18.8333C64.8407 18.9897 65.2383 19.0702 65.64 19.07C66.0201 19.0542 66.393 18.9609 66.7357 18.7957C67.0785 18.6305 67.3838 18.3969 67.6329 18.1094C67.8821 17.8219 68.0698 17.4864 68.1845 17.1236C68.2992 16.7609 68.3385 16.3785 68.3 16ZM45.76 10H41L37.07 14.9H37V4H33V22H37V16.27H37.07L41.07 22H46L41 15.48L45.76 10ZM26.53 9.7C25.7825 9.68818 25.0441 9.8653 24.3833 10.2149C23.7226 10.5645 23.1607 11.0754 22.75 11.7H22.7V10H19V22H23V15.47C22.956 15.1525 22.9801 14.8292 23.0706 14.5216C23.1611 14.2141 23.316 13.9294 23.525 13.6863C23.7341 13.4432 23.9924 13.2474 24.2829 13.1118C24.5734 12.9763 24.8894 12.9041 25.21 12.9C26.31 12.9 27 13.49 27 15.42V22H31V14.56C31 10.91 28.71 9.7 26.53 9.7ZM102 2V24C102 24.5304 101.789 25.0391 101.414 25.4142C101.039 25.7893 100.53 26 100 26H78C77.4696 26 76.9609 25.7893 76.5858 25.4142C76.2107 25.0391 76 24.5304 76 24V2C76 1.46957 76.2107 0.960859 76.5858 0.585786C76.9609 0.210714 77.4696 0 78 0L100 0C100.53 0 101.039 0.210714 101.414 0.585786C101.789 0.960859 102 1.46957 102 2ZM84 10H80V22H84V10ZM84.25 6C84.2599 5.553 84.1365 5.11317 83.8954 4.73664C83.6542 4.36011 83.3064 4.06396 82.8962 3.88597C82.4861 3.70798 82.0322 3.65622 81.5925 3.73731C81.1528 3.8184 80.7472 4.02865 80.4275 4.34124C80.1079 4.65382 79.8885 5.05456 79.7976 5.49233C79.7066 5.9301 79.7482 6.38503 79.9169 6.79909C80.0856 7.21314 80.3739 7.56754 80.7449 7.81706C81.1159 8.06657 81.5529 8.19989 82 8.2C82.2934 8.20805 82.5855 8.15701 82.8588 8.04994C83.1322 7.94286 83.3812 7.78192 83.5911 7.57669C83.801 7.37146 83.9675 7.12612 84.0807 6.85526C84.1939 6.5844 84.2514 6.29355 84.25 6ZM98 14.56C98 10.91 95.71 9.66 93.53 9.66C92.7782 9.65542 92.0375 9.84096 91.3766 10.1994C90.7158 10.5578 90.1562 11.0774 89.75 11.71V10H86V22H90V15.47C89.956 15.1525 89.9801 14.8292 90.0706 14.5216C90.1611 14.2141 90.316 13.9294 90.525 13.6863C90.7341 13.4432 90.9924 13.2474 91.2829 13.1118C91.5734 12.9763 91.8894 12.9041 92.21 12.9C93.31 12.9 94 13.49 94 15.42V22H98V14.56Z",fill:"#0A66C2"})})}),Dg=C$({reducer:{user:L$}}),J6=K.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`,Z6=K.main`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 10px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    padding-bottom: 4px;
  }

  p {
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-top: 24px;
      padding: 16px 12px;
      border-radius: 4px;
      border: 1px solid #222;
      font-size: 16px;
      width: 100%;

      :focus {
        outline-color: #0a66c2;
      }
    }

    a {
      width: auto;
      font-weight: 600;
      color: #0a66c2;
      padding: 8px 12px;
      margin-left: -12px;
      margin-top: 16px;
      border-radius: 16px;

      :hover {
        background: #d0e8ff;
      }
    }

    button {
      background: #0a66c2;
      color: #fff;
      padding: 14px 24px;
      font-weight: 600;
      font-size: 16px;
      border: none;
      margin-top: 16px;
      border-radius: 28px;
      width: 100%;
      cursor: pointer;

      :hover {
        background: #004182;
      }
    }
  }
`,eL=K.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  a {
    width: auto;
    font-weight: 600;
    color: #0a66c2;
    padding: 8px 12px;
    margin-top: 16px;
    border-radius: 16px;

    :hover {
      background: #d0e8ff;
    }
  }
`,tL=()=>{const t=Nc(),e=async r=>{r.preventDefault();const i=r.target.email.value,s=r.target.password.value,a=(await aR(lh,i,s)).user;Dg.dispatch({type:"user/login",payload:{displayName:a.displayName,email:a.email,photoUrl:a.photoURL,uid:a.uid}}),t("/")},{user:n}=As(r=>r.user);return n?T(hm,{to:"/"}):z(J6,{children:[T(es,{children:T("title",{children:"Entrar ou cadastrar-se no linkedIn | LinkedIn"})}),T(p_,{}),z(Z6,{children:[T("h1",{children:"Entrar"}),T("p",{children:"Acompanhe as novidades do seu mundo profissional"}),z("form",{onSubmit:e,children:[T("input",{type:"email",name:"email",placeholder:"E-mail"}),T("input",{type:"password",name:"password",placeholder:"Senha",minLength:8}),T("a",{href:"#",children:"Esqueceu a senha?"}),T("button",{type:"submit",children:"Entrar"})]})]}),T(eL,{children:z("p",{children:["Novo no LinkedIn? ",T(RE,{to:"/signup",children:"Cadastre-se"})]})}),T(f_,{})]})},nL=K.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background: #fff;
  min-height: 100vh;
`,rL=K.main`
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 24px;
  border-radius: 10px;
  min-width: 376px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    padding-bottom: 4px;
  }

  p {
    font-size: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    input {
      margin-top: 24px;
      padding: 16px 12px;
      border-radius: 4px;
      border: 1px solid #222;
      font-size: 16px;
      width: 100%;

      :focus {
        outline-color: #0a66c2;
      }
    }

    a {
      width: auto;
      font-weight: 600;
      color: #0a66c2;
      padding: 8px 12px;
      margin-left: -12px;
      margin-top: 16px;
      border-radius: 16px;

      :hover {
        background: #d0e8ff;
      }
    }

    button {
      background: #0a66c2;
      color: #fff;
      padding: 14px 24px;
      font-weight: 600;
      font-size: 16px;
      border: none;
      margin-top: 16px;
      border-radius: 28px;
      width: 100%;
      cursor: pointer;

      :hover {
        background: #004182;
      }
    }
  }
`,iL=K.div`
  display: flex;
  margin-top: 32px;
  justify-content: center;
  a {
    width: auto;
    font-weight: 600;
    color: #0a66c2;
    padding: 8px 12px;
    margin-top: 16px;
    border-radius: 16px;

    :hover {
      background: #d0e8ff;
    }
  }
`,sL=()=>{const t=Nc(),e=async r=>{r.preventDefault();const i="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-e99cf.appspot.com/o/default_profile.jpg?alt=media&token=c5bdeb48-b789-42f0-9958-3e890475b672",s=r.target.email.value.trim(),o=r.target.name.value.trim(),a=r.target.image.value.trim(),l=r.target.password.value,u=r.target.password2.value;if(l!==u){alert("As senhas não são iguais");return}try{const h=(await oR(lh,s,l)).user;uR(h,{displayName:o,photoURL:a||i}).then(()=>{Dg.dispatch({type:"user/login",payload:{displayName:h.displayName,email:h.displayName,photoUrl:h.photoURL,uid:h.uid}})}),t("/")}catch(c){c.code==="auth/email-already-in-use"?alert("O email já está vinculado a uma conta"):alert("Um erro ocorreu")}},{user:n}=As(r=>r.user);return n?T(hm,{to:"/"}):z(nL,{children:[T(es,{children:T("title",{children:"Cadastre-se | LinkedIn"})}),T(p_,{}),z(rL,{children:[T("h1",{children:"Cadastre-se"}),T("p",{children:"Aproveite sua vida profissional ao máximo"}),z("form",{onSubmit:e,children:[T("input",{type:"email",name:"email",placeholder:"E-mail",required:!0}),T("input",{type:"text",name:"name",placeholder:"Nome completo",required:!0}),T("input",{type:"url",name:"image",placeholder:"URL da imagem de perfil"}),T("input",{type:"password",name:"password",placeholder:"Senha",required:!0,minLength:8}),T("input",{type:"password",name:"password2",placeholder:"Confirmação de senha",required:!0,minLength:8}),T("button",{type:"submit",children:"Cadastre-se"})]})]}),T(iL,{children:z("p",{children:["Já se cadastrou no LinkedIn? ",T(RE,{to:"/login",children:"Entre"})]})}),T(f_,{})]})},oL=()=>T(Wx,{children:T(jx,{children:z(ro,{path:"",element:T(M$,{}),children:[T(ro,{path:"",element:T(Q6,{})}),T(ro,{path:"/login",element:T(tL,{})}),T(ro,{path:"/signup",element:T(sL,{})})]})})});yd.createRoot(document.getElementById("root")).render(T(Ae.StrictMode,{children:T(Uk,{store:Dg,children:T(oL,{})})}));
