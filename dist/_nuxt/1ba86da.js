(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{662:function(e,t,r){"use strict";var n=r(22),o=r(4),l=r(125),d=r(31),c=r(23),m=r(61),h=r(310),f=r(92),x=r(309),y=r(6),v=r(62),_=r(93).f,w=r(53).f,k=r(30).f,C=r(311).trim,S="Number",N=o.Number,T=N.prototype,I=m(v(T))==S,A=function(e){if(f(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,n,o,l,d,c,code,m=x(e,"number");if("string"==typeof m&&m.length>2)if(43===(t=(m=C(m)).charCodeAt(0))||45===t){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(m.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+m}for(d=(l=m.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>o)return NaN;return parseInt(l,n)}return+m};if(l(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var L,P=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof P&&(I?y((function(){T.valueOf.call(r)})):m(r)!=S)?h(new N(A(t)),r,P):A(t)},E=n?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),B=0;E.length>B;B++)c(N,L=E[B])&&!c(P,L)&&k(P,L,w(N,L));P.prototype=T,T.constructor=P,d(o,S,P)}},826:function(e,t,r){"use strict";r.r(t);r(662);var n={name:"ResponsiveHero",mixins:[r(188).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},company:{type:String,default:""},title:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroTitleTwo:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"font-medium"},leadColors:{type:String,default:"text-gray-200 hover:text-gray-300"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColor:{type:String,default:"text-gray-200 hover:text-gray-300"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},bio:{type:String,default:""},mixBlendColor:{type:String,default:""},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:"",dropdown:!1},{label:"About Us",slug:"about",dropdown:!1},{label:"Our Solutions",slug:"solutions",dropdown:!0,subNavs:[{name:"All Solutions",tgt:"/solutions",description:""},{name:"KPI Strategy",tgt:"/solutions/strategy",description:"Put an end to indecision, uninformed decisions, and haphazard decisions. We'll help align your decision-making around a data-driven approach."},{name:"KPI Design",tgt:"/solutions/design",description:"Develop a universal language across you organization and answer key business questions buy developing a robust set of KPIs."},{name:"KPI Workflow",tgt:"/solutions/workflow",description:"Build a robust solution that fits your organizational needs, resources and technology capabilities."},{name:"ESG Solutions",tgt:"/solutions/esg",description:"Leverage our deep understanding of ESG and experience working with many types of stakeholder groups the ESG ecosystem."},{name:"Anduril Accelerators",tgt:"/solutions/accelerators",description:"Accelerate your growth by excelling in the critical elements that often hamper growth."}]},{label:"Our Approach",slug:"approach",dropdown:!1},{label:"Insights",slug:"insights",dropdown:!1}],view:{atTopOfPage:!0}}},computed:{primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-6xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center":""},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var e=this.copyCase,t=this.copyWeight,r=[];switch(e){case"uppercase":r.push("uppercase");break;case"base":default:r.push("")}switch(t){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r},heroLeadClasses:function(){var e=this.leadCase,t=this.leadWeight,r=[];switch(e){case"lowercase":r.push("");break;case"base":default:r.push("uppercase")}switch(t){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r}}},o=r(8),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"relative bg-white dark:bg-GunMetal overflow-hidden"},[r("div",{staticClass:"max-w-7xl mx-auto"},[r("div",{staticClass:"relative z-10 pb-8 bg-white dark:bg-GunMetal sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"},[r("svg",{staticClass:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-GunMetal transform translate-x-1/2",attrs:{fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"}},[r("polygon",{attrs:{points:"50,0 100,0 50,100 0,100"}})]),e._v(" "),r("main",{staticClass:"mt-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-40"},[r("div",{staticClass:"sm:text-center lg:text-left"},[e.heroLead?r("h3",{staticClass:"mb-2 font-semibold uppercase mt-2 text-xs text-orange-500 sm:text-sm sm:max-w-xl sm:mx-auto md:text-sm lg:mx-0"},[e._v("\n            "+e._s(e.heroLead)+"\n          ")]):e._e(),e._v(" "),r("h1",{staticClass:"text-4xl tracking-tight font-extrabold text-GunMetal dark:text-white font-futura sm:text-5xl md:text-6xl"},[r("span",{staticClass:"block xl:inline"},[e._v(e._s(e.heroTitle))]),e._v("\n            "+e._s(" ")+"\n            "),e.heroTitleTwo?r("span",{staticClass:"block font-futura text-orange-500 xl:inline"},[e._v(e._s(e.heroTitleTwo))]):e._e()]),e._v(" "),e.heroCopy?r("p",{staticClass:"mt-3 text-sm text-gray-500 dark:text-gray-200 sm:mt-5 sm:text-base sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0"},[e._v("\n            "+e._s(e.heroCopy)+"\n          ")]):e._e(),e._v(" "),e.personName?r("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:e.divPlacement}):e._e(),e._v(" "),e.personName?r("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:e.divPlacement},[e.personTwoName&&e.isAnduril&&""!==e.bio?r("span",[e._v("Authors:")]):r("span",[e._v("Author:")]),e._v(" "),e.isAnduril?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+e.personImage}},[e._v("\n              "+e._s(e.personName)+"\n            ")]):e._e(),e._v(" "),!e.isAnduril&&e.bio?r("a",{staticClass:"hover:underline text-black text-gray-200 hover:text-gray-300",attrs:{href:e.bio,target:"_blank",rel:"noopener noreferrer"}},[e._v("\n              "+e._s(e.personName)),e.title?r("span",[e._v(", "+e._s(e.title))]):e._e(),e.company?r("span",[e._v(", "+e._s(e.company))]):e._e()]):e._e(),e._v(" "),e.personName&&!e.isAnduril&&""===e.bio?r("span",[e._v(e._s(e.personName))]):e._e(),e._v(" "),e.personTwoName?r("span",[e._v("&")]):e._e(),e._v(" "),e.personTwoName&&e.isAnduril2?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+e.personTwoImage}},[e._v("\n              "+e._s(e.personTwoName)+"\n            ")]):e._e(),e._v(" "),e.personTwoName&&!e.isAnduril?r("span",[e._v(e._s(e.personTwoName))]):e._e()],1):e._e(),e._v(" "),e.personName?r("p",{staticClass:"mt-2 text-base font-bold text-gray-200 hover:text-gray-300",class:e.textPlacement},[r("span",{staticClass:"text-base font-bold"},[e._v("Published:")]),e._v(" "+e._s(e._f("formatdate")(e.published))+"\n            "),r("span",{attrs:{"aria-hidden":"true"}},[e._v("\n                        ·\n                      ")]),e._v(" "),r("span",{staticClass:"text-base font-bold"},[e._v(" "+e._s(e._f("formattime")(e.readingTime))+" min read ")])]):e._e(),e._v(" "),e.heroLinkCopy?r("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:e.divPlacement},["nuxt"===e.heroLinkType?r("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:e.heroLinkPath}},[e._v("\n              "+e._s(e.heroLinkCopy)+"\n            ")]):e._e(),e._v(" "),"href"===e.heroLinkType?r("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:e.heroLinkPath}},[e._v("\n              "+e._s(e.heroLinkCopy)+"\n            ")]):e._e()],1):e._e()])])])]),e._v(" "),r("div",{staticClass:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[r("client-only",[r("cld-image",{staticClass:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",attrs:{"public-id":e.heroImg,alt:e.heroTitle,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}}),e._v(" "),r("span",{staticClass:"absolute inset-0 mix-blend-multiply",class:e.mixBlendColor})],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);