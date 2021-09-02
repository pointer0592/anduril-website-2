(window.webpackJsonp=window.webpackJsonp||[]).push([[33,15],{576:function(t,e,r){"use strict";r.r(e);var n={name:"InsightCard",mixins:r(182).a,props:{insight:{type:Object,required:!0}},computed:{avatarSpace:function(){return this.insight.authorTwo.image?"-space-x-1 pr-8":"pr-2"}}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col rounded-0 shadow-lg hover:shadow-xl overflow-hidden"},[r("nuxt-link",{attrs:{to:t.insight.path}},[t.insight.coverimg&&!t.insight.isMockup?r("div",{staticClass:"flex-1",attrs:{"data-aos":"fade-up"}},[r("client-only",[r("cld-image",{staticClass:"h-48 w-full object-cover z-1",attrs:{"public-id":"/insights/"+t.insight.coverimg,alt:t.insight.title,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}},[r("cld-placeholder",{attrs:{type:"blur"}})],1)],1)],1):t._e(),t._v(" "),t.insight.videoSrc?r("div",{staticClass:"h-48 w-full object-cover lazyload",attrs:{"data-aos":"fade-up"}},[r("video",{attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[r("source",{attrs:{src:t.insight.videoSrc,type:"video/mp4"}}),t._v("\n        Your browser does not support the video tag.\n      ")])]):t._e()]),t._v(" "),r("div",{staticClass:"flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between"},[r("nuxt-link",{staticClass:"block mt-2",attrs:{to:t.insight.path}},[r("div",{staticClass:"flex-1 h-40"},[r("p",{staticClass:"text-xs font-medium text-orange-500",attrs:{"data-aos":"fade-up"}},[t._v("\n          "+t._s(t.insight.category)+"\n        ")]),t._v(" "),r("p",{staticClass:"text-lg font-semibold text-GunMetal dark:text-white pt-2 leading-6",attrs:{"data-aos":"fade-up"}},[t._v("\n          "+t._s(t.insight.title)+"\n        ")]),t._v(" "),r("div",{staticClass:"pt-2"},[t.insight.lead?r("p",{staticClass:"text-sm text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t._f("truncate")(t.insight.lead,150))+"\n          ")]):r("p",{staticClass:"h-24 mt-3 text-sm text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t._f("truncate")(t.insight.description,150))+"\n          ")])])])]),t._v(" "),r("div",{staticClass:"h-8",attrs:{"data-aos":"fade-up"}},[r("nuxt-link",{attrs:{to:t.insight.path}},[r("p",{staticClass:"text-base text-gray-500 dark:text-gray-200 underline hover:text-gray-600 dark-hover:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("\n          more...")])])],1),t._v(" "),r("div",{staticClass:"h-16 mt-6 flex items-center space-x-4"},[t.insight.author.image?r("div",{staticClass:"flex overflow-hidden",class:t.avatarSpace,attrs:{"data-aos":"fade-up"}},[r("client-only",[t.insight.author.image?r("cld-image",{staticClass:"h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload",attrs:{"public-id":"/team-headshots/"+t.insight.author.image,alt:t.insight.author.name,quality:"auto","fetch-format":"auto",crop:"fill",loading:"lazy"}}):t._e()],1),t._v(" "),r("client-only",[t.insight.authorTwo.image?r("cld-image",{staticClass:"h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400 lazyload",attrs:{"public-id":"/team-headshots/"+t.insight.authorTwo.image,alt:t.insight.authorTwo.name,quality:"auto","fetch-format":"auto",crop:"fill",loading:"lazy"}}):t._e()],1)],1):t._e(),t._v(" "),r("div",[t.insight.author.name?r("div",{staticClass:"flex items-center flex-wrap text-sm font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t.insight.author.name&&t.insight.author.anduril?r("nuxt-link",{staticClass:"hover:underline hover:text-GunMetalLt dark-hover:text-gray-300",attrs:{to:"/about/"+t.insight.author.image}},[t._v("\n            "+t._s(t.insight.author.name)+"\n          ")]):t._e(),t._v(" "),t.insight.author.name&&!t.insight.author.anduril?r("span",[t._v(t._s(t.insight.author.name))]):t._e(),t._v(" "),t.insight.authorTwo.name?r("span",[t._v("  &  ")]):t._e(),t._v(" "),t.insight.authorTwo.anduril?r("nuxt-link",{staticClass:"hover:underline hover:text-GunMetalLt dark-hover:text-gray-300",attrs:{to:"/about/"+t.insight.authorTwo.image}},[t._v("\n            "+t._s(t.insight.authorTwo.name)+"\n          ")]):t._e(),t._v(" "),t.insight.authorTwo.name&&!t.insight.authorTwo.anduril?r("span",[t._v(t._s(t.insight.author.name))]):t._e()],1):t._e(),t._v(" "),r("div",{staticClass:"mt-2 text-xs font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[r("span",{staticClass:"font-medium"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.insight.published))+"\n          "),r("span",{attrs:{"aria-hidden":"true"}},[t._v("·")]),t._v(" "),r("span",{staticClass:"font-medium"},[t._v(" "+t._s(t._f("formattime")(t.insight.readingTime))+" min read ")])])])])],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},675:function(t,e,r){r(12),r(8),r(9),r(15),r(10),r(16);var n=r(62),l=r(63),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,f=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},y)},w),v.concat([r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]))}}},676:function(t,e,r){r(12),r(8),r(9),r(15),r(10),r(16);var n=r(62),l=r(63),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,f=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},y)},w),v.concat([r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}})]))}}},677:function(t,e,r){r(12),r(8),r(9),r(15),r(10),r(16);var n=r(62),l=r(63),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,f=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[{"enable-background":"new 0 0 382 382"},style,f],attrs:Object.assign({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 382 382",style:"enable-background:new 0 0 382 382;","xml:space":"preserve"},y)},w),v.concat([r("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889\n\tC366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056\n\tH65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806\n\tc5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1\n\ts40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73\n\tc-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079\n\tc0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426\n\tc5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472\n\tL341.91,330.654L341.91,330.654z"}}),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g"),r("g")]))}}},678:function(t,e,r){r(12),r(8),r(9),r(15),r(10),r(16);var n=r(62),l=r(63),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(34),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,v=void 0===d?[]:d,h=data.class,m=data.staticClass,style=data.style,f=data.staticStyle,x=data.attrs,y=void 0===x?{}:x,w=l(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,m],style:[{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},style,f],attrs:Object.assign({viewBox:"0 0 931 931",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"},y)},w),v.concat([r("path",{staticStyle:{fill:"currentColor"},attrs:{d:"M465.235,0c256.77,0 465.235,208.465 465.235,465.235c0,256.77 -208.465,465.235 -465.235,465.235c-256.77,0 -465.235,-208.465 -465.235,-465.235c0,-256.77 208.465,-465.235 465.235,-465.235Zm-162.482,255.82c115.58,-0 209.416,93.835 209.416,209.415c-0,115.58 -93.836,209.416 -209.416,209.416c-115.579,-0 -209.415,-93.836 -209.415,-209.416c-0,-115.58 93.836,-209.415 209.415,-209.415Zm331.39,12.172c57.509,-0 104.2,88.382 104.2,197.243c-0,108.861 -46.691,197.243 -104.2,197.243c-57.509,0 -104.199,-88.382 -104.199,-197.243c0,-108.861 46.69,-197.243 104.199,-197.243Zm161.498,19.109c20.58,-0 37.288,79.819 37.288,178.134c-0,98.315 -16.708,178.134 -37.288,178.134c-20.579,0 -37.287,-79.819 -37.287,-178.134c-0,-98.315 16.708,-178.134 37.287,-178.134Z"}})]))}}},777:function(t,e,r){"use strict";r.r(e);var n=r(6),l=(r(41),r(675)),o=r.n(l),c=r(676),d=r.n(c),v=r(677),h=r.n(v),m=r(678),f=r.n(m),x={components:{IconLinkedIn:h.a,IconMedium:f.a,IconMail:o.a,IconPhone:d.a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("insights",n.slug).where({isLive:!0}).sortBy("published","desc").without("body").limit(2).fetch();case 3:return l=e.sent,e.abrupt("return",{latestInsights:l});case 5:case"end":return e.stop()}}),e)})))()}},y=r(11),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"max-w-full mx-auto py-24 px-4 sm:pt-48 sm:bp-24 sm:px-6 lg:px-8"},[r("div",{staticClass:"relative shadow-xl"},[r("h2",{staticClass:"sr-only"},[t._v("Contact us")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"grid lg:grid-cols-4 grid-cols-1"},[r("div",{staticClass:"grid grid-cols-1 lg:grid-cols-3 col-span-3"},[r("div",{staticClass:"relative overflow-hidden py-10 px-6 bg-BG-700 dark:bg-GunMetalDk sm:px-10 xl:p-12"},[r("div",{staticClass:"absolute inset-0 pointer-events-none sm:hidden",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"absolute inset-0 w-full h-full text-BG-800",attrs:{width:"343",height:"388",viewBox:"0 0 343 388",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",fill:"url(#linear1)","fill-opacity":".1"}}),t._v(" "),r("defs",[r("linearGradient",{attrs:{id:"linear1",x1:"254.553",y1:"107.554",x2:"961.66",y2:"814.66",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{"stop-color":"currentColor"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"currentColor","stop-opacity":".5"}})],1)],1)])]),t._v(" "),r("div",{staticClass:"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"absolute inset-0 w-full h-full text-BG-800",attrs:{width:"359",height:"339",viewBox:"0 0 359 339",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",fill:"url(#linear2)","fill-opacity":".1"}}),t._v(" "),r("defs",[r("linearGradient",{attrs:{id:"linear2",x1:"192.553",y1:"28.553",x2:"899.66",y2:"735.66",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{"stop-color":"currentColor"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"currentColor","stop-opacity":"0"}})],1)],1)])]),t._v(" "),r("div",{staticClass:"hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block",attrs:{"aria-hidden":"true"}},[r("svg",{staticClass:"absolute inset-0 w-full h-full text-BG-900",attrs:{width:"160",height:"678",viewBox:"0 0 160 678",fill:"none",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",fill:"url(#linear3)","fill-opacity":".1"}}),t._v(" "),r("defs",[r("linearGradient",{attrs:{id:"linear3",x1:"192.553",y1:"325.553",x2:"899.66",y2:"1032.66",gradientUnits:"userSpaceOnUse"}},[r("stop",{attrs:{"stop-color":"currentColor"}}),t._v(" "),r("stop",{attrs:{offset:"1","stop-color":"currentColor","stop-opacity":"0"}})],1)],1)])]),t._v(" "),r("h3",{staticClass:"text-lg font-medium text-white"},[t._v("Contact information")]),t._v(" "),r("p",{staticClass:"mt-6 text-base text-gray-200 max-w-3xl"},[t._v("Questions? How can we help? Please reach out to us.")]),t._v(" "),r("dl",{staticClass:"mt-8 space-y-6"},[t._m(1),t._v(" "),r("dd",{staticClass:"flex text-base text-gray-100"},[r("icon-phone",{staticClass:"flex-shrink-0 w-6 h-6 text-gray-200",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"ml-3"},[t._v("+1 (917) 887-1295")])],1),t._v(" "),t._m(2),t._v(" "),r("dd",{staticClass:"flex text-base text-gray-100"},[r("icon-mail",{staticClass:"flex-shrink-0 w-6 h-6 text-gray-200",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"ml-3"},[t._v("info@andurilpartners.ai")])],1)]),t._v(" "),r("ul",{staticClass:"mt-8 flex space-x-6",attrs:{role:"list"}},[r("li",[r("a",[r("span",{staticClass:"sr-only"},[t._v("LinkedIn")]),t._v(" "),r("icon-linked-in",{staticClass:"h-6 w-6 text-gray-200 hover:text-Linkedin",attrs:{href:"https://www.linkedin.com/company/andurilpartners/","aria-hidden":"true"}})],1)]),t._v(" "),r("li",[r("a",[r("span",{staticClass:"sr-only"},[t._v("Medium")]),t._v(" "),r("icon-medium",{staticClass:"h-6 w-6 text-gray-200 hover:text-black",attrs:{href:"https://medium.com/anduril-partners","aria-hidden":"true"}})],1)])])]),t._v(" "),r("div",{staticClass:"py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-white "},[r("h3",{staticClass:"text-lg font-medium text-GunMetal"},[t._v("Send us a message")]),t._v(" "),r("form",{staticClass:"mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",attrs:{action:"#",method:"POST"}},[t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"sm:col-span-2 sm:flex sm:justify-end"},[r("button",{staticClass:"ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6",attrs:{type:"submit"}},[r("span",{staticClass:"text-2xl font-bold"},[t._v("Ship it")]),t._v(" "),r("svg",{staticClass:"h-7 w-7 ml-2 mb-1 pt-1 text-orange-500",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},attrs:{fill:"currentColor",width:"100%",height:"100%",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/"}},[r("g",[r("rect",{attrs:{x:"7.28",y:"45.637",width:"76.651",height:"8.333"}}),r("path",{attrs:{d:"M86.81,44.047l-27.998,27.998l5.893,5.892l27.997,-27.998l-5.892,-5.892Z"}}),r("path",{attrs:{d:"M86.827,55.971l-28.015,-28.016l5.893,-5.892l28.015,28.015l-5.893,5.893Z"}})])])])])])])]),t._v(" "),r("div",{staticClass:"py-10 col-span-1 xl:py-12 bg-white dark:bg-GunMetal"},[r("h1",{staticClass:"text-GunMetal dark:text-white font-bold text-2xl"},[t._v("Latest Insights")]),t._v(" "),r("div",{staticClass:"mt-12 mx-auto max-w-md px-4 grid gap-2 sm:max-w-lg sm:px-6 lg:px-8 grid-cols-1 lg:max-w-7xl"},t._l(t.latestInsights,(function(t){return r("div",{key:t.slug},[r("insight-card",{attrs:{insight:t}})],1)})),0)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-10 xl:py-12 bg-white dark:bg-GunMetal"},[r("h1",{staticClass:"text-GunMetal dark:text-white font-bold text-2xl"},[t._v("Stay in Touch")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dt",[r("span",{staticClass:"sr-only"},[t._v("Phone number")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dt",[r("span",{staticClass:"sr-only"},[t._v("Email")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"block text-sm font-medium text-GunMetal",attrs:{for:"first-name"}},[t._v("First name")]),t._v(" "),r("div",{staticClass:"mt-1"},[r("input",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"first-name",type:"text",name:"first-name",autocomplete:"given-name"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"last-name"}},[t._v("Last name")]),t._v(" "),r("div",{staticClass:"mt-1"},[r("input",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"last-name",type:"text",name:"last-name",autocomplete:"family-name"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"mt-1"},[r("input",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"email",name:"email",type:"email",autocomplete:"email"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex justify-between"},[r("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"phone"}},[t._v("Phone")]),t._v(" "),r("span",{staticClass:"text-sm text-gray-500",attrs:{id:"phone-optional"}},[t._v("Optional")])]),t._v(" "),r("div",{staticClass:"mt-1"},[r("input",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"phone",type:"text",name:"phone",autocomplete:"tel","aria-describedby":"phone-optional"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sm:col-span-2"},[r("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),r("div",{staticClass:"mt-1"},[r("input",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"subject",type:"text",name:"subject"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sm:col-span-2"},[r("div",{staticClass:"flex justify-between"},[r("label",{staticClass:"block text-sm font-medium text-gray-900",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),r("span",{staticClass:"text-sm text-gray-500",attrs:{id:"message-max"}},[t._v("Max. 500 characters")])]),t._v(" "),r("div",{staticClass:"mt-1"},[r("textarea",{staticClass:"py-3 px-4 block w-full shadow-sm text-gray-500 focus:border-orange-500 border border-1 border-solid border-GunMetal rounded-md focus:ring-transparent",attrs:{id:"message",name:"message",rows:"4","aria-describedby":"message-max"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{InsightCard:r(576).default})}}]);