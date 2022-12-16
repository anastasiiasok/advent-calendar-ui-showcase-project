var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};function e(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}Object.create;function r(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],o=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&o>=t.length&&(t=void 0),{value:t&&t[o++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var o,n,i=r.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(o=i.next()).done;)s.push(o.value)}catch(t){n={error:t}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}return s}function n(t,e,r){if(r||2===arguments.length)for(var o,n=0,i=e.length;n<i;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}Object.create;function i(t){return"function"==typeof t}function s(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var c=s((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function u(t,e){if(t){var r=t.indexOf(e);0<=r&&t.splice(r,1)}}var p=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return t.prototype.unsubscribe=function(){var t,e,s,u,p;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=r(a),f=l.next();!f.done;f=l.next()){f.value.remove(this)}}catch(e){t={error:e}}finally{try{f&&!f.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else a.remove(this);var h=this.initialTeardown;if(i(h))try{h()}catch(t){p=t instanceof c?t.errors:[t]}var v=this._finalizers;if(v){this._finalizers=null;try{for(var y=r(v),b=y.next();!b.done;b=y.next()){var _=b.value;try{d(_)}catch(t){p=null!=p?p:[],t instanceof c?p=n(n([],o(p)),o(t.errors)):p.push(t)}}}catch(t){s={error:t}}finally{try{b&&!b.done&&(u=y.return)&&u.call(y)}finally{if(s)throw s.error}}}if(p)throw new c(p)}},t.prototype.add=function(e){var r;if(e&&e!==this)if(this.closed)d(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(r=this._finalizers)&&void 0!==r?r:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&u(e,t)},t.prototype.remove=function(e){var r=this._finalizers;r&&u(r,e),e instanceof t&&e._removeParent(this)},t.EMPTY=((e=new t).closed=!0,e),t}(),a=p.EMPTY;function l(t){return t instanceof p||t&&"closed"in t&&i(t.remove)&&i(t.add)&&i(t.unsubscribe)}function d(t){i(t)?t():t.unsubscribe()}var f={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},h={setTimeout:function(t,e){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];var s=h.delegate;return(null==s?void 0:s.setTimeout)?s.setTimeout.apply(s,n([t,e],o(r))):setTimeout.apply(void 0,n([t,e],o(r)))},clearTimeout:function(t){var e=h.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function v(t){h.setTimeout((function(){var e=f.onUnhandledError;if(!e)throw t;e(t)}))}function y(){}var b=m("C",void 0,void 0);function _(t){return m("N",t,void 0)}function m(t,e,r){return{kind:t,value:e,error:r}}var S=null;function g(t){if(f.useDeprecatedSynchronousErrorHandling){var e=!S;if(e&&(S={errorThrown:!1,error:null}),t(),e){var r=S,o=r.errorThrown,n=r.error;if(S=null,o)throw n}}else t()}var w=function(t){function r(e){var r=t.call(this)||this;return r.isStopped=!1,e?(r.destination=e,l(e)&&e.add(r)):r.destination=C,r}return e(r,t),r.create=function(t,e,r){return new T(t,e,r)},r.prototype.next=function(t){this.isStopped?O(_(t),this):this._next(t)},r.prototype.error=function(t){this.isStopped?O(m("E",void 0,t),this):(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped?O(b,this):(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},r.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},r}(p),x=Function.prototype.bind;function N(t,e){return x.call(t,e)}var E=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){P(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){P(t)}else P(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){P(t)}},t}(),T=function(t){function r(e,r,o){var n,s,c=t.call(this)||this;i(e)||!e?n={next:null!=e?e:void 0,error:null!=r?r:void 0,complete:null!=o?o:void 0}:c&&f.useDeprecatedNextContext?((s=Object.create(e)).unsubscribe=function(){return c.unsubscribe()},n={next:e.next&&N(e.next,s),error:e.error&&N(e.error,s),complete:e.complete&&N(e.complete,s)}):n=e;return c.destination=new E(n),c}return e(r,t),r}(w);function P(t){var e;f.useDeprecatedSynchronousErrorHandling?(e=t,f.useDeprecatedSynchronousErrorHandling&&S&&(S.errorThrown=!0,S.error=e)):v(t)}function O(t,e){var r=f.onStoppedNotification;r&&h.setTimeout((function(){return r(t,e)}))}var C={closed:!0,next:y,error:function(t){throw t},complete:y},L="function"==typeof Symbol&&Symbol.observable||"@@observable";function A(t){return t}function I(t){return 0===t.length?A:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var j=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var o,n=this,s=(o=t)&&o instanceof w||function(t){return t&&i(t.next)&&i(t.error)&&i(t.complete)}(o)&&l(o)?t:new T(t,e,r);return g((function(){var t=n,e=t.operator,r=t.source;s.add(e?e.call(s,r):r?n._subscribe(s):n._trySubscribe(s))})),s},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=q(e))((function(e,o){var n=new T({next:function(e){try{t(e)}catch(t){o(t),n.unsubscribe()}},error:o,complete:e});r.subscribe(n)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[L]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return I(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=q(t))((function(t,r){var o;e.subscribe((function(t){return o=t}),(function(t){return r(t)}),(function(){return t(o)}))}))},t.create=function(e){return new t(e)},t}();function q(t){var e;return null!==(e=null!=t?t:f.Promise)&&void 0!==e?e:Promise}var H=s((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),D=function(t){function o(){var e=t.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return e(o,t),o.prototype.lift=function(t){var e=new k(this,this);return e.operator=t,e},o.prototype._throwIfClosed=function(){if(this.closed)throw new H},o.prototype.next=function(t){var e=this;g((function(){var o,n;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var i=r(e.currentObservers),s=i.next();!s.done;s=i.next()){s.value.next(t)}}catch(t){o={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}}}))},o.prototype.error=function(t){var e=this;g((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var r=e.observers;r.length;)r.shift().error(t)}}))},o.prototype.complete=function(){var t=this;g((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},o.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(o.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),o.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},o.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},o.prototype._innerSubscribe=function(t){var e=this,r=this,o=r.hasError,n=r.isStopped,i=r.observers;return o||n?a:(this.currentObservers=null,i.push(t),new p((function(){e.currentObservers=null,u(i,t)})))},o.prototype._checkFinalizedStatuses=function(t){var e=this,r=e.hasError,o=e.thrownError,n=e.isStopped;r?t.error(o):n&&t.complete()},o.prototype.asObservable=function(){var t=new j;return t.source=this,t},o.create=function(t,e){return new k(t,e)},o}(j),k=function(t){function r(e,r){var o=t.call(this)||this;return o.destination=e,o.source=r,o}return e(r,t),r.prototype.next=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===r||r.call(e,t)},r.prototype.error=function(t){var e,r;null===(r=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===r||r.call(e,t)},r.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},r.prototype._subscribe=function(t){var e,r;return null!==(r=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==r?r:a},r}(D);class z{activeClassPopup="popup_open";activeClassBody="body_overflow-hidden";closeSubj=new D;constructor(t){this.options=t,this.onInit()}onInit(){this.initVars(),this.initAddEventListeners(),this.appendPopupNodeInBody()}initVars(){const t=this.createPopupNode(),e=t.querySelector(".popup__close"),r=t.querySelector(".popup__body"),o=t.querySelector(".popup__content"),n=t.querySelector(".popup__title"),i=t.querySelector(".popup__description"),s=t.querySelector(".popup__img");this.nodes={popupNode:t,popupCloseNode:e,popupBodyNode:r,popupContentNode:o,popupTitleNode:n,popupDescriptionNode:i,popupImgNode:s}}initAddEventListeners(){this.nodes.popupNode.addEventListener("click",this.popupClickHandler)}popupClickHandler=t=>{const e=t.target;e!==this.nodes.popupBodyNode&&e!==this.nodes.popupCloseNode||this.close()};appendPopupNodeInBody(){document.body.append(this.nodes.popupNode)}createPopupNode(){const t=document.createElement("div");return t.classList.add("popup"),t.innerHTML=`\n\t\t\t<div class="popup__body">\n\t\t\t\t<div class="popup__content">\n\t\t\t\t\t<span class="popup__close">x</span>\n\t\t\t\t\t<h1 class="popup__title">${this.options.title||""}</h1>\n\t\t\t\t\t<p class="popup__description">${this.options.description||""}</p>\n\t\t\t\t\t<div class="popup__img-wrapper">\n\t\t\t\t\t\t<img class="popup__img" src="${this.options.imgSrc}">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t`,t}open(){setTimeout((()=>{this.nodes.popupNode.classList.add(this.activeClassPopup),document.body.classList.add(this.activeClassBody)}),0)}close(){setTimeout((()=>{this.nodes.popupNode.classList.remove(this.activeClassPopup),document.body.classList.remove(this.activeClassBody),this.closeSubj.next(!0)}),0)}edit(t){this.options=t;const e=this.nodes.popupTitleNode,r=this.nodes.popupDescriptionNode,o=this.nodes.popupImgNode;null!==e&&void 0!==this.options.title&&(e.innerHTML=this.options.title),null!==r&&void 0!==this.options.description&&(r.innerHTML=this.options.description),null!==o&&void 0!==this.options.imgSrc&&(o.src=this.options.imgSrc)}destroy(){this.nodes.popupNode.remove()}}const M=function(){const t=document.querySelectorAll(".calendar__day");return Array.from(t).map((t=>{const e={},r=t.querySelector(".calendar__popup"),o=t.querySelector(".calendar__popup-title"),n=t.querySelector(".calendar__popup-description"),i=t.querySelector(".calendar__popup-img");return e.calendarDayNode=t,null!==r&&(e.calendarPopupNode=r),null!==o&&(e.calendarPopupTitleNode=o,e.title=o.innerHTML),null!==n&&(e.calendarPopupDescriptionNode=n,e.description=n.innerHTML),null!==i&&(e.calendarPopupImgNode=i,e.imgSrc=i.src),e}))}();for(const t of M){const e=t.calendarPopupNode,r=t.calendarDayNode,o=r.querySelector(".calendar__day-preview")?.innerHTML.trim();if(e&&void 0!==o){let e=localStorage.getItem("boxes_opened")||"";e&&e?.split(",").includes(o)&&r.classList.add("calendar__day_active"),+o?r.addEventListener("click",(()=>{if(r.classList.contains("calendar__day_active"))return!1;const n=new z({title:t.title,description:t.description,imgSrc:t.imgSrc});n.open(),e=localStorage.getItem("boxes_opened")||"",localStorage.setItem("boxes_opened",e+","+o),n.closeSubj.subscribe((t=>{r.classList.add("calendar__day_active")}))})):r.classList.add("disabled")}}
//# sourceMappingURL=index.41ecdea2.js.map
