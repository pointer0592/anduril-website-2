(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{594:function(t,e,r){"use strict";r.r(e);var n={name:"NewsletterCard",props:{newsletter:{type:Object,default:function(){}}},computed:{logoToggle:function(){return"light-mode"===this.$colorMode.preference?this.newsletter.logo:"".concat(this.newsletter.logo,"-dark")}}},l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-orange-100 dark:bg-GunMetalDk relative m-0 flex text-GunMetal dark:text-white rounded-0 shadow-lg hover:shadow-xl overflow-hidden"},[r("div",{staticClass:"w-full flex flex-col"},[r("div",{staticClass:"p-4 pb-0 flex-1"},[r("v-icon",{staticClass:"h-20 w-auto p-4",attrs:{"data-aos":"fade-up",name:t.logoToggle}}),t._v(" "),r("p",{staticClass:"text-xs text-center font-bold text-orange-500 uppercase pt-2",attrs:{"data-aos":"fade-up"}},[t._v("\n        "+t._s(t.newsletter.category))]),t._v(" "),r("h3",{staticClass:"text-base text-center font-extrabold text-GunMetal dark:text-white leading-6",attrs:{"data-aos":"fade-up"}},[t._v("\n        "+t._s(t.newsletter.title))]),t._v(" "),r("p",{staticClass:"text-xs text-center font-bold text-GunMetalLighter dark:text-gray-200 uppercase pb-4",attrs:{"data-aos":"fade-up"}},[t._v("\n        "+t._s(t._f("formatdate")(t.newsletter.published)))])],1),t._v(" "),r("div",{staticClass:"border border-b-1 border-GunMetal"}),t._v(" "),r("div",{staticClass:"bg-gray-50 dark:bg-gray-600 px-6 py-8 flex flex-col justify-between"},[r("p",{staticClass:"text-sm text-gray-500 dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.newsletter.description))]),t._v(" "),r("div",{staticClass:"inline-flex justify-end",attrs:{"data-aos":"fade-up"}},[r("nuxt-link",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent",attrs:{to:"/newsletters/"+t.newsletter.slug}},[r("span",[t._v("read")]),t._v(" "),r("v-icon",{staticClass:"h-6 w-6 ml-2",attrs:{name:"arrow-right"}})],1)],1)])])])}),[],!1,null,"035b682e",null);e.default=component.exports;installComponents(component,{VIcon:r(292).default})}}]);