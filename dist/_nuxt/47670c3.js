(window.webpackJsonp=window.webpackJsonp||[]).push([[34,3,5,7,13,28],{638:function(t,e,r){"use strict";r.r(e);var n={name:"CldImage"},l=r(15),component=Object(l.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"706ec28f",null);e.default=component.exports},639:function(t,e,r){"use strict";var n=r(21),l=r(4),o=r(124),c=r(30),d=r(22),m=r(61),f=r(308),x=r(94),h=r(307),v=r(5),y=r(62),_=r(95).f,C=r(51).f,w=r(29).f,k=r(309).trim,S="Number",N=l.Number,M=N.prototype,I=m(y(M))==S,T=function(t){if(x(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,l,o,c,d,code,m=h(t,"number");if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(r=m.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+m}for(c=(o=m.slice(2)).length,d=0;d<c;d++)if((code=o.charCodeAt(d))<48||code>l)return NaN;return parseInt(o,n)}return+m};if(o(S,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof E&&(I?v((function(){M.valueOf.call(r)})):m(r)!=S)?f(new N(T(e)),r,E):T(e)},G=n?_(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;G.length>L;L++)d(N,A=G[L])&&!d(E,A)&&w(E,A,C(N,A));E.prototype=M,M.constructor=E,c(l,S,E)}},640:function(t,e,r){"use strict";r.r(e);r(639);var n={name:"PrimaryHero",mixins:[r(187).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},company:{type:String,default:""},title:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"font-medium"},leadColors:{type:String,default:"text-gray-200"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColor:{type:String,default:"text-gray-200"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},bio:{type:String,default:""},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:""},{label:"About Us",slug:"about"},{label:"Our Services",slug:"services"},{label:"Our Approach",slug:"approach"},{label:"Insights",slug:"insights"}],view:{atTopOfPage:!0}}},computed:{primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-4xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center":""},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var t=this.copyCase,e=this.copyWeight,r=[];switch(t){case"uppercase":r.push("uppercase");break;case"base":default:r.push("")}switch(e){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r},heroLeadClasses:function(){var t=this.leadCase,e=this.leadWeight,r=[];switch(t){case"lowercase":r.push("");break;case"base":default:r.push("uppercase")}switch(e){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{},[r("div",{staticClass:"relative",style:t.heroSize},[r("div",{staticClass:"max-w-full mx-auto"},[r("div",{staticClass:"absolute inset-0"},[r("client-only",[t.heroImg&&!t.isMockup?r("cld-image",{staticClass:"h-full w-full object-cover z-1",attrs:{"public-id":t.heroImg,alt:t.heroTitle,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}}):t._e()],1),t._v("\n        >\n        "),r("span",{staticClass:"absolute inset-0 bg-gray-200 mix-blend-multiply"})],1)]),t._v(" "),r("div",{staticClass:"pb-36 my-auto h-full"},[r("div",{staticClass:"relative xl:px-32 lg:px-24 px-4 max-w-full flex flex-col justify-end bg-transparent dark:bg-transparent h-full",class:t.sectionAlignment},[r("div",{staticClass:"max-w-5xl"},[r("h1",{staticClass:"font-extrabold",class:[t.textPlacement,t.primaryTextSize]},[r("span",{staticClass:"block text-white"},[t._v(t._s(t.heroTitle))])])]),t._v(" "),r("div",{staticClass:"max-w-2xl"},[t.heroLead?r("p",{staticClass:"mt-4 text-gray-200 font-bold",class:[t.heroLeadClasses,t.textPlacement,t.leadTextSize]},[t._v("\n            "+t._s(t.heroLead)+"\n          ")]):t._e(),t._v(" "),t.heroCopy?r("p",{staticClass:"mt-4 max-w-md text-gray-200 font-medium text-base lg:text-lg",class:[t.heroCopyClasses,t.textPlacement,t.copyColor]},[t._v("\n            "+t._s(t.heroCopy)+"\n          ")]):t._e()]),t._v(" "),t.personName?r("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:t.divPlacement}):t._e(),t._v(" "),t.personName?r("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:t.divPlacement},[t.personTwoName&&t.isAnduril&&""!==t.bio?r("span",[t._v("Authors:")]):r("span",[t._v("Author:")]),t._v(" "),t.isAnduril?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personImage}},[t._v("\n            "+t._s(t.personName)+"\n          ")]):t._e(),t._v(" "),!t.isAnduril&&t.bio?r("a",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{href:t.bio,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.personName)),t.title?r("span",[t._v(", "+t._s(t.title))]):t._e(),t.company?r("span",[t._v(", "+t._s(t.company))]):t._e()]):t._e(),t._v(" "),t.personName&&!t.isAnduril&&""===t.bio?r("span",[t._v(t._s(t.personName))]):t._e(),t._v(" "),t.personTwoName?r("span",[t._v("&")]):t._e(),t._v(" "),t.personTwoName&&t.isAnduril2?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personTwoImage}},[t._v("\n            "+t._s(t.personTwoName)+"\n          ")]):t._e(),t._v(" "),t.personTwoName&&!t.isAnduril?r("span",[t._v(t._s(t.personTwoName))]):t._e()],1):t._e(),t._v(" "),t.personName?r("p",{staticClass:"mt-2 text-base font-bold text-gray-200",class:t.textPlacement},[r("span",{staticClass:"text-base font-bold"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.published))+"\n          "),r("span",{attrs:{"aria-hidden":"true"}},[t._v("\n                        ·\n                      ")]),t._v(" "),r("span",{staticClass:"text-base font-bold"},[t._v(" "+t._s(t._f("formattime")(t.readingTime))+" min read ")])]):t._e(),t._v(" "),t.heroLinkCopy?r("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:t.divPlacement},["nuxt"===t.heroLinkType?r("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e(),t._v(" "),"href"===t.heroLinkType?r("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CldImage:r(638).default})},641:function(t,e,r){"use strict";r.r(e);var n={name:"ContactForm",mixins:[r(187).a],data:function(){return{isActive:!1,contactData:[{header:"form-name",icon:"",class:"form-input hidden",value:"contact-section-us-form",required:"",placeholder:"",type:"hidden",visibility:"hidden"},{header:"Name",icon:"",class:"form-input shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"How should we address you?",type:"text",visibility:""},{header:"Email",icon:"mail",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"you@example.com",type:"email",visibility:""},{header:"Phone",icon:"phone",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"",placeholder:"+0 (000) 000-0000",type:"tel",visibility:""}]}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white dark:bg-GunMetal py-30 sm:py-24"},[r("section",[r("div",{staticClass:"pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"},[r("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"},[r("div",[r("div",[r("div",{staticClass:"max-w-md mx-auto sm:max-w-lg lg:mx-0"},[r("h2",{staticClass:"text-4xl font-extrabold tracking-tight xs:text-6xl sm:text-6xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n                Let's Connect\n              ")]),t._v(" "),r("p",{staticClass:"mt-4 text-lg text-gray-500 font-medium dark:text-gray-300 sm:mt-3",attrs:{"data-aos":"fade-up"}},[t._v("\n                Over coffee, tea, or remotely...\n              ")]),t._v(" "),r("form",{staticClass:"mt-9 grid grid-cols-1",attrs:{"data-aos":"fade-up",method:"post",enctype:"multipart/form-data",name:"contact-us-form","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[t._l(t.contactData,(function(e,n){return r("div",{key:"contact-section"+n,staticClass:"sm:col-span-2",class:e.visibility},[e.visibility?t._e():r("div",{staticClass:"flex justify-between pt-6"},[r("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:e.name}},[t._v(t._s(e.header))]),t._v(" "),e.required?t._e():r("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:e.name}},[t._v("Optional")])]),t._v(" "),r("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[e.icon?r("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[r("v-icon",{staticClass:"h-5 w-5 font-medium text-gray-400",attrs:{name:e.icon,"aria-hidden":"true"}})],1):t._e(),t._v(" "),r("input",{staticClass:"text-gray-300",class:e.class,attrs:{id:e.name,type:e.type,name:e.name,autocomplete:e.name,placeholder:e.placeholder}})])])})),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"text-right sm:col-span-2",attrs:{"data-aos":"fade-up"}},[r("button",{staticClass:"ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6",attrs:{id:"submit_button",role:"button",type:"submit",value:"Ship it"}},[r("span",{staticClass:"text-2xl font-bold"},[t._v("Ship it")]),t._v(" "),r("v-icon",{staticClass:"h-8 w-8 ml-2",attrs:{name:"arrow-right"}})],1)])],2)])])])]),t._v(" "),r("div",{staticClass:"sm:mx-auto sm:max-w-3xl sm:px-6"},[r("div",{staticClass:"py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[r("div",{staticClass:"hidden sm:block"},[r("div",{staticClass:"absolute inset-y-0 left-1/2 w-screen bg-gray-200 rounded-l-xl lg:left-80 lg:right-0 lg:w-full",attrs:{"data-aos":"fade-left"}}),t._v(" "),r("svg",{staticClass:"absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0",attrs:{width:"404",height:"392",fill:"none",viewBox:"0 0 404 392","data-aos":"fade-up"}},[r("defs",[r("pattern",{attrs:{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[r("rect",{staticClass:"text-orange-500",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),r("rect",{attrs:{width:"404",height:"392",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"}})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sm:col-span-2 pt-6"},[r("div",{staticClass:"flex justify-between"},[r("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:"how-can-we-help-you"}},[t._v("How can we help you?")]),t._v(" "),r("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:"how-can-we-help-you-optional"}},[t._v("Optional")])]),t._v(" "),r("div",{staticClass:"mt-1"},[r("textarea",{staticClass:"form-textarea shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",attrs:{id:"how-can-we-help-you",name:"how-can-we-help-you",placeholder:"Max. 500 characters","aria-describedby":"how-can-we-help-you-description",rows:"4"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12",attrs:{"data-aos":"fade-up-left"}},[e("img",{staticClass:"w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none",attrs:{src:"https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630611256/contact-section/contact.jpg",alt:"contact_img"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:r(306).default})},644:function(t,e,r){"use strict";r.r(e);var n={name:"ExpandableList",mixins:[r(187).a],props:{customerSupport:{type:String,default:"customer support"},faqs:{type:Array,default:function(){}}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8"},[r("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[r("div",[r("h2",{staticClass:"text-3xl font-extrabold text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n          Frequently asked questions\n        ")]),t._v(" "),r("p",{staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("Can’t find the answer you’re looking for? Reach out to our "),r("a",{staticClass:"font-medium text-orange-500 hover:text-orange-700",attrs:{href:"mailto:info@andurilpartners.ai?subject=Question%20for%20Anduril%20Partners",target:"_blank"}},[t._v(t._s(t.customerSupport))]),t._v(" team.")])]),t._v(" "),r("div",{staticClass:"mt-12 lg:mt-0 lg:col-span-2"},[r("dl",{staticClass:"space-y-12"},t._l(t.faqs,(function(e){return r("div",{key:e.question},[r("dt",{staticClass:"text-lg leading-6 font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(e.question)+"\n            ")]),t._v(" "),r("dd",{staticClass:"mt-2 text-base text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(e.answer)+"\n            ")])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},660:function(t,e,r){"use strict";r.r(e);var n={name:"Bio",mixins:[r(187).a],props:{bio:{type:Object,required:!0}}},l=r(15),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("div",{staticClass:"space-y-4"},[r("div",{staticClass:"aspect-w-3 aspect-h-2",attrs:{"data-aos":"fade-up"}},[r("client-only",[r("cld-image",{staticClass:"object-cover shadow-lg rounded-lg",attrs:{"public-id":"/headshots/"+t.bio.image,alt:t.bio.name,quality:"auto","fetch-format":"png",responsive:"",loading:"lazy"}})],1)],1),t._v(" "),r("div",{staticClass:"space-y-2"},[r("div",{staticClass:"text-lg font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1"},[r("h3",{attrs:{"data-aos":"fade-up"}},[t._v(t._s(t.bio.name))]),t._v(" "),r("p",{staticClass:"text-orange-500",attrs:{"data-aos":"fade-up"}},[t._v("\n          "+t._s(t.bio.role)+"\n        ")])]),t._v(" "),r("div",{staticClass:"text-sm font-semibold text-gray-800 dark:text-white leading-6 font-medium space-y-1",attrs:{"data-aos":"fade-up"}},[r("p",[t._v("\n          "+t._s(t._f("truncate")(t.bio.intro,200))+"\n        ")]),t._v(" "),r("nuxt-link",{attrs:{to:"/about/"+t.bio.slug}},[r("p",{staticClass:"text-base text-gray-500 dark:text-gray-200 underline hover:text-gray-600 dark-hover:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("\n          more...")])])],1),t._v(" "),r("ul",{staticClass:"flex space-x-5"},[r("li",[r("a",{staticClass:"cursor-pointer",attrs:{href:t.bio.linkedinProfileLink,"data-aos":"fade-up"}},[r("span",{staticClass:"sr-only"},[t._v("LinkedIn")]),t._v(" "),r("v-icon",{staticClass:"w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-Linkedin hover:text-Linkedin focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",attrs:{name:"linkedin"}})],1)]),t._v(" "),r("li",[r("nuxt-link",{staticClass:"cursor-pointer",attrs:{to:"/about/"+t.bio.slug,"data-aos":"fade-up"}},[r("span",{staticClass:"sr-only"},[t._v("Member Bio")]),t._v(" "),r("v-icon",{staticClass:"w-6 h-6 cursor-pointer rounded-md p-0 inline-flex items-center justify-center text-gray-600 dark:text-gray-200 dark-hover:text-orange-500 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500",attrs:{name:"book-open"}})],1)],1)])])])])}),[],!1,null,"6cba6a44",null);e.default=component.exports;installComponents(component,{CldImage:r(638).default,VIcon:r(306).default})},764:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(42),{transition:{name:"fade",mode:"out-in"},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("bios").sortBy("level","asc").fetch();case 3:return n=e.sent,e.abrupt("return",{bios:n});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{bioTitle:"Our Team",bioLead:"We represent a growing culmination of experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments, to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend disciplines with a focus on outcomes. We look forward to including you in the discussion.",faqs:[{question:"Vivamus at diam vulputate sem sollicitudin dignissim?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices auctor luctus. Quisque nisi eros, molestie eget nisl condimentum, lobortis faucibus quam."},{question:"Etiam eu libero eu risus accumsan scelerisque ac ut magna?",answer:"Donec facilisis euismod congue. Nulla venenatis sapien arcu, quis sollicitudin velit lobortis et. Nam quis facilisis lacus. Morbi ut diam dictum, elementum metus non, dignissim metus. Proin nec quam lacinia ex venenatis euismod. Maecenas vulputate sagittis varius. Quisque vitae lacus in arcu ultrices ullamcorper."},{question:"Cras metus lectus, imperdiet sed vestibulum eget, egestas quis lacus. Cras maximus rhoncus sagittis. Mauris tellus justo, mattis quis est a, mattis posuere diam. Nulla facilisi?",answer:"You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}]}}}),o=r(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("primary-hero",{attrs:{"hero-img":"/hero-images/team-design","hero-title":"About Us","hero-copy":"We're looking forward to starting a conversation"}}),t._v(" "),r("main",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"},[r("div",{staticClass:"space-y-12"},[t._m(0),t._v(" "),r("ul",{staticClass:"space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8",attrs:{"data-aos":"fade-up"}},t._l(t.bios,(function(t){return r("Bio",{key:t.slug,attrs:{bio:t}})})),1)])])]),t._v(" "),r("div",{staticClass:"mt-3 border border-t-1 dark:border-t-1 border-GunMetal dark:border-gray-200",attrs:{"data-aos":"fade-up"}}),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"mt-3 border border-t-1 dark:border-t-1 border-GunMetal dark:border-gray-200",attrs:{"data-aos":"fade-up"}}),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"mt-3 border border-t-1 dark:border-t-1 border-GunMetal dark:border-gray-200",attrs:{"data-aos":"fade-up"}}),t._v(" "),r("expandable-list",{attrs:{faqs:t.faqs}}),t._v(" "),r("contact-form")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("Our Team")]),t._v(" "),r("p",{staticClass:"text-xl text-GunMetal dark:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("We represent a growing culmination of\n            experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments,\n            to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend\n            disciplines with a focus on outcomes. We look forward to including you in the discussion.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"},[r("div",{staticClass:"space-y-12"},[r("div",{staticClass:"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("How we work")]),t._v(" "),r("p",{staticClass:"text-xl text-GunMetal dark:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("Donec in orci sapien. In facilisis tellus quis quam auctor, vel suscipit quam malesuada. Maecenas aliquam, est nec egestas aliquet, tellus mauris bibendum urna, quis sollicitudin sem risus ac dolor.")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"bg-white dark:bg-GunMetal"},[r("div",{staticClass:"mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"},[r("div",{staticClass:"space-y-12"},[r("div",{staticClass:"space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"},[r("h2",{staticClass:"text-3xl font-extrabold tracking-tight sm:text-4xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("Our Values")]),t._v(" "),r("p",{staticClass:"text-xl text-GunMetal dark:text-gray-300",attrs:{"data-aos":"fade-up"}},[t._v("Nunc non ornare turpis. In tincidunt tincidunt odio, a sagittis ante ornare sed. Ut pharetra nibh odio, ac porttitor lorem vestibulum eu. Pellentesque at turpis in justo faucibus feugiat. Fusce sit amet sem eget felis imperdiet viverra eget ac elit. Ut non blandit mauris. ")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PrimaryHero:r(640).default,Bio:r(660).default,ExpandableList:r(644).default,ContactForm:r(641).default})}}]);