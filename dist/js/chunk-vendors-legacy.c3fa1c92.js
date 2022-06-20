(self["webpackChunkwhisperer"]=self["webpackChunkwhisperer"]||[]).push([[998],{444:function(e,t,n){"use strict";n.d(t,{BH:function(){return h},G6:function(){return I},L:function(){return a},LL:function(){return A},Mn:function(){return _},Sg:function(){return d},UG:function(){return m},X3:function(){return W},ZB:function(){return u},ZR:function(){return S},b$:function(){return y},d:function(){return w},eu:function(){return E},hl:function(){return T},jU:function(){return g},m9:function(){return $},ne:function(){return F},pd:function(){return M},r3:function(){return N},ru:function(){return v},tV:function(){return c},uI:function(){return p},vZ:function(){return D},w1:function(){return b},xO:function(){return P},xb:function(){return O},z$:function(){return f},zd:function(){return L}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
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
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return f().indexOf("Electron/")>=0}function b(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function I(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){return"object"===typeof indexedDB}function E(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
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
 */
const k="FirebaseError";class S extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=k,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,A.prototype.create)}}class A{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?C(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new S(r,o,n);return a}}function C(e,t){return e.replace(x,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(R(n)&&R(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R(e){return null!==e&&"object"===typeof e}
/**
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
 */function P(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function L(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function M(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function F(e,t){const n=new V(e,t);return n.subscribe.bind(n)}class V{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=U(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
/**
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
 */
/**
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
 */
function $(e){return e&&e._delegate?e._delegate:e}
/**
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
 */function q(e,t){return new Promise(((n,r)=>{e.onsuccess=e=>{n(e.target.result)},e.onerror=e=>{var n;r(`${t}: ${null===(n=e.target.error)||void 0===n?void 0:n.message}`)}}))}class B{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new z(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new G(this._db.createObjectStore(e,t))}close(){this._db.close()}}class z{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new G(this._transaction.objectStore(e))}}class G{constructor(e){this._store=e}index(e){return new K(this._store.index(e))}createIndex(e,t,n){return new K(this._store.createIndex(e,t,n))}get(e){const t=this._store.get(e);return q(t,"Error reading from IndexedDB")}put(e,t){const n=this._store.put(e,t);return q(n,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return q(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return q(e,"Error clearing IndexedDB object store")}}class K{constructor(e){this._index=e}get(e){const t=this._index.get(e);return q(t,"Error reading from IndexedDB")}}function W(e,t,n){return new Promise(((r,i)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{r(new B(e.target.result))},s.onerror=e=>{var t;i(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{n(new B(s.result),e.oldVersion,e.newVersion,new z(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}}))}},947:function(e,t,n){"use strict";
/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return f(e)||m(e,t)||g(e,t)||w()}function h(e){return d(e)||p(e)||g(e)||y()}function d(e){if(Array.isArray(e))return v(e)}function f(e){if(Array.isArray(e))return e}function p(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,s=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(s.push(r.value),t&&s.length===t)break}catch(c){a=!0,i=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw i}}return s}}function g(e,t){if(e){if("string"===typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Qc:function(){return Qn},fL:function(){return Xn},qv:function(){return Jn},vI:function(){return Yn},vc:function(){return Hn}});var b=function(){},_={},I={},T=null,E={mark:b,measure:b};try{"undefined"!==typeof window&&(_=window),"undefined"!==typeof document&&(I=document),"undefined"!==typeof MutationObserver&&(T=MutationObserver),"undefined"!==typeof performance&&(E=performance)}catch(Zn){}var k=_.navigator||{},S=k.userAgent,A=void 0===S?"":S,C=_,x=I,N=T,O=E,D=(C.document,!!x.documentElement&&!!x.head&&"function"===typeof x.addEventListener&&"function"===typeof x.createElement),R=~A.indexOf("MSIE")||~A.indexOf("Trident/"),P="___FONT_AWESOME___",L=16,M="fa",F="svg-inline--fa",V="data-fa-i2svg",U="data-fa-pseudo-element",j="data-fa-pseudo-element-pending",$="data-prefix",q="data-icon",B="fontawesome-i2svg",z="async",G=["HTML","HEAD","STYLE","SCRIPT"],K=function(){try{return!0}catch(Zn){return!1}}(),W={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},H={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Y={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Q={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},J=/fa[srltdbk\-\ ]/,X="fa-layers-text",Z=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ee={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},te=[1,2,3,4,5,6,7,8,9,10],ne=te.concat([11,12,13,14,15,16,17,18,19,20]),re=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},se=[].concat(h(Object.keys(H)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(te.map((function(e){return"".concat(e,"x")}))).concat(ne.map((function(e){return"w-".concat(e)}))),oe=C.FontAwesomeConfig||{};function ae(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ce(e){return""===e||"false"!==e&&("true"===e||e)}if(x&&"function"===typeof x.querySelector){var ue=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ue.forEach((function(e){var t=l(e,2),n=t[0],r=t[1],i=ce(ae(n));void 0!==i&&null!==i&&(oe[r]=i)}))}var le={familyPrefix:M,styleDefault:"solid",replacementClass:F,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},he=i(i({},le),oe);he.autoReplaceSvg||(he.observeMutations=!1);var de={};Object.keys(he).forEach((function(e){Object.defineProperty(de,e,{enumerable:!0,set:function(t){he[e]=t,fe.forEach((function(e){return e(de)}))},get:function(){return he[e]}})})),C.FontAwesomeConfig=de;var fe=[];function pe(e){return fe.push(e),function(){fe.splice(fe.indexOf(e),1)}}var me=L,ge={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ve(e){if(e&&D){var t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=x.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return x.head.insertBefore(t,r),e}}var ye="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function we(){var e=12,t="";while(e-- >0)t+=ye[62*Math.random()|0];return t}function be(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function _e(e){return e.classList?be(e.classList):(e.getAttribute("class")||"").split(" ").filter((function(e){return e}))}function Ie(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Te(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(Ie(e[n]),'" ')}),"").trim()}function Ee(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")}),"")}function ke(e){return e.size!==ge.size||e.x!==ge.x||e.y!==ge.y||e.rotate!==ge.rotate||e.flipX||e.flipY}function Se(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function Ae(e){var t=e.transform,n=e.width,r=void 0===n?L:n,i=e.height,s=void 0===i?L:i,o=e.startCentered,a=void 0!==o&&o,c="";return c+=a&&R?"translate(".concat(t.x/me-r/2,"em, ").concat(t.y/me-s/2,"em) "):a?"translate(calc(-50% + ".concat(t.x/me,"em), calc(-50% + ").concat(t.y/me,"em)) "):"translate(".concat(t.x/me,"em, ").concat(t.y/me,"em) "),c+="scale(".concat(t.size/me*(t.flipX?-1:1),", ").concat(t.size/me*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Ce=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0);\n          animation-delay: var(--fa-animation-delay, 0);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';function xe(){var e=M,t=F,n=de.familyPrefix,r=de.replacementClass,i=Ce;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Ne=!1;function Oe(){de.autoAddCss&&!Ne&&(ve(xe()),Ne=!0)}var De={mixout:function(){return{dom:{css:xe,insertCss:Oe}}},hooks:function(){return{beforeDOMElementCreation:function(){Oe()},beforeI2svg:function(){Oe()}}}},Re=C||{};Re[P]||(Re[P]={}),Re[P].styles||(Re[P].styles={}),Re[P].hooks||(Re[P].hooks={}),Re[P].shims||(Re[P].shims=[]);var Pe=Re[P],Le=[],Me=function e(){x.removeEventListener("DOMContentLoaded",e),Fe=1,Le.map((function(e){return e()}))},Fe=!1;function Ve(e){D&&(Fe?setTimeout(e,0):Le.push(e))}function Ue(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,s=void 0===i?[]:i;return"string"===typeof e?Ie(e):"<".concat(t," ").concat(Te(r),">").concat(s.map(Ue).join(""),"</").concat(t,">")}function je(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}D&&(Fe=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Fe||x.addEventListener("DOMContentLoaded",Me));var $e=function(e,t){return function(n,r,i,s){return e.call(t,n,r,i,s)}},qe=function(e,t,n,r){var i,s,o,a=Object.keys(e),c=a.length,u=void 0!==r?$e(t,r):t;for(void 0===n?(i=1,o=e[a[0]]):(i=0,o=n);i<c;i++)s=a[i],o=u(o,e[s],s,e);return o};function Be(e){var t=[],n=0,r=e.length;while(n<r){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);56320==(64512&s)?t.push(((1023&i)<<10)+(1023&s)+65536):(t.push(i),n--)}else t.push(i)}return t}function ze(e){var t=Be(e);return 1===t.length?t[0].toString(16):null}function Ge(e,t){var n,r=e.length,i=e.charCodeAt(t);return i>=55296&&i<=56319&&r>t+1&&(n=e.charCodeAt(t+1),n>=56320&&n<=57343)?1024*(i-55296)+n-56320+65536:i}function Ke(e){return Object.keys(e).reduce((function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t}),{})}function We(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,s=void 0!==r&&r,o=Ke(t);"function"!==typeof Pe.hooks.addPack||s?Pe.styles[e]=i(i({},Pe.styles[e]||{}),o):Pe.hooks.addPack(e,Ke(t)),"fas"===e&&We("fa",t)}var He=Pe.styles,Ye=Pe.shims,Qe=Object.values(Y),Je=null,Xe={},Ze={},et={},tt={},nt={},rt=Object.keys(W);function it(e){return~se.indexOf(e)}function st(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r!==e||""===i||it(i)?null:i}var ot=function(){var e=function(e){return qe(He,(function(t,n,r){return t[r]=qe(n,e,{}),t}),{})};Xe=e((function(e,t,n){if(t[3]&&(e[t[3]]=n),t[2]){var r=t[2].filter((function(e){return"number"===typeof e}));r.forEach((function(t){e[t.toString(16)]=n}))}return e})),Ze=e((function(e,t,n){if(e[n]=n,t[2]){var r=t[2].filter((function(e){return"string"===typeof e}));r.forEach((function(t){e[t]=n}))}return e})),nt=e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in He||de.autoFetchSvg,n=qe(Ye,(function(e,n){var r=n[0],i=n[1],s=n[2];return"far"!==i||t||(i="fas"),"string"===typeof r&&(e.names[r]={prefix:i,iconName:s}),"number"===typeof r&&(e.unicodes[r.toString(16)]={prefix:i,iconName:s}),e}),{names:{},unicodes:{}});et=n.names,tt=n.unicodes,Je=pt(de.styleDefault)};function at(e,t){return(Xe[e]||{})[t]}function ct(e,t){return(Ze[e]||{})[t]}function ut(e,t){return(nt[e]||{})[t]}function lt(e){return et[e]||{prefix:null,iconName:null}}function ht(e){var t=tt[e],n=at("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return Je}pe((function(e){Je=pt(e.styleDefault)})),ot();var ft=function(){return{prefix:null,iconName:null,rest:[]}};function pt(e){var t=W[e],n=H[e]||H[t],r=e in Pe.styles?e:null;return n||r||null}function mt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipLookups,r=void 0!==n&&n,i=null,s=e.reduce((function(e,t){var n=st(de.familyPrefix,t);if(He[t]?(t=Qe.includes(t)?Q[t]:t,i=t,e.prefix=t):rt.indexOf(t)>-1?(i=t,e.prefix=pt(t)):n?e.iconName=n:t!==de.replacementClass&&e.rest.push(t),!r&&e.prefix&&e.iconName){var s="fa"===i?lt(e.iconName):{},o=ut(e.prefix,e.iconName);s.prefix&&(i=null),e.iconName=s.iconName||o||e.iconName,e.prefix=s.prefix||e.prefix,"far"!==e.prefix||He["far"]||!He["fas"]||de.autoFetchSvg||(e.prefix="fas")}return e}),ft());return"fa"!==s.prefix&&"fa"!==i||(s.prefix=dt()||"fas"),s}var gt=function(){function e(){o(this,e),this.definitions={}}return c(e,[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=n.reduce(this._pullDefinitions,{});Object.keys(s).forEach((function(t){e.definitions[t]=i(i({},e.definitions[t]||{}),s[t]),We(t,s[t]);var n=Y[t];n&&We(n,s[t]),ot()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,s=r.iconName,o=r.icon,a=o[2];e[i]||(e[i]={}),a.length>0&&a.forEach((function(t){"string"===typeof t&&(e[i][t]=o)})),e[i][s]=o})),e}}]),e}(),vt=[],yt={},wt={},bt=Object.keys(wt);function _t(e,t){var n=t.mixoutsTo;return vt=e,yt={},Object.keys(wt).forEach((function(e){-1===bt.indexOf(e)&&delete wt[e]})),vt.forEach((function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach((function(e){"function"===typeof t[e]&&(n[e]=t[e]),"object"===s(t[e])&&Object.keys(t[e]).forEach((function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]}))})),e.hooks){var r=e.hooks();Object.keys(r).forEach((function(e){yt[e]||(yt[e]=[]),yt[e].push(r[e])}))}e.provides&&e.provides(wt)})),n}function It(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=yt[e]||[];return s.forEach((function(e){t=e.apply(null,[t].concat(r))})),t}function Tt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yt[e]||[];i.forEach((function(e){e.apply(null,n)}))}function Et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function kt(e){"fa"===e.prefix&&(e.prefix="fas");var t=e.iconName,n=e.prefix||dt();if(t)return t=ut(n,t)||t,je(St.definitions,n,t)||je(Pe.styles,n,t)}var St=new gt,At=function(){de.autoReplaceSvg=!1,de.observeMutations=!1,Tt("noAuto")},Ct={i2svg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return D?(Tt("beforeI2svg",e),Et("pseudoElements2svg",e),Et("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot;!1===de.autoReplaceSvg&&(de.autoReplaceSvg=!0),de.observeMutations=!0,Ve((function(){Ot({autoReplaceSvgRoot:t}),Tt("watch",e)}))}},xt={icon:function(e){if(null===e)return null;if("object"===s(e)&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ut(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&2===e.length){var t=0===e[1].indexOf("fa-")?e[1].slice(3):e[1],n=pt(e[0]);return{prefix:n,iconName:ut(n,t)||t}}if("string"===typeof e&&(e.indexOf("".concat(de.familyPrefix,"-"))>-1||e.match(J))){var r=mt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||dt(),iconName:ut(r.prefix,r.iconName)||r.iconName}}if("string"===typeof e){var i=dt();return{prefix:i,iconName:ut(i,e)||e}}}},Nt={noAuto:At,config:de,dom:Ct,parse:xt,library:St,findIconDefinition:kt,toHtml:Ue},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.autoReplaceSvgRoot,n=void 0===t?x:t;(Object.keys(Pe.styles).length>0||de.autoFetchSvg)&&D&&de.autoReplaceSvg&&Nt.dom.i2svg({node:n})};function Dt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return Ue(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(D){var t=x.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function Rt(e){var t=e.children,n=e.main,r=e.mask,s=e.attributes,o=e.styles,a=e.transform;if(ke(a)&&n.found&&!r.found){var c=n.width,u=n.height,l={x:c/u/2,y:.5};s["style"]=Ee(i(i({},o),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function Pt(e){var t=e.prefix,n=e.iconName,r=e.children,s=e.attributes,o=e.symbol,a=!0===o?"".concat(t,"-").concat(de.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},s),{},{id:a}),children:r}]}]}function Lt(e){var t=e.icons,n=t.main,r=t.mask,s=e.prefix,o=e.iconName,a=e.transform,c=e.symbol,u=e.title,l=e.maskId,h=e.titleId,d=e.extra,f=e.watchable,p=void 0!==f&&f,m=r.found?r:n,g=m.width,v=m.height,y="fak"===s,w=[de.replacementClass,o?"".concat(de.familyPrefix,"-").concat(o):""].filter((function(e){return-1===d.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(d.classes).join(" "),b={children:[],attributes:i(i({},d.attributes),{},{"data-prefix":s,"data-icon":o,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},_=y&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(b.attributes[V]=""),u&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(h||we())},children:[u]}),delete b.attributes.title);var I=i(i({},b),{},{prefix:s,iconName:o,main:n,mask:r,maskId:l,transform:a,symbol:c,styles:i(i({},_),d.styles)}),T=r.found&&n.found?Et("generateAbstractMask",I)||{children:[],attributes:{}}:Et("generateAbstractIcon",I)||{children:[],attributes:{}},E=T.children,k=T.attributes;return I.children=E,I.attributes=k,c?Pt(I):Rt(I)}function Mt(e){var t=e.content,n=e.width,r=e.height,s=e.transform,o=e.title,a=e.extra,c=e.watchable,u=void 0!==c&&c,l=i(i(i({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});u&&(l[V]="");var h=i({},a.styles);ke(s)&&(h["transform"]=Ae({transform:s,startCentered:!0,width:n,height:r}),h["-webkit-transform"]=h["transform"]);var d=Ee(h);d.length>0&&(l["style"]=d);var f=[];return f.push({tag:"span",attributes:l,children:[t]}),o&&f.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),f}function Ft(e){var t=e.content,n=e.title,r=e.extra,s=i(i(i({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ee(r.styles);o.length>0&&(s["style"]=o);var a=[];return a.push({tag:"span",attributes:s,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Vt=Pe.styles;function Ut(e){var t=e[0],n=e[1],r=e.slice(4),i=l(r,1),s=i[0],o=null;return o=Array.isArray(s)?{tag:"g",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(de.familyPrefix,"-").concat(ie.PRIMARY),fill:"currentColor",d:s[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var jt={found:!1,width:512,height:512};function $t(e,t){K||de.showMissingIcons||!e||console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function qt(e,t){var n=t;return"fa"===t&&null!==de.styleDefault&&(t=dt()),new Promise((function(r,s){Et("missingIconAbstract");if("fa"===n){var o=lt(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Vt[t]&&Vt[t][e]){var a=Vt[t][e];return r(Ut(a))}$t(e,t),r(i(i({},jt),{},{icon:de.showMissingIcons&&e&&Et("missingIconAbstract")||{}}))}))}var Bt=function(){},zt=de.measurePerformance&&O&&O.mark&&O.measure?O:{mark:Bt,measure:Bt},Gt='FA "6.1.0"',Kt=function(e){return zt.mark("".concat(Gt," ").concat(e," begins")),function(){return Wt(e)}},Wt=function(e){zt.mark("".concat(Gt," ").concat(e," ends")),zt.measure("".concat(Gt," ").concat(e),"".concat(Gt," ").concat(e," begins"),"".concat(Gt," ").concat(e," ends"))},Ht={begin:Kt,end:Wt},Yt=function(){};function Qt(e){var t=e.getAttribute?e.getAttribute(V):null;return"string"===typeof t}function Jt(e){var t=e.getAttribute?e.getAttribute($):null,n=e.getAttribute?e.getAttribute(q):null;return t&&n}function Xt(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(de.replacementClass)}function Zt(){if(!0===de.autoReplaceSvg)return sn.replace;var e=sn[de.autoReplaceSvg];return e||sn.replace}function en(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function tn(e){return x.createElement(e)}function nn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ceFn,r=void 0===n?"svg"===e.tag?en:tn:n;if("string"===typeof e)return x.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach((function(t){i.setAttribute(t,e.attributes[t])}));var s=e.children||[];return s.forEach((function(e){i.appendChild(nn(e,{ceFn:r}))})),i}function rn(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach((function(e){t.parentNode.insertBefore(nn(e),t)})),null===t.getAttribute(V)&&de.keepOriginalSource){var n=x.createComment(rn(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~_e(t).indexOf(de.replacementClass))return sn.replace(e);var r=new RegExp("".concat(de.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(" ").reduce((function(e,t){return t===de.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e}),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),0===i.toNode.length?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var s=n.map((function(e){return Ue(e)})).join("\n");t.setAttribute(V,""),t.innerHTML=s}};function on(e){e()}function an(e,t){var n="function"===typeof t?t:Yt;if(0===e.length)n();else{var r=on;de.mutateApproach===z&&(r=C.requestAnimationFrame||on),r((function(){var t=Zt(),r=Ht.begin("mutate");e.map(t),r(),n()}))}}var cn=!1;function un(){cn=!0}function ln(){cn=!1}var hn=null;function dn(e){if(N&&de.observeMutations){var t=e.treeCallback,n=void 0===t?Yt:t,r=e.nodeCallback,i=void 0===r?Yt:r,s=e.pseudoElementsCallback,o=void 0===s?Yt:s,a=e.observeMutationsRoot,c=void 0===a?x:a;hn=new N((function(e){if(!cn){var t=dt();be(e).forEach((function(e){if("childList"===e.type&&e.addedNodes.length>0&&!Qt(e.addedNodes[0])&&(de.searchPseudoElements&&o(e.target),n(e.target)),"attributes"===e.type&&e.target.parentNode&&de.searchPseudoElements&&o(e.target.parentNode),"attributes"===e.type&&Qt(e.target)&&~re.indexOf(e.attributeName))if("class"===e.attributeName&&Jt(e.target)){var r=mt(_e(e.target)),s=r.prefix,a=r.iconName;e.target.setAttribute($,s||t),a&&e.target.setAttribute(q,a)}else Xt(e.target)&&i(e.target)}))}})),D&&hn.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fn(){hn&&hn.disconnect()}function pn(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce((function(e,t){var n=t.split(":"),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(":").trim()),e}),{})),n}function mn(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=void 0!==e.innerText?e.innerText.trim():"",i=mt(_e(e));return i.prefix||(i.prefix=dt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||i.prefix&&r.length>0&&(i.iconName=ct(i.prefix,e.innerText)||at(i.prefix,ze(e.innerText))),i}function gn(e){var t=be(e.attributes).reduce((function(e,t){return"class"!==e.name&&"style"!==e.name&&(e[t.name]=t.value),e}),{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return de.autoA11y&&(n?t["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(r||we()):(t["aria-hidden"]="true",t["focusable"]="false")),t}function vn(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ge,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},n=mn(e),r=n.iconName,s=n.prefix,o=n.rest,a=gn(e),c=It("parseNodeAttributes",{},e),u=t.styleParser?pn(e):[];return i({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:ge,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:u,attributes:a}},c)}var wn=Pe.styles;function bn(e){var t="nest"===de.autoReplaceSvg?yn(e,{styleParser:!1}):yn(e);return~t.extra.classes.indexOf(X)?Et("generateLayersText",e,t):Et("generateSvgReplacementMutation",e,t)}function _n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!D)return Promise.resolve();var n=x.documentElement.classList,r=function(e){return n.add("".concat(B,"-").concat(e))},i=function(e){return n.remove("".concat(B,"-").concat(e))},s=de.autoFetchSvg?Object.keys(W):Object.keys(wn),o=[".".concat(X,":not([").concat(V,"])")].concat(s.map((function(e){return".".concat(e,":not([").concat(V,"])")}))).join(", ");if(0===o.length)return Promise.resolve();var a=[];try{a=be(e.querySelectorAll(o))}catch(Zn){}if(!(a.length>0))return Promise.resolve();r("pending"),i("complete");var c=Ht.begin("onTree"),u=a.reduce((function(e,t){try{var n=bn(t);n&&e.push(n)}catch(Zn){K||"MissingIcon"===Zn.name&&console.error(Zn)}return e}),[]);return new Promise((function(e,n){Promise.all(u).then((function(n){an(n,(function(){r("active"),r("complete"),i("pending"),"function"===typeof t&&t(),c(),e()}))})).catch((function(e){c(),n(e)}))}))}function In(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;bn(e).then((function(e){e&&an([e],t)}))}function Tn(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(t||{}).icon?t:kt(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:kt(s||{})),e(r,i(i({},n),{},{mask:s}))}}var En=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?ge:n,s=t.symbol,o=void 0!==s&&s,a=t.mask,c=void 0===a?null:a,u=t.maskId,l=void 0===u?null:u,h=t.title,d=void 0===h?null:h,f=t.titleId,p=void 0===f?null:f,m=t.classes,g=void 0===m?[]:m,v=t.attributes,y=void 0===v?{}:v,w=t.styles,b=void 0===w?{}:w;if(e){var _=e.prefix,I=e.iconName,T=e.icon;return Dt(i({type:"icon"},e),(function(){return Tt("beforeDOMElementCreation",{iconDefinition:e,params:t}),de.autoA11y&&(d?y["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(p||we()):(y["aria-hidden"]="true",y["focusable"]="false")),Lt({icons:{main:Ut(T),mask:c?Ut(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:I,transform:i(i({},ge),r),symbol:o,title:d,maskId:l,titleId:p,extra:{attributes:y,styles:b,classes:g}})}))}},kn={mixout:function(){return{icon:Tn(En)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_n,e.nodeCallback=In,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=void 0===t?x:t,r=e.callback,i=void 0===r?function(){}:r;return _n(n,i)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.title,i=t.titleId,s=t.prefix,o=t.transform,a=t.symbol,c=t.mask,u=t.maskId,h=t.extra;return new Promise((function(t,d){Promise.all([qt(n,s),c.iconName?qt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(c){var d=l(c,2),f=d[0],p=d[1];t([e,Lt({icons:{main:f,mask:p},prefix:s,iconName:n,transform:o,symbol:a,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])})).catch(d)}))},e.generateAbstractIcon=function(e){var t,n=e.children,r=e.attributes,i=e.main,s=e.transform,o=e.styles,a=Ee(o);return a.length>0&&(r["style"]=a),ke(s)&&(t=Et("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),n.push(t||i.icon),{children:n,attributes:r}}}},Sn={mixout:function(){return{layer:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classes,r=void 0===n?[]:n;return Dt({type:"layer"},(function(){Tt("beforeDOMElementCreation",{assembler:e,params:t});var n=[];return e((function(e){Array.isArray(e)?e.map((function(e){n=n.concat(e.abstract)})):n=n.concat(e.abstract)})),[{tag:"span",attributes:{class:["".concat(de.familyPrefix,"-layers")].concat(h(r)).join(" ")},children:n}]}))}}}},An={mixout:function(){return{counter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.title,r=void 0===n?null:n,i=t.classes,s=void 0===i?[]:i,o=t.attributes,a=void 0===o?{}:o,c=t.styles,u=void 0===c?{}:c;return Dt({type:"counter",content:e},(function(){return Tt("beforeDOMElementCreation",{content:e,params:t}),Ft({content:e.toString(),title:r,extra:{attributes:a,styles:u,classes:["".concat(de.familyPrefix,"-layers-counter")].concat(h(s))}})}))}}}},Cn={mixout:function(){return{text:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?ge:n,s=t.title,o=void 0===s?null:s,a=t.classes,c=void 0===a?[]:a,u=t.attributes,l=void 0===u?{}:u,d=t.styles,f=void 0===d?{}:d;return Dt({type:"text",content:e},(function(){return Tt("beforeDOMElementCreation",{content:e,params:t}),Mt({content:e,transform:i(i({},ge),r),title:o,extra:{attributes:l,styles:f,classes:["".concat(de.familyPrefix,"-layers-text")].concat(h(c))}})}))}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.title,r=t.transform,i=t.extra,s=null,o=null;if(R){var a=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/a,o=c.height/a}return de.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Mt({content:e.innerHTML,width:s,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},xn=new RegExp('"',"ug"),Nn=[1105920,1112319];function On(e){var t=e.replace(xn,""),n=Ge(t,0),r=n>=Nn[0]&&n<=Nn[1],i=2===t.length&&t[0]===t[1];return{value:ze(i?t[0]:t),isSecondary:r||i}}function Dn(e,t){var n="".concat(j).concat(t.replace(":","-"));return new Promise((function(r,s){if(null!==e.getAttribute(n))return r();var o=be(e.children),a=o.filter((function(e){return e.getAttribute(U)===t}))[0],c=C.getComputedStyle(e,t),u=c.getPropertyValue("font-family").match(Z),l=c.getPropertyValue("font-weight"),h=c.getPropertyValue("content");if(a&&!u)return e.removeChild(a),r();if(u&&"none"!==h&&""!==h){var d=c.getPropertyValue("content"),f=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(u[2])?H[u[2].toLowerCase()]:ee[l],p=On(d),m=p.value,g=p.isSecondary,v=u[0].startsWith("FontAwesome"),y=at(f,m),w=y;if(v){var b=ht(m);b.iconName&&b.prefix&&(y=b.iconName,f=b.prefix)}if(!y||g||a&&a.getAttribute($)===f&&a.getAttribute(q)===w)r();else{e.setAttribute(n,w),a&&e.removeChild(a);var _=vn(),I=_.extra;I.attributes[U]=t,qt(y,f).then((function(s){var o=Lt(i(i({},_),{},{icons:{main:s,mask:ft()},prefix:f,iconName:w,extra:I,watchable:!0})),a=x.createElement("svg");"::before"===t?e.insertBefore(a,e.firstChild):e.appendChild(a),a.outerHTML=o.map((function(e){return Ue(e)})).join("\n"),e.removeAttribute(n),r()})).catch(s)}}else r()}))}function Rn(e){return Promise.all([Dn(e,"::before"),Dn(e,"::after")])}function Pn(e){return e.parentNode!==document.head&&!~G.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(U)&&(!e.parentNode||"svg"!==e.parentNode.tagName)}function Ln(e){if(D)return new Promise((function(t,n){var r=be(e.querySelectorAll("*")).filter(Pn).map(Rn),i=Ht.begin("searchPseudoElements");un(),Promise.all(r).then((function(){i(),ln(),t()})).catch((function(){i(),ln(),n()}))}))}var Mn={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ln,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=void 0===t?x:t;de.searchPseudoElements&&Ln(n)}}},Fn=!1,Vn={mixout:function(){return{dom:{unwatch:function(){un(),Fn=!0}}}},hooks:function(){return{bootstrap:function(){dn(It("mutationObserverCallbacks",{}))},noAuto:function(){fn()},watch:function(e){var t=e.observeMutationsRoot;Fn?ln():dn(It("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},Un=function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i;break}return e}),t)},jn={mixout:function(){return{parse:{transform:function(e){return Un(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-transform");return n&&(e.transform=Un(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,s=e.iconWidth,o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(32*n.x,", ").concat(32*n.y,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),u="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(a," ").concat(c," ").concat(u)},h={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:l,path:h};return{tag:"g",attributes:i({},d.outer),children:[{tag:"g",attributes:i({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:i(i({},t.icon.attributes),d.path)}]}]}}}},$n={x:0,y:0,width:"100%",height:"100%"};function qn(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Bn(e){return"g"===e.tag?e.children:[e]}var zn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-mask"),r=n?mt(n.split(" ").map((function(e){return e.trim()}))):ft();return r.prefix||(r.prefix=dt()),e.mask=r,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,s=e.mask,o=e.maskId,a=e.transform,c=r.width,u=r.icon,l=s.width,h=s.icon,d=Se({transform:a,containerWidth:l,iconWidth:c}),f={tag:"rect",attributes:i(i({},$n),{},{fill:"white"})},p=u.children?{children:u.children.map(qn)}:{},m={tag:"g",attributes:i({},d.inner),children:[qn(i({tag:u.tag,attributes:i(i({},u.attributes),d.path)},p))]},g={tag:"g",attributes:i({},d.outer),children:[m]},v="mask-".concat(o||we()),y="clip-".concat(o||we()),w={tag:"mask",attributes:i(i({},$n),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[f,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Bn(h)},w]};return t.push(b,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},$n)}),{children:t,attributes:n}}}},Gn={provides:function(e){var t=!1;C.matchMedia&&(t=C.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var e=[],n={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:i(i({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=i(i({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||o.children.push({tag:"animate",attributes:i(i({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:i(i({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:i(i({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||e.push({tag:"path",attributes:i(i({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Kn={hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute("data-fa-symbol"),r=null!==n&&(""===n||n);return e["symbol"]=r,e}}}},Wn=[De,kn,Sn,An,Cn,Mn,Vn,jn,zn,Gn,Kn];_t(Wn,{mixoutsTo:Nt});Nt.noAuto;var Hn=Nt.config,Yn=Nt.library,Qn=(Nt.dom,Nt.parse),Jn=(Nt.findIconDefinition,Nt.toHtml,Nt.icon),Xn=(Nt.layer,Nt.text);Nt.counter},436:function(e,t,n){"use strict";n.d(t,{ILF:function(){return a},iV1:function(){return i},jLD:function(){return o}});
/*!
 * Font Awesome Free 6.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var r={prefix:"fas",iconName:"ellipsis-vertical",icon:[128,512,["ellipsis-v"],"f142","M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"]},i=r,s={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]},o=s,a={prefix:"fas",iconName:"user",icon:[448,512,[62144,128100],"f007","M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"]}},810:function(e,t,n){"use strict";n.d(t,{GN:function(){return I}});var r=n(947),i="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function s(e,t){return t={exports:{}},e(t,t.exports),t.exports}var o=s((function(e){(function(t){var n=function(e,t,r){if(!u(t)||h(t)||d(t)||f(t)||c(t))return t;var i,s=0,o=0;if(l(t))for(i=[],o=t.length;s<o;s++)i.push(n(e,t[s],r));else for(var a in i={},t)Object.prototype.hasOwnProperty.call(t,a)&&(i[e(a,r)]=n(e,t[a],r));return i},r=function(e,t){t=t||{};var n=t.separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return p(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""})),e.substr(0,1).toLowerCase()+e.substr(1))},s=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},a=Object.prototype.toString,c=function(e){return"function"===typeof e},u=function(e){return e===Object(e)},l=function(e){return"[object Array]"==a.call(e)},h=function(e){return"[object Date]"==a.call(e)},d=function(e){return"[object RegExp]"==a.call(e)},f=function(e){return"[object Boolean]"==a.call(e)},p=function(e){return e-=0,e===e},m=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!==typeof n?e:function(t,r){return n(t,e,r)}},g={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(e,t){return n(m(i,t),e)},decamelizeKeys:function(e,t){return n(m(o,t),e,t)},pascalizeKeys:function(e,t){return n(m(s,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(i)})),a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n=t.indexOf(":"),r=o.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return e[r]=i,e}),{})}function f(e){return e.split(/\s+/).reduce((function(e,t){return e[t]=!0,e}),{})}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return Array.isArray(t)?e=e.concat(t):e.push(t),e}),[])}function m(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=(t.children||[]).map(m.bind(null,e)),s=Object.keys(t.attributes||{}).reduce((function(e,n){var r=t.attributes[n];switch(n){case"class":e["class"]=f(r);break;case"style":e["style"]=d(r);break;default:e.attrs[n]=r}return e}),{class:{},style:{},attrs:{}}),o=r.class,a=void 0===o?{}:o,c=r.style,h=void 0===c?{}:c,g=r.attrs,v=void 0===g?{}:g,y=l(r,["class","style","attrs"]);return"string"===typeof t?t:e(t.tag,u({class:p(s.class,a),style:u({},s.style,h),attrs:u({},s.attrs,v)},y,{props:n}),i)}var g=!1;try{g=!0}catch(T){}function v(){var e;!g&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}function y(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function w(e){var t,n=(t={"fa-spin":e.spin,"fa-spin-pulse":e.spinPulse,"fa-spin-reverse":e.spinReverse,"fa-pulse":e.pulse,"fa-beat":e.beat,"fa-fade":e.fade,"fa-flash":e.flash,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},c(t,"fa-"+e.size,null!==e.size),c(t,"fa-rotate-"+e.rotation,null!==e.rotation),c(t,"fa-pull-"+e.pull,null!==e.pull),c(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map((function(e){return n[e]?e:null})).filter((function(e){return e}))}function b(e,t){var n=0===(e||"").length?[]:[e];return n.concat(t).join(" ")}function _(e){return e&&"object"===("undefined"===typeof e?"undefined":a(e))&&e.prefix&&e.iconName&&e.icon?e:r.Qc.icon?r.Qc.icon(e):null===e?null:"object"===("undefined"===typeof e?"undefined":a(e))&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}var I={name:"FontAwesomeIcon",functional:!0,props:{beat:{type:Boolean,default:!1},border:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(e){return["horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(e,t){var n=t.props,i=n.icon,s=n.mask,o=n.symbol,a=n.title,c=_(i),l=y("classes",w(n)),h=y("transform","string"===typeof n.transform?r.Qc.transform(n.transform):n.transform),d=y("mask",_(s)),f=(0,r.qv)(c,u({},l,h,d,{symbol:o,title:a}));if(!f)return v("Could not find one or more icon(s)",c,d);var p=f.abstract,g=m.bind(null,e);return g(p[0],{},t.data)}};Boolean,Boolean},1:function(e,t,n){"use strict";function r(e,t,n,r,i,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return r}})},902:function(e,t,n){"use strict";n.d(t,{Z:function(){return r.Z}});var r=n(180),i="firebase",s="9.6.10";
/**
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
 */
r.Z.registerVersion(i,s,"app-compat")},204:function(e,t,n){"use strict";var r=n(180),i=n(444),s=n(238);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(333),c=n(463);
/**
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
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
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
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new a.Yd("@firebase/auth");function v(e,...t){g.logLevel<=a["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
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
 */function y(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function T(e,t,...n){if(!e)throw I(t,...n)}function E(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function k(e,t){e||E(t)}
/**
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
 */const S=new Map;function A(e){k(e instanceof Function,"Expected a class definition");let t=S.get(e);return t?(k(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,S.set(e,t),t)}
/**
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
 */function C(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(A);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
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
 */function x(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function N(){return"http:"===O()||"https:"===O()}function O(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(N()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
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
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,k(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function L(e,t){k(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class M{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const F={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new P(3e4,6e4);
/**
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
 */function U(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function j(e,t,n,r,s={}){return $(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),M.fetch()(B(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function $(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},F),t);try{const t=new z(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw G(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw G(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw G(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof i.ZR)throw s;y(e,"network-request-failed")}}async function q(e,t,n,r,i={}){const s=await j(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function B(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class z{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function G(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
 */async function K(e,t){return j(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return j(e,"POST","/v1/accounts:update",t)}async function H(e,t){return j(e,"POST","/v1/accounts:lookup",t)}
/**
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
 */function Y(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
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
 */async function Q(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=X(r);T(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Y(J(s.auth_time)),issuedAtTime:Y(J(s.iat)),expirationTime:Y(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function X(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",s),null}}function Z(e){const t=X(e);return T(t,"internal-error"),T("undefined"!==typeof t.exp,"internal-error"),T("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Y(this.lastLoginAt),this.creationTime=Y(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,H(n,{idToken:r}));T(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */async function ce(e,t){const n=await $(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=B(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
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
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T("undefined"!==typeof e.idToken,"internal-error"),T("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(T("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(T("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(T("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return E("not implemented")}}
/**
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
 */function le(e,t){T("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return T(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return se(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,K(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;T(y&&I,e,"internal-error");const E=ue.fromJSON(this.name,I);T("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),T("boolean"===typeof w,e,"internal-error"),T("boolean"===typeof b,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const k=new he({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
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
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
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
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(A(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||A(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
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
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Te(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Te(e=(0,i.z$)()){return/webos/i.test(e)}function Ee(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)}function ke(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Se(e=(0,i.z$)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ae(){return(0,i.w1)()&&10===document.documentMode}function Ce(e=(0,i.z$)()){return Ee(e)||_e(e)||Te(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function xe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
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
 */function Ne(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
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
 */class Oe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Re(this),this.idTokenSubscription=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=A(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ie(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&T(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(A(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&A(e)||this._popupRedirectResolver;T(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[A(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return T(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ne(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function De(e){return(0,i.m9)(e)}class Re{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const r=De(e);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Le(t),{host:o,port:a}=Me(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ve()}function Le(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Le(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Fe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Fe(t)}}}function Fe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return E("not implemented")}_getIdTokenResponse(e){return E("not implemented")}_linkToIdToken(e,t){return E("not implemented")}_getReauthenticationResolver(e){return E("not implemented")}}
/**
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
 */async function je(e,t){return j(e,"POST","/v1/accounts:resetPassword",U(e,t))}async function $e(e,t){return j(e,"POST","/v1/accounts:update",t)}async function qe(e,t){return j(e,"POST","/v1/accounts:update",U(e,t))}
/**
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
 */async function Be(e,t){return q(e,"POST","/v1/accounts:signInWithPassword",U(e,t))}async function ze(e,t){return j(e,"POST","/v1/accounts:sendOobCode",U(e,t))}async function Ge(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function We(e,t){return ze(e,t)}async function He(e,t){return ze(e,t)}
/**
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
 */async function Ye(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}async function Qe(e,t){return q(e,"POST","/v1/accounts:signInWithEmailLink",U(e,t))}
/**
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
 */class Je extends Ue{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Je(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Je(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Be(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function Xe(e,t){return q(e,"POST","/v1/accounts:signInWithIdp",U(e,t))}
/**
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
 */const Ze="http://localhost";class et extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new et(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Ze,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
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
 */async function tt(e,t){return j(e,"POST","/v1/accounts:sendVerificationCode",U(e,t))}async function nt(e,t){return q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t))}async function rt(e,t){const n=await q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,t));if(n.temporaryProof)throw G(e,"account-exists-with-different-credential",n);return n}const it={["USER_NOT_FOUND"]:"user-not-found"};async function st(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return q(e,"POST","/v1/accounts:signInWithPhoneNumber",U(e,n),it)}
/**
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
 */class ot extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ot({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ot({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return st(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ot({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
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
 */function at(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ct(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class ut{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=at(null!==(r=c["mode"])&&void 0!==r?r:null);T(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ct(e);try{return new ut(t)}catch(n){return null}}}
/**
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
 */
class lt{constructor(){this.providerId=lt.PROVIDER_ID}static credential(e,t){return Je._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ut.parseLink(t);return T(n,"argument-error"),Je._fromEmailAndCode(e,n.code,n.tenantId)}}lt.PROVIDER_ID="password",lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class dt extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ft extends dt{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return T("providerId"in t&&"signInMethod"in t,"argument-error"),et._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return T(e.idToken||e.accessToken,"argument-error"),et._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ft.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ft.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new ft(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
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
 */class pt extends dt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
/**
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
 */
class mt extends dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return mt.credential(t,n)}catch(r){return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com",mt.PROVIDER_ID="google.com";
/**
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
 */
class gt extends dt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch(t){return null}}}gt.GITHUB_SIGN_IN_METHOD="github.com",gt.PROVIDER_ID="github.com";
/**
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
 */
const vt="http://localhost";class yt extends Ue{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new yt(n,i):null}static _create(e,t){return new yt(e,t)}buildRequest(){return{requestUri:vt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
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
 */const wt="saml.";class bt extends ht{constructor(e){T(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return bt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return bt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yt.fromJSON(e);return T(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return yt._create(n,t)}catch(r){return null}}}
/**
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
 */class _t extends dt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return _t.credential(t,n)}catch(r){return null}}}
/**
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
 */
async function It(e,t){return q(e,"POST","/v1/accounts:signUp",U(e,t))}
/**
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
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=Et(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Et(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */async function kt(e){var t;const n=De(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await It(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
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
 */class St extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new St(e,t,n,r)}}function At(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw St._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */function Ct(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
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
 */async function xt(e,t){const n=(0,i.m9)(e);await Ot(!0,n,t);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=Ct(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Ot(e,t,n){await ie(t);const r=Ct(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";T(r.has(n)===e,t.auth,i)}
/**
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
 */async function Dt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ee(e,At(r,i,t,e),n);T(s.idToken,r,"internal-error");const o=X(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(e.uid===a,r,"user-mismatch"),Tt._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(r,"user-mismatch"),s}}
/**
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
 */async function Rt(e,t,n=!1){const r="signIn",i=await At(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return Rt(De(e),t)}async function Lt(e,t){const n=(0,i.m9)(e);return await Ot(!1,n,t.providerId),Nt(n,t)}async function Mt(e,t){return Dt((0,i.m9)(e),t)}
/**
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
 */async function Ft(e,t){return q(e,"POST","/v1/accounts:signInWithCustomToken",U(e,t))}
/**
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
 */async function Vt(e,t){const n=De(e),r=await Ft(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
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
 */class Ut{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jt._fromServerResponse(e,t):y(e,"internal-error")}}class jt extends Ut{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jt(t)}}
/**
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
 */function $t(e,t,n){var r;T((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),T("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
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
 */async function qt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&$t(r,s,n),await Ke(r,s)}async function Bt(e,t,n){await je((0,i.m9)(e),{oobCode:t,newPassword:n})}async function zt(e,t){await qe((0,i.m9)(e),{oobCode:t})}async function Gt(e,t){const n=(0,i.m9)(e),r=await je(n,{oobCode:t}),s=r.requestType;switch(T(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":T(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":T(r.mfaInfo,n,"internal-error");default:T(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Ut._fromServerResponse(De(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Kt(e,t){const{data:n}=await Gt((0,i.m9)(e),t);return n.email}async function Wt(e,t,n){const r=De(e),i=await It(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ht(e,t,n){return Pt((0,i.m9)(e),lt.credential(t,n))}
/**
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
 */async function Yt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};T(n.handleCodeInApp,r,"argument-error"),n&&$t(r,s,n),await We(r,s)}function Qt(e,t){const n=ut.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const r=(0,i.m9)(e),s=lt.credentialWithLink(t,n||x());return T(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Pt(r,s)}
/**
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
 */async function Xt(e,t){return j(e,"POST","/v1/accounts:createAuthUri",U(e,t))}
/**
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
 */async function Zt(e,t){const n=N()?x():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Xt((0,i.m9)(e),r);return s||[]}async function en(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&$t(n.auth,s,t);const{email:o}=await Ge(n.auth,s);o!==e.email&&await e.reload()}async function tn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&$t(r.auth,o,n);const{email:a}=await He(r.auth,o);a!==e.email&&await e.reload()}
/**
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
 */async function nn(e,t){return j(e,"POST","/v1/accounts:update",t)}
/**
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
 */async function rn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,nn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sn(e,t){return an((0,i.m9)(e),t,null)}function on(e,t){return an((0,i.m9)(e),null,t)}async function an(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,$e(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
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
 */function cn(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new un(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new hn(s,i);case"github.com":return new dn(s,i);case"google.com":return new fn(s,i);case"twitter.com":return new pn(s,i,e.screenName||null);case"custom":case"anonymous":return new un(s,null);default:return new un(s,r,i)}}class un{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ln extends un{constructor(e,t,n,r){super(e,t,n),this.username=r}}class hn extends un{constructor(e,t){super(e,"facebook.com",t)}}class dn extends ln{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class fn extends un{constructor(e,t){super(e,"google.com",t)}}class pn extends ln{constructor(e,t,n){super(e,"twitter.com",t,n)}}function mn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:cn(n)}
/**
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
 */class gn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new gn("enroll",e)}static _fromMfaPendingCredential(e){return new gn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
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
 */class vn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=De(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Ut._fromServerResponse(n,e)));T(r.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(r.mfaPendingCredential);return new vn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return T(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function yn(e,t){var n;const r=(0,i.m9)(e),s=t;return T(t.customData.operationType,r,"argument-error"),T(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),vn._fromError(r,s)}
/**
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
 */function wn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:start",U(e,t))}function bn(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:finalize",U(e,t))}function _n(e,t){return j(e,"POST","/v2/accounts/mfaEnrollment:withdraw",U(e,t))}class In{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Ut._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new In(e)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ee(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==i.code)throw i}}}const Tn=new WeakMap;function En(e){const t=(0,i.m9)(e);return Tn.has(t)||Tn.set(t,In._fromUser(t)),Tn.get(t)}const kn="__sak";
/**
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
 */class Sn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */function An(){const e=(0,i.z$)();return ye(e)||Ee(e)}const Cn=1e3,xn=10;class Nn extends Sn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=An()&&xe(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ae()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nn.type="LOCAL";const On=Nn;
/**
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
 */class Dn extends Sn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dn.type="SESSION";const Rn=Dn;
/**
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
 */function Pn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Ln{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ln(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Pn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Ln.receivers=[];class Fn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Mn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function Vn(){return window}function Un(e){Vn().location.href=e}
/**
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
 */function jn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Bn(){return jn()?self:null}
/**
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
 */const zn="firebaseLocalStorageDb",Gn=1,Kn="firebaseLocalStorage",Wn="fbase_key";class Hn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Yn(e,t){return e.transaction([Kn],t?"readwrite":"readonly").objectStore(Kn)}function Qn(){const e=indexedDB.deleteDatabase(zn);return new Hn(e).toPromise()}function Jn(){const e=indexedDB.open(zn,Gn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Kn,{keyPath:Wn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Kn)?t(n):(n.close(),await Qn(),t(await Jn()))}))}))}async function Xn(e,t,n){const r=Yn(e,!0).put({[Wn]:t,value:n});return new Hn(r).toPromise()}async function Zn(e,t){const n=Yn(e,!1).get(t),r=await new Hn(n).toPromise();return void 0===r?null:r.value}function er(e,t){const n=Yn(e,!0).delete(t);return new Hn(n).toPromise()}const tr=800,nr=3;class rr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>nr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ln._getInstance(Bn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new Fn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jn();return await Xn(e,kn,"1"),await er(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Zn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>er(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Hn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),tr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}rr.type="LOCAL";const ir=rr;
/**
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
 */function sr(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:start",U(e,t))}function or(e,t){return j(e,"POST","/v2/accounts/mfaSignIn:finalize",U(e,t))}
/**
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
 */async function ar(e){return(await j(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
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
 */function cr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ur(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",cr().appendChild(r)}))}function lr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
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
 */const hr=500,dr=6e4,fr=1e12;class pr{constructor(e){this.auth=e,this.counter=fr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new mr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||fr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||fr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||fr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class mr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;T(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=gr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),dr)}),hr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
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
 */const vr=lr("rcb"),yr=new P(3e4,6e4),wr="https://www.google.com/recaptcha/api.js?";class br{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Vn().grecaptcha}load(e,t=""){return T(_r(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise(((n,r)=>{const s=Vn().setTimeout((()=>{r(w(e,"network-request-failed"))}),yr.get());Vn()[vr]=()=>{Vn().clearTimeout(s),delete Vn()[vr];const i=Vn().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${wr}?${(0,i.xO)({onload:vr,render:"explicit",hl:t})}`;ur(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Vn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _r(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Ir{async load(e){return new pr(e)}clearedOneInstance(){}}
/**
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
 */const Tr="recaptcha",Er={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Er),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(n),this.isInvisible="invisible"===this.parameters.size,T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;T(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ir:new br,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){T(!this.parameters.sitekey,this.auth,"argument-error"),T(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),T("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){T(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){T(N()&&!jn(),this.auth,"internal-error"),await Sr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await ar(this.auth);T(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return T(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Sr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
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
 */class Ar{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ot._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Cr(e,t,n){const r=De(e),s=await Or(r,t,(0,i.m9)(n));return new Ar(s,(e=>Pt(r,e)))}async function xr(e,t,n){const r=(0,i.m9)(e);await Ot(!1,r,"phone");const s=await Or(r.auth,t,(0,i.m9)(n));return new Ar(s,(e=>Lt(r,e)))}async function Nr(e,t,n){const r=(0,i.m9)(e),s=await Or(r.auth,t,(0,i.m9)(n));return new Ar(s,(e=>Mt(r,e)))}async function Or(e,t,n){var r;const i=await n.verify();try{let s;if(T("string"===typeof i,e,"argument-error"),T(n.type===Tr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){T("enroll"===t.type,e,"internal-error");const n=await wn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{T("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;T(n,e,"missing-multi-factor-info");const o=await sr(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await tt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Dr(e,t){await Nt((0,i.m9)(e),t)}
/**
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
 */class Rr{constructor(e){this.providerId=Rr.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Or(this.auth,e,(0,i.m9)(t))}static credential(e,t){return ot._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Rr.credentialFromTaggedObject(t)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ot._fromTokenResponse(t,n):null}}
/**
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
 */
function Pr(e,t){return t?A(t):(T(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Rr.PROVIDER_ID="phone",Rr.PHONE_SIGN_IN_METHOD="phone";class Lr extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return Rt(e.auth,new Lr(e),e.bypassAuthState)}function Fr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Dt(n,new Lr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return T(n,t,"internal-error"),Nt(n,new Lr(e),e.bypassAuthState)}
/**
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
 */class Ur{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Fr;default:y(this.auth,"internal-error")}}resolve(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){k(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const jr=new P(2e3,1e4);async function $r(e,t,n){const r=De(e);_(e,t,ht);const i=Pr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function qr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Pr(r.auth,n),o=new zr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Br(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Pr(r.auth,n),o=new zr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class zr extends Ur{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){k(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jr.get())};e()}}zr.currentPopupAction=null;
/**
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
 */
const Gr="pendingRedirect",Kr=new Map;class Wr extends Ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const t=await Hr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Hr(e,t){const n=Xr(t),r=Jr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Yr(e,t){return Jr(e)._set(Xr(t),"true")}function Qr(){Kr.clear()}function Jr(e){return A(e._redirectPersistence)}function Xr(e){return pe(Gr,e.config.apiKey,e.name)}
/**
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
 */function Zr(e,t,n){return ei(e,t,n)}async function ei(e,t,n){const r=De(e);_(e,t,ht);const i=Pr(r,n);return await Yr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Pr(r.auth,n);await Yr(s,r.auth);const o=await ai(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,ht);const s=Pr(r.auth,n);await Ot(!1,r,t.providerId),await Yr(s,r.auth);const o=await ai(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function si(e,t){return await De(e)._initializationPromise,oi(e,t,!1)}async function oi(e,t,n=!1){const r=De(e),i=Pr(r,t),s=new Wr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ai(e){const t=Mn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
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
 */const ci=6e5;class ui{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!di(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ci&&this.cachedEventUids.clear(),this.cachedEventUids.has(li(e))}saveEventToCache(e){this.cachedEventUids.add(li(e)),this.lastProcessedEventTime=Date.now()}}function li(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function di(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hi(e);default:return!1}}
/**
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
 */async function fi(e,t={}){return j(e,"GET","/v1/projects",t)}
/**
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
 */const pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mi=/^https?/;async function gi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fi(e);for(const r of t)try{if(vi(r))return}catch(n){}y(e,"unauthorized-domain")}function vi(e){const t=x(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!mi.test(n))return!1;if(pi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
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
 */const yi=new P(3e4,6e4);function wi(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function bi(e){return new Promise(((t,n)=>{var r,i,s;function o(){wi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{wi(),n(w(e,"network-request-failed"))},timeout:yi.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=lr("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},ur(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw _i=null,e}))}let _i=null;function Ii(e){return _i=_i||bi(e),_i}
/**
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
 */const Ti=new P(5e3,15e3),Ei="__/auth/iframe",ki="emulator/auth/iframe",Si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ci(e){const t=e.config;T(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,ki):`https://${e.config.authDomain}/${Ei}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ai.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function xi(e){const t=await Ii(e),n=Vn().gapi;return T(n,e,"internal-error"),t.open({where:document.body,url:Ci(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Si,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Vn().setTimeout((()=>{r(i)}),Ti.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Ni={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Oi=500,Di=600,Ri="_blank",Pi="http://localhost";class Li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Mi(e,t,n,r=Oi,s=Di){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Ni),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Ri:n),ve(l)&&(t=t||Pi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Se(l)&&"_self"!==c)return Fi(t||"",c),new Li(null);const d=window.open(t||"",c,h);T(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Li(d)}function Fi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const Vi="__/auth/handler",Ui="emulator/auth/handler";function ji(e,t,n,r,o,a){T(e.config.authDomain,e,"auth-domain-config-required"),T(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof dt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${$i(e)}?${(0,i.xO)(u).slice(1)}`}function $i({config:e}){return e.emulator?L(e,Ui):`https://${e.authDomain}/${Vi}`}
/**
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
 */const qi="webStorageSupport";class Bi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=oi}async _openPopup(e,t,n,r){var i;k(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ji(e,t,n,x(),r);return Mi(e,s,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Un(ji(e,t,n,x(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(k(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await xi(e),n=new ui(e);return t.register("authEvent",(t=>{T(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(qi,{type:qi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[qi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ye()||Ee()}}const zi=Bi;class Gi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return E("unexpected MultiFactorSessionType")}}}class Ki extends Gi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ki(e)}_finalizeEnroll(e,t,n){return bn(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return or(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wi{constructor(){}static assertion(e){return Ki._fromCredential(e)}}Wi.FACTOR_ID="phone";var Hi="@firebase/auth",Yi="0.19.11";
/**
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
 */
class Qi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */function Ji(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xi(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{T(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),T(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ne(e)},a=new Oe(t,r,i);return C(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Qi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Hi,Yi,Ji(e)),(0,s.registerVersion)(Hi,Yi,"esm2017")}
/**
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
 */
/**
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
 */
function Zi(){return window}
/**
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
 */Xi("Browser");const es=2e3;async function ts(e,t,n){var r;const{BuildInfo:i}=Zi();k(t.sessionId,"AuthEvent did not contain a session ID");const s=await os(t.sessionId),o={};return Ee()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,ji(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ns(e){const{BuildInfo:t}=Zi(),n={};Ee()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await fi(e,n)}function rs(e){const{cordova:t}=Zi();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,ke()?"_blank":"_system","location=yes"),n(i)}))}))}async function is(e,t,n){const{cordova:r}=Zi();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),es))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function ss(e){var t,n,r,i,s,o,a,c,u,l;const h=Zi();T("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),T("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),T("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),T("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function os(e){const t=as(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function as(e){if(k(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
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
 */const cs=20;class us extends ui{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function ls(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:ps(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function hs(e,t){return ms()._set(gs(e),t)}async function ds(e){const t=await ms()._get(gs(e));return t&&await ms()._remove(gs(e)),t}function fs(e,t){var n,r;const i=ys(t);if(i.includes("/__/auth/callback")){const t=ws(i),s=t["firebaseError"]?vs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function ps(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<cs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ms(){return A(On)}function gs(e){return pe("authEvent",e.config.apiKey,e.name)}function vs(e){try{return JSON.parse(e)}catch(t){return null}}function ys(e){const t=ws(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=ws(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=ws(i)["link"];return s||i||r||n||e}function ws(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
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
 */const bs=500;class _s{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=oi}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new us(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){ss(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Qr(),await this._originValidation(e);const s=ls(e,n,r);await hs(e,s);const o=await ts(e,s,t),a=await rs(o);return is(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ns(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=Zi(),s=setTimeout((async()=>{await ds(e),t.onEvent(Ts())}),bs),o=async n=>{clearTimeout(s);const r=await ds(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=fs(r,n["url"])),t.onEvent(i||Ts())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;Zi().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Is=_s;function Ts(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
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
 */function Es(e,t){De(e)._logFramework(t)}var ks="@firebase/auth-compat",Ss="0.2.11";
/**
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
 */
const As=1e3;function Cs(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function xs(){return"http:"===Cs()||"https:"===Cs()}function Ns(e=(0,i.z$)()){return!("file:"!==Cs()&&"ionic:"!==Cs()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Os(){return(0,i.b$)()||(0,i.UG)()}function Ds(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Rs(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ps(e=(0,i.z$)()){return Ds()||Rs(e)}function Ls(){try{const e=self.localStorage,t=Mn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ps()||(0,i.hl)()}catch(e){return Ms()&&(0,i.hl)()}return!1}function Ms(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Fs(){return(xs()||(0,i.ru)()||Ns())&&!Os()&&Ls()&&!Ms()}function Vs(){return Ns()&&"undefined"!==typeof document}async function Us(){return!!Vs()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),As);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function js(){return"undefined"!==typeof window?window:null}
/**
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
 */const $s={LOCAL:"local",NONE:"none",SESSION:"session"},qs=T,Bs="persistence";function zs(e,t){qs(Object.values($s).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?qs(t!==$s.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?qs(t===$s.NONE,e,"unsupported-persistence-type"):Ms()?qs(t===$s.NONE||t===$s.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):qs(t===$s.NONE||Ls(),e,"unsupported-persistence-type")}async function Gs(e){await e._initializationPromise;const t=Ws(),n=pe(Bs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Ks(e,t){const n=Ws();if(!n)return[];const r=pe(Bs,e,t),i=n.getItem(r);switch(i){case $s.NONE:return[fe];case $s.LOCAL:return[ir,Rn];case $s.SESSION:return[Rn];default:return[]}}function Ws(){var e;try{return(null===(e=js())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
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
 */const Hs=T;class Ys{constructor(){this.browserResolver=A(zi),this.cordovaResolver=A(Is),this.underlyingResolver=null,this._redirectPersistence=Rn,this._completeRedirectFn=oi}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Vs()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Hs(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Us();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
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
 */function Qs(e){return e.unwrap()}function Js(e){return e.wrapped()}
/**
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
 */function Xs(e){return eo(e)}function Zs(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const n=t;n.resolver=new ro(e,yn(e,t))}else if(r){const e=eo(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function eo(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Rr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=mt;break;case u.FACEBOOK:r=pt;break;case u.GITHUB:r=gt;break;case u.TWITTER:r=_t;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?yt._create(n,o):et._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new ft(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function to(e,t){return t.catch((t=>{throw t instanceof i.ZR&&Zs(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:Xs(e),additionalUserInfo:mn(e),user:io.getOrCreate(n)}}))}async function no(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>to(e,n.confirm(t))}}class ro{constructor(e,t){this.resolver=t,this.auth=Js(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return to(Qs(this.auth),this.resolver.resolveSignIn(e))}}
/**
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
 */class io{constructor(e){this._delegate=e,this.multiFactor=En(e)}static getOrCreate(e){return io.USER_MAP.has(e)||io.USER_MAP.set(e,new io(e)),io.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return to(this.auth,Lt(this._delegate,e))}async linkWithPhoneNumber(e,t){return no(this.auth,xr(this._delegate,e,t))}async linkWithPopup(e){return to(this.auth,Br(this._delegate,e,Ys))}async linkWithRedirect(e){return await Gs(De(this.auth)),ri(this._delegate,e,Ys)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return to(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return no(this.auth,Nr(this._delegate,e,t))}reauthenticateWithPopup(e){return to(this.auth,qr(this._delegate,e,Ys))}async reauthenticateWithRedirect(e){return await Gs(De(this.auth)),ti(this._delegate,e,Ys)}sendEmailVerification(e){return en(this._delegate,e)}async unlink(e){return await xt(this._delegate,e),this}updateEmail(e){return sn(this._delegate,e)}updatePassword(e){return on(this._delegate,e)}updatePhoneNumber(e){return Dr(this._delegate,e)}updateProfile(e){return rn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return tn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}io.USER_MAP=new WeakMap;
/**
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
 */
const so=T;class oo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;so(n,"invalid-api-key",{appName:e.name}),so(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Ys:void 0;this._delegate=t.initialize({options:{persistence:co(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?io.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Pe(this._delegate,e,t)}applyActionCode(e){return zt(this._delegate,e)}checkActionCode(e){return Gt(this._delegate,e)}confirmPasswordReset(e,t){return Bt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return to(this._delegate,Wt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Zt(this._delegate,e)}isSignInWithEmailLink(e){return Qt(this._delegate,e)}async getRedirectResult(){so(Fs(),this._delegate,"operation-not-supported-in-this-environment");const e=await si(this._delegate,Ys);return e?to(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Es(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=ao(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=ao(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Yt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(zs(this._delegate,e),e){case $s.SESSION:t=Rn;break;case $s.LOCAL:const e=await A(ir)._isAvailable();t=e?ir:On;break;case $s.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return to(this._delegate,kt(this._delegate))}signInWithCredential(e){return to(this._delegate,Pt(this._delegate,e))}signInWithCustomToken(e){return to(this._delegate,Vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return to(this._delegate,Ht(this._delegate,e,t))}signInWithEmailLink(e,t){return to(this._delegate,Jt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return no(this._delegate,Cr(this._delegate,e,t))}async signInWithPopup(e){return so(Fs(),this._delegate,"operation-not-supported-in-this-environment"),to(this._delegate,$r(this._delegate,e,Ys))}async signInWithRedirect(e){return so(Fs(),this._delegate,"operation-not-supported-in-this-environment"),await Gs(this._delegate),Zr(this._delegate,e,Ys)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Kt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function ao(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&io.getOrCreate(e));return{next:s,error:t,complete:n}}function co(e,t){const n=Ks(e,t);if("undefined"===typeof self||n.includes(ir)||n.push(ir),"undefined"!==typeof window)for(const r of[On,Rn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
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
 */oo.Persistence=$s;class uo{constructor(){this.providerId="phone",this._delegate=new Rr(Qs(r.Z.auth()))}static credential(e,t){return Rr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}uo.PHONE_SIGN_IN_METHOD=Rr.PHONE_SIGN_IN_METHOD,uo.PROVIDER_ID=Rr.PROVIDER_ID;
/**
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
 */
const lo=T;class ho{constructor(e,t,n=r.Z.app()){var i;lo(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
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
 */const fo="auth-compat";function po(e){e.INTERNAL.registerComponent(new c.wA(fo,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new oo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:lt,FacebookAuthProvider:pt,GithubAuthProvider:gt,GoogleAuthProvider:mt,OAuthProvider:ft,SAMLAuthProvider:bt,PhoneAuthProvider:uo,PhoneMultiFactorGenerator:Wi,RecaptchaVerifier:ho,TwitterAuthProvider:_t,Auth:oo,AuthCredential:Ue,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(ks,Ss)}po(r.Z)},621:function(e,t,n){"use strict";var r,i=n(180),s=n(238),o=n(463),a=n(333),c=n(444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function w(e,t,n){return e.call.apply(e.bind,arguments)}function b(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:b,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var k=0,S={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=k)){var e=g(this);delete S[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function x(e){e:{var t=Wn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function N(e){return Array.prototype.concat.apply([],arguments)}function O(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function D(e){return/^[\s\xa0]*$/.test(e)}var R,P=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function L(e,t){return-1!=e.indexOf(t)}function M(e,t){return e<t?-1:e>t?1:0}e:{var F=d.navigator;if(F){var V=F.userAgent;if(V){R=V;break e}}R=""}function U(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function j(e){const t={};for(const n in e)t[n]=e[n];return t}var $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<$.length;t++)n=$[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){return B[" "](e),e}function z(e){var t=re;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}B[" "]=f;var G,K=L(R,"Opera"),W=L(R,"Trident")||L(R,"MSIE"),H=L(R,"Edge"),Y=H||W,Q=L(R,"Gecko")&&!(L(R.toLowerCase(),"webkit")&&!L(R,"Edge"))&&!(L(R,"Trident")||L(R,"MSIE"))&&!L(R,"Edge"),J=L(R.toLowerCase(),"webkit")&&!L(R,"Edge");function X(){var e=d.document;return e?e.documentMode:void 0}e:{var Z="",ee=function(){var e=R;return Q?/rv:([^\);]+)(\)|;)/.exec(e):H?/Edge\/([\d\.]+)/.exec(e):W?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):J?/WebKit\/(\S+)/.exec(e):K?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ee&&(Z=ee?ee[1]:""),W){var te=X();if(null!=te&&te>parseFloat(Z)){G=String(te);break e}}G=Z}var ne,re={};function ie(){return z((function(){let e=0;const t=P(String(G)).split("."),n=P("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=M(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||M(0==i[2].length,0==s[2].length)||M(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&W){var se=X();ne=se||(parseInt(G,10)||void 0)}else ne=void 0;var oe=ne,ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function ce(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function ue(e,t){if(ce.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Q){e:{try{B(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:le[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ue.Z.h.call(this)}}ce.prototype.h=function(){this.defaultPrevented=!0},T(ue,ce);var le={2:"touch",3:"pen",4:"mouse"};ue.prototype.h=function(){ue.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var he="closure_listenable_"+(1e6*Math.random()|0),de=0;function fe(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++de,this.ca=this.fa=!1}function pe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function me(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=A(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(pe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ve(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}me.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ve(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new fe(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ye="closure_lm_"+(1e6*Math.random()|0),we={};function be(e,t,n,r,i){if(r&&r.once)return Te(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)be(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[he]?e.N(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!1,r,i)}function _e(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=m(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ye]=a=new me(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ie(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ae||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Se(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ie(){function e(n){return t.call(e.src,e.listener,n)}var t=Ae;return e}function Te(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Te(e,t[s],n,r,i);return null}return n=Ne(n),e&&e[he]?e.O(t,n,m(r)?!!r.capture:!!r,i):_e(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=m(r)?!!r.capture:!!r,n=Ne(n),e&&e[he]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ve(s,n,r,i),-1<n&&(pe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ve(t,n,r,i)),(n=-1<e?t[e]:null)&&ke(n))}function ke(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[he])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Se(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ye]=null)):pe(e)}}}function Se(e){return e in we?we[e]:we[e]="on"+e}function Ae(e,t){if(e.ca)e=!0;else{t=new ue(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ke(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ye],e instanceof me?e:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ne(e){return"function"===typeof e?e:(e[xe]||(e[xe]=function(t){return e.handleEvent(t)}),e[xe])}function Oe(){E.call(this),this.i=new me(this),this.P=this,this.I=null}function De(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ce(t,e);else if(t instanceof ce)t.target=t.target||e;else{var i=t;t=new ce(r,e),q(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Re(o,r,!0,t)&&i}if(o=t.g=e,i=Re(o,r,!0,t)&&i,i=Re(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Re(o,r,!1,t)&&i}function Re(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}T(Oe,E),Oe.prototype[he]=!0,Oe.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},Oe.prototype.M=function(){if(Oe.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)pe(n[r]);delete t.g[e],t.h--}}this.I=null},Oe.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Oe.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Pe=d.JSON.stringify;function Le(){var e=ze;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Me{constructor(){this.h=this.g=null}add(e,t){const n=Ve.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Ve=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ue),(e=>e.reset()));class Ue{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function je(e){d.setTimeout((()=>{throw e}),0)}function $e(e,t){Fe||qe(),Be||(Fe(),Be=!0),ze.add(e,t)}function qe(){var e=d.Promise.resolve(void 0);Fe=function(){e.then(Ge)}}var Be=!1,ze=new Me;function Ge(){for(var e;e=Le();){try{e.h.call(e.g)}catch(n){je(n)}var t=Ve;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Be=!1}function Ke(e,t){Oe.call(this),this.h=e||1,this.g=t||d,this.j=_(this.kb,this),this.l=Date.now()}function We(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function He(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function Ye(e){e.g=He((()=>{e.g=null,e.i&&(e.i=!1,Ye(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}T(Ke,Oe),r=Ke.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(We(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Ke.Z.M.call(this),We(this),delete this.g};class Qe extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ye(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(e){E.call(this),this.h=e,this.g={}}T(Je,E);var Xe=[];function Ze(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var s=be(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function et(e){U(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ke(e)}),e),e.g={}}function tt(){this.g=!0}function nt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function rt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function it(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+ot(e,n)+(r?" "+r:"")}))}function st(e,t){e.info((function(){return"TIMEOUT: "+t}))}function ot(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Pe(n)}catch(a){return t}}Je.prototype.M=function(){Je.Z.M.call(this),et(this)},Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tt.prototype.Aa=function(){this.g=!1},tt.prototype.info=function(){};var at={},ct=null;function ut(){return ct=ct||new Oe}function lt(e){ce.call(this,at.Ma,e)}function ht(e){const t=ut();De(t,new lt(t,e))}function dt(e,t){ce.call(this,at.STAT_EVENT,e),this.stat=t}function ft(e){const t=ut();De(t,new dt(t,e))}function pt(e,t){ce.call(this,at.Na,e),this.size=t}function mt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}at.Ma="serverreachability",T(lt,ce),at.STAT_EVENT="statevent",T(dt,ce),at.Na="timingevent",T(pt,ce);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},vt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function yt(){}function wt(e){return e.h||(e.h=e.i())}function bt(){}yt.prototype.h=null;var _t,It={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tt(){ce.call(this,"d")}function Et(){ce.call(this,"c")}function kt(){}function St(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Je(this),this.P=Ct,e=Y?125:void 0,this.W=new Ke(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new At}function At(){this.i=null,this.g="",this.h=!1}T(Tt,ce),T(Et,ce),T(kt,yt),kt.prototype.g=function(){return new XMLHttpRequest},kt.prototype.i=function(){return{}},_t=new kt;var Ct=45e3,xt={},Nt={};function Ot(e,t,n){e.K=1,e.v=nn(Qt(t)),e.s=n,e.U=!0,Dt(e,null)}function Dt(e,t){e.F=Date.now(),Mt(e),e.A=Qt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new At,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Qe(_(e.Ia,e,e.g),e.O)),Ze(e.V,e.g,"readystatechange",e.gb),t=e.H?j(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ht(1),nt(e.j,e.u,e.A,e.m,e.X,e.s)}function Rt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Lt(e,n),r==Nt){4==t&&(e.o=4,ft(14),i=!1),it(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,ft(15),it(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}it(e.j,e.m,r,null),$t(e,r)}Rt(e)&&r!=Nt&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ft(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,ft(11))):(it(e.j,e.m,n,"[Invalid Chunked Response]"),jt(e),Ut(e))}function Lt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Nt:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1,r+n>t.length?Nt:(t=t.substr(r,n),e.C=r+n,t)))}function Mt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=mt(_(e.eb,e),t)}function Vt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Ut(e){0==e.l.G||e.I||wr(e.l,e)}function jt(e){Vt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,We(e.W),et(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function $t(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Sn(n.i,e)))if(n.I=e.N,!e.J&&Sn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;yr(n),or(n)}mr(n),ft(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=mt(_(n.ab,n),6e3));if(1>=kn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else _r(n,11)}else if((e.J||n.g==e)&&yr(n),!D(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(L(e,"spdy")||L(e,"quic")||L(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(An(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,tn(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Tr(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Vt(a),Mt(a)),r.g=o}else pr(r);0<n.l.length&&ur(n)}else"stop"!=u[0]&&"close"!=u[0]||_r(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?_r(n,7):sr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ht(4)}catch(u){}}function qt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(p(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=qt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function zt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof zt)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Gt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Kt(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Kt(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Kt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=St.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Zn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const l=Zn(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Y||this.g&&(this.h.h||this.g.ga()||er(this.g)))){this.I||4!=l||7==t||ht(8==t||0>=h?3:2),Vt(this);var n=this.g.ba();this.N=n;t:if(Rt(this)){var r=er(this.g);e="";var i=r.length,s=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){jt(this),Ut(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,rt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ft(12),jt(this),Ut(this);break e}it(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$t(this,n)}this.U?(Pt(this,l,o),Y&&this.i&&3==l&&(Ze(this.V,this.W,"tick",this.fb),this.W.start())):(it(this.j,this.m,o,null),$t(this,o)),4==l&&jt(this),this.i&&!this.I&&(4==l?wr(this.l,this):(this.i=!1,Mt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ft(12)):(this.o=0,ft(13)),jt(this),Ut(this)}}}catch(l){}},r.fb=function(){if(this.g){var e=Zn(this.g),t=this.g.ga();this.C<t.length&&(Vt(this),Pt(this,e,t),this.i&&4!=e&&Mt(this))}},r.cancel=function(){this.I=!0,jt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(st(this.j,this.A),2!=this.K&&(ht(3),ft(17)),jt(this),this.o=2,Ut(this)):Ft(this,this.Y-e)},r=zt.prototype,r.R=function(){Gt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return Gt(this),this.g.concat()},r.get=function(e,t){return Kt(this.h,e)?this.h[e]:t},r.set=function(e,t){Kt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Wt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ht(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Yt){this.g=void 0!==t?t:e.g,Jt(this,e.j),this.s=e.s,Xt(this,e.i),Zt(this,e.m),this.l=e.l,t=e.h;var n=new pn;n.i=t.i,t.g&&(n.g=new zt(t.g),n.h=t.h),en(this,n),this.o=e.o}else e&&(n=String(e).match(Wt))?(this.g=!!t,Jt(this,n[1]||"",!0),this.s=on(n[2]||""),Xt(this,n[3]||"",!0),Zt(this,n[4]),this.l=on(n[5]||"",!0),en(this,n[6]||"",!0),this.o=on(n[7]||"")):(this.g=!!t,this.h=new pn(null,this.g))}function Qt(e){return new Yt(e)}function Jt(e,t,n){e.j=n?on(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xt(e,t,n){e.i=n?on(t,!0):t}function Zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function en(e,t,n){t instanceof pn?(e.h=t,bn(e.h,e.g)):(n||(t=an(t,dn)),e.h=new pn(t,e.g))}function tn(e,t,n){e.h.set(t,n)}function nn(e){return tn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function rn(e){return e instanceof Yt?Qt(e):new Yt(e,void 0)}function sn(e,t,n,r){var i=new Yt(null,void 0);return e&&Jt(i,e),t&&Xt(i,t),n&&Zt(i,n),r&&(i.l=r),i}function on(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function an(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,cn),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cn(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Yt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(an(t,un,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(an(t,un,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(an(n,"/"==n.charAt(0)?hn:ln,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",an(n,fn)),e.join("")};var un=/[#\/\?@]/g,ln=/[#\?:]/g,hn=/[#\?]/g,dn=/[#\?@]/g,fn=/#/g;function pn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mn(e){e.g||(e.g=new zt,e.h=0,e.i&&Ht(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){mn(e),t=wn(e,t),Kt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Kt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Gt(e)))}function vn(e,t){return mn(e),t=wn(e,t),Kt(e.g.h,t)}function yn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(wn(e,t),O(n)),e.h+=n.length)}function wn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function bn(e,t){t&&!e.j&&(mn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),yn(this,n,e))}),e)),e.j=t}r=pn.prototype,r.add=function(e,t){mn(this),this.i=null,e=wn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){mn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){mn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){mn(this);var t=[];if("string"===typeof e)vn(this,e)&&(t=N(t,this.g.get(wn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=N(t,e[n])}return t},r.set=function(e,t){return mn(this),this.i=null,e=wn(this,e),vn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var _n=class{constructor(e,t){this.h=e,this.g=t}};function In(e){this.l=e||Tn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ea&&d.g.Ea()&&d.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function kn(e){return e.h?1:e.g?e.g.size:0}function Sn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function An(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function xn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return O(e.i)}function Nn(){}function On(){this.g=new Nn}function Dn(e,t,n){const r=n||"";try{Bt(e,(function(e,n){let i=e;m(e)&&(i=Pe(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rn(e,t){const n=new tt;if(d.Image){const r=new Image;r.onload=I(Pn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=I(Pn,n,r,"TestLoadImage: error",!1,t),r.onabort=I(Pn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=I(Pn,n,r,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Pn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Ln(e){this.l=e.$b||null,this.j=e.ib||!1}function Mn(e,t){Oe.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}In.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Nn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},Nn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},T(Ln,yt),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(e){return function(){return e}}({}),T(Mn,Oe);var Fn=0;function Vn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Un(e){e.readyState=4,e.l=null,e.j=null,e.A=null,jn(e)}function jn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Mn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,jn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jn(this)),this.g&&(this.readyState=3,jn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Un(this):jn(this),3==this.readyState&&Vn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,Un(this))},r.Ta=function(e){this.g&&(this.response=e,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var $n=d.JSON.parse;function qn(e){Oe.call(this),this.headers=new zt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}T(qn,Oe);var Bn="",zn=/^https?$/i,Gn=["POST","PUT"];function Kn(e){return W&&ie()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Wn(e){return"content-type"==e.toLowerCase()}function Hn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Yn(e),Jn(e)}function Yn(e){e.D||(e.D=!0,De(e,"complete"),De(e,"error"))}function Qn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=Zn(e)||2!=e.ba()))if(e.v&&4==Zn(e))He(e.Fa,0,e);else if(De(e,"readystatechange"),4==Zn(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Wt)[1]||null;if(!i&&d.self&&d.self.location){var s=d.self.location.protocol;i=s.substr(0,s.length-1)}r=!zn.test(i?i.toLowerCase():"")}n=r}if(n)De(e,"complete"),De(e,"success");else{e.m=6;try{var o=2<Zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Yn(e)}}finally{Jn(e)}}}function Jn(e,t){if(e.g){Xn(e);const r=e.g,i=e.C[0]?f:null;e.g=null,e.C=null,t||De(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function Zn(e){return e.g?e.g.readyState:0}function er(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function tr(e){let t="";return U(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function nr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tr(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):tn(e,t,n))}function rr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ir(e){this.za=0,this.l=[],this.h=new tt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=rr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=rr("baseRetryDelayMs",5e3,e),this.$a=rr("retryDelaySeedMs",1e4,e),this.Ya=rr("forwardChannelMaxRetries",2,e),this.ra=rr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new In(e&&e.concurrentRequestLimit),this.Ca=new On,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function sr(e){if(ar(e),3==e.G){var t=e.V++,n=Qt(e.F);tn(n,"SID",e.J),tn(n,"RID",t),tn(n,"TYPE","terminate"),dr(e,n),t=new St(e,e.h,t,void 0),t.K=2,t.v=nn(Qt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Mt(t)}Ir(e)}function or(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function ar(e){or(e),e.u&&(d.clearTimeout(e.u),e.u=null),yr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function cr(e,t){e.l.push(new _n(e.Za++,t)),3==e.G&&ur(e)}function ur(e){En(e.i)||e.m||(e.m=!0,$e(e.Ha,e),e.C=0)}function lr(e,t){return!(kn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=mt(_(e.Ha,e,t),br(e,e.C)),e.C++,!0))}function hr(e,t){var n;n=t?t.m:e.V++;const r=Qt(e.F);tn(r,"SID",e.J),tn(r,"RID",n),tn(r,"AID",e.U),dr(e,r),e.o&&e.s&&nr(r,e.o,e.s),n=new St(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=fr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),An(e.i,n),Ot(n,r,t)}function dr(e,t){e.j&&Bt({},(function(e,n){tn(t,n,e)}))}function fr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Dn(a,e,"req"+n+"_")}catch(Zr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function pr(e){e.g||e.u||(e.Y=1,$e(e.Ga,e),e.A=0)}function mr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=mt(_(e.Ga,e),br(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function vr(e){e.g=new St(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Qt(e.oa);tn(t,"RID","rpc"),tn(t,"SID",e.J),tn(t,"CI",e.N?"0":"1"),tn(t,"AID",e.U),dr(e,t),tn(t,"TYPE","xmlhttp"),e.o&&e.s&&nr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=nn(Qt(t)),n.s=null,n.U=!0,Dt(n,e)}function yr(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function wr(e,t){var n=null;if(e.g==t){yr(e),gr(e),e.g=null;var r=2}else{if(!Sn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ut(),De(r,new pt(r,n,t,i)),ur(e)}else pr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&lr(e,t)||2==r&&mr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_r(e,5);break;case 4:_r(e,10);break;case 3:_r(e,6);break;default:_r(e,2)}}function br(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function _r(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=_(e.jb,e);n||(n=new Yt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Jt(n,"https"),nn(n)),Rn(n.toString(),r)}else ft(2);e.G=0,e.j&&e.j.va(t),Ir(e),ar(e)}function Ir(e){e.G=0,e.I=-1,e.j&&(0==xn(e.i).length&&0==e.l.length||(e.i.i.length=0,O(e.l),e.l.length=0),e.j.ua())}function Tr(e,t,n){let r=rn(n);if(""!=r.i)t&&Xt(r,t+"."+r.i),Zt(r,r.m);else{const e=d.location;r=sn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&U(e.aa,(function(e,t){tn(r,t,e)})),t=e.D,n=e.sa,t&&n&&tn(r,t,n),tn(r,"VER",e.ma),dr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new qn(new Ln({ib:!0})):new qn(e.qa),t.L=e.H,t}function kr(){}function Sr(){if(W&&!(10<=Number(oe)))throw Error("Environmental error: no available transport.")}function Ar(e,t){Oe.call(this),this.g=new ir(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!D(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!D(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Nr(this)}function Cr(e){Tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function xr(){Et.call(this),this.status=1}function Nr(e){this.g=e}r=qn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_t.g(),this.C=this.u?wt(this.u):wt(_t),this.g.onreadystatechange=_(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Hn(this,s)}e=n||"";const i=new zt(this.headers);r&&Bt(r,(function(e,t){i.set(t,e)})),r=x(i.T()),n=d.FormData&&e instanceof d.FormData,!(0<=A(Gn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Kn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.pa,this)):this.A=He(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Hn(this,s)}},r.pa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,De(this,"complete"),De(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),qn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Qn(this):this.cb())},r.cb=function(){Qn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),$n(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=ir.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new St(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=j(s),q(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=fr(this,i,t),n=Qt(this.F),tn(n,"RID",e),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),dr(this,n),this.o&&s&&nr(n,this.o,s),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",t),tn(n,"SID","null"),i.$=!0,Ot(i,n,null)):Ot(i,n,t),this.G=2}}else 3==this.G&&(e?hr(this,e):0==this.l.length||En(this.i)||hr(this))},r.Ga=function(){if(this.u=null,vr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=mt(_(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ft(10),or(this),vr(this))},r.ab=function(){null!=this.v&&(this.v=null,or(this),mr(this),ft(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),ft(2)):(this.h.info("Failed to ping google.com"),ft(1))},r=kr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(e,t){return new Ar(e,t)},T(Ar,Oe),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),$e(_(e.hb,e,t))),ft(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Tr(e,null,e.W),ur(e)},Ar.prototype.close=function(){sr(this.g)},Ar.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,cr(this.g,t)}else this.v?(t={},t.__data__=Pe(e),cr(this.g,t)):cr(this.g,e)},Ar.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,Ar.Z.M.call(this)},T(Cr,Tt),T(xr,Et),T(Nr,kr),Nr.prototype.xa=function(){De(this.g,"a")},Nr.prototype.wa=function(e){De(this.g,new Cr(e))},Nr.prototype.va=function(e){De(this.g,new xr(e))},Nr.prototype.ua=function(){De(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,vt.COMPLETE="complete",bt.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",Oe.prototype.listen=Oe.prototype.N,qn.prototype.listenOnce=qn.prototype.O,qn.prototype.getLastError=qn.prototype.La,qn.prototype.getLastErrorCode=qn.prototype.Da,qn.prototype.getStatus=qn.prototype.ba,qn.prototype.getResponseJson=qn.prototype.Qa,qn.prototype.getResponseText=qn.prototype.ga,qn.prototype.send=qn.prototype.ea;var Or=l.createWebChannelTransport=function(){return new Sr},Dr=l.getStatEventTarget=function(){return ut()},Rr=l.ErrorCode=gt,Pr=l.EventType=vt,Lr=l.Event=at,Mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Vr=l.WebChannel=bt,Ur=l.XhrIo=qn;const jr="@firebase/firestore";
/**
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
 */class $r{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$r.UNAUTHENTICATED=new $r(null),$r.GOOGLE_CREDENTIALS=new $r("google-credentials-uid"),$r.FIRST_PARTY=new $r("first-party-uid"),$r.MOCK_USER=new $r("mock-user");
/**
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
 */
let qr="9.6.10";
/**
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
 */const Br=new a.Yd("@firebase/firestore");function zr(){return Br.logLevel}function Gr(e){Br.setLogLevel(e)}function Kr(e,...t){if(Br.logLevel<=a["in"].DEBUG){const n=t.map(Yr);Br.debug(`Firestore (${qr}): ${e}`,...n)}}function Wr(e,...t){if(Br.logLevel<=a["in"].ERROR){const n=t.map(Yr);Br.error(`Firestore (${qr}): ${e}`,...n)}}function Hr(e,...t){if(Br.logLevel<=a["in"].WARN){const n=t.map(Yr);Br.warn(`Firestore (${qr}): ${e}`,...n)}}function Yr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
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
 */var t}
/**
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
 */function Qr(e="Unexpected state"){const t=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+e;throw Wr(t),new Error(t)}function Jr(e,t){e||Qr()}function Xr(e,t){e||Qr()}function Zr(e,t){return e}
/**
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
 */const ei={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ti extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class ni{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class ri{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ii{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($r.UNAUTHENTICATED)))}shutdown(){}}class si{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class oi{constructor(e){this.t=e,this.currentUser=$r.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ni;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ni,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Kr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Kr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ni)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Kr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jr("string"==typeof t.accessToken),new ri(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jr(null===e||"string"==typeof e),new $r(e)}}class ai{constructor(e,t,n){this.type="FirstParty",this.user=$r.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ci{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ai(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t($r.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ui{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class li{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Kr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Kr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Kr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Kr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jr("string"==typeof e.token),this.p=e.token,new ui(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
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
 */function di(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */hi.A=-1;class fi{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=di(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function pi(e,t){return e<t?-1:e>t?1:0}function mi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function gi(e){return e+"\0"}
/**
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
 */class vi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ti(ei.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ti(ei.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vi.fromMillis(Date.now())}static fromDate(e){return vi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new vi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pi(this.nanoseconds,e.nanoseconds):pi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class yi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new yi(e)}static min(){return new yi(new vi(0,0))}static max(){return new yi(new vi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function wi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _i(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Ii{constructor(e,t,n){void 0===t?t=0:t>e.length&&Qr(),void 0===n?n=e.length-t:n>e.length-t&&Qr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ii.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ii{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ei=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ki extends Ii{construct(e,t,n){return new ki(e,t,n)}static isValidIdentifier(e){return Ei.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ki.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ki(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ti(ei.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ti(ei.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new ti(ei.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ki(t)}static emptyPath(){return new ki([])}}
/**
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
 */class Si{constructor(e){this.fields=e,e.sort(ki.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */function Ai(){return"undefined"!=typeof atob}
/**
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
 */class Ci{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ci(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ci(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ci.EMPTY_BYTE_STRING=new Ci("");const xi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(e){if(Jr(!!e),"string"==typeof e){let t=0;const n=xi.exec(e);if(Jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Oi(e.seconds),nanos:Oi(e.nanos)}}function Oi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Di(e){return"string"==typeof e?Ci.fromBase64String(e):Ci.fromUint8Array(e)}
/**
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
 */function Ri(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Pi(e){const t=e.mapValue.fields.__previous_value__;return Ri(t)?Pi(t):t}function Li(e){const t=Ni(e.mapValue.fields.__local_write_time__.timestampValue);return new vi(t.seconds,t.nanos)}
/**
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
 */class Mi{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Fi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Fi&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */function Vi(e){return null==e}function Ui(e){return 0===e&&1/e==-1/0}function ji(e){return"number"==typeof e&&Number.isInteger(e)&&!Ui(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */class $i{constructor(e){this.path=e}static fromPath(e){return new $i(Ti.fromString(e))}static fromName(e){return new $i(Ti.fromString(e).popFirst(5))}static empty(){return new $i(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $i(new Ti(e.slice()))}}
/**
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
 */const qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bi={nullValue:"NULL_VALUE"};function zi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ri(e)?4:is(e)?9:10:Qr()}function Gi(e,t){if(e===t)return!0;const n=zi(e);if(n!==zi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Li(e).isEqual(Li(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ni(e.timestampValue),r=Ni(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Di(e.bytesValue).isEqual(Di(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Oi(e.geoPointValue.latitude)===Oi(t.geoPointValue.latitude)&&Oi(e.geoPointValue.longitude)===Oi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Oi(e.integerValue)===Oi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Oi(e.doubleValue),r=Oi(t.doubleValue);return n===r?Ui(n)===Ui(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return mi(e.arrayValue.values||[],t.arrayValue.values||[],Gi);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wi(n)!==wi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Gi(n[i],r[i])))return!1;return!0}(e,t);default:return Qr()}}function Ki(e,t){return void 0!==(e.values||[]).find((e=>Gi(e,t)))}function Wi(e,t){if(e===t)return 0;const n=zi(e),r=zi(t);if(n!==r)return pi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Oi(e.integerValue||e.doubleValue),r=Oi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(Li(e),Li(t));case 5:return pi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Di(e),r=Di(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=pi(n[i],r[i]);if(0!==e)return e}return pi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=pi(Oi(e.latitude),Oi(t.latitude));return 0!==n?n:pi(Oi(e.longitude),Oi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Wi(n[i],r[i]);if(e)return e}return pi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=pi(r[o],s[o]);if(0!==e)return e;const t=Wi(n[r[o]],i[s[o]]);if(0!==t)return t}return pi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Qr()}}function Hi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return pi(e,t);const n=Ni(e),r=Ni(t),i=pi(n.seconds,r.seconds);return 0!==i?i:pi(n.nanos,r.nanos)}function Yi(e){return Qi(e)}function Qi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ni(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Di(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,$i.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Qi(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Qi(e.fields[i])}`;return n+"}"}(e.mapValue):Qr();var t,n}function Ji(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Xi(e){return!!e&&"integerValue"in e}function Zi(e){return!!e&&"arrayValue"in e}function es(e){return!!e&&"nullValue"in e}function ts(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ns(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=rs(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ss(e,t){return void 0===e?t:void 0===t||Wi(e,t)>0?e:t}function os(e,t){return void 0===e?t:void 0===t||Wi(e,t)<0?e:t}
/**
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
 */class as{constructor(e){this.value=e}static empty(){return new as({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(t)}setAll(e){let t=ki.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=rs(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new as(rs(this.value))}}function cs(e){const t=[];return bi(e.fields,((e,n)=>{const r=new ki([e]);if(ns(n)){const e=cs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Si(t)
/**
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
 */}class us{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new us(e,0,yi.min(),yi.min(),as.empty(),0)}static newFoundDocument(e,t,n){return new us(e,1,t,yi.min(),n,0)}static newNoDocument(e,t){return new us(e,2,t,yi.min(),as.empty(),0)}static newUnknownDocument(e,t){return new us(e,3,t,yi.min(),as.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=as.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=as.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof us&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new us(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class ls{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function hs(e){return e.fields.find((e=>2===e.kind))}function ds(e){return e.fields.filter((e=>2!==e.kind))}ls.UNKNOWN_ID=-1;class fs{constructor(e,t){this.fieldPath=e,this.kind=t}}class ps{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ps(0,vs.min())}}function ms(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=yi.fromTimestamp(1e9===r?new vi(n+1,0):new vi(n,r));return new vs(i,$i.empty(),t)}function gs(e){return new vs(e.readTime,e.key,-1)}class vs{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new vs(yi.min(),$i.empty(),-1)}static max(){return new vs(yi.max(),$i.empty(),-1)}}function ys(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=$i.comparator(e.documentKey,t.documentKey),0!==n?n:pi(e.largestBatchId,t.largestBatchId))}
/**
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
 */class ws{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.P=null}}function bs(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ws(e,t,n,r,i,s,o)}function _s(e){const t=Zr(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Yi(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Vi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Yi(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Yi(e))).join(",")),t.P=e}return t.P}function Is(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Yi(t.value)}`;var t})).join(", ")}]`),Vi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Yi(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Yi(e))).join(",")),`Target(${t})`}function Ts(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Fs(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Gi(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Us(e.startAt,t.startAt)&&Us(e.endAt,t.endAt)}function Es(e){return $i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function ks(e,t){return e.filters.filter((e=>e instanceof Ss&&e.field.isEqual(t)))}class Ss extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new As(e,t,n):"array-contains"===t?new Os(e,n):"in"===t?new Ds(e,n):"not-in"===t?new Rs(e,n):"array-contains-any"===t?new Ps(e,n):new Ss(e,t,n)}static V(e,t,n){return"in"===t?new Cs(e,n):new xs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Wi(t,this.value)):null!==t&&zi(this.value)===zi(t)&&this.v(Wi(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Qr()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class As extends Ss{constructor(e,t,n){super(e,t,n),this.key=$i.fromName(n.referenceValue)}matches(e){const t=$i.comparator(e.key,this.key);return this.v(t)}}class Cs extends Ss{constructor(e,t){super(e,"in",t),this.keys=Ns("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xs extends Ss{constructor(e,t){super(e,"not-in",t),this.keys=Ns("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ns(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>$i.fromName(e.referenceValue)))}class Os extends Ss{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zi(t)&&Ki(t.arrayValue,this.value)}}class Ds extends Ss{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Ki(this.value.arrayValue,t)}}class Rs extends Ss{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Ki(this.value.arrayValue,t)}}class Ps extends Ss{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Ki(this.value.arrayValue,e)))}}class Ls{constructor(e,t){this.position=e,this.inclusive=t}}class Ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Vs(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?$i.comparator($i.fromName(o.referenceValue),n.key):Wi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Us(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Gi(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class js{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function $s(e,t,n,r,i,s,o,a){return new js(e,t,n,r,i,s,o,a)}function qs(e){return new js(e)}function Bs(e){return!Vi(e.limit)&&"F"===e.limitType}function zs(e){return!Vi(e.limit)&&"L"===e.limitType}function Gs(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ks(e){for(const t of e.filters)if(t.S())return t.field;return null}function Ws(e){return null!==e.collectionGroup}function Hs(e){const t=Zr(e);if(null===t.D){t.D=[];const e=Ks(t),n=Gs(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new Ms(e)),t.D.push(new Ms(ki.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new Ms(ki.keyField(),e))}}}return t.D}function Ys(e){const t=Zr(e);if(!t.C)if("F"===t.limitType)t.C=bs(t.path,t.collectionGroup,Hs(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Hs(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Ms(i.field,t))}const n=t.endAt?new Ls(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new Ls(t.startAt.position,!t.startAt.inclusive):null;t.C=bs(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function Qs(e,t,n){return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Js(e,t){return Ts(Ys(e),Ys(t))&&e.limitType===t.limitType}function Xs(e){return`${_s(Ys(e))}|lt:${e.limitType}`}function Zs(e){return`Query(target=${Is(Ys(e))}; limitType=${e.limitType})`}function eo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):$i.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Vs(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Hs(e),t))&&!(e.endAt&&!function(e,t,n){const r=Vs(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Hs(e),t))}(e,t)}function to(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function no(e){return(t,n)=>{let r=!1;for(const i of Hs(e)){const e=ro(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function ro(e,t,n){const r=e.field.isKeyField()?$i.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Wi(r,i):Qr()}
/**
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
 */(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Qr()}}
/**
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
 */function io(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ui(t)?"-0":t}}function so(e){return{integerValue:""+e}}function oo(e,t){return ji(t)?so(t):io(e,t)}
/**
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
 */class ao{constructor(){this._=void 0}}function co(e,t,n){return e instanceof ho?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof fo?po(e,t):e instanceof mo?go(e,t):function(e,t){const n=lo(e,t),r=yo(n)+yo(e.k);return Xi(n)&&Xi(e.k)?so(r):io(e.M,r)}(e,t)}function uo(e,t,n){return e instanceof fo?po(e,t):e instanceof mo?go(e,t):n}function lo(e,t){return e instanceof vo?Xi(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class ho extends ao{}class fo extends ao{constructor(e){super(),this.elements=e}}function po(e,t){const n=wo(t);for(const r of e.elements)n.some((e=>Gi(e,r)))||n.push(r);return{arrayValue:{values:n}}}class mo extends ao{constructor(e){super(),this.elements=e}}function go(e,t){let n=wo(t);for(const r of e.elements)n=n.filter((e=>!Gi(e,r)));return{arrayValue:{values:n}}}class vo extends ao{constructor(e,t){super(),this.M=e,this.k=t}}function yo(e){return Oi(e.integerValue||e.doubleValue)}function wo(e){return Zi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class bo{constructor(e,t){this.field=e,this.transform=t}}function _o(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof fo&&t instanceof fo||e instanceof mo&&t instanceof mo?mi(e.elements,t.elements,Gi):e instanceof vo&&t instanceof vo?Gi(e.k,t.k):e instanceof ho&&t instanceof ho}(e.transform,t.transform)}class Io{constructor(e,t){this.version=e,this.transformResults=t}}class To{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new To}static exists(e){return new To(void 0,e)}static updateTime(e){return new To(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class ko{}function So(e,t,n){e instanceof Oo?function(e,t,n){const r=e.value.clone(),i=Po(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Do?function(e,t,n){if(!Eo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Po(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Ro(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ao(e,t,n){e instanceof Oo?function(e,t,n){if(!Eo(e.precondition,t))return;const r=e.value.clone(),i=Lo(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(No(t),r).setHasLocalMutations()}(e,t,n):e instanceof Do?function(e,t,n){if(!Eo(e.precondition,t))return;const r=Lo(e.fieldTransforms,n,t),i=t.data;i.setAll(Ro(e)),i.setAll(r),t.convertToFoundDocument(No(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Eo(e.precondition,t)&&t.convertToNoDocument(yi.min())}(e,t)}function Co(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=lo(r.transform,e||null);null!=i&&(null==n&&(n=as.empty()),n.set(r.field,i))}return n||null}function xo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&mi(e,t,((e,t)=>_o(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function No(e){return e.isFoundDocument()?e.version:yi.min()}class Oo extends ko{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Do extends ko{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ro(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Po(e,t,n){const r=new Map;Jr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,uo(o,a,n[i]))}return r}function Lo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,co(e,s,t))}return r}class Mo extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Fo extends ko{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Vo{constructor(e){this.count=e}}
/**
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
 */var Uo,jo;function $o(e){switch(e){default:return Qr();case ei.CANCELLED:case ei.UNKNOWN:case ei.DEADLINE_EXCEEDED:case ei.RESOURCE_EXHAUSTED:case ei.INTERNAL:case ei.UNAVAILABLE:case ei.UNAUTHENTICATED:return!1;case ei.INVALID_ARGUMENT:case ei.NOT_FOUND:case ei.ALREADY_EXISTS:case ei.PERMISSION_DENIED:case ei.FAILED_PRECONDITION:case ei.ABORTED:case ei.OUT_OF_RANGE:case ei.UNIMPLEMENTED:case ei.DATA_LOSS:return!0}}function qo(e){if(void 0===e)return Wr("GRPC error has no .code"),ei.UNKNOWN;switch(e){case Uo.OK:return ei.OK;case Uo.CANCELLED:return ei.CANCELLED;case Uo.UNKNOWN:return ei.UNKNOWN;case Uo.DEADLINE_EXCEEDED:return ei.DEADLINE_EXCEEDED;case Uo.RESOURCE_EXHAUSTED:return ei.RESOURCE_EXHAUSTED;case Uo.INTERNAL:return ei.INTERNAL;case Uo.UNAVAILABLE:return ei.UNAVAILABLE;case Uo.UNAUTHENTICATED:return ei.UNAUTHENTICATED;case Uo.INVALID_ARGUMENT:return ei.INVALID_ARGUMENT;case Uo.NOT_FOUND:return ei.NOT_FOUND;case Uo.ALREADY_EXISTS:return ei.ALREADY_EXISTS;case Uo.PERMISSION_DENIED:return ei.PERMISSION_DENIED;case Uo.FAILED_PRECONDITION:return ei.FAILED_PRECONDITION;case Uo.ABORTED:return ei.ABORTED;case Uo.OUT_OF_RANGE:return ei.OUT_OF_RANGE;case Uo.UNIMPLEMENTED:return ei.UNIMPLEMENTED;case Uo.DATA_LOSS:return ei.DATA_LOSS;default:return Qr()}}(jo=Uo||(Uo={}))[jo.OK=0]="OK",jo[jo.CANCELLED=1]="CANCELLED",jo[jo.UNKNOWN=2]="UNKNOWN",jo[jo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jo[jo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jo[jo.NOT_FOUND=5]="NOT_FOUND",jo[jo.ALREADY_EXISTS=6]="ALREADY_EXISTS",jo[jo.PERMISSION_DENIED=7]="PERMISSION_DENIED",jo[jo.UNAUTHENTICATED=16]="UNAUTHENTICATED",jo[jo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jo[jo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jo[jo.ABORTED=10]="ABORTED",jo[jo.OUT_OF_RANGE=11]="OUT_OF_RANGE",jo[jo.UNIMPLEMENTED=12]="UNIMPLEMENTED",jo[jo.INTERNAL=13]="INTERNAL",jo[jo.UNAVAILABLE=14]="UNAVAILABLE",jo[jo.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class Bo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return _i(this.inner)}size(){return this.innerSize}}
/**
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
 */class zo{constructor(e,t){this.comparator=e,this.root=t||Ko.EMPTY}insert(e,t){return new zo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ko.BLACK,null,null))}remove(e){return new zo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ko.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ko{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ko.RED,this.left=null!=r?r:Ko.EMPTY,this.right=null!=i?i:Ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ko(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ko.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ko.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Qr();if(this.right.isRed())throw Qr();const e=this.left.check();if(e!==this.right.check())throw Qr();return e+(this.isRed()?0:1)}}Ko.EMPTY=null,Ko.RED=!0,Ko.BLACK=!1,Ko.EMPTY=new class{constructor(){this.size=0}get key(){throw Qr()}get value(){throw Qr()}get color(){throw Qr()}get left(){throw Qr()}get right(){throw Qr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ko(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Wo{constructor(e){this.comparator=e,this.data=new zo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(e){return new Ho(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Wo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Wo(this.comparator);return t.data=e,t}}class Ho{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Yo(e){return e.hasNext()?e.getNext():void 0}
/**
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
 */const Qo=new zo($i.comparator);function Jo(){return Qo}const Xo=new zo($i.comparator);function Zo(){return Xo}function ea(){return new Bo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ta=new zo($i.comparator),na=new Wo($i.comparator);function ra(...e){let t=na;for(const n of e)t=t.add(n);return t}const ia=new Wo(pi);function sa(){return ia}
/**
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
 */class oa{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,aa.createSynthesizedTargetChangeForCurrentChange(e,t)),new oa(yi.min(),n,sa(),Jo(),ra())}}class aa{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new aa(Ci.EMPTY_BYTE_STRING,t,ra(),ra(),ra())}}
/**
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
 */class ca{constructor(e,t,n,r){this.O=e,this.removedTargetIds=t,this.key=n,this.F=r}}class ua{constructor(e,t){this.targetId=e,this.$=t}}class la{constructor(e,t,n=Ci.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ha{constructor(){this.B=0,this.L=pa(),this.U=Ci.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return 0!==this.B}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=ra(),t=ra(),n=ra();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Qr()}})),new aa(this.U,this.q,e,t,n)}J(){this.G=!1,this.L=pa()}Y(e,t){this.G=!0,this.L=this.L.insert(e,t)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class da{constructor(e){this.nt=e,this.st=new Map,this.it=Jo(),this.rt=fa(),this.ot=new Wo(pi)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.K||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.K||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Qr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.$.count,r=this.wt(t);if(r){const e=r.target;if(Es(e))if(0===n){const n=new $i(e.path);this.ct(t,n,us.newNoDocument(n,yi.min()))}else Jr(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Es(i.target)){const t=new $i(i.target.path);null!==this.it.get(t)||this.It(r,t)||this.ct(r,t,us.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=ra();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new oa(e,t,this.ot,this.it,n);return this.it=Jo(),this.rt=fa(),this.ot=new Wo(pi),r}at(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new ha,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new Wo(pi),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Kr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new ha),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function fa(){return new zo($i.comparator)}function pa(){return new zo($i.comparator)}
/**
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
 */const ma=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ga=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class va{constructor(e,t){this.databaseId=e,this.N=t}}function ya(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wa(e,t){return e.N?t.toBase64():t.toUint8Array()}function ba(e,t){return ya(e,t.toTimestamp())}function _a(e){return Jr(!!e),yi.fromTimestamp(function(e){const t=Ni(e);return new vi(t.seconds,t.nanos)}(e))}function Ia(e,t){return function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Ta(e){const t=Ti.fromString(e);return Jr(Ya(t)),t}function Ea(e,t){return Ia(e.databaseId,t.path)}function ka(e,t){const n=Ta(t);if(n.get(1)!==e.databaseId.projectId)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ti(ei.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new $i(xa(n))}function Sa(e,t){return Ia(e.databaseId,t)}function Aa(e){const t=Ta(e);return 4===t.length?Ti.emptyPath():xa(t)}function Ca(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xa(e){return Jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Na(e,t,n){return{name:Ea(e,t),fields:n.value.mapValue.fields}}function Oa(e,t,n){const r=ka(e,t.name),i=_a(t.updateTime),s=new as({mapValue:{fields:t.fields}}),o=us.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Da(e,t){return"found"in t?function(e,t){Jr(!!t.found),t.found.name,t.found.updateTime;const n=ka(e,t.found.name),r=_a(t.found.updateTime),i=new as({mapValue:{fields:t.found.fields}});return us.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Jr(!!t.missing),Jr(!!t.readTime);const n=ka(e,t.missing),r=_a(t.readTime);return us.newNoDocument(n,r)}(e,t):Qr()}function Ra(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Qr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.N?(Jr(void 0===t||"string"==typeof t),Ci.fromBase64String(t||"")):(Jr(void 0===t||t instanceof Uint8Array),Ci.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ei.UNKNOWN:qo(e.code);return new ti(t,e.message||"")}(o);n=new la(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ka(e,r.document.name),s=_a(r.document.updateTime),o=new as({mapValue:{fields:r.document.fields}}),a=us.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ca(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ka(e,r.document),s=r.readTime?_a(r.readTime):yi.min(),o=us.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ca([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ka(e,r.document),s=r.removedTargetIds||[];n=new ca([],s,i,null)}else{if(!("filter"in t))return Qr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Vo(r),s=e.targetId;n=new ua(s,i)}}return n}function Pa(e,t){let n;if(t instanceof Oo)n={update:Na(e,t.key,t.value)};else if(t instanceof Mo)n={delete:Ea(e,t.key)};else if(t instanceof Do)n={update:Na(e,t.key,t.data),updateMask:Ha(t.fieldMask)};else{if(!(t instanceof Fo))return Qr();n={verify:Ea(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof ho)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof fo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof mo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vo)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Qr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ba(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Qr()}(e,t.precondition)),n}function La(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?To.updateTime(_a(e.updateTime)):void 0!==e.exists?To.exists(e.exists):To.none()}(t.currentDocument):To.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Jr("REQUEST_TIME"===t.setToServerValue),n=new ho;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new fo(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new mo(e)}else"increment"in t?n=new vo(e,t.increment):Qr();const r=ki.fromServerFormat(t.fieldPath);return new bo(r,n)}(e,t))):[];if(t.update){t.update.name;const i=ka(e,t.update.name),s=new as({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Si(t.map((e=>ki.fromServerFormat(e))))}(t.updateMask);return new Do(i,s,e,n,r)}return new Oo(i,s,n,r)}if(t.delete){const r=ka(e,t.delete);return new Mo(r,n)}if(t.verify){const r=ka(e,t.verify);return new Fo(r,n)}return Qr()}function Ma(e,t){return e&&e.length>0?(Jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?_a(e.updateTime):_a(t);return n.isEqual(yi.min())&&(n=_a(t)),new Io(n,e.transformResults||[])}(e,t)))):[]}function Fa(e,t){return{documents:[Sa(e,t.path)]}}function Va(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Sa(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Sa(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ts(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NAN"}};if(es(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ts(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NOT_NAN"}};if(es(e.value))return{unaryFilter:{field:za(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:za(e.field),op:Ba(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:za(e.field),direction:qa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.N||Vi(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ua(e){let t=Aa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=$a(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ms(Ga(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Vi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ls(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ls(n,t)}(n.endAt)),$s(t,i,o,s,a,"F",c,u)}function ja(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Qr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function $a(e){return e?void 0!==e.unaryFilter?[Wa(e)]:void 0!==e.fieldFilter?[Ka(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>$a(e))).reduce(((e,t)=>e.concat(t))):Qr():[]}function qa(e){return ma[e]}function Ba(e){return ga[e]}function za(e){return{fieldPath:e.canonicalString()}}function Ga(e){return ki.fromServerFormat(e.fieldPath)}function Ka(e){return Ss.create(Ga(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Wa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ga(e.unaryFilter.field);return Ss.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ga(e.unaryFilter.field);return Ss.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ga(e.unaryFilter.field);return Ss.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ga(e.unaryFilter.field);return Ss.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Qr()}}function Ha(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ya(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */function Qa(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Xa(t)),t=Ja(e.get(n),t);return Xa(t)}function Ja(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Xa(e){return e+""}function Za(e){const t=e.length;if(Jr(t>=2),2===t)return Jr(""===e.charAt(0)&&""===e.charAt(1)),Ti.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Qr(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Qr()}s=t+2}return new Ti(r)}
/**
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
 */const ec=["userId","batchId"];
/**
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
 */function tc(e,t){return[e,Qa(t)]}function nc(e,t,n){return[e,Qa(t),n]}const rc={},ic=["prefixPath","collectionGroup","readTime","documentId"],sc=["prefixPath","collectionGroup","documentId"],oc=["collectionGroup","readTime","prefixPath","documentId"],ac=["canonicalId","targetId"],cc=["targetId","path"],uc=["path","targetId"],lc=["collectionId","parent"],hc=["indexId","uid"],dc=["uid","sequenceNumber"],fc=["indexId","uid","arrayValue","directionalValue","documentKey"],pc=["indexId","uid","documentKey"],mc=["userId","collectionPath","documentId"],gc=["userId","collectionPath","largestBatchId"],vc=["userId","collectionGroup","largestBatchId"],yc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],wc=[...yc,"documentOverlays"],bc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_c=[...bc,"indexConfiguration","indexState","indexEntries"],Ic="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
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
 */class Tc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */class Ec{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Qr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ec(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ec?t:Ec.resolve(t)}catch(e){return Ec.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ec.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ec.reject(t)}static resolve(e){return new Ec(((t,n)=>{t(e)}))}static reject(e){return new Ec(((t,n)=>{n(e)}))}static waitFor(e){return new Ec(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ec.resolve(!1);for(const n of e)t=t.next((e=>e?Ec.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
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
 */class kc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ni,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new Cc(e,t.error)):this.At.resolve()},this.transaction.onerror=t=>{const n=Rc(t.target.error);this.At.reject(new Cc(e,n))}}static open(e,t,n,r){try{return new kc(t,e.transaction(r,n))}catch(e){throw new Cc(t,e)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(Kr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Nc(t)}}class Sc{constructor(e,t,n){this.name=e,this.version=t,this.Pt=n,12.2===Sc.Vt((0,c.z$)())&&Wr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Kr("SimpleDb","Removing database:",e),Oc(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!(0,c.hl)())return!1;if(Sc.St())return!0;const e=(0,c.z$)(),t=Sc.Vt(e),n=0<t&&t<10,r=Sc.Dt(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static St(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.Ct)}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Nt(e){return this.db||(Kr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Cc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ti(ei.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Cc(e,r))},r.onupgradeneeded=e=>{Kr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.Pt.kt(t,r.transaction,e.oldVersion,this.version).next((()=>{Kr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.Mt&&(this.db.onversionchange=e=>this.Mt(e)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.Nt(e);const t=kc.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.bt(),e))).catch((e=>(t.abort(e),Ec.reject(e)))).toPromise();return s.catch((()=>{})),await t.Rt,s}catch(e){const t="FirebaseError"!==e.name&&s<3;if(Kr("SimpleDb","Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ac{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Oc(this.Ft.delete())}}class Cc extends ti{constructor(e,t){super(ei.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xc(e){return"IndexedDbTransactionError"===e.name}class Nc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Kr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Kr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Oc(n)}add(e){return Kr("SimpleDb","ADD",this.store.name,e,e),Oc(this.store.add(e))}get(e){return Oc(this.store.get(e)).next((t=>(void 0===t&&(t=null),Kr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Kr("SimpleDb","DELETE",this.store.name,e),Oc(this.store.delete(e))}count(){return Kr("SimpleDb","COUNT",this.store.name),Oc(this.store.count())}qt(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.Gt(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ec(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}Kt(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ec(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Qt(e,t){Kr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.jt=!1;const r=this.cursor(n);return this.Gt(r,((e,t,n)=>n.delete()))}Wt(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.Gt(r,t)}zt(e){const t=this.cursor({});return new Ec(((n,r)=>{t.onerror=e=>{const t=Rc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}Gt(e,t){const n=[];return new Ec(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Ac(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ec){const e=o.catch((e=>(s.done(),Ec.reject(e))));n.push(e)}s.isDone?r():null===s.Lt?i.continue():i.continue(s.Lt)}})).next((()=>Ec.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jt?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Oc(e){return new Ec(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Rc(e.target.error);n(t)}}))}let Dc=!1;function Rc(e){const t=Sc.Vt((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ti("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Dc||(Dc=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
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
 */class Pc extends Tc{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function Lc(e,t){const n=Zr(e);return Sc.xt(n.Ht,t)}
/**
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
 */class Mc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&So(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ao(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ao(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(yi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ra())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,((e,t)=>xo(e,t)))&&mi(this.baseMutations,e.baseMutations,((e,t)=>xo(e,t)))}}class Fc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jr(e.mutations.length===n.length);let r=ta;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Fc(e,t,n,r)}}
/**
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
 */class Vc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */class Uc{constructor(e,t,n,r,i=yi.min(),s=yi.min(),o=Ci.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Uc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Uc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Uc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
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
 */class jc{constructor(e){this.Jt=e}}function $c(e,t){let n;if(t.document)n=Oa(e.Jt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=$i.fromSegments(t.noDocument.path),r=Gc(t.noDocument.readTime);n=us.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Qr();{const e=$i.fromSegments(t.unknownDocument.path),r=Gc(t.unknownDocument.version);n=us.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new vi(e[0],e[1]);return yi.fromTimestamp(t)}(t.readTime)),n}function qc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Bc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Ea(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ya(e,t.version.toTimestamp())}}(e.Jt,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:zc(t.version)};else{if(!t.isUnknownDocument())return Qr();r.unknownDocument={path:n.path.toArray(),version:zc(t.version)}}return r}function Bc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function zc(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Gc(e){const t=new vi(e.seconds,e.nanoseconds);return yi.fromTimestamp(t)}function Kc(e,t){const n=(t.baseMutations||[]).map((t=>La(e.Jt,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>La(e.Jt,t))),i=vi.fromMillis(t.localWriteTimeMs);return new Mc(t.batchId,i,n,r)}function Wc(e){const t=Gc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Gc(e.lastLimboFreeSnapshotVersion):yi.min();let r;var i;return void 0!==e.query.documents?(Jr(1===(i=e.query).documents.length),r=Ys(qs(Aa(i.documents[0])))):r=function(e){return Ys(Ua(e))}(e.query),new Uc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Ci.fromBase64String(e.resumeToken))}function Hc(e,t){const n=zc(t.snapshotVersion),r=zc(t.lastLimboFreeSnapshotVersion);let i;i=Es(t.target)?Fa(e.Jt,t.target):Va(e.Jt,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:_s(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Yc(e){const t=Ua({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Qs(t,t.limit,"L"):t}function Qc(e,t){return new Vc(t.largestBatchId,La(e.Jt,t.overlayMutation))}function Jc(e,t){const n=t.path.lastSegment();return[e,Qa(t.path.popLast()),n]}
/**
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
 */class Xc{getBundleMetadata(e,t){return Zc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Gc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Zc(e).put({bundleId:(n=t).id,createTime:zc(_a(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return eu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Yc(t.bundledQuery),readTime:Gc(t.readTime)};var t}))}saveNamedQuery(e,t){return eu(e).put(function(e){return{name:e.name,readTime:zc(_a(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Zc(e){return Lc(e,"bundles")}function eu(e){return Lc(e,"namedQueries")}
/**
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
 */class tu{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const n=t.uid||"";return new tu(e,n)}getOverlay(e,t){return nu(e).get(Jc(this.userId,t)).next((e=>e?Qc(this.M,e):null))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Vc(t,i);r.push(this.Xt(e,s))})),Ec.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Qa(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(nu(e).Qt("collectionPathOverlayIndex",r))})),Ec.waitFor(i)}getOverlaysForCollection(e,t,n){const r=ea(),i=Qa(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return nu(e).qt("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Qc(this.M,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=ea();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return nu(e).Wt({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Qc(this.M,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}Xt(e,t){return nu(e).put(function(e,t,n){const[r,i,s]=Jc(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Pa(e.Jt,n.mutation)}}(this.M,this.userId,t))}}function nu(e){return Lc(e,"documentOverlays")}
/**
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
 */class ru{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(Oi(e.integerValue));else if("doubleValue"in e){const n=Oi(e.doubleValue);isNaN(n)?this.ne(t,13):(this.ne(t,15),Ui(n)?t.se(0):t.se(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ne(t,20),"string"==typeof n?t.ie(n):(t.ie(`${n.seconds||""}`),t.se(n.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(Di(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ne(t,45),t.se(n.latitude||0),t.se(n.longitude||0)}else"mapValue"in e?is(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):Qr()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const n=e.fields||{};this.ne(t,55);for(const r of Object.keys(n))this.re(r,t),this.te(n[r],t)}he(e,t){const n=e.values||[];this.ne(t,50);for(const r of n)this.te(r,t)}ae(e,t){this.ne(t,37),$i.fromName(e).path.forEach((e=>{this.ne(t,60),this.le(e,t)}))}ne(e,t){e.se(t)}oe(e){e.se(2)}}function iu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function su(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=iu(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}ru.fe=new ru;class ou{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this._e(n.value),n=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.ge(n.value),n=t.next();this.ye()}pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this._e(e);else if(e<2048)this._e(960|e>>>6),this._e(128|63&e);else if(t<"\ud800"||"\udbff"<t)this._e(480|e>>>12),this._e(128|63&e>>>6),this._e(128|63&e);else{const e=t.codePointAt(0);this._e(240|e>>>18),this._e(128|63&e>>>12),this._e(128|63&e>>>6),this._e(128|63&e)}}this.we()}Ie(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.ge(e);else if(e<2048)this.ge(960|e>>>6),this.ge(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.ge(480|e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e);else{const e=t.codePointAt(0);this.ge(240|e>>>18),this.ge(128|63&e>>>12),this.ge(128|63&e>>>6),this.ge(128|63&e)}}this.ye()}Te(e){const t=this.Ee(e),n=su(t);this.Ae(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Re(e){const t=this.Ee(e),n=su(t);this.Ae(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}_e(e){const t=255&e;0===t?(this.Pe(0),this.Pe(255)):255===t?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;0===t?(this.ve(0),this.ve(255)):255===t?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class au{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class cu{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class uu{constructor(){this.De=new ou,this.Ce=new au(this.De),this.xe=new cu(this.De)}seed(e){this.De.seed(e)}Ne(e){return 0===e?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}
/**
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
 */class lu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new lu(this.indexId,this.documentKey,this.arrayValue,n)}}function hu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=du(e.arrayValue,t.arrayValue),0!==n?n:(n=du(e.directionalValue,t.directionalValue),0!==n?n:$i.comparator(e.documentKey,t.documentKey)))}function du(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
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
 */class fu{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const e=t;e.S()?this.Fe=e:this.Oe.push(e)}}$e(e){const t=hs(e);if(void 0!==t&&!this.Be(t))return!1;const n=ds(e);let r=0,i=0;for(;r<n.length&&this.Be(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Fe){const e=n[r];if(!this.Le(this.Fe,e)||!this.Ue(this.Me[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Me.length||!this.Ue(this.Me[i++],e))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
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
 */class pu{constructor(){this.qe=new mu}addToCollectionParentIndex(e,t){return this.qe.add(t),Ec.resolve()}getCollectionParents(e,t){return Ec.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return Ec.resolve()}deleteFieldIndex(e,t){return Ec.resolve()}getDocumentsMatchingTarget(e,t){return Ec.resolve(null)}getFieldIndex(e,t){return Ec.resolve(null)}getFieldIndexes(e,t){return Ec.resolve([])}getNextCollectionGroupToUpdate(e){return Ec.resolve(null)}updateCollectionGroup(e,t,n){return Ec.resolve()}updateIndexEntries(e,t){return Ec.resolve()}}class mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Wo(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Wo(Ti.comparator)).toArray()}}
/**
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
 */const gu=new Uint8Array(0);class vu{constructor(e){this.user=e,this.Ge=new mu,this.Ke=new Bo((e=>_s(e)),((e,t)=>Ts(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ge.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ge.add(t)}));const i={collectionId:n,parent:Qa(r)};return yu(e).put(i)}return Ec.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[gi(t),""],!1,!0);return yu(e).qt(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Za(r.parent))}return n}))}addFieldIndex(e,t){const n=bu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);return delete r.indexId,n.add(r).next()}deleteFieldIndex(e,t){const n=bu(e),r=_u(e),i=wu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=wu(e);let r=!0;const i=new Map;return Ec.forEach(this.Qe(t),(t=>this.getFieldIndex(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=ra();return Ec.forEach(i,((r,i)=>{var s;Kr("IndexedDbIndexManager",`Using index ${s=r,`id=${s.indexId}|cg=${s.collectionGroup}|f=${s.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${_s(t)}`);const o=function(e,t){const n=hs(t);if(void 0===n)return null;for(const r of ks(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,r),a=function(e,t){const n=new Map;for(const r of ds(t))for(const t of ks(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,r),c=function(e,t){const n=[];let r=!0;for(const s of ds(t)){let t,o=!0;for(const n of ks(e,s.fieldPath)){let e,r=!0;switch(n.op){case"<":case"<=":e="nullValue"in(i=n.value)?Bi:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?Ji(Fi.empty(),$i.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?{mapValue:{}}:Qr();break;case"==":case"in":case">=":e=n.value;break;case">":e=n.value,r=!1;break;case"!=":case"not-in":e=Bi}ss(t,e)===e&&(t=e,o=r)}if(null!==e.startAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const r=e.startAt.position[n];ss(t,r)===r&&(t=r,o=e.startAt.inclusive);break}if(void 0===t)return null;n.push(t),r&&(r=o)}var i;return new Ls(n,r)}(i,r),u=function(e,t){const n=[];let r=!0;for(const s of ds(t)){let t,o=!0;for(const n of ks(e,s.fieldPath)){let e,r=!0;switch(n.op){case">=":case">":e="nullValue"in(i=n.value)?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?Ji(Fi.empty(),$i.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?{mapValue:{}}:"mapValue"in i?qi:Qr(),r=!1;break;case"==":case"in":case"<=":e=n.value;break;case"<":e=n.value,r=!1;break;case"!=":case"not-in":e=qi}os(t,e)===e&&(t=e,o=r)}if(null!==e.endAt)for(let n=0;n<e.orderBy.length;++n)if(e.orderBy[n].field.isEqual(s.fieldPath)){const r=e.endAt.position[n];os(t,r)===r&&(t=r,o=e.endAt.inclusive);break}if(void 0===t)return null;n.push(t),r&&(r=o)}var i;return new Ls(n,r)}(i,r),l=this.je(r,i,c),h=this.je(r,i,u),d=this.We(r,i,a),f=this.ze(r.indexId,o,l,!!c&&c.inclusive,h,!!u&&u.inclusive,d);return Ec.forEach(f,(r=>n.Kt(r,t.limit).next((t=>{t.forEach((t=>{e=e.add(new $i(Za(t.documentKey)))}))}))))})).next((()=>e))}return Ec.resolve(null)}))}Qe(e){let t=this.Ke.get(e);return t||(t=[e],this.Ke.set(e,t),t)}ze(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(null!=n?n.length:1,null!=i?i.length:1),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.He(t[l/c]):gu,h=n?this.Je(e,a,n[l%c],r):this.Ye(e),d=i?this.Xe(e,a,i[l%c],s):this.Ye(e+1);u.push(...this.createRange(h,d,o.map((t=>this.Je(e,a,t,!0)))))}return u}Je(e,t,n,r){const i=new lu(e,$i.empty(),t,n);return r?i:i.ke()}Xe(e,t,n,r){const i=new lu(e,$i.empty(),t,n);return r?i.ke():i}Ye(e){return new lu(e,$i.empty(),gu,gu)}getFieldIndex(e,t){const n=new fu(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{const t=e.filter((e=>n.$e(e)));return t.sort(((e,t)=>t.fields.length-e.fields.length)),t.length>0?t[0]:null}))}Ze(e,t){const n=new uu;for(const r of ds(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.Ne(r.kind);ru.fe.Zt(e,i)}return n.Se()}He(e){const t=new uu;return ru.fe.Zt(e,t.Ne(0)),t.Se()}We(e,t,n){if(null===n)return[];let r=[];r.push(new uu);let i=0;for(const s of ds(e)){const e=n[i++];for(const n of r)if(this.tn(t,s.fieldPath)&&Zi(e))r=this.en(r,s,e);else{const t=n.Ne(s.kind);ru.fe.Zt(e,t)}}return this.nn(r)}je(e,t,n){return null==n?null:this.We(e,t,n.position)}nn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Se();return t}en(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new uu;n.seed(e.Se()),ru.fe.Zt(s,n.Ne(t.kind)),i.push(n)}return i}tn(e,t){return!!e.filters.find((e=>e instanceof Ss&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=bu(e),r=_u(e);return(t?n.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.qt()).next((e=>{const t=[];return Ec.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new ps(t.sequenceNumber,new vs(Gc(t.readTime),new $i(Za(t.documentKey)),t.largestBatchId)):ps.empty(),r=e.fields.map((([e,t])=>new fs(ki.fromServerFormat(e),t)));return new ls(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:pi(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=bu(e),i=_u(e);return this.sn(e).next((e=>r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ec.forEach(t,(t=>i.put(function(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:zc(r.readTime),documentKey:Qa(r.documentKey.path),largestBatchId:r.largestBatchId}}(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ec.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ec.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ec.forEach(i,(n=>this.rn(e,t,n).next((t=>{const i=this.on(r,n);return t.isEqual(i)?Ec.resolve():this.un(e,r,t,i)})))))))}))}an(e,t,n){return wu(e).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,documentKey:Qa(t.key.path)})}cn(e,t,n){return wu(e).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,Qa(t.key.path)])}rn(e,t,n){const r=wu(e);let i=new Wo(hu);return r.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,Qa(t.path)])},((e,r)=>{i=i.add(new lu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}on(e,t){let n=new Wo(hu);const r=this.Ze(t,e);if(null==r)return n;const i=hs(t);if(null!=i){const s=e.data.field(i.fieldPath);if(Zi(s))for(const i of s.arrayValue.values||[])n=n.add(new lu(t.indexId,e.key,this.He(i),r))}else n=n.add(new lu(t.indexId,e.key,gu,r));return n}un(e,t,n,r){Kr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Yo(s),c=Yo(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Yo(o)):t?(i(a),a=Yo(s)):(a=Yo(s),c=Yo(o))}}(n,r,hu,(n=>{i.push(this.an(e,t,n))}),(n=>{i.push(this.cn(e,t,n))})),Ec.waitFor(i)}sn(e){let t=1;return _u(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>hu(e,t))).filter(((e,t,n)=>!t||0!==hu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=hu(s,e),i=hu(s,t);if(0===n)r[0]=e.ke();else if(n>0&&i<0)r.push(s),r.push(s.ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,""],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,""]));return i}}function yu(e){return Lc(e,"collectionParents")}function wu(e){return Lc(e,"indexEntries")}function bu(e){return Lc(e,"indexConfiguration")}function _u(e){return Lc(e,"indexState")}
/**
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
 */const Iu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Tu(e,Tu.DEFAULT_COLLECTION_PERCENTILE,Tu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */function Eu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Wt({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Jr(1===a)})));const u=[];for(const l of n.mutations){const e=nc(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ec.waitFor(s).next((()=>u))}function ku(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Qr();t=e.noDocument}return JSON.stringify(t).length}
/**
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
 */Tu.DEFAULT_COLLECTION_PERCENTILE=10,Tu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tu.DEFAULT=new Tu(41943040,Tu.DEFAULT_COLLECTION_PERCENTILE,Tu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tu.DISABLED=new Tu(-1,0,0);class Su{constructor(e,t,n,r){this.userId=e,this.M=t,this.indexManager=n,this.referenceDelegate=r,this.hn={}}static Yt(e,t,n,r){Jr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new Su(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Cu(e).Wt({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=xu(e),s=Cu(e);return s.add({}).next((o=>{Jr("number"==typeof o);const a=new Mc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Pa(e.Jt,t))),i=n.mutations.map((t=>Pa(e.Jt,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.M,this.userId,a),u=[];let l=new Wo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));for(const e of r){const t=nc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,rc))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.hn[o]=a.keys()})),Ec.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Cu(e).get(t).next((e=>e?(Jr(e.userId===this.userId),Kc(this.M,e)):null))}ln(e,t){return this.hn[t]?Ec.resolve(this.hn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.hn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return Cu(e).Wt({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Jr(t.batchId>=n),i=Kc(this.M,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Cu(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Cu(e).qt("userMutationsIndex",t).next((e=>e.map((e=>Kc(this.M,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=tc(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return xu(e).Wt({range:r},((n,r,s)=>{const[o,a,c]=n,u=Za(a);if(o===this.userId&&t.path.isEqual(u))return Cu(e).get(c).next((e=>{if(!e)throw Qr();Jr(e.userId===this.userId),i.push(Kc(this.M,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wo(pi);const r=[];return t.forEach((t=>{const i=tc(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=xu(e).Wt({range:s},((e,r,i)=>{const[s,o,a]=e,c=Za(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ec.waitFor(r).next((()=>this.fn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=tc(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Wo(pi);return xu(e).Wt({range:s},((e,t,i)=>{const[s,a,c]=e,u=Za(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.fn(e,o)))}fn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Cu(e).get(t).next((e=>{if(null===e)throw Qr();Jr(e.userId===this.userId),n.push(Kc(this.M,e))})))})),Ec.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Eu(e.Ht,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.dn(t.batchId)})),Ec.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ec.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return xu(e).Wt({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Za(e[1]);r.push(t)}else n.done()})).next((()=>{Jr(0===r.length)}))}))}containsKey(e,t){return Au(e,this.userId,t)}_n(e){return Nu(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Au(e,t,n){const r=tc(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return xu(e).Wt({range:s,jt:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function Cu(e){return Lc(e,"mutations")}function xu(e){return Lc(e,"documentMutations")}function Nu(e){return Lc(e,"mutationQueues")}
/**
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
 */class Ou{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new Ou(0)}static gn(){return new Ou(-1)}}
/**
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
 */class Du{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.yn(e).next((t=>{const n=new Ou(t.highestTargetId);return t.highestTargetId=n.next(),this.pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.yn(e).next((e=>yi.fromTimestamp(new vi(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.yn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.yn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.pn(e,r))))}addTargetData(e,t){return this.In(e,t).next((()=>this.yn(e).next((n=>(n.targetCount+=1,this.Tn(t,n),this.pn(e,n))))))}updateTargetData(e,t){return this.In(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Ru(e).delete(t.targetId))).next((()=>this.yn(e))).next((t=>(Jr(t.targetCount>0),t.targetCount-=1,this.pn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Ru(e).Wt(((s,o)=>{const a=Wc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ec.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Ru(e).Wt(((e,n)=>{const r=Wc(n);t(r)}))}yn(e){return Pu(e).get("targetGlobalKey").next((e=>(Jr(null!==e),e)))}pn(e,t){return Pu(e).put("targetGlobalKey",t)}In(e,t){return Ru(e).put(Hc(this.M,t))}Tn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.yn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=_s(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ru(e).Wt({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=Wc(n);Ts(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Lu(e);return t.forEach((t=>{const s=Qa(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ec.waitFor(r)}removeMatchingKeys(e,t,n){const r=Lu(e);return Ec.forEach(t,(t=>{const i=Qa(t.path);return Ec.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Lu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Lu(e);let i=ra();return r.Wt({range:n,jt:!0},((e,t,n)=>{const r=Za(e[1]),s=new $i(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Qa(t.path),r=IDBKeyRange.bound([n],[gi(n)],!1,!0);let i=0;return Lu(e).Wt({index:"documentTargetsIndex",jt:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}Et(e,t){return Ru(e).get(t).next((e=>e?Wc(e):null))}}function Ru(e){return Lc(e,"targets")}function Pu(e){return Lc(e,"targetGlobal")}function Lu(e){return Lc(e,"targetDocuments")}
/**
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
 */async function Mu(e){if(e.code!==ei.FAILED_PRECONDITION||e.message!==Ic)throw e;Kr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */function Fu([e,t],[n,r]){const i=pi(e,n);return 0===i?pi(t,r):i}class Vu{constructor(e){this.En=e,this.buffer=new Wo(Fu),this.An=0}Rn(){return++this.An}bn(e){const t=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Fu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Uu{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Pn=!1,this.Vn=null}start(e){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return null!==this.Vn}vn(e){const t=this.Pn?3e5:6e4;Kr("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(e){xc(e)?Kr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Mu(e)}await this.vn(e)}))}}class ju{constructor(e,t){this.Sn=e,this.params=t}calculateTargetCount(e,t){return this.Sn.Dn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ec.resolve(hi.A);const n=new Vu(t);return this.Sn.forEachTarget(e,(e=>n.bn(e.sequenceNumber))).next((()=>this.Sn.Cn(e,(e=>n.bn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Sn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Sn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector","Garbage collection skipped; disabled"),Ec.resolve(Iu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Kr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iu):this.xn(e,t)))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,t){let n,r,i,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Kr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),zr()<=a["in"].DEBUG&&Kr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ec.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
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
 */class $u{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new ju(e,t)}(this,t)}Dn(e){const t=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Nn(e){let t=0;return this.Cn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Cn(e,t){return this.kn(e,((e,n)=>t(n)))}addReference(e,t,n){return qu(e,n)}removeReference(e,t,n){return qu(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return qu(e,t)}Mn(e,t){return function(e,t){let n=!1;return Nu(e).zt((r=>Au(e,r,t).next((e=>(e&&(n=!0),Ec.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.kn(e,((s,o)=>{if(o<=t){const t=this.Mn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,yi.min()),Lu(e).delete([0,Qa(s.path)]))))}));r.push(t)}})).next((()=>Ec.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return qu(e,t)}kn(e,t){const n=Lu(e);let r,i=hi.A;return n.Wt({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==hi.A&&t(new $i(Za(r)),i),i=o,r=s):i=hi.A})).next((()=>{i!==hi.A&&t(new $i(Za(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function qu(e,t){return Lu(e).put(function(e,t){return{targetId:0,path:Qa(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
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
 */class Bu{constructor(){this.changes=new Bo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,us.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ec.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */class zu{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Wu(e).put(n)}removeEntry(e,t,n){return Wu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Bc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.On(e,n))))}getEntry(e,t){let n=us.newInvalidDocument(t);return Wu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Hu(t))},((e,r)=>{n=this.Fn(t,r)})).next((()=>n))}$n(e,t){let n={size:0,document:us.newInvalidDocument(t)};return Wu(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Hu(t))},((e,r)=>{n={document:this.Fn(t,r),size:ku(r)}})).next((()=>n))}getEntries(e,t){let n=Jo();return this.Bn(e,t,((e,t)=>{const r=this.Fn(e,t);n=n.insert(e,r)})).next((()=>n))}Ln(e,t){let n=Jo(),r=new zo($i.comparator);return this.Bn(e,t,((e,t)=>{const i=this.Fn(e,t);n=n.insert(e,i),r=r.insert(e,ku(t))})).next((()=>({documents:n,Un:r})))}Bn(e,t,n){if(t.isEmpty())return Ec.resolve();let r=new Wo(Qu);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Hu(r.first()),Hu(r.last())),s=r.getIterator();let o=s.getNext();return Wu(e).Wt({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=$i.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Qu(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.Ut(Hu(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Bc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wu(e).qt(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=Jo();for(const n of e){const e=this.Fn($i.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=Jo();const s=Yu(t,n),o=Yu(t,vs.max());return Wu(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Fn($i.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new Gu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Ku(e).get("remoteDocumentGlobalKey").next((e=>(Jr(!!e),e)))}On(e,t){return Ku(e).put("remoteDocumentGlobalKey",t)}Fn(e,t){if(t){const e=$c(this.M,t);if(!e.isNoDocument()||!e.version.isEqual(yi.min()))return e}return us.newInvalidDocument(e)}}class Gu extends Bu{constructor(e,t){super(),this.qn=e,this.trackRemovals=t,this.Gn=new Bo((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Wo(((e,t)=>pi(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Gn.get(i);if(t.push(this.qn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=qc(this.qn.M,s);r=r.add(i.path.popLast());const c=ku(a);n+=c-o.size,t.push(this.qn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=qc(this.qn.M,s.convertToNoDocument(yi.min()));t.push(this.qn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.qn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.qn.updateMetadata(e,n)),Ec.waitFor(t)}getFromCache(e,t){return this.qn.$n(e,t).next((e=>(this.Gn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.qn.Ln(e,t).next((({documents:e,Un:t})=>(t.forEach(((t,n)=>{this.Gn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Ku(e){return Lc(e,"remoteDocumentGlobal")}function Wu(e){return Lc(e,"remoteDocumentsV14")}function Hu(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Yu(e,t){const n=t.documentKey.path.toArray();return[e,Bc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Qu(e,t){const n=e.path.length-t.path.length;return 0!==n?n:$i.comparator(e,t)}
/**
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
 */
/**
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
 */class Ju{constructor(e){this.M=e}kt(e,t,n,r){const i=new kc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ec,{unique:!0}),e.createObjectStore("documentMutations")}(e),Xu(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ec.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Xu(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:yi.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").qt().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ec,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ec.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Kn(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(i))))),n<7&&r>=7&&(s=s.next((()=>this.jn(i)))),n<8&&r>=8&&(s=s.next((()=>this.Wn(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.zn(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:mc});t.createIndex("collectionPathOverlayIndex",gc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",vc,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:ic});t.createIndex("documentKeyIndex",sc),t.createIndex("collectionGroupIndex",oc)}(e))).next((()=>this.Hn(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>{!function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:hc}).createIndex("sequenceNumberIndex",dc,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:fc}).createIndex("documentKeyIndex",pc,{unique:!1})}(e)}))),s}Qn(e){let t=0;return e.store("remoteDocuments").Wt(((e,n)=>{t+=ku(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Kn(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.qt().next((t=>Ec.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.qt("userMutationsIndex",r).next((n=>Ec.forEach(n,(n=>{Jr(n.userId===t.userId);const r=Kc(this.M,n);return Eu(e,t.userId,r).next((()=>{}))}))))}))))}jn(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Wt(((n,i)=>{const s=new Ti(n),o=function(e){return[0,Qa(e)]}(s);r.push(t.get(o).next((n=>n?Ec.resolve():(n=>t.put({targetId:0,path:Qa(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ec.waitFor(r)))}))}Wn(e,t){e.createObjectStore("collectionParents",{keyPath:lc});const n=t.store("collectionParents"),r=new mu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Qa(r)})}};return t.store("remoteDocuments").Wt({jt:!0},((e,t)=>{const n=new Ti(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Wt({jt:!0},(([e,t,n],r)=>{const s=Za(t);return i(s.popLast())}))))}zn(e){const t=e.store("targets");return t.Wt(((e,n)=>{const r=Wc(n),i=Hc(this.M,r);return t.put(i)}))}Hn(e,t){const n=t.store("remoteDocuments"),r=[];return n.Wt(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new $i(Ti.fromString(o.document.name).popFirst(5)):o.noDocument?$i.fromSegments(o.noDocument.path):o.unknownDocument?$i.fromSegments(o.unknownDocument.path):Qr()).path.toArray();var o;
/**
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
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ec.waitFor(r)))}}function Xu(e){e.createObjectStore("targetDocuments",{keyPath:cc}).createIndex("documentTargetsIndex",uc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ac,{unique:!0}),e.createObjectStore("targetGlobal")}const Zu="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class el{constructor(e,t,n,r,i,s,o,a,c,u,l=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Jn=i,this.window=s,this.document=o,this.Yn=c,this.Xn=u,this.Zn=l,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=e=>Promise.resolve(),!el.vt())throw new ti(ei.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new $u(this,r),this.cs=t+"main",this.M=new jc(a),this.hs=new Sc(this.cs,this.Zn,new Ju(this.M)),this.ls=new Du(this.referenceDelegate,this.M),this.fs=function(e){return new zu(e)}(this.M),this.ds=new Xc,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,!1===u&&Wr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,Zu);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.ls.getHighestSequenceNumber(e)))})).then((e=>{this.ts=new hi(e,this.Yn)})).then((()=>{this.es=!0})).catch((e=>(this.hs&&this.hs.close(),Promise.reject(e))))}Is(e){return this.us=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget((async()=>{this.started&&await this.ws()})))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>nl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ts(e).next((e=>{e||(this.isPrimary=!1,this.Jn.enqueueRetryable((()=>this.us(!1))))}))})).next((()=>this.Es(e))).next((t=>this.isPrimary&&!t?this.As(e).next((()=>!1)):!!t&&this.Rs(e).next((()=>!0)))))).catch((e=>{if(xc(e))return Kr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Kr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable((()=>this.us(e))),this.isPrimary=e}))}Ts(e){return tl(e).get("owner").next((e=>Ec.resolve(this.bs(e))))}Ps(e){return nl(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Lc(e,"clientMetadata");return t.qt().next((e=>{const n=this.Ss(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ec.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this._s)for(const t of e)this._s.removeItem(this.Ds(t.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ws().then((()=>this.Vs())).then((()=>this.ps()))))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?Ec.resolve(!0):tl(e).get("owner").next((t=>{if(null!==t&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new ti(ei.FAILED_PRECONDITION,Zu);return!1}}return!(!this.networkEnabled||!this.inForeground)||nl(e).qt().next((e=>void 0===this.Ss(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Kr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Pc(e,hi.A);return this.As(t).next((()=>this.Ps(t)))})),this.hs.close(),this.Ms()}Ss(e,t){return e.filter((e=>this.vs(e.updateTimeMs,t)&&!this.Cs(e.clientId)))}Os(){return this.runTransaction("getActiveClients","readonly",(e=>nl(e).qt().next((e=>this.Ss(e,18e5).map((e=>e.clientId))))))}get started(){return this.es}getMutationQueue(e,t){return Su.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new vu(e)}getDocumentOverlayCache(e){return tu.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,t,n){Kr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=14===(s=this.Zn)?_c:13===s?bc:12===s?wc:11===s?yc:void Qr();var s;let o;return this.hs.runTransaction(e,r,i,(r=>(o=new Pc(r,this.ts?this.ts.next():hi.A),"readwrite-primary"===t?this.Ts(o).next((e=>!!e||this.Es(o))).next((t=>{if(!t)throw Wr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable((()=>this.us(!1))),new ti(ei.FAILED_PRECONDITION,Ic);return n(o)})).next((e=>this.Rs(o).next((()=>e)))):this.Fs(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Fs(e){return tl(e).get("owner").next((e=>{if(null!==e&&this.vs(e.leaseTimestampMs,5e3)&&!this.Cs(e.ownerId)&&!this.bs(e)&&!(this.Xn||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ti(ei.FAILED_PRECONDITION,Zu)}))}Rs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return tl(e).put("owner",t)}static vt(){return Sc.vt()}As(e){const t=tl(e);return t.get("owner").next((e=>this.bs(e)?(Kr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ec.resolve()))}vs(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Wr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}gs(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ss=()=>{this.Jn.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ws())))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground="visible"===this.document.visibilityState)}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.ns=()=>{this.xs(),(0,c.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var t;try{const n=null!==(null===(t=this._s)||void 0===t?void 0:t.getItem(this.Ds(e)));return Kr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Wr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(T){Wr("Failed to set zombie client id.",T)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch(T){}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function tl(e){return Lc(e,"owner")}function nl(e){return Lc(e,"clientMetadata")}function rl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
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
 */}class il{constructor(e,t,n){this.fs=e,this.$s=t,this.indexManager=n}Bs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Ls(e,t,n)))}Ls(e,t,n){return this.fs.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Us(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}qs(e,t){return this.fs.getEntries(e,t).next((t=>this.Gs(e,t).next((()=>t))))}Gs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Us(t,e)))}Ks(e,t,n){return function(e){return $i.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Qs(e,t.path):Ws(t)?this.js(e,t,n):this.Ws(e,t,n)}Qs(e,t){return this.Bs(e,new $i(t)).next((e=>{let t=Zo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}js(e,t,n){const r=t.collectionGroup;let i=Zo();return this.indexManager.getCollectionParents(e,r).next((s=>Ec.forEach(s,(s=>{const o=function(e,t){return new js(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Ws(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Ws(e,t,n){let r;return this.fs.getAllFromCollection(e,t.path,n).next((n=>(r=n,this.$s.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=us.newInvalidDocument(n),r=r.insert(n,i)),Ao(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{eo(t,n)||(r=r.remove(e))})),r)))}}
/**
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
 */class sl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.zs=n,this.Hs=r}static Js(e,t){let n=ra(),r=ra();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new sl(e,t.fromCache,n,r)}}
/**
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
 */class ol{Ys(e){this.Xs=e}Ks(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(yi.min())?this.Zs(e,t):this.Xs.qs(e,r).next((i=>{const s=this.ti(t,i);return(Bs(t)||zs(t))&&this.ei(t.limitType,s,r,n)?this.Zs(e,t):(zr()<=a["in"].DEBUG&&Kr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Zs(t)),this.Xs.Ks(e,t,ms(n,-1)).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}ti(e,t){let n=new Wo(no(e));return t.forEach(((t,r)=>{eo(e,r)&&(n=n.add(r))})),n}ei(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Zs(e,t){return zr()<=a["in"].DEBUG&&Kr("QueryEngine","Using full collection scan to execute query:",Zs(t)),this.Xs.Ks(e,t,vs.min())}}
/**
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
 */class al{constructor(e,t,n,r){this.persistence=e,this.ni=t,this.M=r,this.si=new zo(pi),this.ii=new Bo((e=>_s(e)),Ts),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(n)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new il(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.si)))}}function cl(e,t,n,r){return new al(e,t,n,r)}async function ul(e,t){const n=Zr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.$s.getAllMutationBatches(e).next((i=>(r=i,n.ui(t),n.$s.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=ra();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.ai.qs(e,o).next((e=>({ci:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ll(e,t){const n=Zr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.oi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ec.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Jr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.$s.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.$s.performConsistencyCheck(e))).next((()=>n.ai.qs(e,r)))}))}function hl(e){const t=Zr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ls.getLastRemoteSnapshotVersion(e)))}function dl(e,t){const n=Zr(e),r=t.snapshotVersion;let i=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.oi.newChangeBuffer({trackRemovals:!0});i=n.si;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.ls.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.ls.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Ci.EMPTY_BYTE_STRING,yi.min()).withLastLimboFreeSnapshotVersion(yi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.ls.updateTargetData(e,u))}));let a=Jo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(fl(e,s,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(yi.min())){const t=n.ls.getLastRemoteSnapshotVersion(e).next((t=>n.ls.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ec.waitFor(o).next((()=>s.apply(e))).next((()=>n.ai.Gs(e,a))).next((()=>a))})).then((e=>(n.si=i,e)))}function fl(e,t,n){let r=ra();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Jo();return n.forEach(((n,i)=>{const s=e.get(n);i.isNoDocument()&&i.version.isEqual(yi.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!s.isValidDocument()||i.version.compareTo(s.version)>0||0===i.version.compareTo(s.version)&&s.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Kr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",i.version)})),r}))}function pl(e,t){const n=Zr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.$s.getNextMutationBatchAfterBatchId(e,t))))}function ml(e,t){const n=Zr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ls.getTargetData(e,t).next((i=>i?(r=i,Ec.resolve(r)):n.ls.allocateTargetId(e).next((i=>(r=new Uc(t,i,0,e.currentSequenceNumber),n.ls.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.si.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.si=n.si.insert(e.targetId,e),n.ii.set(t,e.targetId)),e}))}async function gl(e,t,n){const r=Zr(e),i=r.si.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!xc(e))throw e;Kr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.si=r.si.remove(t),r.ii.delete(i.target)}function vl(e,t,n){const r=Zr(e);let i=yi.min(),s=ra();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zr(e),i=r.ii.get(n);return void 0!==i?Ec.resolve(r.si.get(i)):r.ls.getTargetData(t,n)}(r,e,Ys(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ni.Ks(e,t,n?i:yi.min(),n?s:ra()))).next((e=>(bl(r,to(t),e),{documents:e,hi:s})))))}function yl(e,t){const n=Zr(e),r=Zr(n.ls),i=n.si.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.Et(e,t).next((e=>e?e.target:null))))}function wl(e,t){const n=Zr(e),r=n.ri.get(t)||yi.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.oi.getAllFromCollectionGroup(e,t,ms(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(bl(n,t,e),e)))}function bl(e,t,n){let r=yi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ri.set(t,r)}async function _l(e,t,n,r){const i=Zr(e);let s=ra(),o=Jo();for(const u of n){const e=t.li(u.metadata.name);u.document&&(s=s.add(e));const n=t.fi(u);n.setReadTime(t.di(u.metadata.readTime)),o=o.insert(e,n)}const a=i.oi.newChangeBuffer({trackRemovals:!0}),c=await ml(i,function(e){return Ys(qs(Ti.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>fl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.ls.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.ls.addMatchingKeys(e,s,c.targetId))).next((()=>i.ai.Gs(e,t))).next((()=>t))))))}async function Il(e,t,n=ra()){const r=await ml(e,Ys(Yc(t.bundledQuery))),i=Zr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=_a(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.ds.saveNamedQuery(e,t);const o=r.withResumeToken(Ci.EMPTY_BYTE_STRING,s);return i.si=i.si.insert(o.targetId,o),i.ls.updateTargetData(e,o).next((()=>i.ls.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.ls.addMatchingKeys(e,n,r.targetId))).next((()=>i.ds.saveNamedQuery(e,t)))}))}
/**
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
 */class Tl{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return Ec.resolve(this._i.get(t))}saveBundleMetadata(e,t){var n;return this._i.set(t.id,{id:(n=t).id,version:n.version,createTime:_a(n.createTime)}),Ec.resolve()}getNamedQuery(e,t){return Ec.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,function(e){return{name:e.name,query:Yc(e.bundledQuery),readTime:_a(e.readTime)}}(t)),Ec.resolve()}}
/**
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
 */class El{constructor(){this.overlays=new zo($i.comparator),this.mi=new Map}getOverlay(e,t){return Ec.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Xt(e,t,r)})),Ec.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.mi.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.mi.delete(n)),Ec.resolve()}getOverlaysForCollection(e,t,n){const r=ea(),i=t.length+1,s=new $i(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ec.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new zo(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ea(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ea(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ec.resolve(o)}Xt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);if(null!==r){const e=this.mi.get(r.largestBatchId).delete(n.key);this.mi.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Vc(t,n));let i=this.mi.get(t);void 0===i&&(i=ra(),this.mi.set(t,i)),this.mi.set(t,i.add(n.key))}}
/**
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
 */class kl{constructor(){this.gi=new Wo(Sl.yi),this.pi=new Wo(Sl.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){const n=new Sl(e,t);this.gi=this.gi.add(n),this.pi=this.pi.add(n)}Ti(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ei(new Sl(e,t))}Ai(e,t){e.forEach((e=>this.removeReference(e,t)))}Ri(e){const t=new $i(new Ti([])),n=new Sl(t,e),r=new Sl(t,e+1),i=[];return this.pi.forEachInRange([n,r],(e=>{this.Ei(e),i.push(e.key)})),i}bi(){this.gi.forEach((e=>this.Ei(e)))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const t=new $i(new Ti([])),n=new Sl(t,e),r=new Sl(t,e+1);let i=ra();return this.pi.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Sl(e,0),n=this.gi.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Sl{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return $i.comparator(e.key,t.key)||pi(e.Vi,t.Vi)}static Ii(e,t){return pi(e.Vi,t.Vi)||$i.comparator(e.key,t.key)}}
/**
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
 */class Al{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.$s=[],this.vi=1,this.Si=new Wo(Sl.yi)}checkEmpty(e){return Ec.resolve(0===this.$s.length)}addMutationBatch(e,t,n,r){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const s=new Mc(i,t,n,r);this.$s.push(s);for(const o of r)this.Si=this.Si.add(new Sl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ec.resolve(s)}lookupMutationBatch(e,t){return Ec.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Ci(n),i=r<0?0:r;return Ec.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return Ec.resolve(0===this.$s.length?-1:this.vi-1)}getAllMutationBatches(e){return Ec.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Sl(t,0),r=new Sl(t,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([n,r],(e=>{const t=this.Di(e.Vi);i.push(t)})),Ec.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Wo(pi);return t.forEach((e=>{const t=new Sl(e,0),r=new Sl(e,Number.POSITIVE_INFINITY);this.Si.forEachInRange([t,r],(e=>{n=n.add(e.Vi)}))})),Ec.resolve(this.xi(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$i.isDocumentKey(i)||(i=i.child(""));const s=new Sl(new $i(i),0);let o=new Wo(pi);return this.Si.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Vi)),!0)}),s),Ec.resolve(this.xi(o))}xi(e){const t=[];return e.forEach((e=>{const n=this.Di(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jr(0===this.Ni(t.batchId,"removed")),this.$s.shift();let n=this.Si;return Ec.forEach(t.mutations,(r=>{const i=new Sl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Si=n}))}dn(e){}containsKey(e,t){const n=new Sl(t,0),r=this.Si.firstAfterOrEqual(n);return Ec.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.$s.length,Ec.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return 0===this.$s.length?0:e-this.$s[0].batchId}Di(e){const t=this.Ci(e);return t<0||t>=this.$s.length?null:this.$s[t]}}
/**
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
 */class Cl{constructor(e){this.ki=e,this.docs=new zo($i.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ki(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ec.resolve(n?n.document.mutableCopy():us.newInvalidDocument(t))}getEntries(e,t){let n=Jo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():us.newInvalidDocument(e))})),Ec.resolve(n)}getAllFromCollection(e,t,n){let r=Jo();const i=new $i(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||ys(gs(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ec.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Qr()}Mi(e,t){return Ec.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xl(this)}getSize(e){return Ec.resolve(this.size)}}class xl extends Bu{constructor(e){super(),this.qn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.qn.addEntry(e,r)):this.qn.removeEntry(n)})),Ec.waitFor(t)}getFromCache(e,t){return this.qn.getEntry(e,t)}getAllFromCache(e,t){return this.qn.getEntries(e,t)}}
/**
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
 */class Nl{constructor(e){this.persistence=e,this.Oi=new Bo((e=>_s(e)),Ts),this.lastRemoteSnapshotVersion=yi.min(),this.highestTargetId=0,this.Fi=0,this.$i=new kl,this.targetCount=0,this.Bi=Ou.mn()}forEachTarget(e,t){return this.Oi.forEach(((e,n)=>t(n))),Ec.resolve()}getLastRemoteSnapshotVersion(e){return Ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ec.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),Ec.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Fi&&(this.Fi=t),Ec.resolve()}In(e){this.Oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Bi=new Ou(t),this.highestTargetId=t),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,Ec.resolve()}updateTargetData(e,t){return this.In(t),Ec.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.$i.Ri(t.targetId),this.targetCount-=1,Ec.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Oi.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ec.waitFor(i).next((()=>r))}getTargetCount(e){return Ec.resolve(this.targetCount)}getTargetData(e,t){const n=this.Oi.get(t)||null;return Ec.resolve(n)}addMatchingKeys(e,t,n){return this.$i.Ti(t,n),Ec.resolve()}removeMatchingKeys(e,t,n){this.$i.Ai(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ec.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.$i.Ri(t),Ec.resolve()}getMatchingKeysForTargetId(e,t){const n=this.$i.Pi(t);return Ec.resolve(n)}containsKey(e,t){return Ec.resolve(this.$i.containsKey(t))}}
/**
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
 */class Ol{constructor(e,t){this.Li={},this.overlays={},this.ts=new hi(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Nl(this),this.indexManager=new pu,this.fs=function(e){return new Cl(e)}((e=>this.referenceDelegate.Ui(e))),this.M=new jc(t),this.ds=new Tl(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new El,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Li[e.toKey()];return n||(n=new Al(t,this.referenceDelegate),this.Li[e.toKey()]=n),n}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,t,n){Kr("MemoryPersistence","Starting transaction:",e);const r=new Dl(this.ts.next());return this.referenceDelegate.qi(),n(r).next((e=>this.referenceDelegate.Gi(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ki(e,t){return Ec.or(Object.values(this.Li).map((n=>()=>n.containsKey(e,t))))}}class Dl extends Tc{constructor(e){super(),this.currentSequenceNumber=e}}class Rl{constructor(e){this.persistence=e,this.Qi=new kl,this.ji=null}static Wi(e){return new Rl(e)}get zi(){if(this.ji)return this.ji;throw Qr()}addReference(e,t,n){return this.Qi.addReference(n,t),this.zi.delete(n.toString()),Ec.resolve()}removeReference(e,t,n){return this.Qi.removeReference(n,t),this.zi.add(n.toString()),Ec.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),Ec.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach((e=>this.zi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.zi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}qi(){this.ji=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ec.forEach(this.zi,(n=>{const r=$i.fromPath(n);return this.Hi(e,r).next((e=>{e||t.removeEntry(r,yi.min())}))})).next((()=>(this.ji=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hi(e,t).next((e=>{e?this.zi.delete(t.toString()):this.zi.add(t.toString())}))}Ui(e){return 0}Hi(e,t){return Ec.or([()=>Ec.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ki(e,t)])}}
/**
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
 */function Pl(e,t){return`firestore_clients_${e}_${t}`}function Ll(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ml(e,t){return`firestore_targets_${e}_${t}`}class Fl{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new ti(r.error.code,r.error.message))),s?new Fl(e,t,r.state,i):(Wr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new ti(n.error.code,n.error.message))),i?new Vl(e,n.state,r):(Wr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ul{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=sa();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ji(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Ul(e,i):(Wr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class jl{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new jl(t.clientId,t.onlineState):(Wr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $l{constructor(){this.activeTargetIds=sa()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ql{constructor(e,t,n,r,i){this.window=e,this.Jn=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new zo(pi),this.started=!1,this.ir=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=Pl(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
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
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new $l),this.ar=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Pl(this.persistenceKey,n));if(e){const t=Ul.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Ml(this.persistenceKey,e));if(n){const r=Vl.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ml(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Kr("SharedClientState","READ",e,t),t}setItem(e,t){Kr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Kr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(Kr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Wr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.ar.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.cr.test(t.key)){if(null!==t.newValue){const e=this.Vr(t.key,t.newValue);if(e)return this.vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=hi.A;if(null!=e)try{const n=JSON.parse(e);Jr("number"==typeof n),t=n}catch(e){Wr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==hi.A&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new Fl(this.currentUser,e,t,n),i=Ll(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Yi())}pr(e){const t=Ll(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=Ml(this.persistenceKey,e),i=new Vl(e,t,n);this.setItem(r,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.ar.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Ul.Ji(n,t)}Vr(e,t){const n=this.cr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Fl.Ji(new $r(i),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return Vl.Ji(r,t)}wr(e){return jl.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);Kr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),i=this.gr(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Or(s,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=sa();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Bl{constructor(){this.Fr=new $l,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new $l,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class zl{Br(e){}shutdown(){}}
/**
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
 */class Gl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Kr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){Kr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */const Kl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
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
 */class Wl{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
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
 */class Hl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,i){const s=this.oo(e,t);Kr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.ao(e,s,o,n).then((e=>(Kr("RestConnection","Received: ",e),e)),(t=>{throw Hr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}co(e,t,n,r,i){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+qr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Kl[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(Pr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rr.NO_ERROR:const t=o.getResponseJson();Kr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Rr.TIMEOUT:Kr("Connection",'RPC "'+e+'" timed out'),s(new ti(ei.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const n=o.getStatus();if(Kr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ei).indexOf(t)>=0?t:ei.UNKNOWN}(e.status);s(new ti(t,e.message))}else s(new ti(ei.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new ti(ei.UNAVAILABLE,"Connection failed."));break;default:Qr()}}finally{Kr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Or(),s=Dr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.uo(o.initMessageHeaders,t,n),(0,c.uI)()||(0,c.b$)()||(0,c.d)()||(0,c.w1)()||(0,c.Mn)()||(0,c.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Kr("Connection","Creating WebChannel: "+a,o);const u=i.createWebChannel(a,o);let l=!1,h=!1;const d=new Wl({jr:e=>{h?Kr("Connection","Not sending because WebChannel is closed:",e):(l||(Kr("Connection","Opening WebChannel transport."),u.open(),l=!0),Kr("Connection","WebChannel sending:",e),u.send(e))},Wr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,Vr.EventType.OPEN,(()=>{h||Kr("Connection","WebChannel transport opened.")})),f(u,Vr.EventType.CLOSE,(()=>{h||(h=!0,Kr("Connection","WebChannel transport closed"),d.eo())})),f(u,Vr.EventType.ERROR,(e=>{h||(h=!0,Hr("Connection","WebChannel transport errored:",e),d.eo(new ti(ei.UNAVAILABLE,"The operation could not be completed")))})),f(u,Vr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Jr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Kr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Uo[e];if(void 0!==t)return qo(t)}(e),n=i.message;void 0===t&&(t=ei.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.eo(new ti(t,n)),u.close()}else Kr("Connection","WebChannel received:",n),d.no(n)}})),f(s,Lr.STAT_EVENT,(e=>{e.stat===Mr.PROXY?Kr("Connection","Detected buffering proxy"):e.stat===Mr.NOPROXY&&Kr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
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
 */
/**
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
 */function Yl(){return"undefined"!=typeof window?window:null}function Ql(){return"undefined"!=typeof document?document:null}
/**
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
 */function Jl(e){return new va(e,!0)}class Xl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Jn=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&Kr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
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
 */class Zl{constructor(e,t,n,r,i,s,o,a){this.Jn=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Xl(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.Vo&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===ei.RESOURCE_EXHAUSTED?(Wr(t.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===ei.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new ti(ei.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Go(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Kr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.Jn.enqueueAndForget((()=>this.Po===e?t():(Kr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eh extends Zl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.M=i}Go(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=Ra(this.M,e),n=function(e){if(!("targetChange"in e))return yi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?yi.min():t.readTime?_a(t.readTime):yi.min()}(e);return this.listener.Ko(t,n)}Qo(e){const t={};t.database=Ca(this.M),t.addTarget=function(e,t){let n;const r=t.target;return n=Es(r)?{documents:Fa(e,r)}:{query:Va(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wa(e,t.resumeToken):t.snapshotVersion.compareTo(yi.min())>0&&(n.readTime=ya(e,t.snapshotVersion.toTimestamp())),n}(this.M,e);const n=ja(this.M,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Ca(this.M),t.removeTarget=e,this.Oo(t)}}class th extends Zl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Ma(e.writeResults,e.commitTime),n=_a(e.commitTime);return this.listener.Jo(n,t)}return Jr(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ca(this.M),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Pa(this.M,e)))};this.Oo(t)}}
/**
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
 */class nh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.M=r,this.Zo=!1}tu(){if(this.Zo)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}co(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.co(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ei.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ti(ei.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class rh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Wr(t),this.su=!1):Kr("OnlineStateTracker",t)}au(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
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
 */class ih{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((e=>{n.enqueueAndForget((async()=>{fh(this)&&(Kr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zr(e);t.lu.add(4),await oh(t),t._u.set("Unknown"),t.lu.delete(4),await sh(t)}(this))}))})),this._u=new rh(n,r)}}async function sh(e){if(fh(e))for(const t of e.fu)await t(!0)}async function oh(e){for(const t of e.fu)await t(!1)}function ah(e,t){const n=Zr(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),dh(n)?hh(n):Oh(n).Co()&&uh(n,t))}function ch(e,t){const n=Zr(e),r=Oh(n);n.hu.delete(t),r.Co()&&lh(n,t),0===n.hu.size&&(r.Co()?r.ko():fh(n)&&n._u.set("Unknown"))}function uh(e,t){e.wu.Z(t.targetId),Oh(e).Qo(t)}function lh(e,t){e.wu.Z(t),Oh(e).jo(t)}function hh(e){e.wu=new da({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.hu.get(t)||null}),Oh(e).start(),e._u.iu()}function dh(e){return fh(e)&&!Oh(e).Do()&&e.hu.size>0}function fh(e){return 0===Zr(e).lu.size}function ph(e){e.wu=void 0}async function mh(e){e.hu.forEach(((t,n)=>{uh(e,t)}))}async function gh(e,t){ph(e),dh(e)?(e._u.uu(t),hh(e)):e._u.set("Unknown")}async function vh(e,t,n){if(e._u.set("Online"),t instanceof la&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){Kr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await yh(e,n)}else if(t instanceof ca?e.wu.ut(t):t instanceof ua?e.wu._t(t):e.wu.ht(t),!n.isEqual(yi.min()))try{const t=await hl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Ci.EMPTY_BYTE_STRING,n.snapshotVersion)),lh(e,t);const r=new Uc(n.target,t,1,n.sequenceNumber);uh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Kr("RemoteStore","Failed to raise snapshot:",t),await yh(e,t)}}async function yh(e,t,n){if(!xc(t))throw t;e.lu.add(1),await oh(e),e._u.set("Offline"),n||(n=()=>hl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Kr("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await sh(e)}))}function wh(e,t){return t().catch((n=>yh(e,n,t)))}async function bh(e){const t=Zr(e),n=Dh(t);let r=t.cu.length>0?t.cu[t.cu.length-1].batchId:-1;for(;_h(t);)try{const e=await pl(t.localStore,r);if(null===e){0===t.cu.length&&n.ko();break}r=e.batchId,Ih(t,e)}catch(e){await yh(t,e)}Th(t)&&Eh(t)}function _h(e){return fh(e)&&e.cu.length<10}function Ih(e,t){e.cu.push(t);const n=Dh(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Th(e){return fh(e)&&!Dh(e).Do()&&e.cu.length>0}function Eh(e){Dh(e).start()}async function kh(e){Dh(e).Xo()}async function Sh(e){const t=Dh(e);for(const n of e.cu)t.Ho(n.mutations)}async function Ah(e,t,n){const r=e.cu.shift(),i=Fc.from(r,t,n);await wh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await bh(e)}async function Ch(e,t){t&&Dh(e).zo&&await async function(e,t){if(n=t.code,$o(n)&&n!==ei.ABORTED){const n=e.cu.shift();Dh(e).No(),await wh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await bh(e)}var n}(e,t),Th(e)&&Eh(e)}async function xh(e,t){const n=Zr(e);n.asyncQueue.verifyOperationInProgress(),Kr("RemoteStore","RemoteStore received new credentials");const r=fh(n);n.lu.add(3),await oh(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await sh(n)}async function Nh(e,t){const n=Zr(e);t?(n.lu.delete(2),await sh(n)):t||(n.lu.add(2),await oh(n),n._u.set("Unknown"))}function Oh(e){return e.mu||(e.mu=function(e,t,n){const r=Zr(e);return r.tu(),new eh(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)
/**
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
 */}(e.datastore,e.asyncQueue,{zr:mh.bind(null,e),Jr:gh.bind(null,e),Ko:vh.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),dh(e)?hh(e):e._u.set("Unknown")):(await e.mu.stop(),ph(e))}))),e.mu}function Dh(e){return e.gu||(e.gu=function(e,t,n){const r=Zr(e);return r.tu(),new th(t,r.bo,r.authCredentials,r.appCheckCredentials,r.M,n)}(e.datastore,e.asyncQueue,{zr:kh.bind(null,e),Jr:Ch.bind(null,e),Yo:Sh.bind(null,e),Jo:Ah.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await bh(e)):(await e.gu.stop(),e.cu.length>0&&(Kr("RemoteStore",`Stopping write stream with ${e.cu.length} pending writes`),e.cu=[]))}))),e.gu
/**
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
 */}class Rh{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Rh(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ti(ei.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ph(e,t){if(Wr("AsyncQueue",`${t}: ${e}`),xc(e))return new ti(ei.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class Lh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||$i.comparator(t.key,n.key):(e,t)=>$i.comparator(e.key,t.key),this.keyedMap=Zo(),this.sortedSet=new zo(this.comparator)}static emptySet(e){return new Lh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Lh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Lh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class Mh{constructor(){this.yu=new zo($i.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Qr():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Fh{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Fh(e,t,Lh.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Js(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
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
 */class Vh{constructor(){this.Iu=void 0,this.listeners=[]}}class Uh{constructor(){this.queries=new Bo((e=>Xs(e)),Js),this.onlineState="Unknown",this.Tu=new Set}}async function jh(e,t){const n=Zr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Vh),i)try{s.Iu=await n.onListen(r)}catch(e){const n=Ph(e,`Initialization of query '${Zs(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&zh(n)}async function $h(e,t){const n=Zr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qh(e,t){const n=Zr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(i)&&(r=!0);t.Iu=i}}r&&zh(n)}function Bh(e,t,n){const r=Zr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function zh(e){e.Tu.forEach((e=>{e.next()}))}class Gh{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Fh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),t=!0):this.vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}Vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Fh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
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
 */class Kh{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
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
 */class Wh{constructor(e){this.M=e}li(e){return ka(this.M,e)}fi(e){return e.metadata.exists?Oa(this.M,e.document,!1):us.newNoDocument(this.li(e.metadata.name),this.di(e.metadata.readTime))}di(e){return _a(e)}}class Hh{constructor(e,t,n){this.xu=e,this.localStore=t,this.M=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yh(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Ti.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Wh(this.M);for(const r of e)if(r.metadata.queries){const e=n.li(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||ra()).add(e);t.set(n,r)}}return t}async complete(){const e=await _l(this.localStore,new Wh(this.M),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await Il(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function Yh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
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
 */class Qh{constructor(e){this.key=e}}class Jh{constructor(e){this.key=e}}class Xh{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=ra(),this.mutatedKeys=ra(),this.Lu=no(e),this.Uu=new Lh(this.Lu)}get qu(){return this.Fu}Gu(e,t){const n=t?t.Ku:new Mh,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Bs(this.query)&&r.size===this.query.limit?r.last():null,c=zs(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=eo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Bs(this.query)||zs(this.query))for(;s.size>this.query.limit;){const e=Bs(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Ku:n,ei:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qr()}};return n(e)-n(t)}
/**
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
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new Fh(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Mh,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=ra(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Jh(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new Qh(n))})),t}Ju(e){this.Fu=e.hi,this.Bu=ra();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Yu(){return Fh.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Zh{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class ed{constructor(e){this.key=e,this.Xu=!1}}class td{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.ta=new Bo((e=>Xs(e)),Js),this.ea=new Map,this.na=new Set,this.sa=new zo($i.comparator),this.ia=new Map,this.ra=new kl,this.oa={},this.ua=new Map,this.aa=Ou.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return!0===this.ca}}async function nd(e,t){const n=Od(e);let r,i;const s=n.ta.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await ml(n.localStore,Ys(t));n.isPrimaryClient&&ah(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await rd(n,t,r,"current"===s)}return i}async function rd(e,t,n,r){e.ha=(t,n,r)=>async function(e,t,n,r){let i=t.view.Gu(n);i.ei&&(i=await vl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Gu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return gd(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await vl(e.localStore,t,!0),s=new Xh(t,i.hi),o=s.Gu(i.documents),a=aa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=s.applyChanges(o,e.isPrimaryClient,a);gd(e,n,c.zu);const u=new Zh(t,n,s);return e.ta.set(t,u),e.ea.has(n)?e.ea.get(n).push(t):e.ea.set(n,[t]),c.snapshot}async function id(e,t){const n=Zr(e),r=n.ta.get(t),i=n.ea.get(r.targetId);if(i.length>1)return n.ea.set(r.targetId,i.filter((e=>!Js(e,t)))),void n.ta.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ch(n.remoteStore,r.targetId),pd(n,r.targetId)})).catch(Mu)):(pd(n,r.targetId),await gl(n.localStore,r.targetId,!0))}async function sd(e,t,n){const r=Dd(e);try{const e=await function(e,t){const n=Zr(e),r=vi.now(),i=t.reduce(((e,t)=>e.add(t.key)),ra());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.ai.qs(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=Co(e,s.get(e.key));null!=t&&o.push(new Do(e.key,t,cs(t.value.mapValue),To.exists(!0)))}return n.$s.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oa[e.currentUser.toKey()];r||(r=new zo(pi)),r=r.insert(t,n),e.oa[e.currentUser.toKey()]=r}(r,e.batchId,n),await wd(r,e.changes),await bh(r.remoteStore)}catch(e){const t=Ph(e,"Failed to persist write");n.reject(t)}}async function od(e,t){const n=Zr(e);try{const e=await dl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ia.get(t);r&&(Jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?Jr(r.Xu):e.removedDocuments.size>0&&(Jr(r.Xu),r.Xu=!1))})),await wd(n,e,t)}catch(e){await Mu(e)}}function ad(e,t,n){const r=Zr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ta.forEach(((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Zr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Eu(t)&&(r=!0)})),r&&zh(n)}(r.eventManager,t),e.length&&r.Zu.Ko(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cd(e,t,n){const r=Zr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ia.get(t),s=i&&i.key;if(s){let e=new zo($i.comparator);e=e.insert(s,us.newNoDocument(s,yi.min()));const n=ra().add(s),i=new oa(yi.min(),new Map,new Wo(pi),e,n);await od(r,i),r.sa=r.sa.remove(s),r.ia.delete(t),yd(r)}else await gl(r.localStore,t,!1).then((()=>pd(r,t,n))).catch(Mu)}async function ud(e,t){const n=Zr(e),r=t.batch.batchId;try{const e=await ll(n.localStore,t);fd(n,r,null),dd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wd(n,e)}catch(e){await Mu(e)}}async function ld(e,t,n){const r=Zr(e);try{const e=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.$s.lookupMutationBatch(e,t).next((t=>(Jr(null!==t),r=t.keys(),n.$s.removeMutationBatch(e,t)))).next((()=>n.$s.performConsistencyCheck(e))).next((()=>n.ai.qs(e,r)))}))}(r.localStore,t);fd(r,t,n),dd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await wd(r,e)}catch(n){await Mu(n)}}async function hd(e,t){const n=Zr(e);fh(n.remoteStore)||Kr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Zr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.$s.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.ua.get(e)||[];r.push(t),n.ua.set(e,r)}catch(e){const n=Ph(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function dd(e,t){(e.ua.get(t)||[]).forEach((e=>{e.resolve()})),e.ua.delete(t)}function fd(e,t,n){const r=Zr(e);let i=r.oa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oa[r.currentUser.toKey()]=i}}function pd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ea.get(t))e.ta.delete(r),n&&e.Zu.la(r,n);e.ea.delete(t),e.isPrimaryClient&&e.ra.Ri(t).forEach((t=>{e.ra.containsKey(t)||md(e,t)}))}function md(e,t){e.na.delete(t.path.canonicalString());const n=e.sa.get(t);null!==n&&(ch(e.remoteStore,n),e.sa=e.sa.remove(t),e.ia.delete(n),yd(e))}function gd(e,t,n){for(const r of n)r instanceof Qh?(e.ra.addReference(r.key,t),vd(e,r)):r instanceof Jh?(Kr("SyncEngine","Document no longer in limbo: "+r.key),e.ra.removeReference(r.key,t),e.ra.containsKey(r.key)||md(e,r.key)):Qr()}function vd(e,t){const n=t.key,r=n.path.canonicalString();e.sa.get(n)||e.na.has(r)||(Kr("SyncEngine","New document in limbo: "+n),e.na.add(r),yd(e))}function yd(e){for(;e.na.size>0&&e.sa.size<e.maxConcurrentLimboResolutions;){const t=e.na.values().next().value;e.na.delete(t);const n=new $i(Ti.fromString(t)),r=e.aa.next();e.ia.set(r,new ed(n)),e.sa=e.sa.insert(n,r),ah(e.remoteStore,new Uc(Ys(qs(n.path)),r,2,hi.A))}}async function wd(e,t,n){const r=Zr(e),i=[],s=[],o=[];r.ta.isEmpty()||(r.ta.forEach(((e,a)=>{o.push(r.ha(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=sl.Js(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Zu.Ko(i),await async function(e,t){const n=Zr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ec.forEach(t,(t=>Ec.forEach(t.zs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ec.forEach(t.Hs,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xc(e))throw e;Kr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.si.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.si=n.si.insert(e,i)}}}(r.localStore,s))}async function bd(e,t){const n=Zr(e);if(!n.currentUser.isEqual(t)){Kr("SyncEngine","User change. New user:",t.toKey());const e=await ul(n.localStore,t);n.currentUser=t,function(e,t){e.ua.forEach((e=>{e.forEach((e=>{e.reject(new ti(ei.CANCELLED,t))}))})),e.ua.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await wd(n,e.ci)}}function _d(e,t){const n=Zr(e),r=n.ia.get(t);if(r&&r.Xu)return ra().add(r.key);{let e=ra();const r=n.ea.get(t);if(!r)return e;for(const t of r){const r=n.ta.get(t);e=e.unionWith(r.view.qu)}return e}}async function Id(e,t){const n=Zr(e),r=await vl(n.localStore,t.query,!0),i=t.view.Ju(r);return n.isPrimaryClient&&gd(n,t.targetId,i.zu),i}async function Td(e,t){const n=Zr(e);return wl(n.localStore,t).then((e=>wd(n,e)))}async function Ed(e,t,n,r){const i=Zr(e),s=await function(e,t){const n=Zr(e),r=Zr(n.$s);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.ln(e,t).next((t=>t?n.ai.qs(e,t):Ec.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await bh(i.remoteStore):"acknowledged"===n||"rejected"===n?(fd(i,t,r||null),dd(i,t),function(e,t){Zr(Zr(e).$s).dn(t)}(i.localStore,t)):Qr(),await wd(i,s)):Kr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function kd(e,t){const n=Zr(e);if(Od(n),Dd(n),!0===t&&!0!==n.ca){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Sd(n,e.toArray());n.ca=!0,await Nh(n.remoteStore,!0);for(const r of t)ah(n.remoteStore,r)}else if(!1===t&&!1!==n.ca){const e=[];let t=Promise.resolve();n.ea.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(pd(n,i),gl(n.localStore,i,!0)))),ch(n.remoteStore,i)})),await t,await Sd(n,e),function(e){const t=Zr(e);t.ia.forEach(((e,n)=>{ch(t.remoteStore,n)})),t.ra.bi(),t.ia=new Map,t.sa=new zo($i.comparator)}(n),n.ca=!1,await Nh(n.remoteStore,!1)}}async function Sd(e,t,n){const r=Zr(e),i=[],s=[];for(const o of t){let e;const t=r.ea.get(o);if(t&&0!==t.length){e=await ml(r.localStore,Ys(t[0]));for(const e of t){const t=r.ta.get(e),n=await Id(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await yl(r.localStore,o);e=await ml(r.localStore,t),await rd(r,Ad(t),o,!1)}i.push(e)}return r.Zu.Ko(s),i}function Ad(e){return $s(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Cd(e){const t=Zr(e);return Zr(Zr(t.localStore).persistence).Os()}async function xd(e,t,n,r){const i=Zr(e);if(i.ca)return void Kr("SyncEngine","Ignoring unexpected query state notification.");const s=i.ea.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await wl(i.localStore,to(s[0])),r=oa.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await wd(i,e,r);break}case"rejected":await gl(i.localStore,t,!0),pd(i,t,r);break;default:Qr()}}async function Nd(e,t,n){const r=Od(e);if(r.ca){for(const e of t){if(r.ea.has(e)){Kr("SyncEngine","Adding an already active target "+e);continue}const t=await yl(r.localStore,e),n=await ml(r.localStore,t);await rd(r,Ad(t),n.targetId,!1),ah(r.remoteStore,n)}for(const e of n)r.ea.has(e)&&await gl(r.localStore,e,!1).then((()=>{ch(r.remoteStore,e),pd(r,e)})).catch(Mu)}}function Od(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_d.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cd.bind(null,t),t.Zu.Ko=qh.bind(null,t.eventManager),t.Zu.la=Bh.bind(null,t.eventManager),t}function Dd(e){const t=Zr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ud.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ld.bind(null,t),t}function Rd(e,t,n){const r=Zr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Zr(e),r=_a(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Yh(r));const i=new Hh(r,e.localStore,t.M);let s=await t.fa();for(;s;){const e=await i.Nu(s);e&&n._updateProgress(e),s=await t.fa()}const o=await i.complete();return await wd(e,o.Ou,void 0),await function(e,t){const n=Zr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return Hr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
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
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Pd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return cl(this.persistence,new ol,e.initialUser,this.M)}_a(e){return new Ol(Rl.Wi,this.M)}da(e){return new Bl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ld extends Pd{constructor(e,t,n){super(),this.ga=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await Dd(this.ga.syncEngine),await bh(this.ga.remoteStore),await this.persistence.Is((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve())))}ma(e){return cl(this.persistence,new ol,e.initialUser,this.M)}wa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new Uu(t,e.asyncQueue)}_a(e){const t=rl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Tu.withCacheSize(this.cacheSizeBytes):Tu.DEFAULT;return new el(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yl(),Ql(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new Bl}}class Md extends Ld{constructor(e,t){super(e,t,!1),this.ga=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ga.syncEngine;this.sharedClientState instanceof ql&&(this.sharedClientState.syncEngine={kr:Ed.bind(null,t),Mr:xd.bind(null,t),Or:Nd.bind(null,t),Os:Cd.bind(null,t),Nr:Td.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Is((async e=>{await kd(this.ga.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):e||this.gcScheduler.stop())}))}da(e){const t=Yl();if(!ql.vt(t))throw new ti(ei.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=rl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ql(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Fd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>ad(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=bd.bind(null,this.syncEngine),await Nh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Uh}createDatastore(e){const t=Jl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Hl(r));var r;return function(e,t,n,r){return new nh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>ad(this.syncEngine,e,0),s=Gl.vt()?new Gl:new zl,new ih(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new td(e,t,n,r,i,s);return o&&(a.ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zr(e);Kr("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await oh(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
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
 */function Vd(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
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
 */
/**
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
 */class Ud{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */class jd{constructor(e,t){this.Ia=e,this.M=t,this.metadata=new ni,this.buffer=new Uint8Array,this.Ta=new TextDecoder("utf-8"),this.Ea().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ia.cancel()}async getMetadata(){return this.metadata.promise}async fa(){return await this.getMetadata(),this.Ea()}async Ea(){const e=await this.Aa();if(null===e)return null;const t=this.Ta.decode(e),n=Number(t);isNaN(n)&&this.Ra(`length string (${t}) is not valid number`);const r=await this.ba(n);return new Kh(JSON.parse(r),e.length+n)}Pa(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Aa(){for(;this.Pa()<0;)if(await this.Va())break;if(0===this.buffer.length)return null;const e=this.Pa();e<0&&this.Ra("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.Va()&&this.Ra("Reached the end of bundle when more is expected.");const t=this.Ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ra(e){throw this.Ia.cancel(),new Error(`Invalid bundle format: ${e}`)}async Va(){const e=await this.Ia.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
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
 */class $d{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ti(ei.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Zr(e),r=Ca(n.M)+"/documents",i={documents:t.map((e=>Ea(n.M,e)))},s=await n.co("BatchGetDocuments",r,i),o=new Map;s.forEach((e=>{const t=Da(n.M,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Jr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=$i.fromPath(t);this.mutations.push(new Fo(n,this.precondition(n)))})),await async function(e,t){const n=Zr(e),r=Ca(n.M)+"/documents",i={writes:t.map((e=>Pa(n.M,e)))};await n.ro("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Qr();t=yi.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ti(ei.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?To.updateTime(t):To.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(yi.min()))throw new ti(ei.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return To.updateTime(t)}return To.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
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
 */class qd{constructor(e,t,n,r){this.asyncQueue=e,this.datastore=t,this.updateFunction=n,this.deferred=r,this.va=5,this.So=new Xl(this.asyncQueue,"transaction_retry")}run(){this.va-=1,this.Sa()}Sa(){this.So.Io((async()=>{const e=new $d(this.datastore),t=this.Da(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Ca(e)}))))})).catch((e=>{this.Ca(e)}))}))}Da(e){try{const t=this.updateFunction(e);return!Vi(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Ca(e){this.va>0&&this.xa(e)?(this.va-=1,this.asyncQueue.enqueueAndForget((()=>(this.Sa(),Promise.resolve())))):this.deferred.reject(e)}xa(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!$o(t)}return!1}}
/**
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
 */class Bd{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=$r.UNAUTHENTICATED,this.clientId=fi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Kr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Kr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ti(ei.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Ph(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function zd(e,t){e.asyncQueue.verifyOperationInProgress(),Kr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ul(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Gd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Kd(e);Kr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>xh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>xh(t.remoteStore,n))),e.onlineComponents=t}async function Kd(e){return e.offlineComponents||(Kr("FirestoreClient","Using default OfflineComponentProvider"),await zd(e,new Pd)),e.offlineComponents}async function Wd(e){return e.onlineComponents||(Kr("FirestoreClient","Using default OnlineComponentProvider"),await Gd(e,new Fd)),e.onlineComponents}function Hd(e){return Kd(e).then((e=>e.persistence))}function Yd(e){return Kd(e).then((e=>e.localStore))}function Qd(e){return Wd(e).then((e=>e.remoteStore))}function Jd(e){return Wd(e).then((e=>e.syncEngine))}async function Xd(e){const t=await Wd(e),n=t.eventManager;return n.onListen=nd.bind(null,t.syncEngine),n.onUnlisten=id.bind(null,t.syncEngine),n}function Zd(e){return e.asyncQueue.enqueue((async()=>{const t=await Hd(e),n=await Qd(e);return t.setNetworkEnabled(!0),function(e){const t=Zr(e);return t.lu.delete(0),sh(t)}(n)}))}function ef(e){return e.asyncQueue.enqueue((async()=>{const t=await Hd(e),n=await Qd(e);return t.setNetworkEnabled(!1),async function(e){const t=Zr(e);t.lu.add(0),await oh(t),t._u.set("Offline")}(n)}))}function tf(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Zr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.ai.Bs(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ti(ei.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Ph(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Yd(e),t,n))),n.promise}function nf(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ud({next:s=>{t.enqueueAndForget((()=>$h(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ti(ei.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Gh(qs(n.path),s,{includeMetadataChanges:!0,Du:!0});return jh(e,o)}(await Xd(e),e.asyncQueue,t,n,r))),r.promise}function rf(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await vl(e,t,!0),i=new Xh(t,r.hi),s=i.Gu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Ph(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Yd(e),t,n))),n.promise}function sf(e,t,n={}){const r=new ni;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new Ud({next:n=>{t.enqueueAndForget((()=>$h(e,o))),n.fromCache&&"server"===r.source?i.reject(new ti(ei.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Gh(n,s,{includeMetadataChanges:!0,Du:!0});return jh(e,o)}(await Xd(e),e.asyncQueue,t,n,r))),r.promise}function of(e,t){const n=new Ud(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Tu.add(t),t.next()}(await Xd(e),n))),()=>{n.pa(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Zr(e).Tu.delete(t)}(await Xd(e),n)))}}function af(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>{const r=await function(e){return Wd(e).then((e=>e.datastore))}(e);new qd(e.asyncQueue,r,t,n).run()})),n.promise}function cf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new jd(e,t)}(function(e,t){if(e instanceof Uint8Array)return Vd(e,t);if(e instanceof ArrayBuffer)return Vd(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
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
 */(n,Jl(t));e.asyncQueue.enqueueAndForget((async()=>{Rd(await Jd(e),i,r)}))}function uf(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Zr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.ds.getNamedQuery(e,t)))}(await Yd(e),t)))}const lf=new Map;
/**
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
 */function hf(e,t,n){if(!n)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function df(e,t,n,r){if(!0===t&&!0===r)throw new ti(ei.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ff(e){if(!$i.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function pf(e){if($i.isDocumentKey(e))throw new ti(ei.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Qr()}function gf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ti(ei.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(e);throw new ti(ei.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function vf(e,t){if(t<=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
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
 */class yf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ti(ei.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ti(ei.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,df("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
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
 */class wf{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yf({}),this._settingsFrozen=!1,e instanceof Fi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ti(ei.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fi(e.options.projectId)}(e))}get app(){if(!this._app)throw new ti(ei.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ii;switch(e.type){case"gapi":const t=e.client;return Jr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ci(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ti(ei.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=lf.get(e);t&&(Kr("ComponentProvider","Removing Datastore"),lf.delete(e),t.terminate())}(this),Promise.resolve()}}function bf(e,t,n,r={}){var i;const s=(e=gf(e,wf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Hr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=$r.MOCK_USER;else{t=(0,c.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ti(ei.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new $r(s)}e._authCredentials=new si(new ri(t,n))}}
/**
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
 */class _f{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _f(this.firestore,e,this._key)}}class If{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new If(this.firestore,e,this._query)}}class Tf extends If{constructor(e,t,n){super(e,t,qs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _f(this.firestore,null,new $i(e))}withConverter(e){return new Tf(this.firestore,e,this._path)}}function Ef(e,t,...n){if(e=(0,c.m9)(e),hf("collection","path",t),e instanceof wf){const r=Ti.fromString(t,...n);return pf(r),new Tf(e,null,r)}{if(!(e instanceof _f||e instanceof Tf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return pf(r),new Tf(e.firestore,null,r)}}function kf(e,t){if(e=gf(e,wf),hf("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ti(ei.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new If(e,null,function(e){return new js(Ti.emptyPath(),e)}(t))}function Sf(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=fi.R()),hf("doc","path",t),e instanceof wf){const r=Ti.fromString(t,...n);return ff(r),new _f(e,null,new $i(r))}{if(!(e instanceof _f||e instanceof Tf))throw new ti(ei.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return ff(r),new _f(e.firestore,e instanceof Tf?e.converter:null,new $i(r))}}function Af(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof _f||e instanceof Tf)&&(t instanceof _f||t instanceof Tf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Cf(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof If&&t instanceof If&&e.firestore===t.firestore&&Js(e._query,t._query)&&e.converter===t.converter
/**
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
 */}class xf{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Xl(this,"async_queue_retry"),this.Ua=()=>{const e=Ql();e&&Kr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Ql();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const t=Ql();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise((()=>{}));const t=new ni;return this.Ga((()=>this.Ma&&this.Ba?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ka.push(e),this.Ka())))}async Ka(){if(0!==this.ka.length){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(T){if(!xc(T))throw T;Kr("AsyncQueue","Operation failed with retryable error: "+T)}this.ka.length>0&&this.So.Io((()=>this.Ka()))}}Ga(e){const t=this.Na.then((()=>(this.$a=!0,e().catch((e=>{this.Fa=e,this.$a=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
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
 */(e);throw Wr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.$a=!1,e))))));return this.Na=t,t}enqueueAfterDelay(e,t,n){this.qa(),this.La.indexOf(e)>-1&&(t=0);const r=Rh.createAndSchedule(this,e,t,n,(e=>this.Qa(e)));return this.Oa.push(r),r}qa(){this.Fa&&Qr()}verifyOperationInProgress(){}async ja(){let e;do{e=this.Na,await e}while(e!==this.Na)}Wa(e){for(const t of this.Oa)if(t.timerId===e)return!0;return!1}za(e){return this.ja().then((()=>{this.Oa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Oa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ja()}))}Ha(e){this.La.push(e)}Qa(e){const t=this.Oa.indexOf(e);this.Oa.splice(t,1)}}function Nf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
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
 */(e,["next","error","complete"])}class Of{constructor(){this._progressObserver={},this._taskCompletionResolver=new ni,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
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
 */const Df=-1;class Rf extends wf{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new xf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Lf(this),this._firestoreClient.terminate()}}function Pf(e){return e._firestoreClient||Lf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Lf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Mi(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Bd(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Mf(e,t){Gf(e=gf(e,Rf));const n=Pf(e),r=e._freezeSettings(),i=new Fd;return Vf(n,i,new Ld(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Ff(e){Gf(e=gf(e,Rf));const t=Pf(e),n=e._freezeSettings(),r=new Fd;return Vf(t,r,new Md(r,n.cacheSizeBytes))}function Vf(e,t,n){const r=new ni;return e.asyncQueue.enqueue((async()=>{try{await zd(e,n),await Gd(e,t),r.resolve()}catch(e){if(!function(e){return"FirebaseError"===e.name?e.code===ei.FAILED_PRECONDITION||e.code===ei.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(e))throw e;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+e),r.reject(e)}})).then((()=>r.promise))}function Uf(e){if(e._initialized&&!e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new ni;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Sc.vt())return Promise.resolve();const t=e+"main";await Sc.delete(t)}(rl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function jf(e){return function(e){const t=new ni;return e.asyncQueue.enqueueAndForget((async()=>hd(await Jd(e),t))),t.promise}(Pf(e=gf(e,Rf)))}function $f(e){return Zd(Pf(e=gf(e,Rf)))}function qf(e){return ef(Pf(e=gf(e,Rf)))}function Bf(e,t){const n=Pf(e=gf(e,Rf)),r=new Of;return cf(n,e._databaseId,t,r),r}function zf(e,t){return uf(Pf(e=gf(e,Rf)),t).then((t=>t?new If(e,null,t.query):null))}function Gf(e){if(e._initialized||e._terminated)throw new ti(ei.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
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
 */
/**
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
 */class Kf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ti(ei.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ki(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class Wf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wf(Ci.fromBase64String(e))}catch(e){throw new ti(ei.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Wf(Ci.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class Hf{constructor(e){this._methodName=e}}
/**
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
 */class Yf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ti(ei.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ti(ei.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pi(this._lat,e._lat)||pi(this._long,e._long)}}
/**
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
 */const Qf=/^__.*__$/;class Jf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Do(e,this.data,this.fieldMask,t,this.fieldTransforms):new Oo(e,this.data,t,this.fieldTransforms)}}class Xf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Do(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qr()}}class ep{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.M=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Xa({path:n,tc:!1});return r.ec(e),r}nc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Xa({path:n,tc:!1});return r.Ja(),r}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return bp(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(0===e.length)throw this.ic("Document fields must not be empty");if(Zf(this.Ya)&&Qf.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class tp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=n||Jl(e)}uc(e,t,n,r=!1){return new ep({Ya:e,methodName:t,oc:n,path:ki.emptyPath(),tc:!1,rc:r},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function np(e){const t=e._freezeSettings(),n=Jl(e._databaseId);return new tp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rp(e,t,n,r,i,s={}){const o=e.uc(s.merge||s.mergeFields?2:0,t,n,i);gp("Data must be an object, but it was:",o,r);const a=pp(r,o);let c,u;if(s.merge)c=new Si(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=vp(t,r,n);if(!o.contains(i))throw new ti(ei.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);_p(e,i)||e.push(i)}c=new Si(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Jf(new as(a),c,u)}class ip extends Hf{_toFieldTransform(e){if(2!==e.Ya)throw 1===e.Ya?e.ic(`${this._methodName}() can only appear at the top level of your update data`):e.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ip}}function sp(e,t,n){return new ep({Ya:3,oc:t.settings.oc,methodName:e._methodName,tc:n},t.databaseId,t.M,t.ignoreUndefinedProperties)}class op extends Hf{_toFieldTransform(e){return new bo(e.path,new ho)}isEqual(e){return e instanceof op}}class ap extends Hf{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=sp(this,e,!0),n=this.ac.map((e=>fp(e,t))),r=new fo(n);return new bo(e.path,r)}isEqual(e){return this===e}}class cp extends Hf{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=sp(this,e,!0),n=this.ac.map((e=>fp(e,t))),r=new mo(n);return new bo(e.path,r)}isEqual(e){return this===e}}class up extends Hf{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=new vo(e.M,oo(e.M,this.cc));return new bo(e.path,t)}isEqual(e){return this===e}}function lp(e,t,n,r){const i=e.uc(1,t,n);gp("Data must be an object, but it was:",i,r);const s=[],o=as.empty();bi(r,((e,r)=>{const a=wp(t,e,n);r=(0,c.m9)(r);const u=i.nc(a);if(r instanceof ip)s.push(a);else{const e=fp(r,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Si(s);return new Xf(o,a,i.fieldTransforms)}function hp(e,t,n,r,i,s){const o=e.uc(1,t,n),a=[vp(t,r,n)],u=[i];if(s.length%2!=0)throw new ti(ei.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(vp(t,s[c])),u.push(s[c+1]);const l=[],h=as.empty();for(let f=a.length-1;f>=0;--f)if(!_p(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.nc(e);if(t instanceof ip)l.push(e);else{const r=fp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new Si(l);return new Xf(h,d,o.fieldTransforms)}function dp(e,t,n,r=!1){return fp(n,e.uc(r?4:3,t))}function fp(e,t){if(mp(e=(0,c.m9)(e)))return gp("Unsupported field value:",t,e),pp(e,t);if(e instanceof Hf)return function(e,t){if(!Zf(t.Ya))throw t.ic(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ic(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.tc&&4!==t.Ya)throw t.ic("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=fp(i,t.sc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return oo(t.M,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=vi.fromDate(e);return{timestampValue:ya(t.M,n)}}if(e instanceof vi){const n=new vi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ya(t.M,n)}}if(e instanceof Yf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Wf)return{bytesValue:wa(t.M,e._byteString)};if(e instanceof _f){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ic(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ia(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ic(`Unsupported field value: ${mf(e)}`)}(e,t)}function pp(e,t){const n={};return _i(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bi(e,((e,r)=>{const i=fp(r,t.Za(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function mp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof vi||e instanceof Yf||e instanceof Wf||e instanceof _f||e instanceof Hf)}function gp(e,t,n){if(!mp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=mf(n);throw"an object"===r?t.ic(e+" a custom object"):t.ic(e+" "+r)}}function vp(e,t,n){if((t=(0,c.m9)(t))instanceof Kf)return t._internalPath;if("string"==typeof t)return wp(e,t);throw bp("Field path arguments must be of type string or ",e,!1,void 0,n)}const yp=new RegExp("[~\\*/\\[\\]]");function wp(e,t,n){if(t.search(yp)>=0)throw bp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kf(...t.split("."))._internalPath}catch(r){throw bp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function bp(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ti(ei.INVALID_ARGUMENT,a+e+c)}function _p(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Ip{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _f(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Tp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ep("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Tp extends Ip{data(){return super.data()}}function Ep(e,t){return"string"==typeof t?wp(e,t):t instanceof Kf?t._internalPath:t._delegate._internalPath}
/**
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
 */class kp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sp extends Ip{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ap(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ep("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Ap extends Sp{data(e={}){return super.data(e)}}class Cp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new kp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Ap(this._firestore,this._userDataWriter,n.key,n,new kp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ti(ei.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Ap(e._firestore,e._userDataWriter,n.doc.key,n.doc,new kp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Ap(e._firestore,e._userDataWriter,t.doc.key,t.doc,new kp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:xp(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qr()}}function Np(e,t){return e instanceof Sp&&t instanceof Sp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Cp&&t instanceof Cp&&e._firestore===t._firestore&&Cf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
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
 */function Op(e){if(zs(e)&&0===e.explicitOrderBy.length)throw new ti(ei.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}function Rp(e,...t){for(const n of t)e=n._apply(e);return e}class Pp extends Dp{constructor(e,t,n){super(),this.hc=e,this.lc=t,this.fc=n,this.type="where"}_apply(e){const t=np(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Yp(o,s);const t=[];for(const n of o)t.push(Hp(r,e,n));a={arrayValue:{values:t}}}else a=Hp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Yp(o,s),a=dp(n,t,o,"in"===s||"not-in"===s);const c=Ss.create(i,s,a);return function(e,t){if(t.S()){const n=Ks(e);if(null!==n&&!n.isEqual(t.field))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Gs(e);null!==r&&Qp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ti(ei.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.hc,this.lc,this.fc);return new If(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Lp(e,t,n){const r=t,i=Ep("where",e);return new Pp(i,r,n)}class Mp extends Dp{constructor(e,t){super(),this.hc=e,this.dc=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ms(t,n);return function(e,t){if(null===Gs(e)){const n=Ks(e);null!==n&&Qp(e,n,t.field)}}(e,r),r}(e._query,this.hc,this.dc);return new If(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new js(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Fp(e,t="asc"){const n=t,r=Ep("orderBy",e);return new Mp(r,n)}class Vp extends Dp{constructor(e,t,n){super(),this.type=e,this._c=t,this.wc=n}_apply(e){return new If(e.firestore,e.converter,Qs(e._query,this._c,this.wc))}}function Up(e){return vf("limit",e),new Vp("limit",e,"F")}function jp(e){return vf("limitToLast",e),new Vp("limitToLast",e,"L")}class $p extends Dp{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=Wp(e,this.type,this.mc,this.gc);return new If(e.firestore,e.converter,function(e,t){return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function qp(...e){return new $p("startAt",e,!0)}function Bp(...e){return new $p("startAfter",e,!1)}class zp extends Dp{constructor(e,t,n){super(),this.type=e,this.mc=t,this.gc=n}_apply(e){const t=Wp(e,this.type,this.mc,this.gc);return new If(e.firestore,e.converter,function(e,t){return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Gp(...e){return new zp("endBefore",e,!1)}function Kp(...e){return new zp("endAt",e,!0)}function Wp(e,t,n,r){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Ip)return function(e,t,n,r,i){if(!r)throw new ti(ei.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Hs(e))if(o.field.isKeyField())s.push(Ji(t,r.key));else{const e=r.data.field(o.field);if(Ri(e))throw new ti(ei.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ls(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=np(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new ti(ei.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new ti(ei.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Ws(e)&&-1!==s.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Ti.fromString(s));if(!$i.isDocumentKey(n))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new $i(n);a.push(Ji(t,i))}else{const e=dp(n,r,s);a.push(e)}}return new Ls(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Hp(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new ti(ei.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ws(t)&&-1!==n.indexOf("/"))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!$i.isDocumentKey(r))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ji(e,new $i(r))}if(n instanceof _f)return Ji(e,n._key);throw new ti(ei.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mf(n)}.`)}function Yp(e,t){if(!Array.isArray(e)||0===e.length)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ti(ei.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Qp(e,t,n){if(!n.isEqual(t))throw new ti(ei.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
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
 */class Jp{convertValue(e,t="none"){switch(zi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Di(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Qr()}}convertObject(e,t){const n={};return bi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Yf(Oi(e.latitude),Oi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Li(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new vi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);Jr(Ya(n));const r=new Fi(n.get(1),n.get(3)),i=new $i(n.popFirst(5));return r.isEqual(t)||Wr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
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
 */function Xp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Zp extends Jp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _f(this.firestore,null,t)}}
/**
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
 */class em{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=np(e)}set(e,t,n){this._verifyNotCommitted();const r=tm(e,this._firestore),i=Xp(r.converter,t,n),s=rp(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,To.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Kf?hp(this._dataReader,"WriteBatch.update",i._key,t,n,r):lp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,To.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tm(e,this._firestore);return this._mutations=this._mutations.concat(new Mo(t._key,To.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ti(ei.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tm(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new ti(ei.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
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
 */
/**
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
 */function nm(e){e=gf(e,_f);const t=gf(e.firestore,Rf);return nf(Pf(t),e._key).then((n=>gm(t,e,n)))}class rm extends Jp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _f(this.firestore,null,t)}}function im(e){e=gf(e,_f);const t=gf(e.firestore,Rf),n=Pf(t),r=new rm(t);return tf(n,e._key).then((n=>new Sp(t,r,e._key,n,new kp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function sm(e){e=gf(e,_f);const t=gf(e.firestore,Rf);return nf(Pf(t),e._key,{source:"server"}).then((n=>gm(t,e,n)))}function om(e){e=gf(e,If);const t=gf(e.firestore,Rf),n=Pf(t),r=new rm(t);return Op(e._query),sf(n,e._query).then((n=>new Cp(t,r,e,n)))}function am(e){e=gf(e,If);const t=gf(e.firestore,Rf),n=Pf(t),r=new rm(t);return rf(n,e._query).then((n=>new Cp(t,r,e,n)))}function cm(e){e=gf(e,If);const t=gf(e.firestore,Rf),n=Pf(t),r=new rm(t);return sf(n,e._query,{source:"server"}).then((n=>new Cp(t,r,e,n)))}function um(e,t,n){e=gf(e,_f);const r=gf(e.firestore,Rf),i=Xp(e.converter,t,n);return mm(r,[rp(np(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,To.none())])}function lm(e,t,n,...r){e=gf(e,_f);const i=gf(e.firestore,Rf),s=np(i);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof Kf?hp(s,"updateDoc",e._key,t,n,r):lp(s,"updateDoc",e._key,t),mm(i,[o.toMutation(e._key,To.exists(!0))])}function hm(e){return mm(gf(e.firestore,Rf),[new Mo(e._key,To.none())])}function dm(e,t){const n=gf(e.firestore,Rf),r=Sf(e),i=Xp(e.converter,t);return mm(n,[rp(np(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,To.exists(!1))]).then((()=>r))}function fm(e,...t){var n,r,i;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Nf(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Nf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof _f)l=gf(e.firestore,Rf),h=qs(e._key.path),u={next:n=>{t[o]&&t[o](gm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=gf(e,If);l=gf(n.firestore,Rf),h=n._query;const r=new rm(l);u={next:e=>{t[o]&&t[o](new Cp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Op(e._query)}return function(e,t,n,r){const i=new Ud(r),s=new Gh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>jh(await Xd(e),s))),()=>{i.pa(),e.asyncQueue.enqueueAndForget((async()=>$h(await Xd(e),s)))}}(Pf(l),h,a,u)}function pm(e,t){return of(Pf(e=gf(e,Rf)),Nf(t)?t:{next:t})}function mm(e,t){return function(e,t){const n=new ni;return e.asyncQueue.enqueueAndForget((async()=>sd(await Jd(e),t,n))),n.promise}(Pf(e),t)}function gm(e,t,n){const r=n.docs.get(t._key),i=new rm(e);return new Sp(e,i,t._key,r,new kp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
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
 */class vm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=np(e)}get(e){const t=tm(e,this._firestore),n=new Zp(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Qr();const r=e[0];if(r.isFoundDocument())return new Ip(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Ip(this._firestore,n,t._key,null,t.converter);throw Qr()}))}set(e,t,n){const r=tm(e,this._firestore),i=Xp(r.converter,t,n),s=rp(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=tm(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof Kf?hp(this._dataReader,"Transaction.update",i._key,t,n,r):lp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=tm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tm(e,this._firestore),n=new rm(this._firestore);return super.get(e).then((e=>new Sp(this._firestore,n,t._key,e._document,new kp(!1,!1),t.converter)))}}function ym(e,t){return af(Pf(e=gf(e,Rf)),(n=>t(new vm(e,n))))}
/**
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
 */function wm(){return new ip("deleteField")}function bm(){return new op("serverTimestamp")}function _m(...e){return new ap("arrayUnion",e)}function Im(...e){return new cp("arrayRemove",e)}function Tm(e){return new up("increment",e)}
/**
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
 */!function(e,t=!0){!function(e){qr=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new Rf(r,new oi(e.getProvider("auth-internal")),new li(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,s.registerVersion)(jr,"3.4.7",e),(0,s.registerVersion)(jr,"3.4.7","esm2017")}();const Em="@firebase/firestore-compat",km="0.1.16";
/**
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
 */
function Sm(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ti("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
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
 */function Am(){if("undefined"===typeof Uint8Array)throw new ti("unimplemented","Uint8Arrays are not available in this environment.")}function Cm(){if(!Ai())throw new ti("unimplemented","Blobs are unavailable in Firestore in this environment.")}class xm{constructor(e){this._delegate=e}static fromBase64String(e){return Cm(),new xm(Wf.fromBase64String(e))}static fromUint8Array(e){return Am(),new xm(Wf.fromUint8Array(e))}toBase64(){return Cm(),this._delegate.toBase64()}toUint8Array(){return Am(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
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
 */function Nm(e){return Om(e,["next","error","complete"])}function Om(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
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
 */class Dm{enableIndexedDbPersistence(e,t){return Mf(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Ff(e._delegate)}clearIndexedDbPersistence(e){return Uf(e._delegate)}}class Rm{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Hr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){bf(this._delegate,e,t,n)}enableNetwork(){return $f(this._delegate)}disableNetwork(){return qf(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,df("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return jf(this._delegate)}onSnapshotsInSync(e){return pm(this._delegate,e)}get app(){if(!this._appCompat)throw new ti("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Hm(this,Ef(this._delegate,e))}catch(t){throw jm(t,"collection()","Firestore.collection()")}}doc(e){try{return new Um(this,Sf(this._delegate,e))}catch(t){throw jm(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Gm(this,kf(this._delegate,e))}catch(t){throw jm(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ym(this._delegate,(t=>e(new Mm(this,t))))}batch(){return Pf(this._delegate),new Fm(new em(this._delegate,(e=>mm(this._delegate,e))))}loadBundle(e){return Bf(this._delegate,e)}namedQuery(e){return zf(this._delegate,e).then((e=>e?new Gm(this,e):null))}}class Pm extends Jp{constructor(e){super(),this.firestore=e}convertBytes(e){return new xm(new Wf(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Um.forKey(t,this.firestore,null)}}function Lm(e){Gr(e)}class Mm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}get(e){const t=Ym(e);return this._delegate.get(t).then((e=>new Bm(this._firestore,new Sp(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Ym(e);return n?(Sm("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Ym(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Ym(e);return this._delegate.delete(t),this}}class Fm{constructor(e){this._delegate=e}set(e,t,n){const r=Ym(e);return n?(Sm("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Ym(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Ym(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Vm{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Ap(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new zm(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Vm.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Vm(e,new Pm(e),t),r.set(t,i)),i}}Vm.INSTANCES=new WeakMap;class Um{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ti("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Um(t,new _f(t._delegate,n,new $i(e)))}static forKey(e,t,n){return new Um(t,new _f(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Hm(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Hm(this.firestore,Ef(this._delegate,e))}catch(t){throw jm(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof _f&&Af(this._delegate,e)}set(e,t){t=Sm("DocumentReference.set",t);try{return t?um(this._delegate,e,t):um(this._delegate,e)}catch(n){throw jm(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?lm(this._delegate,e):lm(this._delegate,e,t,...n)}catch(r){throw jm(r,"updateDoc()","DocumentReference.update()")}}delete(){return hm(this._delegate)}onSnapshot(...e){const t=$m(e),n=qm(e,(e=>new Bm(this.firestore,new Sp(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return fm(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?im(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?sm(this._delegate):nm(this._delegate),t.then((e=>new Bm(this.firestore,new Sp(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Um(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function jm(e,t,n){return e.message=e.message.replace(t,n),e}function $m(e){for(const t of e)if("object"===typeof t&&!Nm(t))return t;return{}}function qm(e,t){var n,r;let i;return i=Nm(e[0])?e[0]:Nm(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Bm{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Um(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Np(this._delegate,e._delegate)}}class zm extends Bm{data(e){const t=this._delegate.data(e);return Xr(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Gm{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pm(e)}where(e,t,n){try{return new Gm(this.firestore,Rp(this._delegate,Lp(e,t,n)))}catch(r){throw jm(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Gm(this.firestore,Rp(this._delegate,Fp(e,t)))}catch(n){throw jm(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Gm(this.firestore,Rp(this._delegate,Up(e)))}catch(t){throw jm(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Gm(this.firestore,Rp(this._delegate,jp(e)))}catch(t){throw jm(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Gm(this.firestore,Rp(this._delegate,qp(...e)))}catch(t){throw jm(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Gm(this.firestore,Rp(this._delegate,Bp(...e)))}catch(t){throw jm(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Gm(this.firestore,Rp(this._delegate,Gp(...e)))}catch(t){throw jm(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Gm(this.firestore,Rp(this._delegate,Kp(...e)))}catch(t){throw jm(t,"endAt()","Query.endAt()")}}isEqual(e){return Cf(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?am(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?cm(this._delegate):om(this._delegate),t.then((e=>new Wm(this.firestore,new Cp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=$m(e),n=qm(e,(e=>new Wm(this.firestore,new Cp(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return fm(this._delegate,t,n)}withConverter(e){return new Gm(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Km{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new zm(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Wm{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Gm(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new zm(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Km(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new zm(this._firestore,n))}))}isEqual(e){return Np(this._delegate,e._delegate)}}class Hm extends Gm{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Um(this.firestore,e):null}doc(e){try{return new Um(this.firestore,void 0===e?Sf(this._delegate):Sf(this._delegate,e))}catch(t){throw jm(t,"doc()","CollectionReference.doc()")}}add(e){return dm(this._delegate,e).then((e=>new Um(this.firestore,e)))}isEqual(e){return Af(this._delegate,e._delegate)}withConverter(e){return new Hm(this.firestore,e?this._delegate.withConverter(Vm.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ym(e){return gf(e,_f)}
/**
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
 */class Qm{constructor(...e){this._delegate=new Kf(...e)}static documentId(){return new Qm(ki.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof Kf&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
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
 */class Jm{constructor(e){this._delegate=e}static serverTimestamp(){const e=bm();return e._methodName="FieldValue.serverTimestamp",new Jm(e)}static delete(){const e=wm();return e._methodName="FieldValue.delete",new Jm(e)}static arrayUnion(...e){const t=_m(...e);return t._methodName="FieldValue.arrayUnion",new Jm(t)}static arrayRemove(...e){const t=Im(...e);return t._methodName="FieldValue.arrayRemove",new Jm(t)}static increment(e){const t=Tm(e);return t._methodName="FieldValue.increment",new Jm(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
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
 */const Xm={Firestore:Rm,GeoPoint:Yf,Timestamp:vi,Blob:xm,Transaction:Mm,WriteBatch:Fm,DocumentReference:Um,DocumentSnapshot:Bm,Query:Gm,QueryDocumentSnapshot:zm,QuerySnapshot:Wm,CollectionReference:Hm,FieldPath:Qm,FieldValue:Jm,setLogLevel:Lm,CACHE_SIZE_UNLIMITED:Df};function Zm(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Xm)))}
/**
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
 */function eg(e){Zm(e,((e,t)=>new Rm(e,t,new Dm))),e.registerVersion(Em,km)}eg(i.Z)},345:function(e,t){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */function n(e,t){for(var n in t)e[n]=t[n];return e}var r=/[!'()*]/g,i=function(e){return"%"+e.charCodeAt(0).toString(16)},s=/%2C/g,o=function(e){return encodeURIComponent(e).replace(r,i).replace(s,",")};function a(e){try{return decodeURIComponent(e)}catch(t){0}return e}function c(e,t,n){void 0===t&&(t={});var r,i=n||l;try{r=i(e||"")}catch(a){r={}}for(var s in t){var o=t[s];r[s]=Array.isArray(o)?o.map(u):u(o)}return r}var u=function(e){return null==e||"object"===typeof e?e:String(e)};function l(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),r=a(n.shift()),i=n.length>0?a(n.join("=")):null;void 0===t[r]?t[r]=i:Array.isArray(t[r])?t[r].push(i):t[r]=[t[r],i]})),t):t}function h(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return o(t);if(Array.isArray(n)){var r=[];return n.forEach((function(e){void 0!==e&&(null===e?r.push(o(t)):r.push(o(t)+"="+o(e)))})),r.join("&")}return o(t)+"="+o(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var d=/\/?$/;function f(e,t,n,r){var i=r&&r.options.stringifyQuery,s=t.query||{};try{s=p(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:v(t,i),matched:e?g(e):[]};return n&&(o.redirectedFrom=v(n,i)),Object.freeze(o)}function p(e){if(Array.isArray(e))return e.map(p);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=p(e[n]);return t}return e}var m=f(null,{path:"/"});function g(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function v(e,t){var n=e.path,r=e.query;void 0===r&&(r={});var i=e.hash;void 0===i&&(i="");var s=t||h;return(n||"/")+s(r)+i}function y(e,t,n){return t===m?e===t:!!t&&(e.path&&t.path?e.path.replace(d,"")===t.path.replace(d,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((function(n,i){var s=e[n],o=r[i];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function b(e,t){return 0===e.path.replace(d,"/").indexOf(t.path.replace(d,"/"))&&(!t.hash||e.hash===t.hash)&&_(e.query,t.query)}function _(e,t){for(var n in t)if(!(n in e))return!1;return!0}function I(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var r=t.props,i=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=r.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&E(m,o,p.route,p.configProps),a(m,o,i)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),I(u)};var y=g.props&&g.props[c];return y&&(n(l[c],{route:u,configProps:y}),E(v,o,u,y)),a(v,o,i)}};function E(e,t,r,i){var s=t.props=k(r,i);if(s){s=t.props=n({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function k(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function S(e,t,n){var r=e.charAt(0);if("/"===r)return e;if("?"===r||"#"===r)return t+e;var i=t.split("/");n&&i[i.length-1]||i.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function A(e){var t="",n="",r=e.indexOf("#");r>=0&&(t=e.slice(r),e=e.slice(0,r));var i=e.indexOf("?");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{path:e,query:n,hash:t}}function C(e){return e.replace(/\/+/g,"/")}var x=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Y,O=M,D=F,R=j,P=H,L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=L.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(r.push(o),o="");var y=null!=d&&null!=h&&h!==d,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,I=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:b,repeat:w,partial:y,asterisk:!!v,pattern:I?q(I):v?".*":"[^"+$(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function F(e,t){return j(M(e,t),t)}function V(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function j(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"===typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",z(t)));return function(t,r){for(var i="",s=t||{},o=r||{},a=o.pretty?V:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(x(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?U(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function $(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function B(e,t){return e.keys=t,e}function z(e){return e&&e.sensitive?"":"i"}function G(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return B(e,t)}function K(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Y(e[i],t,n).source);var s=new RegExp("(?:"+r.join("|")+")",z(n));return B(s,t)}function W(e,t,n){return H(M(e,n),t,n)}function H(e,t,n){x(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=$(a);else{var c=$(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=$(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",B(new RegExp("^"+s,z(n)),t)}function Y(e,t,n){return x(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?G(e,t):x(e)?K(e,t,n):W(e,t,n)}N.parse=O,N.compile=D,N.tokensToFunction=R,N.tokensToRegExp=P;var Q=Object.create(null);function J(e,t,n){t=t||{};try{var r=Q[e]||(Q[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),r(t,{pretty:!0})}catch(i){return""}finally{delete t[0]}}function X(e,t,r,i){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=n({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=n({},o)),s}if(!s.path&&s.params&&t){s=n({},s),s._normalized=!0;var a=n(n({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var u=t.matched[t.matched.length-1].path;s.path=J(u,a,"path "+t.path)}else 0;return s}var l=A(s.path||""),h=t&&t.path||"/",d=l.path?S(l.path,h,r||s.append):h,f=c(l.query,s.query,i&&i.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var Z,ee=[String,Object],te=[String,Array],ne=function(){},re={name:"RouterLink",props:{to:{type:ee,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:te,default:"click"}},render:function(e){var t=this,r=this.$router,i=this.$route,s=r.resolve(this.to,i,this.append),o=s.location,a=s.route,c=s.href,u={},l=r.options.linkActiveClass,h=r.options.linkExactActiveClass,d=null==l?"router-link-active":l,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?p:this.exactActiveClass,v=a.redirectedFrom?f(null,X(a.redirectedFrom),null,r):a;u[g]=y(i,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:b(i,v);var w=u[g]?this.ariaCurrentValue:null,_=function(e){ie(e)&&(t.replace?r.replace(o,ne):r.push(o,ne))},I={click:ie};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=_})):I[this.event]=_;var T={class:u},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:_,isActive:u[m],isExactActive:u[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)T.on=I,T.attrs={href:c,"aria-current":w};else{var k=se(this.$slots.default);if(k){k.isStatic=!1;var S=k.data=n({},k.data);for(var A in S.on=S.on||{},S.on){var C=S.on[A];A in I&&(S.on[A]=Array.isArray(C)?C:[C])}for(var x in I)x in S.on?S.on[x].push(I[x]):S.on[x]=_;var N=k.data.attrs=n({},k.data.attrs);N.href=c,N["aria-current"]=w}else T.on=I}return e(this.tag,T,this.$slots.default)}};function ie(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function se(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=se(t.children)))return t}}function oe(e){if(!oe.installed||Z!==e){oe.installed=!0,Z=e;var t=function(e){return void 0!==e},n=function(e,n){var r=e.$options._parentVnode;t(r)&&t(r=r.data)&&t(r=r.registerRouteInstance)&&r(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",T),e.component("RouterLink",re);var r=e.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ae="undefined"!==typeof window;function ce(e,t,n,r,i){var s=t||[],o=n||Object.create(null),a=r||Object.create(null);e.forEach((function(e){ue(s,o,a,e,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ue(e,t,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=he(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:le(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?C(s+"/"+r.path):void 0;ue(e,t,n,r,l,i)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ue(e,t,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function le(e,t){var n=N(e,[],t);return n}function he(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:C(t.path+"/"+e)}function de(e,t){var n=ce(e),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(e){ce(e,r,i,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ce([t||e],r,i,s,n),n&&n.alias.length&&ce(n.alias.map((function(e){return{path:e,children:[t]}})),r,i,s,n)}function c(){return r.map((function(e){return i[e]}))}function u(e,n,o){var a=X(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=J(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(fe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var r=e.redirect,i="function"===typeof r?r(f(e,n,null,t)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,p=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:p},void 0,n)}if(c){var m=pe(c,e),g=J(m,p,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var r=J(n,t.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return t.params=i.params,d(o,t)}return d(null,t)}function d(e,n,r){return e&&e.redirect?l(e,r||n):e&&e.matchAs?h(e,n,e.matchAs):f(e,n,r,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function fe(e,t,n){var r=t.match(e);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=e.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?a(r[i]):r[i])}return!0}function pe(e,t){return S(e,t.parent?t.parent.path:"/",!0)}var me=ae&&window.performance&&window.performance.now?window.performance:Date;function ge(){return me.now().toFixed(3)}var ve=ge();function ye(){return ve}function we(e){return ve=e}var be=Object.create(null);function _e(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),r=n({},window.history.state);return r.key=ye(),window.history.replaceState(r,"",t),window.addEventListener("popstate",Ee),function(){window.removeEventListener("popstate",Ee)}}function Ie(e,t,n,r){if(e.app){var i=e.options.scrollBehavior;i&&e.app.$nextTick((function(){var s=ke(),o=i.call(e,t,n,r?s:null);o&&("function"===typeof o.then?o.then((function(e){De(e,s)})).catch((function(e){0})):De(o,s))}))}}function Te(){var e=ye();e&&(be[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ee(e){Te(),e.state&&e.state.key&&we(e.state.key)}function ke(){var e=ye();if(e)return be[e]}function Se(e,t){var n=document.documentElement,r=n.getBoundingClientRect(),i=e.getBoundingClientRect();return{x:i.left-r.left-t.x,y:i.top-r.top-t.y}}function Ae(e){return Ne(e.x)||Ne(e.y)}function Ce(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function xe(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var Oe=/^#\d/;function De(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var r=Oe.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(r){var i=e.offset&&"object"===typeof e.offset?e.offset:{};i=xe(i),t=Se(r,i)}else Ae(e)&&(t=Ce(e))}else n&&Ae(e)&&(t=Ce(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Re=ae&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pe(e,t){Te();var r=window.history;try{if(t){var i=n({},r.state);i.key=ye(),r.replaceState(i,"",e)}else r.pushState({key:we(ge())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function Le(e){Pe(e,!0)}function Me(e,t,n){var r=function(i){i>=e.length?n():e[i]?t(e[i],(function(){r(i+1)})):r(i+1)};r(0)}var Fe={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return qe(e,t,Fe.redirected,'Redirected when going from "'+e.fullPath+'" to "'+ze(t)+'" via a navigation guard.')}function Ue(e,t){var n=qe(e,t,Fe.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function je(e,t){return qe(e,t,Fe.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function $e(e,t){return qe(e,t,Fe.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function qe(e,t,n,r){var i=new Error(r);return i._isRouter=!0,i.from=e,i.to=t,i.type=n,i}var Be=["params","query","hash"];function ze(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return Be.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function Ge(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ke(e,t){return Ge(e)&&e._isRouter&&(null==t||e.type===t)}function We(e){return function(t,n,r){var i=!1,s=0,o=null;He(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){i=!0,s++;var c,u=Xe((function(t){Je(t)&&(t=t.default),e.resolved="function"===typeof t?t:Z.extend(t),n.components[a]=t,s--,s<=0&&r()})),l=Xe((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=Ge(e)?e:new Error(t),r(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function He(e,t){return Ye(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Ye(e){return Array.prototype.concat.apply([],e)}var Qe="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Je(e){return e.__esModule||Qe&&"Module"===e[Symbol.toStringTag]}function Xe(e){var t=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!t)return t=!0,e.apply(this,n)}}var Ze=function(e,t){this.router=e,this.base=et(t),this.current=m,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function et(e){if(!e)if(ae){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function tt(e,t){var n,r=Math.max(e.length,t.length);for(n=0;n<r;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function nt(e,t,n,r){var i=He(e,(function(e,r,i,s){var o=rt(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,r,i,s)})):n(o,r,i,s)}));return Ye(r?i.reverse():i)}function rt(e,t){return"function"!==typeof e&&(e=Z.extend(e)),e.options[t]}function it(e){return nt(e,"beforeRouteLeave",ot,!0)}function st(e){return nt(e,"beforeRouteUpdate",ot)}function ot(e,t){if(t)return function(){return e.apply(t,arguments)}}function at(e){return nt(e,"beforeRouteEnter",(function(e,t,n,r){return ct(e,n,r)}))}function ct(e,t,n){return function(r,i,s){return e(r,i,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}Ze.prototype.listen=function(e){this.cb=e},Ze.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},Ze.prototype.onError=function(e){this.errorCbs.push(e)},Ze.prototype.transitionTo=function(e,t,n){var r,i=this;try{r=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),t&&t(r),i.ensureURL(),i.router.afterHooks.forEach((function(e){e&&e(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(e){e(r)})))}),(function(e){n&&n(e),e&&!i.ready&&(Ke(e,Fe.redirected)&&s===m||(i.ready=!0,i.readyErrorCbs.forEach((function(t){t(e)}))))}))},Ze.prototype.confirmTransition=function(e,t,n){var r=this,i=this.current;this.pending=e;var s=function(e){!Ke(e)&&Ge(e)&&(r.errorCbs.length?r.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=i.matched.length-1;if(y(e,i)&&o===a&&e.matched[o]===i.matched[a])return this.ensureURL(),e.hash&&Ie(this.router,i,e,!1),s(Ue(i,e));var c=tt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(it(l),this.router.beforeHooks,st(u),h.map((function(e){return e.beforeEnter})),We(h)),f=function(t,n){if(r.pending!==e)return s(je(i,e));try{t(e,i,(function(t){!1===t?(r.ensureURL(!0),s($e(i,e))):Ge(t)?(r.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(i,e)),"object"===typeof t&&t.replace?r.replace(t):r.push(t)):n(t)}))}catch(o){s(o)}};Me(d,f,(function(){var n=at(h),o=n.concat(r.router.resolveHooks);Me(o,f,(function(){if(r.pending!==e)return s(je(i,e));r.pending=null,t(e),r.router.app&&r.router.app.$nextTick((function(){I(e)}))}))}))},Ze.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},Ze.prototype.setupListeners=function(){},Ze.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=m,this.pending=null};var ut=function(e){function t(t,n){e.call(this,t,n),this._startLocation=lt(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Re&&n;r&&this.listeners.push(_e());var i=function(){var n=e.current,i=lt(e.base);e.current===m&&i===e._startLocation||e.transitionTo(i,(function(e){r&&Ie(t,e,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Pe(C(r.base+e.fullPath)),Ie(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){Le(C(r.base+e.fullPath)),Ie(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(lt(this.base)!==this.current.fullPath){var t=C(this.base+this.current.fullPath);e?Pe(t):Le(t)}},t.prototype.getCurrentLocation=function(){return lt(this.base)},t}(Ze);function lt(e){var t=window.location.pathname,n=t.toLowerCase(),r=e.toLowerCase();return!e||n!==r&&0!==n.indexOf(C(r+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var ht=function(e){function t(t,n,r){e.call(this,t,n),r&&dt(this.base)||ft()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,r=Re&&n;r&&this.listeners.push(_e());var i=function(){var t=e.current;ft()&&e.transitionTo(pt(),(function(n){r&&Ie(e.router,n,t,!0),Re||vt(n.fullPath)}))},s=Re?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},t.prototype.push=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){gt(e.fullPath),Ie(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this,i=this,s=i.current;this.transitionTo(e,(function(e){vt(e.fullPath),Ie(r.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;pt()!==t&&(e?gt(t):vt(t))},t.prototype.getCurrentLocation=function(){return pt()},t}(Ze);function dt(e){var t=lt(e);if(!/^\/#/.test(t))return window.location.replace(C(e+"/#"+t)),!0}function ft(){var e=pt();return"/"===e.charAt(0)||(vt("/"+e),!1)}function pt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function mt(e){var t=window.location.href,n=t.indexOf("#"),r=n>=0?t.slice(0,n):t;return r+"#"+e}function gt(e){Re?Pe(mt(e)):window.location.hash=e}function vt(e){Re?Le(mt(e)):window.location.replace(mt(e))}var yt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index+1).concat(e),r.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var r=this;this.transitionTo(e,(function(e){r.stack=r.stack.slice(0,r.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var e=t.current;t.index=n,t.updateRoute(r),t.router.afterHooks.forEach((function(t){t&&t(r,e)}))}),(function(e){Ke(e,Fe.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(Ze),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=de(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Re&&!1!==e.fallback,this.fallback&&(t="hash"),ae||(t="abstract"),this.mode=t,t){case"history":this.history=new ut(this,e.base);break;case"hash":this.history=new ht(this,e.base,this.fallback);break;case"abstract":this.history=new yt(this,e.base);break;default:0}},bt={currentRoute:{configurable:!0}};function _t(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function It(e,t,n){var r="hash"===n?"#"+t:t;return e?C(e+"/"+r):r}wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},bt.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof ut||n instanceof ht){var r=function(e){var r=n.current,i=t.options.scrollBehavior,s=Re&&i;s&&"fullPath"in e&&Ie(t,e,r,!1)},i=function(e){n.setupListeners(),r(e)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return _t(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return _t(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return _t(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var r=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){r.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var r=X(e,t,n,this),i=this.match(r,t),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=It(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==m&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,bt),wt.install=oe,wt.version="3.5.3",wt.isNavigationFailure=Ke,wt.NavigationFailureType=Fe,wt.START_LOCATION=m,ae&&window.Vue&&window.Vue.use(wt),t["Z"]=wt},144:function(e,t,n){"use strict";
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */var r=Object.freeze({});function i(e){return void 0===e||null===e}function s(e){return void 0!==e&&null!==e}function o(e){return!0===e}function a(e){return!1===e}function c(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function u(e){return null!==e&&"object"===typeof e}var l=Object.prototype.toString;function h(e){return"[object Object]"===l.call(e)}function d(e){return"[object RegExp]"===l.call(e)}function f(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return s(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function m(e){return null==e?"":Array.isArray(e)||h(e)&&e.toString===l?JSON.stringify(e,null,2):String(e)}function g(e){var t=parseFloat(e);return isNaN(t)?e:t}function v(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function w(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(e,t){return b.call(e,t)}function I(e){var t=Object.create(null);return function(n){var r=t[n];return r||(t[n]=e(n))}}var T=/-(\w)/g,E=I((function(e){return e.replace(T,(function(e,t){return t?t.toUpperCase():""}))})),k=I((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),S=/\B([A-Z])/g,A=I((function(e){return e.replace(S,"-$1").toLowerCase()}));function C(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function x(e,t){return e.bind(t)}var N=Function.prototype.bind?x:C;function O(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r}function D(e,t){for(var n in t)e[n]=t[n];return e}function R(e){for(var t={},n=0;n<e.length;n++)e[n]&&D(t,e[n]);return t}function P(e,t,n){}var L=function(e,t,n){return!1},M=function(e){return e};function F(e,t){if(e===t)return!0;var n=u(e),r=u(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),s=Array.isArray(t);if(i&&s)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(i||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function V(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function U(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var j="data-server-rendered",$=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:P,parsePlatformTagName:M,mustUseProp:L,async:!0,_lifecycleHooks:q},z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function K(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+z.source+".$_\\d]");function H(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var Y,Q="__proto__"in{},J="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=X&&WXEnvironment.platform.toLowerCase(),ee=J&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,re=ee&&ee.indexOf("edge/")>0,ie=(ee&&ee.indexOf("android"),ee&&/iphone|ipad|ipod|ios/.test(ee)||"ios"===Z),se=(ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee),ee&&ee.match(/firefox\/(\d+)/)),oe={}.watch,ae=!1;if(J)try{var ce={};Object.defineProperty(ce,"passive",{get:function(){ae=!0}}),window.addEventListener("test-passive",null,ce)}catch(ko){}var ue=function(){return void 0===Y&&(Y=!J&&!X&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),Y},le=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var de,fe="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);de="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var pe=P,me=0,ge=function(){this.id=me++,this.subs=[]};ge.prototype.addSub=function(e){this.subs.push(e)},ge.prototype.removeSub=function(e){w(this.subs,e)},ge.prototype.depend=function(){ge.target&&ge.target.addDep(this)},ge.prototype.notify=function(){var e=this.subs.slice();for(var t=0,n=e.length;t<n;t++)e[t].update()},ge.target=null;var ve=[];function ye(e){ve.push(e),ge.target=e}function we(){ve.pop(),ge.target=ve[ve.length-1]}var be=function(e,t,n,r,i,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance},Object.defineProperties(be.prototype,_e);var Ie=function(e){void 0===e&&(e="");var t=new be;return t.text=e,t.isComment=!0,t};function Te(e){return new be(void 0,void 0,void 0,String(e))}function Ee(e){var t=new be(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var ke=Array.prototype,Se=Object.create(ke),Ae=["push","pop","shift","unshift","splice","sort","reverse"];Ae.forEach((function(e){var t=ke[e];K(Se,e,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Ce=Object.getOwnPropertyNames(Se),xe=!0;function Ne(e){xe=e}var Oe=function(e){this.value=e,this.dep=new ge,this.vmCount=0,K(e,"__ob__",this),Array.isArray(e)?(Q?De(e,Se):Re(e,Se,Ce),this.observeArray(e)):this.walk(e)};function De(e,t){e.__proto__=t}function Re(e,t,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];K(e,s,t[s])}}function Pe(e,t){var n;if(u(e)&&!(e instanceof be))return _(e,"__ob__")&&e.__ob__ instanceof Oe?n=e.__ob__:xe&&!ue()&&(Array.isArray(e)||h(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Oe(e)),t&&n&&n.vmCount++,n}function Le(e,t,n,r,i){var s=new ge,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=e[t]);var u=!i&&Pe(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return ge.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(t)&&Ve(t))),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||a&&!c||(c?c.call(e,t):n=t,u=!i&&Pe(t),s.notify())}})}}function Me(e,t,n){if(Array.isArray(e)&&f(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Le(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function Fe(e,t){if(Array.isArray(e)&&f(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||_(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ve(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Ve(t)}Oe.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Le(e,t[n])},Oe.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Pe(e[t])};var Ue=B.optionMergeStrategies;function je(e,t){if(!t)return e;for(var n,r,i,s=fe?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=e[n],i=t[n],_(e,n)?r!==i&&h(r)&&h(i)&&je(r,i):Me(e,n,i));return e}function $e(e,t,n){return n?function(){var r="function"===typeof t?t.call(n,n):t,i="function"===typeof e?e.call(n,n):e;return r?je(r,i):i}:t?e?function(){return je("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function qe(e,t){var n=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return n?Be(n):n}function Be(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function ze(e,t,n,r){var i=Object.create(e||null);return t?D(i,t):i}Ue.data=function(e,t,n){return n?$e(e,t,n):t&&"function"!==typeof t?e:$e(e,t)},q.forEach((function(e){Ue[e]=qe})),$.forEach((function(e){Ue[e+"s"]=ze})),Ue.watch=function(e,t,n,r){if(e===oe&&(e=void 0),t===oe&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var s in D(i,e),t){var o=i[s],a=t[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},Ue.props=Ue.methods=Ue.inject=Ue.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return D(i,e),t&&D(i,t),i},Ue.provide=$e;var Ge=function(e,t){return void 0===t?e:t};function Ke(e,t){var n=e.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=E(i),o[s]={type:null})}else if(h(n))for(var a in n)i=n[a],s=E(a),o[s]=h(i)?i:{type:i};else 0;e.props=o}}function We(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(h(n))for(var s in n){var o=n[s];r[s]=h(o)?D({from:s},o):{from:o}}else 0}}function He(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"===typeof r&&(t[n]={bind:r,update:r})}}function Ye(e,t,n){if("function"===typeof t&&(t=t.options),Ke(t,n),We(t,n),He(t),!t._base&&(t.extends&&(e=Ye(e,t.extends,n)),t.mixins))for(var r=0,i=t.mixins.length;r<i;r++)e=Ye(e,t.mixins[r],n);var s,o={};for(s in e)a(s);for(s in t)_(e,s)||a(s);function a(r){var i=Ue[r]||Ge;o[r]=i(e[r],t[r],n,r)}return o}function Qe(e,t,n,r){if("string"===typeof n){var i=e[t];if(_(i,n))return i[n];var s=E(n);if(_(i,s))return i[s];var o=k(s);if(_(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Je(e,t,n,r){var i=t[e],s=!_(n,e),o=n[e],a=nt(Boolean,i.type);if(a>-1)if(s&&!_(i,"default"))o=!1;else if(""===o||o===A(e)){var c=nt(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Xe(r,i,e);var u=xe;Ne(!0),Pe(o),Ne(u)}return o}function Xe(e,t,n){if(_(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"===typeof r&&"Function"!==et(t.type)?r.call(e):r}}var Ze=/^\s*function (\w+)/;function et(e){var t=e&&e.toString().match(Ze);return t?t[1]:""}function tt(e,t){return et(e)===et(t)}function nt(e,t){if(!Array.isArray(t))return tt(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(tt(t[n],e))return n;return-1}function rt(e,t,n){ye();try{if(t){var r=t;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,e,t,n);if(o)return}catch(ko){st(ko,r,"errorCaptured hook")}}}st(e,t,n)}finally{we()}}function it(e,t,n,r,i){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&p(s)&&!s._handled&&(s.catch((function(e){return rt(e,r,i+" (Promise/async)")})),s._handled=!0)}catch(ko){rt(ko,r,i)}return s}function st(e,t,n){if(B.errorHandler)try{return B.errorHandler.call(null,e,t,n)}catch(ko){ko!==e&&ot(ko,null,"config.errorHandler")}ot(e,t,n)}function ot(e,t,n){if(!J&&!X||"undefined"===typeof console)throw e;console.error(e)}var at,ct=!1,ut=[],lt=!1;function ht(){lt=!1;var e=ut.slice(0);ut.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var dt=Promise.resolve();at=function(){dt.then(ht),ie&&setTimeout(P)},ct=!0}else if(te||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())at="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(ht)}:function(){setTimeout(ht,0)};else{var ft=1,pt=new MutationObserver(ht),mt=document.createTextNode(String(ft));pt.observe(mt,{characterData:!0}),at=function(){ft=(ft+1)%2,mt.data=String(ft)},ct=!0}function gt(e,t){var n;if(ut.push((function(){if(e)try{e.call(t)}catch(ko){rt(ko,t,"nextTick")}else n&&n(t)})),lt||(lt=!0,at()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}var vt=new de;function yt(e){wt(e,vt),vt.clear()}function wt(e,t){var n,r,i=Array.isArray(e);if(!(!i&&!u(e)||Object.isFrozen(e)||e instanceof be)){if(e.__ob__){var s=e.__ob__.dep.id;if(t.has(s))return;t.add(s)}if(i){n=e.length;while(n--)wt(e[n],t)}else{r=Object.keys(e),n=r.length;while(n--)wt(e[r[n]],t)}}}var bt=I((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}));function _t(e,t){function n(){var e=arguments,r=n.fns;if(!Array.isArray(r))return it(r,null,arguments,t,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)it(i[s],null,e,t,"v-on handler")}return n.fns=e,n}function It(e,t,n,r,s,a){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=bt(c),i(u)||(i(l)?(i(u.fns)&&(u=e[c]=_t(u,a)),o(h.once)&&(u=e[c]=s(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)i(e[c])&&(h=bt(c),r(h.name,t[c],h.capture))}function Tt(e,t,n){var r;e instanceof be&&(e=e.data.hook||(e.data.hook={}));var a=e[t];function c(){n.apply(this,arguments),w(r.fns,c)}i(a)?r=_t([c]):s(a.fns)&&o(a.merged)?(r=a,r.fns.push(c)):r=_t([a,c]),r.merged=!0,e[t]=r}function Et(e,t,n){var r=t.options.props;if(!i(r)){var o={},a=e.attrs,c=e.props;if(s(a)||s(c))for(var u in r){var l=A(u);kt(o,c,u,l,!0)||kt(o,a,u,l,!1)}return o}}function kt(e,t,n,r,i){if(s(t)){if(_(t,n))return e[n]=t[n],i||delete t[n],!0;if(_(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function St(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function At(e){return c(e)?[Te(e)]:Array.isArray(e)?xt(e):void 0}function Ct(e){return s(e)&&s(e.text)&&a(e.isComment)}function xt(e,t){var n,r,a,u,l=[];for(n=0;n<e.length;n++)r=e[n],i(r)||"boolean"===typeof r||(a=l.length-1,u=l[a],Array.isArray(r)?r.length>0&&(r=xt(r,(t||"")+"_"+n),Ct(r[0])&&Ct(u)&&(l[a]=Te(u.text+r[0].text),r.shift()),l.push.apply(l,r)):c(r)?Ct(u)?l[a]=Te(u.text+r):""!==r&&l.push(Te(r)):Ct(r)&&Ct(u)?l[a]=Te(u.text+r.text):(o(e._isVList)&&s(r.tag)&&i(r.key)&&s(t)&&(r.key="__vlist"+t+"_"+n+"__"),l.push(r)));return l}function Nt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function Ot(e){var t=Dt(e.$options.inject,e);t&&(Ne(!1),Object.keys(t).forEach((function(n){Le(e,n,t[n])})),Ne(!0))}function Dt(e,t){if(e){for(var n=Object.create(null),r=fe?Reflect.ownKeys(e):Object.keys(e),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=e[s].from,a=t;while(a){if(a._provided&&_(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in e[s]){var c=e[s].default;n[s]="function"===typeof c?c.call(t):c}else 0}}return n}}function Rt(e,t){if(!e||!e.length)return{};for(var n={},r=0,i=e.length;r<i;r++){var s=e[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Pt)&&delete n[u];return n}function Pt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Lt(e){return e.isComment&&e.asyncFactory}function Mt(e,t,n){var i,s=Object.keys(t).length>0,o=e?!!e.$stable:!s,a=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&n&&n!==r&&a===n.$key&&!s&&!n.$hasNormal)return n;for(var c in i={},e)e[c]&&"$"!==c[0]&&(i[c]=Ft(t,c,e[c]))}else i={};for(var u in t)u in i||(i[u]=Vt(t,u));return e&&Object.isExtensible(e)&&(e._normalized=i),K(i,"$stable",o),K(i,"$key",a),K(i,"$hasNormal",s),i}function Ft(e,t,n){var r=function(){var e=arguments.length?n.apply(null,arguments):n({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:At(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Lt(t))?void 0:e};return n.proxy&&Object.defineProperty(e,t,{get:r,enumerable:!0,configurable:!0}),r}function Vt(e,t){return function(){return e[t]}}function Ut(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"===typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"===typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(u(e))if(fe&&e[Symbol.iterator]){n=[];var c=e[Symbol.iterator](),l=c.next();while(!l.done)n.push(t(l.value,n.length)),l=c.next()}else for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return s(n)||(n=[]),n._isVList=!0,n}function jt(e,t,n,r){var i,s=this.$scopedSlots[e];s?(n=n||{},r&&(n=D(D({},r),n)),i=s(n)||("function"===typeof t?t():t)):i=this.$slots[e]||("function"===typeof t?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function $t(e){return Qe(this.$options,"filters",e,!0)||M}function qt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var s=B.keyCodes[t]||n;return i&&r&&!B.keyCodes[t]?qt(i,r):s?qt(s,e):r?A(r)!==t:void 0===e}function zt(e,t,n,r,i){if(n)if(u(n)){var s;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||y(o))s=e;else{var a=e.attrs&&e.attrs.type;s=r||B.mustUseProp(t,a,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=E(o),u=A(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=e.on||(e.on={});l["update:"+o]=function(e){n[o]=e}}};for(var a in n)o(a)}else;return e}function Gt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Wt(r,"__static__"+e,!1)),r}function Kt(e,t,n){return Wt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Wt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!==typeof e[r]&&Ht(e[r],t+"_"+r,n);else Ht(e,t,n)}function Ht(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function Yt(e,t){if(t)if(h(t)){var n=e.on=e.on?D({},e.on):{};for(var r in t){var i=n[r],s=t[r];n[r]=i?[].concat(i,s):s}}else;return e}function Qt(e,t,n,r){t=t||{$stable:!n};for(var i=0;i<e.length;i++){var s=e[i];Array.isArray(s)?Qt(s,t,n):s&&(s.proxy&&(s.fn.proxy=!0),t[s.key]=s.fn)}return r&&(t.$key=r),t}function Jt(e,t){for(var n=0;n<t.length;n+=2){var r=t[n];"string"===typeof r&&r&&(e[t[n]]=t[n+1])}return e}function Xt(e,t){return"string"===typeof e?t+e:e}function Zt(e){e._o=Kt,e._n=g,e._s=m,e._l=Ut,e._t=jt,e._q=F,e._i=V,e._m=Gt,e._f=$t,e._k=Bt,e._b=zt,e._v=Te,e._e=Ie,e._u=Qt,e._g=Yt,e._d=Jt,e._p=Xt}function en(e,t,n,i,s){var a,c=this,u=s.options;_(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=o(u._compiled),h=!l;this.data=e,this.props=t,this.children=n,this.parent=i,this.listeners=e.on||r,this.injections=Dt(u.inject,i),this.slots=function(){return c.$slots||Mt(e.scopedSlots,c.$slots=Rt(n,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Mt(e.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Mt(e.scopedSlots,this.$slots)),u._scopeId?this._c=function(e,t,n,r){var s=pn(a,e,t,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(e,t,n,r){return pn(a,e,t,n,r,h)}}function tn(e,t,n,i,o){var a=e.options,c={},u=a.props;if(s(u))for(var l in u)c[l]=Je(l,u,t||r);else s(n.attrs)&&rn(c,n.attrs),s(n.props)&&rn(c,n.props);var h=new en(n,c,o,i,e),d=a.render.call(null,h._c,h);if(d instanceof be)return nn(d,n,h.parent,a,h);if(Array.isArray(d)){for(var f=At(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=nn(f[m],n,h.parent,a,h);return p}}function nn(e,t,n,r,i){var s=Ee(e);return s.fnContext=n,s.fnOptions=r,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function rn(e,t){for(var n in t)e[E(n)]=t[n]}Zt(en.prototype);var sn={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;sn.prepatch(n,n)}else{var r=e.componentInstance=cn(e,Dn);r.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,r=t.componentInstance=e.componentInstance;Fn(r,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,$n(n,"mounted")),e.data.keepAlive&&(t._isMounted?er(n):Un(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?jn(t,!0):t.$destroy())}},on=Object.keys(sn);function an(e,t,n,r,a){if(!i(e)){var c=n.$options._base;if(u(e)&&(e=c.extend(e)),"function"===typeof e){var l;if(i(e.cid)&&(l=e,e=En(l,c),void 0===e))return Tn(l,t,n,r,a);t=t||{},Tr(e),s(t.model)&&hn(e.options,t);var h=Et(t,e,a);if(o(e.options.functional))return tn(e,h,t,n,r);var d=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}un(t);var p=e.options.name||a,m=new be("vue-component-"+e.cid+(p?"-"+p:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:h,listeners:d,tag:a,children:r},l);return m}}}function cn(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},r=e.data.inlineTemplate;return s(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new e.componentOptions.Ctor(n)}function un(e){for(var t=e.hook||(e.hook={}),n=0;n<on.length;n++){var r=on[n],i=t[r],s=sn[r];i===s||i&&i._merged||(t[r]=i?ln(s,i):s)}}function ln(e,t){var n=function(n,r){e(n,r),t(n,r)};return n._merged=!0,n}function hn(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var i=t.on||(t.on={}),o=i[r],a=t.model.callback;s(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(i[r]=[a].concat(o)):i[r]=a}var dn=1,fn=2;function pn(e,t,n,r,i,s){return(Array.isArray(n)||c(n))&&(i=r,r=n,n=void 0),o(s)&&(i=fn),mn(e,t,n,r,i)}function mn(e,t,n,r,i){if(s(n)&&s(n.__ob__))return Ie();if(s(n)&&s(n.is)&&(t=n.is),!t)return Ie();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===fn?r=At(r):i===dn&&(r=St(r)),"string"===typeof t)?(a=e.$vnode&&e.$vnode.ns||B.getTagNamespace(t),o=B.isReservedTag(t)?new be(B.parsePlatformTagName(t),n,r,void 0,void 0,e):n&&n.pre||!s(c=Qe(e.$options,"components",t))?new be(t,n,r,void 0,void 0,e):an(c,n,e,r,t)):o=an(t,n,e,r);return Array.isArray(o)?o:s(o)?(s(a)&&gn(o,a),s(n)&&vn(n),o):Ie()}function gn(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),s(e.children))for(var r=0,a=e.children.length;r<a;r++){var c=e.children[r];s(c.tag)&&(i(c.ns)||o(n)&&"svg"!==c.tag)&&gn(c,t,n)}}function vn(e){u(e.style)&&yt(e.style),u(e.class)&&yt(e.class)}function yn(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,i=n&&n.context;e.$slots=Rt(t._renderChildren,i),e.$scopedSlots=r,e._c=function(t,n,r,i){return pn(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return pn(e,t,n,r,i,!0)};var s=n&&n.data;Le(e,"$attrs",s&&s.attrs||r,null,!0),Le(e,"$listeners",t._parentListeners||r,null,!0)}var wn,bn=null;function _n(e){Zt(e.prototype),e.prototype.$nextTick=function(e){return gt(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,r=n.render,i=n._parentVnode;i&&(t.$scopedSlots=Mt(i.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=i;try{bn=t,e=r.call(t._renderProxy,t.$createElement)}catch(ko){rt(ko,t,"render"),e=t._vnode}finally{bn=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof be||(e=Ie()),e.parent=i,e}}function In(e,t){return(e.__esModule||fe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),u(e)?t.extend(e):e}function Tn(e,t,n,r,i){var s=Ie();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:r,tag:i},s}function En(e,t){if(o(e.error)&&s(e.errorComp))return e.errorComp;if(s(e.resolved))return e.resolved;var n=bn;if(n&&s(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),o(e.loading)&&s(e.loadingComp))return e.loadingComp;if(n&&!s(e.owners)){var r=e.owners=[n],a=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return w(r,n)}));var h=function(e){for(var t=0,n=r.length;t<n;t++)r[t].$forceUpdate();e&&(r.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=U((function(n){e.resolved=In(n,t),a?r.length=0:h(!0)})),f=U((function(t){s(e.errorComp)&&(e.error=!0,h(!0))})),m=e(d,f);return u(m)&&(p(m)?i(e.resolved)&&m.then(d,f):p(m.component)&&(m.component.then(d,f),s(m.error)&&(e.errorComp=In(m.error,t)),s(m.loading)&&(e.loadingComp=In(m.loading,t),0===m.delay?e.loading=!0:c=setTimeout((function(){c=null,i(e.resolved)&&i(e.error)&&(e.loading=!0,h(!1))}),m.delay||200)),s(m.timeout)&&(l=setTimeout((function(){l=null,i(e.resolved)&&f(null)}),m.timeout)))),a=!1,e.loading?e.loadingComp:e.resolved}}function kn(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(s(n)&&(s(n.componentOptions)||Lt(n)))return n}}function Sn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Nn(e,t)}function An(e,t){wn.$on(e,t)}function Cn(e,t){wn.$off(e,t)}function xn(e,t){var n=wn;return function r(){var i=t.apply(null,arguments);null!==i&&n.$off(e,r)}}function Nn(e,t,n){wn=e,It(t,n||{},An,Cn,xn,e),wn=void 0}function On(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this;if(Array.isArray(e))for(var i=0,s=e.length;i<s;i++)r.$on(e[i],n);else(r._events[e]||(r._events[e]=[])).push(n),t.test(e)&&(r._hasHookEvent=!0);return r},e.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)n.$off(e[r],t);return n}var s,o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;var a=o.length;while(a--)if(s=o[a],s===t||s.fn===t){o.splice(a,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?O(n):n;for(var r=O(arguments,1),i='event handler for "'+e+'"',s=0,o=n.length;s<o;s++)it(n[s],t,r,t,i)}return t}}var Dn=null;function Rn(e){var t=Dn;return Dn=e,function(){Dn=t}}function Pn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Ln(e){e.prototype._update=function(e,t){var n=this,r=n.$el,i=n._vnode,s=Rn(n);n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){$n(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||w(t.$children,e),e._watcher&&e._watcher.teardown();var n=e._watchers.length;while(n--)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),$n(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Mn(e,t,n){var r;return e.$el=t,e.$options.render||(e.$options.render=Ie),$n(e,"beforeMount"),r=function(){e._update(e._render(),n)},new ir(e,r,P,{before:function(){e._isMounted&&!e._isDestroyed&&$n(e,"beforeUpdate")}},!0),n=!1,null==e.$vnode&&(e._isMounted=!0,$n(e,"mounted")),e}function Fn(e,t,n,i,s){var o=i.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==r&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c);if(e.$options._parentVnode=i,e.$vnode=i,e._vnode&&(e._vnode.parent=i),e.$options._renderChildren=s,e.$attrs=i.data.attrs||r,e.$listeners=n||r,t&&e.$options.props){Ne(!1);for(var l=e._props,h=e.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=e.$options.props;l[f]=Je(f,p,t,e)}Ne(!0),e.$options.propsData=t}n=n||r;var m=e.$options._parentListeners;e.$options._parentListeners=n,Nn(e,n,m),u&&(e.$slots=Rt(s,i.context),e.$forceUpdate())}function Vn(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Un(e,t){if(t){if(e._directInactive=!1,Vn(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Un(e.$children[n]);$n(e,"activated")}}function jn(e,t){if((!t||(e._directInactive=!0,!Vn(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)jn(e.$children[n]);$n(e,"deactivated")}}function $n(e,t){ye();var n=e.$options[t],r=t+" hook";if(n)for(var i=0,s=n.length;i<s;i++)it(n[i],e,null,e,r);e._hasHookEvent&&e.$emit("hook:"+t),we()}var qn=[],Bn=[],zn={},Gn=!1,Kn=!1,Wn=0;function Hn(){Wn=qn.length=Bn.length=0,zn={},Gn=Kn=!1}var Yn=0,Qn=Date.now;if(J&&!te){var Jn=window.performance;Jn&&"function"===typeof Jn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Jn.now()})}function Xn(){var e,t;for(Yn=Qn(),Kn=!0,qn.sort((function(e,t){return e.id-t.id})),Wn=0;Wn<qn.length;Wn++)e=qn[Wn],e.before&&e.before(),t=e.id,zn[t]=null,e.run();var n=Bn.slice(),r=qn.slice();Hn(),tr(n),Zn(r),le&&B.devtools&&le.emit("flush")}function Zn(e){var t=e.length;while(t--){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&$n(r,"updated")}}function er(e){e._inactive=!1,Bn.push(e)}function tr(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Un(e[t],!0)}function nr(e){var t=e.id;if(null==zn[t]){if(zn[t]=!0,Kn){var n=qn.length-1;while(n>Wn&&qn[n].id>e.id)n--;qn.splice(n+1,0,e)}else qn.push(e);Gn||(Gn=!0,gt(Xn))}}var rr=0,ir=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++rr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new de,this.newDepIds=new de,this.expression="","function"===typeof t?this.getter=t:(this.getter=H(t),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};ir.prototype.get=function(){var e;ye(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(ko){if(!this.user)throw ko;rt(ko,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&yt(e),we(),this.cleanupDeps()}return e},ir.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ir.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ir.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():nr(this)},ir.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||u(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'+this.expression+'"';it(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},ir.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ir.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},ir.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||w(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var sr={enumerable:!0,configurable:!0,get:P,set:P};function or(e,t,n){sr.get=function(){return this[t][n]},sr.set=function(e){this[t][n]=e},Object.defineProperty(e,n,sr)}function ar(e){e._watchers=[];var t=e.$options;t.props&&cr(e,t.props),t.methods&&gr(e,t.methods),t.data?ur(e):Pe(e._data={},!0),t.computed&&dr(e,t.computed),t.watch&&t.watch!==oe&&vr(e,t.watch)}function cr(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],s=!e.$parent;s||Ne(!1);var o=function(s){i.push(s);var o=Je(s,t,n,e);Le(r,s,o),s in e||or(e,"_props",s)};for(var a in t)o(a);Ne(!0)}function ur(e){var t=e.$options.data;t=e._data="function"===typeof t?lr(t,e):t||{},h(t)||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);while(i--){var s=n[i];0,r&&_(r,s)||G(s)||or(e,"_data",s)}Pe(t,!0)}function lr(e,t){ye();try{return e.call(t,t)}catch(ko){return rt(ko,t,"data()"),{}}finally{we()}}var hr={lazy:!0};function dr(e,t){var n=e._computedWatchers=Object.create(null),r=ue();for(var i in t){var s=t[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new ir(e,o||P,P,hr)),i in e||fr(e,i,s)}}function fr(e,t,n){var r=!ue();"function"===typeof n?(sr.get=r?pr(t):mr(n),sr.set=P):(sr.get=n.get?r&&!1!==n.cache?pr(t):mr(n.get):P,sr.set=n.set||P),Object.defineProperty(e,t,sr)}function pr(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),ge.target&&t.depend(),t.value}}function mr(e){return function(){return e.call(this,this)}}function gr(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?P:N(t[n],e)}function vr(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(e,n,r[i]);else yr(e,n,r)}}function yr(e,t,n,r){return h(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,r)}function wr(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Me,e.prototype.$delete=Fe,e.prototype.$watch=function(e,t,n){var r=this;if(h(t))return yr(r,e,t,n);n=n||{},n.user=!0;var i=new ir(r,e,t,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';ye(),it(t,r,[i.value],r,s),we()}return function(){i.teardown()}}}var br=0;function _r(e){e.prototype._init=function(e){var t=this;t._uid=br++,t._isVue=!0,e&&e._isComponent?Ir(t,e):t.$options=Ye(Tr(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Pn(t),Sn(t),yn(t),$n(t,"beforeCreate"),Ot(t),ar(t),Nt(t),$n(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Ir(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Tr(e){var t=e.options;if(e.super){var n=Tr(e.super),r=e.superOptions;if(n!==r){e.superOptions=n;var i=Er(e);i&&D(e.extendOptions,i),t=e.options=Ye(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Er(e){var t,n=e.options,r=e.sealedOptions;for(var i in n)n[i]!==r[i]&&(t||(t={}),t[i]=n[i]);return t}function kr(e){this._init(e)}function Sr(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof e.install?e.install.apply(e,n):"function"===typeof e&&e.apply(null,n),t.push(e),this}}function Ar(e){e.mixin=function(e){return this.options=Ye(this.options,e),this}}function Cr(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var s=e.name||n.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ye(n.options,e),o["super"]=n,o.options.props&&xr(o),o.options.computed&&Nr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,$.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=D({},o.options),i[r]=o,o}}function xr(e){var t=e.options.props;for(var n in t)or(e.prototype,"_props",n)}function Nr(e){var t=e.options.computed;for(var n in t)fr(e.prototype,n,t[n])}function Or(e){$.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&h(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"===typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function Dr(e){return e&&(e.Ctor.options.name||e.tag)}function Rr(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!d(e)&&e.test(t)}function Pr(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&Lr(n,s,r,i)}}}function Lr(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,w(n,t)}_r(kr),wr(kr),On(kr),Ln(kr),_n(kr);var Mr=[String,RegExp,Array],Fr={name:"keep-alive",abstract:!0,props:{include:Mr,exclude:Mr,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,r=e.vnodeToCache,i=e.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;t[i]={name:Dr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Lr(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)Lr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Pr(e,(function(e){return Rr(t,e)}))})),this.$watch("exclude",(function(t){Pr(e,(function(e){return!Rr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=kn(e),n=t&&t.componentOptions;if(n){var r=Dr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Rr(s,r))||o&&r&&Rr(o,r))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,w(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},Vr={KeepAlive:Fr};function Ur(e){var t={get:function(){return B}};Object.defineProperty(e,"config",t),e.util={warn:pe,extend:D,mergeOptions:Ye,defineReactive:Le},e.set=Me,e.delete=Fe,e.nextTick=gt,e.observable=function(e){return Pe(e),e},e.options=Object.create(null),$.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,D(e.options.components,Vr),Sr(e),Ar(e),Cr(e),Or(e)}Ur(kr),Object.defineProperty(kr.prototype,"$isServer",{get:ue}),Object.defineProperty(kr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(kr,"FunctionalRenderContext",{value:en}),kr.version="2.6.14";var jr=v("style,class"),$r=v("input,textarea,option,select,progress"),qr=function(e,t,n){return"value"===n&&$r(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Br=v("contenteditable,draggable,spellcheck"),zr=v("events,caret,typing,plaintext-only"),Gr=function(e,t){return Qr(t)||"false"===t?"false":"contenteditable"===e&&zr(t)?t:"true"},Kr=v("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wr="http://www.w3.org/1999/xlink",Hr=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Yr=function(e){return Hr(e)?e.slice(6,e.length):""},Qr=function(e){return null==e||!1===e};function Jr(e){var t=e.data,n=e,r=e;while(s(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(t=Xr(r.data,t));while(s(n=n.parent))n&&n.data&&(t=Xr(t,n.data));return Zr(t.staticClass,t.class)}function Xr(e,t){return{staticClass:ei(e.staticClass,t.staticClass),class:s(e.class)?[e.class,t.class]:t.class}}function Zr(e,t){return s(e)||s(t)?ei(e,ti(t)):""}function ei(e,t){return e?t?e+" "+t:e:t||""}function ti(e){return Array.isArray(e)?ni(e):u(e)?ri(e):"string"===typeof e?e:""}function ni(e){for(var t,n="",r=0,i=e.length;r<i;r++)s(t=ti(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function ri(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var ii={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},si=v("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),oi=v("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),ai=function(e){return si(e)||oi(e)};function ci(e){return oi(e)?"svg":"math"===e?"math":void 0}var ui=Object.create(null);function li(e){if(!J)return!0;if(ai(e))return!1;if(e=e.toLowerCase(),null!=ui[e])return ui[e];var t=document.createElement(e);return e.indexOf("-")>-1?ui[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ui[e]=/HTMLUnknownElement/.test(t.toString())}var hi=v("text,number,password,search,email,tel,url");function di(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function fi(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function pi(e,t){return document.createElementNS(ii[e],t)}function mi(e){return document.createTextNode(e)}function gi(e){return document.createComment(e)}function vi(e,t,n){e.insertBefore(t,n)}function yi(e,t){e.removeChild(t)}function wi(e,t){e.appendChild(t)}function bi(e){return e.parentNode}function _i(e){return e.nextSibling}function Ii(e){return e.tagName}function Ti(e,t){e.textContent=t}function Ei(e,t){e.setAttribute(t,"")}var ki=Object.freeze({createElement:fi,createElementNS:pi,createTextNode:mi,createComment:gi,insertBefore:vi,removeChild:yi,appendChild:wi,parentNode:bi,nextSibling:_i,tagName:Ii,setTextContent:Ti,setStyleScope:Ei}),Si={create:function(e,t){Ai(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Ai(e,!0),Ai(t))},destroy:function(e){Ai(e,!0)}};function Ai(e,t){var n=e.data.ref;if(s(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?w(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Ci=new be("",{},[]),xi=["create","activate","update","remove","destroy"];function Ni(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&s(e.data)===s(t.data)&&Oi(e,t)||o(e.isAsyncPlaceholder)&&i(t.asyncFactory.error))}function Oi(e,t){if("input"!==e.tag)return!0;var n,r=s(n=e.data)&&s(n=n.attrs)&&n.type,i=s(n=t.data)&&s(n=n.attrs)&&n.type;return r===i||hi(r)&&hi(i)}function Di(e,t,n){var r,i,o={};for(r=t;r<=n;++r)i=e[r].key,s(i)&&(o[i]=r);return o}function Ri(e){var t,n,r={},a=e.modules,u=e.nodeOps;for(t=0;t<xi.length;++t)for(r[xi[t]]=[],n=0;n<a.length;++n)s(a[n][xi[t]])&&r[xi[t]].push(a[n][xi[t]]);function l(e){return new be(u.tagName(e).toLowerCase(),{},[],void 0,e)}function h(e,t){function n(){0===--n.listeners&&d(e)}return n.listeners=t,n}function d(e){var t=u.parentNode(e);s(t)&&u.removeChild(t,e)}function f(e,t,n,r,i,a,c){if(s(e.elm)&&s(a)&&(e=a[c]=Ee(e)),e.isRootInsert=!i,!p(e,t,n,r)){var l=e.data,h=e.children,d=e.tag;s(d)?(e.elm=e.ns?u.createElementNS(e.ns,d):u.createElement(d,e),I(e),w(e,h,t),s(l)&&_(e,t),y(n,e.elm,r)):o(e.isComment)?(e.elm=u.createComment(e.text),y(n,e.elm,r)):(e.elm=u.createTextNode(e.text),y(n,e.elm,r))}}function p(e,t,n,r){var i=e.data;if(s(i)){var a=s(e.componentInstance)&&i.keepAlive;if(s(i=i.hook)&&s(i=i.init)&&i(e,!1),s(e.componentInstance))return m(e,t),y(n,e.elm,r),o(a)&&g(e,t,n,r),!0}}function m(e,t){s(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,b(e)?(_(e,t),I(e)):(Ai(e),t.push(e))}function g(e,t,n,i){var o,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,s(o=a.data)&&s(o=o.transition)){for(o=0;o<r.activate.length;++o)r.activate[o](Ci,a);t.push(a);break}y(n,e.elm,i)}function y(e,t,n){s(e)&&(s(n)?u.parentNode(n)===e&&u.insertBefore(e,t,n):u.appendChild(e,t))}function w(e,t,n){if(Array.isArray(t)){0;for(var r=0;r<t.length;++r)f(t[r],n,e.elm,null,!0,t,r)}else c(e.text)&&u.appendChild(e.elm,u.createTextNode(String(e.text)))}function b(e){while(e.componentInstance)e=e.componentInstance._vnode;return s(e.tag)}function _(e,n){for(var i=0;i<r.create.length;++i)r.create[i](Ci,e);t=e.data.hook,s(t)&&(s(t.create)&&t.create(Ci,e),s(t.insert)&&n.push(e))}function I(e){var t;if(s(t=e.fnScopeId))u.setStyleScope(e.elm,t);else{var n=e;while(n)s(t=n.context)&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t),n=n.parent}s(t=Dn)&&t!==e.context&&t!==e.fnContext&&s(t=t.$options._scopeId)&&u.setStyleScope(e.elm,t)}function T(e,t,n,r,i,s){for(;r<=i;++r)f(n[r],s,e,t,!1,n,r)}function E(e){var t,n,i=e.data;if(s(i))for(s(t=i.hook)&&s(t=t.destroy)&&t(e),t=0;t<r.destroy.length;++t)r.destroy[t](e);if(s(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function k(e,t,n){for(;t<=n;++t){var r=e[t];s(r)&&(s(r.tag)?(S(r),E(r)):d(r.elm))}}function S(e,t){if(s(t)||s(e.data)){var n,i=r.remove.length+1;for(s(t)?t.listeners+=i:t=h(e.elm,i),s(n=e.componentInstance)&&s(n=n._vnode)&&s(n.data)&&S(n,t),n=0;n<r.remove.length;++n)r.remove[n](e,t);s(n=e.data.hook)&&s(n=n.remove)?n(e,t):t()}else d(e.elm)}function A(e,t,n,r,o){var a,c,l,h,d=0,p=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,w=n[0],b=n[y],_=!o;while(d<=m&&p<=y)i(g)?g=t[++d]:i(v)?v=t[--m]:Ni(g,w)?(x(g,w,r,n,p),g=t[++d],w=n[++p]):Ni(v,b)?(x(v,b,r,n,y),v=t[--m],b=n[--y]):Ni(g,b)?(x(g,b,r,n,y),_&&u.insertBefore(e,g.elm,u.nextSibling(v.elm)),g=t[++d],b=n[--y]):Ni(v,w)?(x(v,w,r,n,p),_&&u.insertBefore(e,v.elm,g.elm),v=t[--m],w=n[++p]):(i(a)&&(a=Di(t,d,m)),c=s(w.key)?a[w.key]:C(w,t,d,m),i(c)?f(w,r,e,g.elm,!1,n,p):(l=t[c],Ni(l,w)?(x(l,w,r,n,p),t[c]=void 0,_&&u.insertBefore(e,l.elm,g.elm)):f(w,r,e,g.elm,!1,n,p)),w=n[++p]);d>m?(h=i(n[y+1])?null:n[y+1].elm,T(e,h,n,p,y,r)):p>y&&k(t,d,m)}function C(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(s(o)&&Ni(e,o))return i}}function x(e,t,n,a,c,l){if(e!==t){s(t.elm)&&s(a)&&(t=a[c]=Ee(t));var h=t.elm=e.elm;if(o(e.isAsyncPlaceholder))s(t.asyncFactory.resolved)?D(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;s(f)&&s(d=f.hook)&&s(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(s(f)&&b(t)){for(d=0;d<r.update.length;++d)r.update[d](e,t);s(d=f.hook)&&s(d=d.update)&&d(e,t)}i(t.text)?s(p)&&s(m)?p!==m&&A(h,p,m,n,l):s(m)?(s(e.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):s(p)?k(p,0,p.length-1):s(e.text)&&u.setTextContent(h,""):e.text!==t.text&&u.setTextContent(h,t.text),s(f)&&s(d=f.hook)&&s(d=d.postpatch)&&d(e,t)}}}function N(e,t,n){if(o(n)&&s(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var O=v("attrs,class,staticClass,staticStyle,key");function D(e,t,n,r){var i,a=t.tag,c=t.data,u=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&s(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(s(c)&&(s(i=c.hook)&&s(i=i.init)&&i(t,!0),s(i=t.componentInstance)))return m(t,n),!0;if(s(a)){if(s(u))if(e.hasChildNodes())if(s(i=c)&&s(i=i.domProps)&&s(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!D(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(t,u,n);if(s(c)){var f=!1;for(var p in c)if(!O(p)){f=!0,_(t,n);break}!f&&c["class"]&&yt(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,a){if(!i(t)){var c=!1,h=[];if(i(e))c=!0,f(t,h);else{var d=s(e.nodeType);if(!d&&Ni(e,t))x(e,t,h,null,null,a);else{if(d){if(1===e.nodeType&&e.hasAttribute(j)&&(e.removeAttribute(j),n=!0),o(n)&&D(e,t,h))return N(t,h,!0),e;e=l(e)}var p=e.elm,m=u.parentNode(p);if(f(t,h,p._leaveCb?null:m,u.nextSibling(p)),s(t.parent)){var g=t.parent,v=b(t);while(g){for(var y=0;y<r.destroy.length;++y)r.destroy[y](g);if(g.elm=t.elm,v){for(var w=0;w<r.create.length;++w)r.create[w](Ci,g);var _=g.data.hook.insert;if(_.merged)for(var I=1;I<_.fns.length;I++)_.fns[I]()}else Ai(g);g=g.parent}}s(m)?k([e],0,0):s(e.tag)&&E(e)}}return N(t,h,c),t.elm}s(e)&&E(e)}}var Pi={create:Li,update:Li,destroy:function(e){Li(e,Ci)}};function Li(e,t){(e.data.directives||t.data.directives)&&Mi(e,t)}function Mi(e,t){var n,r,i,s=e===Ci,o=t===Ci,a=Vi(e.data.directives,e.context),c=Vi(t.data.directives,t.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,ji(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(ji(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ji(u[n],"inserted",t,e)};s?Tt(t,"insert",h):h()}if(l.length&&Tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)ji(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||ji(a[n],"unbind",e,e,o)}var Fi=Object.create(null);function Vi(e,t){var n,r,i=Object.create(null);if(!e)return i;for(n=0;n<e.length;n++)r=e[n],r.modifiers||(r.modifiers=Fi),i[Ui(r)]=r,r.def=Qe(t.$options,"directives",r.name,!0);return i}function Ui(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function ji(e,t,n,r,i){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,r,i)}catch(ko){rt(ko,n.context,"directive "+e.name+" "+t+" hook")}}var $i=[Si,Pi];function qi(e,t){var n=t.componentOptions;if((!s(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(e.data.attrs)||!i(t.data.attrs))){var r,o,a,c=t.elm,u=e.data.attrs||{},l=t.data.attrs||{};for(r in s(l.__ob__)&&(l=t.data.attrs=D({},l)),l)o=l[r],a=u[r],a!==o&&Bi(c,r,o,t.data.pre);for(r in(te||re)&&l.value!==u.value&&Bi(c,"value",l.value),u)i(l[r])&&(Hr(r)?c.removeAttributeNS(Wr,Yr(r)):Br(r)||c.removeAttribute(r))}}function Bi(e,t,n,r){r||e.tagName.indexOf("-")>-1?zi(e,t,n):Kr(t)?Qr(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Br(t)?e.setAttribute(t,Gr(t,n)):Hr(t)?Qr(n)?e.removeAttributeNS(Wr,Yr(t)):e.setAttributeNS(Wr,t,n):zi(e,t,n)}function zi(e,t,n){if(Qr(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}var Gi={create:qi,update:qi};function Ki(e,t){var n=t.elm,r=t.data,o=e.data;if(!(i(r.staticClass)&&i(r.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Jr(t),c=n._transitionClasses;s(c)&&(a=ei(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wi,Hi={create:Ki,update:Ki},Yi="__r",Qi="__c";function Ji(e){if(s(e[Yi])){var t=te?"change":"input";e[t]=[].concat(e[Yi],e[t]||[]),delete e[Yi]}s(e[Qi])&&(e.change=[].concat(e[Qi],e.change||[]),delete e[Qi])}function Xi(e,t,n){var r=Wi;return function i(){var s=t.apply(null,arguments);null!==s&&ts(e,i,n,r)}}var Zi=ct&&!(se&&Number(se[1])<=53);function es(e,t,n,r){if(Zi){var i=Yn,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=i||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}Wi.addEventListener(e,t,ae?{capture:n,passive:r}:n)}function ts(e,t,n,r){(r||Wi).removeEventListener(e,t._wrapper||t,n)}function ns(e,t){if(!i(e.data.on)||!i(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Wi=t.elm,Ji(n),It(n,r,es,ts,Xi,t.context),Wi=void 0}}var rs,is={create:ns,update:ns};function ss(e,t){if(!i(e.data.domProps)||!i(t.data.domProps)){var n,r,o=t.elm,a=e.data.domProps||{},c=t.data.domProps||{};for(n in s(c.__ob__)&&(c=t.data.domProps=D({},c)),a)n in c||(o[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=r;var u=i(r)?"":String(r);os(o,u)&&(o.value=u)}else if("innerHTML"===n&&oi(o.tagName)&&i(o.innerHTML)){rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+r+"</svg>";var l=rs.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(r!==a[n])try{o[n]=r}catch(ko){}}}}function os(e,t){return!e.composing&&("OPTION"===e.tagName||as(e,t)||cs(e,t))}function as(e,t){var n=!0;try{n=document.activeElement!==e}catch(ko){}return n&&e.value!==t}function cs(e,t){var n=e.value,r=e._vModifiers;if(s(r)){if(r.number)return g(n)!==g(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}var us={create:ss,update:ss},ls=I((function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function hs(e){var t=ds(e.style);return e.staticStyle?D(e.staticStyle,t):t}function ds(e){return Array.isArray(e)?R(e):"string"===typeof e?ls(e):e}function fs(e,t){var n,r={};if(t){var i=e;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=hs(i.data))&&D(r,n)}(n=hs(e.data))&&D(r,n);var s=e;while(s=s.parent)s.data&&(n=hs(s.data))&&D(r,n);return r}var ps,ms=/^--/,gs=/\s*!important$/,vs=function(e,t,n){if(ms.test(t))e.style.setProperty(t,n);else if(gs.test(n))e.style.setProperty(A(t),n.replace(gs,""),"important");else{var r=ws(t);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)e.style[r]=n[i];else e.style[r]=n}},ys=["Webkit","Moz","ms"],ws=I((function(e){if(ps=ps||document.createElement("div").style,e=E(e),"filter"!==e&&e in ps)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<ys.length;n++){var r=ys[n]+t;if(r in ps)return r}}));function bs(e,t){var n=t.data,r=e.data;if(!(i(n.staticStyle)&&i(n.style)&&i(r.staticStyle)&&i(r.style))){var o,a,c=t.elm,u=r.staticStyle,l=r.normalizedStyle||r.style||{},h=u||l,d=ds(t.data.style)||{};t.data.normalizedStyle=s(d.__ob__)?D({},d):d;var f=fs(t,!0);for(a in h)i(f[a])&&vs(c,a,"");for(a in f)o=f[a],o!==h[a]&&vs(c,a,null==o?"":o)}}var _s={create:bs,update:bs},Is=/\s+/;function Ts(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Is).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Es(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Is).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function ks(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&D(t,Ss(e.name||"v")),D(t,e),t}return"string"===typeof e?Ss(e):void 0}}var Ss=I((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),As=J&&!ne,Cs="transition",xs="animation",Ns="transition",Os="transitionend",Ds="animation",Rs="animationend";As&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Ns="WebkitTransition",Os="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ds="WebkitAnimation",Rs="webkitAnimationEnd"));var Ps=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ls(e){Ps((function(){Ps(e)}))}function Ms(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Ts(e,t))}function Fs(e,t){e._transitionClasses&&w(e._transitionClasses,t),Es(e,t)}function Vs(e,t,n){var r=js(e,t),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Cs?Os:Rs,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var Us=/\b(transform|all)(,|$)/;function js(e,t){var n,r=window.getComputedStyle(e),i=(r[Ns+"Delay"]||"").split(", "),s=(r[Ns+"Duration"]||"").split(", "),o=$s(i,s),a=(r[Ds+"Delay"]||"").split(", "),c=(r[Ds+"Duration"]||"").split(", "),u=$s(a,c),l=0,h=0;t===Cs?o>0&&(n=Cs,l=o,h=s.length):t===xs?u>0&&(n=xs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Cs:xs:null,h=n?n===Cs?s.length:c.length:0);var d=n===Cs&&Us.test(r[Ns+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function $s(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return qs(t)+qs(e[n])})))}function qs(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Bs(e,t){var n=e.elm;s(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var r=ks(e.data.transition);if(!i(r)&&!s(n._enterCb)&&1===n.nodeType){var o=r.css,a=r.type,c=r.enterClass,l=r.enterToClass,h=r.enterActiveClass,d=r.appearClass,f=r.appearToClass,p=r.appearActiveClass,m=r.beforeEnter,v=r.enter,y=r.afterEnter,w=r.enterCancelled,b=r.beforeAppear,_=r.appear,I=r.afterAppear,T=r.appearCancelled,E=r.duration,k=Dn,S=Dn.$vnode;while(S&&S.parent)k=S.context,S=S.parent;var A=!k._isMounted||!e.isRootInsert;if(!A||_||""===_){var C=A&&d?d:c,x=A&&p?p:h,N=A&&f?f:l,O=A&&b||m,D=A&&"function"===typeof _?_:v,R=A&&I||y,P=A&&T||w,L=g(u(E)?E.enter:E);0;var M=!1!==o&&!ne,F=Ks(D),V=n._enterCb=U((function(){M&&(Fs(n,N),Fs(n,x)),V.cancelled?(M&&Fs(n,C),P&&P(n)):R&&R(n),n._enterCb=null}));e.data.show||Tt(e,"insert",(function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,V)})),O&&O(n),M&&(Ms(n,C),Ms(n,x),Ls((function(){Fs(n,C),V.cancelled||(Ms(n,N),F||(Gs(L)?setTimeout(V,L):Vs(n,a,V)))}))),e.data.show&&(t&&t(),D&&D(n,V)),M||F||V()}}}function zs(e,t){var n=e.elm;s(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=ks(e.data.transition);if(i(r)||1!==n.nodeType)return t();if(!s(n._leaveCb)){var o=r.css,a=r.type,c=r.leaveClass,l=r.leaveToClass,h=r.leaveActiveClass,d=r.beforeLeave,f=r.leave,p=r.afterLeave,m=r.leaveCancelled,v=r.delayLeave,y=r.duration,w=!1!==o&&!ne,b=Ks(f),_=g(u(y)?y.leave:y);0;var I=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),w&&(Fs(n,l),Fs(n,h)),I.cancelled?(w&&Fs(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));v?v(T):T()}function T(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),w&&(Ms(n,c),Ms(n,h),Ls((function(){Fs(n,c),I.cancelled||(Ms(n,l),b||(Gs(_)?setTimeout(I,_):Vs(n,a,I)))}))),f&&f(n,I),w||b||I())}}function Gs(e){return"number"===typeof e&&!isNaN(e)}function Ks(e){if(i(e))return!1;var t=e.fns;return s(t)?Ks(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Ws(e,t){!0!==t.data.show&&Bs(t)}var Hs=J?{create:Ws,activate:Ws,remove:function(e,t){!0!==e.data.show?zs(e,t):t()}}:{},Ys=[Gi,Hi,is,us,_s,Hs],Qs=Ys.concat($i),Js=Ri({nodeOps:ki,modules:Qs});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&so(e,"input")}));var Xs={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Tt(n,"postpatch",(function(){Xs.componentUpdated(e,t,n)})):Zs(e,t,n.context),e._vOptions=[].map.call(e.options,no)):("textarea"===n.tag||hi(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",ro),e.addEventListener("compositionend",io),e.addEventListener("change",io),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Zs(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,no);if(i.some((function(e,t){return!F(e,r[t])}))){var s=e.multiple?t.value.some((function(e){return to(e,i)})):t.value!==t.oldValue&&to(t.value,i);s&&so(e,"change")}}}};function Zs(e,t,n){eo(e,t,n),(te||re)&&setTimeout((function(){eo(e,t,n)}),0)}function eo(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],i)s=V(r,no(o))>-1,o.selected!==s&&(o.selected=s);else if(F(no(o),r))return void(e.selectedIndex!==a&&(e.selectedIndex=a));i||(e.selectedIndex=-1)}}function to(e,t){return t.every((function(t){return!F(t,e)}))}function no(e){return"_value"in e?e._value:e.value}function ro(e){e.target.composing=!0}function io(e){e.target.composing&&(e.target.composing=!1,so(e.target,"input"))}function so(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function oo(e){return!e.componentInstance||e.data&&e.data.transition?e:oo(e.componentInstance._vnode)}var ao={bind:function(e,t,n){var r=t.value;n=oo(n);var i=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,Bs(n,(function(){e.style.display=s}))):e.style.display=r?s:"none"},update:function(e,t,n){var r=t.value,i=t.oldValue;if(!r!==!i){n=oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?Bs(n,(function(){e.style.display=e.__vOriginalDisplay})):zs(n,(function(){e.style.display="none"}))):e.style.display=r?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},co={model:Xs,show:ao},uo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function lo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?lo(kn(t.children)):e}function ho(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var s in i)t[E(s)]=i[s];return t}function fo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function po(e){while(e=e.parent)if(e.data.transition)return!0}function mo(e,t){return t.key===e.key&&t.tag===e.tag}var go=function(e){return e.tag||Lt(e)},vo=function(e){return"show"===e.name},yo={name:"transition",props:uo,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(go),n.length)){0;var r=this.mode;0;var i=n[0];if(po(this.$vnode))return i;var s=lo(i);if(!s)return i;if(this._leaving)return fo(e,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:c(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=ho(this),u=this._vnode,l=lo(u);if(s.data.directives&&s.data.directives.some(vo)&&(s.data.show=!0),l&&l.data&&!mo(s,l)&&!Lt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=D({},a);if("out-in"===r)return this._leaving=!0,Tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),fo(e,i);if("in-out"===r){if(Lt(s))return u;var d,f=function(){d()};Tt(a,"afterEnter",f),Tt(a,"enterCancelled",f),Tt(h,"delayLeave",(function(e){d=e}))}}return i}}},wo=D({tag:String,moveClass:String},uo);delete wo.mode;var bo={props:wo,beforeMount:function(){var e=this,t=this._update;this._update=function(n,r){var i=Rn(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,i(),t.call(e,n,r)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=ho(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(_o),e.forEach(Io),e.forEach(To),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,r=n.style;Ms(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Os,n._moveCb=function e(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Os,e),n._moveCb=null,Fs(n,t))})}})))},methods:{hasMove:function(e,t){if(!As)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Es(n,e)})),Ts(n,t),n.style.display="none",this.$el.appendChild(n);var r=js(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function _o(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Io(e){e.data.newPos=e.elm.getBoundingClientRect()}function To(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var Eo={Transition:yo,TransitionGroup:bo};kr.config.mustUseProp=qr,kr.config.isReservedTag=ai,kr.config.isReservedAttr=jr,kr.config.getTagNamespace=ci,kr.config.isUnknownElement=li,D(kr.options.directives,co),D(kr.options.components,Eo),kr.prototype.__patch__=J?Js:P,kr.prototype.$mount=function(e,t){return e=e&&J?di(e):void 0,Mn(this,e,t)},J&&setTimeout((function(){B.devtools&&le&&le.emit("init",kr)}),0),t["Z"]=kr},494:function(e){(function(t,n){e.exports=n()})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"capitalize",(function(){return b})),n.d(r,"uppercase",(function(){return I})),n.d(r,"lowercase",(function(){return E})),n.d(r,"placeholder",(function(){return S})),n.d(r,"truncate",(function(){return C})),n.d(r,"repeat",(function(){return N})),n.d(r,"wrap",(function(){return D})),n.d(r,"reverse",(function(){return P}));var i={};n.r(i),n.d(i,"limitBy",(function(){return M})),n.d(i,"filterBy",(function(){return U})),n.d(i,"orderBy",(function(){return $})),n.d(i,"find",(function(){return B}));var s={};function o(e){return u(e)||c(e)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}n.r(s),n.d(s,"currency",(function(){return K})),n.d(s,"bytes",(function(){return H})),n.d(s,"pluralize",(function(){return Q})),n.d(s,"ordinal",(function(){return X})),n.d(s,"number",(function(){return se})),n.d(s,"percent",(function(){return ae}));var h=Array.prototype,d=Object.prototype,f=(h.slice,d.toString),p={isArray:function(e){return Array.isArray(e)}},m=Math.pow(2,53)-1;function g(e,t){return t.length?g(e[t[0]],t.slice(1)):e}p.isArrayLike=function(e){if("object"!==l(e)||!e)return!1;var t=e.length;return"number"===typeof t&&t%1===0&&t>=0&&t<=m},p.isObject=function(e){var t=l(e);return"function"===t||"object"===t&&!!e},p.each=function(e,t){var n,r;if(p.isArray(e)){for(n=0,r=e.length;n<r;n++)if(!1===t(e[n],n,e))break}else for(n in e)if(!1===t(e[n],n,e))break;return e},p.each(["Arguments","Function","String","Number","Date","RegExp","Error"],(function(e){p["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}})),p.toArray=function(e,t){t=t||0;var n=e.length-t,r=new Array(n);while(n--)r[n]=e[n+t];return r},p.toNumber=function(e){if("string"!==typeof e)return e;var t=Number(e);return isNaN(t)?e:t},p.convertRangeToArray=function(e){return o(Array(e+1).keys()).slice(1)},p.convertArray=function(e){if(p.isArray(e))return e;if(p.isPlainObject(e)){var t,n=Object.keys(e),r=n.length,i=new Array(r);while(r--)t=n[r],i[r]={$key:t,$value:e[t]};return i}return e||[]},p.getPath=function(e,t){return g(e,t.split("."))};f=Object.prototype.toString;var v="[object Object]";p.isPlainObject=function(e){return f.call(e)===v},p.exist=function(e){return null!==e&&"undefined"!==typeof e};var y=p;function w(e,t){var n=this&&this.capitalize?this.capitalize:{};t=t||n;var r=null!=t.onlyFirstLetter&&t.onlyFirstLetter;return e||0===e?!0===r?e.toString().charAt(0).toUpperCase()+e.toString().slice(1):(e=e.toString().toLowerCase().split(" "),e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")):""}var b=w;function _(e){return e||0===e?e.toString().toUpperCase():""}var I=_;function T(e){return e||0===e?e.toString().toLowerCase():""}var E=T;function k(e,t){return void 0===e||""===e||null===e?t:e}var S=k;function A(e,t){return t=t||15,e&&"string"===typeof e?e.length<=t?e:e.substring(0,t)+"...":""}var C=A,x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t?e.toString().repeat(t):""},N=x,O=function(e,t){return[t,e,t].join("")},D=O,R=function(e){return Array.from(e).reverse().join("")},P=R;function L(e,t,n){return e=y.isArray(e)?e:y.convertRangeToArray(e),n=n?parseInt(n,10):0,t=y.toNumber(t),"number"===typeof t?e.slice(n,n+t):e}var M=L;function F(e,t){e=y.convertArray(e);if(null==t)return e;if("function"===typeof t)return e.filter(t);t=(""+t).toLowerCase();for(var n,r,i,s,o=2,a=Array.prototype.concat.apply([],y.toArray(arguments,o)),c=[],u=0,l=e.length;u<l;u++)if(n=e[u],i=n&&n.$value||n,s=a.length,s){while(s--)if(r=a[s],"$key"===r&&V(n.$key,t)||V(y.getPath(i,r),t)){c.push(n);break}}else V(n,t)&&c.push(n);return c}function V(e,t){var n;if(y.isPlainObject(e)){var r=Object.keys(e);n=r.length;while(n--)if(V(e[r[n]],t))return!0}else if(y.isArray(e)){n=e.length;while(n--)if(V(e[n],t))return!0}else if(null!=e)return e.toString().toLowerCase().indexOf(t)>-1}var U=F;function j(e){var t,n=null;e=y.convertArray(e);var r=y.toArray(arguments,1),i=r[r.length-1];"number"===typeof i?(i=i<0?-1:1,r=r.length>1?r.slice(0,-1):r):i=1;var s=r[0];if(!s)return e;function o(e,n,r){var s=t[r];return s&&("$key"!==s&&(y.isObject(e)&&"$value"in e&&(e=e.$value),y.isObject(n)&&"$value"in n&&(n=n.$value)),e=y.isObject(e)?y.getPath(e,s):e,n=y.isObject(n)?y.getPath(n,s):n,e="string"===typeof e?e.toLowerCase():e,n="string"===typeof n?n.toLowerCase():n),e===n?0:e>n?i:-i}return"function"===typeof s?n=function(e,t){return s(e,t)*i}:(t=Array.prototype.concat.apply([],r),n=function(e,r,i){return i=i||0,i>=t.length-1?o(e,r,i):o(e,r,i)||n(e,r,i+1)}),e.slice().sort(n)}var $=j;function q(e,t){var n=U.apply(this,arguments);return n.splice(1),n}var B=q;function z(e,t,n,r){var i,s,o,a,c=this&&this.currency?this.currency:{};t=y.exist(t)?t:c.symbol,n=y.exist(n)?n:c.decimalDigits,r=r||c;var u=/(\d{3})(?=\d)/g;if(e=parseFloat(e),!isFinite(e)||!e&&0!==e)return"";t="undefined"!==typeof t?t:"$",n="undefined"!==typeof n?n:2,i=null!=r.thousandsSeparator?r.thousandsSeparator:",",s=null==r.symbolOnLeft||r.symbolOnLeft,o=null!=r.spaceBetweenAmountAndSymbol&&r.spaceBetweenAmountAndSymbol,a=null!=r.showPlusSign&&r.showPlusSign;var l=Math.abs(e),h=G(l,n);h=r.decimalSeparator?h.replace(".",r.decimalSeparator):h;var d=n?h.slice(0,-1-n):h,f=d.length%3,p=f>0?d.slice(0,f)+(d.length>3?i:""):"",m=n?h.slice(-1-n):"";t=o?s?t+" ":" "+t:t,t=s?t+p+d.slice(f).replace(u,"$1"+i)+m:p+d.slice(f).replace(u,"$1"+i)+m+t;var g=e<0?"-":"",v=e>0&&a?"+":"";return v+g+t}function G(e,t){return(+(Math.round(+(e+"e"+t))+"e"+-t)).toFixed(t)}var K=z;function W(e,t){var n=this&&this.bytes?this.bytes:{};return t=y.exist(t)?t:n.decimalDigits,t="undefined"!==typeof t?t:2,e=null===e||isNaN(e)?0:e,e>=Math.pow(1024,4)?"".concat((e/Math.pow(1024,4)).toFixed(t)," TB"):e>=Math.pow(1024,3)?"".concat((e/Math.pow(1024,3)).toFixed(t)," GB"):e>=Math.pow(1024,2)?"".concat((e/Math.pow(1024,2)).toFixed(t)," MB"):e>=1024?"".concat((e/1024).toFixed(t)," kB"):"".concat(e,1===e?" byte":" bytes")}var H=W;function Y(e,t,n){var r=this&&this.pluralize?this.pluralize:{};n=n||r;var i="",s=null!=n.includeNumber&&n.includeNumber;return!0===s&&(i+=e+" "),!e&&0!==e||!t||(Array.isArray(t)?i+=t[e-1]||t[t.length-1]:i+=t+(1===e?"":"s")),i}var Q=Y;function J(e,t){var n=this&&this.ordinal?this.ordinal:{};t=t||n;var r="",i=null!=t.includeNumber&&t.includeNumber;!0===i&&(r+=e);var s=e%10,o=e%100;return r+=1==s&&11!=o?"st":2==s&&12!=o?"nd":3==s&&13!=o?"rd":"th",r}var X=J;function Z(e,t,n){var r=this&&this.number?this.number:{};t=y.exist(t)?t:r.format,n=n||r;var i=te(t),s=ee(e),o=null!=n.thousandsSeparator?n.thousandsSeparator:",",a=null!=n.decimalSeparator?n.decimalSeparator:".";if(i.sign=i.sign||s.sign,i.unit){var c=ne(s.float,i);return i.sign+c}var u=ie(s.float,i.decimals),l=re(u,i.base,o,a);return i.sign+l}function ee(e){return{float:Math.abs(parseFloat(e)),int:Math.abs(parseInt(e)),sign:Math.sign(e)<0?"-":""}}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",t=/([\+\-])?([0-9\,]+)?([\.0-9]+)?([a\s]+)?/,n=e?e.match(t):["","","","",""],r=n[3],i=r?r.match(/0/g).length:0;return{sign:n[1]||"",base:n[2]||"",decimals:i,unit:n[4]||""}}function ne(e,t){var n,r=/\.0+$|(\.[0-9]*[1-9])0+$/,i=[{value:1,symbol:""},{value:1e3,symbol:"K"},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"}];for(n=i.length-1;n>0;n--)if(e>=i[n].value)break;return e=(e/i[n].value).toFixed(t.decimals).replace(r,"$1"),e+t.unit.replace("a",i[n].symbol)}function re(e,t,n,r){var i=/(\d+)(\d{3})/,s=e.toString(),o=s.split("."),a=o[0],c=o.length>1?r+o[1]:"";switch(t){case"":a="";break;case"0,0":while(i.test(a))a=a.replace(i,"$1"+n+"$2");break}return a+c}function ie(e,t){return(+(Math.round(+(e+"e"+t))+"e"+-t)).toFixed(t)}Math.sign=function(e){return e=+e,0===e||isNaN(e)?e:e>0?1:-1};var se=Z;function oe(e,t,n,r){var i=this&&this.percent?this.percent:{};r=r||i,n=y.exist(n)?n:i.multiplier,n="undefined"!==typeof n?n:100,t=y.exist(t)?t:i.decimalDigits,t="undefined"!==typeof t?t:0;var s=null!=r.decimalSeparator?r.decimalSeparator:".";return e=null===e||isNaN(e)?0:e,"".concat((e*n).toFixed(t).replace(".",s),"%")}var ae=oe;function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){ue(e,t,n[t])}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le={install:function(e,t){y.each(r,(function(n,r){e.filter(r,n.bind(t))})),y.each(s,(function(n,r){e.filter(r,n.bind(t))}))},mixin:{methods:ce({},i)}};t["default"]=le;"undefined"!==typeof window&&window.Vue&&(window.Vue.use(le),window.Vue2Filters=le)}])}))},180:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(444),i=n(463),s=n(238),o=n(333);
/**
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
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
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
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
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
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.21";
/**
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
 */
/**
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
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
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
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},238:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return Y},_DEFAULT_ENTRY_NAME:function(){return M},_addComponent:function(){return j},_addOrOverwriteComponent:function(){return $},_apps:function(){return V},_clearComponents:function(){return G},_components:function(){return U},_getProvider:function(){return B},_registerComponent:function(){return q},_removeServiceInstance:function(){return z},deleteApp:function(){return Z},getApp:function(){return J},getApps:function(){return X},initializeApp:function(){return Q},onLog:function(){return te},registerVersion:function(){return ee},setLogLevel:function(){return ne}});var r=n(463),i=n(333),s=n(444);
/**
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
 */
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.20",l=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",I="@firebase/installations",T="@firebase/installations-compat",E="@firebase/messaging",k="@firebase/messaging-compat",S="@firebase/performance",A="@firebase/performance-compat",C="@firebase/remote-config",x="@firebase/remote-config-compat",N="@firebase/storage",O="@firebase/storage-compat",D="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.6.10",M="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[I]:"fire-iid",[T]:"fire-iid-compat",[E]:"fire-fcm",[k]:"fire-fcm-compat",[S]:"fire-perf",[A]:"fire-perf-compat",[C]:"fire-rc",[x]:"fire-rc-compat",[N]:"fire-gcs",[O]:"fire-gcs-compat",[D]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},V=new Map,U=new Map;function j(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e,t){e.container.addOrOverwriteComponent(t)}function q(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of V.values())j(n,e);return!0}function B(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function z(e,t,n=M){B(e,t).clearInstance(n)}function G(){U.clear()}
/**
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
 */const K={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},W=new s.LL("app","Firebase",K);
/**
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
 */
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
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
 */const Y=L;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw W.create("bad-app-name",{appName:String(i)});const o=V.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw W.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of U.values())a.addComponent(r);const c=new H(e,n,a);return V.set(i,c),c}function J(e=M){const t=V.get(e);if(!t)throw W.create("no-app",{appName:e});return t}function X(){return Array.from(V.values())}async function Z(e){const t=e.name;V.has(t)&&(V.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ee(e,t,n){var i;let s=null!==(i=F[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}q(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw W.create("invalid-log-argument");(0,i.Am)(e,t)}function ne(e){(0,i.Ub)(e)}
/**
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
 */const re="firebase-heartbeat-database",ie=1,se="firebase-heartbeat-store";let oe=null;function ae(){return oe||(oe=(0,s.X3)(re,ie,((e,t)=>{switch(t){case 0:e.createObjectStore(se)}})).catch((e=>{throw W.create("storage-open",{originalErrorMessage:e.message})}))),oe}async function ce(e){try{const t=await ae();return t.transaction(se).objectStore(se).get(le(e))}catch(t){throw W.create("storage-get",{originalErrorMessage:t.message})}}async function ue(e,t){try{const n=await ae(),r=n.transaction(se,"readwrite"),i=r.objectStore(se);return await i.put(t,le(e)),r.complete}catch(n){throw W.create("storage-set",{originalErrorMessage:n.message})}}function le(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const he=1024,de=2592e6;class fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ge(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=pe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=de})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pe(),{heartbeatsToSend:t,unsentEntries:n}=me(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pe(){const e=new Date;return e.toISOString().substring(0,10)}function me(e,t=he){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),ve(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ve(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ge{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ce(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return ue(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ve(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function ye(e){q(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),q(new r.wA("heartbeat",(e=>new fe(e)),"PRIVATE")),ee(c,u,e),ee(c,u,"esm2017"),ee("fire-js","")}ye("")},463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors-legacy.c3fa1c92.js.map