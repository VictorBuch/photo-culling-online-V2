if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const a=e=>i(e,l),o={module:{uri:l},exports:t,require:a};s[l]=Promise.all(r.map((e=>o[e]||a(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"about.html",revision:"7afe4ee347975bc1315b3d3b5003f8f7"},{url:"assets/_...all_.c74887b8.js",revision:null},{url:"assets/404.52a969ed.js",revision:null},{url:"assets/about.109cd8c1.js",revision:null},{url:"assets/app.180921f6.css",revision:null},{url:"assets/app.5de35712.js",revision:null},{url:"assets/home.507c7b49.js",revision:null},{url:"assets/README.6bebb3f9.js",revision:null},{url:"assets/vendor.73441bcd.js",revision:null},{url:"assets/virtual_pwa-register.f11a3af1.js",revision:null},{url:"index.html",revision:"07243729fd11e207340203268f903138"},{url:"readme.html",revision:"306c48a76c59a08bba58bf8c5ba25f7d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"eaeac728bfdc90cd7e40e98c7bfbab20"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
