(window.webpackJsonp=window.webpackJsonp||[]).push([[32,24],{533:function(e,t,r){"use strict";var n=r(20),o=r(3),l=r(119),c=r(24),d=r(21),h=r(63),m=r(283),f=r(92),y=r(284),x=r(4),v=r(62),_=r(91).f,C=r(45).f,k=r(23).f,w=r(285).trim,A="Number",S=o.Number,N=S.prototype,E=h(v(N))==A,I=function(e){if(f(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,n,o,l,c,d,code,h=y(e,"number");if("string"==typeof h&&h.length>2)if(43===(t=(h=w(h)).charCodeAt(0))||45===t){if(88===(r=h.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(h.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+h}for(c=(l=h.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,n)}return+h};if(l(A,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var O,T=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof T&&(E?x((function(){N.valueOf.call(r)})):h(r)!=A)?m(new S(I(t)),r,T):I(t)},L=n?_(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),P=0;L.length>P;P++)d(S,O=L[P])&&!d(T,O)&&k(T,O,C(S,O));T.prototype=N,N.constructor=T,c(o,A,T)}},534:function(e,t,r){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"}}');function r(r,n){if("string"!=typeof r)throw new Error("slugify: string argument expected");var o=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},l=void 0===n.replacement?"-":n.replacement,c=void 0===n.trim||n.trim,d=r.normalize().split("").reduce((function(t,r){return t+(o[r]||e[r]||(r===l?" ":r)).replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return n.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),c&&(d=d.trim()),d=d.replace(/\s+/g,l),n.lower&&(d=d.toLowerCase()),d}return r.extend=function(t){Object.assign(e,t)},r},e.exports=n(),e.exports.default=n()},536:function(e,t,r){"use strict";r.r(t);r(533),r(534);var n={name:"PrimaryHero",mixins:[r(178).a],props:{center:{type:Boolean,default:!1},full:{type:Boolean,default:!1},videoSrc:{type:String,default:""},smallMockupImg:{type:String,default:""},personName:{type:String,default:""},personTwoName:{type:String,default:""},personImage:{type:String,default:""},personTwoImage:{type:String,default:""},readingTime:{type:Number,default:0},published:{type:String,default:""},heroImg:{type:String,default:""},heroImgBlend:{type:String,default:"screen"},heroTitle:{type:String,default:""},heroCopy:{type:String,default:""},heroLead:{type:String,default:""},heroLinkType:{type:String,default:"nuxt"},heroLinkCopy:{type:String,default:""},heroLinkPath:{type:String,default:"/"},leadCase:{type:String,default:"uppercase"},leadWeight:{type:String,default:"sm"},leadColors:{type:String,default:"text-gray-200"},copyCase:{type:String,default:"base"},copyWeight:{type:String,default:"base"},copyColors:{type:String,default:"text-gray-200"},isAnduril:{type:Boolean,default:!0},isAnduril2:{type:Boolean,default:!0},isMockup:{type:Boolean,default:!1}},data:function(){return{isOpen:!1,sectionNames:[{label:"Home",slug:""},{label:"About Us",slug:"about"},{label:"Our Services",slug:"services"},{label:"Our Approach",slug:"approach"},{label:"Insights",slug:"posts"}],view:{atTopOfPage:!0}}},computed:{primaryTextSize:function(){return this.full?"text-6xl lg:text-8xl tracking-wider":"text-4xl lg:text-6xl tracking-wide"},leadTextSize:function(){return this.full?"text-2xl lg:text-4xl":"text-xl lg:text-2xl"},sectionAlignment:function(){return this.center?"items-center":""},textPlacement:function(){return this.center?"text-center":""},divPlacement:function(){return this.center?"mx-auto":"mr-auto"},heroSize:function(){return this.full?{height:"100vh"}:{height:"80vh"}},heroCopyClasses:function(){var e=this.copyCase,t=this.copyWeight,r=[];switch(e){case"uppercase":r.push("uppercase");break;case"base":default:r.push("")}switch(t){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r},heroLeadClasses:function(){var e=this.leadCase,t=this.leadWeight,r=[];switch(e){case"lowercase":r.push("");break;case"base":default:r.push("uppercase")}switch(t){case"light":r.push("font-light");break;case"medium":r.push("font-medium");break;case"semibold":r.push("font-semibold");break;case"bold":r.push("font-bold");break;case"extrabold":r.push("font-extrabold");break;case"base":default:r.push("font-medium")}return r}}},o=r(10),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{},[r("div",{staticClass:"relative",style:e.heroSize},[r("div",{staticClass:"max-w-full mx-auto"},[r("div",{staticClass:"absolute inset-0"},[r("client-only",[e.heroImg&&!e.isMockup?r("cld-image",{staticClass:"h-full w-full object-cover z-1",attrs:{"public-id":e.heroImg,alt:e.heroTitle,quality:"auto",crop:"fill","fetch-format":"auto",responsive:"",loading:"lazy"}}):e._e()],1),e._v(">\n        "),r("span",{staticClass:"absolute inset-0 bg-gray-500 mix-blend-multiply"})],1)]),e._v(" "),r("div",{staticClass:"pb-36 my-auto h-full"},[r("div",{staticClass:"relative xl:px-32 lg:px-24 px-4 max-w-full flex flex-col justify-end bg-GunMetal dark:bg-white bg-transparent dark:bg-transparent h-full",class:e.sectionAlignment},[r("h1",{staticClass:"font-extrabold",class:[e.textPlacement,e.primaryTextSize]},[r("span",{staticClass:"block text-white"},[e._v(e._s(e.heroTitle))])]),e._v(" "),e.heroLead?r("p",{staticClass:"mt-4 text-orange-500 font-bold",class:[e.heroLeadClasses,e.textPlacement,e.leadTextSize]},[e._v("\n          "+e._s(e.heroLead)+"\n        ")]):e._e(),e._v(" "),e.heroCopy?r("p",{staticClass:"mt-6 max-w-md text-gray-200 font-medium text-sm lg:text-base",class:[e.heroCopyClasses,e.textPlacement]},[e._v("\n          "+e._s(e.heroCopy)+"\n        ")]):e._e(),e._v(" "),e.personName?r("div",{staticClass:"border border-t border-1 border-gray-300 w-20 my-6",class:e.divPlacement}):e._e(),e._v(" "),e.personName?r("div",{staticClass:"text-base font-bold text-gray-200 hover:text-gray-300",class:e.divPlacement},[e.personName&&e.isAnduril?r("span",[e._v("Authors:")]):r("span",[e._v("Author:")]),e._v(" "),e.personName&&e.isAnduril?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+e.personImage}},[e._v("\n            "+e._s(e.personName)+"\n          ")]):e._e(),e._v(" "),e.personName&&!e.isAnduril?r("span",[e._v(e._s(e.personName))]):e._e(),e._v(" "),e.personTwoName?r("span",[e._v("&")]):e._e(),e._v(" "),e.personTwoName&&e.isAnduril2?r("nuxt-link",{staticClass:"hover:underline text-gray-200 hover:text-gray-300",attrs:{to:"/about/"+e.personTwoImage}},[e._v("\n            "+e._s(e.personTwoName)+"\n          ")]):e._e(),e._v(" "),e.personTwoName&&!e.isAnduril?r("span",[e._v(e._s(e.personTwoName))]):e._e()],1):e._e(),e._v(" "),e._t("default"),e._v(" "),e.personName?r("p",{staticClass:"mt-2 text-base font-bold text-gray-200",class:e.textPlacement},[r("span",{staticClass:"text-base font-bold"},[e._v("Published:")]),e._v(" "+e._s(e._f("formatdate")(e.published))+"\n          "),r("span",{attrs:{"aria-hidden":"true"}},[e._v("\n                        ·\n                      ")]),e._v(" "),r("span",{staticClass:"text-base font-bold"},[e._v(" "+e._s(e._f("formattime")(e.readingTime))+" min read ")])]):e._e(),e._v(" "),e.heroLinkCopy?r("div",{staticClass:"mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center",class:e.divPlacement},["nuxt"===e.heroLinkType?r("nuxt-link",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{to:e.heroLinkPath}},[e._v("\n            "+e._s(e.heroLinkCopy)+"\n          ")]):e._e(),e._v(" "),"href"===e.heroLinkType?r("a",{staticClass:"flex items-center justify-center px-4 py-3 border border-transparent text-xl font-bold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 sm:px-8",attrs:{href:e.heroLinkPath}},[e._v("\n            "+e._s(e.heroLinkCopy)+"\n          ")]):e._e()],1):e._e()],2)])])])}),[],!1,null,null,null);t.default=component.exports},753:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(41),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,n=e.$content,t.next=3,n("policies",r.policy).fetch();case 3:return o=t.sent,t.abrupt("return",{page:o});case 5:case"end":return t.stop()}}),t)})))()}}),l=r(10),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("primary-hero",{attrs:{"hero-img":"/hero-images/chess","hero-title":"Our Policies","hero-lead":e.page.title,"lead-color":"orange","lead-weight":"extrabold",center:""}},[r("div",{staticClass:"mt-2 pb-20"},[r("p",{staticClass:"text-center text-sm leading-loose text-gray-200"},[e._v("\n        Effective Date: "+e._s(e._f("formatdate")(e.page.effective))+"\n      ")]),e._v(" "),r("p",{staticClass:"text-center text-sm leading-loose text-gray-200"},[e._v("\n        Reading time approx: "+e._s(e._f("formattime")(e.page.readingTime))+" min read\n      ")])])]),e._v(" "),r("div",[r("div",{staticClass:"relative py-6 text-gray-600 dark:text-gray-200 bg-white dark:bg-GunMetal overflow-hidden"},[r("div",{staticClass:"mx-auto py-6 px-4 sm:px-6 lg:px-8 px-4 nuxt-content",attrs:{"data-aos":"fade-up","aria-hidden":"true"}},[r("nuxt-link",{staticClass:"text-orange-500 underline hover:text-orange-600",attrs:{to:"/"}},[e._v("\n          Home\n        ")])],1),e._v(" "),r("div",{staticClass:"mx-auto py-12 px-4 sm:px-6 lg:py-30 lg:px-8 px-4 nuxt-content",attrs:{"data-aos":"fade-up","aria-hidden":"true"}},[r("nuxt-content",{attrs:{document:e.page}}),e._v(" "),e._t("default")],2)])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PrimaryHero:r(536).default})}}]);