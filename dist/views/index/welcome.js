System.register(["aurelia-framework","falcor/dist/falcor.browser.min"],function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r,n,i,o,a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(e,t,r){for(var n=0;n<t.length;n++){var i=t[n],o=i.decorators,a=i.key;if(delete i.key,delete i.decorators,i.enumerable=i.enumerable||!1,i.configurable=!0,("value"in i||i.initializer)&&(i.writable=!0),o){for(var u=0;u<o.length;u++){var l=o[u];if("function"!=typeof l)throw new TypeError("The decorator for method "+i.key+" is of the invalid type "+typeof l);i=l(e,a,i)||i}if(void 0!==i.initializer){r[a]=i;continue}}Object.defineProperty(e,a,i)}}return function(t,r,n,i,o){return r&&e(t.prototype,r,i),n&&e(t,n,o),t}}();return{setters:[function(e){r=e.computedFrom},function(e){n=e["default"]}],execute:function(){i=function(){function e(){var r=this;t(this,e),this.heading="Welcome to the Aurelia Navigation App!",this.firstName="John",this.lastName="Doe",this.previousValue=this.fullName;var i=new n.Model({source:new n.HttpDataSource("/model.json")});i.get('welcome.["header", "first", "last"]').then(function(e){var t=e.json.welcome;r.heading=t.header,r.firstName=t.first,r.lastName=t.last})}return u(e,[{key:"submit",value:function(){this.previousValue=this.fullName,alert("Welcome, "+this.fullName+"!")}},{key:"canDeactivate",value:function(){return this.fullName!==this.previousValue?confirm("Are you sure you want to leave?"):void 0}},{key:"fullName",decorators:[r("firstName","lastName")],get:function(){return this.firstName+" "+this.lastName}}]),e}(),e("Welcome",i),o=function(){function e(){t(this,e)}return a(e,[{key:"toView",value:function(e){return e&&e.toUpperCase()}}]),e}(),e("UpperValueConverter",o)}}});