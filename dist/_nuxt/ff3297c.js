(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{588:function(t,e,n){var content=n(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("531c3259",content,!0,{sourceMap:!1})},692:function(t,e,n){"use strict";n(588)},693:function(t,e,n){var l=n(51)((function(i){return i[1]}));l.push([t.i,"/*purgecss start ignore*/\nfigure img{\n  margin-left:auto;\n  margin-right:auto\n}\n.image-border img{\n  border-width:1px\n}\n.rounded-corners img{\n  border-radius:0.25rem\n}\n\n/*purgecss end ignore*/",""]),l.locals={},t.exports=l},799:function(t,e,n){"use strict";n.r(e);n(34);var l={name:"MarkdownGenericImage",props:{title:{type:String,default:null},caption:{type:String,default:null},fetchFormat:{type:String,default:"auto"},quality:{type:String,default:"auto"},rounded:{type:Boolean,default:!1},ring:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},prePath:{type:String,default:"/insights/inserts/"},filename:{type:String,default:null}},computed:{imageToggle:function(){return"light-mode"===this.$colorMode.preference?"/".concat(this.prePath,"/").concat(this.filename):"/".concat(this.prePath,"/").concat(this.filename,"-dark")},hasRing:function(){return this.ring?"rounded-xl shadow-xl":""},isRounded:function(){return this.rounded?"dark:ring-gray-200 ring-GunMetal":""}}},r=(n(692),n(11)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-shrink-0"},[n("figure",[t.title?n("figcaption",{staticClass:"text-lg font-bold text-GunMetal dark:text-white pb-4"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("client-only",[t.dark?n("cld-image",{staticClass:"h-full w-full",class:[t.hasRing,t.isRounded],attrs:{"public-id":t.imageToggle,alt:t.caption,quality:t.quality,crop:"fill","fetch-format":t.fetchFormat,responsive:"",loading:"lazy"}},[n("cld-placeholder",{attrs:{type:"blur"}})],1):n("cld-image",{staticClass:"h-full w-full",class:[t.hasRing,t.isRounded],attrs:{"public-id":""+t.prePath+t.filename,alt:t.caption,quality:t.quality,crop:"fill","fetch-format":t.fetchFormat,responsive:"",loading:"lazy"}},[n("cld-placeholder",{attrs:{type:"blur"}})],1)],1),t._v(" "),t.caption?n("figcaption",{staticClass:"text-center text-sm italic text-GunMetal dark:text-white"},[t._v("Source: "+t._s(t.caption)+"\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);