(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{316:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return u}));var n,c=t(107),o=(t(306),t(0),t(108)),s=["components"];function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,m,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",a)}},N=l("Footer"),i={};function u(e){var a=e.components,t=r(e,s);return Object(o.b)("wrapper",p({},i,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)(N,{mdxType:"Footer"})),Object(o.b)("h1",{className:"__internal",id:"5关于刘海屏幕的处理事项"},"5.关于刘海屏幕的处理事项",Object(o.b)("a",{parentName:"h1",href:"#5%E5%85%B3%E4%BA%8E%E5%88%98%E6%B5%B7%E5%B1%8F%E5%B9%95%E7%9A%84%E5%A4%84%E7%90%86%E4%BA%8B%E9%A1%B9","aria-hidden":!0,className:"anchor"},"#")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"}," 对于网页而言，顶部（刘海部位）的适配问题浏览器已经做了处理，所以我们只需要关注底部与小黑条的适配问题即可（即常见的吸底导航、返回顶部等各种相对底部 fixed 定位的元素）。")),Object(o.b)("h3",{className:"__internal",id:"第一步：设置网页在可视窗口的布局方式"},"第一步：设置网页在可视窗口的布局方式",Object(o.b)("a",{parentName:"h3",href:"#%E7%AC%AC%E4%B8%80%E6%AD%A5%EF%BC%9A%E8%AE%BE%E7%BD%AE%E7%BD%91%E9%A1%B5%E5%9C%A8%E5%8F%AF%E8%A7%86%E7%AA%97%E5%8F%A3%E7%9A%84%E5%B8%83%E5%B1%80%E6%96%B9%E5%BC%8F","aria-hidden":!0,className:"anchor"},"#")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口："),Object(o.b)("div",{parentName:"blockquote",className:"rcpress-highlight","data-language":"html"},Object(o.b)("pre",{parentName:"div",className:"language-html"},Object(o.b)("code",{parentName:"pre",className:"language-html"},Object(o.b)("span",{parentName:"code",className:"token tag"},Object(o.b)("span",{parentName:"span",className:"token tag"},Object(o.b)("span",{parentName:"span",className:"token punctuation"},"<"),"meta")," ",Object(o.b)("span",{parentName:"span",className:"token attr-name"},"name"),Object(o.b)("span",{parentName:"span",className:"token attr-value"},Object(o.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(o.b)("span",{parentName:"span",className:"token punctuation"},'"'),"viewport",Object(o.b)("span",{parentName:"span",className:"token punctuation"},'"'))," ",Object(o.b)("span",{parentName:"span",className:"token attr-name"},"content"),Object(o.b)("span",{parentName:"span",className:"token attr-value"},Object(o.b)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),Object(o.b)("span",{parentName:"span",className:"token punctuation"},'"'),"width=device-width, viewport-fit=cover",Object(o.b)("span",{parentName:"span",className:"token punctuation"},'"')),Object(o.b)("span",{parentName:"span",className:"token punctuation"},">")))))),Object(o.b)("h3",{className:"__internal",id:"第二步：页面主体内容限定在安全区域内"},"第二步：页面主体内容限定在安全区域内",Object(o.b)("a",{parentName:"h3",href:"#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E9%A1%B5%E9%9D%A2%E4%B8%BB%E4%BD%93%E5%86%85%E5%AE%B9%E9%99%90%E5%AE%9A%E5%9C%A8%E5%AE%89%E5%85%A8%E5%8C%BA%E5%9F%9F%E5%86%85","aria-hidden":!0,className:"anchor"},"#")),Object(o.b)("div",{className:"rcpress-highlight","data-language":"css"},Object(o.b)("pre",{parentName:"div",className:"language-css"},Object(o.b)("code",{parentName:"pre",className:"language-css"},Object(o.b)("span",{parentName:"code",className:"token selector"},"body")," ",Object(o.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"padding-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"constant"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"padding-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"env"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(o.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n"))),Object(o.b)("h3",{className:"__internal",id:"第三步：fixed-元素的适配"},"第三步：fixed 元素的适配",Object(o.b)("a",{parentName:"h3",href:"#%E7%AC%AC%E4%B8%89%E6%AD%A5%EF%BC%9Afixed-%E5%85%83%E7%B4%A0%E7%9A%84%E9%80%82%E9%85%8D","aria-hidden":!0,className:"anchor"},"#")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol",className:"__internal"},"类型一：fixed 完全吸底元素（bottom = 0）")),Object(o.b)("div",{className:"rcpress-highlight","data-language":"css"},Object(o.b)("pre",{parentName:"div",className:"language-css"},Object(o.b)("code",{parentName:"pre",className:"language-css"},Object(o.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"padding-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"constant"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"padding-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"env"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(o.b)("span",{parentName:"code",className:"token punctuation"},"}")))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol",className:"__internal"},"类型二：fixed 非完全吸底元素（bottom ≠ 0），比如 “返回顶部”、“侧边广告” 等")),Object(o.b)("div",{className:"rcpress-highlight","data-language":"css"},Object(o.b)("pre",{parentName:"div",className:"language-css"},Object(o.b)("code",{parentName:"pre",className:"language-css"},Object(o.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"margin-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"constant"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n  ",Object(o.b)("span",{parentName:"code",className:"token property"},"margin-bottom"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},":")," ",Object(o.b)("span",{parentName:"code",className:"token function"},"env"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},"("),"safe-area-inset-bottom",Object(o.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(o.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(o.b)("span",{parentName:"code",className:"token punctuation"},"}")))))}u.isMDXComponent=!0,u=Object(c.hot)(e)(u),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(l,"makeShortcode","E:\\h-project\\my-blog\\docs\\css\\05-safeArea.md"),b.register(N,"Footer","E:\\h-project\\my-blog\\docs\\css\\05-safeArea.md"),b.register(i,"layoutProps","E:\\h-project\\my-blog\\docs\\css\\05-safeArea.md"),b.register("wrapper","MDXLayout","E:\\h-project\\my-blog\\docs\\css\\05-safeArea.md"),b.register(u,"MDXContent","E:\\h-project\\my-blog\\docs\\css\\05-safeArea.md")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,t(4)(e))}}]);