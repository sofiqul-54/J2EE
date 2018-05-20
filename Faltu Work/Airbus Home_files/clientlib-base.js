/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
;
!function(d,c){"object"==typeof module&&"object"==typeof module.exports?module.exports=d.document?c(d,!0):function(b){if(!b.document){throw new Error("jQuery requires a window with a document")
}return c(b)
}:c(d)
}("undefined"!=typeof window?window:this,function(bR,bQ){var bP=[],bO=bR.document,bN=Object.getPrototypeOf,bL=bP.slice,bJ=bP.concat,bI=bP.push,bH=bP.indexOf,bG={},bF=bG.toString,bE=bG.hasOwnProperty,bD=bE.toString,bC=bD.call(Object),bB={};
function bA(e,d){d=d||bO;
var f=d.createElement("script");
f.text=e,d.head.appendChild(f).parentNode.removeChild(f)
}var by="3.2.0",bx=function(d,c){return new bx.fn.init(d,c)
},bv=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bu=/^-ms-/,bt=/-([a-z])/g,bs=function(d,c){return c.toUpperCase()
};
bx.fn=bx.prototype={jquery:by,constructor:bx,length:0,toArray:function(){return bL.call(this)
},get:function(b){return null==b?bL.call(this):b<0?this[b+this.length]:this[b]
},pushStack:function(d){var c=bx.merge(this.constructor(),d);
return c.prevObject=this,c
},each:function(b){return bx.each(this,b)
},map:function(b){return this.pushStack(bx.map(this,function(d,e){return b.call(d,e,d)
}))
},slice:function(){return this.pushStack(bL.apply(this,arguments))
},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)
},eq:function(e){var d=this.length,f=+e+(e<0?d:0);
return this.pushStack(f>=0&&f<d?[this[f]]:[])
},end:function(){return this.prevObject||this.constructor()
},push:bI,sort:bP.sort,splice:bP.splice},bx.extend=bx.fn.extend=function(){var v,u,t,r,q,p,o=arguments[0]||{},m=1,l=arguments.length,k=!1;
for("boolean"==typeof o&&(k=o,o=arguments[m]||{},m++),"object"==typeof o||bx.isFunction(o)||(o={}),m===l&&(o=this,m--);
m<l;
m++){if(null!=(v=arguments[m])){for(u in v){t=o[u],r=v[u],o!==r&&(k&&r&&(bx.isPlainObject(r)||(q=Array.isArray(r)))?(q?(q=!1,p=t&&Array.isArray(t)?t:[]):p=t&&bx.isPlainObject(t)?t:{},o[u]=bx.extend(k,p,r)):void 0!==r&&(o[u]=r))
}}}return o
},bx.extend({expando:"jQuery"+(by+Math.random()).replace(/\D/g,""),isReady:!0,error:function(b){throw new Error(b)
},noop:function(){},isFunction:function(b){return"function"===bx.type(b)
},isWindow:function(b){return null!=b&&b===b.window
},isNumeric:function(d){var c=bx.type(d);
return("number"===c||"string"===c)&&!isNaN(d-parseFloat(d))
},isPlainObject:function(e){var d,f;
return !(!e||"[object Object]"!==bF.call(e))&&(!(d=bN(e))||(f=bE.call(d,"constructor")&&d.constructor,"function"==typeof f&&bD.call(f)===bC))
},isEmptyObject:function(d){var c;
for(c in d){return !1
}return !0
},type:function(b){return null==b?b+"":"object"==typeof b||"function"==typeof b?bG[bF.call(b)]||"object":typeof b
},globalEval:function(b){bA(b)
},camelCase:function(b){return b.replace(bu,"ms-").replace(bt,bs)
},each:function(f,e){var h,g=0;
if(br(f)){for(h=f.length;
g<h;
g++){if(e.call(f[g],g,f[g])===!1){break
}}}else{for(g in f){if(e.call(f[g],g,f[g])===!1){break
}}}return f
},trim:function(b){return null==b?"":(b+"").replace(bv,"")
},makeArray:function(e,d){var f=d||[];
return null!=e&&(br(Object(e))?bx.merge(f,"string"==typeof e?[e]:e):bI.call(f,e)),f
},inArray:function(e,d,f){return null==d?-1:bH.call(d,e,f)
},merge:function(g,f){for(var j=+f.length,i=0,h=g.length;
i<j;
i++){g[h++]=f[i]
}return g.length=h,g
},grep:function(j,i,q){for(var p,o=[],m=0,l=j.length,k=!q;
m<l;
m++){p=!i(j[m],m),p!==k&&o.push(j[m])
}return o
},map:function(i,g,o){var m,l,k=0,j=[];
if(br(i)){for(m=i.length;
k<m;
k++){l=g(i[k],k,o),null!=l&&j.push(l)
}}else{for(k in i){l=g(i[k],k,o),null!=l&&j.push(l)
}}return bJ.apply([],j)
},guid:1,proxy:function(g,f){var j,i,h;
if("string"==typeof f&&(j=g[f],f=g,g=j),bx.isFunction(g)){return i=bL.call(arguments,2),h=function(){return g.apply(f||this,i.concat(bL.call(arguments)))
},h.guid=g.guid=g.guid||bx.guid++,h
}},now:Date.now,support:bB}),"function"==typeof Symbol&&(bx.fn[Symbol.iterator]=bP[Symbol.iterator]),bx.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(d,c){bG["[object "+c+"]"]=c.toLowerCase()
});
function br(e){var d=!!e&&"length" in e&&e.length,f=bx.type(e);
return"function"!==f&&!bx.isWindow(e)&&("array"===f||0===d||"number"==typeof d&&d>0&&d-1 in e)
}var bq=function(dp){var dn,dm,dk,dj,di,dh,dg,de,dd,dc,db,c9,c7,c6,c5,c4,c3,c2,c1,c0="sizzle"+1*new Date,cZ=dp.document,cY=0,cX=0,cW=dK(),cV=dK(),dU=dK(),dT=function(d,c){return d===c&&(db=!0),0
},dS={}.hasOwnProperty,dR=[],dP=dR.pop,dO=dR.push,dN=dR.push,dM=dR.slice,dL=function(f,e){for(var h=0,g=f.length;
h<g;
h++){if(f[h]===e){return h
}}return -1
},dJ="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",dI="[\\x20\\t\\r\\n\\f]",dH="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",dG="\\["+dI+"*("+dH+")(?:"+dI+"*([*^$|!~]?=)"+dI+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+dH+"))|)"+dI+"*\\]",dF=":("+dH+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+dG+")*)|.*)\\)|)",dE=new RegExp(dI+"+","g"),dC=new RegExp("^"+dI+"+|((?:^|[^\\\\])(?:\\\\.)*)"+dI+"+$","g"),dB=new RegExp("^"+dI+"*,"+dI+"*"),dA=new RegExp("^"+dI+"*([>+~]|"+dI+")"+dI+"*"),dz=new RegExp("="+dI+"*([^\\]'\"]*?)"+dI+"*\\]","g"),dy=new RegExp(dF),dx=new RegExp("^"+dH+"$"),dw={ID:new RegExp("^#("+dH+")"),CLASS:new RegExp("^\\.("+dH+")"),TAG:new RegExp("^("+dH+"|[*])"),ATTR:new RegExp("^"+dG),PSEUDO:new RegExp("^"+dF),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+dI+"*(even|odd|(([+-]|)(\\d*)n|)"+dI+"*(?:([+-]|)"+dI+"*(\\d+)|))"+dI+"*\\)|)","i"),bool:new RegExp("^(?:"+dJ+")$","i"),needsContext:new RegExp("^"+dI+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+dI+"*((?:-\\d)?\\d*)"+dI+"*\\)|)(?=[^-]|$)","i")},dv=/^(?:input|select|textarea|button)$/i,du=/^h\d$/i,dt=/^[^{]+\{\s*\[native \w/,ds=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,d0=/[+~]/,dr=new RegExp("\\\\([\\da-f]{1,6}"+dI+"?|("+dI+")|.)","ig"),dX=function(f,e,h){var g="0x"+e-65536;
return g!==g||h?e:g<0?String.fromCharCode(g+65536):String.fromCharCode(g>>10|55296,1023&g|56320)
},dD=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,c8=function(d,c){return c?"\0"===d?"\ufffd":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d
},cR=function(){c9()
},bb=dV(function(b){return b.disabled===!0&&("form" in b||"label" in b)
},{dir:"parentNode",next:"legend"});
try{dN.apply(dR=dM.call(cZ.childNodes),cZ.childNodes),dR[cZ.childNodes.length].nodeType
}catch(d3){dN={apply:dR.length?function(d,c){dO.apply(d,dM.call(c))
}:function(f,e){var h=f.length,g=0;
while(f[h++]=e[g++]){}f.length=h-1
}}
}function dY(A,y,v,u){var t,q,p,m,i,g,c,C=y&&y.ownerDocument,B=y?y.nodeType:9;
if(v=v||[],"string"!=typeof A||!A||1!==B&&9!==B&&11!==B){return v
}if(!u&&((y?y.ownerDocument||y:cZ)!==c7&&c9(y),y=y||c7,c5)){if(11!==B&&(i=ds.exec(A))){if(t=i[1]){if(9===B){if(!(p=y.getElementById(t))){return v
}if(p.id===t){return v.push(p),v
}}else{if(C&&(p=C.getElementById(t))&&c1(y,p)&&p.id===t){return v.push(p),v
}}}else{if(i[2]){return dN.apply(v,y.getElementsByTagName(A)),v
}if((t=i[3])&&dm.getElementsByClassName&&y.getElementsByClassName){return dN.apply(v,y.getElementsByClassName(t)),v
}}}if(dm.qsa&&!dU[A+" "]&&(!c4||!c4.test(A))){if(1!==B){C=y,c=A
}else{if("object"!==y.nodeName.toLowerCase()){(m=y.getAttribute("id"))?m=m.replace(dD,c8):y.setAttribute("id",m=c0),g=dh(A),q=g.length;
while(q--){g[q]="#"+m+" "+d1(g[q])
}c=g.join(","),C=d0.test(A)&&cP(y.parentNode)||y
}}if(c){try{return dN.apply(v,C.querySelectorAll(c)),v
}catch(z){}finally{m===c0&&y.removeAttribute("id")
}}}}return de(A.replace(dC,"$1"),y,v,u)
}function dK(){var d=[];
function c(f,b){return d.push(f+" ")>dk.cacheLength&&delete c[d.shift()],c[f+" "]=b
}return c
}function df(b){return b[c0]=!0,b
}function cS(e){var d=c7.createElement("fieldset");
try{return !!e(d)
}catch(f){return !1
}finally{d.parentNode&&d.parentNode.removeChild(d),d=null
}}function cb(f,d){var h=f.split("|"),g=h.length;
while(g--){dk.attrHandle[h[g]]=d
}}function d4(f,e){var h=e&&f,g=h&&1===f.nodeType&&1===e.nodeType&&f.sourceIndex-e.sourceIndex;
if(g){return g
}if(h){while(h=h.nextSibling){if(h===e){return -1
}}}return f?1:-1
}function dZ(b){return function(d){var e=d.nodeName.toLowerCase();
return"input"===e&&d.type===b
}
}function dQ(b){return function(d){var e=d.nodeName.toLowerCase();
return("input"===e||"button"===e)&&d.type===b
}
}function dl(b){return function(c){return"form" in c?c.parentNode&&c.disabled===!1?"label" in c?"label" in c.parentNode?c.parentNode.disabled===b:c.disabled===b:c.isDisabled===b||c.isDisabled!==!b&&bb(c)===b:c.disabled===b:"label" in c&&c.disabled===b
}
}function cT(b){return df(function(c){return c=+c,df(function(l,k){var j,i=b([],l.length,c),h=i.length;
while(h--){l[j=i[h]]&&(l[j]=!(k[j]=l[j]))
}})
})
}function cP(b){return b&&"undefined"!=typeof b.getElementsByTagName&&b
}dm=dY.support={},di=dY.isXML=function(d){var c=d&&(d.ownerDocument||d).documentElement;
return !!c&&"HTML"!==c.nodeName
},c9=dY.setDocument=function(d){var c,h,f=d?d.ownerDocument||d:cZ;
return f!==c7&&9===f.nodeType&&f.documentElement?(c7=f,c6=c7.documentElement,c5=!di(c7),cZ!==c7&&(h=c7.defaultView)&&h.top!==h&&(h.addEventListener?h.addEventListener("unload",cR,!1):h.attachEvent&&h.attachEvent("onunload",cR)),dm.attributes=cS(function(b){return b.className="i",!b.getAttribute("className")
}),dm.getElementsByTagName=cS(function(b){return b.appendChild(c7.createComment("")),!b.getElementsByTagName("*").length
}),dm.getElementsByClassName=dt.test(c7.getElementsByClassName),dm.getById=cS(function(b){return c6.appendChild(b).id=c0,!c7.getElementsByName||!c7.getElementsByName(c0).length
}),dm.getById?(dk.filter.ID=function(g){var e=g.replace(dr,dX);
return function(b){return b.getAttribute("id")===e
}
},dk.find.ID=function(g,e){if("undefined"!=typeof e.getElementById&&c5){var i=e.getElementById(g);
return i?[i]:[]
}}):(dk.filter.ID=function(g){var e=g.replace(dr,dX);
return function(b){var i="undefined"!=typeof b.getAttributeNode&&b.getAttributeNode("id");
return i&&i.value===e
}
},dk.find.ID=function(i,g){if("undefined"!=typeof g.getElementById&&c5){var m,l,k,j=g.getElementById(i);
if(j){if(m=j.getAttributeNode("id"),m&&m.value===i){return[j]
}k=g.getElementsByName(i),l=0;
while(j=k[l++]){if(m=j.getAttributeNode("id"),m&&m.value===i){return[j]
}}}return[]
}}),dk.find.TAG=dm.getElementsByTagName?function(g,e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(g):dm.qsa?e.querySelectorAll(g):void 0
}:function(i,g){var m,l=[],k=0,j=g.getElementsByTagName(i);
if("*"===i){while(m=j[k++]){1===m.nodeType&&l.push(m)
}return l
}return j
},dk.find.CLASS=dm.getElementsByClassName&&function(g,e){if("undefined"!=typeof e.getElementsByClassName&&c5){return e.getElementsByClassName(g)
}},c3=[],c4=[],(dm.qsa=dt.test(c7.querySelectorAll))&&(cS(function(b){c6.appendChild(b).innerHTML="<a id='"+c0+"'></a><select id='"+c0+"-\r\\' msallowcapture=''><option selected=''></option></select>",b.querySelectorAll("[msallowcapture^='']").length&&c4.push("[*^$]="+dI+"*(?:''|\"\")"),b.querySelectorAll("[selected]").length||c4.push("\\["+dI+"*(?:value|"+dJ+")"),b.querySelectorAll("[id~="+c0+"-]").length||c4.push("~="),b.querySelectorAll(":checked").length||c4.push(":checked"),b.querySelectorAll("a#"+c0+"+*").length||c4.push(".#.+[+~]")
}),cS(function(g){g.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
var e=c7.createElement("input");
e.setAttribute("type","hidden"),g.appendChild(e).setAttribute("name","D"),g.querySelectorAll("[name=d]").length&&c4.push("name"+dI+"*[*^$|!~]?="),2!==g.querySelectorAll(":enabled").length&&c4.push(":enabled",":disabled"),c6.appendChild(g).disabled=!0,2!==g.querySelectorAll(":disabled").length&&c4.push(":enabled",":disabled"),g.querySelectorAll("*,:x"),c4.push(",.*:")
})),(dm.matchesSelector=dt.test(c2=c6.matches||c6.webkitMatchesSelector||c6.mozMatchesSelector||c6.oMatchesSelector||c6.msMatchesSelector))&&cS(function(b){dm.disconnectedMatch=c2.call(b,"*"),c2.call(b,"[s!='']:x"),c3.push("!=",dF)
}),c4=c4.length&&new RegExp(c4.join("|")),c3=c3.length&&new RegExp(c3.join("|")),c=dt.test(c6.compareDocumentPosition),c1=c||dt.test(c6.contains)?function(g,e){var j=9===g.nodeType?g.documentElement:g,i=e&&e.parentNode;
return g===i||!(!i||1!==i.nodeType||!(j.contains?j.contains(i):g.compareDocumentPosition&&16&g.compareDocumentPosition(i)))
}:function(g,e){if(e){while(e=e.parentNode){if(e===g){return !0
}}}return !1
},dT=c?function(g,e){if(g===e){return db=!0,0
}var i=!g.compareDocumentPosition-!e.compareDocumentPosition;
return i?i:(i=(g.ownerDocument||g)===(e.ownerDocument||e)?g.compareDocumentPosition(e):1,1&i||!dm.sortDetached&&e.compareDocumentPosition(g)===i?g===c7||g.ownerDocument===cZ&&c1(cZ,g)?-1:e===c7||e.ownerDocument===cZ&&c1(cZ,e)?1:dc?dL(dc,g)-dL(dc,e):0:4&i?-1:1)
}:function(j,i){if(j===i){return db=!0,0
}var q,p=0,o=j.parentNode,m=i.parentNode,l=[j],k=[i];
if(!o||!m){return j===c7?-1:i===c7?1:o?-1:m?1:dc?dL(dc,j)-dL(dc,i):0
}if(o===m){return d4(j,i)
}q=j;
while(q=q.parentNode){l.unshift(q)
}q=i;
while(q=q.parentNode){k.unshift(q)
}while(l[p]===k[p]){p++
}return p?d4(l[p],k[p]):l[p]===cZ?-1:k[p]===cZ?1:0
},c7):c7
},dY.matches=function(d,c){return dY(d,null,null,c)
},dY.matchesSelector=function(f,c){if((f.ownerDocument||f)!==c7&&c9(f),c=c.replace(dz,"='$1']"),dm.matchesSelector&&c5&&!dU[c+" "]&&(!c3||!c3.test(c))&&(!c4||!c4.test(c))){try{var h=c2.call(f,c);
if(h||dm.disconnectedMatch||f.document&&11!==f.document.nodeType){return h
}}catch(g){}}return dY(c,c7,null,[f]).length>0
},dY.contains=function(d,c){return(d.ownerDocument||d)!==c7&&c9(d),c1(d,c)
},dY.attr=function(d,c){(d.ownerDocument||d)!==c7&&c9(d);
var h=dk.attrHandle[c.toLowerCase()],g=h&&dS.call(dk.attrHandle,c.toLowerCase())?h(d,c,!c5):void 0;
return void 0!==g?g:dm.attributes||!c5?d.getAttribute(c):(g=d.getAttributeNode(c))&&g.specified?g.value:null
},dY.escape=function(b){return(b+"").replace(dD,c8)
},dY.error=function(b){throw new Error("Syntax error, unrecognized expression: "+b)
},dY.uniqueSort=function(g){var c,j=[],i=0,h=0;
if(db=!dm.detectDuplicates,dc=!dm.sortStable&&g.slice(0),g.sort(dT),db){while(c=g[h++]){c===g[h]&&(i=j.push(h))
}while(i--){g.splice(j[i],1)
}}return dc=null,g
},dj=dY.getText=function(g){var e,j="",i=0,h=g.nodeType;
if(h){if(1===h||9===h||11===h){if("string"==typeof g.textContent){return g.textContent
}for(g=g.firstChild;
g;
g=g.nextSibling){j+=dj(g)
}}else{if(3===h||4===h){return g.nodeValue
}}}else{while(e=g[i++]){j+=dj(e)
}}return j
},dk=dY.selectors={cacheLength:50,createPseudo:df,match:dw,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){return b[1]=b[1].replace(dr,dX),b[3]=(b[3]||b[4]||b[5]||"").replace(dr,dX),"~="===b[2]&&(b[3]=" "+b[3]+" "),b.slice(0,4)
},CHILD:function(b){return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||dY.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&dY.error(b[0]),b
},PSEUDO:function(e){var d,f=!e[6]&&e[2];
return dw.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":f&&dy.test(f)&&(d=dh(f,!0))&&(d=f.indexOf(")",f.length-d)-f.length)&&(e[0]=e[0].slice(0,d),e[2]=f.slice(0,d)),e.slice(0,3))
}},filter:{TAG:function(d){var c=d.replace(dr,dX).toLowerCase();
return"*"===d?function(){return !0
}:function(b){return b.nodeName&&b.nodeName.toLowerCase()===c
}
},CLASS:function(d){var c=cW[d+" "];
return c||(c=new RegExp("(^|"+dI+")"+d+"("+dI+"|$)"))&&cW(d,function(b){return c.test("string"==typeof b.className&&b.className||"undefined"!=typeof b.getAttribute&&b.getAttribute("class")||"")
})
},ATTR:function(e,d,f){return function(c){var b=dY.attr(c,e);
return null==b?"!="===d:!d||(b+="","="===d?b===f:"!="===d?b!==f:"^="===d?f&&0===b.indexOf(f):"*="===d?f&&b.indexOf(f)>-1:"$="===d?f&&b.slice(-f.length)===f:"~="===d?(" "+b.replace(dE," ")+" ").indexOf(f)>-1:"|="===d&&(b===f||b.slice(0,f.length+1)===f+"-"))
}
},CHILD:function(j,i,q,p,o){var m="nth"!==j.slice(0,3),l="last"!==j.slice(-4),k="of-type"===i;
return 1===p&&0===o?function(b){return !!b.parentNode
}:function(A,z,y){var x,w,v,u,h,g,f=m!==l?"nextSibling":"previousSibling",e=A.parentNode,d=k&&A.nodeName.toLowerCase(),C=!y&&!k,B=!1;
if(e){if(m){while(f){u=A;
while(u=u[f]){if(k?u.nodeName.toLowerCase()===d:1===u.nodeType){return !1
}}g=f="only"===j&&!g&&"nextSibling"
}return !0
}if(g=[l?e.firstChild:e.lastChild],l&&C){u=e,v=u[c0]||(u[c0]={}),w=v[u.uniqueID]||(v[u.uniqueID]={}),x=w[j]||[],h=x[0]===cY&&x[1],B=h&&x[2],u=h&&e.childNodes[h];
while(u=++h&&u&&u[f]||(B=h=0)||g.pop()){if(1===u.nodeType&&++B&&u===A){w[j]=[cY,h,B];
break
}}}else{if(C&&(u=A,v=u[c0]||(u[c0]={}),w=v[u.uniqueID]||(v[u.uniqueID]={}),x=w[j]||[],h=x[0]===cY&&x[1],B=h),B===!1){while(u=++h&&u&&u[f]||(B=h=0)||g.pop()){if((k?u.nodeName.toLowerCase()===d:1===u.nodeType)&&++B&&(C&&(v=u[c0]||(u[c0]={}),w=v[u.uniqueID]||(v[u.uniqueID]={}),w[j]=[cY,B]),u===A)){break
}}}}return B-=o,B===p||B%p===0&&B/p>=0
}}
},PSEUDO:function(f,d){var h,g=dk.pseudos[f]||dk.setFilters[f.toLowerCase()]||dY.error("unsupported pseudo: "+f);
return g[c0]?g(d):g.length>1?(h=[f,f,"",d],dk.setFilters.hasOwnProperty(f.toLowerCase())?df(function(b,k){var j,i=g(b,d),e=i.length;
while(e--){j=dL(b,i[e]),b[j]=!(k[j]=i[e])
}}):function(b){return g(b,0,h)
}):g
}},pseudos:{not:df(function(f){var e=[],h=[],g=dg(f.replace(dC,"$1"));
return g[c0]?df(function(i,d,o,m){var l,k=g(i,null,m,[]),j=i.length;
while(j--){(l=k[j])&&(i[j]=!(d[j]=l))
}}):function(b,d,c){return e[0]=b,g(e,null,c,h),e[0]=null,!h.pop()
}
}),has:df(function(b){return function(c){return dY(b,c).length>0
}
}),contains:df(function(b){return b=b.replace(dr,dX),function(c){return(c.textContent||c.innerText||dj(c)).indexOf(b)>-1
}
}),lang:df(function(b){return dx.test(b||"")||dY.error("unsupported lang: "+b),b=b.replace(dr,dX).toLowerCase(),function(d){var e;
do{if(e=c5?d.lang:d.getAttribute("xml:lang")||d.getAttribute("lang")){return e=e.toLowerCase(),e===b||0===e.indexOf(b+"-")
}}while((d=d.parentNode)&&1===d.nodeType);
return !1
}
}),target:function(d){var e=dp.location&&dp.location.hash;
return e&&e.slice(1)===d.id
},root:function(b){return b===c6
},focus:function(b){return b===c7.activeElement&&(!c7.hasFocus||c7.hasFocus())&&!!(b.type||b.href||~b.tabIndex)
},enabled:dl(!1),disabled:dl(!0),checked:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&!!d.checked||"option"===c&&!!d.selected
},selected:function(b){return b.parentNode&&b.parentNode.selectedIndex,b.selected===!0
},empty:function(b){for(b=b.firstChild;
b;
b=b.nextSibling){if(b.nodeType<6){return !1
}}return !0
},parent:function(b){return !dk.pseudos.empty(b)
},header:function(b){return du.test(b.nodeName)
},input:function(b){return dv.test(b.nodeName)
},button:function(d){var c=d.nodeName.toLowerCase();
return"input"===c&&"button"===d.type||"button"===c
},text:function(d){var c;
return"input"===d.nodeName.toLowerCase()&&"text"===d.type&&(null==(c=d.getAttribute("type"))||"text"===c.toLowerCase())
},first:cT(function(){return[0]
}),last:cT(function(d,c){return[c-1]
}),eq:cT(function(e,d,f){return[f<0?f+d:f]
}),even:cT(function(e,d){for(var f=0;
f<d;
f+=2){e.push(f)
}return e
}),odd:cT(function(e,d){for(var f=1;
f<d;
f+=2){e.push(f)
}return e
}),lt:cT(function(f,e,h){for(var g=h<0?h+e:h;
--g>=0;
){f.push(g)
}return f
}),gt:cT(function(f,e,h){for(var g=h<0?h+e:h;
++g<e;
){f.push(g)
}return f
})}},dk.pseudos.nth=dk.pseudos.eq;
for(dn in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){dk.pseudos[dn]=dZ(dn)
}for(dn in {submit:!0,reset:!0}){dk.pseudos[dn]=dQ(dn)
}function d5(){}d5.prototype=dk.filters=dk.pseudos,dk.setFilters=new d5,dh=dY.tokenize=function(v,u){var t,r,q,p,o,m,l,d=cV[v+" "];
if(d){return u?0:d.slice(0)
}o=v,m=[],l=dk.preFilter;
while(o){t&&!(r=dB.exec(o))||(r&&(o=o.slice(r[0].length)||o),m.push(q=[])),t=!1,(r=dA.exec(o))&&(t=r.shift(),q.push({value:t,type:r[0].replace(dC," ")}),o=o.slice(t.length));
for(p in dk.filter){!(r=dw[p].exec(o))||l[p]&&!(r=l[p](r))||(t=r.shift(),q.push({value:t,type:p,matches:r}),o=o.slice(t.length))
}if(!t){break
}}return u?o.length:o?dY.error(v):cV(v,m).slice(0)
};
function d1(f){for(var e=0,h=f.length,g="";
e<h;
e++){g+=f[e].value
}return g
}function dV(j,i,q){var p=i.dir,o=i.next,m=o||p,l=q&&"parentNode"===m,k=cX++;
return i.first?function(d,g,f){while(d=d[p]){if(1===d.nodeType||l){return j(d,g,f)
}}return !1
}:function(e,t,r){var h,g,f,d=[cY,k];
if(r){while(e=e[p]){if((1===e.nodeType||l)&&j(e,t,r)){return !0
}}}else{while(e=e[p]){if(1===e.nodeType||l){if(f=e[c0]||(e[c0]={}),g=f[e.uniqueID]||(f[e.uniqueID]={}),o&&o===e.nodeName.toLowerCase()){e=e[p]||e
}else{if((h=g[m])&&h[0]===cY&&h[1]===k){return d[2]=h[2]
}if(g[m]=d,d[2]=j(e,t,r)){return !0
}}}}}return !1
}
}function dq(b){return b.length>1?function(f,i,h){var g=b.length;
while(g--){if(!b[g](f,i,h)){return !1
}}return !0
}:b[0]
}function cU(g,f,j){for(var i=0,h=f.length;
i<h;
i++){dY(g,f[i],j)
}return j
}function cQ(v,u,t,r,q){for(var p,o=[],m=0,l=v.length,k=null!=u;
m<l;
m++){(p=v[m])&&(t&&!t(p,r,q)||(o.push(p),k&&u.push(m)))
}return o
}function ab(h,g,l,k,j,i){return k&&!k[c0]&&(k=ab(k)),j&&!j[c0]&&(j=ab(j,i)),df(function(B,A,z,y){var x,w,v,u=[],t=[],e=A.length,d=B||cU(g||"*",z.nodeType?[z]:z,[]),c=!h||!B&&g?d:cQ(d,u,h,z,y),b=l?j||(B?h:e||k)?[]:A:c;
if(l&&l(c,b,z,y),k){x=cQ(b,t),k(x,[],z,y),w=x.length;
while(w--){(v=x[w])&&(b[t[w]]=!(c[t[w]]=v))
}}if(B){if(j||h){if(j){x=[],w=b.length;
while(w--){(v=b[w])&&x.push(c[w]=v)
}j(null,b=[],x,y)
}w=b.length;
while(w--){(v=b[w])&&(x=j?dL(B,v):u[w])>-1&&(B[x]=!(A[x]=v))
}}}else{b=cQ(b===A?b.splice(e,b.length):b),j?j(null,A,b,y):dN.apply(A,b)
}})
}function d2(x){for(var w,v,u,t=x.length,r=dk.relative[x[0].type],q=r||dk.relative[" "],p=r?1:0,o=dV(function(b){return b===w
},q,!0),j=dV(function(b){return dL(w,b)>-1
},q,!0),d=[function(b,h,g){var f=!r&&(g||h!==dd)||((w=h).nodeType?o(b,h,g):j(b,h,g));
return w=null,f
}];
p<t;
p++){if(v=dk.relative[x[p].type]){d=[dV(dq(d),v)]
}else{if(v=dk.filter[x[p].type].apply(null,x[p].matches),v[c0]){for(u=++p;
u<t;
u++){if(dk.relative[x[u].type]){break
}}return ab(p>1&&dq(d),p>1&&d1(x.slice(0,p-1).concat({value:" "===x[p-2].type?"*":""})).replace(dC,"$1"),v,p<u&&d2(x.slice(p,u)),u<t&&d2(x=x.slice(u)),u<t&&d1(x))
}d.push(v)
}}return dq(d)
}function dW(g,d){var j=d.length>0,i=g.length>0,h=function(C,B,A,w,p){var m,e,c,b=0,J="0",I=C&&[],H=[],G=dd,F=C||i&&dk.find.TAG("*",p),E=cY+=null==G?1:Math.random()||0.1,D=F.length;
for(p&&(dd=B===c7||B||p);
J!==D&&null!=(m=F[J]);
J++){if(i&&m){e=0,B||m.ownerDocument===c7||(c9(m),A=!c5);
while(c=g[e++]){if(c(m,B||c7,A)){w.push(m);
break
}}p&&(cY=E)
}j&&((m=!c&&m)&&b--,C&&I.push(m))
}if(b+=J,j&&J!==b){e=0;
while(c=d[e++]){c(I,H,B,A)
}if(C){if(b>0){while(J--){I[J]||H[J]||(H[J]=dP.call(w))
}}H=cQ(H)
}dN.apply(w,H),p&&!C&&H.length>0&&b+d.length>1&&dY.uniqueSort(w)
}return p&&(cY=E,dd=G),I
};
return j?df(h):h
}return dg=dY.compile=function(h,g){var l,k=[],j=[],i=dU[h+" "];
if(!i){g||(g=dh(h)),l=g.length;
while(l--){i=d2(g[l]),i[c0]?k.push(i):j.push(i)
}i=dU(h,dW(j,k)),i.selector=h
}return i
},de=dY.select=function(w,v,u,t){var r,q,p,o,h,g="function"==typeof w&&w,d=!t&&dh(w=g.selector||w);
if(u=u||[],1===d.length){if(q=d[0]=d[0].slice(0),q.length>2&&"ID"===(p=q[0]).type&&9===v.nodeType&&c5&&dk.relative[q[1].type]){if(v=(dk.find.ID(p.matches[0].replace(dr,dX),v)||[])[0],!v){return u
}g&&(v=v.parentNode),w=w.slice(q.shift().value.length)
}r=dw.needsContext.test(w)?0:q.length;
while(r--){if(p=q[r],dk.relative[o=p.type]){break
}if((h=dk.find[o])&&(t=h(p.matches[0].replace(dr,dX),d0.test(q[0].type)&&cP(v.parentNode)||v))){if(q.splice(r,1),w=t.length&&d1(q),!w){return dN.apply(u,t),u
}break
}}}return(g||dg(w,d))(t,v,!c5,u,!v||d0.test(w)&&cP(v.parentNode)||v),u
},dm.sortStable=c0.split("").sort(dT).join("")===c0,dm.detectDuplicates=!!db,c9(),dm.sortDetached=cS(function(b){return 1&b.compareDocumentPosition(c7.createElement("fieldset"))
}),cS(function(b){return b.innerHTML="<a href='#'></a>","#"===b.firstChild.getAttribute("href")
})||cb("type|href|height|width",function(e,d,f){if(!f){return e.getAttribute(d,"type"===d.toLowerCase()?1:2)
}}),dm.attributes&&cS(function(b){return b.innerHTML="<input/>",b.firstChild.setAttribute("value",""),""===b.firstChild.getAttribute("value")
})||cb("value",function(e,d,f){if(!f&&"input"===e.nodeName.toLowerCase()){return e.defaultValue
}}),cS(function(b){return null==b.getAttribute("disabled")
})||cb(dJ,function(f,e,h){var g;
if(!h){return f[e]===!0?e.toLowerCase():(g=f.getAttributeNode(e))&&g.specified?g.value:null
}}),dY
}(bR);
bx.find=bq,bx.expr=bq.selectors,bx.expr[":"]=bx.expr.pseudos,bx.uniqueSort=bx.unique=bq.uniqueSort,bx.text=bq.getText,bx.isXMLDoc=bq.isXML,bx.contains=bq.contains,bx.escapeSelector=bq.escape;
var bp=function(g,f,j){var i=[],h=void 0!==j;
while((g=g[f])&&9!==g.nodeType){if(1===g.nodeType){if(h&&bx(g).is(j)){break
}i.push(g)
}}return i
},bn=function(e,d){for(var f=[];
e;
e=e.nextSibling){1===e.nodeType&&e!==d&&f.push(e)
}return f
},cs=bx.expr.match.needsContext;
function cr(d,c){return d.nodeName&&d.nodeName.toLowerCase()===c.toLowerCase()
}var cq=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,cp=/^.[^:#\[\.,]*$/;
function co(e,d,f){return bx.isFunction(d)?bx.grep(e,function(b,c){return !!d.call(b,c,b)!==f
}):d.nodeType?bx.grep(e,function(b){return b===d!==f
}):"string"!=typeof d?bx.grep(e,function(b){return bH.call(d,b)>-1!==f
}):cp.test(d)?bx.filter(d,e,f):(d=bx.filter(d,e),bx.grep(e,function(b){return bH.call(d,b)>-1!==f&&1===b.nodeType
}))
}bx.filter=function(f,e,h){var g=e[0];
return h&&(f=":not("+f+")"),1===e.length&&1===g.nodeType?bx.find.matchesSelector(g,f)?[g]:[]:bx.find.matches(f,bx.grep(e,function(b){return 1===b.nodeType
}))
},bx.fn.extend({find:function(g){var f,j,i=this.length,h=this;
if("string"!=typeof g){return this.pushStack(bx(g).filter(function(){for(f=0;
f<i;
f++){if(bx.contains(h[f],this)){return !0
}}}))
}for(j=this.pushStack([]),f=0;
f<i;
f++){bx.find(g,h[f],j)
}return i>1?bx.uniqueSort(j):j
},filter:function(b){return this.pushStack(co(this,b||[],!1))
},not:function(b){return this.pushStack(co(this,b||[],!0))
},is:function(b){return !!co(this,"string"==typeof b&&cs.test(b)?bx(b):b||[],!1).length
}});
var cn,cl=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,cj=bx.fn.init=function(g,d,j){var i,h;
if(!g){return this
}if(j=j||cn,"string"==typeof g){if(i="<"===g[0]&&">"===g[g.length-1]&&g.length>=3?[null,g,null]:cl.exec(g),!i||!i[1]&&d){return !d||d.jquery?(d||j).find(g):this.constructor(d).find(g)
}if(i[1]){if(d=d instanceof bx?d[0]:d,bx.merge(this,bx.parseHTML(i[1],d&&d.nodeType?d.ownerDocument||d:bO,!0)),cq.test(i[1])&&bx.isPlainObject(d)){for(i in d){bx.isFunction(this[i])?this[i](d[i]):this.attr(i,d[i])
}}return this
}return h=bO.getElementById(i[2]),h&&(this[0]=h,this.length=1),this
}return g.nodeType?(this[0]=g,this.length=1,this):bx.isFunction(g)?void 0!==j.ready?j.ready(g):g(bx):bx.makeArray(g,this)
};
cj.prototype=bx.fn,cn=bx(bO);
var ci=/^(?:parents|prev(?:Until|All))/,ch={children:!0,contents:!0,next:!0,prev:!0};
bx.fn.extend({has:function(e){var d=bx(e,this),f=d.length;
return this.filter(function(){for(var b=0;
b<f;
b++){if(bx.contains(this,d[b])){return !0
}}})
},closest:function(i,h){var o,m=0,l=this.length,k=[],j="string"!=typeof i&&bx(i);
if(!cs.test(i)){for(;
m<l;
m++){for(o=this[m];
o&&o!==h;
o=o.parentNode){if(o.nodeType<11&&(j?j.index(o)>-1:1===o.nodeType&&bx.find.matchesSelector(o,i))){k.push(o);
break
}}}}return this.pushStack(k.length>1?bx.uniqueSort(k):k)
},index:function(b){return b?"string"==typeof b?bH.call(bx(b),this[0]):bH.call(this,b.jquery?b[0]:b):this[0]&&this[0].parentNode?this.first().prevAll().length:-1
},add:function(d,c){return this.pushStack(bx.uniqueSort(bx.merge(this.get(),bx(d,c))))
},addBack:function(b){return this.add(null==b?this.prevObject:this.prevObject.filter(b))
}});
function cg(d,c){while((d=d[c])&&1!==d.nodeType){}return d
}bx.each({parent:function(d){var c=d.parentNode;
return c&&11!==c.nodeType?c:null
},parents:function(b){return bp(b,"parentNode")
},parentsUntil:function(e,d,f){return bp(e,"parentNode",f)
},next:function(b){return cg(b,"nextSibling")
},prev:function(b){return cg(b,"previousSibling")
},nextAll:function(b){return bp(b,"nextSibling")
},prevAll:function(b){return bp(b,"previousSibling")
},nextUntil:function(e,d,f){return bp(e,"nextSibling",f)
},prevUntil:function(e,d,f){return bp(e,"previousSibling",f)
},siblings:function(b){return bn((b.parentNode||{}).firstChild,b)
},children:function(b){return bn(b.firstChild)
},contents:function(b){return cr(b,"iframe")?b.contentDocument:(cr(b,"template")&&(b=b.content||b),bx.merge([],b.childNodes))
}},function(d,c){bx.fn[d]=function(g,f){var b=bx.map(this,c,g);
return"Until"!==d.slice(-5)&&(f=g),f&&"string"==typeof f&&(b=bx.filter(f,b)),this.length>1&&(ch[d]||bx.uniqueSort(b),ci.test(d)&&b.reverse()),this.pushStack(b)
}
});
var cf=/[^\x20\t\r\n\f]+/g;
function ce(d){var c={};
return bx.each(d.match(cf)||[],function(b,e){c[e]=!0
}),c
}bx.Callbacks=function(v){v="string"==typeof v?ce(v):bx.extend({},v);
var u,t,r,q,p=[],o=[],m=-1,l=function(){for(q=q||v.once,r=u=!0;
o.length;
m=-1){t=o.shift();
while(++m<p.length){p[m].apply(t[0],t[1])===!1&&v.stopOnFalse&&(m=p.length,t=!1)
}}v.memory||(t=!1),u=!1,q&&(p=t?[]:"")
},k={add:function(){return p&&(t&&!u&&(m=p.length-1,o.push(t)),function b(c){bx.each(c,function(d,e){bx.isFunction(e)?v.unique&&k.has(e)||p.push(e):e&&e.length&&"string"!==bx.type(e)&&b(e)
})
}(arguments),t&&!u&&l()),this
},remove:function(){return bx.each(arguments,function(e,d){var f;
while((f=bx.inArray(d,p,f))>-1){p.splice(f,1),f<=m&&m--
}}),this
},has:function(b){return b?bx.inArray(b,p)>-1:p.length>0
},empty:function(){return p&&(p=[]),this
},disable:function(){return q=o=[],p=t="",this
},disabled:function(){return !p
},lock:function(){return q=o=[],t||u||(p=t=""),this
},locked:function(){return !!q
},fireWith:function(b,d){return q||(d=d||[],d=[b,d.slice?d.slice():d],o.push(d),u||l()),this
},fire:function(){return k.fireWith(this,arguments),this
},fired:function(){return !!r
}};
return k
};
function cd(b){return b
}function cc(b){throw b
}function b9(g,f,j,i){var h;
try{g&&bx.isFunction(h=g.promise)?h.call(g).done(f).fail(j):g&&bx.isFunction(h=g.then)?h.call(g,f,j):f.apply(void 0,[g].slice(i))
}catch(g){j.apply(void 0,[g])
}}bx.extend({Deferred:function(g){var k=[["notify","progress",bx.Callbacks("memory"),bx.Callbacks("memory"),2],["resolve","done",bx.Callbacks("once memory"),bx.Callbacks("once memory"),0,"resolved"],["reject","fail",bx.Callbacks("once memory"),bx.Callbacks("once memory"),1,"rejected"]],j="pending",i={state:function(){return j
},always:function(){return h.done(arguments).fail(arguments),this
},"catch":function(b){return i.then(null,b)
},pipe:function(){var b=arguments;
return bx.Deferred(function(c){bx.each(k,function(m,l){var f=bx.isFunction(b[l[4]])&&b[l[4]];
h[l[1]](function(){var d=f&&f.apply(this,arguments);
d&&bx.isFunction(d.promise)?d.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[l[0]+"With"](this,f?[d]:arguments)
})
}),b=null
}).promise()
},then:function(c,p,o){var m=0;
function l(f,t,r,q){return function(){var u=this,e=arguments,d=function(){var v,w;
if(!(f<m)){if(v=r.apply(u,e),v===t.promise()){throw new TypeError("Thenable self-resolution")
}w=v&&("object"==typeof v||"function"==typeof v)&&v.then,bx.isFunction(w)?q?w.call(v,l(m,t,cd,q),l(m,t,cc,q)):(m++,w.call(v,l(m,t,cd,q),l(m,t,cc,q),l(m,t,cd,t.notifyWith))):(r!==cd&&(u=void 0,e=[v]),(q||t.resolveWith)(u,e))
}},b=q?d:function(){try{d()
}catch(v){bx.Deferred.exceptionHook&&bx.Deferred.exceptionHook(v,b.stackTrace),f+1>=m&&(r!==cc&&(u=void 0,e=[v]),t.rejectWith(u,e))
}};
f?b():(bx.Deferred.getStackHook&&(b.stackTrace=bx.Deferred.getStackHook()),bR.setTimeout(b))
}
}return bx.Deferred(function(b){k[0][3].add(l(0,b,bx.isFunction(o)?o:cd,b.notifyWith)),k[1][3].add(l(0,b,bx.isFunction(c)?c:cd)),k[2][3].add(l(0,b,bx.isFunction(p)?p:cc))
}).promise()
},promise:function(b){return null!=b?bx.extend(b,i):i
}},h={};
return bx.each(k,function(d,c){var f=c[2],e=c[5];
i[c[1]]=f.add,e&&f.add(function(){j=e
},k[3-d][2].disable,k[0][2].lock),f.add(c[3].fire),h[c[0]]=function(){return h[c[0]+"With"](this===h?void 0:this,arguments),this
},h[c[0]+"With"]=f.fireWith
}),i.promise(h),g&&g.call(h,h),h
},when:function(i){var f=arguments.length,o=f,m=Array(o),l=bL.call(arguments),k=bx.Deferred(),j=function(b){return function(d){m[b]=this,l[b]=arguments.length>1?bL.call(arguments):d,--f||k.resolveWith(m,l)
}
};
if(f<=1&&(b9(i,k.done(j(o)).resolve,k.reject,!f),"pending"===k.state()||bx.isFunction(l[o]&&l[o].then))){return k.then()
}while(o--){b9(l[o],j(o),k.reject)
}return k.promise()
}});
var b8=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
bx.Deferred.exceptionHook=function(d,e){bR.console&&bR.console.warn&&d&&b8.test(d.name)&&bR.console.warn("jQuery.Deferred exception: "+d.message,d.stack,e)
},bx.readyException=function(c){bR.setTimeout(function(){throw c
})
};
var b6=bx.Deferred();
bx.fn.ready=function(b){return b6.then(b)["catch"](function(c){bx.readyException(c)
}),this
},bx.extend({isReady:!1,readyWait:1,ready:function(b){(b===!0?--bx.readyWait:bx.isReady)||(bx.isReady=!0,b!==!0&&--bx.readyWait>0||b6.resolveWith(bO,[bx]))
}}),bx.ready.then=b6.then;
function b5(){bO.removeEventListener("DOMContentLoaded",b5),bR.removeEventListener("load",b5),bx.ready()
}"complete"===bO.readyState||"loading"!==bO.readyState&&!bO.documentElement.doScroll?bR.setTimeout(bx.ready):(bO.addEventListener("DOMContentLoaded",b5),bR.addEventListener("load",b5));
var b3=function(v,u,t,r,q,p,o){var m=0,l=v.length,k=null==t;
if("object"===bx.type(t)){q=!0;
for(m in t){b3(v,u,m,t[m],!0,p,o)
}}else{if(void 0!==r&&(q=!0,bx.isFunction(r)||(o=!0),k&&(o?(u.call(v,r),u=null):(k=u,u=function(e,d,f){return k.call(bx(e),f)
})),u)){for(;
m<l;
m++){u(v[m],t,o?r:r.call(v[m],m,u(v[m],t)))
}}}return q?v:k?u.call(v):l?u(v[0],t):p
},b2=function(b){return 1===b.nodeType||9===b.nodeType||!+b.nodeType
};
function b1(){this.expando=bx.expando+b1.uid++
}b1.uid=1,b1.prototype={cache:function(d){var c=d[this.expando];
return c||(c={},b2(d)&&(d.nodeType?d[this.expando]=c:Object.defineProperty(d,this.expando,{value:c,configurable:!0}))),c
},set:function(g,f,j){var i,h=this.cache(g);
if("string"==typeof f){h[bx.camelCase(f)]=j
}else{for(i in f){h[bx.camelCase(i)]=f[i]
}}return h
},get:function(d,c){return void 0===c?this.cache(d):d[this.expando]&&d[this.expando][bx.camelCase(c)]
},access:function(e,d,f){return void 0===d||d&&"string"==typeof d&&void 0===f?this.get(e,d):(this.set(e,d,f),void 0!==f?f:d)
},remove:function(f,e){var h,g=f[this.expando];
if(void 0!==g){if(void 0!==e){Array.isArray(e)?e=e.map(bx.camelCase):(e=bx.camelCase(e),e=e in g?[e]:e.match(cf)||[]),h=e.length;
while(h--){delete g[e[h]]
}}(void 0===e||bx.isEmptyObject(g))&&(f.nodeType?f[this.expando]=void 0:delete f[this.expando])
}},hasData:function(d){var c=d[this.expando];
return void 0!==c&&!bx.isEmptyObject(c)
}};
var b0=new b1,bZ=new b1,bY=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bX=/[A-Z]/g;
function cE(b){return"true"===b||"false"!==b&&("null"===b?null:b===+b+""?+b:bY.test(b)?JSON.parse(b):b)
}function bS(g,f,j){var i;
if(void 0===j&&1===g.nodeType){if(i="data-"+f.replace(bX,"-$&").toLowerCase(),j=g.getAttribute(i),"string"==typeof j){try{j=cE(j)
}catch(h){}bZ.set(g,f,j)
}else{j=void 0
}}return j
}bx.extend({hasData:function(b){return bZ.hasData(b)||b0.hasData(b)
},data:function(e,d,f){return bZ.access(e,d,f)
},removeData:function(d,c){bZ.remove(d,c)
},_data:function(e,d,f){return b0.access(e,d,f)
},_removeData:function(d,c){b0.remove(d,c)
}}),bx.fn.extend({data:function(i,h){var o,m,l,k=this[0],j=k&&k.attributes;
if(void 0===i){if(this.length&&(l=bZ.get(k),1===k.nodeType&&!b0.get(k,"hasDataAttrs"))){o=j.length;
while(o--){j[o]&&(m=j[o].name,0===m.indexOf("data-")&&(m=bx.camelCase(m.slice(5)),bS(k,m,l[m])))
}b0.set(k,"hasDataAttrs",!0)
}return l
}return"object"==typeof i?this.each(function(){bZ.set(this,i)
}):b3(this,function(d){var e;
if(k&&void 0===d){if(e=bZ.get(k,i),void 0!==e){return e
}if(e=bS(k,i),void 0!==e){return e
}}else{this.each(function(){bZ.set(this,i,d)
})
}},null,h,arguments.length>1,null,!0)
},removeData:function(b){return this.each(function(){bZ.remove(this,b)
})
}}),bx.extend({queue:function(f,e,h){var g;
if(f){return e=(e||"fx")+"queue",g=b0.get(f,e),h&&(!g||Array.isArray(h)?g=b0.access(f,e,bx.makeArray(h)):g.push(h)),g||[]
}},dequeue:function(i,h){h=h||"fx";
var o=bx.queue(i,h),m=o.length,l=o.shift(),k=bx._queueHooks(i,h),j=function(){bx.dequeue(i,h)
};
"inprogress"===l&&(l=o.shift(),m--),l&&("fx"===h&&o.unshift("inprogress"),delete k.stop,l.call(i,j,k)),!m&&k&&k.empty.fire()
},_queueHooks:function(e,d){var f=d+"queueHooks";
return b0.get(e,f)||b0.access(e,f,{empty:bx.Callbacks("once memory").add(function(){b0.remove(e,[d+"queue",f])
})})
}}),bx.fn.extend({queue:function(e,d){var f=2;
return"string"!=typeof e&&(d=e,e="fx",f--),arguments.length<f?bx.queue(this[0],e):void 0===d?this:this.each(function(){var b=bx.queue(this,e,d);
bx._queueHooks(this,e),"fx"===e&&"inprogress"!==b[0]&&bx.dequeue(this,e)
})
},dequeue:function(b){return this.each(function(){bx.dequeue(this,b)
})
},clearQueue:function(b){return this.queue(b||"fx",[])
},promise:function(j,i){var q,p=1,o=bx.Deferred(),m=this,l=this.length,k=function(){--p||o.resolveWith(m,[m])
};
"string"!=typeof j&&(i=j,j=void 0),j=j||"fx";
while(l--){q=b0.get(m[l],j+"queueHooks"),q&&q.empty&&(p++,q.empty.add(k))
}return k(),o.promise(i)
}});
var cD=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,cm=new RegExp("^(?:([+-])=|)("+cD+")([a-z%]*)$","i"),bM=["Top","Right","Bottom","Left"],bj=function(d,c){return d=c||d,"none"===d.style.display||""===d.style.display&&bx.contains(d.ownerDocument,d)&&"none"===bx.css(d,"display")
},bc=function(i,h,o,m){var l,k,j={};
for(k in h){j[k]=i.style[k],i.style[k]=h[k]
}l=o.apply(i,m||[]);
for(k in h){i.style[k]=j[k]
}return l
};
function a3(x,w,v,u){var t,r=1,q=20,p=u?function(){return u.cur()
}:function(){return bx.css(x,w,"")
},o=p(),m=v&&v[3]||(bx.cssNumber[w]?"":"px"),l=(bx.cssNumber[w]||"px"!==m&&+o)&&cm.exec(bx.css(x,w));
if(l&&l[3]!==m){m=m||l[3],v=v||[],l=+o||1;
do{r=r||".5",l/=r,bx.style(x,w,l+m)
}while(r!==(r=p()/o)&&1!==r&&--q)
}return v&&(l=+l||+o||0,t=v[1]?l+(v[1]+1)*v[2]:+v[2],u&&(u.unit=m,u.start=l,u.end=t)),t
}var aU={};
function aM(g){var f,j=g.ownerDocument,i=g.nodeName,h=aU[i];
return h?h:(f=j.body.appendChild(j.createElement(i)),h=bx.css(f,"display"),f.parentNode.removeChild(f),"none"===h&&(h="block"),aU[i]=h,h)
}function aE(i,h){for(var o,m,l=[],k=0,j=i.length;
k<j;
k++){m=i[k],m.style&&(o=m.style.display,h?("none"===o&&(l[k]=b0.get(m,"display")||null,l[k]||(m.style.display="")),""===m.style.display&&bj(m)&&(l[k]=aM(m))):"none"!==o&&(l[k]="none",b0.set(m,"display",o)))
}for(k=0;
k<j;
k++){null!=l[k]&&(i[k].style.display=l[k])
}return i
}bx.fn.extend({show:function(){return aE(this,!0)
},hide:function(){return aE(this)
},toggle:function(b){return"boolean"==typeof b?b?this.show():this.hide():this.each(function(){bj(this)?bx(this).show():bx(this).hide()
})
}});
var av=/^(?:checkbox|radio)$/i,am=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ad=/^$|\/(?:java|ecma)script/i,cI={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
cI.optgroup=cI.option,cI.tbody=cI.tfoot=cI.colgroup=cI.caption=cI.thead,cI.th=cI.td;
function cx(e,d){var f;
return f="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(d||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(d||"*"):[],void 0===d||d&&cr(e,d)?bx.merge([e],f):f
}function bW(f,e){for(var h=0,g=f.length;
h<g;
h++){b0.set(f[h],"globalEval",!e||b0.get(e[h],"globalEval"))
}}var bo=/<|&#?\w+;/;
function bg(E,D,C,B,A){for(var z,y,x,w,v,u,t=D.createDocumentFragment(),r=[],q=0,p=E.length;
q<p;
q++){if(z=E[q],z||0===z){if("object"===bx.type(z)){bx.merge(r,z.nodeType?[z]:z)
}else{if(bo.test(z)){y=y||t.appendChild(D.createElement("div")),x=(am.exec(z)||["",""])[1].toLowerCase(),w=cI[x]||cI._default,y.innerHTML=w[1]+bx.htmlPrefilter(z)+w[2],u=w[0];
while(u--){y=y.lastChild
}bx.merge(r,y.childNodes),y=t.firstChild,y.textContent=""
}else{r.push(D.createTextNode(z))
}}}}t.textContent="",q=0;
while(z=r[q++]){if(B&&bx.inArray(z,B)>-1){A&&A.push(z)
}else{if(v=bx.contains(z.ownerDocument,z),y=cx(t.appendChild(z),"script"),v&&bW(y),C){u=0;
while(z=y[u++]){ad.test(z.type||"")&&C.push(z)
}}}}return t
}!function(){var e=bO.createDocumentFragment(),d=e.appendChild(bO.createElement("div")),f=bO.createElement("input");
f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),d.appendChild(f),bB.checkClone=d.cloneNode(!0).cloneNode(!0).lastChild.checked,d.innerHTML="<textarea>x</textarea>",bB.noCloneChecked=!!d.cloneNode(!0).lastChild.defaultValue
}();
var a7=bO.documentElement,aY=/^key/,aQ=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,aI=/^([^.]*)(?:\.(.+)|)/;
function aA(){return !0
}function aq(){return !1
}function ah(){try{return bO.activeElement
}catch(b){}}function cM(j,i,q,p,o,m){var l,k;
if("object"==typeof i){"string"!=typeof q&&(p=p||q,q=void 0);
for(k in i){cM(j,k,q,p,i[k],m)
}return j
}if(null==p&&null==o?(o=q,p=q=void 0):null==o&&("string"==typeof q?(o=p,p=void 0):(o=p,p=q,q=void 0)),o===!1){o=aq
}else{if(!o){return j
}}return 1===m&&(l=o,o=function(b){return bx().off(b),l.apply(this,arguments)
},o.guid=l.guid||(l.guid=bx.guid++)),j.each(function(){bx.event.add(this,i,o,p,q)
})
}bx.event={global:{},add:function(I,H,G,F,E){var D,C,B,A,z,y,x,w,v,u,t,r=b0.get(I);
if(r){G.handler&&(D=G,G=D.handler,E=D.selector),E&&bx.find.matchesSelector(a7,E),G.guid||(G.guid=bx.guid++),(A=r.events)||(A=r.events={}),(C=r.handle)||(C=r.handle=function(c){return"undefined"!=typeof bx&&bx.event.triggered!==c.type?bx.event.dispatch.apply(I,arguments):void 0
}),H=(H||"").match(cf)||[""],z=H.length;
while(z--){B=aI.exec(H[z])||[],v=t=B[1],u=(B[2]||"").split(".").sort(),v&&(x=bx.event.special[v]||{},v=(E?x.delegateType:x.bindType)||v,x=bx.event.special[v]||{},y=bx.extend({type:v,origType:t,data:F,handler:G,guid:G.guid,selector:E,needsContext:E&&bx.expr.match.needsContext.test(E),namespace:u.join(".")},D),(w=A[v])||(w=A[v]=[],w.delegateCount=0,x.setup&&x.setup.call(I,F,u,C)!==!1||I.addEventListener&&I.addEventListener(v,C)),x.add&&(x.add.call(I,y),y.handler.guid||(y.handler.guid=G.guid)),E?w.splice(w.delegateCount++,0,y):w.push(y),bx.event.global[v]=!0)
}}},remove:function(I,H,G,F,E){var D,C,B,A,z,y,x,w,v,u,t,r=b0.hasData(I)&&b0.get(I);
if(r&&(A=r.events)){H=(H||"").match(cf)||[""],z=H.length;
while(z--){if(B=aI.exec(H[z])||[],v=t=B[1],u=(B[2]||"").split(".").sort(),v){x=bx.event.special[v]||{},v=(F?x.delegateType:x.bindType)||v,w=A[v]||[],B=B[2]&&new RegExp("(^|\\.)"+u.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=D=w.length;
while(D--){y=w[D],!E&&t!==y.origType||G&&G.guid!==y.guid||B&&!B.test(y.namespace)||F&&F!==y.selector&&("**"!==F||!y.selector)||(w.splice(D,1),y.selector&&w.delegateCount--,x.remove&&x.remove.call(I,y))
}C&&!w.length&&(x.teardown&&x.teardown.call(I,u,r.handle)!==!1||bx.removeEvent(I,v,r.handle),delete A[v])
}else{for(v in A){bx.event.remove(I,v+H[z],G,F,!0)
}}}bx.isEmptyObject(A)&&b0.remove(I,"handle events")
}},dispatch:function(x){var w=bx.event.fix(x),v,u,t,r,q,p,o=new Array(arguments.length),m=(b0.get(this,"events")||{})[w.type]||[],l=bx.event.special[w.type]||{};
for(o[0]=w,v=1;
v<arguments.length;
v++){o[v]=arguments[v]
}if(w.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,w)!==!1){p=bx.event.handlers.call(this,w,m),v=0;
while((r=p[v++])&&!w.isPropagationStopped()){w.currentTarget=r.elem,u=0;
while((q=r.handlers[u++])&&!w.isImmediatePropagationStopped()){w.rnamespace&&!w.rnamespace.test(q.namespace)||(w.handleObj=q,w.data=q.data,t=((bx.event.special[q.origType]||{}).handle||q.handler).apply(r.elem,o),void 0!==t&&(w.result=t)===!1&&(w.preventDefault(),w.stopPropagation()))
}}return l.postDispatch&&l.postDispatch.call(this,w),w.result
}},handlers:function(v,u){var t,r,q,p,o,m=[],l=u.delegateCount,k=v.target;
if(l&&k.nodeType&&!("click"===v.type&&v.button>=1)){for(;
k!==this;
k=k.parentNode||this){if(1===k.nodeType&&("click"!==v.type||k.disabled!==!0)){for(p=[],o={},t=0;
t<l;
t++){r=u[t],q=r.selector+" ",void 0===o[q]&&(o[q]=r.needsContext?bx(q,this).index(k)>-1:bx.find(q,this,null,[k]).length),o[q]&&p.push(r)
}p.length&&m.push({elem:k,handlers:p})
}}}return k=this,l<u.length&&m.push({elem:k,handlers:u.slice(l)}),m
},addProp:function(d,c){Object.defineProperty(bx.Event.prototype,d,{enumerable:!0,configurable:!0,get:bx.isFunction(c)?function(){if(this.originalEvent){return c(this.originalEvent)
}}:function(){if(this.originalEvent){return this.originalEvent[d]
}},set:function(e){Object.defineProperty(this,d,{enumerable:!0,configurable:!0,writable:!0,value:e})
}})
},fix:function(b){return b[bx.expando]?b:new bx.Event(b)
},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ah()&&this.focus){return this.focus(),!1
}},delegateType:"focusin"},blur:{trigger:function(){if(this===ah()&&this.blur){return this.blur(),!1
}},delegateType:"focusout"},click:{trigger:function(){if(av.test(this.type)&&this.click&&cr(this,"input")){return this.click(),!1
}},_default:function(b){return cr(b.target,"a")
}},beforeunload:{postDispatch:function(b){void 0!==b.result&&b.originalEvent&&(b.originalEvent.returnValue=b.result)
}}}},bx.removeEvent=function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f)
},bx.Event=function(d,c){return this instanceof bx.Event?(d&&d.type?(this.originalEvent=d,this.type=d.type,this.isDefaultPrevented=d.defaultPrevented||void 0===d.defaultPrevented&&d.returnValue===!1?aA:aq,this.target=d.target&&3===d.target.nodeType?d.target.parentNode:d.target,this.currentTarget=d.currentTarget,this.relatedTarget=d.relatedTarget):this.type=d,c&&bx.extend(this,c),this.timeStamp=d&&d.timeStamp||bx.now(),void (this[bx.expando]=!0)):new bx.Event(d,c)
},bx.Event.prototype={constructor:bx.Event,isDefaultPrevented:aq,isPropagationStopped:aq,isImmediatePropagationStopped:aq,isSimulated:!1,preventDefault:function(){var b=this.originalEvent;
this.isDefaultPrevented=aA,b&&!this.isSimulated&&b.preventDefault()
},stopPropagation:function(){var b=this.originalEvent;
this.isPropagationStopped=aA,b&&!this.isSimulated&&b.stopPropagation()
},stopImmediatePropagation:function(){var b=this.originalEvent;
this.isImmediatePropagationStopped=aA,b&&!this.isSimulated&&b.stopImmediatePropagation(),this.stopPropagation()
}},bx.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(d){var c=d.button;
return null==d.which&&aY.test(d.type)?null!=d.charCode?d.charCode:d.keyCode:!d.which&&void 0!==c&&aQ.test(d.type)?1&c?1:2&c?3:4&c?2:0:d.which
}},bx.event.addProp),bx.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(d,c){bx.event.special[d]={delegateType:c,bindType:c,handle:function(b){var j,i=this,h=b.relatedTarget,g=b.handleObj;
return h&&(h===i||bx.contains(i,h))||(b.type=g.origType,j=g.handler.apply(this,arguments),b.type=c),j
}}
}),bx.fn.extend({on:function(f,e,h,g){return cM(this,f,e,h,g)
},one:function(f,e,h,g){return cM(this,f,e,h,g,1)
},off:function(g,f,j){var i,h;
if(g&&g.preventDefault&&g.handleObj){return i=g.handleObj,bx(g.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
}if("object"==typeof g){for(h in g){this.off(h,f,g[h])
}return this
}return f!==!1&&"function"!=typeof f||(j=f,f=void 0),j===!1&&(j=aq),this.each(function(){bx.event.remove(this,g,j,f)
})
}});
var cB=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,a1=/<script|<style|<link/i,aS=/checked\s*(?:[^=]|=\s*.checked.)/i,aK=/^true\/(.*)/,aC=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
function at(d,c){return cr(d,"table")&&cr(11!==c.nodeType?c:c.firstChild,"tr")?bx(">tbody",d)[0]||d:d
}function ak(b){return b.type=(null!==b.getAttribute("type"))+"/"+b.type,b
}function cO(d){var c=aK.exec(d.type);
return c?d.type=c[1]:d.removeAttribute("type"),d
}function cG(v,u){var t,r,q,p,o,m,l,k;
if(1===u.nodeType){if(b0.hasData(v)&&(p=b0.access(v),o=b0.set(u,p),k=p.events)){delete o.handle,o.events={};
for(q in k){for(t=0,r=k[q].length;
t<r;
t++){bx.event.add(u,q,k[q][t])
}}}bZ.hasData(v)&&(m=bZ.access(v),l=bx.extend({},m),bZ.set(u,l))
}}function cv(e,d){var f=d.nodeName.toLowerCase();
"input"===f&&av.test(e.type)?d.checked=e.checked:"input"!==f&&"textarea"!==f||(d.defaultValue=e.defaultValue)
}function bU(C,B,A,z){B=bJ.apply([],B);
var y,x,w,v,u,t,r=0,p=C.length,o=p-1,g=B[0],D=bx.isFunction(g);
if(D||p>1&&"string"==typeof g&&!bB.checkClone&&aS.test(g)){return C.each(function(c){var b=C.eq(c);
D&&(B[0]=g.call(this,c,b.html())),bU(b,B,A,z)
})
}if(p&&(y=bg(B,C[0].ownerDocument,!1,C,z),x=y.firstChild,1===y.childNodes.length&&(y=x),x||z)){for(w=bx.map(cx(y,"script"),ak),v=w.length;
r<p;
r++){u=y,r!==o&&(u=bx.clone(u,!0,!0),v&&bx.merge(w,cx(u,"script"))),A.call(C[r],u,r)
}if(v){for(t=w[w.length-1].ownerDocument,bx.map(w,cO),r=0;
r<v;
r++){u=w[r],ad.test(u.type||"")&&!b0.access(u,"globalEval")&&bx.contains(t,u)&&(u.src?bx._evalUrl&&bx._evalUrl(u.src):bA(u.textContent.replace(aC,""),t))
}}}return C
}function bl(h,g,l){for(var k,j=g?bx.filter(g,h):h,i=0;
null!=(k=j[i]);
i++){l||1!==k.nodeType||bx.cleanData(cx(k)),k.parentNode&&(l&&bx.contains(k.ownerDocument,k)&&bW(cx(k,"script")),k.parentNode.removeChild(k))
}return h
}bx.extend({htmlPrefilter:function(b){return b.replace(cB,"<$1></$2>")
},clone:function(t,r,q){var p,o,m,l,k=t.cloneNode(!0),j=bx.contains(t.ownerDocument,t);
if(!(bB.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||bx.isXMLDoc(t))){for(l=cx(k),m=cx(t),p=0,o=m.length;
p<o;
p++){cv(m[p],l[p])
}}if(r){if(q){for(m=m||cx(t),l=l||cx(k),p=0,o=m.length;
p<o;
p++){cG(m[p],l[p])
}}else{cG(t,k)
}}return l=cx(k,"script"),l.length>0&&bW(l,!j&&cx(t,"script")),k
},cleanData:function(h){for(var g,l,k,j=bx.event.special,i=0;
void 0!==(l=h[i]);
i++){if(b2(l)){if(g=l[b0.expando]){if(g.events){for(k in g.events){j[k]?bx.event.remove(l,k):bx.removeEvent(l,k,g.handle)
}}l[b0.expando]=void 0
}l[bZ.expando]&&(l[bZ.expando]=void 0)
}}}}),bx.fn.extend({detach:function(b){return bl(this,b,!0)
},remove:function(b){return bl(this,b)
},text:function(b){return b3(this,function(c){return void 0===c?bx.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=c)
})
},null,b,arguments.length)
},append:function(){return bU(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=at(this,d);
c.appendChild(d)
}})
},prepend:function(){return bU(this,arguments,function(d){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var c=at(this,d);
c.insertBefore(d,c.firstChild)
}})
},before:function(){return bU(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this)
})
},after:function(){return bU(this,arguments,function(b){this.parentNode&&this.parentNode.insertBefore(b,this.nextSibling)
})
},empty:function(){for(var d,c=0;
null!=(d=this[c]);
c++){1===d.nodeType&&(bx.cleanData(cx(d,!1)),d.textContent="")
}return this
},clone:function(d,c){return d=null!=d&&d,c=null==c?d:c,this.map(function(){return bx.clone(this,d,c)
})
},html:function(b){return b3(this,function(g){var f=this[0]||{},j=0,i=this.length;
if(void 0===g&&1===f.nodeType){return f.innerHTML
}if("string"==typeof g&&!a1.test(g)&&!cI[(am.exec(g)||["",""])[1].toLowerCase()]){g=bx.htmlPrefilter(g);
try{for(;
j<i;
j++){f=this[j]||{},1===f.nodeType&&(bx.cleanData(cx(f,!1)),f.innerHTML=g)
}f=0
}catch(h){}}f&&this.empty().append(g)
},null,b,arguments.length)
},replaceWith:function(){var b=[];
return bU(this,arguments,function(d){var e=this.parentNode;
bx.inArray(this,b)<0&&(bx.cleanData(cx(this)),e&&e.replaceChild(d,this))
},b)
}}),bx.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){bx.fn[d]=function(b){for(var l,k=[],j=bx(b),i=j.length-1,h=0;
h<=i;
h++){l=h===i?this:this.clone(!0),bx(j[h])[c](l),bI.apply(k,l.get())
}return this.pushStack(k)
}
});
var be=/^margin/,a5=new RegExp("^("+cD+")(?!px)[a-z%]+$","i"),aW=function(d){var e=d.ownerDocument.defaultView;
return e&&e.opener||(e=bR),e.getComputedStyle(d)
};
!function(){function d(){if(j){j.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",j.innerHTML="",a7.appendChild(k);
var c=bR.getComputedStyle(j);
p="1%"!==c.top,l="2px"===c.marginLeft,o="4px"===c.width,j.style.marginRight="50%",m="4px"===c.marginRight,a7.removeChild(k),j=null
}}var p,o,m,l,k=bO.createElement("div"),j=bO.createElement("div");
j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",bB.clearCloneStyle="content-box"===j.style.backgroundClip,k.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",k.appendChild(j),bx.extend(bB,{pixelPosition:function(){return d(),p
},boxSizingReliable:function(){return d(),o
},pixelMarginRight:function(){return d(),m
},reliableMarginLeft:function(){return d(),l
}}))
}();
function aO(j,i,q){var p,o,m,l,k=j.style;
return q=q||aW(j),q&&(l=q.getPropertyValue(i)||q[i],""!==l||bx.contains(j.ownerDocument,j)||(l=bx.style(j,i)),!bB.pixelMarginRight()&&a5.test(l)&&be.test(i)&&(p=k.width,o=k.minWidth,m=k.maxWidth,k.minWidth=k.maxWidth=k.width=l,l=q.width,k.width=p,k.minWidth=o,k.maxWidth=m)),void 0!==l?l+"":l
}function aG(d,c){return{get:function(){return d()?void delete this.get:(this.get=c).apply(this,arguments)
}}
}var ax=/^(none|table(?!-c[ea]).+)/,ao=/^--/,af={position:"absolute",visibility:"hidden",display:"block"},cK={letterSpacing:"0",fontWeight:"400"},cz=["Webkit","Moz","ms"],b7=bO.createElement("div").style;
function bz(e){if(e in b7){return e
}var d=e[0].toUpperCase()+e.slice(1),f=cz.length;
while(f--){if(e=cz[f]+d,e in b7){return e
}}}function bh(d){var c=bx.cssProps[d];
return c||(c=bx.cssProps[d]=bz(d)||d),c
}function a8(f,e,h){var g=cm.exec(e);
return g?Math.max(0,g[2]-(h||0))+(g[3]||"px"):e
}function aZ(i,h,o,m,l){var k,j=0;
for(k=o===(m?"border":"content")?4:"width"===h?1:0;
k<4;
k+=2){"margin"===o&&(j+=bx.css(i,o+bM[k],!0,l)),m?("content"===o&&(j-=bx.css(i,"padding"+bM[k],!0,l)),"margin"!==o&&(j-=bx.css(i,"border"+bM[k]+"Width",!0,l))):(j+=bx.css(i,"padding"+bM[k],!0,l),"padding"!==o&&(j+=bx.css(i,"border"+bM[k]+"Width",!0,l)))
}return j
}function ct(i,h,o){var m,l=aW(i),k=aO(i,h,l),j="border-box"===bx.css(i,"boxSizing",!1,l);
return a5.test(k)?k:(m=j&&(bB.boxSizingReliable()||k===i.style[h]),k=parseFloat(k)||0,k+aZ(i,h,o||(j?"border":"content"),m,l)+"px")
}bx.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=aO(e,"opacity");
return""===f?"1":f
}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(v,u,t,r){if(v&&3!==v.nodeType&&8!==v.nodeType&&v.style){var q,p,o,m=bx.camelCase(u),l=ao.test(u),k=v.style;
return l||(u=bh(m)),o=bx.cssHooks[u]||bx.cssHooks[m],void 0===t?o&&"get" in o&&void 0!==(q=o.get(v,!1,r))?q:k[u]:(p=typeof t,"string"===p&&(q=cm.exec(t))&&q[1]&&(t=a3(v,u,q),p="number"),null!=t&&t===t&&("number"===p&&(t+=q&&q[3]||(bx.cssNumber[m]?"":"px")),bB.clearCloneStyle||""!==t||0!==u.indexOf("background")||(k[u]="inherit"),o&&"set" in o&&void 0===(t=o.set(v,t,r))||(l?k.setProperty(u,t):k[u]=t)),void 0)
}},css:function(t,r,q,p){var o,m,l,k=bx.camelCase(r),j=ao.test(r);
return j||(r=bh(k)),l=bx.cssHooks[r]||bx.cssHooks[k],l&&"get" in l&&(o=l.get(t,!0,q)),void 0===o&&(o=aO(t,r,p)),"normal"===o&&r in cK&&(o=cK[r]),""===q||q?(m=parseFloat(o),q===!0||isFinite(m)?m||0:o):o
}}),bx.each(["height","width"],function(d,c){bx.cssHooks[c]={get:function(b,f,e){if(f){return !ax.test(bx.css(b,"display"))||b.getClientRects().length&&b.getBoundingClientRect().width?ct(b,c,e):bc(b,af,function(){return ct(b,c,e)
})
}},set:function(b,l,k){var j,i=k&&aW(b),h=k&&aZ(b,c,k,"border-box"===bx.css(b,"boxSizing",!1,i),i);
return h&&(j=cm.exec(l))&&"px"!==(j[3]||"px")&&(b.style[c]=l,l=bx.css(b,c)),a8(b,l,h)
}}
}),bx.cssHooks.marginLeft=aG(bB.reliableMarginLeft,function(d,c){if(c){return(parseFloat(aO(d,"marginLeft"))||d.getBoundingClientRect().left-bc(d,{marginLeft:0},function(){return d.getBoundingClientRect().left
}))+"px"
}}),bx.each({margin:"",padding:"",border:"Width"},function(d,c){bx.cssHooks[d+c]={expand:function(i){for(var h=0,g={},b="string"==typeof i?i.split(" "):[i];
h<4;
h++){g[d+bM[h]+c]=b[h]||b[h-2]||b[0]
}return g
}},be.test(d)||(bx.cssHooks[d+c].set=a8)
}),bx.fn.extend({css:function(d,c){return b3(this,function(i,h,o){var m,l,k={},j=0;
if(Array.isArray(h)){for(m=aW(i),l=h.length;
j<l;
j++){k[h[j]]=bx.css(i,h[j],!1,m)
}return k
}return void 0!==o?bx.style(i,h,o):bx.css(i,h)
},d,c,arguments.length>1)
}});
function ai(g,f,j,i,h){return new ai.prototype.init(g,f,j,i,h)
}bx.Tween=ai,ai.prototype={constructor:ai,init:function(h,g,l,k,j,i){this.elem=h,this.prop=l,this.easing=j||bx.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=k,this.unit=i||(bx.cssNumber[l]?"":"px")
},cur:function(){var b=ai.propHooks[this.prop];
return b&&b.get?b.get(this):ai.propHooks._default.get(this)
},run:function(e){var d,f=ai.propHooks[this.prop];
return this.options.duration?this.pos=d=bx.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=d=e,this.now=(this.end-this.start)*d+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):ai.propHooks._default.set(this),this
}},ai.prototype.init.prototype=ai.prototype,ai.propHooks={_default:{get:function(d){var c;
return 1!==d.elem.nodeType||null!=d.elem[d.prop]&&null==d.elem.style[d.prop]?d.elem[d.prop]:(c=bx.css(d.elem,d.prop,""),c&&"auto"!==c?c:0)
},set:function(b){bx.fx.step[b.prop]?bx.fx.step[b.prop](b):1!==b.elem.nodeType||null==b.elem.style[bx.cssProps[b.prop]]&&!bx.cssHooks[b.prop]?b.elem[b.prop]=b.now:bx.style(b.elem,b.prop,b.now+b.unit)
}}},ai.propHooks.scrollTop=ai.propHooks.scrollLeft={set:function(b){b.elem.nodeType&&b.elem.parentNode&&(b.elem[b.prop]=b.now)
}},bx.easing={linear:function(b){return b
},swing:function(b){return 0.5-Math.cos(b*Math.PI)/2
},_default:"swing"},bx.fx=ai.prototype.init,bx.fx.step={};
var cC,ck,bK=/^(?:toggle|show|hide)$/,bi=/queueHooks$/;
function a9(){ck&&(bO.hidden===!1&&bR.requestAnimationFrame?bR.requestAnimationFrame(a9):bR.setTimeout(a9,bx.fx.interval),bx.fx.tick())
}function a2(){return bR.setTimeout(function(){cC=void 0
}),cC=bx.now()
}function aT(g,f){var j,i=0,h={height:g};
for(f=f?1:0;
i<4;
i+=2-f){j=bM[i],h["margin"+j]=h["padding"+j]=g
}return f&&(h.opacity=h.width=g),h
}function aL(i,h,o){for(var m,l=(al.tweeners[h]||[]).concat(al.tweeners["*"]),k=0,j=l.length;
k<j;
k++){if(m=l[k].call(o,h,i)){return m
}}}function aD(I,H,G){var F,E,D,C,B,A,z,y,x="width" in H||"height" in H,w=this,v={},u=I.style,t=I.nodeType&&bj(I),r=b0.get(I,"fxshow");
G.queue||(C=bx._queueHooks(I,"fx"),null==C.unqueued&&(C.unqueued=0,B=C.empty.fire,C.empty.fire=function(){C.unqueued||B()
}),C.unqueued++,w.always(function(){w.always(function(){C.unqueued--,bx.queue(I,"fx").length||C.empty.fire()
})
}));
for(F in H){if(E=H[F],bK.test(E)){if(delete H[F],D=D||"toggle"===E,E===(t?"hide":"show")){if("show"!==E||!r||void 0===r[F]){continue
}t=!0
}v[F]=r&&r[F]||bx.style(I,F)
}}if(A=!bx.isEmptyObject(H),A||!bx.isEmptyObject(v)){x&&1===I.nodeType&&(G.overflow=[u.overflow,u.overflowX,u.overflowY],z=r&&r.display,null==z&&(z=b0.get(I,"display")),y=bx.css(I,"display"),"none"===y&&(z?y=z:(aE([I],!0),z=I.style.display||z,y=bx.css(I,"display"),aE([I]))),("inline"===y||"inline-block"===y&&null!=z)&&"none"===bx.css(I,"float")&&(A||(w.done(function(){u.display=z
}),null==z&&(y=u.display,z="none"===y?"":y)),u.display="inline-block")),G.overflow&&(u.overflow="hidden",w.always(function(){u.overflow=G.overflow[0],u.overflowX=G.overflow[1],u.overflowY=G.overflow[2]
})),A=!1;
for(F in v){A||(r?"hidden" in r&&(t=r.hidden):r=b0.access(I,"fxshow",{display:z}),D&&(r.hidden=!t),t&&aE([I],!0),w.done(function(){t||aE([I]),b0.remove(I,"fxshow");
for(F in v){bx.style(I,F,v[F])
}})),A=aL(t?r[F]:0,F,w),F in r||(r[F]=A.start,t&&(A.end=A.start,A.start=0))
}}}function au(i,h){var o,m,l,k,j;
for(o in i){if(m=bx.camelCase(o),l=h[m],k=i[o],Array.isArray(k)&&(l=k[1],k=i[o]=k[0]),o!==m&&(i[m]=k,delete i[o]),j=bx.cssHooks[m],j&&"expand" in j){k=j.expand(k),delete i[m];
for(o in k){o in i||(i[o]=k[o],h[o]=l)
}}else{h[m]=l
}}}function al(x,w,v){var u,t,r=0,q=al.prefilters.length,p=bx.Deferred().always(function(){delete o.elem
}),o=function(){if(t){return !1
}for(var e=cC||a2(),z=Math.max(0,m.startTime+m.duration-e),y=z/m.duration||0,k=1-y,j=0,h=m.tweens.length;
j<h;
j++){m.tweens[j].run(k)
}return p.notifyWith(x,[m,k,z]),k<1&&h?z:(h||p.notifyWith(x,[m,1,0]),p.resolveWith(x,[m]),!1)
},m=p.promise({elem:x,props:bx.extend({},w),opts:bx.extend(!0,{specialEasing:{},easing:bx.easing._default},v),originalProperties:w,originalOptions:v,startTime:cC||a2(),duration:v.duration,tweens:[],createTween:function(e,g){var f=bx.Tween(x,m.opts,e,g,m.opts.specialEasing[e]||m.opts.easing);
return m.tweens.push(f),f
},stop:function(e){var g=0,f=e?m.tweens.length:0;
if(t){return this
}for(t=!0;
g<f;
g++){m.tweens[g].run(1)
}return e?(p.notifyWith(x,[m,1,0]),p.resolveWith(x,[m,e])):p.rejectWith(x,[m,e]),this
}}),l=m.props;
for(au(l,m.opts.specialEasing);
r<q;
r++){if(u=al.prefilters[r].call(m,x,l,m.opts)){return bx.isFunction(u.stop)&&(bx._queueHooks(m.elem,m.opts.queue).stop=bx.proxy(u.stop,u)),u
}}return bx.map(l,aL,m),bx.isFunction(m.opts.start)&&m.opts.start.call(x,m),m.progress(m.opts.progress).done(m.opts.done,m.opts.complete).fail(m.opts.fail).always(m.opts.always),bx.fx.timer(bx.extend(o,{elem:x,anim:m,queue:m.opts.queue})),m
}bx.Animation=bx.extend(al,{tweeners:{"*":[function(e,d){var f=this.createTween(e,d);
return a3(f.elem,e,cm.exec(d),f),f
}]},tweener:function(g,f){bx.isFunction(g)?(f=g,g=["*"]):g=g.match(cf);
for(var j,i=0,h=g.length;
i<h;
i++){j=g[i],al.tweeners[j]=al.tweeners[j]||[],al.tweeners[j].unshift(f)
}},prefilters:[aD],prefilter:function(d,c){c?al.prefilters.unshift(d):al.prefilters.push(d)
}}),bx.speed=function(f,e,h){var g=f&&"object"==typeof f?bx.extend({},f):{complete:h||!h&&e||bx.isFunction(f)&&f,duration:f,easing:h&&e||e&&!bx.isFunction(e)&&e};
return bx.fx.off?g.duration=0:"number"!=typeof g.duration&&(g.duration in bx.fx.speeds?g.duration=bx.fx.speeds[g.duration]:g.duration=bx.fx.speeds._default),null!=g.queue&&g.queue!==!0||(g.queue="fx"),g.old=g.complete,g.complete=function(){bx.isFunction(g.old)&&g.old.call(this),g.queue&&bx.dequeue(this,g.queue)
},g
},bx.fn.extend({fadeTo:function(f,e,h,g){return this.filter(bj).css("opacity",0).show().end().animate({opacity:e},f,h,g)
},animate:function(i,h,o,m){var l=bx.isEmptyObject(i),k=bx.speed(h,o,m),j=function(){var c=al(this,bx.extend({},i),k);
(l||b0.get(this,"finish"))&&c.stop(!0)
};
return j.finish=j,l||k.queue===!1?this.each(j):this.queue(k.queue,j)
},stop:function(f,e,h){var g=function(d){var c=d.stop;
delete d.stop,c(h)
};
return"string"!=typeof f&&(h=e,e=f,f=void 0),e&&f!==!1&&this.queue(f||"fx",[]),this.each(function(){var c=!0,j=null!=f&&f+"queueHooks",i=bx.timers,d=b0.get(this);
if(j){d[j]&&d[j].stop&&g(d[j])
}else{for(j in d){d[j]&&d[j].stop&&bi.test(j)&&g(d[j])
}}for(j=i.length;
j--;
){i[j].elem!==this||null!=f&&i[j].queue!==f||(i[j].anim.stop(h),c=!1,i.splice(j,1))
}!c&&h||bx.dequeue(this,f)
})
},finish:function(b){return b!==!1&&(b=b||"fx"),this.each(function(){var h,m=b0.get(this),l=m[b+"queue"],k=m[b+"queueHooks"],j=bx.timers,i=l?l.length:0;
for(m.finish=!0,bx.queue(this,b,[]),k&&k.stop&&k.stop.call(this,!0),h=j.length;
h--;
){j[h].elem===this&&j[h].queue===b&&(j[h].anim.stop(!0),j.splice(h,1))
}for(h=0;
h<i;
h++){l[h]&&l[h].finish&&l[h].finish.call(this)
}delete m.finish
})
}}),bx.each(["toggle","show","hide"],function(e,d){var f=bx.fn[d];
bx.fn[d]=function(b,g,c){return null==b||"boolean"==typeof b?f.apply(this,arguments):this.animate(aT(d,!0),b,g,c)
}
}),bx.each({slideDown:aT("show"),slideUp:aT("hide"),slideToggle:aT("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){bx.fn[d]=function(b,f,e){return this.animate(c,b,f,e)
}
}),bx.timers=[],bx.fx.tick=function(){var e,d=0,f=bx.timers;
for(cC=bx.now();
d<f.length;
d++){e=f[d],e()||f[d]!==e||f.splice(d--,1)
}f.length||bx.fx.stop(),cC=void 0
},bx.fx.timer=function(b){bx.timers.push(b),bx.fx.start()
},bx.fx.interval=13,bx.fx.start=function(){ck||(ck=!0,a9())
},bx.fx.stop=function(){ck=null
},bx.fx.speeds={slow:600,fast:200,_default:400},bx.fn.delay=function(d,e){return d=bx.fx?bx.fx.speeds[d]||d:d,e=e||"fx",this.queue(e,function(g,f){var b=bR.setTimeout(g,d);
f.stop=function(){bR.clearTimeout(b)
}
})
},function(){var e=bO.createElement("input"),d=bO.createElement("select"),f=d.appendChild(bO.createElement("option"));
e.type="checkbox",bB.checkOn=""!==e.value,bB.optSelected=f.selected,e=bO.createElement("input"),e.value="t",e.type="radio",bB.radioValue="t"===e.value
}();
var ac,cH=bx.expr.attrHandle;
bx.fn.extend({attr:function(d,c){return b3(this,bx.attr,d,c,arguments.length>1)
},removeAttr:function(b){return this.each(function(){bx.removeAttr(this,b)
})
}}),bx.extend({attr:function(h,g,l){var k,j,i=h.nodeType;
if(3!==i&&8!==i&&2!==i){return"undefined"==typeof h.getAttribute?bx.prop(h,g,l):(1===i&&bx.isXMLDoc(h)||(j=bx.attrHooks[g.toLowerCase()]||(bx.expr.match.bool.test(g)?ac:void 0)),void 0!==l?null===l?void bx.removeAttr(h,g):j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:(h.setAttribute(g,l+""),l):j&&"get" in j&&null!==(k=j.get(h,g))?k:(k=bx.find.attr(h,g),null==k?void 0:k))
}},attrHooks:{type:{set:function(e,d){if(!bB.radioValue&&"radio"===d&&cr(e,"input")){var f=e.value;
return e.setAttribute("type",d),f&&(e.value=f),d
}}}},removeAttr:function(g,f){var j,i=0,h=f&&f.match(cf);
if(h&&1===g.nodeType){while(j=h[i++]){g.removeAttribute(j)
}}}}),ac={set:function(e,d,f){return d===!1?bx.removeAttr(e,f):e.setAttribute(f,f),f
}},bx.each(bx.expr.match.bool.source.match(/\w+/g),function(e,d){var f=cH[d]||bx.find.attr;
cH[d]=function(h,c,l){var k,j,i=c.toLowerCase();
return l||(j=cH[i],cH[i]=k,k=null!=f(h,c,l)?i:null,cH[i]=j),k
}
});
var cw=/^(?:input|select|textarea|button)$/i,bV=/^(?:a|area)$/i;
bx.fn.extend({prop:function(d,c){return b3(this,bx.prop,d,c,arguments.length>1)
},removeProp:function(b){return this.each(function(){delete this[bx.propFix[b]||b]
})
}}),bx.extend({prop:function(h,g,l){var k,j,i=h.nodeType;
if(3!==i&&8!==i&&2!==i){return 1===i&&bx.isXMLDoc(h)||(g=bx.propFix[g]||g,j=bx.propHooks[g]),void 0!==l?j&&"set" in j&&void 0!==(k=j.set(h,l,g))?k:h[g]=l:j&&"get" in j&&null!==(k=j.get(h,g))?k:h[g]
}},propHooks:{tabIndex:{get:function(d){var c=bx.find.attr(d,"tabindex");
return c?parseInt(c,10):cw.test(d.nodeName)||bV.test(d.nodeName)&&d.href?0:-1
}}},propFix:{"for":"htmlFor","class":"className"}}),bB.optSelected||(bx.propHooks.selected={get:function(d){var c=d.parentNode;
return c&&c.parentNode&&c.parentNode.selectedIndex,null
},set:function(d){var c=d.parentNode;
c&&(c.selectedIndex,c.parentNode&&c.parentNode.selectedIndex)
}}),bx.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){bx.propFix[this.toLowerCase()]=this
});
function bm(d){var c=d.match(cf)||[];
return c.join(" ")
}function bf(b){return b.getAttribute&&b.getAttribute("class")||""
}bx.fn.extend({addClass:function(t){var r,q,p,o,m,l,k,j=0;
if(bx.isFunction(t)){return this.each(function(c){bx(this).addClass(t.call(this,c,bf(this)))
})
}if("string"==typeof t&&t){r=t.match(cf)||[];
while(q=this[j++]){if(o=bf(q),p=1===q.nodeType&&" "+bm(o)+" "){l=0;
while(m=r[l++]){p.indexOf(" "+m+" ")<0&&(p+=m+" ")
}k=bm(p),o!==k&&q.setAttribute("class",k)
}}}return this
},removeClass:function(t){var r,q,p,o,m,l,k,j=0;
if(bx.isFunction(t)){return this.each(function(c){bx(this).removeClass(t.call(this,c,bf(this)))
})
}if(!arguments.length){return this.attr("class","")
}if("string"==typeof t&&t){r=t.match(cf)||[];
while(q=this[j++]){if(o=bf(q),p=1===q.nodeType&&" "+bm(o)+" "){l=0;
while(m=r[l++]){while(p.indexOf(" "+m+" ")>-1){p=p.replace(" "+m+" "," ")
}}k=bm(p),o!==k&&q.setAttribute("class",k)
}}}return this
},toggleClass:function(e,d){var f=typeof e;
return"boolean"==typeof d&&"string"===f?d?this.addClass(e):this.removeClass(e):bx.isFunction(e)?this.each(function(b){bx(this).toggleClass(e.call(this,b,bf(this),d),d)
}):this.each(function(){var c,i,h,g;
if("string"===f){i=0,h=bx(this),g=e.match(cf)||[];
while(c=g[i++]){h.hasClass(c)?h.removeClass(c):h.addClass(c)
}}else{void 0!==e&&"boolean"!==f||(c=bf(this),c&&b0.set(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||e===!1?"":b0.get(this,"__className__")||""))
}})
},hasClass:function(f){var e,h,g=0;
e=" "+f+" ";
while(h=this[g++]){if(1===h.nodeType&&(" "+bm(bf(h))+" ").indexOf(e)>-1){return !0
}}return !1
}});
var a6=/\r/g;
bx.fn.extend({val:function(g){var f,j,i,h=this[0];
if(arguments.length){return i=bx.isFunction(g),this.each(function(d){var b;
1===this.nodeType&&(b=i?g.call(this,d,bx(this).val()):g,null==b?b="":"number"==typeof b?b+="":Array.isArray(b)&&(b=bx.map(b,function(c){return null==c?"":c+""
})),f=bx.valHooks[this.type]||bx.valHooks[this.nodeName.toLowerCase()],f&&"set" in f&&void 0!==f.set(this,b,"value")||(this.value=b))
})
}if(h){return f=bx.valHooks[h.type]||bx.valHooks[h.nodeName.toLowerCase()],f&&"get" in f&&void 0!==(j=f.get(h,"value"))?j:(j=h.value,"string"==typeof j?j.replace(a6,""):null==j?"":j)
}}}),bx.extend({valHooks:{option:{get:function(d){var c=bx.find.attr(d,"value");
return null!=c?c:bm(bx.text(d))
}},select:{get:function(t){var r,q,p,o=t.options,m=t.selectedIndex,l="select-one"===t.type,k=l?null:[],j=l?m+1:o.length;
for(p=m<0?j:l?m:0;
p<j;
p++){if(q=o[p],(q.selected||p===m)&&!q.disabled&&(!q.parentNode.disabled||!cr(q.parentNode,"optgroup"))){if(r=bx(q).val(),l){return r
}k.push(r)
}}return k
},set:function(i,h){var o,m,l=i.options,k=bx.makeArray(h),j=l.length;
while(j--){m=l[j],(m.selected=bx.inArray(bx.valHooks.option.get(m),k)>-1)&&(o=!0)
}return o||(i.selectedIndex=-1),k
}}}}),bx.each(["radio","checkbox"],function(){bx.valHooks[this]={set:function(d,c){if(Array.isArray(c)){return d.checked=bx.inArray(bx(d).val(),c)>-1
}}},bB.checkOn||(bx.valHooks[this].get=function(b){return null===b.getAttribute("value")?"on":b.value
})
});
var aX=/^(?:focusinfocus|focusoutblur)$/;
bx.extend(bx.event,{trigger:function(D,C,B,A){var z,y,x,w,v,u,t,r=[B||bO],l=bE.call(D,"type")?D.type:D,d=bE.call(D,"namespace")?D.namespace.split("."):[];
if(y=x=B=B||bO,3!==B.nodeType&&8!==B.nodeType&&!aX.test(l+bx.event.triggered)&&(l.indexOf(".")>-1&&(d=l.split("."),l=d.shift(),d.sort()),v=l.indexOf(":")<0&&"on"+l,D=D[bx.expando]?D:new bx.Event(l,"object"==typeof D&&D),D.isTrigger=A?2:3,D.namespace=d.join("."),D.rnamespace=D.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,D.result=void 0,D.target||(D.target=B),C=null==C?[D]:bx.makeArray(C,[D]),t=bx.event.special[l]||{},A||!t.trigger||t.trigger.apply(B,C)!==!1)){if(!A&&!t.noBubble&&!bx.isWindow(B)){for(w=t.delegateType||l,aX.test(w+l)||(y=y.parentNode);
y;
y=y.parentNode){r.push(y),x=y
}x===(B.ownerDocument||bO)&&r.push(x.defaultView||x.parentWindow||bR)
}z=0;
while((y=r[z++])&&!D.isPropagationStopped()){D.type=z>1?w:t.bindType||l,u=(b0.get(y,"events")||{})[D.type]&&b0.get(y,"handle"),u&&u.apply(y,C),u=v&&y[v],u&&u.apply&&b2(y)&&(D.result=u.apply(y,C),D.result===!1&&D.preventDefault())
}return D.type=l,A||D.isDefaultPrevented()||t._default&&t._default.apply(r.pop(),C)!==!1||!b2(B)||v&&bx.isFunction(B[l])&&!bx.isWindow(B)&&(x=B[v],x&&(B[v]=null),bx.event.triggered=l,B[l](),bx.event.triggered=void 0,x&&(B[v]=x)),D.result
}},simulate:function(f,e,h){var g=bx.extend(new bx.Event,h,{type:f,isSimulated:!0});
bx.event.trigger(g,null,e)
}}),bx.fn.extend({trigger:function(d,c){return this.each(function(){bx.event.trigger(d,c,this)
})
},triggerHandler:function(e,d){var f=this[0];
if(f){return bx.event.trigger(e,d,f,!0)
}}}),bx.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(d,c){bx.fn[c]=function(b,e){return arguments.length>0?this.on(c,null,b,e):this.trigger(c)
}
}),bx.fn.extend({hover:function(d,c){return this.mouseenter(d).mouseleave(c||d)
}}),bB.focusin="onfocusin" in bR,bB.focusin||bx.each({focus:"focusin",blur:"focusout"},function(e,d){var f=function(b){bx.event.simulate(d,b.target,bx.event.fix(b))
};
bx.event.special[d]={setup:function(){var c=this.ownerDocument||this,b=b0.access(c,d);
b||c.addEventListener(e,f,!0),b0.access(c,d,(b||0)+1)
},teardown:function(){var c=this.ownerDocument||this,b=b0.access(c,d)-1;
b?b0.access(c,d,b):(c.removeEventListener(e,f,!0),b0.remove(c,d))
}}
});
var aP=bR.location,aH=bx.now(),ay=/\?/;
bx.parseXML=function(e){var g;
if(!e||"string"!=typeof e){return null
}try{g=(new bR.DOMParser).parseFromString(e,"text/xml")
}catch(f){g=void 0
}return g&&!g.getElementsByTagName("parsererror").length||bx.error("Invalid XML: "+e),g
};
var ap=/\[\]$/,ag=/\r?\n/g,cL=/^(?:submit|button|image|reset|file)$/i,cA=/^(?:input|select|textarea|keygen)/i;
function a0(g,f,j,i){var h;
if(Array.isArray(f)){bx.each(f,function(c,d){j||ap.test(g)?i(g,d):a0(g+"["+("object"==typeof d&&null!=d?c:"")+"]",d,j,i)
})
}else{if(j||"object"!==bx.type(f)){i(g,f)
}else{for(h in f){a0(g+"["+h+"]",f[h],j,i)
}}}}bx.param=function(g,f){var j,i=[],h=function(e,d){var k=bx.isFunction(d)?d():d;
i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==k?"":k)
};
if(Array.isArray(g)||g.jquery&&!bx.isPlainObject(g)){bx.each(g,function(){h(this.name,this.value)
})
}else{for(j in g){a0(j,g[j],f,h)
}}return i.join("&")
},bx.fn.extend({serialize:function(){return bx.param(this.serializeArray())
},serializeArray:function(){return this.map(function(){var b=bx.prop(this,"elements");
return b?bx.makeArray(b):this
}).filter(function(){var b=this.type;
return this.name&&!bx(this).is(":disabled")&&cA.test(this.nodeName)&&!cL.test(b)&&(this.checked||!av.test(b))
}).map(function(e,d){var f=bx(this).val();
return null==f?null:Array.isArray(f)?bx.map(f,function(b){return{name:d.name,value:b.replace(ag,"\r\n")}
}):{name:d.name,value:f.replace(ag,"\r\n")}
}).get()
}});
var aR=/%20/g,aJ=/#.*$/,aB=/([?&])_=[^&]*/,ar=/^(.*?):[ \t]*([^\r\n]*)$/gm,aj=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,cN=/^(?:GET|HEAD)$/,cF=/^\/\//,cu={},bT={},bk="*/".concat("*"),bd=bO.createElement("a");
bd.href=aP.href;
function a4(b){return function(g,k){"string"!=typeof g&&(k=g,g="*");
var j,i=0,h=g.toLowerCase().match(cf)||[];
if(bx.isFunction(k)){while(j=h[i++]){"+"===j[0]?(j=j.slice(1)||"*",(b[j]=b[j]||[]).unshift(k)):(b[j]=b[j]||[]).push(k)
}}}
}function aV(i,h,o,m){var l={},k=i===bT;
function j(c){var b;
return l[c]=!0,bx.each(i[c]||[],function(d,f){var e=f(h,o,m);
return"string"!=typeof e||k||l[e]?k?!(b=e):void 0:(h.dataTypes.unshift(e),j(e),!1)
}),b
}return j(h.dataTypes[0])||!l["*"]&&j("*")
}function aN(g,f){var j,i,h=bx.ajaxSettings.flatOptions||{};
for(j in f){void 0!==f[j]&&((h[j]?g:i||(i={}))[j]=f[j])
}return i&&bx.extend(!0,g,i),g
}function aF(t,r,q){var p,o,m,l,k=t.contents,j=t.dataTypes;
while("*"===j[0]){j.shift(),void 0===p&&(p=t.mimeType||r.getResponseHeader("Content-Type"))
}if(p){for(o in k){if(k[o]&&k[o].test(p)){j.unshift(o);
break
}}}if(j[0] in q){m=j[0]
}else{for(o in q){if(!j[0]||t.converters[o+" "+j[0]]){m=o;
break
}l||(l=o)
}m=m||l
}if(m){return m!==j[0]&&j.unshift(m),q[m]
}}function aw(z,y,x,w){var v,u,t,r,q,p={},o=z.dataTypes.slice();
if(o[1]){for(t in z.converters){p[t.toLowerCase()]=z.converters[t]
}}u=o.shift();
while(u){if(z.responseFields[u]&&(x[z.responseFields[u]]=y),!q&&w&&z.dataFilter&&(y=z.dataFilter(y,z.dataType)),q=u,u=o.shift()){if("*"===u){u=q
}else{if("*"!==q&&q!==u){if(t=p[q+" "+u]||p["* "+u],!t){for(v in p){if(r=v.split(" "),r[1]===u&&(t=p[q+" "+r[0]]||p["* "+r[0]])){t===!0?t=p[v]:p[v]!==!0&&(u=r[0],o.unshift(r[1]));
break
}}}if(t!==!0){if(t&&z["throws"]){y=t(y)
}else{try{y=t(y)
}catch(m){return{state:"parsererror",error:t?m:"No conversion from "+q+" to "+u}
}}}}}}}return{state:"success",data:y}
}bx.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:aP.href,type:"GET",isLocal:aj.test(aP.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":bk,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":bx.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(d,c){return c?aN(aN(d,bx.ajaxSettings),c):aN(bx.ajaxSettings,d)
},ajaxPrefilter:a4(cu),ajaxTransport:a4(bT),ajax:function(W,V){"object"==typeof W&&(V=W,W=void 0),V=V||{};
var U,T,S,R,Q,P,O,N,M,L,K=bx.ajaxSetup({},V),J=K.context||K,H=K.context&&(J.nodeType||J.jquery)?bx(J):bx.event,G=bx.Deferred(),F=bx.Callbacks("once memory"),E=K.statusCode||{},D={},C={},B="canceled",r={readyState:0,getResponseHeader:function(e){var c;
if(O){if(!R){R={};
while(c=ar.exec(S)){R[c[1].toLowerCase()]=c[2]
}}c=R[e.toLowerCase()]
}return null==c?null:c
},getAllResponseHeaders:function(){return O?S:null
},setRequestHeader:function(e,c){return null==O&&(e=C[e.toLowerCase()]=C[e.toLowerCase()]||e,D[e]=c),this
},overrideMimeType:function(b){return null==O&&(K.mimeType=b),this
},statusCode:function(e){var c;
if(e){if(O){r.always(e[r.status])
}else{for(c in e){E[c]=[E[c],e[c]]
}}}return this
},abort:function(e){var c=e||B;
return U&&U.abort(c),I(0,c),this
}};
if(G.promise(r),K.url=((W||K.url||aP.href)+"").replace(cF,aP.protocol+"//"),K.type=V.method||V.type||K.method||K.type,K.dataTypes=(K.dataType||"*").toLowerCase().match(cf)||[""],null==K.crossDomain){P=bO.createElement("a");
try{P.href=K.url,P.href=P.href,K.crossDomain=bd.protocol+"//"+bd.host!=P.protocol+"//"+P.host
}catch(d){K.crossDomain=!0
}}if(K.data&&K.processData&&"string"!=typeof K.data&&(K.data=bx.param(K.data,K.traditional)),aV(cu,K,V,r),O){return r
}N=bx.event&&K.global,N&&0===bx.active++&&bx.event.trigger("ajaxStart"),K.type=K.type.toUpperCase(),K.hasContent=!cN.test(K.type),T=K.url.replace(aJ,""),K.hasContent?K.data&&K.processData&&0===(K.contentType||"").indexOf("application/x-www-form-urlencoded")&&(K.data=K.data.replace(aR,"+")):(L=K.url.slice(T.length),K.data&&(T+=(ay.test(T)?"&":"?")+K.data,delete K.data),K.cache===!1&&(T=T.replace(aB,"$1"),L=(ay.test(T)?"&":"?")+"_="+aH+++L),K.url=T+L),K.ifModified&&(bx.lastModified[T]&&r.setRequestHeader("If-Modified-Since",bx.lastModified[T]),bx.etag[T]&&r.setRequestHeader("If-None-Match",bx.etag[T])),(K.data&&K.hasContent&&K.contentType!==!1||V.contentType)&&r.setRequestHeader("Content-Type",K.contentType),r.setRequestHeader("Accept",K.dataTypes[0]&&K.accepts[K.dataTypes[0]]?K.accepts[K.dataTypes[0]]+("*"!==K.dataTypes[0]?", "+bk+"; q=0.01":""):K.accepts["*"]);
for(M in K.headers){r.setRequestHeader(M,K.headers[M])
}if(K.beforeSend&&(K.beforeSend.call(J,r,K)===!1||O)){return r.abort()
}if(B="abort",F.add(K.complete),r.done(K.success),r.fail(K.error),U=aV(bT,K,V,r)){if(r.readyState=1,N&&H.trigger("ajaxSend",[r,K]),O){return r
}K.async&&K.timeout>0&&(Q=bR.setTimeout(function(){r.abort("timeout")
},K.timeout));
try{O=!1,U.send(D,I)
}catch(d){if(O){throw d
}I(-1,d)
}}else{I(-1,"No Transport")
}function I(o,l,k,i){var g,f,e,t,q,p=l;
O||(O=!0,Q&&bR.clearTimeout(Q),U=void 0,S=i||"",r.readyState=o>0?4:0,g=o>=200&&o<300||304===o,k&&(t=aF(K,r,k)),t=aw(K,t,r,g),g?(K.ifModified&&(q=r.getResponseHeader("Last-Modified"),q&&(bx.lastModified[T]=q),q=r.getResponseHeader("etag"),q&&(bx.etag[T]=q)),204===o||"HEAD"===K.type?p="nocontent":304===o?p="notmodified":(p=t.state,f=t.data,e=t.error,g=!e)):(e=p,!o&&p||(p="error",o<0&&(o=0))),r.status=o,r.statusText=(l||p)+"",g?G.resolveWith(J,[f,p,r]):G.rejectWith(J,[r,p,e]),r.statusCode(E),E=void 0,N&&H.trigger(g?"ajaxSuccess":"ajaxError",[r,K,g?f:e]),F.fireWith(J,[r,p]),N&&(H.trigger("ajaxComplete",[r,K]),--bx.active||bx.event.trigger("ajaxStop")))
}return r
},getJSON:function(e,d,f){return bx.get(e,d,f,"json")
},getScript:function(d,c){return bx.get(d,void 0,c,"script")
}}),bx.each(["get","post"],function(d,c){bx[c]=function(b,h,g,f){return bx.isFunction(h)&&(f=f||g,g=h,h=void 0),bx.ajax(bx.extend({url:b,type:c,dataType:f,data:h,success:g},bx.isPlainObject(b)&&b))
}
}),bx._evalUrl=function(b){return bx.ajax({url:b,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})
},bx.fn.extend({wrapAll:function(d){var c;
return this[0]&&(bx.isFunction(d)&&(d=d.call(this[0])),c=bx(d,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;
while(b.firstElementChild){b=b.firstElementChild
}return b
}).append(this)),this
},wrapInner:function(b){return bx.isFunction(b)?this.each(function(c){bx(this).wrapInner(b.call(this,c))
}):this.each(function(){var d=bx(this),e=d.contents();
e.length?e.wrapAll(b):d.append(b)
})
},wrap:function(d){var c=bx.isFunction(d);
return this.each(function(b){bx(this).wrapAll(c?d.call(this,b):d)
})
},unwrap:function(b){return this.parent(b).not("body").each(function(){bx(this).replaceWith(this.childNodes)
}),this
}}),bx.expr.pseudos.hidden=function(b){return !bx.expr.pseudos.visible(b)
},bx.expr.pseudos.visible=function(b){return !!(b.offsetWidth||b.offsetHeight||b.getClientRects().length)
},bx.ajaxSettings.xhr=function(){try{return new bR.XMLHttpRequest
}catch(c){}};
var an={0:200,1223:204},ae=bx.ajaxSettings.xhr();
bB.cors=!!ae&&"withCredentials" in ae,bB.ajax=ae=!!ae,bx.ajaxTransport(function(e){var g,f;
if(bB.cors||ae&&!e.crossDomain){return{send:function(k,j){var d,c=e.xhr();
if(c.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields){for(d in e.xhrFields){c[d]=e.xhrFields[d]
}}e.mimeType&&c.overrideMimeType&&c.overrideMimeType(e.mimeType),e.crossDomain||k["X-Requested-With"]||(k["X-Requested-With"]="XMLHttpRequest");
for(d in k){c.setRequestHeader(d,k[d])
}g=function(h){return function(){g&&(g=f=c.onload=c.onerror=c.onabort=c.onreadystatechange=null,"abort"===h?c.abort():"error"===h?"number"!=typeof c.status?j(0,"error"):j(c.status,c.statusText):j(an[c.status]||c.status,c.statusText,"text"!==(c.responseType||"text")||"string"!=typeof c.responseText?{binary:c.response}:{text:c.responseText},c.getAllResponseHeaders()))
}
},c.onload=g(),f=c.onerror=g("error"),void 0!==c.onabort?c.onabort=f:c.onreadystatechange=function(){4===c.readyState&&bR.setTimeout(function(){g&&f()
})
},g=g("abort");
try{c.send(e.hasContent&&e.data||null)
}catch(b){if(g){throw b
}}},abort:function(){g&&g()
}}
}}),bx.ajaxPrefilter(function(b){b.crossDomain&&(b.contents.script=!1)
}),bx.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(b){return bx.globalEval(b),b
}}}),bx.ajaxPrefilter("script",function(b){void 0===b.cache&&(b.cache=!1),b.crossDomain&&(b.type="GET")
}),bx.ajaxTransport("script",function(e){if(e.crossDomain){var d,f;
return{send:function(c,b){d=bx("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",f=function(g){d.remove(),f=null,g&&b("error"===g.type?404:200,g.type)
}),bO.head.appendChild(d[0])
},abort:function(){f&&f()
}}
}});
var cJ=[],cy=/(=)\?(?=&|$)|\?\?/;
bx.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var b=cJ.pop()||bx.expando+"_"+aH++;
return this[b]=!0,b
}}),bx.ajaxPrefilter("json jsonp",function(i,p,o){var m,l,k,j=i.jsonp!==!1&&(cy.test(i.url)?"url":"string"==typeof i.data&&0===(i.contentType||"").indexOf("application/x-www-form-urlencoded")&&cy.test(i.data)&&"data");
if(j||"jsonp"===i.dataTypes[0]){return m=i.jsonpCallback=bx.isFunction(i.jsonpCallback)?i.jsonpCallback():i.jsonpCallback,j?i[j]=i[j].replace(cy,"$1"+m):i.jsonp!==!1&&(i.url+=(ay.test(i.url)?"&":"?")+i.jsonp+"="+m),i.converters["script json"]=function(){return k||bx.error(m+" was not called"),k[0]
},i.dataTypes[0]="json",l=bR[m],bR[m]=function(){k=arguments
},o.always(function(){void 0===l?bx(bR).removeProp(m):bR[m]=l,i[m]&&(i.jsonpCallback=p.jsonpCallback,cJ.push(m)),k&&bx.isFunction(l)&&l(k[0]),k=l=void 0
}),"script"
}}),bB.createHTMLDocument=function(){var b=bO.implementation.createHTMLDocument("").body;
return b.innerHTML="<form></form><form></form>",2===b.childNodes.length
}(),bx.parseHTML=function(h,d,l){if("string"!=typeof h){return[]
}"boolean"==typeof d&&(l=d,d=!1);
var k,j,i;
return d||(bB.createHTMLDocument?(d=bO.implementation.createHTMLDocument(""),k=d.createElement("base"),k.href=bO.location.href,d.head.appendChild(k)):d=bO),j=cq.exec(h),i=!l&&[],j?[d.createElement(j[1])]:(j=bg([h],d,i),i&&i.length&&bx(i).remove(),bx.merge([],j.childNodes))
},bx.fn.load=function(j,i,q){var p,o,m,l=this,k=j.indexOf(" ");
return k>-1&&(p=bm(j.slice(k)),j=j.slice(0,k)),bx.isFunction(i)?(q=i,i=void 0):i&&"object"==typeof i&&(o="POST"),l.length>0&&bx.ajax({url:j,type:o||"GET",dataType:"html",data:i}).done(function(b){m=arguments,l.html(p?bx("<div>").append(bx.parseHTML(b)).find(p):b)
}).always(q&&function(d,c){l.each(function(){q.apply(this,m||[d.responseText,c,d])
})
}),this
},bx.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(d,c){bx.fn[c]=function(b){return this.on(c,b)
}
}),bx.expr.pseudos.animated=function(b){return bx.grep(bx.timers,function(c){return b===c.elem
}).length
},bx.offset={setOffset:function(B,A,z){var y,x,w,v,u,t,r,q=bx.css(B,"position"),p=bx(B),o={};
"static"===q&&(B.style.position="relative"),u=p.offset(),w=bx.css(B,"top"),t=bx.css(B,"left"),r=("absolute"===q||"fixed"===q)&&(w+t).indexOf("auto")>-1,r?(y=p.position(),v=y.top,x=y.left):(v=parseFloat(w)||0,x=parseFloat(t)||0),bx.isFunction(A)&&(A=A.call(B,z,bx.extend({},u))),null!=A.top&&(o.top=A.top-u.top+v),null!=A.left&&(o.left=A.left-u.left+x),"using" in A?A.using.call(B,o):p.css(o)
}},bx.fn.extend({offset:function(h){if(arguments.length){return void 0===h?this:this.each(function(c){bx.offset.setOffset(this,h,c)
})
}var g,l,k,j,i=this[0];
if(i){return i.getClientRects().length?(k=i.getBoundingClientRect(),g=i.ownerDocument,l=g.documentElement,j=g.defaultView,{top:k.top+j.pageYOffset-l.clientTop,left:k.left+j.pageXOffset-l.clientLeft}):{top:0,left:0}
}},position:function(){if(this[0]){var f,e,h=this[0],g={top:0,left:0};
return"fixed"===bx.css(h,"position")?e=h.getBoundingClientRect():(f=this.offsetParent(),e=this.offset(),cr(f[0],"html")||(g=f.offset()),g={top:g.top+bx.css(f[0],"borderTopWidth",!0),left:g.left+bx.css(f[0],"borderLeftWidth",!0)}),{top:e.top-g.top-bx.css(h,"marginTop",!0),left:e.left-g.left-bx.css(h,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){var b=this.offsetParent;
while(b&&"static"===bx.css(b,"position")){b=b.offsetParent
}return b||a7
})
}}),bx.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,d){var f="pageYOffset"===d;
bx.fn[e]=function(b){return b3(this,function(c,i,h){var g;
return bx.isWindow(c)?g=c:9===c.nodeType&&(g=c.defaultView),void 0===h?g?g[d]:c[i]:void (g?g.scrollTo(f?g.pageXOffset:h,f?h:g.pageYOffset):c[i]=h)
},e,b,arguments.length)
}
}),bx.each(["top","left"],function(d,c){bx.cssHooks[c]=aG(bB.pixelPosition,function(b,e){if(e){return e=aO(b,c),a5.test(e)?bx(b).position()[c]+"px":e
}})
}),bx.each({Height:"height",Width:"width"},function(d,c){bx.each({padding:"inner"+d,content:c,"":"outer"+d},function(e,b){bx.fn[b]=function(l,k){var j=arguments.length&&(e||"boolean"!=typeof l),i=e||(l===!0||k===!0?"margin":"border");
return b3(this,function(g,o,m){var h;
return bx.isWindow(g)?0===b.indexOf("outer")?g["inner"+d]:g.document.documentElement["client"+d]:9===g.nodeType?(h=g.documentElement,Math.max(g.body["scroll"+d],h["scroll"+d],g.body["offset"+d],h["offset"+d],h["client"+d])):void 0===m?bx.css(g,o,i):bx.style(g,o,m,i)
},c,j?l:void 0,j)
}
})
}),bx.fn.extend({bind:function(e,d,f){return this.on(e,null,d,f)
},unbind:function(d,c){return this.off(d,null,c)
},delegate:function(f,e,h,g){return this.on(e,f,h,g)
},undelegate:function(e,d,f){return 1===arguments.length?this.off(e,"**"):this.off(d,e||"**",f)
},holdReady:function(b){b?bx.readyWait++:bx.ready(!0)
}}),bx.isArray=Array.isArray,bx.parseJSON=JSON.parse,bx.nodeName=cr,"function"==typeof define&&define.amd&&define("jquery",[],function(){return bx
});
var b4=bR.jQuery,bw=bR.$;
return bx.noConflict=function(c){return bR.$===bx&&(bR.$=bw),c&&bR.jQuery===bx&&(bR.jQuery=b4),bx
},bQ||(bR.jQuery=bR.$=bx),bx
});
/*! jQuery UI - v1.12.1 - 2017-05-14
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(b){"function"==typeof define&&define.amd?define(["jquery"],b):b(jQuery)
})(function(k){function G(c){for(var d=c.css("visibility");
"inherit"===d;
){c=c.parent(),d=c.css("visibility")
}return"hidden"!==d
}function C(d){for(var f,c;
d.length&&d[0]!==document;
){if(f=d.css("position"),("absolute"===f||"relative"===f||"fixed"===f)&&(c=parseInt(d.css("zIndex"),10),!isNaN(c)&&0!==c)){return c
}d=d.parent()
}return 0
}function q(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},k.extend(this._defaults,this.regional[""]),this.regional.en=k.extend(!0,{},this.regional[""]),this.regional["en-US"]=k.extend(!0,{},this.regional.en),this.dpDiv=z(k("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function z(d){var c="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return d.on("mouseout",c,function(){k(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).removeClass("ui-datepicker-next-hover")
}).on("mouseover",c,y)
}function y(){k.datepicker._isDisabledDatepicker(x.inline?x.dpDiv.parent()[0]:x.input[0])||(k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),k(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&k(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&k(this).addClass("ui-datepicker-next-hover"))
}function J(f,c){k.extend(f,c);
for(var d in c){null==c[d]&&(f[d]=c[d])
}return f
}function w(c){return function(){var d=this.element.val();
c.apply(this,arguments),this._refresh(),d!==this.element.val()&&this._trigger("change")
}
}k.ui=k.ui||{},k.ui.version="1.12.1";
var D=0,B=Array.prototype.slice;
k.cleanData=function(c){return function(e){var f,h,g;
for(g=0;
null!=(h=e[g]);
g++){try{f=k._data(h,"events"),f&&f.remove&&k(h).triggerHandler("remove")
}catch(d){}}c(e)
}
}(k.cleanData),k.widget=function(t,m,v){var f,d,u,c={},p=t.split(".")[0];
t=t.split(".")[1];
var g=p+"-"+t;
return v||(v=m,m=k.Widget),k.isArray(v)&&(v=k.extend.apply(null,[{}].concat(v))),k.expr[":"][g.toLowerCase()]=function(h){return !!k.data(h,g)
},k[p]=k[p]||{},f=k[p][t],d=k[p][t]=function(h,i){return this._createWidget?(arguments.length&&this._createWidget(h,i),void 0):new d(h,i)
},k.extend(d,f,{version:v.version,_proto:k.extend({},v),_childConstructors:[]}),u=new m,u.options=k.widget.extend({},u.options),k.each(v,function(i,h){return k.isFunction(h)?(c[i]=function(){function e(){return m.prototype[i].apply(this,arguments)
}function l(o){return m.prototype[i].apply(this,o)
}return function(){var L,r=this._super,M=this._superApply;
return this._super=e,this._superApply=l,L=h.apply(this,arguments),this._super=r,this._superApply=M,L
}
}(),void 0):(c[i]=h,void 0)
}),d.prototype=k.widget.extend(u,{widgetEventPrefix:f?u.widgetEventPrefix||t:t},c,{constructor:d,namespace:p,widgetName:t,widgetFullName:g}),f?(k.each(f._childConstructors,function(o,h){var l=h.prototype;
k.widget(l.namespace+"."+l.widgetName,d,h._proto)
}),delete f._childConstructors):m._childConstructors.push(d),k.widget.bridge(t,d),d
},k.widget.extend=function(g){for(var d,f,l=B.call(arguments,1),h=0,c=l.length;
c>h;
h++){for(d in l[h]){f=l[h][d],l[h].hasOwnProperty(d)&&void 0!==f&&(g[d]=k.isPlainObject(f)?k.isPlainObject(g[d])?k.widget.extend({},g[d],f):k.widget.extend({},f):f)
}}return g
},k.widget.bridge=function(f,c){var d=c.prototype.widgetFullName||f;
k.fn[f]=function(i){var h="string"==typeof i,e=B.call(arguments,1),g=this;
return h?this.length||"instance"!==i?this.each(function(){var l,m=k.data(this,d);
return"instance"===i?(g=m,!1):m?k.isFunction(m[i])&&"_"!==i.charAt(0)?(l=m[i].apply(m,e),l!==m&&void 0!==l?(g=l&&l.jquery?g.pushStack(l.get()):l,!1):void 0):k.error("no such method '"+i+"' for "+f+" widget instance"):k.error("cannot call methods on "+f+" prior to initialization; attempted to call method '"+i+"'")
}):g=void 0:(e.length&&(i=k.widget.extend.apply(null,[i].concat(e))),this.each(function(){var l=k.data(this,d);
l?(l.option(i||{}),l._init&&l._init()):k.data(this,d,new c(i,this))
})),g
}
},k.Widget=function(){},k.Widget._childConstructors=[],k.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(d,c){c=k(c||this.defaultElement||this)[0],this.element=k(c),this.uuid=D++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=k(),this.hoverable=k(),this.focusable=k(),this.classesElementLookup={},c!==this&&(k.data(c,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===c&&this.destroy()
}}),this.document=k(c.style?c.ownerDocument:c.document||c),this.window=k(this.document[0].defaultView||this.document[0].parentWindow)),this.options=k.widget.extend({},this.options,this._getCreateOptions(),d),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:function(){return{}
},_getCreateEventData:k.noop,_create:k.noop,_init:k.noop,destroy:function(){var c=this;
this._destroy(),k.each(this.classesElementLookup,function(e,d){c._removeClass(d,e)
}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)
},_destroy:k.noop,widget:function(){return this.element
},option:function(g,d){var f,l,h,c=g;
if(0===arguments.length){return k.widget.extend({},this.options)
}if("string"==typeof g){if(c={},f=g.split("."),g=f.shift(),f.length){for(l=c[g]=k.widget.extend({},this.options[g]),h=0;
f.length-1>h;
h++){l[f[h]]=l[f[h]]||{},l=l[f[h]]
}if(g=f.pop(),1===arguments.length){return void 0===l[g]?null:l[g]
}l[g]=d
}else{if(1===arguments.length){return void 0===this.options[g]?null:this.options[g]
}c[g]=d
}}return this._setOptions(c),this
},_setOptions:function(c){var d;
for(d in c){this._setOption(d,c[d])
}return this
},_setOption:function(c,d){return"classes"===c&&this._setOptionClasses(d),this.options[c]=d,"disabled"===c&&this._setOptionDisabled(d),this
},_setOptionClasses:function(f){var c,d,g;
for(c in f){g=this.classesElementLookup[c],f[c]!==this.options.classes[c]&&g&&g.length&&(d=k(g.get()),this._removeClass(g,c),d.addClass(this._classes({element:d,keys:c,classes:f,add:!0})))
}},_setOptionDisabled:function(c){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!c),c&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_classes:function(f){function c(h,m){var e,l;
for(l=0;
h.length>l;
l++){e=g.classesElementLookup[h[l]]||k(),e=f.add?k(k.unique(e.get().concat(f.element.get()))):k(e.not(f.element).get()),g.classesElementLookup[h[l]]=e,d.push(h[l]),m&&f.classes[h[l]]&&d.push(f.classes[h[l]])
}}var d=[],g=this;
return f=k.extend({element:this.element,classes:this.options.classes||{}},f),this._on(f.element,{remove:"_untrackClassesElement"}),f.keys&&c(f.keys.match(/\S+/g)||[],!0),f.extra&&c(f.extra.match(/\S+/g)||[]),d.join(" ")
},_untrackClassesElement:function(d){var c=this;
k.each(c.classesElementLookup,function(e,f){-1!==k.inArray(d.target,f)&&(c.classesElementLookup[e]=k(f.not(d.target).get()))
})
},_removeClass:function(d,f,c){return this._toggleClass(d,f,c,!1)
},_addClass:function(d,f,c){return this._toggleClass(d,f,c,!0)
},_toggleClass:function(d,g,c,f){f="boolean"==typeof f?f:c;
var l="string"==typeof d||null===d,h={extra:l?g:c,keys:l?d:g,element:l?this.element:d,add:f};
return h.element.toggleClass(this._classes(h),f),this
},_on:function(f,c,d){var h,g=this;
"boolean"!=typeof f&&(d=c,c=f,f=!1),d?(c=h=k(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,h=this.widget()),k.each(d,function(o,i){function p(){return f||g.options.disabled!==!0&&!k(this).hasClass("ui-state-disabled")?("string"==typeof i?g[i]:i).apply(g,arguments):void 0
}"string"!=typeof i&&(p.guid=i.guid=i.guid||p.guid||k.guid++);
var m=o.match(/^([\w:-]*)\s*(.*)$/),e=m[1]+g.eventNamespace,t=m[2];
t?h.on(e,t,p):c.on(e,p)
})
},_off:function(d,c){c=(c||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,d.off(c).off(c),this.bindings=k(this.bindings.not(d).get()),this.focusable=k(this.focusable.not(d).get()),this.hoverable=k(this.hoverable.not(d).get())
},_delay:function(d,g){function c(){return("string"==typeof d?f[d]:d).apply(f,arguments)
}var f=this;
return setTimeout(c,g||0)
},_hoverable:function(c){this.hoverable=this.hoverable.add(c),this._on(c,{mouseenter:function(d){this._addClass(k(d.currentTarget),null,"ui-state-hover")
},mouseleave:function(d){this._removeClass(k(d.currentTarget),null,"ui-state-hover")
}})
},_focusable:function(c){this.focusable=this.focusable.add(c),this._on(c,{focusin:function(d){this._addClass(k(d.currentTarget),null,"ui-state-focus")
},focusout:function(d){this._removeClass(k(d.currentTarget),null,"ui-state-focus")
}})
},_trigger:function(g,d,f){var l,h,c=this.options[g];
if(f=f||{},d=k.Event(d),d.type=(g===this.widgetEventPrefix?g:this.widgetEventPrefix+g).toLowerCase(),d.target=this.element[0],h=d.originalEvent){for(l in h){l in d||(d[l]=h[l])
}}return this.element.trigger(d,f),!(k.isFunction(c)&&c.apply(this.element[0],[d].concat(f))===!1||d.isDefaultPrevented())
}},k.each({show:"fadeIn",hide:"fadeOut"},function(d,c){k.Widget.prototype["_"+d]=function(f,i,h){"string"==typeof i&&(i={effect:i});
var e,g=i?i===!0||"number"==typeof i?c:i.effect||c:d;
i=i||{},"number"==typeof i&&(i={duration:i}),e=!k.isEmptyObject(i),i.complete=h,i.delay&&f.delay(i.delay),e&&k.effects&&k.effects.effect[g]?f[d](i):g!==d&&f[g]?f[g](i.duration,i.easing,h):f.queue(function(l){k(this)[d](),h&&h.call(f[0]),l()
})
}
}),k.widget,function(){function L(d,h,c){return[parseFloat(d[0])*(P.test(d[0])?h/100:1),parseFloat(d[1])*(P.test(d[1])?c/100:1)]
}function t(d,c){return parseInt(k.css(d,c),10)||0
}function Q(d){var c=d[0];
return 9===c.nodeType?{width:d.width(),height:d.height(),offset:{top:0,left:0}}:k.isWindow(c)?{width:d.width(),height:d.height(),offset:{top:d.scrollTop(),left:d.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:d.outerWidth(),height:d.outerHeight(),offset:d.offset()}
}var m,g=Math.max,O=Math.abs,f=/left|center|right/,v=/top|center|bottom/,p=/[\+\-]\d+(\.[\d]+)?%?/,N=/^\w+/,P=/%$/,M=k.fn.position;
k.position={scrollbarWidth:function(){if(void 0!==m){return m
}var h,c,d=k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=d.children()[0];
return k("body").append(d),h=l.offsetWidth,d.css("overflow","scroll"),c=l.offsetWidth,h===c&&(c=d[0].clientWidth),d.remove(),m=h-c
},getScrollInfo:function(h){var c=h.isWindow||h.isDocument?"":h.element.css("overflow-x"),d=h.isWindow||h.isDocument?"":h.element.css("overflow-y"),r="scroll"===c||"auto"===c&&h.width<h.element[0].scrollWidth,l="scroll"===d||"auto"===d&&h.height<h.element[0].scrollHeight;
return{width:l?k.position.scrollbarWidth():0,height:r?k.position.scrollbarWidth():0}
},getWithinInfo:function(h){var c=k(h||window),d=k.isWindow(c[0]),r=!!c[0]&&9===c[0].nodeType,l=!d&&!r;
return{element:c,isWindow:d,isDocument:r,offset:l?k(h).offset():{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}
}},k.fn.position=function(d){if(!d||!d.of){return M.apply(this,arguments)
}d=k.extend({},d);
var U,c,l,i,e,S,T=k(d.of),r=k.position.getWithinInfo(d.within),o=k.position.getScrollInfo(r),R=(d.collision||"flip").split(" "),h={};
return S=Q(T),T[0].preventDefault&&(d.at="left top"),c=S.width,l=S.height,i=S.offset,e=k.extend({},i),k.each(["my","at"],function(){var V,W,u=(d[this]||"").split(" ");
1===u.length&&(u=f.test(u[0])?u.concat(["center"]):v.test(u[0])?["center"].concat(u):["center","center"]),u[0]=f.test(u[0])?u[0]:"center",u[1]=v.test(u[1])?u[1]:"center",V=p.exec(u[0]),W=p.exec(u[1]),h[this]=[V?V[0]:0,W?W[0]:0],d[this]=[N.exec(u[0])[0],N.exec(u[1])[0]]
}),1===R.length&&(R[1]=R[0]),"right"===d.at[0]?e.left+=c:"center"===d.at[0]&&(e.left+=c/2),"bottom"===d.at[1]?e.top+=l:"center"===d.at[1]&&(e.top+=l/2),U=L(h.at,c,l),e.left+=U[0],e.top+=U[1],this.each(function(){var ae,V,Y=k(this),X=Y.outerWidth(),aa=Y.outerHeight(),Z=t(this,"marginLeft"),ad=t(this,"marginTop"),ab=X+Z+t(this,"marginRight")+o.width,W=aa+ad+t(this,"marginBottom")+o.height,u=k.extend({},e),ac=L(h.my,Y.outerWidth(),Y.outerHeight());
"right"===d.my[0]?u.left-=X:"center"===d.my[0]&&(u.left-=X/2),"bottom"===d.my[1]?u.top-=aa:"center"===d.my[1]&&(u.top-=aa/2),u.left+=ac[0],u.top+=ac[1],ae={marginLeft:Z,marginTop:ad},k.each(["left","top"],function(ag,af){k.ui.position[R[ag]]&&k.ui.position[R[ag]][af](u,{targetWidth:c,targetHeight:l,elemWidth:X,elemHeight:aa,collisionPosition:ae,collisionWidth:ab,collisionHeight:W,offset:[U[0]+ac[0],U[1]+ac[1]],my:d.my,at:d.at,within:r,elem:Y})
}),d.using&&(V=function(ah){var ak=i.left-u.left,ag=ak+c-X,ai=i.top-u.top,aj=ai+l-aa,af={target:{element:T,left:i.left,top:i.top,width:c,height:l},element:{element:Y,left:u.left,top:u.top,width:X,height:aa},horizontal:0>ag?"left":ak>0?"right":"center",vertical:0>aj?"top":ai>0?"bottom":"middle"};
X>c&&c>O(ak+ag)&&(af.horizontal="center"),aa>l&&l>O(ai+aj)&&(af.vertical="middle"),af.important=g(O(ak),O(ag))>g(O(ai),O(aj))?"horizontal":"vertical",d.using.call(this,ah,af)
}),Y.offset(k.extend(u,{using:V}))
})
},k.ui.position={fit:{left:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollLeft:V.offset.left,T=V.width,c=U.left-S.collisionPosition.marginLeft,R=d-c,o=c+S.collisionWidth-T-d;
S.collisionWidth>T?R>0&&0>=o?(u=U.left+R+S.collisionWidth-T-d,U.left+=R-u):U.left=o>0&&0>=R?d:R>o?d+T-S.collisionWidth:d:R>0?U.left+=R:o>0?U.left-=o:U.left=g(U.left-c,U.left)
},top:function(U,S){var u,V=S.within,d=V.isWindow?V.scrollTop:V.offset.top,T=S.within.height,c=U.top-S.collisionPosition.marginTop,R=d-c,o=c+S.collisionHeight-T-d;
S.collisionHeight>T?R>0&&0>=o?(u=U.top+R+S.collisionHeight-T-d,U.top+=R-u):U.top=o>0&&0>=R?d:R>o?d+T-S.collisionHeight:d:R>0?U.top+=R:o>0?U.top-=o:U.top=g(U.top-c,U.top)
}},flip:{left:function(ad,Z){var W,ae,U=Z.within,T=U.offset.left+U.scrollLeft,R=U.width,X=U.isWindow?U.scrollLeft:U.offset.left,V=ad.left-Z.collisionPosition.marginLeft,ab=V-X,ac=V+Z.collisionWidth-R-X,aa="left"===Z.my[0]?-Z.elemWidth:"right"===Z.my[0]?Z.elemWidth:0,S="left"===Z.at[0]?Z.targetWidth:"right"===Z.at[0]?-Z.targetWidth:0,Y=-2*Z.offset[0];
0>ab?(W=ad.left+aa+S+Y+Z.collisionWidth-R-T,(0>W||O(ab)>W)&&(ad.left+=aa+S+Y)):ac>0&&(ae=ad.left-Z.collisionPosition.marginLeft+aa+S+Y-X,(ae>0||ac>O(ae))&&(ad.left+=aa+S+Y))
},top:function(ae,aa){var W,af,U=aa.within,T=U.offset.top+U.scrollTop,R=U.height,X=U.isWindow?U.scrollTop:U.offset.top,V=ae.top-aa.collisionPosition.marginTop,ac=V-X,ad=V+aa.collisionHeight-R-X,ab="top"===aa.my[1],S=ab?-aa.elemHeight:"bottom"===aa.my[1]?aa.elemHeight:0,Z="top"===aa.at[1]?aa.targetHeight:"bottom"===aa.at[1]?-aa.targetHeight:0,Y=-2*aa.offset[1];
0>ac?(af=ae.top+S+Z+Y+aa.collisionHeight-R-T,(0>af||O(ac)>af)&&(ae.top+=S+Z+Y)):ad>0&&(W=ae.top-aa.collisionPosition.marginTop+S+Z+Y-X,(W>0||ad>O(W))&&(ae.top+=S+Z+Y))
}},flipfit:{left:function(){k.ui.position.flip.left.apply(this,arguments),k.ui.position.fit.left.apply(this,arguments)
},top:function(){k.ui.position.flip.top.apply(this,arguments),k.ui.position.fit.top.apply(this,arguments)
}}}
}(),k.ui.position,k.extend(k.expr[":"],{data:k.expr.createPseudo?k.expr.createPseudo(function(c){return function(d){return !!k.data(d,c)
}
}):function(f,c,d){return !!k.data(f,d[3])
}}),k.fn.extend({disableSelection:function(){var c="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.on(c+".ui-disableSelection",function(d){d.preventDefault()
})
}
}(),enableSelection:function(){return this.off(".ui-disableSelection")
}}),k.ui.focusable=function(e,g){var t,p,d,m,f,c=e.nodeName.toLowerCase();
return"area"===c?(t=e.parentNode,p=t.name,e.href&&p&&"map"===t.nodeName.toLowerCase()?(d=k("img[usemap='#"+p+"']"),d.length>0&&d.is(":visible")):!1):(/^(input|select|textarea|button|object)$/.test(c)?(m=!e.disabled,m&&(f=k(e).closest("fieldset")[0],f&&(m=!f.disabled))):m="a"===c?e.href||g:g,m&&k(e).is(":visible")&&G(k(e)))
},k.extend(k.expr[":"],{focusable:function(c){return k.ui.focusable(c,null!=k.attr(c,"tabindex"))
}}),k.ui.focusable,k.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):k(this[0].form)
},k.ui.formResetMixin={_formResetHandler:function(){var c=k(this);
setTimeout(function(){var d=c.data("ui-form-reset-instances");
k.each(d,function(){this.refresh()
})
})
},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var c=this.form.data("ui-form-reset-instances")||[];
c.length||this.form.on("reset.ui-form-reset",this._formResetHandler),c.push(this),this.form.data("ui-form-reset-instances",c)
}},_unbindFormResetHandler:function(){if(this.form.length){var c=this.form.data("ui-form-reset-instances");
c.splice(k.inArray(this,c),1),c.length?this.form.data("ui-form-reset-instances",c):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
}}},"1.7"===k.fn.jquery.substring(0,3)&&(k.each(["Width","Height"],function(g,d){function f(r,m,p,t){return k.each(l,function(){m-=parseFloat(k.css(r,"padding"+this))||0,p&&(m-=parseFloat(k.css(r,"border"+this+"Width"))||0),t&&(m-=parseFloat(k.css(r,"margin"+this))||0)
}),m
}var l="Width"===d?["Left","Right"]:["Top","Bottom"],h=d.toLowerCase(),c={innerWidth:k.fn.innerWidth,innerHeight:k.fn.innerHeight,outerWidth:k.fn.outerWidth,outerHeight:k.fn.outerHeight};
k.fn["inner"+d]=function(i){return void 0===i?c["inner"+d].call(this):this.each(function(){k(this).css(h,f(this,i)+"px")
})
},k.fn["outer"+d]=function(i,m){return"number"!=typeof i?c["outer"+d].call(this,i):this.each(function(){k(this).css(h,f(this,i,!0,m)+"px")
})
}
}),k.fn.addBack=function(c){return this.add(null==c?this.prevObject:this.prevObject.filter(c))
}),k.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},k.ui.escapeSelector=function(){var c=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(d){return d.replace(c,"\\$1")
}
}(),k.fn.labels=function(){var f,c,d,h,g;
return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(h=this.eq(0).parents("label"),d=this.attr("id"),d&&(f=this.eq(0).parents().last(),g=f.add(f.length?f.siblings():this.siblings()),c="label[for='"+k.ui.escapeSelector(d)+"']",h=h.add(g.find(c).addBack(c))),this.pushStack(h))
},k.fn.scrollParent=function(f){var c=this.css("position"),d="absolute"===c,h=f?/(auto|scroll|hidden)/:/(auto|scroll)/,g=this.parents().filter(function(){var i=k(this);
return d&&"static"===i.css("position")?!1:h.test(i.css("overflow")+i.css("overflow-y")+i.css("overflow-x"))
}).eq(0);
return"fixed"!==c&&g.length?g:k(this[0].ownerDocument||document)
},k.extend(k.expr[":"],{tabbable:function(f){var c=k.attr(f,"tabindex"),d=null!=c;
return(!d||c>=0)&&k.ui.focusable(f,d)
}}),k.fn.extend({uniqueId:function(){var c=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++c)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&k(this).removeAttr("id")
})
}}),k.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var I=!1;
k(document).on("mouseup",function(){I=!1
}),k.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var c=this;
this.element.on("mousedown."+this.widgetName,function(d){return c._mouseDown(d)
}).on("click."+this.widgetName,function(d){return !0===k.data(d.target,c.widgetName+".preventClickEvent")?(k.removeData(d.target,c.widgetName+".preventClickEvent"),d.stopImmediatePropagation(),!1):void 0
}),this.started=!1
},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(f){if(!I){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(f),this._mouseDownEvent=f;
var c=this,d=1===f.which,g="string"==typeof this.options.cancel&&f.target.nodeName?k(f.target).closest(this.options.cancel).length:!1;
return d&&!g&&this._mouseCapture(f)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(f)&&this._mouseDelayMet(f)&&(this._mouseStarted=this._mouseStart(f)!==!1,!this._mouseStarted)?(f.preventDefault(),!0):(!0===k.data(f.target,this.widgetName+".preventClickEvent")&&k.removeData(f.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return c._mouseMove(e)
},this._mouseUpDelegate=function(e){return c._mouseUp(e)
},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),f.preventDefault(),I=!0,!0)):!0
}},_mouseMove:function(c){if(this._mouseMoved){if(k.ui.ie&&(!document.documentMode||9>document.documentMode)&&!c.button){return this._mouseUp(c)
}if(!c.which){if(c.originalEvent.altKey||c.originalEvent.ctrlKey||c.originalEvent.metaKey||c.originalEvent.shiftKey){this.ignoreMissingWhich=!0
}else{if(!this.ignoreMissingWhich){return this._mouseUp(c)
}}}}return(c.which||c.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(c),c.preventDefault()):(this._mouseDistanceMet(c)&&this._mouseDelayMet(c)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,c)!==!1,this._mouseStarted?this._mouseDrag(c):this._mouseUp(c)),!this._mouseStarted)
},_mouseUp:function(c){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,c.target===this._mouseDownEvent.target&&k.data(c.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(c)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,I=!1,c.preventDefault()
},_mouseDistanceMet:function(c){return Math.max(Math.abs(this._mouseDownEvent.pageX-c.pageX),Math.abs(this._mouseDownEvent.pageY-c.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}}),k.ui.plugin={add:function(f,c,d){var h,g=k.ui[f].prototype;
for(h in d){g.plugins[h]=g.plugins[h]||[],g.plugins[h].push([c,d[h]])
}},call:function(d,g,c,f){var l,h=d.plugins[g];
if(h&&(f||d.element[0].parentNode&&11!==d.element[0].parentNode.nodeType)){for(l=0;
h.length>l;
l++){d.options[h[l][0]]&&h[l][1].apply(d.element,c)
}}}},k.ui.safeActiveElement=function(d){var f;
try{f=d.activeElement
}catch(c){f=d.body
}return f||(f=d.body),f.nodeName||(f=d.body),f
},k.ui.safeBlur=function(c){c&&"body"!==c.nodeName.toLowerCase()&&k(c).trigger("blur")
},k.widget("ui.draggable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()
},_setOption:function(c,d){this._super(c,d),"handle"===c&&(this._removeHandleClassName(),this._setHandleClassName())
},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this._removeHandleClassName(),this._mouseDestroy(),void 0)
},_mouseCapture:function(d){var c=this.options;
return this.helper||c.disabled||k(d.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(d),this.handle?(this._blurActiveElement(d),this._blockFrames(c.iframeFix===!0?"iframe":c.iframeFix),!0):!1)
},_blockFrames:function(c){this.iframeBlocks=this.document.find(c).map(function(){var d=k(this);
return k("<div>").css("position","absolute").appendTo(d.parent()).outerWidth(d.outerWidth()).outerHeight(d.outerHeight()).offset(d.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_blurActiveElement:function(f){var c=k.ui.safeActiveElement(this.document[0]),d=k(f.target);
d.closest(c).length||k.ui.safeBlur(c)
},_mouseStart:function(d){var c=this.options;
return this.helper=this._createHelper(d),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),k.ui.ddmanager&&(k.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===k(this).css("position")
}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(d),this.originalPosition=this.position=this._generatePosition(d,!1),this.originalPageX=d.pageX,this.originalPageY=d.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this._setContainment(),this._trigger("start",d)===!1?(this._clear(),!1):(this._cacheHelperProportions(),k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,d),this._mouseDrag(d,!0),k.ui.ddmanager&&k.ui.ddmanager.dragStart(this,d),!0)
},_refreshOffsets:function(c){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:c.pageX-this.offset.left,top:c.pageY-this.offset.top}
},_mouseDrag:function(f,c){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(f,!0),this.positionAbs=this._convertPositionTo("absolute"),!c){var d=this._uiHash();
if(this._trigger("drag",f,d)===!1){return this._mouseUp(new k.Event("mouseup",f)),!1
}this.position=d.position
}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",k.ui.ddmanager&&k.ui.ddmanager.drag(this,f),!1
},_mouseStop:function(f){var c=this,d=!1;
return k.ui.ddmanager&&!this.options.dropBehaviour&&(d=k.ui.ddmanager.drop(this,f)),this.dropped&&(d=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!d||"valid"===this.options.revert&&d||this.options.revert===!0||k.isFunction(this.options.revert)&&this.options.revert.call(this.element,d)?k(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",f)!==!1&&c._clear()
}):this._trigger("stop",f)!==!1&&this._clear(),!1
},_mouseUp:function(c){return this._unblockFrames(),k.ui.ddmanager&&k.ui.ddmanager.dragStop(this,c),this.handleElement.is(c.target)&&this.element.trigger("focus"),k.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new k.Event("mouseup",{target:this.element[0]})):this._clear(),this
},_getHandle:function(c){return this.options.handle?!!k(c.target).closest(this.element.find(this.options.handle)).length:!0
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")
},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")
},_createHelper:function(f){var c=this.options,d=k.isFunction(c.helper),g=d?k(c.helper.apply(this.element[0],[f])):"clone"===c.helper?this.element.clone().removeAttr("id"):this.element;
return g.parents("body").length||g.appendTo("parent"===c.appendTo?this.element[0].parentNode:c.appendTo),d&&g[0]===this.element[0]&&this._setPositionRelative(),g[0]===this.element[0]||/(fixed|absolute)/.test(g.css("position"))||g.css("position","absolute"),g
},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
},_adjustOffsetFromHelper:function(c){"string"==typeof c&&(c=c.split(" ")),k.isArray(c)&&(c={left:+c[0],top:+c[1]||0}),"left" in c&&(this.offset.click.left=c.left+this.margins.left),"right" in c&&(this.offset.click.left=this.helperProportions.width-c.right+this.margins.left),"top" in c&&(this.offset.click.top=c.top+this.margins.top),"bottom" in c&&(this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top)
},_isRootNode:function(c){return/(html|body)/i.test(c.tagName)||c===this.document[0]
},_getParentOffset:function(){var d=this.offsetParent.offset(),c=this.document[0];
return"absolute"===this.cssPosition&&this.scrollParent[0]!==c&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(d.left+=this.scrollParent.scrollLeft(),d.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(d={top:0,left:0}),{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"!==this.cssPosition){return{top:0,left:0}
}var c=this.element.position(),d=this._isRootNode(this.scrollParent[0]);
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+(d?0:this.scrollParent.scrollTop()),left:c.left-(parseInt(this.helper.css("left"),10)||0)+(d?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f,c,d,h=this.options,g=this.document[0];
return this.relativeContainer=null,h.containment?"window"===h.containment?(this.containment=[k(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,k(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,k(window).scrollLeft()+k(window).width()-this.helperProportions.width-this.margins.left,k(window).scrollTop()+(k(window).height()||g.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===h.containment?(this.containment=[0,0,k(g).width()-this.helperProportions.width-this.margins.left,(k(g).height()||g.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):h.containment.constructor===Array?(this.containment=h.containment,void 0):("parent"===h.containment&&(h.containment=this.helper[0].parentNode),c=k(h.containment),d=c[0],d&&(f=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(d,g){g||(g=this.position);
var c="absolute"===d?1:-1,f=this._isRootNode(this.scrollParent[0]);
return{top:g.top+this.offset.relative.top*c+this.offset.parent.top*c-("fixed"===this.cssPosition?-this.offset.scroll.top:f?0:this.offset.scroll.top)*c,left:g.left+this.offset.relative.left*c+this.offset.parent.left*c-("fixed"===this.cssPosition?-this.offset.scroll.left:f?0:this.offset.scroll.left)*c}
},_generatePosition:function(L,u){var m,M,f,d,v=this.options,c=this._isRootNode(this.scrollParent[0]),p=L.pageX,g=L.pageY;
return c&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),u&&(this.containment&&(this.relativeContainer?(M=this.relativeContainer.offset(),m=[this.containment[0]+M.left,this.containment[1]+M.top,this.containment[2]+M.left,this.containment[3]+M.top]):m=this.containment,L.pageX-this.offset.click.left<m[0]&&(p=m[0]+this.offset.click.left),L.pageY-this.offset.click.top<m[1]&&(g=m[1]+this.offset.click.top),L.pageX-this.offset.click.left>m[2]&&(p=m[2]+this.offset.click.left),L.pageY-this.offset.click.top>m[3]&&(g=m[3]+this.offset.click.top)),v.grid&&(f=v.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/v.grid[1])*v.grid[1]:this.originalPageY,g=m?f-this.offset.click.top>=m[1]||f-this.offset.click.top>m[3]?f:f-this.offset.click.top>=m[1]?f-v.grid[1]:f+v.grid[1]:f,d=v.grid[0]?this.originalPageX+Math.round((p-this.originalPageX)/v.grid[0])*v.grid[0]:this.originalPageX,p=m?d-this.offset.click.left>=m[0]||d-this.offset.click.left>m[2]?d:d-this.offset.click.left>=m[0]?d-v.grid[0]:d+v.grid[0]:d),"y"===v.axis&&(p=this.originalPageX),"x"===v.axis&&(g=this.originalPageY)),{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)}
},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()
},_trigger:function(f,c,d){return d=d||this._uiHash(),k.ui.plugin.call(this,f,[c,d,this],!0),/^(drag|start|stop)/.test(f)&&(this.positionAbs=this._convertPositionTo("absolute"),d.offset=this.positionAbs),k.Widget.prototype._trigger.call(this,f,c,d)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),k.ui.plugin.add("draggable","connectToSortable",{start:function(f,c,d){var g=k.extend({},c,{item:d.element});
d.sortables=[],k(d.options.connectToSortable).each(function(){var e=k(this).sortable("instance");
e&&!e.options.disabled&&(d.sortables.push(e),e.refreshPositions(),e._trigger("activate",f,g))
})
},stop:function(f,c,d){var g=k.extend({},c,{item:d.element});
d.cancelHelperRemoval=!1,k.each(d.sortables,function(){var e=this;
e.isOver?(e.isOver=0,d.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(f),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",f,g))
})
},drag:function(f,c,d){k.each(d.sortables,function(){var g=!1,e=this;
e.positionAbs=d.positionAbs,e.helperProportions=d.helperProportions,e.offset.click=d.offset.click,e._intersectsWith(e.containerCache)&&(g=!0,k.each(d.sortables,function(){return this.positionAbs=d.positionAbs,this.helperProportions=d.helperProportions,this.offset.click=d.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&k.contains(e.element[0],this.element[0])&&(g=!1),g
})),g?(e.isOver||(e.isOver=1,d._parent=c.helper.parent(),e.currentItem=c.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return c.helper[0]
},f.target=e.currentItem[0],e._mouseCapture(f,!0),e._mouseStart(f,!0,!0),e.offset.click.top=d.offset.click.top,e.offset.click.left=d.offset.click.left,e.offset.parent.left-=d.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=d.offset.parent.top-e.offset.parent.top,d._trigger("toSortable",f),d.dropped=e.element,k.each(d.sortables,function(){this.refreshPositions()
}),d.currentItem=d.element,e.fromOutside=d),e.currentItem&&(e._mouseDrag(f),c.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",f,e._uiHash(e)),e._mouseStop(f,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),c.helper.appendTo(d._parent),d._refreshOffsets(f),c.position=d._generatePosition(f,!0),d._trigger("fromSortable",f),d.dropped=!1,k.each(d.sortables,function(){this.refreshPositions()
}))
})
}}),k.ui.plugin.add("draggable","cursor",{start:function(f,c,d){var h=k("body"),g=d.options;
h.css("cursor")&&(g._cursor=h.css("cursor")),h.css("cursor",g.cursor)
},stop:function(f,c,d){var g=d.options;
g._cursor&&k("body").css("cursor",g._cursor)
}}),k.ui.plugin.add("draggable","opacity",{start:function(f,c,d){var h=k(c.helper),g=d.options;
h.css("opacity")&&(g._opacity=h.css("opacity")),h.css("opacity",g.opacity)
},stop:function(f,c,d){var g=d.options;
g._opacity&&k(c.helper).css("opacity",g._opacity)
}}),k.ui.plugin.add("draggable","scroll",{start:function(d,f,c){c.scrollParentNotHidden||(c.scrollParentNotHidden=c.helper.scrollParent(!1)),c.scrollParentNotHidden[0]!==c.document[0]&&"HTML"!==c.scrollParentNotHidden[0].tagName&&(c.overflowOffset=c.scrollParentNotHidden.offset())
},drag:function(h,d,f){var m=f.options,l=!1,c=f.scrollParentNotHidden[0],g=f.document[0];
c!==g&&"HTML"!==c.tagName?(m.axis&&"x"===m.axis||(f.overflowOffset.top+c.offsetHeight-h.pageY<m.scrollSensitivity?c.scrollTop=l=c.scrollTop+m.scrollSpeed:h.pageY-f.overflowOffset.top<m.scrollSensitivity&&(c.scrollTop=l=c.scrollTop-m.scrollSpeed)),m.axis&&"y"===m.axis||(f.overflowOffset.left+c.offsetWidth-h.pageX<m.scrollSensitivity?c.scrollLeft=l=c.scrollLeft+m.scrollSpeed:h.pageX-f.overflowOffset.left<m.scrollSensitivity&&(c.scrollLeft=l=c.scrollLeft-m.scrollSpeed))):(m.axis&&"x"===m.axis||(h.pageY-k(g).scrollTop()<m.scrollSensitivity?l=k(g).scrollTop(k(g).scrollTop()-m.scrollSpeed):k(window).height()-(h.pageY-k(g).scrollTop())<m.scrollSensitivity&&(l=k(g).scrollTop(k(g).scrollTop()+m.scrollSpeed))),m.axis&&"y"===m.axis||(h.pageX-k(g).scrollLeft()<m.scrollSensitivity?l=k(g).scrollLeft(k(g).scrollLeft()-m.scrollSpeed):k(window).width()-(h.pageX-k(g).scrollLeft())<m.scrollSensitivity&&(l=k(g).scrollLeft(k(g).scrollLeft()+m.scrollSpeed)))),l!==!1&&k.ui.ddmanager&&!m.dropBehaviour&&k.ui.ddmanager.prepareOffsets(f,h)
}}),k.ui.plugin.add("draggable","snap",{start:function(f,c,d){var g=d.options;
d.snapElements=[],k(g.snap.constructor!==String?g.snap.items||":data(ui-draggable)":g.snap).each(function(){var l=k(this),h=l.offset();
this!==d.element[0]&&d.snapElements.push({item:this,width:l.outerWidth(),height:l.outerHeight(),top:h.top,left:h.left})
})
},drag:function(X,T,M){var Q,P,ab,N,U,S,Z,L,Y,O,W=M.options,V=W.snapTolerance,R=T.offset.left,ac=R+M.helperProportions.width,t=T.offset.top,aa=t+M.helperProportions.height;
for(Y=M.snapElements.length-1;
Y>=0;
Y--){U=M.snapElements[Y].left-M.margins.left,S=U+M.snapElements[Y].width,Z=M.snapElements[Y].top-M.margins.top,L=Z+M.snapElements[Y].height,U-V>ac||R>S+V||Z-V>aa||t>L+V||!k.contains(M.snapElements[Y].item.ownerDocument,M.snapElements[Y].item)?(M.snapElements[Y].snapping&&M.options.snap.release&&M.options.snap.release.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=!1):("inner"!==W.snapMode&&(Q=V>=Math.abs(Z-aa),P=V>=Math.abs(L-t),ab=V>=Math.abs(U-ac),N=V>=Math.abs(S-R),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z-M.helperProportions.height,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U-M.helperProportions.width}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S}).left)),O=Q||P||ab||N,"outer"!==W.snapMode&&(Q=V>=Math.abs(Z-t),P=V>=Math.abs(L-aa),ab=V>=Math.abs(U-R),N=V>=Math.abs(S-ac),Q&&(T.position.top=M._convertPositionTo("relative",{top:Z,left:0}).top),P&&(T.position.top=M._convertPositionTo("relative",{top:L-M.helperProportions.height,left:0}).top),ab&&(T.position.left=M._convertPositionTo("relative",{top:0,left:U}).left),N&&(T.position.left=M._convertPositionTo("relative",{top:0,left:S-M.helperProportions.width}).left)),!M.snapElements[Y].snapping&&(Q||P||ab||N||O)&&M.options.snap.snap&&M.options.snap.snap.call(M.element,X,k.extend(M._uiHash(),{snapItem:M.snapElements[Y].item})),M.snapElements[Y].snapping=Q||P||ab||N||O)
}}}),k.ui.plugin.add("draggable","stack",{start:function(g,d,f){var l,h=f.options,c=k.makeArray(k(h.stack)).sort(function(o,m){return(parseInt(k(o).css("zIndex"),10)||0)-(parseInt(k(m).css("zIndex"),10)||0)
});
c.length&&(l=parseInt(k(c[0]).css("zIndex"),10)||0,k(c).each(function(i){k(this).css("zIndex",l+i)
}),this.css("zIndex",l+c.length))
}}),k.ui.plugin.add("draggable","zIndex",{start:function(f,c,d){var h=k(c.helper),g=d.options;
h.css("zIndex")&&(g._zIndex=h.css("zIndex")),h.css("zIndex",g.zIndex)
},stop:function(f,c,d){var g=d.options;
g._zIndex&&k(c.helper).css("zIndex",g._zIndex)
}}),k.ui.draggable,k.widget("ui.droppable",{version:"1.12.1",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var f,c=this.options,d=c.accept;
this.isover=!1,this.isout=!0,this.accept=k.isFunction(d)?d:function(e){return e.is(d)
},this.proportions=function(){return arguments.length?(f=arguments[0],void 0):f?f:f={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
},this._addToManager(c.scope),c.addClasses&&this._addClass("ui-droppable")
},_addToManager:function(c){k.ui.ddmanager.droppables[c]=k.ui.ddmanager.droppables[c]||[],k.ui.ddmanager.droppables[c].push(this)
},_splice:function(c){for(var d=0;
c.length>d;
d++){c[d]===this&&c.splice(d,1)
}},_destroy:function(){var c=k.ui.ddmanager.droppables[this.options.scope];
this._splice(c)
},_setOption:function(f,c){if("accept"===f){this.accept=k.isFunction(c)?c:function(e){return e.is(c)
}
}else{if("scope"===f){var d=k.ui.ddmanager.droppables[this.options.scope];
this._splice(d),this._addToManager(c)
}}this._super(f,c)
},_activate:function(d){var c=k.ui.ddmanager.current;
this._addActiveClass(),c&&this._trigger("activate",d,this.ui(c))
},_deactivate:function(d){var c=k.ui.ddmanager.current;
this._removeActiveClass(),c&&this._trigger("deactivate",d,this.ui(c))
},_over:function(d){var c=k.ui.ddmanager.current;
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this._addHoverClass(),this._trigger("over",d,this.ui(c)))
},_out:function(d){var c=k.ui.ddmanager.current;
c&&(c.currentItem||c.element)[0]!==this.element[0]&&this.accept.call(this.element[0],c.currentItem||c.element)&&(this._removeHoverClass(),this._trigger("out",d,this.ui(c)))
},_drop:function(f,c){var d=c||k.ui.ddmanager.current,g=!1;
return d&&(d.currentItem||d.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=k(this).droppable("instance");
return e.options.greedy&&!e.options.disabled&&e.options.scope===d.options.scope&&e.accept.call(e.element[0],d.currentItem||d.element)&&j(d,k.extend(e,{offset:e.element.offset()}),e.options.tolerance,f)?(g=!0,!1):void 0
}),g?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",f,this.ui(d)),this.element):!1):!1
},ui:function(c){return{draggable:c.currentItem||c.element,helper:c.helper,position:c.position,offset:c.positionAbs}
},_addHoverClass:function(){this._addClass("ui-droppable-hover")
},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")
},_addActiveClass:function(){this._addClass("ui-droppable-active")
},_removeActiveClass:function(){this._removeClass("ui-droppable-active")
}});
var j=k.ui.intersect=function(){function c(f,g,d){return f>=g&&g+d>f
}return function(L,t,Q,m){if(!t.offset){return !1
}var g=(L.positionAbs||L.position.absolute).left+L.margins.left,O=(L.positionAbs||L.position.absolute).top+L.margins.top,f=g+L.helperProportions.width,v=O+L.helperProportions.height,p=t.offset.left,N=t.offset.top,P=p+t.proportions().width,M=N+t.proportions().height;
switch(Q){case"fit":return g>=p&&P>=f&&O>=N&&M>=v;
case"intersect":return g+L.helperProportions.width/2>p&&P>f-L.helperProportions.width/2&&O+L.helperProportions.height/2>N&&M>v-L.helperProportions.height/2;
case"pointer":return c(m.pageY,N,t.proportions().height)&&c(m.pageX,p,t.proportions().width);
case"touch":return(O>=N&&M>=O||v>=N&&M>=v||N>O&&v>M)&&(g>=p&&P>=g||f>=p&&P>=f||p>g&&f>P);
default:return !1
}}
}();
k.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(h,d){var f,m,l=k.ui.ddmanager.droppables[h.options.scope]||[],c=d?d.type:null,g=(h.currentItem||h.element).find(":data(ui-droppable)").addBack();
k:for(f=0;
l.length>f;
f++){if(!(l[f].options.disabled||h&&!l[f].accept.call(l[f].element[0],h.currentItem||h.element))){for(m=0;
g.length>m;
m++){if(g[m]===l[f].element[0]){l[f].proportions().height=0;
continue k
}}l[f].visible="none"!==l[f].element.css("display"),l[f].visible&&("mousedown"===c&&l[f]._activate.call(l[f],d),l[f].offset=l[f].element.offset(),l[f].proportions({width:l[f].element[0].offsetWidth,height:l[f].element[0].offsetHeight}))
}}},drop:function(f,c){var d=!1;
return k.each((k.ui.ddmanager.droppables[f.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&j(f,this,this.options.tolerance,c)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],f.currentItem||f.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c)))
}),d
},dragStart:function(d,c){d.element.parentsUntil("body").on("scroll.droppable",function(){d.options.refreshPositions||k.ui.ddmanager.prepareOffsets(d,c)
})
},drag:function(d,c){d.options.refreshPositions&&k.ui.ddmanager.prepareOffsets(d,c),k.each(k.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var f,i,h,e=j(d,this,this.options.tolerance,c),g=!e&&this.isover?"isout":e&&!this.isover?"isover":null;
g&&(this.options.greedy&&(i=this.options.scope,h=this.element.parents(":data(ui-droppable)").filter(function(){return k(this).droppable("instance").options.scope===i
}),h.length&&(f=k(h[0]).droppable("instance"),f.greedyChild="isover"===g)),f&&"isover"===g&&(f.isover=!1,f.isout=!0,f._out.call(f,c)),this[g]=!0,this["isout"===g?"isover":"isout"]=!1,this["isover"===g?"_over":"_out"].call(this,c),f&&"isout"===g&&(f.isout=!1,f.isover=!0,f._over.call(f,c)))
}})
},dragStop:function(d,c){d.element.parentsUntil("body").off("scroll.droppable"),d.options.refreshPositions||k.ui.ddmanager.prepareOffsets(d,c)
}},k.uiBackCompat!==!1&&k.widget("ui.droppable",k.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)
},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)
},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)
},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)
}}),k.ui.droppable,k.widget("ui.resizable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(c){return parseFloat(c)||0
},_isNumber:function(c){return !isNaN(parseFloat(c))
},_hasScroll:function(f,c){if("hidden"===k(f).css("overflow")){return !1
}var d=c&&"left"===c?"scrollLeft":"scrollTop",g=!1;
return f[d]>0?!0:(f[d]=1,g=f[d]>0,f[d]=0,g)
},_create:function(){var f,c=this.options,d=this;
this._addClass("ui-resizable"),k.extend(this,{_aspectRatio:!!c.aspectRatio,aspectRatio:c.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:c.helper||c.ghost||c.animate?c.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,f={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(f),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(f),this._proportionallyResize()),this._setupHandles(),c.autoHide&&k(this.element).on("mouseenter",function(){c.disabled||(d._removeClass("ui-resizable-autohide"),d._handles.show())
}).on("mouseleave",function(){c.disabled||d.resizing||(d._addClass("ui-resizable-autohide"),d._handles.hide())
}),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var d,c=function(f){k(f).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(c(this.element),d=this.element,this.originalElement.css({position:d.css("position"),width:d.outerWidth(),height:d.outerHeight(),top:d.css("top"),left:d.css("left")}).insertAfter(d),d.remove()),this.originalElement.css("resize",this.originalResizeStyle),c(this.originalElement),this
},_setOption:function(c,d){switch(this._super(c,d),c){case"handles":this._removeHandles(),this._setupHandles();
break;
default:}},_setupHandles:function(){var h,d,f,m,l,c=this.options,g=this;
if(this.handles=c.handles||(k(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=k(),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),f=this.handles.split(","),this.handles={},d=0;
f.length>d;
d++){h=k.trim(f[d]),m="ui-resizable-"+h,l=k("<div>"),this._addClass(l,"ui-resizable-handle "+m),l.css({zIndex:c.zIndex}),this.handles[h]=".ui-resizable-"+h,this.element.append(l)
}}this._renderAxis=function(t){var p,r,v,u;
t=t||this.element;
for(p in this.handles){this.handles[p].constructor===String?this.handles[p]=this.element.children(this.handles[p]).first().show():(this.handles[p].jquery||this.handles[p].nodeType)&&(this.handles[p]=k(this.handles[p]),this._on(this.handles[p],{mousedown:g._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(r=k(this.handles[p],this.element),u=/sw|ne|nw|se|n|s/.test(p)?r.outerHeight():r.outerWidth(),v=["padding",/ne|nw|n/.test(p)?"Top":/se|sw|s/.test(p)?"Bottom":/^e$/.test(p)?"Right":"Left"].join(""),t.css(v,u),this._proportionallyResize()),this._handles=this._handles.add(this.handles[p])
}},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){g.resizing||(this.className&&(l=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=l&&l[1]?l[1]:"se")
}),c.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))
},_removeHandles:function(){this._handles.remove()
},_mouseCapture:function(f){var c,d,g=!1;
for(c in this.handles){d=k(this.handles[c])[0],(d===f.target||k.contains(d,f.target))&&(g=!0)
}return !this.options.disabled&&g
},_mouseStart:function(g){var d,f,l,h=this.options,c=this.element;
return this.resizing=!0,this._renderProxy(),d=this._num(this.helper.css("left")),f=this._num(this.helper.css("top")),h.containment&&(d+=k(h.containment).scrollLeft()||0,f+=k(h.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:d,top:f},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:c.width(),height:c.height()},this.originalSize=this._helper?{width:c.outerWidth(),height:c.outerHeight()}:{width:c.width(),height:c.height()},this.sizeDiff={width:c.outerWidth()-c.width(),height:c.outerHeight()-c.height()},this.originalPosition={left:d,top:f},this.originalMousePosition={left:g.pageX,top:g.pageY},this.aspectRatio="number"==typeof h.aspectRatio?h.aspectRatio:this.originalSize.width/this.originalSize.height||1,l=k(".ui-resizable-"+this.axis).css("cursor"),k("body").css("cursor","auto"===l?this.axis+"-resize":l),this._addClass("ui-resizable-resizing"),this._propagate("start",g),!0
},_mouseDrag:function(m){var d,g,t=this.originalMousePosition,p=this.axis,c=m.pageX-t.left||0,l=m.pageY-t.top||0,f=this._change[p];
return this._updatePrevProperties(),f?(d=f.apply(this,[m,c,l]),this._updateVirtualBoundaries(m.shiftKey),(this._aspectRatio||m.shiftKey)&&(d=this._updateRatio(d,m)),d=this._respectSize(d,m),this._updateCache(d),this._propagate("resize",m),g=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),k.isEmptyObject(g)||(this._updatePrevProperties(),this._trigger("resize",m,this.ui()),this._applyChanges()),!1):!1
},_mouseStop:function(u){this.resizing=!1;
var p,M,g,f,L,d,t,m=this.options,v=this;
return this._helper&&(p=this._proportionallyResizeElements,M=p.length&&/textarea/i.test(p[0].nodeName),g=M&&this._hasScroll(p[0],"left")?0:v.sizeDiff.height,f=M?0:v.sizeDiff.width,L={width:v.helper.width()-f,height:v.helper.height()-g},d=parseFloat(v.element.css("left"))+(v.position.left-v.originalPosition.left)||null,t=parseFloat(v.element.css("top"))+(v.position.top-v.originalPosition.top)||null,m.animate||this.element.css(k.extend(L,{top:t,left:d})),v.helper.height(v.size.height),v.helper.width(v.size.width),this._helper&&!m.animate&&this._proportionallyResize()),k("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",u),this._helper&&this.helper.remove(),!1
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var c={};
return this.position.top!==this.prevPosition.top&&(c.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(c.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(c.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(c.height=this.size.height+"px"),this.helper.css(c),c
},_updateVirtualBoundaries:function(f){var h,d,g,m,l,c=this.options;
l={minWidth:this._isNumber(c.minWidth)?c.minWidth:0,maxWidth:this._isNumber(c.maxWidth)?c.maxWidth:1/0,minHeight:this._isNumber(c.minHeight)?c.minHeight:0,maxHeight:this._isNumber(c.maxHeight)?c.maxHeight:1/0},(this._aspectRatio||f)&&(h=l.minHeight*this.aspectRatio,g=l.minWidth/this.aspectRatio,d=l.maxHeight*this.aspectRatio,m=l.maxWidth/this.aspectRatio,h>l.minWidth&&(l.minWidth=h),g>l.minHeight&&(l.minHeight=g),l.maxWidth>d&&(l.maxWidth=d),l.maxHeight>m&&(l.maxHeight=m)),this._vBoundaries=l
},_updateCache:function(c){this.offset=this.helper.offset(),this._isNumber(c.left)&&(this.position.left=c.left),this._isNumber(c.top)&&(this.position.top=c.top),this._isNumber(c.height)&&(this.size.height=c.height),this._isNumber(c.width)&&(this.size.width=c.width)
},_updateRatio:function(d){var g=this.position,c=this.size,f=this.axis;
return this._isNumber(d.height)?d.width=d.height*this.aspectRatio:this._isNumber(d.width)&&(d.height=d.width/this.aspectRatio),"sw"===f&&(d.left=g.left+(c.width-d.width),d.top=null),"nw"===f&&(d.top=g.top+(c.height-d.height),d.left=g.left+(c.width-d.width)),d
},_respectSize:function(N){var v=this._vBoundaries,p=this.axis,O=this._isNumber(N.width)&&v.maxWidth&&v.maxWidth<N.width,g=this._isNumber(N.height)&&v.maxHeight&&v.maxHeight<N.height,f=this._isNumber(N.width)&&v.minWidth&&v.minWidth>N.width,M=this._isNumber(N.height)&&v.minHeight&&v.minHeight>N.height,d=this.originalPosition.left+this.originalSize.width,u=this.originalPosition.top+this.originalSize.height,m=/sw|nw|w/.test(p),L=/nw|ne|n/.test(p);
return f&&(N.width=v.minWidth),M&&(N.height=v.minHeight),O&&(N.width=v.maxWidth),g&&(N.height=v.maxHeight),f&&m&&(N.left=d-v.minWidth),O&&m&&(N.left=d-v.maxWidth),M&&L&&(N.top=u-v.minHeight),g&&L&&(N.top=u-v.maxHeight),N.width||N.height||N.left||!N.top?N.width||N.height||N.top||!N.left||(N.left=null):N.top=null,N
},_getPaddingPlusBorderDimensions:function(d){for(var g=0,c=[],f=[d.css("borderTopWidth"),d.css("borderRightWidth"),d.css("borderBottomWidth"),d.css("borderLeftWidth")],h=[d.css("paddingTop"),d.css("paddingRight"),d.css("paddingBottom"),d.css("paddingLeft")];
4>g;
g++){c[g]=parseFloat(f[g])||0,c[g]+=parseFloat(h[g])||0
}return{height:c[0]+c[2],width:c[1]+c[3]}
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var d,f=0,c=this.helper||this.element;
this._proportionallyResizeElements.length>f;
f++){d=this._proportionallyResizeElements[f],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(d)),d.css({height:c.height()-this.outerDimensions.height||0,width:c.width()-this.outerDimensions.width||0})
}}},_renderProxy:function(){var d=this.element,c=this.options;
this.elementOffset=d.offset(),this._helper?(this.helper=this.helper||k("<div style='overflow:hidden;'></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++c.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(c,d){return{width:this.originalSize.width+d}
},w:function(d,g){var c=this.originalSize,f=this.originalPosition;
return{left:f.left+g,width:c.width-g}
},n:function(d,g,c){var f=this.originalSize,h=this.originalPosition;
return{top:h.top+c,height:f.height-c}
},s:function(d,f,c){return{height:this.originalSize.height+c}
},se:function(f,c,d){return k.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,c,d]))
},sw:function(f,c,d){return k.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,c,d]))
},ne:function(f,c,d){return k.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,c,d]))
},nw:function(f,c,d){return k.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,c,d]))
}},_propagate:function(d,c){k.ui.plugin.call(this,d,[c,this.ui()]),"resize"!==d&&this._trigger(d,c,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),k.ui.plugin.add("resizable","animate",{stop:function(u){var p=k(this).resizable("instance"),M=p.options,g=p._proportionallyResizeElements,f=g.length&&/textarea/i.test(g[0].nodeName),L=f&&p._hasScroll(g[0],"left")?0:p.sizeDiff.height,d=f?0:p.sizeDiff.width,t={width:p.size.width-d,height:p.size.height-L},m=parseFloat(p.element.css("left"))+(p.position.left-p.originalPosition.left)||null,v=parseFloat(p.element.css("top"))+(p.position.top-p.originalPosition.top)||null;
p.element.animate(k.extend(t,v&&m?{top:v,left:m}:{}),{duration:M.animateDuration,easing:M.animateEasing,step:function(){var c={width:parseFloat(p.element.css("width")),height:parseFloat(p.element.css("height")),top:parseFloat(p.element.css("top")),left:parseFloat(p.element.css("left"))};
g&&g.length&&k(g[0]).css({width:c.width,height:c.height}),p._updateCache(c),p._propagate("resize",u)
}})
}}),k.ui.plugin.add("resizable","containment",{start:function(){var L,t,Q,m,g,O,f,v=k(this).resizable("instance"),p=v.options,N=v.element,P=p.containment,M=P instanceof k?P.get(0):/parent/.test(P)?N.parent().get(0):P;
M&&(v.containerElement=k(M),/document/.test(P)||P===document?(v.containerOffset={left:0,top:0},v.containerPosition={left:0,top:0},v.parentData={element:k(document),left:0,top:0,width:k(document).width(),height:k(document).height()||document.body.parentNode.scrollHeight}):(L=k(M),t=[],k(["Top","Right","Left","Bottom"]).each(function(c,d){t[c]=v._num(L.css("padding"+d))
}),v.containerOffset=L.offset(),v.containerPosition=L.position(),v.containerSize={height:L.innerHeight()-t[3],width:L.innerWidth()-t[1]},Q=v.containerOffset,m=v.containerSize.height,g=v.containerSize.width,O=v._hasScroll(M,"left")?M.scrollWidth:g,f=v._hasScroll(M)?M.scrollHeight:m,v.parentData={element:M,left:Q.left,top:Q.top,width:O,height:f}))
},resize:function(N){var L,S,t,m,Q=k(this).resizable("instance"),f=Q.options,M=Q.containerOffset,v=Q.position,P=Q._aspectRatio||N.shiftKey,R={top:0,left:0},O=Q.containerElement,g=!0;
O[0]!==document&&/static/.test(O.css("position"))&&(R=M),v.left<(Q._helper?M.left:0)&&(Q.size.width=Q.size.width+(Q._helper?Q.position.left-M.left:Q.position.left-R.left),P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1),Q.position.left=f.helper?M.left:0),v.top<(Q._helper?M.top:0)&&(Q.size.height=Q.size.height+(Q._helper?Q.position.top-M.top:Q.position.top),P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1),Q.position.top=Q._helper?M.top:0),t=Q.containerElement.get(0)===Q.element.parent().get(0),m=/relative|absolute/.test(Q.containerElement.css("position")),t&&m?(Q.offset.left=Q.parentData.left+Q.position.left,Q.offset.top=Q.parentData.top+Q.position.top):(Q.offset.left=Q.element.offset().left,Q.offset.top=Q.element.offset().top),L=Math.abs(Q.sizeDiff.width+(Q._helper?Q.offset.left-R.left:Q.offset.left-M.left)),S=Math.abs(Q.sizeDiff.height+(Q._helper?Q.offset.top-R.top:Q.offset.top-M.top)),L+Q.size.width>=Q.parentData.width&&(Q.size.width=Q.parentData.width-L,P&&(Q.size.height=Q.size.width/Q.aspectRatio,g=!1)),S+Q.size.height>=Q.parentData.height&&(Q.size.height=Q.parentData.height-S,P&&(Q.size.width=Q.size.height*Q.aspectRatio,g=!1)),g||(Q.position.left=Q.prevPosition.left,Q.position.top=Q.prevPosition.top,Q.size.width=Q.prevSize.width,Q.size.height=Q.prevSize.height)
},stop:function(){var t=k(this).resizable("instance"),m=t.options,v=t.containerOffset,f=t.containerPosition,d=t.containerElement,u=k(t.helper),c=u.offset(),p=u.outerWidth()-t.sizeDiff.width,g=u.outerHeight()-t.sizeDiff.height;
t._helper&&!m.animate&&/relative/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g}),t._helper&&!m.animate&&/static/.test(d.css("position"))&&k(this).css({left:c.left-f.left-v.left,width:p,height:g})
}}),k.ui.plugin.add("resizable","alsoResize",{start:function(){var d=k(this).resizable("instance"),c=d.options;
k(c.alsoResize).each(function(){var f=k(this);
f.data("ui-resizable-alsoresize",{width:parseFloat(f.width()),height:parseFloat(f.height()),left:parseFloat(f.css("left")),top:parseFloat(f.css("top"))})
})
},resize:function(h,d){var f=k(this).resizable("instance"),m=f.options,l=f.originalSize,c=f.originalPosition,g={height:f.size.height-l.height||0,width:f.size.width-l.width||0,top:f.position.top-c.top||0,left:f.position.left-c.left||0};
k(m.alsoResize).each(function(){var p=k(this),i=k(this).data("ui-resizable-alsoresize"),t={},r=p.parents(d.originalElement[0]).length?["width","height"]:["width","height","top","left"];
k.each(r,function(u,v){var o=(i[v]||0)+(g[v]||0);
o&&o>=0&&(t[v]=o||null)
}),p.css(t)
})
},stop:function(){k(this).removeData("ui-resizable-alsoresize")
}}),k.ui.plugin.add("resizable","ghost",{start:function(){var d=k(this).resizable("instance"),c=d.size;
d.ghost=d.originalElement.clone(),d.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}),d._addClass(d.ghost,"ui-resizable-ghost"),k.uiBackCompat!==!1&&"string"==typeof d.options.ghost&&d.ghost.addClass(this.options.ghost),d.ghost.appendTo(d.helper)
},resize:function(){var c=k(this).resizable("instance");
c.ghost&&c.ghost.css({position:"relative",height:c.size.height,width:c.size.width})
},stop:function(){var c=k(this).resizable("instance");
c.ghost&&c.helper&&c.helper.get(0).removeChild(c.ghost.get(0))
}}),k.ui.plugin.add("resizable","grid",{resize:function(){var X,T=k(this).resizable("instance"),M=T.options,Q=T.size,P=T.originalSize,aa=T.originalPosition,N=T.axis,U="number"==typeof M.grid?[M.grid,M.grid]:M.grid,S=U[0]||1,Z=U[1]||1,L=Math.round((Q.width-P.width)/S)*S,Y=Math.round((Q.height-P.height)/Z)*Z,O=P.width+L,W=P.height+Y,V=M.maxWidth&&O>M.maxWidth,R=M.maxHeight&&W>M.maxHeight,ab=M.minWidth&&M.minWidth>O,t=M.minHeight&&M.minHeight>W;
M.grid=U,ab&&(O+=S),t&&(W+=Z),V&&(O-=S),R&&(W-=Z),/^(se|s|e)$/.test(N)?(T.size.width=O,T.size.height=W):/^(ne)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.top=aa.top-Y):/^(sw)$/.test(N)?(T.size.width=O,T.size.height=W,T.position.left=aa.left-L):((0>=W-Z||0>=O-S)&&(X=T._getPaddingPlusBorderDimensions(this)),W-Z>0?(T.size.height=W,T.position.top=aa.top-Y):(W=Z-X.height,T.size.height=W,T.position.top=aa.top+P.height-W),O-S>0?(T.size.width=O,T.position.left=aa.left-L):(O=S-X.width,T.size.width=O,T.position.left=aa.left+P.width-O))
}}),k.ui.resizable,k.widget("ui.selectable",k.ui.mouse,{version:"1.12.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var c=this;
this._addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){c.elementPos=k(c.element[0]).offset(),c.selectees=k(c.options.filter,c.element[0]),c._addClass(c.selectees,"ui-selectee"),c.selectees.each(function(){var d=k(this),e=d.offset(),f={left:e.left-c.elementPos.left,top:e.top-c.elementPos.top};
k.data(this,"selectable-item",{element:this,$element:d,left:f.left,top:f.top,right:f.left+d.outerWidth(),bottom:f.top+d.outerHeight(),startselected:!1,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})
})
},this.refresh(),this._mouseInit(),this.helper=k("<div>"),this._addClass(this.helper,"ui-selectable-helper")
},_destroy:function(){this.selectees.removeData("selectable-item"),this._mouseDestroy()
},_mouseStart:function(f){var c=this,d=this.options;
this.opos=[f.pageX,f.pageY],this.elementPos=k(this.element[0]).offset(),this.options.disabled||(this.selectees=k(d.filter,this.element[0]),this._trigger("start",f),k(d.appendTo).append(this.helper),this.helper.css({left:f.pageX,top:f.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var e=k.data(this,"selectable-item");
e.startselected=!0,f.metaKey||f.ctrlKey||(c._removeClass(e.$element,"ui-selected"),e.selected=!1,c._addClass(e.$element,"ui-unselecting"),e.unselecting=!0,c._trigger("unselecting",f,{unselecting:e.element}))
}),k(f.target).parents().addBack().each(function(){var e,g=k.data(this,"selectable-item");
return g?(e=!f.metaKey&&!f.ctrlKey||!g.$element.hasClass("ui-selected"),c._removeClass(g.$element,e?"ui-unselecting":"ui-selected")._addClass(g.$element,e?"ui-selecting":"ui-unselecting"),g.unselecting=!e,g.selecting=e,g.selected=e,e?c._trigger("selecting",f,{selecting:g.element}):c._trigger("unselecting",f,{unselecting:g.element}),!1):void 0
}))
},_mouseDrag:function(m){if(this.dragged=!0,!this.options.disabled){var d,g=this,t=this.options,p=this.opos[0],c=this.opos[1],l=m.pageX,f=m.pageY;
return p>l&&(d=l,l=p,p=d),c>f&&(d=f,f=c,c=d),this.helper.css({left:p,top:c,width:l-p,height:f-c}),this.selectees.each(function(){var h=k.data(this,"selectable-item"),e=!1,o={};
h&&h.element!==g.element[0]&&(o.left=h.left+g.elementPos.left,o.right=h.right+g.elementPos.left,o.top=h.top+g.elementPos.top,o.bottom=h.bottom+g.elementPos.top,"touch"===t.tolerance?e=!(o.left>l||p>o.right||o.top>f||c>o.bottom):"fit"===t.tolerance&&(e=o.left>p&&l>o.right&&o.top>c&&f>o.bottom),e?(h.selected&&(g._removeClass(h.$element,"ui-selected"),h.selected=!1),h.unselecting&&(g._removeClass(h.$element,"ui-unselecting"),h.unselecting=!1),h.selecting||(g._addClass(h.$element,"ui-selecting"),h.selecting=!0,g._trigger("selecting",m,{selecting:h.element}))):(h.selecting&&((m.metaKey||m.ctrlKey)&&h.startselected?(g._removeClass(h.$element,"ui-selecting"),h.selecting=!1,g._addClass(h.$element,"ui-selected"),h.selected=!0):(g._removeClass(h.$element,"ui-selecting"),h.selecting=!1,h.startselected&&(g._addClass(h.$element,"ui-unselecting"),h.unselecting=!0),g._trigger("unselecting",m,{unselecting:h.element}))),h.selected&&(m.metaKey||m.ctrlKey||h.startselected||(g._removeClass(h.$element,"ui-selected"),h.selected=!1,g._addClass(h.$element,"ui-unselecting"),h.unselecting=!0,g._trigger("unselecting",m,{unselecting:h.element})))))
}),!1
}},_mouseStop:function(d){var c=this;
return this.dragged=!1,k(".ui-unselecting",this.element[0]).each(function(){var e=k.data(this,"selectable-item");
c._removeClass(e.$element,"ui-unselecting"),e.unselecting=!1,e.startselected=!1,c._trigger("unselected",d,{unselected:e.element})
}),k(".ui-selecting",this.element[0]).each(function(){var e=k.data(this,"selectable-item");
c._removeClass(e.$element,"ui-selecting")._addClass(e.$element,"ui-selected"),e.selecting=!1,e.selected=!0,e.startselected=!0,c._trigger("selected",d,{selected:e.element})
}),this._trigger("stop",d),this.helper.remove(),!1
}}),k.widget("ui.sortable",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(d,f,c){return d>=f&&f+c>d
},_isFloating:function(c){return/left|right/.test(c.css("float"))||/inline|table-cell/.test(c.css("display"))
},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0
},_setOption:function(c,d){this._super(c,d),"handle"===c&&this._setHandleClassName()
},_setHandleClassName:function(){var c=this;
this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),k.each(this.items,function(){c._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")
})
},_destroy:function(){this._mouseDestroy();
for(var c=this.items.length-1;
c>=0;
c--){this.items[c].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(f,c){var d=null,h=!1,g=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(f),k(f.target).parents().each(function(){return k.data(this,g.widgetName+"-item")===g?(d=k(this),!1):void 0
}),k.data(f.target,g.widgetName+"-item")===g&&(d=k(f.target)),d?!this.options.handle||c||(k(this.options.handle,d).find("*").addBack().each(function(){this===f.target&&(h=!0)
}),h)?(this.currentItem=d,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(g,d,f){var l,h,c=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(g),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},k.extend(this.offset,{click:{left:g.pageX-this.offset.left,top:g.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(g),this.originalPageX=g.pageX,this.originalPageY=g.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),c.containment&&this._setContainment(),c.cursor&&"auto"!==c.cursor&&(h=this.document.find("body"),this.storedCursor=h.css("cursor"),h.css("cursor",c.cursor),this.storedStylesheet=k("<style>*{ cursor: "+c.cursor+" !important; }</style>").appendTo(h)),c.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",c.opacity)),c.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",c.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",g,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!f){for(l=this.containers.length-1;
l>=0;
l--){this.containers[l]._trigger("activate",g,this._uiHash(this))
}}return k.ui.ddmanager&&(k.ui.ddmanager.current=this),k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,g),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(g),!0
},_mouseDrag:function(h){var d,f,m,l,c=this.options,g=!1;
for(this.position=this._generatePosition(h),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-h.pageY<c.scrollSensitivity?this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop+c.scrollSpeed:h.pageY-this.overflowOffset.top<c.scrollSensitivity&&(this.scrollParent[0].scrollTop=g=this.scrollParent[0].scrollTop-c.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-h.pageX<c.scrollSensitivity?this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft+c.scrollSpeed:h.pageX-this.overflowOffset.left<c.scrollSensitivity&&(this.scrollParent[0].scrollLeft=g=this.scrollParent[0].scrollLeft-c.scrollSpeed)):(h.pageY-this.document.scrollTop()<c.scrollSensitivity?g=this.document.scrollTop(this.document.scrollTop()-c.scrollSpeed):this.window.height()-(h.pageY-this.document.scrollTop())<c.scrollSensitivity&&(g=this.document.scrollTop(this.document.scrollTop()+c.scrollSpeed)),h.pageX-this.document.scrollLeft()<c.scrollSensitivity?g=this.document.scrollLeft(this.document.scrollLeft()-c.scrollSpeed):this.window.width()-(h.pageX-this.document.scrollLeft())<c.scrollSensitivity&&(g=this.document.scrollLeft(this.document.scrollLeft()+c.scrollSpeed))),g!==!1&&k.ui.ddmanager&&!c.dropBehaviour&&k.ui.ddmanager.prepareOffsets(this,h)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),d=this.items.length-1;
d>=0;
d--){if(f=this.items[d],m=f.item[0],l=this._intersectsWithPointer(f),l&&f.instance===this.currentContainer&&m!==this.currentItem[0]&&this.placeholder[1===l?"next":"prev"]()[0]!==m&&!k.contains(this.placeholder[0],m)&&("semi-dynamic"===this.options.type?!k.contains(this.element[0],m):!0)){if(this.direction=1===l?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(f)){break
}this._rearrange(h,f),this._trigger("change",h,this._uiHash());
break
}}return this._contactContainers(h),k.ui.ddmanager&&k.ui.ddmanager.drag(this,h),this._trigger("sort",h,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(g,d){if(g){if(k.ui.ddmanager&&!this.options.dropBehaviour&&k.ui.ddmanager.drop(this,g),this.options.revert){var f=this,l=this.placeholder.offset(),h=this.options.axis,c={};
h&&"x"!==h||(c.left=l.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),h&&"y"!==h||(c.top=l.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,k(this.helper).animate(c,parseInt(this.options.revert,10)||500,function(){f._clear(g)
})
}else{this._clear(g,d)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp(new k.Event("mouseup",{target:null})),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show();
for(var c=this.containers.length-1;
c>=0;
c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this)),this.containers[c].containerCache.over&&(this.containers[c]._trigger("out",null,this._uiHash(this)),this.containers[c].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),k.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?k(this.domPosition.prev).after(this.currentItem):k(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(f){var c=this._getItemsAsjQuery(f&&f.connected),d=[];
return f=f||{},k(c).each(function(){var e=(k(f.item||this).attr(f.attribute||"id")||"").match(f.expression||/(.+)[\-=_](.+)/);
e&&d.push((f.key||e[1]+"[]")+"="+(f.key&&f.expression?e[1]:e[2]))
}),!d.length&&f.key&&d.push(f.key+"="),d.join("&")
},toArray:function(f){var c=this._getItemsAsjQuery(f&&f.connected),d=[];
return f=f||{},c.each(function(){d.push(k(f.item||this).attr(f.attribute||"id")||"")
}),d
},_intersectsWith:function(T){var O=this.positionAbs.left,M=O+this.helperProportions.width,U=this.positionAbs.top,v=U+this.helperProportions.height,m=T.left,R=m+T.width,f=T.top,N=f+T.height,L=this.offset.click.top,Q=this.offset.click.left,S="x"===this.options.axis||U+L>f&&N>U+L,P="y"===this.options.axis||O+Q>m&&R>O+Q,g=S&&P;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>T[this.floating?"width":"height"]?g:O+this.helperProportions.width/2>m&&R>M-this.helperProportions.width/2&&U+this.helperProportions.height/2>f&&N>v-this.helperProportions.height/2
},_intersectsWithPointer:function(d){var g,c,f="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),l="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),h=f&&l;
return h?(g=this._getDragVerticalDirection(),c=this._getDragHorizontalDirection(),this.floating?"right"===c||"down"===g?2:1:g&&("down"===g?2:1)):!1
},_intersectsWithSides:function(d){var g=this._isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height),c=this._isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width),f=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();
return this.floating&&h?"right"===h&&c||"left"===h&&!c:f&&("down"===f&&g||"up"===f&&!g)
},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==c&&(c>0?"down":"up")
},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==c&&(c>0?"right":"left")
},refresh:function(c){return this._refreshItems(c),this._setHandleClassName(),this.refreshPositions(),this
},_connectWith:function(){var c=this.options;
return c.connectWith.constructor===String?[c.connectWith]:c.connectWith
},_getItemsAsjQuery:function(t){function m(){c.push(this)
}var v,f,d,u,c=[],p=[],g=this._connectWith();
if(g&&t){for(v=g.length-1;
v>=0;
v--){for(d=k(g[v],this.document[0]),f=d.length-1;
f>=0;
f--){u=k.data(d[f],this.widgetFullName),u&&u!==this&&!u.options.disabled&&p.push([k.isFunction(u.options.items)?u.options.items.call(u.element):k(u.options.items,u.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),u])
}}}for(p.push([k.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):k(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),v=p.length-1;
v>=0;
v--){p[v][0].each(m)
}return k(c)
},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=k.grep(this.items,function(e){for(var d=0;
c.length>d;
d++){if(c[d]===e.item[0]){return !1
}}return !0
})
},_refreshItems:function(L){this.items=[],this.containers=[this];
var t,Q,m,g,O,f,v,p,N=this.items,P=[[k.isFunction(this.options.items)?this.options.items.call(this.element[0],L,{item:this.currentItem}):k(this.options.items,this.element),this]],M=this._connectWith();
if(M&&this.ready){for(t=M.length-1;
t>=0;
t--){for(m=k(M[t],this.document[0]),Q=m.length-1;
Q>=0;
Q--){g=k.data(m[Q],this.widgetFullName),g&&g!==this&&!g.options.disabled&&(P.push([k.isFunction(g.options.items)?g.options.items.call(g.element[0],L,{item:this.currentItem}):k(g.options.items,g.element),g]),this.containers.push(g))
}}}for(t=P.length-1;
t>=0;
t--){for(O=P[t][1],f=P[t][0],Q=0,p=f.length;
p>Q;
Q++){v=k(f[Q]),v.data(this.widgetName+"-item",O),N.push({item:v,instance:O,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(f){this.floating=this.items.length?"x"===this.options.axis||this._isFloating(this.items[0].item):!1,this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var c,d,h,g;
for(c=this.items.length-1;
c>=0;
c--){d=this.items[c],d.instance!==this.currentContainer&&this.currentContainer&&d.item[0]!==this.currentItem[0]||(h=this.options.toleranceElement?k(this.options.toleranceElement,d.item):d.item,f||(d.width=h.outerWidth(),d.height=h.outerHeight()),g=h.offset(),d.left=g.left,d.top=g.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){g=this.containers[c].element.offset(),this.containers[c].containerCache.left=g.left,this.containers[c].containerCache.top=g.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(f){f=f||this;
var c,d=f.options;
d.placeholder&&d.placeholder.constructor!==String||(c=d.placeholder,d.placeholder={element:function(){var e=f.currentItem[0].nodeName.toLowerCase(),g=k("<"+e+">",f.document[0]);
return f._addClass(g,"ui-sortable-placeholder",c||f.currentItem[0].className)._removeClass(g,"ui-sortable-helper"),"tbody"===e?f._createTrPlaceholder(f.currentItem.find("tr").eq(0),k("<tr>",f.document[0]).appendTo(g)):"tr"===e?f._createTrPlaceholder(f.currentItem,g):"img"===e&&g.attr("src",f.currentItem.attr("src")),c||g.css("visibility","hidden"),g
},update:function(e,g){(!c||d.forcePlaceholderSize)&&(g.height()||g.height(f.currentItem.innerHeight()-parseInt(f.currentItem.css("paddingTop")||0,10)-parseInt(f.currentItem.css("paddingBottom")||0,10)),g.width()||g.width(f.currentItem.innerWidth()-parseInt(f.currentItem.css("paddingLeft")||0,10)-parseInt(f.currentItem.css("paddingRight")||0,10)))
}}),f.placeholder=k(d.placeholder.element.call(f.element,f.currentItem)),f.currentItem.after(f.placeholder),d.placeholder.update(f,f.placeholder)
},_createTrPlaceholder:function(f,c){var d=this;
f.children().each(function(){k("<td>&#160;</td>",d.document[0]).attr("colspan",k(this).attr("colspan")||1).appendTo(c)
})
},_contactContainers:function(N){var L,S,t,m,Q,f,M,v,P,R,O=null,g=null;
for(L=this.containers.length-1;
L>=0;
L--){if(!k.contains(this.currentItem[0],this.containers[L].element[0])){if(this._intersectsWith(this.containers[L].containerCache)){if(O&&k.contains(this.containers[L].element[0],O.element[0])){continue
}O=this.containers[L],g=L
}else{this.containers[L].containerCache.over&&(this.containers[L]._trigger("out",N,this._uiHash(this)),this.containers[L].containerCache.over=0)
}}}if(O){if(1===this.containers.length){this.containers[g].containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1)
}else{for(t=10000,m=null,P=O.floating||this._isFloating(this.currentItem),Q=P?"left":"top",f=P?"width":"height",R=P?"pageX":"pageY",S=this.items.length-1;
S>=0;
S--){k.contains(this.containers[g].element[0],this.items[S].item[0])&&this.items[S].item[0]!==this.currentItem[0]&&(M=this.items[S].item.offset()[Q],v=!1,N[R]-M>this.items[S][f]/2&&(v=!0),t>Math.abs(N[R]-M)&&(t=Math.abs(N[R]-M),m=this.items[S],this.direction=v?"up":"down"))
}if(!m&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[g]){return this.currentContainer.containerCache.over||(this.containers[g]._trigger("over",N,this._uiHash()),this.currentContainer.containerCache.over=1),void 0
}m?this._rearrange(N,m,null,!0):this._rearrange(N,null,this.containers[g].element,!0),this._trigger("change",N,this._uiHash()),this.containers[g]._trigger("change",N,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",N,this._uiHash(this)),this.containers[g].containerCache.over=1
}}},_createHelper:function(f){var c=this.options,d=k.isFunction(c.helper)?k(c.helper.apply(this.element[0],[f,this.currentItem])):"clone"===c.helper?this.currentItem.clone():this.currentItem;
return d.parents("body").length||k("parent"!==c.appendTo?c.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0]),d[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!d[0].style.width||c.forceHelperSize)&&d.width(this.currentItem.width()),(!d[0].style.height||c.forceHelperSize)&&d.height(this.currentItem.height()),d
},_adjustOffsetFromHelper:function(c){"string"==typeof c&&(c=c.split(" ")),k.isArray(c)&&(c={left:+c[0],top:+c[1]||0}),"left" in c&&(this.offset.click.left=c.left+this.margins.left),"right" in c&&(this.offset.click.left=this.helperProportions.width-c.right+this.margins.left),"top" in c&&(this.offset.click.top=c.top+this.margins.top),"bottom" in c&&(this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var c=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])&&(c.left+=this.scrollParent.scrollLeft(),c.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&k.ui.ie)&&(c={top:0,left:0}),{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var c=this.currentItem.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var f,c,d,g=this.options;
"parent"===g.containment&&(g.containment=this.helper[0].parentNode),("document"===g.containment||"window"===g.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===g.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===g.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(g.containment)||(f=k(g.containment)[0],c=k(g.containment).offset(),d="hidden"!==k(f).css("overflow"),this.containment=[c.left+(parseInt(k(f).css("borderLeftWidth"),10)||0)+(parseInt(k(f).css("paddingLeft"),10)||0)-this.margins.left,c.top+(parseInt(k(f).css("borderTopWidth"),10)||0)+(parseInt(k(f).css("paddingTop"),10)||0)-this.margins.top,c.left+(d?Math.max(f.scrollWidth,f.offsetWidth):f.offsetWidth)-(parseInt(k(f).css("borderLeftWidth"),10)||0)-(parseInt(k(f).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,c.top+(d?Math.max(f.scrollHeight,f.offsetHeight):f.offsetHeight)-(parseInt(k(f).css("borderTopWidth"),10)||0)-(parseInt(k(f).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(f,c){c||(c=this.position);
var d="absolute"===f?1:-1,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,g=/(html|body)/i.test(h[0].tagName);
return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():g?0:h.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():g?0:h.scrollLeft())*d}
},_generatePosition:function(m){var d,g,t=this.options,p=m.pageX,c=m.pageY,l="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&k.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(l[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(m.pageX-this.offset.click.left<this.containment[0]&&(p=this.containment[0]+this.offset.click.left),m.pageY-this.offset.click.top<this.containment[1]&&(c=this.containment[1]+this.offset.click.top),m.pageX-this.offset.click.left>this.containment[2]&&(p=this.containment[2]+this.offset.click.left),m.pageY-this.offset.click.top>this.containment[3]&&(c=this.containment[3]+this.offset.click.top)),t.grid&&(d=this.originalPageY+Math.round((c-this.originalPageY)/t.grid[1])*t.grid[1],c=this.containment?d-this.offset.click.top>=this.containment[1]&&d-this.offset.click.top<=this.containment[3]?d:d-this.offset.click.top>=this.containment[1]?d-t.grid[1]:d+t.grid[1]:d,g=this.originalPageX+Math.round((p-this.originalPageX)/t.grid[0])*t.grid[0],p=this.containment?g-this.offset.click.left>=this.containment[0]&&g-this.offset.click.left<=this.containment[2]?g:g-this.offset.click.left>=this.containment[0]?g-t.grid[0]:g+t.grid[0]:g)),{top:c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():f?0:l.scrollTop()),left:p-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():f?0:l.scrollLeft())}
},_rearrange:function(d,g,c,f){c?c[0].appendChild(this.placeholder[0]):g.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?g.item[0]:g.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var h=this.counter;
this._delay(function(){h===this.counter&&this.refreshPositions(!f)
})
},_clear:function(d,g){function c(m,o,l){return function(e){l._trigger(m,e,o._uiHash(o))
}
}this.reverting=!1;
var f,h=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(f in this._storedCSS){("auto"===this._storedCSS[f]||"static"===this._storedCSS[f])&&(this._storedCSS[f]="")
}this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!g&&h.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||g||h.push(function(e){this._trigger("update",e,this._uiHash())
}),this!==this.currentContainer&&(g||(h.push(function(e){this._trigger("remove",e,this._uiHash())
}),h.push(function(e){return function(i){e._trigger("receive",i,this._uiHash(this))
}
}.call(this,this.currentContainer)),h.push(function(e){return function(i){e._trigger("update",i,this._uiHash(this))
}
}.call(this,this.currentContainer)))),f=this.containers.length-1;
f>=0;
f--){g||h.push(c("deactivate",this,this.containers[f])),this.containers[f].containerCache.over&&(h.push(c("out",this,this.containers[f])),this.containers[f].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,g||this._trigger("beforeStop",d,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!g){for(f=0;
h.length>f;
f++){h[f].call(this,d)
}this._trigger("stop",d,this._uiHash())
}return this.fromOutside=!1,!this.cancelHelperRemoval
},_trigger:function(){k.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(d){var c=d||this;
return{helper:c.helper,placeholder:c.placeholder||k([]),position:c.position,originalPosition:c.originalPosition,offset:c.positionAbs,item:c.currentItem,sender:d?d.element:null}
}}),k.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var c=this.options;
this.prevShow=this.prevHide=k(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),c.collapsible||c.active!==!1&&null!=c.active||(c.active=0),this._processPanels(),0>c.active&&(c.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():k()}
},_createIcons:function(){var f,c,d=this.options.icons;
d&&(f=k("<span>"),this._addClass(f,"ui-accordion-header-icon","ui-icon "+d.header),f.prependTo(this.headers),c=this.active.children(".ui-accordion-header-icon"),this._removeClass(c,d.header)._addClass(c,null,d.activeHeader)._addClass(this.headers,"ui-accordion-icons"))
},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()
},_destroy:function(){var c;
this.element.removeAttr("role"),this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),c=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&c.css("height","")
},_setOption:function(c,d){return"active"===c?(this._activate(d),void 0):("event"===c&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(d)),this._super(c,d),"collapsible"!==c||d||this.options.active!==!1||this._activate(0),"icons"===c&&(this._destroyIcons(),d&&this._createIcons()),void 0)
},_setOptionDisabled:function(c){this._super(c),this.element.attr("aria-disabled",c),this._toggleClass(null,"ui-state-disabled",!!c),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!c)
},_keydown:function(f){if(!f.altKey&&!f.ctrlKey){var c=k.ui.keyCode,d=this.headers.length,h=this.headers.index(f.target),g=!1;
switch(f.keyCode){case c.RIGHT:case c.DOWN:g=this.headers[(h+1)%d];
break;
case c.LEFT:case c.UP:g=this.headers[(h-1+d)%d];
break;
case c.SPACE:case c.ENTER:this._eventHandler(f);
break;
case c.HOME:g=this.headers[0];
break;
case c.END:g=this.headers[d-1]
}g&&(k(f.target).attr("tabIndex",-1),k(g).attr("tabIndex",0),k(g).trigger("focus"),f.preventDefault())
}},_panelKeyDown:function(c){c.keyCode===k.ui.keyCode.UP&&c.ctrlKey&&k(c.currentTarget).prev().trigger("focus")
},refresh:function(){var c=this.options;
this._processPanels(),c.active===!1&&c.collapsible===!0||!this.headers.length?(c.active=!1,this.active=k()):c.active===!1?this._activate(0):this.active.length&&!k.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(c.active=!1,this.active=k()):this._activate(Math.max(0,c.active-1)):c.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){var c=this.headers,d=this.panels;
this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),d&&(this._off(c.not(this.headers)),this._off(d.not(this.panels)))
},_refresh:function(){var f,c=this.options,d=c.heightStyle,g=this.element.parent();
this.active=this._findActive(c.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each(function(){var m=k(this),h=m.uniqueId().attr("id"),l=m.next(),o=l.uniqueId().attr("id");
m.attr("aria-controls",o),l.attr("aria-labelledby",h)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(c.event),"fill"===d?(f=g.height(),this.element.siblings(":visible").each(function(){var e=k(this),h=e.css("position");
"absolute"!==h&&"fixed"!==h&&(f-=e.outerHeight(!0))
}),this.headers.each(function(){f-=k(this).outerHeight(!0)
}),this.headers.next().each(function(){k(this).height(Math.max(0,f-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===d&&(f=0,this.headers.next().each(function(){var e=k(this).is(":visible");
e||k(this).show(),f=Math.max(f,k(this).css("height","").height()),e||k(this).hide()
}).height(f))
},_activate:function(d){var c=this._findActive(d)[0];
c!==this.active[0]&&(c=c||this.active[0],this._eventHandler({target:c,currentTarget:c,preventDefault:k.noop}))
},_findActive:function(c){return"number"==typeof c?this.headers.eq(c):k()
},_setupEvents:function(d){var c={keydown:"_keydown"};
d&&k.each(d.split(" "),function(f,g){c[g]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,c),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(v){var p,O,g=this.options,f=this.active,M=k(v.currentTarget),d=M[0]===f[0],t=d&&g.collapsible,m=t?k():M.next(),L=f.next(),N={oldHeader:f,oldPanel:L,newHeader:t?k():M,newPanel:m};
v.preventDefault(),d&&!g.collapsible||this._trigger("beforeActivate",v,N)===!1||(g.active=t?!1:this.headers.index(M),this.active=d?k():M,this._toggle(N),this._removeClass(f,"ui-accordion-header-active","ui-state-active"),g.icons&&(p=f.children(".ui-accordion-header-icon"),this._removeClass(p,null,g.icons.activeHeader)._addClass(p,null,g.icons.header)),d||(this._removeClass(M,"ui-accordion-header-collapsed")._addClass(M,"ui-accordion-header-active","ui-state-active"),g.icons&&(O=M.children(".ui-accordion-header-icon"),this._removeClass(O,null,g.icons.header)._addClass(O,null,g.icons.activeHeader)),this._addClass(M.next(),"ui-accordion-content-active")))
},_toggle:function(f){var c=f.newPanel,d=this.prevShow.length?this.prevShow:f.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=c,this.prevHide=d,this.options.animate?this._animate(c,d,f):(d.hide(),c.show(),this._toggleComplete(f)),d.attr({"aria-hidden":"true"}),d.prev().attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&d.length?d.prev().attr({tabIndex:-1,"aria-expanded":"false"}):c.length&&this.headers.filter(function(){return 0===parseInt(k(this).attr("tabIndex"),10)
}).attr("tabIndex",-1),c.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_animate:function(R,M,v){var S,m,g,P=this,f=0,L=R.css("box-sizing"),p=R.length&&(!M.length||R.index()<M.index()),O=this.options.animate||{},Q=p&&O.down||O,N=function(){P._toggleComplete(v)
};
return"number"==typeof Q&&(g=Q),"string"==typeof Q&&(m=Q),m=m||Q.easing||O.easing,g=g||Q.duration||O.duration,M.length?R.length?(S=R.show().outerHeight(),M.animate(this.hideProps,{duration:g,easing:m,step:function(c,d){d.now=Math.round(c)
}}),R.hide().animate(this.showProps,{duration:g,easing:m,complete:N,step:function(d,c){c.now=Math.round(d),"height"!==c.prop?"content-box"===L&&(f+=c.now):"content"!==P.options.heightStyle&&(c.now=Math.round(S-M.outerHeight()-f),f=0)
}}),void 0):M.animate(this.hideProps,g,m,N):R.animate(this.showProps,g,m,N)
},_toggleComplete:function(d){var f=d.oldPanel,c=f.prev();
this._removeClass(f,"ui-accordion-content-active"),this._removeClass(c,"ui-accordion-header-active")._addClass(c,"ui-accordion-header-collapsed"),f.length&&(f.parent()[0].className=f.parent()[0].className),this._trigger("activate",null,d)
}}),k.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(c){c.preventDefault()
},"click .ui-menu-item":function(f){var c=k(f.target),d=k(k.ui.safeActiveElement(this.document[0]));
!this.mouseHandled&&c.not(".ui-state-disabled").length&&(this.select(f),f.isPropagationStopped()||(this.mouseHandled=!0),c.has(".ui-menu").length?this.expand(f):!this.element.is(":focus")&&d.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(f){if(!this.previousFilter){var c=k(f.target).closest(".ui-menu-item"),d=k(f.currentTarget);
c[0]===d[0]&&(this._removeClass(d.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(f,d))
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(d,f){var c=this.active||this.element.find(this.options.items).eq(0);
f||this.focus(d,c)
},blur:function(c){this._delay(function(){var d=!k.contains(this.element[0],k.ui.safeActiveElement(this.document[0]));
d&&this.collapseAll(c)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(c){this._closeOnDocumentClick(c)&&this.collapseAll(c),this.mouseHandled=!1
}})
},_destroy:function(){var d=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),c=d.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),c.children().each(function(){var f=k(this);
f.data("ui-menu-submenu-caret")&&f.remove()
})
},_keydown:function(g){var d,f,l,h,c=!0;
switch(g.keyCode){case k.ui.keyCode.PAGE_UP:this.previousPage(g);
break;
case k.ui.keyCode.PAGE_DOWN:this.nextPage(g);
break;
case k.ui.keyCode.HOME:this._move("first","first",g);
break;
case k.ui.keyCode.END:this._move("last","last",g);
break;
case k.ui.keyCode.UP:this.previous(g);
break;
case k.ui.keyCode.DOWN:this.next(g);
break;
case k.ui.keyCode.LEFT:this.collapse(g);
break;
case k.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(g);
break;
case k.ui.keyCode.ENTER:case k.ui.keyCode.SPACE:this._activate(g);
break;
case k.ui.keyCode.ESCAPE:this.collapse(g);
break;
default:c=!1,f=this.previousFilter||"",h=!1,l=g.keyCode>=96&&105>=g.keyCode?""+(g.keyCode-96):String.fromCharCode(g.keyCode),clearTimeout(this.filterTimer),l===f?h=!0:l=f+l,d=this._filterMenuItems(l),d=h&&-1!==d.index(this.active.next())?this.active.nextAll(".ui-menu-item"):d,d.length||(l=String.fromCharCode(g.keyCode),d=this._filterMenuItems(l)),d.length?(this.focus(g,d),this.previousFilter=l,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}c&&g.preventDefault()
},_activate:function(c){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(c):this.select(c))
},refresh:function(){var m,d,g,t,p,c=this,l=this.options.icons.submenu,f=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),g=f.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var r=k(this),h=r.prev(),o=k("<span>").data("ui-menu-submenu-caret",!0);
c._addClass(o,"ui-menu-icon","ui-icon "+l),h.attr("aria-haspopup","true").prepend(o),r.attr("aria-labelledby",h.attr("id"))
}),this._addClass(g,"ui-menu","ui-widget ui-widget-content ui-front"),m=f.add(this.element),d=m.find(this.options.items),d.not(".ui-menu-item").each(function(){var h=k(this);
c._isDivider(h)&&c._addClass(h,"ui-menu-divider","ui-widget-content")
}),t=d.not(".ui-menu-item, .ui-menu-divider"),p=t.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(t,"ui-menu-item")._addClass(p,"ui-menu-item-wrapper"),d.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!k.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(d,f){if("icons"===d){var c=this.element.find(".ui-menu-icon");
this._removeClass(c,null,this.options.icons.submenu)._addClass(c,null,f.submenu)
}this._super(d,f)
},_setOptionDisabled:function(c){this._super(c),this.element.attr("aria-disabled",c+""),this._toggleClass(null,"ui-state-disabled",!!c)
},focus:function(d,g){var c,f,h;
this.blur(d,d&&"focus"===d.type),this._scrollIntoView(g),this.active=g.first(),f=this.active.children(".ui-menu-item-wrapper"),this._addClass(f,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",f.attr("id")),h=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(h,null,"ui-state-active"),d&&"keydown"===d.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),c=g.children(".ui-menu"),c.length&&d&&/^mouse/.test(d.type)&&this._startOpening(c),this.activeMenu=g.parent(),this._trigger("focus",d,{item:g})
},_scrollIntoView:function(h){var d,f,m,l,c,g;
this._hasScroll()&&(d=parseFloat(k.css(this.activeMenu[0],"borderTopWidth"))||0,f=parseFloat(k.css(this.activeMenu[0],"paddingTop"))||0,m=h.offset().top-this.activeMenu.offset().top-d-f,l=this.activeMenu.scrollTop(),c=this.activeMenu.height(),g=h.outerHeight(),0>m?this.activeMenu.scrollTop(l+m):m+g>c&&this.activeMenu.scrollTop(l+m-c+g))
},blur:function(c,d){d||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",c,{item:this.active}),this.active=null)
},_startOpening:function(c){clearTimeout(this.timer),"true"===c.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(c)
},this.delay))
},_open:function(d){var c=k.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true"),d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)
},collapseAll:function(d,c){clearTimeout(this.timer),this.timer=this._delay(function(){var e=c?this.element:k(d&&d.target).closest(this.element.find(".ui-menu"));
e.length||(e=this.element),this._close(e),this.blur(d),this._removeClass(e.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=e
},this.delay)
},_close:function(c){c||(c=this.active?this.active.parent():this.element),c.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")
},_closeOnDocumentClick:function(c){return !k(c.target).closest(".ui-menu").length
},_isDivider:function(c){return !/[^\-\u2014\u2013\s]/.test(c.text())
},collapse:function(c){var d=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
d&&d.length&&(this._close(),this.focus(c,d))
},expand:function(c){var d=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
d&&d.length&&(this._open(d.parent()),this._delay(function(){this.focus(c,d)
}))
},next:function(c){this._move("next","first",c)
},previous:function(c){this._move("prev","last",c)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(d,g,c){var f;
this.active&&(f="first"===d||"last"===d?this.active["first"===d?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[d+"All"](".ui-menu-item").eq(0)),f&&f.length&&this.active||(f=this.activeMenu.find(this.options.items)[g]()),this.focus(c,f)
},nextPage:function(f){var c,d,g;
return this.active?(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,g=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return c=k(this),0>c.offset().top-d-g
}),this.focus(f,c)):this.focus(f,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(f),void 0)
},previousPage:function(f){var c,d,g;
return this.active?(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,g=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return c=k(this),c.offset().top-d+g>0
}),this.focus(f,c)):this.focus(f,this.activeMenu.find(this.options.items).first())),void 0):(this.next(f),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(d){this.active=this.active||k(d.target).closest(".ui-menu-item");
var c={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(d,!0),this._trigger("select",d,c)
},_filterMenuItems:function(f){var c=f.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),d=RegExp("^"+c,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return d.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()))
})
}}),k.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var g,d,f,l=this.element[0].nodeName.toLowerCase(),h="textarea"===l,c="input"===l;
this.isMultiLine=h||!c&&this._isContentEditable(this.element),this.valueMethod=this.element[h||c?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){return g=!0,f=!0,d=!0,void 0
}g=!1,f=!1,d=!1;
var e=k.ui.keyCode;
switch(i.keyCode){case e.PAGE_UP:g=!0,this._move("previousPage",i);
break;
case e.PAGE_DOWN:g=!0,this._move("nextPage",i);
break;
case e.UP:g=!0,this._keyEvent("previous",i);
break;
case e.DOWN:g=!0,this._keyEvent("next",i);
break;
case e.ENTER:this.menu.active&&(g=!0,i.preventDefault(),this.menu.select(i));
break;
case e.TAB:this.menu.active&&this.menu.select(i);
break;
case e.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(i),i.preventDefault());
break;
default:d=!0,this._searchTimeout(i)
}},keypress:function(e){if(g){return g=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&e.preventDefault(),void 0
}if(!d){var i=k.ui.keyCode;
switch(e.keyCode){case i.PAGE_UP:this._move("previousPage",e);
break;
case i.PAGE_DOWN:this._move("nextPage",e);
break;
case i.UP:this._keyEvent("previous",e);
break;
case i.DOWN:this._keyEvent("next",e)
}}},input:function(e){return f?(f=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)
}}),this._initSource(),this.menu=k("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(i){i.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==k.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")
})
},menufocus:function(p,m){var o,r;
return this.isNewMenu&&(this.isNewMenu=!1,p.originalEvent&&/^mouse/.test(p.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){k(p.target).trigger(p.originalEvent)
}),void 0):(r=m.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",p,{item:r})&&p.originalEvent&&/^key/.test(p.originalEvent.type)&&this._value(r.value),o=m.item.attr("aria-label")||r.value,o&&k.trim(o).length&&(this.liveRegion.children().hide(),k("<div>").text(o).appendTo(this.liveRegion)),void 0)
},menuselect:function(p,m){var o=m.item.data("ui-autocomplete-item"),r=this.previous;
this.element[0]!==k.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=o
})),!1!==this._trigger("select",p,{item:o})&&this._value(o.value),this.term=this._value(),this.close(p),this.selectedItem=o
}}),this.liveRegion=k("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(c,d){this._super(c,d),"source"===c&&this._initSource(),"appendTo"===c&&this.menu.element.appendTo(this._appendTo()),"disabled"===c&&d&&this.xhr&&this.xhr.abort()
},_isEventTargetInWidget:function(d){var c=this.menu.element[0];
return d.target===this.element[0]||d.target===c||k.contains(c,d.target)
},_closeOnClickOutside:function(c){this._isEventTargetInWidget(c)||this.close()
},_appendTo:function(){var c=this.options.appendTo;
return c&&(c=c.jquery||c.nodeType?k(c):this.document.find(c).eq(0)),c&&c[0]||(c=this.element.closest(".ui-front, dialog")),c.length||(c=this.document[0].body),c
},_initSource:function(){var f,c,d=this;
k.isArray(this.options.source)?(f=this.options.source,this.source=function(e,g){g(k.ui.autocomplete.filter(f,e.term))
}):"string"==typeof this.options.source?(c=this.options.source,this.source=function(g,h){d.xhr&&d.xhr.abort(),d.xhr=k.ajax({url:c,data:g,dataType:"json",success:function(e){h(e)
},error:function(){h([])
}})
}):this.source=this.options.source
},_searchTimeout:function(c){clearTimeout(this.searching),this.searching=this._delay(function(){var g=this.term===this._value(),d=this.menu.element.is(":visible"),f=c.altKey||c.ctrlKey||c.metaKey||c.shiftKey;
(!g||g&&!d&&!f)&&(this.selectedItem=null,this.search(null,c))
},this.options.delay)
},search:function(c,d){return c=null!=c?c:this._value(),this.term=this._value(),c.length<this.options.minLength?this.close(d):this._trigger("search",d)!==!1?this._search(c):void 0
},_search:function(c){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:c},this._response())
},_response:function(){var c=++this.requestIndex;
return k.proxy(function(d){c===this.requestIndex&&this.__response(d),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")
},this)
},__response:function(c){c&&(c=this._normalize(c)),this._trigger("response",null,{content:c}),!this.options.disabled&&c&&c.length&&!this.cancelSearch?(this._suggest(c),this._trigger("open")):this._close()
},close:function(c){this.cancelSearch=!0,this._close(c)
},_close:function(c){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",c))
},_change:function(c){this.previous!==this._value()&&this._trigger("change",c,{item:this.selectedItem})
},_normalize:function(c){return c.length&&c[0].label&&c[0].value?c:k.map(c,function(d){return"string"==typeof d?{label:d,value:d}:k.extend({},d,{label:d.label||d.value,value:d.value||d.label})
})
},_suggest:function(d){var c=this.menu.element.empty();
this._renderMenu(c,d),this.isNewMenu=!0,this.menu.refresh(),c.show(),this._resizeMenu(),c.position(k.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})
},_resizeMenu:function(){var c=this.menu.element;
c.outerWidth(Math.max(c.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(f,c){var d=this;
k.each(c,function(g,e){d._renderItemData(f,e)
})
},_renderItemData:function(c,d){return this._renderItem(c,d).data("ui-autocomplete-item",d)
},_renderItem:function(d,c){return k("<li>").append(k("<div>").text(c.label)).appendTo(d)
},_move:function(c,d){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(c)||this.menu.isLastItem()&&/^next/.test(c)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[c](d),void 0):(this.search(null,d),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(c,d){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(c,d),d.preventDefault())
},_isContentEditable:function(c){if(!c.length){return !1
}var d=c.prop("contentEditable");
return"inherit"===d?this._isContentEditable(c.parent()):"true"===d
}}),k.extend(k.ui.autocomplete,{escapeRegex:function(c){return c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,c){var d=RegExp(k.ui.autocomplete.escapeRegex(c),"i");
return k.grep(f,function(e){return d.test(e.label||e.value||e)
})
}}),k.widget("ui.autocomplete",k.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(c){return c+(c>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(d){var c;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(c=d&&d.length?this.options.messages.results(d.length):this.options.messages.noResults,this.liveRegion.children().hide(),k("<div>").text(c).appendTo(this.liveRegion))
}}),k.ui.autocomplete;
var H=/ui-corner-([a-z]){2,6}/g;
k.widget("ui.controlgroup",{version:"1.12.1",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()
},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()
},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
},_initWidgets:function(){var d=this,c=[];
k.each(this.options.items,function(f,h){var g,e={};
return h?"controlgroupLabel"===f?(g=d.element.find(h),g.each(function(){var i=k(this);
i.children(".ui-controlgroup-label-contents").length||i.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
}),d._addClass(g,null,"ui-widget ui-widget-content ui-state-default"),c=c.concat(g.get()),void 0):(k.fn[f]&&(e=d["_"+f+"Options"]?d["_"+f+"Options"]("middle"):{classes:{}},d.element.find(h).each(function(){var p=k(this),m=p[f]("instance"),l=k.widget.extend({},e);
if("button"!==f||!p.parent(".ui-spinner").length){m||(m=p[f]()[f]("instance")),m&&(l.classes=d._resolveClassesValues(l.classes,m)),p[f](l);
var i=p[f]("widget");
k.data(i[0],"ui-controlgroup-data",m?m:p[f]("instance")),c.push(i[0])
}})),void 0):void 0
}),this.childWidgets=k(k.unique(c)),this._addClass(this.childWidgets,"ui-controlgroup-item")
},_callChildMethod:function(c){this.childWidgets.each(function(){var d=k(this),e=d.data("ui-controlgroup-data");
e&&e[c]&&e[c]()
})
},_updateCornerClass:function(d,g){var c="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",f=this._buildSimpleOptions(g,"label").classes.label;
this._removeClass(d,null,c),this._addClass(d,null,f)
},_buildSimpleOptions:function(d,g){var c="vertical"===this.options.direction,f={classes:{}};
return f.classes[g]={middle:"",first:"ui-corner-"+(c?"top":"left"),last:"ui-corner-"+(c?"bottom":"right"),only:"ui-corner-all"}[d],f
},_spinnerOptions:function(c){var d=this._buildSimpleOptions(c,"ui-spinner");
return d.classes["ui-spinner-up"]="",d.classes["ui-spinner-down"]="",d
},_buttonOptions:function(c){return this._buildSimpleOptions(c,"ui-button")
},_checkboxradioOptions:function(c){return this._buildSimpleOptions(c,"ui-checkboxradio-label")
},_selectmenuOptions:function(c){var d="vertical"===this.options.direction;
return{width:d?"auto":!1,classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(d?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(d?"top":"left")},last:{"ui-selectmenu-button-open":d?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(d?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[c]}
},_resolveClassesValues:function(f,c){var d={};
return k.each(f,function(g){var e=c.options.classes[g]||"";
e=k.trim(e.replace(H,"")),d[g]=(e+" "+f[g]).replace(/\s+/g," ")
}),d
},_setOption:function(c,d){return"direction"===c&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(c,d),"disabled"===c?(this._callChildMethod(d?"disable":"enable"),void 0):(this.refresh(),void 0)
},refresh:function(){var d,c=this;
this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),d=this.childWidgets,this.options.onlyVisible&&(d=d.filter(":visible")),d.length&&(k.each(["first","last"],function(e,f){var h=d[f]().data("ui-controlgroup-data");
if(h&&c["_"+h.widgetName+"Options"]){var g=c["_"+h.widgetName+"Options"](1===d.length?"only":f);
g.classes=c._resolveClassesValues(g.classes,h),h.element[h.widgetName](g)
}else{c._updateCornerClass(d[f](),f)
}}),this._callChildMethod("refresh"))
}}),k.widget("ui.checkboxradio",[k.ui.formResetMixin,{version:"1.12.1",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var f,c,d=this,g=this._super()||{};
return this._readType(),c=this.element.labels(),this.label=k(c[c.length-1]),this.label.length||k.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element[0]).each(function(){d.originalLabel+=3===this.nodeType?k(this).text():this.outerHTML
}),this.originalLabel&&(g.label=this.originalLabel),f=this.element[0].disabled,null!=f&&(g.disabled=f),g
},_create:function(){var c=this.element[0].checked;
this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),c&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")
},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")
}})
},_readType:function(){var c=this.element[0].nodeName.toLowerCase();
this.type=this.element[0].type,"input"===c&&/radio|checkbox/.test(this.type)||k.error("Can't create checkboxradio on element.nodeName="+c+" and element.type="+this.type)
},_enhance:function(){this._updateIcon(this.element[0].checked)
},widget:function(){return this.label
},_getRadioGroup:function(){var f,c=this.element[0].name,d="input[name='"+k.ui.escapeSelector(c)+"']";
return c?(f=this.form.length?k(this.form[0].elements).filter(d):k(d).filter(function(){return 0===k(this).form().length
}),f.not(this.element)):k([])
},_toggleClasses:function(){var c=this.element[0].checked;
this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",c),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",c)._toggleClass(this.icon,null,"ui-icon-blank",!c),"radio"===this.type&&this._getRadioGroup().each(function(){var d=k(this).checkboxradio("instance");
d&&d._removeClass(d.label,"ui-checkboxradio-checked","ui-state-active")
})
},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())
},_setOption:function(c,d){return"label"!==c||d?(this._super(c,d),"disabled"===c?(this._toggleClass(this.label,null,"ui-state-disabled",d),this.element[0].disabled=d,void 0):(this.refresh(),void 0)):void 0
},_updateIcon:function(d){var c="ui-icon ui-icon-background ";
this.options.icon?(this.icon||(this.icon=k("<span>"),this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(c+=d?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,d?"ui-icon-blank":"ui-icon-check")):c+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",c),d||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)
},_updateLabel:function(){var c=this.label.contents().not(this.element[0]);
this.icon&&(c=c.not(this.icon[0])),this.iconSpace&&(c=c.not(this.iconSpace[0])),c.remove(),this.label.append(this.options.label)
},refresh:function(){var c=this.element[0].checked,d=this.element[0].disabled;
this._updateIcon(c),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",c),null!==this.options.label&&this._updateLabel(),d!==this.options.disabled&&this._setOptions({disabled:d})
}}]),k.ui.checkboxradio,k.widget("ui.button",{version:"1.12.1",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var c,d=this._super()||{};
return this.isInput=this.element.is("input"),c=this.element[0].disabled,null!=c&&(d.disabled=c),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(d.label=this.originalLabel),d
},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(c){c.keyCode===k.ui.keyCode.SPACE&&(c.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))
}})
},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())
},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)
},_updateIcon:function(f,c){var d="iconPosition"!==f,h=d?this.options.iconPosition:c,g="top"===h||"bottom"===h;
this.icon?d&&this._removeClass(this.icon,null,this.options.icon):(this.icon=k("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),d&&this._addClass(this.icon,null,c),this._attachIcon(h),g?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=k("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(h))
},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")
},_attachIconSpace:function(c){this.icon[/^(?:end|bottom)/.test(c)?"before":"after"](this.iconSpace)
},_attachIcon:function(c){this.element[/^(?:end|bottom)/.test(c)?"append":"prepend"](this.icon)
},_setOptions:function(d){var f=void 0===d.showLabel?this.options.showLabel:d.showLabel,c=void 0===d.icon?this.options.icon:d.icon;
f||c||(d.showLabel=!0),this._super(d)
},_setOption:function(c,d){"icon"===c&&(d?this._updateIcon(c,d):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===c&&this._updateIcon(c,d),"showLabel"===c&&(this._toggleClass("ui-button-icon-only",null,!d),this._updateTooltip()),"label"===c&&(this.isInput?this.element.val(d):(this.element.html(d),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(c,d),"disabled"===c&&(this._toggleClass(null,"ui-state-disabled",d),this.element[0].disabled=d,d&&this.element.blur())
},refresh:function(){var c=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");
c!==this.options.disabled&&this._setOptions({disabled:c}),this._updateTooltip()
}}),k.uiBackCompat!==!1&&(k.widget("ui.button",k.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()
},_setOption:function(c,d){return"text"===c?(this._super("showLabel",d),void 0):("showLabel"===c&&(this.options.text=d),"icon"===c&&(this.options.icons.primary=d),"icons"===c&&(d.primary?(this._super("icon",d.primary),this._super("iconPosition","beginning")):d.secondary&&(this._super("icon",d.secondary),this._super("iconPosition","end"))),this._superApply(arguments),void 0)
}}),k.fn.button=function(c){return function(){return !this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?c.apply(this,arguments):(k.ui.checkboxradio||k.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))
}
}(k.fn.button),k.fn.buttonset=function(){return k.ui.controlgroup||k.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))
}),k.ui.button,k.extend(k.ui,{datepicker:{version:"1.12.1"}});
var x;
k.extend(q.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(c){return J(this._defaults,c||{}),this
},_attachDatepicker:function(f,c){var d,h,g;
d=f.nodeName.toLowerCase(),h="div"===d||"span"===d,f.id||(this.uuid+=1,f.id="dp"+this.uuid),g=this._newInst(k(f),h),g.settings=k.extend({},c||{}),"input"===d?this._connectDatepicker(f,g):h&&this._inlineDatepicker(f,g)
},_newInst:function(f,c){var d=f[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:d,input:f,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:c,dpDiv:c?z(k("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(f,c){var d=k(f);
c.append=k([]),c.trigger=k([]),d.hasClass(this.markerClassName)||(this._attachments(d,c),d.addClass(this.markerClassName).on("keydown",this._doKeyDown).on("keypress",this._doKeyPress).on("keyup",this._doKeyUp),this._autoSize(c),k.data(f,"datepicker",c),c.settings.disabled&&this._disableDatepicker(f))
},_attachments:function(h,d){var f,m,l,c=this._get(d,"appendText"),g=this._get(d,"isRTL");
d.append&&d.append.remove(),c&&(d.append=k("<span class='"+this._appendClass+"'>"+c+"</span>"),h[g?"before":"after"](d.append)),h.off("focus",this._showDatepicker),d.trigger&&d.trigger.remove(),f=this._get(d,"showOn"),("focus"===f||"both"===f)&&h.on("focus",this._showDatepicker),("button"===f||"both"===f)&&(m=this._get(d,"buttonText"),l=this._get(d,"buttonImage"),d.trigger=k(this._get(d,"buttonImageOnly")?k("<img/>").addClass(this._triggerClass).attr({src:l,alt:m,title:m}):k("<button type='button'></button>").addClass(this._triggerClass).html(l?k("<img/>").attr({src:l,alt:m,title:m}):m)),h[g?"before":"after"](d.trigger),d.trigger.on("click",function(){return k.datepicker._datepickerShowing&&k.datepicker._lastInput===h[0]?k.datepicker._hideDatepicker():k.datepicker._datepickerShowing&&k.datepicker._lastInput!==h[0]?(k.datepicker._hideDatepicker(),k.datepicker._showDatepicker(h[0])):k.datepicker._showDatepicker(h[0]),!1
}))
},_autoSize:function(f){if(this._get(f,"autoSize")&&!f.inline){var h,d,g,m,l=new Date(2009,11,20),c=this._get(f,"dateFormat");
c.match(/[DM]/)&&(h=function(e){for(d=0,g=0,m=0;
e.length>m;
m++){e[m].length>d&&(d=e[m].length,g=m)
}return g
},l.setMonth(h(this._get(f,c.match(/MM/)?"monthNames":"monthNamesShort"))),l.setDate(h(this._get(f,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-l.getDay())),f.input.attr("size",this._formatDate(f,l).length)
}},_inlineDatepicker:function(f,c){var d=k(f);
d.hasClass(this.markerClassName)||(d.addClass(this.markerClassName).append(c.dpDiv),k.data(f,"datepicker",c),this._setDate(c,this._getDefaultDate(c),!0),this._updateDatepicker(c),this._updateAlternate(c),c.settings.disabled&&this._disableDatepicker(f),c.dpDiv.css("display","block"))
},_dialogDatepicker:function(L,t,P,m,g){var f,v,p,N,O,M=this._dialogInst;
return M||(this.uuid+=1,f="dp"+this.uuid,this._dialogInput=k("<input type='text' id='"+f+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.on("keydown",this._doKeyDown),k("body").append(this._dialogInput),M=this._dialogInst=this._newInst(this._dialogInput,!1),M.settings={},k.data(this._dialogInput[0],"datepicker",M)),J(M.settings,m||{}),t=t&&t.constructor===Date?this._formatDate(M,t):t,this._dialogInput.val(t),this._pos=g?g.length?g:[g.pageX,g.pageY]:null,this._pos||(v=document.documentElement.clientWidth,p=document.documentElement.clientHeight,N=document.documentElement.scrollLeft||document.body.scrollLeft,O=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[v/2-100+N,p/2-150+O]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),M.settings.onSelect=P,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),k.blockUI&&k.blockUI(this.dpDiv),k.data(this._dialogInput[0],"datepicker",M),this
},_destroyDatepicker:function(f){var c,d=k(f),g=k.data(f,"datepicker");
d.hasClass(this.markerClassName)&&(c=f.nodeName.toLowerCase(),k.removeData(f,"datepicker"),"input"===c?(g.append.remove(),g.trigger.remove(),d.removeClass(this.markerClassName).off("focus",this._showDatepicker).off("keydown",this._doKeyDown).off("keypress",this._doKeyPress).off("keyup",this._doKeyUp)):("div"===c||"span"===c)&&d.removeClass(this.markerClassName).empty(),x===g&&(x=null))
},_enableDatepicker:function(f){var c,d,h=k(f),g=k.data(f,"datepicker");
h.hasClass(this.markerClassName)&&(c=f.nodeName.toLowerCase(),"input"===c?(f.disabled=!1,g.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===c||"span"===c)&&(d=h.children("."+this._inlineClass),d.children().removeClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===f?null:e
}))
},_disableDatepicker:function(f){var c,d,h=k(f),g=k.data(f,"datepicker");
h.hasClass(this.markerClassName)&&(c=f.nodeName.toLowerCase(),"input"===c?(f.disabled=!0,g.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===c||"span"===c)&&(d=h.children("."+this._inlineClass),d.children().addClass("ui-state-disabled"),d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=k.map(this._disabledInputs,function(e){return e===f?null:e
}),this._disabledInputs[this._disabledInputs.length]=f)
},_isDisabledDatepicker:function(c){if(!c){return !1
}for(var d=0;
this._disabledInputs.length>d;
d++){if(this._disabledInputs[d]===c){return !0
}}return !1
},_getInst:function(d){try{return k.data(d,"datepicker")
}catch(c){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(p,d,g){var u,t,m,f,c=this._getInst(p);
return 2===arguments.length&&"string"==typeof d?"defaults"===d?k.extend({},k.datepicker._defaults):c?"all"===d?k.extend({},c.settings):this._get(c,d):null:(u=d||{},"string"==typeof d&&(u={},u[d]=g),c&&(this._curInst===c&&this._hideDatepicker(),t=this._getDateDatepicker(p,!0),m=this._getMinMaxDate(c,"min"),f=this._getMinMaxDate(c,"max"),J(c.settings,u),null!==m&&void 0!==u.dateFormat&&void 0===u.minDate&&(c.settings.minDate=this._formatDate(c,m)),null!==f&&void 0!==u.dateFormat&&void 0===u.maxDate&&(c.settings.maxDate=this._formatDate(c,f)),"disabled" in u&&(u.disabled?this._disableDatepicker(p):this._enableDatepicker(p)),this._attachments(k(p),c),this._autoSize(c),this._setDate(c,t),this._updateAlternate(c),this._updateDatepicker(c)),void 0)
},_changeDatepicker:function(d,f,c){this._optionDatepicker(d,f,c)
},_refreshDatepicker:function(c){var d=this._getInst(c);
d&&this._updateDatepicker(d)
},_setDateDatepicker:function(d,f){var c=this._getInst(d);
c&&(this._setDate(c,f),this._updateDatepicker(c),this._updateAlternate(c))
},_getDateDatepicker:function(d,f){var c=this._getInst(d);
return c&&!c.inline&&this._setDateFromField(c,f),c?this._getDate(c):null
},_doKeyDown:function(h){var d,f,m,l=k.datepicker._getInst(h.target),c=!0,g=l.dpDiv.is(".ui-datepicker-rtl");
if(l._keyEvent=!0,k.datepicker._datepickerShowing){switch(h.keyCode){case 9:k.datepicker._hideDatepicker(),c=!1;
break;
case 13:return m=k("td."+k.datepicker._dayOverClass+":not(."+k.datepicker._currentClass+")",l.dpDiv),m[0]&&k.datepicker._selectDay(h.target,l.selectedMonth,l.selectedYear,m[0]),d=k.datepicker._get(l,"onSelect"),d?(f=k.datepicker._formatDate(l),d.apply(l.input?l.input[0]:null,[f,l])):k.datepicker._hideDatepicker(),!1;
case 27:k.datepicker._hideDatepicker();
break;
case 33:k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 34:k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 35:(h.ctrlKey||h.metaKey)&&k.datepicker._clearDate(h.target),c=h.ctrlKey||h.metaKey;
break;
case 36:(h.ctrlKey||h.metaKey)&&k.datepicker._gotoToday(h.target),c=h.ctrlKey||h.metaKey;
break;
case 37:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?1:-1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?-k.datepicker._get(l,"stepBigMonths"):-k.datepicker._get(l,"stepMonths"),"M");
break;
case 38:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,-7,"D"),c=h.ctrlKey||h.metaKey;
break;
case 39:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,g?-1:1,"D"),c=h.ctrlKey||h.metaKey,h.originalEvent.altKey&&k.datepicker._adjustDate(h.target,h.ctrlKey?+k.datepicker._get(l,"stepBigMonths"):+k.datepicker._get(l,"stepMonths"),"M");
break;
case 40:(h.ctrlKey||h.metaKey)&&k.datepicker._adjustDate(h.target,7,"D"),c=h.ctrlKey||h.metaKey;
break;
default:c=!1
}}else{36===h.keyCode&&h.ctrlKey?k.datepicker._showDatepicker(this):c=!1
}c&&(h.preventDefault(),h.stopPropagation())
},_doKeyPress:function(f){var c,d,g=k.datepicker._getInst(f.target);
return k.datepicker._get(g,"constrainInput")?(c=k.datepicker._possibleChars(k.datepicker._get(g,"dateFormat")),d=String.fromCharCode(null==f.charCode?f.keyCode:f.charCode),f.ctrlKey||f.metaKey||" ">d||!c||c.indexOf(d)>-1):void 0
},_doKeyUp:function(f){var c,d=k.datepicker._getInst(f.target);
if(d.input.val()!==d.lastVal){try{c=k.datepicker.parseDate(k.datepicker._get(d,"dateFormat"),d.input?d.input.val():null,k.datepicker._getFormatConfig(d)),c&&(k.datepicker._setDateFromField(d),k.datepicker._updateAlternate(d),k.datepicker._updateDatepicker(d))
}catch(g){}}return !0
},_showDatepicker:function(m){if(m=m.target||m,"input"!==m.nodeName.toLowerCase()&&(m=k("input",m.parentNode)[0]),!k.datepicker._isDisabledDatepicker(m)&&k.datepicker._lastInput!==m){var g,u,p,i,f,d,t;
g=k.datepicker._getInst(m),k.datepicker._curInst&&k.datepicker._curInst!==g&&(k.datepicker._curInst.dpDiv.stop(!0,!0),g&&k.datepicker._datepickerShowing&&k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])),u=k.datepicker._get(g,"beforeShow"),p=u?u.apply(m,[m,g]):{},p!==!1&&(J(g.settings,p),g.lastVal=null,k.datepicker._lastInput=m,k.datepicker._setDateFromField(g),k.datepicker._inDialog&&(m.value=""),k.datepicker._pos||(k.datepicker._pos=k.datepicker._findPos(m),k.datepicker._pos[1]+=m.offsetHeight),i=!1,k(m).parents().each(function(){return i|="fixed"===k(this).css("position"),!i
}),f={left:k.datepicker._pos[0],top:k.datepicker._pos[1]},k.datepicker._pos=null,g.dpDiv.empty(),g.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),k.datepicker._updateDatepicker(g),f=k.datepicker._checkOffset(g,f,i),g.dpDiv.css({position:k.datepicker._inDialog&&k.blockUI?"static":i?"fixed":"absolute",display:"none",left:f.left+"px",top:f.top+"px"}),g.inline||(d=k.datepicker._get(g,"showAnim"),t=k.datepicker._get(g,"duration"),g.dpDiv.css("z-index",C(k(m))+1),k.datepicker._datepickerShowing=!0,k.effects&&k.effects.effect[d]?g.dpDiv.show(d,k.datepicker._get(g,"showOptions"),t):g.dpDiv[d||"show"](d?t:null),k.datepicker._shouldFocusInput(g)&&g.input.trigger("focus"),k.datepicker._curInst=g))
}},_updateDatepicker:function(h){this.maxRows=4,x=h,h.dpDiv.empty().append(this._generateHTML(h)),this._attachHandlers(h);
var d,f=this._getNumberOfMonths(h),l=f[1],c=17,g=h.dpDiv.find("."+this._dayOverClass+" a");
g.length>0&&y.apply(g.get(0)),h.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),l>1&&h.dpDiv.addClass("ui-datepicker-multi-"+l).css("width",c*l+"em"),h.dpDiv[(1!==f[0]||1!==f[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),h.dpDiv[(this._get(h,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),h===k.datepicker._curInst&&k.datepicker._datepickerShowing&&k.datepicker._shouldFocusInput(h)&&h.input.trigger("focus"),h.yearshtml&&(d=h.yearshtml,setTimeout(function(){d===h.yearshtml&&h.yearshtml&&h.dpDiv.find("select.ui-datepicker-year:first").replaceWith(h.yearshtml),d=h.yearshtml=null
},0))
},_shouldFocusInput:function(c){return c.input&&c.input.is(":visible")&&!c.input.is(":disabled")&&!c.input.is(":focus")
},_checkOffset:function(t,m,v){var f=t.dpDiv.outerWidth(),d=t.dpDiv.outerHeight(),u=t.input?t.input.outerWidth():0,c=t.input?t.input.outerHeight():0,p=document.documentElement.clientWidth+(v?0:k(document).scrollLeft()),g=document.documentElement.clientHeight+(v?0:k(document).scrollTop());
return m.left-=this._get(t,"isRTL")?f-u:0,m.left-=v&&m.left===t.input.offset().left?k(document).scrollLeft():0,m.top-=v&&m.top===t.input.offset().top+c?k(document).scrollTop():0,m.left-=Math.min(m.left,m.left+f>p&&p>f?Math.abs(m.left+f-p):0),m.top-=Math.min(m.top,m.top+d>g&&g>d?Math.abs(d+c):0),m
},_findPos:function(f){for(var c,d=this._getInst(f),g=this._get(d,"isRTL");
f&&("hidden"===f.type||1!==f.nodeType||k.expr.filters.hidden(f));
){f=f[g?"previousSibling":"nextSibling"]
}return c=k(f).offset(),[c.left,c.top]
},_hideDatepicker:function(g){var d,f,l,h,c=this._curInst;
!c||g&&c!==k.data(g,"datepicker")||this._datepickerShowing&&(d=this._get(c,"showAnim"),f=this._get(c,"duration"),l=function(){k.datepicker._tidyDialog(c)
},k.effects&&(k.effects.effect[d]||k.effects[d])?c.dpDiv.hide(d,k.datepicker._get(c,"showOptions"),f,l):c.dpDiv["slideDown"===d?"slideUp":"fadeIn"===d?"fadeOut":"hide"](d?f:null,l),d||l(),this._datepickerShowing=!1,h=this._get(c,"onClose"),h&&h.apply(c.input?c.input[0]:null,[c.input?c.input.val():"",c]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),k.blockUI&&(k.unblockUI(),k("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(c){c.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},_checkExternalClick:function(f){if(k.datepicker._curInst){var c=k(f.target),d=k.datepicker._getInst(c[0]);
(c[0].id!==k.datepicker._mainDivId&&0===c.parents("#"+k.datepicker._mainDivId).length&&!c.hasClass(k.datepicker.markerClassName)&&!c.closest("."+k.datepicker._triggerClass).length&&k.datepicker._datepickerShowing&&(!k.datepicker._inDialog||!k.blockUI)||c.hasClass(k.datepicker.markerClassName)&&k.datepicker._curInst!==d)&&k.datepicker._hideDatepicker()
}},_adjustDate:function(f,c,d){var h=k(f),g=this._getInst(h[0]);
this._isDisabledDatepicker(h[0])||(this._adjustInstDate(g,c+("M"===d?this._get(g,"showCurrentAtPos"):0),d),this._updateDatepicker(g))
},_gotoToday:function(f){var c,d=k(f),g=this._getInst(d[0]);
this._get(g,"gotoCurrent")&&g.currentDay?(g.selectedDay=g.currentDay,g.drawMonth=g.selectedMonth=g.currentMonth,g.drawYear=g.selectedYear=g.currentYear):(c=new Date,g.selectedDay=c.getDate(),g.drawMonth=g.selectedMonth=c.getMonth(),g.drawYear=g.selectedYear=c.getFullYear()),this._notifyChange(g),this._adjustDate(d)
},_selectMonthYear:function(f,c,d){var h=k(f),g=this._getInst(h[0]);
g["selected"+("M"===d?"Month":"Year")]=g["draw"+("M"===d?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(g),this._adjustDate(h)
},_selectDay:function(g,d,f,l){var h,c=k(g);
k(l).hasClass(this._unselectableClass)||this._isDisabledDatepicker(c[0])||(h=this._getInst(c[0]),h.selectedDay=h.currentDay=k("a",l).html(),h.selectedMonth=h.currentMonth=d,h.selectedYear=h.currentYear=f,this._selectDate(g,this._formatDate(h,h.currentDay,h.currentMonth,h.currentYear)))
},_clearDate:function(d){var c=k(d);
this._selectDate(c,"")
},_selectDate:function(f,c){var d,h=k(f),g=this._getInst(h[0]);
c=null!=c?c:this._formatDate(g),g.input&&g.input.val(c),this._updateAlternate(g),d=this._get(g,"onSelect"),d?d.apply(g.input?g.input[0]:null,[c,g]):g.input&&g.input.trigger("change"),g.inline?this._updateDatepicker(g):(this._hideDatepicker(),this._lastInput=g.input[0],"object"!=typeof g.input[0]&&g.input.trigger("focus"),this._lastInput=null)
},_updateAlternate:function(f){var c,d,h,g=this._get(f,"altField");
g&&(c=this._get(f,"altFormat")||this._get(f,"dateFormat"),d=this._getDate(f),h=this.formatDate(c,d,this._getFormatConfig(f)),k(g).val(h))
},noWeekends:function(c){var d=c.getDay();
return[d>0&&6>d,""]
},iso8601Week:function(d){var f,c=new Date(d.getTime());
return c.setDate(c.getDate()+4-(c.getDay()||7)),f=c.getTime(),c.setMonth(0),c.setDate(1),Math.floor(Math.round((f-c)/86400000)/7)+1
},parseDate:function(ab,X,P){if(null==ab||null==X){throw"Invalid arguments"
}if(X="object"==typeof X?""+X:X+"",""===X){return null
}var T,S,af,Q,Y=0,V=(P?P.shortYearCutoff:null)||this._defaults.shortYearCutoff,ad="string"!=typeof V?V:(new Date).getFullYear()%100+parseInt(V,10),O=(P?P.dayNamesShort:null)||this._defaults.dayNamesShort,ac=(P?P.dayNames:null)||this._defaults.dayNames,R=(P?P.monthNamesShort:null)||this._defaults.monthNamesShort,aa=(P?P.monthNames:null)||this._defaults.monthNames,Z=-1,U=-1,ag=-1,N=-1,ae=!1,t=function(d){var c=ab.length>T+1&&ab.charAt(T+1)===d;
return c&&T++,c
},M=function(d){var g=t(d),f="@"===d?14:"!"===d?20:"y"===d&&g?4:"o"===d?3:2,i="y"===d?f:1,h=RegExp("^\\d{"+i+","+f+"}"),c=X.substring(Y).match(h);
if(!c){throw"Missing number at position "+Y
}return Y+=c[0].length,parseInt(c[0],10)
},W=function(f,d,h){var g=-1,c=k.map(t(f)?h:d,function(i,l){return[[l,i]]
}).sort(function(i,l){return -(i[1].length-l[1].length)
});
if(k.each(c,function(i,m){var l=m[1];
return X.substr(Y,l.length).toLowerCase()===l.toLowerCase()?(g=m[0],Y+=l.length,!1):void 0
}),-1!==g){return g+1
}throw"Unknown name at position "+Y
},L=function(){if(X.charAt(Y)!==ab.charAt(T)){throw"Unexpected literal at position "+Y
}Y++
};
for(T=0;
ab.length>T;
T++){if(ae){"'"!==ab.charAt(T)||t("'")?L():ae=!1
}else{switch(ab.charAt(T)){case"d":ag=M("d");
break;
case"D":W("D",O,ac);
break;
case"o":N=M("o");
break;
case"m":U=M("m");
break;
case"M":U=W("M",R,aa);
break;
case"y":Z=M("y");
break;
case"@":Q=new Date(M("@")),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"!":Q=new Date((M("!")-this._ticksTo1970)/10000),Z=Q.getFullYear(),U=Q.getMonth()+1,ag=Q.getDate();
break;
case"'":t("'")?L():ae=!0;
break;
default:L()
}}}if(X.length>Y&&(af=X.substr(Y),!/^\s+/.test(af))){throw"Extra/unparsed characters found in date: "+af
}if(-1===Z?Z=(new Date).getFullYear():100>Z&&(Z+=(new Date).getFullYear()-(new Date).getFullYear()%100+(ad>=Z?0:-100)),N>-1){for(U=1,ag=N;
;
){if(S=this._getDaysInMonth(Z,U-1),S>=ag){break
}U++,ag-=S
}}if(Q=this._daylightSavingAdjust(new Date(Z,U-1,ag)),Q.getFullYear()!==Z||Q.getMonth()+1!==U||Q.getDate()!==ag){throw"Invalid date"
}return Q
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(R,M,v){if(!M){return""
}var S,m=(v?v.dayNamesShort:null)||this._defaults.dayNamesShort,g=(v?v.dayNames:null)||this._defaults.dayNames,P=(v?v.monthNamesShort:null)||this._defaults.monthNamesShort,f=(v?v.monthNames:null)||this._defaults.monthNames,L=function(d){var c=R.length>S+1&&R.charAt(S+1)===d;
return c&&S++,c
},p=function(d,l,c){var h=""+l;
if(L(d)){for(;
c>h.length;
){h="0"+h
}}return h
},O=function(d,l,c,h){return L(d)?h[l]:c[l]
},Q="",N=!1;
if(M){for(S=0;
R.length>S;
S++){if(N){"'"!==R.charAt(S)||L("'")?Q+=R.charAt(S):N=!1
}else{switch(R.charAt(S)){case"d":Q+=p("d",M.getDate(),2);
break;
case"D":Q+=O("D",M.getDay(),m,g);
break;
case"o":Q+=p("o",Math.round((new Date(M.getFullYear(),M.getMonth(),M.getDate()).getTime()-new Date(M.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":Q+=p("m",M.getMonth()+1,2);
break;
case"M":Q+=O("M",M.getMonth(),P,f);
break;
case"y":Q+=L("y")?M.getFullYear():(10>M.getFullYear()%100?"0":"")+M.getFullYear()%100;
break;
case"@":Q+=M.getTime();
break;
case"!":Q+=10000*M.getTime()+this._ticksTo1970;
break;
case"'":L("'")?Q+="'":N=!0;
break;
default:Q+=R.charAt(S)
}}}}return Q
},_possibleChars:function(d){var g,c="",f=!1,h=function(e){var l=d.length>g+1&&d.charAt(g+1)===e;
return l&&g++,l
};
for(g=0;
d.length>g;
g++){if(f){"'"!==d.charAt(g)||h("'")?c+=d.charAt(g):f=!1
}else{switch(d.charAt(g)){case"d":case"m":case"y":case"@":c+="0123456789";
break;
case"D":case"M":return null;
case"'":h("'")?c+="'":f=!0;
break;
default:c+=d.charAt(g)
}}}return c
},_get:function(c,d){return void 0!==c.settings[d]?c.settings[d]:this._defaults[d]
},_setDateFromField:function(f,l){if(f.input.val()!==f.lastVal){var d=this._get(f,"dateFormat"),g=f.lastVal=f.input?f.input.val():null,p=this._getDefaultDate(f),m=p,c=this._getFormatConfig(f);
try{m=this.parseDate(d,g,c)||p
}catch(h){g=l?"":g
}f.selectedDay=m.getDate(),f.drawMonth=f.selectedMonth=m.getMonth(),f.drawYear=f.selectedYear=m.getFullYear(),f.currentDay=g?m.getDate():0,f.currentMonth=g?m.getMonth():0,f.currentYear=g?m.getFullYear():0,this._adjustInstDate(f)
}},_getDefaultDate:function(c){return this._restrictMinMax(c,this._determineDate(c,this._get(c,"defaultDate"),new Date))
},_determineDate:function(g,d,f){var l=function(i){var m=new Date;
return m.setDate(m.getDate()+i),m
},h=function(p){try{return k.datepicker.parseDate(k.datepicker._get(g,"dateFormat"),p,k.datepicker._getFormatConfig(g))
}catch(u){}for(var M=(p.toLowerCase().match(/^c/)?k.datepicker._getDate(g):null)||new Date,L=M.getFullYear(),m=M.getMonth(),v=M.getDate(),t=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,e=t.exec(p);
e;
){switch(e[2]||"d"){case"d":case"D":v+=parseInt(e[1],10);
break;
case"w":case"W":v+=7*parseInt(e[1],10);
break;
case"m":case"M":m+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m));
break;
case"y":case"Y":L+=parseInt(e[1],10),v=Math.min(v,k.datepicker._getDaysInMonth(L,m))
}e=t.exec(p)
}return new Date(L,m,v)
},c=null==d||""===d?f:"string"==typeof d?h(d):"number"==typeof d?isNaN(d)?f:l(d):new Date(d.getTime());
return c=c&&"Invalid Date"==""+c?f:c,c&&(c.setHours(0),c.setMinutes(0),c.setSeconds(0),c.setMilliseconds(0)),this._daylightSavingAdjust(c)
},_daylightSavingAdjust:function(c){return c?(c.setHours(c.getHours()>12?c.getHours()+2:0),c):null
},_setDate:function(f,h,d){var g=!h,m=f.selectedMonth,l=f.selectedYear,c=this._restrictMinMax(f,this._determineDate(f,h,new Date));
f.selectedDay=f.currentDay=c.getDate(),f.drawMonth=f.selectedMonth=f.currentMonth=c.getMonth(),f.drawYear=f.selectedYear=f.currentYear=c.getFullYear(),m===f.selectedMonth&&l===f.selectedYear||d||this._notifyChange(f),this._adjustInstDate(f),f.input&&f.input.val(g?"":this._formatDate(f))
},_getDate:function(c){var d=!c.currentYear||c.input&&""===c.input.val()?null:this._daylightSavingAdjust(new Date(c.currentYear,c.currentMonth,c.currentDay));
return d
},_attachHandlers:function(f){var c=this._get(f,"stepMonths"),d="#"+f.id.replace(/\\\\/g,"\\");
f.dpDiv.find("[data-handler]").map(function(){var g={prev:function(){k.datepicker._adjustDate(d,-c,"M")
},next:function(){k.datepicker._adjustDate(d,+c,"M")
},hide:function(){k.datepicker._hideDatepicker()
},today:function(){k.datepicker._gotoToday(d)
},selectDay:function(){return k.datepicker._selectDay(d,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return k.datepicker._selectMonthYear(d,this,"M"),!1
},selectYear:function(){return k.datepicker._selectMonthYear(d,this,"Y"),!1
}};
k(this).on(this.getAttribute("data-event"),g[this.getAttribute("data-handler")])
})
},_generateHTML:function(aK){var aZ,aV,aL,aQ,aP,a3,aM,aW,aS,a1,aJ,a0,aO,aY,aX,aR,a4,aI,a2,aF,aH,aT,aG,aA,ay,at,ah,al,ao,ai,au,aE,am,aC,an,ae,ax,aw,ap,aj=new Date,aB=this._daylightSavingAdjust(new Date(aj.getFullYear(),aj.getMonth(),aj.getDate())),ab=this._get(aK,"isRTL"),aU=this._get(aK,"showButtonPanel"),aN=this._get(aK,"hideIfNoPrevNext"),aq=this._get(aK,"navigationAsDateFormat"),ag=this._getNumberOfMonths(aK),af=this._get(aK,"showCurrentAtPos"),aD=this._get(aK,"stepMonths"),ac=1!==ag[0]||1!==ag[1],av=this._daylightSavingAdjust(aK.currentDay?new Date(aK.currentYear,aK.currentMonth,aK.currentDay):new Date(9999,9,9)),ak=this._getMinMaxDate(aK,"min"),ar=this._getMinMaxDate(aK,"max"),aa=aK.drawMonth-af,ad=aK.drawYear;
if(0>aa&&(aa+=12,ad--),ar){for(aZ=this._daylightSavingAdjust(new Date(ar.getFullYear(),ar.getMonth()-ag[0]*ag[1]+1,ar.getDate())),aZ=ak&&ak>aZ?ak:aZ;
this._daylightSavingAdjust(new Date(ad,aa,1))>aZ;
){aa--,0>aa&&(aa=11,ad--)
}}for(aK.drawMonth=aa,aK.drawYear=ad,aV=this._get(aK,"prevText"),aV=aq?this.formatDate(aV,this._daylightSavingAdjust(new Date(ad,aa-aD,1)),this._getFormatConfig(aK)):aV,aL=this._canAdjustMonth(aK,-1,ad,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aV+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aV+"</span></a>":aN?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aV+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aV+"</span></a>",aQ=this._get(aK,"nextText"),aQ=aq?this.formatDate(aQ,this._daylightSavingAdjust(new Date(ad,aa+aD,1)),this._getFormatConfig(aK)):aQ,aP=this._canAdjustMonth(aK,1,ad,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aQ+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aQ+"</span></a>":aN?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aQ+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aQ+"</span></a>",a3=this._get(aK,"currentText"),aM=this._get(aK,"gotoCurrent")&&aK.currentDay?av:aB,a3=aq?this.formatDate(a3,aM,this._getFormatConfig(aK)):a3,aW=aK.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aK,"closeText")+"</button>",aS=aU?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aW:"")+(this._isInRange(aK,aM)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a3+"</button>":"")+(ab?"":aW)+"</div>":"",a1=parseInt(this._get(aK,"firstDay"),10),a1=isNaN(a1)?0:a1,aJ=this._get(aK,"showWeek"),a0=this._get(aK,"dayNames"),aO=this._get(aK,"dayNamesMin"),aY=this._get(aK,"monthNames"),aX=this._get(aK,"monthNamesShort"),aR=this._get(aK,"beforeShowDay"),a4=this._get(aK,"showOtherMonths"),aI=this._get(aK,"selectOtherMonths"),a2=this._getDefaultDate(aK),aF="",aT=0;
ag[0]>aT;
aT++){for(aG="",this.maxRows=4,aA=0;
ag[1]>aA;
aA++){if(ay=this._daylightSavingAdjust(new Date(ad,aa,aK.selectedDay)),at=" ui-corner-all",ah="",ac){if(ah+="<div class='ui-datepicker-group",ag[1]>1){switch(aA){case 0:ah+=" ui-datepicker-group-first",at=" ui-corner-"+(ab?"right":"left");
break;
case ag[1]-1:ah+=" ui-datepicker-group-last",at=" ui-corner-"+(ab?"left":"right");
break;
default:ah+=" ui-datepicker-group-middle",at=""
}}ah+="'>"
}for(ah+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+at+"'>"+(/all|left/.test(at)&&0===aT?ab?aP:aL:"")+(/all|right/.test(at)&&0===aT?ab?aL:aP:"")+this._generateMonthYearHeader(aK,aa,ad,ak,ar,aT>0||aA>0,aY,aX)+"</div><table class='ui-datepicker-calendar'><thead><tr>",al=aJ?"<th class='ui-datepicker-week-col'>"+this._get(aK,"weekHeader")+"</th>":"",aH=0;
7>aH;
aH++){ao=(aH+a1)%7,al+="<th scope='col'"+((aH+a1+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+a0[ao]+"'>"+aO[ao]+"</span></th>"
}for(ah+=al+"</tr></thead><tbody>",ai=this._getDaysInMonth(ad,aa),ad===aK.selectedYear&&aa===aK.selectedMonth&&(aK.selectedDay=Math.min(aK.selectedDay,ai)),au=(this._getFirstDayOfMonth(ad,aa)-a1+7)%7,aE=Math.ceil((au+ai)/7),am=ac?this.maxRows>aE?this.maxRows:aE:aE,this.maxRows=am,aC=this._daylightSavingAdjust(new Date(ad,aa,1-au)),an=0;
am>an;
an++){for(ah+="<tr>",ae=aJ?"<td class='ui-datepicker-week-col'>"+this._get(aK,"calculateWeek")(aC)+"</td>":"",aH=0;
7>aH;
aH++){ax=aR?aR.apply(aK.input?aK.input[0]:null,[aC]):[!0,""],aw=aC.getMonth()!==aa,ap=aw&&!aI||!ax[0]||ak&&ak>aC||ar&&aC>ar,ae+="<td class='"+((aH+a1+6)%7>=5?" ui-datepicker-week-end":"")+(aw?" ui-datepicker-other-month":"")+(aC.getTime()===ay.getTime()&&aa===aK.selectedMonth&&aK._keyEvent||a2.getTime()===aC.getTime()&&a2.getTime()===ay.getTime()?" "+this._dayOverClass:"")+(ap?" "+this._unselectableClass+" ui-state-disabled":"")+(aw&&!a4?"":" "+ax[1]+(aC.getTime()===av.getTime()?" "+this._currentClass:"")+(aC.getTime()===aB.getTime()?" ui-datepicker-today":""))+"'"+(aw&&!a4||!ax[2]?"":" title='"+ax[2].replace(/'/g,"&#39;")+"'")+(ap?"":" data-handler='selectDay' data-event='click' data-month='"+aC.getMonth()+"' data-year='"+aC.getFullYear()+"'")+">"+(aw&&!a4?"&#xa0;":ap?"<span class='ui-state-default'>"+aC.getDate()+"</span>":"<a class='ui-state-default"+(aC.getTime()===aB.getTime()?" ui-state-highlight":"")+(aC.getTime()===av.getTime()?" ui-state-active":"")+(aw?" ui-priority-secondary":"")+"' href='#'>"+aC.getDate()+"</a>")+"</td>",aC.setDate(aC.getDate()+1),aC=this._daylightSavingAdjust(aC)
}ah+=ae+"</tr>"
}aa++,aa>11&&(aa=0,ad++),ah+="</tbody></table>"+(ac?"</div>"+(ag[0]>0&&aA===ag[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aG+=ah
}aF+=aG
}return aF+=aS,aK._keyEvent=!1,aF
},_generateMonthYearHeader:function(O,aa,W,P,T,S,ae,Q){var X,V,ac,N,ab,R,Z,Y,U=this._get(O,"changeMonth"),af=this._get(O,"changeYear"),M=this._get(O,"showMonthAfterYear"),ad="<div class='ui-datepicker-title'>",L="";
if(S||!U){L+="<span class='ui-datepicker-month'>"+ae[aa]+"</span>"
}else{for(X=P&&P.getFullYear()===W,V=T&&T.getFullYear()===W,L+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",ac=0;
12>ac;
ac++){(!X||ac>=P.getMonth())&&(!V||T.getMonth()>=ac)&&(L+="<option value='"+ac+"'"+(ac===aa?" selected='selected'":"")+">"+Q[ac]+"</option>")
}L+="</select>"
}if(M||(ad+=L+(!S&&U&&af?"":"&#xa0;")),!O.yearshtml){if(O.yearshtml="",S||!af){ad+="<span class='ui-datepicker-year'>"+W+"</span>"
}else{for(N=this._get(O,"yearRange").split(":"),ab=(new Date).getFullYear(),R=function(c){var d=c.match(/c[+\-].*/)?W+parseInt(c.substring(1),10):c.match(/[+\-].*/)?ab+parseInt(c,10):parseInt(c,10);
return isNaN(d)?ab:d
},Z=R(N[0]),Y=Math.max(Z,R(N[1]||"")),Z=P?Math.max(Z,P.getFullYear()):Z,Y=T?Math.min(Y,T.getFullYear()):Y,O.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
Y>=Z;
Z++){O.yearshtml+="<option value='"+Z+"'"+(Z===W?" selected='selected'":"")+">"+Z+"</option>"
}O.yearshtml+="</select>",ad+=O.yearshtml,O.yearshtml=null
}}return ad+=this._get(O,"yearSuffix"),M&&(ad+=(!S&&U&&af?"":"&#xa0;")+L),ad+="</div>"
},_adjustInstDate:function(f,h,d){var g=f.selectedYear+("Y"===d?h:0),m=f.selectedMonth+("M"===d?h:0),l=Math.min(f.selectedDay,this._getDaysInMonth(g,m))+("D"===d?h:0),c=this._restrictMinMax(f,this._daylightSavingAdjust(new Date(g,m,l)));
f.selectedDay=c.getDate(),f.drawMonth=f.selectedMonth=c.getMonth(),f.drawYear=f.selectedYear=c.getFullYear(),("M"===d||"Y"===d)&&this._notifyChange(f)
},_restrictMinMax:function(d,g){var c=this._getMinMaxDate(d,"min"),f=this._getMinMaxDate(d,"max"),h=c&&c>g?c:g;
return f&&h>f?f:h
},_notifyChange:function(c){var d=this._get(c,"onChangeMonthYear");
d&&d.apply(c.input?c.input[0]:null,[c.selectedYear,c.selectedMonth+1,c])
},_getNumberOfMonths:function(c){var d=this._get(c,"numberOfMonths");
return null==d?[1,1]:"number"==typeof d?[1,d]:d
},_getMinMaxDate:function(c,d){return this._determineDate(c,this._get(c,d+"Date"),null)
},_getDaysInMonth:function(c,d){return 32-this._daylightSavingAdjust(new Date(c,d,32)).getDate()
},_getFirstDayOfMonth:function(c,d){return new Date(c,d,1).getDay()
},_canAdjustMonth:function(d,g,c,f){var l=this._getNumberOfMonths(d),h=this._daylightSavingAdjust(new Date(c,f+(0>g?g:l[0]*l[1]),1));
return 0>g&&h.setDate(this._getDaysInMonth(h.getFullYear(),h.getMonth())),this._isInRange(d,h)
},_isInRange:function(u,m){var g,v,f=this._getMinMaxDate(u,"min"),d=this._getMinMaxDate(u,"max"),p=null,c=null,l=this._get(u,"yearRange");
return l&&(g=l.split(":"),v=(new Date).getFullYear(),p=parseInt(g[0],10),c=parseInt(g[1],10),g[0].match(/[+\-].*/)&&(p+=v),g[1].match(/[+\-].*/)&&(c+=v)),(!f||m.getTime()>=f.getTime())&&(!d||m.getTime()<=d.getTime())&&(!p||m.getFullYear()>=p)&&(!c||c>=m.getFullYear())
},_getFormatConfig:function(c){var d=this._get(c,"shortYearCutoff");
return d="string"!=typeof d?d:(new Date).getFullYear()%100+parseInt(d,10),{shortYearCutoff:d,dayNamesShort:this._get(c,"dayNamesShort"),dayNames:this._get(c,"dayNames"),monthNamesShort:this._get(c,"monthNamesShort"),monthNames:this._get(c,"monthNames")}
},_formatDate:function(d,g,c,f){g||(d.currentDay=d.selectedDay,d.currentMonth=d.selectedMonth,d.currentYear=d.selectedYear);
var h=g?"object"==typeof g?g:this._daylightSavingAdjust(new Date(f,c,g)):this._daylightSavingAdjust(new Date(d.currentYear,d.currentMonth,d.currentDay));
return this.formatDate(this._get(d,"dateFormat"),h,this._getFormatConfig(d))
}}),k.fn.datepicker=function(d){if(!this.length){return this
}k.datepicker.initialized||(k(document).on("mousedown",k.datepicker._checkExternalClick),k.datepicker.initialized=!0),0===k("#"+k.datepicker._mainDivId).length&&k("body").append(k.datepicker.dpDiv);
var c=Array.prototype.slice.call(arguments,1);
return"string"!=typeof d||"isDisabled"!==d&&"getDate"!==d&&"widget"!==d?"option"===d&&2===arguments.length&&"string"==typeof arguments[1]?k.datepicker["_"+d+"Datepicker"].apply(k.datepicker,[this[0]].concat(c)):this.each(function(){"string"==typeof d?k.datepicker["_"+d+"Datepicker"].apply(k.datepicker,[this].concat(c)):k.datepicker._attachDatepicker(this,d)
}):k.datepicker["_"+d+"Datepicker"].apply(k.datepicker,[this[0]].concat(c))
},k.datepicker=new q,k.datepicker.initialized=!1,k.datepicker.uuid=(new Date).getTime(),k.datepicker.version="1.12.1",k.datepicker,k.widget("ui.dialog",{version:"1.12.1",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(d){var c=k(this).css(d).offset().top;
0>c&&k(this).css("top",d.top-c)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&k.fn.draggable&&this._makeDraggable(),this.options.resizable&&k.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var c=this.options.appendTo;
return c&&(c.jquery||c.nodeType)?k(c):this.document.find(c||"body").eq(0)
},_destroy:function(){var c,d=this.originalPosition;
this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),c=d.parent.children().eq(d.index),c.length&&c[0]!==this.element[0]?c.before(this.element):d.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:k.noop,enable:k.noop,close:function(d){var c=this;
this._isOpen&&this._trigger("beforeClose",d)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",d)
}))
},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(f,c){var d=!1,h=this.uiDialog.siblings(".ui-front:visible").map(function(){return +k(this).css("z-index")
}).get(),g=Math.max.apply(null,h);
return g>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",g+1),d=!0),d&&!c&&this._trigger("focus",f),d
},open:function(){var c=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=k(k.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){c._focusTabbable(),c._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)
},_focusTabbable:function(){var c=this._focusedElement;
c||(c=this.element.find("[autofocus]")),c.length||(c=this.element.find(":tabbable")),c.length||(c=this.uiDialogButtonPane.find(":tabbable")),c.length||(c=this.uiDialogTitlebarClose.filter(":tabbable")),c.length||(c=this.uiDialog),c.eq(0).trigger("focus")
},_keepFocus:function(d){function c(){var g=k.ui.safeActiveElement(this.document[0]),f=this.uiDialog[0]===g||k.contains(this.uiDialog[0],g);
f||this._focusTabbable()
}d.preventDefault(),c.call(this),this._delay(c)
},_createWrapper:function(){this.uiDialog=k("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(f){if(this.options.closeOnEscape&&!f.isDefaultPrevented()&&f.keyCode&&f.keyCode===k.ui.keyCode.ESCAPE){return f.preventDefault(),this.close(f),void 0
}if(f.keyCode===k.ui.keyCode.TAB&&!f.isDefaultPrevented()){var c=this.uiDialog.find(":tabbable"),d=c.filter(":first"),g=c.filter(":last");
f.target!==g[0]&&f.target!==this.uiDialog[0]||f.shiftKey?f.target!==d[0]&&f.target!==this.uiDialog[0]||!f.shiftKey||(this._delay(function(){g.trigger("focus")
}),f.preventDefault()):(this._delay(function(){d.trigger("focus")
}),f.preventDefault())
}},mousedown:function(c){this._moveToTop(c)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var c;
this.uiDialogTitlebar=k("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(d){k(d.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")
}}),this.uiDialogTitlebarClose=k("<button type='button'></button>").button({label:k("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(d){d.preventDefault(),this.close(d)
}}),c=k("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(c,"ui-dialog-title"),this._title(c),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":c.attr("id")})
},_title:function(c){this.options.title?c.text(this.options.title):c.html("&#160;")
},_createButtonPane:function(){this.uiDialogButtonPane=k("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=k("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()
},_createButtons:function(){var d=this,c=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),k.isEmptyObject(c)||k.isArray(c)&&!c.length?(this._removeClass(this.uiDialog,"ui-dialog-buttons"),void 0):(k.each(c,function(e,f){var h,g;
f=k.isFunction(f)?{click:f,text:e}:f,f=k.extend({type:"button"},f),h=f.click,g={icon:f.icon,iconPosition:f.iconPosition,showLabel:f.showLabel,icons:f.icons,text:f.text},delete f.click,delete f.icon,delete f.iconPosition,delete f.showLabel,delete f.icons,"boolean"==typeof f.text&&delete f.text,k("<button></button>",f).button(g).appendTo(d.uiButtonSet).on("click",function(){h.apply(d.element[0],arguments)
})
}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)
},_makeDraggable:function(){function f(e){return{position:e.position,offset:e.offset}
}var c=this,d=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,g){c._addClass(k(this),"ui-dialog-dragging"),c._blockFrames(),c._trigger("dragStart",e,f(g))
},drag:function(e,g){c._trigger("drag",e,f(g))
},stop:function(i,h){var e=h.offset.left-c.document.scrollLeft(),g=h.offset.top-c.document.scrollTop();
d.position={my:"left top",at:"left"+(e>=0?"+":"")+e+" top"+(g>=0?"+":"")+g,of:c.window},c._removeClass(k(this),"ui-dialog-dragging"),c._unblockFrames(),c._trigger("dragStop",i,f(h))
}})
},_makeResizable:function(){function g(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}
}var d=this,f=this.options,l=f.resizable,h=this.uiDialog.css("position"),c="string"==typeof l?l:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:this._minHeight(),handles:c,start:function(e,i){d._addClass(k(this),"ui-dialog-resizing"),d._blockFrames(),d._trigger("resizeStart",e,g(i))
},resize:function(e,i){d._trigger("resize",e,g(i))
},stop:function(t,p){var e=d.uiDialog.offset(),m=e.left-d.document.scrollLeft(),i=e.top-d.document.scrollTop();
f.height=d.uiDialog.height(),f.width=d.uiDialog.width(),f.position={my:"left top",at:"left"+(m>=0?"+":"")+m+" top"+(i>=0?"+":"")+i,of:d.window},d._removeClass(k(this),"ui-dialog-resizing"),d._unblockFrames(),d._trigger("resizeStop",t,g(p))
}}).css("position",h)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(c){this._makeFocusTarget(),this._focusedElement=k(c.target)
}})
},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)
},_untrackInstance:function(){var d=this._trackingInstances(),c=k.inArray(this,d);
-1!==c&&d.splice(c,1)
},_trackingInstances:function(){var c=this.document.data("ui-dialog-instances");
return c||(c=[],this.document.data("ui-dialog-instances",c)),c
},_minHeight:function(){var c=this.options;
return"auto"===c.height?c.minHeight:Math.min(c.minHeight,c.height)
},_position:function(){var c=this.uiDialog.is(":visible");
c||this.uiDialog.show(),this.uiDialog.position(this.options.position),c||this.uiDialog.hide()
},_setOptions:function(f){var c=this,d=!1,g={};
k.each(f,function(h,i){c._setOption(h,i),h in c.sizeRelatedOptions&&(d=!0),h in c.resizableRelatedOptions&&(g[h]=i)
}),d&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",g)
},_setOption:function(f,c){var d,h,g=this.uiDialog;
"disabled"!==f&&(this._super(f,c),"appendTo"===f&&this.uiDialog.appendTo(this._appendTo()),"buttons"===f&&this._createButtons(),"closeText"===f&&this.uiDialogTitlebarClose.button({label:k("<a>").text(""+this.options.closeText).html()}),"draggable"===f&&(d=g.is(":data(ui-draggable)"),d&&!c&&g.draggable("destroy"),!d&&c&&this._makeDraggable()),"position"===f&&this._position(),"resizable"===f&&(h=g.is(":data(ui-resizable)"),h&&!c&&g.resizable("destroy"),h&&"string"==typeof c&&g.resizable("option","handles",c),h||c===!1||this._makeResizable()),"title"===f&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var d,g,c,f=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),f.minWidth>f.width&&(f.width=f.minWidth),d=this.uiDialog.css({height:"auto",width:f.width}).outerHeight(),g=Math.max(0,f.minHeight-d),c="number"==typeof f.maxHeight?Math.max(0,f.maxHeight-d):"none","auto"===f.height?this.element.css({minHeight:g,maxHeight:c,height:"auto"}):this.element.height(Math.max(0,f.height-d)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var c=k(this);
return k("<div>").css({position:"absolute",width:c.outerWidth(),height:c.outerHeight()}).appendTo(c.parent()).offset(c.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(c){return k(c.target).closest(".ui-dialog").length?!0:!!k(c.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var c=!0;
this._delay(function(){c=!1
}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(d){c||this._allowInteraction(d)||(d.preventDefault(),this._trackingInstances()[0]._focusTabbable())
}}),this.overlay=k("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var c=this.document.data("ui-dialog-overlays")-1;
c?this.document.data("ui-dialog-overlays",c):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null
}}}),k.uiBackCompat!==!1&&k.widget("ui.dialog",k.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)
},_setOption:function(c,d){"dialogClass"===c&&this.uiDialog.removeClass(this.options.dialogClass).addClass(d),this._superApply(arguments)
}}),k.ui.dialog,k.widget("ui.progressbar",{version:"1.12.1",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=k("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()
},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()
},value:function(c){return void 0===c?this.options.value:(this.options.value=this._constrainedValue(c),this._refreshValue(),void 0)
},_constrainedValue:function(c){return void 0===c&&(c=this.options.value),this.indeterminate=c===!1,"number"!=typeof c&&(c=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,c))
},_setOptions:function(c){var d=c.value;
delete c.value,this._super(c),this.options.value=this._constrainedValue(d),this._refreshValue()
},_setOption:function(c,d){"max"===c&&(d=Math.max(this.min,d)),this._super(c,d)
},_setOptionDisabled:function(c){this._super(c),this.element.attr("aria-disabled",c),this._toggleClass(null,"ui-state-disabled",!!c)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var d=this.options.value,c=this._percentage();
this.valueDiv.toggle(this.indeterminate||d>this.min).width(c.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,d===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=k("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":d}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==d&&(this.oldValue=d,this._trigger("change")),d===this.options.max&&this._trigger("complete")
}}),k.widget("ui.selectmenu",[k.ui.formResetMixin,{version:"1.12.1",defaultElement:"<select>",options:{appendTo:null,classes:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"},disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:!1,change:null,close:null,focus:null,open:null,select:null},_create:function(){var c=this.element.uniqueId().attr("id");
this.ids={element:c,button:c+"-button",menu:c+"-menu"},this._drawButton(),this._drawMenu(),this._bindFormResetHandler(),this._rendered=!1,this.menuItems=k()
},_drawButton:function(){var f,c=this,d=this._parseOption(this.element.find("option:selected"),this.element[0].selectedIndex);
this.labels=this.element.labels().attr("for",this.ids.button),this._on(this.labels,{click:function(e){this.button.focus(),e.preventDefault()
}}),this.element.hide(),this.button=k("<span>",{tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true",title:this.element.attr("title")}).insertAfter(this.element),this._addClass(this.button,"ui-selectmenu-button ui-selectmenu-button-closed","ui-button ui-widget"),f=k("<span>").appendTo(this.button),this._addClass(f,"ui-selectmenu-icon","ui-icon "+this.options.icons.button),this.buttonItem=this._renderButtonItem(d).appendTo(this.button),this.options.width!==!1&&this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){c._rendered||c._refreshMenu()
})
},_drawMenu:function(){var c=this;
this.menu=k("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=k("<div>").append(this.menu),this._addClass(this.menuWrap,"ui-selectmenu-menu","ui-front"),this.menuWrap.appendTo(this._appendTo()),this.menuInstance=this.menu.menu({classes:{"ui-menu":"ui-corner-bottom"},role:"listbox",select:function(e,d){e.preventDefault(),c._setSelection(),c._select(d.item.data("ui-selectmenu-item"),e)
},focus:function(e,d){var f=d.item.data("ui-selectmenu-item");
null!=c.focusIndex&&f.index!==c.focusIndex&&(c._trigger("focus",e,{item:f}),c.isOpen||c._select(f,e)),c.focusIndex=f.index,c.button.attr("aria-activedescendant",c.menuItems.eq(f.index).attr("id"))
}}).menu("instance"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return !1
},this.menuInstance._isDivider=function(){return !1
}
},refresh:function(){this._refreshMenu(),this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{})),null===this.options.width&&this._resizeButton()
},_refreshMenu:function(){var c,d=this.element.find("option");
this.menu.empty(),this._parseOptions(d),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"),this._rendered=!0,d.length&&(c=this._getSelectedItem(),this.menuInstance.focus(null,c),this._setAria(c.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))
},open:function(c){this.options.disabled||(this._rendered?(this._removeClass(this.menu.find(".ui-state-active"),null,"ui-state-active"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.menuItems.length&&(this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",c)))
},_position:function(){this.menuWrap.position(k.extend({of:this.button},this.options.position))
},close:function(c){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",c))
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderButtonItem:function(d){var c=k("<span>");
return this._setText(c,d.label),this._addClass(c,"ui-selectmenu-text"),c
},_renderMenu:function(f,c){var d=this,g="";
k.each(c,function(h,l){var e;
l.optgroup!==g&&(e=k("<li>",{text:l.optgroup}),d._addClass(e,"ui-selectmenu-optgroup","ui-menu-divider"+(l.element.parent("optgroup").prop("disabled")?" ui-state-disabled":"")),e.appendTo(f),g=l.optgroup),d._renderItemData(f,l)
})
},_renderItemData:function(c,d){return this._renderItem(c,d).data("ui-selectmenu-item",d)
},_renderItem:function(f,c){var d=k("<li>"),g=k("<div>",{title:c.element.attr("title")});
return c.disabled&&this._addClass(d,null,"ui-state-disabled"),this._setText(g,c.label),d.append(g).appendTo(f)
},_setText:function(c,d){d?c.text(d):c.html("&#160;")
},_move:function(d,g){var c,f,h=".ui-menu-item";
this.isOpen?c=this.menuItems.eq(this.focusIndex).parent("li"):(c=this.menuItems.eq(this.element[0].selectedIndex).parent("li"),h+=":not(.ui-state-disabled)"),f="first"===d||"last"===d?c["first"===d?"prevAll":"nextAll"](h).eq(-1):c[d+"All"](h).eq(0),f.length&&this.menuInstance.focus(g,f)
},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
},_toggle:function(c){this[this.isOpen?"close":"open"](c)
},_setSelection:function(){var c;
this.range&&(window.getSelection?(c=window.getSelection(),c.removeAllRanges(),c.addRange(this.range)):this.range.select(),this.button.focus())
},_documentClick:{mousedown:function(c){this.isOpen&&(k(c.target).closest(".ui-selectmenu-menu, #"+k.ui.escapeSelector(this.ids.button)).length||this.close(c))
}},_buttonEvents:{mousedown:function(){var c;
window.getSelection?(c=window.getSelection(),c.rangeCount&&(this.range=c.getRangeAt(0))):this.range=document.selection.createRange()
},click:function(c){this._setSelection(),this._toggle(c)
},keydown:function(d){var c=!0;
switch(d.keyCode){case k.ui.keyCode.TAB:case k.ui.keyCode.ESCAPE:this.close(d),c=!1;
break;
case k.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(d);
break;
case k.ui.keyCode.UP:d.altKey?this._toggle(d):this._move("prev",d);
break;
case k.ui.keyCode.DOWN:d.altKey?this._toggle(d):this._move("next",d);
break;
case k.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(d):this._toggle(d);
break;
case k.ui.keyCode.LEFT:this._move("prev",d);
break;
case k.ui.keyCode.RIGHT:this._move("next",d);
break;
case k.ui.keyCode.HOME:case k.ui.keyCode.PAGE_UP:this._move("first",d);
break;
case k.ui.keyCode.END:case k.ui.keyCode.PAGE_DOWN:this._move("last",d);
break;
default:this.menu.trigger(d),c=!1
}c&&d.preventDefault()
}},_selectFocusedItem:function(c){var d=this.menuItems.eq(this.focusIndex).parent("li");
d.hasClass("ui-state-disabled")||this._select(d.data("ui-selectmenu-item"),c)
},_select:function(d,f){var c=this.element[0].selectedIndex;
this.element[0].selectedIndex=d.index,this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(d)),this._setAria(d),this._trigger("select",f,{item:d}),d.index!==c&&this._trigger("change",f,{item:d}),this.close(f)
},_setAria:function(c){var d=this.menuItems.eq(c.index).attr("id");
this.button.attr({"aria-labelledby":d,"aria-activedescendant":d}),this.menu.attr("aria-activedescendant",d)
},_setOption:function(d,f){if("icons"===d){var c=this.button.find("span.ui-icon");
this._removeClass(c,null,this.options.icons.button)._addClass(c,null,f.button)
}this._super(d,f),"appendTo"===d&&this.menuWrap.appendTo(this._appendTo()),"width"===d&&this._resizeButton()
},_setOptionDisabled:function(c){this._super(c),this.menuInstance.option("disabled",c),this.button.attr("aria-disabled",c),this._toggleClass(this.button,null,"ui-state-disabled",c),this.element.prop("disabled",c),c?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)
},_appendTo:function(){var c=this.options.appendTo;
return c&&(c=c.jquery||c.nodeType?k(c):this.document.find(c).eq(0)),c&&c[0]||(c=this.element.closest(".ui-front, dialog")),c.length||(c=this.document[0].body),c
},_toggleAttr:function(){this.button.attr("aria-expanded",this.isOpen),this._removeClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"closed":"open"))._addClass(this.button,"ui-selectmenu-button-"+(this.isOpen?"open":"closed"))._toggleClass(this.menuWrap,"ui-selectmenu-open",null,this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var c=this.options.width;
return c===!1?(this.button.css("width",""),void 0):(null===c&&(c=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(c),void 0)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){var c=this._super();
return c.disabled=this.element.prop("disabled"),c
},_parseOptions:function(f){var c=this,d=[];
f.each(function(g,h){d.push(c._parseOption(k(h),g))
}),this.items=d
},_parseOption:function(d,f){var c=d.parent("optgroup");
return{element:d,index:f,value:d.val(),label:d.text(),optgroup:c.attr("label")||"",disabled:c.prop("disabled")||d.prop("disabled")}
},_destroy:function(){this._unbindFormResetHandler(),this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.labels.attr("for",this.ids.element)
}}]),k.widget("ui.slider",k.ui.mouse,{version:"1.12.1",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var g,d,f=this.options,l=this.element.find(".ui-slider-handle"),h="<span tabindex='0'></span>",c=[];
for(d=f.values&&f.values.length||1,l.length>d&&(l.slice(d).remove(),l=l.slice(0,d)),g=l.length;
d>g;
g++){c.push(h)
}this.handles=l.add(k(c.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(i){k(this).data("ui-slider-handle-index",i).attr("tabIndex",0)
})
},_createRange:function(){var c=this.options;
c.range?(c.range===!0&&(c.values?c.values.length&&2!==c.values.length?c.values=[c.values[0],c.values[0]]:k.isArray(c.values)&&(c.values=c.values.slice(0)):c.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=k("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===c.range||"max"===c.range)&&this._addClass(this.range,"ui-slider-range-"+c.range)):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()
},_mouseCapture:function(v){var p,O,g,f,M,d,t,m,L=this,N=this.options;
return N.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),p={x:v.pageX,y:v.pageY},O=this._normValueFromMouse(p),g=this._valueMax()-this._valueMin()+1,this.handles.each(function(h){var c=Math.abs(O-L.values(h));
(g>c||g===c&&(h===L._lastChangedValue||L.values(h)===N.min))&&(g=c,f=k(this),M=h)
}),d=this._start(v,M),d===!1?!1:(this._mouseSliding=!0,this._handleIndex=M,this._addClass(f,null,"ui-state-active"),f.trigger("focus"),t=f.offset(),m=!k(v.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=m?{left:0,top:0}:{left:v.pageX-t.left-f.width()/2,top:v.pageY-t.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(v,M,O),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(d){var f={x:d.pageX,y:d.pageY},c=this._normValueFromMouse(f);
return this._slide(d,this._handleIndex,c),!1
},_mouseStop:function(c){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(c,this._handleIndex),this._change(c,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(d){var g,c,f,l,h;
return"horizontal"===this.orientation?(g=this.elementSize.width,c=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(g=this.elementSize.height,c=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),f=c/g,f>1&&(f=1),0>f&&(f=0),"vertical"===this.orientation&&(f=1-f),l=this._valueMax()-this._valueMin(),h=this._valueMin()+f*l,this._trimAlignValue(h)
},_uiHash:function(d,g,c){var f={handle:this.handles[d],handleIndex:d,value:void 0!==g?g:this.value()};
return this._hasMultipleValues()&&(f.value=void 0!==g?g:this.values(d),f.values=c||this.values()),f
},_hasMultipleValues:function(){return this.options.values&&this.options.values.length
},_start:function(c,d){return this._trigger("start",c,this._uiHash(d))
},_slide:function(f,h,d){var g,m,l=this.value(),c=this.values();
this._hasMultipleValues()&&(m=this.values(h?0:1),l=this.values(h),2===this.options.values.length&&this.options.range===!0&&(d=0===h?Math.min(m,d):Math.max(m,d)),c[h]=d),d!==l&&(g=this._trigger("slide",f,this._uiHash(h,d,c)),g!==!1&&(this._hasMultipleValues()?this.values(h,d):this.value(d)))
},_stop:function(c,d){this._trigger("stop",c,this._uiHash(d))
},_change:function(c,d){this._keySliding||this._mouseSliding||(this._lastChangedValue=d,this._trigger("change",c,this._uiHash(d)))
},value:function(c){return arguments.length?(this.options.value=this._trimAlignValue(c),this._refreshValue(),this._change(null,0),void 0):this._value()
},values:function(f,c){var d,h,g;
if(arguments.length>1){return this.options.values[f]=this._trimAlignValue(c),this._refreshValue(),this._change(null,f),void 0
}if(!arguments.length){return this._values()
}if(!k.isArray(arguments[0])){return this._hasMultipleValues()?this._values(f):this.value()
}for(d=this.options.values,h=arguments[0],g=0;
d.length>g;
g+=1){d[g]=this._trimAlignValue(h[g]),this._change(null,g)
}this._refreshValue()
},_setOption:function(f,c){var d,g=0;
switch("range"===f&&this.options.range===!0&&("min"===c?(this.options.value=this._values(0),this.options.values=null):"max"===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),k.isArray(this.options.values)&&(g=this.options.values.length),this._super(f,c),f){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(c),this.handles.css("horizontal"===c?"bottom":"left","");
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),d=g-1;
d>=0;
d--){this._change(null,d)
}this._animateOff=!1;
break;
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_setOptionDisabled:function(c){this._super(c),this._toggleClass(null,"ui-state-disabled",!!c)
},_value:function(){var c=this.options.value;
return c=this._trimAlignValue(c)
},_values:function(d){var g,c,f;
if(arguments.length){return g=this.options.values[d],g=this._trimAlignValue(g)
}if(this._hasMultipleValues()){for(c=this.options.values.slice(),f=0;
c.length>f;
f+=1){c[f]=this._trimAlignValue(c[f])
}return c
}return[]
},_trimAlignValue:function(d){if(this._valueMin()>=d){return this._valueMin()
}if(d>=this._valueMax()){return this._valueMax()
}var g=this.options.step>0?this.options.step:1,c=(d-this._valueMin())%g,f=d-c;
return 2*Math.abs(c)>=g&&(f+=c>0?g:-g),parseFloat(f.toFixed(5))
},_calculateNewMax:function(){var d=this.options.max,g=this._valueMin(),c=this.options.step,f=Math.round((d-g)/c)*c;
d=f+g,d>this.options.max&&(d-=c),this.max=parseFloat(d.toFixed(this._precision()))
},_precision:function(){var c=this._precisionOf(this.options.step);
return null!==this.options.min&&(c=Math.max(c,this._precisionOf(this.options.min))),c
},_precisionOf:function(d){var f=""+d,c=f.indexOf(".");
return -1===c?0:f.length-c-1
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshRange:function(c){"vertical"===c&&this.range.css({width:"",left:""}),"horizontal"===c&&this.range.css({height:"",bottom:""})
},_refreshValue:function(){var u,p,M,g,f,L=this.options.range,d=this.options,t=this,m=this._animateOff?!1:d.animate,v={};
this._hasMultipleValues()?this.handles.each(function(c){p=100*((t.values(c)-t._valueMin())/(t._valueMax()-t._valueMin())),v["horizontal"===t.orientation?"left":"bottom"]=p+"%",k(this).stop(1,1)[m?"animate":"css"](v,d.animate),t.options.range===!0&&("horizontal"===t.orientation?(0===c&&t.range.stop(1,1)[m?"animate":"css"]({left:p+"%"},d.animate),1===c&&t.range[m?"animate":"css"]({width:p-u+"%"},{queue:!1,duration:d.animate})):(0===c&&t.range.stop(1,1)[m?"animate":"css"]({bottom:p+"%"},d.animate),1===c&&t.range[m?"animate":"css"]({height:p-u+"%"},{queue:!1,duration:d.animate}))),u=p
}):(M=this.value(),g=this._valueMin(),f=this._valueMax(),p=f!==g?100*((M-g)/(f-g)):0,v["horizontal"===this.orientation?"left":"bottom"]=p+"%",this.handle.stop(1,1)[m?"animate":"css"](v,d.animate),"min"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:p+"%"},d.animate),"max"===L&&"horizontal"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({width:100-p+"%"},d.animate),"min"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:p+"%"},d.animate),"max"===L&&"vertical"===this.orientation&&this.range.stop(1,1)[m?"animate":"css"]({height:100-p+"%"},d.animate))
},_handleEvents:{keydown:function(g){var d,f,l,h,c=k(g.target).data("ui-slider-handle-index");
switch(g.keyCode){case k.ui.keyCode.HOME:case k.ui.keyCode.END:case k.ui.keyCode.PAGE_UP:case k.ui.keyCode.PAGE_DOWN:case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(g.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(k(g.target),null,"ui-state-active"),d=this._start(g,c),d===!1)){return
}}switch(h=this.options.step,f=l=this._hasMultipleValues()?this.values(c):this.value(),g.keyCode){case k.ui.keyCode.HOME:l=this._valueMin();
break;
case k.ui.keyCode.END:l=this._valueMax();
break;
case k.ui.keyCode.PAGE_UP:l=this._trimAlignValue(f+(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.PAGE_DOWN:l=this._trimAlignValue(f-(this._valueMax()-this._valueMin())/this.numPages);
break;
case k.ui.keyCode.UP:case k.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}l=this._trimAlignValue(f+h);
break;
case k.ui.keyCode.DOWN:case k.ui.keyCode.LEFT:if(f===this._valueMin()){return
}l=this._trimAlignValue(f-h)
}this._slide(g,c,l)
},keyup:function(d){var c=k(d.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(d,c),this._change(d,c),this._removeClass(k(d.target),null,"ui-state-active"))
}}}),k.widget("ui.spinner",{version:"1.12.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var d=this._super(),c=this.element;
return k.each(["min","max","step"],function(e,f){var g=c.attr(f);
null!=g&&g.length&&(d[f]=g)
}),d
},_events:{keydown:function(c){this._start(c)&&this._keydown(c)&&c.preventDefault()
},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(c){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",c),void 0)
},mousewheel:function(c,d){if(d){if(!this.spinning&&!this._start(c)){return !1
}this._spin((d>0?1:-1)*this.options.step,c),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(c)
},100),c.preventDefault()
}},"mousedown .ui-spinner-button":function(f){function c(){var g=this.element[0]===k.ui.safeActiveElement(this.document[0]);
g||(this.element.trigger("focus"),this.previous=d,this._delay(function(){this.previous=d
}))
}var d;
d=this.element[0]===k.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),f.preventDefault(),c.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,c.call(this)
}),this._start(f)!==!1&&this._repeat(null,k(f.currentTarget).hasClass("ui-spinner-up")?1:-1,f)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(c){return k(c.currentTarget).hasClass("ui-state-active")?this._start(c)===!1?!1:(this._repeat(null,k(c.currentTarget).hasClass("ui-spinner-up")?1:-1,c),void 0):void 0
},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")
},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(0.5*this.uiSpinner.height())&&this.uiSpinner.height()>0&&this.uiSpinner.height(this.uiSpinner.height())
},_keydown:function(f){var c=this.options,d=k.ui.keyCode;
switch(f.keyCode){case d.UP:return this._repeat(null,1,f),!0;
case d.DOWN:return this._repeat(null,-1,f),!0;
case d.PAGE_UP:return this._repeat(null,c.page,f),!0;
case d.PAGE_DOWN:return this._repeat(null,-c.page,f),!0
}return !1
},_start:function(c){return this.spinning||this._trigger("start",c)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1
},_repeat:function(d,f,c){d=d||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,f,c)
},d),this._spin(f*this.options.step,c)
},_spin:function(d,f){var c=this.value()||0;
this.counter||(this.counter=1),c=this._adjustValue(c+d*this._increment(this.counter)),this.spinning&&this._trigger("spin",f,{value:c})===!1||(this._value(c),this.counter++)
},_increment:function(d){var c=this.options.incremental;
return c?k.isFunction(c)?c(d):Math.floor(d*d*d/50000-d*d/500+17*d/200+1):1
},_precision:function(){var c=this._precisionOf(this.options.step);
return null!==this.options.min&&(c=Math.max(c,this._precisionOf(this.options.min))),c
},_precisionOf:function(d){var f=""+d,c=f.indexOf(".");
return -1===c?0:f.length-c-1
},_adjustValue:function(d){var g,c,f=this.options;
return g=null!==f.min?f.min:0,c=d-g,c=Math.round(c/f.step)*f.step,d=g+c,d=parseFloat(d.toFixed(this._precision())),null!==f.max&&d>f.max?f.max:null!==f.min&&f.min>d?f.min:d
},_stop:function(c){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",c))
},_setOption:function(d,g){var c,f,h;
return"culture"===d||"numberFormat"===d?(c=this._parse(this.element.val()),this.options[d]=g,this.element.val(this._format(c)),void 0):(("max"===d||"min"===d||"step"===d)&&"string"==typeof g&&(g=this._parse(g)),"icons"===d&&(f=this.buttons.first().find(".ui-icon"),this._removeClass(f,null,this.options.icons.up),this._addClass(f,null,g.up),h=this.buttons.last().find(".ui-icon"),this._removeClass(h,null,this.options.icons.down),this._addClass(h,null,g.down)),this._super(d,g),void 0)
},_setOptionDisabled:function(c){this._super(c),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!c),this.element.prop("disabled",!!c),this.buttons.button(c?"disable":"enable")
},_setOptions:w(function(c){this._super(c)
}),_parse:function(c){return"string"==typeof c&&""!==c&&(c=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(c,10,this.options.culture):+c),""===c||isNaN(c)?null:c
},_format:function(c){return""===c?"":window.Globalize&&this.options.numberFormat?Globalize.format(c,this.options.numberFormat,this.options.culture):c
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var c=this.value();
return null===c?!1:c===this._adjustValue(c)
},_value:function(d,f){var c;
""!==d&&(c=this._parse(d),null!==c&&(f||(c=this._adjustValue(c)),d=this._format(c))),this.element.val(d),this._refresh()
},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)
},stepUp:w(function(c){this._stepUp(c)
}),_stepUp:function(c){this._start()&&(this._spin((c||1)*this.options.step),this._stop())
},stepDown:w(function(c){this._stepDown(c)
}),_stepDown:function(c){this._start()&&(this._spin((c||1)*-this.options.step),this._stop())
},pageUp:w(function(c){this._stepUp((c||1)*this.options.page)
}),pageDown:w(function(c){this._stepDown((c||1)*this.options.page)
}),value:function(c){return arguments.length?(w(this._value).call(this,c),void 0):this._parse(this.element.val())
},widget:function(){return this.uiSpinner
}}),k.uiBackCompat!==!1&&k.widget("ui.spinner",k.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
},_uiSpinnerHtml:function(){return"<span>"
},_buttonHtml:function(){return"<a></a><a></a>"
}}),k.ui.spinner,k.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var c=/#.*$/;
return function(g){var d,f;
d=g.href.replace(c,""),f=location.href.replace(c,"");
try{d=decodeURIComponent(d)
}catch(h){}try{f=decodeURIComponent(f)
}catch(h){}return g.hash.length>1&&d===f
}
}(),_create:function(){var d=this,c=this.options;
this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,c.collapsible),this._processTabs(),c.active=this._initialActive(),k.isArray(c.disabled)&&(c.disabled=k.unique(c.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"),function(e){return d.tabs.index(e)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(c.active):k(),this._refresh(),this.active.length&&this.load(c.active)
},_initialActive:function(){var f=this.options.active,c=this.options.collapsible,d=location.hash.substring(1);
return null===f&&(d&&this.tabs.each(function(e,g){return k(g).attr("aria-controls")===d?(f=e,!1):void 0
}),null===f&&(f=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===f||-1===f)&&(f=this.tabs.length?0:!1)),f!==!1&&(f=this.tabs.index(this.tabs.eq(f)),-1===f&&(f=c?!1:0)),!c&&f===!1&&this.anchors.length&&(f=0),f
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):k()}
},_tabKeydown:function(f){var c=k(k.ui.safeActiveElement(this.document[0])).closest("li"),d=this.tabs.index(c),g=!0;
if(!this._handlePageNav(f)){switch(f.keyCode){case k.ui.keyCode.RIGHT:case k.ui.keyCode.DOWN:d++;
break;
case k.ui.keyCode.UP:case k.ui.keyCode.LEFT:g=!1,d--;
break;
case k.ui.keyCode.END:d=this.anchors.length-1;
break;
case k.ui.keyCode.HOME:d=0;
break;
case k.ui.keyCode.SPACE:return f.preventDefault(),clearTimeout(this.activating),this._activate(d),void 0;
case k.ui.keyCode.ENTER:return f.preventDefault(),clearTimeout(this.activating),this._activate(d===this.options.active?!1:d),void 0;
default:return
}f.preventDefault(),clearTimeout(this.activating),d=this._focusNextTab(d,g),f.ctrlKey||f.metaKey||(c.attr("aria-selected","false"),this.tabs.eq(d).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",d)
},this.delay))
}},_panelKeydown:function(c){this._handlePageNav(c)||c.ctrlKey&&c.keyCode===k.ui.keyCode.UP&&(c.preventDefault(),this.active.trigger("focus"))
},_handlePageNav:function(c){return c.altKey&&c.keyCode===k.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):c.altKey&&c.keyCode===k.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0
},_findNextTab:function(f,c){function d(){return f>g&&(f=0),0>f&&(f=g),f
}for(var g=this.tabs.length-1;
-1!==k.inArray(d(),this.options.disabled);
){f=c?f+1:f-1
}return f
},_focusNextTab:function(c,d){return c=this._findNextTab(c,d),this.tabs.eq(c).trigger("focus"),c
},_setOption:function(c,d){return"active"===c?(this._activate(d),void 0):(this._super(c,d),"collapsible"===c&&(this._toggleClass("ui-tabs-collapsible",null,d),d||this.options.active!==!1||this._activate(0)),"event"===c&&this._setupEvents(d),"heightStyle"===c&&this._setupHeightStyle(d),void 0)
},_sanitizeSelector:function(c){return c?c.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var d=this.options,c=this.tablist.children(":has(a[href])");
d.disabled=k.map(c.filter(".ui-state-disabled"),function(e){return c.index(e)
}),this._processTabs(),d.active!==!1&&this.anchors.length?this.active.length&&!k.contains(this.tablist[0],this.active[0])?this.tabs.length===d.disabled.length?(d.active=!1,this.active=k()):this._activate(this._findNextTab(Math.max(0,d.active-1),!1)):d.active=this.tabs.index(this.active):(d.active=!1,this.active=k()),this._refresh()
},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var f=this,c=this.tabs,d=this.anchors,g=this.panels;
this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),this.tablist.on("mousedown"+this.eventNamespace,"> li",function(h){k(this).is(".ui-state-disabled")&&h.preventDefault()
}).on("focus"+this.eventNamespace,".ui-tabs-anchor",function(){k(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map(function(){return k("a",this)[0]
}).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=k(),this.anchors.each(function(p,u){var M,L,m,v=k(u).uniqueId().attr("id"),t=k(u).closest("li"),e=t.attr("aria-controls");
f._isLocal(u)?(M=u.hash,m=M.substring(1),L=f.element.find(f._sanitizeSelector(M))):(m=t.attr("aria-controls")||k({}).uniqueId()[0].id,M="#"+m,L=f.element.find(M),L.length||(L=f._createPanel(m),L.insertAfter(f.panels[p-1]||f.tablist)),L.attr("aria-live","polite")),L.length&&(f.panels=f.panels.add(L)),e&&t.data("ui-tabs-aria-controls",e),t.attr({"aria-controls":m,"aria-labelledby":v}),L.attr("aria-labelledby",v)
}),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),c&&(this._off(c.not(this.tabs)),this._off(d.not(this.anchors)),this._off(g.not(this.panels)))
},_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)
},_createPanel:function(c){return k("<div>").attr("id",c).data("ui-tabs-destroy",!0)
},_setOptionDisabled:function(f){var c,d,g;
for(k.isArray(f)&&(f.length?f.length===this.anchors.length&&(f=!0):f=!1),g=0;
d=this.tabs[g];
g++){c=k(d),f===!0||-1!==k.inArray(g,f)?(c.attr("aria-disabled","true"),this._addClass(c,null,"ui-state-disabled")):(c.removeAttr("aria-disabled"),this._removeClass(c,null,"ui-state-disabled"))
}this.options.disabled=f,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,f===!0)
},_setupEvents:function(d){var c={};
d&&k.each(d.split(" "),function(f,g){c[g]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()
}}),this._on(this.anchors,c),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(f){var c,d=this.element.parent();
"fill"===f?(c=d.height(),c-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var h=k(this),g=h.css("position");
"absolute"!==g&&"fixed"!==g&&(c-=h.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){c-=k(this).outerHeight(!0)
}),this.panels.each(function(){k(this).height(Math.max(0,c-k(this).innerHeight()+k(this).height()))
}).css("overflow","auto")):"auto"===f&&(c=0,this.panels.each(function(){c=Math.max(c,k(this).height("").height())
}).height(c))
},_eventHandler:function(u){var p=this.options,M=this.active,g=k(u.currentTarget),f=g.closest("li"),L=f[0]===M[0],d=L&&p.collapsible,t=d?k():this._getPanelForTab(f),m=M.length?this._getPanelForTab(M):k(),v={oldTab:M,oldPanel:m,newTab:d?k():f,newPanel:t};
u.preventDefault(),f.hasClass("ui-state-disabled")||f.hasClass("ui-tabs-loading")||this.running||L&&!p.collapsible||this._trigger("beforeActivate",u,v)===!1||(p.active=d?!1:this.tabs.index(f),this.active=L?k():f,this.xhr&&this.xhr.abort(),m.length||t.length||k.error("jQuery UI Tabs: Mismatching fragment identifier."),t.length&&this.load(this.tabs.index(f),u),this._toggle(u,v))
},_toggle:function(h,d){function f(){l.running=!1,l._trigger("activate",h,d)
}function m(){l._addClass(d.newTab.closest("li"),"ui-tabs-active","ui-state-active"),c.length&&l.options.show?l._show(c,l.options.show,f):(c.show(),f())
}var l=this,c=d.newPanel,g=d.oldPanel;
this.running=!0,g.length&&this.options.hide?this._hide(g,this.options.hide,function(){l._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),m()
}):(this._removeClass(d.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),g.hide(),m()),g.attr("aria-hidden","true"),d.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),c.length&&g.length?d.oldTab.attr("tabIndex",-1):c.length&&this.tabs.filter(function(){return 0===k(this).attr("tabIndex")
}).attr("tabIndex",-1),c.attr("aria-hidden","false"),d.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(f){var c,d=this._findActive(f);
d[0]!==this.active[0]&&(d.length||(d=this.active),c=d.find(".ui-tabs-anchor")[0],this._eventHandler({target:c,currentTarget:c,preventDefault:k.noop}))
},_findActive:function(c){return c===!1?k():this.tabs.eq(c)
},_getIndex:function(c){return"string"==typeof c&&(c=this.anchors.index(this.anchors.filter("[href$='"+k.ui.escapeSelector(c)+"']"))),c
},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){k.data(this,"ui-tabs-destroy")?k(this).remove():k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
}),this.tabs.each(function(){var d=k(this),c=d.data("ui-tabs-aria-controls");
c?d.attr("aria-controls",c).removeData("ui-tabs-aria-controls"):d.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(d){var c=this.options.disabled;
c!==!1&&(void 0===d?c=!1:(d=this._getIndex(d),c=k.isArray(c)?k.map(c,function(e){return e!==d?e:null
}):k.map(this.tabs,function(f,e){return e!==d?e:null
})),this._setOptionDisabled(c))
},disable:function(d){var c=this.options.disabled;
if(c!==!0){if(void 0===d){c=!0
}else{if(d=this._getIndex(d),-1!==k.inArray(d,c)){return
}c=k.isArray(c)?k.merge([d],c).sort():[d]
}this._setOptionDisabled(c)
}},load:function(m,d){m=this._getIndex(m);
var g=this,t=this.tabs.eq(m),p=t.find(".ui-tabs-anchor"),c=this._getPanelForTab(t),l={tab:t,panel:c},f=function(h,i){"abort"===i&&g.panels.stop(!1,!0),g._removeClass(t,"ui-tabs-loading"),c.removeAttr("aria-busy"),h===g.xhr&&delete g.xhr
};
this._isLocal(p[0])||(this.xhr=k.ajax(this._ajaxSettings(p,d,l)),this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(t,"ui-tabs-loading"),c.attr("aria-busy","true"),this.xhr.done(function(h,i,o){setTimeout(function(){c.html(h),g._trigger("load",d,l),f(o,i)
},1)
}).fail(function(h,i){setTimeout(function(){f(h,i)
},1)
})))
},_ajaxSettings:function(f,c,d){var g=this;
return{url:f.attr("href").replace(/#.*$/,""),beforeSend:function(h,i){return g._trigger("beforeLoad",c,k.extend({jqXHR:h,ajaxSettings:i},d))
}}
},_getPanelForTab:function(d){var c=k(d).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+c))
}}),k.uiBackCompat!==!1&&k.widget("ui.tabs",k.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")
}}),k.ui.tabs,k.widget("ui.tooltip",{version:"1.12.1",options:{classes:{"ui-tooltip":"ui-corner-all ui-widget-shadow"},content:function(){var c=k(this).attr("title")||"";
return k("<a>").text(c).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,track:!1,close:null,open:null},_addDescribedBy:function(f,c){var d=(f.attr("aria-describedby")||"").split(/\s+/);
d.push(c),f.data("ui-tooltip-id",c).attr("aria-describedby",k.trim(d.join(" ")))
},_removeDescribedBy:function(f){var c=f.data("ui-tooltip-id"),d=(f.attr("aria-describedby")||"").split(/\s+/),g=k.inArray(c,d);
-1!==g&&d.splice(g,1),f.removeData("ui-tooltip-id"),d=k.trim(d.join(" ")),d?f.attr("aria-describedby",d):f.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.liveRegion=k("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this.disabledTitles=k([])
},_setOption:function(f,c){var d=this;
this._super(f,c),"content"===f&&k.each(this.tooltips,function(g,h){d._updateContent(h.element)
})
},_setOptionDisabled:function(c){this[c?"_disable":"_enable"]()
},_disable:function(){var c=this;
k.each(this.tooltips,function(d,e){var f=k.Event("blur");
f.target=f.currentTarget=e.element[0],c.close(f,!0)
}),this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function(){var d=k(this);
return d.is("[title]")?d.data("ui-tooltip-title",d.attr("title")).removeAttr("title"):void 0
}))
},_enable:function(){this.disabledTitles.each(function(){var c=k(this);
c.data("ui-tooltip-title")&&c.attr("title",c.data("ui-tooltip-title"))
}),this.disabledTitles=k([])
},open:function(f){var c=this,d=k(f?f.target:this.element).closest(this.options.items);
d.length&&!d.data("ui-tooltip-id")&&(d.attr("title")&&d.data("ui-tooltip-title",d.attr("title")),d.data("ui-tooltip-open",!0),f&&"mouseover"===f.type&&d.parents().each(function(){var h,g=k(this);
g.data("ui-tooltip-open")&&(h=k.Event("blur"),h.target=h.currentTarget=this,c.close(h,!0)),g.attr("title")&&(g.uniqueId(),c.parents[this.id]={element:this,title:g.attr("title")},g.attr("title",""))
}),this._registerCloseHandlers(f,d),this._updateContent(d,f))
},_updateContent:function(d,g){var c,f=this.options.content,l=this,h=g?g.type:null;
return"string"==typeof f||f.nodeType||f.jquery?this._open(g,d,f):(c=f.call(d[0],function(e){l._delay(function(){d.data("ui-tooltip-open")&&(g&&(g.type=h),this._open(g,d,e))
})
}),c&&this._open(g,d,c),void 0)
},_open:function(t,m,v){function f(e){g.of=e,u.is(":hidden")||u.position(g)
}var d,u,c,p,g=k.extend({},this.options.position);
if(v){if(d=this._find(m)){return d.tooltip.find(".ui-tooltip-content").html(v),void 0
}m.is("[title]")&&(t&&"mouseover"===t.type?m.attr("title",""):m.removeAttr("title")),d=this._tooltip(m),u=d.tooltip,this._addDescribedBy(m,u.attr("id")),u.find(".ui-tooltip-content").html(v),this.liveRegion.children().hide(),p=k("<div>").html(u.find(".ui-tooltip-content").html()),p.removeAttr("name").find("[name]").removeAttr("name"),p.removeAttr("id").find("[id]").removeAttr("id"),p.appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):u.position(k.extend({of:m},this.options.position)),u.hide(),this._show(u,this.options.show),this.options.track&&this.options.show&&this.options.show.delay&&(c=this.delayedShow=setInterval(function(){u.is(":visible")&&(f(g.of),clearInterval(c))
},k.fx.interval)),this._trigger("open",t,{tooltip:u})
}},_registerCloseHandlers:function(f,c){var d={keyup:function(h){if(h.keyCode===k.ui.keyCode.ESCAPE){var g=k.Event(h);
g.currentTarget=c[0],this.close(g,!0)
}}};
c[0]!==this.element[0]&&(d.remove=function(){this._removeTooltip(this._find(c).tooltip)
}),f&&"mouseover"!==f.type||(d.mouseleave="close"),f&&"focusin"!==f.type||(d.focusout="close"),this._on(!0,c,d)
},close:function(f){var c,d=this,h=k(f?f.currentTarget:this.element),g=this._find(h);
return g?(c=g.tooltip,g.closing||(clearInterval(this.delayedShow),h.data("ui-tooltip-title")&&!h.attr("title")&&h.attr("title",h.data("ui-tooltip-title")),this._removeDescribedBy(h),g.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){d._removeTooltip(k(this))
}),h.removeData("ui-tooltip-open"),this._off(h,"mouseleave focusout keyup"),h[0]!==this.element[0]&&this._off(h,"remove"),this._off(this.document,"mousemove"),f&&"mouseleave"===f.type&&k.each(this.parents,function(m,l){k(l.element).attr("title",l.title),delete d.parents[m]
}),g.closing=!0,this._trigger("close",f,{tooltip:c}),g.hiding||(g.closing=!1)),void 0):(h.removeData("ui-tooltip-open"),void 0)
},_tooltip:function(f){var c=k("<div>").attr("role","tooltip"),d=k("<div>").appendTo(c),g=c.uniqueId().attr("id");
return this._addClass(d,"ui-tooltip-content"),this._addClass(c,"ui-tooltip","ui-widget ui-widget-content"),c.appendTo(this._appendTo(f)),this.tooltips[g]={element:f,tooltip:c}
},_find:function(c){var d=c.data("ui-tooltip-id");
return d?this.tooltips[d]:null
},_removeTooltip:function(c){c.remove(),delete this.tooltips[c.attr("id")]
},_appendTo:function(c){var d=c.closest(".ui-front, dialog");
return d.length||(d=this.document[0].body),d
},_destroy:function(){var c=this;
k.each(this.tooltips,function(d,e){var g=k.Event("blur"),f=e.element;
g.target=g.currentTarget=f[0],c.close(g,!0),k("#"+d).remove(),f.data("ui-tooltip-title")&&(f.attr("title")||f.attr("title",f.data("ui-tooltip-title")),f.removeData("ui-tooltip-title"))
}),this.liveRegion.remove()
}}),k.uiBackCompat!==!1&&k.widget("ui.tooltip",k.ui.tooltip,{options:{tooltipClass:null},_tooltip:function(){var c=this._superApply(arguments);
return this.options.tooltipClass&&c.tooltip.addClass(this.options.tooltipClass),c
}}),k.ui.tooltip;
var F="ui-effects-",E="ui-effects-style",A="ui-effects-animated",K=k;
k.effects={effect:{}},function(V,Q){function N(d,h,c){var f=U[h.type]||{};
return null==d?c||!h.def?null:h.def:(d=f.floor?~~d:parseFloat(d),isNaN(d)?h.def:f.mod?(d+f.mod)%f.mod:0>d?0:d>f.max?f.max:d)
}function W(c){var d=M(),e=d._rgba=[];
return c=c.toLowerCase(),P(O,function(p,Y){var i,X=Y.re.exec(c),u=X&&Y.parse(X),f=Y.space||"rgba";
return u?(i=d[f](u),d[S[f].cache]=i[S[f].cache],e=d._rgba=i._rgba,!1):Q
}),e.length?("0,0,0,0"===e.join()&&V.extend(e,v.transparent),d):v[c]
}function L(d,f,c){return c=(c+1)%1,1>6*c?d+6*(f-d)*c:1>2*c?f:2>3*c?d+6*(f-d)*(2/3-c):d
}var v,T="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",g=/^([\-+])=\s*(\d+\.?\d*)/,O=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(c){return[c[1],c[2],c[3],c[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(c){return[2.55*c[1],2.55*c[2],2.55*c[3],c[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(c){return[parseInt(c[1],16),parseInt(c[2],16),parseInt(c[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(c){return[parseInt(c[1]+c[1],16),parseInt(c[2]+c[2],16),parseInt(c[3]+c[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(c){return[c[1],c[2]/100,c[3]/100,c[4]]
}}],M=V.Color=function(f,c,d,h){return new V.Color.fn.parse(f,c,d,h)
},S={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},U={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},R=M.support={},m=V("<p>")[0],P=V.each;
m.style.cssText="background-color:rgba(1,1,1,.5)",R.rgba=m.style.backgroundColor.indexOf("rgba")>-1,P(S,function(c,d){d.cache="_"+c,d.props.alpha={idx:3,type:"percent",def:1}
}),M.fn=V.extend(M.prototype,{parse:function(t,c,i,f){if(t===Q){return this._rgba=[null,null,null,null],this
}(t.jquery||t.nodeType)&&(t=V(t).css(c),c=Q);
var e=this,o=V.type(t),l=this._rgba=[];
return c!==Q&&(t=[t,c,i,f],o="array"),"string"===o?this.parse(W(t)||v._default):"array"===o?(P(S.rgba.props,function(d,h){l[h.idx]=N(t[h.idx],h)
}),this):"object"===o?(t instanceof M?P(S,function(d,h){t[h.cache]&&(e[h.cache]=t[h.cache].slice())
}):P(S,function(h,d){var p=d.cache;
P(d.props,function(r,u){if(!e[p]&&d.to){if("alpha"===r||null==t[r]){return
}e[p]=d.to(e._rgba)
}e[p][u.idx]=N(t[r],u,!0)
}),e[p]&&0>V.inArray(null,e[p].slice(0,3))&&(e[p][3]=1,d.from&&(e._rgba=d.from(e[p])))
}),this):Q
},is:function(d){var c=M(d),e=!0,f=this;
return P(S,function(i,p){var h,l=c[p.cache];
return l&&(h=f[p.cache]||p.to&&p.to(f._rgba)||[],P(p.props,function(r,o){return null!=l[o.idx]?e=l[o.idx]===h[o.idx]:Q
})),e
}),e
},_space:function(){var c=[],d=this;
return P(S,function(e,f){d[f.cache]&&c.push(e)
}),c.pop()
},transition:function(d,p){var i=M(d),X=i._space(),u=S[X],c=0===this.alpha()?M("transparent"):this,l=c[u.cache]||u.to(c._rgba),f=l.slice();
return i=i[u.cache],P(u.props,function(r,aa){var Y=aa.idx,h=l[Y],e=i[Y],Z=U[aa.type]||{};
null!==e&&(null===h?f[Y]=e:(Z.mod&&(e-h>Z.mod/2?h+=Z.mod:h-e>Z.mod/2&&(h-=Z.mod)),f[Y]=N((e-h)*p+h,aa)))
}),this[X](f)
},blend:function(f){if(1===this._rgba[3]){return this
}var c=this._rgba.slice(),d=c.pop(),h=M(f)._rgba;
return M(V.map(c,function(i,l){return(1-d)*h[l]+d*i
}))
},toRgbaString:function(){var d="rgba(",c=V.map(this._rgba,function(f,h){return null==f?h>2?1:0:f
});
return 1===c[3]&&(c.pop(),d="rgb("),d+c.join()+")"
},toHslaString:function(){var d="hsla(",c=V.map(this.hsla(),function(f,h){return null==f&&(f=h>2?1:0),h&&3>h&&(f=Math.round(100*f)+"%"),f
});
return 1===c[3]&&(c.pop(),d="hsl("),d+c.join()+")"
},toHexString:function(f){var c=this._rgba.slice(),d=c.pop();
return f&&c.push(~~(255*d)),"#"+V.map(c,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),M.fn.parse.prototype=M.fn,S.hsla.to=function(ae){if(null==ae[0]||null==ae[1]||null==ae[2]){return[null,null,null,ae[3]]
}var aa,Y,af=ae[0]/255,p=ae[1]/255,f=ae[2]/255,ac=ae[3],d=Math.max(af,p,f),Z=Math.min(af,p,f),X=d-Z,ab=d+Z,ad=0.5*ab;
return aa=Z===d?0:af===d?60*(p-f)/X+360:p===d?60*(f-af)/X+120:60*(af-p)/X+240,Y=0===X?0:0.5>=ad?X/ab:X/(2-ab),[Math.round(aa)%360,Y,ad,null==ac?1:ac]
},S.hsla.from=function(f){if(null==f[0]||null==f[1]||null==f[2]){return[null,null,null,f[3]]
}var p=f[0]/360,d=f[1],h=f[2],u=f[3],c=0.5>=h?h*(1+d):h+d-h*d,l=2*h-c;
return[Math.round(255*L(l,c,p+1/3)),Math.round(255*L(l,c,p)),Math.round(255*L(l,c,p-1/3)),u]
},P(S,function(f,p){var i=p.props,d=p.cache,e=p.to,l=p.from;
M.fn[f]=function(h){if(e&&!this[d]&&(this[d]=e(this._rgba)),h===Q){return this[d].slice()
}var X,o=V.type(h),c="array"===o||"object"===o?h:arguments,t=this[d].slice();
return P(i,function(r,Y){var u=c["object"===o?r:Y.idx];
null==u&&(u=t[Y.idx]),t[Y.idx]=N(u,Y)
}),l?(X=M(l(t)),X[d]=t,X):M(t)
},P(i,function(h,c){M.fn[h]||(M.fn[h]=function(Z){var X,t=V.type(Z),u="alpha"===h?this._hsla?"hsla":"rgba":f,r=this[u](),Y=r[c.idx];
return"undefined"===t?Y:("function"===t&&(Z=Z.call(this,Y),t=V.type(Z)),null==Z&&c.empty?this:("string"===t&&(X=g.exec(Z),X&&(Z=Y+parseFloat(X[2])*("+"===X[1]?1:-1))),r[c.idx]=Z,this[u](r)))
})
})
}),M.hook=function(d){var c=d.split(" ");
P(c,function(h,f){V.cssHooks[f]={set:function(t,X){var u,i,p="";
if("transparent"!==X&&("string"!==V.type(X)||(u=W(X)))){if(X=M(u||X),!R.rgba&&1!==X._rgba[3]){for(i="backgroundColor"===f?t.parentNode:t;
(""===p||"transparent"===p)&&i&&i.style;
){try{p=V.css(i,"backgroundColor"),i=i.parentNode
}catch(l){}}X=X.blend(p&&"transparent"!==p?p:"_default")
}X=X.toRgbaString()
}try{t.style[f]=X
}catch(l){}}},V.fx.step[f]=function(i){i.colorInit||(i.start=M(i.elem,f),i.end=M(i.end),i.colorInit=!0),V.cssHooks[f].set(i.elem,i.start.transition(i.end,i.pos))
}
})
},M.hook(T),V.cssHooks.borderColor={expand:function(c){var d={};
return P(["Top","Right","Bottom","Left"],function(e,f){d["border"+f+"Color"]=c
}),d
}},v=V.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(K),function(){function f(m){var h,l,r=m.ownerDocument.defaultView?m.ownerDocument.defaultView.getComputedStyle(m,null):m.currentStyle,p={};
if(r&&r.length&&r[0]&&r[r[0]]){for(l=r.length;
l--;
){h=r[l],"string"==typeof r[h]&&(p[k.camelCase(h)]=r[h])
}}else{for(h in r){"string"==typeof r[h]&&(p[h]=r[h])
}}return p
}function c(p,l){var m,r,h={};
for(m in l){r=l[m],p[m]!==r&&(g[m]||(k.fx.step[m]||!isNaN(parseFloat(r)))&&(h[m]=r))
}return h
}var d=["add","remove","toggle"],g={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
k.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(l,h){k.fx.step[h]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(K.style(e.elem,h,e.end),e.setAttr=!0)
}
}),k.fn.addBack||(k.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))
}),k.effects.animateClass=function(p,m,e,l){var i=k.speed(m,e,l);
return this.queue(function(){var v,t=k(this),u=t.attr("class")||"",h=i.children?t.find("*").addBack():t;
h=h.map(function(){var o=k(this);
return{el:o,start:f(this)}
}),v=function(){k.each(d,function(o,r){p[r]&&t[r+"Class"](p[r])
})
},v(),h=h.map(function(){return this.end=f(this.el[0]),this.diff=c(this.start,this.end),this
}),t.attr("class",u),h=h.map(function(){var L=this,o=k.Deferred(),r=k.extend({},i,{queue:!1,complete:function(){o.resolve(L)
}});
return this.el.animate(this.diff,r),o.promise()
}),k.when.apply(k,h.get()).done(function(){v(),k.each(arguments,function(){var o=this.el;
k.each(this.diff,function(r){o.css(r,"")
})
}),i.complete.call(t[0])
})
})
},k.fn.extend({addClass:function(h){return function(e,l,p,m){return l?k.effects.animateClass.call(this,{add:e},l,p,m):h.apply(this,arguments)
}
}(k.fn.addClass),removeClass:function(h){return function(e,l,p,m){return arguments.length>1?k.effects.animateClass.call(this,{remove:e},l,p,m):h.apply(this,arguments)
}
}(k.fn.removeClass),toggleClass:function(h){return function(l,m,r,p,e){return"boolean"==typeof m||void 0===m?r?k.effects.animateClass.call(this,m?{add:l}:{remove:l},r,p,e):h.apply(this,arguments):k.effects.animateClass.call(this,{toggle:l},m,r,p)
}
}(k.fn.toggleClass),switchClass:function(m,h,l,r,p){return k.effects.animateClass.call(this,{add:h,remove:m},l,r,p)
}})
}(),function(){function f(l,g,h,m){return k.isPlainObject(l)&&(g=l,l=l.effect),l={effect:l},null==g&&(g={}),k.isFunction(g)&&(m=g,h=null,g={}),("number"==typeof g||k.fx.speeds[g])&&(m=h,h=g,g={}),k.isFunction(h)&&(m=h,h=null),g&&k.extend(l,g),h=h||g.duration,l.duration=k.fx.off?0:"number"==typeof h?h:h in k.fx.speeds?k.fx.speeds[h]:k.fx.speeds._default,l.complete=m||g.complete,l
}function c(g){return !g||"number"==typeof g||k.fx.speeds[g]?!0:"string"!=typeof g||k.effects.effect[g]?k.isFunction(g)?!0:"object"!=typeof g||g.effect?!1:!0:!0
}function d(h,m){var g=m.outerWidth(),l=m.outerHeight(),r=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,p=r.exec(h)||["",0,g,l,0];
return{top:parseFloat(p[1])||0,right:"auto"===p[2]?g:parseFloat(p[2]),bottom:"auto"===p[3]?l:parseFloat(p[3]),left:parseFloat(p[4])||0}
}k.expr&&k.expr.filters&&k.expr.filters.animated&&(k.expr.filters.animated=function(g){return function(e){return !!k(e).data(A)||g(e)
}
}(k.expr.filters.animated)),k.uiBackCompat!==!1&&k.extend(k.effects,{save:function(h,m){for(var g=0,l=m.length;
l>g;
g++){null!==m[g]&&h.data(F+m[g],h[0].style[m[g]])
}},restore:function(h,m){for(var g,l=0,o=m.length;
o>l;
l++){null!==m[l]&&(g=h.data(F+m[l]),h.css(m[l],g))
}},setMode:function(g,h){return"toggle"===h&&(h=g.is(":hidden")?"show":"hide"),h
},createWrapper:function(m){if(m.parent().is(".ui-effects-wrapper")){return m.parent()
}var h={width:m.outerWidth(!0),height:m.outerHeight(!0),"float":m.css("float")},l=k("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:m.width(),height:m.height()},p=document.activeElement;
try{p.id
}catch(g){p=document.body
}return m.wrap(l),(m[0]===p||k.contains(m[0],p))&&k(p).trigger("focus"),l=m.parent(),"static"===m.css("position")?(l.css({position:"relative"}),m.css({position:"relative"})):(k.extend(h,{position:m.css("position"),zIndex:m.css("z-index")}),k.each(["top","left","bottom","right"],function(e,i){h[i]=m.css(i),isNaN(parseInt(h[i],10))&&(h[i]="auto")
}),m.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),m.css(r),l.css(h).show()
},removeWrapper:function(h){var g=document.activeElement;
return h.parent().is(".ui-effects-wrapper")&&(h.parent().replaceWith(h),(h[0]===g||k.contains(h[0],g))&&k(g).trigger("focus")),h
}}),k.extend(k.effects,{version:"1.12.1",define:function(l,g,h){return h||(h=g,g="effect"),k.effects.effect[l]=h,k.effects.effect[l].mode=g,h
},scaledDimensions:function(h,m,g){if(0===m){return{height:0,width:0,outerHeight:0,outerWidth:0}
}var l="horizontal"!==g?(m||100)/100:1,o="vertical"!==g?(m||100)/100:1;
return{height:h.height()*o,width:h.width()*l,outerHeight:h.outerHeight()*o,outerWidth:h.outerWidth()*l}
},clipToBox:function(e){return{width:e.clip.right-e.clip.left,height:e.clip.bottom-e.clip.top,left:e.clip.left,top:e.clip.top}
},unshift:function(h,m,g){var l=h.queue();
m>1&&l.splice.apply(l,[1,0].concat(l.splice(m,g))),h.dequeue()
},saveStyle:function(e){e.data(E,e[0].style.cssText)
},restoreStyle:function(e){e[0].style.cssText=e.data(E)||"",e.removeData(E)
},mode:function(h,l){var g=h.is(":hidden");
return"toggle"===l&&(l=g?"show":"hide"),(g?"hide"===l:"show"===l)&&(l="none"),l
},getBaseline:function(h,m){var g,l;
switch(h[0]){case"top":g=0;
break;
case"middle":g=0.5;
break;
case"bottom":g=1;
break;
default:g=h[0]/m.height
}switch(h[1]){case"left":l=0;
break;
case"center":l=0.5;
break;
case"right":l=1;
break;
default:l=h[1]/m.width
}return{x:l,y:g}
},createPlaceholder:function(l){var g,h=l.css("position"),m=l.position();
return l.css({marginTop:l.css("marginTop"),marginBottom:l.css("marginBottom"),marginLeft:l.css("marginLeft"),marginRight:l.css("marginRight")}).outerWidth(l.outerWidth()).outerHeight(l.outerHeight()),/^(static|relative)/.test(h)&&(h="absolute",g=k("<"+l[0].nodeName+">").insertAfter(l).css({display:/^(inline|ruby)/.test(l.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:l.css("marginTop"),marginBottom:l.css("marginBottom"),marginLeft:l.css("marginLeft"),marginRight:l.css("marginRight"),"float":l.css("float")}).outerWidth(l.outerWidth()).outerHeight(l.outerHeight()).addClass("ui-effects-placeholder"),l.data(F+"placeholder",g)),l.css({position:h,left:m.left,top:m.top}),g
},removePlaceholder:function(h){var l=F+"placeholder",g=h.data(l);
g&&(g.remove(),h.removeData(l))
},cleanUp:function(g){k.effects.restoreStyle(g),k.effects.removePlaceholder(g)
},setTransition:function(l,g,h,m){return m=m||{},k.each(g,function(p,e){var r=l.cssUnit(e);
r[0]>0&&(m[e]=r[0]*h+r[1])
}),m
}}),k.fn.extend({effect:function(){function t(u){function l(){o.removeData(A),k.effects.cleanUp(o),"hide"===O.mode&&o.hide(),h()
}function h(){k.isFunction(v)&&v.call(o[0]),k.isFunction(u)&&u()
}var o=k(this);
O.mode=L.shift(),k.uiBackCompat===!1||g?"none"===O.mode?(o[p](),h()):m.call(o[0],O,l):(o.is(":hidden")?"hide"===p:"show"===p)?(o[p](),h()):m.call(o[0],O,h)
}var O=f.apply(this,arguments),m=k.effects.effect[O.effect],g=m.mode,M=O.queue,e=M||"fx",v=O.complete,p=O.mode,L=[],N=function(o){var h=k(this),l=k.effects.mode(h,p)||g;
h.data(A,!0),L.push(l),g&&("show"===l||l===g&&"hide"===l)&&h.show(),g&&"none"===l||k.effects.saveStyle(h),k.isFunction(o)&&o()
};
return k.fx.off||!m?p?this[p](O.duration,v):this.each(function(){v&&v.call(this)
}):M===!1?this.each(N).each(t):this.queue(e,N).queue(e,t)
},show:function(e){return function(g){if(c(g)){return e.apply(this,arguments)
}var h=f.apply(this,arguments);
return h.mode="show",this.effect.call(this,h)
}
}(k.fn.show),hide:function(e){return function(g){if(c(g)){return e.apply(this,arguments)
}var h=f.apply(this,arguments);
return h.mode="hide",this.effect.call(this,h)
}
}(k.fn.hide),toggle:function(e){return function(g){if(c(g)||"boolean"==typeof g){return e.apply(this,arguments)
}var h=f.apply(this,arguments);
return h.mode="toggle",this.effect.call(this,h)
}
}(k.fn.toggle),cssUnit:function(l){var g=this.css(l),h=[];
return k.each(["em","px","%","pt"],function(i,m){g.indexOf(m)>0&&(h=[parseFloat(g),m])
}),h
},cssClip:function(e){return e?this.css("clip","rect("+e.top+"px "+e.right+"px "+e.bottom+"px "+e.left+"px)"):d(this.css("clip"),this)
},transfer:function(M,v){var R=k(this),p=k(M.to),m="fixed"===p.css("position"),P=k("body"),g=m?P.scrollTop():0,L=m?P.scrollLeft():0,t=p.offset(),O={top:t.top-g,left:t.left-L,height:p.innerHeight(),width:p.innerWidth()},Q=R.offset(),N=k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(M.className).css({top:Q.top-g,left:Q.left-L,height:R.innerHeight(),width:R.innerWidth(),position:m?"fixed":"absolute"}).animate(O,M.duration,M.easing,function(){N.remove(),k.isFunction(v)&&v()
})
}}),k.fx.step.clip=function(g){g.clipInit||(g.start=k(g.elem).cssClip(),"string"==typeof g.end&&(g.end=d(g.end,g.elem)),g.clipInit=!0),k(g.elem).cssClip({top:g.pos*(g.end.top-g.start.top)+g.start.top,right:g.pos*(g.end.right-g.start.right)+g.start.right,bottom:g.pos*(g.end.bottom-g.start.bottom)+g.start.bottom,left:g.pos*(g.end.left-g.start.left)+g.start.left})
}
}(),function(){var c={};
k.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,d){c[d]=function(f){return Math.pow(f,e+2)
}
}),k.extend(c,{Sine:function(d){return 1-Math.cos(d*Math.PI/2)
},Circ:function(d){return 1-Math.sqrt(1-d*d)
},Elastic:function(d){return 0===d||1===d?d:-Math.pow(2,8*(d-1))*Math.sin((80*(d-1)-7.5)*Math.PI/15)
},Back:function(d){return d*d*(3*d-2)
},Bounce:function(f){for(var g,d=4;
((g=Math.pow(2,--d))-1)/11>f;
){}return 1/Math.pow(4,3-d)-7.5625*Math.pow((3*g-2)/22-f,2)
}}),k.each(c,function(f,d){k.easing["easeIn"+f]=d,k.easing["easeOut"+f]=function(e){return 1-d(1-e)
},k.easing["easeInOut"+f]=function(e){return 0.5>e?d(2*e)/2:1-d(-2*e+2)/2
}
})
}();
var b=k.effects;
k.effects.define("blind","hide",function(m,d){var g={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},t=k(this),p=m.direction||"up",c=t.cssClip(),l={clip:k.extend({},c)},f=k.effects.createPlaceholder(t);
l.clip[g[p][0]]=l.clip[g[p][1]],"show"===m.mode&&(t.cssClip(l.clip),f&&f.css(k.effects.clipToBox(l)),l.clip=c),f&&f.animate(k.effects.clipToBox(l),m.duration,m.easing),t.animate(l,{queue:!1,duration:m.duration,easing:m.easing,complete:d})
}),k.effects.define("bounce",function(X,T){var M,Q,P,ab=k(this),N=X.mode,U="hide"===N,S="show"===N,Z=X.direction||"up",L=X.distance,Y=X.times||5,O=2*Y+(S||U?1:0),W=X.duration/O,V=X.easing,R="up"===Z||"down"===Z?"top":"left",ac="up"===Z||"left"===Z,t=0,aa=ab.queue().length;
for(k.effects.createPlaceholder(ab),P=ab.css(R),L||(L=ab["top"===R?"outerHeight":"outerWidth"]()/3),S&&(Q={opacity:1},Q[R]=P,ab.css("opacity",0).css(R,ac?2*-L:2*L).animate(Q,W,V)),U&&(L/=Math.pow(2,Y-1)),Q={},Q[R]=P;
Y>t;
t++){M={},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V).animate(Q,W,V),L=U?2*L:L/2
}U&&(M={opacity:0},M[R]=(ac?"-=":"+=")+L,ab.animate(M,W,V)),ab.queue(T),k.effects.unshift(ab,aa,O+1)
}),k.effects.define("clip","hide",function(t,m){var v,f={},d=k(this),u=t.direction||"vertical",c="both"===u,p=c||"horizontal"===u,g=c||"vertical"===u;
v=d.cssClip(),f.clip={top:g?(v.bottom-v.top)/2:v.top,right:p?(v.right-v.left)/2:v.right,bottom:g?(v.bottom-v.top)/2:v.bottom,left:p?(v.right-v.left)/2:v.left},k.effects.createPlaceholder(d),"show"===t.mode&&(d.cssClip(f.clip),f.clip=v),d.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:m})
}),k.effects.define("drop","hide",function(v,p){var O,g=k(this),f=v.mode,M="show"===f,d=v.direction||"left",t="up"===d||"down"===d?"top":"left",m="up"===d||"left"===d?"-=":"+=",L="+="===m?"-=":"+=",N={opacity:0};
k.effects.createPlaceholder(g),O=v.distance||g["top"===t?"outerHeight":"outerWidth"](!0)/2,N[t]=m+O,M&&(g.css(N),N[t]=L+O,N.opacity=1),g.animate(N,{queue:!1,duration:v.duration,easing:v.easing,complete:p})
}),k.effects.define("explode","hide",function(X,T){function M(){aa.push(this),aa.length===L*Y&&Q()
}function Q(){O.css({visibility:"visible"}),k(aa).remove(),T()
}var P,ab,N,U,S,Z,L=X.pieces?Math.round(Math.sqrt(X.pieces)):3,Y=L,O=k(this),W=X.mode,V="show"===W,R=O.show().css("visibility","hidden").offset(),ac=Math.ceil(O.outerWidth()/Y),t=Math.ceil(O.outerHeight()/L),aa=[];
for(P=0;
L>P;
P++){for(U=R.top+P*t,Z=P-(L-1)/2,ab=0;
Y>ab;
ab++){N=R.left+ab*ac,S=ab-(Y-1)/2,O.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-ab*ac,top:-P*t}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:ac,height:t,left:N+(V?S*ac:0),top:U+(V?Z*t:0),opacity:V?0:1}).animate({left:N+(V?0:S*ac),top:U+(V?0:Z*t),opacity:V?1:0},X.duration||500,X.easing,M)
}}}),k.effects.define("fade","toggle",function(f,c){var d="show"===f.mode;
k(this).css("opacity",d?0:1).animate({opacity:d?1:0},{queue:!1,duration:f.duration,easing:f.easing,complete:c})
}),k.effects.define("fold","hide",function(T,P){var Z=k(this),M=T.mode,L="show"===M,W="hide"===M,t=T.size||15,Q=/([0-9]+)%/.exec(t),O=!!T.horizFirst,V=O?["right","bottom"]:["bottom","right"],Y=T.duration/2,U=k.effects.createPlaceholder(Z),v=Z.cssClip(),S={clip:k.extend({},v)},R={clip:k.extend({},v)},N=[v[V[0]],v[V[1]]],X=Z.queue().length;
Q&&(t=parseInt(Q[1],10)/100*N[W?0:1]),S.clip[V[0]]=t,R.clip[V[0]]=t,R.clip[V[1]]=0,L&&(Z.cssClip(R.clip),U&&U.css(k.effects.clipToBox(R)),R.clip=v),Z.queue(function(c){U&&U.animate(k.effects.clipToBox(S),Y,T.easing).animate(k.effects.clipToBox(R),Y,T.easing),c()
}).animate(S,Y,T.easing).animate(R,Y,T.easing).queue(P),k.effects.unshift(Z,X,4)
}),k.effects.define("highlight","show",function(f,c){var d=k(this),g={backgroundColor:d.css("backgroundColor")};
"hide"===f.mode&&(g.opacity=0),k.effects.saveStyle(d),d.css({backgroundImage:"none",backgroundColor:f.color||"#ffff99"}).animate(g,{queue:!1,duration:f.duration,easing:f.easing,complete:c})
}),k.effects.define("size",function(X,T){var M,Q,P,aa=k(this),N=["fontSize"],U=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],S=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],Z=X.mode,L="effect"!==Z,Y=X.scale||"both",O=X.origin||["middle","center"],W=aa.css("position"),V=aa.position(),R=k.effects.scaledDimensions(aa),ab=X.from||R,t=X.to||k.effects.scaledDimensions(aa,0);
k.effects.createPlaceholder(aa),"show"===Z&&(P=ab,ab=t,t=P),Q={from:{y:ab.height/R.height,x:ab.width/R.width},to:{y:t.height/R.height,x:t.width/R.width}},("box"===Y||"both"===Y)&&(Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,U,Q.from.y,ab),t=k.effects.setTransition(aa,U,Q.to.y,t)),Q.from.x!==Q.to.x&&(ab=k.effects.setTransition(aa,S,Q.from.x,ab),t=k.effects.setTransition(aa,S,Q.to.x,t))),("content"===Y||"both"===Y)&&Q.from.y!==Q.to.y&&(ab=k.effects.setTransition(aa,N,Q.from.y,ab),t=k.effects.setTransition(aa,N,Q.to.y,t)),O&&(M=k.effects.getBaseline(O,R),ab.top=(R.outerHeight-ab.outerHeight)*M.y+V.top,ab.left=(R.outerWidth-ab.outerWidth)*M.x+V.left,t.top=(R.outerHeight-t.outerHeight)*M.y+V.top,t.left=(R.outerWidth-t.outerWidth)*M.x+V.left),aa.css(ab),("content"===Y||"both"===Y)&&(U=U.concat(["marginTop","marginBottom"]).concat(N),S=S.concat(["marginLeft","marginRight"]),aa.find("*[width]").each(function(){var d=k(this),e=k.effects.scaledDimensions(d),f={height:e.height*Q.from.y,width:e.width*Q.from.x,outerHeight:e.outerHeight*Q.from.y,outerWidth:e.outerWidth*Q.from.x},c={height:e.height*Q.to.y,width:e.width*Q.to.x,outerHeight:e.height*Q.to.y,outerWidth:e.width*Q.to.x};
Q.from.y!==Q.to.y&&(f=k.effects.setTransition(d,U,Q.from.y,f),c=k.effects.setTransition(d,U,Q.to.y,c)),Q.from.x!==Q.to.x&&(f=k.effects.setTransition(d,S,Q.from.x,f),c=k.effects.setTransition(d,S,Q.to.x,c)),L&&k.effects.saveStyle(d),d.css(f),d.animate(c,X.duration,X.easing,function(){L&&k.effects.restoreStyle(d)
})
})),aa.animate(t,{queue:!1,duration:X.duration,easing:X.easing,complete:function(){var c=aa.offset();
0===t.opacity&&aa.css("opacity",ab.opacity),L||(aa.css("position","static"===W?"relative":W).offset(c),k.effects.saveStyle(aa)),T()
}})
}),k.effects.define("scale",function(g,d){var f=k(this),l=g.mode,h=parseInt(g.percent,10)||(0===parseInt(g.percent,10)?0:"effect"!==l?0:100),c=k.extend(!0,{from:k.effects.scaledDimensions(f),to:k.effects.scaledDimensions(f,h,g.direction||"both"),origin:g.origin||["middle","center"]},g);
g.fade&&(c.from.opacity=1,c.to.opacity=0),k.effects.effect.size.call(this,c,d)
}),k.effects.define("puff","hide",function(f,c){var d=k.extend(!0,{},f,{fade:!0,percent:parseInt(f.percent,10)||150});
k.effects.effect.scale.call(this,d,c)
}),k.effects.define("pulsate","show",function(L,t){var Q=k(this),m=L.mode,g="show"===m,O="hide"===m,f=g||O,v=2*(L.times||5)+(f?1:0),p=L.duration/v,N=0,P=1,M=Q.queue().length;
for((g||!Q.is(":visible"))&&(Q.css("opacity",0).show(),N=1);
v>P;
P++){Q.animate({opacity:N},p,L.easing),N=1-N
}Q.animate({opacity:N},p,L.easing),Q.queue(t),k.effects.unshift(Q,M,v+1)
}),k.effects.define("shake",function(R,N){var W=1,L=k(this),v=R.direction||"left",U=R.distance||20,m=R.times||3,O=2*m+1,M=Math.round(R.duration/O),T="up"===v||"down"===v?"top":"left",V="up"===v||"left"===v,S={},t={},Q={},P=L.queue().length;
for(k.effects.createPlaceholder(L),S[T]=(V?"-=":"+=")+U,t[T]=(V?"+=":"-=")+2*U,Q[T]=(V?"-=":"+=")+2*U,L.animate(S,M,R.easing);
m>W;
W++){L.animate(t,M,R.easing).animate(Q,M,R.easing)
}L.animate(t,M,R.easing).animate(S,M/2,R.easing).queue(N),k.effects.unshift(L,P,O+1)
}),k.effects.define("slide","show",function(L,t){var Q,m,g=k(this),O={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},f=L.mode,v=L.direction||"left",p="up"===v||"down"===v?"top":"left",N="up"===v||"left"===v,P=L.distance||g["top"===p?"outerHeight":"outerWidth"](!0),M={};
k.effects.createPlaceholder(g),Q=g.cssClip(),m=g.position()[p],M[p]=(N?-1:1)*P+m,M.clip=g.cssClip(),M.clip[O[v][1]]=M.clip[O[v][0]],"show"===f&&(g.cssClip(M.clip),g.css(p,M[p]),M.clip=Q,M[p]=m),g.animate(M,{queue:!1,duration:L.duration,easing:L.easing,complete:t})
});
var b;
k.uiBackCompat!==!1&&(b=k.effects.define("transfer",function(d,c){k(this).transfer(d,c)
}))
});
(function(l){function h(f){return k?f.data("events"):l._data(f[0]).events
}function c(o,u,q){var f=h(o),e=f[u];
if(!k){var p=q?e.splice(e.delegateCount-1,1)[0]:e.pop();
return e.splice(q?0:e.delegateCount||0,0,p),void 0
}q?f.live.unshift(f.live.pop()):e.unshift(e.pop())
}function b(q,p,o){var f=p.split(/\s+/);
q.each(function(){for(var t=0;
f.length>t;
++t){var i=l.trim(f[t]).match(/[^\.]+/i)[0];
c(l(this),i,o)
}})
}function d(f){l.fn[f+"First"]=function(){var o=l.makeArray(arguments),e=o.shift();
return e&&(l.fn[f].apply(this,arguments),b(this,e)),this
}
}var j=l.fn.jquery.split("."),m=parseInt(j[0]),g=parseInt(j[1]),k=1>m||1==m&&7>g;
d("bind"),d("one"),l.fn.delegateFirst=function(){var f=l.makeArray(arguments),i=f[1];
return i&&(f.splice(0,2),l.fn.delegate.apply(this,arguments),b(this,i,!0)),this
},l.fn.liveFirst=function(){var f=l.makeArray(arguments);
return f.unshift(this.selector),l.fn.delegateFirst.apply(l(document),f),this
},k||(l.fn.onFirst=function(p,q){var o=l(this),f="string"==typeof q;
if(l.fn.on.apply(o,arguments),"object"==typeof p){for(type in p){p.hasOwnProperty(type)&&b(o,type,f)
}}else{"string"==typeof p&&b(o,p,f)
}return o
})
})(jQuery);
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof exports!=="undefined"){module.exports=b(require("jquery"))
}else{b(jQuery)
}}}(function(b){var c=window.Slick||{};
c=(function(){var d=0;
function e(h,i){var g=this,f;
g.defaults={accessibility:true,adaptiveHeight:false,appendArrows:b(h),appendDots:b(h),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(k,j){return b('<button type="button" data-role="none" role="button" tabindex="0" />').text(j+1)
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnFocus:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rows:1,rtl:false,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,useTransform:true,variableWidth:false,vertical:false,verticalSwiping:false,waitForAnimate:true,zIndex:1000};
g.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false,unslicked:false};
b.extend(g,g.initials);
g.activeBreakpoint=null;
g.animType=null;
g.animProp=null;
g.breakpoints=[];
g.breakpointSettings=[];
g.cssTransitions=false;
g.focussed=false;
g.interrupted=false;
g.hidden="hidden";
g.paused=true;
g.positionProp=null;
g.respondTo=null;
g.rowCount=1;
g.shouldClick=true;
g.$slider=b(h);
g.$slidesCache=null;
g.transformType=null;
g.transitionType=null;
g.visibilityChange="visibilitychange";
g.windowWidth=0;
g.windowTimer=null;
f=b(h).data("slick")||{};
g.options=b.extend({},g.defaults,i,f);
g.currentSlide=g.options.initialSlide;
g.originalSettings=g.options;
if(typeof document.mozHidden!=="undefined"){g.hidden="mozHidden";
g.visibilityChange="mozvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){g.hidden="webkitHidden";
g.visibilityChange="webkitvisibilitychange"
}}g.autoPlay=b.proxy(g.autoPlay,g);
g.autoPlayClear=b.proxy(g.autoPlayClear,g);
g.autoPlayIterator=b.proxy(g.autoPlayIterator,g);
g.changeSlide=b.proxy(g.changeSlide,g);
g.clickHandler=b.proxy(g.clickHandler,g);
g.selectHandler=b.proxy(g.selectHandler,g);
g.setPosition=b.proxy(g.setPosition,g);
g.swipeHandler=b.proxy(g.swipeHandler,g);
g.dragHandler=b.proxy(g.dragHandler,g);
g.keyHandler=b.proxy(g.keyHandler,g);
g.instanceUid=d++;
g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
g.registerBreakpoints();
g.init(true)
}return e
}());
c.prototype.activateADA=function(){var d=this;
d.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
};
c.prototype.addSlide=c.prototype.slickAdd=function(d,f,g){var e=this;
if(typeof(f)==="boolean"){g=f;
f=null
}else{if(f<0||(f>=e.slideCount)){return false
}}e.unload();
if(typeof(f)==="number"){if(f===0&&e.$slides.length===0){b(d).appendTo(e.$slideTrack)
}else{if(g){b(d).insertBefore(e.$slides.eq(f))
}else{b(d).insertAfter(e.$slides.eq(f))
}}}else{if(g===true){b(d).prependTo(e.$slideTrack)
}else{b(d).appendTo(e.$slideTrack)
}}e.$slides=e.$slideTrack.children(this.options.slide);
e.$slideTrack.children(this.options.slide).detach();
e.$slideTrack.append(e.$slides);
e.$slides.each(function(h,i){b(i).attr("data-slick-index",h)
});
e.$slidesCache=e.$slides;
e.reinit()
};
c.prototype.animateHeight=function(){var e=this;
if(e.options.slidesToShow===1&&e.options.adaptiveHeight===true&&e.options.vertical===false){var d=e.$slides.eq(e.currentSlide).outerHeight(true);
e.$list.animate({height:d},e.options.speed)
}};
c.prototype.animateSlide=function(g,f){var e={},d=this;
d.animateHeight();
if(d.options.rtl===true&&d.options.vertical===false){g=-g
}if(d.transformsEnabled===false){if(d.options.vertical===false){d.$slideTrack.animate({left:g},d.options.speed,d.options.easing,f)
}else{d.$slideTrack.animate({top:g},d.options.speed,d.options.easing,f)
}}else{if(d.cssTransitions===false){if(d.options.rtl===true){d.currentLeft=-(d.currentLeft)
}b({animStart:d.currentLeft}).animate({animStart:g},{duration:d.options.speed,easing:d.options.easing,step:function(h){h=Math.ceil(h);
if(d.options.vertical===false){e[d.animType]="translate("+h+"px, 0px)";
d.$slideTrack.css(e)
}else{e[d.animType]="translate(0px,"+h+"px)";
d.$slideTrack.css(e)
}},complete:function(){if(f){f.call()
}}})
}else{d.applyTransition();
g=Math.ceil(g);
if(d.options.vertical===false){e[d.animType]="translate3d("+g+"px, 0px, 0px)"
}else{e[d.animType]="translate3d(0px,"+g+"px, 0px)"
}d.$slideTrack.css(e);
if(f){setTimeout(function(){d.disableTransition();
f.call()
},d.options.speed)
}}}};
c.prototype.getNavTarget=function(){var e=this,d=e.options.asNavFor;
if(d&&d!==null){d=b(d).not(e.$slider)
}return d
};
c.prototype.asNavFor=function(f){var e=this,d=e.getNavTarget();
if(d!==null&&typeof d==="object"){d.each(function(){var g=b(this).slick("getSlick");
if(!g.unslicked){g.slideHandler(f,true)
}})
}};
c.prototype.applyTransition=function(d){var e=this,f={};
if(e.options.fade===false){f[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase
}else{f[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase
}if(e.options.fade===false){e.$slideTrack.css(f)
}else{e.$slides.eq(d).css(f)
}};
c.prototype.autoPlay=function(){var d=this;
d.autoPlayClear();
if(d.slideCount>d.options.slidesToShow){d.autoPlayTimer=setInterval(d.autoPlayIterator,d.options.autoplaySpeed)
}};
c.prototype.autoPlayClear=function(){var d=this;
if(d.autoPlayTimer){clearInterval(d.autoPlayTimer)
}};
c.prototype.autoPlayIterator=function(){var d=this,e=d.currentSlide+d.options.slidesToScroll;
if(!d.paused&&!d.interrupted&&!d.focussed){if(d.options.infinite===false){if(d.direction===1&&(d.currentSlide+1)===(d.slideCount-1)){d.direction=0
}else{if(d.direction===0){e=d.currentSlide-d.options.slidesToScroll;
if(d.currentSlide-1===0){d.direction=1
}}}}d.slideHandler(e)
}};
c.prototype.buildArrows=function(){var d=this;
if(d.options.arrows===true){d.$prevArrow=b(d.options.prevArrow).addClass("slick-arrow");
d.$nextArrow=b(d.options.nextArrow).addClass("slick-arrow");
if(d.slideCount>d.options.slidesToShow){d.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
d.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
if(d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.prependTo(d.options.appendArrows)
}if(d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.appendTo(d.options.appendArrows)
}if(d.options.infinite!==true){d.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")
}}else{d.$prevArrow.add(d.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"})
}}};
c.prototype.buildDots=function(){var e=this,f,d;
if(e.options.dots===true&&e.slideCount>e.options.slidesToShow){e.$slider.addClass("slick-dotted");
d=b("<ul />").addClass(e.options.dotsClass);
for(f=0;
f<=e.getDotCount();
f+=1){d.append(b("<li />").append(e.options.customPaging.call(this,e,f)))
}e.$dots=d.appendTo(e.options.appendDots);
e.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
c.prototype.buildOut=function(){var d=this;
d.$slides=d.$slider.children(d.options.slide+":not(.slick-cloned)").addClass("slick-slide");
d.slideCount=d.$slides.length;
d.$slides.each(function(e,f){b(f).attr("data-slick-index",e).data("originalStyling",b(f).attr("style")||"")
});
d.$slider.addClass("slick-slider");
d.$slideTrack=(d.slideCount===0)?b('<div class="slick-track"/>').appendTo(d.$slider):d.$slides.wrapAll('<div class="slick-track"/>').parent();
d.$list=d.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
d.$slideTrack.css("opacity",0);
if(d.options.centerMode===true||d.options.swipeToSlide===true){d.options.slidesToScroll=1
}b("img[data-lazy]",d.$slider).not("[src]").addClass("slick-loading");
d.setupInfinite();
d.buildArrows();
d.buildDots();
d.updateDots();
d.setSlideClasses(typeof d.currentSlide==="number"?d.currentSlide:0);
if(d.options.draggable===true){d.$list.addClass("draggable")
}};
c.prototype.buildRows=function(){var m=this,l,k,i,d,j,h,e;
d=document.createDocumentFragment();
h=m.$slider.children();
if(m.options.rows>1){e=m.options.slidesPerRow*m.options.rows;
j=Math.ceil(h.length/e);
for(l=0;
l<j;
l++){var f=document.createElement("div");
for(k=0;
k<m.options.rows;
k++){var o=document.createElement("div");
for(i=0;
i<m.options.slidesPerRow;
i++){var g=(l*e+((k*m.options.slidesPerRow)+i));
if(h.get(g)){o.appendChild(h.get(g))
}}f.appendChild(o)
}d.appendChild(f)
}m.$slider.empty().append(d);
m.$slider.children().children().children().css({width:(100/m.options.slidesPerRow)+"%",display:"inline-block"})
}};
c.prototype.checkResponsive=function(i,k){var l=this,j,d,f,g=false;
var h=l.$slider.width();
var e=window.innerWidth||b(window).width();
if(l.respondTo==="window"){f=e
}else{if(l.respondTo==="slider"){f=h
}else{if(l.respondTo==="min"){f=Math.min(e,h)
}}}if(l.options.responsive&&l.options.responsive.length&&l.options.responsive!==null){d=null;
for(j in l.breakpoints){if(l.breakpoints.hasOwnProperty(j)){if(l.originalSettings.mobileFirst===false){if(f<l.breakpoints[j]){d=l.breakpoints[j]
}}else{if(f>l.breakpoints[j]){d=l.breakpoints[j]
}}}}if(d!==null){if(l.activeBreakpoint!==null){if(d!==l.activeBreakpoint||k){l.activeBreakpoint=d;
if(l.breakpointSettings[d]==="unslick"){l.unslick(d)
}else{l.options=b.extend({},l.originalSettings,l.breakpointSettings[d]);
if(i===true){l.currentSlide=l.options.initialSlide
}l.refresh(i)
}g=d
}}else{l.activeBreakpoint=d;
if(l.breakpointSettings[d]==="unslick"){l.unslick(d)
}else{l.options=b.extend({},l.originalSettings,l.breakpointSettings[d]);
if(i===true){l.currentSlide=l.options.initialSlide
}l.refresh(i)
}g=d
}}else{if(l.activeBreakpoint!==null){l.activeBreakpoint=null;
l.options=l.originalSettings;
if(i===true){l.currentSlide=l.options.initialSlide
}l.refresh(i);
g=d
}}if(!i&&g!==false){l.$slider.trigger("breakpoint",[l,g])
}}};
c.prototype.changeSlide=function(h,k){var f=this,d=b(h.currentTarget),j,g,i;
if(d.is("a")){h.preventDefault()
}if(!d.is("li")){d=d.closest("li")
}i=(f.slideCount%f.options.slidesToScroll!==0);
j=i?0:(f.slideCount-f.currentSlide)%f.options.slidesToScroll;
switch(h.data.message){case"previous":g=j===0?f.options.slidesToScroll:f.options.slidesToShow-j;
if(f.slideCount>f.options.slidesToShow){f.slideHandler(f.currentSlide-g,false,k)
}break;
case"next":g=j===0?f.options.slidesToScroll:j;
if(f.slideCount>f.options.slidesToShow){f.slideHandler(f.currentSlide+g,false,k)
}break;
case"index":var e=h.data.index===0?0:h.data.index||d.index()*f.options.slidesToScroll;
f.slideHandler(f.checkNavigable(e),false,k);
d.children().trigger("focus");
break;
default:return
}};
c.prototype.checkNavigable=function(e){var d=this,f,g;
f=d.getNavigableIndexes();
g=0;
if(e>f[f.length-1]){e=f[f.length-1]
}else{for(var h in f){if(e<f[h]){e=g;
break
}g=f[h]
}}return e
};
c.prototype.cleanUpEvents=function(){var d=this;
if(d.options.dots&&d.$dots!==null){b("li",d.$dots).off("click.slick",d.changeSlide).off("mouseenter.slick",b.proxy(d.interrupt,d,true)).off("mouseleave.slick",b.proxy(d.interrupt,d,false))
}d.$slider.off("focus.slick blur.slick");
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow&&d.$prevArrow.off("click.slick",d.changeSlide);
d.$nextArrow&&d.$nextArrow.off("click.slick",d.changeSlide)
}d.$list.off("touchstart.slick mousedown.slick",d.swipeHandler);
d.$list.off("touchmove.slick mousemove.slick",d.swipeHandler);
d.$list.off("touchend.slick mouseup.slick",d.swipeHandler);
d.$list.off("touchcancel.slick mouseleave.slick",d.swipeHandler);
d.$list.off("click.slick",d.clickHandler);
b(document).off(d.visibilityChange,d.visibility);
d.cleanUpSlideEvents();
if(d.options.accessibility===true){d.$list.off("keydown.slick",d.keyHandler)
}if(d.options.focusOnSelect===true){b(d.$slideTrack).children().off("click.slick",d.selectHandler)
}b(window).off("orientationchange.slick.slick-"+d.instanceUid,d.orientationChange);
b(window).off("resize.slick.slick-"+d.instanceUid,d.resize);
b("[draggable!=true]",d.$slideTrack).off("dragstart",d.preventDefault);
b(window).off("load.slick.slick-"+d.instanceUid,d.setPosition);
b(document).off("ready.slick.slick-"+d.instanceUid,d.setPosition)
};
c.prototype.cleanUpSlideEvents=function(){var d=this;
d.$list.off("mouseenter.slick",b.proxy(d.interrupt,d,true));
d.$list.off("mouseleave.slick",b.proxy(d.interrupt,d,false))
};
c.prototype.cleanUpRows=function(){var e=this,d;
if(e.options.rows>1){d=e.$slides.children().children();
d.removeAttr("style");
e.$slider.empty().append(d)
}};
c.prototype.clickHandler=function(e){var d=this;
if(d.shouldClick===false){e.stopImmediatePropagation();
e.stopPropagation();
e.preventDefault()
}};
c.prototype.destroy=function(e){var d=this;
d.autoPlayClear();
d.touchObject={};
d.cleanUpEvents();
b(".slick-cloned",d.$slider).detach();
if(d.$dots){d.$dots.remove()
}if(d.$prevArrow&&d.$prevArrow.length){d.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.remove()
}}if(d.$nextArrow&&d.$nextArrow.length){d.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display","");
if(d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.remove()
}}if(d.$slides){d.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){b(this).attr("style",b(this).data("originalStyling"))
});
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.detach();
d.$list.detach();
d.$slider.append(d.$slides)
}d.cleanUpRows();
d.$slider.removeClass("slick-slider");
d.$slider.removeClass("slick-initialized");
d.$slider.removeClass("slick-dotted");
d.unslicked=true;
if(!e){d.$slider.trigger("destroy",[d])
}};
c.prototype.disableTransition=function(d){var e=this,f={};
f[e.transitionType]="";
if(e.options.fade===false){e.$slideTrack.css(f)
}else{e.$slides.eq(d).css(f)
}};
c.prototype.fadeSlide=function(e,f){var d=this;
if(d.cssTransitions===false){d.$slides.eq(e).css({zIndex:d.options.zIndex});
d.$slides.eq(e).animate({opacity:1},d.options.speed,d.options.easing,f)
}else{d.applyTransition(e);
d.$slides.eq(e).css({opacity:1,zIndex:d.options.zIndex});
if(f){setTimeout(function(){d.disableTransition(e);
f.call()
},d.options.speed)
}}};
c.prototype.fadeSlideOut=function(e){var d=this;
if(d.cssTransitions===false){d.$slides.eq(e).animate({opacity:0,zIndex:d.options.zIndex-2},d.options.speed,d.options.easing)
}else{d.applyTransition(e);
d.$slides.eq(e).css({opacity:0,zIndex:d.options.zIndex-2})
}};
c.prototype.filterSlides=c.prototype.slickFilter=function(e){var d=this;
if(e!==null){d.$slidesCache=d.$slides;
d.unload();
d.$slideTrack.children(this.options.slide).detach();
d.$slidesCache.filter(e).appendTo(d.$slideTrack);
d.reinit()
}};
c.prototype.focusHandler=function(){var d=this;
d.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(f){f.stopImmediatePropagation();
var e=b(this);
setTimeout(function(){if(d.options.pauseOnFocus){d.focussed=e.is(":focus");
d.autoPlay()
}},0)
})
};
c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var d=this;
return d.currentSlide
};
c.prototype.getDotCount=function(){var e=this;
var i=0;
var d=0;
var h=0;
if(e.options.infinite===true){if(e.options.slidesToScroll>1){var f=e.slideCount-e.options.slidesToShow;
var j=parseInt(f/e.options.slidesToScroll);
var g=parseInt(f%e.options.slidesToScroll);
h=1+j+((g!=0)?1:0)
}else{while(i<e.slideCount){++h;
i=d+e.options.slidesToScroll;
d+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow
}}}else{if(e.options.centerMode===true){h=e.slideCount
}else{if(!e.options.asNavFor){h=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll)
}else{while(i<e.slideCount){++h;
i=d+e.options.slidesToScroll;
d+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow
}}}}return h-1
};
c.prototype.getLeft=function(g){var e=this,i,f,d=0,h;
e.slideOffset=0;
f=e.$slides.first().outerHeight(true);
if(e.options.infinite===true){if(e.slideCount>e.options.slidesToShow){e.slideOffset=(e.slideWidth*e.options.slidesToShow)*-1;
d=(f*e.options.slidesToShow)*-1
}if(e.slideCount%e.options.slidesToScroll!==0){if(g+e.options.slidesToScroll>e.slideCount&&e.slideCount>e.options.slidesToShow){if(g>e.slideCount){e.slideOffset=((e.options.slidesToShow-(g-e.slideCount))*e.slideWidth)*-1;
d=((e.options.slidesToShow-(g-e.slideCount))*f)*-1
}else{e.slideOffset=((e.slideCount%e.options.slidesToScroll)*e.slideWidth)*-1;
d=((e.slideCount%e.options.slidesToScroll)*f)*-1
}}}}else{if(g+e.options.slidesToShow>e.slideCount){e.slideOffset=((g+e.options.slidesToShow)-e.slideCount)*e.slideWidth;
d=((g+e.options.slidesToShow)-e.slideCount)*f
}}if(e.slideCount<=e.options.slidesToShow){e.slideOffset=0;
d=0
}if(e.options.centerMode===true&&e.options.infinite===true){e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)-e.slideWidth
}else{if(e.options.centerMode===true){e.slideOffset=0;
e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)
}}if(e.options.vertical===false){i=((g*e.slideWidth)*-1)+e.slideOffset
}else{i=((g*f)*-1)+d
}if(e.options.variableWidth===true){if(e.slideCount<=e.options.slidesToShow||e.options.infinite===false){h=e.$slideTrack.children(".slick-slide").eq(g)
}else{h=e.$slideTrack.children(".slick-slide").eq(g+e.options.slidesToShow)
}if(e.options.rtl===true){if(h[0]){i=(e.$slideTrack.width()-h[0].offsetLeft-h.width())*-1
}else{i=0
}}else{i=h[0]?h[0].offsetLeft*-1:0
}if(e.options.centerMode===true){if(e.slideCount<=e.options.slidesToShow||e.options.infinite===false){h=e.$slideTrack.children(".slick-slide").eq(g)
}else{h=e.$slideTrack.children(".slick-slide").eq(g+e.options.slidesToShow+1)
}if(e.options.rtl===true){if(h[0]){i=(e.$slideTrack.width()-h[0].offsetLeft-h.width())*-1
}else{i=0
}}else{i=h[0]?h[0].offsetLeft*-1:0
}i+=(e.$list.width()-h.outerWidth())/2
}}return i
};
c.prototype.getOption=c.prototype.slickGetOption=function(e){var d=this;
return d.options[e]
};
c.prototype.getNavigableIndexes=function(){var g=this,h=0,e=0,f=[],d;
if(g.options.infinite===false){d=g.slideCount
}else{h=g.options.slidesToScroll*-1;
e=g.options.slidesToScroll*-1;
d=g.slideCount*2
}while(h<d){f.push(h);
h=e+g.options.slidesToScroll;
e+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return f
};
c.prototype.getSlick=function(){return this
};
c.prototype.getSlideCount=function(){var f=this,e,g,d;
d=f.options.centerMode===true?f.slideWidth*Math.floor(f.options.slidesToShow/2):0;
if(f.options.swipeToSlide===true){f.$slideTrack.find(".slick-slide").each(function(i,h){if(h.offsetLeft-d+(b(h).outerWidth()/2)>(f.swipeLeft*-1)){g=h;
return false
}});
e=Math.abs(b(g).attr("data-slick-index")-f.currentSlide)||1;
return e
}else{return f.options.slidesToScroll
}};
c.prototype.goTo=c.prototype.slickGoTo=function(d,f){var e=this;
e.changeSlide({data:{message:"index",index:parseInt(d)}},f)
};
c.prototype.init=function(d){var e=this;
if(!b(e.$slider).hasClass("slick-initialized")){b(e.$slider).addClass("slick-initialized");
e.buildRows();
e.buildOut();
e.setProps();
e.startLoad();
e.loadSlider();
e.initializeEvents();
e.updateArrows();
e.updateDots();
e.checkResponsive(true);
e.focusHandler()
}if(d){e.$slider.trigger("init",[e])
}if(e.options.accessibility===true){e.initADA()
}if(e.options.autoplay){e.paused=false;
e.autoPlay()
}};
c.prototype.initADA=function(){var d=this;
d.$slides.add(d.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"});
d.$slideTrack.attr("role","listbox");
d.$slides.not(d.$slideTrack.find(".slick-cloned")).each(function(e){b(this).attr({role:"option","aria-describedby":"slick-slide"+d.instanceUid+e+""})
});
if(d.$dots!==null){d.$dots.attr("role","tablist").find("li").each(function(e){b(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+d.instanceUid+e+"",id:"slick-slide"+d.instanceUid+e+""})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar")
}d.activateADA()
};
c.prototype.initArrowEvents=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},d.changeSlide);
d.$nextArrow.off("click.slick").on("click.slick",{message:"next"},d.changeSlide)
}};
c.prototype.initDotEvents=function(){var d=this;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){b("li",d.$dots).on("click.slick",{message:"index"},d.changeSlide)
}if(d.options.dots===true&&d.options.pauseOnDotsHover===true){b("li",d.$dots).on("mouseenter.slick",b.proxy(d.interrupt,d,true)).on("mouseleave.slick",b.proxy(d.interrupt,d,false))
}};
c.prototype.initSlideEvents=function(){var d=this;
if(d.options.pauseOnHover){d.$list.on("mouseenter.slick",b.proxy(d.interrupt,d,true));
d.$list.on("mouseleave.slick",b.proxy(d.interrupt,d,false))
}};
c.prototype.initializeEvents=function(){var d=this;
d.initArrowEvents();
d.initDotEvents();
d.initSlideEvents();
d.$list.on("touchstart.slick mousedown.slick",{action:"start"},d.swipeHandler);
d.$list.on("touchmove.slick mousemove.slick",{action:"move"},d.swipeHandler);
d.$list.on("touchend.slick mouseup.slick",{action:"end"},d.swipeHandler);
d.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},d.swipeHandler);
d.$list.on("click.slick",d.clickHandler);
b(document).on(d.visibilityChange,b.proxy(d.visibility,d));
if(d.options.accessibility===true){d.$list.on("keydown.slick",d.keyHandler)
}if(d.options.focusOnSelect===true){b(d.$slideTrack).children().on("click.slick",d.selectHandler)
}b(window).on("orientationchange.slick.slick-"+d.instanceUid,b.proxy(d.orientationChange,d));
b(window).on("resize.slick.slick-"+d.instanceUid,b.proxy(d.resize,d));
b("[draggable!=true]",d.$slideTrack).on("dragstart",d.preventDefault);
b(window).on("load.slick.slick-"+d.instanceUid,d.setPosition);
b(document).on("ready.slick.slick-"+d.instanceUid,d.setPosition)
};
c.prototype.initUI=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.show();
d.$nextArrow.show()
}if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$dots.show()
}};
c.prototype.keyHandler=function(e){var d=this;
if(!e.target.tagName.match("TEXTAREA|INPUT|SELECT")){if(e.keyCode===37&&d.options.accessibility===true){d.changeSlide({data:{message:d.options.rtl===true?"next":"previous"}})
}else{if(e.keyCode===39&&d.options.accessibility===true){d.changeSlide({data:{message:d.options.rtl===true?"previous":"next"}})
}}}};
c.prototype.lazyLoad=function(){var f=this,d,i,h,g;
function e(j){b("img[data-lazy]",j).each(function(){var l=b(this),m=b(this).attr("data-lazy"),k=document.createElement("img");
k.onload=function(){l.animate({opacity:0},100,function(){l.attr("src",m).animate({opacity:1},200,function(){l.removeAttr("data-lazy").removeClass("slick-loading")
});
f.$slider.trigger("lazyLoaded",[f,l,m])
})
};
k.onerror=function(){l.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
f.$slider.trigger("lazyLoadError",[f,l,m])
};
k.src=m
})
}if(f.options.centerMode===true){if(f.options.infinite===true){h=f.currentSlide+(f.options.slidesToShow/2+1);
g=h+f.options.slidesToShow+2
}else{h=Math.max(0,f.currentSlide-(f.options.slidesToShow/2+1));
g=2+(f.options.slidesToShow/2+1)+f.currentSlide
}}else{h=f.options.infinite?f.options.slidesToShow+f.currentSlide:f.currentSlide;
g=Math.ceil(h+f.options.slidesToShow);
if(f.options.fade===true){if(h>0){h--
}if(g<=f.slideCount){g++
}}}d=f.$slider.find(".slick-slide").slice(h,g);
e(d);
if(f.slideCount<=f.options.slidesToShow){i=f.$slider.find(".slick-slide");
e(i)
}else{if(f.currentSlide>=f.slideCount-f.options.slidesToShow){i=f.$slider.find(".slick-cloned").slice(0,f.options.slidesToShow);
e(i)
}else{if(f.currentSlide===0){i=f.$slider.find(".slick-cloned").slice(f.options.slidesToShow*-1);
e(i)
}}}};
c.prototype.loadSlider=function(){var d=this;
d.setPosition();
d.$slideTrack.css({opacity:1});
d.$slider.removeClass("slick-loading");
d.initUI();
if(d.options.lazyLoad==="progressive"){d.progressiveLazyLoad()
}};
c.prototype.next=c.prototype.slickNext=function(){var d=this;
d.changeSlide({data:{message:"next"}})
};
c.prototype.orientationChange=function(){var d=this;
d.checkResponsive();
d.setPosition()
};
c.prototype.pause=c.prototype.slickPause=function(){var d=this;
d.autoPlayClear();
d.paused=true
};
c.prototype.play=c.prototype.slickPlay=function(){var d=this;
d.autoPlay();
d.options.autoplay=true;
d.paused=false;
d.focussed=false;
d.interrupted=false
};
c.prototype.postSlide=function(e){var d=this;
if(!d.unslicked){d.$slider.trigger("afterChange",[d,e]);
d.animating=false;
d.setPosition();
d.swipeLeft=null;
if(d.options.autoplay){d.autoPlay()
}if(d.options.accessibility===true){d.initADA()
}}};
c.prototype.prev=c.prototype.slickPrev=function(){var d=this;
d.changeSlide({data:{message:"previous"}})
};
c.prototype.preventDefault=function(d){d.preventDefault()
};
c.prototype.progressiveLazyLoad=function(f){f=f||1;
var e=this,d=b("img[data-lazy]",e.$slider),h,i,g;
if(d.length){h=d.first();
i=h.attr("data-lazy");
g=document.createElement("img");
g.onload=function(){h.attr("src",i).removeAttr("data-lazy").removeClass("slick-loading");
if(e.options.adaptiveHeight===true){e.setPosition()
}e.$slider.trigger("lazyLoaded",[e,h,i]);
e.progressiveLazyLoad()
};
g.onerror=function(){if(f<3){setTimeout(function(){e.progressiveLazyLoad(f+1)
},500)
}else{h.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
e.$slider.trigger("lazyLoadError",[e,h,i]);
e.progressiveLazyLoad()
}};
g.src=i
}else{e.$slider.trigger("allImagesLoaded",[e])
}};
c.prototype.refresh=function(e){var f=this,g,d;
d=f.slideCount-f.options.slidesToShow;
if(!f.options.infinite&&(f.currentSlide>d)){f.currentSlide=d
}if(f.slideCount<=f.options.slidesToShow){f.currentSlide=0
}g=f.currentSlide;
f.destroy(true);
b.extend(f,f.initials,{currentSlide:g});
f.init();
if(!e){f.changeSlide({data:{message:"index",index:g}},false)
}f.$slider.trigger("refresh",[f])
};
c.prototype.registerBreakpoints=function(){var f=this,e,g,d,h=f.options.responsive||null;
if(b.type(h)==="array"&&h.length){f.respondTo=f.options.respondTo||"window";
for(e in h){d=f.breakpoints.length-1;
g=h[e].breakpoint;
if(h.hasOwnProperty(e)){while(d>=0){if(f.breakpoints[d]&&f.breakpoints[d]===g){f.breakpoints.splice(d,1)
}d--
}f.breakpoints.push(g);
f.breakpointSettings[g]=h[e].settings
}}f.breakpoints.sort(function(j,i){return(f.options.mobileFirst)?j-i:i-j
})
}};
c.prototype.reinit=function(){var d=this;
d.$slides=d.$slideTrack.children(d.options.slide).addClass("slick-slide");
d.slideCount=d.$slides.length;
if(d.currentSlide>=d.slideCount&&d.currentSlide!==0){d.currentSlide=d.currentSlide-d.options.slidesToScroll
}if(d.slideCount<=d.options.slidesToShow){d.currentSlide=0
}d.registerBreakpoints();
d.setProps();
d.setupInfinite();
d.buildArrows();
d.updateArrows();
d.initArrowEvents();
d.buildDots();
d.updateDots();
d.initDotEvents();
d.cleanUpSlideEvents();
d.initSlideEvents();
d.checkResponsive(false,true);
if(d.options.focusOnSelect===true){b(d.$slideTrack).children().on("click.slick",d.selectHandler)
}d.setSlideClasses(typeof d.currentSlide==="number"?d.currentSlide:0);
d.setPosition();
d.focusHandler();
d.paused=!d.options.autoplay;
d.autoPlay();
d.$slider.trigger("reInit",[d])
};
c.prototype.resize=function(){var d=this;
if(b(window).width()!==d.windowWidth){clearTimeout(d.windowDelay);
d.windowDelay=window.setTimeout(function(){d.windowWidth=b(window).width();
d.checkResponsive();
if(!d.unslicked){d.setPosition()
}},50)
}};
c.prototype.removeSlide=c.prototype.slickRemove=function(e,g,f){var d=this;
if(typeof(e)==="boolean"){g=e;
e=g===true?0:d.slideCount-1
}else{e=g===true?--e:e
}if(d.slideCount<1||e<0||e>d.slideCount-1){return false
}d.unload();
if(f===true){d.$slideTrack.children().remove()
}else{d.$slideTrack.children(this.options.slide).eq(e).remove()
}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slidesCache=d.$slides;
d.reinit()
};
c.prototype.setCSS=function(e){var f=this,g={},d,h;
if(f.options.rtl===true){e=-e
}d=f.positionProp=="left"?Math.ceil(e)+"px":"0px";
h=f.positionProp=="top"?Math.ceil(e)+"px":"0px";
g[f.positionProp]=e;
if(f.transformsEnabled===false){f.$slideTrack.css(g)
}else{g={};
if(f.cssTransitions===false){g[f.animType]="translate("+d+", "+h+")";
f.$slideTrack.css(g)
}else{g[f.animType]="translate3d("+d+", "+h+", 0px)";
f.$slideTrack.css(g)
}}};
c.prototype.setDimensions=function(){var d=this;
if(d.options.vertical===false){if(d.options.centerMode===true){d.$list.css({padding:("0px "+d.options.centerPadding)})
}}else{d.$list.height(d.$slides.first().outerHeight(true)*d.options.slidesToShow);
if(d.options.centerMode===true){d.$list.css({padding:(d.options.centerPadding+" 0px")})
}}d.listWidth=d.$list.width();
d.listHeight=d.$list.height();
if(d.options.vertical===false&&d.options.variableWidth===false){d.slideWidth=Math.ceil(d.listWidth/d.options.slidesToShow);
d.$slideTrack.width(Math.ceil((d.slideWidth*d.$slideTrack.children(".slick-slide").length)))
}else{if(d.options.variableWidth===true){d.$slideTrack.width(5000*d.slideCount)
}else{d.slideWidth=Math.ceil(d.listWidth);
d.$slideTrack.height(Math.ceil((d.$slides.first().outerHeight(true)*d.$slideTrack.children(".slick-slide").length)))
}}var e=d.$slides.first().outerWidth(true)-d.$slides.first().width();
if(d.options.variableWidth===false){d.$slideTrack.children(".slick-slide").width(d.slideWidth-e)
}};
c.prototype.setFade=function(){var d=this,e;
d.$slides.each(function(f,g){e=(d.slideWidth*f)*-1;
if(d.options.rtl===true){b(g).css({position:"relative",right:e,top:0,zIndex:d.options.zIndex-2,opacity:0})
}else{b(g).css({position:"relative",left:e,top:0,zIndex:d.options.zIndex-2,opacity:0})
}});
d.$slides.eq(d.currentSlide).css({zIndex:d.options.zIndex-1,opacity:1})
};
c.prototype.setHeight=function(){var e=this;
if(e.options.slidesToShow===1&&e.options.adaptiveHeight===true&&e.options.vertical===false){var d=e.$slides.eq(e.currentSlide).outerHeight(true);
e.$list.css("height",d)
}};
c.prototype.setOption=c.prototype.slickSetOption=function(){var e=this,d,i,h,j,g=false,f;
if(b.type(arguments[0])==="object"){h=arguments[0];
g=arguments[1];
f="multiple"
}else{if(b.type(arguments[0])==="string"){h=arguments[0];
j=arguments[1];
g=arguments[2];
if(arguments[0]==="responsive"&&b.type(arguments[1])==="array"){f="responsive"
}else{if(typeof arguments[1]!=="undefined"){f="single"
}}}}if(f==="single"){e.options[h]=j
}else{if(f==="multiple"){b.each(h,function(k,l){e.options[k]=l
})
}else{if(f==="responsive"){for(i in j){if(b.type(e.options.responsive)!=="array"){e.options.responsive=[j[i]]
}else{d=e.options.responsive.length-1;
while(d>=0){if(e.options.responsive[d].breakpoint===j[i].breakpoint){e.options.responsive.splice(d,1)
}d--
}e.options.responsive.push(j[i])
}}}}}if(g){e.unload();
e.reinit()
}};
c.prototype.setPosition=function(){var d=this;
d.setDimensions();
d.setHeight();
if(d.options.fade===false){d.setCSS(d.getLeft(d.currentSlide))
}else{d.setFade()
}d.$slider.trigger("setPosition",[d])
};
c.prototype.setProps=function(){var e=this,d=document.body.style;
e.positionProp=e.options.vertical===true?"top":"left";
if(e.positionProp==="top"){e.$slider.addClass("slick-vertical")
}else{e.$slider.removeClass("slick-vertical")
}if(d.WebkitTransition!==undefined||d.MozTransition!==undefined||d.msTransition!==undefined){if(e.options.useCSS===true){e.cssTransitions=true
}}if(e.options.fade){if(typeof e.options.zIndex==="number"){if(e.options.zIndex<3){e.options.zIndex=3
}}else{e.options.zIndex=e.defaults.zIndex
}}if(d.OTransform!==undefined){e.animType="OTransform";
e.transformType="-o-transform";
e.transitionType="OTransition";
if(d.perspectiveProperty===undefined&&d.webkitPerspective===undefined){e.animType=false
}}if(d.MozTransform!==undefined){e.animType="MozTransform";
e.transformType="-moz-transform";
e.transitionType="MozTransition";
if(d.perspectiveProperty===undefined&&d.MozPerspective===undefined){e.animType=false
}}if(d.webkitTransform!==undefined){e.animType="webkitTransform";
e.transformType="-webkit-transform";
e.transitionType="webkitTransition";
if(d.perspectiveProperty===undefined&&d.webkitPerspective===undefined){e.animType=false
}}if(d.msTransform!==undefined){e.animType="msTransform";
e.transformType="-ms-transform";
e.transitionType="msTransition";
if(d.msTransform===undefined){e.animType=false
}}if(d.transform!==undefined&&e.animType!==false){e.animType="transform";
e.transformType="transform";
e.transitionType="transition"
}e.transformsEnabled=e.options.useTransform&&(e.animType!==null&&e.animType!==false)
};
c.prototype.setSlideClasses=function(g){var f=this,d,e,i,h;
e=f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");
f.$slides.eq(g).addClass("slick-current");
if(f.options.centerMode===true){d=Math.floor(f.options.slidesToShow/2);
if(f.options.infinite===true){if(g>=d&&g<=(f.slideCount-1)-d){f.$slides.slice(g-d,g+d+1).addClass("slick-active").attr("aria-hidden","false")
}else{i=f.options.slidesToShow+g;
e.slice(i-d+1,i+d+2).addClass("slick-active").attr("aria-hidden","false")
}if(g===0){e.eq(e.length-1-f.options.slidesToShow).addClass("slick-center")
}else{if(g===f.slideCount-1){e.eq(f.options.slidesToShow).addClass("slick-center")
}}}f.$slides.eq(g).addClass("slick-center")
}else{if(g>=0&&g<=(f.slideCount-f.options.slidesToShow)){f.$slides.slice(g,g+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(e.length<=f.options.slidesToShow){e.addClass("slick-active").attr("aria-hidden","false")
}else{h=f.slideCount%f.options.slidesToShow;
i=f.options.infinite===true?f.options.slidesToShow+g:g;
if(f.options.slidesToShow==f.options.slidesToScroll&&(f.slideCount-g)<f.options.slidesToShow){e.slice(i-(f.options.slidesToShow-h),i+h).addClass("slick-active").attr("aria-hidden","false")
}else{e.slice(i,i+f.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(f.options.lazyLoad==="ondemand"){f.lazyLoad()
}};
c.prototype.setupInfinite=function(){var d=this,e,g,f;
if(d.options.fade===true){d.options.centerMode=false
}if(d.options.infinite===true&&d.options.fade===false){g=null;
if(d.slideCount>d.options.slidesToShow){if(d.options.centerMode===true){f=d.options.slidesToShow+1
}else{f=d.options.slidesToShow
}for(e=d.slideCount;
e>(d.slideCount-f);
e-=1){g=e-1;
b(d.$slides[g]).clone(true).attr("id","").attr("data-slick-index",g-d.slideCount).prependTo(d.$slideTrack).addClass("slick-cloned")
}for(e=0;
e<f;
e+=1){g=e;
b(d.$slides[g]).clone(true).attr("id","").attr("data-slick-index",g+d.slideCount).appendTo(d.$slideTrack).addClass("slick-cloned")
}d.$slideTrack.find(".slick-cloned").find("[id]").each(function(){b(this).attr("id","")
})
}}};
c.prototype.interrupt=function(d){var e=this;
if(!d){e.autoPlay()
}e.interrupted=d
};
c.prototype.selectHandler=function(g){var f=this;
var e=b(g.target).is(".slick-slide")?b(g.target):b(g.target).parents(".slick-slide");
var d=parseInt(e.attr("data-slick-index"));
if(!d){d=0
}if(f.slideCount<=f.options.slidesToShow){f.setSlideClasses(d);
f.asNavFor(d);
return
}f.slideHandler(d)
};
c.prototype.slideHandler=function(h,k,f){var e,o,j,l,i=null,m=this,d;
k=k||false;
if(m.animating===true&&m.options.waitForAnimate===true){return
}if(m.options.fade===true&&m.currentSlide===h){return
}if(m.slideCount<=m.options.slidesToShow){return
}if(k===false){m.asNavFor(h)
}e=h;
i=m.getLeft(e);
l=m.getLeft(m.currentSlide);
m.currentLeft=m.swipeLeft===null?l:m.swipeLeft;
if(m.options.infinite===false&&m.options.centerMode===false&&(h<0||h>m.getDotCount()*m.options.slidesToScroll)){if(m.options.fade===false){e=m.currentSlide;
if(f!==true){m.animateSlide(l,function(){m.postSlide(e)
})
}else{m.postSlide(e)
}}return
}else{if(m.options.infinite===false&&m.options.centerMode===true&&(h<0||h>(m.slideCount-m.options.slidesToScroll))){if(m.options.fade===false){e=m.currentSlide;
if(f!==true){m.animateSlide(l,function(){m.postSlide(e)
})
}else{m.postSlide(e)
}}return
}}if(m.options.autoplay){clearInterval(m.autoPlayTimer)
}if(e<0){if(m.slideCount%m.options.slidesToScroll!==0){o=m.slideCount-(m.slideCount%m.options.slidesToScroll)-m.options.slidesToScroll
}else{o=m.slideCount+e
}}else{if(e>=m.slideCount){if(m.slideCount%m.options.slidesToScroll!==0){o=0
}else{o=e-m.slideCount
}}else{o=e
}}if(m.options.infinite===true&&m.options.slidesToScroll>1){var g=parseInt(e/m.options.slidesToScroll);
var p=m.options.slidesToShow+((g-1)*m.options.slidesToScroll);
if(p>=m.slideCount){o=0
}}m.animating=true;
m.$slider.trigger("beforeChange",[m,m.currentSlide,o]);
j=m.currentSlide;
m.currentSlide=o;
m.setSlideClasses(m.currentSlide);
if(m.options.asNavFor){d=m.getNavTarget();
d=d.slick("getSlick");
if(d.slideCount<=d.options.slidesToShow){currentSlide;
d.setSlideClasses(m.currentSlide)
}}m.updateDots();
m.updateArrows();
if(m.options.fade===true){if(f!==true){m.fadeSlideOut(j);
m.fadeSlide(o,function(){m.postSlide(o)
})
}else{m.postSlide(o)
}m.animateHeight();
return
}if(f!==true){m.animateSlide(i,function(){m.postSlide(o)
})
}else{m.postSlide(o)
}};
c.prototype.startLoad=function(){var d=this;
if(d.options.arrows===true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.hide();
d.$nextArrow.hide()
}if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){d.$dots.hide()
}d.$slider.addClass("slick-loading")
};
c.prototype.swipeDirection=function(){var d,g,f,h,e=this;
d=e.touchObject.startX-e.touchObject.curX;
g=e.touchObject.startY-e.touchObject.curY;
f=Math.atan2(g,d);
h=Math.round(f*180/Math.PI);
if(h<0){h=360-Math.abs(h)
}if((h<=45)&&(h>=0)){return(e.options.rtl===false?"left":"right")
}if((h<=360)&&(h>=315)){return(e.options.rtl===false?"left":"right")
}if((h>=135)&&(h<=225)){return(e.options.rtl===false?"right":"left")
}if(e.options.verticalSwiping===true){if((h>=35)&&(h<=135)){return"down"
}else{return"up"
}}return"vertical"
};
c.prototype.swipeEnd=function(f){var e=this,d,g;
e.dragging=false;
e.interrupted=false;
e.shouldClick=(e.touchObject.swipeLength>10)?false:true;
if(e.touchObject.curX===undefined){return false
}if(e.touchObject.edgeHit===true){e.$slider.trigger("edge",[e,e.swipeDirection()])
}if(e.touchObject.swipeLength>=e.touchObject.minSwipe){g=e.swipeDirection();
switch(g){case"left":case"down":d=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount();
e.currentDirection=0;
break;
case"right":case"up":d=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount();
e.currentDirection=1;
break;
default:}if(g!="vertical"){e.slideHandler(d);
e.touchObject={};
e.$slider.trigger("swipe",[e,g])
}}else{if(e.touchObject.startX!==e.touchObject.curX){e.slideHandler(e.currentSlide);
e.touchObject={}
}}};
c.prototype.swipeHandler=function(e){var d=this;
if((d.options.swipe===false)||("ontouchend" in document&&d.options.swipe===false)){return
}else{if(d.options.draggable===false&&e.type.indexOf("mouse")!==-1){return
}}d.touchObject.fingerCount=e.originalEvent&&e.originalEvent.touches!==undefined?e.originalEvent.touches.length:1;
d.touchObject.minSwipe=d.listWidth/d.options.touchThreshold;
if(d.options.verticalSwiping===true){d.touchObject.minSwipe=d.listHeight/d.options.touchThreshold
}switch(e.data.action){case"start":d.swipeStart(e);
break;
case"move":d.swipeMove(e);
break;
case"end":d.swipeEnd(e);
break
}};
c.prototype.swipeMove=function(g){var f=this,k=false,i,e,h,d,j;
j=g.originalEvent!==undefined?g.originalEvent.touches:null;
if(!f.dragging||j&&j.length!==1){return false
}i=f.getLeft(f.currentSlide);
f.touchObject.curX=j!==undefined?j[0].pageX:g.clientX;
f.touchObject.curY=j!==undefined?j[0].pageY:g.clientY;
f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curX-f.touchObject.startX,2)));
if(f.options.verticalSwiping===true){f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curY-f.touchObject.startY,2)))
}e=f.swipeDirection();
if(e==="vertical"){return
}if(g.originalEvent!==undefined&&f.touchObject.swipeLength>4){g.preventDefault()
}d=(f.options.rtl===false?1:-1)*(f.touchObject.curX>f.touchObject.startX?1:-1);
if(f.options.verticalSwiping===true){d=f.touchObject.curY>f.touchObject.startY?1:-1
}h=f.touchObject.swipeLength;
f.touchObject.edgeHit=false;
if(f.options.infinite===false){if((f.currentSlide===0&&e==="right")||(f.currentSlide>=f.getDotCount()&&e==="left")){h=f.touchObject.swipeLength*f.options.edgeFriction;
f.touchObject.edgeHit=true
}}if(f.options.vertical===false){f.swipeLeft=i+h*d
}else{f.swipeLeft=i+(h*(f.$list.height()/f.listWidth))*d
}if(f.options.verticalSwiping===true){f.swipeLeft=i+h*d
}if(f.options.fade===true||f.options.touchMove===false){return false
}if(f.animating===true){f.swipeLeft=null;
return false
}f.setCSS(f.swipeLeft)
};
c.prototype.swipeStart=function(e){var d=this,f;
d.interrupted=true;
if(d.touchObject.fingerCount!==1||d.slideCount<=d.options.slidesToShow){d.touchObject={};
return false
}if(e.originalEvent!==undefined&&e.originalEvent.touches!==undefined){f=e.originalEvent.touches[0]
}d.touchObject.startX=d.touchObject.curX=f!==undefined?f.pageX:e.clientX;
d.touchObject.startY=d.touchObject.curY=f!==undefined?f.pageY:e.clientY;
d.dragging=true
};
c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var d=this;
if(d.$slidesCache!==null){d.unload();
d.$slideTrack.children(this.options.slide).detach();
d.$slidesCache.appendTo(d.$slideTrack);
d.reinit()
}};
c.prototype.unload=function(){var d=this;
b(".slick-cloned",d.$slider).remove();
if(d.$dots){d.$dots.remove()
}if(d.$prevArrow&&d.htmlExpr.test(d.options.prevArrow)){d.$prevArrow.remove()
}if(d.$nextArrow&&d.htmlExpr.test(d.options.nextArrow)){d.$nextArrow.remove()
}d.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")
};
c.prototype.unslick=function(e){var d=this;
d.$slider.trigger("unslick",[d,e]);
d.destroy()
};
c.prototype.updateArrows=function(){var e=this,d;
d=Math.floor(e.options.slidesToShow/2);
if(e.options.arrows===true&&e.slideCount>e.options.slidesToShow&&!e.options.infinite){e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false");
e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false");
if(e.currentSlide===0){e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===false){e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}else{if(e.currentSlide>=e.slideCount-1&&e.options.centerMode===true){e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true");
e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")
}}}}};
c.prototype.updateDots=function(){var d=this;
if(d.$dots!==null){d.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
d.$dots.find("li").eq(Math.floor(d.currentSlide/d.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
c.prototype.visibility=function(){var d=this;
if(d.options.autoplay){if(document[d.hidden]){d.interrupted=true
}else{d.interrupted=false
}}};
b.fn.slick=function(){var g=this,j=arguments[0],f=Array.prototype.slice.call(arguments,1),d=g.length,h,e;
for(h=0;
h<d;
h++){if(typeof j=="object"||typeof j=="undefined"){g[h].slick=new c(g[h],j)
}else{e=g[h].slick[j].apply(g[h].slick,f)
}if(typeof e!="undefined"){return e
}}return g
}
}));
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
;
!function(d){var c=navigator.userAgent;
d.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var i,p=document.createElement("source"),o=function(g){var f,q,h=g.parentNode;
"PICTURE"===h.nodeName.toUpperCase()?(f=p.cloneNode(),h.insertBefore(f,h.firstElementChild),setTimeout(function(){h.removeChild(f)
})):(!g._pfLastSize||g.offsetWidth>g._pfLastSize)&&(g._pfLastSize=g.offsetWidth,q=g.sizes,g.sizes+=",100vw",setTimeout(function(){g.sizes=q
}))
},m=function(){var f,e=document.querySelectorAll("picture > img, img[srcset][sizes]");
for(f=0;
f<e.length;
f++){o(e[f])
}},l=function(){clearTimeout(i),i=setTimeout(m,99)
},k=d.matchMedia&&matchMedia("(orientation: landscape)"),j=function(){l(),k&&k.addListener&&k.addListener(l)
};
return p.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?j():document.addEventListener("DOMContentLoaded",j),l
}())
}(window),function(a4,a3,a2){function a1(b){return" "===b||"	"===b||"\n"===b||"\f"===b||"\r"===b
}function a0(e,g){var f=new a4.Image;
return f.onerror=function(){aC[e]=!1,a5()
},f.onload=function(){aC[e]=1===f.width,a5()
},f.src=g,"pending"
}function aZ(){ao=!1,al=a4.devicePixelRatio,an={},am={},aM.DPR=al||1,ak.width=Math.max(a4.innerWidth||0,aF.clientWidth),ak.height=Math.max(a4.innerHeight||0,aF.clientHeight),ak.vw=ak.width/100,ak.vh=ak.height/100,aN=[ak.height,ak.width,al].join("-"),ak.em=aM.getEmValue(),ak.rem=ak.em
}function aY(j,i,q,p){var o,m,l,k;
return"saveData"===aB.algorithm?j>2.7?k=q+1:(m=i-q,o=Math.pow(j-0.6,1.5),l=m*o,p&&(l+=0.1*o),k=j+l):k=q>1?Math.sqrt(j*i):j,k>q
}function aX(f){var e,h=aM.getSet(f),g=!1;
"pending"!==h&&(g=aN,h&&(e=aM.setRes(h),aM.applySetCandidate(e,f))),f[aM.ns].evaled=g
}function aW(d,c){return d.res-c.res
}function aV(f,e,h){var g;
return !h&&e&&(h=f[aM.ns].sets,h=h&&h[h.length-1]),g=aU(e,h),g&&(e=aM.makeUrl(e),f[aM.ns].curSrc=e,f[aM.ns].curCan=g,g.res||aD(g,g.set.sizes)),g
}function aU(g,f){var j,i,h;
if(g&&f){for(h=aM.parseSet(f),g=aM.makeUrl(g),j=0;
j<h.length;
j++){if(g===aM.makeUrl(h[j].url)){i=h[j];
break
}}}return i
}function aT(i,h){var o,m,l,k,j=i.getElementsByTagName("source");
for(o=0,m=j.length;
m>o;
o++){l=j[o],l[aM.ns]=!0,k=l.getAttribute("srcset"),k&&h.push({srcset:k,media:l.getAttribute("media"),type:l.getAttribute("type"),sizes:l.getAttribute("sizes")})
}}function aS(A,z){function y(e){var g,f=e.exec(A.substring(o));
return f?(g=f[0],o+=g.length,g):void 0
}function x(){var I,H,G,F,E,D,C,B,h,g=!1,b={};
for(F=0;
F<u.length;
F++){E=u[F],D=E[E.length-1],C=E.substring(0,E.length-1),B=parseInt(C,10),h=parseFloat(C),ad.test(C)&&"w"===D?((I||H)&&(g=!0),0===B?g=!0:I=B):ac.test(C)&&"x"===D?((I||H||G)&&(g=!0),0>h?g=!0:H=h):ad.test(C)&&"h"===D?((G||H)&&(g=!0),0===B?g=!0:G=B):g=!0
}g||(b.url=v,I&&(b.w=I),H&&(b.d=H),G&&(b.h=G),G||H||I||(b.d=1),1===b.d&&(z.has1x=!0),b.set=z,d.push(b))
}function w(){for(y(ah),t="",r="in descriptor";
;
){if(q=A.charAt(o),"in descriptor"===r){if(a1(q)){t&&(u.push(t),t="",r="after descriptor")
}else{if(","===q){return o+=1,t&&u.push(t),void x()
}if("("===q){t+=q,r="in parens"
}else{if(""===q){return t&&u.push(t),void x()
}t+=q
}}}else{if("in parens"===r){if(")"===q){t+=q,r="in descriptor"
}else{if(""===q){return u.push(t),void x()
}t+=q
}}else{if("after descriptor"===r){if(a1(q)){}else{if(""===q){return void x()
}r="in descriptor",o-=1
}}}}o+=1
}}for(var v,u,t,r,q,p=A.length,o=0,d=[];
;
){if(y(ag),o>=p){return d
}v=y(af),u=[],","===v.slice(-1)?(v=v.replace(ae,""),x()):w()
}}function aR(x){function w(G){function F(){C&&(B.push(C),C="")
}function E(){B[0]&&(A.push(B),B=[])
}for(var D,C="",B=[],A=[],z=0,y=0,l=!1;
;
){if(D=G.charAt(y),""===D){return F(),E(),A
}if(l){if("*"===D&&"/"===G[y+1]){l=!1,y+=2,F();
continue
}y+=1
}else{if(a1(D)){if(G.charAt(y-1)&&a1(G.charAt(y-1))||!C){y+=1;
continue
}if(0===z){F(),y+=1;
continue
}D=" "
}else{if("("===D){z+=1
}else{if(")"===D){z-=1
}else{if(","===D){F(),E(),y+=1;
continue
}if("/"===D&&"*"===G.charAt(y+1)){l=!0,y+=2;
continue
}}}}C+=D,y+=1
}}}function v(b){return m.test(b)&&parseFloat(b)>=0?!0:d.test(b)?!0:"0"===b||"-0"===b||"+0"===b?!0:!1
}var u,t,r,q,p,o,m=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,d=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
for(t=w(x),r=t.length,u=0;
r>u;
u++){if(q=t[u],p=q[q.length-1],v(p)){if(o=p,q.pop(),0===q.length){return o
}if(q=q.join(" "),aM.matchesMedia(q)){return o
}}}return"100vw"
}a3.createElement("picture");
var aQ,aP,aO,aN,aM={},aL=!1,aK=function(){},aJ=a3.createElement("img"),aI=aJ.getAttribute,aH=aJ.setAttribute,aG=aJ.removeAttribute,aF=a3.documentElement,aC={},aB={algorithm:""},aA="data-pfsrc",ay=aA+"set",ax=navigator.userAgent,aw=/rident/.test(ax)||/ecko/.test(ax)&&ax.match(/rv\:(\d+)/)&&RegExp.$1>35,av="currentSrc",au=/\s+\+?\d+(e\d+)?w/,at=/(\([^)]+\))?\s*(.+)/,ar=a4.picturefillCFG,aq="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",ap="font-size:100%!important;",ao=!0,an={},am={},al=a4.devicePixelRatio,ak={px:1,"in":96},aj=a3.createElement("a"),ai=!1,ah=/^[ \t\n\r\u000c]+/,ag=/^[, \t\n\r\u000c]+/,af=/^[^ \t\n\r\u000c]+/,ae=/[,]+$/,ad=/^\d+$/,ac=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,ab=function(f,e,h,g){f.addEventListener?f.addEventListener(e,h,g||!1):f.attachEvent&&f.attachEvent("on"+e,h)
},aE=function(d){var c={};
return function(b){return b in c||(c[b]=d(b)),c[b]
}
},a6=function(){var e=/^([\d\.]+)(em|vw|px)$/,d=function(){for(var h=arguments,g=0,i=h[0];
++g in h;
){i=i.replace(h[g],h[++g])
}return i
},f=aE(function(b){return"return "+d((b||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"
});
return function(c,i){var h;
if(!(c in an)){if(an[c]=!1,i&&(h=c.match(e))){an[c]=h[1]*ak[h[2]]
}else{try{an[c]=new Function("e",f(c))(ak)
}catch(g){}}}return an[c]
}
}(),aD=function(d,c){return d.w?(d.cWidth=aM.calcListLength(c||"100vw"),d.res=d.w/d.cWidth):d.res=d.d,d
},a5=function(b){if(aL){var j,i,h,g=b||{};
if(g.elements&&1===g.elements.nodeType&&("IMG"===g.elements.nodeName.toUpperCase()?g.elements=[g.elements]:(g.context=g.elements,g.elements=null)),j=g.elements||aM.qsa(g.context||a3,g.reevaluate||g.reselect?aM.sel:aM.selShort),h=j.length){for(aM.setupRun(g),ai=!0,i=0;
h>i;
i++){aM.fillImg(j[i],g)
}aM.teardownRun(g)
}}};
aQ=a4.console&&console.warn?function(b){console.warn(b)
}:aK,av in aJ||(av="src"),aC["image/jpeg"]=!0,aC["image/gif"]=!0,aC["image/png"]=!0,aC["image/svg+xml"]=a3.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),aM.ns=("pf"+(new Date).getTime()).substr(0,9),aM.supSrcset="srcset" in aJ,aM.supSizes="sizes" in aJ,aM.supPicture=!!a4.HTMLPictureElement,aM.supSrcset&&aM.supPicture&&!aM.supSizes&&!function(b){aJ.srcset="data:,a",b.src="data:,a",aM.supSrcset=aJ.complete===b.complete,aM.supPicture=aM.supSrcset&&aM.supPicture
}(a3.createElement("img")),aM.supSrcset&&!aM.supSizes?!function(){var b="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",h="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",g=a3.createElement("img"),f=function(){var c=g.width;
2===c&&(aM.supSizes=!0),aO=aM.supSrcset&&!aM.supSizes,aL=!0,setTimeout(a5)
};
g.onload=f,g.onerror=f,g.setAttribute("sizes","9px"),g.srcset=h+" 1w,"+b+" 9w",g.src=h
}():aL=!0,aM.selShort="picture>img,img[srcset]",aM.sel=aM.selShort,aM.cfg=aB,aM.DPR=al||1,aM.u=ak,aM.types=aC,aM.setSize=aK,aM.makeUrl=aE(function(b){return aj.href=b,aj.href
}),aM.qsa=function(d,c){return"querySelector" in d?d.querySelectorAll(c):[]
},aM.matchesMedia=function(){return a4.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?aM.matchesMedia=function(b){return !b||matchMedia(b).matches
}:aM.matchesMedia=aM.mMQ,aM.matchesMedia.apply(this,arguments)
},aM.mMQ=function(b){return b?a6(b):!0
},aM.calcLength=function(d){var c=a6(d,!0)||!1;
return 0>c&&(c=!1),c
},aM.supportsType=function(b){return b?aC[b]:!0
},aM.parseSize=aE(function(d){var c=(d||"").match(at);
return{media:c&&c[1],length:c&&c[2]}
}),aM.parseSet=function(b){return b.cands||(b.cands=aS(b.srcset,b)),b.cands
},aM.getEmValue=function(){var b;
if(!aP&&(b=a3.body)){var h=a3.createElement("div"),g=aF.style.cssText,f=b.style.cssText;
h.style.cssText=aq,aF.style.cssText=ap,b.style.cssText=ap,b.appendChild(h),aP=h.offsetWidth,b.removeChild(h),aP=parseFloat(aP,10),aF.style.cssText=g,b.style.cssText=f
}return aP||16
},aM.calcListLength=function(d){if(!(d in am)||aB.uT){var c=aM.calcLength(aR(d));
am[d]=c?c:ak.width
}return am[d]
},aM.setRes=function(f){var e;
if(f){e=aM.parseSet(f);
for(var h=0,g=e.length;
g>h;
h++){aD(e[h],f.sizes)
}}return e
},aM.setRes.res=aD,aM.applySetCandidate=function(A,z){if(A.length){var y,x,w,v,u,t,r,q,j,i=z[aM.ns],g=aM.DPR;
if(t=i.curSrc||z[av],r=i.curCan||aV(z,t,A[0].set),r&&r.set===A[0].set&&(j=aw&&!z.complete&&r.res-0.1>g,j||(r.cached=!0,r.res>=g&&(u=r))),!u){for(A.sort(aW),v=A.length,u=A[v-1],x=0;
v>x;
x++){if(y=A[x],y.res>=g){w=x-1,u=A[w]&&(j||t!==aM.makeUrl(y.url))&&aY(A[w].res,y.res,g,A[w].cached)?A[w]:y;
break
}}}u&&(q=aM.makeUrl(u.url),i.curSrc=q,i.curCan=u,q!==t&&aM.setSrc(z,u),aM.setSize(z))
}},aM.setSrc=function(e,d){var f;
e.src=d.url,"image/svg+xml"===d.set.type&&(f=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=f))
},aM.getSet=function(h){var g,l,k,j=!1,i=h[aM.ns].sets;
for(g=0;
g<i.length&&!j;
g++){if(l=i[g],l.srcset&&aM.matchesMedia(l.media)&&(k=aM.supportsType(l.type))){"pending"===k&&(l=k),j=l;
break
}}return j
},aM.parseSets=function(t,r,q){var p,o,m,l,k=r&&"PICTURE"===r.nodeName.toUpperCase(),c=t[aM.ns];
(c.src===a2||q.src)&&(c.src=aI.call(t,"src"),c.src?aH.call(t,aA,c.src):aG.call(t,aA)),(c.srcset===a2||q.srcset||!aM.supSrcset||t.srcset)&&(p=aI.call(t,"srcset"),c.srcset=p,l=!0),c.sets=[],k&&(c.pic=!0,aT(r,c.sets)),c.srcset?(o={srcset:c.srcset,sizes:aI.call(t,"sizes")},c.sets.push(o),m=(aO||c.src)&&au.test(c.srcset||""),m||!c.src||aU(c.src,o)||o.has1x||(o.srcset+=", "+c.src,o.cands.push({url:c.src,d:1,set:o}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=a2,c.supported=!(k||o&&!aM.supSrcset||m&&!aM.supSizes),l&&aM.supSrcset&&!c.supported&&(p?(aH.call(t,ay,p),t.srcset=""):aG.call(t,ay)),c.supported&&!c.srcset&&(!c.src&&t.src||t.src!==aM.makeUrl(c.src))&&(null===c.src?t.removeAttribute("src"):t.src=c.src),c.parsed=!0
},aM.fillImg=function(f,e){var h,g=e.reselect||e.reevaluate;
f[aM.ns]||(f[aM.ns]={}),h=f[aM.ns],(g||h.evaled!==aN)&&((!h.parsed||e.reevaluate)&&aM.parseSets(f,f.parentNode,e),h.supported?h.evaled=aN:aX(f))
},aM.setupRun=function(){(!ai||ao||al!==a4.devicePixelRatio)&&aZ()
},aM.supPicture?(a5=aK,aM.fillImg=aK):!function(){var p,o=a4.attachEvent?/d$|^c/:/d$|^c|^i/,m=function(){var c=a3.readyState||"";
l=setTimeout(m,"loading"===c?200:999),a3.body&&(aM.fillImgs(),p=p||o.test(c),p&&clearTimeout(l))
},l=setTimeout(m,a3.body?9:99),k=function(g,f){var q,i,h=function(){var c=new Date-i;
f>c?q=setTimeout(h,f-c):(q=null,g())
};
return function(){i=new Date,q||(q=setTimeout(h,f))
}
},j=aF.clientHeight,b=function(){ao=Math.max(a4.innerWidth||0,aF.clientWidth)!==ak.width||aF.clientHeight!==j,j=aF.clientHeight,ao&&aM.fillImgs()
};
ab(a4,"resize",k(b,99)),ab(a3,"readystatechange",m)
}(),aM.picturefill=a5,aM.fillImgs=a5,aM.teardownRun=aK,a5._=aM,a4.picturefillCFG={pf:aM,push:function(d){var c=d.shift();
"function"==typeof aM[c]?aM[c].apply(aM,d):(aB[c]=d[0],ai&&aM.fillImgs({reselect:!0}))
}};
for(;
ar&&ar.length;
){a4.picturefillCFG.push(ar.shift())
}a4.picturefill=a5,"object"==typeof module&&"object"==typeof module.exports?module.exports=a5:"function"==typeof define&&define.amd&&define("picturefill",function(){return a5
}),aM.supPicture||(aC["image/webp"]=a0("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window,document);
(function(G){var i=!1,q=!1,h=5000,f=2000,j=0,d=function(){var v=document.getElementsByTagName("script"),v=v[v.length-1].src.split("?")[0];
return 0<v.split("/").length?v.split("/").slice(0,-1).join("/")+"/":""
}();
Array.prototype.forEach||(Array.prototype.forEach=function(x,y){for(var w=0,v=this.length;
w<v;
++w){x.call(y,this[w],w,this)
}});
var m=window.requestAnimationFrame||!1,l=window.cancelAnimationFrame||!1;
["ms","moz","webkit","o"].forEach(function(v){m||(m=window[v+"RequestAnimationFrame"]);
l||(l=window[v+"CancelAnimationFrame"]||window[v+"CancelRequestAnimationFrame"])
});
var g=window.MutationObserver||window.WebKitMutationObserver||!1,o={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},p=!1,c=function(){if(p){return p
}var y=document.createElement("DIV"),A={haspointerlock:"pointerLockElement" in document||"mozPointerLockElement" in document||"webkitPointerLockElement" in document};
A.isopera="opera" in window;
A.isopera12=A.isopera&&"getUserMedia" in navigator;
A.isie="all" in document&&"attachEvent" in y&&!A.isopera;
A.isieold=A.isie&&!("msInterpolationMode" in y.style);
A.isie7=A.isie&&!A.isieold&&(!("documentMode" in document)||7==document.documentMode);
A.isie8=A.isie&&"documentMode" in document&&8==document.documentMode;
A.isie9=A.isie&&"performance" in window&&9<=document.documentMode;
A.isie10=A.isie&&"performance" in window&&10<=document.documentMode;
A.isie9mobile=/iemobile.9/i.test(navigator.userAgent);
A.isie9mobile&&(A.isie9=!1);
A.isie7mobile=!A.isie9mobile&&A.isie7&&/iemobile/i.test(navigator.userAgent);
A.ismozilla="MozAppearance" in y.style;
A.iswebkit="WebkitAppearance" in y.style;
A.ischrome="chrome" in window;
A.ischrome22=A.ischrome&&A.haspointerlock;
A.ischrome26=A.ischrome&&"transition" in y.style;
A.cantouch="ontouchstart" in document.documentElement||"ontouchstart" in window;
A.hasmstouch=window.navigator.msPointerEnabled||!1;
A.ismac=/^mac$/i.test(navigator.platform);
A.isios=A.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);
A.isios4=A.isios&&!("seal" in Object);
A.isandroid=/android/i.test(navigator.userAgent);
A.trstyle=!1;
A.hastransform=!1;
A.hastranslate3d=!1;
A.transitionstyle=!1;
A.hastransition=!1;
A.transitionend=!1;
for(var x=["transform","msTransform","webkitTransform","MozTransform","OTransform"],v=0;
v<x.length;
v++){if("undefined"!=typeof y.style[x[v]]){A.trstyle=x[v];
break
}}A.hastransform=!1!=A.trstyle;
A.hastransform&&(y.style[A.trstyle]="translate3d(1px,2px,3px)",A.hastranslate3d=/translate3d/.test(y.style[A.trstyle]));
A.transitionstyle=!1;
A.prefixstyle="";
A.transitionend=!1;
for(var x="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),z=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),w="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),v=0;
v<x.length;
v++){if(x[v] in y.style){A.transitionstyle=x[v];
A.prefixstyle=z[v];
A.transitionend=w[v];
break
}}A.ischrome26&&(A.prefixstyle=z[1]);
A.hastransition=A.transitionstyle;
a:{x=["-moz-grab","-webkit-grab","grab"];
if(A.ischrome&&!A.ischrome22||A.isie){x=[]
}for(v=0;
v<x.length;
v++){if(z=x[v],y.style.cursor=z,y.style.cursor==z){x=z;
break a
}}x="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
}A.cursorgrabvalue=x;
A.hasmousecapture="setCapture" in y;
A.hasMutationObserver=!1!==g;
return p=A
},b=function(y,B){function z(){var F=C.win;
if("zIndex" in F){return F.zIndex()
}for(;
0<F.length&&9!=F[0].nodeType;
){var H=F.css("zIndex");
if(!isNaN(H)&&0!=H){return parseInt(H)
}F=F.parent()
}return !1
}function x(H,I,F){I=H.css(I);
H=parseFloat(I);
return isNaN(H)?(H=D[I]||0,F=3==H?F?C.win.outerHeight()-C.win.innerHeight():C.win.outerWidth()-C.win.innerWidth():1,C.isie8&&H&&(H+=1),F?H:0):H
}function w(I,J,F,H){C._bind(I,J,function(K){K=K?K:window.event;
var L={original:K,target:K.target||K.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==K.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){K.preventDefault?K.preventDefault():K.returnValue=!1;
return !1
},stopImmediatePropagation:function(){K.stopImmediatePropagation?K.stopImmediatePropagation():K.cancelBubble=!0
}};
"mousewheel"==J?(L.deltaY=-0.025*K.wheelDelta,K.wheelDeltaX&&(L.deltaX=-0.025*K.wheelDeltaX)):L.deltaY=K.detail;
return F.call(I,L)
},H)
}function E(J,K,F){var I,H;
0==J.deltaMode?(I=-Math.floor(J.deltaX*(C.opt.mousescrollstep/54)),H=-Math.floor(J.deltaY*(C.opt.mousescrollstep/54))):1==J.deltaMode&&(I=-Math.floor(J.deltaX*C.opt.mousescrollstep),H=-Math.floor(J.deltaY*C.opt.mousescrollstep));
K&&(0==I&&H)&&(I=H,H=0);
I&&(C.scrollmom&&C.scrollmom.stop(),C.lastdeltax+=I,C.debounced("mousewheelx",function(){var L=C.lastdeltax;
C.lastdeltax=0;
C.rail.drag||C.doScrollLeftBy(L)
},120));
if(H){if(C.opt.nativeparentscrolling&&F&&!C.ispage&&!C.zoomactive){if(0>H){if(C.getScrollTop()>=C.page.maxh){return !0
}}else{if(0>=C.getScrollTop()){return !0
}}}C.scrollmom&&C.scrollmom.stop();
C.lastdeltay+=H;
C.debounced("mousewheely",function(){var L=C.lastdeltay;
C.lastdeltay=0;
C.rail.drag||C.doScrollBy(L)
},120)
}J.stopImmediatePropagation();
return J.preventDefault()
}var C=this;
this.version="3.4.0";
this.name="nicescroll";
this.me=B;
this.opt={doc:G("body"),win:!1};
G.extend(this.opt,o);
this.opt.snapbackspeed=80;
if(y){for(var v in C.opt){"undefined"!=typeof y[v]&&(C.opt[v]=y[v])
}}this.iddoc=(this.doc=C.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";
this.ispage=/BODY|HTML/.test(C.opt.win?C.opt.win[0].nodeName:this.doc[0].nodeName);
this.haswrapper=!1!==C.opt.win;
this.win=C.opt.win||(this.ispage?G(window):this.doc);
this.docscroll=this.ispage&&!this.haswrapper?G(window):this.win;
this.body=G("body");
this.iframe=this.isfixed=this.viewport=!1;
this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;
this.istextarea="TEXTAREA"==this.win[0].nodeName;
this.forcescreen=!1;
this.canshowonmouseevent="scroll"!=C.opt.autohidemode;
this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;
this.scroll={x:0,y:0};
this.scrollratio={x:0,y:0};
this.cursorheight=20;
this.scrollvaluemax=0;
this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;
do{this.id="ascrail"+f++
}while(document.getElementById(this.id));
this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=this.rail=!1;
this.visibility=!0;
this.hidden=this.locked=!1;
this.cursoractive=!0;
this.overflowx=C.opt.overflowx;
this.overflowy=C.opt.overflowy;
this.nativescrollingarea=!1;
this.checkarea=0;
this.events=[];
this.saved={};
this.delaylist={};
this.synclist={};
this.lastdeltay=this.lastdeltax=0;
this.detected=c();
var A=G.extend({},this.detected);
this.ishwscroll=(this.canhwscroll=A.hastransform&&C.opt.hwacceleration)&&C.haswrapper;
this.istouchcapable=!1;
A.cantouch&&(A.ischrome&&!A.isios&&!A.isandroid)&&(this.istouchcapable=!0,A.cantouch=!1);
A.cantouch&&(A.ismozilla&&!A.isios)&&(this.istouchcapable=!0,A.cantouch=!1);
C.opt.enablemouselockapi||(A.hasmousecapture=!1,A.haspointerlock=!1);
this.delayed=function(K,L,H,J){var I=C.delaylist[K],F=(new Date).getTime();
if(!J&&I&&I.tt){return !1
}I&&I.tt&&clearTimeout(I.tt);
if(I&&I.last+H>F&&!I.tt){C.delaylist[K]={last:F+H,tt:setTimeout(function(){C.delaylist[K].tt=0;
L.call()
},H)}
}else{if(!I||!I.tt){C.delaylist[K]={last:F,tt:0},setTimeout(function(){L.call()
},0)
}}};
this.debounced=function(I,J,F){var H=C.delaylist[I];
(new Date).getTime();
C.delaylist[I]=J;
H||setTimeout(function(){var K=C.delaylist[I];
C.delaylist[I]=!1;
K.call()
},F)
};
this.synched=function(F,H){C.synclist[F]=H;
(function(){C.onsync||(m(function(){C.onsync=!1;
for(F in C.synclist){var I=C.synclist[F];
I&&I.call(C);
C.synclist[F]=!1
}}),C.onsync=!0)
})();
return F
};
this.unsynched=function(F){C.synclist[F]&&(C.synclist[F]=!1)
};
this.css=function(H,I){for(var F in I){C.saved.css.push([H,F,H.css(F)]),H.css(F,I[F])
}};
this.scrollTop=function(F){return"undefined"==typeof F?C.getScrollTop():C.setScrollTop(F)
};
this.scrollLeft=function(F){return"undefined"==typeof F?C.getScrollLeft():C.setScrollLeft(F)
};
BezierClass=function(F,M,J,K,L,I,H){this.st=F;
this.ed=M;
this.spd=J;
this.p1=K||0;
this.p2=L||1;
this.p3=I||0;
this.p4=H||1;
this.ts=(new Date).getTime();
this.df=this.ed-this.st
};
BezierClass.prototype={B2:function(F){return 3*F*F*(1-F)
},B3:function(F){return 3*F*(1-F)*(1-F)
},B4:function(F){return(1-F)*(1-F)*(1-F)
},getNow:function(){var F=1-((new Date).getTime()-this.ts)/this.spd,H=this.B2(F)+this.B3(F)+this.B4(F);
return 0>F?this.ed:this.st+Math.round(this.df*H)
},update:function(F,H){this.st=this.getNow();
this.ed=F;
this.spd=H;
this.ts=(new Date).getTime();
this.df=this.ed-this.st;
return this
}};
if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};
A.hastranslate3d&&A.isios&&this.doc.css("-webkit-backface-visibility","hidden");
var e=function(){var F=C.doc.css(A.trstyle);
return F&&"matrix"==F.substr(0,6)?F.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1
};
this.getScrollTop=function(F){if(!F){if(F=e()){return 16==F.length?-F[13]:-F[5]
}if(C.timerscroll&&C.timerscroll.bz){return C.timerscroll.bz.getNow()
}}return C.doc.translate.y
};
this.getScrollLeft=function(F){if(!F){if(F=e()){return 16==F.length?-F[12]:-F[4]
}if(C.timerscroll&&C.timerscroll.bh){return C.timerscroll.bh.getNow()
}}return C.doc.translate.x
};
this.notifyScrollEvent=document.createEvent?function(F){var H=document.createEvent("UIEvents");
H.initUIEvent("scroll",!1,!0,window,1);
F.dispatchEvent(H)
}:document.fireEvent?function(F){var H=document.createEventObject();
F.fireEvent("onscroll");
H.cancelBubble=!0
}:function(F,H){};
A.hastranslate3d&&C.opt.enabletranslate3d?(this.setScrollTop=function(F,H){C.doc.translate.y=F;
C.doc.translate.ty=-1*F+"px";
C.doc.css(A.trstyle,"translate3d("+C.doc.translate.tx+","+C.doc.translate.ty+",0px)");
H||C.notifyScrollEvent(C.win[0])
},this.setScrollLeft=function(F,H){C.doc.translate.x=F;
C.doc.translate.tx=-1*F+"px";
C.doc.css(A.trstyle,"translate3d("+C.doc.translate.tx+","+C.doc.translate.ty+",0px)");
H||C.notifyScrollEvent(C.win[0])
}):(this.setScrollTop=function(F,H){C.doc.translate.y=F;
C.doc.translate.ty=-1*F+"px";
C.doc.css(A.trstyle,"translate("+C.doc.translate.tx+","+C.doc.translate.ty+")");
H||C.notifyScrollEvent(C.win[0])
},this.setScrollLeft=function(F,H){C.doc.translate.x=F;
C.doc.translate.tx=-1*F+"px";
C.doc.css(A.trstyle,"translate("+C.doc.translate.tx+","+C.doc.translate.ty+")");
H||C.notifyScrollEvent(C.win[0])
})
}else{this.getScrollTop=function(){return C.docscroll.scrollTop()
},this.setScrollTop=function(F){return C.docscroll.scrollTop(F)
},this.getScrollLeft=function(){return C.docscroll.scrollLeft()
},this.setScrollLeft=function(F){return C.docscroll.scrollLeft(F)
}
}this.getTarget=function(F){return !F?!1:F.target?F.target:F.srcElement?F.srcElement:!1
};
this.hasParent=function(F,I){if(!F){return !1
}for(var H=F.target||F.srcElement||F||!1;
H&&H.id!=I;
){H=H.parentNode||!1
}return !1!==H
};
var D={thin:1,medium:3,thick:5};
this.getOffset=function(){if(C.isfixed){return{top:parseFloat(C.win.css("top")),left:parseFloat(C.win.css("left"))}
}if(!C.viewport){return C.win.offset()
}var F=C.win.offset(),H=C.viewport.offset();
return{top:F.top-H.top+C.viewport.scrollTop(),left:F.left-H.left+C.viewport.scrollLeft()}
};
this.updateScrollBar=function(J){if(C.ishwscroll){C.rail.css({height:C.win.innerHeight()}),C.railh&&C.railh.css({width:C.win.innerWidth()})
}else{var K=C.getOffset(),F=K.top,H=K.left,F=F+x(C.win,"border-top-width",!0);
C.win.outerWidth();
C.win.innerWidth();
var H=H+(C.rail.align?C.win.outerWidth()-x(C.win,"border-right-width")-C.rail.width:x(C.win,"border-left-width")),I=C.opt.railoffset;
I&&(I.top&&(F+=I.top),C.rail.align&&I.left&&(H+=I.left));
C.locked||C.rail.css({top:F,left:H,height:J?J.h:C.win.innerHeight()});
C.zoom&&C.zoom.css({top:F+1,left:1==C.rail.align?H-20:H+C.rail.width+4});
C.railh&&!C.locked&&(F=K.top,H=K.left,J=C.railh.align?F+x(C.win,"border-top-width",!0)+C.win.innerHeight()-C.railh.height:F+x(C.win,"border-top-width",!0),H+=x(C.win,"border-left-width"),C.railh.css({top:J,left:H,width:C.railh.width}))
}};
this.doRailClick=function(I,J,F){var H;
C.locked||(C.cancelEvent(I),J?(J=F?C.doScrollLeft:C.doScrollTop,H=F?(I.pageX-C.railh.offset().left-C.cursorwidth/2)*C.scrollratio.x:(I.pageY-C.rail.offset().top-C.cursorheight/2)*C.scrollratio.y,J(H)):(J=F?C.doScrollLeftBy:C.doScrollBy,H=F?C.scroll.x:C.scroll.y,I=F?I.pageX-C.railh.offset().left:I.pageY-C.rail.offset().top,F=F?C.view.w:C.view.h,H>=I?J(F):J(-F)))
};
C.hasanimationframe=m;
C.hascancelanimationframe=l;
C.hasanimationframe?C.hascancelanimationframe||(l=function(){C.cancelAnimationFrame=!0
}):(m=function(F){return setTimeout(F,15-Math.floor(+new Date/1000)%16)
},l=clearInterval);
this.init=function(){C.saved.css=[];
if(A.isie7mobile){return !0
}A.hasmstouch&&C.css(C.ispage?G("html"):C.win,{"-ms-touch-action":"none"});
C.zindex="auto";
C.zindex=!C.ispage&&"auto"==C.opt.zindex?z()||"auto":C.opt.zindex;
!C.ispage&&"auto"!=C.zindex&&C.zindex>j&&(j=C.zindex);
C.isie&&(0==C.zindex&&"auto"==C.opt.zindex)&&(C.zindex="auto");
if(!C.ispage||!A.cantouch&&!A.isieold&&!A.isie9mobile){var O=C.docscroll;
C.ispage&&(O=C.haswrapper?C.win:C.doc);
A.isie9mobile||C.css(O,{"overflow-y":"hidden"});
C.ispage&&A.isie7&&("BODY"==C.doc[0].nodeName?C.css(G("html"),{"overflow-y":"hidden"}):"HTML"==C.doc[0].nodeName&&C.css(G("body"),{"overflow-y":"hidden"}));
A.isios&&(!C.ispage&&!C.haswrapper)&&C.css(G("body"),{"-webkit-overflow-scrolling":"touch"});
var P=G(document.createElement("div"));
P.css({position:"relative",top:0,"float":"right",width:C.opt.cursorwidth,height:"0px","background-color":C.opt.cursorcolor,border:C.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":C.opt.cursorborderradius,"-moz-border-radius":C.opt.cursorborderradius,"border-radius":C.opt.cursorborderradius});
P.hborder=parseFloat(P.outerHeight()-P.innerHeight());
C.cursor=P;
var N=G(document.createElement("div"));
N.attr("id",C.id);
N.addClass("nicescroll-rails");
var L,M,J=["left","right"],R;
for(R in J){M=J[R],(L=C.opt.railpadding[M])?N.css("padding-"+M,L+"px"):C.opt.railpadding[M]=0
}N.append(P);
N.width=Math.max(parseFloat(C.opt.cursorwidth),P.outerWidth())+C.opt.railpadding.left+C.opt.railpadding.right;
N.css({width:N.width+"px",zIndex:C.zindex,background:C.opt.background,cursor:"default"});
N.visibility=!0;
N.scrollable=!0;
N.align="left"==C.opt.railalign?0:1;
C.rail=N;
P=C.rail.drag=!1;
C.opt.boxzoom&&(!C.ispage&&!A.isieold)&&(P=document.createElement("div"),C.bind(P,"click",C.doZoom),C.zoom=G(P),C.zoom.css({cursor:"pointer","z-index":C.zindex,backgroundImage:"url("+d+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),C.opt.dblclickzoom&&C.bind(C.win,"dblclick",C.doZoom),A.cantouch&&C.opt.gesturezoom&&(C.ongesturezoom=function(I){1.5<I.scale&&C.doZoomIn(I);
0.8>I.scale&&C.doZoomOut(I);
return C.cancelEvent(I)
},C.bind(C.win,"gestureend",C.ongesturezoom)));
C.railh=!1;
if(C.opt.horizrailenabled){C.css(O,{"overflow-x":"hidden"});
P=G(document.createElement("div"));
P.css({position:"relative",top:0,height:C.opt.cursorwidth,width:"0px","background-color":C.opt.cursorcolor,border:C.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":C.opt.cursorborderradius,"-moz-border-radius":C.opt.cursorborderradius,"border-radius":C.opt.cursorborderradius});
P.wborder=parseFloat(P.outerWidth()-P.innerWidth());
C.cursorh=P;
var K=G(document.createElement("div"));
K.attr("id",C.id+"-hr");
K.addClass("nicescroll-rails");
K.height=Math.max(parseFloat(C.opt.cursorwidth),P.outerHeight());
K.css({height:K.height+"px",zIndex:C.zindex,background:C.opt.background});
K.append(P);
K.visibility=!0;
K.scrollable=!0;
K.align="top"==C.opt.railvalign?0:1;
C.railh=K;
C.railh.drag=!1
}C.ispage?(N.css({position:"fixed",top:"0px",height:"100%"}),N.align?N.css({right:"0px"}):N.css({left:"0px"}),C.body.append(N),C.railh&&(K.css({position:"fixed",left:"0px",width:"100%"}),K.align?K.css({bottom:"0px"}):K.css({top:"0px"}),C.body.append(K))):(C.ishwscroll?("static"==C.win.css("position")&&C.css(C.win,{position:"relative"}),O="HTML"==C.win[0].nodeName?C.body:C.win,C.zoom&&(C.zoom.css({position:"absolute",top:1,right:0,"margin-right":N.width+4}),O.append(C.zoom)),N.css({position:"absolute",top:0}),N.align?N.css({right:0}):N.css({left:0}),O.append(N),K&&(K.css({position:"absolute",left:0,bottom:0}),K.align?K.css({bottom:0}):K.css({top:0}),O.append(K))):(C.isfixed="fixed"==C.win.css("position"),O=C.isfixed?"fixed":"absolute",C.isfixed||(C.viewport=C.getViewport(C.win[0])),C.viewport&&(C.body=C.viewport,!1==/relative|absolute/.test(C.viewport.css("position"))&&C.css(C.viewport,{position:"relative"})),N.css({position:O}),C.zoom&&C.zoom.css({position:O}),C.updateScrollBar(),C.body.append(N),C.zoom&&C.body.append(C.zoom),C.railh&&(K.css({position:O}),C.body.append(K))),A.isios&&C.css(C.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),A.isie&&C.opt.disableoutline&&C.win.attr("hideFocus","true"),A.iswebkit&&C.opt.disableoutline&&C.win.css({outline:"none"}));
!1===C.opt.autohidemode?(C.autohidedom=!1,C.rail.css({opacity:C.opt.cursoropacitymax}),C.railh&&C.railh.css({opacity:C.opt.cursoropacitymax})):!0===C.opt.autohidemode?(C.autohidedom=G().add(C.rail),A.isie8&&(C.autohidedom=C.autohidedom.add(C.cursor)),C.railh&&(C.autohidedom=C.autohidedom.add(C.railh)),C.railh&&A.isie8&&(C.autohidedom=C.autohidedom.add(C.cursorh))):"scroll"==C.opt.autohidemode?(C.autohidedom=G().add(C.rail),C.railh&&(C.autohidedom=C.autohidedom.add(C.railh))):"cursor"==C.opt.autohidemode?(C.autohidedom=G().add(C.cursor),C.railh&&(C.autohidedom=C.autohidedom.add(C.cursorh))):"hidden"==C.opt.autohidemode&&(C.autohidedom=!1,C.hide(),C.locked=!1);
if(A.isie9mobile){C.scrollmom=new k(C),C.onmangotouch=function(X){X=C.getScrollTop();
var Y=C.getScrollLeft();
if(X==C.scrollmom.lastscrolly&&Y==C.scrollmom.lastscrollx){return !0
}var T=X-C.mangotouch.sy,U=Y-C.mangotouch.sx;
if(0!=Math.round(Math.sqrt(Math.pow(U,2)+Math.pow(T,2)))){var W=0>T?-1:1,V=0>U?-1:1,I=+new Date;
C.mangotouch.lazy&&clearTimeout(C.mangotouch.lazy);
80<I-C.mangotouch.tm||C.mangotouch.dry!=W||C.mangotouch.drx!=V?(C.scrollmom.stop(),C.scrollmom.reset(Y,X),C.mangotouch.sy=X,C.mangotouch.ly=X,C.mangotouch.sx=Y,C.mangotouch.lx=Y,C.mangotouch.dry=W,C.mangotouch.drx=V,C.mangotouch.tm=I):(C.scrollmom.stop(),C.scrollmom.update(C.mangotouch.sx-U,C.mangotouch.sy-T),C.mangotouch.tm=I,T=Math.max(Math.abs(C.mangotouch.ly-X),Math.abs(C.mangotouch.lx-Y)),C.mangotouch.ly=X,C.mangotouch.lx=Y,2<T&&(C.mangotouch.lazy=setTimeout(function(){C.mangotouch.lazy=!1;
C.mangotouch.dry=0;
C.mangotouch.drx=0;
C.mangotouch.tm=0;
C.scrollmom.doMomentum(30)
},100)))
}},N=C.getScrollTop(),K=C.getScrollLeft(),C.mangotouch={sy:N,ly:N,dry:0,sx:K,lx:K,drx:0,lazy:!1,tm:0},C.bind(C.docscroll,"scroll",C.onmangotouch)
}else{if(A.cantouch||C.istouchcapable||C.opt.touchbehavior||A.hasmstouch){C.scrollmom=new k(C);
C.ontouchstart=function(W){if(W.pointerType&&2!=W.pointerType){return !1
}if(!C.locked){if(A.hasmstouch){for(var X=W.target?W.target:!1;
X;
){var U=G(X).getNiceScroll();
if(0<U.length&&U[0].me==C.me){break
}if(0<U.length){return !1
}if("DIV"==X.nodeName&&X.id==C.id){break
}X=X.parentNode?X.parentNode:!1
}}C.cancelScroll();
if((X=C.getTarget(W))&&/INPUT/i.test(X.nodeName)&&/range/i.test(X.type)){return C.stopPropagation(W)
}!("clientX" in W)&&"changedTouches" in W&&(W.clientX=W.changedTouches[0].clientX,W.clientY=W.changedTouches[0].clientY);
C.forcescreen&&(U=W,W={original:W.original?W.original:W},W.clientX=U.screenX,W.clientY=U.screenY);
C.rail.drag={x:W.clientX,y:W.clientY,sx:C.scroll.x,sy:C.scroll.y,st:C.getScrollTop(),sl:C.getScrollLeft(),pt:2,dl:!1};
if(C.ispage||!C.opt.directionlockdeadzone){C.rail.drag.dl="f"
}else{var U=G(window).width(),V=G(window).height(),T=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),I=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),V=Math.max(0,I-V),U=Math.max(0,T-U);
C.rail.drag.ck=!C.rail.scrollable&&C.railh.scrollable?0<V?"v":!1:C.rail.scrollable&&!C.railh.scrollable?0<U?"h":!1:!1;
C.rail.drag.ck||(C.rail.drag.dl="f")
}C.opt.touchbehavior&&(C.isiframe&&A.isie)&&(U=C.win.position(),C.rail.drag.x+=U.left,C.rail.drag.y+=U.top);
C.hasmoving=!1;
C.lastmouseup=!1;
C.scrollmom.reset(W.clientX,W.clientY);
if(!A.cantouch&&!this.istouchcapable&&!A.hasmstouch){if(!X||!/INPUT|SELECT|TEXTAREA/i.test(X.nodeName)){return !C.ispage&&A.hasmousecapture&&X.setCapture(),C.cancelEvent(W)
}/SUBMIT|CANCEL|BUTTON/i.test(G(X).attr("type"))&&(pc={tg:X,click:!1},C.preventclick=pc)
}}};
C.ontouchend=function(I){if(I.pointerType&&2!=I.pointerType){return !1
}if(C.rail.drag&&2==C.rail.drag.pt&&(C.scrollmom.doMomentum(),C.rail.drag=!1,C.hasmoving&&(C.hasmoving=!1,C.lastmouseup=!0,C.hideCursor(),A.hasmousecapture&&document.releaseCapture(),!A.cantouch))){return C.cancelEvent(I)
}};
var H=C.opt.touchbehavior&&C.isiframe&&!A.hasmousecapture;
C.ontouchmove=function(Z,aa){if(Z.pointerType&&2!=Z.pointerType){return !1
}if(C.rail.drag&&2==C.rail.drag.pt){if(A.cantouch&&"undefined"==typeof Z.original){return !0
}C.hasmoving=!0;
C.preventclick&&!C.preventclick.click&&(C.preventclick.click=C.preventclick.tg.onclick||!1,C.preventclick.tg.onclick=C.onpreventclick);
Z=G.extend({original:Z},Z);
"changedTouches" in Z&&(Z.clientX=Z.changedTouches[0].clientX,Z.clientY=Z.changedTouches[0].clientY);
if(C.forcescreen){var Y=Z;
Z={original:Z.original?Z.original:Z};
Z.clientX=Y.screenX;
Z.clientY=Y.screenY
}Y=ofy=0;
if(H&&!aa){var I=C.win.position(),Y=-I.left;
ofy=-I.top
}var X=Z.clientY+ofy,I=X-C.rail.drag.y,V=Z.clientX+Y,W=V-C.rail.drag.x,ab=C.rail.drag.st-I;
C.ishwscroll&&C.opt.bouncescroll?0>ab?ab=Math.round(ab/2):ab>C.page.maxh&&(ab=C.page.maxh+Math.round((ab-C.page.maxh)/2)):(0>ab&&(X=ab=0),ab>C.page.maxh&&(ab=C.page.maxh,X=0));
if(C.railh&&C.railh.scrollable){var U=C.rail.drag.sl-W;
C.ishwscroll&&C.opt.bouncescroll?0>U?U=Math.round(U/2):U>C.page.maxw&&(U=C.page.maxw+Math.round((U-C.page.maxw)/2)):(0>U&&(V=U=0),U>C.page.maxw&&(U=C.page.maxw,V=0))
}Y=!1;
if(C.rail.drag.dl){Y=!0,"v"==C.rail.drag.dl?U=C.rail.drag.sl:"h"==C.rail.drag.dl&&(ab=C.rail.drag.st)
}else{var I=Math.abs(I),W=Math.abs(W),T=C.opt.directionlockdeadzone;
if("v"==C.rail.drag.ck){if(I>T&&W<=0.3*I){return C.rail.drag=!1,!0
}W>T&&(C.rail.drag.dl="f",G("body").scrollTop(G("body").scrollTop()))
}else{if("h"==C.rail.drag.ck){if(W>T&&I<=0.3*az){return C.rail.drag=!1,!0
}I>T&&(C.rail.drag.dl="f",G("body").scrollLeft(G("body").scrollLeft()))
}}}C.synched("touchmove",function(){C.rail.drag&&2==C.rail.drag.pt&&(C.prepareTransition&&C.prepareTransition(0),C.rail.scrollable&&C.setScrollTop(ab),C.scrollmom.update(V,X),C.railh&&C.railh.scrollable?(C.setScrollLeft(U),C.showCursor(ab,U)):C.showCursor(ab),A.isie10&&document.selection.clear())
});
A.ischrome&&C.istouchcapable&&(Y=!1);
if(Y){return C.cancelEvent(Z)
}}}
}C.onmousedown=function(T,U){if(!(C.rail.drag&&1!=C.rail.drag.pt)){if(C.locked){return C.cancelEvent(T)
}C.cancelScroll();
C.rail.drag={x:T.clientX,y:T.clientY,sx:C.scroll.x,sy:C.scroll.y,pt:1,hr:!!U};
var I=C.getTarget(T);
!C.ispage&&A.hasmousecapture&&I.setCapture();
C.isiframe&&!A.hasmousecapture&&(C.saved.csspointerevents=C.doc.css("pointer-events"),C.css(C.doc,{"pointer-events":"none"}));
return C.cancelEvent(T)
}};
C.onmouseup=function(I){if(C.rail.drag&&(A.hasmousecapture&&document.releaseCapture(),C.isiframe&&!A.hasmousecapture&&C.doc.css("pointer-events",C.saved.csspointerevents),1==C.rail.drag.pt)){return C.rail.drag=!1,C.cancelEvent(I)
}};
C.onmousemove=function(I){if(C.rail.drag&&1==C.rail.drag.pt){if(A.ischrome&&0==I.which){return C.onmouseup(I)
}C.cursorfreezed=!0;
if(C.rail.drag.hr){C.scroll.x=C.rail.drag.sx+(I.clientX-C.rail.drag.x);
0>C.scroll.x&&(C.scroll.x=0);
var T=C.scrollvaluemaxw;
C.scroll.x>T&&(C.scroll.x=T)
}else{C.scroll.y=C.rail.drag.sy+(I.clientY-C.rail.drag.y),0>C.scroll.y&&(C.scroll.y=0),T=C.scrollvaluemax,C.scroll.y>T&&(C.scroll.y=T)
}C.synched("mousemove",function(){C.rail.drag&&1==C.rail.drag.pt&&(C.showCursor(),C.rail.drag.hr?C.doScrollLeft(Math.round(C.scroll.x*C.scrollratio.x),C.opt.cursordragspeed):C.doScrollTop(Math.round(C.scroll.y*C.scrollratio.y),C.opt.cursordragspeed))
});
return C.cancelEvent(I)
}};
if(A.cantouch||C.opt.touchbehavior){C.onpreventclick=function(I){if(C.preventclick){return C.preventclick.tg.onclick=C.preventclick.click,C.preventclick=!1,C.cancelEvent(I)
}},C.bind(C.win,"mousedown",C.ontouchstart),C.onclick=A.isios?!1:function(I){return C.lastmouseup?(C.lastmouseup=!1,C.cancelEvent(I)):!0
},C.opt.grabcursorenabled&&A.cursorgrabvalue&&(C.css(C.ispage?C.doc:C.win,{cursor:A.cursorgrabvalue}),C.css(C.rail,{cursor:A.cursorgrabvalue}))
}else{var F=function(I){if(C.selectiondrag){if(I){var T=C.win.outerHeight();
I=I.pageY-C.selectiondrag.top;
0<I&&I<T&&(I=0);
I>=T&&(I-=T);
C.selectiondrag.df=I
}0!=C.selectiondrag.df&&(C.doScrollBy(2*-Math.floor(C.selectiondrag.df/6)),C.debounced("doselectionscroll",function(){F()
},50))
}};
C.hasTextSelected="getSelection" in document?function(){return 0<document.getSelection().rangeCount
}:"selection" in document?function(){return"None"!=document.selection.type
}:function(){return !1
};
C.onselectionstart=function(I){C.ispage||(C.selectiondrag=C.win.offset())
};
C.onselectionend=function(I){C.selectiondrag=!1
};
C.onselectiondrag=function(I){C.selectiondrag&&C.hasTextSelected()&&C.debounced("selectionscroll",function(){F(I)
},250)
}
}A.hasmstouch&&(C.css(C.rail,{"-ms-touch-action":"none"}),C.css(C.cursor,{"-ms-touch-action":"none"}),C.bind(C.win,"MSPointerDown",C.ontouchstart),C.bind(document,"MSPointerUp",C.ontouchend),C.bind(document,"MSPointerMove",C.ontouchmove),C.bind(C.cursor,"MSGestureHold",function(I){I.preventDefault()
}),C.bind(C.cursor,"contextmenu",function(I){I.preventDefault()
}));
this.istouchcapable&&(C.bind(C.win,"touchstart",C.ontouchstart),C.bind(document,"touchend",C.ontouchend),C.bind(document,"touchcancel",C.ontouchend),C.bind(document,"touchmove",C.ontouchmove));
C.bind(C.cursor,"mousedown",C.onmousedown);
C.bind(C.cursor,"mouseup",C.onmouseup);
C.railh&&(C.bind(C.cursorh,"mousedown",function(I){C.onmousedown(I,!0)
}),C.bind(C.cursorh,"mouseup",function(I){if(!(C.rail.drag&&2==C.rail.drag.pt)){return C.rail.drag=!1,C.hasmoving=!1,C.hideCursor(),A.hasmousecapture&&document.releaseCapture(),C.cancelEvent(I)
}}));
if(C.opt.cursordragontouch||!A.cantouch&&!C.opt.touchbehavior){C.rail.css({cursor:"default"}),C.railh&&C.railh.css({cursor:"default"}),C.jqbind(C.rail,"mouseenter",function(){C.canshowonmouseevent&&C.showCursor();
C.rail.active=!0
}),C.jqbind(C.rail,"mouseleave",function(){C.rail.active=!1;
C.rail.drag||C.hideCursor()
}),C.opt.sensitiverail&&(C.bind(C.rail,"click",function(I){C.doRailClick(I,!1,!1)
}),C.bind(C.rail,"dblclick",function(I){C.doRailClick(I,!0,!1)
}),C.bind(C.cursor,"click",function(I){C.cancelEvent(I)
}),C.bind(C.cursor,"dblclick",function(I){C.cancelEvent(I)
})),C.railh&&(C.jqbind(C.railh,"mouseenter",function(){C.canshowonmouseevent&&C.showCursor();
C.rail.active=!0
}),C.jqbind(C.railh,"mouseleave",function(){C.rail.active=!1;
C.rail.drag||C.hideCursor()
}),C.opt.sensitiverail&&(C.bind(C.railh,"click",function(I){C.doRailClick(I,!1,!0)
}),C.bind(C.railh,"dblclick",function(I){C.doRailClick(I,!0,!0)
}),C.bind(C.cursorh,"click",function(I){C.cancelEvent(I)
}),C.bind(C.cursorh,"dblclick",function(I){C.cancelEvent(I)
})))
}!A.cantouch&&!C.opt.touchbehavior?(C.bind(A.hasmousecapture?C.win:document,"mouseup",C.onmouseup),C.bind(document,"mousemove",C.onmousemove),C.onclick&&C.bind(document,"click",C.onclick),!C.ispage&&C.opt.enablescrollonselection&&(C.bind(C.win[0],"mousedown",C.onselectionstart),C.bind(document,"mouseup",C.onselectionend),C.bind(C.cursor,"mouseup",C.onselectionend),C.cursorh&&C.bind(C.cursorh,"mouseup",C.onselectionend),C.bind(document,"mousemove",C.onselectiondrag)),C.zoom&&(C.jqbind(C.zoom,"mouseenter",function(){C.canshowonmouseevent&&C.showCursor();
C.rail.active=!0
}),C.jqbind(C.zoom,"mouseleave",function(){C.rail.active=!1;
C.rail.drag||C.hideCursor()
}))):(C.bind(A.hasmousecapture?C.win:document,"mouseup",C.ontouchend),C.bind(document,"mousemove",C.ontouchmove),C.onclick&&C.bind(document,"click",C.onclick),C.opt.cursordragontouch&&(C.bind(C.cursor,"mousedown",C.onmousedown),C.bind(C.cursor,"mousemove",C.onmousemove),C.cursorh&&C.bind(C.cursorh,"mousedown",C.onmousedown),C.cursorh&&C.bind(C.cursorh,"mousemove",C.onmousemove)));
C.opt.enablemousewheel&&(C.isiframe||C.bind(A.isie&&C.ispage?document:C.docscroll,"mousewheel",C.onmousewheel),C.bind(C.rail,"mousewheel",C.onmousewheel),C.railh&&C.bind(C.railh,"mousewheel",C.onmousewheelhr));
!C.ispage&&(!A.cantouch&&!/HTML|BODY/.test(C.win[0].nodeName))&&(C.win.attr("tabindex")||C.win.attr({tabindex:h++}),C.jqbind(C.win,"focus",function(I){i=C.getTarget(I).id||!0;
C.hasfocus=!0;
C.canshowonmouseevent&&C.noticeCursor()
}),C.jqbind(C.win,"blur",function(I){i=!1;
C.hasfocus=!1
}),C.jqbind(C.win,"mouseenter",function(I){q=C.getTarget(I).id||!0;
C.hasmousefocus=!0;
C.canshowonmouseevent&&C.noticeCursor()
}),C.jqbind(C.win,"mouseleave",function(){q=!1;
C.hasmousefocus=!1
}))
}C.onkeypress=function(V){if(C.locked&&0==C.page.maxh){return !0
}V=V?V:window.e;
var W=C.getTarget(V);
if(W&&/INPUT|TEXTAREA|SELECT|OPTION/.test(W.nodeName)&&(!W.getAttribute("type")&&!W.type||!/submit|button|cancel/i.tp)){return !0
}if(C.hasfocus||C.hasmousefocus&&!i||C.ispage&&!i&&!q){W=V.keyCode;
if(C.locked&&27!=W){return C.cancelEvent(V)
}var I=V.ctrlKey||!1,U=V.shiftKey||!1,T=!1;
switch(W){case 38:case 63233:C.doScrollBy(72);
T=!0;
break;
case 40:case 63235:C.doScrollBy(-72);
T=!0;
break;
case 37:case 63232:C.railh&&(I?C.doScrollLeft(0):C.doScrollLeftBy(72),T=!0);
break;
case 39:case 63234:C.railh&&(I?C.doScrollLeft(C.page.maxw):C.doScrollLeftBy(-72),T=!0);
break;
case 33:case 63276:C.doScrollBy(C.view.h);
T=!0;
break;
case 34:case 63277:C.doScrollBy(-C.view.h);
T=!0;
break;
case 36:case 63273:C.railh&&I?C.doScrollPos(0,0):C.doScrollTo(0);
T=!0;
break;
case 35:case 63275:C.railh&&I?C.doScrollPos(C.page.maxw,C.page.maxh):C.doScrollTo(C.page.maxh);
T=!0;
break;
case 32:C.opt.spacebarenabled&&(U?C.doScrollBy(C.view.h):C.doScrollBy(-C.view.h),T=!0);
break;
case 27:C.zoomactive&&(C.doZoom(),T=!0)
}if(T){return C.cancelEvent(V)
}}};
C.opt.enablekeyboard&&C.bind(document,A.isopera&&!A.isopera12?"keypress":"keydown",C.onkeypress);
C.bind(window,"resize",C.lazyResize);
C.bind(window,"orientationchange",C.lazyResize);
C.bind(window,"load",C.lazyResize);
if(A.ischrome&&!C.ispage&&!C.haswrapper){var S=C.win.attr("style"),N=parseFloat(C.win.css("width"))+1;
C.win.css("width",N);
C.synched("chromefix",function(){C.win.attr("style",S)
})
}C.onAttributeChange=function(I){C.lazyResize(250)
};
!C.ispage&&!C.haswrapper&&(!1!==g?(C.observer=new g(function(I){I.forEach(C.onAttributeChange)
}),C.observer.observe(C.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),C.observerremover=new g(function(I){I.forEach(function(T){if(0<T.removedNodes.length){for(var U in T.removedNodes){if(T.removedNodes[U]==C.win[0]){return C.remove()
}}}})
}),C.observerremover.observe(C.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(C.bind(C.win,A.isie&&!A.isie9?"propertychange":"DOMAttrModified",C.onAttributeChange),A.isie9&&C.win[0].attachEvent("onpropertychange",C.onAttributeChange),C.bind(C.win,"DOMNodeRemoved",function(I){I.target==C.win[0]&&C.remove()
})));
!C.ispage&&C.opt.boxzoom&&C.bind(window,"resize",C.resizeZoom);
C.istextarea&&C.bind(C.win,"mouseup",C.lazyResize);
C.checkrtlmode=!0;
C.lazyResize(30)
}if("IFRAME"==this.doc[0].nodeName){var Q=function(T){C.iframexd=!1;
try{var U="contentDocument" in this?this.contentDocument:this.contentWindow.document
}catch(I){C.iframexd=!0,U=!1
}if(C.iframexd){return"console" in window&&console.log("NiceScroll error: policy restriced iframe"),!0
}C.forcescreen=!0;
C.isiframe&&(C.iframe={doc:G(U),html:C.doc.contents().find("html")[0],body:C.doc.contents().find("body")[0]},C.getContentSize=function(){return{w:Math.max(C.iframe.html.scrollWidth,C.iframe.body.scrollWidth),h:Math.max(C.iframe.html.scrollHeight,C.iframe.body.scrollHeight)}
},C.docscroll=G(C.iframe.body));
!A.isios&&(C.opt.iframeautoresize&&!C.isiframe)&&(C.win.scrollTop(0),C.doc.height(""),T=Math.max(U.getElementsByTagName("html")[0].scrollHeight,U.body.scrollHeight),C.doc.height(T));
C.lazyResize(30);
A.isie7&&C.css(G(C.iframe.html),{"overflow-y":"hidden"});
C.css(G(C.iframe.body),{"overflow-y":"hidden"});
"contentWindow" in this?C.bind(this.contentWindow,"scroll",C.onscroll):C.bind(U,"scroll",C.onscroll);
C.opt.enablemousewheel&&C.bind(U,"mousewheel",C.onmousewheel);
C.opt.enablekeyboard&&C.bind(U,A.isopera?"keypress":"keydown",C.onkeypress);
if(A.cantouch||C.opt.touchbehavior){C.bind(U,"mousedown",C.onmousedown),C.bind(U,"mousemove",function(V){C.onmousemove(V,!0)
}),C.opt.grabcursorenabled&&A.cursorgrabvalue&&C.css(G(U.body),{cursor:A.cursorgrabvalue})
}C.bind(U,"mouseup",C.onmouseup);
C.zoom&&(C.opt.dblclickzoom&&C.bind(U,"dblclick",C.doZoom),C.ongesturezoom&&C.bind(U,"gestureend",C.ongesturezoom))
};
this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){Q.call(C.doc[0],!1)
},500);
C.bind(this.doc,"load",Q)
}};
this.showCursor=function(F,H){C.cursortimeout&&(clearTimeout(C.cursortimeout),C.cursortimeout=0);
if(C.rail){C.autohidedom&&(C.autohidedom.stop().css({opacity:C.opt.cursoropacitymax}),C.cursoractive=!0);
if(!C.rail.drag||1!=C.rail.drag.pt){"undefined"!=typeof F&&!1!==F&&(C.scroll.y=Math.round(1*F/C.scrollratio.y)),"undefined"!=typeof H&&(C.scroll.x=Math.round(1*H/C.scrollratio.x))
}C.cursor.css({height:C.cursorheight,top:C.scroll.y});
C.cursorh&&(!C.rail.align&&C.rail.visibility?C.cursorh.css({width:C.cursorwidth,left:C.scroll.x+C.rail.width}):C.cursorh.css({width:C.cursorwidth,left:C.scroll.x}),C.cursoractive=!0);
C.zoom&&C.zoom.stop().css({opacity:C.opt.cursoropacitymax})
}};
this.hideCursor=function(F){!C.cursortimeout&&(C.rail&&C.autohidedom)&&(C.cursortimeout=setTimeout(function(){if(!C.rail.active||!C.showonmouseevent){C.autohidedom.stop().animate({opacity:C.opt.cursoropacitymin}),C.zoom&&C.zoom.stop().animate({opacity:C.opt.cursoropacitymin}),C.cursoractive=!1
}C.cursortimeout=0
},F||C.opt.hidecursordelay))
};
this.noticeCursor=function(H,I,F){C.showCursor(I,F);
C.rail.active||C.hideCursor(H)
};
this.getContentSize=C.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}
}:C.haswrapper?function(){return{w:C.doc.outerWidth()+parseInt(C.win.css("paddingLeft"))+parseInt(C.win.css("paddingRight")),h:C.doc.outerHeight()+parseInt(C.win.css("paddingTop"))+parseInt(C.win.css("paddingBottom"))}
}:function(){return{w:C.docscroll[0].scrollWidth,h:C.docscroll[0].scrollHeight}
};
this.onResize=function(J,K){if(!C.win){return !1
}if(!C.haswrapper&&!C.ispage){if("none"==C.win.css("display")){return C.visibility&&C.hideRail().hideRailHr(),!1
}!C.hidden&&!C.visibility&&C.showRail().showRailHr()
}var F=C.page.maxh,H=C.page.maxw,I=C.view.w;
C.view={w:C.ispage?C.win.width():parseInt(C.win[0].clientWidth),h:C.ispage?C.win.height():parseInt(C.win[0].clientHeight)};
C.page=K?K:C.getContentSize();
C.page.maxh=Math.max(0,C.page.h-C.view.h);
C.page.maxw=Math.max(0,C.page.w-C.view.w);
if(C.page.maxh==F&&C.page.maxw==H&&C.view.w==I){if(C.ispage){return C
}F=C.win.offset();
if(C.lastposition&&(H=C.lastposition,H.top==F.top&&H.left==F.left)){return C
}C.lastposition=F
}0==C.page.maxh?(C.hideRail(),C.scrollvaluemax=0,C.scroll.y=0,C.scrollratio.y=0,C.cursorheight=0,C.setScrollTop(0),C.rail.scrollable=!1):C.rail.scrollable=!0;
0==C.page.maxw?(C.hideRailHr(),C.scrollvaluemaxw=0,C.scroll.x=0,C.scrollratio.x=0,C.cursorwidth=0,C.setScrollLeft(0),C.railh.scrollable=!1):C.railh.scrollable=!0;
C.locked=0==C.page.maxh&&0==C.page.maxw;
if(C.locked){return C.ispage||C.updateScrollBar(C.view),!1
}!C.hidden&&!C.visibility?C.showRail().showRailHr():!C.hidden&&!C.railh.visibility&&C.showRailHr();
C.istextarea&&(C.win.css("resize")&&"none"!=C.win.css("resize"))&&(C.view.h-=20);
C.cursorheight=Math.min(C.view.h,Math.round(C.view.h*(C.view.h/C.page.h)));
C.cursorheight=C.opt.cursorfixedheight?C.opt.cursorfixedheight:Math.max(C.opt.cursorminheight,C.cursorheight);
C.cursorwidth=Math.min(C.view.w,Math.round(C.view.w*(C.view.w/C.page.w)));
C.cursorwidth=C.opt.cursorfixedheight?C.opt.cursorfixedheight:Math.max(C.opt.cursorminheight,C.cursorwidth);
C.scrollvaluemax=C.view.h-C.cursorheight-C.cursor.hborder;
C.railh&&(C.railh.width=0<C.page.maxh?C.view.w-C.rail.width:C.view.w,C.scrollvaluemaxw=C.railh.width-C.cursorwidth-C.cursorh.wborder);
C.checkrtlmode&&C.railh&&(C.checkrtlmode=!1,C.opt.rtlmode&&0==C.scroll.x&&C.setScrollLeft(C.page.maxw));
C.ispage||C.updateScrollBar(C.view);
C.scrollratio={x:C.page.maxw/C.scrollvaluemaxw,y:C.page.maxh/C.scrollvaluemax};
C.getScrollTop()>C.page.maxh?C.doScrollTop(C.page.maxh):(C.scroll.y=Math.round(C.getScrollTop()*(1/C.scrollratio.y)),C.scroll.x=Math.round(C.getScrollLeft()*(1/C.scrollratio.x)),C.cursoractive&&C.noticeCursor());
C.scroll.y&&0==C.getScrollTop()&&C.doScrollTo(Math.floor(C.scroll.y*C.scrollratio.y));
return C
};
this.resize=C.onResize;
this.lazyResize=function(F){F=isNaN(F)?30:F;
C.delayed("resize",C.resize,F);
return C
};
this._bind=function(I,J,F,H){C.events.push({e:I,n:J,f:F,b:H,q:!1});
I.addEventListener?I.addEventListener(J,F,H||!1):I.attachEvent?I.attachEvent("on"+J,F):I["on"+J]=F
};
this.jqbind=function(H,I,F){C.events.push({e:H,n:I,f:F,q:!0});
G(H).bind(I,F)
};
this.bind=function(J,K,H,I){var F="jquery" in J?J[0]:J;
"mousewheel"==K?"onwheel" in C.win?C._bind(F,"wheel",H,I||!1):(J="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",w(F,J,H,I||!1),"DOMMouseScroll"==J&&w(F,"MozMousePixelScroll",H,I||!1)):F.addEventListener?(A.cantouch&&/mouseup|mousedown|mousemove/.test(K)&&C._bind(F,"mousedown"==K?"touchstart":"mouseup"==K?"touchend":"touchmove",function(L){if(L.touches){if(2>L.touches.length){var M=L.touches.length?L.touches[0]:L;
M.original=L;
H.call(this,M)
}}else{L.changedTouches&&(M=L.changedTouches[0],M.original=L,H.call(this,M))
}},I||!1),C._bind(F,K,H,I||!1),A.cantouch&&"mouseup"==K&&C._bind(F,"touchcancel",H,I||!1)):C._bind(F,K,function(L){if((L=L||window.event||!1)&&L.srcElement){L.target=L.srcElement
}"pageY" in L||(L.pageX=L.clientX+document.documentElement.scrollLeft,L.pageY=L.clientY+document.documentElement.scrollTop);
return !1===H.call(F,L)||!1===I?C.cancelEvent(L):!0
})
};
this._unbind=function(F,J,H,I){F.removeEventListener?F.removeEventListener(J,H,I):F.detachEvent?F.detachEvent("on"+J,H):F["on"+J]=!1
};
this.unbindAll=function(){for(var F=0;
F<C.events.length;
F++){var H=C.events[F];
H.q?H.e.unbind(H.n,H.f):C._unbind(H.e,H.n,H.f,H.b)
}};
this.cancelEvent=function(F){F=F.original?F.original:F?F:window.event||!1;
if(!F){return !1
}F.preventDefault&&F.preventDefault();
F.stopPropagation&&F.stopPropagation();
F.preventManipulation&&F.preventManipulation();
F.cancelBubble=!0;
F.cancel=!0;
return F.returnValue=!1
};
this.stopPropagation=function(F){F=F.original?F.original:F?F:window.event||!1;
if(!F){return !1
}if(F.stopPropagation){return F.stopPropagation()
}F.cancelBubble&&(F.cancelBubble=!0);
return !1
};
this.showRail=function(){if(0!=C.page.maxh&&(C.ispage||"none"!=C.win.css("display"))){C.visibility=!0,C.rail.visibility=!0,C.rail.css("display","block")
}return C
};
this.showRailHr=function(){if(!C.railh){return C
}if(0!=C.page.maxw&&(C.ispage||"none"!=C.win.css("display"))){C.railh.visibility=!0,C.railh.css("display","block")
}return C
};
this.hideRail=function(){C.visibility=!1;
C.rail.visibility=!1;
C.rail.css("display","none");
return C
};
this.hideRailHr=function(){if(!C.railh){return C
}C.railh.visibility=!1;
C.railh.css("display","none");
return C
};
this.show=function(){C.hidden=!1;
C.locked=!1;
return C.showRail().showRailHr()
};
this.hide=function(){C.hidden=!0;
C.locked=!0;
return C.hideRail().hideRailHr()
};
this.toggle=function(){return C.hidden?C.show():C.hide()
};
this.remove=function(){C.stop();
C.cursortimeout&&clearTimeout(C.cursortimeout);
C.doZoomOut();
C.unbindAll();
!1!==C.observer&&C.observer.disconnect();
!1!==C.observerremover&&C.observerremover.disconnect();
C.events=[];
C.cursor&&(C.cursor.remove(),C.cursor=null);
C.cursorh&&(C.cursorh.remove(),C.cursorh=null);
C.rail&&(C.rail.remove(),C.rail=null);
C.railh&&(C.railh.remove(),C.railh=null);
C.zoom&&(C.zoom.remove(),C.zoom=null);
for(var F=0;
F<C.saved.css.length;
F++){var H=C.saved.css[F];
H[0].css(H[1],"undefined"==typeof H[2]?"":H[2])
}C.saved=!1;
C.me.data("__nicescroll","");
C.me=null;
C.doc=null;
C.docscroll=null;
C.win=null;
return C
};
this.scrollstart=function(F){this.onscrollstart=F;
return C
};
this.scrollend=function(F){this.onscrollend=F;
return C
};
this.scrollcancel=function(F){this.onscrollcancel=F;
return C
};
this.zoomin=function(F){this.onzoomin=F;
return C
};
this.zoomout=function(F){this.onzoomout=F;
return C
};
this.isScrollable=function(F){F=F.target?F.target:F;
if("OPTION"==F.nodeName){return !0
}for(;
F&&1==F.nodeType&&!/BODY|HTML/.test(F.nodeName);
){var H=G(F),H=H.css("overflowY")||H.css("overflowX")||H.css("overflow")||"";
if(/scroll|auto/.test(H)){return F.clientHeight!=F.scrollHeight
}F=F.parentNode?F.parentNode:!1
}return !1
};
this.getViewport=function(F){for(F=F&&F.parentNode?F.parentNode:!1;
F&&1==F.nodeType&&!/BODY|HTML/.test(F.nodeName);
){var I=G(F),H=I.css("overflowY")||I.css("overflowX")||I.css("overflow")||"";
if(/scroll|auto/.test(H)&&F.clientHeight!=F.scrollHeight||0<I.getNiceScroll().length){return I
}F=F.parentNode?F.parentNode:!1
}return !1
};
this.onmousewheel=function(H){if(C.locked){return !0
}if(C.rail.drag){return C.cancelEvent(H)
}if(!C.rail.scrollable){return C.railh&&C.railh.scrollable?C.onmousewheelhr(H):!0
}var I=+new Date,F=!1;
C.opt.preservenativescrolling&&C.checkarea+600<I&&(C.nativescrollingarea=C.isScrollable(H),F=!0);
C.checkarea=I;
if(C.nativescrollingarea){return !0
}if(H=E(H,!1,F)){C.checkarea=0
}return H
};
this.onmousewheelhr=function(H){if(C.locked||!C.railh.scrollable){return !0
}if(C.rail.drag){return C.cancelEvent(H)
}var I=+new Date,F=!1;
C.opt.preservenativescrolling&&C.checkarea+600<I&&(C.nativescrollingarea=C.isScrollable(H),F=!0);
C.checkarea=I;
return C.nativescrollingarea?!0:C.locked?C.cancelEvent(H):E(H,!0,F)
};
this.stop=function(){C.cancelScroll();
C.scrollmon&&C.scrollmon.stop();
C.cursorfreezed=!1;
C.scroll.y=Math.round(C.getScrollTop()*(1/C.scrollratio.y));
C.noticeCursor();
return C
};
this.getTransitionSpeed=function(H){var F=Math.round(10*C.opt.scrollspeed);
H=Math.min(F,Math.round(H/20*C.opt.scrollspeed));
return 20<H?H:0
};
C.opt.smoothscroll?C.ishwscroll&&A.hastransition&&C.opt.usetransition?(this.prepareTransition=function(J,I){var H=I?20<J?J:0:C.getTransitionSpeed(J),F=H?A.prefixstyle+"transform "+H+"ms ease-out":"";
if(!C.lasttransitionstyle||C.lasttransitionstyle!=F){C.lasttransitionstyle=F,C.doc.css(A.transitionstyle,F)
}return H
},this.doScrollLeft=function(I,H){var F=C.scrollrunning?C.newscrolly:C.getScrollTop();
C.doScrollPos(I,F,H)
},this.doScrollTop=function(I,H){var F=C.scrollrunning?C.newscrollx:C.getScrollLeft();
C.doScrollPos(F,I,H)
},this.doScrollPos=function(K,J,I){var H=C.getScrollTop(),F=C.getScrollLeft();
(0>(C.newscrolly-H)*(J-H)||0>(C.newscrollx-F)*(K-F))&&C.cancelScroll();
!1==C.opt.bouncescroll&&(0>J?J=0:J>C.page.maxh&&(J=C.page.maxh),0>K?K=0:K>C.page.maxw&&(K=C.page.maxw));
if(C.scrollrunning&&K==C.newscrollx&&J==C.newscrolly){return !1
}C.newscrolly=J;
C.newscrollx=K;
C.newscrollspeed=I||!1;
if(C.timer){return !1
}C.timer=setTimeout(function(){var O=C.getScrollTop(),N=C.getScrollLeft(),L,M;
L=K-N;
M=J-O;
L=Math.round(Math.sqrt(Math.pow(L,2)+Math.pow(M,2)));
L=C.newscrollspeed&&1<C.newscrollspeed?C.newscrollspeed:C.getTransitionSpeed(L);
C.newscrollspeed&&1>=C.newscrollspeed&&(L*=C.newscrollspeed);
C.prepareTransition(L,!0);
C.timerscroll&&C.timerscroll.tm&&clearInterval(C.timerscroll.tm);
0<L&&(!C.scrollrunning&&C.onscrollstart&&C.onscrollstart.call(C,{type:"scrollstart",current:{x:N,y:O},request:{x:K,y:J},end:{x:C.newscrollx,y:C.newscrolly},speed:L}),A.transitionend?C.scrollendtrapped||(C.scrollendtrapped=!0,C.bind(C.doc,A.transitionend,C.onScrollEnd,!1)):(C.scrollendtrapped&&clearTimeout(C.scrollendtrapped),C.scrollendtrapped=setTimeout(C.onScrollEnd,L)),C.timerscroll={bz:new BezierClass(O,C.newscrolly,L,0,0,0.58,1),bh:new BezierClass(N,C.newscrollx,L,0,0,0.58,1)},C.cursorfreezed||(C.timerscroll.tm=setInterval(function(){C.showCursor(C.getScrollTop(),C.getScrollLeft())
},60)));
C.synched("doScroll-set",function(){C.timer=0;
C.scrollendtrapped&&(C.scrollrunning=!0);
C.setScrollTop(C.newscrolly);
C.setScrollLeft(C.newscrollx);
if(!C.scrollendtrapped){C.onScrollEnd()
}})
},50)
},this.cancelScroll=function(){if(!C.scrollendtrapped){return !0
}var H=C.getScrollTop(),F=C.getScrollLeft();
C.scrollrunning=!1;
A.transitionend||clearTimeout(A.transitionend);
C.scrollendtrapped=!1;
C._unbind(C.doc,A.transitionend,C.onScrollEnd);
C.prepareTransition(0);
C.setScrollTop(H);
C.railh&&C.setScrollLeft(F);
C.timerscroll&&C.timerscroll.tm&&clearInterval(C.timerscroll.tm);
C.timerscroll=!1;
C.cursorfreezed=!1;
C.showCursor(H,F);
return C
},this.onScrollEnd=function(){C.scrollendtrapped&&C._unbind(C.doc,A.transitionend,C.onScrollEnd);
C.scrollendtrapped=!1;
C.prepareTransition(0);
C.timerscroll&&C.timerscroll.tm&&clearInterval(C.timerscroll.tm);
C.timerscroll=!1;
var H=C.getScrollTop(),F=C.getScrollLeft();
C.setScrollTop(H);
C.railh&&C.setScrollLeft(F);
C.noticeCursor(!1,H,F);
C.cursorfreezed=!1;
0>H?H=0:H>C.page.maxh&&(H=C.page.maxh);
0>F?F=0:F>C.page.maxw&&(F=C.page.maxw);
if(H!=C.newscrolly||F!=C.newscrollx){return C.doScrollPos(F,H,C.opt.snapbackspeed)
}C.onscrollend&&C.scrollrunning&&C.onscrollend.call(C,{type:"scrollend",current:{x:F,y:H},end:{x:C.newscrollx,y:C.newscrolly}});
C.scrollrunning=!1
}):(this.doScrollLeft=function(I,H){var F=C.scrollrunning?C.newscrolly:C.getScrollTop();
C.doScrollPos(I,F,H)
},this.doScrollTop=function(I,H){var F=C.scrollrunning?C.newscrollx:C.getScrollLeft();
C.doScrollPos(F,I,H)
},this.doScrollPos=function(P,N,M){function O(){if(C.cancelAnimationFrame){return !0
}C.scrollrunning=!0;
if(F=1-F){return C.timer=m(O)||1
}var T=0,S=sy=C.getScrollTop();
if(C.dst.ay){var S=C.bzscroll?C.dst.py+C.bzscroll.getNow()*C.dst.ay:C.newscrolly,Q=S-sy;
if(0>Q&&S<C.newscrolly||0<Q&&S>C.newscrolly){S=C.newscrolly
}C.setScrollTop(S);
S==C.newscrolly&&(T=1)
}else{T=1
}var R=sx=C.getScrollLeft();
if(C.dst.ax){R=C.bzscroll?C.dst.px+C.bzscroll.getNow()*C.dst.ax:C.newscrollx;
Q=R-sx;
if(0>Q&&R<C.newscrollx||0<Q&&R>C.newscrollx){R=C.newscrollx
}C.setScrollLeft(R);
R==C.newscrollx&&(T+=1)
}else{T+=1
}2==T?(C.timer=0,C.cursorfreezed=!1,C.bzscroll=!1,C.scrollrunning=!1,0>S?S=0:S>C.page.maxh&&(S=C.page.maxh),0>R?R=0:R>C.page.maxw&&(R=C.page.maxw),R!=C.newscrollx||S!=C.newscrolly?C.doScrollPos(R,S):C.onscrollend&&C.onscrollend.call(C,{type:"scrollend",current:{x:sx,y:sy},end:{x:C.newscrollx,y:C.newscrolly}})):C.timer=m(O)||1
}N="undefined"==typeof N||!1===N?C.getScrollTop(!0):N;
if(C.timer&&C.newscrolly==N&&C.newscrollx==P){return !0
}C.timer&&l(C.timer);
C.timer=0;
var L=C.getScrollTop(),J=C.getScrollLeft();
(0>(C.newscrolly-L)*(N-L)||0>(C.newscrollx-J)*(P-J))&&C.cancelScroll();
C.newscrolly=N;
C.newscrollx=P;
if(!C.bouncescroll||!C.rail.visibility){0>C.newscrolly?C.newscrolly=0:C.newscrolly>C.page.maxh&&(C.newscrolly=C.page.maxh)
}if(!C.bouncescroll||!C.railh.visibility){0>C.newscrollx?C.newscrollx=0:C.newscrollx>C.page.maxw&&(C.newscrollx=C.page.maxw)
}C.dst={};
C.dst.x=P-J;
C.dst.y=N-L;
C.dst.px=J;
C.dst.py=L;
var K=Math.round(Math.sqrt(Math.pow(C.dst.x,2)+Math.pow(C.dst.y,2)));
C.dst.ax=C.dst.x/K;
C.dst.ay=C.dst.y/K;
var I=0,H=K;
0==C.dst.x?(I=L,H=N,C.dst.ay=1,C.dst.py=0):0==C.dst.y&&(I=J,H=P,C.dst.ax=1,C.dst.px=0);
K=C.getTransitionSpeed(K);
M&&1>=M&&(K*=M);
C.bzscroll=0<K?C.bzscroll?C.bzscroll.update(H,K):new BezierClass(I,H,K,0,1,0,1):!1;
if(!C.timer){(L==C.page.maxh&&N>=C.page.maxh||J==C.page.maxw&&P>=C.page.maxw)&&C.checkContentSize();
var F=1;
C.cancelAnimationFrame=!1;
C.timer=1;
C.onscrollstart&&!C.scrollrunning&&C.onscrollstart.call(C,{type:"scrollstart",current:{x:J,y:L},request:{x:P,y:N},end:{x:C.newscrollx,y:C.newscrolly},speed:K});
O();
(L==C.page.maxh&&N>=L||J==C.page.maxw&&P>=J)&&C.checkContentSize();
C.noticeCursor()
}},this.cancelScroll=function(){C.timer&&l(C.timer);
C.timer=0;
C.bzscroll=!1;
C.scrollrunning=!1;
return C
}):(this.doScrollLeft=function(I,H){var F=C.getScrollTop();
C.doScrollPos(I,F,H)
},this.doScrollTop=function(I,H){var F=C.getScrollLeft();
C.doScrollPos(F,I,H)
},this.doScrollPos=function(K,I,H){var J=K>C.page.maxw?C.page.maxw:K;
0>J&&(J=0);
var F=I>C.page.maxh?C.page.maxh:I;
0>F&&(F=0);
C.synched("scroll",function(){C.setScrollTop(F);
C.setScrollLeft(J)
})
},this.cancelScroll=function(){});
this.doScrollBy=function(J,H){var F=0,F=H?Math.floor((C.scroll.y-J)*C.scrollratio.y):(C.timer?C.newscrolly:C.getScrollTop(!0))-J;
if(C.bouncescroll){var I=Math.round(C.view.h/2);
F<-I?F=-I:F>C.page.maxh+I&&(F=C.page.maxh+I)
}C.cursorfreezed=!1;
py=C.getScrollTop(!0);
if(0>F&&0>=py){return C.noticeCursor()
}if(F>C.page.maxh&&py>=C.page.maxh){return C.checkContentSize(),C.noticeCursor()
}C.doScrollTop(F)
};
this.doScrollLeftBy=function(J,H){var F=0,F=H?Math.floor((C.scroll.x-J)*C.scrollratio.x):(C.timer?C.newscrollx:C.getScrollLeft(!0))-J;
if(C.bouncescroll){var I=Math.round(C.view.w/2);
F<-I?F=-I:F>C.page.maxw+I&&(F=C.page.maxw+I)
}C.cursorfreezed=!1;
px=C.getScrollLeft(!0);
if(0>F&&0>=px||F>C.page.maxw&&px>=C.page.maxw){return C.noticeCursor()
}C.doScrollLeft(F)
};
this.doScrollTo=function(H,F){F&&Math.round(H*C.scrollratio.y);
C.cursorfreezed=!1;
C.doScrollTop(H)
};
this.checkContentSize=function(){var F=C.getContentSize();
(F.h!=C.page.h||F.w!=C.page.w)&&C.resize(!1,F)
};
C.onscroll=function(F){C.rail.drag||C.cursorfreezed||C.synched("scroll",function(){C.scroll.y=Math.round(C.getScrollTop()*(1/C.scrollratio.y));
C.railh&&(C.scroll.x=Math.round(C.getScrollLeft()*(1/C.scrollratio.x)));
C.noticeCursor()
})
};
C.bind(C.docscroll,"scroll",C.onscroll);
this.doZoomIn=function(K){if(!C.zoomactive){C.zoomactive=!0;
C.zoomrestore={style:{}};
var I="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),J=C.win[0].style,F;
for(F in I){var H=I[F];
C.zoomrestore.style[H]="undefined"!=typeof J[H]?J[H]:""
}C.zoomrestore.style.width=C.win.css("width");
C.zoomrestore.style.height=C.win.css("height");
C.zoomrestore.padding={w:C.win.outerWidth()-C.win.width(),h:C.win.outerHeight()-C.win.height()};
A.isios4&&(C.zoomrestore.scrollTop=G(window).scrollTop(),G(window).scrollTop(0));
C.win.css({position:A.isios4?"absolute":"fixed",top:0,left:0,"z-index":j+100,margin:"0px"});
I=C.win.css("backgroundColor");
(""==I||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(I))&&C.win.css("backgroundColor","#fff");
C.rail.css({"z-index":j+101});
C.zoom.css({"z-index":j+102});
C.zoom.css("backgroundPosition","0px -18px");
C.resizeZoom();
C.onzoomin&&C.onzoomin.call(C);
return C.cancelEvent(K)
}};
this.doZoomOut=function(F){if(C.zoomactive){return C.zoomactive=!1,C.win.css("margin",""),C.win.css(C.zoomrestore.style),A.isios4&&G(window).scrollTop(C.zoomrestore.scrollTop),C.rail.css({"z-index":C.zindex}),C.zoom.css({"z-index":C.zindex}),C.zoomrestore=!1,C.zoom.css("backgroundPosition","0px 0px"),C.onResize(),C.onzoomout&&C.onzoomout.call(C),C.cancelEvent(F)
}};
this.doZoom=function(F){return C.zoomactive?C.doZoomOut(F):C.doZoomIn(F)
};
this.resizeZoom=function(){if(C.zoomactive){var F=C.getScrollTop();
C.win.css({width:G(window).width()-C.zoomrestore.padding.w+"px",height:G(window).height()-C.zoomrestore.padding.h+"px"});
C.onResize();
C.setScrollTop(Math.min(C.page.maxh,F))
}};
this.init();
G.nicescroll.push(this)
},k=function(v){var w=this;
this.nc=v;
this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;
this.snapy=this.snapx=!1;
this.demuly=this.demulx=0;
this.lastscrolly=this.lastscrollx=-1;
this.timer=this.chky=this.chkx=0;
this.time=function(){return +new Date
};
this.reset=function(z,x){w.stop();
var y=w.time();
w.steptime=0;
w.lasttime=y;
w.speedx=0;
w.speedy=0;
w.lastx=z;
w.lasty=x;
w.lastscrollx=-1;
w.lastscrolly=-1
};
this.update=function(C,y){var z=w.time();
w.steptime=z-w.lasttime;
w.lasttime=z;
var z=y-w.lasty,A=C-w.lastx,x=w.nc.getScrollTop(),B=w.nc.getScrollLeft(),x=x+z,B=B+A;
w.snapx=0>B||B>w.nc.page.maxw;
w.snapy=0>x||x>w.nc.page.maxh;
w.speedx=A;
w.speedy=z;
w.lastx=C;
w.lasty=y
};
this.stop=function(){w.nc.unsynched("domomentum2d");
w.timer&&clearTimeout(w.timer);
w.timer=0;
w.lastscrollx=-1;
w.lastscrolly=-1
};
this.doSnapy=function(z,x){var y=!1;
0>x?(x=0,y=!0):x>w.nc.page.maxh&&(x=w.nc.page.maxh,y=!0);
0>z?(z=0,y=!0):z>w.nc.page.maxw&&(z=w.nc.page.maxw,y=!0);
y&&w.nc.doScrollPos(z,x,w.nc.opt.snapbackspeed)
};
this.doMomentum=function(C){var z=w.time(),A=C?z+C:w.lasttime;
C=w.nc.getScrollLeft();
var H=w.nc.getScrollTop(),E=w.nc.page.maxh,y=w.nc.page.maxw;
w.speedx=0<y?Math.min(60,w.speedx):0;
w.speedy=0<E?Math.min(60,w.speedy):0;
A=A&&50>=z-A;
if(0>H||H>E||0>C||C>y){A=!1
}C=w.speedx&&A?w.speedx:!1;
if(w.speedy&&A&&w.speedy||C){var B=Math.max(16,w.steptime);
50<B&&(C=B/50,w.speedx*=C,w.speedy*=C,B=50);
w.demulxy=0;
w.lastscrollx=w.nc.getScrollLeft();
w.chkx=w.lastscrollx;
w.lastscrolly=w.nc.getScrollTop();
w.chky=w.lastscrolly;
var x=w.lastscrollx,F=w.lastscrolly,D=function(){var I=600<w.time()-z?0.04:0.02;
if(w.speedx&&(x=Math.floor(w.lastscrollx-w.speedx*(1-w.demulxy)),w.lastscrollx=x,0>x||x>y)){I=0.1
}if(w.speedy&&(F=Math.floor(w.lastscrolly-w.speedy*(1-w.demulxy)),w.lastscrolly=F,0>F||F>E)){I=0.1
}w.demulxy=Math.min(1,w.demulxy+I);
w.nc.synched("domomentum2d",function(){w.speedx&&(w.nc.getScrollLeft()!=w.chkx&&w.stop(),w.chkx=x,w.nc.setScrollLeft(x));
w.speedy&&(w.nc.getScrollTop()!=w.chky&&w.stop(),w.chky=F,w.nc.setScrollTop(F));
w.timer||(w.nc.hideCursor(),w.doSnapy(x,F))
});
1>w.demulxy?w.timer=setTimeout(D,B):(w.stop(),w.nc.hideCursor(),w.doSnapy(x,F))
};
D()
}else{w.doSnapy(w.nc.getScrollLeft(),w.nc.getScrollTop())
}}
},u=G.fn.scrollTop;
G.cssHooks.pageYOffset={get:function(e,w,v){return(w=G.data(e,"__nicescroll")||!1)&&w.ishwscroll?w.getScrollTop():u.call(e)
},set:function(e,w){var v=G.data(e,"__nicescroll")||!1;
v&&v.ishwscroll?v.setScrollTop(parseInt(w)):u.call(e,w);
return this
}};
G.fn.scrollTop=function(e){if("undefined"==typeof e){var v=this[0]?G.data(this[0],"__nicescroll")||!1:!1;
return v&&v.ishwscroll?v.getScrollTop():u.call(this)
}return this.each(function(){var w=G.data(this,"__nicescroll")||!1;
w&&w.ishwscroll?w.setScrollTop(parseInt(e)):u.call(G(this),e)
})
};
var t=G.fn.scrollLeft;
G.cssHooks.pageXOffset={get:function(e,w,v){return(w=G.data(e,"__nicescroll")||!1)&&w.ishwscroll?w.getScrollLeft():t.call(e)
},set:function(e,w){var v=G.data(e,"__nicescroll")||!1;
v&&v.ishwscroll?v.setScrollLeft(parseInt(w)):t.call(e,w);
return this
}};
G.fn.scrollLeft=function(e){if("undefined"==typeof e){var v=this[0]?G.data(this[0],"__nicescroll")||!1:!1;
return v&&v.ishwscroll?v.getScrollLeft():t.call(this)
}return this.each(function(){var w=G.data(this,"__nicescroll")||!1;
w&&w.ishwscroll?w.setScrollLeft(parseInt(e)):t.call(G(this),e)
})
};
var r=function(e){var w=this;
this.length=0;
this.name="nicescrollarray";
this.each=function(y){for(var x=0;
x<w.length;
x++){y.call(w[x])
}return w
};
this.push=function(x){w[w.length]=x;
w.length++
};
this.eq=function(x){return w[x]
};
if(e){for(a=0;
a<e.length;
a++){var v=G.data(e[a],"__nicescroll")||!1;
v&&(this[this.length]=v,this.length++)
}}return this
};
(function(x,y,w){for(var v=0;
v<y.length;
v++){w(x,y[v])
}})(r.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(v,w){v[w]=function(){var x=arguments;
return this.each(function(){this[w].apply(this,x)
})
}
});
G.fn.getNiceScroll=function(e){return"undefined"==typeof e?new r(this):G.data(this[e],"__nicescroll")||!1
};
G.extend(G.expr[":"],{nicescroll:function(e){return G.data(e,"__nicescroll")?!0:!1
}});
G.fn.niceScroll=function(v,x){"undefined"==typeof x&&("object"==typeof v&&!("jquery" in v))&&(x=v,v=!1);
var w=new r;
"undefined"==typeof x&&(x={});
v&&(x.doc=G(v),x.win=G(this));
var e=!("doc" in x);
!e&&!("win" in x)&&(x.win=G(this));
this.each(function(){var y=G(this).data("__nicescroll")||!1;
y||(x.doc=e?G(this):x.doc,y=new b(x,G(this)),G(this).data("__nicescroll",y));
w.push(y)
});
return 1==w.length?w[0]:w
};
window.NiceScroll={getjQuery:function(){return G
}};
G.nicescroll||(G.nicescroll=new r,G.nicescroll.options=o)
})(jQuery);
!function(y,m,h,g){function z(l){var r=l.currentTarget,u=l.data?l.data.options:{},p=l.data?l.data.items:[],d="",c=0;
l.preventDefault(),l.stopPropagation(),h(r).attr("data-fancybox")&&(d=h(r).data("fancybox")),d?(p=p.length?p.filter('[data-fancybox="'+d+'"]'):h("[data-fancybox="+d+"]"),c=p.index(r)):p=[r],h.fancybox.open(p,u,c)
}if(!h){return g
}var k={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:h.noop,afterLoad:h.noop,beforeMove:h.noop,afterMove:h.noop,onComplete:h.noop,onInit:h.noop,beforeClose:h.noop,afterClose:h.noop,onActivate:h.noop,onDeactivate:h.noop},w=h(y),b=h(m),v=0,j=function(c){return c&&c.hasOwnProperty&&c instanceof h
},x=function(){return y.requestAnimationFrame||y.webkitRequestAnimationFrame||y.mozRequestAnimationFrame||function(c){y.setTimeout(c,1000/60)
}
}(),q=function(d){var c;
return"function"==typeof h&&d instanceof h&&(d=d[0]),c=d.getBoundingClientRect(),c.bottom>0&&c.right>0&&c.left<(y.innerWidth||m.documentElement.clientWidth)&&c.top<(y.innerHeight||m.documentElement.clientHeight)
},f=function(d,i,e){var c=this;
c.opts=h.extend(!0,{index:e},k,i||{}),c.id=c.opts.id||++v,c.group=[],c.currIndex=parseInt(c.opts.index,10)||0,c.prevIndex=null,c.prevPos=null,c.currPos=0,c.firstRun=null,c.createGroup(d),c.group.length&&(c.$lastFocus=h(m.activeElement).blur(),c.slides={},c.init(d))
};
h.extend(f.prototype,{init:function(){var c,i,l=this,d=!1;
l.scrollTop=b.scrollTop(),l.scrollLeft=b.scrollLeft(),h.fancybox.getInstance()||(c=h("body").width(),h("html").addClass("fancybox-enabled"),h.fancybox.isTouch?(h.each(l.group,function(o,p){if("image"!==p.type&&"iframe"!==p.type){return d=!0,!1
}}),d&&h("body").css({position:"fixed",width:c,top:l.scrollTop*-1})):(c=h("body").width()-c,c>1&&h('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+c+"px; }").appendTo("head"))),i=h(l.opts.baseTpl).attr("id","fancybox-container-"+l.id).data("FancyBox",l).addClass(l.opts.baseClass).hide().prependTo(l.opts.parentEl),l.$refs={container:i,bg:i.find(".fancybox-bg"),controls:i.find(".fancybox-controls"),buttons:i.find(".fancybox-buttons"),slider_wrap:i.find(".fancybox-slider-wrap"),slider:i.find(".fancybox-slider"),caption:i.find(".fancybox-caption")},l.trigger("onInit"),l.activate(),l.current||l.jumpTo(l.currIndex)
},createGroup:function(c){var i=this,d=h.makeArray(c);
h.each(d,function(E,F){var p,C,e,B,o={},D={},A=[];
h.isPlainObject(F)?(o=F,D=F.opts||{}):"object"===h.type(F)&&h(F).length?(p=h(F),A=p.data(),D="options" in A?A.options:{},D="object"===h.type(D)?D:{},o.type="type" in A?A.type:D.type,o.src="src" in A?A.src:D.src||p.attr("href"),D.width="width" in A?A.width:D.width,D.height="height" in A?A.height:D.height,D.thumb="thumb" in A?A.thumb:D.thumb,D.selector="selector" in A?A.selector:D.selector,"srcset" in A&&(D.image={srcset:A.srcset}),D.$orig=p):o={type:"html",content:F+""},o.opts=h.extend(!0,{},i.opts,D),C=o.type,e=o.src||"",C||(o.content?C="html":e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?C="image":e.match(/\.(pdf)((\?|#).*)?$/i)?C="pdf":"#"===e.charAt(0)&&(C="inline"),o.type=C),o.index=i.group.length,o.opts.$orig&&!o.opts.$orig.length&&delete o.opts.$orig,!o.opts.$thumb&&o.opts.$orig&&(o.opts.$thumb=o.opts.$orig.find("img:first")),o.opts.$thumb&&!o.opts.$thumb.length&&delete o.opts.$thumb,"function"===h.type(o.opts.caption)?o.opts.caption=o.opts.caption.apply(F,[i,o]):"caption" in A?o.opts.caption=A.caption:D.$orig&&(o.opts.caption=p.attr("title")),o.opts.caption=o.opts.caption===g?"":o.opts.caption+"","ajax"===C&&(B=e.split(/\s+/,2),B.length>1&&(o.src=B.shift(),o.opts.selector=B.shift())),"auto"==o.opts.smallBtn&&(h.inArray(C,["html","inline","ajax"])>-1?(o.opts.buttons=!1,o.opts.smallBtn=!0):o.opts.smallBtn=!1),"pdf"===C&&(o.type="iframe",o.opts.closeBtn=!0,o.opts.smallBtn=!1,o.opts.iframe.preload=!1),o.opts.modal&&h.extend(!0,o.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),i.group.push(o)
})
},addEvents:function(){var c=this;
c.removeEvents(),c.$refs.container.on("click.fb-close","[data-fancybox-close]",function(d){d.stopPropagation(),d.preventDefault(),c.close(d)
}).on("click.fb-previous","[data-fancybox-previous]",function(d){d.stopPropagation(),d.preventDefault(),c.previous()
}).on("click.fb-next","[data-fancybox-next]",function(d){d.stopPropagation(),d.preventDefault(),c.next()
}),h(y).on("orientationchange.fb resize.fb",function(d){x(function(){d&&d.originalEvent&&"resize"===d.originalEvent.type?c.update():(c.$refs.slider_wrap.hide(),x(function(){c.$refs.slider_wrap.show(),c.update()
}))
})
}),b.on("focusin.fb",function(d){var e=h.fancybox?h.fancybox.getInstance():null;
!e||h(d.target).hasClass("fancybox-container")||h.contains(e.$refs.container[0],d.target)||(d.stopPropagation(),e.focus(),w.scrollTop(c.scrollTop).scrollLeft(c.scrollLeft))
}),b.on("keydown.fb",function(d){var i=c.current,e=d.keyCode||d.which;
if(i&&i.opts.keyboard&&!h(d.target).is("input")&&!h(d.target).is("textarea")){if(8===e||27===e){return d.preventDefault(),void c.close(d)
}switch(e){case 37:case 38:d.preventDefault(),c.previous();
break;
case 39:case 40:d.preventDefault(),c.next();
break;
case 80:case 32:d.preventDefault(),c.SlideShow&&(d.preventDefault(),c.SlideShow.toggle());
break;
case 70:c.FullScreen&&(d.preventDefault(),c.FullScreen.toggle());
break;
case 71:c.Thumbs&&(d.preventDefault(),c.Thumbs.toggle())
}}})
},removeEvents:function(){w.off("scroll.fb resize.fb orientationchange.fb"),b.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
},previous:function(c){this.jumpTo(this.currIndex-1,c)
},next:function(c){this.jumpTo(this.currIndex+1,c)
},jumpTo:function(l,u){var A,o,d,c,p=this;
if(A=p.firstRun=null===p.firstRun,o=d=l=parseInt(l,10),c=!!p.current&&p.current.opts.loop,!p.isAnimating&&(o!=p.currIndex||A)){if(p.group.length>1&&c){o%=p.group.length,o=o<0?p.group.length+o:o,2==p.group.length?d=l-p.currIndex+p.currPos:(d=o-p.currIndex+p.currPos,Math.abs(p.currPos-(d+p.group.length))<Math.abs(p.currPos-d)?d+=p.group.length:Math.abs(p.currPos-(d-p.group.length))<Math.abs(p.currPos-d)&&(d-=p.group.length))
}else{if(!p.group[o]){return void p.update(!1,!1,u)
}}p.current&&(p.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),p.updateSlide(p.current,!0)),p.prevIndex=p.currIndex,p.prevPos=p.currPos,p.currIndex=o,p.currPos=d,p.current=p.createSlide(d),p.group.length>1&&((p.opts.loop||d-1>=0)&&p.createSlide(d-1),(p.opts.loop||d+1<p.group.length)&&p.createSlide(d+1)),p.current.isMoved=!1,p.current.isComplete=!1,u=parseInt(u===g?1.5*p.current.opts.speed:u,10),p.trigger("beforeMove"),p.updateControls(),A&&(p.current.$slide.addClass("fancybox-slide--current"),p.$refs.container.show(),x(function(){p.$refs.bg.css("transition-duration",p.current.opts.speed+"ms"),p.$refs.container.addClass("fancybox-container--ready")
})),p.update(!0,!1,A?0:u,function(){p.afterMove()
}),p.loadSlide(p.current),A&&p.current.$ghost||p.preload()
}},createSlide:function(l){var r,u,p,d=this;
if(u=l%d.group.length,u=u<0?d.group.length+u:u,!d.slides[l]&&d.group[u]){if(d.opts.loop&&d.group.length>2){for(var c in d.slides){if(d.slides[c].index===u){return p=d.slides[c],p.pos=l,d.slides[l]=p,delete d.slides[c],d.updateSlide(p),p
}}}r=h('<div class="fancybox-slide"></div>').appendTo(d.$refs.slider),d.slides[l]=h.extend(!0,{},d.group[u],{pos:l,$slide:r,isMoved:!1,isLoaded:!1})
}return d.slides[l]
},zoomInOut:function(K,G,B){var L,D,I,d=this,H=d.current,C=H.$placeholder,J=H.opts.opacity,A=H.opts.$thumb,E=A?A.offset():0,F=H.$slide.offset();
return !!(C&&H.isMoved&&E&&q(A))&&(!("In"===K&&!d.firstRun)&&(h.fancybox.stop(C),d.isAnimating=!0,L={top:E.top-F.top+parseFloat(A.css("border-top-width")||0),left:E.left-F.left+parseFloat(A.css("border-left-width")||0),width:A.width(),height:A.height(),scaleX:1,scaleY:1},"auto"==J&&(J=Math.abs(H.width/H.height-L.width/L.height)>0.1),"In"===K?(D=L,I=d.getFitPos(H),I.scaleX=I.width/D.width,I.scaleY=I.height/D.height,J&&(D.opacity=0.1,I.opacity=1)):(D=h.fancybox.getTranslate(C),I=L,H.$ghost&&(H.$ghost.show(),H.$image&&H.$image.remove()),D.scaleX=D.width/I.width,D.scaleY=D.height/I.height,D.width=I.width,D.height=I.height,J&&(I.opacity=0)),d.updateCursor(I.width,I.height),delete I.width,delete I.height,h.fancybox.setTranslate(C,D),C.show(),d.trigger("beforeZoom"+K),C.css("transition","all "+G+"ms"),h.fancybox.setTranslate(C,I),setTimeout(function(){var c;
C.css("transition","none"),c=h.fancybox.getTranslate(C),c.scaleX=1,c.scaleY=1,h.fancybox.setTranslate(C,c),d.trigger("afterZoom"+K),B.apply(d),d.isAnimating=!1
},G),!0))
},canPan:function(){var c=this,d=c.current,l=d.$placeholder,i=!1;
return l&&(i=c.getFitPos(d),i=Math.abs(l.width()-i.width)>1||Math.abs(l.height()-i.height)>1),i
},isScaledDown:function(){var c=this,i=c.current,l=i.$placeholder,d=!1;
return l&&(d=h.fancybox.getTranslate(l),d=d.width<i.width||d.height<i.height),d
},scaleToActual:function(M,G,N){var C,K,o,I,B,L=this,H=L.current,A=H.$placeholder,D=parseInt(H.$slide.width(),10),F=parseInt(H.$slide.height(),10),E=H.width,J=H.height;
A&&(L.isAnimating=!0,M=M===g?0.5*D:M,G=G===g?0.5*F:G,C=h.fancybox.getTranslate(A),I=E/C.width,B=J/C.height,K=0.5*D-0.5*E,o=0.5*F-0.5*J,E>D&&(K=C.left*I-(M*I-M),K>0&&(K=0),K<D-E&&(K=D-E)),J>F&&(o=C.top*B-(G*B-G),o>0&&(o=0),o<F-J&&(o=F-J)),L.updateCursor(E,J),h.fancybox.animate(A,null,{top:o,left:K,scaleX:I,scaleY:B},N||H.opts.speed,function(){L.isAnimating=!1
}))
},scaleToFit:function(d){var p,r=this,l=r.current,c=l.$placeholder;
c&&(r.isAnimating=!0,p=r.getFitPos(l),r.updateCursor(p.width,p.height),h.fancybox.animate(c,null,{top:p.top,left:p.left,scaleX:p.width/c.width(),scaleY:p.height/c.height()},d||l.opts.speed,function(){r.isAnimating=!1
}))
},getFitPos:function(K){var G,C,L,E,A,I,D,J=K.$placeholder||K.$content,H=K.width,B=K.height,F=K.opts.margin;
return !(!J||!J.length||!H&&!B)&&("number"===h.type(F)&&(F=[F,F]),2==F.length&&(F=[F[0],F[1],F[0],F[1]]),w.width()<800&&(F=[0,0,0,0]),G=parseInt(K.$slide.width(),10)-(F[1]+F[3]),C=parseInt(K.$slide.height(),10)-(F[0]+F[2]),L=Math.min(1,G/H,C/B),I=Math.floor(L*H),D=Math.floor(L*B),E=Math.floor(0.5*(C-D))+F[0],A=Math.floor(0.5*(G-I))+F[3],{top:E,left:A,width:I,height:D})
},update:function(l,r,u,p){var d,c=this;
c.isAnimating!==!0&&c.current&&(d=c.current.pos*Math.floor(c.current.$slide.width())*-1-c.current.pos*c.current.opts.gutter,u=parseInt(u,10)||0,h.fancybox.stop(c.$refs.slider),l===!1?c.updateSlide(c.current,r):h.each(c.slides,function(e,i){c.updateSlide(i,r)
}),u?h.fancybox.animate(c.$refs.slider,null,{top:0,left:d},u,function(){c.current.isMoved=!0,"function"===h.type(p)&&p.apply(c)
}):(h.fancybox.setTranslate(c.$refs.slider,{top:0,left:d}),c.current.isMoved=!0,"function"===h.type(p)&&p.apply(c)))
},updateSlide:function(d,p){var r,l=this,c=d.$placeholder;
d=d||l.current,d&&!l.isClosing&&(r=d.pos*Math.floor(d.$slide.width())+d.pos*d.opts.gutter,r!==d.leftPos&&(h.fancybox.setTranslate(d.$slide,{top:0,left:r}),d.leftPos=r),p!==!1&&c&&(h.fancybox.setTranslate(c,l.getFitPos(d)),d.pos===l.currPos&&l.updateCursor()),d.$slide.trigger("refresh"),l.trigger("onUpdate",d))
},updateCursor:function(d,o){var p,l=this,c=l.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
!l.isClosing&&l.opts.touch&&(p=d!==g&&o!==g?d<l.current.width&&o<l.current.height:l.isScaledDown(),p?c.addClass("fancybox-controls--canzoomIn"):l.group.length<2?c.addClass("fancybox-controls--canzoomOut"):c.addClass("fancybox-controls--canGrab"))
},loadSlide:function(d){var p,r,l,c=this;
if(d&&!d.isLoaded&&!d.isLoading){switch(d.isLoading=!0,c.trigger("beforeLoad",d),p=d.type,r=d.$slide,r.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(p||"unknown")).addClass(d.opts.slideClass),p){case"image":c.setImage(d);
break;
case"iframe":c.setIframe(d);
break;
case"html":c.setContent(d,d.content);
break;
case"inline":h(d.src).length?c.setContent(d,h(d.src)):c.setError(d);
break;
case"ajax":c.showLoading(d),l=h.ajax(h.extend({},d.opts.ajax.settings,{url:d.src,success:function(i,o){"success"===o&&c.setContent(d,i)
},error:function(i,o){i&&"abort"!==o&&c.setError(d)
}})),r.one("onReset",function(){l.abort()
});
break;
default:c.setError(d)
}return !0
}},setImage:function(B){var p,F,A,D,d=this,C=B.opts.image.srcset;
if(B.isLoaded&&!B.hasError){return void d.afterLoad(B)
}if(C){A=y.devicePixelRatio||1,D=y.innerWidth*A,F=C.split(",").map(function(c){var i={};
return c.trim().split(/\s+/).forEach(function(e,r){var l=parseInt(e.substring(0,e.length-1),10);
return 0===r?i.url=e:void (l&&(i.value=l,i.postfix=e[e.length-1]))
}),i
}),F.sort(function(c,i){return c.value-i.value
});
for(var t=0;
t<F.length;
t++){var E=F[t];
if("w"===E.postfix&&E.value>=D||"x"===E.postfix&&E.value>=A){p=E;
break
}}!p&&F.length&&(p=F[F.length-1]),p&&(B.src=p.url,B.width&&B.height&&"w"==p.postfix&&(B.height=B.width/B.height*p.value,B.width=p.value))
}B.$placeholder=h('<div class="fancybox-placeholder"></div>').hide().appendTo(B.$slide),B.opts.preload!==!1&&B.opts.width&&B.opts.height&&(B.opts.thumb||B.opts.$thumb)?(B.width=B.opts.width,B.height=B.opts.height,B.$ghost=h("<img />").one("load error",function(){d.isClosing||(h("<img/>")[0].src=B.src,d.revealImage(B,function(){d.setBigImage(B),d.firstRun&&B.index===d.currIndex&&d.preload()
}))
}).addClass("fancybox-image").appendTo(B.$placeholder).attr("src",B.opts.thumb||B.opts.$thumb.attr("src"))):d.setBigImage(B)
},setBigImage:function(c){var d=this,i=h("<img />");
c.$image=i.one("error",function(){d.setError(c)
}).one("load",function(){clearTimeout(c.timouts),c.timouts=null,d.isClosing||(c.width=this.naturalWidth,c.height=this.naturalHeight,c.opts.image.srcset&&i.attr("sizes","100vw").attr("srcset",c.opts.image.srcset),d.afterLoad(c),c.$ghost&&(c.timouts=setTimeout(function(){c.$ghost.hide()
},350)))
}).addClass("fancybox-image").attr("src",c.src).appendTo(c.$placeholder),i[0].complete?i.trigger("load"):i[0].error?i.trigger("error"):c.timouts=setTimeout(function(){i[0].complete||c.hasError||d.showLoading(c)
},150),c.opts.image.protect&&h('<div class="fancybox-spaceball"></div>').appendTo(c.$placeholder).on("contextmenu.fb",function(e){return 2==e.button&&e.preventDefault(),!0
})
},revealImage:function(c,d){var i=this;
return d=d||h.noop,"image"!==c.type||c.hasError||c.isRevealed===!0?void d.apply(i):(c.isRevealed=!0,void (c.pos===i.currPos&&i.zoomInOut("In",c.opts.speed,d)||(c.$ghost&&!c.isLoaded&&i.updateSlide(c,!0),c.pos===i.currPos?h.fancybox.animate(c.$placeholder,{opacity:0},{opacity:1},300,d):c.$placeholder.show(),d.apply(i))))
},setIframe:function(l){var p,o=this,d=l.opts.iframe,c=l.$slide;
l.$content=h('<div class="fancybox-content"></div>').css(d.css).appendTo(c),p=h(d.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",h.fancybox.isTouch?"auto":d.scrolling).appendTo(l.$content),d.preload?(l.$content.addClass("fancybox-tmp"),o.showLoading(l),p.on("load.fb error.fb",function(i){this.isReady=1,l.$slide.trigger("refresh"),o.afterLoad(l)
}),c.on("refresh.fb",function(){var D,A,i,B,C,e=u.$content;
if(1===p[0].isReady){try{D=p.contents(),A=D.find("body")
}catch(u){}A&&A.length&&(d.css.width===g||d.css.height===g)&&(i=p[0].contentWindow.document.documentElement.scrollWidth,B=Math.ceil(A.outerWidth(!0)+(e.width()-i)),C=Math.ceil(A.outerHeight(!0)),e.css({width:d.css.width===g?B+(e.outerWidth()-e.innerWidth()):d.css.width,height:d.css.height===g?C+(e.outerHeight()-e.innerHeight()):d.css.height})),e.removeClass("fancybox-tmp")
}})):this.afterLoad(l),p.attr("src",l.src),l.opts.smallBtn&&l.$content.prepend(l.opts.closeTpl),c.one("onReset",function(){try{h(this).find("iframe").hide().attr("src","//about:blank")
}catch(e){}h(this).empty(),e.isLoaded=!1
})
},setContent:function(c,d){var i=this;
i.isClosing||(i.hideLoading(c),c.$slide.empty(),j(d)&&d.parent().length?(d.data("placeholder")&&d.parents(".fancybox-slide").trigger("onReset"),d.data({placeholder:h("<div></div>").hide().insertAfter(d)}).css("display","inline-block")):("string"===h.type(d)&&(d=h("<div>").append(d).contents(),3===d[0].nodeType&&(d=h("<div>").html(d))),c.opts.selector&&(d=h("<div>").html(d).find(c.opts.selector))),c.$slide.one("onReset",function(){var e=j(d)?d.data("placeholder"):0;
e&&(d.hide().replaceAll(e),d.data("placeholder",null)),c.hasError||(h(this).empty(),c.isLoaded=!1)
}),c.$content=h(d).appendTo(c.$slide),c.opts.smallBtn===!0&&c.$content.find(".fancybox-close-small").remove().end().eq(0).append(c.opts.closeTpl),this.afterLoad(c))
},setError:function(c){c.hasError=!0,this.setContent(c,c.opts.errorTpl)
},showLoading:function(c){var d=this;
c=c||d.current,c&&!c.$spinner&&(c.$spinner=h(d.opts.spinnerTpl).appendTo(c.$slide))
},hideLoading:function(c){var d=this;
c=c||d.current,c&&c.$spinner&&(c.$spinner.remove(),delete c.$spinner)
},afterMove:function(){var c=this,d=c.current,i={};
d&&(d.$slide.siblings().trigger("onReset"),h.each(c.slides,function(l,o){o.pos>=c.currPos-1&&o.pos<=c.currPos+1?i[o.pos]=o:o&&o.$slide.remove()
}),c.slides=i,c.trigger("afterMove"),d.isLoaded&&c.complete())
},afterLoad:function(c){var d=this;
d.isClosing||(c.isLoading=!1,c.isLoaded=!0,d.trigger("afterLoad",c),d.hideLoading(c),c.$ghost||d.updateSlide(c,!0),c.index===d.currIndex&&c.isMoved?d.complete():c.$ghost||d.revealImage(c))
},complete:function(){var c=this,d=c.current;
c.revealImage(d,function(){d.isComplete=!0,d.$slide.addClass("fancybox-slide--complete"),c.updateCursor(),c.trigger("onComplete"),d.opts.focus&&"image"!==d.type&&"iframe"!==d.type&&c.focus()
})
},preload:function(){var c,d,i=this;
i.group.length<2||(c=i.slides[i.currPos+1],d=i.slides[i.currPos-1],c&&"image"===c.type&&i.loadSlide(c),d&&"image"===d.type&&i.loadSlide(d))
},focus:function(){var c,d=this.current;
c=d&&d.isComplete?d.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null,c&&c.length||(c=this.$refs.container),c.focus(),this.$refs.slider_wrap.scrollLeft(0),d&&d.$slide.scrollTop(0)
},activate:function(){var c=this;
h(".fancybox-container").each(function(){var d=h(this).data("FancyBox");
d&&d.uid!==c.uid&&!d.isClosing&&d.trigger("onDeactivate")
}),c.current&&(c.$refs.container.index()>0&&c.$refs.container.prependTo(m.body),c.updateControls()),c.trigger("onActivate"),c.addEvents()
},close:function(d){var p=this,r=p.current,l=r.opts.speed,c=h.proxy(function(){p.cleanUp(d)
},this);
return !p.isAnimating&&!p.isClosing&&(p.trigger("beforeClose",d)===!1?(h.fancybox.stop(p.$refs.slider),void x(function(){p.update(!0,!0,150)
})):(p.isClosing=!0,r.timouts&&clearTimeout(r.timouts),d!==!0&&h.fancybox.stop(p.$refs.slider),p.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),r.$slide.removeClass("fancybox-slide--complete").siblings().remove(),r.isMoved||r.$slide.css("overflow","visible"),p.removeEvents(),p.hideLoading(r),p.hideControls(),p.updateCursor(),p.$refs.bg.css("transition-duration",l+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void (d===!0?setTimeout(c,l):p.zoomInOut("Out",l,c)||h.fancybox.animate(p.$refs.container,null,{opacity:0},l,"easeInSine",c))))
},cleanUp:function(c){var d,i=this;
i.$refs.slider.children().trigger("onReset"),i.$refs.container.empty().remove(),i.trigger("afterClose",c),i.current=null,d=h.fancybox.getInstance(),d?d.activate():(h("html").removeClass("fancybox-enabled"),h("body").removeAttr("style"),w.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft),h("#fancybox-noscroll").remove()),i.$lastFocus&&i.$lastFocus.focus()
},trigger:function(e,u){var l,d=Array.prototype.slice.call(arguments,1),c=this,p=u&&u.opts?u:c.current;
return p?d.unshift(p):p=c,d.unshift(c),h.isFunction(p.opts[e])&&(l=p.opts[e].apply(p,d)),l===!1?l:void ("afterClose"===e?h(m).trigger(e+".fb",d):c.$refs.container.trigger(e+".fb",d))
},toggleControls:function(c){this.isHiddenControls?this.updateControls(c):this.hideControls()
},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")
},updateControls:function(p){var B=this,C=B.$refs.container,u=B.$refs.caption,l=B.current,d=l.index,A=l.opts,D=A.caption;
this.isHiddenControls&&p!==!0||(this.isHiddenControls=!1,C.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!A.infobar&&B.group.length>1).toggleClass("fancybox-show-buttons",!!A.buttons).toggleClass("fancybox-is-modal",!!A.modal),h(".fancybox-button--left",C).toggleClass("fancybox-button--disabled",!A.loop&&d<=0),h(".fancybox-button--right",C).toggleClass("fancybox-button--disabled",!A.loop&&d>=B.group.length-1),h(".fancybox-button--play",C).toggle(!!(A.slideShow&&B.group.length>1)),h(".fancybox-button--close",C).toggle(!!A.closeBtn),h(".js-fancybox-count",C).html(B.group.length),h(".js-fancybox-index",C).html(d+1),l.$slide.trigger("refresh"),u&&u.empty(),D&&D.length?(u.html(D),this.$refs.container.addClass("fancybox-show-caption "),B.$caption=u):this.$refs.container.removeClass("fancybox-show-caption"))
}}),h.fancybox={version:"3.0.47",defaults:k,getInstance:function(c){var d=h('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);
return d instanceof f&&("string"===h.type(c)?d[c].apply(d,i):"function"===h.type(c)&&c.apply(d,i),d)
},open:function(c,d,i){return new f(c,d,i)
},close:function(c){var d=this.getInstance();
d&&(d.close(),c===!0&&this.close())
},isTouch:m.createTouch!==g&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var c=m.createElement("div");
return y.getComputedStyle(c).getPropertyValue("transform")&&!(m.documentMode&&m.documentMode<=11)
}(),getTranslate:function(c){var d,i;
return !(!c||!c.length)&&(d=c.get(0).getBoundingClientRect(),i=c.eq(0).css("transform"),i&&i.indexOf("matrix")!==-1?(i=i.split("(")[1],i=i.split(")")[0],i=i.split(",")):i=[],i.length?(i=i.length>10?[i[13],i[12],i[0],i[5]]:[i[5],i[4],i[0],i[3]],i=i.map(parseFloat)):i=[0,0,1,1],{top:i[0],left:i[1],scaleX:i[2],scaleY:i[3],opacity:parseFloat(c.css("opacity")),width:d.width,height:d.height})
},setTranslate:function(c,i){var l="",d={};
if(c&&i){return i.left===g&&i.top===g||(l=(i.left===g?c.position().top:i.left)+"px, "+(i.top===g?c.position().top:i.top)+"px",l=this.use3d?"translate3d("+l+", 0px)":"translate("+l+")"),i.scaleX!==g&&i.scaleY!==g&&(l=(l.length?l+" ":"")+"scale("+i.scaleX+", "+i.scaleY+")"),l.length&&(d.transform=l),i.opacity!==g&&(d.opacity=i.opacity),i.width!==g&&(d.width=i.width),i.height!==g&&(d.height=i.height),c.css(d)
}},easing:{easeOutCubic:function(c,d,l,i){return l*((c=c/i-1)*c*c+1)+d
},easeInCubic:function(c,d,l,i){return l*(c/=i)*c*c+d
},easeOutSine:function(c,d,l,i){return l*Math.sin(c/i*(Math.PI/2))+d
},easeInSine:function(c,d,l,i){return -l*Math.cos(c/i*(Math.PI/2))+l+d
}},stop:function(c){c.removeData("animateID")
},animate:function(K,F,L,B,J,o){var H,A,G,u=this,C=null,E=0,D=function(){L.scaleX!==g&&L.scaleY!==g&&F&&F.width!==g&&F.height!==g&&(L.width=F.width*L.scaleX,L.height=F.height*L.scaleY,L.scaleX=1,L.scaleY=1),u.setTranslate(K,L),o()
},I=function(d){if(H=[],A=0,K.length&&K.data("animateID")===G){if(d=d||Date.now(),C&&(A=d-C),C=d,E+=A,E>=B){return void D()
}for(var c in L){L.hasOwnProperty(c)&&F[c]!==g&&(F[c]==L[c]?H[c]=L[c]:H[c]=u.easing[J](E,F[c],L[c]-F[c],B))
}u.setTranslate(K,H),x(I)
}};
u.animateID=G=u.animateID===g?1:u.animateID+1,K.data("animateID",G),o===g&&"function"==h.type(J)&&(o=J,J=g),J||(J="easeOutCubic"),o=o||h.noop,F?this.setTranslate(K,F):F=this.getTranslate(K),B?(K.show(),x(I)):D()
}},h.fn.fancybox=function(c){return this.off("click.fb-start").on("click.fb-start",{items:this,options:c||{}},z),this
},h(m).on("click.fb-start","[data-fancybox]",z)
}(window,document,window.jQuery),function(b){var c=function(f,h,g){if(f){return g=g||"","object"===b.type(g)&&(g=b.param(g,!0)),b.each(h,function(e,i){f=f.replace("$"+e,i||"")
}),g.length&&(f+=(f.indexOf("?")>0?"&":"?")+g),f
}},d={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(e){return"//maps.google."+e[2]+"/?ll="+(e[9]?e[9]+"&z="+Math.floor(e[10])+(e[12]?e[12].replace(/^\//,"&"):""):e[12])+"&output="+(e[12]&&e[12].indexOf("layer=c")>0?"svembed":"embed")
}}};
b(document).on("onInit.fb",function(f,e){b.each(e.group,function(j,x){var m,v,g,t,k,w,q=x.src||"",h=!1;
x.type||(b.each(d,function(r,p){if(v=q.match(p.matcher),k={},w=r,v){if(h=p.type,p.paramPlace&&v[p.paramPlace]){t=v[p.paramPlace],"?"==t[0]&&(t=t.substring(1)),t=t.split("&");
for(var i=0;
i<t.length;
++i){var l=t[i].split("=",2);
2==l.length&&(k[l[0]]=decodeURIComponent(l[1].replace(/\+/g," ")))
}}return g=b.extend(!0,{},p.params,x.opts[r],k),q="function"===b.type(p.url)?p.url.call(this,v,g,x):c(p.url,v,g),m="function"===b.type(p.thumb)?p.thumb.call(this,v,g,x):c(p.thumb,v),"vimeo"===w&&(q=q.replace("&%23","#")),!1
}}),h?(x.src=q,x.type=h,x.opts.thumb||x.opts.$thumb&&x.opts.$thumb.length||(x.opts.thumb=m),"iframe"===h&&(b.extend(!0,x.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),x.opts.slideClass+=" fancybox-slide--video")):x.type="iframe")
})
})
}(window.jQuery),function(p,j,f){var d=function(){return p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||function(c){p.setTimeout(c,1000/60)
}
}(),q=function(c){var l=[];
c=c.originalEvent||c||p.e,c=c.touches&&c.touches.length?c.touches:c.changedTouches&&c.changedTouches.length?c.changedTouches:[c];
for(var i in c){c[i].pageX?l.push({x:c[i].pageX,y:c[i].pageY}):c[i].clientX&&l.push({x:c[i].clientX,y:c[i].clientY})
}return l
},h=function(c,i,l){return i&&c?"x"===l?c.x-i.x:"y"===l?c.y-i.y:Math.sqrt(Math.pow(c.x-i.x,2)+Math.pow(c.y-i.y,2)):0
},m=function(c){return c.is("a")||c.is("button")||c.is("input")||c.is("select")||c.is("textarea")||f.isFunction(c.get(0).onclick)
},b=function(r){var u=p.getComputedStyle(r)["overflow-y"],t=p.getComputedStyle(r)["overflow-x"],l=("scroll"===u||"auto"===u)&&r.scrollHeight>r.clientHeight,c=("scroll"===t||"auto"===t)&&r.scrollWidth>r.clientWidth;
return l||c
},k=function(c){for(var i=!1;
;
){if(i=b(c.get(0))){break
}if(c=c.parent(),!c.length||c.hasClass("fancybox-slider")||c.is("body")){break
}}return i
},g=function(c){var i=this;
i.instance=c,i.$wrap=c.$refs.slider_wrap,i.$slider=c.$refs.slider,i.$container=c.$refs.container,i.destroy(),i.$wrap.on("touchstart.fb mousedown.fb",f.proxy(i,"ontouchstart"))
};
g.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
},g.prototype.ontouchstart=function(v){var x=this,t=f(v.target),c=x.instance,i=c.current,w=i.$content||i.$placeholder;
return x.startPoints=q(v),x.$target=t,x.$content=w,x.canvasWidth=Math.round(i.$slide[0].clientWidth),x.canvasHeight=Math.round(i.$slide[0].clientHeight),x.startEvent=v,v.originalEvent.clientX>x.canvasWidth+i.$slide.offset().left||(m(t)||m(t.parent())||k(t)?void 0:i.opts.touch?void (v.originalEvent&&2==v.originalEvent.button||(v.stopPropagation(),!i||x.instance.isAnimating||x.instance.isClosing||!x.startPoints||x.startPoints.length>1&&!i.isMoved||(x.$wrap.off("touchmove.fb mousemove.fb",f.proxy(x,"ontouchmove")),x.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",f.proxy(x,"ontouchend")),x.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",f.proxy(x,"ontouchend")),x.$wrap.on("touchmove.fb mousemove.fb",f.proxy(x,"ontouchmove")),x.startTime=(new Date).getTime(),x.distanceX=x.distanceY=x.distance=0,x.canTap=!1,x.isPanning=!1,x.isSwiping=!1,x.isZooming=!1,x.sliderStartPos=f.fancybox.getTranslate(x.$slider),x.contentStartPos=f.fancybox.getTranslate(x.$content),x.contentLastPos=null,1!==x.startPoints.length||x.isZooming||(x.canTap=i.isMoved,"image"===i.type&&(x.contentStartPos.width>x.canvasWidth+1||x.contentStartPos.height>x.canvasHeight+1)?(f.fancybox.stop(x.$content),x.isPanning=!0):(f.fancybox.stop(x.$slider),x.isSwiping=!0),x.$container.addClass("fancybox-controls--isGrabbing")),2===x.startPoints.length&&i.isMoved&&!i.hasError&&"image"===i.type&&(i.isLoaded||i.$ghost)&&(x.isZooming=!0,x.isSwiping=!1,x.isPanning=!1,f.fancybox.stop(x.$content),x.centerPointStartX=0.5*(x.startPoints[0].x+x.startPoints[1].x)-f(p).scrollLeft(),x.centerPointStartY=0.5*(x.startPoints[0].y+x.startPoints[1].y)-f(p).scrollTop(),x.percentageOfImageAtPinchPointX=(x.centerPointStartX-x.contentStartPos.left)/x.contentStartPos.width,x.percentageOfImageAtPinchPointY=(x.centerPointStartY-x.contentStartPos.top)/x.contentStartPos.height,x.startDistanceBetweenFingers=h(x.startPoints[0],x.startPoints[1]))))):(x.endPoints=x.startPoints,x.ontap()))
},g.prototype.ontouchmove=function(c){var i=this;
c.preventDefault(),i.newPoints=q(c),i.newPoints&&i.newPoints.length&&(i.distanceX=h(i.newPoints[0],i.startPoints[0],"x"),i.distanceY=h(i.newPoints[0],i.startPoints[0],"y"),i.distance=h(i.newPoints[0],i.startPoints[0]),i.distance>0&&(i.isSwiping?i.onSwipe():i.isPanning?i.onPan():i.isZooming&&i.onZoom()))
},g.prototype.onSwipe=function(){var r,o=this,l=o.isSwiping,c=o.sliderStartPos.left;
l===!0?Math.abs(o.distance)>10&&(o.instance.group.length<2?o.isSwiping="y":!o.instance.current.isMoved||o.instance.opts.touch.vertical===!1||"auto"===o.instance.opts.touch.vertical&&f(p).width()>800?o.isSwiping="x":(r=Math.abs(180*Math.atan2(o.distanceY,o.distanceX)/Math.PI),o.isSwiping=r>45&&r<135?"y":"x"),o.canTap=!1,o.instance.current.isMoved=!1,o.startPoints=o.newPoints):("x"==l&&(!o.instance.current.opts.loop&&0===o.instance.current.index&&o.distanceX>0?c+=Math.pow(o.distanceX,0.8):!o.instance.current.opts.loop&&o.instance.current.index===o.instance.group.length-1&&o.distanceX<0?c-=Math.pow(-o.distanceX,0.8):c+=o.distanceX),o.sliderLastPos={top:"x"==l?0:o.sliderStartPos.top+o.distanceY,left:c},d(function(){f.fancybox.setTranslate(o.$slider,o.sliderLastPos)
}))
},g.prototype.onPan=function(){var l,r,o,c=this;
c.canTap=!1,l=c.contentStartPos.width>c.canvasWidth?c.contentStartPos.left+c.distanceX:c.contentStartPos.left,r=c.contentStartPos.top+c.distanceY,o=c.limitMovement(l,r,c.contentStartPos.width,c.contentStartPos.height),o.scaleX=c.contentStartPos.scaleX,o.scaleY=c.contentStartPos.scaleY,c.contentLastPos=o,d(function(){f.fancybox.setTranslate(c.$content,c.contentLastPos)
})
},g.prototype.limitMovement=function(I,D,y,x){var J,A,G,v,F=this,z=F.canvasWidth,H=F.canvasHeight,E=F.contentStartPos.left,w=F.contentStartPos.top,B=F.distanceX,C=F.distanceY;
return J=Math.max(0,0.5*z-0.5*y),A=Math.max(0,0.5*H-0.5*x),G=Math.min(z-y,0.5*z-0.5*y),v=Math.min(H-x,0.5*H-0.5*x),y>z&&(B>0&&I>J&&(I=J-1+Math.pow(-J+E+B,0.8)||0),B<0&&I<G&&(I=G+1-Math.pow(G-E-B,0.8)||0)),x>H&&(C>0&&D>A&&(D=A-1+Math.pow(-A+w+C,0.8)||0),C<0&&D<v&&(D=v+1-Math.pow(v-w-C,0.8)||0)),{top:D,left:I}
},g.prototype.limitPosition=function(r,v,x,w){var u=this,l=u.canvasWidth,c=u.canvasHeight;
return x>l?(r=r>0?0:r,r=r<l-x?l-x:r):r=Math.max(0,l/2-x/2),w>c?(v=v>0?0:v,v=v<c-w?c-w:v):v=Math.max(0,c/2-w/2),{top:v,left:r}
},g.prototype.onZoom=function(){var J=this,B=J.contentStartPos.width,N=J.contentStartPos.height,C=J.contentStartPos.left,L=J.contentStartPos.top,F=h(J.newPoints[0],J.newPoints[1]),A=F/J.startDistanceBetweenFingers,K=Math.floor(B*A),D=Math.floor(N*A),G=(B-K)*J.percentageOfImageAtPinchPointX,I=(N-D)*J.percentageOfImageAtPinchPointY,H=(J.newPoints[0].x+J.newPoints[1].x)/2-f(p).scrollLeft(),M=(J.newPoints[0].y+J.newPoints[1].y)/2-f(p).scrollTop(),E=H-J.centerPointStartX,i=M-J.centerPointStartY,z=C+(G+E),o=L+(I+i),t={top:o,left:z,scaleX:J.contentStartPos.scaleX*A,scaleY:J.contentStartPos.scaleY*A};
J.canTap=!1,J.newWidth=K,J.newHeight=D,J.contentLastPos=t,d(function(){f.fancybox.setTranslate(J.$content,J.contentLastPos)
})
},g.prototype.ontouchend=function(v){var x=this,y=x.instance.current,u=Math.max((new Date).getTime()-x.startTime,1),l=x.isSwiping,w=x.isPanning,z=x.isZooming;
return x.endPoints=q(v),x.$container.removeClass("fancybox-controls--isGrabbing"),x.$wrap.off("touchmove.fb mousemove.fb",f.proxy(this,"ontouchmove")),x.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",f.proxy(this,"ontouchend")),x.isSwiping=!1,x.isPanning=!1,x.isZooming=!1,x.canTap?x.ontap():(x.velocityX=x.distanceX/u*0.5,x.velocityY=x.distanceY/u*0.5,x.speed=y.opts.speed||330,x.speedX=Math.max(0.75*x.speed,Math.min(1.5*x.speed,1/Math.abs(x.velocityX)*x.speed)),x.speedY=Math.max(0.75*x.speed,Math.min(1.5*x.speed,1/Math.abs(x.velocityY)*x.speed)),void (w?x.endPanning():z?x.endZooming():x.endSwiping(l)))
},g.prototype.endSwiping=function(c){var i=this;
"y"==c&&Math.abs(i.distanceY)>50?(f.fancybox.animate(i.$slider,null,{top:i.sliderStartPos.top+i.distanceY+150*i.velocityY,left:i.sliderStartPos.left,opacity:0},i.speedY),i.instance.close(!0)):"x"==c&&i.distanceX>50?i.instance.previous(i.speedX):"x"==c&&i.distanceX<-50?i.instance.next(i.speedX):i.instance.update(!1,!0,150)
},g.prototype.endPanning=function(){var c,l,r,i=this;
i.contentLastPos&&(c=i.contentLastPos.left+i.velocityX*i.speed*2,l=i.contentLastPos.top+i.velocityY*i.speed*2,r=i.limitPosition(c,l,i.contentStartPos.width,i.contentStartPos.height),r.width=i.contentStartPos.width,r.height=i.contentStartPos.height,f.fancybox.animate(i.$content,null,r,i.speed,"easeOutSine"))
},g.prototype.endZooming=function(){var v,y,z,w,u=this,l=u.instance.current,x=u.newWidth,A=u.newHeight;
u.contentLastPos&&(v=u.contentLastPos.left,y=u.contentLastPos.top,w={top:y,left:v,width:x,height:A,scaleX:1,scaleY:1},f.fancybox.setTranslate(u.$content,w),x<u.canvasWidth&&A<u.canvasHeight?u.instance.scaleToFit(150):x>l.width||A>l.height?u.instance.scaleToActual(u.centerPointStartX,u.centerPointStartY,150):(z=u.limitPosition(v,y,x,A),f.fancybox.animate(u.$content,null,z,u.speed,"easeOutSine")))
},g.prototype.ontap=function(){var l=this,u=l.instance,v=u.current,r=l.endPoints[0].x,c=l.endPoints[0].y;
if(r-=l.$wrap.offset().left,c-=l.$wrap.offset().top,u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop(),!f.fancybox.isTouch){return v.opts.closeClickOutside&&l.$target.is(".fancybox-slide")?void u.close(l.startEvent):void ("image"==v.type&&v.isMoved&&(u.canPan()?u.scaleToFit():u.isScaledDown()?u.scaleToActual(r,c):u.group.length<2&&u.close(l.startEvent)))
}if(l.tapped){if(clearTimeout(l.tapped),l.tapped=null,Math.abs(r-l.x)>50||Math.abs(c-l.y)>50||!v.isMoved){return this
}"image"==v.type&&(v.isLoaded||v.$ghost)&&(u.canPan()?u.scaleToFit():u.isScaledDown()&&u.scaleToActual(r,c))
}else{l.x=r,l.y=c,l.tapped=setTimeout(function(){l.tapped=null,u.toggleControls(!0)
},300)
}return this
},f(j).on("onActivate.fb",function(c,i){i&&!i.Guestures&&(i.Guestures=new g(i))
}),f(j).on("beforeClose.fb",function(c,i){i&&i.Guestures&&i.Guestures.destroy()
})
}(window,document,window.jQuery),function(b,c){var d=function(e){this.instance=e,this.init()
};
c.extend(d.prototype,{timer:null,isActive:!1,$button:null,speed:3000,init:function(){var e=this;
e.$button=c('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(e.instance.$refs.buttons),e.instance.$refs.container.on("click","[data-fancybox-play]",function(){e.toggle()
})
},set:function(){var e=this;
e.instance&&e.instance.current&&(e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.instance.next()
},e.instance.current.opts.slideShow.speed||e.speed):e.stop()
},clear:function(){var e=this;
clearTimeout(e.timer),e.timer=null
},start:function(){var e=this;
e.stop(),e.instance&&e.instance.current&&(e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)&&(e.instance.$refs.container.on({"beforeLoad.fb.player":c.proxy(e,"clear"),"onComplete.fb.player":c.proxy(e,"set")}),e.isActive=!0,e.instance.current.isComplete&&e.set(),e.instance.$refs.container.trigger("onPlayStart"),e.$button.addClass("fancybox-button--pause"))
},stop:function(){var e=this;
e.clear(),e.instance.$refs.container.trigger("onPlayEnd").off(".player"),e.$button.removeClass("fancybox-button--pause"),e.isActive=!1
},toggle:function(){var e=this;
e.isActive?e.stop():e.start()
}}),c(b).on("onInit.fb",function(f,g){g&&g.group.length>1&&g.opts.slideShow&&!g.SlideShow&&(g.SlideShow=new d(g))
}),c(b).on("beforeClose.fb onDeactivate.fb",function(f,g){g&&g.SlideShow&&g.SlideShow.stop()
})
}(document,window.jQuery),function(b,c){var f=function(){var j,l,k,h=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],g={};
for(l=0;
l<h.length;
l++){if(j=h[l],j&&j[1] in b){for(k=0;
k<j.length;
k++){g[h[0][k]]=j[k]
}return g
}}return !1
}();
if(f){var d={request:function(g){g=g||b.documentElement,g[f.requestFullscreen](g.ALLOW_KEYBOARD_INPUT)
},exit:function(){b[f.exitFullscreen]()
},toggle:function(e){this.isFullscreen()?this.exit():this.request(e)
},isFullscreen:function(){return Boolean(b[f.fullscreenElement])
},enabled:function(){return Boolean(b[f.fullscreenEnabled])
}};
c(b).on({"onInit.fb":function(e,h){var g;
h&&h.opts.fullScreen&&!h.FullScreen&&(g=h.$refs.container,h.$refs.button_fs=c('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(h.$refs.buttons),g.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(i){i.stopPropagation(),i.preventDefault(),d.toggle(g[0])
}),h.opts.fullScreen.requestOnStart===!0&&d.request(g[0]))
},"beforeMove.fb":function(g,h){h&&h.$refs.button_fs&&h.$refs.button_fs.toggle(!!h.current.opts.fullScreen)
},"beforeClose.fb":function(){d.exit()
}}),c(b).on(f.fullscreenchange,function(){var e=c.fancybox.getInstance(),g=e?e.current.$placeholder:null;
g&&(g.css("transition","none"),e.isAnimating=!1,e.update(!0,!0,0))
})
}}(document,window.jQuery),function(b,c){var d=function(e){this.instance=e,this.init()
};
c.extend(d.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var e=this;
e.$button=c('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(f){f.stopPropagation(),f.preventDefault(),e.toggle()
})
},create:function(){var e,g,f=this.instance;
this.$grid=c('<div class="fancybox-thumbs"></div>').appendTo(f.$refs.container),e="<ul>",c.each(f.group,function(h,i){g=i.opts.thumb||(i.opts.$thumb?i.opts.$thumb.attr("src"):null),g||"image"!==i.type||(g=i.src),g&&g.length&&(e+='<li data-index="'+h+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+g+'" /></li>')
}),e+="</ul>",this.$list=c(e).appendTo(this.$grid).on("click touchstart","li",function(){f.jumpTo(c(this).data("index"))
}),this.$list.find("img").hide().one("load",function(){var k,q,p,l,j=c(this).parent().removeClass("fancybox-thumbs-loading"),h=j.outerWidth(),m=j.outerHeight();
k=this.naturalWidth||this.width,q=this.naturalHeight||this.height,p=k/h,l=q/m,p>=1&&l>=1&&(p>l?(k/=l,q=m):(k=h,q/=p)),c(this).css({width:Math.floor(k),height:Math.floor(q),"margin-top":Math.min(0,Math.floor(0.3*m-0.3*q)),"margin-left":Math.min(0,Math.floor(0.5*h-0.5*k))}).show()
}).each(function(){this.src=c(this).data("src")
})
},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()
},close:function(){this.$grid.hide()
},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.$grid.show(),this.focus()):this.$grid&&this.$grid.hide(),this.instance.update()
},hide:function(){this.isVisible=!1,this.update()
},show:function(){this.isVisible=!0,this.update()
},toggle:function(){this.isVisible?this.hide():this.show()
}}),c(b).on("onInit.fb",function(f,h){var i=h.group[0],g=h.group[1];
h.opts.thumbs&&!h.Thumbs&&h.group.length>1&&("image"==i.type||i.opts.thumb||i.opts.$thumb)&&("image"==g.type||g.opts.thumb||g.opts.$thumb)&&(h.Thumbs=new d(h))
}),c(b).on("beforeMove.fb",function(f,g,i){var h=g&&g.Thumbs;
h&&(i.modal?(h.$button.hide(),h.hide()):(g.opts.thumbs.showOnStart===!0&&g.firstRun&&h.show(),h.$button.show(),h.isVisible&&h.focus()))
}),c(b).on("beforeClose.fb",function(f,g){g&&g.Thumbs&&(g.Thumbs.isVisible&&g.opts.thumbs.hideOnClosing!==!1&&g.Thumbs.close(),g.Thumbs=null)
})
}(document,window.jQuery),function(d,g,j){function h(){var e=g.location.hash.substr(1),l=e.split("-"),k=l.length>1&&/^\+?\d+$/.test(l[l.length-1])?parseInt(l.pop(-1),10)||1:1,i=l.join("-");
return k<1&&(k=1),{hash:e,index:k,gallery:i}
}function f(i){var k;
""!==i.gallery&&(k=j("[data-fancybox='"+j.escapeSelector(i.gallery)+"']").eq(i.index-1),k.length?k.trigger("click"):j("#"+j.escapeSelector(i.gallery)).trigger("click"))
}function c(i){var k;
return !!i&&(k=i.current?i.current.opts:i.opts,k.$orig?k.$orig.data("fancybox"):k.hash||"")
}j.escapeSelector||(j.escapeSelector=function(i){var k=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,l=function(m,o){return o?"\0"===m?"�":m.slice(0,-1)+"\\"+m.charCodeAt(m.length-1).toString(16)+" ":"\\"+m
};
return(i+"").replace(k,l)
});
var b=null;
j(function(){setTimeout(function(){j.fancybox.defaults.hash!==!1&&(j(g).on("hashchange.fb",function(){var e=h();
j.fancybox.getInstance()?b&&b!==e.gallery+"-"+e.index&&(b=null,j.fancybox.close()):""!==e.gallery&&f(e)
}),j(d).on({"onInit.fb":function(i,l){var m=h(),k=c(l);
k&&m.gallery&&k==m.gallery&&(l.currIndex=m.index-1)
},"beforeMove.fb":function(l,k,e){var i=c(k);
i&&""!==i&&(g.location.hash.indexOf(i)<0&&(k.opts.origHash=g.location.hash),b=i+(k.group.length>1?"-"+(e.index+1):""),"pushState" in history?history.pushState("",d.title,g.location.pathname+g.location.search+"#"+b):g.location.hash=b)
},"beforeClose.fb":function(m,k,e){var i=c(k),l=k&&k.opts.origHash?k.opts.origHash:"";
i&&""!==i&&("pushState" in history?history.pushState("",d.title,g.location.pathname+g.location.search+l):g.location.hash=l),b=null
}}),f(h()))
},50)
})
}(document,window,window.jQuery);
(function(d){function c(e,g){this.opts=d.extend({handleKeys:!0,scrollEventKeys:[32,33,34,35,36,37,38,39,40]},g);
this.$container=e;
this.$document=d(document);
this.lockToScrollPos=[0,0];
this.disable()
}var b,f;
f=c.prototype;
f.disable=function(){var g=this;
g.lockToScrollPos=[g.$container.scrollLeft(),g.$container.scrollTop()];
g.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll",g._handleWheel);
g.$container.on("scroll.disablescroll",function(){g._handleScrollbar.call(g)
});
g.opts.handleKeys&&g.$document.on("keydown.disablescroll",function(e){g._handleKeydown.call(g,e)
})
};
f.undo=function(){var g=this;
g.$container.off(".disablescroll");
g.opts.handleKeys&&g.$document.off(".disablescroll")
};
f._handleWheel=function(g){g.preventDefault()
};
f._handleScrollbar=function(){this.$container.scrollLeft(this.lockToScrollPos[0]);
this.$container.scrollTop(this.lockToScrollPos[1])
};
f._handleKeydown=function(h){for(var g=0;
g<this.opts.scrollEventKeys.length;
g++){if(h.keyCode===this.opts.scrollEventKeys[g]){h.preventDefault();
return
}}};
d.fn.disablescroll=function(g){!b&&(typeof g=="object"||!g)?b=new c(this,g):b&&b[g]&&b[g].call(b)
};
window.UserScrollDisabler=c
})(jQuery);
+function(f){function c(g){return g.is('[type="checkbox"]')?g.prop("checked"):g.is('[type="radio"]')?!!f('[name="'+g.attr("name")+'"]:checked').length:g.is("select[multiple]")?(g.val()||[]).length:g.val()
}var d=function(h,g){this.options=g;
this.validators=f.extend({},d.VALIDATORS,g.custom);
this.$element=f(h);
this.$btn=f('button[type="submit"], input[type="submit"]').filter('[form="'+this.$element.attr("id")+'"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
this.update();
this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator",f.proxy(this.onInput,this));
this.$element.on("submit.bs.validator",f.proxy(this.onSubmit,this));
this.$element.on("reset.bs.validator",f.proxy(this.reset,this));
this.$element.find("[data-match]").each(function(){var j=f(this);
var i=j.attr("data-match");
f(i).on("input.bs.validator",function(k){c(j)&&j.trigger("input.bs.validator")
})
});
this.$inputs.filter(function(){return c(f(this))&&!f(this).closest(".has-error").length
}).trigger("focusout");
this.$element.attr("novalidate",true)
};
d.VERSION="0.11.9";
d.INPUT_SELECTOR=':input:not([type="hidden"], [type="submit"], [type="reset"], button)';
d.FOCUS_OFFSET=20;
d.DEFAULTS={delay:500,html:false,disable:true,focus:true,custom:{},errors:{match:"Does not match",minlength:"Not long enough"},feedback:{success:"glyphicon-ok",error:"glyphicon-remove"}};
d.VALIDATORS={"native":function(g){var h=g[0];
if(h.checkValidity){return !h.checkValidity()&&!h.validity.valid&&(h.validationMessage||"error!")
}},match:function(g){var h=g.attr("data-match");
return g.val()!==f(h).val()&&d.DEFAULTS.errors.match
},minlength:function(g){var h=g.attr("data-minlength");
return g.val().length<h&&d.DEFAULTS.errors.minlength
}};
d.prototype.update=function(){var g=this;
this.$inputs=this.$element.find(d.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function(){g.clearErrors(f(this))
}));
this.toggleSubmit();
return this
};
d.prototype.onInput=function(j){var h=this;
var i=f(j.target);
var g=j.type!=="focusout";
if(!this.$inputs.is(i)){return
}this.validateInput(i,g).done(function(){h.toggleSubmit()
})
};
d.prototype.validateInput=function(i,g){var j=c(i);
var l=i.data("bs.validator.errors");
if(i.is('[type="radio"]')){i=this.$element.find('input[name="'+i.attr("name")+'"]')
}var k=f.Event("validate.bs.validator",{relatedTarget:i[0]});
this.$element.trigger(k);
if(k.isDefaultPrevented()){return
}var h=this;
return this.runValidators(i).done(function(m){i.data("bs.validator.errors",m);
m.length?g?h.defer(i,h.showErrors):h.showErrors(i):h.clearErrors(i);
if(!l||m.toString()!==l.toString()){k=m.length?f.Event("invalid.bs.validator",{relatedTarget:i[0],detail:m}):f.Event("valid.bs.validator",{relatedTarget:i[0],detail:l});
h.$element.trigger(k)
}h.toggleSubmit();
h.$element.trigger(f.Event("validated.bs.validator",{relatedTarget:i[0]}))
})
};
d.prototype.runValidators=function(k){var m=[];
var h=f.Deferred();
k.data("bs.validator.deferred")&&k.data("bs.validator.deferred").reject();
k.data("bs.validator.deferred",h);
function j(o){return k.attr("data-"+o+"-error")
}function l(){var o=k[0].validity;
return o.typeMismatch?k.attr("data-type-error"):o.patternMismatch?k.attr("data-pattern-error"):o.stepMismatch?k.attr("data-step-error"):o.rangeOverflow?k.attr("data-max-error"):o.rangeUnderflow?k.attr("data-min-error"):o.valueMissing?k.attr("data-required-error"):null
}function g(){return k.attr("data-error")
}function i(o){return j(o)||l()||g()
}f.each(this.validators,f.proxy(function(q,p){var o=null;
if((c(k)||k.attr("required"))&&(k.attr("data-"+q)!==undefined||q=="native")&&(o=p.call(this,k))){o=i(q)||o;
!~m.indexOf(o)&&m.push(o)
}},this));
if(!m.length&&c(k)&&k.attr("data-remote")){this.defer(k,function(){var o={};
o[k.attr("name")]=c(k);
f.get(k.attr("data-remote"),o).fail(function(q,r,p){m.push(i("remote")||p)
}).always(function(){h.resolve(m)
})
})
}else{h.resolve(m)
}return h.promise()
};
d.prototype.validate=function(){var g=this;
f.when(this.$inputs.map(function(h){return g.validateInput(f(this),false)
})).then(function(){g.toggleSubmit();
g.focusError()
});
return this
};
d.prototype.focusError=function(){if(!this.options.focus){return
}var g=this.$element.find(".has-error :input:first");
if(g.length===0){return
}f("html, body").animate({scrollTop:g.offset().top-d.FOCUS_OFFSET},250);
g.focus()
};
d.prototype.showErrors=function(g){var l=this.options.html?"html":"text";
var k=g.data("bs.validator.errors");
var h=g.closest(".form-group");
var i=h.find(".help-block.with-errors");
var j=h.find(".form-control-feedback");
if(!k.length){return
}k=f("<ul/>").addClass("list-unstyled").append(f.map(k,function(m){return f("<li/>")[l](m)
}));
i.data("bs.validator.originalContent")===undefined&&i.data("bs.validator.originalContent",i.html());
i.empty().append(k);
h.addClass("has-error has-danger");
h.hasClass("has-feedback")&&j.removeClass(this.options.feedback.success)&&j.addClass(this.options.feedback.error)&&h.removeClass("has-success")
};
d.prototype.clearErrors=function(g){var h=g.closest(".form-group");
var i=h.find(".help-block.with-errors");
var j=h.find(".form-control-feedback");
i.html(i.data("bs.validator.originalContent"));
h.removeClass("has-error has-danger has-success");
h.hasClass("has-feedback")&&j.removeClass(this.options.feedback.error)&&j.removeClass(this.options.feedback.success)&&c(g)&&j.addClass(this.options.feedback.success)&&h.addClass("has-success")
};
d.prototype.hasErrors=function(){function g(){return !!(f(this).data("bs.validator.errors")||[]).length
}return !!this.$inputs.filter(g).length
};
d.prototype.isIncomplete=function(){function g(){var h=c(f(this));
return !(typeof h=="string"?f.trim(h):h)
}return !!this.$inputs.filter("[required]").filter(g).length
};
d.prototype.onSubmit=function(g){this.validate();
if(this.isIncomplete()||this.hasErrors()){g.preventDefault()
}};
d.prototype.toggleSubmit=function(){if(!this.options.disable){return
}this.$btn.toggleClass("disabled",this.isIncomplete()||this.hasErrors())
};
d.prototype.defer=function(g,h){h=f.proxy(h,this,g);
if(!this.options.delay){return h()
}window.clearTimeout(g.data("bs.validator.timeout"));
g.data("bs.validator.timeout",window.setTimeout(h,this.options.delay))
};
d.prototype.reset=function(){this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);
this.$inputs.removeData(["bs.validator.errors","bs.validator.deferred"]).each(function(){var h=f(this);
var g=h.data("bs.validator.timeout");
window.clearTimeout(g)&&h.removeData("bs.validator.timeout")
});
this.$element.find(".help-block.with-errors").each(function(){var h=f(this);
var g=h.data("bs.validator.originalContent");
h.removeData("bs.validator.originalContent").html(g)
});
this.$btn.removeClass("disabled");
this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success");
return this
};
d.prototype.destroy=function(){this.reset();
this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator");
this.$inputs.off(".bs.validator");
this.options=null;
this.validators=null;
this.$element=null;
this.$btn=null;
this.$inputs=null;
return this
};
function e(g){return this.each(function(){var j=f(this);
var h=f.extend({},d.DEFAULTS,j.data(),typeof g=="object"&&g);
var i=j.data("bs.validator");
if(!i&&g=="destroy"){return
}if(!i){j.data("bs.validator",(i=new d(this,h)))
}if(typeof g=="string"){i[g]()
}})
}var b=f.fn.validator;
f.fn.validator=e;
f.fn.validator.Constructor=d;
f.fn.validator.noConflict=function(){f.fn.validator=b;
return this
};
f(window).on("load",function(){f('form[data-toggle="validator"]').each(function(){var g=f(this);
e.call(g,g.data())
})
})
}(jQuery);
/*!
 * Select2 4.0.6-rc.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
;
(function(b){if(typeof define==="function"&&define.amd){define(["jquery"],b)
}else{if(typeof module==="object"&&module.exports){module.exports=function(c,d){if(d===undefined){if(typeof window!=="undefined"){d=require("jquery")
}else{d=require("jquery")(c)
}}b(d);
return d
}
}else{b(jQuery)
}}}(function(d){var c=(function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd){var e=d.fn.select2.amd
}var e;
(function(){if(!e||!e.requirejs){if(!e){e={}
}else{f=e
}var g,f,h;
(function(m){var q,i,w,x,l={},k={},D={},A={},v=Object.prototype.hasOwnProperty,r=[].slice,u=/\.js$/;
function E(F,G){return v.call(F,G)
}function y(I,G){var Q,M,K,N,R,J,T,V,P,O,L,U,S=G&&G.split("/"),H=D.map,F=(H&&H["*"])||{};
if(I){I=I.split("/");
R=I.length-1;
if(D.nodeIdCompat&&u.test(I[R])){I[R]=I[R].replace(u,"")
}if(I[0].charAt(0)==="."&&S){U=S.slice(0,S.length-1);
I=U.concat(I)
}for(P=0;
P<I.length;
P++){L=I[P];
if(L==="."){I.splice(P,1);
P-=1
}else{if(L===".."){if(P===0||(P===1&&I[2]==="..")||I[P-1]===".."){continue
}else{if(P>0){I.splice(P-1,2);
P-=2
}}}}}I=I.join("/")
}if((S||F)&&H){Q=I.split("/");
for(P=Q.length;
P>0;
P-=1){M=Q.slice(0,P).join("/");
if(S){for(O=S.length;
O>0;
O-=1){K=H[S.slice(0,O).join("/")];
if(K){K=K[M];
if(K){N=K;
J=P;
break
}}}}if(N){break
}if(!T&&F&&F[M]){T=F[M];
V=P
}}if(!N&&T){N=T;
J=V
}if(N){Q.splice(0,J,N);
I=Q.join("/")
}}return I
}function C(F,G){return function(){var H=r.call(arguments,0);
if(typeof H[0]!=="string"&&H.length===1){H.push(null)
}return i.apply(m,H.concat([F,G]))
}
}function z(F){return function(G){return y(G,F)
}
}function o(F){return function(G){l[F]=G
}
}function p(G){if(E(k,G)){var F=k[G];
delete k[G];
A[G]=true;
q.apply(m,F)
}if(!E(l,G)&&!E(A,G)){throw new Error("No "+G)
}return l[G]
}function B(G){var H,F=G?G.indexOf("!"):-1;
if(F>-1){H=G.substring(0,F);
G=G.substring(F+1,G.length)
}return[H,G]
}function t(F){return F?B(F):[]
}w=function(F,I){var G,J=B(F),H=J[0],K=I[1];
F=J[1];
if(H){H=y(H,K);
G=p(H)
}if(H){if(G&&G.normalize){F=G.normalize(F,z(K))
}else{F=y(F,K)
}}else{F=y(F,K);
J=B(F);
H=J[0];
F=J[1];
if(H){G=p(H)
}}return{f:H?H+"!"+F:F,n:F,pr:H,p:G}
};
function j(F){return function(){return(D&&D.config&&D.config[F])||{}
}
}x={require:function(F){return C(F)
},exports:function(F){var G=l[F];
if(typeof G!=="undefined"){return G
}else{return(l[F]={})
}},module:function(F){return{id:F,uri:"",exports:l[F],config:j(F)}
}};
q=function(G,R,Q,P){var K,O,L,F,I,J,M=[],H=typeof Q,N;
P=P||G;
J=t(P);
if(H==="undefined"||H==="function"){R=!R.length&&Q.length?["require","exports","module"]:R;
for(I=0;
I<R.length;
I+=1){F=w(R[I],J);
O=F.f;
if(O==="require"){M[I]=x.require(G)
}else{if(O==="exports"){M[I]=x.exports(G);
N=true
}else{if(O==="module"){K=M[I]=x.module(G)
}else{if(E(l,O)||E(k,O)||E(A,O)){M[I]=p(O)
}else{if(F.p){F.p.load(F.n,C(P,true),o(O),{});
M[I]=l[O]
}else{throw new Error(G+" missing "+O)
}}}}}}L=Q?Q.apply(l[G],M):undefined;
if(G){if(K&&K.exports!==m&&K.exports!==l[G]){l[G]=K.exports
}else{if(L!==m||!N){l[G]=L
}}}}else{if(G){l[G]=Q
}}};
g=f=i=function(I,J,F,G,H){if(typeof I==="string"){if(x[I]){return x[I](J)
}return p(w(I,t(J)).f)
}else{if(!I.splice){D=I;
if(D.deps){i(D.deps,D.callback)
}if(!J){return
}if(J.splice){I=J;
J=F;
F=null
}else{I=m
}}}J=J||function(){};
if(typeof F==="function"){F=G;
G=H
}if(G){q(m,I,J,F)
}else{setTimeout(function(){q(m,I,J,F)
},4)
}return i
};
i.config=function(F){return i(F)
};
g._defined=l;
h=function(F,G,H){if(typeof F!=="string"){throw new Error("See almond README: incorrect module build, no module name")
}if(!G.splice){H=G;
G=[]
}if(!E(l,F)&&!E(k,F)){k[F]=[F,G,H]
}};
h.amd={jQuery:true}
}());
e.requirejs=g;
e.require=f;
e.define=h
}}());
e.define("almond",function(){});
e.define("jquery",[],function(){var f=d||$;
if(f==null&&console&&console.error){console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page.")
}return f
});
e.define("select2/utils",["jquery"],function(i){var h={};
h.Extend=function(p,l){var m={}.hasOwnProperty;
function k(){this.constructor=p
}for(var o in l){if(m.call(l,o)){p[o]=l[o]
}}k.prototype=l.prototype;
p.prototype=new k();
p.__super__=l.prototype;
return p
};
function g(q){var p=q.prototype;
var o=[];
for(var l in p){var k=p[l];
if(typeof k!=="function"){continue
}if(l==="constructor"){continue
}o.push(l)
}return o
}h.Decorate=function(u,t){var r=g(t);
var q=g(u);
function x(){var y=Array.prototype.unshift;
var z=t.prototype.constructor.length;
var m=u.prototype.constructor;
if(z>0){y.call(arguments,u.prototype.constructor);
m=t.prototype.constructor
}m.apply(this,arguments)
}t.displayName=u.displayName;
function k(){this.constructor=x
}x.prototype=new k();
for(var p=0;
p<q.length;
p++){var l=q[p];
x.prototype[l]=u.prototype[l]
}var w=function(m){var y=function(){};
if(m in x.prototype){y=x.prototype[m]
}var z=t.prototype[m];
return function(){var A=Array.prototype.unshift;
A.call(arguments,y);
return z.apply(this,arguments)
}
};
for(var v=0;
v<r.length;
v++){var o=r[v];
x.prototype[o]=w(o)
}return x
};
var f=function(){this.listeners={}
};
f.prototype.on=function(k,l){this.listeners=this.listeners||{};
if(k in this.listeners){this.listeners[k].push(l)
}else{this.listeners[k]=[l]
}};
f.prototype.trigger=function(k){var m=Array.prototype.slice;
var l=m.call(arguments,1);
this.listeners=this.listeners||{};
if(l==null){l=[]
}if(l.length===0){l.push({})
}l[0]._type=k;
if(k in this.listeners){this.invoke(this.listeners[k],m.call(arguments,1))
}if("*" in this.listeners){this.invoke(this.listeners["*"],arguments)
}};
f.prototype.invoke=function(m,o){for(var l=0,k=m.length;
l<k;
l++){m[l].apply(this,o)
}};
h.Observable=f;
h.generateChars=function(o){var m="";
for(var l=0;
l<o;
l++){var k=Math.floor(Math.random()*36);
m+=k.toString(36)
}return m
};
h.bind=function(l,k){return function(){l.apply(k,arguments)
}
};
h._convertData=function(r){for(var q in r){var p=q.split("-");
var l=r;
if(p.length===1){continue
}for(var m=0;
m<p.length;
m++){var o=p[m];
o=o.substring(0,1).toLowerCase()+o.substring(1);
if(!(o in l)){l[o]={}
}if(m==p.length-1){l[o]=r[q]
}l=l[o]
}delete r[q]
}return r
};
h.hasScroll=function(m,p){var o=i(p);
var l=p.style.overflowX;
var k=p.style.overflowY;
if(l===k&&(k==="hidden"||k==="visible")){return false
}if(l==="scroll"||k==="scroll"){return true
}return(o.innerHeight()<p.scrollHeight||o.innerWidth()<p.scrollWidth)
};
h.escapeMarkup=function(k){var l={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};
if(typeof k!=="string"){return k
}return String(k).replace(/[&<>"'\/\\]/g,function(m){return l[m]
})
};
h.appendMany=function(k,m){if(i.fn.jquery.substr(0,3)==="1.7"){var l=i();
i.map(m,function(o){l=l.add(o)
});
m=l
}k.append(m)
};
h.__cache={};
var j=0;
h.GetUniqueElementId=function(k){var l=k.getAttribute("data-select2-id");
if(l==null){if(k.id){l=k.id;
k.setAttribute("data-select2-id",l)
}else{k.setAttribute("data-select2-id",++j);
l=j.toString()
}}return l
};
h.StoreData=function(l,k,m){var o=h.GetUniqueElementId(l);
if(!h.__cache[o]){h.__cache[o]={}
}h.__cache[o][k]=m
};
h.GetData=function(l,k){var m=h.GetUniqueElementId(l);
if(k){if(h.__cache[m]){return h.__cache[m][k]!=null?h.__cache[m][k]:i(l).data(k)
}return i(l).data(k)
}else{return h.__cache[m]
}};
h.RemoveData=function(k){var l=h.GetUniqueElementId(k);
if(h.__cache[l]!=null){delete h.__cache[l]
}};
return h
});
e.define("select2/results",["jquery","./utils"],function(h,g){function f(i,j,k){this.$element=i;
this.data=k;
this.options=j;
f.__super__.constructor.call(this)
}g.Extend(f,g.Observable);
f.prototype.render=function(){var i=h('<ul class="select2-results__options" role="tree"></ul>');
if(this.options.get("multiple")){i.attr("aria-multiselectable","true")
}this.$results=i;
return i
};
f.prototype.clear=function(){this.$results.empty()
};
f.prototype.displayMessage=function(l){var i=this.options.get("escapeMarkup");
this.clear();
this.hideLoading();
var j=h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>');
var k=this.options.get("translations").get(l.message);
j.append(i(k(l.args)));
j[0].className+=" select2-results__message";
this.$results.append(j)
};
f.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()
};
f.prototype.append=function(k){this.hideLoading();
var i=[];
if(k.results==null||k.results.length===0){if(this.$results.children().length===0){this.trigger("results:message",{message:"noResults"})
}return
}k.results=this.sort(k.results);
for(var m=0;
m<k.results.length;
m++){var j=k.results[m];
var l=this.option(j);
i.push(l)
}this.$results.append(i)
};
f.prototype.position=function(i,j){var k=j.find(".select2-results");
k.append(i)
};
f.prototype.sort=function(i){var j=this.options.get("sorter");
return j(i)
};
f.prototype.highlightFirstItem=function(){var i=this.$results.find(".select2-results__option[aria-selected]");
var j=i.filter("[aria-selected=true]");
if(j.length>0){j.first().trigger("mouseenter")
}else{i.first().trigger("mouseenter")
}this.ensureHighlightVisible()
};
f.prototype.setClasses=function(){var i=this;
this.data.current(function(l){var k=h.map(l,function(m){return m.id.toString()
});
var j=i.$results.find(".select2-results__option[aria-selected]");
j.each(function(){var o=h(this);
var m=g.GetData(this,"data");
var p=""+m.id;
if((m.element!=null&&m.element.selected)||(m.element==null&&h.inArray(p,k)>-1)){o.attr("aria-selected","true")
}else{o.attr("aria-selected","false")
}})
})
};
f.prototype.showLoading=function(k){this.hideLoading();
var j=this.options.get("translations").get("searching");
var l={disabled:true,loading:true,text:j(k)};
var i=this.option(l);
i.className+=" loading-results";
this.$results.prepend(i)
};
f.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()
};
f.prototype.option=function(m){var o=document.createElement("li");
o.className="select2-results__option";
var w={role:"treeitem","aria-selected":"false"};
if(m.disabled){delete w["aria-selected"];
w["aria-disabled"]="true"
}if(m.id==null){delete w["aria-selected"]
}if(m._resultId!=null){o.id=m._resultId
}if(m.title){o.title=m.title
}if(m.children){w.role="group";
w["aria-label"]=m.text;
delete w["aria-selected"]
}for(var p in w){var l=w[p];
o.setAttribute(p,l)
}if(m.children){var i=h(o);
var u=document.createElement("strong");
u.className="select2-results__group";
var t=h(u);
this.template(m,u);
var v=[];
for(var r=0;
r<m.children.length;
r++){var k=m.children[r];
var j=this.option(k);
v.push(j)
}var q=h("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});
q.append(v);
i.append(u);
i.append(q)
}else{this.template(m,o)
}g.StoreData(o,"data",m);
return o
};
f.prototype.bind=function(i,k){var j=this;
var l=i.id+"-results";
this.$results.attr("id",l);
i.on("results:all",function(m){j.clear();
j.append(m.data);
if(i.isOpen()){j.setClasses();
j.highlightFirstItem()
}});
i.on("results:append",function(m){j.append(m.data);
if(i.isOpen()){j.setClasses()
}});
i.on("query",function(m){j.hideMessages();
j.showLoading(m)
});
i.on("select",function(){if(!i.isOpen()){return
}j.setClasses();
j.highlightFirstItem()
});
i.on("unselect",function(){if(!i.isOpen()){return
}j.setClasses();
j.highlightFirstItem()
});
i.on("open",function(){j.$results.attr("aria-expanded","true");
j.$results.attr("aria-hidden","false");
j.setClasses();
j.ensureHighlightVisible()
});
i.on("close",function(){j.$results.attr("aria-expanded","false");
j.$results.attr("aria-hidden","true");
j.$results.removeAttr("aria-activedescendant")
});
i.on("results:toggle",function(){var m=j.getHighlightedResults();
if(m.length===0){return
}m.trigger("mouseup")
});
i.on("results:select",function(){var m=j.getHighlightedResults();
if(m.length===0){return
}var o=g.GetData(m[0],"data");
if(m.attr("aria-selected")=="true"){j.trigger("close",{})
}else{j.trigger("select",{data:o})
}});
i.on("results:previous",function(){var p=j.getHighlightedResults();
var o=j.$results.find("[aria-selected]");
var r=o.index(p);
if(r<=0){return
}var m=r-1;
if(p.length===0){m=0
}var q=o.eq(m);
q.trigger("mouseenter");
var v=j.$results.offset().top;
var u=q.offset().top;
var t=j.$results.scrollTop()+(u-v);
if(m===0){j.$results.scrollTop(0)
}else{if(u-v<0){j.$results.scrollTop(t)
}}});
i.on("results:next",function(){var p=j.getHighlightedResults();
var o=j.$results.find("[aria-selected]");
var r=o.index(p);
var m=r+1;
if(m>=o.length){return
}var q=o.eq(m);
q.trigger("mouseenter");
var v=j.$results.offset().top+j.$results.outerHeight(false);
var u=q.offset().top+q.outerHeight(false);
var t=j.$results.scrollTop()+u-v;
if(m===0){j.$results.scrollTop(0)
}else{if(u>v){j.$results.scrollTop(t)
}}});
i.on("results:focus",function(m){m.element.addClass("select2-results__option--highlighted")
});
i.on("results:message",function(m){j.displayMessage(m)
});
if(h.fn.mousewheel){this.$results.on("mousewheel",function(q){var p=j.$results.scrollTop();
var m=j.$results.get(0).scrollHeight-p+q.deltaY;
var r=q.deltaY>0&&p-q.deltaY<=0;
var o=q.deltaY<0&&m<=j.$results.height();
if(r){j.$results.scrollTop(0);
q.preventDefault();
q.stopPropagation()
}else{if(o){j.$results.scrollTop(j.$results.get(0).scrollHeight-j.$results.height());
q.preventDefault();
q.stopPropagation()
}}})
}this.$results.on("mouseup",".select2-results__option[aria-selected]",function(m){var p=h(this);
var o=g.GetData(this,"data");
if(p.attr("aria-selected")==="true"){if(j.options.get("multiple")){j.trigger("unselect",{originalEvent:m,data:o})
}else{j.trigger("close",{})
}return
}j.trigger("select",{originalEvent:m,data:o})
});
this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(m){var o=g.GetData(this,"data");
j.getHighlightedResults().removeClass("select2-results__option--highlighted");
j.trigger("results:focus",{data:o,element:h(this)})
})
};
f.prototype.getHighlightedResults=function(){var i=this.$results.find(".select2-results__option--highlighted");
return i
};
f.prototype.destroy=function(){this.$results.remove()
};
f.prototype.ensureHighlightVisible=function(){var j=this.getHighlightedResults();
if(j.length===0){return
}var i=this.$results.find("[aria-selected]");
var k=i.index(j);
var o=this.$results.offset().top;
var m=j.offset().top;
var l=this.$results.scrollTop()+(m-o);
var p=m-o;
l-=j.outerHeight(false)*2;
if(k<=2){this.$results.scrollTop(0)
}else{if(p>this.$results.outerHeight()||p<0){this.$results.scrollTop(l)
}}};
f.prototype.template=function(j,k){var l=this.options.get("templateResult");
var i=this.options.get("escapeMarkup");
var m=l(j,k);
if(m==null){k.style.display="none"
}else{if(typeof m==="string"){k.innerHTML=i(m)
}else{h(k).append(m)
}}};
return f
});
e.define("select2/keys",[],function(){var f={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};
return f
});
e.define("select2/selection/base",["jquery","../utils","../keys"],function(i,h,f){function g(j,k){this.$element=j;
this.options=k;
g.__super__.constructor.call(this)
}h.Extend(g,h.Observable);
g.prototype.render=function(){var j=i('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
this._tabindex=0;
if(h.GetData(this.$element[0],"old-tabindex")!=null){this._tabindex=h.GetData(this.$element[0],"old-tabindex")
}else{if(this.$element.attr("tabindex")!=null){this._tabindex=this.$element.attr("tabindex")
}}j.attr("title",this.$element.attr("title"));
j.attr("tabindex",this._tabindex);
this.$selection=j;
return j
};
g.prototype.bind=function(j,m){var l=this;
var o=j.id+"-container";
var k=j.id+"-results";
this.container=j;
this.$selection.on("focus",function(p){l.trigger("focus",p)
});
this.$selection.on("blur",function(p){l._handleBlur(p)
});
this.$selection.on("keydown",function(p){l.trigger("keypress",p);
if(p.which===f.SPACE){p.preventDefault()
}});
j.on("results:focus",function(p){l.$selection.attr("aria-activedescendant",p.data._resultId)
});
j.on("selection:update",function(p){l.update(p.data)
});
j.on("open",function(){l.$selection.attr("aria-expanded","true");
l.$selection.attr("aria-owns",k);
l._attachCloseHandler(j)
});
j.on("close",function(){l.$selection.attr("aria-expanded","false");
l.$selection.removeAttr("aria-activedescendant");
l.$selection.removeAttr("aria-owns");
l.$selection.focus();
window.setTimeout(function(){l.$selection.focus()
},0);
l._detachCloseHandler(j)
});
j.on("enable",function(){l.$selection.attr("tabindex",l._tabindex)
});
j.on("disable",function(){l.$selection.attr("tabindex","-1")
})
};
g.prototype._handleBlur=function(j){var k=this;
window.setTimeout(function(){if((document.activeElement==k.$selection[0])||(i.contains(k.$selection[0],document.activeElement))){return
}k.trigger("blur",j)
},1)
};
g.prototype._attachCloseHandler=function(j){var k=this;
i(document.body).on("mousedown.select2."+j.id,function(p){var l=i(p.target);
var m=l.closest(".select2");
var o=i(".select2.select2-container--open");
o.each(function(){var r=i(this);
if(this==m[0]){return
}var q=h.GetData(this,"element");
q.select2("close")
})
})
};
g.prototype._detachCloseHandler=function(j){i(document.body).off("mousedown.select2."+j.id)
};
g.prototype.position=function(j,l){var k=l.find(".selection");
k.append(j)
};
g.prototype.destroy=function(){this._detachCloseHandler(this.container)
};
g.prototype.update=function(j){throw new Error("The `update` method must be defined in child classes.")
};
return g
});
e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(i,g,h,f){function j(){j.__super__.constructor.apply(this,arguments)
}h.Extend(j,g);
j.prototype.render=function(){var k=j.__super__.render.call(this);
k.addClass("select2-selection--single");
k.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>');
return k
};
j.prototype.bind=function(k,m){var l=this;
j.__super__.bind.apply(this,arguments);
var o=k.id+"-container";
this.$selection.find(".select2-selection__rendered").attr("id",o).attr("role","textbox").attr("aria-readonly","true");
this.$selection.attr("aria-labelledby",o);
this.$selection.on("mousedown",function(p){if(p.which!==1){return
}l.trigger("toggle",{originalEvent:p})
});
this.$selection.on("focus",function(p){});
this.$selection.on("blur",function(p){});
k.on("focus",function(p){if(!k.isOpen()){l.$selection.focus()
}})
};
j.prototype.clear=function(){var k=this.$selection.find(".select2-selection__rendered");
k.empty();
k.removeAttr("title")
};
j.prototype.display=function(o,l){var m=this.options.get("templateSelection");
var k=this.options.get("escapeMarkup");
return k(m(o,l))
};
j.prototype.selectionContainer=function(){return i("<span></span>")
};
j.prototype.update=function(m){if(m.length===0){this.clear();
return
}var k=m[0];
var o=this.$selection.find(".select2-selection__rendered");
var l=this.display(k,o);
o.empty().append(l);
o.attr("title",k.title||k.text)
};
return j
});
e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,f,h){function g(j,k){g.__super__.constructor.apply(this,arguments)
}h.Extend(g,f);
g.prototype.render=function(){var j=g.__super__.render.call(this);
j.addClass("select2-selection--multiple");
j.html('<ul class="select2-selection__rendered"></ul>');
return j
};
g.prototype.bind=function(j,l){var k=this;
g.__super__.bind.apply(this,arguments);
this.$selection.on("click",function(m){k.trigger("toggle",{originalEvent:m})
});
this.$selection.on("click",".select2-selection__choice__remove",function(o){if(k.options.get("disabled")){return
}var p=i(this);
var m=p.parent();
var q=h.GetData(m[0],"data");
k.trigger("unselect",{originalEvent:o,data:q})
})
};
g.prototype.clear=function(){var j=this.$selection.find(".select2-selection__rendered");
j.empty();
j.removeAttr("title")
};
g.prototype.display=function(m,k){var l=this.options.get("templateSelection");
var j=this.options.get("escapeMarkup");
return j(l(m,k))
};
g.prototype.selectionContainer=function(){var j=i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
return j
};
g.prototype.update=function(o){this.clear();
if(o.length===0){return
}var k=[];
for(var q=0;
q<o.length;
q++){var l=o[q];
var j=this.selectionContainer();
var m=this.display(l,j);
j.append(m);
j.attr("title",l.title||l.text);
h.StoreData(j[0],"data",l);
k.push(j)
}var p=this.$selection.find(".select2-selection__rendered");
h.appendMany(p,k)
};
return g
});
e.define("select2/selection/placeholder",["../utils"],function(g){function f(j,h,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder"));
j.call(this,h,i)
}f.prototype.normalizePlaceholder=function(h,i){if(typeof i==="string"){i={id:"",text:i}
}return i
};
f.prototype.createPlaceholder=function(i,j){var h=this.selectionContainer();
h.html(this.display(j));
h.addClass("select2-selection__placeholder").removeClass("select2-selection__choice");
return h
};
f.prototype.update=function(l,k){var i=(k.length==1&&k[0].id!=this.placeholder.id);
var j=k.length>1;
if(j||i){return l.call(this,k)
}this.clear();
var h=this.createPlaceholder(this.placeholder);
this.$selection.find(".select2-selection__rendered").append(h)
};
return f
});
e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(h,f,g){function i(){}i.prototype.bind=function(l,j,m){var k=this;
l.call(this,j,m);
if(this.placeholder==null){if(this.options.get("debug")&&window.console&&console.error){console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option.")
}}this.$selection.on("mousedown",".select2-selection__clear",function(o){k._handleClear(o)
});
j.on("keypress",function(o){k._handleKeyboardClear(o,j)
})
};
i.prototype._handleClear=function(l,k){if(this.options.get("disabled")){return
}var p=this.$selection.find(".select2-selection__clear");
if(p.length===0){return
}k.stopPropagation();
var o=g.GetData(p[0],"data");
var j=this.$element.val();
this.$element.val(this.placeholder.id);
var m={data:o};
this.trigger("clear",m);
if(m.prevented){this.$element.val(j);
return
}for(var q=0;
q<o.length;
q++){m={data:o[q]};
this.trigger("unselect",m);
if(m.prevented){this.$element.val(j);
return
}}this.$element.trigger("change");
this.trigger("toggle",{})
};
i.prototype._handleKeyboardClear=function(l,k,j){if(j.isOpen()){return
}if(k.which==f.DELETE||k.which==f.BACKSPACE){this._handleClear(k)
}};
i.prototype.update=function(l,k){l.call(this,k);
if(this.$selection.find(".select2-selection__placeholder").length>0||k.length===0){return
}var j=h('<span class="select2-selection__clear">&times;</span>');
g.StoreData(j[0],"data",k);
this.$selection.find(".select2-selection__rendered").prepend(j)
};
return i
});
e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,h,f){function g(l,j,k){l.call(this,j,k)
}g.prototype.render=function(k){var j=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
this.$searchContainer=j;
this.$search=j.find("input");
var l=k.call(this);
this._transferTabIndex();
return l
};
g.prototype.bind=function(o,k,p){var l=this;
o.call(this,k,p);
k.on("open",function(){l.$search.trigger("focus")
});
k.on("close",function(){l.$search.val("");
l.$search.removeAttr("aria-activedescendant");
l.$search.trigger("focus")
});
k.on("enable",function(){l.$search.prop("disabled",false);
l._transferTabIndex()
});
k.on("disable",function(){l.$search.prop("disabled",true)
});
k.on("focus",function(q){l.$search.trigger("focus")
});
k.on("results:focus",function(q){l.$search.attr("aria-activedescendant",q.id)
});
this.$selection.on("focusin",".select2-search--inline",function(q){l.trigger("focus",q)
});
this.$selection.on("focusout",".select2-search--inline",function(q){l._handleBlur(q)
});
this.$selection.on("keydown",".select2-search--inline",function(q){q.stopPropagation();
l.trigger("keypress",q);
l._keyUpPrevented=q.isDefaultPrevented();
var t=q.which;
if(t===f.BACKSPACE&&l.$search.val()===""){var r=l.$searchContainer.prev(".select2-selection__choice");
if(r.length>0){var u=h.GetData(r[0],"data");
l.searchRemoveChoice(u);
q.preventDefault()
}}});
var m=document.documentMode;
var j=m&&m<=11;
this.$selection.on("input.searchcheck",".select2-search--inline",function(q){if(j){l.$selection.off("input.search input.searchcheck");
return
}l.$selection.off("keyup.search")
});
this.$selection.on("keyup.search input.search",".select2-search--inline",function(q){if(j&&q.type==="input"){l.$selection.off("input.search input.searchcheck");
return
}var r=q.which;
if(r==f.SHIFT||r==f.CTRL||r==f.ALT){return
}if(r==f.TAB){return
}l.handleSearch(q)
})
};
g.prototype._transferTabIndex=function(j){this.$search.attr("tabindex",this.$selection.attr("tabindex"));
this.$selection.attr("tabindex","-1")
};
g.prototype.createPlaceholder=function(j,k){this.$search.attr("placeholder",k.text)
};
g.prototype.update=function(m,l){var k=this.$search[0]==document.activeElement;
this.$search.attr("placeholder","");
m.call(this,l);
this.$selection.find(".select2-selection__rendered").append(this.$searchContainer);
this.resizeSearch();
if(k){var j=this.$element.find("[data-select2-tag]").length;
if(j){this.$element.focus()
}else{this.$search.focus()
}}};
g.prototype.handleSearch=function(){this.resizeSearch();
if(!this._keyUpPrevented){var j=this.$search.val();
this.trigger("query",{term:j})
}this._keyUpPrevented=false
};
g.prototype.searchRemoveChoice=function(k,j){this.trigger("unselect",{data:j});
this.$search.val(j.text);
this.handleSearch()
};
g.prototype.resizeSearch=function(){this.$search.css("width","25px");
var j="";
if(this.$search.attr("placeholder")!==""){j=this.$selection.find(".select2-selection__rendered").innerWidth()
}else{var k=this.$search.val().length+1;
j=(k*0.75)+"em"
}this.$search.css("width",j)
};
return g
});
e.define("select2/selection/eventRelay",["jquery"],function(f){function g(){}g.prototype.bind=function(l,h,m){var i=this;
var j=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"];
var k=["opening","closing","selecting","unselecting","clearing"];
l.call(this,h,m);
h.on("*",function(p,q){if(f.inArray(p,j)===-1){return
}q=q||{};
var o=f.Event("select2:"+p,{params:q});
i.$element.trigger(o);
if(f.inArray(p,k)===-1){return
}q.prevented=o.isDefaultPrevented()
})
};
return g
});
e.define("select2/translation",["jquery","require"],function(h,g){function f(i){this.dict=i||{}
}f.prototype.all=function(){return this.dict
};
f.prototype.get=function(i){return this.dict[i]
};
f.prototype.extend=function(i){this.dict=h.extend({},i.all(),this.dict)
};
f._cache={};
f.loadPath=function(j){if(!(j in f._cache)){var i=g(j);
f._cache[j]=i
}return new f(f._cache[j])
};
return f
});
e.define("select2/diacritics",[],function(){var f={"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};
return f
});
e.define("select2/data/base",["../utils"],function(g){function f(h,i){f.__super__.constructor.call(this)
}g.Extend(f,g.Observable);
f.prototype.current=function(h){throw new Error("The `current` method must be defined in child classes.")
};
f.prototype.query=function(h,i){throw new Error("The `query` method must be defined in child classes.")
};
f.prototype.bind=function(h,i){};
f.prototype.destroy=function(){};
f.prototype.generateResultId=function(h,i){var j=h.id+"-result-";
j+=g.generateChars(4);
if(i.id!=null){j+="-"+i.id.toString()
}else{j+="-"+g.generateChars(4)
}return j
};
return f
});
e.define("select2/data/select",["./base","../utils","jquery"],function(f,i,h){function g(j,k){this.$element=j;
this.options=k;
g.__super__.constructor.call(this)
}i.Extend(g,f);
g.prototype.current=function(l){var k=[];
var j=this;
this.$element.find(":selected").each(function(){var o=h(this);
var m=j.item(o);
k.push(m)
});
l(k)
};
g.prototype.select=function(k){var j=this;
k.selected=true;
if(h(k.element).is("option")){k.element.selected=true;
this.$element.trigger("change");
return
}if(this.$element.prop("multiple")){this.current(function(m){var p=[];
k=[k];
k.push.apply(k,m);
for(var o=0;
o<k.length;
o++){var q=k[o].id;
if(h.inArray(q,p)===-1){p.push(q)
}}j.$element.val(p);
j.$element.trigger("change")
})
}else{var l=k.id;
this.$element.val(l);
this.$element.trigger("change")
}};
g.prototype.unselect=function(k){var j=this;
if(!this.$element.prop("multiple")){return
}k.selected=false;
if(h(k.element).is("option")){k.element.selected=false;
this.$element.trigger("change");
return
}this.current(function(l){var o=[];
for(var m=0;
m<l.length;
m++){var p=l[m].id;
if(p!==k.id&&h.inArray(p,o)===-1){o.push(p)
}}j.$element.val(o);
j.$element.trigger("change")
})
};
g.prototype.bind=function(j,l){var k=this;
this.container=j;
j.on("select",function(m){k.select(m.data)
});
j.on("unselect",function(m){k.unselect(m.data)
})
};
g.prototype.destroy=function(){this.$element.find("*").each(function(){i.RemoveData(this)
})
};
g.prototype.query=function(m,o){var l=[];
var k=this;
var j=this.$element.children();
j.each(function(){var r=h(this);
if(!r.is("option")&&!r.is("optgroup")){return
}var p=k.item(r);
var q=k.matches(m,p);
if(q!==null){l.push(q)
}});
o({results:l})
};
g.prototype.addOptions=function(j){i.appendMany(this.$element,j)
};
g.prototype.option=function(k){var j;
if(k.children){j=document.createElement("optgroup");
j.label=k.text
}else{j=document.createElement("option");
if(j.textContent!==undefined){j.textContent=k.text
}else{j.innerText=k.text
}}if(k.id!==undefined){j.value=k.id
}if(k.disabled){j.disabled=true
}if(k.selected){j.selected=true
}if(k.title){j.title=k.title
}var l=h(j);
var m=this._normalizeItem(k);
m.element=j;
i.StoreData(j,"data",m);
return l
};
g.prototype.item=function(o){var m={};
m=i.GetData(o[0],"data");
if(m!=null){return m
}if(o.is("option")){m={id:o.val(),text:o.text(),disabled:o.prop("disabled"),selected:o.prop("selected"),title:o.prop("title")}
}else{if(o.is("optgroup")){m={text:o.prop("label"),children:[],title:o.prop("title")};
var j=o.children("option");
var k=[];
for(var q=0;
q<j.length;
q++){var l=h(j[q]);
var p=this.item(l);
k.push(p)
}m.children=k
}}m=this._normalizeItem(m);
m.element=o[0];
i.StoreData(o[0],"data",m);
return m
};
g.prototype._normalizeItem=function(j){if(j!==Object(j)){j={id:j,text:j}
}j=h.extend({},{text:""},j);
var k={selected:false,disabled:false};
if(j.id!=null){j.id=j.id.toString()
}if(j.text!=null){j.text=j.text.toString()
}if(j._resultId==null&&j.id&&this.container!=null){j._resultId=this.generateResultId(this.container,j)
}return h.extend({},k,j)
};
g.prototype.matches=function(l,j){var k=this.options.get("matcher");
return k(l,j)
};
return g
});
e.define("select2/data/array",["./select","../utils","jquery"],function(f,h,g){function i(j,k){var l=k.get("data")||[];
i.__super__.constructor.call(this,j,k);
this.addOptions(this.convertToOptions(l))
}h.Extend(i,f);
i.prototype.select=function(j){var k=this.$element.find("option").filter(function(l,m){return m.value==j.id.toString()
});
if(k.length===0){k=this.option(j);
this.addOptions(k)
}i.__super__.select.call(this,j)
};
i.prototype.convertToOptions=function(l){var x=this;
var p=this.$element.find("option");
var k=p.map(function(){return x.item(g(this)).id
}).get();
var o=[];
function u(z){return function(){return g(this).val()==z.id
}
}for(var t=0;
t<l.length;
t++){var w=this._normalizeItem(l[t]);
if(g.inArray(w.id,k)>=0){var q=p.filter(u(w));
var r=this.item(q);
var y=g.extend(true,{},w,r);
var m=this.option(y);
q.replaceWith(m);
continue
}var j=this.option(w);
if(w.children){var v=this.convertToOptions(w.children);
h.appendMany(j,v)
}o.push(j)
}return o
};
return i
});
e.define("select2/data/ajax",["./array","../utils","jquery"],function(i,h,g){function f(j,k){this.ajaxOptions=this._applyDefaults(k.get("ajax"));
if(this.ajaxOptions.processResults!=null){this.processResults=this.ajaxOptions.processResults
}f.__super__.constructor.call(this,j,k)
}h.Extend(f,i);
f.prototype._applyDefaults=function(j){var k={data:function(l){return g.extend({},l,{q:l.term})
},transport:function(p,o,m){var l=g.ajax(p);
l.then(o);
l.fail(m);
return l
}};
return g.extend({},k,j,true)
};
f.prototype.processResults=function(j){return j
};
f.prototype.query=function(o,p){var m=[];
var j=this;
if(this._request!=null){if(g.isFunction(this._request.abort)){this._request.abort()
}this._request=null
}var k=g.extend({type:"GET"},this.ajaxOptions);
if(typeof k.url==="function"){k.url=k.url.call(this.$element,o)
}if(typeof k.data==="function"){k.data=k.data.call(this.$element,o)
}function l(){var q=k.transport(k,function(t){var r=j.processResults(t,o);
if(j.options.get("debug")&&window.console&&console.error){if(!r||!r.results||!g.isArray(r.results)){console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")
}}p(r)
},function(){if("status" in q&&(q.status===0||q.status==="0")){return
}j.trigger("results:message",{message:"errorLoading"})
});
j._request=q
}if(this.ajaxOptions.delay&&o.term!=null){if(this._queryTimeout){window.clearTimeout(this._queryTimeout)
}this._queryTimeout=window.setTimeout(l,this.ajaxOptions.delay)
}else{l()
}};
return f
});
e.define("select2/data/tags",["jquery"],function(g){function f(i,l,p){var q=p.get("tags");
var j=p.get("createTag");
if(j!==undefined){this.createTag=j
}var k=p.get("insertTag");
if(k!==undefined){this.insertTag=k
}i.call(this,l,p);
if(g.isArray(q)){for(var o=0;
o<q.length;
o++){var r=q[o];
var m=this._normalizeItem(r);
var h=this.option(m);
this.$element.append(h)
}}}f.prototype.query=function(i,j,l){var h=this;
this._removeOldTags();
if(j.term==null||j.page!=null){i.call(this,j,l);
return
}function k(t,o){var u=t.results;
for(var v=0;
v<u.length;
v++){var w=u[v];
var q=(w.children!=null&&!k({results:w.children},true));
var x=(w.text||"").toUpperCase();
var p=(j.term||"").toUpperCase();
var r=x===p;
if(r||q){if(o){return false
}t.data=u;
l(t);
return
}}if(o){return true
}var y=h.createTag(j);
if(y!=null){var m=h.option(y);
m.attr("data-select2-tag",true);
h.addOptions([m]);
h.insertTag(u,y)
}t.results=u;
l(t)
}i.call(this,j,k)
};
f.prototype.createTag=function(i,j){var h=g.trim(j.term);
if(h===""){return null
}return{id:h,text:h}
};
f.prototype.insertTag=function(i,j,h){j.unshift(h)
};
f.prototype._removeOldTags=function(j){var i=this._lastTag;
var h=this.$element.find("option[data-select2-tag]");
h.each(function(){if(this.selected){return
}g(this).remove()
})
};
return f
});
e.define("select2/data/tokenizer",["jquery"],function(g){function f(k,h,i){var j=i.get("tokenizer");
if(j!==undefined){this.tokenizer=j
}k.call(this,h,i)
}f.prototype.bind=function(i,h,j){i.call(this,h,j);
this.$search=h.dropdown.$search||h.selection.$search||j.find(".select2-search__field")
};
f.prototype.query=function(k,l,o){var j=this;
function i(q){var p=j._normalizeItem(q);
var t=j.$element.find("option").filter(function(){return g(this).val()===p.id
});
if(!t.length){var r=j.option(p);
r.attr("data-select2-tag",true);
j._removeOldTags();
j.addOptions([r])
}h(p)
}function h(p){j.trigger("select",{data:p})
}l.term=l.term||"";
var m=this.tokenizer(l,this.options,i);
if(m.term!==l.term){if(this.$search.length){this.$search.val(m.term);
this.$search.focus()
}l.term=m.term
}k.call(this,l,o)
};
f.prototype.tokenizer=function(q,k,v,u){var l=v.get("tokenSeparators")||[];
var j=k.term;
var o=0;
var p=this.createTag||function(i){return{id:i.term,text:i.term}
};
while(o<j.length){var t=j[o];
if(g.inArray(t,l)===-1){o++;
continue
}var h=j.substr(0,o);
var r=g.extend({},k,{term:h});
var m=p(r);
if(m==null){o++;
continue
}u(m);
j=j.substr(o+1)||"";
o=0
}return{term:j}
};
return f
});
e.define("select2/data/minimumInputLength",[],function(){function f(i,h,g){this.minimumInputLength=g.get("minimumInputLength");
i.call(this,h,g)
}f.prototype.query=function(g,h,i){h.term=h.term||"";
if(h.term.length<this.minimumInputLength){this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:h.term,params:h}});
return
}g.call(this,h,i)
};
return f
});
e.define("select2/data/maximumInputLength",[],function(){function f(i,h,g){this.maximumInputLength=g.get("maximumInputLength");
i.call(this,h,g)
}f.prototype.query=function(g,h,i){h.term=h.term||"";
if(this.maximumInputLength>0&&h.term.length>this.maximumInputLength){this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:h.term,params:h}});
return
}g.call(this,h,i)
};
return f
});
e.define("select2/data/maximumSelectionLength",[],function(){function f(i,h,g){this.maximumSelectionLength=g.get("maximumSelectionLength");
i.call(this,h,g)
}f.prototype.query=function(h,i,j){var g=this;
this.current(function(k){var l=k!=null?k.length:0;
if(g.maximumSelectionLength>0&&l>=g.maximumSelectionLength){g.trigger("results:message",{message:"maximumSelected",args:{maximum:g.maximumSelectionLength}});
return
}h.call(g,i,j)
})
};
return f
});
e.define("select2/dropdown",["jquery","./utils"],function(h,g){function f(i,j){this.$element=i;
this.options=j;
f.__super__.constructor.call(this)
}g.Extend(f,g.Observable);
f.prototype.render=function(){var i=h('<span class="select2-dropdown"><span class="select2-results"></span></span>');
i.attr("dir",this.options.get("dir"));
this.$dropdown=i;
return i
};
f.prototype.bind=function(){};
f.prototype.position=function(i,j){};
f.prototype.destroy=function(){this.$dropdown.remove()
};
return f
});
e.define("select2/dropdown/search",["jquery","../utils"],function(h,g){function f(){}f.prototype.render=function(j){var k=j.call(this);
var i=h('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
this.$searchContainer=i;
this.$search=i.find("input");
k.prepend(i);
return k
};
f.prototype.bind=function(k,i,l){var j=this;
k.call(this,i,l);
this.$search.on("keydown",function(m){j.trigger("keypress",m);
j._keyUpPrevented=m.isDefaultPrevented()
});
this.$search.on("input",function(m){h(this).off("keyup")
});
this.$search.on("keyup input",function(m){j.handleSearch(m)
});
i.on("open",function(){j.$search.attr("tabindex",0);
j.$search.focus();
window.setTimeout(function(){j.$search.focus()
},0)
});
i.on("close",function(){j.$search.attr("tabindex",-1);
j.$search.val("");
j.$search.blur()
});
i.on("focus",function(){if(!i.isOpen()){j.$search.focus()
}});
i.on("results:all",function(o){if(o.query.term==null||o.query.term===""){var m=j.showSearch(o);
if(m){j.$searchContainer.removeClass("select2-search--hide")
}else{j.$searchContainer.addClass("select2-search--hide")
}}})
};
f.prototype.handleSearch=function(i){if(!this._keyUpPrevented){var j=this.$search.val();
this.trigger("query",{term:j})
}this._keyUpPrevented=false
};
f.prototype.showSearch=function(i,j){return true
};
return f
});
e.define("select2/dropdown/hidePlaceholder",[],function(){function f(i,g,h,j){this.placeholder=this.normalizePlaceholder(h.get("placeholder"));
i.call(this,g,h,j)
}f.prototype.append=function(h,g){g.results=this.removePlaceholder(g.results);
h.call(this,g)
};
f.prototype.normalizePlaceholder=function(g,h){if(typeof h==="string"){h={id:"",text:h}
}return h
};
f.prototype.removePlaceholder=function(g,j){var i=j.slice(0);
for(var k=j.length-1;
k>=0;
k--){var h=j[k];
if(this.placeholder.id===h.id){i.splice(k,1)
}}return i
};
return f
});
e.define("select2/dropdown/infiniteScroll",["jquery"],function(g){function f(j,h,i,k){this.lastParams={};
j.call(this,h,i,k);
this.$loadingMore=this.createLoadingMore();
this.loading=false
}f.prototype.append=function(i,h){this.$loadingMore.remove();
this.loading=false;
i.call(this,h);
if(this.showLoadingMore(h)){this.$results.append(this.$loadingMore)
}};
f.prototype.bind=function(j,h,k){var i=this;
j.call(this,h,k);
h.on("query",function(l){i.lastParams=l;
i.loading=true
});
h.on("query:append",function(l){i.lastParams=l;
i.loading=true
});
this.$results.on("scroll",function(){var o=g.contains(document.documentElement,i.$loadingMore[0]);
if(i.loading||!o){return
}var m=i.$results.offset().top+i.$results.outerHeight(false);
var l=i.$loadingMore.offset().top+i.$loadingMore.outerHeight(false);
if(m+50>=l){i.loadMore()
}})
};
f.prototype.loadMore=function(){this.loading=true;
var h=g.extend({},{page:1},this.lastParams);
h.page++;
this.trigger("query:append",h)
};
f.prototype.showLoadingMore=function(h,i){return i.pagination&&i.pagination.more
};
f.prototype.createLoadingMore=function(){var i=g('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>');
var h=this.options.get("translations").get("loadingMore");
i.html(h(this.lastParams));
return i
};
return f
});
e.define("select2/dropdown/attachBody",["jquery","../utils"],function(h,g){function f(k,i,j){this.$dropdownParent=j.get("dropdownParent")||h(document.body);
k.call(this,i,j)
}f.prototype.bind=function(l,i,m){var k=this;
var j=false;
l.call(this,i,m);
i.on("open",function(){k._showDropdown();
k._attachPositioningHandler(i);
if(!j){j=true;
i.on("results:all",function(){k._positionDropdown();
k._resizeDropdown()
});
i.on("results:append",function(){k._positionDropdown();
k._resizeDropdown()
})
}});
i.on("close",function(){k._hideDropdown();
k._detachPositioningHandler(i)
});
this.$dropdownContainer.on("mousedown",function(o){o.stopPropagation()
})
};
f.prototype.destroy=function(i){i.call(this);
this.$dropdownContainer.remove()
};
f.prototype.position=function(i,j,k){j.attr("class",k.attr("class"));
j.removeClass("select2");
j.addClass("select2-container--open");
j.css({position:"absolute",top:-999999});
this.$container=k
};
f.prototype.render=function(i){var k=h("<span></span>");
var j=i.call(this);
k.append(j);
this.$dropdownContainer=k;
return k
};
f.prototype._hideDropdown=function(i){this.$dropdownContainer.detach()
};
f.prototype._attachPositioningHandler=function(p,i){var j=this;
var l="scroll.select2."+i.id;
var o="resize.select2."+i.id;
var m="orientationchange.select2."+i.id;
var k=this.$container.parents().filter(g.hasScroll);
k.each(function(){g.StoreData(this,"select2-scroll-position",{x:h(this).scrollLeft(),y:h(this).scrollTop()})
});
k.on(l,function(r){var q=g.GetData(this,"select2-scroll-position");
h(this).scrollTop(q.y)
});
h(window).on(l+" "+o+" "+m,function(q){j._positionDropdown();
j._resizeDropdown()
})
};
f.prototype._detachPositioningHandler=function(o,i){var k="scroll.select2."+i.id;
var m="resize.select2."+i.id;
var l="orientationchange.select2."+i.id;
var j=this.$container.parents().filter(g.hasScroll);
j.off(k);
h(window).off(k+" "+m+" "+l)
};
f.prototype._positionDropdown=function(){var l=h(window);
var w=this.$dropdown.hasClass("select2-dropdown--above");
var k=this.$dropdown.hasClass("select2-dropdown--below");
var t=null;
var m=this.$container.offset();
m.bottom=m.top+this.$container.outerHeight(false);
var j={height:this.$container.outerHeight(false)};
j.top=m.top;
j.bottom=m.top+j.height;
var v={height:this.$dropdown.outerHeight(false)};
var q={top:l.scrollTop(),bottom:l.scrollTop()+l.height()};
var p=q.top<(m.top-v.height);
var r=q.bottom>(m.bottom+v.height);
var o={left:m.left,top:j.bottom};
var u=this.$dropdownParent;
if(u.css("position")==="static"){u=u.offsetParent()
}var i=u.offset();
o.top-=i.top;
o.left-=i.left;
if(!w&&!k){t="below"
}if(!r&&p&&!w){t="above"
}else{if(!p&&r&&w){t="below"
}}if(t=="above"||(w&&t!=="below")){o.top=j.top-i.top-v.height
}if(t!=null){this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+t);
this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+t)
}this.$dropdownContainer.css(o)
};
f.prototype._resizeDropdown=function(){var i={width:this.$container.outerWidth(false)+"px"};
if(this.options.get("dropdownAutoWidth")){i.minWidth=i.width;
i.position="relative";
i.width="auto"
}this.$dropdown.css(i)
};
f.prototype._showDropdown=function(i){this.$dropdownContainer.appendTo(this.$dropdownParent);
this._positionDropdown();
this._resizeDropdown()
};
return f
});
e.define("select2/dropdown/minimumResultsForSearch",[],function(){function g(j){var i=0;
for(var k=0;
k<j.length;
k++){var h=j[k];
if(h.children){i+=g(h.children)
}else{i++
}}return i
}function f(j,h,i,k){this.minimumResultsForSearch=i.get("minimumResultsForSearch");
if(this.minimumResultsForSearch<0){this.minimumResultsForSearch=Infinity
}j.call(this,h,i,k)
}f.prototype.showSearch=function(h,i){if(g(i.data.results)<this.minimumResultsForSearch){return false
}return h.call(this,i)
};
return f
});
e.define("select2/dropdown/selectOnClose",["../utils"],function(g){function f(){}f.prototype.bind=function(j,h,k){var i=this;
j.call(this,h,k);
h.on("close",function(l){i._handleSelectOnClose(l)
})
};
f.prototype._handleSelectOnClose=function(i,l){if(l&&l.originalSelect2Event!=null){var j=l.originalSelect2Event;
if(j._type==="select"||j._type==="unselect"){return
}}var h=this.getHighlightedResults();
if(h.length<1){return
}var k=g.GetData(h[0],"data");
if((k.element!=null&&k.element.selected)||(k.element==null&&k.selected)){return
}this.trigger("select",{data:k})
};
return f
});
e.define("select2/dropdown/closeOnSelect",[],function(){function f(){}f.prototype.bind=function(i,g,j){var h=this;
i.call(this,g,j);
g.on("select",function(k){h._selectTriggered(k)
});
g.on("unselect",function(k){h._selectTriggered(k)
})
};
f.prototype._selectTriggered=function(i,h){var g=h.originalEvent;
if(g&&g.ctrlKey){return
}this.trigger("close",{originalEvent:g,originalSelect2Event:h})
};
return f
});
e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."
},inputTooLong:function(f){var h=f.input.length-f.maximum;
var g="Please delete "+h+" character";
if(h!=1){g+="s"
}return g
},inputTooShort:function(f){var h=f.minimum-f.input.length;
var g="Please enter "+h+" or more characters";
return g
},loadingMore:function(){return"Loading more results…"
},maximumSelected:function(f){var g="You can only select "+f.maximum+" item";
if(f.maximum!=1){g+="s"
}return g
},noResults:function(){return"No results found"
},searching:function(){return"Searching…"
}}
});
e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(h,l,H,q,w,J,k,F,I,f,x,L,E,v,g,A,i,G,K,z,D,o,t,C,u,y,m,j,B){function r(){this.reset()
}r.prototype.apply=function(ac){ac=h.extend(true,{},this.defaults,ac);
if(ac.dataAdapter==null){if(ac.ajax!=null){ac.dataAdapter=g
}else{if(ac.data!=null){ac.dataAdapter=v
}else{ac.dataAdapter=E
}}if(ac.minimumInputLength>0){ac.dataAdapter=f.Decorate(ac.dataAdapter,G)
}if(ac.maximumInputLength>0){ac.dataAdapter=f.Decorate(ac.dataAdapter,K)
}if(ac.maximumSelectionLength>0){ac.dataAdapter=f.Decorate(ac.dataAdapter,z)
}if(ac.tags){ac.dataAdapter=f.Decorate(ac.dataAdapter,A)
}if(ac.tokenSeparators!=null||ac.tokenizer!=null){ac.dataAdapter=f.Decorate(ac.dataAdapter,i)
}if(ac.query!=null){var U=l(ac.amdBase+"compat/query");
ac.dataAdapter=f.Decorate(ac.dataAdapter,U)
}if(ac.initSelection!=null){var ab=l(ac.amdBase+"compat/initSelection");
ac.dataAdapter=f.Decorate(ac.dataAdapter,ab)
}}if(ac.resultsAdapter==null){ac.resultsAdapter=H;
if(ac.ajax!=null){ac.resultsAdapter=f.Decorate(ac.resultsAdapter,C)
}if(ac.placeholder!=null){ac.resultsAdapter=f.Decorate(ac.resultsAdapter,t)
}if(ac.selectOnClose){ac.resultsAdapter=f.Decorate(ac.resultsAdapter,m)
}}if(ac.dropdownAdapter==null){if(ac.multiple){ac.dropdownAdapter=D
}else{var O=f.Decorate(D,o);
ac.dropdownAdapter=O
}if(ac.minimumResultsForSearch!==0){ac.dropdownAdapter=f.Decorate(ac.dropdownAdapter,y)
}if(ac.closeOnSelect){ac.dropdownAdapter=f.Decorate(ac.dropdownAdapter,j)
}if(ac.dropdownCssClass!=null||ac.dropdownCss!=null||ac.adaptDropdownCssClass!=null){var N=l(ac.amdBase+"compat/dropdownCss");
ac.dropdownAdapter=f.Decorate(ac.dropdownAdapter,N)
}ac.dropdownAdapter=f.Decorate(ac.dropdownAdapter,u)
}if(ac.selectionAdapter==null){if(ac.multiple){ac.selectionAdapter=w
}else{ac.selectionAdapter=q
}if(ac.placeholder!=null){ac.selectionAdapter=f.Decorate(ac.selectionAdapter,J)
}if(ac.allowClear){ac.selectionAdapter=f.Decorate(ac.selectionAdapter,k)
}if(ac.multiple){ac.selectionAdapter=f.Decorate(ac.selectionAdapter,F)
}if(ac.containerCssClass!=null||ac.containerCss!=null||ac.adaptContainerCssClass!=null){var W=l(ac.amdBase+"compat/containerCss");
ac.selectionAdapter=f.Decorate(ac.selectionAdapter,W)
}ac.selectionAdapter=f.Decorate(ac.selectionAdapter,I)
}if(typeof ac.language==="string"){if(ac.language.indexOf("-")>0){var R=ac.language.split("-");
var T=R[0];
ac.language=[ac.language,T]
}else{ac.language=[ac.language]
}}if(h.isArray(ac.language)){var Q=new x();
ac.language.push("en");
var Z=ac.language;
for(var P=0;
P<Z.length;
P++){var M=Z[P];
var S={};
try{S=x.loadPath(M)
}catch(V){try{M=this.defaults.amdLanguageBase+M;
S=x.loadPath(M)
}catch(Y){if(ac.debug&&window.console&&console.warn){console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.')
}continue
}}Q.extend(S)
}ac.translations=Q
}else{var X=x.loadPath(this.defaults.amdLanguageBase+"en");
var aa=new x(ac.language);
aa.extend(X);
ac.translations=aa
}return ac
};
r.prototype.reset=function(){function N(P){function O(Q){return L[Q]||Q
}return P.replace(/[^\u0000-\u007E]/g,O)
}function M(T,S){if(h.trim(T.term)===""){return S
}if(S.children&&S.children.length>0){var O=h.extend(true,{},S);
for(var V=S.children.length-1;
V>=0;
V--){var U=S.children[V];
var R=M(T,U);
if(R==null){O.children.splice(V,1)
}}if(O.children.length>0){return O
}return M(T,O)
}var Q=N(S.text).toUpperCase();
var P=N(T.term).toUpperCase();
if(Q.indexOf(P)>-1){return S
}return null
}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:true,debug:false,dropdownAutoWidth:false,escapeMarkup:f.escapeMarkup,language:B,matcher:M,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:false,sorter:function(O){return O
},templateResult:function(O){return O.text
},templateSelection:function(O){return O.text
},theme:"default",width:"resolve"}
};
r.prototype.set=function(N,P){var M=h.camelCase(N);
var O={};
O[M]=P;
var Q=f._convertData(O);
h.extend(true,this.defaults,Q)
};
var p=new r();
return p
});
e.define("select2/options",["require","jquery","./defaults","./utils"],function(g,i,j,h){function f(m,k){this.options=m;
if(k!=null){this.fromElement(k)
}this.options=j.apply(this.options);
if(k&&k.is("input")){var l=g(this.get("amdBase")+"compat/inputData");
this.options.dataAdapter=h.Decorate(this.options.dataAdapter,l)
}}f.prototype.fromElement=function(k){var m=["select2"];
if(this.options.multiple==null){this.options.multiple=k.prop("multiple")
}if(this.options.disabled==null){this.options.disabled=k.prop("disabled")
}if(this.options.language==null){if(k.prop("lang")){this.options.language=k.prop("lang").toLowerCase()
}else{if(k.closest("[lang]").prop("lang")){this.options.language=k.closest("[lang]").prop("lang")
}}}if(this.options.dir==null){if(k.prop("dir")){this.options.dir=k.prop("dir")
}else{if(k.closest("[dir]").prop("dir")){this.options.dir=k.closest("[dir]").prop("dir")
}else{this.options.dir="ltr"
}}}k.prop("disabled",this.options.disabled);
k.prop("multiple",this.options.multiple);
if(h.GetData(k[0],"select2Tags")){if(this.options.debug&&window.console&&console.warn){console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.')
}h.StoreData(k[0],"data",h.GetData(k[0],"select2Tags"));
h.StoreData(k[0],"tags",true)
}if(h.GetData(k[0],"ajaxUrl")){if(this.options.debug&&window.console&&console.warn){console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2.")
}k.attr("ajax--url",h.GetData(k[0],"ajaxUrl"));
h.StoreData(k[0],"ajax-Url",h.GetData(k[0],"ajaxUrl"))
}var p={};
if(i.fn.jquery&&i.fn.jquery.substr(0,2)=="1."&&k[0].dataset){p=i.extend(true,{},k[0].dataset,h.GetData(k[0]))
}else{p=h.GetData(k[0])
}var o=i.extend(true,{},p);
o=h._convertData(o);
for(var l in o){if(i.inArray(l,m)>-1){continue
}if(i.isPlainObject(this.options[l])){i.extend(this.options[l],o[l])
}else{this.options[l]=o[l]
}}return this
};
f.prototype.get=function(k){return this.options[k]
};
f.prototype.set=function(k,l){this.options[k]=l
};
return f
});
e.define("select2/core",["jquery","./options","./utils","./keys"],function(j,h,i,f){var g=function(q,u){if(i.GetData(q[0],"select2")!=null){i.GetData(q[0],"select2").destroy()
}this.$element=q;
this.id=this._generateId(q);
u=u||{};
this.options=new h(u,q);
g.__super__.constructor.call(this);
var o=q.attr("tabindex")||0;
i.StoreData(q[0],"old-tabindex",o);
q.attr("tabindex","-1");
var m=this.options.get("dataAdapter");
this.dataAdapter=new m(q,this.options);
var t=this.render();
this._placeContainer(t);
var p=this.options.get("selectionAdapter");
this.selection=new p(q,this.options);
this.$selection=this.selection.render();
this.selection.position(this.$selection,t);
var k=this.options.get("dropdownAdapter");
this.dropdown=new k(q,this.options);
this.$dropdown=this.dropdown.render();
this.dropdown.position(this.$dropdown,t);
var l=this.options.get("resultsAdapter");
this.results=new l(q,this.options,this.dataAdapter);
this.$results=this.results.render();
this.results.position(this.$results,this.$dropdown);
var r=this;
this._bindAdapters();
this._registerDomEvents();
this._registerDataEvents();
this._registerSelectionEvents();
this._registerDropdownEvents();
this._registerResultsEvents();
this._registerEvents();
this.dataAdapter.current(function(v){r.trigger("selection:update",{data:v})
});
q.addClass("select2-hidden-accessible");
q.attr("aria-hidden","true");
this._syncAttributes();
i.StoreData(q[0],"select2",this);
q.data("select2",this)
};
i.Extend(g,i.Observable);
g.prototype._generateId=function(k){var l="";
if(k.attr("id")!=null){l=k.attr("id")
}else{if(k.attr("name")!=null){l=k.attr("name")+"-"+i.generateChars(2)
}else{l=i.generateChars(4)
}}l=l.replace(/(:|\.|\[|\]|,)/g,"");
l="select2-"+l;
return l
};
g.prototype._placeContainer=function(l){l.insertAfter(this.$element);
var k=this._resolveWidth(this.$element,this.options.get("width"));
if(k!=null){l.css("width",k)
}};
g.prototype._resolveWidth=function(x,k){var v=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
if(k=="resolve"){var p=this._resolveWidth(x,"style");
if(p!=null){return p
}return this._resolveWidth(x,"element")
}if(k=="element"){var u=x.outerWidth(false);
if(u<=0){return"auto"
}return u+"px"
}if(k=="style"){var m=x.attr("style");
if(typeof(m)!=="string"){return null
}var w=m.split(";");
for(var q=0,o=w.length;
q<o;
q=q+1){var t=w[q].replace(/\s/g,"");
var r=t.match(v);
if(r!==null&&r.length>=1){return r[1]
}}return null
}return k
};
g.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container);
this.selection.bind(this,this.$container);
this.dropdown.bind(this,this.$container);
this.results.bind(this,this.$container)
};
g.prototype._registerDomEvents=function(){var l=this;
this.$element.on("change.select2",function(){l.dataAdapter.current(function(m){l.trigger("selection:update",{data:m})
})
});
this.$element.on("focus.select2",function(m){l.trigger("focus",m)
});
this._syncA=i.bind(this._syncAttributes,this);
this._syncS=i.bind(this._syncSubtree,this);
if(this.$element[0].attachEvent){this.$element[0].attachEvent("onpropertychange",this._syncA)
}var k=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;
if(k!=null){this._observer=new k(function(m){j.each(m,l._syncA);
j.each(m,l._syncS)
});
this._observer.observe(this.$element[0],{attributes:true,childList:true,subtree:false})
}else{if(this.$element[0].addEventListener){this.$element[0].addEventListener("DOMAttrModified",l._syncA,false);
this.$element[0].addEventListener("DOMNodeInserted",l._syncS,false);
this.$element[0].addEventListener("DOMNodeRemoved",l._syncS,false)
}}};
g.prototype._registerDataEvents=function(){var k=this;
this.dataAdapter.on("*",function(l,m){k.trigger(l,m)
})
};
g.prototype._registerSelectionEvents=function(){var k=this;
var l=["toggle","focus"];
this.selection.on("toggle",function(){k.toggleDropdown()
});
this.selection.on("focus",function(m){k.focus(m)
});
this.selection.on("*",function(m,o){if(j.inArray(m,l)!==-1){return
}k.trigger(m,o)
})
};
g.prototype._registerDropdownEvents=function(){var k=this;
this.dropdown.on("*",function(l,m){k.trigger(l,m)
})
};
g.prototype._registerResultsEvents=function(){var k=this;
this.results.on("*",function(l,m){k.trigger(l,m)
})
};
g.prototype._registerEvents=function(){var k=this;
this.on("open",function(){k.$container.addClass("select2-container--open")
});
this.on("close",function(){k.$container.removeClass("select2-container--open")
});
this.on("enable",function(){k.$container.removeClass("select2-container--disabled")
});
this.on("disable",function(){k.$container.addClass("select2-container--disabled")
});
this.on("blur",function(){k.$container.removeClass("select2-container--focus")
});
this.on("query",function(l){if(!k.isOpen()){k.trigger("open",{})
}this.dataAdapter.query(l,function(m){k.trigger("results:all",{data:m,query:l})
})
});
this.on("query:append",function(l){this.dataAdapter.query(l,function(m){k.trigger("results:append",{data:m,query:l})
})
});
this.on("keypress",function(l){var m=l.which;
if(k.isOpen()){if(m===f.ESC||m===f.TAB||(m===f.UP&&l.altKey)){k.close();
l.preventDefault()
}else{if(m===f.ENTER){k.trigger("results:select",{});
l.preventDefault()
}else{if((m===f.SPACE&&l.ctrlKey)){k.trigger("results:toggle",{});
l.preventDefault()
}else{if(m===f.UP){k.trigger("results:previous",{});
l.preventDefault()
}else{if(m===f.DOWN){k.trigger("results:next",{});
l.preventDefault()
}}}}}}else{if(m===f.ENTER||m===f.SPACE||(m===f.DOWN&&l.altKey)){k.open();
l.preventDefault()
}}})
};
g.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled"));
if(this.options.get("disabled")){if(this.isOpen()){this.close()
}this.trigger("disable",{})
}else{this.trigger("enable",{})
}};
g.prototype._syncSubtree=function(l,k){var p=false;
var m=this;
if(l&&l.target&&(l.target.nodeName!=="OPTION"&&l.target.nodeName!=="OPTGROUP")){return
}if(!k){p=true
}else{if(k.addedNodes&&k.addedNodes.length>0){for(var q=0;
q<k.addedNodes.length;
q++){var o=k.addedNodes[q];
if(o.selected){p=true
}}}else{if(k.removedNodes&&k.removedNodes.length>0){p=true
}}}if(p){this.dataAdapter.current(function(r){m.trigger("selection:update",{data:r})
})
}};
g.prototype.trigger=function(o,m){var p=g.__super__.trigger;
var q={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};
if(m===undefined){m={}
}if(o in q){var l=q[o];
var k={prevented:false,name:o,args:m};
p.call(this,l,k);
if(k.prevented){m.prevented=true;
return
}}p.call(this,o,m)
};
g.prototype.toggleDropdown=function(){if(this.options.get("disabled")){return
}if(this.isOpen()){this.close()
}else{this.open()
}};
g.prototype.open=function(){if(this.isOpen()){return
}this.trigger("query",{})
};
g.prototype.close=function(){if(!this.isOpen()){return
}this.trigger("close",{})
};
g.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")
};
g.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")
};
g.prototype.focus=function(k){if(this.hasFocus()){return
}this.$container.addClass("select2-container--focus");
this.trigger("focus",{})
};
g.prototype.enable=function(k){if(this.options.get("debug")&&window.console&&console.warn){console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.')
}if(k==null||k.length===0){k=[true]
}var l=!k[0];
this.$element.prop("disabled",l)
};
g.prototype.data=function(){if(this.options.get("debug")&&arguments.length>0&&window.console&&console.warn){console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.')
}var k=[];
this.dataAdapter.current(function(l){k=l
});
return k
};
g.prototype.val=function(l){if(this.options.get("debug")&&window.console&&console.warn){console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.')
}if(l==null||l.length===0){return this.$element.val()
}var k=l[0];
if(j.isArray(k)){k=j.map(k,function(m){return m.toString()
})
}this.$element.val(k).trigger("change")
};
g.prototype.destroy=function(){this.$container.remove();
if(this.$element[0].detachEvent){this.$element[0].detachEvent("onpropertychange",this._syncA)
}if(this._observer!=null){this._observer.disconnect();
this._observer=null
}else{if(this.$element[0].removeEventListener){this.$element[0].removeEventListener("DOMAttrModified",this._syncA,false);
this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,false);
this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,false)
}}this._syncA=null;
this._syncS=null;
this.$element.off(".select2");
this.$element.attr("tabindex",i.GetData(this.$element[0],"old-tabindex"));
this.$element.removeClass("select2-hidden-accessible");
this.$element.attr("aria-hidden","false");
i.RemoveData(this.$element[0]);
this.$element.removeData("select2");
this.dataAdapter.destroy();
this.selection.destroy();
this.dropdown.destroy();
this.results.destroy();
this.dataAdapter=null;
this.selection=null;
this.dropdown=null;
this.results=null
};
g.prototype.render=function(){var k=j('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
k.attr("dir",this.options.get("dir"));
this.$container=k;
this.$container.addClass("select2-container--"+this.options.get("theme"));
i.StoreData(k[0],"element",this.$element);
return k
};
return g
});
e.define("jquery-mousewheel",["jquery"],function(f){return f
});
e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(j,h,f,k,i){if(j.fn.select2==null){var g=["open","close","destroy"];
j.fn.select2=function(o){o=o||{};
if(typeof o==="object"){this.each(function(){var q=j.extend(true,{},o);
var p=new f(j(this),q)
});
return this
}else{if(typeof o==="string"){var m;
var l=Array.prototype.slice.call(arguments,1);
this.each(function(){var p=i.GetData(this,"select2");
if(p==null&&window.console&&console.error){console.error("The select2('"+o+"') method was called on an element that is not using Select2.")
}m=p[o].apply(p,l)
});
if(j.inArray(o,g)>-1){return this
}return m
}else{throw new Error("Invalid arguments for Select2: "+o)
}}}
}if(j.fn.select2.defaults==null){j.fn.select2.defaults=k
}return f
});
return{define:e.define,require:e.require}
}());
var b=c.require("jquery.select2");
d.fn.select2.amd=c;
return b
}));
var constantes={breakpoints:{desktopMax:1400,tabletMax:991,phoneMax:767}};
$.fn.AnalyticsComponent=function(b){this.config=$.extend({},{name:this.data("analytics-component-name"),title:this.data("analytics-component-title"),articleCategory:this.data("analytics-component-articlecategory"),languageUsed:this.data("analytics-component-languageused")},b);
this.getLinks=function(c){return $('[data-analytics-typeevent="'+c+'"]',this)
};
this.__constructor__=function(){this.addClass("component-analytics");
if(!this.data()){if(!this.is("[data-analytics-component-name]")){this.attr("data-analytics-component-name",this.config.name)
}}if(typeof this.data("analytics-component-languageused")!=="undefined"&&emptyString(this.config.languageUsed)){this.config.languageUsed="en";
this.attr("data-analytics-component-languageused",this.config.languageUsed)
}return this
};
this.__events__=function(){var c=function(d){Analytics.addEvent(this.getLinks(d),{typeevent:d})
};
c.apply(this,[Analytics.typesevent.clickComponent]);
c.apply(this,[Analytics.typesevent.search]);
c.apply(this,[Analytics.typesevent.socialMedia]);
c.apply(this,[Analytics.typesevent.videoLaunch]);
c.apply(this,[Analytics.typesevent.download]);
c.apply(this,[Analytics.typesevent.language]);
return this
};
return this.__constructor__().__events__()
};
$.fn.AnalyticsElem=function(b){this.config=$.extend({},{component:{name:this.data("analytics-component-name"),title:this.data("analytics-component-title")},search:{searchType:"",searchResult:"",keyword:"",filterType:[],filterTab:[],filterDateStart:"",filterDateEnd:"",filterLanguage:[]},typeevent:this.data("analytics-typeevent"),nameevent:this.data("analytics-nameevent"),label1event:this.data("analytics-label1event"),label2event:this.data("analytics-label2event"),mediaformat:this.data("analytics-mediaformat"),mediaquality:this.data("analytics-mediaquality")},b);
this.getComponentParent=function(){return this.closest(".component-analytics").first()
};
this.addEvent=function(){if(!this.config.typeevent){return this
}if(this.data("__analytics__")=="1"){return this
}this.data("__analytics__","1");
if(this.tagName().toLowerCase()=="form"){this.unbind("submit.analytics").bindFirst("submit.analytics",{config:this.config},Analytics.events.sendTrack)
}else{this.unbind("click.analytics").bindFirst("click.analytics",{config:this.config},Analytics.events.sendTrack)
}return this
};
this.__constructor__=function(){return this
};
this.sendVideoLaunchTrack=function(){this.config.typeevent=Analytics.typesevent.videoLaunch;
this.sendTrack()
};
this.sendSearchTrack=function(){this.config.typeevent=Analytics.typesevent.search;
this.sendTrack()
};
this.sendTrack=function(){if(typeof(digitalData)=="undefined"){if(console){console.error("digitalData is undefined")
}return this
}if(typeof(this.config.typeevent)=="undefined"){if(console){console.error("Event's type is undefined")
}return this
}$component=this.getComponentParent();
if($component.length){if(this.config.component.name==undefined){this.config.component.name=$component.data("analytics-component-name");
this.data("analytics-component-name",this.config.component.name)
}if(this.config.component.title==undefined){this.config.component.title=$component.data("analytics-component-title");
this.data("analytics-component-title",this.config.component.title)
}}if(!this.config.component.title){this.config.component.title=this.config.component.name
}digitalData.component={};
digitalData.search={};
digitalData.socialMedia={};
digitalData.videoLaunch={};
digitalData.download={};
var c=function(d){if(typeof(d)=="function"){d=d.apply(this,[])
}if(typeof(d)=="undefined"){return undefined
}if(typeof(d)=="string"){return d.stripTags()
}return d
};
switch(this.config.typeevent){case Analytics.typesevent.clickComponent:digitalData.component.pageName=digitalData.page.pageName;
digitalData.component.componentName=c.apply(this,[this.config.component.name]);
digitalData.component.componentTitle=c.apply(this,[this.config.component.title]);
digitalData.component.eventName=c.apply(this,[this.config.nameevent]);
digitalData.component.eventLabel1=c.apply(this,[this.config.label1event]);
digitalData.component.eventLabel2=c.apply(this,[this.config.label2event]);
if(!digitalData.component.componentTitle){digitalData.component.componentTitle="title's component is empty"
}break;
case Analytics.typesevent.download:digitalData.download.pageName=digitalData.page.pageName;
digitalData.download.componentName=c.apply(this,[this.config.component.name]);
digitalData.download.componentTitle=c.apply(this,[this.config.component.title]);
digitalData.download.eventName=c.apply(this,[this.config.nameevent]);
digitalData.download.eventLabel1=c.apply(this,[this.config.label1event]);
digitalData.download.eventLabel2=c.apply(this,[this.config.label2event]);
digitalData.download.format=c.apply(this,[this.config.format]);
digitalData.download.quality=c.apply(this,[this.config.quality]);
break;
case Analytics.typesevent.search:digitalData.search.pageName=digitalData.page.pageName;
digitalData.search.searchType=c.apply(this,[this.config.search.searchType]);
digitalData.search.searchResult=c.apply(this,[this.config.search.searchResult]);
digitalData.search.keyword=c.apply(this,[this.config.search.keyword]);
digitalData.search.filterType=c.apply(this,[this.config.search.filterType]);
digitalData.search.filterTab=c.apply(this,[this.config.search.filterTab]);
digitalData.search.filterDateStart=c.apply(this,[this.config.search.filterDateStart]);
digitalData.search.filterDateEnd=c.apply(this,[this.config.search.filterDateEnd]);
digitalData.search.filterLanguage=c.apply(this,[this.config.search.filterLanguage]);
break;
case Analytics.typesevent.socialMedia:digitalData.socialMedia.pageName=digitalData.page.pageName;
digitalData.socialMedia.socialAction=c.apply(this,[this.config.nameevent]);
digitalData.socialMedia.socialPosition=c.apply(this,[this.config.label1event]);
digitalData.socialMedia.socialType=c.apply(this,[this.config.label2event]);
break;
case Analytics.typesevent.videoLaunch:digitalData.videoLaunch.pageName=digitalData.page.pageName;
digitalData.videoLaunch.componentName=c.apply(this,[this.config.component.name]);
digitalData.videoLaunch.componentTitle=c.apply(this,[this.config.component.title]);
digitalData.videoLaunch.videoTitle=c.apply(this,[this.config.label1event]);
break;
default:if(console){console.error("Error on config event's type : "+this.config.typeevent)
}return this
}if(typeof(_satellite)!="undefined"){_satellite.track(this.config.typeevent)
}return this
};
return this.__constructor__()
};
var Analytics={typesevent:{clickComponent:"click_component",search:"search",socialMedia:"socialMedia",videoLaunch:"videoLaunch",download:"download",language:"language"},addEvent:function(c,b){if(!c){return this
}if(!c.length){return this
}c.each(function(){$(this).AnalyticsElem(b).addEvent()
})
},addClickComponentEvent:function(c,b){b.typeevent=Analytics.typesevent.clickComponent;
Analytics.addEvent(c,b)
},addDownloadEvent:function(c,b){b.typeevent=Analytics.typesevent.download;
Analytics.addEvent(c,b)
},init:function(){$("[data-analytics-component-name]").each(function(){$(this).AnalyticsComponent()
});
return this
},events:{sendTrack:function(c){try{$(this).AnalyticsElem(c.data.config).sendTrack()
}catch(b){}return true
}}};
$.fn.copyEventTo=function(d,b,e){var c=[];
this.each(function(){var g=jQuery._data(this,"events");
if(typeof g==="object"){var f=g[d];
if(typeof f==="object"){for(var h=0;
h<f.length;
h++){c.push({data:g[d][h].data,handler:g[d][h].handler})
}}}});
if(typeof b==="string"){b=$(b)
}else{if(typeof b==="object"){if(typeof b.tagName==="string"){b=$(b)
}}}if(e===true){b.off(d)
}b.each(function(){for(var f=0;
f<c.length;
f++){b.bind(d,c[f].data,c[f].handler)
}b.attr("__copyevents__",c.length)
});
return this
};
if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{value:function(d,e){if(this==null){throw new TypeError('"this" is null or not defined')
}var f=Object(this);
var b=f.length>>>0;
if(b===0){return false
}var g=e|0;
var c=Math.max(g>=0?g:b-Math.abs(g),0);
while(c<b){if(f[c]===d){return true
}c++
}return false
}})
}$.fn.tagName=function(){return this.prop("tagName").toLowerCase()
};
if(!String.prototype.replaceAll){String.prototype.replaceAll=function(d,c){var b=this.split(d).join(c);
return b
}
}if(!String.prototype.stripTags){String.prototype.stripTags=function(){return this.replaceAll("&lt;","<").replaceAll("&gt;",">").replace(/<\/?[^>]+>/gi,"")
}
}if(!Date.prototype.addDay){Date.prototype.addDay=function(b){var c=new Date(this.valueOf());
c.setDate(c.getDate()+b);
return c
}
}if(!Date.prototype.addMonth){Date.prototype.addMonth=function(b){var c=new Date(this.valueOf());
c.setMonth(c.getMonth()+b);
return c
}
}if(!Date.prototype.addYears){Date.prototype.addYears=function(b){var c=new Date(this.valueOf());
c.setFullYear(c.getFullYear()+b);
return c
}
}var debounce=function(e,b,c){var d;
if(typeof(c)=="undefined"){c=true
}return function(){var f=arguments;
var g=this;
clearTimeout(d);
d=setTimeout(function(){e.apply(g,f)
},b);
return c
}
};
$.fn.bindDebounce=function(e,d,h,f,g){if(typeof(d)=="function"){f=h;
h=null;
d=debounce(d,f,g)
}if(typeof(h)=="function"){h=debounce(h,f,g)
}return this.bind(e,d,h)
};
var throttle=function(f,b,d){var c;
var e;
if(typeof(d)=="undefined"){d=true
}return function(){var i=this;
var h=+new Date();
var g=arguments;
if(c&&h<c+b){clearTimeout(e);
e=setTimeout(function(){c=h;
f.apply(i,g)
},b)
}else{c=h;
f.apply(i,g)
}return d
}
};
$.fn.bindThrottle=function(e,d,h,f,g){if(typeof(d)=="function"){f=h;
h=null;
d=throttle(d,f,g)
}if(typeof(h)=="function"){h=throttle(h,f,g)
}return this.bind(e,d,h)
};
var GetTime=function(c){var b=c.split("-");
return new Date(parseInt(b[0]),parseInt(b[1])-1,parseInt(b[2]))
};
var TimeSpan=function(e,c){var d={};
var b=c-e;
d.interval=b;
b=Math.floor(b/1000);
d.sec=b%60;
b=Math.floor((b-d.sec)/60);
d.min=b%60;
b=Math.floor((b-d.min)/60);
d.hour=b%24;
b=Math.floor((b-d.hour)/24);
d.day=b;
return d
};
function ecart_mois(d,j){var c;
var f;
var e;
var g;
var h;
var b;
var i;
c=j.split("/");
f=d.split("/");
e=parseInt(c[0]);
g=parseInt(c[1]);
h=parseInt(f[0]);
b=parseInt(f[1]);
i=((b-g)*12)-(e)+(h);
return i
}function emptyString(b){switch(b){case"":case 0:case"0":case null:case false:case typeof this=="undefined":return true;
default:return false
}}$.fn.nApply=function(){if(typeof(arguments[0])=="object"){var d={parent:arguments[0].width(),lot:this.first().width()};
n=Math.floor(d.parent/d.lot)
}else{n=parseInt(arguments[0])
}if(typeof(arguments[1])=="function"){callback=arguments[1]
}else{callback=function(){}
}if(typeof(arguments[2])=="undefined"){params=[]
}else{params=arguments[2]
}if(!n){return this
}var e=Math.ceil(this.length/n);
if(!e||e==Infinity||isNaN(e)){return this
}for(ilot=0;
ilot<e;
ilot++){var c=(ilot*n);
var b=(c+n);
var f=this.slice(c,b);
f.ilot=ilot;
f.nrow=e;
f.ideb=c;
f.ifin=b;
callback.apply(f,params)
}return this
};
$.fn.naturalWidth=function(){return this.prop("naturalWidth")
};
$.fn.naturalHeight=function(){return this.prop("naturalHeight")
};
$.fn.isVisible=function(h,g){if(this.length!=1){return false
}var e=this.offset().top,f=this.outerHeight(),d=$(window).height(),c=$(window).scrollTop(),b=(c>(e+f-d)&&(e>c)&&(c+d>e+f))&&this.is(":visible"),i=b?h:g;
if(typeof(i)=="function"){i.apply(this,[b,{height:d,scrolltop:c},{height:f,top:e}])
}return b
};
$.fn.UniqueElement=function(){if(this.data("uniqueid")==undefined){this.data("uniqueid",Guid.GetNew());
this.uniqueid=this.data("uniqueid")
}return this
};
var Guid=new (function(){this.empty="00000000-0000-0000-0000-000000000000";
this.GetNew=function(){var b=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1).toUpperCase()
};
return(b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b())
}
})();
$.fn.fixTouchEvents=function(){this.each(function(){var b=$(this);
b.unbind("touchstart.fixtouch").bind("touchstart.fixtouch",function(){$(this).addClass("fixtouchstart")
});
b.unbind("touchend.fixtouch").bind("touchend.fixtouch",function(){$(this).removeClass("fixtouchstart").addClass("fixtouchend")
})
})
};
$.fn.animationDelay=function(b){return this.css({"animation-duration":b+"s","-o-animation-duration":b+"s","-ms-animation-duration":b+"s","-webkit-animation-duration":b+"s","-moz-animation-duration":b+"s"})
};
$.fn.transformTranslate=function(b,d){var c="translate("+b+", "+d+")";
if(b!=undefined&&d==undefined){c="translateX("+b+")"
}else{if(b==undefined&&d!=undefined){c="translateY("+d+")"
}}return this.css({transform:c,"-o-transform":c,"-ms-transform":c,"-webkit-transform":c,"-moz-transform":c})
};
$.fn.lineHeight=function(){if(typeof(arguments[0])!="undefined"){this.css("line-height",arguments[0])
}return parseInt(this.css("line-height").replace("px",""))
};
$.fn.getPosition=function(){var b=this.offset();
b.height=this.height();
b.width=this.width();
b.right=b.width+b.left;
b.hmiddle=b.top+(b.height/2);
b.bottom=b.top+b.height;
b.scrollTop=this.scrollTop();
b.winHeight=$(window).height();
b.scrollBottom=b.scrollTop+(this.is("html")?b.winHeight:b.height);
b.isVisible=function(){var c=$("html").getPosition();
return(c.scrollTop<=this.bottom)&&(c.scrollBottom>=this.top)
};
return b
};
$.fn.padding=function(){if(arguments.length==2&&arguments[0]!=undefined&&arguments[1]!=undefined){this.css("padding-"+arguments[0],arguments[1])
}if(arguments[0]!=undefined){var b=this.css("padding-"+arguments[0]);
if(b==undefined){return null
}return parseInt(b.replace("px",""))
}return{top:this.padding("top"),right:this.padding("right"),bottom:this.padding("bottom"),left:this.padding("left")}
};
$.fn.margin=function(){if(arguments.length==2&&arguments[0]!=undefined&&arguments[1]!=undefined){this.css("margin-"+arguments[0],arguments[1])
}if(arguments[0]!=undefined){var b=this.css("margin-"+arguments[0]);
if(b==undefined){return null
}return parseInt(b.replace("px",""))
}return{top:this.margin("top"),right:this.margin("right"),bottom:this.margin("bottom"),left:this.margin("left")}
};
$.fn.isDisabled=function(c){return this.hasClass("disabled")
};
$.fn.disable=function(c){if(c==undefined){c=true
}if(c){this.addClass("disabled")
}else{this.removeClass("disabled")
}this.each(function(){var b=$(this);
switch(b.tagName()){case"a":b.disabled=c;
if(c){var d=b.attr("href");
b.data("__svg_href__",d).attr("data-__svg_href__",d).removeAttr("href")
}else{var d=b.data("__svg_href__",d);
b.removeData("__svg_href__").attr("href",d)
}break;
case"input":b.disabled=c;
break;
case"form":b.disabled=c;
break
}});
return this
};
var DocumentManager={config:{cssclass:{breakpoints:{phone:"breakpoints-phone",tablet:"breakpoints-tablet",desktop:"breakpoints-desktop"}}},init:function(){var c="-ms-scroll-limit" in document.documentElement.style&&"-ms-ime-align" in document.documentElement.style;
if(c){$("body").addClass("isIe")
}DocumentManager.addBreakpointsClass();
$(window).resize(function(){DocumentManager.addBreakpointsClass()
});
$.Sticky.init();
$(window).on("scrollstart scroll",function(){$.Sticky.load()
});
var b=navigator.userAgent.toLowerCase();
this.isAndroidMobileBrowser=b.indexOf("android")>-1;
this.isIosChrome=b.indexOf("crios")>-1;
return this
},addBreakpointsClass:function(){var b=$(window);
var c=$("body");
this.width=b.width();
c.removeClass(this.config.cssclass.breakpoints.phone).removeClass(this.config.cssclass.breakpoints.tablet).removeClass(this.config.cssclass.breakpoints.desktop);
this.isPhone=this.isTablet=this.isDesktop=this.isExtraDesktop=false;
if(this.width<=constantes.breakpoints.phoneMax){this.isPhone=true;
c.addClass(this.config.cssclass.breakpoints.phone)
}else{if(this.width<=constantes.breakpoints.tabletMax){this.isTablet=true;
c.addClass(this.config.cssclass.breakpoints.tablet)
}else{if(this.width<=constantes.breakpoints.desktopMax){this.isDesktop=true;
c.addClass(this.config.cssclass.breakpoints.desktop)
}else{this.isDesktop=true;
this.isExtraDesktop=true
}}}return this
},existLayer:false,showLayer:function(){if(this.existLayer){return
}this.existLayer=true;
$("body").Animate("opacityLayerIn3").onTransitionEnd("docmanager",function(){this.addClass("opacityLayer-3").reset()
});
return this
},hideLayer:function(){if(!this.existLayer){return
}this.existLayer=false;
$("body").Animate("opacityLayerOut3").onTransitionEnd("docmanager",function(){this.removeClass("opacityLayer-3").reset()
});
if($("body").hasClass("isIe")){setTimeout(function(){$("body").removeClass("animated animate--opacityLayerOut3").removeData("anim-name").removeAttr("data-anim-name")
},100)
}return this
},toggleLayer:function(){if(!this.existLayer){DocumentManager.showLayer();
this.existLayer=!this.existLayer
}else{DocumentManager.hideLayer();
this.existLayer=!this.existLayer
}},disableScroll:function(){if(DocumentManager.isPhone){var b=window.innerHeight;
$("html, body").css("height",b)
}$("html").addClass("scrolldisabled")
},enableScroll:function(){$("html, body").css("height","");
$("html").removeClass("scrolldisabled")
}};
$.fn.DropDownListContainer=function(c){var b=$.extend({},{},c);
var d=[];
this.each(function(){d.push($(this).DropDownList(b))
});
this.dropdownlist=d;
this.get=function(e){return this.dropdownlist[e]
};
return this
};
$.fn.DropDownList=function(b){this.config={loadlist:this.data("dropdownlist-loadlist"),targets:this.data("dropdownlist-targets"),display:this.data("dropdownlist-display")};
if(b){if(b.cssclass){this.config.cssclass=$.extend({},this.config.cssclass,b.cssclass)
}}this.activateListItem=function(c){var d=this.$list.find("li");
d.removeClass("active");
c.addClass("active");
this.initActivateLink();
return this
};
this.initActivateLink=function(){if(!this.$list.length){return this
}this.$activateitem=$(".active",this.$list);
this.$link.$text.html(this.$activateitem.find("> a, > span").html());
if(this.$activateitem.hasClass("disable")){this.$link.addClass("disable")
}else{this.$link.removeClass("disable")
}};
this.addItem=function(){if(!this.$link.length){return this
}if(!this.$list.length){return this
}var c=null;
if(typeof(arguments[0])!=="undefined"){c=arguments[0]
}if(!c){return this
}c=c.clone().addClass("item");
c.appendTo(this.$list);
this.initActivateLink()
};
this.__add_link__=function(){if(!$(".selected",this).length){this.$link=$("<a/>",{"class":"selected"});
this.$link.$text=$("<span/>",{"class":"text"});
this.$link.$icone=$("<i/>",{"class":"icon-single-right-arrow-icon_f"});
this.$link.$text.appendTo(this.$link);
this.$link.$icone.appendTo(this.$link);
this.$link.prependTo(this)
}else{this.$link=$("a.selected",this);
this.$link.$text=this.$link.find("> span.text");
this.$link.$icone=this.$link.find("> i");
if(!this.$link.$icone.length){this.$link.$icone=$("<i/>",{"class":"icon-single-right-arrow-icon_f"});
this.$link.$icone.appendTo(this.$link)
}}return this
};
this.__add_list__=function(){if(!$("ul.list",this).length&&this.config.loadlist){this.$list=$("<ul/>",{"class":"list"});
this.$list.appendTo(this)
}else{this.$list=$("ul.list",this);
this.$list.find("> li").addClass("item");
this.initActivateLink()
}return this
};
this.toggle=function(){if(this.$activateitem&&this.$activateitem.length){if(this.$activateitem.hasClass("disable")){return this
}}if(this.hasClass("dropdownlist--show")){this.collapse()
}else{this.expand()
}return this
};
this.collapse=function(d){this.removeClass("dropdownlist--show");
var c=this.data("init");
if(typeof(d)==="undefined"){d=c
}if(this.$list&&this.$list.length){if(c){this.$list.slideUp(400,function(){})
}else{this.$list.hide().css({display:"hide"})
}}this.data("display","slideDown");
$.each(this.targets,function(e,f){if(c&&d){f.slideUp(400,function(){})
}else{f.hide().css({display:"hide"})
}})
};
this.expand=function(d){this.addClass("dropdownlist--show");
var c=this.data("init");
if(typeof(d)==="undefined"){d=c
}if(this.$list&&this.$list.length){if(c){this.$list.slideDown(400,function(){})
}else{this.$list.show().css({display:"block"})
}}this.data("display","slideDown");
$.each(this.targets,function(e,f){if(c&&d){f.slideDown(400,function(){})
}else{f.show().css({display:"block"})
}})
};
this.__add_targets__=function(){this.targets=[];
var c=[];
if(!this.config.targets){return this
}$.each(this.config.targets.split(","),function(e,f){var d=$("#"+f);
if(d.length==1){c.push(d)
}});
this.targets=c;
return this
};
this.__init_event__=function(){var c=this.data("init")==true;
if(c){return this
}this.$link.unbind("click.ddl").bind("click.ddl",{"$ddl":this},function(d){d.data.$ddl.toggle()
});
return this
};
this.__constructor__=function(){this.addClass("dropdownlist");
if(typeof(this.config.loadlist)=="undefined"){this.config.loadlist=true
}if(typeof(this.config.targets)=="undefined"){this.config.targets=undefined
}if(typeof(this.config.display)=="undefined"){this.config.display="collapse"
}this.__add_link__();
this.__add_list__();
this.__add_targets__();
if(this.config.display=="expand"){this.expand()
}else{this.collapse()
}this.__init_event__();
this.data("init",true);
return this
};
return this.__constructor__()
};
var DropDownList={init:function(){$('[data-drodownlist="true"]').each(function(){var c=$(this);
var d=$("> *:not(.list)",c).first().addClass("dropdownlist--hidden");
var b=c.DropDownList();
$("> *",d).each(function(){b.addItem($(this))
})
})
}};
$.fn.FixeHeight=function(c){var b=$.extend({},{height:null,minheight:0,closeauto:null},c);
if(typeof(b.closeauto)!="function"){b.closeauto=function(){return false
}
}if(!b.height){this.each(function(){var e=$(this);
var d=e.css({height:"auto"}).outerHeight();
if(b.height==null||b.height<d){b.height=d
}})
}if(b.height==null||b.height<b.minheight){b.height=b.minheight
}if(b.closeauto.apply(this,[b])){this.css({height:"auto"}).attr("fixheight","auto").addClass("fixheight").addClass("fixheight--auto");
return this
}this.css({height:b.height+"px"}).attr("fixheight","1").addClass("fixheight");
return this
};
$.fn.SliderSlick=function(conf){this.config=$.extend({},{dots:true,dotsanimate:true,dotstype:"rectangular",dotsoverlay:false,dotsitemswidth:false,dotsoffset:null,pager:true,pagerposition:"center",pagerdisplay:"auto",pageroffset:null,buttons:false,buttonsposition:"center",buttonsoverlay:false,buttonsoffset:[],containsVideo:false,filter:false,tabulation:false,infinite:true,speed:300,slidesToShow:4,slidesToScroll:4,arrows:true,prevArrow:'<button type="button" class="slick-prev"></button>',nextArrow:'<button type="button" class="slick-next"></button>',autoplay:false,autoplaySpeed:7000,pauseOnFocus:true,pauseOnHover:true,pauseOnDotsHover:true,responsive:[{breakpoint:constantes.breakpoints.desktopMax+1,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:constantes.breakpoints.tabletMax+1,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:constantes.breakpoints.phoneMax+1,settings:{slidesToShow:1,slidesToScroll:1}}]},conf);
this.__constructor__=function(){this.addClass("sliderslick");
this.$slider=$("> div",this).first().addClass("sliderslick__container");
this.$slider.$items=$("> div",this.$slider);
this.load();
this.attr("__sliderslick__","1");
return this
};
this.isInitialized=function(){return this.hasClass(".slick-initialized")
};
this.load=function(){if(this.attr("__sliderslick__")=="1"){this.$slider.slick("refresh");
return this
}if(this.hasClass("sliderslick--simple")){this.config.slidesToShow=1;
this.config.slidesToScroll=1;
this.config.responsive[0].settings.slidesToShow=1;
this.config.responsive[0].settings.slidesToScroll=1;
this.config.responsive[1].settings.slidesToShow=1;
this.config.responsive[1].settings.slidesToScroll=1;
this.config.responsive[2].settings.slidesToShow=1;
this.config.responsive[2].settings.slidesToScroll=1
}if(this.is("[data-dots]")){this.config.dots=this.data("dots")
}if(this.is("[data-pager]")){this.config.pager=this.data("pager")
}if(this.is("[data-buttons]")){this.config.buttons=this.data("buttons")
}if(this.is("[data-buttonsposition]")){this.config.buttonsposition=this.data("buttonsposition")
}if(this.is("[data-autoplay]")){this.config.autoplay=this.data("autoplay")
}if(this.is("[data-arrows]")){this.config.arrows=this.data("arrows")
}if(this.config.autoplay&&this.is("[data-autoplayspeed]")){var speed=this.data("autoplayspeed");
if(typeof(speed)!="undefined"){speed=parseFloat(speed.toString().replace(",","."));
if(speed<=0){this.config.autoplay=false;
this.config.autoplaySpeed=0
}else{if(speed&&!isNaN(speed)){this.config.autoplaySpeed=parseInt(speed*1000)
}}}}if(this.is("[data-config]")){var sconfig_temp=this.data("config");
var config_temp=undefined;
eval("try { config_temp = "+sconfig_temp+"; } catch(err) { if(console) console.log(err); }");
if(typeof(config_temp)!=undefined){this.config=$.extend({},this.config,config_temp)
}}if(typeof(this.config.preload)=="function"){this.config.preload.apply(this,[])
}if(this.config.responsivedesktop){if(typeof(this.config.responsivedesktop)=="function"){this.config.responsivedesktop=this.config.responsivedesktop.apply(this,[])
}this.config.responsive[0].settings=$.extend({},this.config.responsive[0].settings,this.config.responsivedesktop)
}if(this.config.responsivetablet){if(typeof(this.config.responsivetablet)=="function"){this.config.responsivetablet=this.config.responsivetablet.apply(this,[])
}this.config.responsive[1].settings=$.extend({},this.config.responsive[1].settings,this.config.responsivetablet)
}if(this.config.responsivephone){if(typeof(this.config.responsivephone)=="function"){this.config.responsivephone=this.config.responsivephone.apply(this,[])
}this.config.responsive[2].settings=$.extend({},this.config.responsive[2].settings,this.config.responsivephone)
}if(this.config.buttons){this.config.arrow=true
}if(this.config.pageroffset==null){this.config.pageroffset=this.config.buttonsoffset
}if(this.config.autoplay==true){if(this.config.autoplaySpeed<=100){this.config.autoplay=false;
this.config.autoplaywithdots=false
}}else{this.config.autoplaywithdots=false
}this.events();
this.xcopyelems();
this.$slider.slick(this.config);
return this
};
this.xcopyelems=function(){if(this.config.xcopyelems){$elems=$(this.config.xcopyelems,this.$slider);
$elems.data("xcopyelems",true).appendTo(this.$slider);
this.$slider.children().each(function(){$child=$(this);
if(!$child.data("xcopyelems")){$child.remove()
}})
}};
this.events=function(){this.$slider.on("init.sliderslick reInit.sliderslick afterChange.sliderslick refresh.sliderslick",function(event,slick,currentSlide,nextSlide){var $slider=$(this).slickContainer(slick.options,true);
var args=[event.type,event,slick,currentSlide,nextSlide];
$slider.loadPager();
$slider.loadButtons();
$slider.events(args);
if(slick.options.containsVideo){if((event.type=="init")){$(".slick-cloned .s7videoviewer",$slider).each(function(){$(this).remove()
})
}if((event.type=="afterChange")){$(".s7videoviewer",$slider).each(function(){$(this).trigger("pause")
})
}}setTimeout(function(){if(typeof(slick.options.callback)=="function"){slick.options.callback.apply($slider,args)
}},1)
});
this.$slider.on("breakpoint.sliderslick",function(event,slick,breakpoint){var $slider=$(this).slickContainer().verifPager();
setTimeout(function(){if(typeof(slick.options.callback)=="function"){slick.options.callback.apply($slider,[event.type,event,slick,breakpoint])
}},1)
});
this.$slider.on("swipe.sliderslick",function(event,slick,mvt){var $slider=$(this).slickContainer();
$(".s7videoviewer",$slider).each(function(){$(this).trigger("pause")
});
setTimeout(function(){if(typeof(slick.options.callback)=="function"){slick.options.callback.apply($slider,[event.type,event,slick,mvt])
}},1)
})
};
return this.__constructor__()
};
var SliderSlick={__slider__:[],init:function(){SliderSlick.__slider__=[];
SliderSlick.load.apply($('.sliderslick:not([data-autoload="false"])'),[])
},load:function(b){this.each(function(){SliderSlick.__slider__.push($(this).SliderSlick(b))
});
setTimeout(function(){setInterval(function(){SliderSlick.reload()
},100)
},400)
},reload:function(b){$(".slick-slide:not(.slick-current) .s7videoviewer").each(function(){$(this).trigger("pause")
});
$(".slick-current .s7videoviewer").each(function(){$(this).S7VideoContainer().reloadPosTitle()
})
}};
$.fn.slickContainer=function(c,b){if(typeof(b)=="undefined"){b=false
}if(typeof(c)=="undefined"){this.options=this.slick("getSlick").options;
b=true
}else{this.options=c
}this.inititems=function(){this.$parent=this.closest(".sliderslick");
this.$pager=$("> .slick-pager",this.$parent);
this.$arrowprev=$(".slick-prev",this);
this.$arrownext=$(".slick-next",this);
this.$arrowprev.unbind("mouseenter mouseleave");
this.$arrownext.unbind("mouseenter mouseleave");
this.$list=$(".slick-list",this);
this.$track=$(".slick-track",this.$list);
this.$dots=$(".slick-dots",this);
this.$dots.$items=$("li",this.$dots);
this.$dots.$active=this.$dots.$items.filter(".slick-active");
this.$dots.$prev=this.$dots.$active.prev();
this.$dots.$next=this.$dots.$active.next();
if(!this.$dots.$prev.length){this.$dots.$prev=this.$dots.$items.last()
}if(!this.$dots.$next.length){this.$dots.$next=this.$dots.$items.first()
}this.$dots.$items.removeClass("slick-dotscurrent").removeClass("slick-dotsprev").removeClass("slick-dotsnext");
this.$dots.$active.addClass("slick-dotscurrent");
this.$dots.$prev.addClass("slick-dotsprev");
this.$dots.$next.addClass("slick-dotsnext");
this.$pager=$(".slick-pager",this.$parent);
if(this.$pager.length!=1){this.$pager.filter(".slick-slide").remove();
this.$pager=$(".slick-pager",this.$parent)
}this.$items=$('.slick-slide:not(".slick-cloned")',this);
this.$items.$current=this.$items.filter(".slick-current");
this.$items.$active=this.$items.filter(".slick-active");
this.$items.$visible=this.$items.filter('[aria-hidden="false"]');
this.$items.$hidden=this.$items.filter('[aria-hidden="true"]');
this.$cloneditems=$(".slick-cloned",this);
this.$cloneditems.$firstelems=this.$cloneditems.filter(".slick-cloned-prev");
this.$cloneditems.$lastelems=this.$cloneditems.filter(".slick-cloned-next");
if(this.$cloneditems.length>0&&!this.$cloneditems.$firstelems.length&&!this.$cloneditems.$lastelems.length){this.$cloneditems.$firstelems=this.$cloneditems.slice(0,this.$cloneditems.length/2).addClass("slick-cloned-prev");
this.$cloneditems.$lastelems=this.$cloneditems.slice(this.$cloneditems.length/2).addClass("slick-cloned-next")
}if(this.options.forceclone&&this.$cloneditems.$lastelems.length<this.options.forceclone){for(var f=this.$cloneditems.$lastelems.length;
f<=this.options.forceclone;
f++){var l=this.$items.eq(f).clone();
if(l.length){l.addClass("slick-cloned").addClass("slick-cloned-next").removeAttr("aria-describedby").removeAttr("role").appendTo(this.$track)
}}this.$cloneditems=$(".slick-cloned",this);
this.$cloneditems.$firstelems=this.$cloneditems.filter(".slick-cloned-prev");
this.$cloneditems.$lastelems=this.$cloneditems.filter(".slick-cloned-next")
}this.$items.removeClass("slick-active-first").removeClass("slick-active-last");
if(this.$items.$active.length>1){this.$items.$active.first().addClass("slick-active-first");
this.$items.$active.last().addClass("slick-active-last")
}else{this.$items.first().addClass("slick-active-first");
this.$items.last().addClass("slick-active-last")
}if(this.$cloneditems.length>0){this.$cloneditems.removeClass("slick-cloned-first").removeClass("slick-cloned-last");
this.$cloneditems.$firstelems.first().addClass("slick-cloned-first");
this.$cloneditems.$firstelems.last().addClass("slick-cloned-last");
this.$cloneditems.$lastelems.first().addClass("slick-cloned-first");
this.$cloneditems.$lastelems.last().addClass("slick-cloned-last")
}this.$items.each(function(m){$(this).attr("data-slick-filterindex",m)
});
this.countitems=this.$items.length;
this.globalindex=this.$items.$current.data("slick-index");
this.currentindex=this.$items.$current.data("slick-filterindex");
this.isFirst=this.$items.$current.hasClass("slick-active-first");
this.isLast=this.$items.$current.hasClass("slick-active-last");
this.containsArrows=this.$arrowprev.length&&this.$arrownext.length;
if(this.countitems==1){this.addClass("slick-oneitem")
}else{this.removeClass("slick-oneitem")
}if(this.options.centerMode){this.$list.addClass("slick-centermode")
}else{this.$list.removeClass("slick-centermode")
}this.ifirstslide=0;
this.ilastslide=this.countitems-1;
if(this.options.centerMode){switch(this.options.slidesToShow){case 2:this.ifirstslide=1;
break;
case 3:this.ifirstslide=1;
this.ilastslide=this.countitems-2;
break;
case 4:this.ifirstslide=2;
this.ilastslide=this.countitems-2;
break
}}if(this.options.centerMode&&this.options.infinite==false){if(this.countitems<=this.options.slidesToShow){var k=this;
setTimeout(function(){k.setConfig({centerMode:false}).refresh()
},1)
}else{if(this.currentindex<(this.ifirstslide)){var k=$(this);
var f=this.ifirstslide;
setTimeout(function(){k.slickContainer().gotoindex(f,false)
},1)
}}}if(this.options.infinite==false){this.disablePrevArrow(false).disableNextArrow(false);
if(this.currentindex<=this.ifirstslide){this.disablePrevArrow(true)
}if(this.currentindex>=this.ilastslide){this.disableNextArrow(true)
}}if(this.options.tabulation){var g=[];
var e=this.tabs=[];
this.$items.each(function(){var m=$(this);
if(!m.is("[data-tabskey]")){m=m.find("[data-tabskey]").first()
}var i={key:m.data("tabskey"),text:m.data("tabstext")};
if(!g.includes(i.id)){e.push(i);
g.push(i.id)
}});
var j=this.$items.$current;
if(!j.is("[data-tabskey]")){j=j.find("[data-tabskey]").first()
}this.tabs={list:e,current:{key:j.data("tabskey"),text:j.data("tabstext")}}
}if(this.options.filter){this.filters={current:{key:this.data("slick-filter")}}
}if(this.options.invertcolor){this.addClass("slick--invertcolor")
}else{this.removeClass("slick--invertcolor")
}if(this.options.autoplaywithdots){this.$dots.addClass("slick-dots--animate");
var d=this.options.autoplaySpeed/1000;
this.$dots.$items.find("button").animationDelay(d).attr("data-delay",d)
}else{this.$dots.removeClass("slick-dots--animate")
}if(this.options.dots&&this.options.dotsitemswidth){if(this.options.dotsitemswidth=="calc"){this.$dots.totalwidth=this.$dots.width();
var h=0;
this.$dots.$items.each(function(){h+=$(this).outerWidth(true)
});
this.$dots.widthitems=h;
this.$dots.margeitem=this.$dots.$items.first().outerWidth(true)-this.$dots.$items.first().outerWidth(false);
this.$dots.newwidthitem=(this.$dots.totalwidth/this.$dots.$items.length)-this.$dots.margeitem;
this.$dots.$items.width(this.$dots.newwidthitem)
}if(typeof(this.options.dotsitemswidth)=="number"){this.$dots.$items.width(this.options.dotsitemswidth)
}}if(this.options.dots&&this.options.dotstype){this.$dots.attr("data-dotstype",this.options.dotstype)
}if(this.options.dots&&this.options.dotsoverlay){this.addClass("slick-dotted--overlay")
}else{this.removeClass("slick-dotted--overlay")
}if(this.options.buttonsoffset!=null&&typeof(this.options.buttonsoffset)=="object"&&this.options.buttonsoffset.length==2){this.$arrowprev.transformTranslate(this.options.buttonsoffset[0],this.options.buttonsoffset[1]);
this.$arrownext.transformTranslate(this.options.buttonsoffset[0],this.options.buttonsoffset[1])
}if(this.options.dotsoffset!=null&&typeof(this.options.dotsoffset)=="object"&&this.options.dotsoffset.length==2){this.$dots.transformTranslate(this.options.dotsoffset[0],this.options.dotsoffset[1])
}if(this.options.containsVideo){this.addClass("slick-containsVideo")
}else{this.removeClass("slick-containsVideo")
}this.$arrowprev.fixTouchEvents();
this.$arrownext.fixTouchEvents();
return this
};
this.setConfig=function(d){this.options=$.extend({},this.options,d);
this.slick("slickSetOption",this.options);
return this
};
this.setConfigOnDesktop=function(d){this.options.responsive[0].settings=$.extend({},this.options.responsive[0].settings,d);
this.slick("slickSetOption",this.options);
return this
};
this.setConfigOnTablet=function(d){this.options.responsive[1].settings=$.extend({},this.options.responsive[1].settings,d);
this.slick("slickSetOption",this.options);
return this
};
this.setConfigOnPhone=function(d){this.options.responsive[2].settings=$.extend({},this.options.responsive[2].settings,d);
this.slick("slickSetOption",this.options);
return this
};
this.refresh=function(){this.slick("refresh");
return this
};
this.loadPager=function(){this.removeClass("slick-containsPager");
if(this.options.pager&&!this.$pager.length){this.$pager=$("<div/>",{"class":"slick-pager",html:'<span class="nb">&nbsp;</span><span class="total">&nbsp;</span>'});
this.$pager.appendTo(this.$parent)
}this.verifPager();
return this
};
this.verifPager=function(){this.removeClass("slick-containsPager");
if(!this.$pager.length){return this
}if(this.options.pager==false){this.$pager.remove();
return this
}if(this.options.pagerdisplay=="auto"){if(this.countitems<=this.options.slidesToShow){this.$pager.remove();
return this
}}this.addClass("slick-containsPager");
this.$pager.$nb=$(".nb",this.$pager);
this.$pager.$total=$(".total",this.$pager);
if(this.options.buttons&&this.options.pagerposition=="auto"){this.options.pagerposition=this.options.buttonsposition
}this.$pager.removeClass("slick-pager--left").removeClass("slick-pager--center").removeClass("slick-pager--right");
if(this.options.pagerposition){this.$pager.addClass("slick-pager--"+this.options.pagerposition)
}if(this.options.buttons&&this.options.buttonsoverlay){this.$pager.addClass("overlay")
}else{this.$pager.removeClass("overlay")
}if(this.options.invertcolor){this.$pager.addClass("invertcolor")
}else{this.$pager.removeClass("invertcolor")
}if(this.options.containsVideo){this.$pager.addClass("containsVideo")
}else{this.$pager.removeClass("containsVideo")
}if(this.options.pageroffset!=null&&typeof(this.options.pageroffset)=="object"&&this.options.pageroffset.length==2){this.$pager.transformTranslate(this.options.pageroffset[0],this.options.pageroffset[1]);
this.$pager.transformTranslate(this.options.pageroffset[0],this.options.pageroffset[1])
}var e=parseInt((this.currentindex?this.currentindex:0)+1);
var d=parseInt(this.countitems);
this.$pager.$nb.text(e);
this.$pager.$total.text(d);
return this
};
this.loadButtons=function(){this.removeClass("slick-buttons").removeClass("slick-buttons--left").removeClass("slick-buttons--center").removeClass("slick-buttons--right").removeClass("slick-buttons--overlay");
if(this.options.buttons){this.addClass("slick-buttons").addClass("slick-buttons--"+this.options.buttonsposition);
if(this.options.buttonsoverlay){this.addClass("slick-buttons--overlay")
}else{this.removeClass("slick-buttons--overlay")
}}else{}};
this.events=function(d){this.$arrowprev.unbind("click.sliderarrows");
this.$arrownext.unbind("click.sliderarrows");
if(typeof(this.options.callback)=="function"){this.$arrowprev.bindFirst("click.sliderarrows",{"$slick":this,args:d},function(f){return f.data.$slick.options.callback.apply(f.data.$slick,["previous",f,arguments[0]])
});
this.$arrownext.bindFirst("click.sliderarrows",{"$slick":this,args:d},function(f){return f.data.$slick.options.callback.apply(f.data.$slick,["next",f,arguments[0]])
})
}this.unbind("reloaditems.sliderslick").bind("reloaditems.sliderslick",{"$slick":this},function(f){f.data.$slick.inititems().loadButtons()
});
this.$arrowprev.bindFirst("click.slidefocus",{"$slick":this},function(f){if(!DocumentManager.isPhone){f.data.$slick.$list.attr("tabindex",0).focus()
}});
this.$arrownext.bindFirst("click.slidefocus",{"$slick":this},function(f){if(!DocumentManager.isPhone){f.data.$slick.$list.attr("tabindex",0).focus()
}});
$(window).unbind("resize.sliderslick");
if(typeof(this.options.resize)=="function"){$(window).bindDebounce("resize.sliderslick",{"$slider":this},function(f){if(typeof(f.data)!="undefined"&&typeof(f.data.$slider.options.resize)=="function"){f.data.$slider.options.resize.apply(f.data.$slider,[])
}},20)
}};
this.gotoprevious=function(e,d){this.slick("slickPrevious");
return this
};
this.gotonext=function(e,d){this.slick("slickNext");
return this
};
this.gotoindex=function(d,e){if(typeof(e)=="undefined"){e=true
}this.slick("slickGoTo",d,!e);
return this
};
this.gototabkey=function(f){var d=this.$items.filter('[data-tabskey="'+f+'"]').first();
if(!d.length){d=this.$items.find('[data-tabskey="'+f+'"]').first().closest(".slick-slide")
}if(d.length){var e=d.data("slick-filterindex");
this.gotoindex(e)
}return this
};
this.filterkey=function(d){this.removefilter();
this.slick("slickFilter","[data-filterkey="+d+"]");
this.data("slick-filter",d);
if(this.options.filter){this.filters.current.key=d
}return this
};
this.removefilter=function(d){this.slick("slickGoTo",0);
this.slick("slickUnfilter");
return this
};
this.disablePrevArrow=function(d){return this.disableArrow("prev",d)
};
this.disableNextArrow=function(d){return this.disableArrow("next",d)
};
this.getCopySlides=function(f){var e=f.data("slick-filterindex");
var d=(!f.hasClass("slick-cloned"))?".slick-slide.slick-cloned":".slick-slide:not(.slick-cloned)";
return this.find(d).filter('[data-slick-filterindex="'+e+'"]')
};
this.disableArrow=function(e,d){var f=null;
switch(e){case"prev":f=this.$arrowprev;
break;
case"next":f=this.$arrownext;
break
}if(f){if(d){f.addClass("slick-disabled").attr("aria-disabled","true")
}else{f.removeClass("slick-disabled").attr("aria-disabled","false")
}}return this
};
this.__constructor__=function(d){if(d){this.inititems()
}return this
};
return this.__constructor__(b)
};
$.fn.slickExternalElem=function(b){this.config=$.extend({},{type:null,parentselector:null},b);
this.__constructor__=function(){this.$parent=this.config.parentselector!=null?this.closest(this.config.parentselector):this.parent();
this.$slider=$(".sliderslick",this.$parent);
if(this.config.type==null){if(this.is("[data-tabskey]")){this.config.type="tabulation"
}else{if(this.is("[data-filterkey]")){this.config.type="filter"
}}}if(this.config.type=="tabulation"){this.key=this.data("tabskey");
this.text=this.data("tabstext")
}else{if(this.config.type=="filter"){this.key=this.data("filterkey");
this.text=this.data("filtertext")
}}if(this.text==undefined){this.text=this.key
}return this
};
this.triggerEvent=function(){if(this.config.type=="filter"){this.__filter__()
}return this
};
this.__filter__=function(){var c=$(".sliderslick__container",this.$slider).slickContainer();
if(typeof(this.key)!="undefined"&&this.key){if(c.filters.current.key!=this.key){c.filterkey(this.filterkey)
}}else{c.removefilter()
}return this
};
return this.__constructor__()
};
$.fn.S7VideoContainer=function(conf){this.config=$.extend({},{containerId:null,params:S7Video.params},conf);
this.__constructor__=function(){this.id=this.attr("id");
this.config.containerId=this.attr("id");
this.$btnlecturepause=$(".s7playpausebutton",this);
this.$iconplay=$('.s7iconeffect[state="play"]',this);
this.$iconplay.$title=$("[data-text]",this).first();
this.title=this.data("iconplay-text");
this.onPlay=this.hasClass("onPlay");
if(!this.data("loaded")){this.$btnlecturepause.attr("selected","true")
}this.data("loaded",true);
return this
};
this.loadTitle=function(){if(this.$iconplay.length&&!this.$iconplay.$title.length&&!this.hasClass("video-has-title")&&this.title){this.$iconplay.empty();
this.$iconplay.$title=$("<span />").attr("data-text",this.title).appendTo(this.$iconplay);
this.addClass("video-has-title");
this.reloadPosTitle()
}return this
};
this.reloadPosTitle=function(){if(this.$iconplay.$title.length){var _posicon_=this.$iconplay.getPosition();
var _postitle_=this.$iconplay.$title.getPosition();
var _paddingtitle_=this.$iconplay.$title.padding();
this.$iconplay.$title.css({left:this.$iconplay.width(),width:this.width()-_posicon_.left-_paddingtitle_.left-_paddingtitle_.right});
_posicon_=this.$iconplay.getPosition();
_postitle_=this.$iconplay.$title.getPosition();
var _toptitle=(_posicon_.height/2)-(_postitle_.height/2);
this.$iconplay.$title.css({top:_toptitle})
}return this
};
this.loadVideo=function(){this.empty();
if(this.closest(".slick-cloned").length){return
}if(typeof(arguments[0])!="undefined"&&arguments[0]){this.config.params.asset=arguments[0]
}else{this.config.params.asset=this.data("url-video")
}if(this.data("video-serverurl")!=null){this.config.params.videoserverurl=this.data("video-serverurl")
}if(this.data("video-contenturl")!=null){this.config.params.contenturl=this.data("video-contenturl")
}if(typeof(arguments[1])!="undefined"&&arguments[1]){this.config.params.posterimage=arguments[1]
}else{this.config.params.posterimage=this.data("url-image")
}if(!this.config.params){if(console){console.error("params is empty",this.config.containerId)
}return this
}if(!this.config.params.asset){if(console){console.error("asset is empty",this.config.containerId)
}return this
}if(!this.config.params.posterimage){this.config.params.posterimage=this.config.params.asset
}if(this.config.params.asset&&this.config.params.asset.substr(0,1)=="/"){this.config.params.asset=this.config.params.asset.substr(1)
}if(this.config.params.posterimage&&this.config.params.posterimage.substr(0,1)=="/"){this.config.params.posterimage=this.config.params.posterimage.substr(1)
}if(typeof(this.config.params.posterimage)=="undefined"){this.config.params.posterimage=this.config.params.asset
}this.config.params.autoplay=this.data("autoplay")?"1":"0";
if(this.is("[data-params]")){var sparams_temp=this.data("params");
var params_temp=undefined;
eval("try { params_temp = "+sparams_temp+"; } catch(err) { if(console) console.log(err); }");
if(typeof(params_temp)!=undefined){this.config.params=$.extend({},this.config.params,params_temp)
}}if(typeof(this.config.params.preload)=="function"){this.config.params.preload.apply(this,[])
}this.__creatinstance__.apply(this,[]);
return this
};
this.__creatinstance__=function(){try{var $s7videoviewer=new s7viewers.VideoViewer(this.config);
$s7videoviewer.setHandlers({initComplete:function(){},onPlay:this.config.params.onplay,onPause:this.config.params.onpause,onBegin:this.config.params.onbegin,onMiddle:this.config.params.onmiddle,onFinish:this.config.params.onfinish,trackEvent:function(){try{var id=arguments[2];
var info=arguments[4];
if(typeof(info)!="undefined"){var infos=info.split(",");
var type=infos[0];
var typevalue=infos[1];
var $elem=$("#"+id);
var $viewer=$elem.closest(".s7videoviewer").S7VideoContainer();
if(!$elem.length){return
}if(!$viewer.length){return
}if(typeof(type)!="undefined"){if((type=="PAUSE"||type=="PLAY")&&!$viewer.data("s7video-load")){$viewer.data("s7video-load",true).attr("data-s7video-load",true);
$viewer.bindEvents()
}if(type=="PLAY"){var $analytics=$elem.closest(".s7videoviewer").AnalyticsElem();
$analytics.sendVideoLaunchTrack();
var $others7=$('.s7videoviewer:not([id="'+$viewer.attr("id")+'"])');
$others7.each(function(){$(this).S7VideoContainer().pause()
})
}if(type=="PLAY"){if(typeof(this.onPlay)=="function"){this.onPlay.apply($viewer,[id,infos])
}}if(type=="PAUSE"){if(typeof(this.onPause)=="function"){this.onPause.apply($viewer,[id,infos])
}}if(type=="MILESTONE"){if(typevalue=="0"&&typeof(this.onBegin)=="function"){this.onBegin.apply($viewer,[id,infos])
}if(typevalue=="50"&&typeof(this.onMiddle)=="function"){this.onMiddle.apply($viewer,[id,infos])
}if(typevalue=="100"&&typeof(this.onFinish)=="function"){this.onFinish.apply($viewer,[id,infos])
}}}$viewer.loadTitle(type)
}}catch(err){console.log("[S7video] ERR",err)
}}});
$s7videoviewer.init()
}catch(err){if(console){console.error("error on videos7",this.config.containerId,err)
}return this
}};
this.dispose=function(){return this
};
this.verifPosition=function(){try{var videoPos=this.getPosition();
if(!videoPos.isVisible()){this.pause()
}}catch(err){if(console){console.error("error on videos7",this.config.containerId,err)
}}return this
};
this.isLecture=function(){this.onPlay=this.hasClass("onPlay");
return this.onPlay
};
this.pauseorlecture=function(lecture){if(!this.$btnlecturepause.length){this.$btnlecturepause=$(".s7playpausebutton",this).first()
}if(!this.$btnlecturepause.length){return this
}this.$btnlecturepause.trigger("click");
this.reload();
return this
};
this.lecture=function(){if(!this.$btnlecturepause.length){this.$btnlecturepause=$(".s7playpausebutton",this).first()
}if(!this.$btnlecturepause.length){return this
}if(!this.isLecture()){this.$btnlecturepause.trigger("click");
this.reload()
}return this
};
this.pause=function(){if(!this.$btnlecturepause.length){this.$btnlecturepause=$(".s7playpausebutton",this).first()
}if(!this.$btnlecturepause.length){return this
}if(this.isLecture()){this.$btnlecturepause.trigger("click");
this.reload()
}return this
};
this.reload=function(reloadButton){if(!this.$btnlecturepause.length){return null
}islecture=this.$btnlecturepause[0].getAttribute("selected")!="true";
if(!islecture){this.removeClass("onPlay")
}else{this.addClass("onPlay")
}this.loadTitle();
return this
};
this.unbindEvents=function(){$(document).unbind("keyup.s7video");
this.unbind("mouseover.s7video");
this.unbind("mouseleave.s7video");
return this
};
this.bindEvents=function(){this.unbind("lecture.s7video").bind("lecture.s7video",{"$obj":this},function(e){e.data.$obj.lecture()
});
this.unbind("pause.s7video").bind("pause.s7video",{"$obj":this},function(e){e.data.$obj.pause()
});
this.unbind("pauseorlecture.s7video").bind("pauseorlecture.s7video",{"$obj":this},function(e){e.data.$obj.pauseorlecture()
});
return this
};
return this.__constructor__()
};
var S7Video={params:{serverurl:window.location.origin+"/is/image",contenturl:null,config:"/etc/dam/presets/viewer/Video",videoserverurl:null,posterimage:null,asset:null,autoplay:"0",smoothing:"1"},verifPosition:function(){$(".s7videoviewer[data-s7video-load=true]").each(function(){var b=$(this).S7VideoContainer().verifPosition()
})
},verifIds:function(c,b){if(b==undefined){b="_"
}var e=c.attr("id");
c.attr("id",e.replaceAll(":","_"));
var d=$('[id="'+e+'"]');
if(d.length>1){d.each(function(f){var g=$(this).attr("id");
$(this).attr("data-originalid",g).attr("id",g+b+f)
})
}},reload:function(){$(".s7videoviewer[data-s7video-load=true]").each(function(){var b=$(this).S7VideoContainer().reload()
})
},resize:function(){$(".s7videoviewer[data-s7video-load=true]").each(function(){var b=$(this).S7VideoContainer().reloadPosTitle()
})
},init:function(){$(".s7videoviewer").each(function(){var b=$(this);
S7Video.verifIds(b)
});
$('.s7videoviewer[data-autoplay="true"]').data("autoplay",false).attr("data-autoplay",false).first().data("autoplay",true).attr("data-autoplay",true);
$(".s7videoviewer").each(function(){$video=$(this);
if($video.data("autoload")==true){if($video.closest(".slick-cloned").length){return
}$video.S7VideoContainer().loadVideo()
}});
$(window).unbind("resize.s7video").bindDebounce("resize.s7video",function(){S7Video.resize()
},300);
$(window).unbind("scroll.s7video").bindDebounce("scroll.s7video",function(){S7Video.verifPosition();
S7Video.reload()
},80);
setInterval(function(){S7Video.reload()
},50)
}};
$.fn.AirbusNiceScroll=function(b){this.config=$.extend({},{cursorcolor:"#658BC1",cursorwidth:"7px",cursoropacitymin:0,cursoropacitymax:1,autohidemode:true,horizrailenabled:true,zindex:9999999999,cursorborder:"0",cursorborderradius:"0",railoffset:{top:0,left:0}},b);
this.__constructor__=function(){this.niceScroll(this.config);
return this
};
return this.__constructor__()
};
$.fn.LightboxNiceScroll=function(b){this.config=$.extend({},{cursorcolor:"#DADADA",horizrailenabled:false,cursorwidth:"7px",cursoropacitymin:0,cursoropacitymax:1,autohidemode:true,zindex:9999999999,cursorborder:"0",cursorborderradius:"0",railoffset:{top:0,left:20}},b);
this.__constructor__=function(){this.niceScroll(this.config);
return this
};
return this.__constructor__()
};
$.fn.AirbusTableNiceScroll=function(b){this.config=$.extend({},{cursoropacitymin:0,cursoropacitymax:1,autohidemode:true,zindex:9999999,horizrailenabled:true,autohidemode:false,touchbehavior:true,cursordragontouch:true,railpadding:{top:0,right:35,left:55,bottom:0},cursorwidth:"23px",cursorcolor:"#0d345f",cursorborderradius:"25px",cursorborder:"2px solid transparent",grabcursorenabled:true,railoffset:{top:50,left:0}},b);
this.__constructor__=function(){this.niceScroll(this.config);
return this
};
return this.__constructor__()
};
$.fn.AirbusNavigationNiceScroll=function(b){this.config=$.extend({},{cursoropacitymax:0},b);
this.__constructor__=function(){this.niceScroll(this.config);
return this
};
return this.__constructor__()
};
$.fn.LimitedPlaceholder=function(b){this.config=$.extend({},{limit:70,suffix:" ...",reload:false},b);
this.__constructor__=function(){if(this.length!=1){return this
}var c=this.data("placeholder-limit");
if(c){var d=parseInt(c);
if(!isNaN(c)){this.config.limit=d
}}this.data("placeholder-limit",this.config.limit);
if(this.config.reload){this.removeClass("placeholder-cut")
}if(this.hasClass("placeholder-cut")||!this.is(":visible")){return this
}this.limitCaracs();
return this
};
this.limitCaracs=function(){if(this.length!=1){return this
}this.addClass("placeholder-cut");
var k=parseInt(this.css("font-size")),d=this.outerWidth(),g=this.attr("placeholder"),l="",e=parseInt(this.data("placeholder-limit"));
if(!g){return this
}if(!e){return this
}if(isNaN(e)){return this
}var i=g.trim().replace(/  /g," ").split(" ");
var h=$("<span/>",{"class":"tmpplaceholder"}).html(g).css({position:"absolute",left:-99999,top:-9999,"font-size":k+"px"}).appendTo(this.parent());
if(h.width()+e>d){h.html("").empty();
h.html(this.config.suffix);
var c=this;
var j=this.config.suffix;
var f=h.width();
h.html("").empty();
i.forEach(function(m){h.html(h.html()+" "+m);
if(h.width()+e+f>d){l+=j;
c.attr("placeholder",l);
h.remove();
return
}l+=m+" "
})
}return this
};
return this.__constructor__()
};
var LimitedPlaceholder={init:function(){$(".limited-placeholder").each(function(){$(this).LimitedPlaceholder()
})
}};
function popupCenter(b,k,l,f){var j=window.screenLeft!==undefined?window.screenLeft:screen.left;
var c=window.screenTop!==undefined?window.screenTop:screen.top;
var d=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;
var m=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;
var e=((d/2)-(l/2))+j;
var i=((m/3)-(f/3))+c;
var g=window.open(b,k,"scrollbars=yes, width="+l+", height="+f+", top="+i+", left="+e);
if(g&&g.focus){g.focus()
}}$.fn.RssbLink=function(){this.href=this.attr("href");
this.text=this.data("rssb-text");
this.width=this.data("rssb-width");
this.height=this.data("rssb-height");
if(this.width==undefined){this.width=580
}if(this.height==undefined){this.height=470
}this.openPopup=function(){popupCenter(this.href,this.text,this.width,this.height);
return this
};
return this
};
$(function(){$(document).on("click",".rrssb-buttons a.popup",function(b){b.preventDefault();
$(this).RssbLink().openPopup()
})
});
$.fn.TruncateParagraphe=function(c){var b=b=$.extend({},{fncontainer:function(){return $(this)
},fntrunc:function(){return this.text().split(this.vars.separate_iteration)
},lines:3,separate_iteration:" ",supplement_text:" ...",callback:null},c);
if(typeof(b.fncontainer)!="function"){return this
}if(typeof(b.fntrunc)!="function"){return this
}this.each(function(){var e=$(this);
var d=e.data("original-text");
if(d!=undefined){e.text(d)
}$container=b.fncontainer.apply(e,[]);
e.vars={"$container":$container,originaltext:e.text(),height:$container.outerHeight(),line_height:$container.lineHeight(),nb_lines:b.lines,supplement_text:b.supplement_text,separate_iteration:b.separate_iteration,finaltext:"",end:false};
if(e.vars.nb_lines>=1){e.vars.splittext=b.fntrunc.apply(e,[]);
e.vars.total_height=e.vars.line_height*e.vars.nb_lines;
e.css({visibility:"hidden"});
e.empty();
e.data("original-text",e.vars.originaltext);
e.vars.splittext.forEach(function(g){if(e.vars.end){return
}e.text(e.vars.finaltext+e.vars.separate_iteration+g+e.vars.supplement_text);
var f=e.vars.$container.outerHeight();
if(f<=e.vars.total_height){if(e.vars.finaltext){e.vars.finaltext+=e.vars.separate_iteration
}e.vars.finaltext+=g
}else{e.vars.finaltext+=e.vars.supplement_text;
e.vars.end=true
}});
e.text(e.vars.finaltext)
}else{e.text(e.vars.originaltext)
}e.css({visibility:"visible"}).addClass("truncage-paragraphe");
if(typeof(b.callback)=="function"){b.callback.apply(e,[])
}return
});
return this
};
$.extend({Animate:function(b,c){$(b).Animate(c)
}});
$.fn.extend({Animate:function(c,b){var d=(b?this.find(b):this);
d.reset=function(){this.removeClass("animated").removeClass("animate--"+this.name).removeData("anim-name").removeAttr("data-anim-name")
};
d.name=d.data("anim-name");
d.selector=b;
if(typeof(c)!="undefined"){if(d.name!=c){d.reset();
d.name=c;
d.addClass("animate--"+d.name);
setTimeout(function(){d.addClass("animated")
},1)
}}if(typeof(d.name)!="undefined"){d.data("anim-name",d.name).attr("data-anim-name",d.name)
}d.resetOnAnimateEnd=function(){this.onAnimateEnd(this.name,function(){this.reset()
})
};
return d
},onTransitionEnd:function(c,e,b){var d="transitionend."+c+"";
return this.unbind(d).one(d,{callback:e,args:b,nameevent:c},function(g){var f=$(this);
if(typeof(g.data.callback)=="function"){g.data.callback.apply(f.Animate(),[g,g.data.args])
}})
},onAnimateEnd:function(c,d,b){return this.one("webkitAnimationEnd."+c+" mozAnimationEnd."+c+" MSAnimationEnd."+c+" oanimationend."+c+" animationend."+c+"",{callback:d,args:b},function(f){if(typeof(f.data.callback)=="function"){f.data.callback.apply($(this).Animate(),[f,f.data.args])
}})
},hoverAnimate:function(d,c,b){return this.hoverInAnimate([d,b]).hoverOutAnimate([c,b])
},hoverInAnimate:function(){if(arguments[0]==undefined){arguments[0]=this.data("anim-hoverin")
}return this.bindAnimate("mouseenter",arguments[0])
},hoverOutAnimate:function(){if(arguments[0]==undefined){arguments[0]=this.data("anim-hoverout")
}return this.bindAnimate("mouseleave",arguments[0])
},bindAnimate:function(){var obj={animName:undefined,selector:undefined};
if(Array.isArray(arguments[1])){if(typeof(arguments[1][0])!="string"){for(var i=0;
i<arguments[1].length;
i++){this.bindAnimate(arguments[0],arguments[1][i])
}return this
}obj.animName=arguments[1][0];
obj.selector=arguments[1][1]
}else{if(typeof(arguments[1])=="object"){obj=arguments[1]
}else{if(typeof(arguments[1])=="string"&&arguments[1].startsWith("[")){var arr=eval(""+arguments[1]+"");
this.bindAnimate(arguments[0],arr);
return this
}else{obj.animName=arguments[1]
}}}return this.bind(arguments[0],obj,function(e){var $obj=$(this);
$obj.Animate.apply($obj,[e.data.animName,e.data.selector])
})
}});
var Animate={init:function(){$("[data-anim-hoverin]").each(function(){$(this).hoverInAnimate()
});
$("[data-anim-hoverout]").each(function(){$(this).hoverOutAnimate()
})
}};
$.fn.AutoCompleteImpl=function(){if(!this||!this.length){return this
}var b=this.autocomplete({minLength:3,autoFocus:false,focus:function(c,d){c.preventDefault();
return false
},select:function(c,d){$(this).val(arguments[1].item.label);
return false
},source:function(g,c){minLength:1;
var f=window.location.pathname;
var e=f.substring(f.lastIndexOf("/")+1).split(".")[0];
var h=$(".loading",this),d=e+"/jcr:content.autoComplete.json";
$.ajax({url:d,async:true,dataType:"json",context:{$input:this},data:{term:g.term},success:function(i){if(typeof(i.suggestions)=="object"&&i.suggestions.length>0){c(i.suggestions)
}}})
}}).data("ui-autocomplete");
b._renderItem=function(e,h){var f=this.term;
var g=new RegExp("("+f+")","gi");
var d=h.label.replace(g,'<span class="autocomplete-highlight">$&</span>');
var c=$("<a/>").html(d);
var i=$("<li/>").append(c);
i.appendTo(e);
return i
};
return this
};
var getSizeImageFromHeader=function(b,d){var c=$.ajax({url:b.attr("href"),success:function(f,e,g){length=Math.round(c.getResponseHeader("content-length")/1024);
d.text(length+"KB");
b.attr("data-size",length)
}})
};
function s7jsonResponse(data,reqId){return eval(data)
}$.fn.GetPropsForDownloadImage=function(e,d){var b=$(this);
var c;
if(true){$.ajax({url:b.attr("href"),data:{req:"props,json"},success:function(g){var i=s7jsonResponse(g,"");
var f=i["image.length"];
var h=i["image.height"];
var j=i["image.width"];
if(f==0){getSizeImageFromHeader(b,e)
}else{f=Math.round(f/1024);
e.text(f+" kB");
b.attr("data-size",f)
}c=j+" x "+h+" px";
d.text(c);
b.attr("data-dimension",c)
},error:function(f,h,g){console.log(h)
}})
}};
$.fn.StickyComponent=function(){this.loaddatas=function(){if(this.closest("header").length){this.$parent=this.closest(".c-header");
this.isHeader=true
}else{this.$parent=this.closest(".parbase");
this.isHeader=false
}this.pos=this.length?this.$parent.getPosition():{};
this.existLayout=this.data("sticky-layout");
if(this.existLayout==undefined){this.existLayout=false
}this.id=this.$parent.data("sticky-id");
if(this.id==undefined){this.id=""
}this.isSticky=this.$parent.is(".sticky");
this.isOther=this.$parent.is(".sticky--other");
this.isOut=this.$parent.is(".sticky--out");
this.isCurrent=this.isSticky&&this.id==$.Sticky.currentid;
this.datas={};
this.datas.height=this.$parent.data("sticky-height");
this.datas.top=this.$parent.data("sticky-top");
this.datas.initialtop=this.$parent.data("sticky-initialtop");
this.datas.bottom=this.datas.height+this.datas.top;
return this
};
this.init=function(){this.id=arguments[0];
var b=parseInt(this.height());
this.addClass("sticky-component");
this.$parent.data("sticky-height",b).data("sticky-top",0).data("sticky-initialtop",this.pos.top).data("sticky-id",this.id).attr("data-sticky-id",this.id);
if(!this.isHeader){this.$parent.css({height:this.pos.height})
}this.loaddatas();
return this
};
this.layout=function(){var d=15;
if(!this.isHeader){d=50
}if(this.pos.top-d<=$.Sticky.winscrolltop){if(this.existLayout){return this
}this.existLayout=true;
if(this.isHeader){this.Animate("opacityStickyIn").onTransitionEnd("sticky",function(){this.addClass("opacitySticky").reset()
})
}else{this.removeClass("no-gradient").addClass("gradient");
var b=$(".t-tablist",this);
var c=b.hasClass("t-tablist--invertcolor");
this.$parent.data("sticky-isinvertcolor",c).attr("data-sticky-isinvertcolor",c);
if(c){b.removeClass("t-tablist--invertcolor")
}}}else{if(!this.existLayout){return this
}this.existLayout=false;
if(this.isHeader){this.Animate("opacityStickyOut").onTransitionEnd("sticky",function(){this.removeClass("opacitySticky").reset()
})
}else{this.removeClass("gradient").addClass("no-gradient");
var c=this.$parent.data("sticky-isinvertcolor");
if(c){this.find(".t-tablist").addClass("t-tablist--invertcolor")
}}}this.data("sticky-layout",this.existLayout).attr("data-sticky-layout",this.existLayout);
return this
};
this.sticky=function(){if(this.isOther){var c=$.Sticky.getCurrentSticky();
var d=parseInt(c.pos.top-$.Sticky.winscrolltop-this.datas.height);
if(d<=0){this.setTop(d)
}}if(this.isSticky&&this.isCurrent){var b=0;
$.Sticky.applyOtherSticky(function(){b+=this.datas.bottom
});
this.setTop(b)
}return this
};
this.setTop=function(b){if(this.datas.height+b<=0){b=this.datas.height*-1
}this.css({top:b});
this.$parent.data("sticky-top",b);
this.datas.top=b;
return this
};
this.setSticky=function(c){if(c){if(this.id!=$.Sticky.currentid){this.isCurrent=false;
this.setStickyOther(true)
}else{this.isCurrent=true;
this.setStickyOther(false)
}if(!this.isSticky){var d=0;
$.Sticky.applyOtherSticky(function(){d+=this.datas.bottom
});
this.setTop(d)
}this.$parent.addClass("sticky")
}else{this.setStickyOther(false);
this.setStickyOut(false);
this.setTop(0);
this.$parent.removeClass("sticky")
}this.isSticky=c;
return this
};
this.setStickyOther=function(c){if(c){this.$parent.addClass("sticky--other");
if($.Sticky.winscrolltop>this.datas.top){this.setStickyOut(true)
}else{this.setStickyOut(false)
}}else{this.$parent.removeClass("sticky--other");
this.setStickyOut(false)
}this.isOther=c;
return this
};
this.setStickyOut=function(c){if(c){this.$parent.addClass("sticky--out")
}else{this.$parent.removeClass("sticky--out")
}this.isOut=c;
return this
};
this.loaddatas();
return this
};
$.Sticky={winscrolltop:0,currentid:0,list:[],init:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){return this
}$.Sticky.$components=$(".c-header__secondnav, .c-anchornavigation");
$.Sticky.$components.each(function(b){$(this).StickyComponent().init("component-"+b)
});
this.load();
return this
},load:function(){if(DocumentManager.isPhone){return this
}if($.Sticky.$components==undefined){return this
}$.Sticky.winscrolltop=$(window).scrollTop();
$.Sticky.currentid=undefined;
$.Sticky.list=[];
var b=0;
$.Sticky.$components.each(function(){var c=$(this).StickyComponent();
if(c.pos.top>$.Sticky.winscrolltop+b){c.setSticky(false)
}else{$.Sticky.currentid=c.id;
$.Sticky.list.push(c.id);
b+=c.datas.height
}});
$.each($.Sticky.list,function(){var d=this;
var c=$.Sticky.getSticky(d);
c.setSticky(true)
});
$.Sticky.$components.each(function(){var c=$(this).StickyComponent();
c.layout().sticky()
});
return this
},getSticky:function(b){return $('[data-sticky-id="'+b+'"] .sticky-component').StickyComponent()
},getCurrentSticky:function(){return $.Sticky.getSticky($.Sticky.currentid)
},applySticky:function(c,b){if(typeof(b)=="function"){b.apply($.Sticky.getSticky(c),[])
}return this
},applyCurrentSticky:function(b){if(typeof(b)=="function"){b.apply($.Sticky.getCurrentSticky(),[])
}return this
},applyOtherSticky:function(b){return $(".sticky.sticky--other .sticky-component").each(function(){if(typeof(b)=="function"){b.apply($(this).StickyComponent(),arguments)
}});
return this
},applyOutSticky:function(b){return $(".sticky.sticky--out .sticky-component").each(function(){if(typeof(b)=="function"){b.apply($(this).StickyComponent(),arguments)
}});
return this
}};
$.fn.TreeViewItem=function(){this.$items=$("> li",this);
this.init=function(b){if(b==undefined){b=1
}this.addClass("level_"+b);
if(!this.$items.find("> ul").length){this.addClass("level-withoutchilds")
}else{this.removeClass("level-withoutchilds")
}this.$items.each(function(){var c=$(this).TreeViewItemRow().init(b).events()
});
this.addClass("success");
return this
};
this.events=function(){return this
};
this.collapse=function(){this.closest("li").addClass("animate");
this.slideUp(400,function(){var b=$(this).TreeViewItem();
var c=b.closest("li").TreeViewItemRow();
c.data("tvw-expand",false).attr("data-tvw-expand",false).removeClass("animate")
});
return this
};
this.expand=function(){this.closest("li").addClass("animate");
this.slideDown(400,function(){var b=$(this).TreeViewItem();
var c=b.closest("li").TreeViewItemRow();
c.data("tvw-expand",true).attr("data-tvw-expand",true).removeClass("animate")
});
return this
};
return this
};
$.fn.TreeViewItemRow=function(){this.level=this.data("tvw-level");
this.expand=this.data("tvw-expand");
this.$icon=$("> i",this);
this.$link=$("> a",this);
this.$child=$("> ul",this);
this.$parent=this.closest("ul");
this.init=function(c){this.level=c;
if(this.level==undefined){this.level=1
}if(this.expand==undefined){this.expand=(TreeView.expandlevel.includes(c))
}this.data("tvw-level",this.level).attr("data-tvw-level",this.level).data("tvw-expand",this.expand).attr("data-tvw-expand",this.expand).data("tvw-haschild",this.$child.length?"true":false).attr("data-tvw-haschild",this.$child.length?"true":false);
if(this.$child.length){this.addClass("has-child")
}else{this.removeClass("has-child")
}if(this.$child.length){var b=++this.level;
this.$child.TreeViewItem().init(b).events()
}return this
};
this.events=function(){this.$icon.unbind("click.treeview").bindFirst("click.treeview",{},function(){$(this).closest("li").TreeViewItemRow().toogleView()
});
return this
};
this.toogleView=function(){if(!this.$child.length){return this
}if(this.expand){this.$child.TreeViewItem().collapse()
}else{this.$child.TreeViewItem().expand()
}this.expand=!this.expand;
return this
};
return this
};
var TreeView={expandlevel:[1],init:function(){$(".treeview").each(function(){$(this).TreeViewItem().init().events()
})
}};
$(function(){$.fn.numberFieldCustom=function(){$('<div class="number-nav"><div class="number-button number-up"><i class="icon-single-up-arrow-icon_f"></i></div><div class="number-button number-down"><i class="icon-single-down-arrow-icon_f"></i></div></div>').appendTo($(this));
this.each(function(){var e=$(this);
var g=e.find('input[type="number"]'),f=e.find(".number-up"),c=e.find(".number-down"),d=g.attr("min"),b=g.attr("max");
f.on("click",function(){var i=parseFloat(g.val());
if(i>=b){var h=i
}else{if(g.val()===""){var h=1
}else{var h=i+1
}}g.val(h);
g.trigger("change")
});
c.on("click",function(){var i=parseFloat(g.val());
if(i<=d){var h=i
}else{var h=i-1
}g.val(h);
g.trigger("change")
})
})
}
});
$(function(){$(".c-form-container form").validator({feedback:{success:"icon-checkmark-icon_f",error:"icon-x-icon_f"}}).on("submit",function(c){if(c.isDefaultPrevented()){}else{var b=grecaptcha.getResponse();
if(b.length==0){c.preventDefault();
$(".c-captcha").addClass("has-error");
$(".captcha .with-errors").show()
}}});
$('.form-group.c-checkbox input[type="checkbox"]').on("click",function(){var b=$(this);
var c=b.closest(".form-group.c-checkbox");
var d=c.find('input[type="checkbox"].hidden');
d.prop("checked",c.find('input[type="checkbox"]:checked').not(d).length?true:false)
})
});
$(document).ready(function(){$(".c-form-select").select2({dropdownPosition:"below",minimumResultsForSearch:-1})
});
(function(d){var e=d.fn.select2.amd.require("select2/defaults");
d.extend(e.defaults,{dropdownPosition:"auto"});
var b=d.fn.select2.amd.require("select2/dropdown/attachBody");
var c=b.prototype._positionDropdown;
b.prototype._positionDropdown=function(){var i=d(window);
var u=this.$dropdown.hasClass("select2-dropdown--above");
var h=this.$dropdown.hasClass("select2-dropdown--below");
var q=null;
var j=this.$container.offset();
j.bottom=j.top+this.$container.outerHeight(false);
var g={height:this.$container.outerHeight(false)};
g.top=j.top;
g.bottom=j.top+g.height;
var t={height:this.$dropdown.outerHeight(false)};
var o={top:i.scrollTop(),bottom:i.scrollTop()+i.height()};
var m=o.top<(j.top-t.height);
var p=o.bottom>(j.bottom+t.height);
var l={left:j.left,top:g.bottom};
var r=this.$dropdownParent;
if(r.css("position")==="static"){r=r.offsetParent()
}var f=r.offset();
l.top-=f.top;
l.left-=f.left;
var k=this.options.get("dropdownPosition");
if(k==="above"||k==="below"){q=k
}else{if(!u&&!h){q="below"
}if(!p&&m&&!u){q="above"
}else{if(!m&&p&&u){q="below"
}}}if(q=="above"||(u&&q!=="below")){l.top=g.top-f.top-t.height
}if(q!=null){this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+q);
this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+q)
}this.$dropdownContainer.css(l)
}
})($);
$.fn.SearchResultForm=function(b){this.events=function(){return this
};
this.loadSearchform=function(c){this.$title.empty();
this.$title.append(c.html())
};
this.events=function(){this.$buttonlist.events()
};
this.__constructor__=function(){this.$title=$("h2",this).first();
this.$buttonlist=$(".c-searchresult__tags",this).SearchResultButtonList();
this.$inputdisplay=$("input.inputDisplay",this).first();
return this
};
return this.__constructor__()
};
$.fn.HighlightKeyword=function(b){this.each(function(){$this=$(this);
var e=$this.html();
var d=new RegExp("("+b+")","ig");
var c=e.replace(d,'<span class="highlight-keyword">$1</span>');
$this.html(c)
})
};
$.fn.SearchResultFilter=function(b){this.removeFilterHidden=function(){this.$filter.each(function(){var c=$(this).SearchResultListFilter();
c.$linkshidden.remove()
});
return this
};
this.removeFilterTag=function(c){this.$filter.each(function(){var f=$(this).SearchResultListFilter();
var e=f.$links.$active.filter('[data-type="'+c+'"]');
var d=f.$linkshidden.filter('[name="'+c+'"]');
if(e.length){e.hasClass("active")?e.find("> i").removeClass("icon-checkmark-icon_f"):e.find("> i").removeClass("icon-checkbox-checked").addClass("icon-checkmark-icon_f");
e.removeClass("filterchk").removeClass("active");
if(!f.$links.filter(".active").length){f.$links.$all.find("> i").removeClass("icon-checkmark-icon_f").addClass("icon-checkbox-checked");
f.$links.$all.addClass("active")
}}else{if(d.length){d.remove()
}}});
return this
};
this.resetFilterEvents=function(){this.$filter.each(function(){var c=$(this).SearchResultListFilter();
c.$links.$enable.unbind("click.searchresult");
c.$links.$disable.unbind("click.searchresult");
c.$select.unbind("selectmenuchange.searchresult").unbind("selectmenuchange.inputtrigger");
c.$datepicker.unbind("change.searchresult").unbind("change.inputtrigger")
});
return this
};
this.loadWidth=function(){this.$tablistcontainer.widthcontainer=this.$tablistcontainer.width();
this.$tablistcontainer.widthtablist=this.$tablistcontainer.$tablist.outerWidth()+19;
this.$tablistcontainer.widthlang=this.$tablistcontainer.$lang.outerWidth();
this.$tablistcontainer.widthtotal=(this.$tablistcontainer.widthlang+this.$tablistcontainer.widthtablist);
this.$tablistcontainer.isValid=this.$tablistcontainer.widthcontainer>=this.$tablistcontainer.widthtotal;
var c=this.$tablistcontainer.widthcontainer-this.$tablistcontainer.widthlang-19;
this.$tablistcontainer.$tablist.css({width:c});
return this
};
this.hideAllCalendar=function(){this.$filter.filter(".t-filter--date").SearchResultListFilter().$datepicker.each(function(){$(this).datepicker("hide")
});
return this
};
this.closeTabsContainer=function(){this.$tabscontainer.filter(".active").each(function(){$(this).fadeOut(200,function(){var c=$(this);
var e=c.data("tabs-content");
var d=$('[data-tabs-id="'+e+'"]',c);
c.removeClass("active").css({display:""});
d.removeClass("active")
})
});
return this
};
this.isExpandBlocMore=function(){var c=$(".item__more",this.$tablistcontainer.$main);
return c.hasClass("expand")
};
this.hideMainBlocMore=function(){var e=$(".item.active",this.$tablistcontainer.$tablist.$main);
var d=$(".item.active > a",this.$tablistcontainer.$tablist.$main);
var c=$(".item__more",this.$tablistcontainer.$tablist.$main);
e.data("tl-active",false).attr("data-tl-active",false).removeClass("active");
d.removeClass("active");
c.removeClass("active");
return this
};
this.showMainBlocMore=function(){var e=$(".item.active",this.$tablistcontainer.$tablist.$main);
var d=$(".item.active > a",this.$tablistcontainer.$tablist.$main);
var c=$(".item__more",this.$tablistcontainer.$tablist.$main);
e.data("tl-active",true).attr("data-tl-active",true).addClass("active");
d.addClass("active");
c.addClass("active");
return this
};
this.checkMainBlocMore=function(){if(DocumentManager.isTablet){if(this.isOpenSubContainer()){this.showMainBlocMore()
}else{this.hideMainBlocMore()
}}return this
};
this.isOpenSubContainer=function(){return this.$tablistcontainer.$sub.is(":visible")
};
this.isContainsActiveSubContainer=function(){return this.$tablistcontainer.$sub.find(".item.active").length!=0
};
this.closeSubContainer=function(){this.$tablistcontainer.$sub.fadeOut(200,function(){SearchResult.$filter.checkMainBlocMore()
});
return this
};
this.openSubContainer=function(){if(this.isOpenSubContainer()){return this
}this.$tablistcontainer.$sub.fadeIn(200,function(){SearchResult.$filter.checkMainBlocMore()
});
return this
};
this.reloadCssClass=function(){if(DocumentManager.isTablet){if(this.isContainsActiveSubContainer()){this.$tablistcontainer.$sub.removeClass("whitebg");
this.$tablistcontainer.$sub.find(".item").removeClass("whitebg")
}else{this.$tablistcontainer.$sub.addClass("whitebg");
this.$tablistcontainer.$sub.find(".item").addClass("whitebg")
}}return this
};
this.events=function(){this.$filter.each(function(){var c=$(this).SearchResultListFilter();
c.FormsLoaderEvents();
c.find(".t-form").FormsLoaderEvents();
c.$links.$enable.unbind("click.searchresult").bindDebounce("click.searchresult",{},SearchResult.ajax.filter,800,false);
c.$links.$disable.unbind("click.searchresult").bind("click.searchresult",{},function(){return false
});
c.$select.unbind("selectmenuchange.searchresult").bindDebounce("selectmenuchange.searchresult",{},function(){c.$datepicker.datepicker("setDate","");
SearchResult.ajax.filter()
},400,false);
c.$datepicker.unbind("change.searchresult").bindDebounce("change.searchresult",{},SearchResult.ajax.filter,400,false);
c.$links.unbind("click.loadinittypes").bindFirst("click.loadinittypes",{},function(){SearchResult.params.initTypes();
return true
});
c.$datepicker.unbind("change.hidecalendar").bindFirst("change.hidecalendar",{},function(){c.$select.prop("selectedIndex",0).selectmenu("refresh");
$(this).datepicker("hide");
return true
})
});
this.$tablistcontainer.$lang.$link.unbind("click.tablist").bindFirst("click.tablist",{$tablist:this.$tablistcontainer.$tablist},function(c){c.data.$tablist.find(".item__more").removeClass("active");
TabList.hideAllBlocMore()
});
this.unbind("hidemainblocmore.searchresult").bind("hidemainblocmore.searchresult",{},function(){SearchResult.$filter.hideMainBlocMore()
});
this.unbind("showmainblocmore.searchresult").bind("hidemainblocmore.searchresult",{},function(){SearchResult.$filter.showMainBlocMore()
});
this.unbind("opensubcontainer.searchresult").bind("opensubcontainer.searchresult",{},function(){SearchResult.$filter.openSubContainer()
});
this.unbind("closesubcontainer.searchresult").bind("closesubcontainer.searchresult",{},function(){SearchResult.$filter.closeSubContainer()
});
this.unbind("closetabscontainer.searchresult").bind("closetabscontainer.searchresult",{},function(){SearchResult.$filter.closeSubContainer().closeTabsContainer()
});
return this
};
this.__constructor__=function(){this.$filter=$(".t-filter",this);
this.$tablistcontainer=$(".tablist-container",this);
this.$tablistcontainer.$main=this.$tablistcontainer.filter(".mainlevel");
this.$tablistcontainer.$sub=this.$tablistcontainer.filter(".sublevel");
this.$tablistcontainer.$tablist=$(".t-tablist",this.$tablistcontainer);
this.$tablistcontainer.$tablist.$main=$(".t-tablist",this.$tablistcontainer.$main);
this.$tablistcontainer.$tablist.$sub=$(".t-tablist",this.$tablistcontainer.$sublevel);
this.$tablistcontainer.$lang=$(".lang",this.$tablistcontainer).first();
this.$tablistcontainer.$lang.$link=$("a",this.$tablistcontainer.$lang).first();
this.$tabscontainer=$("[data-tabs-content]",this);
this.$dropdownlist=$(".dropdownlist.ddlformobile",this).DropDownList();
if(DocumentManager.isPhone){this.$dropdownlist.collapse(false)
}if(!DocumentManager.isPhone){this.$filter.each(function(){$(this).SearchResultListFilter().fixeHeight(80)
})
}this.loadWidth();
return this
};
return this.__constructor__()
};
$.fn.SearchResultButtonList=function(b){this.loadButtons=function(c){this.empty();
this.append(c);
return this.__constructor__()
};
this.events=function(){this.$items.unbind("click.buttonlist").bindFirst("click.buttonlist",{},SearchResult.ajax.deletetype);
return this
};
this.__constructor__=function(){this.$items=$("a[data-type]",this);
return this
};
return this.__constructor__()
};
$.fn.SearchResultList=function(b){this.config=$.extend({},{},b);
this.resetFilterEvents=function(){this.$filter.each(function(){var c=$(this).SearchResultListFilter();
c.$links.$enable.unbind("click.searchresult");
c.$links.$disable.unbind("click.searchresult")
});
return this
};
this.events=function(){this.$filter.each(function(){var c=$(this).SearchResultListFilter();
c.FormsLoaderEvents();
c.$links.$enable.unbind("click.searchresult").bindDebounce("click.searchresult",{},SearchResult.ajax.filter,400,false);
c.$links.$disable.unbind("click.searchresult").bind("click.searchresult",{},function(){return false
});
c.$links.unbind("click.loadinittypes").bindFirst("click.loadinittypes",{},function(){SearchResult.params.initTypes();
return true
})
});
this.$pagination.each(function(){var c=$(this).SearchResultListPagination();
c.$links.unbind("click.searchresult").bind("click.searchresult",{},SearchResult.ajax.pagination)
});
this.$paginationPerPage.each(function(){var c=$(this).SearchResultListPaginationPerPage().events()
});
this.$media.each(function(){var c=$(this).MediaContent();
c.events()
});
Lightbox.init();
return this
};
this.analytics=function(){this.$media.each(function(){var c=$(this).MediaContent();
c.analytics()
})
};
this.loadContainer=function(c){this.$ajaxcontainer.remove();
this.prepend(c);
Picture.load.apply($(".c-picture",this),[true])
};
this.isNewsroom=function(){var c=this.data("newsroom");
if(typeof(c)!="undefined"){return true
}};
this.initLightbox=function(){this.$ajaxcontainer.$assets.each(function(){var c=$(this).SearchResultListBloc();
c.$results.$bloc.each(function(){var d=$(this);
d.$link=$("[data-fancybox],[data-fancybox-old]",d);
d.ishidden=d.is(":hidden");
if(!d.$link.length){return
}if(d.ishidden){d.groupid=d.$link.data("fancybox");
d.$link.data("fancybox-old",d.groupid).attr("data-fancybox-old",d.groupid).removeData("fancybox").removeAttr("data-fancybox")
}else{d.groupid=d.$link.data("fancybox-old");
if(typeof(d.groupid)!="undefined"){d.$link.data("fancybox",d.groupid).attr("data-fancybox",d.groupid).removeData("fancybox-old").removeAttr("data-fancybox-old")
}}})
})
};
this.fixCaptionMediasHeight=function(){this.$ajaxcontainer.$assets.each(function(){var c=$(this);
var d=$(".c-media:visible",c);
$(".c-media__chapo",d).css({height:"auto"});
d.nApply(c,function(){this.removeClass("first").removeClass("last");
this.first().addClass("first");
this.last().addClass("last");
$(".c-media__chapo",this).FixeHeight({minheight:50})
},[])
})
};
this.highlightKeyword=function(){if(this.$ajaxcontainer.$pages.length>0){this.$ajaxcontainer.$pages.HighlightKeyword(this.keyword)
}if(this.$ajaxcontainer.$pageTitle.length>0){this.$ajaxcontainer.$pageTitle.HighlightKeyword(this.keyword)
}};
this.pageLineNumber=function(){this.$ajaxcontainer.$pages.each(function(){$(this).TruncateParagraphe({lines:2})
})
};
this.articleLineNumber=function(){this.$ajaxcontainer.$articleTitle.each(function(){$(this).find("h3").TruncateParagraphe({lines:3})
})
};
this.__constructor__=function(){this.$filter=$(".t-filter",this);
this.$pagination=$(".c-pagination",this);
this.$paginationPerPage=$(".c-pagination--perpage",this);
this.$ajaxcontainer=$(".ajax-wrapper",this).first();
this.$ajaxcontainer.$news=$(".c-resultlist__newslist",this.$ajaxcontainer);
this.$ajaxcontainer.$assets=$(".c-resultlist__assetlist",this.$ajaxcontainer);
this.$ajaxcontainer.$pages=$(".c-resultlist__pagelist__item > p",this.$ajaxcontainer);
this.$ajaxcontainer.$pageTitle=$(".c-resultlist__pagelist__item > h3",this.$ajaxcontainer);
this.$ajaxcontainer.$articleTitle=$(".c-articlelist__item",this.$ajaxcontainer);
this.$countResults=$(".c-searchresult__form > h2",this);
this.$tablist=$(".c-searchresult__tablist > div",this);
this.$noResultContainer=$(".c-resultlist__no-result",this);
this.$loading=$(".c-resultlist--loading",this);
this.$media=$(".c-media",this);
this.type=this.data("type");
this.totalcount=this.data("totalcount");
this.keyword=this.data("keyword");
if(typeof(this.type)=="undefined"){this.type=""
}var c=$("body header").css("z-index");
if(c){var d=parseInt(c);
if(d&&!isNaN(d)){this.$loading.css("z-index",d+1)
}}this.initLightbox();
this.fixCaptionMediasHeight();
this.pageLineNumber();
this.articleLineNumber();
this.highlightKeyword();
return this
};
return this.__constructor__()
};
$.fn.SearchResultListBloc=function(b){this.__constructor__=function(){this.$results=$(".c-resultlist__type",this);
this.$results.$bloc=$("> div",this.$results);
this.type=this.data("type");
this.totalcount=this.data("totalcount");
return this
};
return this.__constructor__()
};
$.fn.SearchResultListPagination=function(){this.__constructor__=function(){this.$links=$(".c-pagination-item[data-page]",this);
return this
};
return this.__constructor__()
};
$.fn.SearchResultListPaginationPerPage=function(){this.__constructor__=function(){this.$linksPerPage=$(".c-pagination--perpage--item",this);
return this
};
this.events=function(){this.$linksPerPage.unbind("click.searchresult").bindFirst("click.searchresult",{},SearchResult.ajax.paginationperpage)
};
return this.__constructor__()
};
$.fn.SearchResultTabList=function(){this.loadList=function($html){this.empty();
this.append($html);
TabList.load.apply(this);
return this.__constructor__()
};
this.__constructor__=function(){this.$links=$(".container-tabs > ul > li.item",this);
this.$links.$active=this.$links.filter(".active").first();
this.$links.$enable=this.$links.filter(":not(.disable)");
this.$links.$news=this.$links.$enable.filter(".news");
this.$links.$news.$items=$(".ddl > .item",this.$links.$news);
this.$dropdownlist=$(".container-tabs > .t-tablist--dropdownlist",this);
this.$dropdownlist.$links=$("> ul > li.item",this.$dropdownlist);
this.$dropdownlist.$links.$enable=this.$dropdownlist.$links.filter(":not(.disable)");
this.$dropdownlist.$links.$news=this.$dropdownlist.$links.filter(".news");
this.$dropdownlist.$links.$news.$items=$(".ddl > li.item",this.$dropdownlist.$links.$news);
this.type=this.$links.$active.data("type");
this.title=this.$links.$active.data("typetext");
this.count=this.$links.$active.data("typecounts");
this.url=this.$links.$active.find("a").attr("href");
return this
};
this.razNewsTypes=function(type){this.$links.$news.$items.removeClass("active");
return this
};
this.pushNewsFilter=function(types){var $activeitem=this.$links.$news.$items.filter(".active");
var arg=$activeitem.data("argument");
var type=$activeitem.data("filter");
var title=$activeitem.data("title");
if(typeof(arg)=="undefined"){return types
}if(typeof(type)=="undefined"){return types
}if(type==""){return types
}if(typeof(title)=="undefined"){title=$activeitem.find("> a").text().trim()
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "types" : [], "titles" : [] };');
eval("if(!types."+arg+'.types.includes("'+type+'")) { types.'+arg+'.types.push("'+type+'"); types.'+arg+'.titles.push("'+title+'"); }');
return types
};
this.events=function(){this.$links.$enable.find("a").unbind("click.searchresult").bindFirst("click.searchresult",{},function(){$(this).closest("li").trigger("click");
return false
});
this.$dropdownlist.$links.$enable.find("a").unbind("click.searchresult").bindFirst("click.searchresult",{},function(){$(this).closest("li").trigger("click");
return false
});
this.$links.$enable.unbind("click.searchresult").bindFirst("click.searchresult",{},SearchResult.ajax.type);
this.$dropdownlist.$links.$enable.unbind("click.searchresult").bindFirst("click.searchresult",{},SearchResult.ajax.type);
this.$links.$news.unbind("click.searchresult");
this.$links.$news.unbind("click.toggleddl").bindFirst("click.toggleddl",{},function(e){var $item=$(this);
var $ddl=$(".ddl",this);
$item.toggleClass("shownewsfilter");
$ddl.toggleClass("show");
return false
});
this.$links.$news.$items.unbind("click.searchresult").bindFirst("click.searchresult",{$news:this.$links.$news},SearchResult.ajax.newsfilter);
this.$dropdownlist.$links.$news.$items.unbind("click.searchresult").bind("click.searchresult",{$news:this.$links.$news},SearchResult.ajax.newsfilter);
$(document).unbind("click.searchresult").bindFirst("click.searchresult",{},function(){$(".t-searchdropdownnav .item.shownewsfilter").trigger("click");
$(".item__more.item--show.expand a").trigger("click")
});
return this
};
return this.__constructor__()
};
var SearchResult={config:{tabscontent_filters:{slider:false,callback:function(){if(DocumentManager.isTablet&&SearchResult.$filter!=undefined){if(arguments[0]=="tabs_dt_lng"){SearchResult.$filter.trigger("closesubcontainer").reloadCssClass()
}else{if(arguments[0]!=undefined){SearchResult.$filter.trigger("opensubcontainer").reloadCssClass()
}else{SearchResult.$filter.reloadCssClass()
}}}return true
}},tablist_filterresultsby:{underline:false,dropdownlist:true,collapse:true,morecallback:function(){if(DocumentManager.isTablet){if(SearchResult.$filter.isOpenSubContainer()){SearchResult.$filter.trigger("closetabscontainer");
return false
}}return true
}},tablist_filtersublevel:{underline:false,dropdownlist:true,collapse:true,callback:function(){SearchResult.$filter.reloadCssClass()
}}},init:function(){SearchResult.$container=$(".c-searchresults").first();
if(!SearchResult.$container.length){return
}SearchResult.$alias=$('[name="searchform"]',SearchResult.$container).first();
SearchResult.$form=$(".c-searchresult__form",SearchResult.$container).first().SearchResultForm();
SearchResult.$filter=$(".c-searchresult__filter",SearchResult.$container).first().SearchResultFilter();
SearchResult.$resetallfilter=$(".reset-all",SearchResult.$container);
SearchResult.$tablisttype=$(".c-searchresult__tablist",SearchResult.$container).first().SearchResultTabList();
SearchResult.$noresult=$(".c-resultlist__no-result",SearchResult.$container).first();
SearchResult.initlist();
SearchResult.params=[];
SearchResult.ajaxpath=SearchResult.$container.data("ajaxpath");
SearchResult.initSearchType();
SearchResult.eventTarget="";
SearchResult.initparams();
SearchResult.url.init();
SearchResult.events();
SearchResultAnalytics.init().sendTrack();
$(window).resize(function(){SearchResult.$filter.loadWidth();
SearchResult.initLightbox();
clearTimeout(SearchResult.timerresize);
SearchResult.timerresize=setTimeout(function(){SearchResult.fixHeight();
clearTimeout(SearchResult.timerresize)
},500)
});
var b=SearchResult.$container.find(".c-pagination .current");
b.prev().prev().not(".next, .previous").addClass("hidden-xs");
b.prev().prev().prev().not(".next, .previous").addClass("hidden-xs hidden-sm");
b.next().next().not(".next, .previous").addClass("hidden-xs");
b.next().next().next().not(".next, .previous").addClass("hidden-xs hidden-sm")
},events:function(){SearchResult.$form.events();
SearchResult.$filter.events();
SearchResult.$tablisttype.events();
SearchResult.$resetallfilter.unbind("click.searchresult").bindDebounce("click.searchresult",{},SearchResult.ajax.reset,50,false)
},resetAllTypes:function(){SearchResult.$filter.resetFilterEvents();
SearchResult.$filter.removeFilterHidden();
SearchResult.$resultlist.$filter.each(function(){$(this).SearchResultListFilter().resetAll()
});
SearchResult.$filter.$filter.each(function(){$(this).SearchResultListFilter().resetAll()
});
SearchResult.$filter.events();
SearchResult.params.initTypes()
},getAllTypes:function(){var b={};
SearchResult.$filter.$filter.each(function(){b=$(this).SearchResultListFilter().pushTypes(b)
});
if(SearchResult.searchtype=="news"){b=SearchResult.$tablisttype.pushNewsFilter(b)
}return b
},getAllArguments:function(){var b=[];
SearchResult.$resultlist.$filter.each(function(){b=$(this).SearchResultListFilter().pushArgs(b)
});
SearchResult.$filter.$filter.each(function(){b=$(this).SearchResultListFilter().pushArgs(b)
});
return b
},isNewsroom:function(){return SearchResult.$resultlist.isNewsroom()
},fixHeight:function(){SearchResult.$resultlist.fixCaptionMediasHeight()
},pageLineNumber:function(){SearchResult.$resultlist.pageLineNumber()
},highlightKeyword:function(){SearchResult.$resultlist.highlightKeyword()
},articleLineNumber:function(){SearchResult.$resultlist.articleLineNumber()
},initLightbox:function(){SearchResult.$resultlist.initLightbox()
},initSearchType:function(b,c){if(typeof(b)=="undefined"&&SearchResult.$container.length){b=SearchResult.$container.data("searchtype")
}if(b=="all"||typeof(b)=="undefined"){b=""
}if(typeof(c)=="undefined"){c=""
}SearchResult.searchtype=b;
SearchResult.$container.attr("data-searchtype",b).data("searchtype",b);
SearchResult.$resultlist.attr("data-type",b).data("type",b);
SearchResult.$resultlist.attr("data-news-filter",c).data("news-filter",c)
},url:{basepath:null,path:window.location.pathname,search:window.location.search,ajax:{path:null},getUrl:function(){return this.path+this.search
},getAjaxUrl:function(){return this.ajax.path+this.search
},init:function(){if(this.basepath==null){this.basepath=this.path.replaceAll(".html","").replaceAll("."+SearchResult.searchtype,"")
}if(SearchResult.searchtype!=""){this.path=this.basepath+"."+SearchResult.searchtype+".html";
this.ajax.path=SearchResult.ajaxpath+"."+SearchResult.searchtype+".html"
}else{this.path=this.basepath+".html";
this.ajax.path=SearchResult.ajaxpath+".html"
}if(SearchResult.eventTarget==="filter"){this.ajax.path=this.ajax.path.replace(".content","")
}var b="?";
b+="q="+encodeURIComponent(SearchResult.$form.find(".c-searchresult__form--form--text").val());
if(SearchResult.params.page&&SearchResult.params.existingPager){if(SearchResult.params.page>1){b+="&page="+SearchResult.params.page
}}if(SearchResult.params.paginationperpage){b+="&results_page_index="+SearchResult.params.paginationperpage
}if(SearchResult.params.types&&SearchResult.params.existingFilter){$.each(SearchResult.params.types,function(c,d){if(d.types&&d.types.length){b+="&"+d.arg+"="+d.types.join(",")
}else{if(d.value){b+="&"+d.arg+"="+d.value
}}})
}if(SearchResult.params.tagLogicChoice){b+="&tagLogicChoice="+SearchResult.params.tagLogicChoice
}if(SearchResult.params.isnewsroom){b+="&newsroom=true"
}if(SearchResult.params.displayall.name&&SearchResult.params.displayall.value){if(SearchResult.params.displayall.value=="true"){b+="&"+SearchResult.params.displayall.name+"="+SearchResult.params.displayall.value
}}this.search=b
}},initparams:function(){SearchResult.params={q:"",page:null,isnewsroom:SearchResult.isNewsroom(),paginationperpage:null,displayall:{name:null,value:false},existingPager:false,args:SearchResult.getAllArguments(),types:[],existingFilter:true,addType:function(arg,type,title){eval("if(typeof(SearchResult.params.types."+arg+') == "undefined") SearchResult.params.types.'+arg+' = { "arg" : "'+arg+'", "types" : [], "titles" : [] };');
eval("if(!SearchResult.params.types."+arg+'.types.includes("'+type+'")) { SearchResult.params.types.'+arg+'.types.push("'+type+'"); SearchResult.params.types.'+arg+'.titles.push("'+title+'"); }')
},initArgsByUrl:function(args){if(window.location.search){var request=window.location.search.substring(1).split("&");
for(var i=0;
i<request.length;
i++){var nv=request[i].split("=");
if(!nv[0]){continue
}if(!nv[1]){continue
}for(var j=0;
j<args.length;
j++){if(nv[0]=="q"&&args[j]=="q"){SearchResult.params.q=nv[1]
}if(nv[0]=="page"&&args[j]=="page"){SearchResult.params.page=parseInt(nv[1])
}if(nv[0]=="paginationperpage"&&args[j]=="results_page_index"){SearchResult.params.paginationperpage=parseInt(nv[1])
}if(nv[0]=="tags"&&args[j]=="tags"){var _values_=nv[1].split(",");
for(var k=0;
k<_values_.length;
k++){this.addType(nv[0],_values_[k])
}}if(nv[0]=="tagLogicChoice"){SearchResult.params.tagLogicChoice=nv[1]
}}}}},initTypes:function(){this.types=SearchResult.getAllTypes();
SearchResult.initresetall();
return this
},initPager:function(){this.existingPager=(SearchResult.$resultlist.$pagination.length>0);
if(this.existingPager&&!this.page){this.page=1
}},containsTypes:function(){return this.types.tags!=undefined||(this.types.lang.types.join()!=="en"&&this.types.lang.types.join()!=="")||this.types.start2!=undefined||this.types.start!=undefined||this.types.end!=undefined
}};
SearchResult.params.initTypes();
SearchResult.params.initPager();
SearchResult.params.initArgsByUrl(["q","page","paginationperpage"]);
if(SearchResult.$form.$inputdisplay.length){SearchResult.params.displayall.name=SearchResult.$form.$inputdisplay.attr("name");
SearchResult.params.displayall.value=SearchResult.$form.$inputdisplay.val()
}},initlist:function(){SearchResult.$resultlist=$(".c-resultlist",SearchResult.$container).SearchResultList().events()
},initresetall:function(){if(SearchResult.params.containsTypes()){SearchResult.$resetallfilter.addClass("active")
}else{SearchResult.$resetallfilter.removeClass("active")
}},loading:function(c){if(c){SearchResult.$resultlist.$loading.addClass("loading-animate loading-animate--loadingShow animated")
}else{SearchResult.$resultlist.$loading.removeClass("loading-animate loading-animate--loadingShow animated")
}},ajax:{reset:function(){var b=$(this);
SearchResult.params.page=1;
SearchResult.resetAllTypes();
SearchResult.eventTarget="filter";
SearchResult.params.tagLogicChoice=null;
return SearchResult.ajax.load.apply(this,[])
},pagination:function(){var b=$(this);
SearchResult.params.page=parseInt(b.data("page"));
SearchResult.params.initTypes();
return SearchResult.ajax.load.apply(this,[])
},paginationperpage:function(){var b=$(this);
SearchResult.params.page=1;
SearchResult.params.paginationperpage=parseInt(b.data("results-per-page-index"));
SearchResult.params.initTypes();
return SearchResult.ajax.load.apply(this,[])
},isnewsroom:function(){var b=$(this);
SearchResult.params.isnewsroom;
SearchResult.params.initTypes();
return SearchResult.ajax.load.apply(this,[])
},filter:function(){var b=$(this);
SearchResult.params.page=1;
SearchResult.params.initTypes();
SearchResult.eventTarget="filter";
return SearchResult.ajax.load.apply(this,[])
},deletetype:function(){var b=$(this);
var c=b.data("type");
SearchResult.$filter.removeFilterTag(c);
SearchResult.params.page=1;
SearchResult.params.initTypes();
SearchResult.eventTarget="filter";
return SearchResult.ajax.load.apply(this,[])
},type:function(){var c=$(this);
var b=c.data("type");
var d=c.data("news-filter");
if(typeof(b)=="undefined"||!c.length){return false
}SearchResult.initSearchType(b,d);
SearchResult.params.page=1;
SearchResult.params.initTypes();
if(DocumentManager.isPhone){$(this).closest(".t-tablist--dropdownlist").find(".selected .text").html($(this).find("a").html())
}return SearchResult.ajax.load.apply(this,[])
},newsfilter:function(){var c=$(this);
var b=$("> a",c);
if(b.hasClass("disable")){return false
}var d=c.data("filter");
SearchResult.$tablisttype.$links.$news.$items.filter(".active").removeClass("active");
SearchResult.$tablisttype.$dropdownlist.$links.$news.$items.filter(".active").removeClass("active");
SearchResult.$tablisttype.$links.$news.$items.filter('[data-filter="'+d+'"]').addClass("active");
SearchResult.$tablisttype.$dropdownlist.$links.$news.$items.filter('[data-filter="'+d+'"]').addClass("active");
SearchResult.ajax.type.apply(SearchResult.$tablisttype.$links.$news,[]);
c.closest(".item.shownewsfilter").trigger("click");
SearchResult.eventTarget="filter";
return false
},error:function(){return false
},load:function(){SearchResult.loading(true);
setTimeout(function(){SearchResult.url.init();
$.ajax({url:SearchResult.url.getAjaxUrl(),async:true,data:{},context:{url:SearchResult.url.getUrl()},beforeSend:function(){SearchResult.loading(true)
},complete:function(){setTimeout(function(){SearchResult.loading(false)
},200)
},error:function(){return SearchResult.ajax.error.apply(SearchResult.ajax,arguments)
},success:function(d){var b=$(jQuery.parseHTML(d));
var g=$(".c-resultlist .ajax-wrapper",b).first();
var f=$(".c-searchresult__form h2",b).first();
var e=$(".c-searchresult__tablist > div",b).first();
var c=$(".t-buttonlist",b).first();
SearchResult.$resultlist.loadContainer(g);
SearchResult.$form.loadSearchform(f);
if(SearchResult.eventTarget==="filter"){SearchResult.$tablisttype.loadList(e).events()
}SearchResult.$form.$buttonlist.loadButtons(c).events();
SearchResult.initlist();
SearchResult.params.initTypes();
SearchResult.$resetallfilter.removeClass("onevents").addClass("no-hover");
SearchResult.$filter.hideAllCalendar();
$(document).scrollTop(SearchResult.$alias.offset().top);
SearchResultAnalytics.sendTrack();
SearchResult.params.initPager();
window.history.pushState(document.title,document.title,this.url);
SearchResult.eventTarget="";
Analytics.init()
}})
},400);
return false
}}};
$.fn.SearchResultListFilter=function(){this.fixeHeight=function(h){if(typeof(h)=="undefined"){h=80
}this.$links.each(function(){$(this).parent().FixeHeight({minheight:h})
});
return this
};
this.resetAll=function(){var $resetAll=$(".c-searchresults").find(".reset-all");
if(this.$links.$all.length&&!this.$links.$all.is(".active")){this.$links.$all.trigger("click");
$resetAll.removeClass("active")
}this.$links.filter('[data-argument="lang"][data-type="en"]').trigger("click");
this.$select.each(function(){$(this).val("").selectmenu("refresh");
$resetAll.removeClass("active")
});
this.$datepicker.each(function(){$.datepicker._clearDate(this);
$resetAll.removeClass("active")
});
this.$simpleinput.each(function(){$(this).val("")
})
};
this.pushTypes=function(types){if(!types){types={}
}if(!this.$links.$all.is(".active")){this.$links.$active.each(function(){var arg=$(this).data("argument");
var type=$(this).data("type");
var title=$(this).data("title");
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).text().trim()
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "types" : [], "titles" : [] };');
eval("if(!types."+arg+'.types.includes("'+type+'")) { types.'+arg+'.types.push("'+type+'"); types.'+arg+'.titles.push("'+title+'"); }')
})
}else{if(this.$links.$all.send){var arg=this.$links.$all.data("argument");
var type=this.$links.$all.data("type");
var title=this.$links.$all.data("title");
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).text().trim()
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "types" : [], "titles" : [] };');
eval("if(!types."+arg+'.types.includes("'+type+'")) { types.'+arg+'.types.push("'+type+'"); types.'+arg+'.titles.push("'+title+'"); }')
}}this.$linkshidden.each(function(){var arg=$(this).data("argument");
var type=$(this).attr("name");
var title=$(this).data("title");
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).text().trim()
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "types" : [], "titles" : [] };');
eval("if(!types."+arg+'.types.includes("'+type+'")) { types.'+arg+'.types.push("'+type+'"); types.'+arg+'.titles.push("'+title+'"); }')
});
this.$select.each(function(){var arg=$(this).attr("name");
var type=$(this).val();
var title=$(this).data("title");
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).attr("title")
}if(type==""){return
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "value" : undefined, "title" : undefined };');
eval("types."+arg+'.value = "'+type+'";');
eval("types."+arg+'.title = "'+title+'";')
});
this.$datepicker.each(function(){var arg=$(this).attr("name");
var type=$(this).val();
var title=$(this).data("title");
var date=$(this).datepicker("getDate");
var format=$(this).closest(".datepicker").data("datepicker-format");
if(typeof(format)=="undefined"){format="yy-MM-dd"
}var fdate=$.datepicker.formatDate(format,date);
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).attr("title")
}if(type==""){return
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "value" : undefined, "title" : undefined };');
eval("types."+arg+'.value = "'+fdate+'";');
eval("types."+arg+'.title = "'+title+'";')
});
this.$simpleinput.each(function(){var arg=$(this).attr("name");
var type=$(this).val();
var title=$(this).data("title");
if(typeof(arg)=="undefined"){return
}if(typeof(title)=="undefined"){title=$(this).attr("title")
}eval("if(typeof(types."+arg+') == "undefined") types.'+arg+' = { "arg" : "'+arg+'", "value" : undefined, "title" : undefined };');
eval("types."+arg+'.value = "'+type+'";');
eval("types."+arg+'.title = "'+title+'";')
});
return types
};
this.pushArgs=function(args){if(!args){args=[]
}this.$links.$enable.filter(":not(.t-filter--all)").each(function(){var arg=$(this).data("argument");
if(typeof(arg)=="undefined"){return
}if(args.includes(arg)){return
}args.push(arg)
});
this.$linkshidden.each(function(){var arg=$(this).data("argument");
if(typeof(arg)=="undefined"){return
}if(args.includes(arg)){return
}args.push(arg)
});
this.$select.each(function(){var arg=$(this).attr("name");
if(typeof(arg)=="undefined"){return
}if(args.includes(arg)){return
}args.push(arg)
});
this.$datepicker.each(function(){var arg=$(this).attr("name");
if(typeof(arg)=="undefined"){return
}if(args.includes(arg)){return
}args.push(arg)
});
this.$simpleinput.each(function(){var arg=$(this).attr("name");
if(typeof(arg)=="undefined"){return
}if(args.includes(arg)){return
}args.push(arg)
});
return args
};
this.__constructor__=function(){this.$links=$(".t-filter--item",this);
this.$links.$active=this.$links.filter(".active");
this.$links.$enable=this.$links.filter(":not(.disable)");
this.$links.$disable=this.$links.filter(".disable");
this.$links.$all=this.$links.filter(".t-filter--all").first();
this.$links.$all.send=this.$links.$all.data("filterall-send");
this.$linkshidden=$("input:hidden.hiddenlink",this);
this.$select=$(".selectmenu select",this);
this.$datepicker=$(".datepicker input",this);
this.$simpleinput=$("[data-inputtrigger]",this);
this.filtername=this.data("filtername");
return this
};
this.events=function(){this.FormsLoader();
return this
};
return this.__constructor__()
};
var SearchResultAnalytics={config:{search:{searchType:function(){return SearchResult.$tablisttype.title
},searchResult:function(){return SearchResult.$tablisttype.count
},keyword:function(){return SearchResult.$form.keyword
},filterType:function(){var b={};
SearchResult.$resultlist.$filter.each(function(){b=$(this).SearchResultListFilter().pushTypes(b)
});
if(!b.filter){return[]
}if(!b.filter.titles){return[]
}return b.filter.titles
},filterTab:function(){var b=[];
SearchResult.$filter.$filter.each(function(){var d=$(this).SearchResultListFilter();
var c=d.pushTypes({});
if(!c.tags){return
}if(!c.tags.titles){return
}b.push({tab:d.filtername,tags:c.tags.titles})
});
return b
},filterDateStart:function(){if(!SearchResult.params.types){return undefined
}if(!SearchResult.params.types.start){return undefined
}return SearchResult.params.types.start.value
},filterDateEnd:function(){if(!SearchResult.params.types){return undefined
}if(!SearchResult.params.types.end){return undefined
}return SearchResult.params.types.end.value
},filterLanguage:function(){if(!SearchResult.params.types){return[]
}if(!SearchResult.params.types.lang){return[]
}return SearchResult.params.types.lang.titles
}}},init:function(){if(!SearchResult.$resultlist.length){return this
}SearchResultAnalytics.$elem=$(document).AnalyticsElem(SearchResultAnalytics.config);
return this
},sendTrack:function(){if(!SearchResult.$resultlist.length){return this
}SearchResultAnalytics.$elem.sendSearchTrack();
return this
}};
$.fn.TabListContent=function(conf){this.config=$.extend({},{animate:{delay:400},calculateStyleLink:true,dropdownlist:true,more:true,underline:true,underlineposition:"bottom",barre:true,barreposition:"bottom",collapse:false,invertcolor:false,textposition:"left",returnClick:false,callback:function(){return true
},onInsertMoreItem:function($origin){return true
}},conf);
this.setResponsiveConfig=function(){if(!this.hasClass("t-tablist--responsive")){return this
}this.setTextPosition(undefined);
return this
};
this.__get_responsive_value__=function(tab){var __value__=undefined;
if(tab!=undefined){if((__value__==undefined||!__value__)&&DocumentManager.isExtraDesktop){__value__=tab[3]
}if((__value__==undefined||!__value__)&&DocumentManager.isDesktop){__value__=tab[2]
}if((__value__==undefined||!__value__)&&DocumentManager.isTablet){__value__=tab[1]
}if((__value__==undefined||!__value__)&&DocumentManager.isPhone){__value__=tab[0]
}if((__value__==undefined||!__value__)){__value__=tab[tab.length-1]
}if((__value__==undefined||!__value__)){__value__="unknown"
}}return __value__
};
this.setTextPosition=function(position){if((position==undefined||!position)){position=this.__get_responsive_value__(this.config.responsive.textposition)
}if(this.hasClass("t-tablist--align--"+position)){return this
}this.config.textposition=position;
this.removeClass("t-tablist--align--right").removeClass("t-tablist--align--left").addClass("t-tablist--align--"+this.config.textposition);
return this
};
this.activeItem=function($obj){if($obj.hasClass("disable")){return this
}this.$items.removeClass("active");
var __collapse__=this.config.collapse&&$obj.data("tl-active")==true;
this.$items.data("tl-active",false).attr("data-tl-active",false);
if(this.$dropdownlist&&this.$dropdownlist.length){this.$dropdownlist.$list.find("li").data("tl-active",false).attr("data-tl-active",false).removeClass("active")
}if(!__collapse__){var iItem=$obj.data("tl-item");
if(typeof(iItem)!="undefined"){$('[data-tl-item="'+iItem+'"]',this).addClass("active").data("tl-active",true).attr("data-tl-active",true)
}}return this.initActiveItem()
};
this.initActiveItem=function(){this.$activateitem=this.$items.filter("[data-tl-active=true]");
return this
};
this.initHoverItem=function(){this.$hoveritem=this.$items.filter("[data-tl-hover=true]");
return this
};
this.addHoverItem=function($li){this.delHoverItem();
$li.addClass("hover").data("tl-hover",true).attr("data-tl-hover",true);
this.initHoverItem();
return this
};
this.delHoverItem=function(){this.$items.removeClass("hover").data("tl-hover",false).attr("data-tl-hover",false);
this.initHoverItem();
return this
};
this.getInfosItem=function(){var values=null;
if(this.$hoveritem&&this.$hoveritem.length){var values={"$item":this.$hoveritem,display:true,type:"hover"}
}else{if(this.$more.hasClass("active")){var values={"$item":this.$more,display:true,type:"more"}
}else{if(this.$activateitem&&this.$activateitem.length){var values={"$item":this.$activateitem,display:!this.$activateitem.hasClass("item--hidden"),type:"activate"}
}}}if(!values||!values.$item||!values.$item.length){return null
}values.css={iBlocList:this.offset().left,iLeft:(values.$item.offset().left-this.offset().left),iWidth:values.$item.width(),iGlobalPaddingLeft:parseInt(this.css("padding-left").replace("px",""))+parseInt(this.$container.css("padding-left").replace("px","")),iPaddingRight:parseInt(values.$item.css("padding-right").replace("px","")),iPaddingLeft:parseInt(values.$item.css("padding-left").replace("px","")),link:{iPaddingRight:0,iPaddingLeft:0}};
if(!values.display){values.css.iWidth=0
}values.$link=$("> a, > span",values.$item).first();
if(values.$link.length){values.css.link={iPaddingRight:parseInt(values.$link.css("padding-right").replace("px","")),iPaddingLeft:parseInt(values.$link.css("padding-left").replace("px",""))}
}if(values.$item.is(".first")&&this.config.textposition=="left"){values.css.link.iPaddingLeft=0
}if(values.$item.is(".last")&&this.config.textposition=="right"){values.css.link.iPaddingRight=0
}var r={"$item":values.$item,"$link":values.$link,css:{left:values.css.iLeft+values.css.iPaddingLeft+(this.config.calculateStyleLink?values.css.link.iPaddingLeft:0)-values.css.iGlobalPaddingLeft,width:values.css.iWidth-(this.config.calculateStyleLink?(values.css.link.iPaddingRight+values.css.link.iPaddingLeft):0)}};
return r
};
this.stopAnimateUnderline=function(){if(!this.$underline){return this
}if(!this.$underline.length){return this
}this.$underline.stop(true,true);
return this
};
this.activeUnderline=function(){if(!this.$underline){return this
}if(!this.$underline.length){return this
}var infos=this.getInfosItem();
if(infos==null){this.$underline.animate({width:0},this.config.animate.delay);
return this
}var delay=this.config.animate.delay;
if(typeof(arguments[0])!=="undefined"){delay=arguments[0]
}if(delay&&delay>0&&delay<199){delay=200
}if(delay){this.$underline.animate(infos.css,delay)
}else{this.$underline.css(infos.css)
}return this
};
this.verifDropDownList=function(){if(this.config.dropdownlist&&DocumentManager.isPhone){this.isDropDownList=true;
this.addClass("t-tablist--dropdownlist");
return this
}this.isDropDownList=false;
this.removeClass("t-tablist--dropdownlist");
return this
};
this.verifLinkMore=function(){this.verifDropDownList();
if(this.isDropDownList){return this
}if(!this.$list){return this
}if(!this.$list.length){return this
}if(!this.$blocmore){return this
}if(!this.$blocmore.length){return this
}this.isTreating(true);
this.$items.removeClass("item--hidden");
this.$more.removeClass("item--show");
var _list_width_=this.$list.outerWidth();
var _links_width_=0;
this.$items.each(function(){var w=$(this).outerWidth();
_links_width_+=w
});
var _linkmore_width_=this.$more.outerWidth();
if(_list_width_<_links_width_){_links_width_+=_linkmore_width_;
while(_list_width_<=_links_width_&&this.$items.filter(":visible").length!=0){var $last=this.$items.filter(":visible").last();
$last.addClass("item--hidden");
_links_width_-=$last.outerWidth()
}}var $_items_hidden=this.$items.filter(".item--hidden");
var $_items_hiddenactive=$_items_hidden.filter(".active");
if($_items_hidden.length){this.$more.addClass("item--show")
}else{this.$blocmore.hidden();
this.$more.removeClass("item--show")
}if($_items_hiddenactive.length){this.$more.addClass("active")
}else{this.$more.removeClass("active")
}if(this.$blocmore.isDisplay()){this.$more.removeClass("collapse").addClass("expand");
this.$more.$link.addClass("active")
}else{this.$more.removeClass("expand").addClass("collapse");
this.$more.$link.removeClass("active")
}this.isTreating(false);
return this
};
this.verifBlocMore=function(){if(!this.$more.length){return this
}if(!this.$blocmore){return this
}if(!this.$blocmore.length){return this
}if(!this.$blocmore.isDisplay()){return this
}var $_items_hidden=this.$items.filter(".item--hidden");
var $_items_more=this.$blocmore.getItems();
if($_items_hidden.length==$_items_more.length){return this
}this.displayBlocMore();
return this
};
this.isTreating=function(){if(typeof(arguments[0])!=="undefined"){if(arguments[0]){this.$container.removeClass("items--ok").addClass("items--ec")
}else{this.$container.removeClass("items--ec").addClass("items--ok")
}}return this.$container.hasClass("items--ec")
};
this.displayBlocMore=function(){if(!this.$blocmore){return this
}if(!this.$blocmore.length){return this
}if(this.$news.length){this.$news.removeClass("show")
}TabList.hideAllBlocMore();
var $_items_hidden=this.$items.filter(".item--hidden");
this.$blocmore.addItems($_items_hidden,this.config.onInsertMoreItem);
this.$blocmore.display();
this.$more.removeClass("collapse").addClass("expand");
this.$more.$link.addClass("active");
return this
};
this.hideBlocMore=function(){if(!this.$more){return this
}if(!this.$more.length){return this
}if(!this.$blocmore){return this
}if(!this.$blocmore.length){return this
}if(!this.$blocmore.$items.length){return this
}this.$blocmore.hidden();
this.$more.removeClass("expand").addClass("collapse");
this.$more.$link.removeClass("active");
return this
};
this.toggleBlocMore=function(){if(!this.$more){return this
}if(!this.$more.length){return this
}if(!this.$blocmore){return this
}if(this.$blocmore.isDisplay()){this.hideBlocMore()
}else{this.displayBlocMore()
}return this
};
this.__add_underline__=function(){if(!this.config.underline){return this
}if(!$(".item__underline",this).length){this.$underline=$("<li/>",{"class":"item__underline",html:"&nbsp;"});
this.$underline.addClass("item__underline--"+this.config.underlineposition);
this.$underline.appendTo($(".container-tabs > ul",this))
}else{this.$underline=$(".item__underline",this)
}return this
};
this.__add_blocmore__=function(){this.$more=$(" > li.item__more",this.$list);
if(this.$more.length&&this.config.more==false){this.$more.remove();
this.$more=$(" > li.item__more",this.$list)
}if(!this.$more.length&&this.config.more==true){$("<li />",{"class":"item__more",html:'<a href="#">&nbsp;</a>'}).appendTo(this.$list);
this.$more=$(" > li.item__more",this.$list).attr("data-insertmode","automatic")
}else{this.$more.attr("data-insertmode","static")
}this.$more.$link=$("> a",this.$more);
this.$news=$(" > li.item.news > ul",this.$list);
if(!this.$more.length){return this
}if(!$(".blocmore",this.$more).length){this.$blocmore=$("<div/>",{"class":"blocmore"});
this.$blocmore.appendTo(this.$more);
this.$blocmore.TabListBlocMoreContent($("a",this.$more))
}return this
};
this.__add_blocdropdownlist__=function(){if(!this.$container.length){return this
}if(!this.config.dropdownlist){return this
}if(!$(".t-tablist--dropdownlist",this.$container).length){var config={};
var $dll=$("<div/>",{"class":"t-tablist--dropdownlist"}).DropDownListContainer(config).get(0);
this.$items.each(function(){var $item=$(this);
$dll.addItem($item)
});
this.$dropdownlist=$dll;
this.$dropdownlist.appendTo(this.$container)
}return this
};
this.__init_config__=function(){if(this.hasClass("t-tablist--simple")){this.config.barre=false;
this.config.dropdownlist=false;
this.config.underline=false
}if(this.is("[data-tablist-barre]")){this.config.barre=this.data("tablist-barre")==true
}if(this.is("[data-tablist-barreposition]")){this.config.barreposition=this.data("tablist-barreposition")
}if(this.is("[data-tablist-underline]")){this.config.underline=this.data("tablist-underline")==true
}if(this.is("[data-tablist-underlineposition]")){this.config.underlineposition=this.data("tablist-underlineposition")
}if(this.is("[data-tablist-dropdownlist]")){this.config.dropdownlist=this.data("tablist-dropdownlist")==true
}if(this.is("[data-tablist-collapse]")){this.config.collapse=this.data("tablist-collapse")==true
}if(this.is("[data-config]")){var sconfig_temp=this.data("config");
var config_temp=undefined;
eval("try { config_temp = "+sconfig_temp+"; } catch(err) { if(console) console.log(err); }");
if(typeof(config_temp)!=undefined){this.config=$.extend({},this.config,config_temp)
}}if(typeof(this.config.preload)=="function"){this.config.preload.apply(this,[])
}if(this.config.responsive!=undefined){this.data("tablist-responsive",this.config.responsive)
}else{this.config.responsive=this.data("tablist-responsive")
}if(this.config.responsive!=undefined){if(this.config.responsive.textposition!=undefined){this.addClass("t-tablist--responsive");
this.setResponsiveConfig()
}else{this.removeClass("t-tablist--responsive")
}}return this
};
this.__constructor__=function(){this.__init_config__();
this.addClass("t-tablist");
if(this.config.barre){switch(this.config.barreposition){case"top":this.addClass("barre--before");
break;
case"bottom":this.addClass("barre--after");
break
}}if(this.config.invertcolor){this.addClass("t-tablist--invertcolor")
}else{this.removeClass("t-tablist--invertcolor")
}this.setTextPosition(this.config.textposition);
this.$container=$(".container-tabs",this);
this.$list=$(".container-tabs > ul",this);
this.isTreating(true);
this.$items=$(".container-tabs > ul > li:not(.item__underline):not(.item__more)",this).addClass("item");
this.$items.$enable=this.$items.filter(":not(.disable)");
this.$items.each(function(i){var $item=$(this);
var isactive=$item.hasClass("active");
$item.data("tl-item",i).attr("data-tl-item",i).data("tl-active",isactive).attr("data-tl-active",isactive)
});
this.__add_blocmore__();
this.__add_blocdropdownlist__();
this.__add_underline__();
this.$items.first().addClass("first");
this.$items.last().addClass("last");
this.verifLinkMore();
this.initActiveItem().activeUnderline(null);
if(typeof(this.config.postload)=="function"){this.config.postload.apply(this,[])
}this.isTreating(false);
return this
};
this.getListItem=function(elem){var $li=$(elem);
$li.item=$li.data("tl-item");
if($li.item==undefined){return $li
}$li=this.find('.container-tabs > ul > .item[data-tl-item="'+$li.item+'"]').first();
$li.item=$li.data("tl-item");
return $li
};
this.events=function(){this.$items.unbind("click.tablist").bind("click.tablist",{"$obj":this},TabList.events.items.click);
this.$items.$enable.unbind("mouseenter.tablist").bind("mouseenter.tablist",{"$obj":this},TabList.events.items.mouseenter);
this.unbind("mouseleave.tablist").bind("mouseleave.tablist",{"$obj":this},TabList.events.items.mouseleave);
if(this.$more&&this.$more.$link){this.$more.$link.unbind("click.tablist").bind("click.tablist",{"$obj":this},TabList.events.more.click)
}if(this.$blocmore&&this.$blocmore.$link){this.$blocmore.$link.unbind("click.tablist").bind("click.tablist",{"$obj":this},TabList.events.blocmore.hide)
}if(this.$dropdownlist&&this.$dropdownlist.length){this.$dropdownlist.$list.find("li").unbind("click.tablist").bind("click.tablist",{"$obj":this},TabList.events.dropdownlist.click)
}if(typeof(this.config.callback)=="function"){var __function_callback__=function(e){var $tablist=e.data.$obj;
if(typeof($tablist.config.callback)=="function"){var $li=$tablist.getListItem(this);
$tablist.config.callback.apply($li,[e,$li,e.data.origin])
}};
this.$items.unbind("click.tablistcallback").bind("click.tablistcallback",{"$obj":this,origin:"list"},__function_callback__);
if(this.$dropdownlist&&this.$dropdownlist.length){this.$dropdownlist.$list.find("li").unbind("click.tablistcallback").bind("click.tablistcallback",{"$obj":this,origin:"dropdownlist"},__function_callback__)
}if(this.$more&&this.$more.$link){this.$more.$link.unbind("click.tablistcallback").bind("click.tablistcallback",{"$obj":this,origin:"morelink"},__function_callback__)
}if(this.$blocmore&&this.$blocmore.$link){this.$blocmore.$link.unbind("click.tablistcallback").bind("click.tablistcallback",{"$obj":this,origin:"blocmorelink"},__function_callback__)
}}this.unbind("reload.tablist").bind("reload.tablist",{"$obj":this},TabList.events.reload);
this.$items.$enable.unbind("tabactive.tablist").bind("tabactive.tablist",{"$obj":this,origin:"list"},TabList.events.items.tabactive);
this.unbind("previous.tablist").bind("previous.tablist",{"$obj":this},TabList.events.previous);
this.unbind("next.tablist").bind("next.tablist",{"$obj":this},TabList.events.next);
this.unbind("textposition.tablist").bind("textposition.tablist",{"$obj":this},TabList.events.textposition);
return this
};
this.morecallback=function(callback){if(typeof(callback)!="function"){return this
}if(this.$blocmore.length&&typeof(this.config.morecallback)=="function"){var _isdisplay_=!this.$blocmore.isDisplay();
if(this.config.morecallback.apply(this,[_isdisplay_?"show":"hide"])){callback.apply(this,[])
}}else{callback.apply(this,[])
}return this
};
return this.__constructor__()
};
$.fn.SearchfilterBlocMore=function(){this.config=$.extend({},{},conf)
};
$.fn.TabListBlocMoreContent=function(b,c){this.config=$.extend({},{},c);
this.isDisplay=function(){return this.hasClass("blocmore--show")
};
this.display=function(){this.addClass("blocmore--show");
return this
};
this.hidden=function(){this.removeClass("blocmore--show");
this.$items.empty();
return this
};
this.__addLink__=function(d){if(!d){return this
}this.$link=d.clone().addClass("blocmore__link");
this.$link.appendTo(this);
return this
};
this.getItems=function(){return this.$items.find(".blocmore__items__item")
};
this.addItems=function(f,e){var d=this;
d.$items.empty();
f.each(function(){d.addItem($(this),e)
})
};
this.addItem=function(f,e){if(!f){return this
}var d=$("<div/>",{"class":"blocmore__items__item"});
$newelem=$("<div/>",{"class":f.attr("class"),title:f.attr("title"),html:f.html()});
f.copyEventTo("click",$newelem,true);
$newelem.data(f.data());
$newelem.attr("data-tl-item",f.data("tl-item"));
$newelem.attr("data-tl-active",f.data("tl-active"));
$newelem.removeClass("item--hidden");
d.append($newelem);
d.appendTo(this.$items);
if(typeof(e)=="function"){e.apply($newelem,[f,this.config])
}return this
};
this.originalWidth=function(){return this.outerWidth()
};
this.__constructor__=function(d){this.__addLink__(d);
if(!this.$items){this.$items=$("<div/>",{"class":"blocmore__items"});
this.$items.appendTo(this)
}return this
};
return this.__constructor__(b)
};
var TabList={init:function(){TabList.tabs=[];
$('.t-tablist:not([data-tablist-autoload="false"])').each(function(){TabList.load.apply($(this),[])
});
$(window).resize(function(){$.each(TabList.tabs,function(){this.setResponsiveConfig();
this.activeUnderline(null);
this.verifLinkMore();
this.verifBlocMore()
})
})
},load:function(){var b=$.extend({},{animate:{delay:400},dropdownlist:true,underline:true,barre:true,collsapse:true},arguments[0]);
this.each(function(){TabList.tabs.push($(this).TabListContent(b).events())
});
setTimeout(function(){$(window).trigger("resize")
},100)
},hideAllBlocMore:function(){$.each(TabList.tabs,function(){this.hideBlocMore()
})
},events:{items:{click:function(b){var c=b.data.$obj.getListItem(this);
b.data.$obj.delHoverItem().stopAnimateUnderline().hideBlocMore().activeItem(c).verifLinkMore().activeUnderline();
return b.data.$obj.config.returnClick
},tabactive:function(b){return TabList.events.items.click.apply(this,arguments)
},mouseenter:function(b){b.data.$obj.addHoverItem($(this)).activeUnderline()
},mouseenter:function(b){b.data.$obj.addHoverItem($(this)).activeUnderline()
},mouseenter:function(b){b.data.$obj.addHoverItem($(this)).activeUnderline()
},mouseleave:function(b){b.data.$obj.delHoverItem().stopAnimateUnderline().activeUnderline()
}},dropdownlist:{click:function(c){var b=c.data.$obj.$dropdownlist;
var d=c.data.$obj.getListItem(this);
if(!d.hasClass("disable")){b.activateListItem(d).collapse()
}return TabList.events.items.click.apply(this,[c])
}},reload:function(b){if(b.data.$obj==undefined){return false
}b.data.$obj.activeUnderline();
return true
},previous:function(c){var d=$("li.item.active",c.data.$obj);
var b=d.prev();
if(!b.hasClass("item")||!b.length){b=d.parent().find("li.last")
}if(b.hasClass("item")){b.trigger("click")
}return true
},next:function(c){var d=$("li.item.active",c.data.$obj);
var b=d.next();
if(!b.hasClass("item")||!b.length){b=d.parent().find("li.first")
}if(b.hasClass("item")){b.trigger("click")
}return true
},more:{click:function(b){b.data.$obj.morecallback(b.data.$obj.toggleBlocMore);
return false
}},blocmore:{hide:function(b){b.data.$obj.morecallback(b.data.$obj.hideBlocMore);
return false
}},textposition:function(c,b){$(this).TabListContent().setTextPosition(b).activeUnderline();
return true
}}};
$.fn.TabsContent=function(conf){this.config=$.extend({},{slider:true,sliderselector:null,scrolltop:true,collaspe:true,edit:false,callback:function(){return true
}},conf);
this.load=function(){if(this.config.edit){this.$contents.addClass("active");
return this
}this.$contents.removeClass("active");
if(typeof(arguments[0])=="object"){var $elem=arguments[0];
if($elem.contentid&&!$elem.hasClass("active")){$("[data-tabs-id]",this).removeClass("active").find("> a").removeClass("active");
$('[data-tabs-id="'+$elem.contentid+'"]',this).addClass("active").find("> a").addClass("active")
}else{if(this.config.collaspe){$("[data-tabs-id]",this).removeClass("active").find("> a").removeClass("active");
$elem.removeClass("active")
}}}var contentid=this.$links.getActiveContentId();
if(contentid){var $content=this.$contents.getContent(contentid);
this.$links.reset();
$('[data-tabs-id="'+contentid+'"]',this).addClass("active").find("> a").addClass("active");
this.$contents.removeClass("active");
$content.addClass("active");
if(this.config.slider){if(this.config.sliderselector){SliderSlick.load.apply($content.find(this.config.sliderselector),[])
}else{SliderSlick.load.apply($content,[])
}}}this.callback();
return this
};
this.events=function(){this.$links.unbind("click.tabs").bind("click.tabs",{"$obj":this},TabsContent.events.links.click);
return this
};
this.callback=function(){if(typeof(this.config.callback)=="function"){var contentid=this.$links.getActiveContentId();
var $activelinks=this.$links.getLinks(contentid);
var $content=this.$contents.getContent(contentid);
this.config.callback.apply(this,[contentid,$activelinks,$content])
}};
this.loadTabList=function(){if(!this.$nav.length){return this
}TabList.load.apply(this.$nav,[{collapse:this.config.collapse}]);
return this
};
this.SetScrollTop=function(){if(!this.config.scrolltop){return this
}if(!DocumentManager.isPhone){return this
}var contentid=this.$links.getActiveContentId();
if(!contentid){return this
}var $link=this.$links.getLinkScrollTop(contentid);
if(!$link.length){return this
}var _top_=undefined;
if($link.is(":visible")){_top_=$link.offset().top
}else{_top_=this.offset().top
}$("body,html").animate({scrollTop:_top_},400);
return this
};
this.__init_config__=function(){if(this.is("[data-tabs-slider]")){this.config.slider=this.data("tabs-slider")==true
}if(this.is("[data-tabs-sliderselector]")){this.config.sliderselector=this.data("tabs-sliderselector")
}if(this.is("[data-tabs-scrolltop]")){this.config.scrolltop=this.data("tabs-scrolltop")==true
}if(this.is("[data-tabs-collaspe]")){this.config.collaspe=this.data("tabs-collaspe")==true
}if(this.is("[data-edit]")){this.config.edit=this.data("edit")==true
}if(this.is("[data-config]")){var sconfig_temp=this.data("config");
var config_temp=undefined;
eval("try { config_temp = "+sconfig_temp+"; } catch(err) { if(console) console.log(err); }");
if(typeof(config_temp)!=undefined){this.config=$.extend({},this.config,config_temp)
}}if(typeof(this.config.preload)=="function"){this.config.preload.apply(this,[])
}return this
};
this.__constructor__=function(){this.__init_config__();
this.$nav=$("nav",this).first();
this.$links=$("[data-tabs-id]",this);
this.$links.reset=function(){return this.each(function(){$(this).removeClass("active")
})
};
this.$links.getLink=function(contentid){return this.filter('[data-tabs-id="'+contentid+'"]').first().TabsContentLink()
};
this.$links.getLinks=function(contentid){return this.filter('[data-tabs-id="'+contentid+'"]')
};
this.$links.getLinkScrollTop=function(contentid){return this.filter('[data-tabs-id="'+contentid+'"][data-tabs-scrolltop="true"]').first().TabsContentLink()
};
this.$links.getActiveContentId=function(){return this.filter(".active").first().TabsContentLink().contentid
};
this.$contents=$("[data-tabs-content]",this);
this.$contents.getContent=function(contentid){return this.filter('[data-tabs-content="'+contentid+'"]').first().TabsContentContainer()
};
this.addClass("t-tabscontent--success");
return this
};
return this.__constructor__()
};
$.fn.TabsContentLink=function(){this.__constructor__=function(){this.contentid=this.data("tabs-id");
return this
};
return this.__constructor__()
};
$.fn.TabsContentContainer=function(){this.__constructor__=function(){this.contentid=this.data("tabs-content");
return this
};
return this.__constructor__()
};
var TabsContent={init:function(){TabsContent.tabs=[];
$('.t-tabscontent:not([data-tabscontent-autoload="false"])').each(function(){TabsContent.load.apply($(this),[])
})
},load:function(){this.each(function(){TabsContent.tabs.push($(this).TabsContent().events().loadTabList().load())
})
},events:{links:{click:function(b){b.data.$obj.load($(this).TabsContentLink()).SetScrollTop();
return false
}}}};
$.fn.MediaContent=function(){this.displayBlocDownload=function(){if(this.blocs.$download.length!=1){return this
}if(this.data("media-blocdownload-state")=="show"){return this
}this.addClass("c-media--blocdownload--ec");
this.blocs.$download.fadeIn(300,function(){var c=$(this);
var d=c.closest(".c-media");
var b=$(".c-media__blocdownload .links",d).first();
d.removeClass("c-media--blocdownload--ec").addClass("c-media--blocdownload--show");
b.show().AirbusNiceScroll()
});
if(this.type==="image"){this.blocs.$download.$links.each(function(){$(this).GetPropsForDownloadImage($(this).find(".image-size"),$(this).find(".image-dimension"))
})
}this.data("media-blocdownload-state","show").attr("data-media-blocdownload-state","show");
if(this.type=="playervideo"){this.playervideo(false)
}return this
};
this.hideBlocDownload=function(){if(this.blocs.$download.length!=1){return this
}if(this.data("media-blocdownload-state")=="hide"){return this
}this.blocs.$download.fadeOut(300,function(){var c=$(this);
var d=c.closest(".c-media");
var b=$(".c-media__blocdownload .links",d).first();
d.removeClass("c-media--blocdownload--ec").removeClass("c-media--blocdownload--show");
b.hide().getNiceScroll().resize()
});
this.data("media-blocdownload-state","hide").attr("data-media-blocdownload-state","hide");
if(this.type=="playervideo"){if(this.data("media-video-state")=="play"){this.playervideo(true)
}}return this
};
this.displayDescription=function(){this.removeClass("c-media--desc--hide").addClass("c-media--desc--show");
this.find(".link--readerdesc--hide").fadeIn(100);
this.links.$readerdesc_less.css("visibility","visible");
this.blocs.$chapo.$txt.$desc.TruncateParagraphe({lines:-1,fncontainer:function(){return this.closest(".c-media__chapo__txt")
},callback:function(){var b=$(this).closest(".c-media").MediaContent();
b.blocs.$chapo.animate({height:b.blocs.$chapo.$txt.outerHeight()+24},400)
}});
return this
};
this.hideDescription=function(){this.removeClass("c-media--desc--show").addClass("c-media--desc--hide");
this.find(".link--readerdesc--more").fadeIn(100);
this.blocs.$chapo.$txt.$desc.TruncateParagraphe({lines:1,fncontainer:function(){return this.closest(".c-media__chapo__txt")
},callback:function(){var b=$(this).closest(".c-media").MediaContent();
b.blocs.$chapo.animate({height:b.blocs.$chapo.$txt.outerHeight()+24},400)
}});
return this
};
this.playervideo=function(b){if(this.type!="playervideo"){return this
}if(this.blocs.$s7videoviewer.length){var d=this.blocs.$s7videoviewer.S7VideoContainer();
var c=d.isLecture();
if(c&&!b){d.pause();
this.data("media-video-state","play").attr("data-media-video-state","play")
}else{if(!c&&b){d.lecture();
this.data("media-video-state","pause").attr("data-media-video-state","pause")
}}}return this
};
this.displayBlocLightbox=function(){this.links.$fancybox=$("[data-fancybox]",this);
this.blocs.$lightbox=$(".c-lightbox",this);
if(this.links.$fancybox.length&&!this.hasClass("c-media--blocdownload--show")){this.links.$fancybox.first().trigger("click");
return this
}if(!this.links.$fancybox.length&&!this.blocs.$lightbox.length){Media.ajax.lightbox.load.apply(this,[])
}return this
};
this.hideBlocLightbox=function(){return this
};
this.__constructor__=function(){this.asset={name:this.data("asset-name"),path:this.data("asset-path")};
if(!this.asset.name){this.asset.name=this.asset.path
}this.fancybox={resource:this.data("reslightbox"),id:this.data("fancyboxasync-id"),groupid:this.data("fancyboxasync-groupid"),path:this.data("fancyboxasync-path"),isdownload:this.data("fancyboxasync-isdownload"),iscalled:this.data("fancyboxasync-iscalled"),ajax:false,src:""};
this.links={"$download":$(".link--download",this),"$download_one":$(".a-icon--download--one a",this),"$lightbox":$(".link--lightbox",this),"$fancybox":$("[data-fancybox]",this),"$readerdesc_less":$(".link--readerdesc--less",this),"$readerdesc_more":$(".link--readerdesc--more",this)};
this.blocs={"$chapo":$(".c-media__chapo",this).first(),"$download":$(".c-media__blocdownload",this).first(),"$lightbox":$(".c-lightbox",this),"$s7videoviewer":$(".s7videoviewer",this)};
this.fancybox.ajax=this.links.$fancybox.data("type")=="ajax";
this.fancybox.src=this.links.$fancybox.data("src");
this.blocs.$chapo.$txt=$(".c-media__chapo__txt",this.blocs.$chapo);
this.blocs.$chapo.$txt.$desc=$(".readerdesc",this.blocs.$chapo);
this.blocs.$chapo.$txt.$links=$(".readerlink",this.blocs.$chapo);
this.blocs.$download.$close=$(".close",this.blocs.$download);
this.blocs.$download.$links=$(".link a",this.blocs.$download);
this.blocs.$lightbox.$close=$(".close",this.blocs.$lightbox);
this.blocs.$lightbox.$blocvideo=$('[id^="s7video_div"]',this.blocs.$lightbox).first().S7VideoContainer();
this.blocs.$lightbox.$linksdownload=$(".c-lightbox__download a",this.blocs.$lightbox);
this.$medialist=this.closest(".c-medialist");
this.fixeheight=this.is(".c-media--fixeheight");
this.fullHeight=this.is(".c-media--fullheight");
this.isContainerMediaList=(this.$medialist.length!=0);
if(this.is(".c-media--type--image")){this.type="image";
this.typetext="Photo"
}else{if(this.is(".c-media--type--video")){this.type="video";
this.typetext="Video"
}else{if(this.is(".c-media--type--presskit")){this.type="presskit";
this.typetext="Press Kits"
}else{if(this.is(".c-media--type--playervideo")){this.type="playervideo";
this.typetext="Video";
this.data("media-video-state","pause").attr("data-media-video-state","pause")
}else{this.type="unknown";
this.typetext="Unknown"
}}}}this.containsdownload=this.links.$download.length;
if(this.links.$readerdesc_less.length&&this.links.$readerdesc_more.length){var d=parseInt($(".readerlink").css("line-height"));
var c=this.blocs.$chapo.$txt.height();
if(c>d){this.blocs.$chapo.css("height",this.blocs.$chapo.outerHeight());
if(!this.hasClass("c-media--desc--hide")&&!this.hasClass("c-media--desc--show")){this.addClass("c-media--desc--hide");
this.links.$readerdesc_more.css("visibility","visible");
this.hideDescription()
}}}if(this.fancybox.iscalled==undefined){this.fancybox.iscalled=this.blocs.$lightbox.length==1;
this.data("fancyboxasync-iscalled",this.fancybox.iscalled).attr("data-fancyboxasync-iscalled",this.fancybox.iscalled)
}if(this.fancybox.iscalled==false){var b=this.find("#"+this.fancybox.id+"").first();
b.data("fancyboxasync",this.fancybox).attr("data-fancyboxasync-id",this.fancybox.id)
}if(this.fancybox.src==undefined){this.fancybox.src=Media.ajax.getUrl(this.fancybox);
if(this.fancybox.ajax){this.links.$fancybox.data("src",this.fancybox.src).attr("data-src",this.fancybox.src)
}}return this
};
this.analytics=function(){var b=this.typetext;
if(this.isContainerMediaList){b=this.closest(".c-medialist__slider__item").data("tagtext")
}Analytics.addClickComponentEvent(this.links.$download,{nameevent:"OpenDownload",label1event:b,label2event:this.asset.name});
Analytics.addClickComponentEvent(this.links.$lightbox,{nameevent:"OpenLightbox",label1event:b,label2event:this.asset.name});
return this
};
this.events=function(){this.links.$download.unbind("click.download").bind("click.download",{"$obj":this},Media.events.download.show);
this.blocs.$download.$close.unbind("click.download").bind("click.download",{"$obj":this},Media.events.download.hide);
this.links.$lightbox.unbind("click.lightbox").bind("click.lightbox",{"$obj":this},Media.events.lightbox.show);
this.links.$readerdesc_less.unbind("click.readerdesc").bind("click.readerdesc",{"$obj":this},Media.events.readerdesc.less);
this.links.$readerdesc_more.unbind("click.readerdesc").bind("click.readerdesc",{"$obj":this},Media.events.readerdesc.more);
this.unbind("download-show.media").bind("download-show.media",{"$obj":this},Media.events.download.show);
this.unbind("download-hide.media").bind("download-hide.media",{"$obj":this},Media.events.download.hide);
this.unbind("lightbox-show.media").bind("lightbox-show.media",{"$obj":this},Media.events.lightbox.show);
this.unbind("readerdesc-less.media").bind("readerdesc-less.media",{"$obj":this},Media.events.readerdesc.less);
this.unbind("readerdesc-more.media").bind("readerdesc-more.media",{"$obj":this},Media.events.readerdesc.more);
if(this.type=="playervideo"){this.unbind("video-play.media").bind("video-play.media",{"$obj":this},Media.events.playervideo.play);
this.unbind("video-pause.media").bind("video-pause.media",{"$obj":this},Media.events.playervideo.pause)
}return this
};
return this.__constructor__()
};
var Media={init:function(){$(".c-media").each(function(){$(this).MediaContent().events().analytics()
})
},events:{download:{show:function(b){b.data.$obj.displayBlocDownload();
return false
},hide:function(b){b.data.$obj.hideBlocDownload();
return false
}},readerdesc:{less:function(b){b.data.$obj.hideDescription();
return false
},more:function(b){b.data.$obj.displayDescription();
return false
}},lightbox:{show:function(b){b.data.$obj.displayBlocLightbox();
return false
},hide:function(b){b.data.$obj.hideBlocLightbox();
return false
}},playervideo:{play:function(b){b.data.$obj.playervideo(true);
return false
},pause:function(b){b.data.$obj.playervideo(false);
return false
}}},loadContentLightbox:function(){if(this.openLightbox==undefined){this.openLightbox=false
}var c=this.$media;
var b=$(arguments[0]).filter(".c-lightbox__body");
b.each(function(){var d=$("<div/>",{});
$(this).appendTo(d);
d=d.FancyBoxContent();
d.initCssClass().attr("id",d.id).hide();
var e=$("<a/>",{href:"#"+d.id,"data-fancybox":c.fancybox.groupid});
if(!$('[href="#'+d.id+'"]',c).length){e.appendTo(c)
}if(!$("#"+d.id+"",c).length){d.appendTo(c)
}c.__constructor__()
});
c.data("fancyboxasync-iscalled",true).attr("data-fancyboxasync-iscalled",true);
Lightbox.init();
if(this.openLightbox){c.links.$fancybox.first().trigger("click")
}},ajax:{getUrl:function(b){return""+b.resource+"/fancyboxid="+b.id+"&pathasset="+b.path+"&download="+b.isdownload
},lightbox:{load:function(b){if(b==undefined){b=true
}$.ajax({url:Media.ajax.getUrl(this.fancybox),method:"get",async:true,data:{},context:{"$media":this,openLightbox:b},beforeSend:function(){},complete:function(){},success:Media.loadContentLightbox})
}}}};
$.fn.FormCalendarHeader=function(){this.month=function(b){this.$title.$month.text(b)
};
this.year=function(b){this.$title.$year.text(b)
};
this.__constructor__=function(){this.addClass("ui-datepicker-header").addClass("ui-widget-header").addClass("ui-helper-clearfix").addClass("ui-corner-all");
this.$prev=$("<a />").FormCalendarHeaderLinkPrev();
this.$next=$("<a />").FormCalendarHeaderLinkNext();
this.$title=$("<div />").FormCalendarHeaderTitle();
this.$prev.appendTo(this);
this.$next.appendTo(this);
this.$title.appendTo(this);
return this
};
return this.__constructor__()
};
$.fn.FormCalendarHeaderLinkPrev=function(){this.__constructor__=function(){this.addClass("ui-datepicker-prev").addClass("ui-corner-all");
this.$span=$("<span />",{"class":"ui-icon ui-icon-circle-triangle-w",text:"Prev"});
this.$span.appendTo(this);
return this
};
return this.__constructor__()
};
$.fn.FormCalendarHeaderLinkNext=function(){this.__constructor__=function(){this.addClass("ui-datepicker-next").addClass("ui-corner-all");
this.$span=$("<span />",{"class":"ui-icon ui-icon-circle-triangle-e",text:"Next"});
this.$span.appendTo(this);
return this
};
return this.__constructor__()
};
$.fn.FormCalendarHeaderTitle=function(){this.__constructor__=function(){this.addClass("ui-datepicker-title");
this.$month=$("<span />",{"class":"ui-datepicker-month"});
this.$year=$("<span />",{"class":"ui-datepicker-year"});
this.$month.appendTo(this);
this.$year.appendTo(this);
return this
};
return this.__constructor__()
};
$.fn.FormCalendar=function(b){this.config=$.extend({},{displayyearontop:true,showOtherMonths:true,selectOtherMonths:true,showAnim:"slideDown",showOn:"both",buttonText:"",defaultDate:new Date(),dateFormat:"dd MM yy",beforeShow:function(c,d){if(d.input.hasClass("open")){return
}Forms.loadCalendar.apply(Forms,[d])
},onChangeMonthYear:function(c,e,d){if(!d.input.hasClass("open")){return
}Forms.loadCalendar.apply(Forms,[d])
},onClose:function(c,d){if(!d.input.hasClass("open")){return
}Forms.closeCalendar.apply(Forms,[d])
}},b);
this.attrdata={language:this.data("datepicker-language"),mindate:this.data("datepicker-mindate"),maxdate:this.data("datepicker-maxdate")};
this.lang="en";
this.__constructor__=function(){this.$input=$("input",this).first();
if(!this.attrdata.language||!$.datepicker.regional[this.attrdata.language]){this.attrdata.language="en"
}if(this.attrdata.mindate){if(this.attrdata.mindate=="now"){this.attrdata.mindate=new Date(new Date().getTime())
}this.config.minDate=this.attrdata.mindate
}if(this.attrdata.maxdate){if(this.attrdata.maxdate=="now"){this.attrdata.maxdate=new Date(new Date().getTime())
}this.config.maxDate=this.attrdata.maxdate
}var c=$.extend({},$.datepicker.regional[this.attrdata.language],this.config);
this.$input.datepicker(c);
return this
};
this.events=function(){this.$input.unbind("change.inputtrigger").bindFirst("change.inputtrigger",{"$datepicker":this},function(c){Forms.checkInputTrigger(c.data.$datepicker)
});
if(!DocumentManager.isPhone){$(window).resize(function(){var c=$(document.activeElement);
if(c.is(".hasDatepicker")){c.datepicker("hide")
}})
}this.$input.siblings("button").on("mouseenter",function(){if(!DocumentManager.isPhone&&!DocumentManager.isTablet){$(this).siblings("input").addClass("hover");
$(this).addClass("hover")
}});
this.$input.siblings("button").on("mouseleave",function(){if(!DocumentManager.isPhone&&!DocumentManager.isTablet){$(this).removeClass("hover");
$(this).siblings("input").removeClass("hover")
}});
return this
};
return this.__constructor__()
};
$.fn.FormIntervalCalendar=function(b){this.__constructor__=function(){this.$start=$(".datepicker--start input",this);
this.$end=$(".datepicker--end input",this);
this.datestart=Forms.getDatePicker(this.$start);
this.dateend=Forms.getDatePicker(this.$end);
if(this.dateend){this.$start.datepicker("option","maxDate",this.dateend)
}if(this.datestart){this.$end.datepicker("option","minDate",this.datestart)
}return this
};
this.events=function(){this.$start.unbind("change.datepickerinterval").bind("change.datepickerinterval",{"$start":this.$start,"$end":this.$end},function(c){var f=Forms.getDatePicker(c.data.$start);
if(!f){if(c.data.$end.closest(".datepicker").data("datepicker-mindate")){c.data.$end.datepicker("option","minDate",new Date(new Date().getTime()))
}else{c.data.$end.datepicker("option","minDate",null)
}return this
}c.data.$end.datepicker("option","minDate",f)
});
this.$end.unbind("change.datepickerinterval").bind("change.datepickerinterval",{"$start":this.$start,"$end":this.$end},function(c){var f=Forms.getDatePicker(c.data.$end);
if(!f){if(c.data.$start.closest(".datepicker").data("datepicker-maxdate")){c.data.$start.datepicker("option","maxDate",new Date(new Date().getTime()))
}else{c.data.$start.datepicker("option","maxDate",null)
}return this
}c.data.$start.datepicker("option","maxDate",f)
});
return this
};
return this.__constructor__()
};
$.fn.SelectMenu=function(b){this.config=$.extend({},{position:{my:"left top-5",at:"left bottom"},width:this.attr("width"),open:function(d,e){var c=$(this);
setTimeout(function(){var g=$("#"+c.attr("id")+"-menu");
var f=c.siblings("span");
f.css({"margin-bottom":g.outerHeight()});
$(g.find(".ui-menu-item").get(c.find("option:selected").index())).addClass("selected").find(".ui-menu-item-wrapper").addClass("selected")
},300)
},close:function(c,d){$(this).siblings("span").css("margin-bottom","0")
},select:function(c,d){var e=$("#"+this.id+"-menu");
e.find(".ui-menu-item-wrapper").removeClass("selected").parent().removeClass("selected");
e.find(".ui-state-active").addClass("selected").parent().addClass("selected")
}},b);
this.events=function(){$(this).on("selectmenufocus",function(c,d){console.log("events ui :",d)
})
};
this.__constructor__=function(){this.$select=$("select",this).first();
this.$select.$option=$("option",this.$select);
this.delaydate=this.data("delaydate");
this.selectedvalue=this.data("delaydate-selectedvalue");
this.format=this.data("delaydate-format");
if(this.delaydate){var c=this.format?this.format:"dd-mm-yy";
var d=this.selectedvalue;
this.$select.$option.each(function(){var i=$(this);
if(!i.length){return
}var g=i.data("delaydate-type");
if(!g||g=="all"){return
}var f=i.data("delaydate-delay");
if(!f){return
}var j=parseInt(f);
if(!j||isNaN(j)){return
}var e=new Date();
switch(g){case"d":e=e.addDay(j);
break;
case"m":e=e.addMonth(j);
break;
case"y":e=e.addYears(j);
break;
default:return
}var h=$.datepicker.formatDate(c,e);
i.val(h);
if(d&&d==h){i.parent().find("option").attr("selected",false);
i.attr("selected","selected")
}})
}this.$select.selectmenu(this.config);
return this
};
this.events=function(){this.$select.unbind("selectmenuchange.inputtrigger").bindFirst("selectmenuchange.inputtrigger",{"$select":this},function(c){Forms.checkInputTrigger(c.data.$select)
});
return this
};
return this.__constructor__()
};
$.fn.Checkbox=function(b){this.config=$.extend({},{},b);
this.__constructor__=function(){this.$checkbox=$("input:checkbox",this).first();
this.$checkbox.checkboxradio(this.config);
return this
};
this.events=function(){return this
};
return this.__constructor__()
};
$.fn.FilterCheckboxLink=function(b){this.config=$.extend({},{},b);
this.check=function(){if(typeof(arguments[0])!="undefined"){if(arguments[0]){this.$icon.addClass("icon-checkmark-icon_f");
this.addClass("active")
}else{this.$icon.removeClass("icon-checkmark-icon_f");
this.removeClass("active")
}return this
}return this.hasClass("active")
};
this.__constructor__=function(){this.$icon=$("i",this).first();
return this
};
return this.__constructor__()
};
$.fn.FilterCheckbox=function(b){this.config=$.extend({},{},b);
this.toggle=function(){if(!this.hasClass("active")){this.active()
}else{this.inactive()
}};
this.active=function(){if(this.hasClass("active")&&this.isinit){return this
}if(this.hasClass("disable")){return this
}if(this.singlemode&&this.$form.$chks.$chk.filter(".active").length&&!this.hasClass("active")){this.$form.$chks.$chk.filter(".active").each(function(){var c=$(this).FilterCheckboxLink().check(false)
})
}this.FilterCheckboxLink().check(true);
if(this.$form.$chks.$all.length){if(this.isAll){this.$form.$chks.$chk.each(function(){var c=$(this).FilterCheckboxLink().check(false)
})
}else{this.$form.$chks.$all.FilterCheckboxLink().check(false)
}}return this
};
this.inactive=function(){if(!this.hasClass("active")&&this.isinit){return this
}this.FilterCheckboxLink().check(false);
if(this.$form.$chks.$all.length&&!this.$form.$chks.$chk.filter(".active").length){this.$form.$chks.$all.FilterCheckboxLink().check(true)
}return this
};
this.__constructor__=function(){this.$form=this.closest(".t-form");
this.singlemode=this.$form.data("filterchk")=="single";
this.$form.$chks=$(".filterchk",this.$form);
this.$form.$chks.$chk=this.$form.$chks.filter(":not(.filterchk--all)");
this.$form.$chks.$all=this.$form.$chks.filter(".filterchk--all");
this.isAll=this.is(".filterchk--all");
return this
};
this.init=function(){this.isinit=this.data("init");
if(!this.isinit){if(this.hasClass("active")){this.active()
}else{this.inactive()
}}this.data("init",true);
this.init=true;
return this
};
this.events=function(){this.unbind("click.inputtrigger").bindFirst("click.inputtrigger",{"$chk":this},function(c){c.data.$chk.toggle();
Forms.checkInputTrigger(c.data.$chk)
});
return this
};
return this.__constructor__()
};
$.fn.FormsLoaderEvents=function(){this.each(function(){var b=$(this);
if(!b.hasClass("t-form")){return
}$(".datepicker",b).each(function(){$(this).FormCalendar().events()
});
$(".datepicker--interval",b).each(function(){$(this).FormIntervalCalendar().events()
});
$(".selectmenu",b,b).each(function(){$(this).SelectMenu().events()
});
$(".checkbox",b).each(function(){$(this).Checkbox().events()
});
$(".filterchk",b).each(function(){$(this).FilterCheckbox().init().events()
})
});
return this
};
var Forms={init:function(){var b=$(".c-form-container form .ui-datepicker-trigger");
var c=$(".datepicker");
if(b.length>=1){c.FormCalendar().events();
b.datepicker()
}},checkInputTrigger:function(b){target=b.data("inputtrigger-target");
value=b.data("inputtrigger-value");
if(typeof(target)!="undefined"){$target=b.closest(".t-form").find("[data-inputtrigger="+target+"]");
if($target.length){if(typeof(value)=="undefined"){value=""
}$target.val(value)
}}},getDatePicker:function(b){try{return b.datepicker("getDate")
}catch(c){return null
}},getValidateDatePicker:function(d,c){var e=$.datepicker._determineDate(d,c,new Date());
var b=$.datepicker._restrictMinMax(d,e);
return b
},verifYearDatePicker:function(c,f){var e=new Date(c.selectedYear,c.selectedMonth,c.selectedDay);
e=e.addYears(f);
var b=Forms.getValidateDatePicker(c,e);
return(e.getTime()===b.getTime())
},timer:{},closeCalendar:function(b){clearInterval(this.timer.posdatepicker);
clearInterval(this.timer.opendatepicker);
var c=$(b.input).first();
c.css("margin-bottom","0");
c.removeClass("open").blur();
b.dpDiv.removeClass("positionned")
},loadCalendar:function(b){var d=$("#ui-datepicker-div").first().datepicker("widget");
var c=$(b.input).first();
d.css("visibility","hidden");
d.addClass("airbus-datepicker");
if(b.settings.displayyearontop){d.addClass("ui-datepicker--yearontop")
}if(!b.dpDiv.hasClass("positionned")){Forms.timer.posdatepicker=setTimeout(function(){c.css({"margin-bottom":d.outerHeight()});
setTimeout(function(){b.dpDiv.css({top:c.offset().top+35,left:c.offset().left,visibility:"visible"})
},1);
b.dpDiv.addClass("positionned")
},300)
}else{b.dpDiv.css({top:c.offset().top+35,left:c.offset().left,visibility:"visible"})
}Forms.timer.opendatepicker=setTimeout(function(){d.addClass("ui-datepicker--ec");
c.addClass("open");
d.css({"min-width":c.width()});
var f=$(".ui-datepicker-header",d);
var e=$("<div />",{"class":"ui-datepicker-header-year"}).FormCalendarHeader();
if(!c.val()){d.addClass("ui-datepicker--empty")
}else{d.removeClass("ui-datepicker--empty")
}f.addClass("ui-datepicker-header-month");
if(b.settings.displayyearontop){e.year(b.selectedYear);
if(Forms.verifYearDatePicker(b,-1)){e.$prev.unbind("click.datepicker").bind("click.datepicker",{"$widget":d,"$input":c,inst:b},function(g){$.datepicker._adjustDate(c,-1,"Y")
})
}else{e.$prev.addClass("ui-state-disabled")
}if(Forms.verifYearDatePicker(b,1)){e.$next.unbind("click.datepicker").bind("click.datepicker",{"$widget":d,"$input":c,inst:b},function(g){$.datepicker._adjustDate(c,+1,"Y")
})
}else{e.$next.addClass("ui-state-disabled")
}e.prependTo(d)
}d.removeClass("ui-datepicker--ec")
},1)
},events:{}};
$(function(){$.datepicker.regional.fr={altField:"#datepicker",closeText:"Fermer",prevText:"Précédent",nextText:"Suivant",currentText:"Aujourd'hui",monthNames:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthNamesShort:["Janv.","Févr.","Mars","Avril","Mai","Juin","Juil.","Août","Sept.","Oct.","Nov.","Déc."],dayNames:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],dayNamesShort:["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."],dayNamesMin:["D","L","M","M","J","V","S"],weekHeader:"Sem.",dateFormat:"dd-mm-yy"}
});
$.fn.NavList=function(){this.$items=$("> li",this);
this.init=function(){return this
};
this.events=function(){return this
};
return this
};
$.fn.DropDownNav=function(){this.$items=$("> li",this);
this.$items.$withsubnav=this.$items.filter(".has-submeta");
this.init=function(){return this
};
this.events=function(){this.$items.unbind("mouseenter.dropdownnav").bind("mouseenter.dropdownnav",{},function(){if(!(DocumentManager.isPhone||DocumentManager.isTablet)){var c=$(this);
var b=$(" > .ddl",c);
if(b.length){b.css("display","block");
b.removeClass("out").addClass("over")
}}return true
});
this.$items.unbind("mouseleave.dropdownnav").bind("mouseleave.dropdownnav",{},function(){if(!(DocumentManager.isPhone||DocumentManager.isTablet)){var c=$(this);
var b=$(" > .ddl",c);
if(b.length){b.fadeOut(300,"swing");
b.removeClass("over").addClass("out")
}}return true
});
this.$items.$withsubnav.find("> a").unbind("click.dropdownnav").bind("click.dropdownnav",{},function(){if(DocumentManager.isPhone||DocumentManager.isTablet){var c=$(this);
var f=c.closest("li");
var b=f.closest(".t-dropdownnav").DropDownNav();
var e=$("> a",b.$items);
var d=$(" > .ddl",f);
b.trigger("raz");
if(d.length){e.css({visibility:"hidden"});
f.addClass("current");
d.fadeIn()
}return false
}return true
});
this.unbind("raz.dropdownnav").bind("raz.dropdownnav",{},function(d,f){var b=$(this).DropDownNav();
if(DocumentManager.isPhone||DocumentManager.isTablet){var c=b.$items.filter(".current");
c.find(" > .ddl").fadeOut(300,function(){c.removeClass("current");
b.$items.find("> a").css({visibility:"visible"});
if(typeof(f)=="function"){f.apply(b,[c])
}});
return true
}return false
});
return this
};
return this
};
var NavList={init:function(){this.updateDom();
this.events()
},updateDom:function(){$(".t-navlist").each(function(){$(this).NavList().init()
});
$(".t-dropdownnav").each(function(){$(this).DropDownNav().init()
})
},events:function(){$(".t-navlist").each(function(){$(this).NavList().events()
});
$(".t-dropdownnav").each(function(){$(this).DropDownNav().events()
})
}};
$.fn.extend({Navigation:function(conf){var dataconf=this.data("nav-config");
this.config=$.extend({},((dataconf!=undefined)?dataconf:Navigation.defaultconfig),conf);
this.data("nav-config",this.config);
this.$back=$(".back",this);
this.$pagination=$(".t-navpagination",this);
this.$contents=$(".contents",this).first();
this.$contents.$items=$(".item",this.$contents);
this.reloadPagination=function(){var navs=this.getNavs();
var titles=[];
for(var i=0;
i<navs.length;
i++){if(!navs[i].hasClass("nav-level-1")){titles.push(navs[i].find("> a").first().text())
}}var _config_=$.extend({},Navigation.defaultconfig.navp,this.config.navp);
this.$pagination.each(function(){var $navp=$(this).NavPagination(_config_);
$navp.updateItems(navs.length)
});
this.callback("reloadPagination",navs,titles);
return this
};
this.getNavs=function(tab,offset){if(tab==undefined){tab=this.currentTab()
}if(offset==undefined){offset=0
}var $__navtemp__=$__childstemp__=$("> .item",this.$contents);
var __navstemp__=[];
for(var i=offset;
i<tab.length;
i++){var index=tab[i]-1;
$__navtemp__=$__childstemp__.eq(index);
__navstemp__.push($__navtemp__);
if(i==0){$__childstemp__=$("> li",$__navtemp__)
}else{$__childstemp__=$("> ul > li",$__navtemp__)
}}return __navstemp__
};
this.getNavsItems=function(tab,offset){var __navtemp__=this.getNavs(tab,offset);
var __itemstemp__=[];
for(var i=1;
i<__navtemp__.length;
i++){__itemstemp__.push(__navtemp__[i].closest(".item").NavigationItem())
}return __itemstemp__
};
this.comeback=function(tab,newtab){var __tab__=this.currentTab();
var $__elem__=__comeback_temp__[__tab__.length-1];
if(!this.callback("comeback",tab,newtab,$__elem__)){return this
}if(!$__elem__){return this
}$__elem__.find(".current").removeClass("current");
return this
};
this.display=function(tab){if(typeof(tab)=="string"){eval("tab = "+tab+";")
}var oldtab=this.currentTab();
if(tab==undefined){tab=this.currentTab()
}this.currentTab(tab);
if(typeof(tab)!="object"){return this
}if(tab.length<oldtab.length){var __comeback_temp__=this.getNavsItems(oldtab);
var $__elem_comeback__=__comeback_temp__[tab.length-1];
if($__elem_comeback__){if(!this.callback("comeback",oldtab,tab,$__elem_comeback__)){return this
}}}var __navstemp__=this.getNavs(tab);
if(!this.callback("display-before",tab,oldtab,__navstemp__)){return this
}this.$contents.find(".current").removeClass("current").addClass("not-current");
this.$contents.find(".current-last").removeClass("current-last").addClass("not-current-last");
this.$contents.find(".item").removeClass("nav-current").removeClass("nav-level-current").removeClass("nav-level-parent");
var arbo=tab[tab.length-1]?tab[tab.length-1]:0;
var level=tab.length;
for(var i=0;
i<__navstemp__.length;
i++){var $nav=__navstemp__[i];
var $item=$nav.hasClass("item")?__navstemp__[i].NavigationItem():__navstemp__[i].find("> .item").NavigationItem();
$nav.removeClass("not-current").removeClass("not-current-last").addClass("current");
$item.addClass("nav-current");
if($item.level==level){$item.addClass("nav-level-current")
}else{if($item.level==level-1){$item.addClass("nav-level-parent")
}}}this.attr("data-nav-tab","["+tab.toString()+"]").attr("data-nav-arbo",arbo).attr("data-nav-level",level);
if(!this.callback("display",tab,oldtab,__navstemp__,arbo,level)){return this
}this.currentTab(tab);
this.reloadPagination();
return this
};
this.reload=function(){var tab=this.currentTab();
this.$contents.$items=$(".item",this.$contents);
if(!this.callback("reload",tab)){return this
}this.itemsevents();
return this
};
this.getStructure=function(){var struct=[];
var array=[];
var tab=this.currentTab();
for(var i=0;
i<tab.length;
i++){array.push(tab[i]);
struct.push(array.slice(0))
}return struct
};
this.back=function(){var struct=this.getStructure();
if(struct==undefined){return this
}var level=struct.length-1;
this.callback("back",struct[level]);
return this.updateLevel(struct.length-1)
};
this.updateLevel=function(level){var struct=this.getStructure();
var archi=struct[level-1];
this.display(archi).reload();
this.callback("updateLevel",level,struct,archi);
return this
};
this.callback=function(){if(typeof(this.config.callback)=="function"){return this.config.callback.apply(this,arguments)
}};
this.events=function(){this.unbind("updateLevel.nav").bind("updateLevel.nav",{},function(e,level){if(level==undefined){return false
}var $nav=$(this).Navigation();
$nav.updateLevel(parseInt(level));
return true
});
this.unbind("display.nav").bind("display.nav",{},function(e,tab){var $nav=$(this).Navigation();
$nav.display(tab);
return true
});
this.unbind("raz.nav").bind("raz.nav",{},function(e){var $nav=$(this).Navigation();
$nav.updateLevel(1);
return true
});
this.unbind("back.nav").bind("back.nav",{},function(e){var $nav=$(this).Navigation();
$nav.back();
return true
});
this.$back.unbind("click.nav").bind("click.nav",{},function(e){var $back=$(this);
if($back.isDisabled()){return false
}var $nav=$back.closest(".t-navigation");
$nav.trigger("back.nav");
return false
});
return this
};
this.itemsevents=function(){this.$contents.$items.filter(".nav-current").find("> li > a").unbind("click.nav").bind("click.nav",{},function(e){var $link=$(this);
var $list=$link.next(".item");
var $nav=$link.closest(".t-navigation").Navigation();
if(!$list.length){return true
}var tab=$list.data("nav-tabulation");
$nav.display(tab).reload();
return false
});
this.$contents.$items.filter(".nav-level-current").find("> li > div[data-nav-eventclick]").unbind("click.nav").bind("click.nav",{},function(e){var $elem=$(this);
var arg=$elem.data("nav-eventclick");
var $nav=$elem.closest(".t-navigation").Navigation();
switch(arg){case"next":var $next=$elem.closest("li").find("> .item");
var tab=$next.data("nav-tabulation");
$nav.display(tab).reload();
break;
default:break
}return $nav.callback("eventclick",$elem,arg)
});
return this
};
this.currentTab=function(tab){if(tab!=undefined){this.data("nav-currenttab",tab)
}var tab=this.data("nav-currenttab");
if(tab==undefined){tab=[1]
}return tab
};
this.loaded=this.data("nav-loaded");
this.loaded=this.loaded!=undefined?this.loaded:false;
if(this.length&&this.loaded===false){this.$contents.find("> ul").NavigationItem().init();
this.$contents.$items=$(".item",this.$contents);
this.callback("preload");
this.display().reload().events();
this.data("nav-loaded",true).attr("data-nav-loaded",true);
this.loaded=true
}return this
},NavigationItem:function(){this.$parent=this.parent();
this.$subnav=$(" > li",this);
this.tab=this.data("nav-tabulation");
this.arbo=this.data("nav-arbo");
this.level=this.data("nav-level");
this.init=function(b){if(b==undefined){b=[1]
}var d=b[b.length-1]?b[b.length-1]:0;
var c={navtab:"nav-tab-"+b.toString().replaceAll(",","-"),navarbo:"nav-arbo-"+d,navlevel:"nav-level-"+b.length};
this.attr("data-nav-tabulation","["+b.toString()+"]").attr("data-nav-arbo",d).attr("data-nav-level",b.length).addClass(c.navtab).addClass(c.navarbo).addClass(c.navlevel);
this.$subnav.each(function(h){++h;
var g=$(this);
g.attr("data-nav-arbo",d).attr("data-nav-level",b.length);
var e=(b.toString()+","+(h)).split(",");
var f=$(this).find("> ul");
if(f.length){g.addClass("has-subnav");
f.NavigationItem().init(e)
}});
return this
};
this.addClass("item");
return this
}});
var Navigation={defaultconfig:{callback:function(b){return true
},navp:{offset:1,onItemClick:function(c,b){if(c.offset){return true
}b.updateLevel(c.level);
return true
},callback:function(){return
}}},init:function(){}};
$.fn.extend({NavPagination:function(c){var b=this.data("nav-config");
this.config=$.extend({},((b!=undefined)?b:NavigationPagination.defaultconfig),c);
this.data("nav-config",this.config);
this.$ul=$("> ul",this);
if(!this.$ul.length){this.$ul=$("<ul/>",{}).appendTo(this)
}this.$items=$("li",this.$ul);
this.removeItem=function(e){if(e==undefined){e=this.$items.length-1
}this.$items.filter(":not(.onRemove):not(.offset)").eq(e).NavPaginationItem(e).removeItem();
this.reload();
this.callback("items","remove",e);
return this
};
this.addItem=function(f){if(f==undefined){f=this.$items.length+1
}var e=$("<li/>",{}).NavPaginationItem(f);
e.appendItemTo(this.$ul);
this.reload();
this.callback("items","add",e,f);
return this
};
this.updateItems=function(h){var g=this.$items.filter(":not(.onRemove):not(.offset)");
var f=g.length;
this.callback("items","update",g,h,f);
if(h>f){for(var e=0;
e<h-f;
e++){this.addItem(h+e,e)
}}else{if(h<f){for(var e=0;
e<f-h;
e++){this.removeItem(h-e,e)
}}}};
this.reload=function(){this.$items=$("li",this.$ul);
var e=this.$items.filter(":not(.onRemove):not(.offset)");
e.each(function(f){$(this).NavPaginationItem(f+1)
});
e.unbind("click.navp").bind("click.navp",{},function(i){var g=$(this).NavPaginationItem();
var h=g.closest(".t-navpagination").NavPagination();
var f=(typeof(h.config.$nav)=="function")?h.config.$nav.apply(h,[]):null;
if(typeof(h.config.onItemClick)=="function"){if(h.config.onItemClick.apply(h,[g,f])){h.updateItems(g.level)
}}else{h.updateItems(g.level)
}h.callback("click",g,h,f);
return false
});
return this
};
this.events=function(){this.unbind("updateItems.navp").bind("updateItems.navp",{},function(h,g){if(g==undefined){return false
}var f=$(this).NavPagination();
f.updateItems(parseInt(g));
return true
});
this.unbind("removeItem.navp").bind("removeItem.navp",{},function(g){var f=$(this).NavPagination();
f.removeItem();
return true
});
this.unbind("addItem.navp").bind("addItem.navp",{},function(g){var f=$(this).NavPagination();
f.addItem();
return true
});
var e=this.$items.filter(".offset:not(.onRemove)");
e.unbind("click.navp").bind("click.navp",{},function(i){var g=$(this).NavPaginationItem();
var h=g.closest(".t-navpagination").NavPagination();
var f=(typeof(h.config.$nav)=="function")?h.config.$nav.apply(h,[]):null;
if(typeof(h.config.onItemClick)=="function"){h.config.onItemClick.apply(h,[g,f]);
h.callback("click-offset",g,h,f)
}return false
});
return this
};
this.callback=function(){if(typeof(this.config.callback)=="function"){return this.config.callback.apply(this,arguments)
}};
if(!this.data("nav-loaded")){for(var d=0;
d<this.config.offset;
d++){$("<li/>",{"class":"offset offset-"+d}).NavPaginationItem().prependItemTo(this.$ul)
}this.reload().events();
this.data("nav-loaded",true);
this.loaded=true
}return this
},NavPaginationItem:function(b){this.level=parseInt(b!=undefined?b:this.data("nav-level"));
this.data("nav-level",b).attr("data-nav-level",b);
this.offset=this.hasClass("offset");
this.removeItem=function(){this.addClass("onRemove").onAnimateEnd("removeItem"+this.level,function(){this.removeClass("onRemove").remove()
}).Animate("removePaginationItem")
};
this.prependItemTo=function(){this.prependTo(arguments)
};
this.appendItemTo=function(){this.addClass("onAppend").onAnimateEnd("addItem"+this.level,function(){this.removeClass("onAppend").reset()
}).Animate("addPaginationItem").appendTo(arguments)
};
return this
}});
var NavigationPagination={defaultconfig:{offset:0,"$nav":function(){return this.closest(".t-navigation").Navigation()
},onItemClick:function(b){return true
},callback:function(){return
}}};
var Header={posY:0,headerElement:$("header"),cookie:$(".c-cookies"),cookieClose:$(".c-cookies .c-cookies--close"),cookieAgree:$(".c-cookies .c-cookies--agree"),metanav:$(".c-header__firstnav"),mainnav:$(".c-header__secondnav"),mainnavitems:$(".c-header__secondnav .c-mainnavigation__lvlmenu1 > li"),subnav:$(".c-header__subnavcontainer"),subnavcontent:$(".c-header__subnavcontainer [data-subnav-content]"),menuburger:$(".c-header__menuburger"),searchBtn:$(".c-header__searchform"),closeBtn:$(".c-header__closemenu"),mobileBtn:$(".c-header__icons > a"),headerHeight:0,init:function(){Header.edit=this.headerElement.hasClass("edit");
if(Header.edit){return this
}this.events();
return this
},fixSubNav:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){this.subnav.css("top","");
var c=Header.subnav.data("subnav-currentid");
var e=$(window).height();
var b=NavMenu.globals.mainNavigation.closest(".mainnavcontainer");
if(c==undefined){if(NavMenu.globals.mainNavigation.hasClass("active")){b.css("height",e-195)
}else{b.css("height","")
}}else{b.css("height","")
}}else{var e=$(window).height();
var f=this.subnav.data("subnav-currentid");
if(f==undefined){return this
}var d="";
if($.Sticky.currentid!=undefined){d=this.mainnav.getPosition().height
}else{d=this.mainnav.getPosition().height+$("body").padding("top")
}if(d!=null){this.subnav.css("top",d)
}}return this
},showSubNavContent:function(){var b=this.subnav.data("subnav-currentid");
if(b==arguments[0]){return this
}this.subnav.data("subnav-currentid",arguments[0]).attr("data-subnav-currentid",arguments[0]);
if(arguments[0]=="searchform"){Search.animate()
}DocumentManager.disableScroll();
DocumentManager.showLayer();
this.searchBtn.addClass("active");
this.mainnavitems.removeClass("active-subnav");
this.mainnavitems.find('[data-subnav-id="'+arguments[0]+'"]').closest("li").addClass("active-subnav");
this.closeBtn.fadeIn();
this.subnav.addClass("hovered").fadeIn();
this.subnavcontent.filter("[data-subnav-content].subnavcontent-active").hide().removeClass("subnavcontent-active");
this.subnavcontent.filter('[data-subnav-content="'+arguments[0]+'"]').fadeIn(400,function(){var c=Header.subnav.data("subnav-currentid");
if(c=="searchform"){Search.limitedPlaceholder()
}}).addClass("subnavcontent-active");
NavMenu.animateUnderline();
Picture.verifCropImg();
this.fixSubNav();
return this
},hideSubNavContent:function(b){if(b==undefined){b=true
}this.subnav.data("subnav-currentid",null).removeAttr("data-subnav-currentid");
DocumentManager.enableScroll();
if(b){DocumentManager.hideLayer()
}this.searchBtn.removeClass("active");
this.mainnavitems.removeClass("active-subnav");
this.closeBtn.fadeOut();
this.subnav.removeClass("hovered").fadeOut(400);
this.subnavcontent.filter("[data-subnav-content]").hide().removeClass("subnavcontent-active");
NavMenu.animateUnderline();
return this
},events:function(){Header.closeBtn.unbind("click.header").bind("click.header",{},function(){Header.hideSubNavContent();
return false
});
Header.searchBtn.unbind("click.header").bind("click.header",{},function(){if(DocumentManager.isAndroidMobileBrowser||DocumentManager.isIosChrome){$("[data-subnav-content]:not(.subnavcontent-active)").hide()
}NavMenu.closeMobileMenu(false);
Search.toggleForm();
return false
});
Header.menuburger.unbind("click.header").bind("click.header",{},function(){NavMenu.toggleMobileMenu();
return false
})
}};
var FooterNavigation={mainlink:$(".c-footernavigation__importantlink"),secondlink:$(".c-footernavigation__secondlinks"),init:function(){FooterNavigation.events()
},accordeon:function(b){var c=b.next();
if(c.is(":visible")){FooterNavigation.secondlink.slideUp()
}else{FooterNavigation.mainlink.find("i").removeClass("icon-single-up-arrow-icon_f").addClass("icon-single-down-arrow-icon_f");
FooterNavigation.secondlink.slideUp();
c.slideDown()
}b.find("i").toggleClass("icon-single-down-arrow-icon_f icon-single-up-arrow-icon_f")
},events:function(){FooterNavigation.mainlink.on("click",function(b){b.preventDefault();
FooterNavigation.accordeon($(this))
})
}};
var NavMenu={globals:{mainNavigation:$(".c-mainnavigation"),itemMenuLv1item:$(".c-mainnavigation__lvlmenu1>li>a"),itemMenuLv1hassubmenu:$(".c-mainnavigation__lvlmenu1>li>a.has-submenu"),mainnavigationvlmenu1:$(".c-mainnavigation__lvlmenu1"),menuUnderline:$(".c-header__underline"),metanavmobile:$(".c-mainnavigation__metanavmobile"),$stockPriceTeaserMobile:$(".c-stockpriceteaser--mobile"),helperVar:true,__window__Width:$(window).width(),msie:navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.indexOf("Trident")>0||navigator.userAgent.indexOf("Edge")>0},init:function(){if(Header.edit){return this
}this.updateDom();
this.events();
NavMenu.cloneStockPriceTeaser();
return this
},openDesktopMenu:function(b){Header.showSubNavContent(b);
NavMenu.animateUnderline();
return this
},closeDesktopMenu:function(){Header.hideSubNavContent();
NavMenu.animateUnderline();
return this
},closeMobileMenu:function(b){if(NavMenu.globals.helperVar){return this
}if(b==undefined){b=true
}NavMenu.globals.helperVar=true;
NavMenu.globals.mainNavigation.removeClass("active");
DocumentManager.enableScroll();
if(b){DocumentManager.hideLayer()
}Header.subnav.fadeOut(300);
NavMenu.globals.metanavmobile.trigger("raz").fadeOut(300);
NavMenu.globals.mainnavigationvlmenu1.fadeOut(300);
Header.menuburger.removeClass("active");
NavMenu.animateUnderline();
Header.fixSubNav();
$("body").removeClass("navigation-opened");
return this
},openMobileMenu:function(){if(!NavMenu.globals.helperVar){return this
}Header.hideSubNavContent(false);
NavMenu.cloneMetaNavigation();
NavMenu.globals.helperVar=false;
NavMenu.globals.mainNavigation.addClass("active");
DocumentManager.disableScroll();
DocumentManager.showLayer();
Header.subnav.fadeIn(300);
NavMenu.globals.metanavmobile.fadeIn(300,function(){Header.fixSubNav()
});
NavMenu.globals.mainnavigationvlmenu1.fadeIn(300,function(){Header.fixSubNav()
});
Header.menuburger.addClass("active");
NavMenu.animateUnderline();
Header.fixSubNav();
$("body").addClass("navigation-opened");
return this
},toggleMobileMenu:function(){if(NavMenu.globals.helperVar){NavMenu.openMobileMenu()
}else{NavMenu.closeMobileMenu()
}return this
},addscrolltomenu:function(b,c){if(DocumentManager.isPhone||DocumentManager.isTablet){var e=c?250:220;
var d=$(window).height();
b.height(d-e);
b.AirbusNavigationNiceScroll()
}},openMobileSubNav:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){var c=Header.subnav.data("subnav-currentid");
if(c==arguments[0]){return this
}Header.subnav.data("subnav-currentid",arguments[0]).attr("data-subnav-currentid",arguments[0]);
var b=Header.subnavcontent.filter("[data-subnav-content="+arguments[0]+"]");
NavMenu.globals.mainnavigationvlmenu1.fadeOut(400);
NavMenu.globals.metanavmobile.fadeOut(400);
NavMenu.globals.mainNavigation.removeClass("active");
b.find(".t-navigation").trigger("display",[[1]]);
b.fadeIn(400,function(){Header.fixSubNav()
}).addClass("subnavcontent-active");
Header.fixSubNav()
}return this
},closeMobileSubNav:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){var b=Header.subnav.data("subnav-currentid");
if(b==undefined){return this
}Header.subnav.data("subnav-currentid",null).removeAttr("data-subnav-currentid");
Header.subnavcontent.filter("[data-subnav-content]").fadeOut(400).removeClass("subnavcontent-active");
NavMenu.globals.mainnavigationvlmenu1.fadeIn(400,function(){Header.fixSubNav()
});
NavMenu.globals.metanavmobile.fadeIn(400);
Header.subnavcontent.find(".t-navigation").each(function(){$(this).trigger("display",[[1]])
});
NavMenu.globals.mainNavigation.addClass("active");
Header.fixSubNav()
}return this
},cloneMetaNavigation:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){if(!NavMenu.globals.metanavmobile.length){NavMenu.globals.metanavmobile=Header.metanav.find(".c-metanavigation").clone().DropDownNav().init().events();
NavMenu.globals.metanavmobile.addClass("c-mainnavigation__metanavmobile").hide();
NavMenu.globals.metanavmobile.$items.$withsubnav.find("> a").unbind("click.mainnav").bindFirst("click.mainnav",{},function(){NavMenu.globals.mainnavigationvlmenu1.fadeOut(50);
return false
});
NavMenu.globals.metanavmobile.$items.$withsubnav.find(".back").unbind("click.mainnav").bindFirst("click.mainnav",{},function(){NavMenu.globals.metanavmobile.trigger("raz",[function(){NavMenu.globals.mainnavigationvlmenu1.fadeIn(50)
}]);
return false
});
NavMenu.globals.mainnavigationvlmenu1.after(NavMenu.globals.metanavmobile)
}}return this
},cloneStockPriceTeaser:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){if(!NavMenu.globals.$stockPriceTeaserMobile.length){NavMenu.globals.$stockPriceTeaserMobile=Header.metanav.find(".c-stockpriceteaser").clone();
NavMenu.globals.$stockPriceTeaserMobile.addClass("c-stockpriceteaser--mobile");
$(".mainnavigation").append(NavMenu.globals.$stockPriceTeaserMobile);
$(".c-stockpriceteaser").insertBefore(".c-header__secondnav")
}}return this
},activeAnimationMenu:function(b){var c=this.globals.mainnavigationvlmenu1.find("> li");
c.removeClass("hover");
b.closest("li").addClass("hover");
this.animateUnderline();
return this
},desactiveAnimationMenu:function(){var b=this.globals.mainnavigationvlmenu1.find("> li");
b.removeClass("hover");
NavMenu.animateUnderline();
return this
},animateUnderline:function(){if(DocumentManager.isPhone||DocumentManager.isTablet){var c=Header.mobileBtn.filter(".active").first();
if(c.length){var i=c.getPosition();
NavMenu.globals.menuUnderline.animate({width:c.outerWidth(),left:i.left},300)
}else{NavMenu.globals.menuUnderline.css({left:""}).animate({width:"40%"},300)
}}else{if(!NavMenu.globals.itemMenuLv1item.length){return this
}var c=NavMenu.globals.mainnavigationvlmenu1.find("> li.hover > a").first();
if(!c.length){c=NavMenu.globals.mainnavigationvlmenu1.find("> li.active-subnav > a").first()
}if(!c.length){c=NavMenu.globals.mainnavigationvlmenu1.find("> li.active > a").first()
}if(c.length){var d=Header.headerElement.margin("left");
var h=c.padding("left");
var b=c.padding("right");
NavMenu.globals.menuUnderline.stop(true,true);
NavMenu.globals.menuUnderline.css({right:"inherit"});
var g=c.offset().left+h-d,f=c.width()-h-b;
NavMenu.globals.menuUnderline.animate({left:g,width:f},300);
NavMenu.globals.menuUnderline.animate({bottom:"1px",right:"inherit"},200)
}else{var e=NavMenu.globals.mainnavigationvlmenu1.find("> li > a").first();
var h=e.padding("left");
NavMenu.globals.menuUnderline.stop(true,true);
NavMenu.globals.menuUnderline.css({width:"inherit"});
NavMenu.globals.menuUnderline.animate({bottom:"-4px",left:NavMenu.globals.itemMenuLv1item.parent().first().offset().left+h,right:"10vw"},200)
}}return this
},updateDom:function(){var b=this;
var c=NavMenu.globals.mainnavigationvlmenu1.find("> li:not(.search)");
c.addClass("item");
c.first().addClass("first");
c.last().addClass("last");
NavMenu.animateUnderline();
if(DocumentManager.isPhone||DocumentManager.isTablet){NavMenu.globals.metanavmobile.hide()
}return this
},events:function(){NavMenu.globals.itemMenuLv1item.unbind("mouseenter.mainnavunderline, mouseleave.mainnavunderline").bindDebounce("mouseenter.mainnavunderline, mouseleave.mainnavunderline",{},function(c){if(c.type=="mouseout"){NavMenu.desactiveAnimationMenu();
return true
}var b=$(this);
NavMenu.activeAnimationMenu(b);
return true
},150);
NavMenu.globals.itemMenuLv1item.unbind("mouseenter.mainnav, mouseleave.mainnav").bindDebounce("mouseenter.mainnav, mouseleave.mainnav",{},function(c){if(DocumentManager.isPhone||DocumentManager.isTablet){return true
}if(c.type=="mouseout"){NavMenu.desactiveAnimationMenu();
return true
}var b=$(this);
NavMenu.activeAnimationMenu(b);
if(b.hasClass("has-submenu")){NavMenu.openDesktopMenu($(this).data("subnav-id"))
}return true
},500);
NavMenu.globals.itemMenuLv1item.unbind("click.mainnav").bind("click.mainnav",{},function(c){var b=$(this);
if(b.hasClass("has-submenu")){if(DocumentManager.isPhone||DocumentManager.isTablet){NavMenu.openMobileSubNav($(this).data("subnav-id"))
}return false
}return true
});
$(window).unbind("resize.mainnav").bindDebounce("resize.mainnav",function(){if(!DocumentManager.isAndroidMobileBrowser&&!DocumentManager.isIosChrome){Header.hideSubNavContent();
NavMenu.closeMobileSubNav();
NavMenu.closeMobileMenu()
}if(!(DocumentManager.isPhone||DocumentManager.isTablet)&&!NavMenu.globals.mainnavigationvlmenu1.is(":visible")){NavMenu.globals.mainnavigationvlmenu1.fadeIn();
Header.subnav.fadeIn()
}NavMenu.animateUnderline();
Header.fixSubNav()
},200);
return this
}};
$.fn.SearchForm=function(){this.$title=$(".c-search__form--title",this);
this.$form=$(".c-search__form--form",this);
this.$form.$inputtext=$(".c-search__form--form--text input",this.$form);
this.$form.$btnreset=$('.c-search__form--form--button button[type="reset"]',this.$form);
this.$form.$btnsubmit=$('.c-search__form--form--button button[type="submit"]',this.$form);
this.$searchresultform=$(".c-searchresult__form",this);
this.$searchresultform.$inputtext=$(".c-search__form--form--text input",this.$searchresult);
this.$searchresultform.$btnreset=$('.c-search__form--form--button button[type="reset"]',this.$searchresult);
this.$searchresultform.$btnsubmit=$('.c-search__form--form--button button[type="submit"]',this.$searchresult);
this.animateform=function(){this.Animate("SearchFormEntrance").onTransitionEnd("searchform",function(){this.reset()
})
};
this.limitedPlaceholder=function(){this.$form.$inputtext.LimitedPlaceholder({reload:true})
};
this.events=function(){this.$form.$inputtext.unbind("keyup.searchform, keypress.searchform").bind("keyup.searchform, change.searchform",{"$bloc":this},function(b){if($(this).val()==""){b.data.$bloc.trigger("resetform");
return true
}b.data.$bloc.trigger("updatedform");
return true
});
this.$form.$btnreset.unbind("click.searchform").bind("click.searchform",{"$bloc":this},function(b){b.data.$bloc.trigger("resetform");
return true
});
this.$form.$btnsubmit.unbind("click.searchform").bind("click.searchform",{"$bloc":this},function(b){b.data.$bloc.trigger("resetform");
return true
});
this.$searchresultform.$inputtext.unbind("keyup.searchform, keypress.searchform").bind("keyup.searchform, change.searchform",{"$bloc":this},function(b){if($(this).val()==""){b.data.$bloc.trigger("resetform");
return true
}b.data.$bloc.trigger("updatedform");
return true
});
this.unbind("updatedform.searchform").bind("updatedform.searchform",{"$bloc":this},function(b){b.data.$bloc.$form.addClass("updated")
});
this.unbind("resetform.searchform").bind("resetform.searchform",{"$bloc":this},function(b){b.data.$bloc.$form.removeClass("updated")
});
this.unbind("showform.searchform").bind("showform.searchform",{"$bloc":this},function(b){Header.showSubNavContent("searchform")
});
this.unbind("hideform.searchform").bind("hideform.searchform",{"$bloc":this},function(b){Header.hideSubNavContent()
});
this.unbind("toggleform.searchform").bind("toggleform.searchform",{"$bloc":this},function(b){if(b.data.$bloc.is(":visible")){b.data.$bloc.trigger("hideform")
}else{b.data.$bloc.trigger("showform")
}})
};
return this
};
var Search={init:function(){this.$searchForm=$(".c-search__form").first().SearchForm();
this.events()
},animate:function(){this.$searchForm.animateform()
},limitedPlaceholder:function(){this.$searchForm.limitedPlaceholder()
},events:function(){this.$searchForm.events()
},toggleForm:function(){this.$searchForm.trigger("toggleform")
},showForm:function(){this.$searchForm.trigger("showform")
},hideForm:function(){this.$searchForm.trigger("hideform")
}};
$.fn.MediaListComponent=function(){this.$tablist=$(".t-tablist",this);
this.$slider=$(".slick-slider",this);
this.$seeall=$(".c-medialist__seealllink",this);
this.$seeall.$type=$(".typeName",this.$seeall);
this.$downloadlink=$(".c-medialist__downloadlink",this);
this.getSlickContainer=function(){return this.$slider.slickContainer()
};
this.getTabListItemActive=function(){return $(".item.active",this.$tablist).first().slickExternalElem({})
};
this.getFilterKey=function(){var b=this.getTabListItemActive();
if(b.length){return b.key
}return $(".sliderslick [data-filterkey]",this).first().data("filterkey")
};
this.getFilterText=function(){var b=this.getTabListItemActive();
if(b.length){return b.text
}return $(".sliderslick [data-filtertext]",this).first().data("filtertext")
};
this.isConfigVideo=function(){return MediaList.keysvideo.includes(this.getFilterKey())
};
this.isDark=function(){return this.hasClass("c-medialist--background__dark")
};
this.scrollTop=function(){var c=this.offset().top;
var b=$("html").getPosition();
if(b.scrollTop>c){c-=120
}else{c-=10
}setTimeout(function(){$("body,html").animate({scrollTop:c},400)
},50)
};
this.display=function(c){if(c){this.addClass("c-medialist--success")
}else{this.removeClass("c-medialist--success")
}return this
};
this.initMedias=function(){var b=$(".c-media",this);
b.each(function(){var c=$(this).MediaContent();
setTimeout(function(){c.blocs.$chapo.$txt.TruncateParagraphe({lines:3})
},50)
})
};
this.initDownloadMedias=function(){var b=$(".c-media",this);
b.each(function(){var c=$(this).MediaContent();
if(c.closest(".slick-cloned").length){c.events()
}c.links.$download.unbind("click.medialist").bind("click.medialist",{"$media":c},MediaList.events.openAllTargetDownloadMedia);
c.blocs.$download.$close.unbind("click.medialist").bind("click.medialist",{"$media":c},MediaList.events.closeAllTargetDownloadMedia)
})
};
this.setConfig=function(){var b=this.getSlickContainer();
if(typeof(b.options.filtertype)=="undefined"){return
}if(MediaList.keysvideo.includes(b.filters.current.key)){if(b.options.filtertype!=b.options.config_video.filtertype){if(DocumentManager.isDesktop){b.setConfig(b.options.config_video).refresh()
}}}else{if(b.options.filtertype!=b.options.config_default.filtertype){if(DocumentManager.isDesktop){b.setConfig(b.options.config_default).refresh()
}}}return this
};
this.filtermedias=function(){var b=this.getSlickContainer();
var c=this.getFilterKey();
if(typeof(c)!="undefined"&&c){if(b.filters.current.key!=c){b.filterkey(c);
this.setConfig()
}}else{b.removefilter()
}return this
};
this.updateButtons=function(){if(this.$seeall.length&&this.$seeall.$type.length){var c=this.getFilterKey();
var f=this.getFilterText();
if(c&&f){var b=$("a",this.$seeall);
var d=b.attr("data-filterkey");
var e=b.attr("href").replace("."+d+".","."+c+".");
b.attr("data-filterkey",c).attr("data-filtertext",f).attr("href",e);
this.$seeall.$type.text(f)
}}if(this.$downloadlink.length){var c=this.getFilterKey();
var f=this.getFilterText();
if(c&&f){$("a",this.$downloadlink).attr("data-filterkey",c).attr("data-filtertext",f)
}}return this
};
this.analytics=function(){Analytics.addClickComponentEvent($("li.item",this.$tablist),{nameevent:"ClickFilter",label1event:function(){return this.data("filtertext")
}});
Analytics.addClickComponentEvent($("a",this.$seeall),{nameevent:"RedirectSearch",label1event:function(){return this.data("filtertext")
},label2event:"See all"});
Analytics.addDownloadEvent($("a",this.$downloadlink),{nameevent:"Zip",label1event:function(){return this.data("filtertext")
},label2event:"Download all",format:"zip"});
return this
};
this.events=function(){$("a",this.$downloadlink).unbind("mouseout.medialist").bind("mouseout.medialist",function(){$(this).blur()
});
$("a",this.$downloadlink).unbind("click.medialist").bindFirst("click.medialist",function(){$(this).blur();
return true
});
return this
};
return this
};
var MediaList={config:{tablist:{dropdownlist:true,barre:true,barreposition:"top",underline:true,underlineposition:"top",invertcolor:false,textposition:"right",preload:function(){var b=$(this).closest(".c-medialist").MediaListComponent();
if(b.isDark()){this.config.invertcolor=true
}else{this.config.invertcolor=false
}},callback:function(){var b=$(this).closest(".c-medialist").MediaListComponent();
b.filtermedias().updateButtons().scrollTop();
return false
}},slider:{dots:false,pager:true,pagerposition:"right",buttons:true,buttonsposition:"right",buttonsoverlay:false,filter:true,infinite:true,invertcolor:false,slidesToShow:4,slidesToScroll:3,responsivedesktop:{pagerposition:"right",buttons:true,slidesToShow:3,slidesToScroll:2},responsivetablet:{pagerposition:"right",buttons:true,slidesToShow:3,slidesToScroll:2},responsivephone:{pagerposition:"center",buttons:false,slidesToShow:1,slidesToScroll:1},preload:function(){var b=$(this).closest(".c-medialist").MediaListComponent();
if(b.isDark()){this.config.invertcolor=true
}else{this.config.invertcolor=false
}if(b.isConfigVideo()){this.config=$.extend({},this.config,this.config.config_video)
}else{this.config=$.extend({},this.config,this.config.config_default)
}b.events().analytics()
},callback:function(){var b=$(this).closest(".c-medialist").MediaListComponent();
if(arguments[0]=="init"){b.filtermedias().display(true);
b.$tablist.trigger("reload");
$(window).unbind("resize.medialist").bind("resize",{"$medialist":b},function(c){c.data.$medialist.initMedias()
})
}if(arguments[0]=="reInit"){b.initDownloadMedias()
}if(arguments[0]=="afterChange"){b.initMedias()
}},config_default:{filtertype:"default",slidesToShow:4},config_video:{filtertype:"video",slidesToShow:3}}},keysvideo:["video","footage"],init:function(){},events:{openAllTargetDownloadMedia:function(d){var c=d.data.$media.closest(".slick-slide");
var b=c.closest(".sliderslick__container").slickContainer();
b.getCopySlides(c).find(".c-media").trigger("download-show")
},closeAllTargetDownloadMedia:function(d){var c=d.data.$media.closest(".slick-slide");
var b=c.closest(".sliderslick__container").slickContainer();
b.getCopySlides(c).find(".c-media").trigger("download-hide")
}}};
$.fn.QuickLinkTeaserComponent=function(){this.$parbase=this.closest(".quicklinkteaser.parbase");
this.$links=$(".c-quicklinkteaser__links",this);
this.$links.$li=$("li",this.$links);
this.cols2=this.$parbase.hasClass("col-sm-8")&&!DocumentManager.isPhone;
this.fixHeightLinks=function(){if(!this.cols2){return this
}this.$links.$li.nApply(this,function(){this.removeClass("first").removeClass("last");
this.first().addClass("first");
this.last().addClass("last");
this.FixeHeight()
},[]);
return this
};
this.matchHeightComponent=function(){var b=this.$parbase.siblings(".baseteaser");
if(b.length>0){var c=b.hasClass("no-margin-bottom");
if(c){this.$parbase.closest(".row").addClass("row--match-height-no-margin")
}else{this.$parbase.closest(".row").addClass("row--match-height")
}}return this
};
return this
};
var QuickLinkTeaser={init:function(){$(".c-quicklinkteaser").each(function(){$(this).QuickLinkTeaserComponent().fixHeightLinks();
$(this).QuickLinkTeaserComponent().matchHeightComponent()
})
}};
$(function(){var b=$(".c-articlelist").find("h3");
b.TruncateParagraphe({lines:3});
b.css({"line-height":"120%"})
});
$.fn.FancyBoxLink=function(){this.updategroupeid=function(b){this.data("fancybox",b).attr("data-fancybox",b);
return this
};
this.updateid=function(b){this.$fancybox.attr("id",b);
this.attr("href","#"+b);
return this
};
this.loaddatas=function(){this.groupid=this.attr("data-fancybox");
this.href=this.attr("href");
this.id=this.href.replaceAll("#","");
this.$media=this.closest(".c-media");
this.$fancybox=$("#"+this.id,this.$media);
return this
};
this.__constructor__=function(){this.loaddatas();
return this
};
return this.__constructor__()
};
$.fn.FancyBoxContent=function(){this.$body=$(".c-lightbox__body",this);
this.$rightblock=$(".c-lightbox__rightblock",this);
this.$rightblock.button={"$phone":$(".fancybox-controls-button-phone",this.$rightblock),"$desktop":$(".fancybox-controls-button-desktop",this.$rightblock)};
this.$rightblock.pagination={"$curent":$(".c-lightbox__rightblock__pagination--curent",this.$rightblock),"$length":$(".c-lightbox__rightblock__pagination--length",this.$rightblock)};
this.$rightblock.$scrollwrapper=$(".scroll-wrapper",this.$rightblock);
this.$viewer=$(".s7videoviewer",this);
this.$download=$(".c-lightbox__download",this);
this.$download.$items=$("ul li",this.$download);
this.id=this.$body.data("id");
this.index=this.$body.data("index");
this.typemedia=this.$body.data("typemedia");
this.initCssClass=function(){if(!this.hasClass("c-lightbox")){this.addClass("c-lightbox").addClass("c-lightbox--"+this.typemedia).addClass(this.typemedia)
}if(this.$download.length&&this.$download.$items.length>4){this.$download.$items.addClass("morthanfour")
}else{this.$download.$items.removeClass("morthanfour")
}if(!this.$download.$items.length){this.addClass("nodownload")
}else{this.removeClass("nodownload")
}return this
};
this.showNiceScroll=function(){this.$rightblock.$scrollwrapper.show().getNiceScroll().resize();
return this
};
this.hideNiceScroll=function(){this.$rightblock.$scrollwrapper.hide().getNiceScroll().resize();
return this
};
this.initMediaContent=function(){var c=$('[data-fancyboxasync-id="'+this.id+'"]').MediaContent();
var b=$("#"+this.id+"");
if(c.length&&!b.length&&!c.blocs.$lightbox.length){c.links.$fancybox.removeData("type").removeAttr("data-type").removeData("src").removeAttr("data-src");
var d=this.clone().hide().attr("id",this.id);
d.appendTo(c)
}return this
};
this.initPagination=function(c,b){if(b>1){if(DocumentManager.isPhone){this.$rightblock.button.$phone.addClass("show");
this.$rightblock.button.$desktop.removeClass("show");
this.$rightblock.pagination.$curent.html(c);
this.$rightblock.pagination.$length.html(b)
}else{this.$rightblock.button.$phone.removeClass("show");
this.$rightblock.button.$desktop.addClass("show")
}}else{if(DocumentManager.isPhone){this.$rightblock.button.$phone.removeClass("show")
}else{this.$rightblock.button.$desktop.removeClass("show")
}}return this
};
this.initS7Video=function(){if(this.$viewer.length){S7Video.verifIds(this.$viewer,"_lightbox_");
this.$viewer.S7VideoContainer().loadVideo()
}return this
};
this.disposeS7Video=function(){if(this.$viewer.length){this.$viewer.S7VideoContainer().unbindEvents().dispose()
}return this
};
this.initDownloadImage=function(){if(!this.$viewer.length){this.$download.$items.find("a").each(function(){var b=$(this);
b.GetPropsForDownloadImage($(".c-lightbox__download--size",b),$(".c-lightbox__download--dimension",b))
})
}return this
};
this.display=function(c){if(c==undefined){c=true
}if(c){this.css({display:"inline-block"})
}else{this.css({display:"none"})
}return this
};
return this
};
Lightbox={init:function(){$("[data-fancybox].fancybox-simple").each(function(b){var c=$(this).FancyBoxLink();
if(c.data("loadids")){return
}c.updategroupeid(c.groupid+"_"+b).updateid(c.id+"_"+b).data("loadids",true)
});
$(".c-medialist").each(function(b){$("[data-fancybox]",$(this)).each(function(c){var d=$(this).FancyBoxLink();
if(d.data("loadids")){return
}d.updategroupeid(d.groupid+"_ml_"+b).updateid(d.id+"_ml_"+b+"_"+c).data("loadids",true)
})
});
Lightbox.globals={filterItem:$(".c-medialist-download__disable__filter li a")};
Lightbox.updatedom();
Lightbox.events()
},updateTwitterTag:function(b){var e=b.parents(".c-lightbox").find(".c-lightbox__rightblock--title").text(),c=b.parents(".c-lightbox").find(".c-lightbox__rightblock--description").text(),d=b.parents(".c-lightbox").find(".c-lightbox .c-picture img").attr("src");
$('meta[name="twitter:title"]').attr("content",e);
$('meta[name="twitter:description"]').attr("content",c);
$('meta[name="twitter:image"]').attr("content",d)
},initFancybox:function(){$(document).find('.slick-slide:not(".slick-cloned") [data-fancybox], [data-fancybox].fancybox-simple, .c-resultlist__assetlist [data-fancybox]').fancybox({beforeMove:function(){},afterMove:function(){},afterLoad:function(b,d){var c=this.$content.FancyBoxContent();
c.initCssClass().initPagination(d.index+1,b.group.length);
c.display(true).showNiceScroll()
},onComplete:function(){var b=this.$content.FancyBoxContent();
b.find(".scroll-wrapper").LightboxNiceScroll();
b.display(true).initS7Video().initDownloadImage().initMediaContent().showNiceScroll()
},beforeClose:function(){var b=this.$content.FancyBoxContent();
b.disposeS7Video()
},afterClose:function(){var b=this.$content.FancyBoxContent();
b.display(false).hideNiceScroll()
}});
return
},updatedom:function(){this.initFancybox()
},events:function(){Lightbox.globals.filterItem.unbind("click.lightbox").bind("click.lightbox",function(){Lightbox.initFancybox()
});
$(".c-lightbox .tweet").on("click",function(){Lightbox.updateTwitterTag($(this))
});
$(".c-lightbox__rightblock--toggleread").unbind("click.c-lightbox__rightblock--toggleread").bind("click.c-lightbox__rightblock--toggleread",function(c){c.preventDefault();
$this=$(this);
var b=$this.siblings(".c-lightbox__rightblock--description");
var d=$this.find(".toggleReadMore");
b.toggleClass("show-more-height");
d.text(d.text()==d.data("readless")?d.data("readmore"):d.data("readless"));
d.next().toggleClass("rotateElement")
});
if(!DocumentManager.isPhone){$(".c-lightbox__rightblock--content .scroll-wrapper").LightboxNiceScroll()
}},ajax:{loadContent:function(){console.log("Lightbox.ajax.loadContent",this.$media,arguments)
},loadByMedia:function(c,b){if(b.fancybox.iscalled==true){return this
}$.ajax({url:Media.ajax.getUrl(b.fancybox),method:"get",async:true,data:{},context:{"$lightbox":c,"$media":b},beforeSend:function(){},complete:function(){},success:Media.loadContentLightbox})
}}};
$.fn.StockPriceTeaser=function(b){this.config=$.extend({},{},b);
this.loadContent=function(){if(typeof(arguments[0])=="undefined"){return this
}var c=arguments[0];
if(typeof(c.Error)!="undefined"){if(console){console.error("Error : ",c.Error)
}return this.hide()
}if(typeof(c.price)=="undefined"||typeof(c.percentage)=="undefined"){if(console){console.error("Price or percentage is undefined",c.Error)
}return this.hide()
}c.ipercentage=parseFloat(c.percentage.replace(",","."));
this.$price.text(c.price);
this.$percent.text(c.percentage);
if(c.ipercentage>0){this.$arrow.removeClass("arrow-down").addClass("arrow-up");
this.$percent.text("+"+c.percentage)
}else{this.$arrow.removeClass("arrow-up").addClass("arrow-down")
}this.addClass(StockPrice.config.cssclass.visible);
return this
};
this.__constructor__=function(){this.$title=$(".c-stockpriceteaser__title",this);
this.$label=$(".c-stockpriceteaser__label",this);
this.$price=$(".c-stockpriceteaser__price",this);
this.$percent=$(".c-stockpriceteaser__percent",this);
this.$secondlabel=$(".c-stockpriceteaser__secondlabel",this);
this.$arrow=$(".arrow",this);
this.$link=$(".c-stockpriceteaser__link",this);
return this
};
return this.__constructor__()
};
var StockPrice={config:{ajax:{path:window.location.pathname.split(".")[0]+".stockprice.json?dt="},reload:false,timer:50000,cssclass:{visible:"c-stockpriceteaser--show"}},init:function(){StockPrice.blocs=[];
$(".c-stockpriceteaser").each(function(){StockPrice.blocs.push($(this).StockPriceTeaser())
});
StockPrice.ajax.load();
if(StockPrice.config.reload&&StockPrice.config.timer>1000){StockPrice.$timer=setInterval(StockPrice.ajax.load,StockPrice.config.timer)
}},getUrl:function(){var b=new Date();
return StockPrice.config.ajax.path+ +b.getTime()
},ajax:{load:function(){if(!StockPrice.blocs.length){return
}$.ajax({url:StockPrice.getUrl(),dataType:"json",async:true,data:{},context:this,beforeSend:function(){},complete:function(){},success:function(b){$.each(StockPrice.blocs,function(){this.loadContent(b)
})
},error:function(b,d,c){if(console){console.log("StockPrice.ajax.load.error",c)
}$.each(StockPrice.blocs,function(){this.hide()
})
}});
return false
}}};
$.fn.TextImageTeaser=function(){this.__constructor__=function(){this.$title=$(".c-textimageteaser__title",this);
this.$items=$(".c-textimageteaser__items",this);
this.$items.$blocsimg=$(".c-textimageteaser__wrapper-img",this.$items);
this.$items.$blocstxt=$(".c-textimageteaser__text",this.$items);
return this
};
return this.__constructor__()
};
var TextImage={init:function(){$(".c-textimageteaser").each(function(){$(this).TextImageTeaser()
});
if(!DocumentManager.isPhone){TextImage.fixHeight();
$(window).resize(function(){TextImage.fixHeight()
})
}},fixHeight:function(){$(".c-textimageteaser").each(function(){var b=$(this).TextImageTeaser();
b.$items.$blocstxt.FixeHeight({minheight:40,closeauto:function(){return(DocumentManager.isPhone)
}})
})
}};
var BackToTop={selecteurs:{backToTop:$(".c-backtotop")},init:function(){this.events();
this.updateDom()
},updateDom:function(){$(window).resize()
},events:function(){self=this;
$(window).on("resize",function(){var d=$("body").outerHeight(),b=$("footer").outerHeight(),c=$(window).outerHeight();
if((d-b)>c){self.selecteurs.backToTop.show()
}else{self.selecteurs.backToTop.hide();
$(this).on("scroll",function(){var e=$(window).scrollTop();
if(e>100){self.selecteurs.backToTop.slideDown()
}else{self.selecteurs.backToTop.slideUp()
}})
}});
self.selecteurs.backToTop.children("a").on("click",function(b){b.preventDefault();
$("html,body").animate({scrollTop:0},500)
})
}};
$.fn.Table=function(b){this.config=$.extend({},{},b);
this.__constructor__=function(){this.$containerslider=this.closest(".c-tablecontainer");
if(!this.$containerslider.length){this.AirbusTableNiceScroll();
$(".nicescroll-rails").addClass("table-track-style");
var c=this.getNiceScroll();
if($(c)[0]){$(c)[0].rail.addClass("table-scroller-bar")
}}return this
};
return this.__constructor__()
};
var Table={tableSelector:$(".c-table"),updateDom:function(){this.tableSelector.each(function(){$(this).Table({})
})
},init:function(){this.updateDom();
TableSlider.init()
}};
$.fn.TableSlider=function(b){this.config=$.extend({},{},b);
this.__constructor__=function(){this.edit=this.data("edit");
return this
};
return this.__constructor__()
};
var TableSlider={__slider__:[],config:{tablist:{dropdownlist:false,barre:true,barreposition:"top",underline:true,underlineposition:"top",textposition:"right"},slider:{dots:false,pager:false,buttons:true,buttonsposition:"center",buttonsoverlay:false,infinite:false,centerMode:true,initialSlide:0,slidesToShow:3,slidesToScroll:3,callback:function(c,b){}}},init:function(){TableSlider.__slider__=[];
TableSlider.load.apply($(".c-tablecontainer"),[])
},load:function(b){this.each(function(){TableSlider.__slider__.push($(this).TableSlider(b))
})
}};
$.fn.SearchFormNewsroom=function(){this.getKeyword=function(){return this.$blocform.$form.$text.val()
};
this.getUrlForm=function(){return this.$blocform.$form.attr("action")+this.$blocform.$form.serialize()
};
this.__constructor__=function(){this.$blocform=$(".c-searchresult__form",this).first();
this.$blocform.$form=$("form",this.$blocform).first();
this.$blocform.$form.$text=$('input[type="text"]',this.$blocform.$form);
this.$blocform.$form.$text.LimitedPlaceholder().limitCaracs();
return this
};
this.analytics=function(){Analytics.addClickComponentEvent(this.$blocform.$form,{nameevent:"SearchByKeyword",label1event:function(){return this.closest(".c-searchformnewsroom").SearchFormNewsroom().getKeyword()
},label2event:function(){return this.closest(".c-searchformnewsroom").SearchFormNewsroom().getUrlForm()
}});
return this
};
this.events=function(){return this
};
return this.__constructor__()
};
var SearchFormNewsroom={init:function(){$(".c-searchformnewsroom").each(function(){$(this).SearchFormNewsroom().events().analytics()
})
},events:{submit:function(b){return true
}},config:{tablist:{dropdownlist:false,barre:false,more:true,barreposition:"top",underline:false,underlineposition:"top",invertcolor:false,textposition:"right",returnClick:true,preload:function(){}}}};
var Cookies={cookie:$(".c-cookies"),cookieAgree:$(".c-cookies .c-cookies--agree"),cookieClose:$(".c-cookies .c-cookies--close"),dtExpire:new Date(),init:function(){this.onedit=this.cookie.hasClass("c-cookies--onedit");
this.initCookie()
},initCookie:function(b){if(this.onedit){return
}var c=this;
this.dtExpire.setTime(this.dtExpire.getTime()+3600*4320000);
this.cookieAgree.on("click",function(d){d.preventDefault();
c.setExp()
});
this.cookieClose.on("click",function(d){c.cookie.remove();
$("body").removeClass("enableCookie")
});
if(this.getCookie("allow_cookie")=="1"){this.cookie.remove();
$("body").removeClass("enableCookie")
}else{this.cookie.css({display:"block"})
}if($("header .c-cookies").length){$("body").addClass("enableCookie")
}else{$("body").removeClass("enableCookie")
}},getCookie:function(c){if(document.cookie.length==0){return null
}var b=new RegExp("(; )","g");
var e=document.cookie.split(b);
for(var d=0;
d<e.length;
d++){var g=new RegExp("=","g");
var f=e[d].split(g);
if(f[0]==c){return unescape(f[1])
}}return null
},setCookie:function(d,b,c,g,e,f){document.cookie=d+" = "+escape(b)+"  "+((c==undefined)?"":("; expires = "+c.toGMTString()))+((g==undefined)?"":("; path = "+g))+((e==undefined)?"":("; domain = "+e))+((f==true)?"; secure":"")
},setExp:function(){this.cookie.remove();
this.setCookie("allow_cookie","1",this.dtExpire,"/");
$("body").removeClass("enableCookie")
}};
$.fn.ComponentSlider=function(){this.__constructor__=function(){this.$slider=$(".sliderslick",this);
this.edit=this.data("edit");
this.removeAttr("data-edit");
if(this.edit){this.addClass("c-componentslider--loaded")
}return this
};
return this.__constructor__()
};
var ComponentSlider={config:{slider:{dots:true,dotsoverlay:true,dotsitemswidth:"calc",pager:false,pagerposition:"right",buttons:true,buttonsposition:"right",buttonsoverlay:true,infinite:true,invertcolor:false,autoplay:true,autoplaywithdots:true,autoplaySpeed:5000,containsVideo:true,responsivedesktop:{},responsivetablet:{arrows:false},responsivephone:{arrows:false,dots:false,pager:true},preload:function(){var b=$(this).closest(".c-componentslider");
this.config.buttonsposition=b.data("slider-buttonsposition");
this.config.buttonsoverlay=this.config.dotsoverlay=b.data("slider-buttonsoverlay");
this.config.dots=b.data("slider-dots");
this.config.autoplaySpeed=parseInt(b.data("slider-autoplayspeed")*1000)
},callback:function(){var b=$(this).closest(".c-componentslider");
if(arguments[0]=="init"){b.addClass("c-componentslider--loaded")
}}}},__slider__:[],init:function(){ComponentSlider.__slider__=[];
ComponentSlider.load.apply($(".c-componentslider"),[])
},load:function(b){this.each(function(){ComponentSlider.__slider__.push($(this).ComponentSlider(b))
})
}};
$.fn.Stage=function(){this.__constructor__=function(){this.$left=$(".c-stage__item__left.cq-dd-image1",this).StageBloc();
this.$right1=$(".c-stage__item__right.cq-dd-image2",this).StageBloc();
this.$right2=$(".c-stage__item__right.cq-dd-image3",this).StageBloc();
return this
};
this.events=function(){this.$left.events();
this.$right1.events();
this.$right2.events();
return this
};
return this.__constructor__()
};
$.fn.StageBloc=function(){this.__constructor__=function(){this.$link=$("> a",this);
this.$wrapper=$(".c-stage__item__wrapper",this);
this.$content=$(".c-stage__item--content",this);
this.$links=$(".c-stage__item--links",this);
this.isTop=this.is(".c-stage__item__wrapper--top");
var b=this.$content.attr("title");
if(this.$link.length&&(!b||typeof(b)=="undefined")){this.$content.attr("title",this.$link.attr("title"))
}return this
};
this.events=function(){if(this.$link.length){this.$content.attr("__test__","1").unbind("click.stagebloc").bind("click.stagebloc",{"$bloc":this},function(b){b.data.$bloc.$link.get(0).click()
})
}return this
};
return this.__constructor__()
};
var Stage={config:{s7video:{onplay:function(){if($(this).data("autoplay")===true){$(this).find('.s7mutebutton[selected="false"]').trigger("click")
}}}},init:function(){this.$components=$(".c-stage");
this.$components.each(function(){$(this).Stage().events()
})
}};
$(function(){var b=$(".c-banner");
b.each(function(){var c=$(this).find(".language-item.active").text().trim();
$(this).attr("data-analytics-component-languageUsed",c)
})
});
$.fn.TextImageSliderComponent=function(){this.$tablist=$(".t-tablist",this);
this.$slider=$(".slick-slider",this);
this.getSlickContainer=function(){return this.$slider.slickContainer()
};
this.getActiveTabKey=function(){return $(".item.active",this.$tablist).data("tabs-id")
};
this.getTabItemByKey=function(b){return $("li.item[data-tabs-id="+b+"]",this.$tablist).first()
};
this.gotoTabKey=function(){var b=this.getSlickContainer();
if(b.tabs&&b.tabs.current){var d=b.tabs.current.key;
var c=this.getActiveTabKey();
this.$tablist.find(".selected .text").text($(".item.active",this.$tablist).attr("title"));
if(d!=c){b.gototabkey(c)
}}return this
};
this.activeTab=function(){var b=this.getSlickContainer();
if(b.tabs&&b.tabs.current){var c=this.getTabItemByKey(b.tabs.current.key);
if(c.length&&!c.hasClass("active")){c.trigger("tabactive");
this.$tablist.find(".selected .text").text(c.text())
}}return this
};
return this
};
var TextImageSlider={config:{tablist:{dropdownlist:true,barre:true,barreposition:"top",underline:true,underlineposition:"top",responsive:{textposition:["right"]},callback:function(){var b=$(this).closest(".c-textimagecontainer").TextImageSliderComponent();
b.gotoTabKey();
return false
}},slider:{dots:false,pager:false,arrows:true,forcearrows:true,buttons:true,buttonsposition:"left",buttonsoverlay:true,autoplay:false,autoplayspeed:0,speed:700,infinite:true,tabulation:true,xcopyelems:".c-textimage",callback:function(){var b=this.closest(".c-textimagecontainer").TextImageSliderComponent();
if(arguments[0]=="afterChange"){b.activeTab()
}}}},init:function(){TextImageSlider.load.apply($(".c-textimagecontainer"),[{}])
},load:function(b){this.each(function(){$(this).TextImageSliderComponent(b)
})
}};
var TextImageText={init:function(){TextImageText.events()
},events:function(){$(".c-textimage__text--toggle-read").off("click.c-textimage__text--toggle-read ").on("click.c-textimage__text--toggle-read",function(c){c.preventDefault();
$trigger=$(this);
var b=$trigger.siblings(".c-textimage__text");
var d=$trigger.find(".toggle-read-more");
b.toggleClass("show-more-height-text");
d.text(d.text()===d.data("readless")?d.data("readmore"):d.data("readless"));
d.next().toggleClass("rotate-element")
})
}};
$.fn.KeyProductFigures=function(b){this.$title=$(".c-keyproductfigures__headline",this);
this.$img=$(".c-keyproductfigures__img",this);
this.$details=$(".c-keyproductfigures__details",this);
this.$details.$values=$(".c-keyproductfigures__details--value",this.$details);
this.$details.$values.$metric=this.$details.$values.filter('[data-type="metric"]');
this.$details.$values.$imperial=this.$details.$values.filter('[data-type="imperial"]');
this.calcCenterSlideWidth=function(d){var c=$(window).width();
var f=0;
var e=0;
if(DocumentManager.isTablet||DocumentManager.isDesktop){f=d*8;
e=d*2+4;
this.$title.css({"margin-left":-e})
}else{f=d*12;
this.$title.css({"margin-left":0})
}this.width(f)
};
return this
};
var KeyProductFigures={config:{tablist:{dropdownlist:false,barre:true,barreposition:"top",underline:true,underlineposition:"top",invertcolor:true,responsive:{textposition:["right"]},callback:function(c){var b=$(this).data("type");
var d=c.data.$obj.closest(".c-keyproductfigurescontainer");
d.find(".c-keyproductfigures").each(function(){var e=$(this).KeyProductFigures();
e.$details.$values.removeClass("active");
if(b=="metric"){e.$details.$values.$metric.addClass("active")
}else{e.$details.$values.$imperial.addClass("active")
}});
return false
}},slider:{dots:false,pager:false,arrows:true,buttons:true,buttonsposition:"center",buttonsoverlay:false,autoplay:false,autoplayspeed:0,centerMode:true,slidesToShow:1,variableWidth:true,infinite:true,waitForAnimate:true,speed:700,cssEase:"ease-in",invertcolor:true,callback:function(){this.$items.find(".c-keyproductfigures").removeClass("c-keyproductfigures--active");
this.$items.$current.find(".c-keyproductfigures").addClass("c-keyproductfigures--active")
}}},calcCenterSlideWidth:function(b){$(".c-keyproductfigurescontainer:not(.edit)").each(function(){var c=$(this).find(".c-keyproductfigures").KeyProductFigures();
var d=$(".t-tablist",this).width()/12;
c.calcCenterSlideWidth(d)
})
},init:function(){var b=$(window).width();
KeyProductFigures.calcCenterSlideWidth(b);
$(window).on("resize",function(){KeyProductFigures.calcCenterSlideWidth(b)
})
}};
$.fn.TeaserGroupComponent=function(){this.grid=this.hasClass("c-teasergroup--grid");
return this
};
var TeaserGroup={config:{tablist:{dropdownlist:false,more:true},slider:{pager:false,pagerposition:"center",dots:true,dotstype:"circle",dotsanimate:false,responsivedesktop:{slidesToShow:4,slidesToScroll:4},responsivetablet:function(){var b=this.closest(".c-teasergroup").TeaserGroupComponent();
var c={slidesToShow:b.grid?this.$slider.$items.length:3,slidesToScroll:b.grid?this.$slider.$items.length:3};
return c
},responsivephone:function(){var b=this.closest(".c-teasergroup").TeaserGroupComponent();
var c={slidesToShow:b.grid?this.$slider.$items.length:1,slidesToScroll:b.grid?this.$slider.$items.length:1,dots:false,pager:true};
return c
},preload:function(){},callback:function(){if(arguments[0]=="refresh"){}}}}};
$.fn.FullWidthMediaSlider=function(){this.$items=$(".c-fullwidthmediaslider__item",this);
this.visible=function(){this.addClass("c-fullwidthmediaslider--success");
return this
};
function c(d){return d.find(".item__caption").text().trim().length
}var b=[];
this.$items.each(function(){return b.push($(this))
});
this.checkCaptionText=function(){if(!b.some(c)&&DocumentManager.isPhone){this.$items.each(function(){$(this).find(".item__caption").remove()
})
}return this
};
this.truncateCaption=function(){this.$items.each(function(){$(this).FullWidthMediaSliderItem().truncateCaption()
});
return this
};
return this
};
$.fn.FullWidthMediaSliderItem=function(){this.$caption=$(".item__caption",this);
this.truncateCaption=function(){this.$caption.TruncateParagraphe({lines:4});
return this
};
return this
};
var FullWidthMediaSlider={config:{slider:{dots:false,pager:true,pagerposition:"right",buttons:true,buttonsoverlay:true,buttonsposition:"right",containsVideo:true,responsivedesktop:{},responsivetablet:{},responsivephone:{buttonsoverlay:false},callback:function(){var b=this.closest(".c-fullwidthmediaslider").FullWidthMediaSlider();
if(arguments[0]=="init"){b.visible().checkCaptionText().truncateCaption()
}}}},reload:function(){$(".c-fullwidthmediaslider").each(function(){$(this).FullWidthMediaSlider().checkCaptionText();
$(this).FullWidthMediaSlider().truncateCaption()
})
},init:function(){$(window).unbind("resize.fullwidthmediaslider").bindDebounce("resize.fullwidthmediaslider",function(){setTimeout(function(){$(this).FullWidthMediaSlider().truncateCaption()
},400)
},300)
}};
$.fn.AccordeonActivate=function(){if(this.hasClass("open-accordeon-anchor")){$accTitle=$(".c-accordeonitem__title",this);
$accTitle.toggleClass("active").next().slideToggle(400,function(){$(this).AccordeonItemContent().loadSlider()
})
}return this
};
$.fn.ScrollAnchorNav=function(){var b=$(".c-anchornavigation"),d=this;
var c=function(g){var k=d.height(),j=d.scrollTop()+(k*0.07),i=d.scrollTop()+(k*0.4),h=d.scrollTop()+(k*0.7),e=$(g).offset().top,f=e+$(g).parent().height();
console.log("element top : ",e);
console.log("largeElViewTop : ",i);
console.log("height : ",$(g).parent().height());
return((e>j)&&(e<h))
};
d.on("scroll",function(){var e=$("a[name]").toArray();
e.forEach(function(g){if(c(g)){console.log(g);
var h=$(g).attr("name"),f=b.find('[href="#'+h+'"]');
if(f){b.find("li").removeClass("active").attr("data-tl-active",false);
f.parent().addClass("active").attr("data-tl-active",true);
b.find(".t-tablist").TabListContent({postload:function(){var i=b.hasClass("gradient"),j=b.hasClass("white");
if(i&&j){b.find(".t-tablist").removeClass("t-tablist--invertcolor")
}}}).activeItem(b)
}}})
});
return this
};
var AnchorNavigation={config:{tablist:{dropdownlist:true,barre:true,barreposition:"bottom",underline:true,dropdownlist:true,underlineposition:"bottom",textposition:"left",preload:function(){var b=this.closest(".c-anchornavigation");
if(b.hasClass("white")){this.config.invertcolor=true
}else{this.config.invertcolor=false
}if(DocumentManager.isPhone){this.find("ul > li").first().addClass("active")
}},callback:function(){var h=$(this);
var g=$("a",h);
var d=g.attr("href");
var e=d!=undefined?d.substr(d.indexOf("#")+1):false;
var f=$('[name="'+e+'"]').first();
var c=f.parent();
var b=function(i){$("body,html").animate({scrollTop:i.offset().top-80},600)
};
if(d&&f.length){$.when(b(f)).then(c.AccordeonActivate());
window.history.pushState(document.title,document.title,d)
}return false
}}},init:function(){if(!DocumentManager.isPhone){$(window).ScrollAnchorNav()
}}};
$.fn.AccordeonItemContent=function(){this.$parent=this.closest(".c-accordeonitem");
this.$title=$(".c-accordeonitem__title",this.$parent);
this.isActive=this.$title.hasClass("active");
this.isSlidersLoaded=this.data("sliders-loaded");
this.loadSlider=function(){if((this.isSlidersLoaded==undefined||!this.isSlidersLoaded)&&this.isActive){var b=$(".sliderslick__container",this);
b.each(function(){var c=$(this).slickContainer();
setTimeout(function(){c.refresh();
c.find(".s7videoviewer video").each(function(){var d=$(this);
var e=d.attr("poster").indexOf("?");
d.attr("poster",d.attr("poster").substring(0,e)+"?wid=1500&fit=fit,1")
})
},300)
});
this.data("sliders-loaded",true)
}return this
};
this.videoCaption=function(){var b=$(".c-media",this);
b.each(function(d){$(this).MediaContent().hideDescription();
var c=$(this).find(".s7videoviewer .s7innercontrolbarcontainer");
if(c.length>1){c.slice(1).remove()
}});
return this
};
return this
};
var Accordeon={duration:400,init:function(){var b=$(".c-accordeonitem");
b.each(function(){var c=$(this);
var e=c.hasClass("edit");
if(e){return
}var d=$(".c-accordeonitem__title",c);
if(d.hasClass("active")){d.next().slideDown(Accordeon.duration,function(){$(this).AccordeonItemContent().loadSlider().videoCaption()
})
}d.on("click",function(){$(this).toggleClass("active").next().slideToggle(Accordeon.duration,function(){$(this).AccordeonItemContent().loadSlider().videoCaption()
})
})
});
$(".c-accordeonitem__title").last().addClass("border-bottom")
}};
$.fn.topSearchDropdown=function(){return this.each(function(){var b=$(this);
var c=b.closest("form").find(".c-topsearches");
b.on("focus",function(){c.fadeIn(function(){var d=$(this).addClass("opened");
$(document).on("click",function(f){f.stopPropagation();
if(d.hasClass("opened")&&!$(f.target).closest(c).length){d.fadeOut(function(){d.removeClass("opened")
})
}})
})
})
})
};
var TopSearches={init:function(){$('[data-has-top-searches="true"]').topSearchDropdown()
}};
$.fn.Picture=function(){this.__constructor__=function(){this.$picture=$("picture",this);
this.$img=$("img",this);
this.mode=this.data("picturemode");
this.emptyrendition=this.hasClass("emptyrendition");
if(this.mode=="crop"){if(this.data("autocrop")==undefined){this.data("autocrop",true)
}if(this.data("calcleft")==undefined){this.data("calcleft",true)
}}else{this.data("autocrop",false);
this.data("calcleft",false)
}this.autocrop=this.data("autocrop");
this.calcleft=this.data("calcleft");
this.verifCropImg();
this.data("pictureload",true);
return this
};
this.events=function(){this.$img.bind("load",{"$picture":this},function(b){b.data.$picture.verifCropImg()
});
return this
};
this.verifDimImg=function(){this.removeClass("c-picture--cropwidth").removeClass("c-picture--cropheight");
this.addClass("c-picture--crop");
this.dimspan={width:this.width(),height:this.height()};
this.dimimg={width:this.$img.width(),height:this.$img.height(),nwidth:this.$img.naturalWidth(),nheight:this.$img.naturalHeight()};
this.dimimg.landscape=(this.dimimg.width>=this.dimimg.height);
this.attr("data-landscape",this.dimimg.landscape);
return this
};
this.verifLeftImg=function(){if(!this.$img.length){return this
}if(!this.calcleft){return this
}var b=0;
if(!this.hasClass("c-picture--cropwidth")){b=0
}else{if(this.dimspan.width<this.dimimg.width){b=parseFloat(this.dimspan.width/2)-parseFloat(this.dimimg.width/2)
}}if(b>0){b=0
}this.$img.css({left:b});
return this
};
this.verifCropImg=function(){if(!this.$img.length){return this
}if(!this.autocrop){return this
}if(this.emptyrendition){this.removeClass("c-picture--crop");
this.addClass("c-picture--fixheight");
return this
}this.verifDimImg();
if(!this.dimimg.width){return this
}if(this.dimimg.landscape&&this.hasClass("c-picture--cropwidth")){return this
}if(!this.dimimg.landscape&&this.hasClass("c-picture--cropheight")){return this
}this.removeClass("c-picture--crop");
this.addClass(this.dimimg.landscape&&this.dimspan.width<this.dimimg.width?"c-picture--cropwidth":"c-picture--cropheight");
this.verifLeftImg();
return this
};
return this.__constructor__()
};
var Picture={__picture__:[],init:function(){Picture.__picture__=[];
Picture.load.apply($(".c-picture"),[]);
Picture.initslick();
Picture.timerresize=null;
$(window).resize(function(){clearTimeout(Picture.timerresize);
Picture.timerresize=setTimeout(function(){Picture.verifCropImg();
clearTimeout(Picture.timerresize)
},100)
});
return this
},load:function(){if(!this.length){return this
}if(arguments[0]==true){Picture.reload()
}this.each(function(){var b=$(this);
Picture.__picture__.push(b.Picture().events())
});
return this
},initslick:function(){$(".sliderslick").on("init reInit afterChange",function(c,b,f,d){var e=$(".slick-slide.slick-cloned .c-picture",this);
Picture.load.apply(e,[true])
});
return this
},reload:function(){var b=Picture.__picture__;
Picture.__picture__=[];
$.each(b,function(d){var c=jQuery.contains(document.documentElement,this[0]);
if(c){Picture.load.apply(this,[])
}});
return this
},verifCropImg:function(){$.each(Picture.__picture__,function(){this.verifCropImg()
});
return this
}};
var CrisisMode={init:function(){this.$component=$(".c-crisismode").first();
this.load();
if(!this.$component.length){return
}this.events()
},load:function(){if(!this.$component.length){return
}this.$link=$(".c-crisismode__linkfancybox",this.$component);
this.$div=$(".c-crisismode__popin",this.$component).css({padding:0});
this.$ins=$("ins",this.$div);
this.$beacon=$('[id^="beacon"]',this.$div);
this.$wrapper=$("#crisisWrapper",this.$div)
},events:function(){if(!this.$link.length){return
}this.$link.fancybox({onComplete:CrisisMode.fancybox.onComplete,afterClose:CrisisMode.fancybox.afterClose});
this.timer=setInterval(function(){CrisisMode.verifContainer.apply(CrisisMode,[])
},800)
},writeHtml:function(b){if(!b){return
}if(typeof(b)=="undefined"){return
}if(!CrisisMode.$wrapper.length){return
}this.$wrapper.html(b)
},verifContainer:function(){this.load();
if(this.$beacon.length){if(this.$wrapper.length&&this.$wrapper.html()!=""){this.openLightbox()
}clearInterval(this.timer)
}},openLightbox:function(){if(!CrisisMode.$link.length){return
}this.$link.trigger("click")
},fancybox:{onComplete:function(){},afterClose:function(){}}};
var SmallMediaGallery={config:{slider:{dots:false,pager:true,pagerposition:"right",buttons:true,buttonsposition:"right",buttonsoffset:["-10vw",0],buttonsoverlay:false,infinite:true,centermode:true,slidesToShow:1,slidesToScroll:1,variableWidth:true,forceclone:3,responsivedesktop:{slidesToShow:1,slidesToScroll:1,buttonsoffset:["-10vw",0]},responsivetablet:{slidesToShow:1,slidesToScroll:1,buttonsoffset:["-10vw",0]},responsivephone:{slidesToShow:1,slidesToScroll:1,buttonsoffset:["-10vw",0]},preload:function(){if(this.$slider.$items.length==1){this.config.forceclone=false;
$(this.$slider).closest(".c-smallmediagallery").addClass("single-item")
}},callback:function(){}}},init:function(){}};
$.fn.TextMediaParagraph=function(){this.__constructor__=function(){this.$caption=$(".text-media-caption",this);
this.each(function(){$(this).find(".text-media-caption").TruncateParagraphe({lines:4})
})
};
return this.__constructor__()
};
var TextImage={init:function(){$(".c-textmediaparagraph").each(function(){$(this).TextMediaParagraph()
})
}};
$.fn.ContentNavigationContainer=function(b){this.isEdit=this.hasClass("edit");
this.$tabscontent=$(".t-tabscontent",this);
this.$tablist=$(".t-tablist",this);
this.itemRow=$(".t-tabscontent__container > .row",this);
this.init=function(){this.$tablist.TabListContent();
this.$tabscontent.TabsContent({edit:this.isEdit}).events();
this.$tablist.events();
this.$tabscontent.load();
TabsContent.tabs.push(this.$tabscontent);
TabList.tabs.push(this.$tablist);
return this
};
return this
};
$.fn.ContentNavigationItem=function(b){this.$title=$(".c-contentnavigationitem__title",this);
this.$linkglobal=$(".link-global",this);
this.$linkglobal.isHover=this.$linkglobal.hasClass("hover");
return this
};
var ContentNavigation={config:{tabscontent:{slider:false,collaspe:false,callback:function(){this.$contents.each(function(){$(this).closest(".row").removeClass("active")
});
var b=arguments[2];
b.closest(".row").addClass("active");
b.parent().hasClass("c-tabitem")?b.closest(".row").addClass("active"):false;
Picture.verifCropImg()
}},tablist:{dropdownlist:true,barre:true,more:true,barreposition:"top",underline:true,underlineposition:"top",invertcolor:true,responsive:{textposition:["left","right","right","right"]}}},init:function(){$(".c-contentnavigationcontainer").each(function(){var b=$(this).ContentNavigationContainer();
if(b.$tablist.length==0){b.itemRow.addClass("active")
}b.init()
});
$(".c-contentnavigationitem").each(function(){var b=$(this).ContentNavigationItem();
b.$title.on("mouseover.contantnav",function(){var c=$(this).closest(".c-contentnavigationitem").ContentNavigationItem();
c.$linkglobal.addClass("hover")
});
b.$title.on("mouseout.contantnav",function(){var c=$(this).closest(".c-contentnavigationitem").ContentNavigationItem();
c.$linkglobal.removeClass("hover")
});
b.$title.on("click.contantnav",function(){var c=$(this).closest(".c-contentnavigationitem").ContentNavigationItem();
c.$linkglobal[0].click();
return true
})
})
}};
$.fn.SubNavigationComponent=function(){this.option=this.data("subnav-option");
if(this.option==undefined){if(this.hasClass("c-subnavigation--option1")){this.option=1
}else{if(this.hasClass("c-subnavigation--option2")){this.option=2
}}this.data("subnav-option",this.option).attr("data-subnav-option",this.option)
}this.displaymainlink=this.data("subnav-displaymainlink");
this.$subnav=$(".t-navigation",this);
this.init=function(){this.$subnav.Navigation({subnav:{option:this.option,displaymainlink:this.displaymainlink},callback:SubNavigation.config.navigation.callback,navp:{callback:SubNavigation.config.navpagination.callback}});
return this
};
return this
};
var SubNavigation={config:{navigation:{callback:function(i){if(i=="preload"){this.$contents.$items.each(function(){var k=$(this).NavigationItem();
if(k.level==1){k.addClass("firstcolumn")
}else{if(k.level==2){k.addClass("secondcolumn")
}else{if(k.level==3){k.addClass("thirdcolumn")
}else{if(k.level>3){k.addClass("lastcolumn")
}}}}});
if(DocumentManager.isDesktop){var f=this.$contents.$items.filter(".nav-level-1").find("> li.has-subnav").first().find("> ul").NavigationItem();
if(f.length){this.currentTab(f.tab)
}}if(this.config.subnav.option==1){var j=this.$contents.$items.filter(".nav-level-2").find("li");
j.hoverAnimate([["zoomIn","img"]],[["zoomOut","img"]])
}Picture.verifCropImg()
}if(i=="display"){var c=arguments[3];
var h=c[c.length-1];
if(h.length&&!h.is(".item")){h=h.find("> .item")
}if(DocumentManager.isDesktop){var b=h.data("nav-level");
if(b>=3){this.find(".col-right").fadeOut()
}else{this.find(".col-right").fadeIn()
}if(b>=4){this.addClass("supCol4")
}else{this.removeClass("supCol4")
}}Picture.verifCropImg()
}if(i=="back"){if(arguments[1].length==1&&typeof(NavMenu.closeMobileSubNav)=="function"){NavMenu.closeMobileSubNav.apply()
}}if(i=="eventclick"){if(!DocumentManager.isDesktop){var d=arguments[1];
var g=d.closest("li").find("> .item");
if(g.length){var e=g.data("nav-tabulation");
this.display(e).reload();
return false
}return true
}}return true
}},navpagination:{offset:1,callback:function(c,b){if(c=="click-offset"&&b.hasClass("offset-0")){if(typeof(NavMenu.closeMobileSubNav)=="function"){NavMenu.closeMobileSubNav.apply()
}}}}},init:function(){if(Header.edit){return this
}$(".c-subnavigation").each(function(){$(this).SubNavigationComponent().init()
});
return this
}};
var s,SearchResultsForm={globals:{showSearch:$(".c-search__form--btnshowform"),searchBlock:$(".c-search__form.second"),searchResult:$(".c-searchresult__form"),searchResultText:$(".c-searchresult__form--form--text"),header:$("header"),toggleIcon:true,showSearchTitle:$(".c-search__form--title"),__window__Width:$(window).width()},init:function(){s=this.globals;
this.events();
this.updateDom()
},updateDom:function(){var b=$(".c-searchresult__form").find(".c-searchresult__form--form--text");
this.resetText(b)
},showSearchBlock:function(){s.searchBlock.slideToggle();
$(".menuburger i").removeClass("icon-close").addClass("icon-burger-menu");
$(".c-mainmenu").slideUp();
$(".mainnavigation").removeAttr("style");
$("header").removeClass("fixed");
if(s.toggleIcon){s.showSearch.find("i").toggleClass("icon-search icon-close");
s.toggleIcon=!s.toggleIcon
}else{setTimeout(function(){s.showSearch.find("i").toggleClass("icon-search icon-close")
},400);
s.toggleIcon=!s.toggleIcon
}s.searchBlock.find(".c-search__form--form--text").LimitedPlaceholder().limitCaracs()
},resetText:function(b){if(b.val()!=""||(b.defaultValue!=""&&b.defaultValue!=undefined)){b.siblings("button[type='reset']").css("visibility","visible");
b.parent().addClass("with-text")
}else{b.parent().removeClass("with-text");
b.siblings("button[type='reset']").css("visibility","hidden")
}},events:function(){var b=this;
s.showSearch.on("click",function(){b.showSearchBlock()
});
s.showSearchTitle.on("click",function(){b.showSearchBlock()
});
s.searchBlock.find(".c-search__form--form--text").on({keyup:function(){b.resetText($(this))
}});
s.searchResult.find(".c-searchresult__form--form--text").on({keyup:function(){b.resetText($(this))
}});
$(".c-search__form--form--reset, .c-searchresult__form--form--reset").on("click",function(){$(this).css("visibility","hidden");
$(this).parent().removeClass("with-text");
$(this).siblings("input:text").val("").prop("defaultValue","")
})
}};
$.fn.TabNavigationContainer=function(b){this.isEdit=this.hasClass("edit");
this.$tabscontent=$(".t-tabscontent",this);
this.$tablist=$(".t-tablist",this);
this.itemRow=$(".t-tabscontent__container > .row",this);
this.init=function(){this.$tablist.TabListContent();
this.$tabscontent.TabsContent({edit:this.isEdit}).events();
this.$tablist.events();
this.$tabscontent.load();
TabsContent.tabs.push(this.$tabscontent);
TabList.tabs.push(this.$tablist);
return this
};
return this
};
var TabNavigation={config:{tabscontent:{callback:function(){this.$contents.each(function(){$(this).closest(".row").removeClass("active")
});
var b=arguments[2];
b.closest(".row").addClass("active");
b.parent().hasClass("c-tabitem")?b.closest(".row").addClass("active"):false
}},tablist:{dropdownlist:false,barre:true,more:true,barreposition:"top",underline:true,underlineposition:"top",invertcolor:false,responsive:{textposition:["left","right","right","right"]}}},init:function(){$(".c-tabnavigationcontainer").each(function(){var b=$(this).TabNavigationContainer();
if(b.$tablist.length==0){b.itemRow.addClass("active")
}b.init()
})
}};
$(function(){$("input[type=file]").each(function(){var c=$(this);
var e=c.closest(".c-fileupload");
var d=e.find(".c-fileupload__files");
c.closest("form").on("change",function(){var h=c[0].files;
d.empty();
for(var g=0;
g<h.length;
g++){var f=$('<p class="c-fileupload__info"></p>');
d.append(f);
f.append("<span> "+h[g].name+" ("+b(h[g].size,2)+")</span")
}});
c.closest("form").on("reset",function(){d.empty()
})
});
function b(d,c){if(d==0){return"0 Bytes"
}var f=1024,e=c||2,h=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],g=Math.floor(Math.log(d)/Math.log(f));
return parseFloat((d/Math.pow(f,g)).toFixed(e))+" "+h[g]
}});
$(".c-resetbutton button").on("click",function(){$(".c-form-select").val(null).trigger("change");
var c=$(".c-fileupload--filename");
var b=c.data("nofile");
c.text(b)
});
$(function(){DocumentManager.init();
Animate.init();
Picture.init();
S7Video.init();
TabList.init();
Media.init();
SliderSlick.init();
TabsContent.init();
LimitedPlaceholder.init();
DropDownList.init();
Forms.init();
Navigation.init();
TreeView.init();
Header.init();
NavMenu.init();
SubNavigation.init();
FooterNavigation.init();
Search.init();
SearchResultsForm.init();
MediaList.init();
QuickLinkTeaser.init();
Lightbox.init();
SearchResult.init();
StockPrice.init();
TextImage.init();
BackToTop.init();
SearchFormNewsroom.init();
Cookies.init();
Table.init();
ComponentSlider.init();
Stage.init();
TextImageSlider.init();
KeyProductFigures.init();
Accordeon.init();
FullWidthMediaSlider.init();
SmallMediaGallery.init();
NavList.init();
ContentNavigation.init();
TabNavigation.init();
TextImageText.init();
AnchorNavigation.init();
TopSearches.init();
CrisisMode.init();
Analytics.init()
});