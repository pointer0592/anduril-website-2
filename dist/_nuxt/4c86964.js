(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{505:function(t,e,r){var content=r(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("7c186901",content,!0,{sourceMap:!1})},542:function(t,e,r){"use strict";r(505)},543:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"figure img{margin-left:auto;margin-right:auto}.portrait-caption{max-width:576px}.image-border img{border-width:1px}.rounded-corners img{border-radius:0.25rem}",""]),n.locals={},t.exports=n},669:function(t,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5);var n={name:"MarkdownImage",props:{src:{type:String,required:!0},title:{type:String,default:null},caption:{type:String,default:null}}},l=(r(542),r(18)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-shrink-0"},[r("figure",[t.title?r("figcaption",{staticClass:"text-lg font-bold text-GunMetal dark:text-white pb-4"},[t._v(t._s(t.title))]):t._e(),t._v(" "),r("nuxt-img",{staticClass:"h-full w-full",attrs:{provider:"cloudinary",src:"/insights/inserts/"+t.src,alt:t.caption,quality:"auto",crop:"fill",format:"auto",loading:"lazy"}}),t._v(" "),t.caption?r("figcaption",{staticClass:"text-center text-sm italic text-GunMetal dark:text-white"},[t._v("\nSource: "+t._s(t.caption)+"\n      ")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);