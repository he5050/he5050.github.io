(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{424:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return j}));var t,s=n(167),c=(n(406),n(0),n(168)),p=["components"];function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function m(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,r,N=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",a)}},l=N("Footer"),u=N("FileReaderDemo"),i={};function j(e){var a=e.components,n=m(e,p);return Object(c.b)("wrapper",o({},i,n,{components:a,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)(l,{mdxType:"Footer"})),Object(c.b)("h1",{className:"__internal",id:"6前端上传图片预览"},"6.前端上传图片预览",Object(c.b)("a",{parentName:"h1",href:"#6%E5%89%8D%E7%AB%AF%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87%E9%A2%84%E8%A7%88","aria-hidden":!0,className:"anchor"},"#")),Object(c.b)("p",null,"此文将介绍两种方法来实现前端上传图片预览。"),Object(c.b)("h2",{className:"__internal",id:"方法1：filereader"},"方法1：FileReader",Object(c.b)("a",{parentName:"h2",href:"#%E6%96%B9%E6%B3%951%EF%BC%9Afilereader","aria-hidden":!0,className:"anchor"},"#")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul",className:"__internal"},Object(c.b)("inlineCode",{parentName:"li"},"FileReader"),"对象允许Web应用程序异步读取存储在计算机上的文件（或原始数据缓冲区）的内容，使用",Object(c.b)("inlineCode",{parentName:"li"},"File"),"或",Object(c.b)("inlineCode",{parentName:"li"},"Blob"),"对象指定要读取的文件。其中File对象可以是来自用户在一个",Object(c.b)("inlineCode",{parentName:"li"},"<input>"),"元素上选择文件返回的",Object(c.b)("inlineCode",{parentName:"li"},"FileList"),"对象，也可以来自拖放操作生成的",Object(c.b)("inlineCode",{parentName:"li"},"DataTransfer"),"对象，还可以是来自一个",Object(c.b)("inlineCode",{parentName:"li"},"HTMLCanvasElement"),"上执行",Object(c.b)("inlineCode",{parentName:"li"},"mozGetAsFile()"),"方法后返回结果。")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul",className:"__internal"},"demo示例：",Object(c.b)(u,{mdxType:"FileReaderDemo"}))),Object(c.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(c.b)("pre",{parentName:"div",className:"language-jsx"},Object(c.b)("code",{parentName:"pre",className:"language-jsx"},Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"FileReaderDemo")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"uploaderFile")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token parameter"},"file")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," oFileReader ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"new")," ",Object(c.b)("span",{parentName:"code",className:"token class-name"},"FileReader"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")," ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 创建一个FileReader对象"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," oPreview ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," document",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"getElementById"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},'"file-img"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")," ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 预览图"),"\n        oFileReader",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"onload")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"function")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token parameter"},"event"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"src ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," event",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"target",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"result",Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")," ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 替换预览图的src"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"if")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"window",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"FileReader",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            ",Object(c.b)("span",{parentName:"code",className:"token comment"},"/*\n            读取指定的Blob对象或File对象中的内容。\n            当读取操作完成时，会自动尝试去调用onloadend事件。\n            同时，result属性将包含一个data:URL表示读取的文件的内容。\n             */"),"\n            oFileReader",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"readAsDataURL"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"file",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token number"},"0"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"else")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"if")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"navigator",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"appName ",Object(c.b)("span",{parentName:"code",className:"token operator"},"===")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'"Microsoft Internet Explorer"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// IE浏览器"),"\n            ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// IE10以下版本不支持FileReader()构造函数，利用滤镜兼容旧版本的IE"),"\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"style",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"filter ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"filters",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"item"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},'"DXImageTransform.Microsoft.AlphaImageLoader"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"src ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," oUpload",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"value",Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"\n        ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"className"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-reader-demo",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"img")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"id"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-img",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'))," ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"/>")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"input"),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"type"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"className"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-upload",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"accept"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"image/png,image/gif,image/jpeg,image/bmp",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"name"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"onChange"),Object(c.b)("span",{parentName:"span",className:"token script language-javascript"},Object(c.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),Object(c.b)("span",{parentName:"span",className:"token parameter"},"e")," ",Object(c.b)("span",{parentName:"span",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),"\n                    ",Object(c.b)("span",{parentName:"span",className:"token function"},"uploaderFile"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"("),"e",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),"target",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),"files",Object(c.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n            ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"/>")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n        "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n"))),Object(c.b)("p",null,"如果想对",Object(c.b)("inlineCode",{parentName:"p"},"FileReader"),"了解更多，",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader",target:"_blank"},"请点此链接"),"。"),Object(c.b)("h2",{className:"__internal",id:"方法2：urlcreateobjecturlblob"},"方法2：URL.createObjectURL(blob)",Object(c.b)("a",{parentName:"h2",href:"#%E6%96%B9%E6%B3%952%EF%BC%9Aurlcreateobjecturlblob","aria-hidden":!0,className:"anchor"},"#")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"URL.createObjectURL(blob)"),"静态方法会创建一个",Object(c.b)("inlineCode",{parentName:"p"},"DOMString"),"，其中包含一个表示参数中给出的对象的URL。这个URL的生命周期和创建它的窗口中的",Object(c.b)("inlineCode",{parentName:"p"},"document"),"绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul",className:"__internal"},"demo示例：",Object(c.b)(u,{type:"blob",id:"img-blob",mdxType:"FileReaderDemo"}))),Object(c.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(c.b)("pre",{parentName:"div",className:"language-jsx"},Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"\n",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"FileReaderDemo")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token parameter"},"props")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 获取dataURL"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"createObjectURL")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token parameter"},"blob")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"return")," window",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),"window",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"webkitURL ",Object(c.b)("span",{parentName:"code",className:"token operator"},"?")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'"webkitURL"')," ",Object(c.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'"URL"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token string"},'"createObjectURL"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"blob",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(c.b)("span",{parentName:"code",className:"token function-variable function"},"uploaderFileBlob")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token parameter"},"file")," ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"const")," oPreview ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," document",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"getElementById"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},'"file-img"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";")," ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// 预览图"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"let")," imgDataURL ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'""'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"if")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"navigator",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"appName ",Object(c.b)("span",{parentName:"code",className:"token operator"},"===")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'""'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            ",Object(c.b)("span",{parentName:"code",className:"token comment"},"// IE10以下版本不支持FileReader()构造函数，利用滤镜兼容旧版本的IE"),"\n            imgDataURL ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," file",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token number"},"0"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"style",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"filter ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token string"},'"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"filters",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(c.b)("span",{parentName:"code",className:"token function"},"item"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(c.b)("span",{parentName:"code",className:"token string"},'"DXImageTransform.Microsoft.AlphaImageLoader"'),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"src ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," imgDataURL",Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"else")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            imgDataURL ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(c.b)("span",{parentName:"code",className:"token function"},"createObjectURL"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"file",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(c.b)("span",{parentName:"code",className:"token number"},"0"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n            oPreview",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"."),"src ",Object(c.b)("span",{parentName:"code",className:"token operator"},"=")," imgDataURL",Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(c.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"("),"\n        ",Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"className"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-reader-demo",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"img")," ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"id"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-img",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'))," ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"/>")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"<"),"input"),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"type"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"className"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file-upload",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"accept"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"image/png,image/gif,image/jpeg,image/bmp",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"name"),Object(c.b)("span",{parentName:"span",className:"token attr-value"},Object(c.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"'),"file",Object(c.b)("span",{parentName:"span",className:"token punctuation"},'"')),"\n                ",Object(c.b)("span",{parentName:"span",className:"token attr-name"},"onChange"),Object(c.b)("span",{parentName:"span",className:"token script language-javascript"},Object(c.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),Object(c.b)("span",{parentName:"span",className:"token parameter"},"e")," ",Object(c.b)("span",{parentName:"span",className:"token operator"},"=>")," ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"{"),"\n                   ",Object(c.b)("span",{parentName:"span",className:"token function"},"uploaderFileBlob"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"("),"e",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),"target",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"."),"files",Object(c.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n            ",Object(c.b)("span",{parentName:"span",className:"token punctuation"},"/>")),Object(c.b)("span",{parentName:"code",className:"token plain-text"},"\n        "),Object(c.b)("span",{parentName:"code",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token tag"},Object(c.b)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),Object(c.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n    ",Object(c.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(c.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(c.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n"))),Object(c.b)("p",null,"如果想对",Object(c.b)("inlineCode",{parentName:"p"},"Object.createObjectURL()"),"了解更多，",Object(c.b)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL",target:"_blank"},"请点此链接"),"。"))}j.isMDXComponent=!0,j=Object(s.hot)(e)(j),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(N,"makeShortcode","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md"),b.register(l,"Footer","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md"),b.register(u,"FileReaderDemo","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md"),b.register(i,"layoutProps","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md"),b.register("wrapper","MDXLayout","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md"),b.register(j,"MDXContent","E:\\h-project\\my-blog\\docs\\notes\\2021-06-29.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,n(4)(e))}}]);