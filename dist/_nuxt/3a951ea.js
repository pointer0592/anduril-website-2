(window.webpackJsonp=window.webpackJsonp||[]).push([[34,3],{483:function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5);var l=r(484),n={name:"ArrowRight",components:{ArrowRightIcon:r.n(l).a},props:{height:{type:String,default:"h-6"},width:{type:String,default:"w-6"}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ArrowRightIcon",{staticClass:"ml-2 text-orange-500 hover:text-600",class:[t.height,t.width],attrs:{name:"arrow-right"}})}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,r){r(17),r(13),r(9),r(19),r(15),r(20);var l=r(61),n=r(62),o=["class","staticClass","style","staticStyle","attrs"];function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(24),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,f=void 0===c?[]:c,x=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,w=data.attrs,h=void 0===w?{}:w,y=n(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[x,v],style:[{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},style,m],attrs:Object.assign({fill:"currentColor",width:"100%",height:"100%",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",style:"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"},h)},y),f.concat([r("g",[r("rect",{attrs:{x:"7.28",y:"45.637",width:"76.651",height:"8.333"}}),r("path",{attrs:{d:"M86.81,44.047l-27.998,27.998l5.893,5.892l27.997,-27.998l-5.892,-5.892Z"}}),r("path",{attrs:{d:"M86.827,55.971l-28.015,-28.016l5.893,-5.892l28.015,28.015l-5.893,5.893Z"}})])]))}}},517:function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5);var l={name:"SolutionCardRows",mixins:[r(158).a],props:{cardTitle:{type:String,default:""},cardLead:{type:String,default:""},cardItems:{type:Array,required:!0},largeGridCols:{type:String,default:"3"}},computed:{largeGrid:function(){return"lg:grid-cols-".concat(this.largeGridCols)}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},[r("div",{staticClass:"relative mx-auto divide-y-2 divide-gray-200 dark:divide-white lg:max-w-7xl"},[r("div",[t.cardTitle?r("h2",{staticClass:"font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl"},[t._v("\n          "+t._s(t.cardTitle)+"\n        ")]):t._e(),t._v(" "),t._t("title"),t._v(" "),r("template",{slot:"lead"},[t.cardLead?r("div",{staticClass:"mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},[r("p",{staticClass:"text-xl text-gray-500 dark:text-gray-200"},[t._v("\n            "+t._s(t.cardLead)+"\n          ")]),t._v(" "),t._t("lead")],2):t._e()])],2),t._v(" "),r("div",{staticClass:"mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-full grid grid-cols-1 sm:max-w-5xl md:grid-cols-2 lg:max-w-7xl",class:t.largeGrid},t._l(t.cardItems,(function(e){return r("div",{key:e.id,staticClass:"flex flex-col rounded-0 shadow-lg overflow-hidden"},[r("div",{staticClass:"flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[r("div",{staticClass:"block mt-1"},[r("p",{staticClass:"text-sm font-medium text-orange-600 my-0",attrs:{"data-aos":"fade-up"}},[t._v("\n                "+t._s(e.tagline)+"\n              ")]),t._v(" "),r("p",{staticClass:"font-futura text-xl font-bold text-gray-900 dark:text-gray-100 my-0",attrs:{"data-aos":"fade-up"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),r("p",{staticClass:"mt-1 text-base text-gray-500 dark:text-gray-400",attrs:{"data-aos":"fade-up"}},[t._v("\n                  "+t._s(e.preview)+"\n                ")])])]),t._v(" "),r("div",{staticClass:"inline-flex justify-end mt-2",attrs:{"data-aos":"fade-up"}},[r("nuxt-link",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent",attrs:{to:e.dir+"/"+e.slug}},[r("span",[t._v("to "+t._s(e.title))]),t._v(" "),r("arrow-right")],1)],1)])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArrowRight:r(483).default})}}]);