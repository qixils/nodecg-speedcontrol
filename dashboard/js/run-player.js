(()=>{var t,e={9525:t=>{t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"panelTitle":"Run Player","returnToStart":"Return to Start","noRunsLeft":"No Runs Left","noRunsAdded":"No Runs Added","cannotChange":"Cannot change run while timer is {state}"},"ja":{"panelTitle":"現在の走者情報","returnToStart":"最初に戻す","noRunsLeft":"残りの走者情報はありません","noRunsAdded":"走者情報がありません","cannotChange":"タイマーが動作している間は編集できません。({state})"}}'),delete t.options._Ctor}},9348:(t,e,n)=>{"use strict";var r,o=n(5803),i=n(2010),s=n(2233),a=n(8642),l=n(2659),c=n(1292),u=n(4751),p=(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},h=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{l(r.next(t))}catch(t){i(t)}}function a(t){try{l(r.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}l((r=r.apply(t,e||[])).next())}))},f=function(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};const v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),Object.defineProperty(e.prototype,"nextRun",{get:function(){var t=this;return this.runDataArray.find((function(e){return e.id===t.runDataActiveRunSurrounding.next}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextRunStr",{get:function(){return this.nextRun?[this.nextRun.game||"?",this.nextRun.category].filter(Boolean).join(" - "):"?"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disableChange",{get:function(){return["running","paused"].includes(this.timer.state)},enumerable:!1,configurable:!0}),e.prototype.returnToStartConfirm=function(){var t=(0,u.Yq)("alert-dialog");t&&t.openDialog({name:"ReturnToStartConfirm",func:this.returnToStart})},e.prototype.returnToStart=function(t){return h(this,void 0,Promise,(function(){return f(this,(function(e){switch(e.label){case 0:if(!t)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,nodecg.sendMessage("returnToStart")];case 2:case 3:return e.sent(),[3,4];case 4:return[2]}}))}))},e.prototype.playNextRun=function(){return h(this,void 0,Promise,(function(){var t;return f(this,(function(e){switch(e.label){case 0:if(!this.nextRun)return[3,4];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,nodecg.sendMessage("changeToNextRun")];case 2:return e.sent()&&(t=(0,u.Yq)("alert-dialog"))&&t.openDialog({name:"NoTwitchGame"}),[3,4];case 3:return e.sent(),[3,4];case 4:return[2]}}))}))},e.prototype.mounted=function(){var t;(null===(t=window.frameElement)||void 0===t?void 0:t.parentElement)&&window.frameElement.parentElement.setAttribute("display-title",this.$t("panelTitle"))},d([s.Nz.State((function(t){return t.reps.runDataArray}))],e.prototype,"runDataArray",void 0),d([s.Nz.State((function(t){return t.reps.runDataActiveRun}))],e.prototype,"activeRun",void 0),d([s.Nz.State((function(t){return t.reps.runDataActiveRunSurrounding}))],e.prototype,"runDataActiveRunSurrounding",void 0),d([s.Nz.State((function(t){return t.reps.timer}))],e.prototype,"timer",void 0),d([(0,l.wA)({components:{RunList:c.Z}})],e)}(l.w3);var y=n(5440),b=n(9525);const g=n.n(b)();var m=n(7618),_=n.n(m),w=n(690),x=n(7110);const R=x.Z;var S=n(5095),C=n(9085),O=n(9405);const $=o.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}});var j=n(6248),T=n(8298);const A=(0,j.Z)(w.Z,C.Z,$).extend({name:"v-alert",props:{border:{type:String,validator:t=>["top","right","bottom","left"].includes(t)},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:t=>"string"==typeof t||!1===t},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:t=>["info","error","success","warning"].includes(t)},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(R,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(S.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(S.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...w.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||O.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,T.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return this.coloredBorder||(t=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,t)),this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}});var B=n(985),P=n(7019),Z=(0,y.Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-btn",{style:{"margin-bottom":"5px"},attrs:{block:"",disabled:!t.activeRun||t.disableChange},on:{click:t.returnToStartConfirm}},[t._v("\n      "+t._s(t.$t("returnToStart"))+"\n    ")])],1),t._v(" "),n("div",[n("v-btn",{staticClass:"NextRunBtn",style:{"margin-bottom":"5px"},attrs:{width:"100%",block:"",title:t.nextRunStr,disabled:t.disableChange||!t.nextRun},on:{click:t.playNextRun}},[n("div",{staticClass:"d-flex justify-center",style:{width:"100%"}},[t.nextRun?[n("div",[n("v-icon",{attrs:{left:""}},[t._v("\n              mdi-play\n            ")])],1),t._v(" "),n("div",{style:{overflow:"hidden"}},[t._v("\n            "+t._s(t.nextRunStr)+"\n          ")])]:t.runDataArray.length?n("div",[t._v("\n          "+t._s(t.$t("noRunsLeft"))+"\n        ")]):n("div",[t._v("\n          "+t._s(t.$t("noRunsAdded"))+"\n        ")])],2)]),t._v(" "),t.disableChange?n("v-alert",{attrs:{dense:"",type:"info"}},[t._v("\n      "+t._s(t.$t("cannotChange",{state:t.timer.state}))+"\n    ")]):t._e()],1),t._v(" "),n("run-list")],1)}),[],!1,null,"43acc5e2",null);"function"==typeof g&&g(Z);const k=Z.exports;_()(Z,{VAlert:A,VApp:B.Z,VBtn:x.Z,VIcon:P.Z});var D=n(8586),E=n(4170),N=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),I=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};o.Z.use(D.ZP);var M=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return N(e,t),e.prototype.updateRunOrder=function(){},I([E.mm],e.prototype,"updateRunOrder",null),I([(0,E.Yl)({name:"OurModule"})],e)}(E.g4),L=new D.yh({strict:!1,state:{},modules:{ReplicantModule:s.np,OurModule:M}});const z=L;(0,E.rT)(M,L),(0,s.rl)(z).then((function(){new o.Z({vuetify:a.Z,i18n:i.Z,store:z,el:"#App",render:function(t){return t(k)}})}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<t.length;u++){for(var[n,o,i]=t[u],a=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((t=>r.O[t](n[l])))?n.splice(l--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={535:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[s,a,l]=n,c=0;if(s.some((e=>0!==t[e]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var u=l(r)}for(e&&e(n);c<s.length;c++)i=s[c],r.o(t,i)&&t[i]&&t[i][0](),t[s[c]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var o=r.O(void 0,[300,81,170,935,608,132,825,852,138,292],(()=>r(9348)));o=r.O(o)})();