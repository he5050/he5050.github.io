(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{298:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return l}));var t,c=n(97),s=(n(279),n(0),n(98)),o=["components"];function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,m,N={};function l(e){var a=e.components,n=b(e,o);return Object(s.b)("wrapper",p({},N,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{className:"__internal",id:"多语言支持"},"多语言支持",Object(s.b)("a",{parentName:"h1",href:"#%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%94%AF%E6%8C%81","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("h2",{className:"__internal",id:"站点多语言配置"},"站点多语言配置",Object(s.b)("a",{parentName:"h2",href:"#%E7%AB%99%E7%82%B9%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"要启用 RcPress 的多语言支持，首先需要使用如下的文件结构："),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",{parentName:"div",className:"language-bash"},Object(s.b)("code",{parentName:"pre",className:"language-bash"},"docs\n├─ README.md\n├─ foo.md\n├─ nested\n│  └─ README.md\n└─ zh\n   ├─ README.md\n   ├─ foo.md\n   └─ nested\n      └─ README.md"))),Object(s.b)("p",null,"然后，在 ",Object(s.b)("inlineCode",{parentName:"p"},".rcpress/config.js")," 中提供 ",Object(s.b)("inlineCode",{parentName:"p"},"locales")," 选项："),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"module",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  locales",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 键名是该语言所属的子路径"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 作为特例，默认语言可以使用 '/' 作为其路径。"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      lang",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'en-US'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 将会被设置为 <html> 的 lang 属性"),"\n      title",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'RcPress'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      description",Object(s.b)("span",{parentName:"code",className:"token operator"},":"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token string"},"'A static docs generator based on Ant Design and GatsbyJs'"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n    ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      lang",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'zh-CN'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      title",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'RcPress'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      description",Object(s.b)("span",{parentName:"code",className:"token operator"},":"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token string"},"'一个基于Ant Design 和 GatsbyJs 的静态文档生成器'"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"如果一个语言没有声明 ",Object(s.b)("inlineCode",{parentName:"p"},"title")," 或者 ",Object(s.b)("inlineCode",{parentName:"p"},"description"),"RcPress 将会尝试使用配置顶层的对应值。如果每个语言都声明了 ",Object(s.b)("inlineCode",{parentName:"p"},"title")," 和 ",Object(s.b)("inlineCode",{parentName:"p"},"description"),"，则顶层的这两个值可以被省略。"),Object(s.b)("h2",{className:"__internal",id:"默认主题多语言配置"},"默认主题多语言配置",Object(s.b)("a",{parentName:"h2",href:"#%E9%BB%98%E8%AE%A4%E4%B8%BB%E9%A2%98%E5%A4%9A%E8%AF%AD%E8%A8%80%E9%85%8D%E7%BD%AE","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"默认主题也内置了多语言支持，可以通过 ",Object(s.b)("inlineCode",{parentName:"p"},"themeConfig.locales")," 来配置。该选项接受同样的 ",Object(s.b)("inlineCode",{parentName:"p"},"{ path: config }")," 格式的值。每个语言除了可以配置一些站点中用到的文字之外，还可以拥有自己的 ",Object(s.b)("a",{parentName:"p",href:"/zh/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F"},"导航栏")," 和 ",Object(s.b)("a",{parentName:"p",href:"/zh/default-theme-config/#%E4%BE%A7%E8%BE%B9%E6%A0%8F"},"侧边栏")," 配置："),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},"module",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"exports ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  locales",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token comment"},"/* ... */"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  themeConfig",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    locales",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        selectText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Languages'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        label",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'English'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        editLinkText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Edit this page on GitHub'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        nav",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," text",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'Nested'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," link",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/nested/'")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        sidebar",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n            ",Object(s.b)("span",{parentName:"code",className:"token comment"},"/* ... */"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/nested/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n            ",Object(s.b)("span",{parentName:"code",className:"token comment"},"/* ... */"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n      ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 多语言下拉菜单的标题"),"\n        selectText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'选择语言'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 该语言在下拉菜单中的标签"),"\n        label",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'简体中文'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 编辑链接文字"),"\n        editLinkText",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'在 GitHub 上编辑此页'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        nav",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," text",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'嵌套'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," link",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/nested/'")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n        sidebar",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n            ",Object(s.b)("span",{parentName:"code",className:"token comment"},"/* ... */"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n          ",Object(s.b)("span",{parentName:"code",className:"token string"},"'/zh/nested/'"),Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"\n            ",Object(s.b)("span",{parentName:"code",className:"token comment"},"/* ... */"),"\n          ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n      ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n  ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))))}l.isMDXComponent=!0,l=Object(c.hot)(e)(l),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(N,"layoutProps","E:\\111\\my-blog\\docs\\zh\\guide\\i18n.md"),r.register("wrapper","MDXLayout","E:\\111\\my-blog\\docs\\zh\\guide\\i18n.md"),r.register(l,"MDXContent","E:\\111\\my-blog\\docs\\zh\\guide\\i18n.md")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,n(11)(e))}}]);