(window.webpackJsonp=window.webpackJsonp||[]).push([[47,29,33,40],{485:function(t,e,n){"use strict";n.r(e);n(2),n(3),n(4),n(5),n(245);var r={name:"PrimaryHero",mixins:[n(158).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},company:{type:String,default:""},title:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"font-medium"},leadColors:{type:String,default:"text-gray-200 hover:text-gray-300"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColor:{type:String,default:"text-gray-200 hover:text-gray-300"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},bio:{type:String,default:""},mixBlendColor:{type:String,default:""},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:"",dropdown:!1},{label:"About Us",slug:"about",dropdown:!1},{label:"Our Solutions",slug:"solutions",dropdown:!0,subNavs:[{name:"All Solutions",tgt:"/solutions",description:""},{name:"KPI Strategy",tgt:"/solutions/strategy",description:"Put an end to indecision, uninformed decisions, and haphazard decisions. We'll help align your decision-making around a data-driven approach."},{name:"KPI Design",tgt:"/solutions/design",description:"Develop a universal language across you organization and answer key business questions buy developing a robust set of KPIs."},{name:"KPI Workflow",tgt:"/solutions/workflow",description:"Build a robust solution that fits your organizational needs, resources and technology capabilities."},{name:"ESG Solutions",tgt:"/solutions/esg",description:"Leverage our deep understanding of ESG and experience working with many types of stakeholder groups the ESG ecosystem."},{name:"Anduril Accelerators",tgt:"/solutions/accelerators",description:"Accelerate your growth by excelling in the critical elements that often hamper growth."}]},{label:"Our Approach",slug:"approach",dropdown:!1},{label:"Insights",slug:"insights",dropdown:!1}],view:{atTopOfPage:!0}}},computed:{verticalAdjustment:function(){return this.center||""!==this.heroCopy?"pb-40":"pb-64"},primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-6xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center max-w-7xl mx-auto":"max-w-2xl "},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var t=this.copyCase,e=this.copyWeight,n=[];switch(t){case"uppercase":n.push("uppercase");break;case"base":default:n.push("")}switch(e){case"light":n.push("font-light");break;case"medium":n.push("font-medium");break;case"semibold":n.push("font-semibold");break;case"bold":n.push("font-bold");break;case"extrabold":n.push("font-extrabold");break;case"base":default:n.push("font-medium")}return n},heroLeadClasses:function(){var t=this.leadCase,e=this.leadWeight,n=[];switch(t){case"lowercase":n.push("");break;case"base":default:n.push("uppercase")}switch(e){case"light":n.push("font-light");break;case"medium":n.push("font-medium");break;case"semibold":n.push("font-semibold");break;case"bold":n.push("font-bold");break;case"extrabold":n.push("font-extrabold");break;case"base":default:n.push("font-medium")}return n}}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("div",{staticClass:"relative",style:t.heroSize},[n("div",{staticClass:"max-w-full mx-auto"},[n("div",{staticClass:"absolute inset-0"},[n("nuxt-img",{staticClass:"h-full w-full object-cover z-1",attrs:{provider:"cloudinary",src:t.heroImg,alt:t.heroTitle,quality:"auto",crop:"fill",format:"auto",responsive:"",loading:"lazy"}}),t._v(" "),n("span",{staticClass:"absolute inset-0 mix-blend-multiply",class:t.mixBlendColor})],1)]),t._v(" "),n("div",{staticClass:"my-auto h-full",class:t.verticalAdjustment},[n("div",{staticClass:"relative xl:px-32 lg:px-24 px-4 flex flex-col justify-end bg-transparent dark:bg-transparent h-full",class:t.sectionAlignment},[n("div",{staticClass:"max-w-5xl"},[n("h1",{staticClass:"font-bold font-futura",class:[t.textPlacement,t.primaryTextSize]},[n("span",{staticClass:"block text-white"},[t._v(t._s(t.heroTitle))])])]),t._v(" "),n("div",{staticClass:"max-w-2xl"},[t.heroLead?n("p",{staticClass:"mt-4 font-bold text-white",class:[t.heroLeadClasses,t.textPlacement,t.leadTextSize]},[t._v("\n              "+t._s(t.heroLead)+"\n            ")]):t._e(),t._v(" "),t.heroCopy?n("p",{staticClass:"mt-4 max-w-md font-medium text-base lg:text-lg",class:[t.heroCopyClasses,t.textPlacement,t.copyColor]},[t._v("\n              "+t._s(t.heroCopy)+"\n            ")]):t._e()]),t._v(" "),t.personName?n("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:t.divPlacement}):t._e(),t._v(" "),t.personName?n("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:t.divPlacement},[t.personTwoName&&t.isAnduril&&""!==t.bio?n("span",[t._v("Authors:")]):t.personName?n("span",[t._v("Author:")]):t._e(),t._v(" "),t.isAnduril?n("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personImage}},[t._v("\n              "+t._s(t.personName)+"\n            ")]):t._e(),t._v(" "),!t.isAnduril&&t.bio?n("a",{staticClass:"hover:underline text-black text-gray-200 hover:text-gray-300",attrs:{href:t.bio,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n              "+t._s(t.personName)),t.title?n("span",[t._v(", "+t._s(t.title))]):t._e(),t.company?n("span",[t._v("\n, "+t._s(t.company)+"\n")]):t._e()]):t._e(),t._v(" "),t.personName&&!t.isAnduril&&null===t.bio?n("span",[t._v(t._s(t.personName))]):t._e(),t._v(" "),t.personTwoName?n("span",[t._v("&")]):t._e(),t._v(" "),t.personTwoName&&t.isAnduril2?n("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personTwoImage}},[t._v("\n              "+t._s(t.personTwoName)+"\n            ")]):t._e(),t._v(" "),t.personTwoName&&!t.isAnduril?n("span",[t._v(t._s(t.personTwoName))]):t._e()],1):t._e(),t._v(" "),t.personName?n("p",{staticClass:"mt-2 text-base font-bold text-gray-200 hover:text-gray-300",class:t.textPlacement},[n("span",{staticClass:"text-base font-bold"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.published))+"\n            "),n("span",{attrs:{"aria-hidden":"true"}},[t._v("\n                          ·\n                        ")]),t._v(" "),n("span",{staticClass:"text-base font-bold"},[t._v(" "+t._s(t._f("formattime")(t.readingTime))+" min read ")])]):t._e(),t._v(" "),t.heroLinkCopy?n("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:t.divPlacement},["nuxt"===t.heroLinkType?n("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:t.heroLinkPath}},[t._v("\n              "+t._s(t.heroLinkCopy)+"\n            ")]):t._e(),t._v(" "),"href"===t.heroLinkType?n("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:t.heroLinkPath}},[t._v("\n              "+t._s(t.heroLinkCopy)+"\n            ")]):t._e()],1):t._e(),t._v(" "),t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,n){"use strict";n.r(e);n(2),n(3),n(4),n(5),n(13),n(42);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n.r(e);n(2),n(3),n(4),n(5);var r={name:"Tags",mixins:[n(158).a],props:{tags:{type:Array,default:function(){}}}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap items-start content-around justify-start text-xs font-medium mt-2"},t._l(t.tags,(function(e,r){return n("span",{key:"tag-"+r,staticClass:"w-fit h-fit px-3 mb-1 border rounded-full py-1 text-white border border-1 border-white mr-2 bg-GunMetal bg-opacity-70",attrs:{"data-aos":"fade-up"}},[t._v("\n     "+t._s(e)+"\n   ")])})),0)}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e);var r=n(12),o=(n(2),n(3),n(4),n(5),n(41),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$content,e.next=3,r("insights",n.insight).fetch();case 3:return o=e.sent,e.abrupt("return",{insight:o});case 5:case"end":return e.stop()}}),e)})))()},mockupMobileSrc:function(){try{return this.insight.mobileImage}catch(t){return this.insight.coverImg}}}),l=n(18),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("SocialHead",{attrs:{title:t.insight.title,description:t.insight.description,image:"https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630589031/insights/"+t.insight.coverImg+".jpg"}}),t._v(" "),n("primary-hero",{attrs:{"hero-img":"insights/"+t.insight.coverImg,"hero-title":t.insight.title,"hero-lead":t.insight.description,"person-name":t.insight.author.name,"person-two-name":t.insight.authorTwo.name,"person-image":t.insight.author.image,"person-two-image":t.insight.authorTwo.image,published:t.insight.published,"reading-time":t.insight.readingTime,"is-anduril":t.insight.author.anduril,"is-anduril2":t.insight.authorTwo.anduril,bio:t.insight.author.bio,title:t.insight.author.title,company:t.insight.author.company,center:"","mix-blend-color":"bg-gray-400"}},[n("div",{staticClass:"mt-4"},[n("tags",{attrs:{tags:t.insight.tags}})],1)]),t._v(" "),n("div",[n("div",{staticClass:"relative py-6 text-gray-600 dark:text-gray-200 bg-white dark:bg-GunMetal overflow-hidden"},[n("div",{staticClass:"mx-auto py-6 px-4 sm:px-6 lg:px-8 px-4 nuxt-content",attrs:{"data-aos":"fade-up","aria-hidden":"true"}},[n("nuxt-link",{staticClass:"text-orange-500 underline hover:text-orange-600",attrs:{to:"/insights"}},[t._v("\n            Back to Insights\n          ")])],1),t._v(" "),n("div",{staticClass:"mx-auto py-12 px-4 sm:px-6 lg:py-30 lg:px-8 px-4 nuxt-content",attrs:{"data-aos":"fade-up","aria-hidden":"true"}},[n("nuxt-content",{attrs:{document:t.insight}}),t._v(" "),t._t("default")],2)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(496).default,Tags:n(497).default,PrimaryHero:n(485).default})}}]);