(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{586:function(t,e,n){var content=n(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("d1dda36e",content,!0,{sourceMap:!1})},688:function(t,e,n){"use strict";n(586)},689:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.article-button[data-v-263ef7d8]{\n  display:inline-block;\n  font-size:0.875rem;\n  line-height:1.25rem\n}\n@media (min-width: 460px){\n.article-button[data-v-263ef7d8]{\n    font-size:1rem;\n    line-height:1.5rem\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},797:function(t,e,n){"use strict";n.r(e);n(34),n(56);var r={name:"MarkdownButton",props:{text:{type:String,required:!0},path:{type:String,default:""},external:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},margin:{type:String,default:""},center:{type:Boolean,default:!1}},computed:{bgStyle:function(){return this.outline?"btn-orange-outline":"btn-orange"},verticalSpacing:function(){var t=this.margin,e="m".concat(t,"-6 md:m").concat(t,"-8");return["t","b","y"].includes(t)?e:"my-0"}}},l=(n(688),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"text-center":t.center}},[t.external?n("a",{staticClass:"article-button btn md:btn-lg",class:[t.bgStyle,t.verticalSpacing],attrs:{href:t.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.text)+"\n  ")]):n("nuxt-link",{staticClass:"article-button btn md:btn-lg",class:[t.bgStyle,t.verticalSpacing],attrs:{to:t.path}},[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,"263ef7d8",null);e.default=component.exports}}]);