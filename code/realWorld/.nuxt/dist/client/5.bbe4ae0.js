(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{188:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"c",(function(){return c})),r.d(e,"i",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"e",(function(){return m})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return v})),r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return y}));var n=r(61),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"POST",url:"/api/articles",params:t})},l=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},d=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},m=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t){var e=t.slug,r=t.comment;return Object(n.b)({method:"POST",url:"/api/articles/".concat(e,"/comments"),params:{comment:{body:r}}})},y=function(t){var e=t.slug,r=t.id;return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(e,"/comments/").concat(r)})}},262:function(t,e,r){"use strict";r.r(e);r(29);var n=r(4),o=r(188),c={name:"editor",middleware:["auth"],data:function(){return{article:{title:"",description:"",body:"",tagList:[]},tag:""}},methods:{onSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.c)({article:t.article});case 3:t.article={title:"",description:"",body:"",tagList:[]},t.$router.push("/"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},addTag:function(){this.tag&&(this.article.tagList.push(this.tag),this.tag="")}}},l=r(22),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tag,expression:"tag"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.tag},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTag(e)},input:function(e){e.target.composing||(t.tag=e.target.value)}}}),r("div",{staticClass:"tag-list"}),t._v(" "),t._l(t.article.tagList,(function(e,n){return r("span",{key:e+n,staticStyle:{margin:"5px"}},[t._v(t._s(e))])}))],2),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.onSubmit}},[t._v("\n                  Publish Article\n              ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);