(window.webpackJsonp=window.webpackJsonp||[]).push([[37,5,7,8,13,30],{645:function(t,e,n){"use strict";n.r(e);var r={name:"CldImage"},o=n(15),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"706ec28f",null);e.default=component.exports},646:function(t,e,n){"use strict";var r=n(21),o=n(4),l=n(124),c=n(30),d=n(22),m=n(61),f=n(308),h=n(94),x=n(307),v=n(5),y=n(62),C=n(95).f,_=n(51).f,w=n(29).f,k=n(309).trim,S="Number",A=o.Number,I=A.prototype,E=m(y(I))==S,O=function(t){if(h(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,d,code,m=x(t,"number");if("string"==typeof m&&m.length>2)if(43===(e=(m=k(m)).charCodeAt(0))||45===e){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(m.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+m}for(c=(l=m.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+m};if(l(S,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var N,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(E?v((function(){I.valueOf.call(n)})):m(n)!=S)?f(new A(O(e)),n,T):O(e)},P=r?C(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),L=0;P.length>L;L++)d(A,N=P[L])&&!d(T,N)&&w(T,N,_(A,N));T.prototype=I,I.constructor=T,c(o,S,T)}},647:function(t,e,n){"use strict";n.r(e);n(646);var r={name:"PrimaryHero",mixins:[n(187).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},company:{type:String,default:""},title:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"font-medium"},leadColors:{type:String,default:"text-gray-200"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColor:{type:String,default:"text-gray-200"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},bio:{type:String,default:""},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:""},{label:"About Us",slug:"about"},{label:"Our Services",slug:"services"},{label:"Our Approach",slug:"approach"},{label:"Insights",slug:"insights"}],view:{atTopOfPage:!0}}},computed:{primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-4xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center":""},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var t=this.copyCase,e=this.copyWeight,n=[];switch(t){case"uppercase":n.push("uppercase");break;case"base":default:n.push("")}switch(e){case"light":n.push("font-light");break;case"medium":n.push("font-medium");break;case"semibold":n.push("font-semibold");break;case"bold":n.push("font-bold");break;case"extrabold":n.push("font-extrabold");break;case"base":default:n.push("font-medium")}return n},heroLeadClasses:function(){var t=this.leadCase,e=this.leadWeight,n=[];switch(t){case"lowercase":n.push("");break;case"base":default:n.push("uppercase")}switch(e){case"light":n.push("font-light");break;case"medium":n.push("font-medium");break;case"semibold":n.push("font-semibold");break;case"bold":n.push("font-bold");break;case"extrabold":n.push("font-extrabold");break;case"base":default:n.push("font-medium")}return n}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{},[n("div",{staticClass:"relative",style:t.heroSize},[n("div",{staticClass:"max-w-full mx-auto"},[n("div",{staticClass:"absolute inset-0"},[t.heroImg&&!t.isMockup?n("cld-image",{staticClass:"h-full w-full object-cover z-1",attrs:{"public-id":t.heroImg,alt:t.heroTitle,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}}):t._e(),t._v("\n\n        >\n        "),n("span",{staticClass:"absolute inset-0 bg-gray-200 mix-blend-multiply"})],1)]),t._v(" "),n("div",{staticClass:"pb-36 my-auto h-full"},[n("div",{staticClass:"relative xl:px-32 lg:px-24 px-4 max-w-full flex flex-col justify-end bg-transparent dark:bg-transparent h-full",class:t.sectionAlignment},[n("div",{staticClass:"max-w-5xl"},[n("h1",{staticClass:"font-extrabold",class:[t.textPlacement,t.primaryTextSize]},[n("span",{staticClass:"block text-white"},[t._v(t._s(t.heroTitle))])])]),t._v(" "),n("div",{staticClass:"max-w-2xl"},[t.heroLead?n("p",{staticClass:"mt-4 text-gray-200 font-bold",class:[t.heroLeadClasses,t.textPlacement,t.leadTextSize]},[t._v("\n            "+t._s(t.heroLead)+"\n          ")]):t._e(),t._v(" "),t.heroCopy?n("p",{staticClass:"mt-4 max-w-md text-gray-200 font-medium text-base lg:text-lg",class:[t.heroCopyClasses,t.textPlacement,t.copyColor]},[t._v("\n            "+t._s(t.heroCopy)+"\n          ")]):t._e()]),t._v(" "),t.personName?n("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:t.divPlacement}):t._e(),t._v(" "),t.personName?n("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:t.divPlacement},[t.personTwoName&&t.isAnduril&&""!==t.bio?n("span",[t._v("Authors:")]):n("span",[t._v("Author:")]),t._v(" "),t.isAnduril?n("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personImage}},[t._v("\n            "+t._s(t.personName)+"\n          ")]):t._e(),t._v(" "),!t.isAnduril&&t.bio?n("a",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{href:t.bio,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n            "+t._s(t.personName)),t.title?n("span",[t._v(", "+t._s(t.title))]):t._e(),t.company?n("span",[t._v(", "+t._s(t.company))]):t._e()]):t._e(),t._v(" "),t.personName&&!t.isAnduril&&""===t.bio?n("span",[t._v(t._s(t.personName))]):t._e(),t._v(" "),t.personTwoName?n("span",[t._v("&")]):t._e(),t._v(" "),t.personTwoName&&t.isAnduril2?n("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+t.personTwoImage}},[t._v("\n            "+t._s(t.personTwoName)+"\n          ")]):t._e(),t._v(" "),t.personTwoName&&!t.isAnduril?n("span",[t._v(t._s(t.personTwoName))]):t._e()],1):t._e(),t._v(" "),t.personName?n("p",{staticClass:"mt-2 text-base font-bold text-gray-200",class:t.textPlacement},[n("span",{staticClass:"text-base font-bold"},[t._v("Published:")]),t._v(" "+t._s(t._f("formatdate")(t.published))+"\n          "),n("span",{attrs:{"aria-hidden":"true"}},[t._v("\n                        ·\n                      ")]),t._v(" "),n("span",{staticClass:"text-base font-bold"},[t._v(" "+t._s(t._f("formattime")(t.readingTime))+" min read ")])]):t._e(),t._v(" "),t.heroLinkCopy?n("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:t.divPlacement},["nuxt"===t.heroLinkType?n("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e(),t._v(" "),"href"===t.heroLinkType?n("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:t.heroLinkPath}},[t._v("\n            "+t._s(t.heroLinkCopy)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CldImage:n(645).default})},648:function(t,e,n){"use strict";n.r(e);var r={name:"ContactForm",mixins:[n(187).a],data:function(){return{isActive:!1,contactData:[{header:"form-name",icon:"",class:"form-input hidden",value:"contact-section-us-form",required:"",placeholder:"",type:"hidden",visibility:"hidden"},{header:"Name",icon:"",class:"form-input shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"How should we address you?",type:"text",visibility:""},{header:"Email",icon:"mail",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"*",placeholder:"you@example.com",type:"email",visibility:""},{header:"Phone",icon:"phone",class:"form-input focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 sm:text-sm border-GunMetal rounded-md font-medium",name:"",id:"",value:"",required:"",placeholder:"+0 (000) 000-0000",type:"tel",visibility:""}]}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white dark:bg-GunMetal py-30 sm:py-24"},[n("section",[n("div",{staticClass:"pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"},[n("div",{staticClass:"mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"},[n("div",[n("div",[n("div",{staticClass:"max-w-md mx-auto sm:max-w-lg lg:mx-0"},[n("h2",{staticClass:"text-4xl font-extrabold tracking-tight xs:text-6xl sm:text-6xl text-GunMetalDk dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n                Let's Connect\n              ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg text-gray-500 font-medium dark:text-gray-300 sm:mt-3",attrs:{"data-aos":"fade-up"}},[t._v("\n                Over coffee, tea, or remotely...\n              ")]),t._v(" "),n("form",{staticClass:"mt-9 grid grid-cols-1",attrs:{"data-aos":"fade-up",method:"post",enctype:"multipart/form-data",name:"contact-us-form","data-netlify":"true","data-netlify-honeypot":"bot-field"}},[t._l(t.contactData,(function(e,r){return n("div",{key:"contact-section"+r,staticClass:"sm:col-span-2",class:e.visibility},[e.visibility?t._e():n("div",{staticClass:"flex justify-between pt-6"},[n("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:e.name}},[t._v(t._s(e.header))]),t._v(" "),e.required?t._e():n("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:e.name}},[t._v("Optional")])]),t._v(" "),n("div",{staticClass:"mt-1 relative rounded-md shadow-sm"},[e.icon?n("div",{staticClass:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[n("v-icon",{staticClass:"h-5 w-5 font-medium text-gray-400",attrs:{name:e.icon,"aria-hidden":"true"}})],1):t._e(),t._v(" "),n("input",{staticClass:"text-gray-300",class:e.class,attrs:{id:e.name,type:e.type,name:e.name,autocomplete:e.name,placeholder:e.placeholder}})])])})),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"text-right sm:col-span-2",attrs:{"data-aos":"fade-up"}},[n("button",{staticClass:"ml-auto flex justify-center items-center text-orange-500 hover:text-orange-600 pt-6",attrs:{id:"submit_button",role:"button",type:"submit",value:"Ship it"}},[n("span",{staticClass:"text-2xl font-bold"},[t._v("Ship it")]),t._v(" "),n("v-icon",{staticClass:"h-8 w-8 ml-2",attrs:{name:"arrow-right"}})],1)])],2)])])])]),t._v(" "),n("div",{staticClass:"sm:mx-auto sm:max-w-3xl sm:px-6"},[n("div",{staticClass:"py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},[n("div",{staticClass:"hidden sm:block"},[n("div",{staticClass:"absolute inset-y-0 left-1/2 w-screen bg-gray-200 rounded-l-xl lg:left-80 lg:right-0 lg:w-full",attrs:{"data-aos":"fade-left"}}),t._v(" "),n("svg",{staticClass:"absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0",attrs:{width:"404",height:"392",fill:"none",viewBox:"0 0 404 392","data-aos":"fade-up"}},[n("defs",[n("pattern",{attrs:{id:"837c3e70-6c3a-44e6-8854-cc48c737b659",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"}},[n("rect",{staticClass:"text-orange-500",attrs:{x:"0",y:"0",width:"4",height:"4",fill:"currentColor"}})])]),t._v(" "),n("rect",{attrs:{width:"404",height:"392",fill:"url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"}})])]),t._v(" "),t._m(1)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:col-span-2 pt-6"},[n("div",{staticClass:"flex justify-between"},[n("label",{staticClass:"block text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{for:"how-can-we-help-you"}},[t._v("How can we help you?")]),t._v(" "),n("span",{staticClass:"text-sm font-medium text-GunMetal dark:text-gray-200",attrs:{id:"how-can-we-help-you-optional"}},[t._v("Optional")])]),t._v(" "),n("div",{staticClass:"mt-1"},[n("textarea",{staticClass:"form-textarea shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-GunMetal rounded-md font-medium",attrs:{id:"how-can-we-help-you",name:"how-can-we-help-you",placeholder:"Max. 500 characters","aria-describedby":"how-can-we-help-you-description",rows:"4"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12",attrs:{"data-aos":"fade-up-left"}},[e("img",{staticClass:"w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none",attrs:{src:"https://res.cloudinary.com/www-andurilpartners-ai/image/upload/v1630611256/contact-section/contact.jpg",alt:"contact_img"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:n(306).default})},649:function(t,e,n){var r;r=function(){var t=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),e=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}');function n(n,r){if("string"!=typeof n)throw new Error("slugify: string argument expected");var o=e[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},l=void 0===r.replacement?"-":r.replacement,c=void 0===r.trim||r.trim,d=n.normalize().split("").reduce((function(e,n){return e+(o[n]||t[n]||(n===l?" ":n)).replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return r.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),c&&(d=d.trim()),d=d.replace(/\s+/g,l),r.lower&&(d=d.toLowerCase()),d}return n.extend=function(e){Object.assign(t,e)},n},t.exports=r(),t.exports.default=r()},650:function(t,e,n){"use strict";n.r(e);var r=n(649),o=n.n(r),l={name:"ContentImageHorizontal",mixins:[n(187).a],props:{mainContent:{type:Object,default:function(){}},left:{type:Boolean,default:!1},ring:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},offScreen:{type:Boolean,default:!0}},computed:{listClasses:function(){return"li"===this.mainContent.tag?"list-inside list-disc":""},contentPlacement:function(){return this.left?"lg:py-32 lg:col-start-2":"lg:py-16"},imagePlacement:function(){return this.left?"pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:h-full lg:relative":"pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:h-full lg:relative"},imageOrder:function(){return this.left?"lg:start-col-1":""},hasRing:function(){return this.ring?"shadow-xl ring-1 ring-black dark:ring-white ring-opacity-5":""},isRounded:function(){return this.rounded?"rounded-xl shadow-xl":""},imageFade:function(){return this.left?"fade-right":"fade-left"},slug:function(){return o()(this.mainContent.title,{lower:!0})}}},c=n(15),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-24",attrs:{id:t.mainContent.title}},[n("div",{staticClass:"lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"},[n("div",{staticClass:"px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0",class:t.contentPlacement},[n("div",[n("div",[t.mainContent.icon?n("span",{staticClass:"h-12 w-12 rounded-md flex items-center justify-center bg-orange-500"},[n("v-icon",{staticClass:"h-6 w-6 text-white",attrs:{name:t.mainContent.icon,"aria-hidden":"true"}})],1):t._e()]),t._v(" "),n("div",{staticClass:"mt-6"},[n("h2",{staticClass:"text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.mainContent.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-400",attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.mainContent.text)+"\n          ")]),t._v(" "),"li"===t.mainContent.tag?n("ul",[t.mainContent.text2?n(t.mainContent.tag,{tag:"component",staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-400",class:t.listClasses,attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.mainContent.text2)+"\n          ")]):t._e(),t._v(" "),t.mainContent.text3?n(t.mainContent.tag,{tag:"component",staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-400",class:t.listClasses,attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.mainContent.text3)+"\n          ")]):t._e(),t._v(" "),t.mainContent.text4?n(t.mainContent.tag,{tag:"component",staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-400",class:t.listClasses,attrs:{"data-aos":"fade-up"}},[t._v("\n            "+t._s(t.mainContent.text4)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.mainContent.btnCopy?n("div",{staticClass:"mt-6",attrs:{"data-aos":"fade-up"}},[n("nuxt-link",{staticClass:"inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600",attrs:{to:"/"+t.mainContent.btnLink}},[t._v("\n              "+t._s(t.mainContent.btnCopy)+"\n            ")])],1):t._e()])]),t._v(" "),t.mainContent.quote?n("div",{staticClass:"mt-8 border-t border-GunMetal dark:border-gray-200 pt-6",attrs:{"data-aos":"fade-up"}},[n("blockquote",[n("div",[n("p",{staticClass:"text-base text-gray-500 dark:text-gray-400"},[t._v('\n              "'+t._s(t.mainContent.quote)+'"\n            ')])]),t._v(" "),n("footer",{staticClass:"mt-3"},[n("div",{staticClass:"flex items-center space-x-3"},[n("div",{staticClass:"text-base font-medium text-gray-700 dark:text-gray-300"},[t._v("\n                "+t._s(t.mainContent.quoteNameTitle)+"\n              ")])])])])]):t._e()]),t._v(" "),n("div",{staticClass:"mt-12 sm:mt-16 lg:mt-0",class:t.imageOrder,attrs:{"data-aos":t.imageFade}},[n("div",{class:[t.imagePlacement]},[!t.left&&t.offScreen?n("cld-image",{staticClass:"lg:absolute lg:left-0 w-full lg:h-full lg:w-auto lg:max-w-none",class:[t.isRounded,t.hasRing],attrs:{"public-id":t.mainContent.imgSrc,alt:t.mainContent.imgSrc,quality:"auto","fetch-format":"auto",loading:"lazy"}}):t._e(),t._v(" "),t.left&&t.offScreen?n("cld-image",{staticClass:"lg:absolute lg:right-0 w-full lg:h-full lg:w-auto lg:max-w-none",class:[t.isRounded,t.hasRing],attrs:{"public-id":t.mainContent.imgSrc,alt:t.mainContent.imgSrc,quality:"auto","fetch-format":"auto",loading:"lazy"}}):t._e(),t._v(" "),t.left&&!t.offScreen?n("cld-image",{staticClass:"lg:relative w-full lg:h-full lg:w-auto lg:max-w-none",class:[t.isRounded,t.hasRing],attrs:{"public-id":t.mainContent.imgSrc,alt:t.mainContent.imgSrc,quality:"auto","fetch-format":"auto",loading:"lazy"}}):t._e(),t._v(" "),t.left||t.offScreen?t._e():n("cld-image",{staticClass:"lg:relative w-full lg:h-full lg:w-auto lg:max-w-none",class:[t.isRounded,t.hasRing],attrs:{"public-id":t.mainContent.imgSrc,alt:t.mainContent.imgSrc,quality:"auto","fetch-format":"80",loading:"lazy"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VIcon:n(306).default,CldImage:n(645).default})},652:function(t,e,n){"use strict";n.r(e);var r={name:"ExpandableList",mixins:[n(187).a],props:{blurb:{type:String,default:""},items:{type:Array,default:function(){}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-white dark:bg-GunMetal"},[n("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8"},[n("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[n("div",[n("h2",{staticClass:"text-3xl font-extrabold text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),t.blurb?n("p",{staticClass:"mt-4 text-lg text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("Can’t find the answer you’re looking for? Reach out to our "),n("a",{staticClass:"font-medium text-orange-500 hover:text-orange-700",attrs:{href:"mailto:info@andurilpartners.ai?subject=Question%20for%20Anduril%20Partners",target:"_blank"}},[t._v(t._s(t.blurb))]),t._v(" team.")]):t._e()]),t._v(" "),n("div",{staticClass:"mt-12 lg:mt-0 lg:col-span-2"},[n("dl",{staticClass:"space-y-12"},t._l(t.items,(function(e){return n("div",{key:e.issue},[n("dt",{staticClass:"text-lg leading-6 font-medium text-GunMetal dark:text-white",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(e.issue)+"\n            ")]),t._v(" "),n("dd",{staticClass:"mt-2 text-base text-gray-500 dark:text-gray-200",attrs:{"data-aos":"fade-up"}},[t._v("\n              "+t._s(e.response)+"\n            ")])])})),0)])])])])}),[],!1,null,null,null);e.default=component.exports},781:function(t,e,n){"use strict";n.r(e);var r={transition:{name:"fade",mode:"out-in"},data:function(){return{mainContent:{icon:"share",title:"Data is everywhere.",text:"Data, like water, is an abundant resource but it must be prepared and utilized for specific purposes. Our focus on modeling KPIs will equip your teams to execute with decisive data-driven decisions.",text2:"We help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs).",quote:"Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API's",quoteNameTitle:"Sam Levinson, CEO, The Arbor Group",imgSrc:"/general-content/kpi-mac-pic"},mainContent2:{icon:"share",title:"Data is everywhere.",text:"Data, like water, is an abundant resource but it must be prepared and utilized for specific purposes. Our focus on modeling KPIs will equip your teams to execute with decisive data-driven decisions.",text2:"We help you leverage your data into actionable insights and increase your probability of success through real-time Key Performance Indicators (KPIs).",quote:"Anduril has helped us source all of our data, on board it into our environment, and has helped us build powerful API's",quoteNameTitle:"Sam Levinson, CEO, The Arbor Group",imgSrc:"home/kpi-mac-pic",mobileImgSrc:"home/kpi-mac-pic-mobile"},lead:"Our Team",intro:"We represent a growing culmination of experience, focus on business improvement, and a consistent quest for applied excellence. From technology and data science deployments, to measuring daily portfolio performance in the most competitive fields of industry, we seek to blend disciplines with a focus on outcomes. We look forward to including you in the discussion.",heroCopy:"This is a test",faqs:[{question:"How do you make holy water?",answer:"You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"How do you make holy water?",answer:"You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"How do you make holy water?",answer:"You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}]}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("primary-hero",{attrs:{"hero-img":"/hero-images/approach-design","hero-title":"Our Approach","hero-copy":"How we work with clients, work with each other and approach our work"}}),t._v(" "),n("div",{staticClass:"relative bg-white dark:bg-GunMetal py-8 overflow-hidden"},[n("content-image-horizontal",{attrs:{"main-content":t.mainContent}}),t._v(" "),n("content-image-horizontal",{attrs:{"main-content":t.mainContent2,left:""}})],1),t._v(" "),n("expandable-list",{attrs:{title:"Title",blurb:"Customer Support",items:t.faqs}}),t._v(" "),n("contact-form")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PrimaryHero:n(647).default,ContentImageHorizontal:n(650).default,ExpandableList:n(652).default,ContactForm:n(648).default})}}]);