(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("FdF9"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=a.cssRules();return a.flush(),e},t.default=void 0;var r,o=n("FdF9");var a=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),i=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return a.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){a.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=i},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=p,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("FdF9")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),l=n("FYa8"),s=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(c,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var l=0,s=d.length;l<s;l++){var u=d[l];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var p=o.props[u],c=r[u]||new Set;c.has(p)?a=!1:(c.add(p),r[u]=c)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(l.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}f.rewind=function(){};var m=f;t.default=m},"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],p=!1,c=-1;function d(){p&&s&&(p=!1,s.length?u=s.concat(u):c=-1,u.length&&h())}function h(){if(!p){var e=l(d);p=!0;for(var t=u.length;t;){for(s=u,u=[];++c<t;)s&&s[c].run();c=-1,t=u.length}s=null,p=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new f(e,t)),1!==u.length||p||l(h)},f.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9ixD":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return p}));var r=n("8Kt/"),o=n.n(r),a=n("FdF9");function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},s=function(e){var t,n=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var r="";e.title?(r=e.title,l.templateTitle&&(r=l.templateTitle.replace(/%s/g,(function(){return r})))):e.defaultTitle&&(r=e.defaultTitle),r&&n.push(a.default.createElement("title",{key:"title"},r));var o=e.noindex||l.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||l.nofollow||e.dangerouslySetAllPagesToNoFollow,s="";if(e.robotsProps){var u=e.robotsProps,p=u.nosnippet,c=u.maxSnippet,d=u.maxImagePreview,h=u.maxVideoPreview,f=u.noarchive,m=u.noimageindex,g=u.notranslate,y=u.unavailableAfter;s=(p?",nosnippet":"")+(c?",max-snippet:"+c:"")+(d?",max-image-preview:"+d:"")+(f?",noarchive":"")+(y?",unavailable_after:"+y:"")+(m?",noimageindex":"")+(h?",max-video-preview:"+h:"")+(g?",notranslate":"")}if(o||i?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),n.push(a.default.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(i?"nofollow":"follow")+s})),n.push(a.default.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(i?"nofollow":"follow")+s}))):(n.push(a.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+s})),n.push(a.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+s}))),e.description&&n.push(a.default.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&n.push(a.default.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){n.push(a.default.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&n.push(a.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&n.push(a.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&n.push(a.default.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&n.push(a.default.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&n.push(a.default.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();n.push(a.default.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&n.push(a.default.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&n.push(a.default.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&n.push(a.default.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&n.push(a.default.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&n.push(a.default.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&n.push(a.default.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&n.push(a.default.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&n.push(a.default.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&n.push(a.default.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&n.push(a.default.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&n.push(a.default.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&n.push(a.default.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&n.push(a.default.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&n.push(a.default.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&n.push(a.default.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&n.push(a.default.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||r})),(e.openGraph.description||e.description)&&n.push(a.default.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&n.push(a.default.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?n.push(a.default.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):l.defaultOpenGraphImageWidth&&n.push(a.default.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:l.defaultOpenGraphImageWidth.toString()})),e.height?n.push(a.default.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):l.defaultOpenGraphImageHeight&&n.push(a.default.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:l.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){n.push(a.default.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&n.push(a.default.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?n.push(a.default.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):l.defaultOpenGraphVideoWidth&&n.push(a.default.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:l.defaultOpenGraphVideoWidth.toString()})),e.height?n.push(a.default.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):l.defaultOpenGraphVideoHeight&&n.push(a.default.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:l.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&n.push(a.default.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&n.push(a.default.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&n.push(a.default.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,r,o;n.push(a.default.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(r=null!=(o=e.keyOverride)?o:e.name)?r:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;n.push(a.default.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),n},u=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,r=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,l=void 0!==i&&i,u=e.dangerouslySetAllPagesToNoFollow,p=void 0!==u&&u,c=e.description,d=e.canonical,h=e.facebook,f=e.openGraph,m=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,_=e.defaultOpenGraphVideoWidth,b=e.defaultOpenGraphVideoHeight,w=e.mobileAlternate,k=e.languageAlternates,S=e.additionalLinkTags;return a.default.createElement(o.a,null,s({title:t,titleTemplate:n,defaultTitle:r,dangerouslySetAllPagesToNoIndex:l,dangerouslySetAllPagesToNoFollow:p,description:c,canonical:d,facebook:h,openGraph:f,additionalMetaTags:m,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:_,defaultOpenGraphVideoHeight:b,mobileAlternate:w,languageAlternates:k,additionalLinkTags:S}))},t}(a.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.noindex,r=void 0!==n&&n,i=e.nofollow,l=e.robotsProps,u=e.description,p=e.canonical,c=e.openGraph,d=e.facebook,h=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return a.default.createElement(o.a,null,s({title:t,noindex:r,nofollow:i,robotsProps:l,description:u,canonical:p,facebook:d,openGraph:c,additionalMetaTags:f,twitter:h,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(a.Component),c=function(e){return{__html:e}},d=function(e){return Array.isArray(e)?"["+e.map((function(e){return'{"@type": "Person","name": "'+e+'"}'}))+"]":'{"@type": "Person","name": "'+e+'"}'},h=function(e){var t=e.keyOverride,n=e.url,r=e.title,i=e.images,l=void 0===i?[]:i,s=e.datePublished,u=e.dateModified,p=void 0===u?null:u,h=e.authorName,f=e.description,m=e.publisherName,g=e.publisherLogo,y='{\n    "@context": "https://schema.org",\n    "@type": "Article",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+n+'"\n    },\n    "headline": "'+r+'",\n    "image": [\n      '+l.map((function(e){return'"'+e+'"'}))+'\n     ],\n    "datePublished": "'+s+'",\n    "dateModified": "'+(p||s)+'",\n    "author": '+d(h)+',\n    "publisher": {\n      "@type": "Organization",\n      "name": "'+m+'",\n      "logo": {\n        "@type": "ImageObject",\n        "url": "'+g+'"\n      }\n    },\n    "description": "'+f+'"\n  }';return a.default.createElement(o.a,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:c(y),key:"jsonld-article"+(t?"-"+t:"")}))},f=function(e){var t=e.keyOverride,n=e.url,r=e.title,i=e.images,l=void 0===i?[]:i,s=e.datePublished,u=e.dateModified,p=void 0===u?null:u,h=e.authorName,f=e.description,m='{\n    "@context": "https://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+n+'"\n    },\n    "headline": "'+r+'",\n    "image": [\n      '+l.map((function(e){return'"'+e+'"'}))+'\n     ],\n    "datePublished": "'+s+'",\n    "dateModified": "'+(p||s)+'",\n    "author": '+d(h)+',\n    "description": "'+f+'"\n  }';return a.default.createElement(o.a,null,a.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:c(m),key:"jsonld-blog"+(t?"-"+t:"")}))}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=a(n("9kyW")),o=a(n("bVZc"));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,a=t.optimizeForSpeed,i=void 0!==a&&a,l=t.isBrowser,s=void 0===l?"undefined"!==typeof window:l;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"===typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=s,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var a=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=a,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),a=t+o;return e[a]||(e[a]="jsx-"+(0,r.default)(t+"-"+o)),e[a]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var a=this.computeId(o,r);return{styleId:a,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(a,e)})):[this.computeSelector(a,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=i},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("FdF9"),c=function(e){i(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=c},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,a=void 0===n?"stylesheet":n,l=t.optimizeForSpeed,s=void 0===l?r:l,u=t.isBrowser,p=void 0===u?"undefined"!==typeof window:u;i(o(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",i("boolean"===typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._isBrowser=p,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var c=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=c?c.getAttribute("content"):null}var t,a,l,s=e.prototype;return s.setOptimizeForSpeed=function(e){i("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),i(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},s.isOptimizeForSpeed=function(){return this._optimizeForSpeed},s.inject=function(){var e=this;if(i(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},s.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},s.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},s.insertRule=function(e,t){if(i(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(l){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++},s.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(a){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];i(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},s.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];i(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},s.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},s.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},s.makeStyleTag=function(e,t,n){t&&i(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return n?a.insertBefore(r,n):a.appendChild(r),r},t=e,(a=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,a),l&&n(t,l),e}();function i(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=a}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("FdF9")),l=n("elyg"),s=n("nOHt"),u=new Map,p=window.IntersectionObserver,c={};var d=function(e,t){var n=a||(p?a=new p((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function h(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),c[t+"%"+n]=!0)}var f=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],u=o[1],f=(0,s.useRouter)(),m=f&&f.pathname||"/",g=i.default.useMemo((function(){var t=(0,l.resolveHref)(m,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,l.resolveHref)(m,e.as):a||o}}),[m,e.href,e.as]),y=g.href,v=g.as;i.default.useEffect((function(){if(t&&p&&a&&a.tagName&&(0,l.isLocalURL)(y)&&!c[y+"%"+v])return d(a,(function(){h(f,y,v)}))}),[t,a,y,v,f]);var _=e.children,b=e.replace,w=e.shallow,k=e.scroll,S=e.locale;"string"===typeof _&&(_=i.default.createElement("a",null,_));var G=i.Children.only(_),E={ref:function(e){e&&u(e),G&&"object"===typeof G&&G.ref&&("function"===typeof G.ref?G.ref(e):"object"===typeof G.ref&&(G.ref.current=e))},onClick:function(e){G.props&&"function"===typeof G.props.onClick&&G.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,y,v,b,w,k,S)}};return t&&(E.onMouseEnter=function(e){(0,l.isLocalURL)(y)&&(G.props&&"function"===typeof G.props.onMouseEnter&&G.props.onMouseEnter(e),h(f,y,v,{priority:!0}))}),(e.passHref||"a"===G.type&&!("href"in G.props))&&(E.href=(0,l.addBasePath)((0,l.addLocale)(v,"undefined"!==typeof S?S:f&&f.locale,f&&f.defaultLocale))),i.default.cloneElement(G,E)};t.default=f},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("FdF9"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}}]);