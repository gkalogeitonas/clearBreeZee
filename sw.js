if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const r=e=>c(e,f),d={module:{uri:f},exports:n,require:r};s[f]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"clearBreeZee"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c05ddb46b0ff93c022683bef2cc4dd68"},{url:"assets/ErrorNotFound.6a8cb33f.js",revision:"e64c11a72d1d5f7876974b14ffe71c12"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.a70bfd36.css",revision:"aa910e9e29d541612299eb91201c1c1d"},{url:"assets/index.f3ef414f.js",revision:"5e34f8d8e9248886ec9722cd9413ace0"},{url:"assets/IndexPage.03b355ea.css",revision:"df2fbc614c02750952c2d7f4a44a3f3c"},{url:"assets/IndexPage.849a2333.js",revision:"19705f7b87e1e67e274742188807345b"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.5695f000.css",revision:"6d5d7f3259641994e961794bbd3a7076"},{url:"assets/MainLayout.89080925.js",revision:"d352ca09772fcd2c987058880ee8b520"},{url:"assets/ManagePlaces.0d506445.css",revision:"4368a6ed9b8f21d9dd0910a76fa18ffc"},{url:"assets/ManagePlaces.d7bbbbf1.js",revision:"17c5cd9edf8ed5cbdbf6e474f53591cd"},{url:"assets/MapPage.315ee0c2.js",revision:"21a5df9a96fbc0152ec898c14681026d"},{url:"assets/PersonalInfo.69751c8a.css",revision:"b358a4566e7d5c66373121bf2736b37c"},{url:"assets/PersonalInfo.98073bc6.js",revision:"c971dc62bb67253a639c995740b2cc99"},{url:"assets/pinia.c11c6b7d.js",revision:"a38a5cd8a497d95c375716679e4146b2"},{url:"assets/QBtn.821f7db2.js",revision:"856ede3f299ba6c2c39c90b928a54f3b"},{url:"assets/QItem.7241ac55.js",revision:"e319107ab7315016abc6a854a6648e0e"},{url:"assets/QPage.1c86410a.js",revision:"f032f3f457b18a2e9336f304ce00016f"},{url:"assets/QSlider.43fbd181.js",revision:"60d590f28ca37b30018d8746190ae50e"},{url:"assets/render.476c5e8b.js",revision:"a16fdd8c8af4226ce0a594e4f7e2e731"},{url:"assets/SettingsPage.0bf6f227.js",revision:"6cb47d3a264d9d2a4322f0302ba7db65"},{url:"assets/SettingsPage.b877dbba.css",revision:"b9835a3e530246543c98751d6f7bcd8f"},{url:"assets/SettingsPage2.62516d30.css",revision:"56c4211b17e5a8821f8cd696b9dbb7b3"},{url:"assets/SettingsPage2.edc9b653.js",revision:"5a4123e0a1cceaee34d40ac47c399cb5"},{url:"assets/store.1cc66d11.js",revision:"d127aff29ca6037f56bcf01f63c9ce91"},{url:"assets/use-dark.3c8d67bf.js",revision:"7c28c09651b8a544d12644ebb4ebf71b"},{url:"assets/use-form.2e22a3ef.js",revision:"3864ab99d2c64b23d73992101b964c9d"},{url:"assets/use-router-link.e36165eb.js",revision:"d35a367078f746cc812f244af01ea7b2"},{url:"assets/weatherApi.4ac83253.js",revision:"5c47f0a8e63b1a52c87f6c13f076f422"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"b3781ea0f420e2874c3f705dc8caeaee"},{url:"manifest.json",revision:"5e9d7451e0249eadf848ae1d759e7060"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
