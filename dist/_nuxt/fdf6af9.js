(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{685:function(t,e,l){l(12),l(8),l(9),l(15),l(10),l(16);var r=l(62),n=l(63),o=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}l(34),t.exports={functional:!0,render:function(t,e){var l=e._c,data=(e._v,e.data),m=e.children,x=void 0===m?[]:m,d=data.class,v=data.staticClass,style=data.style,h=data.staticStyle,f=data.attrs,w=void 0===f?{}:f,y=n(data,o);return l("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){r(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[d,v],style:[style,h],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},w)},y),x.concat([l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"}})]))}}},795:function(t,e,l){"use strict";l.r(e);var r=l(182),n=l(685),o={name:"MainHero",components:{IconChevronRight:l.n(n).a},mixins:[r.a],props:{heroImg:{type:String,default:""},heroTitle:{type:String,default:""}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:""},{label:"About Us",slug:"about"},{label:"Our Services",slug:"services"},{label:"Our Approach",slug:"approach"},{label:"Insights",slug:"insights"}]}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen}}},c=l(11),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"relative overflow-hidden"},[l("section",[l("div",{staticClass:"pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden"},[l("div",{staticClass:"mx-auto max-w-7xl lg:px-8"},[l("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-8"},[l("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"},[l("div",{staticClass:"lg:py-24"},[l("a",{staticClass:"inline-flex items-center text-white bg-GunMetal rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",attrs:{href:"#"}},[l("span",{staticClass:"px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-orange-500 rounded-full"},[t._v("We're hiring")]),t._v(" "),l("span",{staticClass:"ml-4 text-sm"},[t._v("Visit our careers page")]),t._v(" "),l("IconChevronRight",{staticClass:"ml-2 w-5 h-5 text-orange-500",attrs:{"aria-hidden":"true"}})],1),t._v(" "),t._m(0),t._v(" "),l("p",{staticClass:"mt-3 text-base dark:text-gray-300 text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"},[t._v("\n                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt\n                amet fugiat veniam occaecat fugiat.\n              ")])])]),t._v(" "),l("div",{staticClass:"mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative"},[l("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"},[l("client-only",[l("cld-image",{staticClass:"h-full w-full object-cover",attrs:{"public-id":t.heroImg,alt:t.heroTitle,quality:"auto",width:"100%","fetch-format":"auto",responsive:"",loading:"lazy"}},[l("cld-placeholder",{attrs:{type:"blur"}})],1)],1)],1)])])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"mt-4 text-4xl tracking-tight font-extrabold dark:text-white text-GunMetalDk sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"},[l("span",{staticClass:"block"},[t._v("A better way to")]),t._v(" "),l("span",{staticClass:"block text-orange-500"},[t._v("ship web apps")])])}],!1,null,null,null);e.default=component.exports}}]);