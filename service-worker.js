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
    "url": "antd-icon.svg",
    "revision": "b29324c45ced02ca418e097ae8f52c77"
  },
  {
    "url": "assets/css/12.styles.2f694f38.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/21.styles.f524e16b.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.eeaebc40.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/8.styles.ff1e5ea7.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/styles.aff1168d.css",
    "revision": "829ecfe019fc6156601ef1313a817436"
  },
  {
    "url": "assets/js/21.8a79e042.js",
    "revision": "e36a93b32cace83559c205535a0e524e"
  },
  {
    "url": "assets/js/app.8a79e042.js",
    "revision": "69850b2d02e1ed1efd6a53ff8145a3bf"
  },
  {
    "url": "assets/js/codes/README.md.8a79e042.js",
    "revision": "3318ebb10e2313090048c65004e44163"
  },
  {
    "url": "assets/js/config/README.MD.8a79e042.js",
    "revision": "c5695689e0741350cd3df905432bf007"
  },
  {
    "url": "assets/js/notes/README.md.8a79e042.js",
    "revision": "4d97fd67b0bdaf355f755009ff0cc9d4"
  },
  {
    "url": "assets/js/notFoundWrapper.8a79e042.js",
    "revision": "42b87adc3eb84d118cb6c9ba136cf30d"
  },
  {
    "url": "assets/js/README.MD.8a79e042.js",
    "revision": "45d13ba8b7951385c88b4b5278243d3b"
  },
  {
    "url": "assets/js/tools/react.md.8a79e042.js",
    "revision": "680deaf85fc216673c25d384fad8bd8b"
  },
  {
    "url": "assets/js/tools/README.md.8a79e042.js",
    "revision": "03eea0b288796e2574fefc5f1084fd06"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.8a79e042.js",
    "revision": "b59d278ac690a23af6d9de3d4ce9ebee"
  },
  {
    "url": "assets/js/zh/config/README.MD.8a79e042.js",
    "revision": "ecd8209d4bc1bddda6e7e0c5df4c9625"
  },
  {
    "url": "assets/js/zh/default-theme-config/README.MD.8a79e042.js",
    "revision": "636e47b478b4fc46b5f157e099cbd26a"
  },
  {
    "url": "assets/js/zh/guide/cli.md.8a79e042.js",
    "revision": "2e7a3e2313f1c26ebc7d0339de022581"
  },
  {
    "url": "assets/js/zh/guide/configuration.md.8a79e042.js",
    "revision": "fd27a0cfbea9307caadc91bbd764ef10"
  },
  {
    "url": "assets/js/zh/guide/getting-started.md.8a79e042.js",
    "revision": "cc604f19b91c6a1a0d86789678ff2ea9"
  },
  {
    "url": "assets/js/zh/guide/global-component.md.8a79e042.js",
    "revision": "445aac028c5c66dc8b8b82ae148f70fb"
  },
  {
    "url": "assets/js/zh/guide/i18n.md.8a79e042.js",
    "revision": "dcc5a852c90af426a131f6ef7727e994"
  },
  {
    "url": "assets/js/zh/guide/markdown.md.8a79e042.js",
    "revision": "701cdb5071fbba9e179be1170528fabf"
  },
  {
    "url": "assets/js/zh/guide/README.md.8a79e042.js",
    "revision": "53f99a568b6d61fb307e996406427588"
  },
  {
    "url": "assets/js/zh/guide/theme.md.8a79e042.js",
    "revision": "a5921bfb1fd9311a2b34f3108cf715fa"
  },
  {
    "url": "assets/js/zh/guide/usejsx.md.8a79e042.js",
    "revision": "b157b3a4683b8df1cf25c97f1bd7fe2d"
  },
  {
    "url": "assets/js/zh/README.MD.8a79e042.js",
    "revision": "55a646f431774a90b057af58d31bb54f"
  },
  {
    "url": "favicon.png",
    "revision": "e5437d0a310dfe91f9386d73d50a2884"
  },
  {
    "url": "index.html",
    "revision": "688d6ae2430a36e05f4a112041c5d42c"
  },
  {
    "url": "logo-192x192.png",
    "revision": "408a39095517e5d60c097291a978c8be"
  },
  {
    "url": "logo-512x512.png",
    "revision": "1aca51fe5437cc1447d6f8301cf4bad0"
  },
  {
    "url": "output1.png",
    "revision": "ddbf357e07db4a0619cc5c372ac84988"
  },
  {
    "url": "output2.png",
    "revision": "efc02edc8ebe9a3173bf9a6aaf228a66"
  },
  {
    "url": "react-icon.svg",
    "revision": "870dd44447c181e170fafbcc7caf0da3"
  },
  {
    "url": "screenshot-1.png",
    "revision": "328caac5d4fff680e480955c11c1c1f4"
  },
  {
    "url": "screenshot.png",
    "revision": "a46dee3ad81dd8c8a520e2a3291040f8"
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
