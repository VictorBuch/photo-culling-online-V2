try{self["workbox:window:6.4.1"]&&_()}catch{}function S(n,r){return new Promise(function(e){var o=new MessageChannel;o.port1.onmessage=function(u){e(u.data)},n.postMessage(r,[o.port2])})}function W(n,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function E(n,r){(r==null||r>n.length)&&(r=n.length);for(var e=0,o=new Array(r);e<r;e++)o[e]=n[e];return o}function L(n,r){var e;if(typeof Symbol=="undefined"||n[Symbol.iterator]==null){if(Array.isArray(n)||(e=function(u,h){if(u){if(typeof u=="string")return E(u,h);var v=Object.prototype.toString.call(u).slice(8,-1);return v==="Object"&&u.constructor&&(v=u.constructor.name),v==="Map"||v==="Set"?Array.from(u):v==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)?E(u,h):void 0}}(n))||r&&n&&typeof n.length=="number"){e&&(n=e);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.4.1"]&&_()}catch{}var y=function(){var n=this;this.promise=new Promise(function(r,e){n.resolve=r,n.reject=e})};function b(n,r){var e=location.href;return new URL(n,e).href===new URL(r,e).href}var g=function(n,r){this.type=n,Object.assign(this,r)};function p(n,r,e){return e?r?r(n):n:(n&&n.then||(n=Promise.resolve(n)),r?n.then(r):n)}function k(){}var j={type:"SKIP_WAITING"};function P(n,r){if(!r)return n&&n.then?n.then(k):Promise.resolve()}var R=function(n){var r,e;function o(f,s){var t,i;return s===void 0&&(s={}),(t=n.call(this)||this).nn={},t.tn=0,t.rn=new y,t.en=new y,t.on=new y,t.un=0,t.an=new Set,t.cn=function(){var c=t.fn,a=c.installing;t.tn>0||!b(a.scriptURL,t.sn.toString())||performance.now()>t.un+6e4?(t.vn=a,c.removeEventListener("updatefound",t.cn)):(t.hn=a,t.an.add(a),t.rn.resolve(a)),++t.tn,a.addEventListener("statechange",t.ln)},t.ln=function(c){var a=t.fn,l=c.target,d=l.state,m=l===t.vn,w={sw:l,isExternal:m,originalEvent:c};!m&&t.mn&&(w.isUpdate=!0),t.dispatchEvent(new g(d,w)),d==="installed"?t.wn=self.setTimeout(function(){d==="installed"&&a.waiting===l&&t.dispatchEvent(new g("waiting",w))},200):d==="activating"&&(clearTimeout(t.wn),m||t.en.resolve(l))},t.dn=function(c){var a=t.hn,l=a!==navigator.serviceWorker.controller;t.dispatchEvent(new g("controlling",{isExternal:l,originalEvent:c,sw:a,isUpdate:t.mn})),l||t.on.resolve(a)},t.gn=(i=function(c){var a=c.data,l=c.ports,d=c.source;return p(t.getSW(),function(){t.an.has(d)&&t.dispatchEvent(new g("message",{data:a,originalEvent:c,ports:l,sw:d}))})},function(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];try{return Promise.resolve(i.apply(this,c))}catch(l){return Promise.reject(l)}}),t.sn=f,t.nn=s,navigator.serviceWorker.addEventListener("message",t.gn),t}e=n,(r=o).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var u,h,v=o.prototype;return v.register=function(f){var s=(f===void 0?{}:f).immediate,t=s!==void 0&&s;try{var i=this;return function(c,a){var l=c();return l&&l.then?l.then(a):a(l)}(function(){if(!t&&document.readyState!=="complete")return P(new Promise(function(c){return window.addEventListener("load",c)}))},function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),p(i.bn(),function(c){i.fn=c,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var a=i.fn.waiting;return a&&b(a.scriptURL,i.sn.toString())&&(i.hn=a,Promise.resolve().then(function(){i.dispatchEvent(new g("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn})})}catch(c){return Promise.reject(c)}},v.update=function(){try{return this.fn?P(this.fn.update()):void 0}catch(f){return Promise.reject(f)}},v.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},v.messageSW=function(f){try{return p(this.getSW(),function(s){return S(s,f)})}catch(s){return Promise.reject(s)}},v.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&S(this.fn.waiting,j)},v.pn=function(){var f=navigator.serviceWorker.controller;return f&&b(f.scriptURL,this.sn.toString())?f:void 0},v.bn=function(){try{var f=this;return function(s,t){try{var i=s()}catch(c){return t(c)}return i&&i.then?i.then(void 0,t):i}(function(){return p(navigator.serviceWorker.register(f.sn,f.nn),function(s){return f.un=performance.now(),s})},function(s){throw s})}catch(s){return Promise.reject(s)}},u=o,(h=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&W(u.prototype,h),o}(function(){function n(){this.Pn=new Map}var r=n.prototype;return r.addEventListener=function(e,o){this.Sn(e).add(o)},r.removeEventListener=function(e,o){this.Sn(e).delete(o)},r.dispatchEvent=function(e){e.target=this;for(var o,u=L(this.Sn(e.type));!(o=u()).done;)(0,o.value)(e)},r.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},n}());function U(n={}){const{immediate:r=!1,onNeedRefresh:e,onOfflineReady:o,onRegistered:u,onRegisterError:h}=n;let v;const f=async(s=!0)=>{};return"serviceWorker"in navigator&&(v=new R("/photo-culling-online-V2/sw.js",{scope:"/photo-culling-online-V2/",type:"classic"}),v.addEventListener("activated",s=>{s.isUpdate?window.location.reload():o==null||o()}),v.register({immediate:r}).then(s=>{u==null||u(s)}).catch(s=>{h==null||h(s)})),f}export{U as registerSW};
