(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{3:function(e,t,n){"use strict";n.d(t,"e",function(){return r}),n.d(t,"g",function(){return o}),n.d(t,"h",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"i",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"f",function(){return f}),n.d(t,"d",function(){return m});var a=n(1),r=(n(0),Object(a.a)("main",{target:"ep4079u0"})({name:"12vtgqa",styles:"display:flex;flex-direction:column;color:#666;"})),o=Object(a.a)("section",{target:"ep4079u1"})({name:"uhl5wg",styles:"background:#f9f9f9;min-height:100vh;display:flex;flex-direction:row;& p + h2{margin-top:40px;}"}),i=Object(a.a)("div",{target:"ep4079u2"})({name:"t7jh9h",styles:"flex:.9;background:#eee;"}),l=Object(a.a)("div",{target:"ep4079u3"})({name:"16i5n1i",styles:"flex:4;width:1px;"}),c=Object(a.a)("article",{target:"ep4079u4"})({name:"1bau5t4",styles:"position:relative;padding:3.5em 0 3.5em 3.5em;"}),s=Object(a.a)("h1",{target:"ep4079u5"})({name:"1vvbsb",styles:"color:rgba(0,0,0,.8);font-size:4em;font-weight:100;margin-top:-15px;margin-bottom:130px;padding-bottom:15px;border-bottom:3px solid #ff4500;"}),u=Object(a.a)("h2",{target:"ep4079u6"})({name:"1r2pbjn",styles:"color:rgba(0,0,0,.8);font-size:.8em;font-weight:100;color:#666;text-transform:uppercase;"}),f=Object(a.a)("p",{target:"ep4079u7"})({name:"1nhypo",styles:"font-size:1.25em;font-weight:300;color:#444;margin:0;letter-spacing:-0.05px;line-height:1.5em;max-width:800px;&:not(:first-of-type):not(:last-of-type){margin:1em 0;}& strong,& b{font-weight:600;}&  code{font-size:.95em;display:inline-block;padding:0 5px;background-color:#eee;vertical-align:bottom;}"}),m=Object(a.a)("pre",{target:"ep4079u9"})({name:"pz2czw",styles:"margin:1.5em 0;font-size:1.2em;padding:.5em 1.2em;background:#f2f2f2;& .hljs{background:#f2f2f2;}"})},304:function(e,t,n){__NEXT_REGISTER_PAGE("/configuration",function(){return e.exports=n(426),{page:e.exports.default}})},426:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),o=n.n(r),i=n(47),l=n.n(i),c=n(9),s=n(28),u=n.n(s),f=n(20),m=n(48),p=n(5),d=n.n(p);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b=function(e){var t=e.configuration,n=e.post;return o.a.createElement(y,null,t.map(function(e,t){var a=e.data,r=n.data.url===a.url;return o.a.createElement(d.a,g({key:"config-nav-".concat(t)},e,{passHref:!0}),o.a.createElement(h,{className:r?"active":""},a.title))}))},y=Object(a.a)("nav",{target:"ee23n1n0"})({name:"rojo60",styles:"display:flex;flex-direction:column;align-content:center;align-items:stretch;padding:.5em 0;"}),h=Object(a.a)("a",{target:"ee23n1n1"})({name:"1mwamlq",styles:"padding:1em;text-decoration:none;color:#212121;border-left:.5em solid transparent;flex:1;&:hover{color:#181818;background-color:#f4f4f4;border-left:.5em solid #ccc;}&.active,&.active:hover{color:#212121;background-color:#fafafa;border-left:.5em solid #ff4500;}"}),v=n(3),j=n(51);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,O(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.configuration,n=e.post,a=t.findIndex(function(e){return e.data.title==n.data.title}),r=t[a-1],i=t[a+1];return o.a.createElement(N,null,o.a.createElement(_,null,r&&o.a.createElement(d.a,r,o.a.createElement("a",{className:"prev"},o.a.createElement("div",{className:"nav-title"},"Previous"),o.a.createElement("div",{className:"article-title"}," ",r.data.title)))),o.a.createElement(P,null,i&&o.a.createElement(d.a,i,o.a.createElement("a",{className:"next"},o.a.createElement("div",{className:"nav-title"},"Next"),o.a.createElement("div",{className:"article-title"}," ",i.data.title)))))}}])&&w(n.prototype,a),i&&w(n,i),t}(),N=Object(a.a)("div",{target:"ecjwf5j0"})({name:"17t37mn",styles:"display:flex;flex-direction:row;justify-content:space-between;align-items:stretch;margin-left:-3.75em;margin-top:3em;.nav-title{font-size:.7em;text-transform:uppercase;letter-spacing:.2em;}.article-title{font-size:1.5em;font-weight:300;}& a{text-decoration:none;color:#ff4500;font-size:1.1em;}"}),_=Object(a.a)("div",{target:"ecjwf5j1"})({name:"13dkiqs",styles:"padding-left:1.8em;"}),P=Object(a.a)("div",{target:"ecjwf5j2"})({name:"egrqmj",styles:"padding-right:1.8em;text-align:right;"}),S=n(50),C=n(49),q=function(e){var t=e.src,n=e.alt;return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{src:t,alt:n}),o.a.createElement(G,null,n))},T=Object(a.a)("img",{target:"eafdtlm0"})({name:"1bguw9t",styles:"display:inline-block;vertical-align:middle;max-width:100%;height:auto;box-shadow:0 0 4px rgba(0,0,0,.16);"}),G=Object(a.a)("span",{target:"eafdtlm1"})({name:"1a2ag5c",styles:"display:inline-block;width:100%;font-size:.65em;font-style:italic;text-align:center;"});function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var F=Object(f.withPostsFilterBy)(Object(f.inCategory)("configuration",{includeSubCategories:!0})),H=u()(F(function(e){var t=e.post,n=e.posts,a=t||n[0];return o.a.createElement(v.e,null,o.a.createElement(l.a,null,o.a.createElement("title",null,"NextEPC | Configuration | ",a.data.title),o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css"})),o.a.createElement(m.a,{showHome:!0,title:"configuration",styles:{width:"100vw"}}),o.a.createElement(v.g,null,o.a.createElement(v.h,null,o.a.createElement(b,{configuration:n,post:a})),o.a.createElement(c.TransitionGroup,{className:"fade-transition-group",component:v.b},o.a.createElement(c.CSSTransition,{key:a.data.url,classNames:"fade-transition",timeout:500},o.a.createElement(v.a,null,o.a.createElement(v.c,null,a.data.category),o.a.createElement(v.i,null,a.data.title),o.a.createElement(s.Content,R({},a,{renderers:{h2:J,blockquote:I,code:j.a,p:v.f,pre:v.d,img:q}})),o.a.createElement(z,{configuration:n,post:a}))))),o.a.createElement(S.a,null))})),I=(t.default=Object(C.a)(H),Object(a.a)("blockquote",{target:"e1g1jzcz0"})({name:"bfalv0",styles:"margin:1em 0;padding:1.5em;padding-left:1.25em;border-left:5px solid;background:#e4e4e4;& > p{margin:0;}"})),J=Object(a.a)("h2",{target:"e1g1jzcz1"})({name:"4vt739",styles:"margin:1em 0;margin-left:-0.25em;color:rgba(0,0,0,.8);"})}},[[304,1,0]]]);