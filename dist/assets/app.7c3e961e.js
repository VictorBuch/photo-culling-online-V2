var $=Object.defineProperty,P=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var C=(t,e,r)=>e in t?$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))L.call(e,r)&&C(t,r,e[r]);if(A)for(var r of A(e))F.call(e,r)&&C(t,r,e[r]);return t},S=(t,e)=>P(t,D(e));import{c as H,N as j,a as N,o as s,b as c,d as a,e as d,f as O,n as I,g as f,F as p,t as g,r as x,h as R,w as b,i as B,j as U,k as w,l as V,u as W,V as K}from"./vendor.73441bcd.js";const G=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(l){if(l.ep)return;l.ep=!0;const n=r(l);fetch(l.href,n)}};G();var Z={button:{about:t=>{const{normalize:e}=t;return e(["\xDCber"])},back:t=>{const{normalize:e}=t;return e(["Zur\xFCck"])},go:t=>{const{normalize:e}=t;return e(["Los"])},home:t=>{const{normalize:e}=t;return e(["Startseite"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Dunkelmodus umschalten"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Sprachen \xE4ndern"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo einer dynamischen Route"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Hi, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Auch bekannt als"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Wie hei\xDFt du?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nicht gefunden"])}},q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z}),J={button:{about:t=>{const{normalize:e}=t;return e(["About"])},back:t=>{const{normalize:e}=t;return e(["Back"])},go:t=>{const{normalize:e}=t;return e(["GO"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Toggle dark mode"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Change languages"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opinionated Vite Starter Template"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo of dynamic route"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Hi, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Also known as"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["What's your name?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Not found"])}},Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J}),X={button:{about:t=>{const{normalize:e}=t;return e(["Acerca de"])},back:t=>{const{normalize:e}=t;return e(["Atr\xE1s"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["Inicio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo oscuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambiar idiomas"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Plantilla de Inicio de Vite Dogm\xE1tica"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo de ruta din\xE1mica"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["\xA1Hola, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tambi\xE9n conocido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\xBFC\xF3mo te llamas?"])}},"not-found":t=>{const{normalize:e}=t;return e(["No se ha encontrado"])}},Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X}),ee={button:{about:t=>{const{normalize:e}=t;return e(["\xC0 propos de"])},back:t=>{const{normalize:e}=t;return e(["Retour"])},go:t=>{const{normalize:e}=t;return e(["Essayer"])},home:t=>{const{normalize:e}=t;return e(["Accueil"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Basculer en mode sombre"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Changer de langue"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Exemple d'application Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["D\xE9mo de route dynamique"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Salut, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Aussi connu sous le nom de"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Comment t'appelles-tu ?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Page non trouv\xE9e"])}},te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ee}),re={button:{about:t=>{const{normalize:e}=t;return e(["Tentang"])},back:t=>{const{normalize:e}=t;return e(["Kembali"])},go:t=>{const{normalize:e}=t;return e(["Pergi"])},home:t=>{const{normalize:e}=t;return e(["Beranda"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Ubah ke mode gelap"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Ubah bahasa"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Template awal vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Contoh rute dinamik"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Halo, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Juga diketahui sebagai"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Siapa nama anda?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Tidak ditemukan"])}},ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re}),oe={button:{about:t=>{const{normalize:e}=t;return e(["Su di me"])},back:t=>{const{normalize:e}=t;return e(["Indietro"])},go:t=>{const{normalize:e}=t;return e(["Vai"])},home:t=>{const{normalize:e}=t;return e(["Home"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Cambia lingua"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modello per una Applicazione Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demo di rotta dinamica"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Ciao, ",r(o("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Come ti chiami?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Non trovato"])}},ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:oe}),le={button:{about:t=>{const{normalize:e}=t;return e(["\u3053\u308C\u306F\uFF1F"])},back:t=>{const{normalize:e}=t;return e(["\u623B\u308B"])},go:t=>{const{normalize:e}=t;return e(["\u9032\u3080"])},home:t=>{const{normalize:e}=t;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",r(o("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u541B\u306E\u540D\u306F\u3002"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),ie={button:{about:t=>{const{normalize:e}=t;return e(["\uC18C\uAC1C"])},back:t=>{const{normalize:e}=t;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:t=>{const{normalize:e}=t;return e(["\uC774\uB3D9"])},home:t=>{const{normalize:e}=t;return e(["\uD648"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["\uC548\uB155, ",r(o("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),me={button:{about:t=>{const{normalize:e}=t;return e(["O nas"])},back:t=>{const{normalize:e}=t;return e(["Wr\xF3\u0107"])},go:t=>{const{normalize:e}=t;return e(["WEJD\u0179"])},home:t=>{const{normalize:e}=t;return e(["Strona g\u0142\xF3wna"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Ustaw tryb nocny"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Opiniowany szablon startowy Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstracja dynamicznego route"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Cze\u015B\u0107, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Znany te\u017C jako"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Jak masz na imi\u0119?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Nie znaleziono"])}},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me}),de={button:{about:t=>{const{normalize:e}=t;return e(["Sobre"])},back:t=>{const{normalize:e}=t;return e(["Voltar"])},go:t=>{const{normalize:e}=t;return e(["Ir"])},home:t=>{const{normalize:e}=t;return e(["In\xEDcio"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Alternar modo escuro"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Mudar de idioma"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Ol\xE1, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Tamb\xE9m conhecido como"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Qual \xE9 o seu nome?"])}},"not-found":t=>{const{normalize:e}=t;return e(["N\xE3o encontrado"])}},_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de}),ge={button:{about:t=>{const{normalize:e}=t;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:t=>{const{normalize:e}=t;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:t=>{const{normalize:e}=t;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:t=>{const{normalize:e}=t;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",r(o("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),pe={button:{about:t=>{const{normalize:e}=t;return e(["Hakk\u0131mda"])},back:t=>{const{normalize:e}=t;return e(["Geri"])},go:t=>{const{normalize:e}=t;return e(["\u0130LER\u0130"])},home:t=>{const{normalize:e}=t;return e(["Anasayfa"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["Dinamik rota demosu"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Merhaba, ",r(o("name")),"!"])},aka:t=>{const{normalize:e}=t;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["Ad\u0131n\u0131z nedir?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Bulunamad\u0131"])}},ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe}),fe={button:{about:t=>{const{normalize:e}=t;return e(["V\u1EC1"])},back:t=>{const{normalize:e}=t;return e(["Quay l\u1EA1i"])},go:t=>{const{normalize:e}=t;return e(["\u0110i"])},home:t=>{const{normalize:e}=t;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:t=>{const{normalize:e}=t;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:t=>{const{normalize:e}=t;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Hi, ",r(o("name")),"!"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},"not-found":t=>{const{normalize:e}=t;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe}),ye={button:{about:t=>{const{normalize:e}=t;return e(["\u5173\u4E8E"])},back:t=>{const{normalize:e}=t;return e(["\u8FD4\u56DE"])},go:t=>{const{normalize:e}=t;return e(["\u786E\u5B9A"])},home:t=>{const{normalize:e}=t;return e(["\u9996\u9875"])},toggle_dark:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:t=>{const{normalize:e}=t;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:t=>{const{normalize:e}=t;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":t=>{const{normalize:e}=t;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["\u4F60\u597D\uFF0C",r(o("name"))])},aka:t=>{const{normalize:e}=t;return e(["\u4E5F\u53EB"])},"whats-your-name":t=>{const{normalize:e}=t;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":t=>{const{normalize:e}=t;return e(["\u672A\u627E\u5230\u9875\u9762"])}},ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye});const xe=Object.fromEntries(Object.entries({"../../locales/de.yml":q,"../../locales/en.yml":Q,"../../locales/es.yml":Y,"../../locales/fr.yml":te,"../../locales/id.yml":ne,"../../locales/it.yml":ae,"../../locales/ja.yml":se,"../../locales/ko.yml":ce,"../../locales/pl.yml":ue,"../../locales/pt-BR.yml":_e,"../../locales/ru.yml":he,"../../locales/tr.yml":ze,"../../locales/vi.yml":be,"../../locales/zh-CN.yml":ve}).map(([t,e])=>{const r=t.endsWith(".yaml");return[t.slice(14,r?-5:-4),e.default]})),we=({app:t})=>{const e=H({legacy:!1,locale:"en",messages:xe});t.use(e)};var Ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:we});const Ae=({isClient:t,router:e})=>{t&&(e.beforeEach(()=>{j.start()}),e.afterEach(()=>{j.done()}))};var Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ae});const ke=({isClient:t,initialState:e,app:r})=>{const o=N();r.use(o),t?o.state.value=e.pinia||{}:e.pinia=o.state.value};var Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:ke});const je="modulepreload",T={},Oe="/photo-culling-online-V2./",y=function(e,r){return!r||r.length===0?e():Promise.all(r.map(o=>{if(o=`${Oe}${o}`,o in T)return;T[o]=!0;const l=o.endsWith(".css"),n=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const i=document.createElement("link");if(i.rel=l?"stylesheet":je,l||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),l)return new Promise((u,v)=>{i.addEventListener("load",u),i.addEventListener("error",v)})})).then(()=>e())},Ve=({isClient:t,router:e})=>{!t||e.isReady().then(async()=>{const{registerSW:r}=await y(()=>import("./virtual_pwa-register.069a6f66.js"),[]);r({immediate:!0})})};var Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ve}),h=(t,e)=>{const r=t.__vccOpts||t;for(const[o,l]of e)r[o]=l;return r};const Ee={props:["clusterArray","currentClusterIndex"],emits:["previousCluster","nextCluster"],data(){return{}},computed:{existsPreviousCluster(){return this.clusterArray[this.currentClusterIndex-1]!==void 0},existsNextCluster(){return this.clusterArray[this.currentClusterIndex+1]!==void 0}}},Me={class:"flex flex-col items-center justify-center"},$e=["src"],Pe={class:"flex flex-col w-5/6 h-full overflow-hidden justify-center items-center"},De=["src"],Le=["src"];function Fe(t,e,r,o,l,n){return s(),c("div",Me,[n.existsPreviousCluster?(s(),c("div",{key:0,class:"flex flex-col w-4/6 h-full overflow-hidden justify-center items-center",onClick:e[0]||(e[0]=i=>t.$emit("previousCluster"))},[a("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:r.clusterArray[r.currentClusterIndex-1][0].blob,alt:"",srcset:""},null,8,$e)])):d("",!0),a("div",Pe,[a("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:r.clusterArray[r.currentClusterIndex][0].blob,alt:"",srcset:""},null,8,De)]),n.existsNextCluster?(s(),c("div",{key:1,class:"flex flex-col w-4/6 h-full overflow-hidden justify-center items-center",onClick:e[1]||(e[1]=i=>t.$emit("nextCluster"))},[a("img",{class:"object-contain aspect-auto rounded m-4 cursor-pointer border border-dark-300 hover:border-light-800 hover:border",src:r.clusterArray[r.currentClusterIndex+1][0].blob,alt:"",srcset:""},null,8,Le)])):d("",!0)])}var He=h(Ee,[["render",Fe]]);const Ne={props:["isAccepted"]},Re={key:0,id:"Component_3_9",class:"cursor-pointer hover:opacity-90","data-name":"Component 3 \u2013 9",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17"},Be=a("g",{id:"Rectangle_95","data-name":"Rectangle 95",fill:"#fe8029",stroke:"#fe8029",strokeWidth:"1"},[a("rect",{width:"19",height:"17",stroke:"none"}),a("rect",{x:"0.5",y:"0.5",width:"18",height:"16",fill:"none"})],-1),Ue=a("path",{id:"Path_30","data-name":"Path 30",d:"M105.618,1053.058l4.275,4.1,7.391-9.832",transform:"translate(-101.724 -1044.227)",fill:"none",stroke:"#181818",strokeLinejoin:"round",strokeWidth:"2"},null,-1),We=[Be,Ue],Ke={key:1,id:"Component_4_33",class:"cursor-pointer hover:opacity-90","data-name":"Component 4 \u2013 33",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"17",viewBox:"0 0 19 17"},Ge=a("rect",{id:"Rectangle_97","data-name":"Rectangle 97",width:"19",height:"17",fill:"#be171c"},null,-1),Ze=a("g",{id:"Group_20","data-name":"Group 20",transform:"translate(3.915 2.959)"},[a("path",{id:"Path_36","data-name":"Path 36",d:"M-5800.456,4404.347l-11.182,11.01",transform:"translate(5811.638 -4404.347)",fill:"none",stroke:"#181818",strokeWidth:"2"}),a("path",{id:"Path_37","data-name":"Path 37",d:"M-5811.638,4404.347l10.93,11.083",transform:"translate(5811.638 -4404.347)",fill:"none",stroke:"#181818",strokeWidth:"2"})],-1),qe=[Ge,Ze];function Je(t,e,r,o,l,n){return s(),c("div",null,[r.isAccepted?(s(),c("svg",Re,We)):d("",!0),r.isAccepted?d("",!0):(s(),c("svg",Ke,qe))])}var Qe=h(Ne,[["render",Je]]);const Xe=["src"],Ye=O({props:{image:null,index:null,isImageSelected:{type:Boolean},isImageAccepted:{type:Boolean}},emits:["selectImage","handleAcceptedImageArrayChange"],setup(t,{emit:e}){return(r,o)=>{const l=Qe;return s(),c(p,null,[a("img",{class:I([[t.isImageSelected?"border-light-800 border":"border border-dark-500"],"object-fill w-full max-h-[25rem] rounded mb-2 cursor-pointer transition-all duration-200"]),src:t.image,alt:"",srcset:"",onClick:o[0]||(o[0]=n=>r.$emit("selectImage")),onDblclick:o[1]||(o[1]=n=>r.$emit("handleAcceptedImageArrayChange"))},null,42,Xe),f(l,{"is-accepted":t.isImageAccepted,onClick:o[2]||(o[2]=n=>r.$emit("handleAcceptedImageArrayChange"))},null,8,["is-accepted"])],64)}}}),et={emits:["expandedClusterChange"],data(){return{isExpanded:!1}},methods:{expandCluster(){this.isExpanded=!this.isExpanded,this.$emit("expandedClusterChange",this.isExpanded)}}},tt={key:0,class:"my-auto cursor-pointer hover:opacity-70",xmlns:"http://www.w3.org/2000/svg",width:"13.443",height:"22.644",viewBox:"0 0 13.443 22.644"},rt=a("path",{id:"Path_49","data-name":"Path 49",d:"M-4098,3547.375l10.261,10.261,10.261-10.261",transform:"translate(-3546.315 -4076.417) rotate(-90)",fill:"none",stroke:"#fe8029",strokeWidth:"3"},null,-1),nt=[rt],ot={key:1,class:"my-auto cursor-pointer hover:opacity-70",xmlns:"http://www.w3.org/2000/svg",width:"22.644",height:"13.443",viewBox:"0 0 22.644 13.443"},at=a("path",{id:"Path_45","data-name":"Path 45",d:"M-4098,3547.375l10.261,10.261,10.261-10.261",transform:"translate(4099.061 -3546.315)",fill:"none",stroke:"#fe8029",strokeWidth:"3"},null,-1),lt=[at];function st(t,e,r,o,l,n){return s(),c("div",{onClick:e[0]||(e[0]=(...i)=>n.expandCluster&&n.expandCluster(...i))},[l.isExpanded?(s(),c("svg",tt,nt)):d("",!0),l.isExpanded?d("",!0):(s(),c("svg",ot,lt))])}var E=h(et,[["render",st]]);const it={components:{ExpandClusterBtn:E},props:{clusterArray:{type:Array,required:!0}},data(){return{totalNumSelectedImages:this.clusterArray.reduce((t,e)=>t+e.length,0),expandedClusters:[],acceptedImages:[],selectedImage:this.clusterArray[0][0].blob,selectedClusterIndex:0,isFullscreen:!1}},computed:{isClusterExpanded(){return t=>this.expandedClusters.includes(t)},isImageAccepted(){return t=>this.acceptedImages.includes(t)},isImageSelected(){return t=>this.selectedImage===t},selectedImageClusterIndex(){return this.clusterArray[this.selectedClusterIndex].indexOf(this.clusterArray[this.selectedClusterIndex].find(t=>t.blob===this.selectedImage))},selectedClustersRejectedImages(){return this.clusterArray[this.selectedClusterIndex].filter(t=>!this.acceptedImages.includes(t.blob))},selectedClustersAcceptedImages(){return this.clusterArray[this.selectedClusterIndex].filter(t=>this.acceptedImages.includes(t.blob))},clustersAcceptedImages(){return t=>this.clusterArray[t].filter(e=>this.acceptedImages.includes(e.blob)).length}},mounted(){this.clusterArray.forEach(t=>{this.acceptedImages.push(t[0].blob)}),window.addEventListener("keydown",this.handleKeypress)},unmounted(){window.removeEventListener("keydown",this.handleKeypress)},methods:{handleKeypress(t){switch(t.code){case"KeyF":this.isFullscreen=!this.isFullscreen;break}},handleExpandCluster(t){this.isClusterExpanded(t)?this.expandedClusters.splice(this.expandedClusters.indexOf(t),1):this.expandedClusters.push(t)},handleAcceptedImageArrayChange(t){if(this.acceptedImages.includes(t)){this.acceptedImages.splice(this.acceptedImages.indexOf(t),1);return}this.acceptedImages.push(t)},selectImage(t,e){this.selectedImage=t,this.selectedClusterIndex=e},changeSelectedClusterIndex(t){this.selectedClusterIndex+=t,this.selectedImage=this.clusterArray[this.selectedClusterIndex][0].blob}}},ct={key:0,id:"NetflixView"},mt={class:"flex sticky top-0 py-2 pb-3 pl-4 items-start bg-dark-800"},ut={class:"flex flex-col p-3 pr-6 items-center w-max w-auto whitespace-nowrap"},dt={class:"mb-10 w-full"},_t={key:1,class:"fullscreen bg-dark-800 w-screen h-screen overflow-hidden"},gt={class:"flex h-8/12"},ht={class:"flex flex-col w-2/12"},pt=a("div",{className:"flex flex-row items-center p-3 items-start justify-start bg-dark-300"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#b9b9b9"},[a("path",{d:"M0 0h24v24H0z",fill:"none"}),a("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})]),a("h1",null," Clusters ")],-1),zt={class:"VerticalClusters h-3/4 bg-dark-300 mb-1 flex flex-col items-center justify-center"},ft={class:"MLInfo flex flex-col p-2 h-1/4 bg-dark-300 mb-1"},bt=R('<h1 class="flex mb-4"><svg class="icon mr-2" xmlns="http://www.w3.org/2000/svg" width="26.858" height="26.858" viewBox="0 0 26.858 26.858"><g id="Group_21" data-name="Group 21" transform="translate(-74.801 -74.811)"><path id="Path_38" data-name="Path 38" d="M168.271,155.12H156.923a1.8,1.8,0,0,0-1.8,1.8v11.349a1.8,1.8,0,0,0,1.8,1.8h11.349a1.8,1.8,0,0,0,1.8-1.8V156.922A1.8,1.8,0,0,0,168.271,155.12Zm.811,13.151a.815.815,0,0,1-.811.811H156.923a.815.815,0,0,1-.811-.811V156.922a.815.815,0,0,1,.811-.811h11.349a.815.815,0,0,1,.811.811Z" transform="translate(-74.366 -74.357)" fill="#b9b9b9"></path><path id="Path_41" data-name="Path 41" d="M101.146,86.615a.5.5,0,1,0,0-.992H98.168V82.375h2.977a.5.5,0,1,0,0-.992H98.127a3.472,3.472,0,0,0-3.039-3.039V75.326a.5.5,0,0,0-.992,0V78.3h-3.25V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H86.606V75.326a.5.5,0,1,0-.991-.038c0,.013,0,.026,0,.038V78.3H82.366V75.326a.5.5,0,0,0-.992,0v3.017a3.472,3.472,0,0,0-3.039,3.039h-3.02a.5.5,0,1,0,0,.992h2.977v3.25H75.316a.5.5,0,1,0,0,.992h2.977v3.249H75.316a.5.5,0,1,0,0,.992h2.977V94.1H75.316a.5.5,0,1,0-.038.991h3.057a3.471,3.471,0,0,0,3.039,3.039v3.018a.5.5,0,0,0,.992,0V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,1,0,.991.038c0-.013,0-.026,0-.038V98.178h3.249v2.977a.5.5,0,0,0,.992,0V98.136A3.471,3.471,0,0,0,98.125,95.1h3.019a.5.5,0,1,0,.038-.991H98.168V90.856h2.977a.5.5,0,1,0,0-.992H98.168V86.615Zm-3.968,8.073a2.5,2.5,0,0,1-2.5,2.5h-12.9a2.5,2.5,0,0,1-2.5-2.5v-12.9a2.5,2.5,0,0,1,2.5-2.5h12.9a2.5,2.5,0,0,1,2.5,2.5Z" transform="translate(0 0)" fill="#b9b9b9"></path><text id="AI" transform="translate(88.281 90.811)" fill="#b9b9b9" font-size="9" font-family="Helvetica" letter-spacing="-0.02em"><tspan x="-4.162" y="0"> AI </tspan></text></g></svg> Auto Culling </h1>',1),yt={class:"grid grid-rows-2 grid-cols-2 gap-2"},vt=a("p",{class:"text-left"}," Confidence ",-1),xt={class:"text-right"},wt=a("p",{class:"text-left"}," Images accepted ",-1),It={class:"text-right"},At={class:"MainImage flex flex-col h-full w-10/12 items-center justify-center"},Ct=["src"],kt={class:"flex h-1/12 w-2/3 justify-center"},St={class:"w-full"},jt={class:"w-full"},Ot={class:"w-full"},Vt={class:"w-full"},Tt={class:"flex w-screen h-4/12"},Et={class:"AcceptedPanel flex flex-col bg-dark-300 w-1/3 items-start justify-start mr-1"},Mt=a("h1",{class:"p-2"}," Accepted ",-1),$t={class:"flex w-full h-full overflow-x-auto snap snap-mandatory snap-x"},Pt={class:"RejectedPanel flex flex-col bg-dark-300 w-screen items-start justify-start"},Dt=a("h1",{class:"p-2"}," Rejected ",-1),Lt={class:"flex w-full h-full overflow-x-auto snap snap-mandatory snap-x"};function Ft(t,e,r,o,l,n){const i=E,u=Ye,v=He;return s(),c(p,null,[l.isFullscreen?d("",!0):(s(),c("div",ct,[a("nav",mt," Accepted pictures: "+g(l.acceptedImages.length)+" of "+g(l.totalNumSelectedImages),1),a("section",null,[(s(!0),c(p,null,x(r.clusterArray,(m,z)=>(s(),c("div",{key:m[0].blob,class:"flex flex-row w-full h-full mb-1 bg-dark-500"},[a("div",ut,[a("h1",dt,g(`${n.clustersAcceptedImages(z)} out of ${m.length}`),1),f(i,{onExpandedClusterChange:_=>n.handleExpandCluster(m[0].blob)},null,8,["onExpandedClusterChange"])]),a("div",{class:I([[n.isClusterExpanded(m[0].blob)?"columns-sm w-full":"grid grid-rows-1 auto-cols-auto grid-flow-col overflow-auto snap snap-mandatory snap-x"],"h-full items-center"])},[(s(!0),c(p,null,x(m,_=>(s(),c("div",{key:_.blob,class:"flex flex-col w-96 max-h-3/5 p-2 justify-center items-center snap-start"},[f(u,{image:_.blob,index:z,"is-image-selected":n.isImageSelected(_.blob),"is-image-accepted":n.isImageAccepted(_.blob),onSelectImage:M=>n.selectImage(_.blob,z),onHandleAcceptedImageArrayChange:M=>n.handleAcceptedImageArrayChange(_.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))],2)]))),128))])])),l.isFullscreen?(s(),c("section",_t,[a("div",gt,[a("div",ht,[pt,a("div",zt,[f(v,{"cluster-array":r.clusterArray,"current-cluster-index":l.selectedClusterIndex,onPreviousCluster:e[0]||(e[0]=m=>n.changeSelectedClusterIndex(-1)),onNextCluster:e[1]||(e[1]=m=>n.changeSelectedClusterIndex(1))},null,8,["cluster-array","current-cluster-index"])]),a("div",ft,[bt,a("div",yt,[vt,a("p",xt,g(Math.round(Math.random(0,1)*100))+"% ",1),wt,a("p",It,g(`${n.selectedClustersAcceptedImages.length} out of ${r.clusterArray[l.selectedClusterIndex].length}`),1)])])]),a("div",At,[a("img",{class:"w-full h-11/12 object-contain p-2",src:r.clusterArray[l.selectedClusterIndex][n.selectedImageClusterIndex].blob,alt:""},null,8,Ct),a("div",kt,[a("p",St," ISO "+g(r.clusterArray[l.selectedClusterIndex][n.selectedImageClusterIndex].ISO),1),a("p",jt," f/"+g(r.clusterArray[l.selectedClusterIndex][n.selectedImageClusterIndex].FNumber),1),a("p",Ot,g(r.clusterArray[l.selectedClusterIndex][n.selectedImageClusterIndex].FocalLength)+"mm ",1),a("p",Vt,g(r.clusterArray[l.selectedClusterIndex][n.selectedImageClusterIndex].name),1)])])]),a("div",Tt,[a("div",Et,[Mt,a("div",$t,[(s(!0),c(p,null,x(n.selectedClustersAcceptedImages,(m,z)=>(s(),c("div",{key:m,class:"flex flex-col w-80 h-full p-2 overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start"},[f(u,{image:m.blob,index:z,"is-image-selected":n.isImageSelected(m.blob),"is-image-accepted":n.isImageAccepted(m.blob),onSelectImage:_=>n.selectImage(m.blob,l.selectedClusterIndex),onHandleAcceptedImageArrayChange:_=>n.handleAcceptedImageArrayChange(m.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))])]),a("div",Pt,[Dt,a("div",Lt,[(s(!0),c(p,null,x(n.selectedClustersRejectedImages,(m,z)=>(s(),c("div",{key:m,class:"flex flex-col w-80 h-full p-2 overflow-x-auto overflow-y-hidden flex-shrink-0 justify-center items-center snap-start"},[f(u,{image:m.blob,index:z,"is-image-selected":n.isImageSelected(m.blob),"is-image-accepted":n.isImageAccepted(m.blob),onSelectImage:_=>n.selectImage(m.blob,l.selectedClusterIndex),onHandleAcceptedImageArrayChange:_=>n.handleAcceptedImageArrayChange(m.blob)},null,8,["image","index","is-image-selected","is-image-accepted","onSelectImage","onHandleAcceptedImageArrayChange"])]))),128))])])])])):d("",!0)],64)}var Ht=h(it,[["render",Ft]]);const Nt={data(){return{active:!1}},methods:{toggleActive(t){this.active=!this.active}}},Rt=a("span",null,"Drag and Drop File",-1),Bt=a("span",null,"OR",-1),Ut=B(" Upload Images ");function Wt(t,e,r,o,l,n){return s(),c("div",{class:I(["dropzone w-96 h-52 flex flex-col items-center justify-evenly border-1 border-red-700 border-dashed transition-all duration-300",{"bg-red-800 ":l.active}]),onDragenter:e[1]||(e[1]=b((...i)=>n.toggleActive&&n.toggleActive(...i),["prevent"])),onDragleave:e[2]||(e[2]=b((...i)=>n.toggleActive&&n.toggleActive(...i),["prevent"])),onDrop:e[3]||(e[3]=b((...i)=>n.toggleActive&&n.toggleActive(...i),["prevent"])),onDragover:e[4]||(e[4]=b(()=>{},["prevent"]))},[Rt,Bt,a("label",{class:I([[l.active?"bg-dark-800 text-red-700":"bg-red-700"],"rounded-lg p-3 cursor-pointer w-auto"])},[Ut,a("input",{id:"inputFile",class:"hidden",type:"file",accept:"image/*",multiple:"",autoFocus:"",onChange:e[0]||(e[0]=i=>t.$emit("loadImages",i))},null,32)],2)],34)}var Kt=h(Nt,[["render",Wt]]);const Gt={emits:["loaded"],data(){return{imageFileArr:[],imageObjectArray:[],clusterArray:[],unusableImages:[],imageUploadStage:"uploadArea",prevClusterIndex:0,interval:2800,prevDateTimeOriginal:null}},methods:{compareSecondColumn(t,e){return t.time===e.time?0:t.time<e.time?-1:1},sortByDateTimeOriginal(t){t.sort(this.compareSecondColumn)},async getMetaData(t){const e=await U.parse(t),{DateTimeOriginal:r,FNumber:o,ISO:l,FocalLength:n,LensModel:i}=e;return{DateTimeOriginal:r,FNumber:o,ISO:l,FocalLength:n,LensModel:i}},async loadImages(t){this.imageUploadStage="processing",t.type==="drop"?this.imageFileArr.push(t.dataTransfer.files):this.imageFileArr.push(t.target.files);for(let e=0;e<this.imageFileArr[0].length;e++)try{const{DateTimeOriginal:r,FNumber:o,ISO:l,FocalLength:n,LensModel:i}=await this.getMetaData(this.imageFileArr[0][e]),u=r.valueOf();u===void 0?this.imageFileArr[0].splice(e,1):this.imageObjectArray.push({blob:URL.createObjectURL(this.imageFileArr[0][e]),time:u,name:this.imageFileArr[0][e].name,FNumber:o,ISO:l,FocalLength:n,LensModel:i})}catch(r){this.unusableImages.push({name:this.imageFileArr[0][e].name,blob:URL.createObjectURL(this.imageFileArr[0][e])}),console.warn(r)}this.sortByDateTimeOriginal(this.imageObjectArray),this.imageObjectArray.forEach((e,r)=>{this.prevDateTimeOriginal===null&&(this.prevDateTimeOriginal=e.time),Math.abs(e.time-this.prevDateTimeOriginal)>this.interval?(this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,r)),this.prevClusterIndex=r,this.prevDateTimeOriginal=e.time):this.prevDateTimeOriginal=e.time,Math.abs(e.time-this.prevDateTimeOriginal)>this.interval&&r===this.imageObjectArray.length-1&&(this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,r)),this.clusterArray.push(this.imageObjectArray.slice(r))),r===this.imageObjectArray.length-1&&this.clusterArray.push(this.imageObjectArray.slice(this.prevClusterIndex,r+1))}),this.unusableImages.length?this.imageUploadStage="waitingForAccept":this.$emit("loaded",{array:this.clusterArray})}}},Zt={class:"w-screen h-screen flex my-auto mx-auto justify-center items-center overflow-hidden"},qt={key:1,class:"container flex flex-col justify-center items-center"},Jt=a("div",{class:"loader"},null,-1),Qt=a("h3",{class:"block"}," Please wait, the robot is thinking \u{1F916} ",-1),Xt=[Jt,Qt],Yt={key:2,class:"flex flex-col items-center justify-center w-screen h-screen overflow-y-auto overflow-x-hidden"},er=a("h1",{class:"text-5xl mb-4"}," Some Images Couldn't Load! ",-1),tr=a("h3",{class:"mb-10"}," (This is likely due to missing metadata. Make sure your photos contain the DateTimeOriginal tag) ",-1),rr={class:"h-auto w-max grid grid-cols-2 items-end justify-start"},nr=["src"],or={class:"w-xs truncate"};function ar(t,e,r,o,l,n){const i=Kt;return s(),c("div",Zt,[l.imageUploadStage==="uploadArea"?(s(),w(i,{key:0,onDrop:b(n.loadImages,["prevent"]),onLoadImages:n.loadImages},null,8,["onDrop","onLoadImages"])):d("",!0),l.imageUploadStage==="processing"?(s(),c("div",qt,Xt)):d("",!0),l.imageUploadStage==="waitingForAccept"?(s(),c("div",Yt,[er,tr,a("button",{class:"w-auto h-auto bg-red-700 p-3 mb-20 rounded-lg",onClick:e[0]||(e[0]=b(u=>t.$emit("loaded",{array:l.clusterArray}),["prevent"]))}," Continue Anyways "),a("div",rr,[(s(!0),c(p,null,x(l.unusableImages,u=>(s(),c("div",{key:u.blob,class:"flex flex-col items-center mb-6"},[a("img",{class:"h-36 ascpect-ratio opacity-50",src:u.blob,alt:""},null,8,nr),a("p",or,g(u.name),1)]))),128))])])):d("",!0)])}var lr=h(Gt,[["render",ar]]);const sr={},ir=a("h1",{class:"text-5xl font-mono text-shadow-sm"}," Hello and welcome ",-1),cr=a("div",{class:"bg-red-700 w-60 h-60 rounded-full absolute filter blur-lg mix-blend-screen top-0"},null,-1),mr=a("div",{class:"bg-pink-700 w-60 h-60 rounded-full absolute filter blur-lg mix-blend-screen left-28"},null,-1),ur=a("div",{class:"bg-purple-600 w-60 h-60 rounded-full absolute filter blur-lg mix-blend-screen -top-20 left-48"},null,-1),dr=[ir,cr,mr,ur];function _r(t,e){return s(),c("div",null,dr)}var gr=h(sr,[["render",_r]]);const hr={data(){return{pageShown:"uploadImages",loadedClusterArray:[[]]}},methods:{imagesLoaded(t){this.pageShown="cullingPage",this.loadedClusterArray=t.array}}};function pr(t,e,r,o,l,n){const i=gr,u=lr,v=Ht;return s(),c(p,null,[l.pageShown==="welcomeScreen"?(s(),w(i,{key:0})):d("",!0),l.pageShown==="uploadImages"?(s(),w(u,{key:1,onLoaded:n.imagesLoaded},null,8,["onLoaded"])):d("",!0),l.pageShown==="cullingPage"?(s(),w(v,{key:2,"cluster-array":l.loadedClusterArray},null,8,["cluster-array"])):d("",!0)],64)}var zr=h(hr,[["render",pr]]);const fr=[{name:"about",path:"/about",component:()=>y(()=>import("./about.109cd8c1.js"),["assets/about.109cd8c1.js","assets/vendor.73441bcd.js"]),props:!0},{name:"index",path:"/",component:zr,props:!0},{name:"README",path:"/readme",component:()=>y(()=>import("./README.6bebb3f9.js"),["assets/README.6bebb3f9.js","assets/vendor.73441bcd.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>y(()=>import("./_...all_.c74887b8.js"),["assets/_...all_.c74887b8.js","assets/vendor.73441bcd.js"]),props:!0,meta:{layout:404}}],br={},yr={class:"text-center text-gray-700 dark:text-gray-200"};function vr(t,e){const r=V("router-view");return s(),c("main",yr,[f(r)])}var xr=h(br,[["render",vr]]);const wr={"404":()=>y(()=>import("./404.52a969ed.js"),["assets/404.52a969ed.js","assets/vendor.73441bcd.js"]),default:xr,home:()=>y(()=>import("./home.a0c438e1.js"),["assets/home.a0c438e1.js","assets/vendor.73441bcd.js"])};function Ir(t){return t.map(e=>{var r;return{path:e.path,component:wr[((r=e.meta)==null?void 0:r.layout)||"default"],children:[S(k({},e),{path:""})]}})}const Ar=O({setup(t){return W({title:"Photo Culling Online",meta:[{name:"PhotoCull",content:"A photo culling app for professional photographers"}]}),(e,r)=>{const o=V("router-view");return s(),w(o)}}});const Cr=Ir(fr);K(Ar,{routes:Cr,base:"/photo-culling-online-V2./"},t=>{Object.values({"./modules/i18n.ts":Ie,"./modules/nprogress.ts":Ce,"./modules/pinia.ts":Se,"./modules/pwa.ts":Te}).map(e=>{var r;return(r=e.install)==null?void 0:r.call(e,t)})});export{h as _};
