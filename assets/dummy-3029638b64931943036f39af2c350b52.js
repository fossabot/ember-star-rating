"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,i,a){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,i.default)(r,a.default.modulePrefix),e.default=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var i=n.default.APP.name,a=n.default.APP.version;e.default=t.default.extend({version:a,name:i})}),define("dummy/components/star-rating",["exports","ember-stars/components/star-rating"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({rating:3.5,actions:{setRating:function(e){t.default.set(this,"rating",e),window.alert("Rating set to "+e)}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function i(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var i;if("undefined"!=typeof window)i=window;else if("undefined"!=typeof global)i=global;else{if("undefined"==typeof self)return;i=self}var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),i[a]||(i[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete i[a]}}))}}e.initialize=i,e.default={name:"export-application-global",initialize:i}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var i=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});i.map(function(){}),e.default=i}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.2",loc:{source:null,start:{line:1,column:0},end:{line:8,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div"),i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createElement("h1"),a=e.createTextNode("Editable");e.appendChild(i,a),e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n");e.appendChild(n,i),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createElement("h1"),a=e.createTextNode("Readonly");e.appendChild(i,a),e.appendChild(n,i);var i=e.createTextNode("\n  ");e.appendChild(n,i);var i=e.createComment("");e.appendChild(n,i);var i=e.createTextNode("\n");return e.appendChild(n,i),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var i=new Array(2);return i[0]=e.createMorphAt(e.childAt(t,[0]),3,3),i[1]=e.createMorphAt(e.childAt(t,[2]),3,3),i},statements:[["inline","star-rating",[["get","rating",["loc",[null,[3,16],[3,22]]],0,0,0,0]],["onClick",["subexpr","action",["setRating"],[],["loc",[null,[3,31],[3,51]]],0,0]],["loc",[null,[3,2],[3,53]]],0,0],["inline","star-rating",[2.5],["readOnly",!0],["loc",[null,[7,2],[7,35]]],0,0]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",i=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(i)),r={default:a};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-star-rating",version:"1.0.0+ac8609b4"});