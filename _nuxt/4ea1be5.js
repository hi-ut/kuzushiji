(window.webpackJsonp=window.webpackJsonp||[]).push([[19,18,21],{588:function(t,e,n){"use strict";n(9),n(10),n(14),n(16);var r=n(3),o=(n(25),n(11),n(38),n(73),n(338),n(22),n(37),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(40),n(41),n(12),n(76),n(352),n(2)),c=n(92),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=d.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),m=d.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,v)}(),t(n.tag,Object(c.a)(data,{class:v}),o)}})},589:function(t,e,n){"use strict";n(9),n(10),n(14),n(16);var r=n(3),o=(n(41),n(59),n(33),n(11),n(38),n(73),n(338),n(22),n(37),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(40),n(12),n(352),n(2)),c=n(92),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=["start","end","center"];function y(t,e){return d.reduce((function(n,r){return n[t+Object(l.D)(r)]=e(),n}),{})}var m=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:m}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},x=y("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},w=y("alignContent",(function(){return{type:String,default:null,validator:_}})),P={align:Object.keys(O),justify:Object.keys(x),alignContent:Object.keys(w)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:j}},x),{},{alignContent:{type:String,default:null,validator:_}},w),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var f in n)l+=String(n[f]);var v=$.get(l);return v||function(){var t,e;for(e in v=[],P)P[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&v.push(o)}));v.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),$.set(l,v)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:v}),o)}})},596:function(t,e,n){var content=n(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("7f6d4ad6",content,!0,{sourceMap:!1})},597:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=r},603:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(47),c=n(45),l=n(32),f=n(17),v=(n(14),n(91));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(l.a)(t);if(e){var o=Object(l.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(o.a)(n,t);var e=d(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/kuzushiji",t.headers=[{text:t.$t("文字種"),value:"label"},{text:t.$t("出現回数"),value:"size"},{text:t.$t("コード"),value:"code"}],t}return n}(v.Vue);h([Object(v.Prop)({required:!0})],y.prototype,"items",void 0),h([Object(v.Prop)({})],y.prototype,"query",void 0);var m=y=h([v.Component],y),O=n(97),j=n(111),x=n.n(j),_=n(700),component=Object(O.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-data-table",{attrs:{headers:t.headers,items:t.items,"items-per-page":50},scopedSlots:t._u([{key:"item.label",fn:function(e){var r=e.item;return[n("nuxt-link",{attrs:{to:t.localePath({name:"unicode-id",params:{id:r.label},query:t.query})}},[t._v("\n        "+t._s(r.label)+"\n      ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VDataTable:_.a})},604:function(t,e,n){"use strict";n.r(e);n(90);var r=n(28),o=n(42),c=n(47),l=n(45),f=n(32),v=n(17),d=(n(14),n(91));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/kuzushiji",t.page=1,t.perPage=300,t}return Object(o.a)(n,[{key:"len",get:function(){return Math.ceil(this.items.length/this.perPage)}},{key:"initPage",value:function(){this.page=1}},{key:"items2",get:function(){for(var data=this.items,t=[],e=[],i=0;i<data.length;i++)i%12==0&&(t=[],e.push(t)),data[i].index=i+1,t.push(data[i]);return e}}]),n}(d.Vue);y([Object(d.Prop)({required:!0})],m.prototype,"items",void 0),y([Object(d.Prop)({required:!0})],m.prototype,"sort",void 0),y([Object(d.Prop)({})],m.prototype,"query",void 0),y([Object(d.Watch)("items")],m.prototype,"initPage",null);var O=m=y([d.Component],m),j=n(97),x=n(111),_=n.n(x),w=n(224),P=n(588),S=n(611),k=n(589),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mt-5"},[n("v-row",{attrs:{dense:""}},t._l(t.items.slice(t.perPage*(t.page-1),t.perPage*t.page),(function(e,r){return n("v-col",{key:r,attrs:{cols:"4",sm:"1"}},[n("v-card",{attrs:{outlined:""}},[n("div",{staticClass:"pa-2"},[n("small",[t._v(t._s(e.code))]),t._v(" "),n("h3",[n("nuxt-link",{attrs:{to:t.localePath({name:"unicode-id",params:{id:e.label},query:t.query})}},[t._v(t._s(e.label)+"\n              ")])],1),t._v(" "),n("div",{staticClass:"text-right"},[n("h4",[t._v("\n                "+t._s(e.size.toLocaleString())+"\n                "),n("small",[t._v(t._s(t.$t("件")))])]),t._v(" "),"size"===t.sort?n("small",[t._v(t._s(e.index)+t._s(t.$t("位")))]):t._e()])])])],1)})),1),t._v(" "),n("div",{staticClass:"text-center mt-10"},[n("v-pagination",{attrs:{length:t.len,"total-visible":7},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;_()(component,{VCard:w.a,VCol:P.a,VPagination:S.a,VRow:k.a})},611:function(t,e,n){"use strict";n(11),n(9),n(10),n(14),n(12),n(16);var r=n(53),o=n(3),c=(n(25),n(33),n(66),n(22),n(84),n(56),n(596),n(106)),l=n(113),f=n(34),v=n(242),d=n(21),h=n(7);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(h.a)(f.a,Object(v.a)({onVisible:["init"]}),d.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,o=Math.floor(e/2),c=this.length-o+1+n;if(this.value>o&&this.value<c){var l=this.value-o+2,f=this.value+o-2-n;return[1,"..."].concat(Object(r.a)(this.range(l,f)),["...",this.length])}if(this.value===o){var v=this.value+o-1-n;return[].concat(Object(r.a)(this.range(1,v)),["...",this.length])}if(this.value===c){var d=this.value-o+1;return[1,"..."].concat(Object(r.a)(this.range(d,this.length)))}return[].concat(Object(r.a)(this.range(1,o)),["..."],Object(r.a)(this.range(c,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(c.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},612:function(t,e,n){"use strict";n.r(e);n(90),n(43),n(22),n(29),n(48),n(37),n(9),n(51),n(54),n(40);var r=n(28),o=n(42),c=n(47),l=n(45),f=n(32),v=n(17),d=(n(14),n(38),n(183),n(91)),h=n(604),y=n(603);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).baseUrl="https://hi-ut.github.io/kuzushiji",t.search="",t.layouts=[{icon:"mdi-view-grid",value:"grid"},{icon:"mdi-table",value:"table"}],t.layout_="grid",t.sortItems=[{text:t.$t("出現回数"),value:"size"},{text:t.$t("コード"),value:"code"}],t.sort="size",t}return Object(o.a)(n,[{key:"items2",get:function(){var t=this.search,e=this.items;if("size"===this.sort?e.sort((function(a,b){return a.size<b.size?1:a.size>b.size?-1:0})):e.sort((function(a,b){return a.sort<b.sort?-1:a.sort>b.sort?1:0})),!t)return e;var n,r=[],o=m(e);try{for(o.s();!(n=o.n()).done;){var c=n.value;if(t===c.label){r.push(c);break}}}catch(t){o.e(t)}finally{o.f()}return r}}]),n}(d.Vue);x([Object(d.Prop)({})],_.prototype,"query",void 0),x([Object(d.Prop)({required:!0})],_.prototype,"items",void 0);var w=_=x([Object(d.Component)({components:{List:h.default,Table:y.default}})],_),P=n(97),S=n(111),k=n.n(S),$=n(247),R=n(588),C=n(226),L=n(589),z=n(645),D=n(566),component=Object(P.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{staticClass:"my-10",attrs:{"append-icon":"mdi-magnify",label:t.$t("search"),"single-line":"","hide-details":"",filled:"",rounded:"",dense:"","background-color":"grey lighten-2","clear-icon":"mdi-close-circle",clearable:!0},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[n("v-select",{attrs:{dense:"","single-line":"","hide-details":"",items:t.sortItems,outlined:"",rounded:""},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t._v(" "),n("v-col",{staticClass:"text-right",attrs:{cols:"12",md:"9"}},t._l(t.layouts,(function(option,e){return n("v-btn",{key:e,attrs:{icon:""},on:{click:function(e){t.layout_=option.value}}},[n("v-icon",{attrs:{color:t.layout_===option.value?"primary":""}},[t._v(t._s(option.icon))])],1)})),1)],1),t._v(" "),"grid"===t.layout_?[n("List",{attrs:{items:t.items2,sort:t.sort,query:t.query}})]:[n("Table",{staticClass:"mt-5",attrs:{items:t.items2,query:t.query}})]],2)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:$.a,VCol:R.a,VIcon:C.a,VRow:L.a,VSelect:z.a,VTextField:D.a})}}]);