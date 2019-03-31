"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,n.default)(r,a.default.modulePrefix)
var i=r
e.default=i}),define("dummy/components/star-rating",["exports","ember-star-rating/components/star-rating"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Controller.extend({rating:3.5,updateableRating:3,init:function(){var e=this
this._super.apply(this,arguments),Ember.run.later(function(){return Ember.set(e,"updateableRating",5)},3e3)},actions:{setRating:function(e){Ember.set(this,"rating",e),window.alert("Rating set to ".concat(e))}}})
e.default=t}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,r=t.default.exportApplicationGlobal
a="string"==typeof r?r:Ember.String.classify(t.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var a={name:"export-application-global",initialize:n}
e.default=a}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var a=n
e.default=a}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"QzIeSHIE",block:'{"symbols":[],"statements":[[7,"div"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Editable"],[10],[0,"\\n  "],[1,[27,"star-rating",[[23,["rating"]]],[["onClick"],[[27,"action",[[22,0,[]],"setRating"],null]]]],false],[0,"\\n"],[10],[0,"\\n"],[7,"div"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Whole Numbers"],[10],[0,"\\n  "],[1,[27,"star-rating",[[23,["rating"]]],[["onClick","wholeOnly"],[[27,"action",[[22,0,[]],"setRating"],null],true]]],false],[0,"\\n"],[10],[0,"\\n"],[7,"div"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Readonly"],[10],[0,"\\n  "],[1,[27,"star-rating",[2.5],[["readOnly"],[true]]],false],[0,"\\n"],[10],[0,"\\n"],[7,"div"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"didReceiveAttrs"],[10],[0,"\\n  "],[1,[27,"star-rating",[[23,["updateableRating"]]],[["readOnly"],[true]]],false],[0,"\\n"],[10],[0,"\\n"],[7,"div"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Any Percent"],[10],[0,"\\n  "],[1,[27,"star-rating",[3.7],[["readOnly","anyPercent"],[true,true]]],false],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n  "],[1,[27,"star-rating",[2.2],[["readOnly","anyPercent"],[true,true]]],false],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
