(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{489:function(t,e,n){n(17),n(13),n(9),n(19),n(15),n(20);var r=n(61),l=n(62),c=["class","staticClass","style","staticStyle","attrs"];function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}n(24),t.exports={functional:!0,render:function(t,e){var n=e._c,data=(e._v,e.data),d=e.children,m=void 0===d?[]:d,v=data.class,f=data.staticClass,style=data.style,x=data.staticStyle,y=data.attrs,w=void 0===y?{}:y,h=l(data,c);return n("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[v,f],style:[style,x],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w)},h),m.concat([n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})]))}}},495:function(t,e,n){"use strict";n.r(e);n(2),n(3),n(4),n(5);var r=n(489),l={name:"MediaBanner",components:{ExternalLinkIcon:n.n(r).a},props:{mediaBanner:{type:Object,default:function(){}}}},c=n(18),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative bg-gray-900"},[n("div",{staticClass:"relative h-56 bg-GunMetal dark:bg-GunMetalDk sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.mediaBanner.image,alt:t.mediaBanner.title}})]),t._v(" "),n("div",{staticClass:"relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"},[n("div",{staticClass:"md:ml-auto md:w-1/2 md:pl-10"},[n("h2",{staticClass:"font-futura text-base font-semibold uppercase tracking-wider text-gray-300"},[t._v("\n        "+t._s(t.mediaBanner.caption)+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n        "+t._s(t.mediaBanner.lead)+"\n      ")]),t._v(" "),n("p",{staticClass:"mt-3 text-lg text-gray-300"},[t._v("\n        "+t._s(t.mediaBanner.copy)+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-8"},[n("div",{staticClass:"inline-flex rounded-md shadow"},[n("nuxt-link",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50",attrs:{to:t.mediaBanner.link}},[t._v("\n            "+t._s(t.mediaBanner.linkLabel)+"\n            "),n("ExternalLinkIcon",{staticClass:"-mr-1 ml-3 h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true"}})],1)],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);