(window.webpackJsonp=window.webpackJsonp||[]).push([[36,3],{483:function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5);var l=r(484),n={name:"ArrowRight",components:{ArrowRightIcon:r.n(l).a},props:{height:{type:String,default:"h-6"},width:{type:String,default:"w-6"}}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ArrowRightIcon",{staticClass:"ml-2 text-orange-500 hover:text-600",class:[t.height,t.width],attrs:{name:"arrow-right"}})}),[],!1,null,null,null);e.default=component.exports},484:function(t,e,r){r(17),r(13),r(9),r(19),r(15),r(20);var l=r(61),n=r(62),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}r(24),t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,x=data.class,v=data.staticClass,style=data.style,m=data.staticStyle,w=data.attrs,h=void 0===w?{}:w,y=n(data,o);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){l(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[x,v],style:[{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"},style,m],attrs:Object.assign({fill:"currentColor",width:"100%",height:"100%",viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",style:"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"},h)},y),f.concat([r("g",[r("rect",{attrs:{x:"7.28",y:"45.637",width:"76.651",height:"8.333"}}),r("path",{attrs:{d:"M86.81,44.047l-27.998,27.998l5.893,5.892l27.997,-27.998l-5.892,-5.892Z"}}),r("path",{attrs:{d:"M86.827,55.971l-28.015,-28.016l5.893,-5.892l28.015,28.015l-5.893,5.893Z"}})])]))}}},512:function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5);var l={name:"SolutionsSection",mixins:r(158).a,props:{solutionItems:{type:Array,default:function(){return[]}}}},n=r(18),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-0 sm:py-0"},[r("div",{staticClass:"relative mx-auto lg:max-w-7xl"},t._l(t.solutionItems,(function(e,l){return r("div",{key:e.slug,staticClass:"flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center",attrs:{id:e.slug}},[r("div",{staticClass:"px-4 sm:px-0 bg-gray-100 overflow-hidden lg:max-w-7xl my-auto  rounded-xl shadow-lg",class:[l%2==0?"flex-auto lg:col-start-8":"lg:col-start-1","lg:row-start-1 lg:col-span-5"],attrs:{"data-aos":"fade-up"}},[r("nuxt-img",{attrs:{provider:"cloudinary",src:"/solutions-page/solutions/"+e.bodyImage.src,classes:"h-full",format:"webp",quality:"auto",height:"500",width:"600",crop:"scale"}})],1),t._v(" "),r("div",{staticClass:"mx-auto pt-8 pb-12 px-4 sm:px-0 sm:pb-16 lg:max-w-7xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8",class:[l%2==0?"lg:col-start-1":"lg:col-start-7","lg:row-start-1 lg:col-span-6"],attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"lg:col-start-1"},[r("h2",{staticClass:"font-futura font-medium text-orange-500",attrs:{id:"features-heading2","data-aos":"fade-up"}},[t._v("\n                "+t._s(e.tagline)+"\n              ")]),t._v(" "),r("p",{staticClass:"font-futura mt-2 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight",attrs:{"data-aos":"fade-up"}},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),r("div",{staticClass:"border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16"}),t._v(" "),r("p",{staticClass:"mt-4 text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v(t._s(e.description))]),t._v(" "),r("dl",{staticClass:"mt-4 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2",attrs:{"data-aos":"fade-up"}},t._l(e.subSolutions,(function(e){return r("div",{key:e.name},[r("dt",{staticClass:"font-bold text-orange-500 underline hover-text-orange-600 cursor-pointer font-futura",attrs:{"data-aos":"fade-up"}},[r("nuxt-link",{attrs:{to:e.link}},[t._v(t._s(e.name))])],1),t._v(" "),r("dd",{staticClass:"mt-2 text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n                    "+t._s(e.description)+"\n                  ")])])})),0)]),t._v(" "),r("div",{staticClass:"inline-flex justify-end mt-4"},[r("nuxt-link",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-GunMetal dark:text-white hover:text-orange-700 bg-transparent",attrs:{to:""+e.path}},[r("span",[t._v("Learn More")]),t._v(" "),r("arrow-right")],1)],1)])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArrowRight:r(483).default})}}]);