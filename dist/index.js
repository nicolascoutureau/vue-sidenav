!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-js-modal"]=t():e["vue-js-modal"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5).default)("0c8238ce",r,!1,{})},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vs--sidenav[data-v-17bb2a83] {\n    z-index: 9999;\n    position: fixed;\n    bottom: 0;\n    top: 0;\n    background: white;\n    max-with: 100%\n}\n.vs--backdrop[data-v-17bb2a83] {\n    z-index: 9998;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    visibility: visible;\n    pointer-events: all;\n    background: rgba(0, 0, 0, 0.5);\n}\n.vs--right[data-v-17bb2a83] {\n    right: 0;\n}\n.vs--left[data-v-17bb2a83] {\n    left: 0;\n}\n.vs--slide-left-enter-active[data-v-17bb2a83],\n.vs--slide-right-enter-active[data-v-17bb2a83] {\n    transition: all .3s ease;\n}\n.vs--slide-left-leave-active[data-v-17bb2a83],\n.vs--slide-right-leave-active[data-v-17bb2a83] {\n    transition: all .2s ease-in;\n}\n.vs--slide-left-enter[data-v-17bb2a83],\n.vs--slide-left-leave-to[data-v-17bb2a83] {\n    transform: translateX(-100%);\n}\n.vs--slide-right-enter[data-v-17bb2a83],\n.vs--slide-right-leave-to[data-v-17bb2a83] {\n    transform: translateX(100%);\n}\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isOpen?n("div",{staticClass:"vs--backdrop",on:{click:function(t){return e.close()}}}):e._e(),e._v(" "),n("transition",{attrs:{name:"vs--slide-"+e.position}},[e.isOpen?n("div",{staticClass:"vs--sidenav",class:"vs--"+e.position,style:"width:"+e.width+"px"},[e._t("default")],2):e._e()])],1)};r._withStripped=!0;var o={name:"sidenav",props:{name:{type:String,required:!0},position:{type:String,validator:e=>["right","left"].includes(e),default:"left"},width:{type:[Number,String],default:400}},data:function(){return{isOpen:!1}},beforeMount(){this.$sidenav.bus.$on("toggle",this.toggle)},beforeDestroy(){this.$sidenav.bus.$off("toggle")},methods:{toggle(e){e===this.name&&(this.isOpen?this.close():this.open())},open(){this.$emit("before-open"),document.body.style.overflow="hidden",this.isOpen=!0},close(){this.$emit("before-close"),document.body.style.overflow=null,this.isOpen=!1}}};n(1);var i=function(e,t,n,r,o,i,s,a){var u,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):o&&(u=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(d.functional){d._injectStyles=u;var l=d.render;d.render=function(e,t){return u.call(t),l(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:d}}(o,r,[],!1,null,"17bb2a83",null);i.options.__file="src/Sidenav.vue";var s=i.exports;const a={install(e,t){this.bus=new e,e.component(s.name,s),e.prototype.$sidenav={get bus(){return a.bus},toggle(e){a.bus.$emit("toggle",e)}}}};t.default=a;"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,d=!1,l=function(){},f=null,c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){d=n,f=o||{};var s=r(e,t);return v(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(u=i[a.id]).refs--,n.push(u)}t?v(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var d=0;d<u.parts.length;d++)u.parts[d]();delete i[u.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(h(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(h(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function b(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function h(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}if(c){var o=u++;r=a||(a=b()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=b(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,m=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function _(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}])}));
//# sourceMappingURL=index.js.map