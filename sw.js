if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>a(e,i),d={module:{uri:i},exports:n,require:r};s[i]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(f(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"clearBreeZee"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c05ddb46b0ff93c022683bef2cc4dd68"},{url:"assets/ErrorNotFound.075c0343.js",revision:"c53f5d3a29fae346300922b7f43f680d"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.8b0987ba.js",revision:"9e9e901eb9c9b68378c19fa659d61a6f"},{url:"assets/index.a70bfd36.css",revision:"aa910e9e29d541612299eb91201c1c1d"},{url:"assets/IndexPage.03b355ea.css",revision:"df2fbc614c02750952c2d7f4a44a3f3c"},{url:"assets/IndexPage.5af65bbf.js",revision:"6ba06d0c6673c53a2ab18e08c228d49b"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.47c09f46.js",revision:"08aab864211efacf83b7a0269ba6ac47"},{url:"assets/MainLayout.5695f000.css",revision:"6d5d7f3259641994e961794bbd3a7076"},{url:"assets/ManagePlaces.0d506445.css",revision:"4368a6ed9b8f21d9dd0910a76fa18ffc"},{url:"assets/ManagePlaces.ccd23d4d.js",revision:"a3fd40645cad196dcd76d58b87e75436"},{url:"assets/MapPage.4454a51b.js",revision:"be73a7a2f1c174ba138fbe67ecca53af"},{url:"assets/PersonalInfo.a52faace.js",revision:"b676a7f7f16b34d257579d43e70bb6ed"},{url:"assets/pinia.74ce1080.js",revision:"45438e8b2ab2f39d81f9c48911870075"},{url:"assets/QBtn.2690f711.js",revision:"ac7fd135431348b8875a8844f87645c6"},{url:"assets/QItem.db5f2284.js",revision:"7511b61833822c8473bcfe40ac1895f2"},{url:"assets/QPage.0dcb9678.js",revision:"2f426c04c49a01edfc08b2e99b4107c8"},{url:"assets/render.a3c16670.js",revision:"f8944178e8ef4f3030e989f71730cf74"},{url:"assets/SettingsPage.8cb25b37.js",revision:"3b9a123eb03acef6472ec8f07b8abd27"},{url:"assets/SettingsPage.b877dbba.css",revision:"b9835a3e530246543c98751d6f7bcd8f"},{url:"assets/store.fe52252a.js",revision:"8578fab540dff9f2763edc35fcc0c39d"},{url:"assets/use-dark.3e0d04cc.js",revision:"ec730eac0ca778049d50abcb31115e7a"},{url:"assets/use-form.e5e78cb8.js",revision:"1d751d4ea4eafaa9962f9c580330352c"},{url:"assets/use-router-link.6398e7af.js",revision:"e55a91ffe006aefcd22964ac2395843a"},{url:"assets/weatherApi.4ac83253.js",revision:"5c47f0a8e63b1a52c87f6c13f076f422"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"6d0009a1b90b59ddccff85977b48cb5b"},{url:"manifest.json",revision:"5e9d7451e0249eadf848ae1d759e7060"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
