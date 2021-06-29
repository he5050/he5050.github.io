(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{300:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return i}));var n,c=t(104),s=(t(293),t(0),t(105)),p=["components"];function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var m,N,r=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},u=r("Footer"),l=r("StateCBDemo"),j={};function i(e){var a=e.components,t=b(e,p);return Object(s.b)("wrapper",o({},j,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)(u,{mdxType:"Footer"})),Object(s.b)("h1",{className:"__internal",id:"usestate添加回调方法"},"useState添加回调方法",Object(s.b)("a",{parentName:"h1",href:"#usestate%E6%B7%BB%E5%8A%A0%E5%9B%9E%E8%B0%83%E6%96%B9%E6%B3%95","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"  在",Object(s.b)("inlineCode",{parentName:"p"},"class"),"类中的我们使用",Object(s.b)("inlineCode",{parentName:"p"},"this.setState"),"来做为我们的更新进行",Object(s.b)("inlineCode",{parentName:"p"},"state"),"更新，因为",Object(s.b)("inlineCode",{parentName:"p"},"react"),"的事件合成当中,",Object(s.b)("inlineCode",{parentName:"p"},"this.setState"),"在原生事件里面是同步，但是在我们的合成事件当中是为异步，有时需要在更新后，我们需要拿到更新后的",Object(s.b)("inlineCode",{parentName:"p"},"state"),"值，会在",Object(s.b)("inlineCode",{parentName:"p"},"setState(state,cb)"),"加上callBack方法用于处理立即更新后的一些处理。")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"}," 但是在我们使用",Object(s.b)("inlineCode",{parentName:"p"},"hooks"),"的时候，",Object(s.b)("inlineCode",{parentName:"p"},"useState"),",是没有带",Object(s.b)("inlineCode",{parentName:"p"},"callBack"),"参数的,在异步更新的时候，某些特定操作可能需要，上一个传的依赖发生变动后才进行下步(当然后可以使用参数传递的方法来实现)。需要在",Object(s.b)("inlineCode",{parentName:"p"},"useEffect"),"做值的跟踪。或是对",Object(s.b)("inlineCode",{parentName:"p"},"useState"),"添加",Object(s.b)("inlineCode",{parentName:"p"},"callBack"),"方法")),Object(s.b)("h2",{className:"__internal",id:"usestatewidthchange"},"useStateWidthChange",Object(s.b)("a",{parentName:"h2",href:"#usestatewidthchange","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(s.b)("pre",{parentName:"div",className:"language-jsx"},Object(s.b)("code",{parentName:"pre",className:"language-jsx"},Object(s.b)("span",{parentName:"code",className:"token comment"},"// 或是直接在hooks当中直接执行useEffect做监听"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"export")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token function-variable function"},"useStateWidthChange")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token parameter"},"initState",Object(s.b)("span",{parentName:"span",className:"token punctuation"},",")," callBack"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"state",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setState",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"useState"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"initState",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token function"},"useEffect"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"callBack"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"state",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"state",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"state",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setState",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{className:"__internal",id:"usestatesetwitchcb"},"useStateSetWitchCB",Object(s.b)("a",{parentName:"h2",href:"#usestatesetwitchcb","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(s.b)("pre",{parentName:"div",className:"language-jsx"},Object(s.b)("code",{parentName:"pre",className:"language-jsx"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"export")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token function-variable function"},"useStateSetWitchCB")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token parameter"},"initValue")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," callbackRef ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"useRef"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token keyword"},"null"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"value",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setValue",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"useState"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"initValue",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token function"},"useEffect"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"if")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"callbackRef",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"current",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            callbackRef",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"current"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"value",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"else")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n            callbackRef",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"current ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"null"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"value",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token function-variable function"},"setNewValue")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token parameter"},"newValue",Object(s.b)("span",{parentName:"span",className:"token punctuation"},",")," callBack"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        callbackRef",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"current ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," callBack",Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n        ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"setValue"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"newValue",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"value",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setNewValue",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{className:"__internal",id:"测试demo"},"测试demo",Object(s.b)("a",{parentName:"h2",href:"#%E6%B5%8B%E8%AF%95demo","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(s.b)("pre",{parentName:"div",className:"language-jsx"},Object(s.b)("code",{parentName:"pre",className:"language-jsx"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"export")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token function-variable function"},"StateCBDemo")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"num",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setNum",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"useStateWidthChange"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token number"},"0"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token parameter"},"num")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n        console",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"log"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token string"},'"useStateWidthChange-num 发生变更"'),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," num",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"age",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," setAge",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]")," ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"useStateSetWitchCB"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token number"},"18"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n    ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"return")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"\n        ",Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"<"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button.Group")),Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"<"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button")),"\n                ",Object(s.b)("span",{parentName:"span",className:"token attr-name"},"onClick"),Object(s.b)("span",{parentName:"span",className:"token script language-javascript"},Object(s.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"{"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"span",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"span",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"{"),"\n                    ",Object(s.b)("span",{parentName:"span",className:"token function"},"setNum"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),"num ",Object(s.b)("span",{parentName:"span",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"span",className:"token number"},"1"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n            ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n                useStateWidthChange,num:"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"num",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"</"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button")),Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"<"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button")),"\n                ",Object(s.b)("span",{parentName:"span",className:"token attr-name"},"onClick"),Object(s.b)("span",{parentName:"span",className:"token script language-javascript"},Object(s.b)("span",{parentName:"span",className:"token script-punctuation punctuation"},"="),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"{"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"span",className:"token punctuation"},")")," ",Object(s.b)("span",{parentName:"span",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"{"),"\n                    ",Object(s.b)("span",{parentName:"span",className:"token function"},"setAge"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),"age ",Object(s.b)("span",{parentName:"span",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"span",className:"token number"},"1"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"span",className:"token parameter"},"newAge")," ",Object(s.b)("span",{parentName:"span",className:"token operator"},"=>")," ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"{"),"\n                        console",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"span",className:"token function"},"log"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"span",className:"token string"},'"newAge"'),Object(s.b)("span",{parentName:"span",className:"token punctuation"},",")," newAge",Object(s.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                        ",Object(s.b)("span",{parentName:"span",className:"token function"},"setNum"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"("),"num ",Object(s.b)("span",{parentName:"span",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"span",className:"token number"},"1"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                    ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},";"),"\n                ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"span",className:"token punctuation"},"}")),"\n            ",Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n                useStateSetWitchCB,age:"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"age",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n            "),Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"</"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button")),Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),Object(s.b)("span",{parentName:"code",className:"token plain-text"},"\n        "),Object(s.b)("span",{parentName:"code",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token tag"},Object(s.b)("span",{parentName:"span",className:"token punctuation"},"</"),Object(s.b)("span",{parentName:"span",className:"token class-name"},"Button.Group")),Object(s.b)("span",{parentName:"span",className:"token punctuation"},">")),"\n    ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)(l,{mdxType:"StateCBDemo"}))}i.isMDXComponent=!0,i=Object(c.hot)(e)(i),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(r,"makeShortcode","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md"),m.register(u,"Footer","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md"),m.register(l,"StateCBDemo","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md"),m.register(j,"layoutProps","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md"),m.register("wrapper","MDXLayout","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md"),m.register(i,"MDXContent","E:\\h-project\\my-blog\\docs\\notes\\2021-06-25.md")),(N="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&N(e)}.call(this,t(5)(e))}}]);