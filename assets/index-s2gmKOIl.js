(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function cC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hv={exports:{}},Fu={},Kv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),hC=Symbol.for("react.portal"),dC=Symbol.for("react.fragment"),fC=Symbol.for("react.strict_mode"),pC=Symbol.for("react.profiler"),mC=Symbol.for("react.provider"),gC=Symbol.for("react.context"),_C=Symbol.for("react.forward_ref"),yC=Symbol.for("react.suspense"),vC=Symbol.for("react.memo"),wC=Symbol.for("react.lazy"),Wg=Symbol.iterator;function EC(t){return t===null||typeof t!="object"?null:(t=Wg&&t[Wg]||t["@@iterator"],typeof t=="function"?t:null)}var Gv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qv=Object.assign,Yv={};function vs(t,e,n){this.props=t,this.context=e,this.refs=Yv,this.updater=n||Gv}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xv(){}Xv.prototype=vs.prototype;function xf(t,e,n){this.props=t,this.context=e,this.refs=Yv,this.updater=n||Gv}var Af=xf.prototype=new Xv;Af.constructor=xf;Qv(Af,vs.prototype);Af.isPureReactComponent=!0;var qg=Array.isArray,Jv=Object.prototype.hasOwnProperty,Rf={current:null},Zv={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jv.call(e,r)&&!Zv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:Rf.current}}function TC(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function IC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hg=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?IC(""+t.key):e.toString(36)}function El(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case hC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,qg(i)?(n="",t!=null&&(n=t.replace(Hg,"$&/")+"/"),El(i,e,n,"",function(c){return c})):i!=null&&(Pf(i)&&(i=TC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",qg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+eh(s,l);o+=El(s,e,n,u,i)}else if(u=EC(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,l++),o+=El(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return El(t,r,"","",function(s){return e.call(n,s,i++)}),r}function SC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Tl={transition:null},CC={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:Rf};function t0(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!Pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=vs;re.Fragment=dC;re.Profiler=pC;re.PureComponent=xf;re.StrictMode=fC;re.Suspense=yC;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CC;re.act=t0;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Jv.call(e,u)&&!Zv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:gC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mC,_context:t},t.Consumer=t};re.createElement=e0;re.createFactory=function(t){var e=e0.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:_C,render:t}};re.isValidElement=Pf;re.lazy=function(t){return{$$typeof:wC,_payload:{_status:-1,_result:t},_init:SC}};re.memo=function(t,e){return{$$typeof:vC,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};re.unstable_act=t0;re.useCallback=function(t,e){return vt.current.useCallback(t,e)};re.useContext=function(t){return vt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};re.useEffect=function(t,e){return vt.current.useEffect(t,e)};re.useId=function(){return vt.current.useId()};re.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return vt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};re.useRef=function(t){return vt.current.useRef(t)};re.useState=function(t){return vt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return vt.current.useTransition()};re.version="18.3.1";Kv.exports=re;var H=Kv.exports;const kC=cC(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xC=H,AC=Symbol.for("react.element"),RC=Symbol.for("react.fragment"),PC=Object.prototype.hasOwnProperty,NC=xC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,DC={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)PC.call(e,r)&&!DC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:AC,type:t,key:s,ref:o,props:i,_owner:NC.current}}Fu.Fragment=RC;Fu.jsx=n0;Fu.jsxs=n0;Hv.exports=Fu;var _=Hv.exports,Yh={},r0={exports:{}},Ut={},i0={exports:{}},s0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var Z=B.length;B.push(Y);e:for(;0<Z;){var Se=Z-1>>>1,fe=B[Se];if(0<i(fe,Y))B[Se]=Y,B[Z]=fe,Z=Se;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],Z=B.pop();if(Z!==Y){B[0]=Z;e:for(var Se=0,fe=B.length,De=fe>>>1;Se<De;){var In=2*(Se+1)-1,Sn=B[In],Cn=In+1,kn=B[Cn];if(0>i(Sn,Z))Cn<fe&&0>i(kn,Sn)?(B[Se]=kn,B[Cn]=Z,Se=Cn):(B[Se]=Sn,B[In]=Z,Se=In);else if(Cn<fe&&0>i(kn,Z))B[Se]=kn,B[Cn]=Z,Se=Cn;else break e}}return Y}function i(B,Y){var Z=B.sortIndex-Y.sortIndex;return Z!==0?Z:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,w=!1,k=!1,N=!1,b=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(B){for(var Y=n(c);Y!==null;){if(Y.callback===null)r(c);else if(Y.startTime<=B)r(c),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(c)}}function M(B){if(N=!1,x(B),!k)if(n(u)!==null)k=!0,Ns(L);else{var Y=n(c);Y!==null&&Tn(M,Y.startTime-B)}}function L(B,Y){k=!1,N&&(N=!1,C(y),y=-1),w=!0;var Z=m;try{for(x(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||B&&!A());){var Se=p.callback;if(typeof Se=="function"){p.callback=null,m=p.priorityLevel;var fe=Se(p.expirationTime<=Y);Y=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),x(Y)}else r(u);p=n(u)}if(p!==null)var De=!0;else{var In=n(c);In!==null&&Tn(M,In.startTime-Y),De=!1}return De}finally{p=null,m=Z,w=!1}}var O=!1,E=null,y=-1,v=5,I=-1;function A(){return!(t.unstable_now()-I<v)}function R(){if(E!==null){var B=t.unstable_now();I=B;var Y=!0;try{Y=E(!0,B)}finally{Y?S():(O=!1,E=null)}}else O=!1}var S;if(typeof T=="function")S=function(){T(R)};else if(typeof MessageChannel<"u"){var Bt=new MessageChannel,br=Bt.port2;Bt.port1.onmessage=R,S=function(){br.postMessage(null)}}else S=function(){b(R,0)};function Ns(B){E=B,O||(O=!0,S())}function Tn(B,Y){y=b(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||w||(k=!0,Ns(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return B()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=m;m=B;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function(B,Y,Z){var Se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Se+Z:Se):Z=Se,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,B={id:d++,callback:Y,priorityLevel:B,startTime:Z,expirationTime:fe,sortIndex:-1},Z>Se?(B.sortIndex=Z,e(c,B),n(u)===null&&B===n(c)&&(N?(C(y),y=-1):N=!0,Tn(M,Z-Se))):(B.sortIndex=fe,e(u,B),k||w||(k=!0,Ns(L))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var Y=m;return function(){var Z=m;m=Y;try{return B.apply(this,arguments)}finally{m=Z}}}})(s0);i0.exports=s0;var bC=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MC=H,jt=bC;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o0=new Set,Do={};function mi(t,e){ts(t,e),ts(t+"Capture",e)}function ts(t,e){for(Do[t]=e,t=0;t<e.length;t++)o0.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=Object.prototype.hasOwnProperty,OC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kg={},Gg={};function VC(t){return Xh.call(Gg,t)?!0:Xh.call(Kg,t)?!1:OC.test(t)?Gg[t]=!0:(Kg[t]=!0,!1)}function LC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function FC(t,e,n,r){if(e===null||typeof e>"u"||LC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Df);et[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Df);et[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Df);et[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(FC(e,n,i,r)&&(n=null),r||i===null?VC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=MC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Mf=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Vf=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),Qg=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Qg&&t[Qg]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,th;function io(t){if(th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);th=e&&e[1]||""}return`
`+th+t}var nh=!1;function rh(t,e){if(!t||nh)return"";nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function jC(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=rh(t.type,!1),t;case 11:return t=rh(t.type.render,!1),t;case 1:return t=rh(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case Ni:return"Portal";case Jh:return"Profiler";case Mf:return"StrictMode";case Zh:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vf:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function UC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===Mf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zC(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=zC(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function rd(t,e){d0(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(so(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function f0(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,m0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},BC=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){BC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function g0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=g0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $C=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if($C[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cd=null,Hi=null,Ki=null;function e_(t){if(t=ma(t)){if(typeof cd!="function")throw Error(j(280));var e=t.stateNode;e&&(e=$u(e),cd(t.stateNode,t.type,e))}}function y0(t){Hi?Ki?Ki.push(t):Ki=[t]:Hi=t}function v0(){if(Hi){var t=Hi,e=Ki;if(Ki=Hi=null,e_(t),e)for(t=0;t<e.length;t++)e_(e[t])}}function w0(t,e){return t(e)}function E0(){}var ih=!1;function T0(t,e,n){if(ih)return t(e,n);ih=!0;try{return w0(t,e,n)}finally{ih=!1,(Hi!==null||Ki!==null)&&(E0(),v0())}}function Mo(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var hd=!1;if(Ln)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){hd=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{hd=!1}function WC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var po=!1,$l=null,Wl=!1,dd=null,qC={onError:function(t){po=!0,$l=t}};function HC(t,e,n,r,i,s,o,l,u){po=!1,$l=null,WC.apply(qC,arguments)}function KC(t,e,n,r,i,s,o,l,u){if(HC.apply(this,arguments),po){if(po){var c=$l;po=!1,$l=null}else throw Error(j(198));Wl||(Wl=!0,dd=c)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function t_(t){if(gi(t)!==t)throw Error(j(188))}function GC(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return t_(i),t;if(s===r)return t_(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function S0(t){return t=GC(t),t!==null?C0(t):null}function C0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=C0(t);if(e!==null)return e;t=t.sibling}return null}var k0=jt.unstable_scheduleCallback,n_=jt.unstable_cancelCallback,QC=jt.unstable_shouldYield,YC=jt.unstable_requestPaint,Me=jt.unstable_now,XC=jt.unstable_getCurrentPriorityLevel,Ff=jt.unstable_ImmediatePriority,x0=jt.unstable_UserBlockingPriority,ql=jt.unstable_NormalPriority,JC=jt.unstable_LowPriority,A0=jt.unstable_IdlePriority,ju=null,gn=null;function ZC(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(ju,t,void 0,(t.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:nk,ek=Math.log,tk=Math.LN2;function nk(t){return t>>>=0,t===0?32:31-(ek(t)/tk|0)|0}var el=64,tl=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=oo(l):(s&=o,s!==0&&(r=oo(s)))}else o=n&~i,o!==0?r=oo(o):s!==0&&(r=oo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-sn(e),i=1<<n,r|=t[n],e&=~i;return r}function rk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ik(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-sn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=rk(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-sn(e),t[e]=n}function sk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-sn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var he=0;function P0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var N0,Uf,D0,b0,M0,pd=!1,nl=[],or=null,ar=null,lr=null,Oo=new Map,Vo=new Map,tr=[],ok="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function r_(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function Ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ma(e),e!==null&&Uf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ak(t,e,n,r,i){switch(e){case"focusin":return or=Ks(or,t,e,n,r,i),!0;case"dragenter":return ar=Ks(ar,t,e,n,r,i),!0;case"mouseover":return lr=Ks(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,Ks(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,Ks(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function O0(t){var e=Br(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=I0(n),e!==null){t.blockedOn=e,M0(t.priority,function(){D0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Il(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ud=r,n.target.dispatchEvent(r),ud=null}else return e=ma(n),e!==null&&Uf(e),t.blockedOn=n,!1;e.shift()}return!0}function i_(t,e,n){Il(t)&&n.delete(e)}function lk(){pd=!1,or!==null&&Il(or)&&(or=null),ar!==null&&Il(ar)&&(ar=null),lr!==null&&Il(lr)&&(lr=null),Oo.forEach(i_),Vo.forEach(i_)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,lk)))}function Lo(t){function e(i){return Gs(i,t)}if(0<nl.length){Gs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Gs(or,t),ar!==null&&Gs(ar,t),lr!==null&&Gs(lr,t),Oo.forEach(e),Vo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&tr.shift()}var Gi=Kn.ReactCurrentBatchConfig,Kl=!0;function uk(t,e,n,r){var i=he,s=Gi.transition;Gi.transition=null;try{he=1,zf(t,e,n,r)}finally{he=i,Gi.transition=s}}function ck(t,e,n,r){var i=he,s=Gi.transition;Gi.transition=null;try{he=4,zf(t,e,n,r)}finally{he=i,Gi.transition=s}}function zf(t,e,n,r){if(Kl){var i=md(t,e,n,r);if(i===null)mh(t,e,r,Gl,n),r_(t,r);else if(ak(i,t,e,n,r))r.stopPropagation();else if(r_(t,r),e&4&&-1<ok.indexOf(t)){for(;i!==null;){var s=ma(i);if(s!==null&&N0(s),s=md(t,e,n,r),s===null&&mh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mh(t,e,r,null,n)}}var Gl=null;function md(t,e,n,r){if(Gl=null,t=Lf(r),t=Br(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function V0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XC()){case Ff:return 1;case x0:return 4;case ql:case JC:return 16;case A0:return 536870912;default:return 16}default:return 16}}var rr=null,Bf=null,Sl=null;function L0(){if(Sl)return Sl;var t,e=Bf,n=e.length,r,i="value"in rr?rr.value:rr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Sl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function s_(){return!1}function zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:s_,this.isPropagationStopped=s_,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=zt(ws),pa=xe({},ws,{view:0,detail:0}),hk=zt(pa),oh,ah,Qs,Uu=xe({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(oh=t.screenX-Qs.screenX,ah=t.screenY-Qs.screenY):ah=oh=0,Qs=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:ah}}),o_=zt(Uu),dk=xe({},Uu,{dataTransfer:0}),fk=zt(dk),pk=xe({},pa,{relatedTarget:0}),lh=zt(pk),mk=xe({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),gk=zt(mk),_k=xe({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yk=zt(_k),vk=xe({},ws,{data:0}),a_=zt(vk),wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ik(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tk[t])?!!e[t]:!1}function Wf(){return Ik}var Sk=xe({},pa,{key:function(t){if(t.key){var e=wk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ek[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ck=zt(Sk),kk=xe({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l_=zt(kk),xk=xe({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),Ak=zt(xk),Rk=xe({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pk=zt(Rk),Nk=xe({},Uu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=zt(Nk),bk=[9,13,27,32],qf=Ln&&"CompositionEvent"in window,mo=null;Ln&&"documentMode"in document&&(mo=document.documentMode);var Mk=Ln&&"TextEvent"in window&&!mo,F0=Ln&&(!qf||mo&&8<mo&&11>=mo),u_=" ",c_=!1;function j0(t,e){switch(t){case"keyup":return bk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function Ok(t,e){switch(t){case"compositionend":return U0(e);case"keypress":return e.which!==32?null:(c_=!0,u_);case"textInput":return t=e.data,t===u_&&c_?null:t;default:return null}}function Vk(t,e){if(bi)return t==="compositionend"||!qf&&j0(t,e)?(t=L0(),Sl=Bf=rr=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F0&&e.locale!=="ko"?null:e.data;default:return null}}var Lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lk[t.type]:e==="textarea"}function z0(t,e,n,r){y0(r),e=Ql(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Fo=null;function Fk(t){J0(t,0)}function zu(t){var e=Vi(t);if(h0(e))return t}function jk(t,e){if(t==="change")return e}var B0=!1;if(Ln){var uh;if(Ln){var ch="oninput"in document;if(!ch){var d_=document.createElement("div");d_.setAttribute("oninput","return;"),ch=typeof d_.oninput=="function"}uh=ch}else uh=!1;B0=uh&&(!document.documentMode||9<document.documentMode)}function f_(){go&&(go.detachEvent("onpropertychange",$0),Fo=go=null)}function $0(t){if(t.propertyName==="value"&&zu(Fo)){var e=[];z0(e,Fo,t,Lf(t)),T0(Fk,e)}}function Uk(t,e,n){t==="focusin"?(f_(),go=e,Fo=n,go.attachEvent("onpropertychange",$0)):t==="focusout"&&f_()}function zk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Fo)}function Bk(t,e){if(t==="click")return zu(e)}function $k(t,e){if(t==="input"||t==="change")return zu(e)}function Wk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:Wk;function jo(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xh.call(e,i)||!un(t[i],e[i]))return!1}return!0}function p_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function m_(t,e){var n=p_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=p_(n)}}function W0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?W0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function q0(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qk(t){var e=q0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&W0(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=m_(n,s);var o=m_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hk=Ln&&"documentMode"in document&&11>=document.documentMode,Mi=null,gd=null,_o=null,_d=!1;function g_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_d||Mi==null||Mi!==Bl(r)||(r=Mi,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&jo(_o,r)||(_o=r,r=Ql(gd,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mi)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},hh={},H0={};Ln&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Bu(t){if(hh[t])return hh[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H0)return hh[t]=e[n];return t}var K0=Bu("animationend"),G0=Bu("animationiteration"),Q0=Bu("animationstart"),Y0=Bu("transitionend"),X0=new Map,__="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){X0.set(t,e),mi(e,[t])}for(var dh=0;dh<__.length;dh++){var fh=__[dh],Kk=fh.toLowerCase(),Gk=fh[0].toUpperCase()+fh.slice(1);xr(Kk,"on"+Gk)}xr(K0,"onAnimationEnd");xr(G0,"onAnimationIteration");xr(Q0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Y0,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function y_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,KC(r,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;y_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;y_(i,l,c),s=u}}}if(Wl)throw t=dd,Wl=!1,dd=null,t}function ve(t,e){var n=e[Td];n===void 0&&(n=e[Td]=new Set);var r=t+"__bubble";n.has(r)||(Z0(e,t,2,!1),n.add(r))}function ph(t,e,n){var r=0;e&&(r|=4),Z0(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[sl]){t[sl]=!0,o0.forEach(function(n){n!=="selectionchange"&&(Qk.has(n)||ph(n,!1,t),ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,ph("selectionchange",!1,e))}}function Z0(t,e,n,r){switch(V0(e)){case 1:var i=uk;break;case 4:i=ck;break;default:i=zf}n=i.bind(null,e,n,t),i=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}T0(function(){var c=s,d=Lf(n),p=[];e:{var m=X0.get(t);if(m!==void 0){var w=$f,k=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":w=Ck;break;case"focusin":k="focus",w=lh;break;case"focusout":k="blur",w=lh;break;case"beforeblur":case"afterblur":w=lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=o_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=fk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Ak;break;case K0:case G0:case Q0:w=gk;break;case Y0:w=Pk;break;case"scroll":w=hk;break;case"wheel":w=Dk;break;case"copy":case"cut":case"paste":w=yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=l_}var N=(e&4)!==0,b=!N&&t==="scroll",C=N?m!==null?m+"Capture":null:m;N=[];for(var T=c,x;T!==null;){x=T;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,C!==null&&(M=Mo(T,C),M!=null&&N.push(zo(T,M,x)))),b)break;T=T.return}0<N.length&&(m=new w(m,k,null,n,d),p.push({event:m,listeners:N}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==ud&&(k=n.relatedTarget||n.fromElement)&&(Br(k)||k[Fn]))break e;if((w||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=n.relatedTarget||n.toElement,w=c,k=k?Br(k):null,k!==null&&(b=gi(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=c),w!==k)){if(N=o_,M="onMouseLeave",C="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(N=l_,M="onPointerLeave",C="onPointerEnter",T="pointer"),b=w==null?m:Vi(w),x=k==null?m:Vi(k),m=new N(M,T+"leave",w,n,d),m.target=b,m.relatedTarget=x,M=null,Br(d)===c&&(N=new N(C,T+"enter",k,n,d),N.target=x,N.relatedTarget=b,M=N),b=M,w&&k)t:{for(N=w,C=k,T=0,x=N;x;x=ki(x))T++;for(x=0,M=C;M;M=ki(M))x++;for(;0<T-x;)N=ki(N),T--;for(;0<x-T;)C=ki(C),x--;for(;T--;){if(N===C||C!==null&&N===C.alternate)break t;N=ki(N),C=ki(C)}N=null}else N=null;w!==null&&v_(p,m,w,N,!1),k!==null&&b!==null&&v_(p,b,k,N,!0)}}e:{if(m=c?Vi(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var L=jk;else if(h_(m))if(B0)L=$k;else{L=zk;var O=Uk}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=Bk);if(L&&(L=L(t,c))){z0(p,L,n,d);break e}O&&O(t,m,c),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&id(m,"number",m.value)}switch(O=c?Vi(c):window,t){case"focusin":(h_(O)||O.contentEditable==="true")&&(Mi=O,gd=c,_o=null);break;case"focusout":_o=gd=Mi=null;break;case"mousedown":_d=!0;break;case"contextmenu":case"mouseup":case"dragend":_d=!1,g_(p,n,d);break;case"selectionchange":if(Hk)break;case"keydown":case"keyup":g_(p,n,d)}var E;if(qf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else bi?j0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(F0&&n.locale!=="ko"&&(bi||y!=="onCompositionStart"?y==="onCompositionEnd"&&bi&&(E=L0()):(rr=d,Bf="value"in rr?rr.value:rr.textContent,bi=!0)),O=Ql(c,y),0<O.length&&(y=new a_(y,t,null,n,d),p.push({event:y,listeners:O}),E?y.data=E:(E=U0(n),E!==null&&(y.data=E)))),(E=Mk?Ok(t,n):Vk(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new a_("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}J0(p,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Mo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=Mo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function v_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Mo(n,s),u!=null&&o.unshift(zo(n,u,l))):i||(u=Mo(n,s),u!=null&&o.push(zo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Yk=/\r\n?/g,Xk=/\u0000|\uFFFD/g;function w_(t){return(typeof t=="string"?t:""+t).replace(Yk,`
`).replace(Xk,"")}function ol(t,e,n){if(e=w_(e),w_(t)!==e&&n)throw Error(j(425))}function Yl(){}var yd=null,vd=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,Jk=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,Zk=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(t){return E_.resolve(null).then(t).catch(ex)}:Ed;function ex(t){setTimeout(function(){throw t})}function gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Lo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function T_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),fn="__reactFiber$"+Es,Bo="__reactProps$"+Es,Fn="__reactContainer$"+Es,Td="__reactEvents$"+Es,tx="__reactListeners$"+Es,nx="__reactHandles$"+Es;function Br(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=T_(t);t!==null;){if(n=t[fn])return n;t=T_(t)}return e}t=n,n=t.parentNode}return null}function ma(t){return t=t[fn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function $u(t){return t[Bo]||null}var Id=[],Li=-1;function Ar(t){return{current:t}}function Te(t){0>Li||(t.current=Id[Li],Id[Li]=null,Li--)}function _e(t,e){Li++,Id[Li]=t.current,t.current=e}var Er={},ft=Ar(Er),Ct=Ar(!1),Xr=Er;function ns(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function kt(t){return t=t.childContextTypes,t!=null}function Xl(){Te(Ct),Te(ft)}function I_(t,e,n){if(ft.current!==Er)throw Error(j(168));_e(ft,e),_e(Ct,n)}function ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,UC(t)||"Unknown",i));return xe({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Xr=ft.current,_e(ft,t),_e(Ct,Ct.current),!0}function S_(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=ew(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,Te(Ct),Te(ft),_e(ft,t)):Te(Ct),_e(Ct,n)}var Pn=null,Wu=!1,_h=!1;function tw(t){Pn===null?Pn=[t]:Pn.push(t)}function rx(t){Wu=!0,tw(t)}function Rr(){if(!_h&&Pn!==null){_h=!0;var t=0,e=he;try{var n=Pn;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,Wu=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),k0(Ff,Rr),i}finally{he=e,_h=!1}}return null}var Fi=[],ji=0,Zl=null,eu=0,$t=[],Wt=0,Jr=null,Nn=1,Dn="";function Fr(t,e){Fi[ji++]=eu,Fi[ji++]=Zl,Zl=t,eu=e}function nw(t,e,n){$t[Wt++]=Nn,$t[Wt++]=Dn,$t[Wt++]=Jr,Jr=t;var r=Nn;t=Dn;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-sn(e)+i|n<<i|r,Dn=s+t}else Nn=1<<s|n<<i|r,Dn=t}function Kf(t){t.return!==null&&(Fr(t,1),nw(t,1,0))}function Gf(t){for(;t===Zl;)Zl=Fi[--ji],Fi[ji]=null,eu=Fi[--ji],Fi[ji]=null;for(;t===Jr;)Jr=$t[--Wt],$t[Wt]=null,Dn=$t[--Wt],$t[Wt]=null,Nn=$t[--Wt],$t[Wt]=null}var Ot=null,bt=null,Ie=!1,en=null;function rw(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function C_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,bt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,bt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Nn,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,bt=null,!0):!1;default:return!1}}function Sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Cd(t){if(Ie){var e=bt;if(e){var n=e;if(!C_(t,e)){if(Sd(t))throw Error(j(418));e=ur(n.nextSibling);var r=Ot;e&&C_(t,e)?rw(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Ot=t)}}else{if(Sd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ie=!1,Ot=t}}}function k_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function al(t){if(t!==Ot)return!1;if(!Ie)return k_(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=bt)){if(Sd(t))throw iw(),Error(j(418));for(;e;)rw(t,e),e=ur(e.nextSibling)}if(k_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bt=null}}else bt=Ot?ur(t.stateNode.nextSibling):null;return!0}function iw(){for(var t=bt;t;)t=ur(t.nextSibling)}function rs(){bt=Ot=null,Ie=!1}function Qf(t){en===null?en=[t]:en.push(t)}var ix=Kn.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function x_(t){var e=t._init;return e(t._payload)}function sw(t){function e(C,T){if(t){var x=C.deletions;x===null?(C.deletions=[T],C.flags|=16):x.push(T)}}function n(C,T){if(!t)return null;for(;T!==null;)e(C,T),T=T.sibling;return null}function r(C,T){for(C=new Map;T!==null;)T.key!==null?C.set(T.key,T):C.set(T.index,T),T=T.sibling;return C}function i(C,T){return C=fr(C,T),C.index=0,C.sibling=null,C}function s(C,T,x){return C.index=x,t?(x=C.alternate,x!==null?(x=x.index,x<T?(C.flags|=2,T):x):(C.flags|=2,T)):(C.flags|=1048576,T)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,T,x,M){return T===null||T.tag!==6?(T=Sh(x,C.mode,M),T.return=C,T):(T=i(T,x),T.return=C,T)}function u(C,T,x,M){var L=x.type;return L===Di?d(C,T,x.props.children,M,x.key):T!==null&&(T.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Zn&&x_(L)===T.type)?(M=i(T,x.props),M.ref=Ys(C,T,x),M.return=C,M):(M=Dl(x.type,x.key,x.props,null,C.mode,M),M.ref=Ys(C,T,x),M.return=C,M)}function c(C,T,x,M){return T===null||T.tag!==4||T.stateNode.containerInfo!==x.containerInfo||T.stateNode.implementation!==x.implementation?(T=Ch(x,C.mode,M),T.return=C,T):(T=i(T,x.children||[]),T.return=C,T)}function d(C,T,x,M,L){return T===null||T.tag!==7?(T=Qr(x,C.mode,M,L),T.return=C,T):(T=i(T,x),T.return=C,T)}function p(C,T,x){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Sh(""+T,C.mode,x),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Xa:return x=Dl(T.type,T.key,T.props,null,C.mode,x),x.ref=Ys(C,null,T),x.return=C,x;case Ni:return T=Ch(T,C.mode,x),T.return=C,T;case Zn:var M=T._init;return p(C,M(T._payload),x)}if(so(T)||qs(T))return T=Qr(T,C.mode,x,null),T.return=C,T;ll(C,T)}return null}function m(C,T,x,M){var L=T!==null?T.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return L!==null?null:l(C,T,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return x.key===L?u(C,T,x,M):null;case Ni:return x.key===L?c(C,T,x,M):null;case Zn:return L=x._init,m(C,T,L(x._payload),M)}if(so(x)||qs(x))return L!==null?null:d(C,T,x,M,null);ll(C,x)}return null}function w(C,T,x,M,L){if(typeof M=="string"&&M!==""||typeof M=="number")return C=C.get(x)||null,l(T,C,""+M,L);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Xa:return C=C.get(M.key===null?x:M.key)||null,u(T,C,M,L);case Ni:return C=C.get(M.key===null?x:M.key)||null,c(T,C,M,L);case Zn:var O=M._init;return w(C,T,x,O(M._payload),L)}if(so(M)||qs(M))return C=C.get(x)||null,d(T,C,M,L,null);ll(T,M)}return null}function k(C,T,x,M){for(var L=null,O=null,E=T,y=T=0,v=null;E!==null&&y<x.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var I=m(C,E,x[y],M);if(I===null){E===null&&(E=v);break}t&&E&&I.alternate===null&&e(C,E),T=s(I,T,y),O===null?L=I:O.sibling=I,O=I,E=v}if(y===x.length)return n(C,E),Ie&&Fr(C,y),L;if(E===null){for(;y<x.length;y++)E=p(C,x[y],M),E!==null&&(T=s(E,T,y),O===null?L=E:O.sibling=E,O=E);return Ie&&Fr(C,y),L}for(E=r(C,E);y<x.length;y++)v=w(E,C,y,x[y],M),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),T=s(v,T,y),O===null?L=v:O.sibling=v,O=v);return t&&E.forEach(function(A){return e(C,A)}),Ie&&Fr(C,y),L}function N(C,T,x,M){var L=qs(x);if(typeof L!="function")throw Error(j(150));if(x=L.call(x),x==null)throw Error(j(151));for(var O=L=null,E=T,y=T=0,v=null,I=x.next();E!==null&&!I.done;y++,I=x.next()){E.index>y?(v=E,E=null):v=E.sibling;var A=m(C,E,I.value,M);if(A===null){E===null&&(E=v);break}t&&E&&A.alternate===null&&e(C,E),T=s(A,T,y),O===null?L=A:O.sibling=A,O=A,E=v}if(I.done)return n(C,E),Ie&&Fr(C,y),L;if(E===null){for(;!I.done;y++,I=x.next())I=p(C,I.value,M),I!==null&&(T=s(I,T,y),O===null?L=I:O.sibling=I,O=I);return Ie&&Fr(C,y),L}for(E=r(C,E);!I.done;y++,I=x.next())I=w(E,C,y,I.value,M),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),T=s(I,T,y),O===null?L=I:O.sibling=I,O=I);return t&&E.forEach(function(R){return e(C,R)}),Ie&&Fr(C,y),L}function b(C,T,x,M){if(typeof x=="object"&&x!==null&&x.type===Di&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:e:{for(var L=x.key,O=T;O!==null;){if(O.key===L){if(L=x.type,L===Di){if(O.tag===7){n(C,O.sibling),T=i(O,x.props.children),T.return=C,C=T;break e}}else if(O.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Zn&&x_(L)===O.type){n(C,O.sibling),T=i(O,x.props),T.ref=Ys(C,O,x),T.return=C,C=T;break e}n(C,O);break}else e(C,O);O=O.sibling}x.type===Di?(T=Qr(x.props.children,C.mode,M,x.key),T.return=C,C=T):(M=Dl(x.type,x.key,x.props,null,C.mode,M),M.ref=Ys(C,T,x),M.return=C,C=M)}return o(C);case Ni:e:{for(O=x.key;T!==null;){if(T.key===O)if(T.tag===4&&T.stateNode.containerInfo===x.containerInfo&&T.stateNode.implementation===x.implementation){n(C,T.sibling),T=i(T,x.children||[]),T.return=C,C=T;break e}else{n(C,T);break}else e(C,T);T=T.sibling}T=Ch(x,C.mode,M),T.return=C,C=T}return o(C);case Zn:return O=x._init,b(C,T,O(x._payload),M)}if(so(x))return k(C,T,x,M);if(qs(x))return N(C,T,x,M);ll(C,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,T!==null&&T.tag===6?(n(C,T.sibling),T=i(T,x),T.return=C,C=T):(n(C,T),T=Sh(x,C.mode,M),T.return=C,C=T),o(C)):n(C,T)}return b}var is=sw(!0),ow=sw(!1),tu=Ar(null),nu=null,Ui=null,Yf=null;function Xf(){Yf=Ui=nu=null}function Jf(t){var e=tu.current;Te(tu),t._currentValue=e}function kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){nu=t,Yf=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Gt(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(nu===null)throw Error(j(308));Ui=t,nu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var $r=null;function Zf(t){$r===null?$r=[t]:$r.push(t)}function aw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jf(t,n)}}function A_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,w=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,N=l;switch(m=e,w=n,N.tag){case 1:if(k=N.payload,typeof k=="function"){p=k.call(w,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,m=typeof k=="function"?k.call(w,p,m):k,m==null)break e;p=xe({},p,m);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=w,u=p):d=d.next=w,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=p}}function R_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ga={},_n=Ar(ga),$o=Ar(ga),Wo=Ar(ga);function Wr(t){if(t===ga)throw Error(j(174));return t}function tp(t,e){switch(_e(Wo,e),_e($o,t),_e(_n,ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}Te(_n),_e(_n,e)}function ss(){Te(_n),Te($o),Te(Wo)}function uw(t){Wr(Wo.current);var e=Wr(_n.current),n=od(e,t.type);e!==n&&(_e($o,t),_e(_n,n))}function np(t){$o.current===t&&(Te(_n),Te($o))}var Ce=Ar(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function rp(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var xl=Kn.ReactCurrentDispatcher,vh=Kn.ReactCurrentBatchConfig,Zr=0,ke=null,je=null,qe=null,su=!1,yo=!1,qo=0,sx=0;function st(){throw Error(j(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function sp(t,e,n,r,i,s){if(Zr=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xl.current=t===null||t.memoizedState===null?ux:cx,t=n(r,i),yo){s=0;do{if(yo=!1,qo=0,25<=s)throw Error(j(301));s+=1,qe=je=null,e.updateQueue=null,xl.current=hx,t=n(r,i)}while(yo)}if(xl.current=ou,e=je!==null&&je.next!==null,Zr=0,qe=je=ke=null,su=!1,e)throw Error(j(300));return t}function op(){var t=qo!==0;return qo=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=t:qe=qe.next=t,qe}function Qt(){if(je===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=qe===null?ke.memoizedState:qe.next;if(e!==null)qe=e,je=t;else{if(t===null)throw Error(j(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},qe===null?ke.memoizedState=qe=t:qe=qe.next=t}return qe}function Ho(t,e){return typeof e=="function"?e(t):e}function wh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Zr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ke.lanes|=d,ei|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,un(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ke.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eh(t){var e=Qt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(It=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cw(){}function hw(t,e){var n=ke,r=Qt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,It=!0),r=r.queue,ap(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Ko(9,fw.bind(null,n,r,i,e),void 0,null),Ke===null)throw Error(j(349));Zr&30||dw(n,e,i)}return i}function dw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fw(t,e,n,r){e.value=n,e.getSnapshot=r,mw(e)&&gw(t)}function pw(t,e,n){return n(function(){mw(e)&&gw(t)})}function mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function gw(t){var e=jn(t,1);e!==null&&on(e,t,1,-1)}function P_(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=lx.bind(null,ke,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _w(){return Qt().memoizedState}function Al(t,e,n,r){var i=dn();ke.flags|=t,i.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function qu(t,e,n,r){var i=Qt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&ip(r,o.deps)){i.memoizedState=Ko(e,n,s,r);return}}ke.flags|=t,i.memoizedState=Ko(1|e,n,s,r)}function N_(t,e){return Al(8390656,8,t,e)}function ap(t,e){return qu(2048,8,t,e)}function yw(t,e){return qu(4,2,t,e)}function vw(t,e){return qu(4,4,t,e)}function ww(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,qu(4,4,ww.bind(null,e,t),n)}function lp(){}function Tw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iw(t,e){var n=Qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sw(t,e,n){return Zr&21?(un(n,e)||(n=R0(),ke.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function ox(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=vh.transition;vh.transition={};try{t(!1),e()}finally{he=n,vh.transition=r}}function Cw(){return Qt().memoizedState}function ax(t,e,n){var r=dr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kw(t))xw(e,n);else if(n=aw(t,e,n,r),n!==null){var i=_t();on(n,t,r,i),Aw(n,e,r)}}function lx(t,e,n){var r=dr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kw(t))xw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,un(l,o)){var u=e.interleaved;u===null?(i.next=i,Zf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=aw(t,e,i,r),n!==null&&(i=_t(),on(n,t,r,i),Aw(n,e,r))}}function kw(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function xw(t,e){yo=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jf(t,n)}}var ou={readContext:Gt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},ux={readContext:Gt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:Gt,useEffect:N_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Al(4194308,4,ww.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Al(4194308,4,t,e)},useInsertionEffect:function(t,e){return Al(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ax.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:P_,useDebugValue:lp,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=P_(!1),e=t[0];return t=ox.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,i=dn();if(Ie){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ke===null)throw Error(j(349));Zr&30||dw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,N_(pw.bind(null,r,s,t),[t]),r.flags|=2048,Ko(9,fw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=Ke.identifierPrefix;if(Ie){var n=Dn,r=Nn;n=(r&~(1<<32-sn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cx={readContext:Gt,useCallback:Tw,useContext:Gt,useEffect:ap,useImperativeHandle:Ew,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:Iw,useReducer:wh,useRef:_w,useState:function(){return wh(Ho)},useDebugValue:lp,useDeferredValue:function(t){var e=Qt();return Sw(e,je.memoizedState,t)},useTransition:function(){var t=wh(Ho)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:hw,useId:Cw,unstable_isNewReconciler:!1},hx={readContext:Gt,useCallback:Tw,useContext:Gt,useEffect:ap,useImperativeHandle:Ew,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:Iw,useReducer:Eh,useRef:_w,useState:function(){return Eh(Ho)},useDebugValue:lp,useDeferredValue:function(t){var e=Qt();return je===null?e.memoizedState=t:Sw(e,je.memoizedState,t)},useTransition:function(){var t=Eh(Ho)[0],e=Qt().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:hw,useId:Cw,unstable_isNewReconciler:!1};function Jt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hu={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=dr(t),s=Mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(on(e,t,i,r),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=dr(t),s=Mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(on(e,t,i,r),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=dr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(on(e,t,r,n),kl(e,t,r))}};function D_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function Rw(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Gt(s):(i=kt(e)?Xr:ft.current,r=e.contextTypes,s=(r=r!=null)?ns(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function b_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Hu.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ep(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Gt(s):(s=kt(e)?Xr:ft.current,i.context=ns(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Hu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function os(t,e){try{var n="",r=e;do n+=jC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dx=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,jd=r),Rd(t,e)},n}function Nw(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rd(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kx.bind(null,t,e,n),e.then(t,t))}function O_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function V_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var fx=Kn.ReactCurrentOwner,It=!1;function gt(t,e,n,r){e.child=t===null?ow(e,null,n,r):is(e,t.child,n,r)}function L_(t,e,n,r,i){n=n.render;var s=e.ref;return Qi(e,i),r=sp(t,e,n,r,s,i),n=op(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&n&&Kf(e),e.flags|=1,gt(t,e,r,i),e.child)}function F_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Dw(t,e,s,r,i)):(t=Dl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return Un(t,e,i)}return e.flags|=1,t=fr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Dw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Un(t,e,i)}return Pd(t,e,n,r,i)}function bw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Bi,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Bi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(Bi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(Bi,Nt),Nt|=r;return gt(t,e,i,n),e.child}function Mw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,i){var s=kt(n)?Xr:ft.current;return s=ns(e,s),Qi(e,i),n=sp(t,e,n,r,s,i),r=op(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Un(t,e,i)):(Ie&&r&&Kf(e),e.flags|=1,gt(t,e,n,i),e.child)}function j_(t,e,n,r,i){if(kt(n)){var s=!0;Jl(e)}else s=!1;if(Qi(e,i),e.stateNode===null)Rl(t,e),Rw(e,n,r),Ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gt(c):(c=kt(n)?Xr:ft.current,c=ns(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&b_(e,o,r,c),er=!1;var m=e.memoizedState;o.state=m,ru(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Ct.current||er?(typeof d=="function"&&(xd(e,n,d,r),u=e.memoizedState),(l=er||D_(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lw(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Gt(u):(u=kt(n)?Xr:ft.current,u=ns(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&b_(e,o,r,u),er=!1,m=e.memoizedState,o.state=m,ru(e,r,o,i);var k=e.memoizedState;l!==p||m!==k||Ct.current||er?(typeof w=="function"&&(xd(e,n,w,r),k=e.memoizedState),(c=er||D_(e,n,c,r,m,k,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Nd(t,e,n,r,s,i)}function Nd(t,e,n,r,i,s){Mw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&S_(e,n,!1),Un(t,e,s);r=e.stateNode,fx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=is(e,t.child,null,s),e.child=is(e,null,l,s)):gt(t,e,l,s),e.memoizedState=r.state,i&&S_(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?I_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&I_(t,e.context,!1),tp(t,e.containerInfo)}function U_(t,e,n,r,i){return rs(),Qf(i),e.flags|=256,gt(t,e,n,r),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function bd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vw(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(Ce,i&1),t===null)return Cd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=bd(n),e.memoizedState=Dd,t):up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return px(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=fr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?bd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Dd,r}return s=t.child,t=s.sibling,r=fr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function up(t,e){return e=Qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&Qf(r),is(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function px(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Th(Error(j(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&is(e,t.child,null,o),e.child.memoizedState=bd(o),e.memoizedState=Dd,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Th(s,r,void 0),ul(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=Ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),on(r,t,i,-1))}return mp(),r=Th(Error(j(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,bt=ur(i.nextSibling),Ot=e,Ie=!0,en=null,t!==null&&($t[Wt++]=Nn,$t[Wt++]=Dn,$t[Wt++]=Jr,Nn=t.id,Dn=t.overflow,Jr=e),e=up(e,r.children),e.flags|=4096,e)}function z_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kd(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(gt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&z_(t,n,e);else if(t.tag===19)z_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mx(t,e,n){switch(e.tag){case 3:Ow(e),rs();break;case 5:uw(e);break;case 1:kt(e.type)&&Jl(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?Vw(t,e,n):(_e(Ce,Ce.current&1),t=Un(t,e,n),t!==null?t.sibling:null);_e(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Lw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,bw(t,e,n)}return Un(t,e,n)}var Fw,Md,jw,Uw;Fw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};jw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(_n.current);var s=null;switch(n){case"input":i=nd(t,i),r=nd(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=sd(t,i),r=sd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}ad(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Do.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Do.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Uw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Xs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gx(t,e,n){var r=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&Xl(),ot(e),null;case 3:return r=e.stateNode,ss(),Te(Ct),Te(ft),rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,en!==null&&(Bd(en),en=null))),Md(t,e),ot(e),null;case 5:np(e);var i=Wr(Wo.current);if(n=e.type,t!==null&&e.stateNode!=null)jw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return ot(e),null}if(t=Wr(_n.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[fn]=e,r[Bo]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ao.length;i++)ve(ao[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Yg(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":Jg(r,s),ve("invalid",r)}ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,l,t),i=["children",""+l]):Do.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ja(r),Xg(r,s,!0);break;case"textarea":Ja(r),Zg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[Bo]=r,Fw(t,e,!1,!1),e.stateNode=t;e:{switch(o=ld(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ao.length;i++)ve(ao[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Yg(t,r),i=nd(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),ve("invalid",t);break;case"textarea":Jg(t,r),i=sd(t,r),ve("invalid",t);break;default:i=r}ad(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?_0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&m0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bo(t,u):typeof u=="number"&&bo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&bf(t,s,u,o))}switch(n){case"input":Ja(t),Xg(t,r,!1);break;case"textarea":Ja(t),Zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)Uw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Wr(Wo.current),Wr(_n.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(s=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ot(e),null;case 13:if(Te(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&bt!==null&&e.mode&1&&!(e.flags&128))iw(),rs(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[fn]=e}else rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),s=!1}else en!==null&&(Bd(en),en=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?ze===0&&(ze=3):mp())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ss(),Md(t,e),t===null&&Uo(e.stateNode.containerInfo),ot(e),null;case 10:return Jf(e.type._context),ot(e),null;case 17:return kt(e.type)&&Xl(),ot(e),null;case 19:if(Te(Ce),s=e.memoizedState,s===null)return ot(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Xs(s,!1);else{if(ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>as&&(e.flags|=128,r=!0,Xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return ot(e),null}else 2*Me()-s.renderingStartTime>as&&n!==1073741824&&(e.flags|=128,r=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ce.current,_e(Ce,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function _x(t,e){switch(Gf(e),e.tag){case 1:return kt(e.type)&&Xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),Te(Ct),Te(ft),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(Te(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(Ce),null;case 4:return ss(),null;case 10:return Jf(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var cl=!1,ut=!1,yx=typeof WeakSet=="function"?WeakSet:Set,$=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Od(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var B_=!1;function vx(t,e){if(yd=Kl,t=q0(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(vd={focusedElem:t,selectionRange:n},Kl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,b=k.memoizedState,C=e.stateNode,T=C.getSnapshotBeforeUpdate(e.elementType===e.type?N:Jt(e.type,N),b);C.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(M){Pe(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=B_,B_=!1,k}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Od(e,n,s)}i=i.next}while(i!==r)}}function Ku(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zw(t){var e=t.alternate;e!==null&&(t.alternate=null,zw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[Bo],delete e[Td],delete e[tx],delete e[nx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bw(t){return t.tag===5||t.tag===3||t.tag===4}function $_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}function Fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Qe=null,Zt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)$w(t,e,n),n=n.sibling}function $w(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(ju,n)}catch{}switch(n.tag){case 5:ut||zi(n,e);case 6:var r=Qe,i=Zt;Qe=null,Jn(t,e,n),Qe=r,Zt=i,Qe!==null&&(Zt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Zt?(t=Qe,n=n.stateNode,t.nodeType===8?gh(t.parentNode,n):t.nodeType===1&&gh(t,n),Lo(t)):gh(Qe,n.stateNode));break;case 4:r=Qe,i=Zt,Qe=n.stateNode.containerInfo,Zt=!0,Jn(t,e,n),Qe=r,Zt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Od(n,e,o),i=i.next}while(i!==r)}Jn(t,e,n);break;case 1:if(!ut&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Jn(t,e,n),ut=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function W_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yx),e.forEach(function(r){var i=Ax.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Qe=l.stateNode,Zt=!1;break e;case 3:Qe=l.stateNode.containerInfo,Zt=!0;break e;case 4:Qe=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Qe===null)throw Error(j(160));$w(s,o,i),Qe=null,Zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Pe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ww(e,t),e=e.sibling}function Ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xt(e,t),hn(t),r&4){try{vo(3,t,t.return),Ku(3,t)}catch(N){Pe(t,t.return,N)}try{vo(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:Xt(e,t),hn(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(Xt(e,t),hn(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&d0(i,s),ld(l,o);var c=ld(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?_0(i,p):d==="dangerouslySetInnerHTML"?m0(i,p):d==="children"?bo(i,p):bf(i,d,p,c)}switch(l){case"input":rd(i,s);break;case"textarea":f0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?qi(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Bo]=s}catch(N){Pe(t,t.return,N)}}break;case 6:if(Xt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Pe(t,t.return,N)}}break;case 3:if(Xt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:Xt(e,t),hn(t);break;case 13:Xt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=Me())),r&4&&W_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(c=ut)||d,Xt(e,t),ut=c):Xt(e,t),hn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(p=$=d;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:vo(4,m,m.return);break;case 1:zi(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:zi(m,m.return);break;case 22:if(m.memoizedState!==null){H_(p);continue}}w!==null?(w.return=m,$=w):H_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=g0("display",o))}catch(N){Pe(t,t.return,N)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Xt(e,t),hn(t),r&4&&W_(t);break;case 21:break;default:Xt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bw(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=$_(t);Fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$_(t);Ld(t,l,o);break;default:throw Error(j(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wx(t,e,n){$=t,qw(t)}function qw(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ut;l=cl;var c=ut;if(cl=o,(ut=u)&&!c)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?K_(i):u!==null?(u.return=o,$=u):K_(i);for(;s!==null;)$=s,qw(s),s=s.sibling;$=i,cl=l,ut=c}q_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):q_(t)}}function q_(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Ku(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&R_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}R_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ut||e.flags&512&&Vd(e)}catch(m){Pe(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function H_(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function K_(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ku(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Vd(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Vd(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var Ex=Math.ceil,au=Kn.ReactCurrentDispatcher,cp=Kn.ReactCurrentOwner,Ht=Kn.ReactCurrentBatchConfig,ae=0,Ke=null,Le=null,Je=0,Nt=0,Bi=Ar(0),ze=0,Go=null,ei=0,Gu=0,hp=0,wo=null,Et=null,dp=0,as=1/0,Rn=null,lu=!1,jd=null,hr=null,hl=!1,ir=null,uu=0,Eo=0,Ud=null,Pl=-1,Nl=0;function _t(){return ae&6?Me():Pl!==-1?Pl:Pl=Me()}function dr(t){return t.mode&1?ae&2&&Je!==0?Je&-Je:ix.transition!==null?(Nl===0&&(Nl=R0()),Nl):(t=he,t!==0||(t=window.event,t=t===void 0?16:V0(t.type)),t):1}function on(t,e,n,r){if(50<Eo)throw Eo=0,Ud=null,Error(j(185));fa(t,n,r),(!(ae&2)||t!==Ke)&&(t===Ke&&(!(ae&2)&&(Gu|=n),ze===4&&nr(t,Je)),xt(t,r),n===1&&ae===0&&!(e.mode&1)&&(as=Me()+500,Wu&&Rr()))}function xt(t,e){var n=t.callbackNode;ik(t,e);var r=Hl(t,t===Ke?Je:0);if(r===0)n!==null&&n_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&n_(n),e===1)t.tag===0?rx(G_.bind(null,t)):tw(G_.bind(null,t)),Zk(function(){!(ae&6)&&Rr()}),n=null;else{switch(P0(r)){case 1:n=Ff;break;case 4:n=x0;break;case 16:n=ql;break;case 536870912:n=A0;break;default:n=ql}n=Zw(n,Hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hw(t,e){if(Pl=-1,Nl=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(Yi()&&t.callbackNode!==n)return null;var r=Hl(t,t===Ke?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=ae;ae|=2;var s=Gw();(Ke!==t||Je!==e)&&(Rn=null,as=Me()+500,Gr(t,e));do try{Sx();break}catch(l){Kw(t,l)}while(!0);Xf(),au.current=s,ae=i,Le!==null?e=0:(Ke=null,Je=0,e=ze)}if(e!==0){if(e===2&&(i=fd(t),i!==0&&(r=i,e=zd(t,i))),e===1)throw n=Go,Gr(t,0),nr(t,r),xt(t,Me()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Tx(i)&&(e=cu(t,r),e===2&&(s=fd(t),s!==0&&(r=s,e=zd(t,s))),e===1))throw n=Go,Gr(t,0),nr(t,r),xt(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:jr(t,Et,Rn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=dp+500-Me(),10<e)){if(Hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ed(jr.bind(null,t,Et,Rn),e);break}jr(t,Et,Rn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-sn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ex(r/1960))-r,10<r){t.timeoutHandle=Ed(jr.bind(null,t,Et,Rn),r);break}jr(t,Et,Rn);break;case 5:jr(t,Et,Rn);break;default:throw Error(j(329))}}}return xt(t,Me()),t.callbackNode===n?Hw.bind(null,t):null}function zd(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Gr(t,e).flags|=256),t=cu(t,e),t!==2&&(e=Et,Et=n,e!==null&&Bd(e)),t}function Bd(t){Et===null?Et=t:Et.push.apply(Et,t)}function Tx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~hp,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-sn(e),r=1<<n;t[n]=-1,e&=~r}}function G_(t){if(ae&6)throw Error(j(327));Yi();var e=Hl(t,0);if(!(e&1))return xt(t,Me()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=fd(t);r!==0&&(e=r,n=zd(t,r))}if(n===1)throw n=Go,Gr(t,0),nr(t,e),xt(t,Me()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,Et,Rn),xt(t,Me()),null}function fp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(as=Me()+500,Wu&&Rr())}}function ti(t){ir!==null&&ir.tag===0&&!(ae&6)&&Yi();var e=ae;ae|=1;var n=Ht.transition,r=he;try{if(Ht.transition=null,he=1,t)return t()}finally{he=r,Ht.transition=n,ae=e,!(ae&6)&&Rr()}}function pp(){Nt=Bi.current,Te(Bi)}function Gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jk(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(Gf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xl();break;case 3:ss(),Te(Ct),Te(ft),rp();break;case 5:np(r);break;case 4:ss();break;case 13:Te(Ce);break;case 19:Te(Ce);break;case 10:Jf(r.type._context);break;case 22:case 23:pp()}n=n.return}if(Ke=t,Le=t=fr(t.current,null),Je=Nt=e,ze=0,Go=null,hp=Gu=ei=0,Et=wo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function Kw(t,e){do{var n=Le;try{if(Xf(),xl.current=ou,su){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(Zr=0,qe=je=ke=null,yo=!1,qo=0,cp.current=null,n===null||n.return===null){ze=1,Go=e,Le=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Je,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=O_(o);if(w!==null){w.flags&=-257,V_(w,o,l,s,e),w.mode&1&&M_(s,c,e),e=w,u=c;var k=e.updateQueue;if(k===null){var N=new Set;N.add(u),e.updateQueue=N}else k.add(u);break e}else{if(!(e&1)){M_(s,c,e),mp();break e}u=Error(j(426))}}else if(Ie&&l.mode&1){var b=O_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),V_(b,o,l,s,e),Qf(os(u,l));break e}}s=u=os(u,l),ze!==4&&(ze=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=Pw(s,u,e);A_(s,C);break e;case 1:l=u;var T=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(hr===null||!hr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Nw(s,l,e);A_(s,M);break e}}s=s.return}while(s!==null)}Yw(n)}catch(L){e=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Gw(){var t=au.current;return au.current=ou,t===null?ou:t}function mp(){(ze===0||ze===3||ze===2)&&(ze=4),Ke===null||!(ei&268435455)&&!(Gu&268435455)||nr(Ke,Je)}function cu(t,e){var n=ae;ae|=2;var r=Gw();(Ke!==t||Je!==e)&&(Rn=null,Gr(t,e));do try{Ix();break}catch(i){Kw(t,i)}while(!0);if(Xf(),ae=n,au.current=r,Le!==null)throw Error(j(261));return Ke=null,Je=0,ze}function Ix(){for(;Le!==null;)Qw(Le)}function Sx(){for(;Le!==null&&!QC();)Qw(Le)}function Qw(t){var e=Jw(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?Yw(t):Le=e,cp.current=null}function Yw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_x(n,e),n!==null){n.flags&=32767,Le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ze=6,Le=null;return}}else if(n=gx(n,e,Nt),n!==null){Le=n;return}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);ze===0&&(ze=5)}function jr(t,e,n){var r=he,i=Ht.transition;try{Ht.transition=null,he=1,Cx(t,e,n,r)}finally{Ht.transition=i,he=r}return null}function Cx(t,e,n,r){do Yi();while(ir!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sk(t,s),t===Ke&&(Le=Ke=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Zw(ql,function(){return Yi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ht.transition,Ht.transition=null;var o=he;he=1;var l=ae;ae|=4,cp.current=null,vx(t,n),Ww(n,t),qk(vd),Kl=!!yd,vd=yd=null,t.current=n,wx(n),YC(),ae=l,he=o,Ht.transition=s}else t.current=n;if(hl&&(hl=!1,ir=t,uu=i),s=t.pendingLanes,s===0&&(hr=null),ZC(n.stateNode),xt(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=jd,jd=null,t;return uu&1&&t.tag!==0&&Yi(),s=t.pendingLanes,s&1?t===Ud?Eo++:(Eo=0,Ud=t):Eo=0,Rr(),null}function Yi(){if(ir!==null){var t=P0(uu),e=Ht.transition,n=he;try{if(Ht.transition=null,he=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,uu=0,ae&6)throw Error(j(331));var i=ae;for(ae|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:vo(8,d,s)}var p=d.child;if(p!==null)p.return=d,$=p;else for(;$!==null;){d=$;var m=d.sibling,w=d.return;if(zw(d),d===c){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var k=s.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var b=N.sibling;N.sibling=null,N=b}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,$=C;break e}$=s.return}}var T=t.current;for($=T;$!==null;){o=$;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,$=x;else e:for(o=T;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ku(9,l)}}catch(L){Pe(l,l.return,L)}if(l===o){$=null;break e}var M=l.sibling;if(M!==null){M.return=l.return,$=M;break e}$=l.return}}if(ae=i,Rr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(ju,t)}catch{}r=!0}return r}finally{he=n,Ht.transition=e}}return!1}function Q_(t,e,n){e=os(n,e),e=Pw(t,e,1),t=cr(t,e,1),e=_t(),t!==null&&(fa(t,1,e),xt(t,e))}function Pe(t,e,n){if(t.tag===3)Q_(t,t,n);else for(;e!==null;){if(e.tag===3){Q_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=os(n,t),t=Nw(e,t,1),e=cr(e,t,1),t=_t(),e!==null&&(fa(e,1,t),xt(e,t));break}}e=e.return}}function kx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ke===t&&(Je&n)===n&&(ze===4||ze===3&&(Je&130023424)===Je&&500>Me()-dp?Gr(t,0):hp|=n),xt(t,e)}function Xw(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=_t();t=jn(t,e),t!==null&&(fa(t,e,n),xt(t,n))}function xx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xw(t,n)}function Ax(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),Xw(t,n)}var Jw;Jw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,mx(t,e,n);It=!!(t.flags&131072)}else It=!1,Ie&&e.flags&1048576&&nw(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Rl(t,e),t=e.pendingProps;var i=ns(e,ft.current);Qi(e,n),i=sp(null,e,r,t,i,n);var s=op();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ep(e),i.updater=Hu,e.stateNode=i,i._reactInternals=e,Ad(e,r,t,n),e=Nd(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Kf(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Px(r),t=Jt(r,t),i){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=j_(null,e,r,t,n);break e;case 11:e=L_(null,e,r,t,n);break e;case 14:e=F_(null,e,r,Jt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Pd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),j_(t,e,r,i,n);case 3:e:{if(Ow(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,lw(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=os(Error(j(423)),e),e=U_(t,e,r,n,i);break e}else if(r!==i){i=os(Error(j(424)),e),e=U_(t,e,r,n,i);break e}else for(bt=ur(e.stateNode.containerInfo.firstChild),Ot=e,Ie=!0,en=null,n=ow(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rs(),r===i){e=Un(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&Cd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wd(r,i)?o=null:s!==null&&wd(r,s)&&(e.flags|=32),Mw(t,e),gt(t,e,o,n),e.child;case 6:return t===null&&Cd(e),null;case 13:return Vw(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=is(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),L_(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(tu,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Ct.current){e=Un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Mn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),kd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=Gt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Jt(r,e.pendingProps),i=Jt(r.type,i),F_(t,e,r,i,n);case 15:return Dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Jt(r,i),Rl(t,e),e.tag=1,kt(r)?(t=!0,Jl(e)):t=!1,Qi(e,n),Rw(e,r,i),Ad(e,r,i,n),Nd(null,e,r,!0,t,n);case 19:return Lw(t,e,n);case 22:return bw(t,e,n)}throw Error(j(156,e.tag))};function Zw(t,e){return k0(t,e)}function Rx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new Rx(t,e,n,r)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Px(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===Vf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Di:return Qr(n.children,i,s,e);case Mf:o=8,i|=8;break;case Jh:return t=qt(12,n,e,i|2),t.elementType=Jh,t.lanes=s,t;case Zh:return t=qt(13,n,e,i),t.elementType=Zh,t.lanes=s,t;case ed:return t=qt(19,n,e,i),t.elementType=ed,t.lanes=s,t;case u0:return Qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:o=10;break e;case l0:o=9;break e;case Of:o=11;break e;case Vf:o=14;break e;case Zn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Qu(t,e,n,r){return t=qt(22,t,r,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function Sh(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,r,i,s,o,l,u){return t=new Nx(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function Dx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function eE(t){if(!t)return Er;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(kt(n))return ew(t,n,e)}return e}function tE(t,e,n,r,i,s,o,l,u){return t=_p(n,r,!0,t,i,s,o,l,u),t.context=eE(null),n=t.current,r=_t(),i=dr(n),s=Mn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,fa(t,i,r),xt(t,r),t}function Yu(t,e,n,r){var i=e.current,s=_t(),o=dr(i);return n=eE(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(on(t,i,o,s),kl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Y_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){Y_(t,e),(t=t.alternate)&&Y_(t,e)}function bx(){return null}var nE=typeof reportError=="function"?reportError:function(t){console.error(t)};function vp(t){this._internalRoot=t}Xu.prototype.render=vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Yu(t,e,null,null)};Xu.prototype.unmount=vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Yu(null,t,null,null)}),e[Fn]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var e=b0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&O0(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ju(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function X_(){}function Mx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hu(o);s.call(c)}}var o=tE(e,r,t,0,null,!1,!1,"",X_);return t._reactRootContainer=o,t[Fn]=o.current,Uo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=hu(u);l.call(c)}}var u=_p(t,0,!1,null,null,!1,!1,"",X_);return t._reactRootContainer=u,t[Fn]=u.current,Uo(t.nodeType===8?t.parentNode:t),ti(function(){Yu(e,u,n,r)}),u}function Zu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hu(o);l.call(u)}}Yu(e,o,t,i)}else o=Mx(n,e,t,i,r);return hu(o)}N0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(jf(e,n|1),xt(e,Me()),!(ae&6)&&(as=Me()+500,Rr()))}break;case 13:ti(function(){var r=jn(t,1);if(r!==null){var i=_t();on(r,t,1,i)}}),yp(t,1)}};Uf=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=_t();on(e,t,134217728,n)}yp(t,134217728)}};D0=function(t){if(t.tag===13){var e=dr(t),n=jn(t,e);if(n!==null){var r=_t();on(n,t,e,r)}yp(t,e)}};b0=function(){return he};M0=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};cd=function(t,e,n){switch(e){case"input":if(rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$u(r);if(!i)throw Error(j(90));h0(r),rd(r,i)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};w0=fp;E0=ti;var Ox={usingClientEntryPoint:!1,Events:[ma,Vi,$u,y0,v0,fp]},Js={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Vx={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S0(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ju=dl.inject(Vx),gn=dl}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(e))throw Error(j(200));return Dx(t,e,null,n)};Ut.createRoot=function(t,e){if(!wp(t))throw Error(j(299));var n=!1,r="",i=nE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,r,i),t[Fn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new vp(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=S0(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return ti(t)};Ut.hydrate=function(t,e,n){if(!Ju(e))throw Error(j(200));return Zu(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!wp(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tE(e,null,t,1,n??null,i,!1,s,o),t[Fn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xu(e)};Ut.render=function(t,e,n){if(!Ju(e))throw Error(j(200));return Zu(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!Ju(t))throw Error(j(40));return t._reactRootContainer?(ti(function(){Zu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Ut.unstable_batchedUpdates=fp;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ju(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Zu(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function rE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rE)}catch(t){console.error(t)}}rE(),r0.exports=Ut;var Lx=r0.exports,J_=Lx;Yh.createRoot=J_.createRoot,Yh.hydrateRoot=J_.hydrateRoot;const iE=H.createContext(null);function Fx({children:t}){const[e,n]=H.useState(""),[r,i]=H.useState(null);return _.jsx(iE.Provider,{value:{erkanntePflanze:e,setErkanntePflanze:n,letzteBodenwerte:r,setLetzteBodenwerte:i},children:t})}function ec(){const t=H.useContext(iE);if(!t)throw new Error("useApp muss innerhalb von <AppProvider> benutzt werden.");return t}const jx="feldkamerad_theme";function Ux(){const[t,e]=H.useState(()=>typeof document<"u"&&document.documentElement.classList.contains("dark"));return H.useEffect(()=>{document.documentElement.classList.toggle("dark",t);try{localStorage.setItem(jx,t?"dark":"light")}catch{}const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",t?"#0c0a09":"#16a34a")},[t]),{dunkel:t,umschalten:()=>e(n=>!n)}}function sE({bild:t,onBild:e}){const[n,r]=H.useState(null);H.useEffect(()=>{if(!t){r(null);return}const s=URL.createObjectURL(t);return r(s),()=>URL.revokeObjectURL(s)},[t]);function i(s){var l;const o=(l=s.target.files)==null?void 0:l[0];o&&e(o),s.target.value=""}return n?_.jsxs("div",{className:"space-y-3",children:[_.jsx("img",{src:n,alt:"Vorschau des aufgenommenen Fotos",className:"max-h-72 w-full rounded-2xl object-cover shadow-sm"}),_.jsx("button",{type:"button",onClick:()=>e(null),className:`w-full rounded-xl border-2 border-garten-600 bg-white px-5 py-3
            text-lg font-semibold text-garten-800 hover:bg-garten-50
            dark:border-garten-500/50 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700`,children:"🔄 Anderes Foto"})]}):_.jsxs("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2",children:[_.jsxs("label",{className:`flex cursor-pointer items-center justify-center gap-2 rounded-xl
          bg-garten-600 px-5 py-6 text-lg font-semibold text-white shadow-md
          hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400`,children:["📷 Foto aufnehmen",_.jsx("input",{type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:i})]}),_.jsxs("label",{className:`flex cursor-pointer items-center justify-center gap-2 rounded-xl
          border-2 border-garten-600 bg-white px-5 py-6 text-lg font-semibold
          text-garten-800 hover:bg-garten-50
          dark:border-garten-500/50 dark:bg-stone-800 dark:text-stone-100 dark:hover:bg-stone-700`,children:["🖼️ Hochladen",_.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:i})]})]})}function On({children:t,variante:e="primaer",className:n="",...r}){const i={primaer:"bg-garten-600 text-white shadow-sm shadow-garten-700/20 hover:bg-garten-700 active:scale-[.99] dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400",sekundaer:"bg-white text-stone-700 ring-1 ring-stone-200 hover:bg-stone-50 active:scale-[.99] dark:bg-stone-800 dark:text-stone-200 dark:ring-stone-700 dark:hover:bg-stone-700",gefahr:"bg-red-600 text-white hover:bg-red-700 active:scale-[.99] dark:hover:bg-red-500"};return _.jsx("button",{className:`w-full rounded-2xl px-5 py-4 text-base font-semibold transition-all
        disabled:cursor-not-allowed disabled:opacity-50 ${i[e]} ${n}`,...r,children:t})}function Oe({children:t,className:e=""}){return _.jsx("div",{className:`rounded-3xl bg-white p-5 shadow-sm ring-1 ring-stone-200/70 dark:bg-stone-900 dark:ring-stone-800 ${e}`,children:t})}function ni({icon:t,children:e}){return _.jsxs("h2",{className:"flex items-center gap-3 text-[22px] font-bold tracking-tight text-stone-900 dark:text-stone-50",children:[t&&_.jsx("span",{className:"grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-garten-100 text-xl dark:bg-garten-500/15","aria-hidden":"true",children:t}),_.jsx("span",{children:e})]})}function Ts({children:t}){return _.jsx("p",{className:"mb-4 mt-1 text-[15px] leading-snug text-stone-500 dark:text-stone-400",children:t})}function pn({label:t,hinweis:e,...n}){return _.jsxs("label",{className:"block",children:[_.jsx("span",{className:"mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300",children:t}),_.jsx("input",{className:`w-full rounded-xl bg-white px-4 py-3.5 text-stone-900 outline-none ring-1 ring-stone-200
          transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500
          dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500`,...n}),e&&_.jsx("span",{className:"mt-1 block text-xs text-stone-400 dark:text-stone-500",children:e})]})}function zx({label:t,...e}){return _.jsxs("label",{className:"block",children:[_.jsx("span",{className:"mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300",children:t}),_.jsx("textarea",{rows:3,className:`w-full rounded-xl bg-white px-4 py-3.5 text-stone-900 outline-none ring-1 ring-stone-200
          transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500
          dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500`,...e})]})}function ri({text:t="Wird geladen …"}){return _.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 py-8 text-stone-500 dark:text-stone-400",children:[_.jsx("div",{className:"garten-spinner h-10 w-10 rounded-full border-4 border-stone-200 border-t-garten-600 dark:border-stone-700 dark:border-t-garten-400"}),_.jsx("p",{className:"text-[15px] font-medium",children:t})]})}function ii({children:t}){return t?_.jsxs("div",{className:"garten-anim flex items-start gap-2 rounded-2xl bg-red-50 p-4 text-red-700 ring-1 ring-red-200 dark:bg-red-500/10 dark:text-red-300 dark:ring-red-500/30",children:[_.jsx("span",{"aria-hidden":"true",children:"⚠️"}),_.jsx("p",{className:"font-medium",children:t})]}):null}function Qo({wert:t}){if(!t)return null;const e=String(t).toLowerCase();let n="bg-stone-100 text-stone-600 dark:bg-stone-700 dark:text-stone-300";return["gut","leicht","hoch","gesund","bio"].some(r=>e.includes(r))?n="bg-garten-100 text-garten-700 dark:bg-garten-500/15 dark:text-garten-300":e.includes("mittel")?n="bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-200":["schlecht","schwer","niedrig"].some(r=>e.includes(r))&&(n="bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-200"),_.jsx("span",{className:`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${n}`,children:t})}function pr({punkte:t,icon:e="✅"}){return!t||t.length===0?null:_.jsx("ul",{className:"space-y-2",children:t.map((n,r)=>_.jsxs("li",{className:"flex gap-2.5 text-[15px] text-stone-700 dark:text-stone-300",children:[_.jsx("span",{className:"shrink-0","aria-hidden":"true",children:e}),_.jsx("span",{children:n})]},r))})}var Z_={};/**
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
 */const oE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(t,e){if(!t)throw Is(e)},Is=function(t){return new Error("Firebase Database ("+oE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const aE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,w=c&63;u||(w=64,o||(m=64)),r.push(n[d],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new $x;const m=s<<2|l>>4;if(r.push(m),c!==64){const w=l<<4&240|c>>2;if(r.push(w),p!==64){const k=c<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lE=function(t){const e=aE(t);return Ep.encodeByteArray(e,!0)},du=function(t){return lE(t).replace(/\./g,"")},$d=function(t){try{return Ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wx(t){return uE(void 0,t)}function uE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qx(n)||(t[n]=uE(t[n],e[n]));return t}function qx(t){return t!=="__proto__"}/**
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
 */function Hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kx=()=>Hx().__FIREBASE_DEFAULTS__,Gx=()=>{if(typeof process>"u"||typeof Z_>"u")return;const t=Z_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$d(t[1]);return e&&JSON.parse(e)},Tp=()=>{try{return Kx()||Gx()||Qx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yx=t=>{var e,n;return(n=(e=Tp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cE=t=>{const e=Yx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hE=()=>{var t;return(t=Tp())===null||t===void 0?void 0:t.config};/**
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
 */class Ip{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[du(JSON.stringify(n)),du(JSON.stringify(o)),""].join(".")}/**
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
 */function fE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fE())}function Xx(){var t;const e=(t=Tp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Jx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eA(){return oE.NODE_ADMIN===!0}function tA(){return!Xx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function nA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const rA="FirebaseError";class Pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rA,Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tc.prototype.create)}}class tc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iA(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pr(i,l,r)}}function iA(t,e){return t.replace(sA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sA=/\{\$([^}]+)}/g;/**
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
 */function Yo(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
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
 */const _E=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Yo($d(s[0])||""),n=Yo($d(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},oA=function(t){const e=_E(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},aA=function(t){const e=_E(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ey(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ty(s)&&ty(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ty(t){return t!==null&&typeof t=="object"}/**
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
 */function lA(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class uA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],u=this.chain_[4],c,d;for(let p=0;p<80;p++){p<40?p<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):p<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const m=(i<<5|i>>>27)+c+u+d+r[p]&4294967295;u=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function yE(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,U(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const hA=1e3,dA=2,fA=4*60*60*1e3,pA=.5;function ny(t,e=hA,n=dA){const r=e*Math.pow(n,t),i=Math.round(pA*r*(Math.random()-.5)*2);return Math.min(fA,r+i)}/**
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
 */function yt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class mA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ip;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_A(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gA(t){return t===Ur?void 0:t}function _A(t){return t.instantiationMode==="EAGER"}/**
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
 */class yA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const vA={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},wA=oe.INFO,EA={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},TA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=wA,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const IA=(t,e)=>e.some(n=>t instanceof n);let ry,iy;function SA(){return ry||(ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CA(){return iy||(iy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,Wd=new WeakMap,wE=new WeakMap,kh=new WeakMap,Sp=new WeakMap;function kA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function xA(t){if(Wd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wd.set(t,e)}let qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AA(t){qd=t(qd)}function RA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xh(this),e,...n);return wE.set(r,e.sort?e.sort():[e]),mr(r)}:CA().includes(t)?function(...e){return t.apply(xh(this),e),mr(vE.get(this))}:function(...e){return mr(t.apply(xh(this),e))}}function PA(t){return typeof t=="function"?RA(t):(t instanceof IDBTransaction&&xA(t),IA(t,SA())?new Proxy(t,qd):t)}function mr(t){if(t instanceof IDBRequest)return kA(t);if(kh.has(t))return kh.get(t);const e=PA(t);return e!==t&&(kh.set(t,e),Sp.set(e,t)),e}const xh=t=>Sp.get(t);function EE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const NA=["get","getKey","getAll","getAllKeys","count"],DA=["put","add","delete","clear"],Ah=new Map;function sy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ah.get(e))return Ah.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||NA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Ah.set(e,s),s}AA(t=>({...t,get:(e,n,r)=>sy(e,n)||t.get(e,n,r),has:(e,n)=>!!sy(e,n)||t.has(e,n)}));/**
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
 */class bA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",oy="0.10.13";/**
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
 */const zn=new rc("@firebase/app"),OA="@firebase/app-compat",VA="@firebase/analytics-compat",LA="@firebase/analytics",FA="@firebase/app-check-compat",jA="@firebase/app-check",UA="@firebase/auth",zA="@firebase/auth-compat",BA="@firebase/database",$A="@firebase/data-connect",WA="@firebase/database-compat",qA="@firebase/functions",HA="@firebase/functions-compat",KA="@firebase/installations",GA="@firebase/installations-compat",QA="@firebase/messaging",YA="@firebase/messaging-compat",XA="@firebase/performance",JA="@firebase/performance-compat",ZA="@firebase/remote-config",eR="@firebase/remote-config-compat",tR="@firebase/storage",nR="@firebase/storage-compat",rR="@firebase/firestore",iR="@firebase/vertexai-preview",sR="@firebase/firestore-compat",oR="firebase",aR="10.14.1";/**
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
 */const Kd="[DEFAULT]",lR={[Hd]:"fire-core",[OA]:"fire-core-compat",[LA]:"fire-analytics",[VA]:"fire-analytics-compat",[jA]:"fire-app-check",[FA]:"fire-app-check-compat",[UA]:"fire-auth",[zA]:"fire-auth-compat",[BA]:"fire-rtdb",[$A]:"fire-data-connect",[WA]:"fire-rtdb-compat",[qA]:"fire-fn",[HA]:"fire-fn-compat",[KA]:"fire-iid",[GA]:"fire-iid-compat",[QA]:"fire-fcm",[YA]:"fire-fcm-compat",[XA]:"fire-perf",[JA]:"fire-perf-compat",[ZA]:"fire-rc",[eR]:"fire-rc-compat",[tR]:"fire-gcs",[nR]:"fire-gcs-compat",[rR]:"fire-fst",[sR]:"fire-fst-compat",[iR]:"fire-vertex","fire-js":"fire-js",[oR]:"fire-js-all"};/**
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
 */const mu=new Map,uR=new Map,Gd=new Map;function ay(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bn(t){const e=t.name;if(Gd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Gd.set(e,t);for(const n of mu.values())ay(n,t);for(const n of uR.values())ay(n,t);return!0}function Ss(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new tc("app","Firebase",cR);/**
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
 */class hR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const TE=aR;function IE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gr.create("bad-app-name",{appName:String(i)});if(n||(n=hE()),!n)throw gr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw gr.create("duplicate-app",{appName:i})}const o=new yA(i);for(const u of Gd.values())o.addComponent(u);const l=new hR(n,r,o);return mu.set(i,l),l}function Cp(t=Kd){const e=mu.get(t);if(!e&&t===Kd&&hE())return IE();if(!e)throw gr.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=lR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}Bn(new wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const dR="firebase-heartbeat-database",fR=1,Xo="firebase-heartbeat-store";let Rh=null;function SE(){return Rh||(Rh=EE(dR,fR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Rh}async function pR(t){try{const n=(await SE()).transaction(Xo),r=await n.objectStore(Xo).get(CE(t));return await n.done,r}catch(e){if(e instanceof Pr)zn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function ly(t,e){try{const r=(await SE()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,CE(t)),await r.done}catch(n){if(n instanceof Pr)zn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function CE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mR=1024,gR=30*24*60*60*1e3;class _R{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=gR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uy(),{heartbeatsToSend:r,unsentEntries:i}=yR(this._heartbeatsCache.heartbeats),s=du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zn.warn(n),""}}}function uy(){return new Date().toISOString().substring(0,10)}function yR(t,e=mR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cy(t){return du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wR(t){Bn(new wn("platform-logger",e=>new bA(e),"PRIVATE")),Bn(new wn("heartbeat",e=>new _R(e),"PRIVATE")),Kt(Hd,oy,t),Kt(Hd,oy,"esm2017"),Kt("fire-js","")}wR("");var hy={};const dy="@firebase/database",fy="1.0.8";/**
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
 */let kE="";function ER(t){kE=t}/**
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
 */class TR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Yo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class IR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new TR(e)}}catch{}return new IR},qr=xE("localStorage"),SR=xE("sessionStorage");/**
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
 */const Xi=new rc("@firebase/database"),CR=function(){let t=1;return function(){return t++}}(),AE=function(t){const e=cA(t),n=new uA;n.update(e);const r=n.digest();return Ep.encodeByteArray(r)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_a.apply(null,r):typeof r=="object"?e+=He(r):e+=r,e+=" "}return e};let To=null,py=!0;const kR=function(t,e){U(!0,"Can't turn on custom loggers persistently."),Xi.logLevel=oe.VERBOSE,To=Xi.log.bind(Xi)},ct=function(...t){if(py===!0&&(py=!1,To===null&&SR.get("logging_enabled")===!0&&kR()),To){const e=_a.apply(null,t);To(e)}},ya=function(t){return function(...e){ct(t,...e)}},Qd=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);Xi.error(e)},$n=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw Xi.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+_a(...t);Xi.warn(e)},xR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},RE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},AR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},us="[MIN_NAME]",si="[MAX_NAME]",Cs=function(t,e){if(t===e)return 0;if(t===us||e===si)return-1;if(e===us||t===si)return 1;{const n=my(t),r=my(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},RR=function(t,e){return t===e?0:t<e?-1:1},Zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},kp=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=He(e[r]),n+=":",n+=kp(t[e[r]]);return n+="}",n},PE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const NE=function(t){U(!RE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let p="";for(u=0;u<64;u+=8){let m=parseInt(d.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},PR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},NR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const bR=new RegExp("^-?(0*)\\d{1,10}$"),MR=-2147483648,OR=2147483647,my=function(t){if(bR.test(t)){const e=Number(t);if(e>=MR&&e<=OR)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},VR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Io=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class FR{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class bl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}bl.OWNER="owner";/**
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
 */const xp="5",DE="v",bE="s",ME="r",OE="f",VE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LE="ls",FE="p",Yd="ac",jE="websocket",UE="long_polling";/**
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
 */class zE{constructor(e,n,r,i,s=!1,o="",l=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function BE(t,e,n){U(typeof e=="string","typeof type must == string"),U(typeof n=="object","typeof params must == object");let r;if(e===jE)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===UE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jR(t)&&(n.ns=t.namespace);const i=[];return Rt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class UR{constructor(){this.counters_={}}incrementCounter(e,n=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wx(this.counters_)}}/**
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
 */const Ph={},Nh={};function Ap(t){const e=t.toString();return Ph[e]||(Ph[e]=new UR),Ph[e]}function zR(t,e){const n=t.toString();return Nh[n]||(Nh[n]=e()),Nh[n]}/**
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
 */class BR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&va(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gy="start",$R="close",WR="pLPCommand",qR="pRTLPCB",$E="id",WE="pw",qE="ser",HR="cb",KR="seg",GR="ts",QR="d",YR="dframe",HE=1870,KE=30,XR=HE-KE,JR=25e3,ZR=3e4;class $i{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=Ap(n),this.urlFn=u=>(this.appCheckToken&&(u[Yd]=this.appCheckToken),BE(n,UE,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new BR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ZR)),AR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rp((...s)=>{const[o,l,u,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gy)this.id=l,this.password=u;else if(o===$R)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[gy]="t",r[qE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[HR]=this.scriptTagHolder.uniqueCallbackIdentifier),r[DE]=xp,this.transportSessionId&&(r[bE]=this.transportSessionId),this.lastSessionId&&(r[LE]=this.lastSessionId),this.applicationId&&(r[FE]=this.applicationId),this.appCheckToken&&(r[Yd]=this.appCheckToken),typeof location<"u"&&location.hostname&&VE.test(location.hostname)&&(r[ME]=OE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PR()&&!NR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=lE(n),i=PE(r,XR);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[YR]="t",r[$E]=e,r[WE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Rp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CR(),window[WR+this.uniqueCallbackIdentifier]=e,window[qR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Rp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ct("frame writing exception"),l.stack&&ct(l.stack),ct(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ct("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$E]=this.myID,e[WE]=this.myPW,e[qE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+KE+r.length<=HE;){const o=this.pendingSegs.shift();r=r+"&"+KR+i+"="+o.seg+"&"+GR+i+"="+o.ts+"&"+QR+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(JR)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const e1=16384,t1=45e3;let gu=null;typeof MozWebSocket<"u"?gu=MozWebSocket:typeof WebSocket<"u"&&(gu=WebSocket);class tn{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=Ap(n),this.connURL=tn.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[DE]=xp,typeof location<"u"&&location.hostname&&VE.test(location.hostname)&&(o[ME]=OE),n&&(o[bE]=n),r&&(o[LE]=r),i&&(o[Yd]=i),s&&(o[FE]=s),BE(e,jE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qr.set("previous_websocket_failure",!0);try{let r;eA(),this.mySock=new gu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&gu!==null&&!tn.forceDisallow_}static previouslyFailed(){return qr.isInMemoryStorage||qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Yo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=PE(n,e1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(t1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tn.responsesRequiredToBeHealthy=2;tn.healthyTimeout=3e4;/**
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
 */class Jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$i,tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tn&&tn.isAvailable();let r=n&&!tn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[tn];else{const i=this.transports_=[];for(const s of Jo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Jo.globalTransportInitialized_=!1;/**
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
 */const n1=6e4,r1=5e3,i1=10*1024,s1=100*1024,Dh="t",_y="d",o1="s",yy="r",a1="e",vy="o",wy="a",Ey="n",Ty="p",l1="h";class u1{constructor(e,n,r,i,s,o,l,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new Jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Io(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>s1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>i1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dh in e){const n=e[Dh];n===wy?this.upgradeIfSecondaryHealthy_():n===yy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===vy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ty,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wy,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ey,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Zs("t",e),r=Zs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Zs(Dh,e);if(_y in e){const r=e[_y];if(n===l1){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ey){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===o1?this.onConnectionShutdown_(r):n===yy?this.onReset_(r):n===a1?Qd("Server Error: "+r):n===vy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xp!==r&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Io(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(n1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Io(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(r1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ty,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class GE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class QE{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){U(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class _u extends QE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pE()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _u}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Iy=32,Sy=768;class me{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ce(){return new me("")}function te(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tr(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new me(t.pieces_,e)}function YE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function c1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function XE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function JE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new me(e,0)}function Ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof me)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new me(n,0)}function ne(t){return t.pieceNum_>=t.pieces_.length}function St(t,e){const n=te(t),r=te(e);if(n===null)return e;if(n===r)return St(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Pp(t,e){if(Tr(t)!==Tr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tr(t)>Tr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class h1{constructor(e,n){this.errorPrefix_=n,this.parts_=XE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nc(this.parts_[r]);ZE(this)}}function d1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nc(e),ZE(t)}function f1(t){const e=t.parts_.pop();t.byteLength_-=nc(e),t.parts_.length>0&&(t.byteLength_-=1)}function ZE(t){if(t.byteLength_>Sy)throw new Error(t.errorPrefix_+"has a key path longer than "+Sy+" bytes ("+t.byteLength_+").");if(t.parts_.length>Iy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Iy+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Np extends QE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Np}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const eo=1e3,p1=60*5*1e3,Cy=30*1e3,m1=1.3,g1=3e4,_1="server_kill",ky=3;class Vn extends GE{constructor(e,n,r,i,s,o,l,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=u,this.id=Vn.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=eo,this.maxReconnectDelay_=p1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Np.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_u.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(He(s)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ip,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const u=l.d,c=l.s;Vn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gn(e,"w")){const r=ls(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||aA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=oA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qd("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>g1&&(this.reconnectDelay_=eo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*m1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const u=function(){l?l.close():(o=!0,r())},c=function(p){U(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ct("getToken() completed but was canceled"):(ct("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,l=new u1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Vt(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(_1)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Vt(p),u())}}}interrupt(e){ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ey(this.interruptReasons_)&&(this.reconnectDelay_=eo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>kp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new me(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ky&&(this.reconnectDelay_=Cy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ky&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kE.replace(/\./g,"-")]=1,pE()?e["framework.cordova"]=1:Zx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_u.getInstance().currentlyOnline();return ey(this.interruptReasons_)&&e}}Vn.nextPersistentConnectionId_=0;Vn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class ic{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ee(us,e),i=new ee(us,n);return this.compare(r,i)!==0}minPost(){return ee.MIN}}/**
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
 */let fl;class eT extends ic{static get __EMPTY_NODE(){return fl}static set __EMPTY_NODE(e){fl=e}compare(e,n){return Cs(e.name,n.name)}isDefinedOn(e){throw Is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(si,fl)}makePost(e,n){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,fl)}toString(){return".key"}}const Ji=new eT;/**
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
 */let pl=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Dt=class lo{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lo.RED,this.left=i??mn.EMPTY_NODE,this.right=s??mn.EMPTY_NODE}copy(e,n,r,i,s){return new lo(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return mn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Dt.RED=!0;Dt.BLACK=!1;class y1{copy(e,n,r,i,s){return this}insert(e,n,r){return new Dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let mn=class Ml{constructor(e,n=Ml.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ml(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Dt.BLACK,null,null))}remove(e){return new Ml(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Dt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new pl(this.root_,null,this.comparator_,!0,e)}};mn.EMPTY_NODE=new y1;/**
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
 */function v1(t,e){return Cs(t.name,e.name)}function Dp(t,e){return Cs(t,e)}/**
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
 */let Xd;function w1(t){Xd=t}const tT=function(t){return typeof t=="number"?"number:"+NE(t):"string:"+t},nT=function(t){if(t.isLeafNode()){const e=t.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else U(t===Xd||t.isEmpty(),"priority of unexpected type.");U(t===Xd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let xy;class $e{constructor(e,n=$e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nT(this.priorityNode_)}static set __childrenNodeConstructor(e){xy=e}static get __childrenNodeConstructor(){return xy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:$e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:$e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=te(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||Tr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,$e.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tT(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=NE(this.value_):e+=this.value_,this.lazyHash_=AE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $e.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=$e.VALUE_TYPE_ORDER.indexOf(n),s=$e.VALUE_TYPE_ORDER.indexOf(r);return U(i>=0,"Unknown leaf type: "+n),U(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}$e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rT,iT;function E1(t){rT=t}function T1(t){iT=t}class I1 extends ic{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Cs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(si,new $e("[PRIORITY-POST]",iT))}makePost(e,n){const r=rT(e);return new ee(n,new $e("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ne=new I1;/**
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
 */const S1=Math.log(2);class C1{constructor(e){const n=s=>parseInt(Math.log(s)/S1,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yu=function(t,e,n,r){t.sort(e);const i=function(u,c){const d=c-u;let p,m;if(d===0)return null;if(d===1)return p=t[u],m=n?n(p):p,new Dt(m,p.node,Dt.BLACK,null,null);{const w=parseInt(d/2,10)+u,k=i(u,w),N=i(w+1,c);return p=t[w],m=n?n(p):p,new Dt(m,p.node,Dt.BLACK,k,N)}},s=function(u){let c=null,d=null,p=t.length;const m=function(k,N){const b=p-k,C=p;p-=k;const T=i(b+1,C),x=t[b],M=n?n(x):x;w(new Dt(M,x.node,N,null,T))},w=function(k){c?(c.left=k,c=k):(d=k,c=k)};for(let k=0;k<u.count;++k){const N=u.nextBitIsOne(),b=Math.pow(2,u.count-(k+1));N?m(b,Dt.BLACK):(m(b,Dt.BLACK),m(b,Dt.RED))}return d},o=new C1(t.length),l=s(o);return new mn(r||e,l)};/**
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
 */let bh;const xi={};class bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return U(xi&&Ne,"ChildrenNode.ts has not been loaded"),bh=bh||new bn({".priority":xi},{".priority":Ne}),bh}get(e){const n=ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mn?n:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,n){U(e!==Ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ee.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=yu(r,e.getCompare()):l=xi;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=l,new bn(d,c)}addToIndexes(e,n){const r=fu(this.indexes_,(i,s)=>{const o=ls(this.indexSet_,s);if(U(o,"Missing index implementation for "+s),i===xi)if(o.isDefinedOn(e.node)){const l=[],u=n.getIterator(ee.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&l.push(c),c=u.getNext();return l.push(e),yu(l,o.getCompare())}else return xi;else{const l=n.get(e.name);let u=i;return l&&(u=u.remove(new ee(e.name,l))),u.insert(e,e.node)}});return new bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=fu(this.indexes_,i=>{if(i===xi)return i;{const s=n.get(e.name);return s?i.remove(new ee(e.name,s)):i}});return new bn(r,this.indexSet_)}}/**
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
 */let to;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&nT(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return to||(to=new G(new mn(Dp),null,bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||to}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?to:n}}getChild(e){const n=te(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(U(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ee(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?to:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=te(e);if(r===null)return n;{U(te(e)!==".priority"||Tr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ne,(o,l)=>{n[o]=l.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tT(this.getPriority().val())+":"),this.forEachChild(Ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":AE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ee(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===wa?-1:0}withIndex(e){if(e===Ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ne),i=n.getIterator(Ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ji?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class k1 extends G{constructor(){super(new mn(Dp),G.EMPTY_NODE,bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const wa=new k1;Object.defineProperties(ee,{MIN:{value:new ee(us,G.EMPTY_NODE)},MAX:{value:new ee(si,wa)}});eT.__EMPTY_NODE=G.EMPTY_NODE;$e.__childrenNodeConstructor=G;w1(wa);T1(wa);/**
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
 */const x1=!0;function ht(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new $e(n,ht(e))}if(!(t instanceof Array)&&x1){const n=[];let r=!1;if(Rt(t,(o,l)=>{if(o.substring(0,1)!=="."){const u=ht(l);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ee(o,u)))}}),n.length===0)return G.EMPTY_NODE;const s=yu(n,v1,o=>o.name,Dp);if(r){const o=yu(n,Ne.getCompare());return new G(s,ht(e),new bn({".priority":o},{".priority":Ne}))}else return new G(s,ht(e),bn.Default)}else{let n=G.EMPTY_NODE;return Rt(t,(r,i)=>{if(Gn(t,r)&&r.substring(0,1)!=="."){const s=ht(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ht(e))}}E1(ht);/**
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
 */class A1 extends ic{constructor(e){super(),this.indexPath_=e,U(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Cs(e.name,n.name):s}makePost(e,n){const r=ht(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new ee(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,wa);return new ee(si,e)}toString(){return XE(this.indexPath_,0).join("/")}}/**
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
 */class R1 extends ic{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const r=ht(e);return new ee(n,r)}toString(){return".value"}}const P1=new R1;/**
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
 */function sT(t){return{type:"value",snapshotNode:t}}function cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Zo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ea(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function N1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Zo(n,l)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(cs(n,r)):o.trackChildChange(ea(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(Zo(i,s))}),n.isLeafNode()||n.forEachChild(Ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ea(i,s,o))}else r.trackChildChange(cs(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ta{constructor(e){this.indexedFilter_=new bp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ta.getStartPost_(e),this.endPost_=ta.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new ee(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(Ne,(o,l)=>{s.matches(new ee(o,l))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class D1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ee(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,w)=>p(w,m)}else o=this.index_.getCompare();const l=e;U(l.numChildren()===this.limit_,"");const u=new ee(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(l.hasChild(n)){const p=l.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||l.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const w=m==null?1:o(m,u);if(d&&!r.isEmpty()&&w>=0)return s!=null&&s.trackChildChange(ea(n,r,p)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Zo(n,p));const N=l.updateImmediateChild(n,G.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(cs(m.name,m.node)),N.updateImmediateChild(m.name,m.node)):N}}else return r.isEmpty()?e:d&&o(c,u)>=0?(s!=null&&(s.trackChildChange(Zo(c.name,c.node)),s.trackChildChange(cs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,G.EMPTY_NODE)):e}}/**
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
 */class Mp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:us}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new Mp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function b1(t){return t.loadsAllData()?new bp(t.getIndex()):t.hasLimit()?new D1(t):new ta(t)}function Ay(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===P1?n="$value":t.index_===Ji?n="$key":(U(t.index_ instanceof A1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=He(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+He(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=He(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ry(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
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
 */class vu extends GE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ya("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vu.getListenId_(e,r),l={};this.listens_[o]=l;const u=Ay(e._queryParams);this.restRequest_(s+".json",u,(c,d)=>{let p=d;if(c===404&&(p=null,c=null),c===null&&this.onDataUpdate_(s,p,!1,r),ls(this.listens_,o)===l){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=vu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ay(e._queryParams),r=e._path.toString(),i=new Ip;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+lA(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let u=null;if(l.status>=200&&l.status<300){try{u=Yo(l.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,u)}else l.status!==401&&l.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class M1{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wu(){return{value:null,children:new Map}}function oT(t,e,n){if(ne(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=te(e);t.children.has(r)||t.children.set(r,wu());const i=t.children.get(r);e=ge(e),oT(i,e,n)}}function Jd(t,e,n){t.value!==null?n(e,t.value):O1(t,(r,i)=>{const s=new me(e.toString()+"/"+r);Jd(i,s,n)})}function O1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class V1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Rt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Py=10*1e3,L1=30*1e3,F1=5*60*1e3;class j1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new V1(e);const r=Py+(L1-Py)*Math.random();Io(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Rt(e,(i,s)=>{s>0&&Gn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Io(this.reportStats_.bind(this),Math.floor(Math.random()*2*F1))}}/**
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
 */var rn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(rn||(rn={}));function aT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Op(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Eu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=rn.ACK_USER_WRITE,this.source=aT()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new me(e));return new Eu(ce(),n,this.revert)}}else return U(te(this.path)===e,"operationForChild called for unrelated child."),new Eu(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class na{constructor(e,n){this.source=e,this.path=n,this.type=rn.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new na(this.source,ce()):new na(this.source,ge(this.path))}}/**
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
 */class oi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=rn.OVERWRITE}operationForChild(e){return ne(this.path)?new oi(this.source,ce(),this.snap.getImmediateChild(e)):new oi(this.source,ge(this.path),this.snap)}}/**
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
 */class ra{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=rn.MERGE}operationForChild(e){if(ne(this.path)){const n=this.children.subtree(new me(e));return n.isEmpty()?null:n.value?new oi(this.source,ce(),n.value):new ra(this.source,ce(),n)}else return U(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ra(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ai{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const n=te(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class U1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function z1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(N1(o.childName,o.snapshotNode))}),no(t,i,"child_removed",e,r,n),no(t,i,"child_added",e,r,n),no(t,i,"child_moved",s,r,n),no(t,i,"child_changed",e,r,n),no(t,i,"value",e,r,n),i}function no(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,u)=>$1(t,l,u)),o.forEach(l=>{const u=B1(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(u,t.query_))})})}function B1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $1(t,e,n){if(e.childName==null||n.childName==null)throw Is("Should only compare child_ events.");const r=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function sc(t,e){return{eventCache:t,serverCache:e}}function So(t,e,n,r){return sc(new ai(e,n,r),t.serverCache)}function lT(t,e,n,r){return sc(t.eventCache,new ai(e,n,r))}function Zd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function li(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Mh;const W1=()=>(Mh||(Mh=new mn(RR)),Mh);class we{constructor(e,n=W1()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return Rt(e,(r,i)=>{n=n.set(new me(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ce(),value:this.value};if(ne(e))return null;{const r=te(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ge(e),n);return s!=null?{path:Ue(new me(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const n=te(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new we(null)}}set(e,n){if(ne(e))return new we(n,this.children);{const r=te(e),s=(this.children.get(r)||new we(null)).set(ge(e),n),o=this.children.insert(r,s);return new we(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=te(e),r=this.children.get(n);if(r){const i=r.remove(ge(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new we(null):new we(this.value,s)}else return this}}get(e){if(ne(e))return this.value;{const n=te(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(ne(e))return n;{const r=te(e),s=(this.children.get(r)||new we(null)).setTree(ge(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new we(this.value,o)}}fold(e){return this.fold_(ce(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ue(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ce(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ne(e))return null;{const s=te(e),o=this.children.get(s);return o?o.findOnPath_(ge(e),Ue(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ce(),n)}foreachOnPath_(e,n,r){if(ne(e))return this;{this.value&&r(n,this.value);const i=te(e),s=this.children.get(i);return s?s.foreachOnPath_(ge(e),Ue(n,i),r):new we(null)}}foreach(e){this.foreach_(ce(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class an{constructor(e){this.writeTree_=e}static empty(){return new an(new we(null))}}function Co(t,e,n){if(ne(e))return new an(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=St(i,e);return s=s.updateChild(o,n),new an(t.writeTree_.set(i,s))}else{const i=new we(n),s=t.writeTree_.setTree(e,i);return new an(s)}}}function Ny(t,e,n){let r=t;return Rt(n,(i,s)=>{r=Co(r,Ue(e,i),s)}),r}function Dy(t,e){if(ne(e))return an.empty();{const n=t.writeTree_.setTree(e,new we(null));return new an(n)}}function ef(t,e){return _i(t,e)!=null}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(St(n.path,e)):null}function by(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(r,i)=>{e.push(new ee(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ee(r,i.value))}),e}function _r(t,e){if(ne(e))return t;{const n=_i(t,e);return n!=null?new an(new we(n)):new an(t.writeTree_.subtree(e))}}function tf(t){return t.writeTree_.isEmpty()}function hs(t,e){return uT(ce(),t.writeTree_,e)}function uT(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(U(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=uT(Ue(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ue(t,".priority"),r)),n}}/**
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
 */function Lp(t,e){return fT(e,t)}function q1(t,e,n,r,i){U(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Co(t.visibleWrites,e,n)),t.lastWriteId=r}function H1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function K1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);U(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&G1(l,r.path)?i=!1:nn(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Q1(t),!0;if(r.snap)t.visibleWrites=Dy(t.visibleWrites,r.path);else{const l=r.children;Rt(l,u=>{t.visibleWrites=Dy(t.visibleWrites,Ue(r.path,u))})}return!0}else return!1}function G1(t,e){if(t.snap)return nn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nn(Ue(t.path,n),e))return!0;return!1}function Q1(t){t.visibleWrites=cT(t.allWrites,Y1,ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Y1(t){return t.visible}function cT(t,e,n){let r=an.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)nn(n,o)?(l=St(n,o),r=Co(r,l,s.snap)):nn(o,n)&&(l=St(o,n),r=Co(r,ce(),s.snap.getChild(l)));else if(s.children){if(nn(n,o))l=St(n,o),r=Ny(r,l,s.children);else if(nn(o,n))if(l=St(o,n),ne(l))r=Ny(r,ce(),s.children);else{const u=ls(s.children,te(l));if(u){const c=u.getChild(ge(l));r=Co(r,ce(),c)}}}else throw Is("WriteRecord should have .snap or .children")}}return r}function hT(t,e,n,r,i){if(!r&&!i){const s=_i(t.visibleWrites,e);if(s!=null)return s;{const o=_r(t.visibleWrites,e);if(tf(o))return n;if(n==null&&!ef(o,ce()))return null;{const l=n||G.EMPTY_NODE;return hs(o,l)}}}else{const s=_r(t.visibleWrites,e);if(!i&&tf(s))return n;if(!i&&n==null&&!ef(s,ce()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(nn(c.path,e)||nn(e,c.path))},l=cT(t.allWrites,o,e),u=n||G.EMPTY_NODE;return hs(l,u)}}}function X1(t,e,n){let r=G.EMPTY_NODE;const i=_i(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_r(t.visibleWrites,e);return n.forEachChild(Ne,(o,l)=>{const u=hs(_r(s,new me(o)),l);r=r.updateImmediateChild(o,u)}),by(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_r(t.visibleWrites,e);return by(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function J1(t,e,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ue(e,n);if(ef(t.visibleWrites,s))return null;{const o=_r(t.visibleWrites,s);return tf(o)?i.getChild(n):hs(o,i.getChild(n))}}function Z1(t,e,n,r){const i=Ue(e,n),s=_i(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_r(t.visibleWrites,i);return hs(o,r.getNode().getImmediateChild(n))}else return null}function eP(t,e){return _i(t.visibleWrites,e)}function tP(t,e,n,r,i,s,o){let l;const u=_r(t.visibleWrites,e),c=_i(u,ce());if(c!=null)l=c;else if(n!=null)l=hs(u,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),m=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let w=m.getNext();for(;w&&d.length<i;)p(w,r)!==0&&d.push(w),w=m.getNext();return d}else return[]}function nP(){return{visibleWrites:an.empty(),allWrites:[],lastWriteId:-1}}function Tu(t,e,n,r){return hT(t.writeTree,t.treePath,e,n,r)}function Fp(t,e){return X1(t.writeTree,t.treePath,e)}function My(t,e,n,r){return J1(t.writeTree,t.treePath,e,n,r)}function Iu(t,e){return eP(t.writeTree,Ue(t.treePath,e))}function rP(t,e,n,r,i,s){return tP(t.writeTree,t.treePath,e,n,r,i,s)}function jp(t,e,n){return Z1(t.writeTree,t.treePath,e,n)}function dT(t,e){return fT(Ue(t.treePath,e),t.writeTree)}function fT(t,e){return{treePath:t,writeTree:e}}/**
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
 */class iP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;U(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ea(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Zo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,cs(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ea(r,e.snapshotNode,i.oldSnap));else throw Is("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class sP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const pT=new sP;class Up{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ai(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:li(this.viewCache_),s=rP(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function oP(t){return{filter:t}}function aP(t,e){U(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lP(t,e,n,r,i){const s=new iP;let o,l;if(n.type===rn.OVERWRITE){const c=n;c.source.fromUser?o=nf(t,e,c.path,c.snap,r,i,s):(U(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!ne(c.path),o=Su(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===rn.MERGE){const c=n;c.source.fromUser?o=cP(t,e,c.path,c.children,r,i,s):(U(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=rf(t,e,c.path,c.children,r,i,l,s))}else if(n.type===rn.ACK_USER_WRITE){const c=n;c.revert?o=fP(t,e,c.path,r,i,s):o=hP(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===rn.LISTEN_COMPLETE)o=dP(t,e,n.path,r,s);else throw Is("Unknown operation type: "+n.type);const u=s.getChanges();return uP(e,o,u),{viewCache:o,changes:u}}function uP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Zd(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(sT(Zd(e)))}}function mT(t,e,n,r,i,s){const o=e.eventCache;if(Iu(r,n)!=null)return e;{let l,u;if(ne(n))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=li(e),d=c instanceof G?c:G.EMPTY_NODE,p=Fp(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const c=Tu(r,li(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=te(n);if(c===".priority"){U(Tr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const p=My(r,n,d,u);p!=null?l=t.filter.updatePriority(d,p):l=o.getNode()}else{const d=ge(n);let p;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const m=My(r,n,o.getNode(),u);m!=null?p=o.getNode().getImmediateChild(c).updateChild(d,m):p=o.getNode().getImmediateChild(c)}else p=jp(r,c,e.serverCache);p!=null?l=t.filter.updateChild(o.getNode(),c,p,d,i,s):l=o.getNode()}}return So(e,l,o.isFullyInitialized()||ne(n),t.filter.filtersNodes())}}function Su(t,e,n,r,i,s,o,l){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(ne(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),w,null)}else{const w=te(n);if(!u.isCompleteForPath(n)&&Tr(n)>1)return e;const k=ge(n),b=u.getNode().getImmediateChild(w).updateChild(k,r);w===".priority"?c=d.updatePriority(u.getNode(),b):c=d.updateChild(u.getNode(),w,b,k,pT,null)}const p=lT(e,c,u.isFullyInitialized()||ne(n),d.filtersNodes()),m=new Up(i,p,s);return mT(t,p,n,i,m,l)}function nf(t,e,n,r,i,s,o){const l=e.eventCache;let u,c;const d=new Up(i,e,s);if(ne(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=So(e,c,!0,t.filter.filtersNodes());else{const p=te(n);if(p===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=So(e,c,l.isFullyInitialized(),l.isFiltered());else{const m=ge(n),w=l.getNode().getImmediateChild(p);let k;if(ne(m))k=r;else{const N=d.getCompleteChild(p);N!=null?YE(m)===".priority"&&N.getChild(JE(m)).isEmpty()?k=N:k=N.updateChild(m,r):k=G.EMPTY_NODE}if(w.equals(k))u=e;else{const N=t.filter.updateChild(l.getNode(),p,k,m,d,o);u=So(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Oy(t,e){return t.eventCache.isCompleteForChild(e)}function cP(t,e,n,r,i,s,o){let l=e;return r.foreach((u,c)=>{const d=Ue(n,u);Oy(e,te(d))&&(l=nf(t,l,d,c,i,s,o))}),r.foreach((u,c)=>{const d=Ue(n,u);Oy(e,te(d))||(l=nf(t,l,d,c,i,s,o))}),l}function Vy(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function rf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;ne(n)?c=r:c=new we(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((p,m)=>{if(d.hasChild(p)){const w=e.serverCache.getNode().getImmediateChild(p),k=Vy(t,w,m);u=Su(t,u,new me(p),k,i,s,o,l)}}),c.children.inorderTraversal((p,m)=>{const w=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!d.hasChild(p)&&!w){const k=e.serverCache.getNode().getImmediateChild(p),N=Vy(t,k,m);u=Su(t,u,new me(p),N,i,s,o,l)}}),u}function hP(t,e,n,r,i,s,o){if(Iu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ne(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Su(t,e,n,u.getNode().getChild(n),i,s,l,o);if(ne(n)){let c=new we(null);return u.getNode().forEachChild(Ji,(d,p)=>{c=c.set(new me(d),p)}),rf(t,e,n,c,i,s,l,o)}else return e}else{let c=new we(null);return r.foreach((d,p)=>{const m=Ue(n,d);u.isCompleteForPath(m)&&(c=c.set(d,u.getNode().getChild(m)))}),rf(t,e,n,c,i,s,l,o)}}function dP(t,e,n,r,i){const s=e.serverCache,o=lT(e,s.getNode(),s.isFullyInitialized()||ne(n),s.isFiltered());return mT(t,o,n,r,pT,i)}function fP(t,e,n,r,i,s){let o;if(Iu(r,n)!=null)return e;{const l=new Up(r,e,i),u=e.eventCache.getNode();let c;if(ne(n)||te(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Tu(r,li(e));else{const p=e.serverCache.getNode();U(p instanceof G,"serverChildren would be complete if leaf node"),d=Fp(r,p)}d=d,c=t.filter.updateFullNode(u,d,s)}else{const d=te(n);let p=jp(r,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?c=t.filter.updateChild(u,d,p,ge(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,G.EMPTY_NODE,ge(n),l,s):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tu(r,li(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Iu(r,ce())!=null,So(e,c,o,t.filter.filtersNodes())}}/**
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
 */class pP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new bp(r.getIndex()),s=b1(r);this.processor_=oP(s);const o=n.serverCache,l=n.eventCache,u=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(G.EMPTY_NODE,l.getNode(),null),d=new ai(u,o.isFullyInitialized(),i.filtersNodes()),p=new ai(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=sc(p,d),this.eventGenerator_=new U1(this.query_)}get query(){return this.query_}}function mP(t){return t.viewCache_.serverCache.getNode()}function gP(t,e){const n=li(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ne(e)&&!n.getImmediateChild(te(e)).isEmpty())?n.getChild(e):null}function Ly(t){return t.eventRegistrations_.length===0}function _P(t,e){t.eventRegistrations_.push(e)}function Fy(t,e,n){const r=[];if(n){U(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function jy(t,e,n,r){e.type===rn.MERGE&&e.source.queryId!==null&&(U(li(t.viewCache_),"We should always have a full cache before handling merges"),U(Zd(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=lP(t.processor_,i,e,n,r);return aP(t.processor_,s.viewCache),U(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,gT(t,s.changes,s.viewCache.eventCache.getNode(),null)}function yP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(s,o)=>{r.push(cs(s,o))}),n.isFullyInitialized()&&r.push(sT(n.getNode())),gT(t,r,n.getNode(),e)}function gT(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return z1(t.eventGenerator_,e,n,i)}/**
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
 */let Cu;class vP{constructor(){this.views=new Map}}function wP(t){U(!Cu,"__referenceConstructor has already been defined"),Cu=t}function EP(){return U(Cu,"Reference.ts has not been loaded"),Cu}function TP(t){return t.views.size===0}function zp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return U(s!=null,"SyncTree gave us an op for an invalid query."),jy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(jy(o,e,n,r));return s}}function IP(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Tu(n,i?r:null),u=!1;l?u=!0:r instanceof G?(l=Fp(n,r),u=!1):(l=G.EMPTY_NODE,u=!1);const c=sc(new ai(l,u,!1),new ai(r,i,!1));return new pP(e,c)}return o}function SP(t,e,n,r,i,s){const o=IP(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_P(o,n),yP(o,n)}function CP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Ir(t);if(i==="default")for(const[u,c]of t.views.entries())o=o.concat(Fy(c,n,r)),Ly(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||s.push(c.query));else{const u=t.views.get(i);u&&(o=o.concat(Fy(u,n,r)),Ly(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return l&&!Ir(t)&&s.push(new(EP())(e._repo,e._path)),{removed:s,events:o}}function _T(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Zi(t,e){let n=null;for(const r of t.views.values())n=n||gP(r,e);return n}function yT(t,e){if(e._queryParams.loadsAllData())return oc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function vT(t,e){return yT(t,e)!=null}function Ir(t){return oc(t)!=null}function oc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ku;function kP(t){U(!ku,"__referenceConstructor has already been defined"),ku=t}function xP(){return U(ku,"Reference.ts has not been loaded"),ku}let AP=1;class Uy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=nP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function RP(t,e,n,r,i){return q1(t.pendingWriteTree_,e,n,r,i),i?Ea(t,new oi(aT(),e,n)):[]}function Wi(t,e,n=!1){const r=H1(t.pendingWriteTree_,e);if(K1(t.pendingWriteTree_,e)){let s=new we(null);return r.snap!=null?s=s.set(ce(),!0):Rt(r.children,o=>{s=s.set(new me(o),!0)}),Ea(t,new Eu(r.path,s,n))}else return[]}function ac(t,e,n){return Ea(t,new oi(Op(),e,n))}function PP(t,e,n){const r=we.fromObject(n);return Ea(t,new ra(Op(),e,r))}function NP(t,e){return Ea(t,new na(Op(),e))}function DP(t,e,n){const r=Bp(t,n);if(r){const i=$p(r),s=i.path,o=i.queryId,l=St(s,e),u=new na(Vp(o),l);return Wp(t,s,u)}else return[]}function sf(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||vT(o,e))){const u=CP(o,e,n,r);TP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=u.removed;if(l=u.events,!i){const d=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(s,(m,w)=>Ir(w));if(d&&!p){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const w=OP(m);for(let k=0;k<w.length;++k){const N=w[k],b=N.query,C=IT(t,N);t.listenProvider_.startListening(ko(b),xu(t,b),C.hashFn,C.onComplete)}}}!p&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ko(e),null):c.forEach(m=>{const w=t.queryToTagMap.get(lc(m));t.listenProvider_.stopListening(ko(m),w)}))}VP(t,c)}return l}function bP(t,e,n,r){const i=Bp(t,r);if(i!=null){const s=$p(i),o=s.path,l=s.queryId,u=St(o,e),c=new oi(Vp(l),u,n);return Wp(t,o,c)}else return[]}function MP(t,e,n,r){const i=Bp(t,r);if(i){const s=$p(i),o=s.path,l=s.queryId,u=St(o,e),c=we.fromObject(n),d=new ra(Vp(l),u,c);return Wp(t,o,d)}else return[]}function zy(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,w)=>{const k=St(m,i);s=s||Zi(w,k),o=o||Ir(w)});let l=t.syncPointTree_.get(i);l?(o=o||Ir(l),s=s||Zi(l,ce())):(l=new vP,t.syncPointTree_=t.syncPointTree_.set(i,l));let u;s!=null?u=!0:(u=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((w,k)=>{const N=Zi(k,ce());N&&(s=s.updateImmediateChild(w,N))}));const c=vT(l,e);if(!c&&!e._queryParams.loadsAllData()){const m=lc(e);U(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const w=LP();t.queryToTagMap.set(m,w),t.tagToQueryMap.set(w,m)}const d=Lp(t.pendingWriteTree_,i);let p=SP(l,e,n,d,s,u);if(!c&&!o&&!r){const m=yT(l,e);p=p.concat(FP(t,e,m))}return p}function wT(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const u=St(o,e),c=Zi(l,u);if(c)return c});return hT(i,e,s,n,!0)}function Ea(t,e){return ET(e,t.syncPointTree_,null,Lp(t.pendingWriteTree_,ce()))}function ET(t,e,n,r){if(ne(t.path))return TT(t,e,n,r);{const i=e.get(ce());n==null&&i!=null&&(n=Zi(i,ce()));let s=[];const o=te(t.path),l=t.operationForChild(o),u=e.children.get(o);if(u&&l){const c=n?n.getImmediateChild(o):null,d=dT(r,o);s=s.concat(ET(l,u,c,d))}return i&&(s=s.concat(zp(i,t,r,n))),s}}function TT(t,e,n,r){const i=e.get(ce());n==null&&i!=null&&(n=Zi(i,ce()));let s=[];return e.children.inorderTraversal((o,l)=>{const u=n?n.getImmediateChild(o):null,c=dT(r,o),d=t.operationForChild(o);d&&(s=s.concat(TT(d,l,u,c)))}),i&&(s=s.concat(zp(i,t,r,n))),s}function IT(t,e){const n=e.query,r=xu(t,n);return{hashFn:()=>(mP(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?DP(t,n._path,r):NP(t,n._path);{const s=DR(i,n);return sf(t,n,null,s)}}}}function xu(t,e){const n=lc(e);return t.queryToTagMap.get(n)}function lc(t){return t._path.toString()+"$"+t._queryIdentifier}function Bp(t,e){return t.tagToQueryMap.get(e)}function $p(t){const e=t.indexOf("$");return U(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new me(t.substr(0,e))}}function Wp(t,e,n){const r=t.syncPointTree_.get(e);U(r,"Missing sync point for query tag that we're tracking");const i=Lp(t.pendingWriteTree_,e);return zp(r,n,i,null)}function OP(t){return t.fold((e,n,r)=>{if(n&&Ir(n))return[oc(n)];{let i=[];return n&&(i=_T(n)),Rt(r,(s,o)=>{i=i.concat(o)}),i}})}function ko(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xP())(t._repo,t._path):t}function VP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=lc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function LP(){return AP++}function FP(t,e,n){const r=e._path,i=xu(t,e),s=IT(t,n),o=t.listenProvider_.startListening(ko(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)U(!Ir(l.value),"If we're adding a query, it shouldn't be shadowed");else{const u=l.fold((c,d,p)=>{if(!ne(c)&&d&&Ir(d))return[oc(d).query];{let m=[];return d&&(m=m.concat(_T(d).map(w=>w.query))),Rt(p,(w,k)=>{m=m.concat(k)}),m}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(ko(d),xu(t,d))}}return o}/**
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
 */class qp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qp(n)}node(){return this.node_}}class Hp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new Hp(this.syncTree_,n)}node(){return wT(this.syncTree_,this.path_)}}const jP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},By=function(t,e,n){if(!t||typeof t!="object")return t;if(U(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return UP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return zP(t[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},UP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:U(!1,"Unexpected server value: "+t)}},zP=function(t,e,n){t.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const i=e.node();if(U(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},BP=function(t,e,n,r){return Kp(e,new Hp(n,t),r)},$P=function(t,e,n){return Kp(t,new qp(e),n)};function Kp(t,e,n){const r=t.getPriority().val(),i=By(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=By(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new $e(l,ht(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new $e(i))),o.forEachChild(Ne,(l,u)=>{const c=Kp(u,e.getImmediateChild(l),n);c!==u&&(s=s.updateImmediateChild(l,c))}),s}}/**
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
 */class Gp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Qp(t,e){let n=e instanceof me?e:new me(e),r=t,i=te(n);for(;i!==null;){const s=ls(r.node.children,i)||{children:{},childCount:0};r=new Gp(i,r,s),n=ge(n),i=te(n)}return r}function ks(t){return t.node.value}function ST(t,e){t.node.value=e,of(t)}function CT(t){return t.node.childCount>0}function WP(t){return ks(t)===void 0&&!CT(t)}function uc(t,e){Rt(t.node.children,(n,r)=>{e(new Gp(n,t,r))})}function kT(t,e,n,r){n&&e(t),uc(t,i=>{kT(i,e,!0)})}function qP(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ta(t){return new me(t.parent===null?t.name:Ta(t.parent)+"/"+t.name)}function of(t){t.parent!==null&&HP(t.parent,t.name,t)}function HP(t,e,n){const r=WP(n),i=Gn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,of(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,of(t))}/**
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
 */const KP=/[\[\].#$\/\u0000-\u001F\u007F]/,GP=/[\[\].#$\u0000-\u001F\u007F]/,Oh=10*1024*1024,xT=function(t){return typeof t=="string"&&t.length!==0&&!KP.test(t)},AT=function(t){return typeof t=="string"&&t.length!==0&&!GP.test(t)},QP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AT(t)},RT=function(t,e,n){const r=n instanceof me?new h1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(RE(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>Oh/3&&nc(e)>Oh)throw new Error(t+"contains a string greater than "+Oh+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Rt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!xT(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);d1(r,o),RT(t,l,r),f1(r)}),i&&s)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},PT=function(t,e,n,r){if(!AT(n))throw new Error(yE(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),PT(t,e,n)},XP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QP(n))throw new Error(yE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class JP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function NT(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Pp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function DT(t,e,n){NT(t,n),bT(t,r=>Pp(r,e))}function yi(t,e,n){NT(t,n),bT(t,r=>nn(r,e)||nn(e,r))}function bT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ZP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ZP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();To&&ct("event: "+n.toString()),va(r)}}}/**
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
 */const eN="repo_interrupt",tN=25;class nN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new JP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wu(),this.transactionQueueTree_=new Gp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rN(t,e,n){if(t.stats_=Ap(t.repoInfo_),t.forceRestClient_||VR())t.server_=new vu(t.repoInfo_,(r,i,s,o)=>{$y(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vn(t.repoInfo_,e,(r,i,s,o)=>{$y(t,r,i,s,o)},r=>{Wy(t,r)},r=>{sN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=zR(t.repoInfo_,()=>new j1(t.stats_,t.server_)),t.infoData_=new M1,t.infoSyncTree_=new Uy({startListening:(r,i,s,o)=>{let l=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(l=ac(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yp(t,"connected",!1),t.serverSyncTree_=new Uy({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,u)=>{const c=o(l,u);yi(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function iN(t){const n=t.infoData_.getNode(new me(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function MT(t){return jP({timestamp:iN(t)})}function $y(t,e,n,r,i){t.dataUpdateCount++;const s=new me(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=fu(n,c=>ht(c));o=MP(t.serverSyncTree_,s,u,i)}else{const u=ht(n);o=bP(t.serverSyncTree_,s,u,i)}else if(r){const u=fu(n,c=>ht(c));o=PP(t.serverSyncTree_,s,u)}else{const u=ht(n);o=ac(t.serverSyncTree_,s,u)}let l=s;o.length>0&&(l=Jp(t,s)),yi(t.eventQueue_,l,o)}function Wy(t,e){Yp(t,"connected",e),e===!1&&aN(t)}function sN(t,e){Rt(e,(n,r)=>{Yp(t,n,r)})}function Yp(t,e,n){const r=new me("/.info/"+e),i=ht(n);t.infoData_.updateSnapshot(r,i);const s=ac(t.infoSyncTree_,r,i);yi(t.eventQueue_,r,s)}function oN(t){return t.nextWriteId_++}function aN(t){OT(t,"onDisconnectEvents");const e=MT(t),n=wu();Jd(t.onDisconnect_,ce(),(i,s)=>{const o=BP(i,s,t.serverSyncTree_,e);oT(n,i,o)});let r=[];Jd(n,ce(),(i,s)=>{r=r.concat(ac(t.serverSyncTree_,i,s));const o=fN(t,i);Jp(t,o)}),t.onDisconnect_=wu(),yi(t.eventQueue_,ce(),r)}function lN(t,e,n){let r;te(e._path)===".info"?r=zy(t.infoSyncTree_,e,n):r=zy(t.serverSyncTree_,e,n),DT(t.eventQueue_,e._path,r)}function uN(t,e,n){let r;te(e._path)===".info"?r=sf(t.infoSyncTree_,e,n):r=sf(t.serverSyncTree_,e,n),DT(t.eventQueue_,e._path,r)}function cN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(eN)}function OT(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ct(n,...e)}function VT(t,e,n){return wT(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function Xp(t,e=t.transactionQueueTree_){if(e||cc(t,e),ks(e)){const n=FT(t,e);U(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hN(t,Ta(e),n)}else CT(e)&&uc(e,n=>{Xp(t,n)})}function hN(t,e,n){const r=n.map(c=>c.currentWriteId),i=VT(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];U(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=St(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const l=s.val(!0),u=e;t.server_.put(u.toString(),l,c=>{OT(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Wi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();cc(t,Qp(t.transactionQueueTree_,e)),Xp(t,t.transactionQueueTree_),yi(t.eventQueue_,e,d);for(let m=0;m<p.length;m++)va(p[m])}else{if(c==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Vt("transaction at "+u.toString()+" failed: "+c);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=c}Jp(t,e)}},o)}function Jp(t,e){const n=LT(t,e),r=Ta(n),i=FT(t,n);return dN(t,i,r),r}function dN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const u=e[l],c=St(n,u.path);let d=!1,p;if(U(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,i=i.concat(Wi(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=tN)d=!0,p="maxretry",i=i.concat(Wi(t.serverSyncTree_,u.currentWriteId,!0));else{const m=VT(t,u.path,o);u.currentInputSnapshot=m;const w=e[l].update(m.val());if(w!==void 0){RT("transaction failed: Data returned ",w,u.path);let k=ht(w);typeof w=="object"&&w!=null&&Gn(w,".priority")||(k=k.updatePriority(m.getPriority()));const b=u.currentWriteId,C=MT(t),T=$P(k,m,C);u.currentOutputSnapshotRaw=k,u.currentOutputSnapshotResolved=T,u.currentWriteId=oN(t),o.splice(o.indexOf(b),1),i=i.concat(RP(t.serverSyncTree_,u.path,T,u.currentWriteId,u.applyLocally)),i=i.concat(Wi(t.serverSyncTree_,b,!0))}else d=!0,p="nodata",i=i.concat(Wi(t.serverSyncTree_,u.currentWriteId,!0))}yi(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(m){setTimeout(m,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(p),!1,null))))}cc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)va(r[l]);Xp(t,t.transactionQueueTree_)}function LT(t,e){let n,r=t.transactionQueueTree_;for(n=te(e);n!==null&&ks(r)===void 0;)r=Qp(r,n),e=ge(e),n=te(e);return r}function FT(t,e){const n=[];return jT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function jT(t,e,n){const r=ks(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uc(e,i=>{jT(t,i,n)})}function cc(t,e){const n=ks(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ST(e,n.length>0?n:void 0)}uc(e,r=>{cc(t,r)})}function fN(t,e){const n=Ta(LT(t,e)),r=Qp(t.transactionQueueTree_,e);return qP(r,i=>{Vh(t,i)}),Vh(t,r),kT(r,i=>{Vh(t,i)}),n}function Vh(t,e){const n=ks(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(U(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(U(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ST(e,void 0):n.length=s+1,yi(t.eventQueue_,Ta(e),i);for(let o=0;o<r.length;o++)va(r[o])}}/**
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
 */function pN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function mN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const qy=function(t,e){const n=gN(t),r=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xR();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new me(n.pathString)}},gN=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(d,p)),d<p&&(i=pN(t.substring(d,p)));const m=mN(t.substring(Math.min(t.length,p)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const k=e.indexOf(".");r=e.substring(0,k).toLowerCase(),n=e.substring(k+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class _N{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class yN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class vN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ne(this._path)?null:YE(this._path)}get ref(){return new Nr(this._repo,this._path)}get _queryIdentifier(){const e=Ry(this._queryParams),n=kp(e);return n==="{}"?"default":n}get _queryObject(){return Ry(this._queryParams)}isEqual(e){if(e=yt(e),!(e instanceof Zp))return!1;const n=this._repo===e._repo,r=Pp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+c1(this._path)}}class Nr extends Zp{constructor(e,n){super(e,n,new Mp,!1)}get parent(){const e=JE(this._path);return e===null?null:new Nr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Au{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new me(e),r=af(this.ref,e);return new Au(this._node.getChild(n),r,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Au(i,af(this.ref,r),Ne)))}hasChild(e){const n=new me(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hy(t,e){return t=yt(t),t._checkNotDeleted("ref"),e!==void 0?af(t._root,e):t._root}function af(t,e){return t=yt(t),te(t._path)===null?YP("child","path",e):PT("child","path",e),new Nr(t._repo,Ue(t._path,e))}class em{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new _N("value",this,new Au(e.snapshotNode,new Nr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new yN(this,e,n):null}matches(e){return e instanceof em?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function wN(t,e,n,r,i){const s=new vN(n,void 0),o=new em(s);return lN(t._repo,t,o),()=>uN(t._repo,t,o)}function Ky(t,e,n,r){return wN(t,"value",e)}wP(Nr);kP(Nr);/**
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
 */const EN="FIREBASE_DATABASE_EMULATOR_HOST",lf={};let TN=!1;function IN(t,e,n,r){t.repoInfo_=new zE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function SN(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ct("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qy(s,i),l=o.repoInfo,u;typeof process<"u"&&hy&&(u=hy[EN]),u?(s=`http://${u}?ns=${l.namespace}`,o=qy(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new FR(t.name,t.options,e);XP("Invalid Firebase Database URL",o),ne(o.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kN(l,t,c,new LR(t.name,n));return new xN(d,t)}function CN(t,e){const n=lf[e];(!n||n[t.key]!==t)&&$n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cN(t),delete n[t.key]}function kN(t,e,n,r){let i=lf[e.name];i||(i={},lf[e.name]=i);let s=i[t.toURLString()];return s&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new nN(t,TN,n,r),i[t.toURLString()]=s,s}class xN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Nr(this._repo,ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function AN(t=Cp(),e){const n=Ss(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=cE("database");r&&RN(n,...r)}return n}function RN(t,e,n,r={}){t=yt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new bl(bl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:dE(r.mockUserToken,t.app.options.projectId);s=new bl(o)}IN(i,e,n,s)}/**
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
 */function PN(t){ER(TE),Bn(new wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return SN(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Kt(dy,fy,t),Kt(dy,fy,"esm2017")}Vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PN();var NN="firebase",DN="10.14.1";/**
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
 */Kt(NN,DN,"app");const UT="@firebase/installations",tm="0.6.9";/**
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
 */const zT=1e4,BT=`w:${tm}`,$T="FIS_v2",bN="https://firebaseinstallations.googleapis.com/v1",MN=60*60*1e3,ON="installations",VN="Installations";/**
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
 */const LN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ui=new tc(ON,VN,LN);function WT(t){return t instanceof Pr&&t.code.includes("request-failed")}/**
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
 */function qT({projectId:t}){return`${bN}/projects/${t}/installations`}function HT(t){return{token:t.token,requestStatus:2,expiresIn:jN(t.expiresIn),creationTime:Date.now()}}async function KT(t,e){const r=(await e.json()).error;return ui.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function GT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function FN(t,{refreshToken:e}){const n=GT(t);return n.append("Authorization",UN(e)),n}async function QT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function jN(t){return Number(t.replace("s","000"))}function UN(t){return`${$T} ${t}`}/**
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
 */async function zN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qT(t),i=GT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:$T,appId:t.appId,sdkVersion:BT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await QT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:HT(c.authToken)}}else throw await KT("Create Installation",u)}/**
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
 */function YT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function BN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $N=/^[cdef][\w-]{21}$/,uf="";function WN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=qN(t);return $N.test(n)?n:uf}catch{return uf}}function qN(t){return BN(t).substr(0,22)}/**
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
 */function hc(t){return`${t.appName}!${t.appId}`}/**
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
 */const XT=new Map;function JT(t,e){const n=hc(t);ZT(n,e),HN(n,e)}function ZT(t,e){const n=XT.get(t);if(n)for(const r of n)r(e)}function HN(t,e){const n=KN();n&&n.postMessage({key:t,fid:e}),GN()}let Hr=null;function KN(){return!Hr&&"BroadcastChannel"in self&&(Hr=new BroadcastChannel("[Firebase] FID Change"),Hr.onmessage=t=>{ZT(t.data.key,t.data.fid)}),Hr}function GN(){XT.size===0&&Hr&&(Hr.close(),Hr=null)}/**
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
 */const QN="firebase-installations-database",YN=1,ci="firebase-installations-store";let Lh=null;function nm(){return Lh||(Lh=EE(QN,YN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}})),Lh}async function Ru(t,e){const n=hc(t),i=(await nm()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&JT(t,e.fid),e}async function eI(t){const e=hc(t),r=(await nm()).transaction(ci,"readwrite");await r.objectStore(ci).delete(e),await r.done}async function dc(t,e){const n=hc(t),i=(await nm()).transaction(ci,"readwrite"),s=i.objectStore(ci),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&JT(t,l.fid),l}/**
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
 */async function rm(t){let e;const n=await dc(t.appConfig,r=>{const i=XN(r),s=JN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===uf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function XN(t){const e=t||{fid:WN(),registrationStatus:0};return tI(e)}function JN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ui.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ZN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:eD(t)}:{installationEntry:e}}async function ZN(t,e){try{const n=await zN(t,e);return Ru(t.appConfig,n)}catch(n){throw WT(n)&&n.customData.serverCode===409?await eI(t.appConfig):await Ru(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function eD(t){let e=await Gy(t.appConfig);for(;e.registrationStatus===1;)await YT(100),e=await Gy(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await rm(t);return r||n}return e}function Gy(t){return dc(t,e=>{if(!e)throw ui.create("installation-not-found");return tI(e)})}function tI(t){return tD(t)?{fid:t.fid,registrationStatus:0}:t}function tD(t){return t.registrationStatus===1&&t.registrationTime+zT<Date.now()}/**
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
 */async function nD({appConfig:t,heartbeatServiceProvider:e},n){const r=rD(t,n),i=FN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:BT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await QT(()=>fetch(r,l));if(u.ok){const c=await u.json();return HT(c)}else throw await KT("Generate Auth Token",u)}function rD(t,{fid:e}){return`${qT(t)}/${e}/authTokens:generate`}/**
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
 */async function im(t,e=!1){let n;const r=await dc(t.appConfig,s=>{if(!nI(s))throw ui.create("not-registered");const o=s.authToken;if(!e&&oD(o))return s;if(o.requestStatus===1)return n=iD(t,e),s;{if(!navigator.onLine)throw ui.create("app-offline");const l=lD(s);return n=sD(t,l),l}});return n?await n:r.authToken}async function iD(t,e){let n=await Qy(t.appConfig);for(;n.authToken.requestStatus===1;)await YT(100),n=await Qy(t.appConfig);const r=n.authToken;return r.requestStatus===0?im(t,e):r}function Qy(t){return dc(t,e=>{if(!nI(e))throw ui.create("not-registered");const n=e.authToken;return uD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function sD(t,e){try{const n=await nD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ru(t.appConfig,r),n}catch(n){if(WT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ru(t.appConfig,r)}throw n}}function nI(t){return t!==void 0&&t.registrationStatus===2}function oD(t){return t.requestStatus===2&&!aD(t)}function aD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+MN}function lD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function uD(t){return t.requestStatus===1&&t.requestTime+zT<Date.now()}/**
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
 */async function cD(t){const e=t,{installationEntry:n,registrationPromise:r}=await rm(e);return r?r.catch(console.error):im(e).catch(console.error),n.fid}/**
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
 */async function hD(t,e=!1){const n=t;return await dD(n),(await im(n,e)).token}async function dD(t){const{registrationPromise:e}=await rm(t);e&&await e}/**
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
 */function fD(t){if(!t||!t.options)throw Fh("App Configuration");if(!t.name)throw Fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fh(t){return ui.create("missing-app-config-values",{valueName:t})}/**
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
 */const rI="installations",pD="installations-internal",mD=t=>{const e=t.getProvider("app").getImmediate(),n=fD(e),r=Ss(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},gD=t=>{const e=t.getProvider("app").getImmediate(),n=Ss(e,rI).getImmediate();return{getId:()=>cD(n),getToken:i=>hD(n,i)}};function _D(){Bn(new wn(rI,mD,"PUBLIC")),Bn(new wn(pD,gD,"PRIVATE"))}_D();Kt(UT,tm);Kt(UT,tm,"esm2017");/**
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
 */const Pu="analytics",yD="firebase_id",vD="origin",wD=60*1e3,ED="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sm="https://www.googletagmanager.com/gtag/js";/**
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
 */const At=new rc("@firebase/analytics");/**
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
 */const TD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Lt=new tc("analytics","Analytics",TD);/**
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
 */function ID(t){if(!t.startsWith(sm)){const e=Lt.create("invalid-gtag-resource",{gtagURL:t});return At.warn(e.message),""}return t}function iI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function SD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function CD(t,e){const n=SD("firebase-js-sdk-policy",{createScriptURL:ID}),r=document.createElement("script"),i=`${sm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function kD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await iI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){At.error(l)}t("config",i,s)}async function AD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await iI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){At.error(s)}}function RD(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await AD(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await xD(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){At.error(l)}}return i}function PD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=RD(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ND(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(sm)&&n.src.includes(t))return n;return null}/**
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
 */const DD=30,bD=1e3;class MD{constructor(e={},n=bD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sI=new MD;function OD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function VD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:OD(r)},s=ED.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw Lt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function LD(t,e=sI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Lt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Lt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new UD;return setTimeout(async()=>{l.abort()},wD),oI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function oI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=sI){var s;const{appId:o,measurementId:l}=t;try{await FD(r,e)}catch(u){if(l)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await VD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!jD(c)){if(i.deleteThrottleMetadata(o),l)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ny(n,i.intervalMillis,DD):ny(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),At.debug(`Calling attemptFetch again in ${d} millis`),oI(t,p,r,i)}}function FD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Lt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function jD(t){if(!(t instanceof Pr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class UD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function zD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function BD(){if(mE())try{await gE()}catch(t){return At.warn(Lt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return At.warn(Lt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $D(t,e,n,r,i,s,o){var l;const u=LD(t);u.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>At.error(w)),e.push(u);const c=BD().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([u,c]);ND(s)||CD(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[vD]="firebase",m.update=!0,p!=null&&(m[yD]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class WD{constructor(e){this.app=e}_delete(){return delete xo[this.app.options.appId],Promise.resolve()}}let xo={},Yy=[];const Xy={};let jh="dataLayer",qD="gtag",Jy,aI,Zy=!1;function HD(){const t=[];if(Jx()&&t.push("This is a browser extension environment."),nA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Lt.create("invalid-analytics-context",{errorInfo:e});At.warn(n.message)}}function KD(t,e,n){HD();const r=t.options.appId;if(!r)throw Lt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Lt.create("no-api-key");if(xo[r]!=null)throw Lt.create("already-exists",{id:r});if(!Zy){kD(jh);const{wrappedGtag:s,gtagCore:o}=PD(xo,Yy,Xy,jh,qD);aI=s,Jy=o,Zy=!0}return xo[r]=$D(t,Yy,Xy,e,Jy,jh,n),new WD(t)}function GD(t=Cp()){t=yt(t);const e=Ss(t,Pu);return e.isInitialized()?e.getImmediate():QD(t)}function QD(t,e={}){const n=Ss(t,Pu);if(n.isInitialized()){const i=n.getImmediate();if(pu(e,n.getOptions()))return i;throw Lt.create("already-initialized")}return n.initialize({options:e})}function YD(t,e,n,r){t=yt(t),zD(aI,xo[t.app.options.appId],e,n,r).catch(i=>At.error(i))}const ev="@firebase/analytics",tv="0.10.8";function XD(){Bn(new wn(Pu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return KD(r,i,n)},"PUBLIC")),Bn(new wn("analytics-internal",t,"PRIVATE")),Kt(ev,tv),Kt(ev,tv,"esm2017");function t(e){try{const n=e.getProvider(Pu).getImmediate();return{logEvent:(r,i,s)=>YD(n,r,i,s)}}catch(n){throw Lt.create("interop-component-reg-failed",{reason:n})}}}XD();const JD={apiKey:"AIzaSyBfNYIF2Kbvdd-nkmz216uG4OX8_jF2bnI",authDomain:"ackerai.firebaseapp.com",databaseURL:"https://ackerai-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ackerai",storageBucket:"ackerai.firebasestorage.app",messagingSenderId:"572170601011",appId:"1:572170601011:web:112957876e5afab3965946",measurementId:"G-HDNYDQQDF8"},om=IE(JD);GD(om);const ZD=15,eb=1500,nv=AN(om);let Ol=[],am=0,lI=0;function lm(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function uI(){const t=new Date;return`${lm()}_${String(t.getHours()).padStart(2,"0")}-${String(t.getMinutes()).padStart(2,"0")}`}let cI=lm(),cf=uI(),Uh=null,zh=null;function hI(){Uh&&Uh(),zh&&zh();const t=Hy(nv,`usage/days/${cI}`);Uh=Ky(t,n=>{lI=n.val()||0,rv()});const e=Hy(nv,`usage/minutes/${cf}`);zh=Ky(e,n=>{am=n.val()||0,rv()})}hI();setInterval(()=>{const t=uI();t!==cf&&(cI=lm(),cf=t,am=0,hI())},5e3);function Vl(){return{proMinute:am,proTag:lI,limitProMinute:ZD,limitProTag:eb}}function rv(){const t=Vl();Ol.forEach(e=>e(t))}function tb(t){return Ol.push(t),()=>{Ol=Ol.filter(e=>e!==t)}}function dI(t){return new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const s=String(r.result).split(",")[1];e({base64:s,mimeType:t.type||"image/jpeg"})},r.onerror=()=>n(new Error("Das Bild konnte nicht gelesen werden.")),r.readAsDataURL(t)})}async function Ia({prompt:t,bild:e,json:n=!1}){throw new Error("Kein Gemini API Key gefunden. Bitte trage VITE_GEMINI_API_KEY in die .env Datei ein und starte den Server neu.")}async function nb(t){return Ia({prompt:`Du bist Pflanzenexperte und hilfst Landwirtschaftsschülern. Analysiere das Foto der Pflanze.
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (alles auf Deutsch, kurz und praxisnah):
{
  "name": "deutscher Pflanzenname",
  "lateinischerName": "wissenschaftlicher Name",
  "sicherheit": "hoch | mittel | niedrig",
  "beschreibung": "2-3 kurze Sätze zur Pflanze",
  "pflegetipps": ["Tipp 1", "Tipp 2", "Tipp 3"],
  "wachstumsbedingungen": {
    "boden": "kurze Angabe",
    "licht": "kurze Angabe",
    "wasser": "kurze Angabe"
  }
}
Wenn auf dem Foto keine Pflanze erkennbar ist, setze "name" auf "Keine Pflanze erkannt" und erkläre es kurz in der Beschreibung.`,bild:t,json:!0})}async function rb(t){return Ia({prompt:`Du bist Pflanzenarzt für Landwirtschaftsschüler. Untersuche das Foto auf Krankheiten oder Schädlinge.
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, praxisnah, Bio-Lösungen bevorzugen):
{
  "gesund": true | false,
  "diagnose": "Name der Krankheit/des Schädlings oder 'Pflanze wirkt gesund'",
  "schweregrad": "leicht | mittel | schwer | -",
  "erkennungsmerkmale": ["Merkmal 1", "Merkmal 2"],
  "behandlung": ["Schritt 1 (bevorzugt biologisch)", "Schritt 2"],
  "vorbeugung": ["Maßnahme 1", "Maßnahme 2"],
  "hinweis": "Kurzer Warnhinweis oder zusätzlicher Tipp"
}
Wenn keine Pflanze erkennbar ist, setze "diagnose" auf "Keine Pflanze erkannt".`,bild:t,json:!0})}async function ib({ph:t,n:e,p:n,k:r,pflanze:i}){const s=`Du bist Boden- und Düngeberater für Landwirtschaftsschüler.
Bodenwerte:
- pH-Wert: ${t||"unbekannt"}
- Stickstoff N: ${e||"unbekannt"} mg/kg
- Phosphor P: ${n||"unbekannt"} mg/kg
- Kalium K: ${r||"unbekannt"} mg/kg
Geplante/aktuelle Kultur: ${i||"nicht angegeben"}

Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, konkrete Mengen, praxisnah):
{
  "bewertung": "2-3 Sätze zur Gesamtbeurteilung des Bodens",
  "ampel": "gut | mittel | schlecht",
  "duenger": [
    { "name": "konkreter Düngername", "menge": "z. B. 30 g/m²", "zeitpunkt": "z. B. im Frühjahr vor der Aussaat", "art": "bio | konventionell" }
  ],
  "warnungen": ["Warnung bei Über-/Unterdüngung, falls relevant"],
  "biotipp": "Eine biologische Alternative oder ein Boden-Tipp"
}`;return Ia({prompt:s,json:!0})}async function sb({ortName:t,tage:e,pflanze:n,bodenwerte:r}){const i=e.map(o=>`${o.datum} (${o.wochentag}): ${o.tempMin}–${o.tempMax}°C, Niederschlag ${o.niederschlag} mm (${o.regenWahrscheinlichkeit}% Wahrscheinlichkeit), Wind bis ${o.windMax} km/h`).join(`
`),s=`Du bist landwirtschaftlicher Berater für Schüler. Gib auf Basis der 7-Tage-Wettervorhersage konkrete Empfehlungen.
Standort: ${t||"nicht angegeben"}
Kultur: ${n||"nicht angegeben"}
Bodenwerte: ${r||"nicht angegeben"}

Wettervorhersage:
${i}

Regeln beachten: Nicht düngen kurz vor Starkregen (Auswaschung). Nicht spritzen bei Wind über 15 km/h oder Regen. Bei Frost (unter 0°C) Schutzmaßnahmen nennen.

Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, beziehe dich auf konkrete Wochentage/Daten aus der Liste):
{
  "duengeTag": "bester Tag zum Düngen + kurze Begründung",
  "spritzTag": "bester Tag zum Spritzen/Behandeln + kurze Begründung",
  "bewaesserung": "Empfehlung zur Bewässerung in den nächsten Tagen",
  "frostwarnung": "konkrete Frostwarnung mit Schutzmaßnahme ODER 'Kein Frost erwartet'",
  "hinweise": ["weiterer wichtiger Hinweis 1", "Hinweis 2"]
}`;return Ia({prompt:s,json:!0})}async function ob({letztesJahr:t,diesesJahr:e}){const n=`Du bist Experte für Fruchtfolge im Ackerbau und Gemüsebau und hilfst Landwirtschaftsschülern.
Auf einem Beet/Feld wurde angebaut:
- Letztes Jahr: ${t}
- Dieses Jahr: ${e}

Bewerte diese Fruchtfolge fachlich (Nährstoffentzug, Krankheits-/Schädlingsdruck, Familienzugehörigkeit, Boden).
Antworte AUSSCHLIESSLICH als JSON in genau dieser Form (Deutsch, praxisnah):
{
  "bewertung": "gut | mittel | schlecht",
  "begruendung": "2-4 Sätze, warum die Kombination so bewertet wird",
  "empfehlungNaechstesJahr": ["Kultur 1 mit kurzer Begründung", "Kultur 2 mit kurzer Begründung"],
  "vermeiden": ["Kultur, die man unbedingt vermeiden sollte + Grund"]
}`;return Ia({prompt:n,json:!0})}function ab(){var m;const{setErkanntePflanze:t}=ec(),[e,n]=H.useState(null),[r,i]=H.useState(!1),[s,o]=H.useState(""),[l,u]=H.useState(null);function c(w){n(w),u(null),o("")}async function d(){if(e){i(!0),o(""),u(null);try{const w=await dI(e),k=await nb(w);u(k),k!=null&&k.name&&!k.name.toLowerCase().includes("keine pflanze")&&t(k.name)}catch(w){o(w.message)}finally{i(!1)}}}const p=(l==null?void 0:l.name)&&!l.name.toLowerCase().includes("keine pflanze");return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🌱",children:"Pflanze erkennen"}),_.jsx(Ts,{children:"Mach ein Foto oder lade eines hoch – die KI bestimmt die Pflanze."})]}),_.jsxs(Oe,{children:[_.jsx(sE,{bild:e,onBild:c}),e&&!r&&_.jsx("div",{className:"mt-4",children:_.jsx(On,{onClick:d,children:"🔍 Pflanze erkennen"})})]}),r&&_.jsx(Oe,{children:_.jsx(ri,{text:"Die KI analysiert dein Foto …"})}),_.jsx(ii,{children:s}),l&&_.jsxs(Oe,{className:"garten-anim space-y-4",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-2xl font-bold text-stone-900 dark:text-stone-50",children:l.name}),l.lateinischerName&&_.jsx("p",{className:"italic text-stone-500 dark:text-stone-400",children:l.lateinischerName}),l.sicherheit&&_.jsxs("div",{className:"mt-2 flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400",children:[_.jsx("span",{children:"Treffsicherheit:"}),_.jsx(Qo,{wert:l.sicherheit})]})]}),l.beschreibung&&_.jsx("p",{className:"text-stone-700 dark:text-stone-200",children:l.beschreibung}),((m=l.pflegetipps)==null?void 0:m.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Pflegetipps"}),_.jsx(pr,{punkte:l.pflegetipps,icon:"🌿"})]}),l.wachstumsbedingungen&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Optimale Bedingungen"}),_.jsxs("div",{className:"grid grid-cols-1 gap-2 sm:grid-cols-3",children:[_.jsx(Bh,{icon:"🪴",titel:"Boden",text:l.wachstumsbedingungen.boden}),_.jsx(Bh,{icon:"☀️",titel:"Licht",text:l.wachstumsbedingungen.licht}),_.jsx(Bh,{icon:"💧",titel:"Wasser",text:l.wachstumsbedingungen.wasser})]})]}),p&&_.jsxs("p",{className:"rounded-xl bg-garten-50 p-3 text-sm text-stone-600 dark:bg-garten-500/10 dark:text-stone-300",children:["✅ „",l.name,'" wird jetzt in ',_.jsx("strong",{children:"Bodenanalyse"})," und"," ",_.jsx("strong",{children:"Wetter"})," automatisch vorgeschlagen."]})]})]})}function Bh({icon:t,titel:e,text:n}){return n?_.jsxs("div",{className:"rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10",children:[_.jsxs("div",{className:"text-sm font-bold text-stone-500 dark:text-stone-400",children:[t," ",e]}),_.jsx("div",{className:"text-stone-800 dark:text-stone-200",children:n})]}):null}function lb(){var d,p,m;const[t,e]=H.useState(null),[n,r]=H.useState(!1),[i,s]=H.useState(""),[o,l]=H.useState(null);function u(w){e(w),l(null),s("")}async function c(){if(t){r(!0),s(""),l(null);try{const w=await dI(t),k=await rb(w);l(k)}catch(w){s(w.message)}finally{r(!1)}}}return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🩺",children:"Pflanze krank?"}),_.jsx(Ts,{children:"Foto vom kranken Blatt oder Schädling – die KI stellt eine Diagnose."})]}),_.jsxs(Oe,{children:[_.jsx(sE,{bild:t,onBild:u}),t&&!n&&_.jsx("div",{className:"mt-4",children:_.jsx(On,{onClick:c,children:"🔍 Untersuchen"})})]}),n&&_.jsx(Oe,{children:_.jsx(ri,{text:"Die KI untersucht die Pflanze …"})}),_.jsx(ii,{children:i}),o&&_.jsxs(Oe,{className:"garten-anim space-y-4",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[_.jsxs("h3",{className:"text-2xl font-bold text-stone-900 dark:text-stone-50",children:[o.gesund?"✅ ":"⚠️ ",o.diagnose]}),o.schweregrad&&o.schweregrad!=="-"&&_.jsxs("div",{className:"flex items-center gap-2 text-sm text-stone-500 dark:text-stone-400",children:[_.jsx("span",{children:"Schweregrad:"}),_.jsx(Qo,{wert:o.schweregrad})]})]}),((d=o.erkennungsmerkmale)==null?void 0:d.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Erkennungsmerkmale"}),_.jsx(pr,{punkte:o.erkennungsmerkmale,icon:"🔎"})]}),((p=o.behandlung)==null?void 0:p.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Behandlung"}),_.jsx(pr,{punkte:o.behandlung,icon:"💊"})]}),((m=o.vorbeugung)==null?void 0:m.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Vorbeugung"}),_.jsx(pr,{punkte:o.vorbeugung,icon:"🛡️"})]}),o.hinweis&&_.jsxs("p",{className:"rounded-xl bg-amber-50 p-3 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200",children:["💡 ",o.hinweis]})]})]})}function ub(){var x,M;const{erkanntePflanze:t,setLetzteBodenwerte:e}=ec(),[n,r]=H.useState(""),[i,s]=H.useState(""),[o,l]=H.useState(""),[u,c]=H.useState(""),[d,p]=H.useState(""),[m,w]=H.useState(!1),[k,N]=H.useState(""),[b,C]=H.useState(null);async function T(){if(!n&&!i&&!o&&!u){N("Bitte gib mindestens einen Bodenwert ein.");return}w(!0),N(""),C(null);try{const L=await ib({ph:n,n:i,p:o,k:u,pflanze:d});C(L),e({ph:n,n:i,p:o,k:u})}catch(L){N(L.message)}finally{w(!1)}}return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🧪",children:"Bodenanalyse"}),_.jsx(Ts,{children:"Gib deine Bodenwerte ein – die KI empfiehlt den passenden Dünger."})]}),_.jsxs(Oe,{className:"space-y-4",children:[_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsx(pn,{label:"pH-Wert",type:"number",inputMode:"decimal",step:"0.1",placeholder:"z. B. 6,5",value:n,onChange:L=>r(L.target.value)}),_.jsx(pn,{label:"Stickstoff N",hinweis:"mg/kg",type:"number",inputMode:"decimal",placeholder:"z. B. 80",value:i,onChange:L=>s(L.target.value)}),_.jsx(pn,{label:"Phosphor P",hinweis:"mg/kg",type:"number",inputMode:"decimal",placeholder:"z. B. 40",value:o,onChange:L=>l(L.target.value)}),_.jsx(pn,{label:"Kalium K",hinweis:"mg/kg",type:"number",inputMode:"decimal",placeholder:"z. B. 120",value:u,onChange:L=>c(L.target.value)})]}),_.jsxs("div",{children:[_.jsx(pn,{label:"Kultur / Pflanze (optional)",placeholder:"z. B. Weizen, Tomaten",value:d,onChange:L=>p(L.target.value)}),t&&t!==d&&_.jsxs("button",{type:"button",onClick:()=>p(t),className:"mt-2 rounded-lg bg-garten-100 px-3 py-2 text-sm font-semibold text-garten-800 hover:bg-garten-200 dark:bg-garten-500/15 dark:text-garten-200 dark:hover:bg-garten-500/25",children:["➕ Erkannte Pflanze übernehmen: „",t,'"']})]}),!m&&_.jsx(On,{onClick:T,children:"🧮 Boden bewerten"})]}),m&&_.jsx(Oe,{children:_.jsx(ri,{text:"Die KI bewertet deinen Boden …"})}),_.jsx(ii,{children:k}),b&&_.jsxs(Oe,{className:"garten-anim space-y-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("h3",{className:"text-xl font-bold text-stone-900 dark:text-stone-50",children:"Bewertung"}),_.jsx(Qo,{wert:b.ampel})]}),b.bewertung&&_.jsx("p",{className:"text-stone-700 dark:text-stone-200",children:b.bewertung}),((x=b.duenger)==null?void 0:x.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Düngeempfehlung"}),_.jsx("div",{className:"space-y-2",children:b.duenger.map((L,O)=>_.jsxs("div",{className:"rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10",children:[_.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[_.jsx("span",{className:"font-bold text-stone-900 dark:text-stone-100",children:L.name}),L.art&&_.jsx(Qo,{wert:L.art==="bio"?"bio (gut)":L.art})]}),L.menge&&_.jsxs("div",{className:"text-stone-700 dark:text-stone-300",children:["Menge: ",L.menge]}),L.zeitpunkt&&_.jsxs("div",{className:"text-stone-500 dark:text-stone-400",children:["Zeitpunkt: ",L.zeitpunkt]})]},O))})]}),((M=b.warnungen)==null?void 0:M.length)>0&&_.jsxs("div",{className:"rounded-xl border-2 border-amber-200 bg-amber-50 p-3 dark:border-amber-500/30 dark:bg-amber-500/10",children:[_.jsx("h4",{className:"mb-2 font-bold text-amber-900 dark:text-amber-200",children:"⚠️ Warnungen"}),_.jsx(pr,{punkte:b.warnungen,icon:"•"})]}),b.biotipp&&_.jsxs("p",{className:"rounded-xl bg-garten-50 p-3 text-stone-700 dark:bg-garten-500/10 dark:text-stone-300",children:["🌿 ",b.biotipp]})]})]})}const cb="https://geocoding-api.open-meteo.com/v1/search",hb="https://api.open-meteo.com/v1/forecast";function iv(t){return{0:{text:"Klar",emoji:"☀️"},1:{text:"Überwiegend klar",emoji:"🌤️"},2:{text:"Teils bewölkt",emoji:"⛅"},3:{text:"Bewölkt",emoji:"☁️"},45:{text:"Nebel",emoji:"🌫️"},48:{text:"Reifnebel",emoji:"🌫️"},51:{text:"Leichter Nieselregen",emoji:"🌦️"},53:{text:"Nieselregen",emoji:"🌦️"},55:{text:"Starker Nieselregen",emoji:"🌧️"},61:{text:"Leichter Regen",emoji:"🌦️"},63:{text:"Regen",emoji:"🌧️"},65:{text:"Starker Regen",emoji:"🌧️"},66:{text:"Gefrierender Regen",emoji:"🌧️❄️"},67:{text:"Starker gefr. Regen",emoji:"🌧️❄️"},71:{text:"Leichter Schneefall",emoji:"🌨️"},73:{text:"Schneefall",emoji:"🌨️"},75:{text:"Starker Schneefall",emoji:"❄️"},77:{text:"Schneegriesel",emoji:"❄️"},80:{text:"Leichte Schauer",emoji:"🌦️"},81:{text:"Schauer",emoji:"🌧️"},82:{text:"Heftige Schauer",emoji:"⛈️"},85:{text:"Leichte Schneeschauer",emoji:"🌨️"},86:{text:"Schneeschauer",emoji:"❄️"},95:{text:"Gewitter",emoji:"⛈️"},96:{text:"Gewitter mit Hagel",emoji:"⛈️"},99:{text:"Schweres Gewitter",emoji:"⛈️"}}[t]||{text:"Unbekannt",emoji:"🌡️"}}const db=["So","Mo","Di","Mi","Do","Fr","Sa"];async function fb(t){if(!t||t.trim().length<2)return[];const e=`${cb}?name=${encodeURIComponent(t.trim())}&count=5&language=de&format=json`;let n;try{n=await fetch(e)}catch{throw new Error("Keine Verbindung zum Wetterdienst. Bitte prüfe dein Internet.")}if(!n.ok)throw new Error("Die Ortssuche ist gerade nicht verfügbar.");return((await n.json()).results||[]).map(i=>({name:i.name,region:[i.admin1,i.country].filter(Boolean).join(", "),lat:i.latitude,lon:i.longitude}))}async function pb(t,e){const n=new URLSearchParams({latitude:t,longitude:e,current:"temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code",daily:"weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max",timezone:"auto",forecast_days:"7"});let r;try{r=await fetch(`${hb}?${n.toString()}`)}catch{throw new Error("Keine Verbindung zum Wetterdienst. Bitte prüfe dein Internet.")}if(!r.ok)throw new Error("Die Wetterdaten konnten nicht geladen werden.");const i=await r.json(),s={temp:Math.round(i.current.temperature_2m),luftfeuchte:Math.round(i.current.relative_humidity_2m),wind:Math.round(i.current.wind_speed_10m),niederschlag:i.current.precipitation,...iv(i.current.weather_code)},o=i.daily.time.map((l,u)=>{const c=new Date(l);return{datum:c.toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit"}),wochentag:db[c.getDay()],tempMax:Math.round(i.daily.temperature_2m_max[u]),tempMin:Math.round(i.daily.temperature_2m_min[u]),niederschlag:i.daily.precipitation_sum[u],regenWahrscheinlichkeit:i.daily.precipitation_probability_max[u]??0,windMax:Math.round(i.daily.wind_speed_10m_max[u]),windBoeen:Math.round(i.daily.wind_gusts_10m_max[u]),...iv(i.daily.weather_code[u])}});return{aktuell:s,tage:o}}function mb(){return new Promise((t,e)=>{if(!("geolocation"in navigator)){e(new Error("Dein Gerät unterstützt keine Standortbestimmung."));return}navigator.geolocation.getCurrentPosition(n=>t({lat:n.coords.latitude,lon:n.coords.longitude}),n=>{n.code===n.PERMISSION_DENIED?e(new Error("Standortzugriff wurde verweigert. Bitte gib den Ort manuell ein.")):e(new Error("Standort konnte nicht ermittelt werden. Bitte gib den Ort manuell ein."))},{enableHighAccuracy:!1,timeout:1e4,maximumAge:3e5})})}function gb(){var y;const{erkanntePflanze:t,letzteBodenwerte:e}=ec(),[n,r]=H.useState(""),[i,s]=H.useState([]),[o,l]=H.useState(""),[u,c]=H.useState(null),[d,p]=H.useState(null),[m,w]=H.useState(!1),[k,N]=H.useState(!1),[b,C]=H.useState("");function T(){const v=e;return v?[v.ph&&`pH ${v.ph}`,v.n&&`N ${v.n}`,v.p&&`P ${v.p}`,v.k&&`K ${v.k}`].filter(Boolean).join(", "):""}async function x(v,I,A){w(!0),C(""),c(null),p(null),s([]);try{const R=await pb(v,I);c(R),l(A)}catch(R){C(R.message)}finally{w(!1)}}async function M(v){if(v.preventDefault(),!(n.trim().length<2)){C(""),s([]);try{const I=await fb(n);I.length===0?C("Kein Ort gefunden. Bitte anders schreiben."):s(I)}catch(I){C(I.message)}}}async function L(){C("");try{const{lat:v,lon:I}=await mb();await x(v,I,"Aktueller Standort")}catch(v){C(v.message)}}async function O(){N(!0),C(""),p(null);try{const v=await sb({ortName:o,tage:u.tage,pflanze:t,bodenwerte:T()});p(v)}catch(v){C(v.message)}finally{N(!1)}}const E=(d==null?void 0:d.frostwarnung)&&!d.frostwarnung.toLowerCase().includes("kein frost");return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🌦️",children:"Wetter & Empfehlung"}),_.jsx(Ts,{children:"7-Tage-Vorschau + KI-Tipps zum Düngen, Spritzen und Gießen."})]}),_.jsxs(Oe,{className:"space-y-3",children:[_.jsx(On,{onClick:L,children:"📍 Meinen Standort verwenden"}),_.jsx("div",{className:"text-center text-sm text-stone-400 dark:text-stone-500",children:"— oder Ort suchen —"}),_.jsxs("form",{onSubmit:M,className:"flex gap-2",children:[_.jsx("input",{className:"w-full rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-stone-200 transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500 dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500",placeholder:"z. B. Wieselburg",value:n,onChange:v=>r(v.target.value)}),_.jsx("button",{type:"submit",className:"shrink-0 rounded-xl bg-garten-600 px-5 py-3 font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400",children:"Suchen"})]}),i.length>0&&_.jsx("ul",{className:"divide-y divide-stone-100 overflow-hidden rounded-xl ring-1 ring-stone-200 dark:divide-stone-800 dark:ring-stone-700",children:i.map((v,I)=>_.jsx("li",{children:_.jsxs("button",{onClick:()=>x(v.lat,v.lon,v.name),className:"w-full px-4 py-3 text-left hover:bg-stone-50 dark:hover:bg-stone-800",children:[_.jsx("span",{className:"font-semibold text-stone-900 dark:text-stone-100",children:v.name}),v.region&&_.jsxs("span",{className:"text-stone-500 dark:text-stone-400",children:[" – ",v.region]})]})},I))})]}),m&&_.jsx(Oe,{children:_.jsx(ri,{text:"Wetterdaten werden geladen …"})}),_.jsx(ii,{children:b}),u&&_.jsxs(_.Fragment,{children:[_.jsxs(Oe,{className:"space-y-3",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("h3",{className:"text-xl font-bold text-stone-900 dark:text-stone-50",children:["📍 ",o]}),_.jsx("span",{className:"text-3xl","aria-hidden":"true",children:u.aktuell.emoji})]}),_.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[_.jsx($h,{label:"Temperatur",wert:`${u.aktuell.temp}°C`}),_.jsx($h,{label:"Wind",wert:`${u.aktuell.wind} km/h`}),_.jsx($h,{label:"Luftfeuchte",wert:`${u.aktuell.luftfeuchte}%`})]}),_.jsx("h4",{className:"pt-2 font-bold text-stone-800 dark:text-stone-100",children:"7-Tage-Vorschau"}),_.jsx("div",{className:"-mx-1 flex gap-2 overflow-x-auto pb-1",children:u.tage.map((v,I)=>_.jsxs("div",{className:"min-w-[72px] flex-shrink-0 rounded-xl bg-garten-50 p-2 text-center dark:bg-garten-500/10",children:[_.jsx("div",{className:"text-sm font-bold text-stone-800 dark:text-stone-200",children:v.wochentag}),_.jsx("div",{className:"text-xs text-stone-500 dark:text-stone-400",children:v.datum}),_.jsx("div",{className:"my-1 text-2xl","aria-hidden":"true",children:v.emoji}),_.jsxs("div",{className:"text-sm font-semibold text-stone-900 dark:text-stone-100",children:[v.tempMax,"°"]}),_.jsxs("div",{className:"text-xs text-stone-500 dark:text-stone-400",children:[v.tempMin,"°"]}),_.jsxs("div",{className:"mt-1 text-xs text-blue-600 dark:text-blue-400",children:["💧",v.regenWahrscheinlichkeit,"%"]}),_.jsxs("div",{className:"text-xs text-stone-500 dark:text-stone-400",children:["💨",v.windMax]})]},I))})]}),_.jsxs(Oe,{className:"space-y-3",children:[_.jsxs("p",{className:"text-sm text-stone-500 dark:text-stone-400",children:["Berücksichtigt: Pflanze „",t||"nicht gesetzt",'", Boden „',T()||"nicht gesetzt",'".']}),!k&&_.jsx(On,{onClick:O,children:"🤖 KI-Empfehlung holen"}),k&&_.jsx(ri,{text:"Die KI erstellt deine Empfehlung …"})]})]}),d&&_.jsxs(Oe,{className:"garten-anim space-y-3",children:[_.jsx("h3",{className:"text-xl font-bold text-stone-900 dark:text-stone-50",children:"🤖 Empfehlung"}),E&&_.jsxs("div",{className:"rounded-xl border-2 border-red-200 bg-red-50 p-3 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",children:[_.jsx("strong",{children:"❄️ Frostwarnung:"})," ",d.frostwarnung]}),_.jsx(ml,{icon:"🌱",titel:"Düngen",text:d.duengeTag}),_.jsx(ml,{icon:"💊",titel:"Spritzen / Behandeln",text:d.spritzTag}),_.jsx(ml,{icon:"💧",titel:"Bewässerung",text:d.bewaesserung}),!E&&d.frostwarnung&&_.jsx(ml,{icon:"🌡️",titel:"Frost",text:d.frostwarnung}),((y=d.hinweise)==null?void 0:y.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Weitere Hinweise"}),_.jsx(pr,{punkte:d.hinweise,icon:"💡"})]})]})]})}function $h({label:t,wert:e}){return _.jsxs("div",{className:"rounded-xl bg-garten-50 p-2 dark:bg-garten-500/10",children:[_.jsx("div",{className:"text-lg font-bold text-stone-900 dark:text-stone-100",children:e}),_.jsx("div",{className:"text-xs text-stone-500 dark:text-stone-400",children:t})]})}function ml({icon:t,titel:e,text:n}){return n?_.jsxs("div",{className:"rounded-xl bg-garten-50 p-3 dark:bg-garten-500/10",children:[_.jsxs("div",{className:"font-bold text-stone-800 dark:text-stone-100",children:[t," ",e]}),_.jsx("div",{className:"text-stone-700 dark:text-stone-200",children:n})]}):null}function _b(){var m,w;const{erkanntePflanze:t}=ec(),[e,n]=H.useState(""),[r,i]=H.useState(""),[s,o]=H.useState(!1),[l,u]=H.useState(""),[c,d]=H.useState(null);async function p(){if(!e.trim()||!r.trim()){u("Bitte trage ein, was letztes und dieses Jahr angebaut wurde.");return}o(!0),u(""),d(null);try{const k=await ob({letztesJahr:e,diesesJahr:r});d(k)}catch(k){u(k.message)}finally{o(!1)}}return _.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🔄",children:"Fruchtfolge"}),_.jsx(Ts,{children:"Prüfe, ob deine Fruchtfolge sinnvoll ist, und plane das nächste Jahr."})]}),_.jsxs(Oe,{className:"space-y-4",children:[_.jsx(pn,{label:"Letztes Jahr angebaut",placeholder:"z. B. Kartoffeln",value:e,onChange:k=>n(k.target.value)}),_.jsxs("div",{children:[_.jsx(pn,{label:"Dieses Jahr angebaut / geplant",placeholder:"z. B. Tomaten",value:r,onChange:k=>i(k.target.value)}),t&&t!==r&&_.jsxs("button",{type:"button",onClick:()=>i(t),className:"mt-2 rounded-lg bg-garten-100 px-3 py-2 text-sm font-semibold text-garten-800 hover:bg-garten-200 dark:bg-garten-500/15 dark:text-garten-200 dark:hover:bg-garten-500/25",children:["➕ Erkannte Pflanze übernehmen: „",t,'"']})]}),!s&&_.jsx(On,{onClick:p,children:"🌾 Fruchtfolge bewerten"})]}),s&&_.jsx(Oe,{children:_.jsx(ri,{text:"Die KI bewertet deine Fruchtfolge …"})}),_.jsx(ii,{children:l}),c&&_.jsxs(Oe,{className:"garten-anim space-y-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("h3",{className:"text-xl font-bold text-stone-900 dark:text-stone-50",children:"Bewertung"}),_.jsx(Qo,{wert:c.bewertung})]}),c.begruendung&&_.jsx("p",{className:"text-stone-700 dark:text-stone-200",children:c.begruendung}),((m=c.empfehlungNaechstesJahr)==null?void 0:m.length)>0&&_.jsxs("div",{children:[_.jsx("h4",{className:"mb-2 font-bold text-stone-800 dark:text-stone-100",children:"Empfehlung fürs nächste Jahr"}),_.jsx(pr,{punkte:c.empfehlungNaechstesJahr,icon:"👍"})]}),((w=c.vermeiden)==null?void 0:w.length)>0&&_.jsxs("div",{className:"rounded-xl border-2 border-red-200 bg-red-50 p-3 dark:border-red-500/30 dark:bg-red-500/10",children:[_.jsx("h4",{className:"mb-2 font-bold text-red-900 dark:text-red-200",children:"Unbedingt vermeiden"}),_.jsx(pr,{punkte:c.vermeiden,icon:"🚫"})]})]})]})}var sv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,fI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(I,A,R){for(var S=Array(arguments.length-2),Bt=2;Bt<arguments.length;Bt++)S[Bt-2]=arguments[Bt];return y.prototype[A].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],A=E.g[2];var R=E.g[3],S=y+(R^v&(A^R))+I[0]+3614090360&4294967295;y=v+(S<<7&4294967295|S>>>25),S=R+(A^y&(v^A))+I[1]+3905402710&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(v^R&(y^v))+I[2]+606105819&4294967295,A=R+(S<<17&4294967295|S>>>15),S=v+(y^A&(R^y))+I[3]+3250441966&4294967295,v=A+(S<<22&4294967295|S>>>10),S=y+(R^v&(A^R))+I[4]+4118548399&4294967295,y=v+(S<<7&4294967295|S>>>25),S=R+(A^y&(v^A))+I[5]+1200080426&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(v^R&(y^v))+I[6]+2821735955&4294967295,A=R+(S<<17&4294967295|S>>>15),S=v+(y^A&(R^y))+I[7]+4249261313&4294967295,v=A+(S<<22&4294967295|S>>>10),S=y+(R^v&(A^R))+I[8]+1770035416&4294967295,y=v+(S<<7&4294967295|S>>>25),S=R+(A^y&(v^A))+I[9]+2336552879&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(v^R&(y^v))+I[10]+4294925233&4294967295,A=R+(S<<17&4294967295|S>>>15),S=v+(y^A&(R^y))+I[11]+2304563134&4294967295,v=A+(S<<22&4294967295|S>>>10),S=y+(R^v&(A^R))+I[12]+1804603682&4294967295,y=v+(S<<7&4294967295|S>>>25),S=R+(A^y&(v^A))+I[13]+4254626195&4294967295,R=y+(S<<12&4294967295|S>>>20),S=A+(v^R&(y^v))+I[14]+2792965006&4294967295,A=R+(S<<17&4294967295|S>>>15),S=v+(y^A&(R^y))+I[15]+1236535329&4294967295,v=A+(S<<22&4294967295|S>>>10),S=y+(A^R&(v^A))+I[1]+4129170786&4294967295,y=v+(S<<5&4294967295|S>>>27),S=R+(v^A&(y^v))+I[6]+3225465664&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^v&(R^y))+I[11]+643717713&4294967295,A=R+(S<<14&4294967295|S>>>18),S=v+(R^y&(A^R))+I[0]+3921069994&4294967295,v=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(v^A))+I[5]+3593408605&4294967295,y=v+(S<<5&4294967295|S>>>27),S=R+(v^A&(y^v))+I[10]+38016083&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^v&(R^y))+I[15]+3634488961&4294967295,A=R+(S<<14&4294967295|S>>>18),S=v+(R^y&(A^R))+I[4]+3889429448&4294967295,v=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(v^A))+I[9]+568446438&4294967295,y=v+(S<<5&4294967295|S>>>27),S=R+(v^A&(y^v))+I[14]+3275163606&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^v&(R^y))+I[3]+4107603335&4294967295,A=R+(S<<14&4294967295|S>>>18),S=v+(R^y&(A^R))+I[8]+1163531501&4294967295,v=A+(S<<20&4294967295|S>>>12),S=y+(A^R&(v^A))+I[13]+2850285829&4294967295,y=v+(S<<5&4294967295|S>>>27),S=R+(v^A&(y^v))+I[2]+4243563512&4294967295,R=y+(S<<9&4294967295|S>>>23),S=A+(y^v&(R^y))+I[7]+1735328473&4294967295,A=R+(S<<14&4294967295|S>>>18),S=v+(R^y&(A^R))+I[12]+2368359562&4294967295,v=A+(S<<20&4294967295|S>>>12),S=y+(v^A^R)+I[5]+4294588738&4294967295,y=v+(S<<4&4294967295|S>>>28),S=R+(y^v^A)+I[8]+2272392833&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^v)+I[11]+1839030562&4294967295,A=R+(S<<16&4294967295|S>>>16),S=v+(A^R^y)+I[14]+4259657740&4294967295,v=A+(S<<23&4294967295|S>>>9),S=y+(v^A^R)+I[1]+2763975236&4294967295,y=v+(S<<4&4294967295|S>>>28),S=R+(y^v^A)+I[4]+1272893353&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^v)+I[7]+4139469664&4294967295,A=R+(S<<16&4294967295|S>>>16),S=v+(A^R^y)+I[10]+3200236656&4294967295,v=A+(S<<23&4294967295|S>>>9),S=y+(v^A^R)+I[13]+681279174&4294967295,y=v+(S<<4&4294967295|S>>>28),S=R+(y^v^A)+I[0]+3936430074&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^v)+I[3]+3572445317&4294967295,A=R+(S<<16&4294967295|S>>>16),S=v+(A^R^y)+I[6]+76029189&4294967295,v=A+(S<<23&4294967295|S>>>9),S=y+(v^A^R)+I[9]+3654602809&4294967295,y=v+(S<<4&4294967295|S>>>28),S=R+(y^v^A)+I[12]+3873151461&4294967295,R=y+(S<<11&4294967295|S>>>21),S=A+(R^y^v)+I[15]+530742520&4294967295,A=R+(S<<16&4294967295|S>>>16),S=v+(A^R^y)+I[2]+3299628645&4294967295,v=A+(S<<23&4294967295|S>>>9),S=y+(A^(v|~R))+I[0]+4096336452&4294967295,y=v+(S<<6&4294967295|S>>>26),S=R+(v^(y|~A))+I[7]+1126891415&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~v))+I[14]+2878612391&4294967295,A=R+(S<<15&4294967295|S>>>17),S=v+(R^(A|~y))+I[5]+4237533241&4294967295,v=A+(S<<21&4294967295|S>>>11),S=y+(A^(v|~R))+I[12]+1700485571&4294967295,y=v+(S<<6&4294967295|S>>>26),S=R+(v^(y|~A))+I[3]+2399980690&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~v))+I[10]+4293915773&4294967295,A=R+(S<<15&4294967295|S>>>17),S=v+(R^(A|~y))+I[1]+2240044497&4294967295,v=A+(S<<21&4294967295|S>>>11),S=y+(A^(v|~R))+I[8]+1873313359&4294967295,y=v+(S<<6&4294967295|S>>>26),S=R+(v^(y|~A))+I[15]+4264355552&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~v))+I[6]+2734768916&4294967295,A=R+(S<<15&4294967295|S>>>17),S=v+(R^(A|~y))+I[13]+1309151649&4294967295,v=A+(S<<21&4294967295|S>>>11),S=y+(A^(v|~R))+I[4]+4149444226&4294967295,y=v+(S<<6&4294967295|S>>>26),S=R+(v^(y|~A))+I[11]+3174756917&4294967295,R=y+(S<<10&4294967295|S>>>22),S=A+(y^(R|~v))+I[2]+718787259&4294967295,A=R+(S<<15&4294967295|S>>>17),S=v+(R^(A|~y))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(A+(S<<21&4294967295|S>>>11))&4294967295,E.g[2]=E.g[2]+A&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,I=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=v;)i(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<y;)if(I[A++]=E.charCodeAt(R++),A==this.blockSize){i(this,I),A=0;break}}else for(;R<y;)if(I[A++]=E[R++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var I=0;32>I;I+=8)E[v++]=this.g[y]>>>I&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],I=!0,A=E.length-1;0<=A;A--){var R=E[A]|0;I&&R==y||(v[A]=R,I=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return b(c(-E));for(var y=[],v=1,I=0;E>=v;I++)y[I]=E/v|0,v*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return b(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(y,8)),I=p,A=0;A<E.length;A+=8){var R=Math.min(8,E.length-A),S=parseInt(E.substring(A,A+R),y);8>R?(R=c(Math.pow(y,R)),I=I.j(R).add(c(S))):(I=I.j(v),I=I.add(c(S)))}return I}var p=u(0),m=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-b(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var I=this.i(v);E+=(0<=I?I:4294967296+I)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+b(this).toString(E);for(var y=c(Math.pow(E,6)),v=this,I="";;){var A=M(v,y).g;v=C(v,A.j(y));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=A,k(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=C(this,E),N(E)?-1:k(E)?0:1};function b(E){for(var y=E.g.length,v=[],I=0;I<y;I++)v[I]=~E.g[I];return new o(v,~E.h).add(m)}t.abs=function(){return N(this)?b(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0,A=0;A<=y;A++){var R=I+(this.i(A)&65535)+(E.i(A)&65535),S=(R>>>16)+(this.i(A)>>>16)+(E.i(A)>>>16);I=S>>>16,R&=65535,S&=65535,v[A]=S<<16|R}return new o(v,v[v.length-1]&-2147483648?-1:0)};function C(E,y){return E.add(b(y))}t.j=function(E){if(k(this)||k(E))return p;if(N(this))return N(E)?b(this).j(b(E)):b(b(this).j(E));if(N(E))return b(this.j(b(E)));if(0>this.l(w)&&0>E.l(w))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],I=0;I<2*y;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<E.g.length;A++){var R=this.i(I)>>>16,S=this.i(I)&65535,Bt=E.i(A)>>>16,br=E.i(A)&65535;v[2*I+2*A]+=S*br,T(v,2*I+2*A),v[2*I+2*A+1]+=R*br,T(v,2*I+2*A+1),v[2*I+2*A+1]+=S*Bt,T(v,2*I+2*A+1),v[2*I+2*A+2]+=R*Bt,T(v,2*I+2*A+2)}for(I=0;I<y;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=y;I<2*y;I++)v[I]=0;return new o(v,0)};function T(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function x(E,y){this.g=E,this.h=y}function M(E,y){if(k(y))throw Error("division by zero");if(k(E))return new x(p,p);if(N(E))return y=M(b(E),y),new x(b(y.g),b(y.h));if(N(y))return y=M(E,b(y)),new x(b(y.g),y.h);if(30<E.g.length){if(N(E)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,I=y;0>=I.l(E);)v=L(v),I=L(I);var A=O(v,1),R=O(I,1);for(I=O(I,2),v=O(v,2);!k(I);){var S=R.add(I);0>=S.l(E)&&(A=A.add(v),R=S),I=O(I,1),v=O(v,1)}return y=C(E,A.j(y)),new x(A,y)}for(A=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=c(v),S=R.j(y);N(S)||0<S.l(E);)v-=I,R=c(v),S=R.j(y);k(R)&&(R=m),A=A.add(R),E=C(E,S)}return new x(A,E)}t.A=function(E){return M(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)&E.i(I);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)|E.i(I);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],I=0;I<y;I++)v[I]=this.i(I)^E.i(I);return new o(v,this.h^E.h)};function L(E){for(var y=E.g.length+1,v=[],I=0;I<y;I++)v[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(v,E.h)}function O(E,y){var v=y>>5;y%=32;for(var I=E.g.length-v,A=[],R=0;R<I;R++)A[R]=0<y?E.i(R+v)>>>y|E.i(R+v+1)<<32-y:E.i(R+v);return new o(A,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Yr=o}).apply(typeof sv<"u"?sv:typeof self<"u"?self:typeof window<"u"?window:{});var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pI,uo,mI,Ll,hf,gI,_I,yI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof gl=="object"&&gl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in f))break e;f=f[P]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,P={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function k(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var z=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)z[pe-2]=arguments[pe];return h.prototype[P].apply(g,z)}}function N(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function b(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let z=0;z<D;z++)a[P+z]=g[z]}else a.push(g)}}class C{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function T(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function M(a){return M[" "](a),a}M[" "]=function(){};var L=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function O(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(f in g)a[f]=g[f];for(let D=0;D<v.length;D++)f=v[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function A(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=Y;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Bt{constructor(){this.h=this.g=null}add(h,f){const g=br.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var br=new C(()=>new Ns,a=>a.reset());class Ns{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Tn,B=!1,Y=new Bt,Z=()=>{const a=l.Promise.resolve(void 0);Tn=()=>{a.then(Se)}};var Se=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){R(f)}var h=br;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function De(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}De.prototype.h=function(){this.defaultPrevented=!0};var In=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Sn(a,h){if(De.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{M(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Sn.aa.h.call(this)}}k(Sn,De);var Cn={2:"touch",3:"pen",4:"mouse"};Sn.prototype.h=function(){Sn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),bS=0;function MS(a,h,f,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=P,this.key=++bS,this.da=this.fa=!1}function Da(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ba(a){this.src=a,this.g={},this.h=0}ba.prototype.add=function(a,h,f,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var z=Dc(a,h,g,P);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new MS(h,this.src,D,!!g,P),h.fa=f,a.push(h)),h};function Nc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(Da(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Dc(a,h,f,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return P}return-1}var bc="closure_lm_"+(1e6*Math.random()|0),Mc={};function qm(a,h,f,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)qm(a,h[D],f,g,P);return null}return f=Gm(f),a&&a[kn]?a.K(h,f,c(g)?!!g.capture:!1,P):OS(a,h,f,!1,g,P)}function OS(a,h,f,g,P,D){if(!h)throw Error("Invalid event type");var z=c(P)?!!P.capture:!!P,pe=Vc(a);if(pe||(a[bc]=pe=new ba(a)),f=pe.add(h,f,g,z,D),f.proxy)return f;if(g=VS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)In||(P=z),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(Km(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function VS(){function a(f){return h.call(a.src,a.listener,f)}const h=LS;return a}function Hm(a,h,f,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)Hm(a,h[D],f,g,P);else g=c(g)?!!g.capture:!!g,f=Gm(f),a&&a[kn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=Dc(D,f,g,P),-1<f&&(Da(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Vc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Dc(h,f,g,P)),(f=-1<a?h[a]:null)&&Oc(f))}function Oc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[kn])Nc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Km(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Vc(h))?(Nc(f,a),f.h==0&&(f.src=null,h[bc]=null)):Da(a)}}}function Km(a){return a in Mc?Mc[a]:Mc[a]="on"+a}function LS(a,h){if(a.da)a=!0;else{h=new Sn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Oc(a),a=f.call(g,h)}return a}function Vc(a){return a=a[bc],a instanceof ba?a:null}var Lc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gm(a){return typeof a=="function"?a:(a[Lc]||(a[Lc]=function(h){return a.handleEvent(h)}),a[Lc])}function nt(){fe.call(this),this.i=new ba(this),this.M=this,this.F=null}k(nt,fe),nt.prototype[kn]=!0,nt.prototype.removeEventListener=function(a,h,f,g){Hm(this,a,h,f,g)};function pt(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new De(h,a);else if(h instanceof De)h.target=h.target||a;else{var P=h;h=new De(g,a),I(h,P)}if(P=!0,f)for(var D=f.length-1;0<=D;D--){var z=h.g=f[D];P=Ma(z,g,!0,h)&&P}if(z=h.g=a,P=Ma(z,g,!0,h)&&P,P=Ma(z,g,!1,h)&&P,f)for(D=0;D<f.length;D++)z=h.g=f[D],P=Ma(z,g,!1,h)&&P}nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Da(f[g]);delete a.g[h],a.h--}}this.F=null},nt.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},nt.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ma(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var z=h[D];if(z&&!z.da&&z.capture==f){var pe=z.listener,Ge=z.ha||z.src;z.fa&&Nc(a.i,z),P=pe.call(Ge,g)!==!1&&P}}return P&&!g.defaultPrevented}function Qm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ym(a){a.g=Qm(()=>{a.g=null,a.i&&(a.i=!1,Ym(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class FS extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ym(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ds(a){fe.call(this),this.h=a,this.g={}}k(Ds,fe);var Xm=[];function Jm(a){O(a.g,function(h,f){this.g.hasOwnProperty(f)&&Oc(h)},a),a.g={}}Ds.prototype.N=function(){Ds.aa.N.call(this),Jm(this)},Ds.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,jS=l.JSON.parse,US=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function jc(){}jc.prototype.h=null;function Zm(a){return a.h||(a.h=a.i())}function eg(){}var bs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Uc(){De.call(this,"d")}k(Uc,De);function zc(){De.call(this,"c")}k(zc,De);var Mr={},tg=null;function Oa(){return tg=tg||new nt}Mr.La="serverreachability";function ng(a){De.call(this,Mr.La,a)}k(ng,De);function Ms(a){const h=Oa();pt(h,new ng(h))}Mr.STAT_EVENT="statevent";function rg(a,h){De.call(this,Mr.STAT_EVENT,a),this.stat=h}k(rg,De);function mt(a){const h=Oa();pt(h,new rg(h,a))}Mr.Ma="timingevent";function ig(a,h){De.call(this,Mr.Ma,a),this.size=h}k(ig,De);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function zS(a,h,f,g,P,D){a.info(function(){if(a.g)if(D)for(var z="",pe=D.split("&"),Ge=0;Ge<pe.length;Ge++){var le=pe[Ge].split("=");if(1<le.length){var rt=le[0];le=le[1];var it=rt.split("_");z=2<=it.length&&it[1]=="type"?z+(rt+"="+le+"&"):z+(rt+"=redacted&")}}else z=null;else z=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+f+`
`+z})}function BS(a,h,f,g,P,D,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+f+`
`+D+" "+z})}function Ti(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+WS(a,f)+(g?" "+g:"")})}function $S(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function WS(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var z=1;z<P.length;z++)P[z]=""}}}}return Fc(f)}catch{return h}}var Va={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bc;function La(){}k(La,jc),La.prototype.g=function(){return new XMLHttpRequest},La.prototype.i=function(){return{}},Bc=new La;function Qn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ds(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new og}function og(){this.i=null,this.g="",this.h=!1}var ag={},$c={};function Wc(a,h,f){a.L=1,a.v=za(xn(h)),a.m=f,a.P=!0,lg(a,null)}function lg(a,h){a.F=Date.now(),Fa(a),a.A=xn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Tg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new og,a.g=Ug(a.j,f?h:null,!a.m),0<a.O&&(a.M=new FS(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Xm[0]=P.toString()),P=Xm);for(var D=0;D<P.length;D++){var z=qm(f,P[D],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ms(),zS(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const it=An(this.g);var h=this.g.Ba();const Ci=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Rg(this.g)))){this.J||it!=4||h==7||(h==8||0>=Ci?Ms(3):Ms(2)),qc(this);var f=this.g.Z();this.X=f;t:if(ug(this)){var g=Rg(this.g);a="";var P=g.length,D=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Ls(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,BS(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ge=this.g;if((pe=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(pe)){var le=pe;break t}}le=null}if(f=le)Ti(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hc(this,f);else{this.o=!1,this.s=3,mt(12),Or(this),Ls(this);break e}}if(this.P){f=!0;let Yt;for(;!this.J&&this.C<z.length;)if(Yt=qS(this,z),Yt==$c){it==4&&(this.s=4,mt(14),f=!1),Ti(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==ag){this.s=4,mt(15),Ti(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else Ti(this.i,this.l,Yt,null),Hc(this,Yt);if(ug(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||z.length!=0||this.h.h||(this.s=1,mt(16),f=!1),this.o=this.o&&f,!f)Ti(this.i,this.l,z,"[Invalid Chunked Response]"),Or(this),Ls(this);else if(0<z.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Jc(rt),rt.M=!0,mt(11))}}else Ti(this.i,this.l,z,null),Hc(this,z);it==4&&Or(this),this.o&&!this.J&&(it==4?Vg(this.j,this):(this.o=!1,Fa(this)))}else lC(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Or(this),Ls(this)}}}catch{}finally{}};function ug(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qS(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?$c:(f=Number(h.substring(f,g)),isNaN(f)?ag:(g+=1,g+f>h.length?$c:(h=h.slice(g,g+f),a.C=g+f,h)))}Qn.prototype.cancel=function(){this.J=!0,Or(this)};function Fa(a){a.S=Date.now()+a.I,cg(a,a.I)}function cg(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(m(a.ba,a),h)}function qc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($S(this.i,this.A),this.L!=2&&(Ms(),mt(17)),Or(this),this.s=2,Ls(this)):cg(this,this.S-a)};function Ls(a){a.j.G==0||a.J||Vg(a.j,a)}function Or(a){qc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Jm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Hc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Kc(f.h,a))){if(!a.K&&Kc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ka(f),qa(f);else break e;Xc(f),mt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Os(m(f.Za,f),6e3));if(1>=fg(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Lr(f,11)}else if((a.K||f.g==a)&&Ka(f),!T(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let le=P[h];if(f.T=le[0],le=le[1],f.G==2)if(le[0]=="c"){f.K=le[1],f.ia=le[2];const rt=le[3];rt!=null&&(f.la=rt,f.j.info("VER="+f.la));const it=le[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const Ci=le[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(g=1.5*Ci,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Yt=a.g;if(Yt){const Qa=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var D=g.h;D.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Gc(D,D.h),D.h=null))}if(g.D){const Zc=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zc&&(g.ya=Zc,ye(g.I,g.D,Zc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var z=a;if(g.qa=jg(g,g.J?g.ia:null,g.W),z.K){pg(g.h,z);var pe=z,Ge=g.L;Ge&&(pe.I=Ge),pe.B&&(qc(pe),Fa(pe)),g.g=z}else Mg(g);0<f.i.length&&Ha(f)}else le[0]!="stop"&&le[0]!="close"||Lr(f,7);else f.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Lr(f,7):Yc(f):le[0]!="noop"&&f.l&&f.l.ta(le),f.v=0)}}Ms(4)}catch{}}var HS=class{constructor(a,h){this.g=a,this.map=h}};function hg(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dg(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fg(a){return a.h?1:a.g?a.g.size:0}function Kc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Gc(a,h){a.g?a.g.add(h):a.h=h}function pg(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hg.prototype.cancel=function(){if(this.i=mg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mg(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return N(a.i)}function KS(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function GS(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function gg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=GS(a),g=KS(a),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],f&&f[D],a)}var _g=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QS(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),P=null;if(0<=g){var D=a[f].substring(0,g);P=a[f].substring(g+1)}else D=a[f];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,ja(this,a.j),this.o=a.o,this.g=a.g,Ua(this,a.s),this.l=a.l;var h=a.i,f=new Us;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),yg(this,f),this.m=a.m}else a&&(h=String(a).match(_g))?(this.h=!1,ja(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Ua(this,h[4]),this.l=Fs(h[5]||"",!0),yg(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.h=!1,this.i=new Us(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(js(h,vg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(js(h,vg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(js(f,f.charAt(0)=="/"?JS:XS,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",js(f,eC)),a.join("")};function xn(a){return new Vr(a)}function ja(a,h,f){a.j=f?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ua(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function yg(a,h,f){h instanceof Us?(a.i=h,tC(a.i,a.h)):(f||(h=js(h,ZS)),a.i=new Us(h,a.h))}function ye(a,h,f){a.i.set(h,f)}function za(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function js(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,YS),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function YS(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vg=/[#\/\?@]/g,XS=/[#\?:]/g,JS=/[#\?]/g,ZS=/[#\?@]/g,eC=/#/g;function Us(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&QS(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Us.prototype,t.add=function(a,h){Yn(this),this.i=null,a=Ii(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function wg(a,h){Yn(a),h=Ii(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Eg(a,h){return Yn(a),h=Ii(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(f,g){f.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const P=a[g];for(let D=0;D<P.length;D++)f.push(h[g])}return f},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Eg(this,a)&&(h=h.concat(this.g.get(Ii(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=Ii(this,a),Eg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Tg(a,h,f){wg(a,h),0<f.length&&(a.i=null,a.g.set(Ii(a,h),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var P=D;z[g]!==""&&(P+="="+encodeURIComponent(String(z[g]))),a.push(P)}}return this.i=a.join("&")};function Ii(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function tC(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(f,g){var P=g.toLowerCase();g!=P&&(wg(this,g),Tg(this,P,f))},a)),a.j=h}function nC(a,h){const f=new Vs;if(l.Image){const g=new Image;g.onload=w(Xn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=w(Xn,f,"TestLoadImage: error",!1,h,g),g.onabort=w(Xn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=w(Xn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function rC(a,h){const f=new Vs,g=new AbortController,P=setTimeout(()=>{g.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(f)}catch{}}function iC(){this.g=new US}function sC(a,h,f){const g=f||"";try{gg(a,function(P,D){let z=P;c(P)&&(z=Fc(P)),h.push(g+D+"="+encodeURIComponent(z))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Ba(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Ba,jc),Ba.prototype.g=function(){return new $a(this.l,this.j)},Ba.prototype.i=function(a){return function(){return a}}({});function $a(a,h){nt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k($a,nt),t=$a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Bs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ig(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ig(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?zs(this):Bs(this),this.readyState==3&&Ig(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,zs(this))},t.Qa=function(a){this.g&&(this.response=a,zs(this))},t.ga=function(){this.g&&zs(this)};function zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Bs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sg(a){let h="";return O(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Qc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=Sg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ye(a,h,f))}function Re(a){nt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Re,nt);var oC=/^https?$/i,aC=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bc.g(),this.v=this.o?Zm(this.o):Zm(Bc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Cg(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)f.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(aC,h,void 0))||g||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,z]of f)this.g.setRequestHeader(D,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ag(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Cg(this,D)}};function Cg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,kg(a),Wa(a)}function kg(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),Wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wa(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xg(this):this.bb())},t.bb=function(){xg(this)};function xg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)Qm(a.Ea,0,a);else if(pt(a,"readystatechange"),An(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=z===0){var P=String(a.D).match(_g)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!oC.test(P?P.toLowerCase():"")}f=g}if(f)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var D=2<An(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",kg(a)}}finally{Wa(a)}}}}function Wa(a,h){if(a.g){Ag(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{f.onreadystatechange=g}catch{}}}function Ag(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),jS(h)}};function Rg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function lC(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var f=A(a[g]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[P]||[];h[P]=D,D.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Pg(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hg(a&&a.concurrentRequestLimit),this.Da=new iC,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){mt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=jg(this,null,this.W),Ha(this)};function Yc(a){if(Ng(a),a.G==3){var h=a.U++,f=xn(a.I);if(ye(f,"SID",a.K),ye(f,"RID",h),ye(f,"TYPE","terminate"),Ws(a,f),h=new Qn(a,a.j,h),h.L=2,h.v=za(xn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ug(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Fa(h)}Fg(a)}function qa(a){a.g&&(Jc(a),a.g.cancel(),a.g=null)}function Ng(a){qa(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ha(a){if(!dg(a.h)&&!a.s){a.s=!0;var h=a.Ga;Tn||Z(),B||(Tn(),B=!0),Y.add(h,a),a.B=0}}function uC(a,h){return fg(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(m(a.Ga,a,h),Lg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Qn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=bg(this,P,h),f=xn(this.I),ye(f,"RID",a),ye(f,"CVER",22),this.D&&ye(f,"X-HTTP-Session-Id",this.D),Ws(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(Sg(D)))+"&"+h:this.m&&Qc(f,this.m,D)),Gc(this.h,P),this.Ua&&ye(f,"TYPE","init"),this.P?(ye(f,"$req",h),ye(f,"SID","null"),P.T=!0,Wc(P,f,null)):Wc(P,f,h),this.G=2}}else this.G==3&&(a?Dg(this,a):this.i.length==0||dg(this.h)||Dg(this))};function Dg(a,h){var f;h?f=h.l:f=a.U++;const g=xn(a.I);ye(g,"SID",a.K),ye(g,"RID",f),ye(g,"AID",a.T),Ws(a,g),a.m&&a.o&&Qc(g,a.m,a.o),f=new Qn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=bg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gc(a.h,f),Wc(f,g,h)}function Ws(a,h){a.H&&O(a.H,function(f,g){ye(h,g,f)}),a.l&&gg({},function(f,g){ye(h,g,f)})}function bg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const z=["count="+f];D==-1?0<f?(D=P[0].g,z.push("ofs="+D)):D=0:z.push("ofs="+D);let pe=!0;for(let Ge=0;Ge<f;Ge++){let le=P[Ge].g;const rt=P[Ge].map;if(le-=D,0>le)D=Math.max(0,P[Ge].g-100),pe=!1;else try{sC(rt,z,"req"+le+"_")}catch{g&&g(rt)}}if(pe){g=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Mg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Tn||Z(),B||(Tn(),B=!0),Y.add(h,a),a.v=0}}function Xc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(m(a.Fa,a),Lg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Og(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),qa(this),Og(this))};function Jc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Og(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=xn(a.qa);ye(h,"RID","rpc"),ye(h,"SID",a.K),ye(h,"AID",a.T),ye(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(h,"TO",a.ja),ye(h,"TYPE","xmlhttp"),Ws(a,h),a.m&&a.o&&Qc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=za(xn(h)),f.m=null,f.P=!0,lg(f,a)}t.Za=function(){this.C!=null&&(this.C=null,qa(this),Xc(this),mt(19))};function Ka(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Vg(a,h){var f=null;if(a.g==h){Ka(a),Jc(a),a.g=null;var g=2}else if(Kc(a.h,h))f=h.D,pg(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=Oa(),pt(g,new ig(g,f)),Ha(a)}else Mg(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&uC(a,h)||g==2&&Xc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function Lg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const P=!g;g=new Vr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ja(g,"https"),za(g),P?nC(g.toString(),f):rC(g.toString(),f)}else mt(2);a.G=0,a.l&&a.l.sa(h),Fg(a),Ng(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Fg(a){if(a.G=0,a.ka=[],a.l){const h=mg(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function jg(a,h,f){var g=f instanceof Vr?xn(f):new Vr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Ua(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new Vr(null);g&&ja(D,g),h&&(D.g=h),P&&Ua(D,P),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&ye(g,f,h),ye(g,"VER",a.la),Ws(a,g),g}function Ug(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new Ba({eb:f})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zg(){}t=zg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,h){return new Pt(a,h)};function Pt(a,h){nt.call(this),this.g=new Pg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!T(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!T(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Si(this)}k(Pt,nt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){Yc(this.g)},Pt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fc(a),a=f);h.i.push(new HS(h.Ya++,a)),h.G==3&&Ha(h)},Pt.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,Pt.aa.N.call(this)};function Bg(a){Uc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}k(Bg,Uc);function $g(){zc.call(this),this.status=1}k($g,zc);function Si(a){this.g=a}k(Si,zg),Si.prototype.ua=function(){pt(this.g,"a")},Si.prototype.ta=function(a){pt(this.g,new Bg(a))},Si.prototype.sa=function(a){pt(this.g,new $g)},Si.prototype.ra=function(){pt(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,yI=function(){return new Ga},_I=function(){return Oa()},gI=Mr,hf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Va.NO_ERROR=0,Va.TIMEOUT=8,Va.HTTP_ERROR=6,Ll=Va,sg.COMPLETE="complete",mI=sg,eg.EventType=bs,bs.OPEN="a",bs.CLOSE="b",bs.ERROR="c",bs.MESSAGE="d",nt.prototype.listen=nt.prototype.K,uo=eg,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,pI=Re}).apply(typeof gl<"u"?gl:typeof self<"u"?self:typeof window<"u"?window:{});const ov="@firebase/firestore";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let xs="10.14.0";/**
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
 */const hi=new rc("@firebase/firestore");function ro(){return hi.logLevel}function q(t,...e){if(hi.logLevel<=oe.DEBUG){const n=e.map(um);hi.debug(`Firestore (${xs}): ${t}`,...n)}}function Wn(t,...e){if(hi.logLevel<=oe.ERROR){const n=e.map(um);hi.error(`Firestore (${xs}): ${t}`,...n)}}function ds(t,...e){if(hi.logLevel<=oe.WARN){const n=e.map(um);hi.warn(`Firestore (${xs}): ${t}`,...n)}}function um(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function de(t,e){t||Q()}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wb{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new vI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new lt(e)}}class Eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Eb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){de(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.R=n.token,new Ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class wI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Cb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Be(0,0))}static max(){return new X(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends ia{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const kb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends ia{construct(e,n,r){return new Xe(e,n,r)}static isValidIdentifier(e){return kb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ee.fromString(e))}static fromName(e){return new K(Ee.fromString(e).popFirst(5))}static empty(){return new K(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ee(e.slice()))}}function xb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Sr(i,K.empty(),e)}function Ab(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(X.min(),K.empty(),-1)}static max(){return new Sr(X.max(),K.empty(),-1)}}function Rb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const Pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sa(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Pb)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(i=>i?F.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new F((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new F((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Db(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}cm.oe=-1;function fc(t){return t==null}function Nu(t){return t===0&&1/t==-1/0}function bb(t){return typeof t=="number"&&Number.isInteger(t)&&!Nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ye.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _l(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _l(this.root,e,this.comparator,!1)}getReverseIterator(){return new _l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _l(this.root,e,this.comparator,!0)}}class _l{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=i??Ye.EMPTY,this.right=s??Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ye(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ye.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1;Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ye(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lv(this.data.getIterator())}getIteratorFrom(e){return new lv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class lv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ze(Xe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class TI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TI("Invalid base64 string: "+s):s}}(e);return new tt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(de(!!t),typeof t=="string"){let e=0;const n=Mb.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:be(t.seconds),nanos:be(t.nanos)}}function be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function di(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function hm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dm(t){const e=t.mapValue.fields.__previous_value__;return hm(e)?dm(e):e}function sa(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
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
 */class Ob{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yl={mapValue:{}};function fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hm(t)?4:Lb(t)?9007199254740991:Vb(t)?10:11:Q()}function En(t,e){if(t===e)return!0;const n=fi(t);if(n!==fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sa(t).isEqual(sa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cr(i.timestampValue),l=Cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return di(i.bytesValue).isEqual(di(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return be(i.geoPointValue.latitude)===be(s.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return be(i.integerValue)===be(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=be(i.doubleValue),l=be(s.doubleValue);return o===l?Nu(o)===Nu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(av(o)!==av(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!En(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function aa(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=fi(t),r=fi(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=be(s.integerValue||s.doubleValue),u=be(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uv(t.timestampValue,e.timestampValue);case 4:return uv(sa(t),sa(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(s,o){const l=di(s),u=di(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ue(l[c],u[c]);if(d!==0)return d}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(be(s.latitude),be(o.latitude));return l!==0?l:ue(be(s.longitude),be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},w=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(u=m.value)===null||u===void 0?void 0:u.arrayValue,N=ue(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:cv(w,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===yl.mapValue&&o===yl.mapValue)return 0;if(s===yl.mapValue)return 1;if(o===yl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=ue(u[p],d[p]);if(m!==0)return m;const w=ps(l[u[p]],c[d[p]]);if(w!==0)return w}return ue(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function uv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Cr(t),r=Cr(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function cv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ps(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function ms(t){return df(t)}function df(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return di(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=df(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${df(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function hv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ff(t){return!!t&&"integerValue"in t}function fm(t){return!!t&&"arrayValue"in t}function dv(t){return!!t&&"nullValue"in t}function fv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fl(t){return!!t&&"mapValue"in t}function Vb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(n)}setAll(e){let n=Xe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ao(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Ao(this.value))}}function II(t){const e=[];return vi(t.fields,(n,r)=>{const i=new Xe([n]);if(Fl(r)){const s=II(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
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
 */class dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,X.min(),X.min(),X.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new dt(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new dt(e,2,n,X.min(),X.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,X.min(),X.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class SI{}class Fe extends SI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ub(e,n,r):n==="array-contains"?new $b(e,r):n==="in"?new Wb(e,r):n==="not-in"?new qb(e,r):n==="array-contains-any"?new Hb(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zb(e,r):new Bb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ps(n,this.value)):n!==null&&fi(this.value)===fi(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends SI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return CI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CI(t){return t.op==="and"}function kI(t){return jb(t)&&CI(t)}function jb(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function pf(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(kI(t))return t.filters.map(e=>pf(e)).join(",");{const e=t.filters.map(n=>pf(n)).join(",");return`${t.op}(${e})`}}function xI(t,e){return t instanceof Fe?function(r,i){return i instanceof Fe&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&xI(o,i.filters[l]),!0):!1}(t,e):void Q()}function AI(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(AI).join(" ,")+"}"}(t):"Filter"}class Ub extends Fe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class zb extends Fe{constructor(e,n){super(e,"in",n),this.keys=RI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bb extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=RI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class $b extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return fm(n)&&aa(n.arrayValue,this.value)}}class Wb extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class qb extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class Hb extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!fm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
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
 */class Kb{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function gv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Kb(t,e,n,r,i,s,o)}function pm(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.ue=n}return e.ue}function mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mv(t.startAt,e.startAt)&&mv(t.endAt,e.endAt)}function mf(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class As{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gb(t,e,n,r,i,s,o,l){return new As(t,e,n,r,i,s,o,l)}function PI(t){return new As(t)}function _v(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NI(t){return t.collectionGroup!==null}function Ro(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(Xe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new la(s,r))}),n.has(Xe.keyField().canonicalString())||e.ce.push(new la(Xe.keyField(),r))}return e.ce}function yn(t){const e=J(t);return e.le||(e.le=Qb(e,Ro(t))),e.le}function Qb(t,e){if(t.limitType==="F")return gv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new la(i.field,s)});const n=t.endAt?new Du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Du(t.startAt.position,t.startAt.inclusive):null;return gv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gf(t,e){const n=t.filters.concat([e]);return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _f(t,e,n){return new As(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pc(t,e){return mm(yn(t),yn(e))&&t.limitType===e.limitType}function DI(t){return`${pm(yn(t))}|lt:${t.limitType}`}function Ai(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AI(i)).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ms(i)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function mc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=pv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ro(r),i)||r.endAt&&!function(o,l,u){const c=pv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ro(r),i))}(t,e)}function Yb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bI(t){return(e,n)=>{let r=!1;for(const i of Ro(t)){const s=Xb(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xb(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ps(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class Rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EI(this.inner)}size(){return this.innerSize}}/**
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
 */const Jb=new Ae(K.comparator);function qn(){return Jb}const MI=new Ae(K.comparator);function co(...t){let e=MI;for(const n of t)e=e.insert(n.key,n);return e}function OI(t){let e=MI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Po()}function VI(){return Po()}function Po(){return new Rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Zb=new Ae(K.comparator),e2=new Ze(K.comparator);function ie(...t){let e=e2;for(const n of t)e=e.add(n);return e}const t2=new Ze(ue);function n2(){return t2}/**
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
 */function gm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nu(e)?"-0":e}}function LI(t){return{integerValue:""+t}}function r2(t,e){return bb(e)?LI(e):gm(t,e)}/**
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
 */class gc{constructor(){this._=void 0}}function i2(t,e,n){return t instanceof ua?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hm(s)&&(s=dm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ca?jI(t,e):t instanceof ha?UI(t,e):function(i,s){const o=FI(i,s),l=yv(o)+yv(i.Pe);return ff(o)&&ff(i.Pe)?LI(l):gm(i.serializer,l)}(t,e)}function s2(t,e,n){return t instanceof ca?jI(t,e):t instanceof ha?UI(t,e):n}function FI(t,e){return t instanceof bu?function(r){return ff(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ua extends gc{}class ca extends gc{constructor(e){super(),this.elements=e}}function jI(t,e){const n=zI(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class ha extends gc{constructor(e){super(),this.elements=e}}function UI(t,e){let n=zI(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class bu extends gc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function yv(t){return be(t.integerValue||t.doubleValue)}function zI(t){return fm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class o2{constructor(e,n){this.field=e,this.transform=n}}function a2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ca&&i instanceof ca||r instanceof ha&&i instanceof ha?fs(r.elements,i.elements,En):r instanceof bu&&i instanceof bu?En(r.Pe,i.Pe):r instanceof ua&&i instanceof ua}(t.transform,e.transform)}class l2{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function BI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _m(t.key,ln.none()):new ka(t.key,t.data,ln.none());{const n=t.data,r=Tt.empty();let i=new Ze(Xe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Dr(t.key,r,new Mt(i.toArray()),ln.none())}}function u2(t,e,n){t instanceof ka?function(i,s,o){const l=i.value.clone(),u=wv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Dr?function(i,s,o){if(!jl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=wv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($I(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function No(t,e,n,r){return t instanceof ka?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=s.value.clone(),d=Ev(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Dr?function(s,o,l,u){if(!jl(s.precondition,o))return l;const c=Ev(s.fieldTransforms,u,o),d=o.data;return d.setAll($I(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return jl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function c2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FI(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function vv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fs(r,i,(s,o)=>a2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ka extends _c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Dr extends _c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $I(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wv(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,s2(o,l,n[i]))}return r}function Ev(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,i2(s,o,e))}return r}class _m extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h2 extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class d2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&u2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=No(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=VI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=BI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>vv(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>vv(n,r))}}class ym{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=function(){return Zb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ym(e,n,r,i)}}/**
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
 */class f2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class p2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ve,se;function m2(t){switch(t){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function WI(t){if(t===void 0)return Wn("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ve.OK:return V.OK;case Ve.CANCELLED:return V.CANCELLED;case Ve.UNKNOWN:return V.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return V.INTERNAL;case Ve.UNAVAILABLE:return V.UNAVAILABLE;case Ve.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ve.NOT_FOUND:return V.NOT_FOUND;case Ve.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ve.ABORTED:return V.ABORTED;case Ve.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ve.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(se=Ve||(Ve={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function g2(){return new TextEncoder}/**
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
 */const _2=new Yr([4294967295,4294967295],0);function Tv(t){const e=g2().encode(t),n=new fI;return n.update(e),new Uint8Array(n.digest())}function Iv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ho(`Invalid padding: ${n}`);if(r<0)throw new ho(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ho(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ho(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(_2)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Tv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Tv(e),[r,i]=Iv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ho extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yc(X.min(),i,new Ae(ue),qn(),ie())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,ie(),ie(),ie())}}/**
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
 */class Ul{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qI{constructor(e,n){this.targetId=e,this.me=n}}class HI{constructor(e,n,r=tt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sv{constructor(){this.fe=0,this.ge=kv(),this.pe=tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new xa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class y2{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=Cv(),this.Qe=new Ae(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(mf(s))if(r===0){const o=new K(s.path);this.Ue(n,o,dt.newNoDocument(o,X.min()))}else de(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=di(r).toUint8Array()}catch(u){if(u instanceof TI)return ds("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new vm(o,i,s)}catch(u){return ds(u instanceof ho?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&mf(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new yc(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=Cv(),this.Qe=new Ae(ue),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ze(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cv(){return new Ae(K.comparator)}function kv(){return new Ae(K.comparator)}const v2={asc:"ASCENDING",desc:"DESCENDING"},w2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},E2={and:"AND",or:"OR"};class T2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function yf(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function KI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function I2(t,e){return Mu(t,e.toTimestamp())}function vn(t){return de(!!t),X.fromTimestamp(function(n){const r=Cr(n);return new Be(r.seconds,r.nanos)}(t))}function wm(t,e){return vf(t,e).canonicalString()}function vf(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GI(t){const e=Ee.fromString(t);return de(ZI(e)),e}function wf(t,e){return wm(t.databaseId,e.path)}function Wh(t,e){const n=GI(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(YI(n))}function QI(t,e){return wm(t.databaseId,e)}function S2(t){const e=GI(t);return e.length===4?Ee.emptyPath():YI(e)}function Ef(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YI(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xv(t,e,n){return{name:wf(t,e),fields:n.value.mapValue.fields}}function C2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(de(d===void 0||typeof d=="string"),tt.fromBase64String(d||"")):(de(d===void 0||d instanceof Buffer||d instanceof Uint8Array),tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:WI(c.code);return new W(d,c.message||"")}(o);n=new HI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wh(t,r.document.name),s=vn(r.document.updateTime),o=r.document.createTime?vn(r.document.createTime):X.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Ul(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wh(t,r.document),s=r.readTime?vn(r.readTime):X.min(),o=dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wh(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new p2(i,s),l=r.targetId;n=new qI(l,o)}}return n}function k2(t,e){let n;if(e instanceof ka)n={update:xv(t,e.key,e.value)};else if(e instanceof _m)n={delete:wf(t,e.key)};else if(e instanceof Dr)n={update:xv(t,e.key,e.data),updateMask:O2(e.fieldMask)};else{if(!(e instanceof h2))return Q();n={verify:wf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:I2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function x2(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?vn(i.updateTime):vn(s);return o.isEqual(X.min())&&(o=vn(s)),new l2(o,i.transformResults||[])}(n,e))):[]}function A2(t,e){return{documents:[QI(t,e.path)]}}function R2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QI(t,i);const s=function(c){if(c.length!==0)return JI(cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ri(m.field),direction:D2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=yf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function P2(t){let e=S2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=XI(p);return m instanceof cn&&kI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(k){return new la(Pi(k.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,fc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,w=p.values||[];return new Du(w,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,w=p.values||[];return new Du(w,m)}(n.endAt)),Gb(e,i,o,s,l,"F",u,c)}function N2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Pi(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Pi(n.unaryFilter.field);return Fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Pi(n.unaryFilter.field);return Fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Pi(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(Pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>XI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function D2(t){return v2[t]}function b2(t){return w2[t]}function M2(t){return E2[t]}function Ri(t){return{fieldPath:t.canonicalString()}}function Pi(t){return Xe.fromServerFormat(t.fieldPath)}function JI(t){return t instanceof Fe?function(n){if(n.op==="=="){if(fv(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NAN"}};if(dv(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fv(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NAN"}};if(dv(n.value))return{unaryFilter:{field:Ri(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ri(n.field),op:b2(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>JI(i));return r.length===1?r[0]:{compositeFilter:{op:M2(n.op),filters:r}}}(t):Q()}function O2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sr{constructor(e,n,r,i,s=X.min(),o=X.min(),l=tt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class V2{constructor(e){this.ct=e}}function L2(t){const e=P2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?_f(e,e.limit,"L"):e}/**
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
 */class F2{constructor(){this.un=new j2}addToCollectionParentIndex(e,n){return this.un.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Sr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class j2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Ee.comparator)).toArray()}}/**
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
 */class gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gs(0)}static kn(){return new gs(-1)}}/**
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
 */class U2{constructor(){this.changes=new Rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class B2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&No(r.mutation,i,Mt.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=qn();const o=Po(),l=function(){return Po()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Dr)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),No(d.mutation,c,d.mutation.getFieldMask(),Be.now())):o.set(c.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new z2(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Po();let i=new Ae((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Mt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=VI();d.forEach(m=>{if(!s.has(m)){const w=BI(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):F.resolve(Kr());let l=-1,u=s;return o.next(c=>F.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ie())).next(d=>({batchId:l,changes:OI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,s).next(l=>F.forEach(l,u=>{const c=function(p,m){return new As(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,dt.newInvalidDocument(d)))});let l=co();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&No(d.mutation,c,Mt.empty(),Be.now()),mc(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class $2{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return F.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:vn(i.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:L2(i.bundledQuery),readTime:vn(i.readTime)}}(n)),F.resolve()}}/**
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
 */class W2{constructor(){this.overlays=new Ae(K.comparator),this.Ir=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return F.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return F.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Kr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Kr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return F.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new f2(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class q2{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Em{constructor(){this.Tr=new Ze(We.Er),this.dr=new Ze(We.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new We(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new Ee([])),r=new We(n,e),i=new We(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new Ee([])),r=new We(n,e),i=new We(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new We(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class H2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ze(We.Er)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new d2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new We(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return F.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),i=new We(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),F.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new We(i,0),o=new We(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),F.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new We(new K(s),0);let l=new Ze(ue);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),F.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return F.forEach(n.mutations,i=>{const s=new We(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new We(n,0),i=this.br.firstAfterOrEqual(r);return F.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K2{constructor(e){this.Mr=e,this.docs=function(){return new Ae(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():dt.newInvalidDocument(i))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Rb(Ab(d),r)<=0||(i.has(d.key)||mc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return F.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G2(this)}getSize(e){return F.resolve(this.size)}}class G2 extends U2{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Q2{constructor(e){this.persistence=e,this.Nr=new Rs(n=>pm(n),mm),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Em,this.targetCount=0,this.kr=gs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),F.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Kn(n),F.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),F.waitFor(s).next(()=>i)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),F.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Br.containsKey(n))}}/**
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
 */class Y2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new cm(0),this.Kr=!1,this.Kr=!0,this.$r=new q2,this.referenceDelegate=e(this),this.Ur=new Q2(this),this.indexManager=new F2,this.remoteDocumentCache=function(i){return new K2(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new V2(n),this.Gr=new $2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new W2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new H2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new X2(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return F.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class X2 extends Nb{constructor(e){super(),this.currentSequenceNumber=e}}class Tm{constructor(e){this.persistence=e,this.Jr=new Em,this.Yr=null}static Zr(e){return new Tm(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),F.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return F.or([()=>F.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Im{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Im(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class J2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return tA()?8:Db(fE())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new J2;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ro()<=oe.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ai(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),F.resolve()):(ro()<=oe.DEBUG&&q("QueryEngine","Query:",Ai(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ro()<=oe.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ai(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):F.resolve())}Yi(e,n){if(_v(n))return F.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=_f(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,_f(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return _v(n)||i.isEqual(X.min())?F.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?F.resolve(null):(ro()<=oe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ai(n)),this.rs(e,o,n,xb(i,-1)).next(l=>l))})}ts(e,n){let r=new Ze(bI(e));return n.forEach((i,s)=>{mc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ro()<=oe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ai(n)),this.Ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class eM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(ue),this._s=new Rs(s=>pm(s),mm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B2(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function tM(t,e,n,r){return new eM(t,e,n,r)}async function eS(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function nM(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let w=F.resolve();return m.forEach(k=>{w=w.next(()=>d.getEntry(u,k)).next(N=>{const b=c.docVersions.get(k);de(b!==null),N.version.compareTo(b)<0&&(p.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),d.addEntry(N)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tS(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function rM(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,d.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(tt.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),i=i.insert(p,w),function(N,b,C){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,w,d)&&l.push(n.Ur.updateTargetData(s,w))});let u=qn(),c=ie();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(iM(s,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(X.min())){const d=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return F.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function iM(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function sM(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oM(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,F.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Tf(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ca(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Av(t,e,n){const r=J(t);let i=X.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p._s.get(d);return m!==void 0?F.resolve(p.os.get(m)):p.Ur.getTargetData(c,d)}(r,o,yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ie())).next(l=>(aM(r,Yb(e),l),{documents:l,Ts:s})))}function aM(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Rv{constructor(){this.activeTargetIds=n2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lM{constructor(){this.so=new Rv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Rv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uM{_o(e){}shutdown(){}}/**
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
 */class Pv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let vl=null;function qh(){return vl===null?vl=function(){return 268435456+Math.round(2147483648*Math.random())}():vl++,"0x"+vl.toString(16)}/**
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
 */const cM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hM{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const at="WebChannelConnection";class dM extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=qh(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(d=>(q("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ds("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=cM[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=qh();return new Promise((o,l)=>{const u=new pI;u.setWithCredentials(!0),u.listenOnce(mI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ll.NO_ERROR:const d=u.getResponseJson();q(at,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Ll.TIMEOUT:q(at,`RPC '${e}' ${s} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ll.HTTP_ERROR:const p=u.getStatus();if(q(at,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const k=function(b){const C=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(C)>=0?C:V.UNKNOWN}(w.status);l(new W(k,w.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{q(at,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);q(at,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=qh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yI(),l=_I(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");q(at,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,w=!1;const k=new hM({Io:b=>{w?q(at,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(q(at,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),q(at,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),N=(b,C,T)=>{b.listen(C,x=>{try{T(x)}catch(M){setTimeout(()=>{throw M},0)}})};return N(p,uo.EventType.OPEN,()=>{w||(q(at,`RPC '${e}' stream ${i} transport opened.`),k.yo())}),N(p,uo.EventType.CLOSE,()=>{w||(w=!0,q(at,`RPC '${e}' stream ${i} transport closed`),k.So())}),N(p,uo.EventType.ERROR,b=>{w||(w=!0,ds(at,`RPC '${e}' stream ${i} transport errored:`,b),k.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),N(p,uo.EventType.MESSAGE,b=>{var C;if(!w){const T=b.data[0];de(!!T);const x=T,M=x.error||((C=x[0])===null||C===void 0?void 0:C.error);if(M){q(at,`RPC '${e}' stream ${i} received error:`,M);const L=M.status;let O=function(v){const I=Ve[v];if(I!==void 0)return WI(I)}(L),E=M.message;O===void 0&&(O=V.INTERNAL,E="Unknown error status: "+L+" with message "+M.message),w=!0,k.So(new W(O,E)),p.close()}else q(at,`RPC '${e}' stream ${i} received:`,T),k.bo(T)}}),N(l,gI.STAT_EVENT,b=>{b.stat===hf.PROXY?q(at,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===hf.NOPROXY&&q(at,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Hh(){return typeof document<"u"?document:null}/**
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
 */function vc(t){return new T2(t,!0)}/**
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
 */class nS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class rS{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new nS(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Wn(n.toString()),Wn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fM extends rS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=C2(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?vn(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ef(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mf(u)?{documents:A2(s,u)}:{query:R2(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=KI(s,o.resumeToken);const c=yf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Mu(s,o.snapshotVersion.toTimestamp());const c=yf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=N2(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ef(this.serializer),n.removeTarget=e,this.a_(n)}}class pM extends rS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return de(!!e.streamToken),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=x2(e.writeResults,e.commitTime),r=vn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ef(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>k2(this.serializer,r))};this.a_(n)}}/**
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
 */class mM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,vf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,vf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class gM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wn(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _M{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{wi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await Aa(c),c.q_.set("Unknown"),c.L_.delete(4),await wc(c)}(this))})}),this.q_=new gM(r,i)}}async function wc(t){if(wi(t))for(const e of t.B_)await e(!0)}async function Aa(t){for(const e of t.B_)await e(!1)}function iS(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),xm(n)?km(n):Ps(n).r_()&&Cm(n,e))}function Sm(t,e){const n=J(t),r=Ps(n);n.N_.delete(e),r.r_()&&sS(n,e),n.N_.size===0&&(r.r_()?r.o_():wi(n)&&n.q_.set("Unknown"))}function Cm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).A_(e)}function sS(t,e){t.Q_.xe(e),Ps(t).R_(e)}function km(t){t.Q_=new y2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.q_.v_()}function xm(t){return wi(t)&&!Ps(t).n_()&&t.N_.size>0}function wi(t){return J(t).L_.size===0}function oS(t){t.Q_=void 0}async function yM(t){t.q_.set("Online")}async function vM(t){t.N_.forEach((e,n)=>{Cm(t,e)})}async function wM(t,e){oS(t),xm(t)?(t.q_.M_(e),km(t)):t.q_.set("Unknown")}async function EM(t,e,n){if(t.q_.set("Online"),e instanceof HI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Ul?t.Q_.Ke(e):e instanceof qI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await tS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.N_.get(c);d&&s.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.N_.get(u);if(!d)return;s.N_.set(u,d.withResumeToken(tt.EMPTY_BYTE_STRING,d.snapshotVersion)),sS(s,u);const p=new sr(d.target,u,c,d.sequenceNumber);Cm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!Ca(e))throw e;t.L_.add(1),await Aa(t),t.q_.set("Offline"),n||(n=()=>tS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await wc(t)})}function aS(t,e){return e().catch(n=>Ou(t,n,e))}async function Ec(t){const e=J(t),n=kr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;TM(e);)try{const i=await sM(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,IM(e,i)}catch(i){await Ou(e,i)}lS(e)&&uS(e)}function TM(t){return wi(t)&&t.O_.length<10}function IM(t,e){t.O_.push(e);const n=kr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function lS(t){return wi(t)&&!kr(t).n_()&&t.O_.length>0}function uS(t){kr(t).start()}async function SM(t){kr(t).p_()}async function CM(t){const e=kr(t);for(const n of t.O_)e.m_(n.mutations)}async function kM(t,e,n){const r=t.O_.shift(),i=ym.from(r,e,n);await aS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ec(t)}async function xM(t,e){e&&kr(t).V_&&await async function(r,i){if(function(o){return m2(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();kr(r).s_(),await aS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ec(r)}}(t,e),lS(t)&&uS(t)}async function Nv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.L_.add(3),await Aa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await wc(n)}async function AM(t,e){const n=J(t);e?(n.L_.delete(2),await wc(n)):e||(n.L_.add(2),await Aa(n),n.q_.set("Unknown"))}function Ps(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new fM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yM.bind(null,t),Ro:vM.bind(null,t),mo:wM.bind(null,t),d_:EM.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),xm(t)?km(t):t.q_.set("Unknown")):(await t.K_.stop(),oS(t))})),t.K_}function kr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new pM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:SM.bind(null,t),mo:xM.bind(null,t),f_:CM.bind(null,t),g_:kM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ec(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Am(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rm(t,e){if(Wn("AsyncQueue",`${e}: ${t}`),Ca(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Dv{constructor(){this.W_=new Ae(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class _s{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new _s(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class RM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class PM{constructor(){this.queries=bv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=bv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function bv(){return new Rs(t=>DI(t),pc)}async function NM(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new RM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Rm(o,`Initialization of query '${Ai(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Pm(n)}async function DM(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bM(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Pm(n)}function MM(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Pm(t){t.Y_.forEach(e=>{e.next()})}var If,Mv;(Mv=If||(If={})).ea="default",Mv.Cache="cache";class OM{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new _s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=_s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==If.Cache}}/**
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
 */class cS{constructor(e){this.key=e}}class hS{constructor(e){this.key=e}}class VM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=bI(e),this.Ra=new es(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Dv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),w=mc(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),N=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let b=!1;m&&w?m.data.isEqual(w.data)?k!==N&&(r.track({type:3,doc:w}),b=!0):this.ga(m,w)||(r.track({type:2,doc:w}),b=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),b=!0):m&&!w&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(w?(o=o.add(w),s=N?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(w,k){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(w)-N(k)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new _s(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new hS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cS(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return _s.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FM{constructor(e){this.key=e,this.va=!1}}class jM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Rs(l=>DI(l),pc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(K.comparator),this.Na=new Map,this.La=new Em,this.Ba={},this.ka=new Map,this.qa=gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UM(t,e,n=!0){const r=_S(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await dS(r,e,n,!0),i}async function zM(t,e){const n=_S(t);await dS(n,e,!0,!1)}async function dS(t,e,n,r){const i=await oM(t.localStore,yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await BM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&iS(t.remoteStore,i),l}async function BM(t,e,n,r,i){t.Ka=(p,m,w)=>async function(N,b,C,T){let x=b.view.ma(C);x.ns&&(x=await Av(N.localStore,b.query,!1).then(({documents:E})=>b.view.ma(E,x)));const M=T&&T.targetChanges.get(b.targetId),L=T&&T.targetMismatches.get(b.targetId)!=null,O=b.view.applyChanges(x,N.isPrimaryClient,M,L);return Vv(N,b.targetId,O.wa),O.snapshot}(t,p,m,w);const s=await Av(t.localStore,e,!0),o=new VM(e,s.Ts),l=o.ma(s.documents),u=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);Vv(t,n,c.wa);const d=new LM(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function $M(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!pc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Tf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Sm(r.remoteStore,i.targetId),Sf(r,i.targetId)}).catch(Sa)):(Sf(r,i.targetId),await Tf(r.localStore,i.targetId,!0))}async function WM(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Sm(n.remoteStore,r.targetId))}async function qM(t,e,n){const r=JM(t);try{const i=await function(o,l){const u=J(o),c=Be.now(),d=l.reduce((w,k)=>w.add(k.key),ie());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let k=qn(),N=ie();return u.cs.getEntries(w,d).next(b=>{k=b,k.forEach((C,T)=>{T.isValidDocument()||(N=N.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,k)).next(b=>{p=b;const C=[];for(const T of l){const x=c2(T,p.get(T.key).overlayedDocument);x!=null&&C.push(new Dr(T.key,x,II(x.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,C,l)}).next(b=>{m=b;const C=b.applyToLocalDocumentSet(p,N);return u.documentOverlayCache.saveOverlays(w,b.batchId,C)})}).then(()=>({batchId:m.batchId,changes:OI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ue)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ra(r,i.changes),await Ec(r.remoteStore)}catch(i){const s=Rm(i,"Failed to persist write");n.reject(s)}}async function fS(t,e){const n=J(t);try{const r=await rM(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?de(o.va):i.removedDocuments.size>0&&(de(o.va),o.va=!1))}),await Ra(n,r,e)}catch(r){await Sa(r)}}function Ov(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Pm(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HM(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ae(K.comparator);o=o.insert(s,dt.newNoDocument(s,X.min()));const l=ie().add(s),u=new yc(X.min(),new Map,new Ae(ue),o,l);await fS(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Nm(r)}else await Tf(r.localStore,e,!1).then(()=>Sf(r,e,n)).catch(Sa)}async function KM(t,e){const n=J(t),r=e.batch.batchId;try{const i=await nM(n.localStore,e);mS(n,r,null),pS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ra(n,i)}catch(i){await Sa(i)}}async function GM(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(de(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);mS(r,e,n),pS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ra(r,i)}catch(i){await Sa(i)}}function pS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function mS(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||gS(t,r)})}function gS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Sm(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Nm(t))}function Vv(t,e,n){for(const r of n)r instanceof cS?(t.La.addReference(r.key,e),QM(t,r)):r instanceof hS?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||gS(t,r.key)):Q()}function QM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Nm(t))}function Nm(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new FM(n)),t.Oa=t.Oa.insert(n,r),iS(t.remoteStore,new sr(yn(PI(n.path)),r,"TargetPurposeLimboResolution",cm.oe))}}async function Ra(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Im.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(c,m=>F.forEach(m.$i,w=>d.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>F.forEach(m.Ui,w=>d.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Ca(p))throw p;q("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const w=d.os.get(m),k=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(k);d.os=d.os.insert(m,N)}}}(r.localStore,s))}async function YM(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await eS(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ra(n,r.hs)}}function XM(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function _S(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=XM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HM.bind(null,e),e.Ca.d_=bM.bind(null,e.eventManager),e.Ca.$a=MM.bind(null,e.eventManager),e}function JM(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GM.bind(null,e),e}class Vu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return tM(this.persistence,new Z2,e.initialUser,this.serializer)}Ga(e){return new Y2(Tm.Zr,this.serializer)}Wa(e){return new lM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vu.provider={build:()=>new Vu};class Cf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ov(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YM.bind(null,this.syncEngine),await AM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PM}()}createDatastore(e){const n=vc(e.databaseInfo.databaseId),r=function(s){return new dM(s)}(e.databaseInfo);return function(s,o,l,u){return new mM(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new _M(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Ov(this.syncEngine,n,0),function(){return Pv.D()?new Pv:new uM}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new jM(i,s,o,l,u,c);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Aa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Cf.provider={build:()=>new Cf};/**
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
 */class ZM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=wI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tO(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Nv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Nv(e.remoteStore,i)),t._onlineComponents=e}async function tO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ds("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new Vu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new Vu);return t._offlineComponents}async function yS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Lv(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Lv(t,new Cf))),t._onlineComponents}function nO(t){return yS(t).then(e=>e.syncEngine)}async function rO(t){const e=await yS(t),n=e.eventManager;return n.onListen=UM.bind(null,e.syncEngine),n.onUnlisten=$M.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WM.bind(null,e.syncEngine),n}function iO(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new ZM({next:m=>{d.Za(),o.enqueueAndForget(()=>DM(s,p)),m.fromCache&&u.source==="server"?c.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new OM(l,d,{includeMetadataChanges:!0,_a:!0});return NM(s,p)}(await rO(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function vS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Fv=new Map;/**
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
 */function wS(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sO(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jv(t){if(!K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uv(t){if(K.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Tc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function pi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Tc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ic{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yb;switch(r.type){case"firstParty":return new Tb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fv.get(n);r&&(q("ComponentProvider","Removing Datastore"),Fv.delete(n),r.terminate())}(this),Promise.resolve()}}function oO(t,e,n,r={}){var i;const s=(t=pi(t,Ic))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ds("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=lt.MOCK_USER;else{l=dE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(c)}t._authCredentials=new vb(new vI(l,u))}}/**
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
 */class Ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class vr extends Ei{constructor(e,n,r){super(e,n,PI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new K(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function ES(t,e,...n){if(t=yt(t),wS("collection","path",e),t instanceof Ic){const r=Ee.fromString(e,...n);return Uv(r),new vr(t,null,r)}{if(!(t instanceof Ft||t instanceof vr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Uv(r),new vr(t.firestore,null,r)}}function Dm(t,e,...n){if(t=yt(t),arguments.length===1&&(e=wI.newId()),wS("doc","path",e),t instanceof Ic){const r=Ee.fromString(e,...n);return jv(r),new Ft(t,null,new K(r))}{if(!(t instanceof Ft||t instanceof vr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return jv(r),new Ft(t.firestore,t instanceof vr?t.converter:null,new K(r))}}/**
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
 */class Bv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new nS(this,"async_queue_retry"),this.Vu=()=>{const r=Hh();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Hh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ca(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Am.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class Pa extends Ic{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Bv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bv(e),this._firestoreClient=void 0,await e}}}function aO(t,e){const n=typeof t=="object"?t:Cp(),r=typeof t=="string"?t:"(default)",i=Ss(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cE("firestore");s&&oO(i,...s)}return i}function TS(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lO(t),t._firestoreClient}function lO(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new Ob(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,vS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new eO(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ys(tt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ys(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Sc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cc{constructor(e){this._methodName=e}}/**
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
 */class bm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Mm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const uO=/^__.*__$/;class cO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ka(e,this.data,n,this.fieldTransforms)}}class IS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function SS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Om{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Om(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Lu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(SS(this.Cu)&&uO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vc(e)}Qu(e,n,r,i=!1){return new Om({Cu:e,methodName:n,qu:r,path:Xe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vm(t){const e=t._freezeSettings(),n=vc(t._databaseId);return new hO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dO(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Fm("Data must be an object, but it was:",o,r);const l=CS(r,o);let u,c;if(s.merge)u=new Mt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=kf(e,p,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);xS(d,m)||d.push(m)}u=new Mt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new cO(new Tt(l),u,c)}class kc extends Cc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class Lm extends Cc{_toFieldTransform(e){return new o2(e.path,new ua)}isEqual(e){return e instanceof Lm}}function fO(t,e,n,r){const i=t.Qu(1,e,n);Fm("Data must be an object, but it was:",i,r);const s=[],o=Tt.empty();vi(r,(u,c)=>{const d=jm(e,u,n);c=yt(c);const p=i.Nu(d);if(c instanceof kc)s.push(d);else{const m=Na(c,p);m!=null&&(s.push(d),o.set(d,m))}});const l=new Mt(s);return new IS(o,l,i.fieldTransforms)}function pO(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[kf(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(kf(e,s[m])),u.push(s[m+1]);const c=[],d=Tt.empty();for(let m=l.length-1;m>=0;--m)if(!xS(c,l[m])){const w=l[m];let k=u[m];k=yt(k);const N=o.Nu(w);if(k instanceof kc)c.push(w);else{const b=Na(k,N);b!=null&&(c.push(w),d.set(w,b))}}const p=new Mt(c);return new IS(d,p,o.fieldTransforms)}function mO(t,e,n,r=!1){return Na(n,t.Qu(r?4:3,e))}function Na(t,e){if(kS(t=yt(t)))return Fm("Unsupported field value:",e,t),CS(t,e);if(t instanceof Cc)return function(r,i){if(!SS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Na(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return r2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Be.fromDate(r);return{timestampValue:Mu(i.serializer,s)}}if(r instanceof Be){const s=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mu(i.serializer,s)}}if(r instanceof bm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ys)return{bytesValue:KI(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return gm(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Tc(r)}`)}(t,e)}function CS(t,e){const n={};return EI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(t,(r,i)=>{const s=Na(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function kS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof bm||t instanceof ys||t instanceof Ft||t instanceof Cc||t instanceof Mm)}function Fm(t,e,n){if(!kS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Tc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function kf(t,e,n){if((e=yt(e))instanceof Sc)return e._internalPath;if(typeof e=="string")return jm(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const gO=new RegExp("[~\\*/\\[\\]]");function jm(t,e,n){if(e.search(gO)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sc(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,l+t+u)}function xS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class AS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _O(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _O extends AS{data(){return super.data()}}function xc(t,e){return typeof e=="string"?jm(t,e):e instanceof Sc?e._internalPath:e._delegate._internalPath}/**
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
 */function yO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Um{}class RS extends Um{}function vO(t,e,...n){let r=[];e instanceof Um&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof zm).length,l=s.filter(u=>u instanceof Ac).length;if(o>1||o>0&&l>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ac extends RS{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ac(e,n,r)}_apply(e){const n=this._parse(e);return PS(e._query,n),new Ei(e.firestore,e.converter,gf(e._query,n))}_parse(e){const n=Vm(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Wv(p,d);const w=[];for(const k of p)w.push($v(u,s,k));m={arrayValue:{values:w}}}else m=$v(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Wv(p,d),m=mO(l,o,p,d==="in"||d==="not-in");return Fe.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function wO(t,e,n){const r=e,i=xc("where",t);return Ac._create(i,r,n)}class zm extends Um{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)PS(o,u),o=gf(o,u)}(e._query,n),new Ei(e.firestore,e.converter,gf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Bm extends RS{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Bm(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new la(s,o)}(e._query,this._field,this._direction);return new Ei(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new As(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function EO(t,e="asc"){const n=e,r=xc("orderBy",t);return Bm._create(r,n)}function $v(t,e,n){if(typeof(n=yt(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NI(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ee.fromString(n));if(!K.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hv(t,new K(r))}if(n instanceof Ft)return hv(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Tc(n)}.`)}function Wv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function PS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TO{convertValue(e,n="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>be(o.doubleValue));return new Mm(s)}convertGeoPoint(e){return new bm(be(e.latitude),be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sa(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new Be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);de(ZI(r));const i=new oa(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||Wn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function IO(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SO extends AS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zl extends SO{data(e={}){return super.data(e)}}class CO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new wl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new zl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new wl(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:kO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class xO extends TO{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function AO(t){t=pi(t,Ei);const e=pi(t.firestore,Pa),n=TS(e),r=new xO(e);return yO(t._query),iO(n,t._query).then(i=>new CO(e,r,t,i))}function RO(t,e,n,...r){t=pi(t,Ft);const i=pi(t.firestore,Pa),s=Vm(i);let o;return o=typeof(e=yt(e))=="string"||e instanceof Sc?pO(s,"updateDoc",t._key,e,n,r):fO(s,"updateDoc",t._key,e),$m(i,[o.toMutation(t._key,ln.exists(!0))])}function PO(t){return $m(pi(t.firestore,Pa),[new _m(t._key,ln.none())])}function NO(t,e){const n=pi(t.firestore,Pa),r=Dm(t),i=IO(t.converter,e);return $m(n,[dO(Vm(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function $m(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>qM(await nO(r),i,s)),s.promise}(TS(t),e)}function DO(){return new Lm("serverTimestamp")}(function(e,n=!0){(function(i){xs=i})(TE),Bn(new wn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Pa(new wb(r.getProvider("auth-internal")),new Sb(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kt(ov,"4.7.3",e),Kt(ov,"4.7.3","esm2017")})();let Hn=null;try{Hn=aO(om)}catch(t){console.error("Firestore konnte nicht initialisiert werden:",t)}const Rc="felder";function NS(){let t=localStorage.getItem("feldkamerad_geraet_id");return t||(t=crypto.randomUUID&&crypto.randomUUID()||"g_"+Math.random().toString(36).slice(2)+Date.now().toString(36),localStorage.setItem("feldkamerad_geraet_id",t)),t}const DS="feldkamerad_felder";function Pc(){try{return JSON.parse(localStorage.getItem(DS)||"[]")}catch{return[]}}function Wm(t){localStorage.setItem(DS,JSON.stringify(t))}async function bO(){if(Hn){const t=vO(ES(Hn,Rc),wO("geraetId","==",NS()),EO("erstelltAm","desc"));return(await AO(t)).docs.map(n=>({id:n.id,...n.data()}))}return Pc().sort((t,e)=>(e.erstelltAm||0)-(t.erstelltAm||0))}async function MO(t){const e={name:t.name||"Neues Feld",bepflanzung:t.bepflanzung||"",bodenwerte:t.bodenwerte||"",historie:t.historie||[],notizen:t.notizen||""};if(Hn)return{id:(await NO(ES(Hn,Rc),{...e,geraetId:NS(),erstelltAm:DO()})).id,...e};const n=Pc(),r={id:"lf_"+Date.now(),...e,erstelltAm:Date.now()};return n.push(r),Wm(n),r}async function OO(t,e){if(Hn){await RO(Dm(Hn,Rc,t),e);return}const n=Pc().map(r=>r.id===t?{...r,...e}:r);Wm(n)}async function VO(t){if(Hn){await PO(Dm(Hn,Rc,t));return}Wm(Pc().filter(e=>e.id!==t))}const Gh={name:"",bepflanzung:"",bodenwerte:"",notizen:"",historie:[]};function LO(){var L;const[t,e]=H.useState([]),[n,r]=H.useState(!0),[i,s]=H.useState(""),[o,l]=H.useState("liste"),[u,c]=H.useState(Gh),[d,p]=H.useState(!1),[m,w]=H.useState("");H.useEffect(()=>{k()},[]);async function k(){r(!0),s("");try{e(await bO())}catch(O){s("Felder konnten nicht geladen werden: "+O.message)}finally{r(!1)}}function N(){c({...Gh,historie:[]}),w(""),l("editor")}function b(O){c({...Gh,...O,historie:O.historie||[]}),w(""),l("editor")}function C(){if(!m.trim())return;const O=new Date().toLocaleDateString("de-DE");c(E=>({...E,historie:[...E.historie||[],`${O}: ${m.trim()}`]})),w("")}function T(O){c(E=>({...E,historie:E.historie.filter((y,v)=>v!==O)}))}async function x(){if(!u.name.trim()){s("Bitte gib dem Feld einen Namen.");return}p(!0),s("");try{const O={name:u.name.trim(),bepflanzung:u.bepflanzung,bodenwerte:u.bodenwerte,notizen:u.notizen,historie:u.historie||[]};u.id?await OO(u.id,O):await MO(O),await k(),l("liste")}catch(O){s("Speichern fehlgeschlagen: "+O.message)}finally{p(!1)}}async function M(){if(!u.id){l("liste");return}if(window.confirm(`Feld „${u.name}" wirklich löschen?`)){p(!0);try{await VO(u.id),await k(),l("liste")}catch(O){s("Löschen fehlgeschlagen: "+O.message)}finally{p(!1)}}}return o==="editor"?_.jsxs("div",{className:"space-y-4",children:[_.jsx("button",{onClick:()=>l("liste"),className:"text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200",children:"← Zurück zur Übersicht"}),_.jsx(ni,{icon:"🚜",children:u.id?"Feld bearbeiten":"Neues Feld"}),_.jsxs(Oe,{className:"space-y-4",children:[_.jsx(pn,{label:"Name des Feldes / Beetes",placeholder:"z. B. Acker hinterm Stall",value:u.name,onChange:O=>c({...u,name:O.target.value})}),_.jsx(pn,{label:"Aktuelle Bepflanzung",placeholder:"z. B. Winterweizen",value:u.bepflanzung,onChange:O=>c({...u,bepflanzung:O.target.value})}),_.jsx(pn,{label:"Letzte Bodenwerte",placeholder:"z. B. pH 6,5 / N 80 / P 40 / K 120",value:u.bodenwerte,onChange:O=>c({...u,bodenwerte:O.target.value})}),_.jsx(zx,{label:"Notizen",placeholder:"z. B. Steiniger Boden im Nordteil",value:u.notizen,onChange:O=>c({...u,notizen:O.target.value})}),_.jsxs("div",{children:[_.jsx("span",{className:"mb-1.5 block text-sm font-medium text-stone-700 dark:text-stone-300",children:"Behandlungshistorie"}),((L=u.historie)==null?void 0:L.length)>0?_.jsx("ul",{className:"mb-2 space-y-1",children:u.historie.map((O,E)=>_.jsxs("li",{className:"flex items-center justify-between gap-2 rounded-lg bg-garten-50 px-3 py-2 dark:bg-garten-500/10",children:[_.jsx("span",{className:"text-stone-800 dark:text-stone-200",children:O}),_.jsx("button",{onClick:()=>T(E),className:"text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300","aria-label":"Eintrag löschen",children:"✕"})]},E))}):_.jsx("p",{className:"mb-2 text-sm text-stone-400 dark:text-stone-500",children:"Noch keine Einträge."}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("input",{className:"w-full rounded-xl bg-white px-4 py-3 outline-none ring-1 ring-stone-200 transition placeholder:text-stone-400 focus:ring-2 focus:ring-garten-500 dark:bg-stone-800 dark:text-stone-100 dark:ring-stone-700 dark:placeholder:text-stone-500",placeholder:"z. B. Mit Kompost gedüngt",value:m,onChange:O=>w(O.target.value),onKeyDown:O=>O.key==="Enter"&&C()}),_.jsx("button",{onClick:C,className:"shrink-0 rounded-xl bg-garten-600 px-5 py-3 font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400",children:"+"})]})]}),_.jsx(ii,{children:i}),_.jsxs("div",{className:"space-y-2",children:[_.jsx(On,{onClick:x,disabled:d,children:d?"Speichern …":"💾 Speichern"}),u.id&&_.jsx(On,{variante:"gefahr",onClick:M,disabled:d,children:"🗑️ Feld löschen"})]})]})]}):_.jsxs("div",{className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx(ni,{icon:"🚜",children:"Mein Betrieb"}),_.jsx(Ts,{children:"Lege deine Felder an und behalte Bepflanzung, Boden und Behandlungen im Blick."})]}),!1,_.jsx(On,{onClick:N,children:"➕ Neues Feld anlegen"}),n&&_.jsx(Oe,{children:_.jsx(ri,{text:"Felder werden geladen …"})}),_.jsx(ii,{children:i}),!n&&t.length===0&&_.jsx(Oe,{children:_.jsx("p",{className:"text-center text-stone-500 dark:text-stone-400",children:'Noch keine Felder angelegt. Tippe oben auf „Neues Feld anlegen".'})}),_.jsx("div",{className:"space-y-3",children:t.map(O=>{var E;return _.jsx("button",{onClick:()=>b(O),className:"block w-full text-left",children:_.jsxs(Oe,{className:"transition-colors hover:bg-stone-50 dark:hover:bg-stone-800",children:[_.jsxs("div",{className:"flex items-center justify-between gap-2",children:[_.jsxs("h3",{className:"text-lg font-bold text-stone-900 dark:text-stone-100",children:["🌾 ",O.name]}),_.jsx("span",{className:"text-stone-300 dark:text-stone-600",children:"›"})]}),O.bepflanzung&&_.jsxs("p",{className:"text-stone-700 dark:text-stone-300",children:["Bepflanzung: ",O.bepflanzung]}),O.bodenwerte&&_.jsxs("p",{className:"text-sm text-stone-500 dark:text-stone-400",children:["Boden: ",O.bodenwerte]}),((E=O.historie)==null?void 0:E.length)>0&&_.jsxs("p",{className:"mt-1 text-sm text-stone-500 dark:text-stone-400",children:["📋 ",O.historie.length," Behandlung(en)"]})]})},O.id)})})]})}function FO(){const[t,e]=H.useState(Vl());H.useEffect(()=>{e(Vl());const r=tb(e),i=setInterval(()=>e(Vl()),5e3);return()=>{r(),clearInterval(i)}},[]);function n(r,i){const s=i?r/i:0;return s>=1?"text-red-600 dark:text-red-400":s>=.7?"text-amber-600 dark:text-amber-400":"text-stone-600 dark:text-stone-300"}return _.jsxs("div",{className:"shrink-0 rounded-xl bg-stone-100 px-2.5 py-1 text-right text-[10px] leading-tight ring-1 ring-stone-200 dark:bg-stone-800 dark:ring-stone-700",title:"Verbrauchtes KI-Gratis-Kontingent (lokal gezählt)",children:[_.jsx("div",{className:"font-semibold text-stone-400 dark:text-stone-500",children:"🤖 KI-Limit"}),_.jsxs("div",{className:`font-medium ${n(t.proMinute,t.limitProMinute)}`,children:[t.proMinute,"/",t.limitProMinute," pro Min."]}),_.jsxs("div",{className:`font-medium ${n(t.proTag,t.limitProTag)}`,children:[t.proTag,"/",t.limitProTag," pro Tag"]})]})}const Qh="feldkamerad_install_weggetippt";function jO(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}function UO(){const t=window.navigator.userAgent||"";return/iphone|ipad|ipod/i.test(t)&&!window.MSStream}function zO(){const[t,e]=H.useState(null),[n,r]=H.useState(!1),[i,s]=H.useState(!1);if(H.useEffect(()=>{if(jO()||localStorage.getItem(Qh))return;function u(){window.__gartenInstallPrompt&&(e(window.__gartenInstallPrompt),r(!0))}function c(d){var p;(p=d.preventDefault)==null||p.call(d),window.__gartenInstallPrompt=d,e(d),r(!0)}return u(),window.addEventListener("feldkamerad:install-available",u),window.addEventListener("beforeinstallprompt",c),UO()&&(s(!0),r(!0)),()=>{window.removeEventListener("feldkamerad:install-available",u),window.removeEventListener("beforeinstallprompt",c)}},[]),!n)return null;function o(){r(!1),localStorage.setItem(Qh,"1")}async function l(){if(t){t.prompt();try{await t.userChoice}finally{window.__gartenInstallPrompt=null,e(null),r(!1),localStorage.setItem(Qh,"1")}}}return _.jsxs("div",{className:"garten-anim mb-4 flex items-start gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-stone-200 dark:bg-stone-900 dark:ring-stone-800",children:[_.jsx("img",{src:"/favicon.svg",alt:"",className:"h-11 w-11 shrink-0 rounded-2xl"}),_.jsxs("div",{className:"min-w-0 flex-1",children:[_.jsx("p",{className:"font-semibold text-stone-900 dark:text-stone-100",children:"Feldkamerad installieren"}),i?_.jsxs("p",{className:"mt-0.5 text-sm leading-snug text-stone-500 dark:text-stone-400",children:["Tippe unten auf ",_.jsx("span",{className:"font-semibold text-stone-700 dark:text-stone-200",children:"Teilen"})," und dann auf"," ",_.jsx("span",{className:"font-semibold text-stone-700 dark:text-stone-200",children:'„Zum Home-Bildschirm"'}),"."]}):_.jsx("p",{className:"mt-0.5 text-sm leading-snug text-stone-500 dark:text-stone-400",children:"Füge die App zum Startbildschirm hinzu – startet dann wie eine echte App."}),!i&&_.jsx("button",{onClick:l,className:"mt-2.5 rounded-xl bg-garten-600 px-4 py-2 text-sm font-semibold text-white hover:bg-garten-700 dark:bg-garten-500 dark:text-stone-950 dark:hover:bg-garten-400",children:"📲 Installieren"})]}),_.jsx("button",{onClick:o,"aria-label":"Hinweis schließen",className:"shrink-0 rounded-lg px-2 py-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-stone-800 dark:hover:text-stone-300",children:"✕"})]})}const qv=[{id:"pflanze",label:"Pflanze",icon:"🌱",Komponente:ab},{id:"krank",label:"Krank?",icon:"🩺",Komponente:lb},{id:"boden",label:"Boden",icon:"🧪",Komponente:ub},{id:"wetter",label:"Wetter",icon:"🌦️",Komponente:gb},{id:"folge",label:"Folge",icon:"🔄",Komponente:_b},{id:"betrieb",label:"Betrieb",icon:"🚜",Komponente:LO}];function BO(){const[t,e]=H.useState("pflanze"),{dunkel:n,umschalten:r}=Ux(),i=qv.find(s=>s.id===t).Komponente;return _.jsx(Fx,{children:_.jsxs("div",{className:"min-h-screen",children:[_.jsx("header",{className:"sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/85 backdrop-blur dark:border-stone-800 dark:bg-stone-950/85",children:_.jsxs("div",{className:"mx-auto flex max-w-md items-center justify-between gap-2 px-4 py-2.5",children:[_.jsxs("div",{className:"flex items-center gap-2.5",children:[_.jsx("img",{src:"/favicon.svg",alt:"",className:"h-9 w-9 rounded-xl"}),_.jsxs("div",{className:"leading-tight",children:[_.jsx("h1",{className:"text-base font-bold tracking-tight text-stone-900 dark:text-stone-50",children:"Feldkamerad"}),_.jsx("p",{className:"text-[11px] text-stone-500 dark:text-stone-400",children:"KI-Pflanzenhilfe"})]})]}),_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("button",{onClick:r,"aria-label":n?"Hellen Modus einschalten":"Dunklen Modus einschalten",className:"grid h-9 w-9 shrink-0 place-items-center rounded-xl text-lg ring-1 ring-stone-200 transition-colors hover:bg-stone-100 dark:ring-stone-700 dark:hover:bg-stone-800",children:n?"☀️":"🌙"}),_.jsx(FO,{})]})]})}),_.jsxs("main",{className:"mx-auto max-w-md px-4 pb-32 pt-4",children:[_.jsx(zO,{}),_.jsx(i,{})]}),_.jsx("nav",{className:"fixed inset-x-0 bottom-0 z-20 border-t border-stone-200 bg-white/95 backdrop-blur dark:border-stone-800 dark:bg-stone-900/95",style:{paddingBottom:"env(safe-area-inset-bottom)"},children:_.jsx("div",{className:"mx-auto grid max-w-md grid-cols-6 px-1 py-1",children:qv.map(s=>{const o=s.id===t;return _.jsxs("button",{onClick:()=>e(s.id),className:"flex flex-col items-center gap-1 py-1.5","aria-current":o?"page":void 0,children:[_.jsx("span",{className:`grid h-9 w-9 place-items-center rounded-2xl text-xl transition-colors ${o?"bg-garten-100 dark:bg-garten-500/20":""}`,"aria-hidden":"true",children:s.icon}),_.jsx("span",{className:`text-[10px] font-medium ${o?"text-garten-700 dark:text-garten-300":"text-stone-400 dark:text-stone-500"}`,children:s.label})]},s.id)})})})]})})}window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),window.__gartenInstallPrompt=t,window.dispatchEvent(new Event("feldkamerad:install-available"))});Yh.createRoot(document.getElementById("root")).render(_.jsx(kC.StrictMode,{children:_.jsx(BO,{})}));
