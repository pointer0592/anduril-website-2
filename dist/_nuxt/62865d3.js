(window.webpackJsonp=window.webpackJsonp||[]).push([[55,4,7,24,28,37],{662:function(t,e,r){"use strict";var n=r(22),l=r(4),o=r(125),d=r(31),c=r(23),m=r(61),f=r(310),x=r(92),h=r(309),v=r(6),y=r(62),_=r(93).f,w=r(53).f,C=r(30).f,k=r(311).trim,S="Number",N=l.Number,I=N.prototype,A=m(y(I))==S,T=function(t){if(x(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,l,o,d,c,code,m=h(t,"number");if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+m}for(d=(o=m.slice(2)).length,c=0;c<d;c++)if((code=o.charCodeAt(c))<48||code>l)return NaN;return parseInt(o,n)}return+m};if(o(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var L,j=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof j&&(A?v((function(){I.valueOf.call(r)})):m(r)!=S)?f(new N(T(e)),r,j):T(e)},G=n?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;G.length>M;M++)c(N,L=G[M])&&!c(j,L)&&C(j,L,w(N,L));j.prototype=I,I.constructor=j,d(l,S,j)}},663:function(t,e,r){"use strict";r.r(e);r(662);var n={name:"PrimaryHero",mixins:[r(188).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},company:{type:String,default:""},title:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"font-medium"},leadColors:{type:String,default:"text-gray-200 hover:text-gray-300"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColor:{type:String,default:"text-gray-200 hover:text-gray-300"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},bio:{type:String,default:""},mixBlendColor:{type:String,default:""},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:"",dropdown:!1},{label:"About Us",slug:"about",dropdown:!1},{label:"Our Solutions",slug:"solutions",dropdown:!0,subNavs:[{name:"All Solutions",tgt:"/solutions",description:""},{name:"KPI Strategy",tgt:"/solutions/strategy",description:"Put an end to indecision, uninformed decisions, and haphazard decisions. We'll help align your decision-making around a data-driven approach."},{name:"KPI Design",tgt:"/solutions/design",description:"Develop a universal language across you organization and answer key business questions buy developing a robust set of KPIs."},{name:"KPI Workflow",tgt:"/solutions/workflow",description:"Build a robust solution that fits your organizational needs, resources and technology capabilities."},{name:"ESG Solutions",tgt:"/solutions/esg",description:"Leverage our deep understanding of ESG and experience working with many types of stakeholder groups the ESG ecosystem."},{name:"Anduril Accelerators",tgt:"/solutions/accelerators",description:"Accelerate your growth by excelling in the critical elements that often hamper growth."}]},{label:"Our Approach",slug:"approach",dropdown:!1},{label:"Insights",slug:"insights",dropdown:!1}],view:{atTopOfPage:!0}}},computed:{verticalAdjustment:function(){return this.center||""!==this.heroCopy?"pb-40":"pb-64"},primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-6xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center max-w-7xl mx-auto":"max-w-2xl "},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var t=this.copyCase,e=this.copyWeight,r=[];switch(t){case"uppercase":r.push("uppercase");break;case"base":default:r.push("")}switch(e){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r},heroLeadClasses:function(){var t=this.leadCase,e=this.leadWeight,r=[];switch(t){case"lowercase":r.push("");break;case"base":default:r.push("uppercase")}switch(e){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{},[r("div",{staticClass:"relative",style:t.heroSize},[r("div",{staticClass:"max-w-full mx-auto"},[r("div",{staticClass:"absolute inset-0"},[r("client-only",[r("cld-image",{staticClass:"h-full w-full object-cover z-1",attrs:{"public-id":t.heroImg,alt:t.heroTitle,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}}),t._v(" "),r("span",{staticClass:"absolute inset-0 mix-blend-multiply",class:t.mixBlendColor})],1)],1)]),t._v(" "),r("div",{staticClass:"my-auto h-full",class:t.verticalAdjustment},[r("div",{staticClass:"relative xl:px-32 lg:px-24 px-4 flex flex-col justify-end bg-transparent dark:bg-transparent h-full",class:t.sectionAlignment},[r("div",{staticClass:"max-w-5xl"},[r("h1",{staticClass:"font-bold font-futura",class:[t.textPlacement,t.primaryTextSize]},[r("span",{staticClass:"block text-white"},[t._v(t._s(t.heroTitle))])])]),t._v(" "),r("div",{staticClass:"max-w-2xl"},[t.heroLead?r("p",{staticClass:"mt-4 font-bold text-white",class:[t.heroLeadClasses,t.textPlacement,t.leadTextSize]},[t._v("\n            "+t._s(t.heroLead)+"\n          ")]):t._e(),t._v(" "),t.heroCopy?r("p",{staticClass:"mt-4 max-w-md font-medium text-base lg:text-lg",class:[t.heroCopyClasses,t.textPlacement,t.copyColor]},[t._v("\n            "+t._s(t.heroCopy)+"\n          ")]):t._e()]),t._v(" "),t.personName?r("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:t.divPlacement}):t._e(),t._v(" "),t.personName?r("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:t.divPlacement},[t.personTwoName&&t.isAnduril&&""!==t.bio?r("span",[t._v("Authors:")]):t.personName?r("span",[t._v("Author:")]):t._e(),t._v(" "),t.isAnduril?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personImage}},[t._v("\n            "+t._s(t.personName)+"\n          ")]):t._e(),t._v(" "),!t.isAnduril&&t.bio?r("a",{staticClass:"hover:underline text-black text-gray-200 hover:text-gray-300",attrs:{href:t.bio,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.personName)),t.title?r("span",[t._v(", "+t._s(t.title))]):t._e(),t.company?r("span",[t._v(", "+t._s(t.company))]):t._e()]):t._e(),t._v(" "),t.personName&&!t.isAnduril&&null===t.bio?r("span",[t._v(t._s(t.personName))]):t._e(),t._v(" "),t.personTwoName?r("span",[t._v("&")]):t._e(),t._v(" "),t.personTwoName&&t.isAnduril2?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personTwoImage}},[t._v("\n            "+t._s(t.personTwoName)+"\n          ")]):t._e(),t._v(" "),t.personTwoName&&!t.isAnduril?r("span",[t._v(t._s(t.personTwoName))]):t._e()],1):t._e(),t._v(" "),t.personName?r("p",{staticClass:"mt-2 text-base font-bold text-gray-200 hover:text-gray-300",class:t.textPlacement},[r("span",{staticClass:"text-base font-bold"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.published))+"\n          "),r("span",{attrs:{"aria-hidden":"true"}},[t._v("\n                        ·\n                      ")]),t._v(" "),r("span",{staticClass:"text-base font-bold"},[t._v(" "+t._s(t._f("formattime")(t.readingTime))+" min read ")])]):t._e(),t._v(" "),t.heroLinkCopy?r("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:t.divPlacement},["nuxt"===t.heroLinkType?r("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e(),t._v(" "),"href"===t.heroLinkType?r("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},664:function(t,e,r){"use strict";r.r(e);var n={name:"ContactForm",mixins:[r(188).a],data:function(){return{isActive:!1,contactData:[{header:"form-name",icon:"",class:"form-input hidden",value:"contact-section-us-form",required:"",placeholder:"",type:"hidden",visibility:"hidden"},{header:"Name",icon:"",class:"form-input shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"How should we address you?",type:"text",visibility:""},{header:"Email",icon:"mail",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"you@example.com",type:"email",visibility:""},{header:"Phone",icon:"phone",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"",placeholder:"+0 (000) 000-0000",type:"tel",visibility:""}]}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white dark:bg-GunMetal py-30 sm:py-24"},[r("section",[r("div",{staticClass:"pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"},[r("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"},[r("div",[r("div",[r("div",{staticClass:"max-w-md mx-auto sm:max-w-lg lg:mx-0"},[r("h2",{staticClass:"font-futura text-4xl font-extrabold tracking-tight xs:text-6xl sm:text-6xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n                Let's Connect\n              ")]),t._v(" "),r("p",{staticClass:"mt-4 text-lg text-gray-500 font-medium dark:text-gray-300 sm:mt-3",attrs:{"data-aos":"fade-up"}},[t._v("\n                Over coffee, tea, or remotely...\n              ")]),t._v(" "),r("form",{staticClass:"mt-9 grid grid-cols-1",attrs:{"data-aos":"fade-up",method:"post",enctype:"multipart/form-data",name:"contact-us-form","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[t._l(t.contactData,(function(e,n){return r("div",{key:"contact-section"+n,staticClass:"sm:col-span-2",class:e.visibility},[e.visibility?t._e():r("div",{staticClass:"flex justify-between pt-6"},[r("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:e.name}},[t._v(t._s(e.header))]),t._v(" "),e.required?t._e():r("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:e.name}},[t._v("Optional")])]),t._v(" "),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[e.icon?r("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[r("v-icon",{staticClass:"h-5 w-5 font-medium text-gray-400",attrs:{name:e.icon,"aria-hidden":"true"}})],1):t._e(),t._v(" "),r("input",{staticClass:"text-gray-300",class:e.class,attrs:{id:e.name,type:e.type,name:e.name,autocomplete:e.name,placeholder:e.placeholder}})])])})),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"text-right sm:col-span-2",attrs:{"data-aos":"fade-up"}},[r("button",{staticClass:"ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6",attrs:{id:"submit_button",role:"button",type:"submit",value:"Ship it"}},[r("span",{staticClass:"text-2xl font-bold"},[t._v("Ship it")]),t._v(" "),r("v-icon",{staticClass:"h-8 w-8 ml-2",attrs:{name:"arrow-right"}})],1)])],2)])])])]),t._v(" "),r("div",{staticClass:"sm:mx-auto sm:max-w-3xl sm:px-6"},[r("div",{staticClass:"py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[r("div",{staticClass:"hidden sm:block"},[r("div",{staticClass:"absolute inset-y-0 left-1/2 w-screen bg-gray-200 rounded-l-xl lg:left-80 lg:right-0 lg:w-full",attrs:{"data-aos":"fade-left"}}),t._v(" "),r("svg",{staticClass:"absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0",attrs:{width:"404",height:"392",fill:"none",viewBox:"0 0 404 392","data-aos":"fade-up"}},[r("defs",[r("pattern",{attrs:{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-orange-500",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:"404",height:"392",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"}})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sm:col-span-2 pt-6"},[r("div",{staticClass:"flex justify-between"},[r("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:"how-can-we-help-you"}},[t._v("How can we help you?")]),t._v(" "),r("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:"how-can-we-help-you-optional"}},[t._v("Optional")])]),t._v(" "),r("div",{staticClass:"mt-1"},[r("textarea",{staticClass:"form-textarea shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",attrs:{id:"how-can-we-help-you",name:"how-can-we-help-you",placeholder:"Max. 500 characters","aria-describedby":"how-can-we-help-you-description",rows:"4"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12",attrs:{"data-aos":"fade-up-left"}},[e("img",{staticClass:"w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none",attrs:{src:"https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630611256/contact-section/contact.jpg",alt:"contact_img"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:r(124).default})},669:function(t,e,r){"use strict";r.r(e);var n={name:"CardRows",mixins:[r(188).a],props:{cardTitle:{type:String,default:""},cardLead:{type:String,default:""},cardItems:{type:Array,required:!0},largeGridCols:{type:String,default:"3"}},computed:{largeGrid:function(){return"lg:grid-cols-".concat(this.largeGridCols)}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"bg-white dark:bg-GunMetal pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"},[r("div",{staticClass:"relative mx-auto divide-y-2 divide-gray-200 dark:divide-white lg:max-w-7xl"},[r("div",[t.cardTitle?r("h2",{staticClass:"font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl"},[t._v("\n          "+t._s(t.cardTitle)+"\n        ")]):t._e(),t._v(" "),t._t("title"),t._v(" "),r("template",{slot:"lead"},[t.cardLead?r("div",{staticClass:"mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"},[r("p",{staticClass:"text-xl text-gray-500 dark:text-gray-200"},[t._v("\n            "+t._s(t.cardLead)+"\n          ")]),t._v(" "),t._t("lead")],2):t._e()])],2),t._v(" "),r("div",{staticClass:"mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-full grid grid-cols-1 sm:max-w-5xl md:grid-cols-2 lg:max-w-7xl",class:t.largeGrid},t._l(t.cardItems,(function(e){return r("div",{key:e.id,staticClass:"flex flex-col rounded-0 shadow-lg overflow-hidden"},[r("div",{staticClass:"flex-1 bg-gray-50 dark:bg-GunMetalDk p-6 flex flex-col justify-between"},[r("div",{staticClass:"flex-1"},[e.areaLink?r("nuxt-link",{attrs:{to:e.areaLink}},[r("p",{staticClass:"text-sm font-medium text-orange-600 my-0",attrs:{"data-aos":"fade-up"}},[t._v("\n                "+t._s(e.area)+"\n              ")])]):r("p",{staticClass:"text-sm font-medium text-orange-600 my-0",attrs:{"data-aos":"fade-up"}},[t._v("\n                "+t._s(e.area)+"\n              ")]),t._v(" "),r("div",{staticClass:"block mt-1"},[r("p",{staticClass:"font-futura text-xl font-bold text-gray-900 dark:text-gray-100 my-0",attrs:{"data-aos":"fade-up"}},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),r("p",{staticClass:"mt-1 text-base text-gray-500 dark:text-gray-400",attrs:{"data-aos":"fade-up"}},[t._v("\n                  "+t._s(e.description)+"\n                ")])])],1),t._v(" "),e.readMore?r("div",{staticClass:"inline-flex justify-end",attrs:{"data-aos":"fade-up"}},[e.link?r("nuxt-link",{attrs:{to:e.link}},[r("p",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent underline",attrs:{"data-aos":"fade-up"}},[t._v("\n                  learn more...")])]):r("nuxt-link",{attrs:{to:e.slug}},[r("p",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent underline",attrs:{"data-aos":"fade-up"}},[t._v("\n                  learn more...")])])],1):r("div",{staticClass:"inline-flex justify-end mt-2",attrs:{"data-aos":"fade-up"}},[e.tgt?r("nuxt-link",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent",attrs:{to:""+e.path}},[e.linkLabel?r("span",[t._v("to "+t._s(e.linkLabel))]):r("span",[t._v("to "+t._s(e.title))]),t._v(" "),r("v-icon",{staticClass:"h-6 w-6 ml-2",attrs:{name:"arrow-right"}})],1):r("nuxt-link",{staticClass:"inline-flex items-center justify-center border border-transparent text-base font-bold uppercase rounded-0 text-orange-500 hover:text-orange-700 bg-transparent",attrs:{to:""+e.prePath+e.slug}},[e.linkLabel?r("span",[t._v("to "+t._s(e.linkLabel))]):r("span",[t._v("to "+t._s(e.title))]),t._v(" "),r("v-icon",{staticClass:"h-6 w-6 ml-2",attrs:{name:"arrow-right"}})],1)],1)])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:r(124).default})},670:function(t,e,r){"use strict";r.r(e);var n={name:"MediaBanner",props:{mediaBanner:{type:Object,default:function(){}}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative bg-gray-900"},[r("div",{staticClass:"relative h-56 bg-GunMetal dark:bg-GunMetalDk sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"},[r("img",{staticClass:"w-full h-full object-cover",attrs:{src:t.mediaBanner.image,alt:t.mediaBanner.title}})]),t._v(" "),r("div",{staticClass:"relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32"},[r("div",{staticClass:"md:ml-auto md:w-1/2 md:pl-10"},[r("h2",{staticClass:"font-futura text-base font-semibold uppercase tracking-wider text-gray-300"},[t._v("\n        "+t._s(t.mediaBanner.caption)+"\n      ")]),t._v(" "),r("p",{staticClass:"mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl"},[t._v("\n        "+t._s(t.mediaBanner.lead)+"\n      ")]),t._v(" "),r("p",{staticClass:"mt-3 text-lg text-gray-300"},[t._v("\n        "+t._s(t.mediaBanner.copy)+"\n      ")]),t._v(" "),r("div",{staticClass:"mt-8"},[r("div",{staticClass:"inline-flex rounded-md shadow"},[r("nuxt-link",{staticClass:"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50",attrs:{to:t.mediaBanner.link}},[t._v("\n            "+t._s(t.mediaBanner.linkLabel)+"\n            "),r("v-icon",{staticClass:"-mr-1 ml-3 h-5 w-5 text-gray-400",attrs:{name:"external-link","aria-hidden":"true"}})],1)],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:r(124).default})},690:function(t,e,r){"use strict";r.r(e);var n={name:"SubSolutionSection",mixins:r(188).a,props:{solution:{type:Object,default:function(){}}}},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"relative overflow-hidden"},[r("div",{staticClass:"bg-white dark:bg-GunMetal px-4 sm:px-6 lg:px-8 py-6 sm:py-24"},[r("div",{staticClass:"relative mx-auto lg:max-w-5xl"},[r("div",{staticClass:"mx-auto pt-8 pb-12 px-4 sm:px-0 sm:pb-16 lg:max-w-3xl lg:pt-16 lg:grid lg:grid-cols-1 lg:gap-x-8",attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"lg:col-start-1"},[r("h2",{staticClass:"font-futura font-medium text-orange-500",attrs:{id:"features-heading2","data-aos":"fade-up"}},[t._v("\n              "+t._s(t.solution.tagline))]),t._v(" "),r("p",{staticClass:"font-futura mt-2 text-4xl font-extrabold tracking-wide text-GunMetal dark:text-white tracking-tight",attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.solution.title))]),t._v(" "),r("div",{staticClass:"border border-b-1 border-orange-50 dark:border-orange-400 mt-4 w-16"}),t._v(" "),r("p",{staticClass:"mt-4 text-xl font-semibold text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.solution.description))]),t._v(" "),""!==t.solution.body.title?r("div",t._l(t.solution.body,(function(e,n){return r("p",{key:"para-"+n,staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v(t._s(e))])})),0):t._e()])])])])])])}),[],!1,null,null,null);e.default=component.exports},814:function(t,e,r){"use strict";r.r(e);var n=r(9),l=(r(44),{mixins:r(188).a,asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("solutions/subsolutions",n.subsolution).fetch();case 3:return l=e.sent,e.next=6,r("solutions/subsolutions").where({parentSolution:{$eq:l.parentSolution}}).fetch();case 6:return o=e.sent,e.next=9,r("solutions").fetch();case 9:return d=e.sent,e.abrupt("return",{subSolution:l,subSolutions:o,solutions:d});case 11:case"end":return e.stop()}}),e)})))()}}),o=r(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("primary-hero",{attrs:{"hero-img":"/hero-images/solutions/"+t.subSolution.heroImage,"hero-title":t.subSolution.area,"hero-lead":t.subSolution.title}}),t._v(" "),r("sub-solution-section",{attrs:{id:"anduril-core",solution:t.subSolution}}),t._v(" "),""!==t.subSolution.banner.bannerTitle?r("media-banner",{attrs:{id:"subSolution.banner.title","media-banner":t.subSolution.banner}}):t._e(),t._v(" "),r("card-rows",{attrs:{"card-items":t.subSolutions}},[r("template",{slot:"title"},[r("h2",{staticClass:"font-futura text-3xl tracking-tight font-extrabold text-GunMetal dark:text-white sm:text-4xl"},[r("span",{staticClass:"text-orange-500"},[t._v(t._s(t.subSolution.area))]),t._v(" solutions\n      ")])])],2),t._v(" "),r("contact-form")],1)}),[],!1,null,"7c8fb1fa",null);e.default=component.exports;installComponents(component,{PrimaryHero:r(663).default,SubSolutionSection:r(690).default,MediaBanner:r(670).default,CardRows:r(669).default,ContactForm:r(664).default})}}]);