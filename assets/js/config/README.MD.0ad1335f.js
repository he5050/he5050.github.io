(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{302:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return d}));var n,c=t(104),s=(t(296),t(0),t(105)),o=["components"];function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,l,m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},i=m("MdAlert"),N={};function d(e){var a=e.components,t=r(e,o);return Object(s.b)("wrapper",p({},N,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{className:"__internal",id:"config-reference"},"Config Reference",Object(s.b)("a",{parentName:"h1",href:"#config-reference","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"Most of the text is copied in ",Object(s.b)("a",{parentName:"p",href:"https://rcpress.vuejs.org/config/",target:"_blank"},"rcpress"),", with minor modifications")),Object(s.b)(i,{message:"Tip",type:"info",mdxType:"MdAlert"},Object(s.b)("p",{parentName:"MdAlert"},"Don't worry about the default settings being overwritten, rcpress will use the ",Object(s.b)("a",{parentName:"p",href:"https://github.com/YvesCoding/rcpress/blob/master/packages/%40rcpress/util/src/deepMerge.js",target:"_blank"},"deepMerge function")," to ",Object(s.b)("strong",{parentName:"p"},"deep merge")," the new settings and default configuration.")),Object(s.b)("h2",{className:"__internal",id:"base"},"base",Object(s.b)("a",{parentName:"h2",href:"#base","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"string")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"/"))),Object(s.b)("p",null,"The base URL to which the site will be deployed. You will need to set this if you plan to deploy your site under a sub path, for example GitHub pages. If you plan to deploy your site to ",Object(s.b)("inlineCode",{parentName:"p"},"https://foo.github.io/bar/"),", then ",Object(s.b)("inlineCode",{parentName:"p"},"base")," should be set to ",Object(s.b)("inlineCode",{parentName:"p"},'"/bar/"'),". It should always start and end with a forward slash (/)."),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"base")," is automatically prepended to all the URLs that start with ",Object(s.b)("inlineCode",{parentName:"p"},"/")," in other options, so you only need to specify it once."),Object(s.b)("h2",{className:"__internal",id:"title"},"title",Object(s.b)("a",{parentName:"h2",href:"#title","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"string")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"Current working directory name"))),Object(s.b)("p",null,"Title for the site. This will be the prefix for all page titles, and displayed in the navbar in the default theme."),Object(s.b)("h2",{className:"__internal",id:"description"},"description",Object(s.b)("a",{parentName:"h2",href:"#description","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"string")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"undefined"))),Object(s.b)("p",null,"Description for the site. This will be rendered as a ",Object(s.b)("inlineCode",{parentName:"p"},"<meta>")," tag in the page HTML."),Object(s.b)("h2",{className:"__internal",id:"head"},"head",Object(s.b)("a",{parentName:"h2",href:"#head","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"Array")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"[]"))),Object(s.b)("p",null,"Extra tags to be injected to the page HTML ",Object(s.b)("inlineCode",{parentName:"p"},"<head>"),". Each tag can be specified in the form of ",Object(s.b)("inlineCode",{parentName:"p"},"[tagName, { attrName: attrValue }, innerHTML?]"),". For example, to add a custom favicon:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"module",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  head",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(s.b)("span",{parentName:"code",className:"token string"},"'123'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," rel",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'icon'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," href",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/logo.png'")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{className:"__internal",id:"locales"},"locales",Object(s.b)("a",{parentName:"h2",href:"#locales","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"{ [path: string]: Object }")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"undefined"))),Object(s.b)("p",null,"Specify locales for i18n support. For more details, see the guide on ",Object(s.b)("a",{parentName:"p",href:"../guide/i18n"},"Internationalization"),"."),Object(s.b)("h2",{className:"__internal",id:"lessscsssass"},"less/scss/sass",Object(s.b)("a",{parentName:"h2",href:"#lessscsssass","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"Set options for the corresponding loader, for example"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token comment"},"// Modify ant design theme color to red"),"\nmodule",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  title",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'xxx'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  less",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    modifyVars",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// Assign to less-loader"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token string"},"'primary-color'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'red'"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{className:"__internal",id:"themeconfig"},"themeConfig",Object(s.b)("a",{parentName:"h2",href:"#themeconfig","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"Object")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"{}"))),Object(s.b)("p",null,"Provide config options to the used theme. The options will vary depending on the theme you are using."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Also see:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"../default-theme-config"},"Default Theme Configuration"),".")),Object(s.b)("h2",{className:"__internal",id:"markdown"},"markdown",Object(s.b)("a",{parentName:"h2",href:"#markdown","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("h3",{className:"__internal",id:"alert"},"alert",Object(s.b)("a",{parentName:"h3",href:"#alert","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"The Alert will eventually be rendered into the ",Object(s.b)("a",{parentName:"p",href:"https://ant.design/components/alert-cn/",target:"_blank"},"Alert")," component of ",Object(s.b)("strong",{parentName:"p"},"Ant Design"),". You can set different aliases and default titles by configuring ",Object(s.b)("inlineCode",{parentName:"p"},"alert"),". The default configuration items are as follows:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," config ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  markdown",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    alert",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      info",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'tip'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Tip'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'tip-zh'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'提示'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      warning",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'warning'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Warning'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'warning-zh'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'警告'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      error",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'error'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Caveat'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'error-zh'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'严重警告'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"among them:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"info: corresponding to ",Object(s.b)("inlineCode",{parentName:"li"},'type="info"')," alert component"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"warning: corresponds to ",Object(s.b)("inlineCode",{parentName:"li"},'type="warning"')," alert component"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"error: corresponding to ",Object(s.b)("inlineCode",{parentName:"li"},'type="error"')," alert component")),Object(s.b)("p",null,"You can set multiple aliases and default titles for each type, such as:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," config ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  markdown",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    alert",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      info",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n        alias",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'tip-alias'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        defaultTitle",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Tip Alias'"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"See also:")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"../guide/markdown/"},"Markdown Extensions"))),Object(s.b)("h3",{className:"__internal",id:"serviceworker"},"serviceWorker",Object(s.b)("a",{parentName:"h3",href:"#serviceworker","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"Type: ",Object(s.b)("inlineCode",{parentName:"li"},"boolean")),Object(s.b)("li",{parentName:"ul",className:"__internal"},"Default: ",Object(s.b)("inlineCode",{parentName:"li"},"false"))),Object(s.b)("p",null,"If set to ",Object(s.b)("inlineCode",{parentName:"p"},"true"),", VuePress will automatically generate and register a service worker that caches the content for offline use (only enabled in production)."),Object(s.b)("p",null,"If developing a custom theme, the ",Object(s.b)("inlineCode",{parentName:"p"},"Layout.js")," component will also be emitting the following events:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"sw-ready")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"sw-cached")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"sw-updated")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"sw-offline")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"sw-error"))),Object(s.b)(i,{message:" PWA NOTES",type:"info",mdxType:"MdAlert"},Object(s.b)("p",{parentName:"MdAlert"},"The ",Object(s.b)("inlineCode",{parentName:"p"},"serviceWorker")," option only handles the service worker. To make your site fully PWA-compliant, you will need to provide the Web App Manifest and icons in ",Object(s.b)("inlineCode",{parentName:"p"},".rcpress/public"),". For more details, see ",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank"},"MDN docs about the Web App Manifest"),"."),Object(s.b)("p",{parentName:"MdAlert"},"Also, only enable this if you are able to deploy your site with SSL, since service worker can only be registered under HTTPs URLs.")),Object(s.b)("h2",{className:"__internal",id:"sw-update-popup"},"SW-Update Popup",Object(s.b)("a",{parentName:"h2",href:"#sw-update-popup","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"module",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  themeConfig",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    serviceWorker",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      updatePopup",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        message",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'New content is available.'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        buttonText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Refresh'"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  serviceWorker",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token boolean"},"true"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"For ",Object(s.b)("a",{parentName:"p",href:"../guide/i18n"},"i18n")," user:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"module",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  themeConfig",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      serviceWorker",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        updatePopup",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          message",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'New content is available.'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          buttonText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Refresh'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      serviceWorker",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        updatePopup",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          message",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'发现新内容可用'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          buttonText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'刷新'"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  serviceWorker",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token boolean"},"true"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))))}d.isMDXComponent=!0,d=Object(c.hot)(e)(d),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(m,"makeShortcode","E:\\h-project\\my-blog\\docs\\config\\README.MD"),b.register(i,"MdAlert","E:\\h-project\\my-blog\\docs\\config\\README.MD"),b.register(N,"layoutProps","E:\\h-project\\my-blog\\docs\\config\\README.MD"),b.register("wrapper","MDXLayout","E:\\h-project\\my-blog\\docs\\config\\README.MD"),b.register(d,"MDXContent","E:\\h-project\\my-blog\\docs\\config\\README.MD")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}.call(this,t(5)(e))}}]);