System.register(["./_virtual_cc-jz17qdyn.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.g,r=t._}],execute:function(){function n(t,e){return e.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(r){if("default"!==r&&!(r in t)){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}}))})),Object.freeze(t)}var i,o,a,s={exports:{}};i=s,o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,a=function(t){void 0===t&&(t={});var e,n,i=void 0!==t?t:{};i.ready=new Promise((function(t,r){e=t,n=r}));var a=Object.assign({},i),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),o&&(s=o),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",i.print||console.log.bind(console);var u,c,l=i.printErr||console.error.bind(console);Object.assign(i,a),a=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(u=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&F("no native wasm support detected");var f,p,d,h,v,y,m,g,b,$=!1;function w(){var t=c.buffer;i.HEAP8=f=new Int8Array(t),i.HEAP16=d=new Int16Array(t),i.HEAP32=v=new Int32Array(t),i.HEAPU8=p=new Uint8Array(t),i.HEAPU16=h=new Uint16Array(t),i.HEAPU32=y=new Uint32Array(t),i.HEAPF32=m=new Float32Array(t),i.HEAPF64=g=new Float64Array(t)}var C=[],P=[],T=[];function A(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)t=i.preRun.shift(),C.unshift(t);var t;U(C)}function O(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)t=i.postRun.shift(),T.unshift(t);var t;U(T)}var _,S,k=0,E=null;function W(){if(k--,i.monitorRunDependencies&&i.monitorRunDependencies(k),0==k&&E){var t=E;E=null,t()}}function F(t){i.onAbort&&i.onAbort(t),l(t="Aborted("+t+")"),$=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function j(t){return t.startsWith("data:application/octet-stream;base64,")}function R(t){try{if(t==_&&u)return new Uint8Array(u);throw"both async and sync fetching of the wasm failed"}catch(t){F(t)}}function D(t){return u||"function"!=typeof fetch?Promise.resolve().then((function(){return R(t)})):fetch(t,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((function(){return R(t)}))}function I(t,e,r){return D(t).then((function(t){return WebAssembly.instantiate(t,e)})).then((function(t){return t})).then(r,(function(t){l("failed to asynchronously prepare wasm: "+t),F(t)}))}function U(t){for(;t.length>0;)t.shift()(i)}function x(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function V(t,e){var r;return(r={},r[t=x(t)]=function(){return e.apply(this,arguments)},r)[t]}j(_="bullet.release.wasm.wasm")||(S=_,_=i.locateFile?i.locateFile(S,s):s+S);var z=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function B(t,e){var r=V(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var H=void 0;function M(t){throw new H(t)}var q=function(t){return t||M("Cannot use deleted val. handle = "+t),z.get(t).value},G=function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return z.allocate({refcount:1,value:t})}},L=void 0,N=void 0;function J(t){for(var e="",r=t;p[r];)e+=N[p[r++]];return e}var Z=[];function K(){for(;Z.length;){var t=Z.pop();t.$$.deleteScheduled=!1,t.delete()}}var Q=void 0;var X={};function Y(t,e){for(void 0===e&&M("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}var tt={};function et(t){var e=fe(t),r=J(e);return le(e),r}function rt(t,e){var r=tt[t];return void 0===r&&M(e+" has unknown type "+et(t)),r}function nt(){}var it=!1;function ot(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}function at(t){t.count.value-=1,0===t.count.value&&ot(t)}function st(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=st(t,e,r.baseClass);return null===n?null:r.downcast(n)}var ut={};function ct(t,e){return e=Y(t,e),X[e]}var lt=void 0;function ft(t){throw new lt(t)}function pt(t,e){return e.ptrType&&e.ptr||ft("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&ft("Both smartPtrType and smartPtr must be specified"),e.count={value:1},dt(Object.create(t,{$$:{value:e}}))}function dt(t){return"undefined"==typeof FinalizationRegistry?(dt=function(t){return t},t):(it=new FinalizationRegistry((function(t){at(t.$$)})),dt=function(t){var e=t.$$;if(e.smartPtr){var r={$$:e};it.register(t,r,t)}return t},nt=function(t){return it.unregister(t)},dt(t))}function ht(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var vt={},yt={};function mt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&ft("Mismatched type converter count");for(var i=0;i<t.length;++i)gt(t[i],n[i])}t.forEach((function(t){yt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){tt.hasOwnProperty(t)?i[e]=tt[t]:(o.push(t),vt.hasOwnProperty(t)||(vt[t]=[]),vt[t].push((function(){i[e]=tt[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function gt(t,e,r){if(void 0===r&&(r={}),!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||M('type "'+n+'" must have a positive integer typeid pointer'),tt.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;M("Cannot register type '"+n+"' twice")}if(tt[t]=e,delete yt[t],vt.hasOwnProperty(t)){var i=vt[t];delete vt[t],i.forEach((function(t){return t()}))}}function bt(t){M(t.$$.ptrType.registeredClass.name+" instance already deleted")}function $t(){}function wt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||M("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function Ct(t,e,r){i.hasOwnProperty(t)?((void 0===r||void 0!==i[t].overloadTable&&void 0!==i[t].overloadTable[r])&&M("Cannot register public name '"+t+"' twice"),wt(i,t,t),i.hasOwnProperty(r)&&M("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),i[t].overloadTable[r]=e):(i[t]=e,void 0!==r&&(i[t].numArguments=r))}function Pt(t,e,r,n,i,o,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function Tt(t,e,r){for(;e!==r;)e.upcast||M("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function At(t,e){if(null===e)return this.isReference&&M("null is not a valid "+this.name),0;e.$$||M('Cannot pass "'+Ht(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return Tt(e.$$.ptr,r,this.registeredClass)}function Ot(t,e){var r;if(null===e)return this.isReference&&M("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||M('Cannot pass "'+Ht(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&M("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=Tt(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&M("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:M("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,G((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:M("Unsupporting sharing policy")}return r}function _t(t,e){if(null===e)return this.isReference&&M("null is not a valid "+this.name),0;e.$$||M('Cannot pass "'+Ht(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&M("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return Tt(e.$$.ptr,r,this.registeredClass)}function St(t){return this.fromWireType(v[t>>2])}function kt(t,e,r,n,i,o,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,i||void 0!==e.baseClass?this.toWireType=Ot:n?(this.toWireType=At,this.destructorFunction=null):(this.toWireType=_t,this.destructorFunction=null)}function Et(t,e,r){i.hasOwnProperty(t)||ft("Replacing nonexistant public symbol"),void 0!==i[t].overloadTable&&void 0!==r?i[t].overloadTable[r]=e:(i[t]=e,i[t].argCount=r)}function Wt(t,e,r){var n=i["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}var Ft=[];function jt(t){var e=Ft[t];return e||(t>=Ft.length&&(Ft.length=t+1),Ft[t]=e=b.get(t)),e}function Rt(t,e,r){return t.includes("j")?Wt(t,e,r):jt(e).apply(null,r)}function Dt(t,e){var r,n,i,o=(t=J(t)).includes("j")?(r=t,n=e,i=[],function(){return i.length=0,Object.assign(i,arguments),Rt(r,n,i)}):jt(e);return"function"!=typeof o&&M("unknown function pointer with signature "+t+": "+e),o}var It=void 0;function Ut(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||tt[e]||(yt[e]?yt[e].forEach(t):(r.push(e),n[e]=!0))})),new It(t+": "+r.map(et).join([", "]))}function xt(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function Vt(t,e,r,n,i){var o=e.length;o<2&&M("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&M("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);return function(t){if(s)xt(d);else for(var n=a?1:2;n<e.length;n++){var i=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(i)}if(c)return e[0].fromWireType(t)}(n.apply(null,p))}}function zt(t,e){for(var r=[],n=0;n<t;n++)r.push(y[e+4*n>>2]);return r}function Bt(t){t>=z.reserved&&0==--z.get(t).refcount&&z.free(t)}function Ht(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Mt(t,e){switch(e){case 2:return function(t){return this.fromWireType(m[t>>2])};case 3:return function(t){return this.fromWireType(g[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function qt(t,e,r){switch(e){case 0:return r?function(t){return f[t]}:function(t){return p[t]};case 1:return r?function(t){return d[t>>1]}:function(t){return h[t>>1]};case 2:return r?function(t){return v[t>>2]}:function(t){return y[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Gt(t,e,r,n){if(!(n>0))return 0;for(var i=r,o=r+n-1,a=0;a<t.length;++a){var s=t.charCodeAt(a);if(s>=55296&&s<=57343&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++a)),s<=127){if(r>=o)break;e[r++]=s}else if(s<=2047){if(r+1>=o)break;e[r++]=192|s>>6,e[r++]=128|63&s}else if(s<=65535){if(r+2>=o)break;e[r++]=224|s>>12,e[r++]=128|s>>6&63,e[r++]=128|63&s}else{if(r+3>=o)break;e[r++]=240|s>>18,e[r++]=128|s>>12&63,e[r++]=128|s>>6&63,e[r++]=128|63&s}}return e[r]=0,r-i}function Lt(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}var Nt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Jt(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.buffer&&Nt)return Nt.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}var Zt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Kt(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&h[n];)++n;if((r=n<<1)-t>32&&Zt)return Zt.decode(p.subarray(t,r));for(var o="",a=0;!(a>=e/2);++a){var s=d[t+2*a>>1];if(0==s)break;o+=String.fromCharCode(s)}return o}function Qt(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);d[e>>1]=a,e+=2}return d[e>>1]=0,e-n}function Xt(t){return 2*t.length}function Yt(t,e){for(var r=0,n="";!(r>=e/4);){var i=v[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function te(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),v[e>>2]=a,(e+=4)+4>i)break}return v[e>>2]=0,e-n}function ee(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var re={},ne=[];function ie(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=rt(y[e+4*n>>2],"parameter "+n);return r}var oe=[];function ae(t){var e=t-c.buffer.byteLength+65535>>>16;try{return c.grow(e),w(),1}catch(t){}}H=i.BindingError=B(Error,"BindingError"),z.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),z.reserved=z.allocated.length,i.count_emval_handles=function(){for(var t=0,e=z.reserved;e<z.allocated.length;++e)void 0!==z.allocated[e]&&++t;return t},L=i.PureVirtualError=B(Error,"PureVirtualError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);N=t}(),i.getInheritedInstanceCount=function(){return Object.keys(X).length},i.getLiveInheritedInstances=function(){var t=[];for(var e in X)X.hasOwnProperty(e)&&t.push(X[e]);return t},i.flushPendingDeletes=K,i.setDelayFunction=function(t){Q=t,Z.length&&Q&&Q(K)},lt=i.InternalError=B(Error,"InternalError"),$t.prototype.isAliasOf=function(t){if(!(this instanceof $t))return!1;if(!(t instanceof $t))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i},$t.prototype.clone=function(){if(this.$$.ptr||bt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=dt(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},$t.prototype.delete=function(){this.$$.ptr||bt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&M("Object already scheduled for deletion"),nt(this),at(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},$t.prototype.isDeleted=function(){return!this.$$.ptr},$t.prototype.deleteLater=function(){return this.$$.ptr||bt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&M("Object already scheduled for deletion"),Z.push(this),1===Z.length&&Q&&Q(K),this.$$.deleteScheduled=!0,this},kt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},kt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},kt.prototype.argPackAdvance=8,kt.prototype.readValueFromPointer=St,kt.prototype.deleteObject=function(t){null!==t&&t.delete()},kt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=ct(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?pt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):pt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),s=ut[a];if(!s)return i.call(this);o=this.isConst?s.constPointerType:s.pointerType;var u=st(e,this.registeredClass,o.registeredClass);return null===u?i.call(this):this.isSmartPointer?pt(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:t}):pt(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})},It=i.UnboundTypeError=B(Error,"UnboundTypeError");var se={k:function(t,e,r){t=J(t),e=rt(e,"wrapper"),r=q(r);var n=[].slice,i=e.registeredClass,o=i.instancePrototype,a=i.baseClass.instancePrototype,s=i.baseClass.constructor,u=V(t,(function(){i.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new L("Pure virtual function "+t+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct.apply(this,n.call(arguments))}));for(var c in o.__construct=function(){this===o&&M("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));nt(t);var e,r=t.$$;t.notifyOnDestruction(),r.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:r}}),dt(this),e=Y(i,e=r.ptr),X.hasOwnProperty(e)?M("Tried to register registered instance: "+e):X[e]=this},o.__destruct=function(){var t;this===o&&M("Pass correct 'this' to __destruct"),nt(this),t=Y(i,t=this.$$.ptr),X.hasOwnProperty(t)?delete X[t]:M("Tried to unregister unregistered instance: "+t)},u.prototype=Object.create(o),r)u.prototype[c]=r[c];return G(u)},p:function(){},t:function(t,e,r,n,i){var o=ht(r);gt(t,{name:e=J(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=f;else if(2===r)n=d;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=v}return this.fromWireType(n[t>>o])},destructorFunction:null})},i:function(t,e,r,n,i,o,a,s,u,c,l,f,p){l=J(l),o=Dt(i,o),s&&(s=Dt(a,s)),c&&(c=Dt(u,c)),p=Dt(f,p);var d=x(l);Ct(d,(function(){Ut("Cannot construct "+l+" due to unbound types",[n])})),mt([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:$t.prototype;var a=V(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new H("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new H(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new H("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),u=Object.create(i,{constructor:{value:a}});a.prototype=u;var f=new Pt(l,a,u,p,r,o,s,c);f.baseClass&&(void 0===f.baseClass.__derivedClasses&&(f.baseClass.__derivedClasses=[]),f.baseClass.__derivedClasses.push(f));var h=new kt(l,f,!0,!1,!1),v=new kt(l+"*",f,!1,!1,!1),y=new kt(l+" const*",f,!1,!0,!1);return ut[t]={pointerType:v,constPointerType:y},Et(d,a),[h,v,y]}))},h:function(t,e,n,i,o,a,s){var u=zt(n,i);e=J(e),a=Dt(o,a),mt([],[t],(function(t){var i=(t=t[0]).name+"."+e;function o(){Ut("Cannot call "+i+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]);var c=t.registeredClass.constructor;return void 0===c[e]?(o.argCount=n-1,c[e]=o):(wt(c,e,i),c[e].overloadTable[n-1]=o),mt([],u,(function(o){var u=[o[0],null].concat(o.slice(1)),l=Vt(i,u,null,a,s);if(void 0===c[e].overloadTable?(l.argCount=n-1,c[e]=l):c[e].overloadTable[n-1]=l,t.registeredClass.__derivedClasses)for(var f,p=r(t.registeredClass.__derivedClasses);!(f=p()).done;){var d=f.value;d.constructor.hasOwnProperty(e)||(d.constructor[e]=l)}return[]})),[]}))},g:function(t,e,r,n,i,o,a,s){var u=zt(r,n);e=J(e),o=Dt(i,o),mt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function i(){Ut("Cannot call "+n+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(i.argCount=r-2,i.className=t.name,c[e]=i):(wt(c,e,n),c[e].overloadTable[r-2]=i),mt([],u,(function(i){var s=Vt(n,i,t,o,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},s:function(t,e){gt(t,{name:e=J(e),fromWireType:function(t){var e=q(t);return Bt(t),e},toWireType:function(t,e){return G(e)},argPackAdvance:8,readValueFromPointer:St,destructorFunction:null})},n:function(t,e,r){var n=ht(r);gt(t,{name:e=J(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:Mt(e,n),destructorFunction:null})},a:function(t,e,r,n,i,o){var a=zt(e,r);t=J(t),i=Dt(n,i),Ct(t,(function(){Ut("Cannot call "+t+" due to unbound types",a)}),e-1),mt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Et(t,Vt(t,n,null,i,o),e-1),[]}))},f:function(t,e,r,n){e=J(e);var i=ht(r),o=function(t){return t};if(0===n){var a=32-8*r;o=function(t){return t<<a>>>a}}var s=e.includes("unsigned");gt(t,{name:e,fromWireType:o,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:qt(e,i,0!==n),destructorFunction:null})},b:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=y,r=e[t>>=2],i=e[t+1];return new n(e.buffer,i,r)}gt(t,{name:r=J(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},m:function(t,e){var r="std::string"===(e=J(e));gt(t,{name:e,fromWireType:function(t){var e,n,i=y[t>>2],o=t+4;if(r)for(var a=o,s=0;s<=i;++s){var u=o+s;if(s==i||0==p[u]){var c=(n=a)?Jt(p,n,u-a):"";void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=u+1}}else{var l=new Array(i);for(s=0;s<i;++s)l[s]=String.fromCharCode(p[o+s]);e=l.join("")}return le(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||M("Cannot pass non-string to std::string"),n=r&&i?Lt(e):e.length;var o=ce(4+n+1),a=o+4;if(y[o>>2]=n,r&&i)Gt(e,p,a,n+1);else if(i)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(le(a),M("String has UTF-16 code units that do not fit in 8 bits")),p[a+s]=u}else for(s=0;s<n;++s)p[a+s]=e[s];return null!==t&&t.push(le,o),o},argPackAdvance:8,readValueFromPointer:St,destructorFunction:function(t){le(t)}})},l:function(t,e,r){var n,i,o,a,s;r=J(r),2===e?(n=Kt,i=Qt,a=Xt,o=function(){return h},s=1):4===e&&(n=Yt,i=te,a=ee,o=function(){return y},s=2),gt(t,{name:r,fromWireType:function(t){for(var r,i=y[t>>2],a=o(),u=t+4,c=0;c<=i;++c){var l=t+4+c*e;if(c==i||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return le(t),r},toWireType:function(t,n){"string"!=typeof n&&M("Cannot pass non-string to C++ string type "+r);var o=a(n),u=ce(4+o+e);return y[u>>2]=o>>s,i(n,u+4,o+e),null!==t&&t.push(le,u),u},argPackAdvance:8,readValueFromPointer:St,destructorFunction:function(t){le(t)}})},u:function(t,e){gt(t,{isVoid:!0,name:e=J(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},c:function(t,e,r,n){var i,o;(t=ne[t])(e=q(e),r=void 0===(o=re[i=r])?J(i):o,null,n)},e:Bt,d:function(t,e){var r=ie(t,e),n=r[0],i=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",o=oe[i];if(void 0!==o)return o;var a,s,u=new Array(t-1);return a=function(e,i,o,a){for(var s=0,c=0;c<t-1;++c)u[c]=r[c+1].readValueFromPointer(a+s),s+=r[c+1].argPackAdvance;var l=e[i].apply(e,u);for(c=0;c<t-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(o,l)},s=ne.length,ne.push(a),o=s,oe[i]=o,o},o:function(t){t>4&&(z.get(t).refcount+=1)},j:function(){F("")},r:function(t,e,r){p.copyWithin(t,e,e+r)},q:function(t){var e=p.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),ae(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}};!function(){var t,e,r,o,a={a:se};function s(t){var e,r=t.exports;return i.asm=r,c=i.asm.v,w(),b=i.asm.z,e=i.asm.w,P.unshift(e),W(),r}if(k++,i.monitorRunDependencies&&i.monitorRunDependencies(k),i.instantiateWasm)try{return i.instantiateWasm(a,s)}catch(t){l("Module.instantiateWasm callback failed with error: "+t),n(t)}(t=u,e=_,r=a,o=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||j(e)||"function"!=typeof fetch?I(e,r,o):fetch(e,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(o,(function(t){return l("wasm streaming compile failed: "+t),l("falling back to ArrayBuffer instantiation"),I(e,r,o)}))}))).catch(n)}();var ue,ce=function(){return(ce=i.asm.x).apply(null,arguments)},le=function(){return(le=i.asm.y).apply(null,arguments)},fe=function(){return(fe=i.asm.A).apply(null,arguments)};function pe(){function t(){ue||(ue=!0,i.calledRun=!0,$||(U(P),e(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),O()))}k>0||(A(),k>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm.B).apply(null,arguments)},E=function t(){ue||pe(),ue||(E=t)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return pe(),t.ready},i.exports=a;var u=s.exports,c=e(u);t("b",n({__proto__:null,default:c},[u]))}}}));
