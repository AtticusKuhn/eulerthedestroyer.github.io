(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[2],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(r.AmpStateContext))};var n,o=(n=a("FdF9"))&&n.__esModule?n:{default:n},r=a("lwAK");function i(){var{ampFirst:e=!1,hybrid:t=!1,hasQuery:a=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e||t&&a}},"8Kt/":function(e,t,a){"use strict";a("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=n?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}a.default=e,t&&t.set(e,a);return a}(a("FdF9")),r=(n=a("Xuae"))&&n.__esModule?n:{default:n},i=a("lwAK"),p=a("FYa8"),l=a("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t),[])):e.concat(t)}var c=["name","httpEquiv","charSet","itemProp"];function s(e,t){return e.reduce((e,t)=>{var a=o.default.Children.toArray(t.props.children);return e.concat(a)},[]).reduce(h,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return o=>{var r=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?r=!1:t.add(o.type);break;case"meta":for(var p=0,l=c.length;p<l;p++){var d=c[p];if(o.props.hasOwnProperty(d))if("charSet"===d)a.has(d)?r=!1:a.add(d);else{var u=o.props[d],h=n[d]||new Set;h.has(u)?r=!1:(h.add(u),n[d]=h)}}}return r}}()).reverse().map((e,t)=>{var a=e.key||t;return o.default.cloneElement(e,{key:a})})}function f(e){var{children:t}=e,a=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(p.HeadManagerContext);return o.default.createElement(r.default,{reduceComponentsToState:s,headManager:n,inAmpMode:(0,l.isInAmpMode)(a)},t)}f.rewind=()=>{};var m=f;t.default=m},"9ixD":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return u}));var n=a("8Kt/"),o=a.n(n),r=a("FdF9");function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},l=function(e){var t,a=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var n="";e.title?(n=e.title,p.templateTitle&&(n=p.templateTitle.replace(/%s/g,(function(){return n})))):e.defaultTitle&&(n=e.defaultTitle),n&&a.push(r.default.createElement("title",{key:"title"},n));var o=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,i=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,l="";if(e.robotsProps){var d=e.robotsProps,u=d.nosnippet,h=d.maxSnippet,c=d.maxImagePreview,s=d.maxVideoPreview,f=d.noarchive,m=d.noimageindex,g=d.notranslate,y=d.unavailableAfter;l=(u?",nosnippet":"")+(h?",max-snippet:"+h:"")+(c?",max-image-preview:"+c:"")+(f?",noarchive":"")+(y?",unavailable_after:"+y:"")+(m?",noimageindex":"")+(s?",max-video-preview:"+s:"")+(g?",notranslate":"")}if(o||i?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),a.push(r.default.createElement("meta",{key:"robots",name:"robots",content:(o?"noindex":"index")+","+(i?"nofollow":"follow")+l})),a.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:(o?"noindex":"index")+","+(i?"nofollow":"follow")+l}))):(a.push(r.default.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+l})),a.push(r.default.createElement("meta",{key:"googlebot",name:"googlebot",content:"index,follow"+l}))),e.description&&a.push(r.default.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&a.push(r.default.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){a.push(r.default.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&a.push(r.default.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&a.push(r.default.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&a.push(r.default.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&a.push(r.default.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),e.openGraph){if((e.openGraph.url||e.canonical)&&a.push(r.default.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var v=e.openGraph.type.toLowerCase();a.push(r.default.createElement("meta",{key:"og:type",property:"og:type",content:v})),"profile"===v&&e.openGraph.profile?(e.openGraph.profile.firstName&&a.push(r.default.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&a.push(r.default.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&a.push(r.default.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&a.push(r.default.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===v&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&a.push(r.default.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&a.push(r.default.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===v&&e.openGraph.article?(e.openGraph.article.publishedTime&&a.push(r.default.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&a.push(r.default.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&a.push(r.default.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&a.push(r.default.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==v&&"video.episode"!==v&&"video.tv_show"!==v&&"video.other"!==v||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&a.push(r.default.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&a.push(r.default.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&a.push(r.default.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&a.push(r.default.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&a.push(r.default.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}(e.openGraph.title||e.title)&&a.push(r.default.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph.title||n})),(e.openGraph.description||e.description)&&a.push(r.default.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph.description||e.description})),e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&e.openGraph.images.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"og:image:0"+t,property:"og:image",content:e.url})),e.alt&&a.push(r.default.createElement("meta",{key:"og:image:alt0"+t,property:"og:image:alt",content:e.alt})),e.width?a.push(r.default.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:e.width.toString()})):p.defaultOpenGraphImageWidth&&a.push(r.default.createElement("meta",{key:"og:image:width0"+t,property:"og:image:width",content:p.defaultOpenGraphImageWidth.toString()})),e.height?a.push(r.default.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:e.height.toString()})):p.defaultOpenGraphImageHeight&&a.push(r.default.createElement("meta",{key:"og:image:height"+t,property:"og:image:height",content:p.defaultOpenGraphImageHeight.toString()}))})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&e.openGraph.videos.forEach((function(e,t){a.push(r.default.createElement("meta",{key:"og:video:0"+t,property:"og:video",content:e.url})),e.alt&&a.push(r.default.createElement("meta",{key:"og:video:alt0"+t,property:"og:video:alt",content:e.alt})),e.width?a.push(r.default.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:e.width.toString()})):p.defaultOpenGraphVideoWidth&&a.push(r.default.createElement("meta",{key:"og:video:width0"+t,property:"og:video:width",content:p.defaultOpenGraphVideoWidth.toString()})),e.height?a.push(r.default.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:e.height.toString()})):p.defaultOpenGraphVideoHeight&&a.push(r.default.createElement("meta",{key:"og:video:height"+t,property:"og:video:height",content:p.defaultOpenGraphVideoHeight.toString()}))})),e.openGraph.locale&&a.push(r.default.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&a.push(r.default.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&a.push(r.default.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,o;a.push(r.default.createElement("meta",Object.assign({key:"meta:"+(null!=(t=null!=(n=null!=(o=e.keyOverride)?o:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(t=e.additionalLinkTags)&&t.length&&e.additionalLinkTags.forEach((function(e){var t;a.push(r.default.createElement("link",Object.assign({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),a},d=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.titleTemplate,n=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,p=void 0!==i&&i,d=e.dangerouslySetAllPagesToNoFollow,u=void 0!==d&&d,h=e.description,c=e.canonical,s=e.facebook,f=e.openGraph,m=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,G=e.defaultOpenGraphVideoHeight,b=e.mobileAlternate,E=e.languageAlternates,w=e.additionalLinkTags;return r.default.createElement(o.a,null,l({title:t,titleTemplate:a,defaultTitle:n,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:u,description:h,canonical:c,facebook:s,openGraph:f,additionalMetaTags:m,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:G,mobileAlternate:b,languageAlternates:E,additionalLinkTags:w}))},t}(r.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.noindex,n=void 0!==a&&a,i=e.nofollow,p=e.robotsProps,d=e.description,u=e.canonical,h=e.openGraph,c=e.facebook,s=e.twitter,f=e.additionalMetaTags,m=e.titleTemplate,g=e.mobileAlternate,y=e.languageAlternates,v=e.additionalLinkTags;return r.default.createElement(o.a,null,l({title:t,noindex:n,nofollow:i,robotsProps:p,description:d,canonical:u,facebook:c,openGraph:h,additionalMetaTags:f,twitter:s,titleTemplate:m,mobileAlternate:g,languageAlternates:y,additionalLinkTags:v}))},t}(r.Component),h=function(e){return{__html:e}},c=function(e){return Array.isArray(e)?"["+e.map((function(e){return'{"@type": "Person","name": "'+e+'"}'}))+"]":'{"@type": "Person","name": "'+e+'"}'},s=function(e){var t=e.keyOverride,a=e.url,n=e.title,i=e.images,p=void 0===i?[]:i,l=e.datePublished,d=e.dateModified,u=void 0===d?null:d,s=e.authorName,f=e.description,m='{\n    "@context": "https://schema.org",\n    "@type": "Blog",\n    "mainEntityOfPage": {\n      "@type": "WebPage",\n      "@id": "'+a+'"\n    },\n    "headline": "'+n+'",\n    "image": [\n      '+p.map((function(e){return'"'+e+'"'}))+'\n     ],\n    "datePublished": "'+l+'",\n    "dateModified": "'+(u||l)+'",\n    "author": '+c(s)+',\n    "description": "'+f+'"\n  }';return r.default.createElement(o.a,null,r.default.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:h(m),key:"jsonld-blog"+(t?"-"+t:"")}))}},FYa8:function(e,t,a){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=a("FdF9"))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},Xuae:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=a("FdF9");class o extends n.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=a("FdF9"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o}}]);