(window.webpackJsonp=window.webpackJsonp||[]).push([[3,40],{661:function(t,e,o){"use strict";o.r(e);var l={name:"VCloudImage",props:{publicId:{type:String,required:!0},cloudQuality:{type:String,default:"auto"},cloudWidth:{type:String,default:"auto"},cloudCrop:{type:String,default:"fill"},cloudFetchFormat:{type:String,default:"auto"},cloudLoading:{type:String,default:"lazy"},cloudPlaceholder:{type:String,default:"blur"},cloudRounded:{type:String,default:"0"},cloudGravity:{type:String,default:null},cloudClasses:{type:String,default:"h-full w-full object-cover"},cloudIsResponsive:{type:Boolean,default:!0}}},r=o(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("client-only",[o("cld-image",{class:t.cloudClasses,attrs:{"public-id":t.publicId,alt:t.publicId,quality:t.cloudQuality,crop:t.cloudCrop,width:t.cloudWidth,rounded:t.cloudRounded,"fetch-format":t.cloudFetchFormat,gravity:t.cloudGravity,responsive:t.cloudIsResponsive,loading:t.cloudLoading}},[t.cloudPlaceholder?o("cld-placeholder",{attrs:{type:t.cloudPlaceholder}}):t._e()],1)],1)],1)}),[],!1,null,"cffb64e6",null);e.default=component.exports},683:function(t,e,o){"use strict";o.r(e);var l={name:"Bio",mixins:[o(188).a],props:{bio:{type:Object,required:!0}}},r=o(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("div",{staticClass:"space-y-4"},[o("div",{staticClass:"aspect-w-3 aspect-h-2",attrs:{"data-aos":"fade-up"}},[o("v-cloud-image",{attrs:{"public-id":"/headshots/"+t.bio.image,alt:t.bio.name,"cloud-loading":"lazy","cloud-classes":"object-cover shadow-lg rounded-lg","cloud-placeholder":"blur"}})],1),t._v(" "),o("div",{staticClass:"space-y-2"},[o("div",{staticClass:"text-lg font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1"},[o("h3",{staticClass:"font-futura ",attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.bio.name))]),t._v(" "),o("p",{staticClass:"text-orange-500",attrs:{"data-aos":"fade-up"}},[t._v("\n          "+t._s(t.bio.role)+"\n        ")])]),t._v(" "),o("div",{staticClass:"text-sm font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1",attrs:{"data-aos":"fade-up"}},[o("p",[t._v("\n          "+t._s(t._f("truncate")(t.bio.intro,200))+"\n        ")]),t._v(" "),o("nuxt-link",{attrs:{to:"/about/"+t.bio.slug}},[o("p",{staticClass:"text-base text-gray-500 dark:text-gray-200 underline hover:text-gray-600 dark-hover:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("\n          more...")])])],1),t._v(" "),o("ul",{staticClass:"flex space-x-5"},[o("li",[o("a",{staticClass:"cursor-pointer",attrs:{href:t.bio.linkedinProfileLink,"data-aos":"fade-up"}},[o("span",{staticClass:"sr-only"},[t._v("LinkedIn")]),t._v(" "),o("v-icon",{staticClass:"w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",attrs:{name:"linkedin"}})],1)]),t._v(" "),o("li",[o("nuxt-link",{staticClass:"cursor-pointer",attrs:{to:"/about/"+t.bio.slug,"data-aos":"fade-up"}},[o("span",{staticClass:"sr-only"},[t._v("Member Bio")]),t._v(" "),o("v-icon",{staticClass:"w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",attrs:{name:"book-open"}})],1)],1)])])])])}),[],!1,null,"ec6dfb40",null);e.default=component.exports;installComponents(component,{VCloudImage:o(661).default,VIcon:o(124).default})}}]);