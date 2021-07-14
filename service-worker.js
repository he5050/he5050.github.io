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
    "revision": "e4bd566d490d2467d76d5510b70a1fbe"
  },
  {
    "url": "assets/css/10.styles.ea316586.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
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
    "url": "assets/css/17.styles.f19f5da4.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/18.styles.1dba581d.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/18.styles.fbe8e8d8.css",
    "revision": "548cbcaedad894ba75f14d86bfb287b8"
  },
  {
    "url": "assets/css/19.styles.67574f74.css",
    "revision": "a256260d5d994f826b8c5c896188e3c3"
  },
  {
    "url": "assets/css/19.styles.e559080c.css",
    "revision": "548cbcaedad894ba75f14d86bfb287b8"
  },
  {
    "url": "assets/css/20.styles.265d4abc.css",
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
    "url": "assets/css/9.styles.7b52e16e.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/9.styles.ccb9d6b6.css",
    "revision": "bc899469be12bca429987d238124d8bc"
  },
  {
    "url": "assets/css/styles.06ef928c.css",
    "revision": "66df658a706bed3721e833d05086a868"
  },
  {
    "url": "assets/css/styles.0c64c0c7.css",
    "revision": "cacf2ddad94e53358d2e4ef319c03a24"
  },
  {
    "url": "assets/css/styles.28051558.css",
    "revision": "66df658a706bed3721e833d05086a868"
  },
  {
    "url": "assets/css/styles.53ac65a7.css",
    "revision": "66df658a706bed3721e833d05086a868"
  },
  {
    "url": "assets/css/styles.964bc7e6.css",
    "revision": "cacf2ddad94e53358d2e4ef319c03a24"
  },
  {
    "url": "assets/css/styles.b1a05aad.css",
    "revision": "66df658a706bed3721e833d05086a868"
  },
  {
    "url": "assets/css/styles.b8d9dc79.css",
    "revision": "66df658a706bed3721e833d05086a868"
  },
  {
    "url": "assets/css/styles.c0f7ce81.css",
    "revision": "66df658a706bed3721e833d05086a868"
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
    "url": "assets/js/18.8936c9fa.js",
    "revision": "dde4f025e2395700d1cff3d30c7b7447"
  },
  {
    "url": "assets/js/18.9719a139.js",
    "revision": "dde4f025e2395700d1cff3d30c7b7447"
  },
  {
    "url": "assets/js/18.f5c1977b.js",
    "revision": "dde4f025e2395700d1cff3d30c7b7447"
  },
  {
    "url": "assets/js/19.ac2afe22.js",
    "revision": "be98d4fb3f08c47c6018af400d860fd0"
  },
  {
    "url": "assets/js/19.cd7291bc.js",
    "revision": "be98d4fb3f08c47c6018af400d860fd0"
  },
  {
    "url": "assets/js/20.d9936a7e.js",
    "revision": "b5c9e85b6d29a3aa0f73aadfe23aa508"
  },
  {
    "url": "assets/js/app.8936c9fa.js",
    "revision": "98e89289987ea0ed15c87b1930fa2100"
  },
  {
    "url": "assets/js/app.927c1e59.js",
    "revision": "57bc9028316d0e6b871c5c3e97061864"
  },
  {
    "url": "assets/js/app.9719a139.js",
    "revision": "e304dfcff5c81874dd6fb346cd21f569"
  },
  {
    "url": "assets/js/app.ac2afe22.js",
    "revision": "5dc27115036f5c7a16e9c10ff86e131a"
  },
  {
    "url": "assets/js/app.cd7291bc.js",
    "revision": "bf56e37aaa27327ff051826a3412db08"
  },
  {
    "url": "assets/js/app.d9936a7e.js",
    "revision": "06b88e4cedf45dc2bc8606ea3de2d58b"
  },
  {
    "url": "assets/js/app.ea75b2dd.js",
    "revision": "9fd6ecb57fb6a191db7732aadffccf1d"
  },
  {
    "url": "assets/js/app.f5c1977b.js",
    "revision": "dabd55baa4fc0d97d1d1b65156f12f90"
  },
  {
    "url": "assets/js/codes/README.md.8936c9fa.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/codes/README.md.927c1e59.js",
    "revision": "f82dda2d1fbc238d92bda27d4cb1ed87"
  },
  {
    "url": "assets/js/codes/README.md.9719a139.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/codes/README.md.ac2afe22.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/codes/README.md.cd7291bc.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/codes/README.md.d9936a7e.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/codes/README.md.ea75b2dd.js",
    "revision": "c950da9ed5d4eaa8f37691ae4959ae35"
  },
  {
    "url": "assets/js/codes/README.md.f5c1977b.js",
    "revision": "1f4d52e23556d0c4441829a8c7c3a3a3"
  },
  {
    "url": "assets/js/config/README.MD.8936c9fa.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/config/README.MD.927c1e59.js",
    "revision": "c9ed926eb5d5b814d41ed1f57f0f5351"
  },
  {
    "url": "assets/js/config/README.MD.9719a139.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/config/README.MD.ac2afe22.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/config/README.MD.cd7291bc.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/config/README.MD.d9936a7e.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/config/README.MD.ea75b2dd.js",
    "revision": "f01b506caaebbccd368edf6045b6d403"
  },
  {
    "url": "assets/js/config/README.MD.f5c1977b.js",
    "revision": "34b224821e14c66586eb0f3d78e0cce2"
  },
  {
    "url": "assets/js/css/boxshadow.md.8936c9fa.js",
    "revision": "a42c952e28d03e6dabe0efcbf7ee571c"
  },
  {
    "url": "assets/js/css/boxshadow.md.927c1e59.js",
    "revision": "bbbaab68530c70b74f24da45a5ba99b0"
  },
  {
    "url": "assets/js/css/boxshadow.md.9719a139.js",
    "revision": "f280cbd26cef23f6e103f2314f6a8acc"
  },
  {
    "url": "assets/js/css/boxshadow.md.ac2afe22.js",
    "revision": "f280cbd26cef23f6e103f2314f6a8acc"
  },
  {
    "url": "assets/js/css/boxshadow.md.cd7291bc.js",
    "revision": "f280cbd26cef23f6e103f2314f6a8acc"
  },
  {
    "url": "assets/js/css/boxshadow.md.d9936a7e.js",
    "revision": "f280cbd26cef23f6e103f2314f6a8acc"
  },
  {
    "url": "assets/js/css/boxshadow.md.ea75b2dd.js",
    "revision": "46026b4006882d481c37c349c07e5e76"
  },
  {
    "url": "assets/js/css/boxshadow.md.f5c1977b.js",
    "revision": "f280cbd26cef23f6e103f2314f6a8acc"
  },
  {
    "url": "assets/js/css/btn.md.8936c9fa.js",
    "revision": "a8bcccb6a65be2ef1fedc930b4418f79"
  },
  {
    "url": "assets/js/css/btn.md.927c1e59.js",
    "revision": "2253a0d0f738d04994b9cf8e068b3b2c"
  },
  {
    "url": "assets/js/css/btn.md.9719a139.js",
    "revision": "ce1c69fe74f38fcf1d699e3f9f843d01"
  },
  {
    "url": "assets/js/css/btn.md.ac2afe22.js",
    "revision": "ce1c69fe74f38fcf1d699e3f9f843d01"
  },
  {
    "url": "assets/js/css/btn.md.cd7291bc.js",
    "revision": "ce1c69fe74f38fcf1d699e3f9f843d01"
  },
  {
    "url": "assets/js/css/btn.md.d9936a7e.js",
    "revision": "ce1c69fe74f38fcf1d699e3f9f843d01"
  },
  {
    "url": "assets/js/css/btn.md.ea75b2dd.js",
    "revision": "8aee0351dc0d9578f36b64ec5edff504"
  },
  {
    "url": "assets/js/css/btn.md.f5c1977b.js",
    "revision": "ce1c69fe74f38fcf1d699e3f9f843d01"
  },
  {
    "url": "assets/js/css/filter.md.8936c9fa.js",
    "revision": "96ede31d77216175485b387e5323a0bb"
  },
  {
    "url": "assets/js/css/filter.md.9719a139.js",
    "revision": "8c0a6c81243284ec950f6973113f2438"
  },
  {
    "url": "assets/js/css/filter.md.ac2afe22.js",
    "revision": "8c0a6c81243284ec950f6973113f2438"
  },
  {
    "url": "assets/js/css/filter.md.cd7291bc.js",
    "revision": "8c0a6c81243284ec950f6973113f2438"
  },
  {
    "url": "assets/js/css/filter.md.d9936a7e.js",
    "revision": "8c0a6c81243284ec950f6973113f2438"
  },
  {
    "url": "assets/js/css/filter.md.f5c1977b.js",
    "revision": "8c0a6c81243284ec950f6973113f2438"
  },
  {
    "url": "assets/js/css/README.md.8936c9fa.js",
    "revision": "18c0085d5d32974c1074f9fbcccfccf2"
  },
  {
    "url": "assets/js/css/README.md.927c1e59.js",
    "revision": "cb4db349d8427126b2f3ba8f389e6f70"
  },
  {
    "url": "assets/js/css/README.md.9719a139.js",
    "revision": "33fd34058425765ec5f860990338a822"
  },
  {
    "url": "assets/js/css/README.md.ac2afe22.js",
    "revision": "33fd34058425765ec5f860990338a822"
  },
  {
    "url": "assets/js/css/README.md.cd7291bc.js",
    "revision": "33fd34058425765ec5f860990338a822"
  },
  {
    "url": "assets/js/css/README.md.d9936a7e.js",
    "revision": "33fd34058425765ec5f860990338a822"
  },
  {
    "url": "assets/js/css/README.md.ea75b2dd.js",
    "revision": "17ecd380a05632281431d88a944f4e12"
  },
  {
    "url": "assets/js/css/README.md.f5c1977b.js",
    "revision": "33fd34058425765ec5f860990338a822"
  },
  {
    "url": "assets/js/css/safeArea.md.9719a139.js",
    "revision": "b260fa4f2902853b207a51349941bea8"
  },
  {
    "url": "assets/js/css/safeArea.md.ac2afe22.js",
    "revision": "b260fa4f2902853b207a51349941bea8"
  },
  {
    "url": "assets/js/css/safeArea.md.cd7291bc.js",
    "revision": "b260fa4f2902853b207a51349941bea8"
  },
  {
    "url": "assets/js/css/safeArea.md.d9936a7e.js",
    "revision": "b260fa4f2902853b207a51349941bea8"
  },
  {
    "url": "assets/js/css/safeArea.md.f5c1977b.js",
    "revision": "b260fa4f2902853b207a51349941bea8"
  },
  {
    "url": "assets/js/demo/README.MD.8936c9fa.js",
    "revision": "503c162b9585091f4a0096924fdafd88"
  },
  {
    "url": "assets/js/demo/README.MD.927c1e59.js",
    "revision": "a592022d7b1e952a17d77c47ea41c370"
  },
  {
    "url": "assets/js/demo/README.MD.ac2afe22.js",
    "revision": "99ef96d74b74e18385f9beced5287a3f"
  },
  {
    "url": "assets/js/demo/README.MD.cd7291bc.js",
    "revision": "99ef96d74b74e18385f9beced5287a3f"
  },
  {
    "url": "assets/js/demo/README.MD.ea75b2dd.js",
    "revision": "3813007c90922c42d8722bd47f92986c"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.8936c9fa.js",
    "revision": "db3c042d2ae9f7eb23793a3988c68748"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.927c1e59.js",
    "revision": "aeb55673aef70d817a0e4c71ee0098b5"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.9719a139.js",
    "revision": "c8be4e40dac66ef1a9d9238ed1cd9895"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.ac2afe22.js",
    "revision": "84e93843d1eef690085ad951288225f3"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.cd7291bc.js",
    "revision": "84e93843d1eef690085ad951288225f3"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.d9936a7e.js",
    "revision": "c8be4e40dac66ef1a9d9238ed1cd9895"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.ea75b2dd.js",
    "revision": "4f55d86b049796d5f2d631a2b54e3997"
  },
  {
    "url": "assets/js/notes/2021-06-25.md.f5c1977b.js",
    "revision": "c8be4e40dac66ef1a9d9238ed1cd9895"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.8936c9fa.js",
    "revision": "a0e91d16067f40409f078261e118f6e1"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.927c1e59.js",
    "revision": "cb3ce333b856b535d19e87c1b4989549"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.9719a139.js",
    "revision": "bb44136ed2d8c8f2561dad05a884569b"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.ac2afe22.js",
    "revision": "53884216c366f344deb7f2340fe12436"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.cd7291bc.js",
    "revision": "53884216c366f344deb7f2340fe12436"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.d9936a7e.js",
    "revision": "bb44136ed2d8c8f2561dad05a884569b"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.ea75b2dd.js",
    "revision": "5a706303ce303b971237f7b647d42e79"
  },
  {
    "url": "assets/js/notes/2021-07-12.md.f5c1977b.js",
    "revision": "bb44136ed2d8c8f2561dad05a884569b"
  },
  {
    "url": "assets/js/notes/2021-07-13.md.d9936a7e.js",
    "revision": "a63e8a4563f5ccd6bcccb69100488b61"
  },
  {
    "url": "assets/js/notes/2021-07-14.md.d9936a7e.js",
    "revision": "76c9f524520eeb8a2a6a22c2256ac689"
  },
  {
    "url": "assets/js/notes/README.md.8936c9fa.js",
    "revision": "1ec5b63666efb3102cbbf0448ad68a56"
  },
  {
    "url": "assets/js/notes/README.md.927c1e59.js",
    "revision": "c30ee43c41397e8b8e89a211e22410bd"
  },
  {
    "url": "assets/js/notes/README.md.9719a139.js",
    "revision": "e97eb9c221df84fb0f8e86f711d96630"
  },
  {
    "url": "assets/js/notes/README.md.ac2afe22.js",
    "revision": "014720a5f546d6802c351eaef0a81c3a"
  },
  {
    "url": "assets/js/notes/README.md.cd7291bc.js",
    "revision": "014720a5f546d6802c351eaef0a81c3a"
  },
  {
    "url": "assets/js/notes/README.md.d9936a7e.js",
    "revision": "23f9f5c473fcdc80fcf70969c814fd5c"
  },
  {
    "url": "assets/js/notes/README.md.ea75b2dd.js",
    "revision": "9aaff59c3d5982bc14905650a24c2959"
  },
  {
    "url": "assets/js/notes/README.md.f5c1977b.js",
    "revision": "e97eb9c221df84fb0f8e86f711d96630"
  },
  {
    "url": "assets/js/notFoundWrapper.8936c9fa.js",
    "revision": "692248aaeb5d4e3c63fc29a893bf1c86"
  },
  {
    "url": "assets/js/notFoundWrapper.927c1e59.js",
    "revision": "17efd53e8df4f909477787cb6e9f3ae5"
  },
  {
    "url": "assets/js/notFoundWrapper.9719a139.js",
    "revision": "692248aaeb5d4e3c63fc29a893bf1c86"
  },
  {
    "url": "assets/js/notFoundWrapper.ac2afe22.js",
    "revision": "e562def0f883155f920363f3788b678e"
  },
  {
    "url": "assets/js/notFoundWrapper.cd7291bc.js",
    "revision": "e562def0f883155f920363f3788b678e"
  },
  {
    "url": "assets/js/notFoundWrapper.d9936a7e.js",
    "revision": "8bc2ee34bc722fa4108ea8b42d56418e"
  },
  {
    "url": "assets/js/notFoundWrapper.ea75b2dd.js",
    "revision": "d69f04e52ef43a4c39915ac2416318c8"
  },
  {
    "url": "assets/js/notFoundWrapper.f5c1977b.js",
    "revision": "692248aaeb5d4e3c63fc29a893bf1c86"
  },
  {
    "url": "assets/js/README.MD.8936c9fa.js",
    "revision": "1502cbc17460173dfce3762c51521a88"
  },
  {
    "url": "assets/js/README.MD.927c1e59.js",
    "revision": "98c50d29cb52fd4c41e6d55053eb0799"
  },
  {
    "url": "assets/js/README.MD.9719a139.js",
    "revision": "820a2e0d332fc1870d3f2d25c4b52598"
  },
  {
    "url": "assets/js/README.MD.ac2afe22.js",
    "revision": "820a2e0d332fc1870d3f2d25c4b52598"
  },
  {
    "url": "assets/js/README.MD.cd7291bc.js",
    "revision": "820a2e0d332fc1870d3f2d25c4b52598"
  },
  {
    "url": "assets/js/README.MD.d9936a7e.js",
    "revision": "f60b784c6821e29199eb79619ba2ded7"
  },
  {
    "url": "assets/js/README.MD.ea75b2dd.js",
    "revision": "bb1473937f44bd01f25f3b487f963913"
  },
  {
    "url": "assets/js/README.MD.f5c1977b.js",
    "revision": "257d335ee743e07be99c296010d1a4b2"
  },
  {
    "url": "assets/js/tools/animation.md.8936c9fa.js",
    "revision": "23f84e8f58b4b44a58dbb1bd95d6ed94"
  },
  {
    "url": "assets/js/tools/animation.md.927c1e59.js",
    "revision": "587dd321f3d3cfc55d255c629a36daff"
  },
  {
    "url": "assets/js/tools/animation.md.9719a139.js",
    "revision": "23f84e8f58b4b44a58dbb1bd95d6ed94"
  },
  {
    "url": "assets/js/tools/animation.md.ac2afe22.js",
    "revision": "36a0bb5a850a0f8d888700a9c39289e1"
  },
  {
    "url": "assets/js/tools/animation.md.cd7291bc.js",
    "revision": "36a0bb5a850a0f8d888700a9c39289e1"
  },
  {
    "url": "assets/js/tools/animation.md.d9936a7e.js",
    "revision": "5fca34b72d6e96e7f7f8e3f60d4a6aa2"
  },
  {
    "url": "assets/js/tools/animation.md.ea75b2dd.js",
    "revision": "cdd5cb319e3f7e94b66333323de5a956"
  },
  {
    "url": "assets/js/tools/animation.md.f5c1977b.js",
    "revision": "23f84e8f58b4b44a58dbb1bd95d6ed94"
  },
  {
    "url": "assets/js/tools/codes.md.8936c9fa.js",
    "revision": "83ff8525b2f3a6c78c43d6d654f4b556"
  },
  {
    "url": "assets/js/tools/codes.md.927c1e59.js",
    "revision": "8749bcfc54af3e2580a80eec2c4558e5"
  },
  {
    "url": "assets/js/tools/codes.md.9719a139.js",
    "revision": "83ff8525b2f3a6c78c43d6d654f4b556"
  },
  {
    "url": "assets/js/tools/codes.md.ac2afe22.js",
    "revision": "ccbfb8cff0bd348ed0459c786ac844ac"
  },
  {
    "url": "assets/js/tools/codes.md.cd7291bc.js",
    "revision": "ccbfb8cff0bd348ed0459c786ac844ac"
  },
  {
    "url": "assets/js/tools/codes.md.d9936a7e.js",
    "revision": "865df38d1554a0769daebc44c5f1bc62"
  },
  {
    "url": "assets/js/tools/codes.md.ea75b2dd.js",
    "revision": "92f03fae235be0fa22198e2e36fdf292"
  },
  {
    "url": "assets/js/tools/codes.md.f5c1977b.js",
    "revision": "83ff8525b2f3a6c78c43d6d654f4b556"
  },
  {
    "url": "assets/js/tools/react.md.8936c9fa.js",
    "revision": "b6f92e088c32936bbd3ae4f89d4faa42"
  },
  {
    "url": "assets/js/tools/react.md.927c1e59.js",
    "revision": "af5e9259bea05b7dacf9df6b46f30826"
  },
  {
    "url": "assets/js/tools/react.md.9719a139.js",
    "revision": "b6f92e088c32936bbd3ae4f89d4faa42"
  },
  {
    "url": "assets/js/tools/react.md.ac2afe22.js",
    "revision": "d766cd40edd7c4d2dc1ce550187050d4"
  },
  {
    "url": "assets/js/tools/react.md.cd7291bc.js",
    "revision": "d766cd40edd7c4d2dc1ce550187050d4"
  },
  {
    "url": "assets/js/tools/react.md.d9936a7e.js",
    "revision": "e286de63120fc010a26e6472f11d6e78"
  },
  {
    "url": "assets/js/tools/react.md.ea75b2dd.js",
    "revision": "7a57c28950b6ba05d41d5646a2a3ee90"
  },
  {
    "url": "assets/js/tools/react.md.f5c1977b.js",
    "revision": "b6f92e088c32936bbd3ae4f89d4faa42"
  },
  {
    "url": "assets/js/tools/README.md.8936c9fa.js",
    "revision": "31ef4ddcdb2d9a504eb964ccd0c784e6"
  },
  {
    "url": "assets/js/tools/README.md.927c1e59.js",
    "revision": "da428d5ea3dfdb880d475ae700ceefd0"
  },
  {
    "url": "assets/js/tools/README.md.9719a139.js",
    "revision": "31ef4ddcdb2d9a504eb964ccd0c784e6"
  },
  {
    "url": "assets/js/tools/README.md.ac2afe22.js",
    "revision": "8bc02dc22f7a9d59ea019c1f6cfecd1e"
  },
  {
    "url": "assets/js/tools/README.md.cd7291bc.js",
    "revision": "8bc02dc22f7a9d59ea019c1f6cfecd1e"
  },
  {
    "url": "assets/js/tools/README.md.d9936a7e.js",
    "revision": "2a07e0d7dc2848360d86d39c9feec7b7"
  },
  {
    "url": "assets/js/tools/README.md.ea75b2dd.js",
    "revision": "ae3a1cb8385288a08306a6d49f468e6c"
  },
  {
    "url": "assets/js/tools/README.md.f5c1977b.js",
    "revision": "31ef4ddcdb2d9a504eb964ccd0c784e6"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.8936c9fa.js",
    "revision": "05794ecec288be593a9e6551dde0ef5e"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.927c1e59.js",
    "revision": "83d38f9c63e9cc1360bd2c7cff1bf517"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.9719a139.js",
    "revision": "05794ecec288be593a9e6551dde0ef5e"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.ac2afe22.js",
    "revision": "4b7a56119ab6b4160bb8393b67d59952"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.cd7291bc.js",
    "revision": "4b7a56119ab6b4160bb8393b67d59952"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.d9936a7e.js",
    "revision": "716a009cf2b4aea9acf5242f3d77649b"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.ea75b2dd.js",
    "revision": "ca9d8574fb056f06464bdd71da1ea9b9"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.f5c1977b.js",
    "revision": "05794ecec288be593a9e6551dde0ef5e"
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
    "url": "images/filter.jpg",
    "revision": "768dca8cd30b4f8d46f5e227c917bc6e"
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
    "revision": "3edecf9751af30bc43930ecca7a165a6"
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
