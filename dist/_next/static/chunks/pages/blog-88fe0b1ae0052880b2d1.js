_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/yi9":function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r("FdF9"),i=r("Ksnn"),a=n.default.createElement,l=(r("Ksnn").default,function(e){var t=e.title,r=e.description,l=e.id,o=e.image;return a(n.default.Fragment,null,a(i.default,{children:r,image:o,link:"/blog/".concat(l),title:t}))}),o=r("9ixD"),s=n.default.createElement,c=!0;function u(e){var t=e.articles,r=Object(n.useState)(""),i=r[0],a=r[1],c=t.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())})),u="Learn about the latest programming, internet, and software news on my blog.";return s(n.default.Fragment,null,s(o.d,{title:"Blog",description:u,openGraph:{title:"Blog",description:u}}),s(o.b,{url:"https://eulerthedestroyer.github.io/blog",title:"euler's blog",images:["https://eulerthedestroyer.github.io/images/logo.png"],datePublished:(new Date).toISOString(),authorName:"Leonhard Euler",description:u}),s("h1",null,"this is my blog"),s("p",null,"click on articles to read"),s("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return a(e.target.value)},placeholder:"Search articles"}),c.map((function(e){return s(l,e)})))}},JUhy:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r("/yi9")}])},Ksnn:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),a=r("FdF9"),l=r("YNhk"),o=a.default.createElement;t.default=function(e){var t=e.title,r=e.children,n=e.link,s=e.image;return o(a.default.Fragment,null,o(l.a,{href:n},o("a",{className:"jsx-2603161921 preview"},o("img",{src:s,className:"jsx-2603161921 image"}),o("div",{className:"jsx-2603161921 text"},o("div",{className:"jsx-2603161921 title"},t),o("div",{className:"jsx-2603161921 body"},r)))),o(i.a,{id:"2603161921"},[".preview.jsx-2603161921{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-text-decoration:none;text-decoration:none;padding:1.3vh;margin:1.3vh 3.1ch 0 3.1ch;-webkit-transition-duration:1s;transition-duration:1s;border-radius:1vh;border:1px solid var(--c5);}",".preview.jsx-2603161921:hover{border-color:var(--c1);-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);}",".image.jsx-2603161921{width:13vh;height:13vh;border-radius:0.5vh;object-fit:cover;margin-right:1.5ch;}",".text.jsx-2603161921{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".title.jsx-2603161921{font-size:1.8ch;-webkit-letter-spacing:0.03ch;-moz-letter-spacing:0.03ch;-ms-letter-spacing:0.03ch;letter-spacing:0.03ch;font-weight:600;color:var(--c1);margin-bottom:1.3vh;}"]))}},YNhk:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=r("FdF9"),l=r("YFqc"),o=r.n(l),s=a.default.createElement;t.a=function(e){var t=e.href,r=e.mref,a=i(e,["href","mref"]);return s(o.a,n(r?{href:r}:{href:"".concat("").concat(t)},a))}}},[["JUhy",0,1,2,3]]]);