/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "584ca36678f7dbc9dd1f8879aa7bbbaa"
  },
  {
    "url": "assets/css/10.styles.884e5180.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/10.styles.9cde3c21.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/10.styles.b486f9f3.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/10.styles.e6be1c33.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/11.styles.268b12fe.css",
    "revision": "07301bec8540220900319d2b3b492c19"
  },
  {
    "url": "assets/css/11.styles.327f1c87.css",
    "revision": "07301bec8540220900319d2b3b492c19"
  },
  {
    "url": "assets/css/11.styles.dfe4e09d.css",
    "revision": "07301bec8540220900319d2b3b492c19"
  },
  {
    "url": "assets/css/14.styles.7015a4a9.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/23.styles.7000d758.css",
    "revision": "07301bec8540220900319d2b3b492c19"
  },
  {
    "url": "assets/css/4.styles.5e65f373.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/4.styles.72e76626.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/4.styles.d43caa07.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/4.styles.f9442174.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/styles.13d781d7.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.5cd538c0.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.5eb5f9b8.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.9497ad35.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.9fa6d5d8.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.a4398a0e.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/css/styles.b5477f27.css",
    "revision": "7a28891b8286a7ed9996d1fc3d6e800b"
  },
  {
    "url": "assets/js/11.1a87eb64.js",
    "revision": "1ce118fa09086e2e0d8b039d9a4a7495"
  },
  {
    "url": "assets/js/11.1f42f597.js",
    "revision": "1ce118fa09086e2e0d8b039d9a4a7495"
  },
  {
    "url": "assets/js/11.2e402be4.js",
    "revision": "cc3d632479bd9ad8e6b3a8206d03f906"
  },
  {
    "url": "assets/js/11.40a2574f.js",
    "revision": "91fb55292280338aaf38315e851cf52b"
  },
  {
    "url": "assets/js/11.65bab640.js",
    "revision": "91fb55292280338aaf38315e851cf52b"
  },
  {
    "url": "assets/js/11.9b28fc3f.js",
    "revision": "91fb55292280338aaf38315e851cf52b"
  },
  {
    "url": "assets/js/23.57434339.js",
    "revision": "5e7a2cf9e635dc494fcba3366b281c01"
  },
  {
    "url": "assets/js/app.1a87eb64.js",
    "revision": "7dc03f361054a5905e458ee1d41f4fe4"
  },
  {
    "url": "assets/js/app.1f42f597.js",
    "revision": "a1d32f0d4bbf83d01da556cf2a1f4fc1"
  },
  {
    "url": "assets/js/app.2e402be4.js",
    "revision": "3280784ae8299761ba3f5f51448c2cc0"
  },
  {
    "url": "assets/js/app.40a2574f.js",
    "revision": "66544591a84b2f275a1cb3d8291d2f38"
  },
  {
    "url": "assets/js/app.57434339.js",
    "revision": "b8247aacd4bafe2e7cd81e3ba281aec2"
  },
  {
    "url": "assets/js/app.65bab640.js",
    "revision": "7ff109ecff08107a8663085c439341f4"
  },
  {
    "url": "assets/js/app.9b28fc3f.js",
    "revision": "688fa481df32a36d5110082e4032ab42"
  },
  {
    "url": "assets/js/codes/README.md.1a87eb64.js",
    "revision": "ec8593e73e8e879f961dd081bd8ff522"
  },
  {
    "url": "assets/js/codes/README.md.1f42f597.js",
    "revision": "ec8593e73e8e879f961dd081bd8ff522"
  },
  {
    "url": "assets/js/codes/README.md.2e402be4.js",
    "revision": "043899c413cfcb045264cc658a58ea31"
  },
  {
    "url": "assets/js/codes/README.md.40a2574f.js",
    "revision": "18543570cf84c387544466c950b4e285"
  },
  {
    "url": "assets/js/codes/README.md.57434339.js",
    "revision": "73320b9cbf54cf1efb9b597bfce59619"
  },
  {
    "url": "assets/js/codes/README.md.65bab640.js",
    "revision": "18543570cf84c387544466c950b4e285"
  },
  {
    "url": "assets/js/codes/README.md.9b28fc3f.js",
    "revision": "18543570cf84c387544466c950b4e285"
  },
  {
    "url": "assets/js/config/README.MD.1a87eb64.js",
    "revision": "2139020fa4c33ea3b53bc4b258b7bfc8"
  },
  {
    "url": "assets/js/config/README.MD.1f42f597.js",
    "revision": "2139020fa4c33ea3b53bc4b258b7bfc8"
  },
  {
    "url": "assets/js/config/README.MD.2e402be4.js",
    "revision": "73943448e2143e1d4c493dcf86b8f08d"
  },
  {
    "url": "assets/js/config/README.MD.40a2574f.js",
    "revision": "56c188a65d59b4a7a34d132bdd1220fd"
  },
  {
    "url": "assets/js/config/README.MD.57434339.js",
    "revision": "0f29572df5a1effa11ed8563b37ce35e"
  },
  {
    "url": "assets/js/config/README.MD.65bab640.js",
    "revision": "56c188a65d59b4a7a34d132bdd1220fd"
  },
  {
    "url": "assets/js/config/README.MD.9b28fc3f.js",
    "revision": "56c188a65d59b4a7a34d132bdd1220fd"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.1a87eb64.js",
    "revision": "5a19aebf2231db0488dd273711b09dfa"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.1f42f597.js",
    "revision": "5a19aebf2231db0488dd273711b09dfa"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.2e402be4.js",
    "revision": "e6dfc3792d5d1b380c86bccc2e8a0fd2"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.40a2574f.js",
    "revision": "bfceaa35af04c1c93221e8653e063f4d"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.57434339.js",
    "revision": "2f46f30cac0d0daa34f0957598faa96e"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.65bab640.js",
    "revision": "bfceaa35af04c1c93221e8653e063f4d"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.9b28fc3f.js",
    "revision": "bfceaa35af04c1c93221e8653e063f4d"
  },
  {
    "url": "assets/js/notes/README.md.1a87eb64.js",
    "revision": "b30b31b03066feb20f0fe203f9540762"
  },
  {
    "url": "assets/js/notes/README.md.1f42f597.js",
    "revision": "a46a83851c9f8f09b0580978fccb405f"
  },
  {
    "url": "assets/js/notes/README.md.2e402be4.js",
    "revision": "80eeb1c21018153b23112696729d8cca"
  },
  {
    "url": "assets/js/notes/README.md.40a2574f.js",
    "revision": "c7524a46eb41f0b5ffcb567a3b8f4176"
  },
  {
    "url": "assets/js/notes/README.md.57434339.js",
    "revision": "df697c9d43d895bf7fd0270603b67aae"
  },
  {
    "url": "assets/js/notes/README.md.65bab640.js",
    "revision": "a040f7ba6d750fa4701720c5df86f905"
  },
  {
    "url": "assets/js/notes/README.md.9b28fc3f.js",
    "revision": "936fd024a95d8f186116ccbe8e678ee5"
  },
  {
    "url": "assets/js/notFoundWrapper.1a87eb64.js",
    "revision": "1ebb0b555331669c7bd9d0d4bdcfbb1f"
  },
  {
    "url": "assets/js/notFoundWrapper.1f42f597.js",
    "revision": "1ebb0b555331669c7bd9d0d4bdcfbb1f"
  },
  {
    "url": "assets/js/notFoundWrapper.2e402be4.js",
    "revision": "b306c447299835a30929b11f10e4b082"
  },
  {
    "url": "assets/js/notFoundWrapper.40a2574f.js",
    "revision": "c911a9e8a95c1ec554352b0588d21e53"
  },
  {
    "url": "assets/js/notFoundWrapper.57434339.js",
    "revision": "2f7dcbe9310bf2a8f0514f7bbb2fa81f"
  },
  {
    "url": "assets/js/notFoundWrapper.65bab640.js",
    "revision": "c911a9e8a95c1ec554352b0588d21e53"
  },
  {
    "url": "assets/js/notFoundWrapper.9b28fc3f.js",
    "revision": "c911a9e8a95c1ec554352b0588d21e53"
  },
  {
    "url": "assets/js/README.MD.1a87eb64.js",
    "revision": "b8594b6d64af87b85f9a141354c30a7f"
  },
  {
    "url": "assets/js/README.MD.1f42f597.js",
    "revision": "b8594b6d64af87b85f9a141354c30a7f"
  },
  {
    "url": "assets/js/README.MD.2e402be4.js",
    "revision": "7ff2e6240396e16ecf8da4830e5adfab"
  },
  {
    "url": "assets/js/README.MD.40a2574f.js",
    "revision": "69c54d99fe3473b48d403b6c247f0b0c"
  },
  {
    "url": "assets/js/README.MD.57434339.js",
    "revision": "2e7efd30ab92d6afa7d3bc42b1b0d4b9"
  },
  {
    "url": "assets/js/README.MD.65bab640.js",
    "revision": "69c54d99fe3473b48d403b6c247f0b0c"
  },
  {
    "url": "assets/js/README.MD.9b28fc3f.js",
    "revision": "69c54d99fe3473b48d403b6c247f0b0c"
  },
  {
    "url": "assets/js/tools/animation.md.1a87eb64.js",
    "revision": "e08cdbb767a8ba6f74cbfe8b7416dec2"
  },
  {
    "url": "assets/js/tools/animation.md.1f42f597.js",
    "revision": "e08cdbb767a8ba6f74cbfe8b7416dec2"
  },
  {
    "url": "assets/js/tools/animation.md.2e402be4.js",
    "revision": "7b973e2adbfc40c305bb3f5b81d7d34d"
  },
  {
    "url": "assets/js/tools/animation.md.40a2574f.js",
    "revision": "3422e93cd055ba8d8c6c332581f9d0c1"
  },
  {
    "url": "assets/js/tools/animation.md.57434339.js",
    "revision": "0de7ac844dcd5d2c27906ae695bd0ed6"
  },
  {
    "url": "assets/js/tools/animation.md.65bab640.js",
    "revision": "3422e93cd055ba8d8c6c332581f9d0c1"
  },
  {
    "url": "assets/js/tools/animation.md.9b28fc3f.js",
    "revision": "3422e93cd055ba8d8c6c332581f9d0c1"
  },
  {
    "url": "assets/js/tools/react.md.1a87eb64.js",
    "revision": "9fb6c88f893d97c91d09b0bda1c7c407"
  },
  {
    "url": "assets/js/tools/react.md.1f42f597.js",
    "revision": "9fb6c88f893d97c91d09b0bda1c7c407"
  },
  {
    "url": "assets/js/tools/react.md.2e402be4.js",
    "revision": "245ea6ab32e00c330485c31844c29772"
  },
  {
    "url": "assets/js/tools/react.md.40a2574f.js",
    "revision": "f0499fc291768ed98314c41c2740ab85"
  },
  {
    "url": "assets/js/tools/react.md.57434339.js",
    "revision": "ad2285df18c3f15a5e1f873105899b86"
  },
  {
    "url": "assets/js/tools/react.md.65bab640.js",
    "revision": "f0499fc291768ed98314c41c2740ab85"
  },
  {
    "url": "assets/js/tools/react.md.9b28fc3f.js",
    "revision": "f0499fc291768ed98314c41c2740ab85"
  },
  {
    "url": "assets/js/tools/README.md.1a87eb64.js",
    "revision": "71374a06a7ead885830218874b04714d"
  },
  {
    "url": "assets/js/tools/README.md.1f42f597.js",
    "revision": "71374a06a7ead885830218874b04714d"
  },
  {
    "url": "assets/js/tools/README.md.2e402be4.js",
    "revision": "99c9852bd7cf21d6b42ea63de0b46a3d"
  },
  {
    "url": "assets/js/tools/README.md.40a2574f.js",
    "revision": "8f484fce2b75886ae12f53a2cbd07400"
  },
  {
    "url": "assets/js/tools/README.md.57434339.js",
    "revision": "64f74002a6cb0967835aede7b540eddd"
  },
  {
    "url": "assets/js/tools/README.md.65bab640.js",
    "revision": "8f484fce2b75886ae12f53a2cbd07400"
  },
  {
    "url": "assets/js/tools/README.md.9b28fc3f.js",
    "revision": "8f484fce2b75886ae12f53a2cbd07400"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.1a87eb64.js",
    "revision": "565b4341e3be5a555feba00c827c3162"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.1f42f597.js",
    "revision": "565b4341e3be5a555feba00c827c3162"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.2e402be4.js",
    "revision": "ae55c6818fb140993bfd1b0412e9eb23"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.40a2574f.js",
    "revision": "debdf08eb2494380a750e4cfceb6b860"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.57434339.js",
    "revision": "231aeb6b134cc46d1cc1b03572926d00"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.65bab640.js",
    "revision": "debdf08eb2494380a750e4cfceb6b860"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.9b28fc3f.js",
    "revision": "debdf08eb2494380a750e4cfceb6b860"
  },
  {
    "url": "assets/js/zh/config/README.MD.57434339.js",
    "revision": "81695b576c2ab20768cddc1b04a149c9"
  },
  {
    "url": "assets/js/zh/default-theme-config/README.MD.57434339.js",
    "revision": "864b244e7bca03ba409b8c2f28dc6f05"
  },
  {
    "url": "assets/js/zh/guide/cli.md.57434339.js",
    "revision": "b5433db5ab45caf7b7b90d33ebba7d07"
  },
  {
    "url": "assets/js/zh/guide/configuration.md.57434339.js",
    "revision": "2c81556d647e00460c9e5a063d208bfb"
  },
  {
    "url": "assets/js/zh/guide/getting-started.md.57434339.js",
    "revision": "9fe0f3d41c6afae9231cccbe37ed2fa2"
  },
  {
    "url": "assets/js/zh/guide/global-component.md.57434339.js",
    "revision": "85de97705308a00eb9dae86b28519572"
  },
  {
    "url": "assets/js/zh/guide/i18n.md.57434339.js",
    "revision": "ccac2d18d196d4d78cbdfaf6fc35fe18"
  },
  {
    "url": "assets/js/zh/guide/markdown.md.57434339.js",
    "revision": "070796091b0a1e6c0e6608b98e3ab419"
  },
  {
    "url": "assets/js/zh/guide/README.md.57434339.js",
    "revision": "4027447d3de7c956674608dea46b2400"
  },
  {
    "url": "assets/js/zh/guide/theme.md.57434339.js",
    "revision": "d379b80989c89df1cedbcd45ba68592f"
  },
  {
    "url": "assets/js/zh/guide/usejsx.md.57434339.js",
    "revision": "c94de826050b2e56a654a2e6d1698f0d"
  },
  {
    "url": "assets/js/zh/README.MD.57434339.js",
    "revision": "2a82d01c2bcb8de2ea65729fdba093e4"
  },
  {
    "url": "favicon.png",
    "revision": "e5437d0a310dfe91f9386d73d50a2884"
  },
  {
    "url": "images/react-dom-1.png",
    "revision": "ec7c5da7d1356b637071dfb4b6bcc895"
  },
  {
    "url": "index.html",
    "revision": "1b6e1c35aa1b8ffdf3be2c094c234cb1"
  },
  {
    "url": "plugins/index.js",
    "revision": "90146304b7c9894eb73e06fb01ee4d77"
  },
  {
    "url": "plugins/jquery.min.js",
    "revision": "a6b6350ee94a3ea74595c065cbf58af0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
'use strict';

/*
 * @author wangyi7099
 */

addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
