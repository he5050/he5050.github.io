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
    "url": "assets/css/16.styles.1881aa6b.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/16.styles.51149da0.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/17.styles.45589d09.css",
    "revision": "548cbcaedad894ba75f14d86bfb287b8"
  },
  {
    "url": "assets/css/17.styles.71b1f71a.css",
    "revision": "548cbcaedad894ba75f14d86bfb287b8"
  },
  {
    "url": "assets/css/8.styles.4d979e0d.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/8.styles.d4c0f0f8.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/styles.0c64c0c7.css",
    "revision": "cacf2ddad94e53358d2e4ef319c03a24"
  },
  {
    "url": "assets/css/styles.964bc7e6.css",
    "revision": "cacf2ddad94e53358d2e4ef319c03a24"
  },
  {
    "url": "assets/js/17.927c1e59.js",
    "revision": "4432eed59ca5ad33ccb7f6fefffa960d"
  },
  {
    "url": "assets/js/17.ea75b2dd.js",
    "revision": "4e58d6fbabbcd26900c100438fe0d2e3"
  },
  {
    "url": "assets/js/app.927c1e59.js",
    "revision": "57bc9028316d0e6b871c5c3e97061864"
  },
  {
    "url": "assets/js/app.ea75b2dd.js",
    "revision": "9fd6ecb57fb6a191db7732aadffccf1d"
  },
  {
    "url": "assets/js/codes/README.md.927c1e59.js",
    "revision": "f82dda2d1fbc238d92bda27d4cb1ed87"
  },
  {
    "url": "assets/js/codes/README.md.ea75b2dd.js",
    "revision": "c950da9ed5d4eaa8f37691ae4959ae35"
  },
  {
    "url": "assets/js/config/README.MD.927c1e59.js",
    "revision": "c9ed926eb5d5b814d41ed1f57f0f5351"
  },
  {
    "url": "assets/js/config/README.MD.ea75b2dd.js",
    "revision": "f01b506caaebbccd368edf6045b6d403"
  },
  {
    "url": "assets/js/css/boxshadow.md.927c1e59.js",
    "revision": "bbbaab68530c70b74f24da45a5ba99b0"
  },
  {
    "url": "assets/js/css/boxshadow.md.ea75b2dd.js",
    "revision": "46026b4006882d481c37c349c07e5e76"
  },
  {
    "url": "assets/js/css/btn.md.927c1e59.js",
    "revision": "2253a0d0f738d04994b9cf8e068b3b2c"
  },
  {
    "url": "assets/js/css/btn.md.ea75b2dd.js",
    "revision": "8aee0351dc0d9578f36b64ec5edff504"
  },
  {
    "url": "assets/js/css/README.md.927c1e59.js",
    "revision": "cb4db349d8427126b2f3ba8f389e6f70"
  },
  {
    "url": "assets/js/css/README.md.ea75b2dd.js",
    "revision": "17ecd380a05632281431d88a944f4e12"
  },
  {
    "url": "assets/js/demo/README.MD.927c1e59.js",
    "revision": "a592022d7b1e952a17d77c47ea41c370"
  },
  {
    "url": "assets/js/demo/README.MD.ea75b2dd.js",
    "revision": "3813007c90922c42d8722bd47f92986c"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.927c1e59.js",
    "revision": "aeb55673aef70d817a0e4c71ee0098b5"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.ea75b2dd.js",
    "revision": "4f55d86b049796d5f2d631a2b54e3997"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.927c1e59.js",
    "revision": "cb3ce333b856b535d19e87c1b4989549"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.ea75b2dd.js",
    "revision": "5a706303ce303b971237f7b647d42e79"
  },
  {
    "url": "assets/js/notes/README.md.927c1e59.js",
    "revision": "c30ee43c41397e8b8e89a211e22410bd"
  },
  {
    "url": "assets/js/notes/README.md.ea75b2dd.js",
    "revision": "9aaff59c3d5982bc14905650a24c2959"
  },
  {
    "url": "assets/js/notFoundWrapper.927c1e59.js",
    "revision": "17efd53e8df4f909477787cb6e9f3ae5"
  },
  {
    "url": "assets/js/notFoundWrapper.ea75b2dd.js",
    "revision": "d69f04e52ef43a4c39915ac2416318c8"
  },
  {
    "url": "assets/js/README.MD.927c1e59.js",
    "revision": "98c50d29cb52fd4c41e6d55053eb0799"
  },
  {
    "url": "assets/js/README.MD.ea75b2dd.js",
    "revision": "bb1473937f44bd01f25f3b487f963913"
  },
  {
    "url": "assets/js/tools/animation.md.927c1e59.js",
    "revision": "587dd321f3d3cfc55d255c629a36daff"
  },
  {
    "url": "assets/js/tools/animation.md.ea75b2dd.js",
    "revision": "cdd5cb319e3f7e94b66333323de5a956"
  },
  {
    "url": "assets/js/tools/codes.md.927c1e59.js",
    "revision": "8749bcfc54af3e2580a80eec2c4558e5"
  },
  {
    "url": "assets/js/tools/codes.md.ea75b2dd.js",
    "revision": "92f03fae235be0fa22198e2e36fdf292"
  },
  {
    "url": "assets/js/tools/react.md.927c1e59.js",
    "revision": "af5e9259bea05b7dacf9df6b46f30826"
  },
  {
    "url": "assets/js/tools/react.md.ea75b2dd.js",
    "revision": "7a57c28950b6ba05d41d5646a2a3ee90"
  },
  {
    "url": "assets/js/tools/README.md.927c1e59.js",
    "revision": "da428d5ea3dfdb880d475ae700ceefd0"
  },
  {
    "url": "assets/js/tools/README.md.ea75b2dd.js",
    "revision": "ae3a1cb8385288a08306a6d49f468e6c"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.927c1e59.js",
    "revision": "83d38f9c63e9cc1360bd2c7cff1bf517"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.ea75b2dd.js",
    "revision": "ca9d8574fb056f06464bdd71da1ea9b9"
  },
  {
    "url": "favicon.png",
    "revision": "e5437d0a310dfe91f9386d73d50a2884"
  },
  {
    "url": "images/anatomy-of-a-frame.jpg",
    "revision": "77dd40417b48679bce308950554f8d71"
  },
  {
    "url": "images/box-shadow.jpg",
    "revision": "43cca6fe3757baebabe720df2769db60"
  },
  {
    "url": "images/diff-1.png",
    "revision": "58fc2acb908f87d6af76670cd52762e9"
  },
  {
    "url": "images/diff-2.png",
    "revision": "2d507f28087e9130676ae2942b0d7cee"
  },
  {
    "url": "images/event-1.png",
    "revision": "002bec5ff4387130dd2324c49fd650b2"
  },
  {
    "url": "images/event-2.png",
    "revision": "f477f6e3bafbf54f931f36f2ed492f86"
  },
  {
    "url": "images/fiber-node-list.png",
    "revision": "d8684ba276aab978116a494d70753de7"
  },
  {
    "url": "images/fiber.png",
    "revision": "8911d7858efcd9bac38ad1889c9a1e25"
  },
  {
    "url": "images/font-a.gif",
    "revision": "03f91bd5d8ca8151f05ff9b030a6b6d6"
  },
  {
    "url": "images/leader-line.gif",
    "revision": "e6497937ae3ce1c660612b28988135dd"
  },
  {
    "url": "images/react-dom-1.png",
    "revision": "ec7c5da7d1356b637071dfb4b6bcc895"
  },
  {
    "url": "images/render-fiber-1.png",
    "revision": "a8bef7709c798efcbcda11f3e3b960d9"
  },
  {
    "url": "images/render-fiber-2.png",
    "revision": "b40f653e4adfafc61c0871d0267c6fe4"
  },
  {
    "url": "images/render-fiber-3.png",
    "revision": "cd984ab586964fb6678d7f99cce93aa6"
  },
  {
    "url": "images/requestIdleCallback.jpg",
    "revision": "a68befd50470cd1fb31b92799621ae0a"
  },
  {
    "url": "images/z.png",
    "revision": "e158c132381c2b353e4d7cffaa5b43ac"
  },
  {
    "url": "index.html",
    "revision": "8fe7f1698e3f45f19c9fde218fb3e018"
  },
  {
    "url": "plugins/Images.js",
    "revision": "a65465f7753309980a8cc283fac9a181"
  },
  {
    "url": "plugins/index.js",
    "revision": "ee44f5aedd9eab3af8b41ce8a1cf4b7e"
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
