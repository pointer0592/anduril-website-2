(window.webpackJsonp=window.webpackJsonp||[]).push([[38,40],{661:function(t,l,e){"use strict";e.r(l);var o={name:"VCloudImage",props:{publicId:{type:String,required:!0},cloudQuality:{type:String,default:"auto"},cloudWidth:{type:String,default:"auto"},cloudCrop:{type:String,default:"fill"},cloudFetchFormat:{type:String,default:"auto"},cloudLoading:{type:String,default:"lazy"},cloudPlaceholder:{type:String,default:"blur"},cloudRounded:{type:String,default:"0"},cloudGravity:{type:String,default:null},cloudClasses:{type:String,default:"h-full w-full object-cover"},cloudIsResponsive:{type:Boolean,default:!0}}},d=e(8),component=Object(d.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("client-only",[e("cld-image",{class:t.cloudClasses,attrs:{"public-id":t.publicId,alt:t.publicId,quality:t.cloudQuality,crop:t.cloudCrop,width:t.cloudWidth,rounded:t.cloudRounded,"fetch-format":t.cloudFetchFormat,gravity:t.cloudGravity,responsive:t.cloudIsResponsive,loading:t.cloudLoading}},[t.cloudPlaceholder?e("cld-placeholder",{attrs:{type:t.cloudPlaceholder}}):t._e()],1)],1)],1)}),[],!1,null,"cffb64e6",null);l.default=component.exports},822:function(t,l,e){"use strict";e.r(l);var o={name:"SubSolutionsSection",mixins:e(188).a,props:{solutionItems:{type:Array,default:function(){return[]}}}},d=e(8),component=Object(d.a)(o,(function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",[e("section",{staticClass:"relative overflow-hidden"},[e("div",{staticClass:"bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-0 sm:py-0"},[e("div",{staticClass:"relative mx-auto lg:max-w-7xl"},t._l(t.solutionItems,(function(l,o){return e("div",{key:l.name,staticClass:"flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"},[e("div",{staticClass:"px-4 sm:px-0 bg-gray-100 overflow-hidden lg:max-w-7xl my-auto  rounded-xl shadow-lg",class:[o%2==0?"flex-auto lg:col-start-7":"lg:col-start-1","lg:row-start-1 lg:col-span-6"],attrs:{"data-aos":"fade-up"}},[e("v-cloud-image",{attrs:{"public-id":"/solutions-page/"+l.heroImage,classes:"w-full h-full"}})],1),t._v(" "),e("div",{staticClass:"mx-auto pt-8 pb-12 px-4 sm:px-0 sm:pb-16 lg:max-w-7xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8",class:[o%2==0?"lg:col-start-1":"lg:col-start-7","lg:row-start-1 lg:col-span-6"],attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"lg:col-start-1"},[e("h2",{staticClass:"font-futura font-medium text-orange-500",attrs:{id:"features-heading2","data-aos":"fade-up"}},[t._v(t._s(l.tagline))]),t._v(" "),e("p",{staticClass:"font-futura mt-4 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight",attrs:{"data-aos":"fade-up"}},[t._v(t._s(l.title))]),t._v(" "),e("div",{staticClass:"border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16"}),t._v(" "),e("p",{staticClass:"mt-4 text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v(t._s(l.description))]),t._v(" "),e("dl",{staticClass:"mt-4 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2",attrs:{"data-aos":"fade-up"}},t._l(l.subSolutions,(function(l){return e("div",{key:l.name},[e("dt",{staticClass:"font-medium text-GunMetal dark:text-white font-futura",attrs:{"data-aos":"fade-up"}},[t._v(t._s(l.name))]),t._v(" "),e("dd",{staticClass:"mt-2 text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v(t._s(l.description))])])})),0)])])])})),0)])])])}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{VCloudImage:e(661).default})}}]);