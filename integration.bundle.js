!function(e){function t(t){for(var o,c,l=t[0],a=t[1],u=t[2],s=0,d=[];s<l.length;s++)c=l[s],r[c]&&d.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(f&&f(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={1:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://savacan.github.io/demo-integration-layer/";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=a;i.push([339,0]),n()}({339:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(1),i=n(142),c=n(59),l=n(60),a=Object(l.a)("div",{target:"eo4z9lu0",label:"Wrapper"})({name:"k008qs",styles:"display:flex;"}),u=Object(l.a)("div",{target:"eo4z9lu1",label:"SidebarArea"})({name:"677bwy",styles:"height:100vh;background:gray;"}),f=Object(l.a)("div",{target:"eo4z9lu2",label:"MainArea"})({name:"1xanpi5",styles:"flex-grow:1;display:flex;flex-direction:column;align-items:center;"}),s=Object(l.a)("div",{target:"eo4z9lu3",label:"FooterArea"})({name:"pj0jr4",styles:"margin-top:auto;width:100%;background:gray;"}),d=function(e){var t=e.children;return Object(o.c)(a,null,Object(o.c)(u,null,Object(o.c)("div",null,"sidebar area upd: ",Date.now()),Object(o.c)(c.b,{to:"/"}," to top "),Object(o.c)(c.b,{to:"/next"}," to next ")),Object(o.c)(f,null,Object(o.c)("div",null," ",t," "),Object(o.c)(s,null,"footer area")))},b=n(16),p=n(74),y=n.n(p),h=[{key:"sidebar",url:"http://localhost:8002"},{key:"integration",url:"http://localhost:8001"}],m=[{key:"sidebar",url:"https://savacan.github.io/demo-sidebar"},{key:"integration",url:"https://savacan.github.io/demo-integration-layer"}],g=function(e){var t=window.location.hostname;console.log(t);var n=function(e){return"localhost"===e?h:"savacan.github.io"===e?m:null}(t);if(null===n)return null;var o=n.find(function(t){return t.key===e});return o?o.url:null},v=function(e){return"".concat(e,"_vendor.bundle.js")},w=function(e){return"".concat(e,".bundle.js")},O={load:function(e){var t=e.segment,n=e.componentId,o=e.toId();return new Promise(function(e,r){var i=g(t);if(y.a.isDefined(o)&&e(),i)y()(["".concat(i,"/").concat(v(t)),"".concat(i,"/").concat(w(n))],o,{async:!1,success:function(){e()},error:function(e){r(e)}});else{var c=new Error("segments ".concat(t," is undefined"));r(c)}})},isDefined:function(e){return y.a.isDefined(e)}};function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,_(t).call(this,e))).refEls=r.createRef(),n.componentController={mount:function(){},unmount:function(){}},n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){var e=this,t=this.props.microId;window.registry.whenDefined(t.toId()).then(function(t){console.log("when defined ref is :",e.refEls.current),e.refEls.current&&(e.componentController=t(e.refEls.current),e.componentController.mount())}).catch(function(e){return console.log(e)}).finally(function(){return console.log("component load finaly")}),O.load(t)}},{key:"componentWillUnmount",value:function(){this.componentController.unmount()}},{key:"render",value:function(){return Object(o.c)("div",{ref:this.refEls})}}])&&k(n.prototype,i),c&&k(n,c),t}(),E=function(e,t){return{segment:e,componentId:t,toId:function(){return"".concat(e,"-").concat(t)}}};function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function q(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=q(this,I(t).call(this,e));var o=e.history;return window.context=window.context?window.context:{history:o},n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return Object(o.c)(r.Fragment,null,Object(o.c)(b.c,null,Object(o.c)(b.a,{path:"/",exact:!0,render:function(e){return Object(o.c)("div",null,"exact route")}}),Object(o.c)(b.a,{path:"/next",render:function(e){return Object(o.c)("div",null,Object(o.c)("div",null,"sidebar route"),Object(o.c)(S,{microId:E("sidebar","common"),type:"micro"}))}})))}}])&&C(n.prototype,i),c&&C(n,c),t}(),T=Object(b.f)(z),A={name:"1rhavrd-resetCss",styles:"html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}body{line-height:1;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}nav ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;text-decoration:none;color:inherit;}ins{background-color:#ff9;color:#000;text-decoration:none;}mark{background-color:#ff9;color:#000;font-style:italic;font-weight:bold;}del{text-decoration:line-through;}abbr[title],dfn[title]{border-bottom:1px dotted;cursor:help;}table{border-collapse:collapse;border-spacing:0;}hr{display:block;height:1px;border:0;border-top:1px solid #cccccc;margin:1em 0;padding:0;}input,select{vertical-align:middle;}*,*::before,*::after{box-sizing:border-box;}label:resetCss;"};function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var F=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.willDefine=new Map,this.defined=new Map}var t,n,o;return t=e,(n=[{key:"define",value:function(e,t){console.log("registry.define is called by id: ".concat(e)),this.defined.set(e,t);var n=this.willDefine.get(e);n&&(n.resolver(t),this.willDefine.delete(e))}},{key:"isDefined",value:function(e){return this.defined.has(e)}},{key:"get",value:function(e){return this.defined.get(e)}},{key:"whenDefined",value:function(e){var t=this.get(e);if(t)return Promise.resolve(t);var n=this.willDefine.get(e);if(n)return n.promise;var o=function(e){return console.log("miss setting resolver")},r=new Promise(function(e,t){o=function(t){return e(t)}});return this.willDefine.set(e,{promise:r,resolver:o}),r}}])&&R(t.prototype,n),o&&R(t,o),e}();(function(){var e=new F;window.registry=e,console.log("registry is init")})();i.render(Object(o.c)(function(){return Object(o.c)(c.a,{basename:"/demo-integration-layer"},Object(o.c)(o.a,{styles:A}),Object(o.c)(d,null,Object(o.c)(T,null)))},null),document.getElementById("root"))}});