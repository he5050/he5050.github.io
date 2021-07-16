(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return d}));var n,c=t(108),s=(t(306),t(0),t(109)),o=["components"];function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,i,p=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},m=p("Footer"),N=p("WebAudioDemo"),u={};function d(e){var a=e.components,t=b(e,o);return Object(s.b)("wrapper",l({},u,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("blockquote",null,Object(s.b)(m,{mdxType:"Footer"})),Object(s.b)("h1",{className:"__internal",id:"5web-audio-api-介绍"},"5.Web Audio API 介绍",Object(s.b)("a",{parentName:"h1",href:"#5web-audio-api-%E4%BB%8B%E7%BB%8D","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/images/webaudio-0.jpg",alt:"进化史"})),Object(s.b)("h2",{className:"__internal",id:"web-audio-api-介绍"},"Web Audio API 介绍",Object(s.b)("a",{parentName:"h2",href:"#web-audio-api-%E4%BB%8B%E7%BB%8D","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"首先，了解一下什么是 Web Audio API，它是在 HTML5 中新增加的一个 API，但似乎大家对它的印象并不深，更多的是记住了它的其他兄弟（Web Storage API、Canvas API），Web Audio API 提供了在 Web 上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频进行处理。"),Object(s.b)("p",null,"Web Audio API 不等于 ",Object(s.b)("inlineCode",{parentName:"p"},"<audio>")," 元素"),Object(s.b)("p",null,"因为它有",Object(s.b)("strong",{parentName:"p"},"非常丰富的 API")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/images/webaudio-1.jpg",alt:"API 清单"})),Object(s.b)("h2",{className:"__internal",id:"那它到底能干什么？"},"那它到底能干什么？",Object(s.b)("a",{parentName:"h2",href:"#%E9%82%A3%E5%AE%83%E5%88%B0%E5%BA%95%E8%83%BD%E5%B9%B2%E4%BB%80%E4%B9%88%EF%BC%9F","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},"对简单或复杂的音频进行混合"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"精确控制音频的密度和节奏"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"内置淡入/淡出，颗粒噪点，音频控制等效果"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"灵活的处理在音频流的声道，可拆分可合并"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"处理  音频或  视频上的音频源"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"使用 MediaStream 的 getUserMedia() 方法实时处理输入的音频，如：变声"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"立体音效，支持多种 3D 游戏和沉浸式环境"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"利用卷积引擎，创建各类线性音效，例如小/大房间、大教堂、音乐厅等，适用于创建高质量的房间效果"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"实时的时域和频分析，实现音频可视化"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"很多音频波形算法控制")),Object(s.b)(N,{mdxType:"WebAudioDemo"}),Object(s.b)("p",null,"重点：声音是由硬件生成的，并不是用 mp3、wav 等格式播放出来的\n通过十几二十行的 JS 代码就能实现"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.currentTime")," 以双精度浮点型数字返回硬件调用的秒数 (readonly)"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.state")," 返回AudioContext当前状态 (readonly)"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AnalyserNode.frequencyBinCount")," 一个无符号长整形 (unsigned long) 的值, 值为fftSize的一半。这通常等于将要用于可视化的数据值的数量。"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createMediaElementSource()")," 创建一个 MediaElementAudioSourceNode 接口来关联 HTMLMediaElement . 这可以用来播放和处理来自",Object(s.b)("inlineCode",{parentName:"li"},"<video>"),"或",Object(s.b)("inlineCode",{parentName:"li"},"<audio>")," 元素的音频"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.resume()")," 重新启动一个已被暂停的音频环境"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.suspend()")," 暂停音频内容的进度.暂时停止音频硬件访问和减少在过程中的CPU/电池使用"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.close()")," 关闭一个音频环境, 释放任何正在使用系统资源的音频"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.decodeAudioData()")," 从ArrayBuffer对象中异步解码音频文件"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createGain()")," 创建一个GainNode,它可以控制音频的总音量"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createPanner()")," 创建一个PannerNode, 它为音源创建一个3D音源环境"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createAnalyser()")," 创建一个AnalyserNode，它可以用来显示音频时间和频率的数据"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createStereoPanner()")," 创建一个使用立体声的音频源 StereoPannerNode"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.createAnalyser()")," 创建一个AnalyserNode，可以用来获取音频时间和频率数据，以及实现数据可视化。"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AnalyserNode.getByteFrequencyData()")," 将当前频域数据拷贝进Uint8Array数组"),Object(s.b)("li",{parentName:"ul",className:"__internal"},"这里注意closed状态是不可逆的（close后要重新new），三种状态操作都是异步操作"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioBufferSourceNode.start(n)")," n表示开始的时间，默认为0，开始播放音频"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioBufferSourceNode.stop(n)")," 音频在第n秒时间停止，若没有传值表示立即停止"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.resume()")," 控制音频的播放"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.suspend()")," 控制音频的暂停"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioContext.currentTime")," 获取当前音频播放时间"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"AudioBufferSourceNode.buffer.duration")," 获取音频的播放总时长"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"GainNode.gain.value")," 控制音量大小 ","[0, 1]"),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("inlineCode",{parentName:"li"},"GainNode.gain.linearRampToValueAtTime")," 实现音量的渐入渐出")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"text"},Object(s.b)("pre",{parentName:"div",className:"language-text"},Object(s.b)("code",{parentName:"pre",className:"language-text"},"new AudioContext()\n      |\n      V\n+----------+                 +------------+\n| running  | -- suspend() -> | suspended  |\n|          | <- resume() --- |            |\n+----------+                 +------------+\n      |                              |\n      | close()                      | close()\n      +------------------------------+\n      |\n      V\n+-----------+\n|  closed   |\n+-----------+"))),Object(s.b)("h2",{className:"__internal",id:"实现的代码"},"实现的代码",Object(s.b)("a",{parentName:"h2",href:"#%E5%AE%9E%E7%8E%B0%E7%9A%84%E4%BB%A3%E7%A0%81","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"1、兼容老的 webkit 浏览器"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," audioCtx ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"new")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"window",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"AudioContext ",Object(s.b)("span",{parentName:"code",className:"token operator"},"||")," window",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"webkitAudioContext",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"2、创建新的音频上下文接口"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"let")," audioCtx ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"new")," ",Object(s.b)("span",{parentName:"code",className:"token class-name"},"AudioContext"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"3、创建一个 OscillatorNode 它表示一个周期性波形（振荡）（抽象表达形式）声音是由物体振动产生的，这里可以理解为创建一个音调"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"let")," oscillator ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"createOscillator"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"4、创建一个 GainNode 控制音频的总音量"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"let")," gainNode ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"createGain"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"5、将音调和音频关联起来"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"oscillator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"connect"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"gainNode",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"6、将音量和设备关联，一般情况下是扬声器"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"gainNode",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"connect"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"destination",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"7、指定音调为正弦波类型 ",Object(s.b)("inlineCode",{parentName:"p"},"square")," 方波 | ",Object(s.b)("inlineCode",{parentName:"p"},"triangle")," 三角波 | ",Object(s.b)("inlineCode",{parentName:"p"},"sawtooth")," 锯齿波 ",Object(s.b)("inlineCode",{parentName:"p"},"setPeriodicWave()")," 方法自定义波形"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"oscillator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"type ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'sine'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")," ",Object(s.b)("span",{parentName:"code",className:"token comment"},"// 正弦波")))),Object(s.b)("p",null,"8、设置当前播放声音的频率"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"oscillator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"frequency",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"value ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token number"},"400"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"9、",Object(s.b)("inlineCode",{parentName:"p"},"currentTime")," 的值是双精度浮点型数字，返回硬件调用的秒数这个时间无法改变，从 new ",Object(s.b)("inlineCode",{parentName:"p"},"AudioContext")," 开始就会一直累加表示把当前的时间的音量设置为 0"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"gainNode",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"gain",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"setValueAtTime"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token number"},"0"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"currentTime",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"10、",Object(s.b)("inlineCode",{parentName:"p"},"linearRampToValueAtTime")," 表示某时间线性变化到某值表示当前时间 0.01 秒后，声音线性的从 0 增加到 1"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"gainNode",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"gain",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"linearRampToValueAtTime"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token number"},"1"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"currentTime ",Object(s.b)("span",{parentName:"code",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"code",className:"token number"},"0.01"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"11、开始播放音调"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"oscillator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"start"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"currentTime",Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"12、",Object(s.b)("inlineCode",{parentName:"p"},"exponentialRampToValueAtTime")," 表示音量在某个时间指数变化到某值这里表示在 1 秒内，音量由之前的 1 指数曲线的速度降至到 0.001 的音量"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"gainNode",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"gain",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"exponentialRampToValueAtTime"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token number"},"0.001"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"currentTime ",Object(s.b)("span",{parentName:"code",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"code",className:"token number"},"1"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"13、1 秒后完全停止音乐"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"javascript"},Object(s.b)("pre",{parentName:"div",className:"language-javascript"},Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"oscillator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),Object(s.b)("span",{parentName:"code",className:"token function"},"stop"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"audioCtx",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"."),"currentTime ",Object(s.b)("span",{parentName:"code",className:"token operator"},"+")," ",Object(s.b)("span",{parentName:"code",className:"token number"},"1"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("h2",{className:"__internal",id:"兼容性"},"兼容性",Object(s.b)("a",{parentName:"h2",href:"#%E5%85%BC%E5%AE%B9%E6%80%A7","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("p",null,"iOS 支持性很好，微信下 X5 同样也不错，所以不用担心"),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/images/webaudio-3.jpg",alt:"Can I use"})),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"/images/webaudio-4.jpg",alt:"X5 Can I user"})),Object(s.b)("h2",{className:"__internal",id:"web-音频库推荐"},"Web 音频库推荐",Object(s.b)("a",{parentName:"h2",href:"#web-%E9%9F%B3%E9%A2%91%E5%BA%93%E6%8E%A8%E8%8D%90","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://alemangui.github.io/pizzicato/",target:"_blank"},"Pizzicato.js")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://github.com/jeromeetienne/webaudiox",target:"_blank"},"webaudiox.js")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://github.com/goldfire/howler.js",target:"_blank"},"howler.js")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://tonejs.github.io/",target:"_blank"},"Tone.js")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://github.com/goldfire/howler.js",target:"_blank"},"WAD"))),Object(s.b)("h2",{className:"__internal",id:"参考资料"},"参考资料",Object(s.b)("a",{parentName:"h2",href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99","aria-hidden":!0,className:"anchor"},"#")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/"},"利用HTML5 Web Audio API给网页JS交互增加声音 ")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API",target:"_blank"},"Visualizations with Web Audio API")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext",target:"_blank"},"AudioContext")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://css-tricks.com/introduction-web-audio-api/",target:"_blank"},"Introduction to Web Audio API")),Object(s.b)("li",{parentName:"ul",className:"__internal"},Object(s.b)("a",{parentName:"li",href:"https://wenku.baidu.com/view/99b7a5194431b90d6c85c7b0.html",target:"_blank"},"钢琴键频率对照表"))))}d.isMDXComponent=!0,d=Object(c.hot)(e)(d),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(p,"makeShortcode","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md"),r.register(m,"Footer","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md"),r.register(N,"WebAudioDemo","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md"),r.register(u,"layoutProps","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md"),r.register("wrapper","MDXLayout","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md"),r.register(d,"MDXContent","E:\\h-project\\my-blog\\docs\\notes\\2021-06-28.md")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}.call(this,t(3)(e))}}]);