(window.webpackJsonp=window.webpackJsonp||[]).push([[43,7,40],{661:function(t,e,l){"use strict";l.r(e);var r={name:"VCloudImage",props:{publicId:{type:String,required:!0},cloudQuality:{type:String,default:"auto"},cloudWidth:{type:String,default:"auto"},cloudCrop:{type:String,default:"fill"},cloudFetchFormat:{type:String,default:"auto"},cloudLoading:{type:String,default:"lazy"},cloudPlaceholder:{type:String,default:"blur"},cloudRounded:{type:String,default:"0"},cloudGravity:{type:String,default:null},cloudClasses:{type:String,default:"h-full w-full object-cover"},cloudIsResponsive:{type:Boolean,default:!0}}},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("client-only",[l("cld-image",{class:t.cloudClasses,attrs:{"public-id":t.publicId,alt:t.publicId,quality:t.cloudQuality,crop:t.cloudCrop,width:t.cloudWidth,rounded:t.cloudRounded,"fetch-format":t.cloudFetchFormat,gravity:t.cloudGravity,responsive:t.cloudIsResponsive,loading:t.cloudLoading}},[t.cloudPlaceholder?l("cld-placeholder",{attrs:{type:t.cloudPlaceholder}}):t._e()],1)],1)],1)}),[],!1,null,"cffb64e6",null);e.default=component.exports},664:function(t,e,l){"use strict";l.r(e);var r={name:"ContactForm",mixins:[l(188).a],data:function(){return{isActive:!1,contactData:[{header:"form-name",icon:"",class:"form-input hidden",value:"contact-section-us-form",required:"",placeholder:"",type:"hidden",visibility:"hidden"},{header:"Name",icon:"",class:"form-input shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"How should we address you?",type:"text",visibility:""},{header:"Email",icon:"mail",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"you@example.com",type:"email",visibility:""},{header:"Phone",icon:"phone",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"",placeholder:"+0 (000) 000-0000",type:"tel",visibility:""}]}}},o=l(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bg-white dark:bg-GunMetal py-30 sm:py-24"},[l("section",[l("div",{staticClass:"pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"},[l("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"},[l("div",[l("div",[l("div",{staticClass:"max-w-md mx-auto sm:max-w-lg lg:mx-0"},[l("h2",{staticClass:"font-futura text-4xl font-extrabold tracking-tight xs:text-6xl sm:text-6xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n                Let's Connect\n              ")]),t._v(" "),l("p",{staticClass:"mt-4 text-lg text-gray-500 font-medium dark:text-gray-300 sm:mt-3",attrs:{"data-aos":"fade-up"}},[t._v("\n                Over coffee, tea, or remotely...\n              ")]),t._v(" "),l("form",{staticClass:"mt-9 grid grid-cols-1",attrs:{"data-aos":"fade-up",method:"post",enctype:"multipart/form-data",name:"contact-us-form","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[t._l(t.contactData,(function(e,r){return l("div",{key:"contact-section"+r,staticClass:"sm:col-span-2",class:e.visibility},[e.visibility?t._e():l("div",{staticClass:"flex justify-between pt-6"},[l("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:e.name}},[t._v(t._s(e.header))]),t._v(" "),e.required?t._e():l("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:e.name}},[t._v("Optional")])]),t._v(" "),l("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[e.icon?l("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[l("v-icon",{staticClass:"h-5 w-5 font-medium text-gray-400",attrs:{name:e.icon,"aria-hidden":"true"}})],1):t._e(),t._v(" "),l("input",{staticClass:"text-gray-300",class:e.class,attrs:{id:e.name,type:e.type,name:e.name,autocomplete:e.name,placeholder:e.placeholder}})])])})),t._v(" "),t._m(0),t._v(" "),l("div",{staticClass:"text-right sm:col-span-2",attrs:{"data-aos":"fade-up"}},[l("button",{staticClass:"ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6",attrs:{id:"submit_button",role:"button",type:"submit",value:"Ship it"}},[l("span",{staticClass:"text-2xl font-bold"},[t._v("Ship it")]),t._v(" "),l("v-icon",{staticClass:"h-8 w-8 ml-2",attrs:{name:"arrow-right"}})],1)])],2)])])])]),t._v(" "),l("div",{staticClass:"sm:mx-auto sm:max-w-3xl sm:px-6"},[l("div",{staticClass:"py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[l("div",{staticClass:"hidden sm:block"},[l("div",{staticClass:"absolute inset-y-0 left-1/2 w-screen bg-gray-200 rounded-l-xl lg:left-80 lg:right-0 lg:w-full",attrs:{"data-aos":"fade-left"}}),t._v(" "),l("svg",{staticClass:"absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0",attrs:{width:"404",height:"392",fill:"none",viewBox:"0 0 404 392","data-aos":"fade-up"}},[l("defs",[l("pattern",{attrs:{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[l("rect",{staticClass:"text-orange-500",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),l("rect",{attrs:{width:"404",height:"392",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"}})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"sm:col-span-2 pt-6"},[l("div",{staticClass:"flex justify-between"},[l("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:"how-can-we-help-you"}},[t._v("How can we help you?")]),t._v(" "),l("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:"how-can-we-help-you-optional"}},[t._v("Optional")])]),t._v(" "),l("div",{staticClass:"mt-1"},[l("textarea",{staticClass:"form-textarea shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",attrs:{id:"how-can-we-help-you",name:"how-can-we-help-you",placeholder:"Max. 500 characters","aria-describedby":"how-can-we-help-you-description",rows:"4"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12",attrs:{"data-aos":"fade-up-left"}},[e("img",{staticClass:"w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none",attrs:{src:"https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630611256/contact-section/contact.jpg",alt:"contact_img"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:l(124).default})},815:function(t,e,l){"use strict";l.r(e);var r=l(9),o=(l(44),{components:{},transition:{name:"fade",mode:"out-in"},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,r=t.params,e.next=3,l("bios",r.bio).fetch();case 3:return o=e.sent,e.abrupt("return",{bio:o});case 5:case"end":return e.stop()}}),e)})))()}}),n=l(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"bg-white dark:bg-GunMetal overflow-hidden mt-24"},[l("div",{staticClass:"relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"},[l("div",{staticClass:"hidden lg:block bg-gradient-to-b from-gray-50 dark:bg-gradient-to-b dark:from-GunMetalDarker dark:to-GunMetal absolute top-0 bottom-0 left-3/4 w-screen"}),t._v(" "),l("div",{staticClass:"mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"},[l("div",{staticClass:"mt-4"},[l("nuxt-link",{staticClass:"text-lg font-bold text-GunMetal dark:text-white underline hover:text-gray-600 dark-hover:text-gray-200",attrs:{to:"/about"}},[t._v("\n            Back to Team\n          ")]),t._v(" "),l("h2",{staticClass:"font-futura mt-8 text-base  text-orange-500 font-semibold tracking-wide uppercase"},[t._v("\n            "+t._s(t.bio.name)+"\n          ")]),t._v(" "),l("h3",{staticClass:"font-futura mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"},[t._v("\n            "+t._s(t.bio.role)+"\n          ")])],1)]),t._v(" "),l("div",{staticClass:"mt-4 lg:grid lg:grid-cols-2 lg:gap-8"},[l("div",{staticClass:"relative lg:row-start-1 lg:col-start-2"},[l("svg",{staticClass:"hidden lg:block absolute top-0 right-0 -mt-20 -mr-20",attrs:{width:"404",height:"384",fill:"bg-gray-200",viewBox:"0 0 404 384","aria-hidden":"true"}},[l("defs",[l("pattern",{attrs:{id:"de316486-4a29-4312-bdfc-fbce2132a2c1",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[l("rect",{staticClass:"text-gray-200 dark:text-GunMetalLt",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),l("rect",{attrs:{width:"404",height:"384",fill:"url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"}})]),t._v(" "),l("div",{staticClass:"relative text-base mx-auto max-w-prose lg:max-w-none"},[l("figure",[l("div",{staticClass:"aspect-w-12 aspect-h-7 lg:aspect-none"},[l("v-cloud-image",{staticClass:"rounded-lg shadow-lg object-cover object-center",attrs:{"public-id":"/team-headshots/"+t.bio.image,alt:t.bio.name,"cloud-quality":"auto","fetch-format":"jpg","cloud-loading":"lazy"}})],1)])])]),t._v(" "),l("div",{staticClass:"mt-8 lg:mt-0"},[l("div",{staticClass:"nuxt-content text-base mx-auto lg:max-w-none text-gray-500 leading-6"},[l("nuxt-content",{attrs:{document:t.bio}}),t._v(" "),l("div",{staticClass:"mt-4"},[l("span",{staticClass:"mr-4"},[t._v("Connect with "+t._s(t.bio.name.substring(0,t.bio.name.indexOf(" ")))+": ")]),t._v(" "),l("a",{staticClass:"cursor-pointer",attrs:{href:t.bio.linkedinProfileLink,target:"_blank"}},[l("span",{staticClass:"sr-only"},[t._v("LinkedIn")]),t._v(" "),l("v-icon",{staticClass:"mb-2 w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",attrs:{name:"linkedin"}})],1)])],1)])])])]),t._v(" "),l("contact-form")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VCloudImage:l(661).default,VIcon:l(124).default,ContactForm:l(664).default})}}]);