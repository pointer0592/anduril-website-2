(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{510:function(t,e,n){"use strict";n.r(e);n(2),n(3),n(4),n(5);var r={name:"InsightCard",mixins:n(158).a,props:{insight:{type:Object,default:function(){}}},computed:{avatarSpace:function(){return""!==this.insight.authorTwo.image?"-space-x-1 pr-8":"pr-2"}}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col rounded-0 shadow-lg hover:shadow-xl overflow-hidden"},[n("nuxt-link",{attrs:{to:t.insight.path}},[t.insight.coverImg&&!t.insight.isMockup?n("div",{staticClass:"flex-1",attrs:{"data-aos":"fade-up"}},[n("nuxt-img",{staticClass:"h-48 w-full object-cover z-1",attrs:{provider:"cloudinary",src:"/insights/"+t.insight.coverImg,alt:t.insight.title,quality:"auto",crop:"fill",format:"auto",loading:"lazy",placeholder:"blur"}})],1):t._e(),t._v(" "),t.insight.videoSrc?n("div",{staticClass:"h-48 w-full object-cover lazyload",attrs:{"data-aos":"fade-up"}},[n("video",{attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:t.insight.videoSrc,type:"video/mp4"}}),t._v("\n          Your browser does not support the video tag.\n        ")])]):t._e()]),t._v(" "),n("div",{staticClass:"flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between"},[n("nuxt-link",{staticClass:"block mt-2",attrs:{to:"/insights/"+t.insight.slug}},[n("div",{staticClass:"flex-1 h-40"},[n("p",{staticClass:"text-xs font-medium text-orange-500",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.insight.category)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-lg font-semibold text-GunMetal dark:text-white pt-2 leading-6",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.insight.title)+"\n          ")]),t._v(" "),n("div",{staticClass:"pt-2"},[t.insight.lead?n("p",{staticClass:"text-sm text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(t._f("truncate")(t.insight.lead,150))+"\n            ")]):n("p",{staticClass:"h-24 mt-3 text-sm text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(t._f("truncate")(t.insight.description,150))+"\n            ")])])])]),t._v(" "),n("div",{staticClass:"h-16 mt-6 flex items-center space-x-4"},[t.insight.author.image?n("div",{staticClass:"flex overflow-hidden",class:t.avatarSpace,attrs:{"data-aos":"fade-up"}},[t.insight.author.image?n("nuxt-img",{staticClass:"h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400",attrs:{provider:"cloudinary",src:"/headshots/"+t.insight.author.image,alt:t.insight.author.name,quality:"auto",format:"png",loading:"lazy",crop:"thumb",rounded:"50",width:"50",gravity:"face"}}):t._e(),t._v(" "),t.insight.authorTwo.image?n("nuxt-img",{staticClass:"h-10 w-10 rounded-full m-1 ring-2 ring-gray-400 dark:ring-gray-400",attrs:{provider:"cloudinary",src:"/headshots/"+t.insight.authorTwo.image,alt:t.insight.authorTwo.name,quality:"auto",format:"png",loading:"lazy",crop:"thumb",rounded:"50",width:"50",gravity:"face"}}):t._e()],1):t._e(),t._v(" "),n("div",[t.insight.author.name?n("div",{staticClass:"flex items-center flex-wrap text-sm font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t.insight.author.anduril?n("nuxt-link",{staticClass:"hover:underline hover:text-GunMetalLt dark-hover:text-gray-300",attrs:{to:"/about/"+t.insight.author.image}},[t._v("\n              "+t._s(t.insight.author.name)+"\n            ")]):t._e(),t._v(" "),!1===t.insight.author.anduril&&""!==t.insight.author.bio?n("a",{staticClass:"hover:underline hover:text-GunMetalLt dark-hover:text-gray-300 cursor-pointer",attrs:{href:t.insight.bio,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n              "+t._s(t.insight.author.name)),t.insight.author.title?n("span",[t._v(", "+t._s(t.insight.author.title))]):t._e(),t.insight.author.company?n("span",[t._v("\n, "+t._s(t.insight.author.company)+"\n")]):t._e()]):t._e(),t._v(" "),!1==!t.insight.author.anduril&&""===t.insight.author.bio?n("span",[t._v(t._s(t.insight.author.name))]):t._e(),t._v(" "),t.insight.authorTwo.name?n("span",[t._v("  &  ")]):t._e(),t._v(" "),t.insight.authorTwo.anduril?n("nuxt-link",{staticClass:"hover:underline hover:text-GunMetalLt dark-hover:text-gray-300",attrs:{to:"/about/"+t.insight.authorTwo.image}},[t._v("\n              "+t._s(t.insight.authorTwo.name)+"\n            ")]):t._e(),t._v(" "),t.insight.authorTwo.name&&!t.insight.authorTwo.anduril?n("span",[t._v(t._s(t.insight.author.name))]):t._e()],1):t._e(),t._v(" "),n("div",{staticClass:"mt-2 text-xs font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[n("span",{staticClass:"font-medium"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.insight.published))+"\n            "),n("span",{attrs:{"aria-hidden":"true"}},[t._v("·")]),t._v(" "),n("span",{staticClass:"font-medium"},[t._v(" "+t._s(t._f("formattime")(t.insight.readingTime))+" min read ")])])])])],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports}}]);