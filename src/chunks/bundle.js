System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(e){return{execute:function(){e("default",new(function(){function e(){this._registry={},this._moduleCache={}}var r=e.prototype;return r.define=function(e,r,t){this._registry[e]={factory:r,resolveMap:t}},r.require=function(e){return this._require(e)},r.throwInvalidWrapper=function(e,r){throw new Error("Module '"+e+"' imported from '"+r+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},r._require=function(e,r){var t=this._moduleCache[e];if(t)return t.exports;var o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports},r._resolve=function(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)},r._resolveFromInfos=function(e,r){var t,o;return e in cjsInfos?e:r&&null!=(t=null==(o=cjsInfos[r])?void 0:o.resolveCache[e])?t:void 0},r._tryModuleLoad=function(e,r){var t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}},r._load=function(e,r){var t=this._loadWrapper(r),o=t.factory,n=t.resolveMap,i=this._createRequire(e),u=n?this._createRequireWithResolveMap("function"==typeof n?n():n,i):i;o(e.exports,u,e)},r._loadWrapper=function(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)},r._loadHostProvidedModules=function(e){return{factory:function(r,t,o){if("undefined"==typeof require)throw new Error("Current environment does not provide a require() for requiring '"+e+"'.");try{o.exports=require(e)}catch(r){throw new Error("Exception thrown when calling host defined require('"+e+"').",{cause:r})}}}},r._createRequire=function(e){var r=this;return function(t){return r._require(t,e)}},r._createRequireWithResolveMap=function(e,r){return function(t){var o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}},r._throwUnresolved=function(e,r){throw new Error("Unable to resolve "+e+" from "+parent+".")},e}()))}}}));

System.register("chunks:///_virtual/platform.js",["./cjs-loader.mjs"],(function(e,t){var i;return{setters:[function(e){i=e.default}],execute:function(){e("default",void 0);var r=e("__cjsMetaURL",t.meta.url);i.define(r,(function(t,i,r,n,a){(function(){var e={function:!0,object:!0},i=e[typeof window]&&window||this,n=e[typeof t]&&t,a=e[typeof r]&&r&&!r.nodeType&&r,o=n&&a&&"object"==typeof global&&global;!o||o.global!==o&&o.window!==o&&o.self!==o||(i=o);var l=Math.pow(2,53)-1,s=/\bOpera/,b=Object.prototype,p=b.hasOwnProperty,c=b.toString;function u(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function d(e){return e=m(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:u(e)}function f(e,t){for(var i in e)p.call(e,i)&&t(e[i],i,e)}function S(e){return null==e?u(e):c.call(e).slice(8,-1)}function x(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function h(e,t){var i=null;return function(e,t){var i=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&r<=l)for(;++i<r;)t(e[i],i,e);else f(e,t)}(e,(function(r,n){i=t(i,r,n,e)})),i}function m(e){return String(e).replace(/^ +| +$/g,"")}var g=function e(t){var r=i,n=t&&"object"==typeof t&&"String"!=S(t);n&&(r=t,t=null);var a=r.navigator||{},o=a.userAgent||"";t||(t=o);var l,b,p,u,g,O=n?!!a.likeChrome:/\bChrome\b/.test(t)&&!/internal|\n/i.test(c.toString()),y="Object",M=n?y:"ScriptBridgingProxyObject",v=n?y:"Environment",E=n&&r.java?"JavaPackage":S(r.java),w=n?y:"RuntimeObject",P=/\bJava/.test(E)&&r.java,C=P&&S(r.environment)==v,B=P?"a":"α",W=P?"b":"β",k=r.document||{},R=r.operamini||r.opera,A=s.test(A=n&&R?R["[[Class]]"]:S(R))?A:R=null,I=t,F=[],T=null,G=t==o,$=G&&R&&"function"==typeof R.version&&R.version(),j=h([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],(function(e,i){return e||RegExp("\\b"+(i.pattern||x(i))+"\\b","i").exec(t)&&(i.label||i)})),X=function(e){return h(e,(function(e,i){return e||RegExp("\\b"+(i.pattern||x(i))+"\\b","i").exec(t)&&(i.label||i)}))}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),K=L([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),N=function(e){return h(e,(function(e,i,r){return e||(i[K]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)]||RegExp("\\b"+x(r)+"(?:\\b|\\w*\\d)","i").exec(t))&&r}))}({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),_=function(e){return h(e,(function(e,i){var r=i.pattern||x(i);return!e&&(e=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(t))&&(e=function(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),d(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,r,i.label||i)),e}))}(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function L(e){return h(e,(function(e,i){var r=i.pattern||x(i);return!e&&(e=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(t)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(t)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(t))&&((e=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),i=i.label||i,e=d(e[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),e}))}function V(e){return h(e,(function(e,i){return e||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(t)||0)[1]||null}))}if(j&&(j=[j]),/\bAndroid\b/.test(_)&&!K&&(l=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t))&&(K=m(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),N&&!K?K=L([N]):N&&K&&(K=K.replace(RegExp("^("+x(N)+")[-_.\\s]","i"),N+" ").replace(RegExp("^("+x(N)+")[-_.]?(\\w)","i"),N+" $2")),(l=/\bGoogle TV\b/.exec(K))&&(K=l[0]),/\bSimulator\b/i.test(t)&&(K=(K?K+" ":"")+"Simulator"),"Opera Mini"==X&&/\bOPiOS\b/.test(t)&&F.push("running in Turbo/Uncompressed mode"),"IE"==X&&/\blike iPhone OS\b/.test(t)?(N=(l=e(t.replace(/like iPhone OS/,""))).manufacturer,K=l.product):/^iP/.test(K)?(X||(X="Safari"),_="iOS"+((l=/ OS ([\d_]+)/i.exec(t))?" "+l[1].replace(/_/g,"."):"")):"Konqueror"==X&&/^Linux\b/i.test(_)?_="Kubuntu":N&&"Google"!=N&&(/Chrome/.test(X)&&!/\bMobile Safari\b/i.test(t)||/\bVita\b/.test(K))||/\bAndroid\b/.test(_)&&/^Chrome/.test(X)&&/\bVersion\//i.test(t)?(X="Android Browser",_=/\bAndroid\b/.test(_)?_:"Android"):"Silk"==X?(/\bMobi/i.test(t)||(_="Android",F.unshift("desktop mode")),/Accelerated *= *true/i.test(t)&&F.unshift("accelerated")):"UC Browser"==X&&/\bUCWEB\b/.test(t)?F.push("speed mode"):"PaleMoon"==X&&(l=/\bFirefox\/([\d.]+)\b/.exec(t))?F.push("identifying as Firefox "+l[1]):"Firefox"==X&&(l=/\b(Mobile|Tablet|TV)\b/i.exec(t))?(_||(_="Firefox OS"),K||(K=l[1])):!X||(l=!/\bMinefield\b/i.test(t)&&/\b(?:Firefox|Safari)\b/.exec(X))?(X&&!K&&/[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l+"/")+8))&&(X=null),(l=K||N||_)&&(K||N||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(_))&&(X=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(_)?_:l)+" Browser")):"Electron"==X&&(l=(/\bChrome\/([\d.]+)\b/.exec(t)||0)[1])&&F.push("Chromium "+l),$||($=V(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",x(X),"(?:Firefox|Minefield|NetFront)"])),(l=("iCab"==j&&parseFloat($)>3?"WebKit":/\bOpera\b/.test(X)&&(/\bOPR\b/.test(t)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(t)&&!/^(?:Trident|EdgeHTML)$/.test(j)&&"WebKit"||!j&&/\bMSIE\b/i.test(t)&&("Mac OS"==_?"Tasman":"Trident")||"WebKit"==j&&/\bPlayStation\b(?! Vita\b)/i.test(X)&&"NetFront")&&(j=[l]),"IE"==X&&(l=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t)||0)[1])?(X+=" Mobile",_="Windows Phone "+(/\+$/.test(l)?l:l+".x"),F.unshift("desktop mode")):/\bWPDesktop\b/i.test(t)?(X="IE Mobile",_="Windows Phone 8.x",F.unshift("desktop mode"),$||($=(/\brv:([\d.]+)/.exec(t)||0)[1])):"IE"!=X&&"Trident"==j&&(l=/\brv:([\d.]+)/.exec(t))&&(X&&F.push("identifying as "+X+($?" "+$:"")),X="IE",$=l[1]),G){if(u="global",g=null!=(p=r)?typeof p[u]:"number",/^(?:boolean|number|string|undefined)$/.test(g)||"object"==g&&!p[u])S(l=r.runtime)==M?(X="Adobe AIR",_=l.flash.system.Capabilities.os):S(l=r.phantom)==w?(X="PhantomJS",$=(l=l.version||null)&&l.major+"."+l.minor+"."+l.patch):"number"==typeof k.documentMode&&(l=/\bTrident\/(\d+)/i.exec(t))?($=[$,k.documentMode],(l=+l[1]+4)!=$[1]&&(F.push("IE "+$[1]+" mode"),j&&(j[1]=""),$[1]=l),$="IE"==X?String($[1].toFixed(1)):$[0]):"number"==typeof k.documentMode&&/^(?:Chrome|Firefox)\b/.test(X)&&(F.push("masking as "+X+" "+$),X="IE",$="11.0",j=["Trident"],_="Windows");else if(P&&(I=(l=P.lang.System).getProperty("os.arch"),_=_||l.getProperty("os.name")+" "+l.getProperty("os.version")),C){try{$=r.require("ringo/engine").version.join("."),X="RingoJS"}catch(e){(l=r.system)&&l.global.system==r.system&&(X="Narwhal",_||(_=l[0].os||null))}X||(X="Rhino")}else"object"==typeof r.process&&!r.process.browser&&(l=r.process)&&("object"==typeof l.versions&&("string"==typeof l.versions.electron?(F.push("Node "+l.versions.node),X="Electron",$=l.versions.electron):"string"==typeof l.versions.nw&&(F.push("Chromium "+$,"Node "+l.versions.node),X="NW.js",$=l.versions.nw)),X||(X="Node.js",I=l.arch,_=l.platform,$=($=/[\d.]+/.exec(l.version))?$[0]:null));_=_&&d(_)}if($&&(l=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec($)||/(?:alpha|beta)(?: ?\d)?/i.exec(t+";"+(G&&a.appMinorVersion))||/\bMinefield\b/i.test(t)&&"a")&&(T=/b/i.test(l)?"beta":"alpha",$=$.replace(RegExp(l+"\\+?$"),"")+("beta"==T?W:B)+(/\d+\+?/.exec(l)||"")),"Fennec"==X||"Firefox"==X&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(_))X="Firefox Mobile";else if("Maxthon"==X&&$)$=$.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(K))"Xbox 360"==K&&(_=null),"Xbox 360"==K&&/\bIEMobile\b/.test(t)&&F.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(X)&&(!X||K||/Browser|Mobi/.test(X))||"Windows CE"!=_&&!/Mobi/i.test(t))if("IE"==X&&G)try{null===r.external&&F.unshift("platform preview")}catch(e){F.unshift("embedded")}else(/\bBlackBerry\b/.test(K)||/\bBB10\b/.test(t))&&(l=(RegExp(K.replace(/ +/g," *")+"/([.\\d]+)","i").exec(t)||0)[1]||$)?(_=((l=[l,/BB10/.test(t)])[1]?(K=null,N="BlackBerry"):"Device Software")+" "+l[0],$=null):this!=f&&"Wii"!=K&&(G&&R||/Opera/.test(X)&&/\b(?:MSIE|Firefox)\b/i.test(t)||"Firefox"==X&&/\bOS X (?:\d+\.){2,}/.test(_)||"IE"==X&&(_&&!/^Win/.test(_)&&$>5.5||/\bWindows XP\b/.test(_)&&$>8||8==$&&!/\bTrident\b/.test(t)))&&!s.test(l=e.call(f,t.replace(s,"")+";"))&&l.name&&(l="ing as "+l.name+((l=l.version)?" "+l:""),s.test(X)?(/\bIE\b/.test(l)&&"Mac OS"==_&&(_=null),l="identify"+l):(l="mask"+l,X=A?d(A.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(l)&&(_=null),G||($=null)),j=["Presto"],F.push(l));else X+=" Mobile";(l=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(t)||0)[1])&&(l=[parseFloat(l.replace(/\.(\d)$/,".0$1")),l],"Safari"==X&&"+"==l[1].slice(-1)?(X="WebKit Nightly",T="alpha",$=l[1].slice(0,-1)):$!=l[1]&&$!=(l[2]=(/\bSafari\/([\d.]+\+?)/i.exec(t)||0)[1])||($=null),l[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t)||0)[1],537.36==l[0]&&537.36==l[2]&&parseFloat(l[1])>=28&&"WebKit"==j&&(j=["Blink"]),G&&(O||l[1])?(j&&(j[1]="like Chrome"),l=l[1]||((l=l[0])<530?1:l<532?2:l<532.05?3:l<533?4:l<534.03?5:l<534.07?6:l<534.1?7:l<534.13?8:l<534.16?9:l<534.24?10:l<534.3?11:l<535.01?12:l<535.02?"13+":l<535.07?15:l<535.11?16:l<535.19?17:l<536.05?18:l<536.1?19:l<537.01?20:l<537.11?"21+":l<537.13?23:l<537.18?24:l<537.24?25:l<537.36?26:"Blink"!=j?"27":"28")):(j&&(j[1]="like Safari"),l=(l=l[0])<400?1:l<500?2:l<526?3:l<533?4:l<534?"4+":l<535?5:l<537?6:l<538?7:l<601?8:l<602?9:l<604?10:l<606?11:l<608?12:"12"),j&&(j[1]+=" "+(l+="number"==typeof l?".x":/[.+]/.test(l)?"":"+")),"Safari"==X&&(!$||parseInt($)>45)?$=l:"Chrome"==X&&/\bHeadlessChrome/i.test(t)&&F.unshift("headless")),"Opera"==X&&(l=/\bzbov|zvav$/.exec(_))?(X+=" ",F.unshift("desktop mode"),"zvav"==l?(X+="Mini",$=null):X+="Mobile",_=_.replace(RegExp(" *"+l+"$"),"")):"Safari"==X&&/\bChrome\b/.exec(j&&j[1])?(F.unshift("desktop mode"),X="Chrome Mobile",$=null,/\bOS X\b/.test(_)?(N="Apple",_="iOS 4.3+"):_=null):/\bSRWare Iron\b/.test(X)&&!$&&($=V("Chrome")),$&&0==$.indexOf(l=/[\d.]+$/.exec(_))&&t.indexOf("/"+l+"-")>-1&&(_=m(_.replace(l,""))),_&&-1!=_.indexOf(X)&&!RegExp(X+" OS").test(_)&&(_=_.replace(RegExp(" *"+x(X)+" *"),"")),j&&!/\b(?:Avant|Nook)\b/.test(X)&&(/Browser|Lunascape|Maxthon/.test(X)||"Safari"!=X&&/^iOS/.test(_)&&/\bSafari\b/.test(j[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(X)&&j[1])&&(l=j[j.length-1])&&F.push(l),F.length&&(F=["("+F.join("; ")+")"]),N&&K&&K.indexOf(N)<0&&F.push("on "+N),K&&F.push((/^on /.test(F[F.length-1])?"":"on ")+K),_&&(l=/ ([\d.+]+)$/.exec(_),b=l&&"/"==_.charAt(_.length-l[0].length-1),_={architecture:32,family:l&&!b?_.replace(l[0],""):_,version:l?l[1]:null,toString:function(){var e=this.version;return this.family+(e&&!b?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(l=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I))&&!/\bi686\b/i.test(I)?(_&&(_.architecture=64,_.family=_.family.replace(RegExp(" *"+l),"")),X&&(/\bWOW64\b/i.test(t)||G&&/\w(?:86|32)$/.test(a.cpuClass||a.platform)&&!/\bWin64; x64\b/i.test(t))&&F.unshift("32-bit")):_&&/^OS X/.test(_.family)&&"Chrome"==X&&parseFloat($)>=39&&(_.architecture=64),t||(t=null);var z={};return z.description=t,z.layout=j&&j[0],z.manufacturer=N,z.name=X,z.prerelease=T,z.product=K,z.ua=t,z.version=X&&$,z.os=_||{architecture:null,family:null,version:null,toString:function(){return"null"}},z.parse=e,z.toString=function(){return this.description||""},z.version&&F.unshift($),z.name&&F.unshift(X),_&&X&&(_!=String(_).split(" ")[0]||_!=X.split(" ")[0]&&!K)&&F.push(K?"("+_+")":"on "+_),F.length&&(z.description=F.join(" ")),z}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(i.platform=g,define((function(){return g}))):n&&a?f(g,(function(e,t){n[t]=e})):i.platform=g}).call(this),e("default",r.exports)}),{})}}}));

System.register("chunks:///_virtual/platform.mjs_cjs=&original=.js",["./platform.js","./cjs-loader.mjs"],(function(t,e){var r,a;return{setters:[function(e){r=e.__cjsMetaURL;var a={};a.__cjsMetaURL=e.__cjsMetaURL,a.default=e.default,t(a)},function(t){a=t.default}],execute:function(){r||a.throwInvalidWrapper("./platform.js",e.meta.url),a.require(r)}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function i(t,r){return(i=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,i){return e.__proto__=i,e}))(t,r)}e({applyDecoratedDescriptor:function(e,i,t,r,n){var o={};Object.keys(r).forEach((function(e){o[e]=r[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,r){return r(e,i,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,i,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},inheritsLoose:function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,i(e,t)},initializerDefineProperty:function(e,i,t,r){if(!t)return;Object.defineProperty(e,i,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})},setPrototypeOf:i})}}}));

} }; });