"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{871:function(e,r,n){n.r(r);var t=n(439),a=n(791),u=n(689),i=n(264),s=n(66),c=n(184);r.default=function(){var e=(0,a.useState)([]),r=(0,t.Z)(e,2),n=r[0],o=r[1],p=(0,a.useState)(!0),f=(0,t.Z)(p,2),d=f[0],h=f[1],v=(0,u.UO)().movieId;return(0,a.useEffect)((function(){try{(0,s.tx)(v).then((function(e){o(e.data.results)})).finally((function(){h(!1)}))}catch(e){i.Notify.failure("Oops! Something in this life went wrong... Try again later.")}}),[v]),d?(0,c.jsx)("p",{children:"Loading..."}):(0,c.jsx)(c.Fragment,{children:n.length>0?(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:["Author: ",e.author]}),(0,c.jsx)("p",{children:e.content})]},e.id)}))}):(0,c.jsx)("p",{children:"We don't have reviews for this movie."})})}},66:function(e,r,n){n.d(r,{HI:function(){return h},Hg:function(){return f},M1:function(){return v},on:function(){return d},tx:function(){return l}});var t=n(861),a=n(757),u=n.n(a),i=n(912),s=n(7),c=n.n(s),o="cfdd02dd28707c6f234d1fe341252632",p=i.Z.create({baseURL:"https://api.themoviedb.org/3"}),f=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o},e.next=3,p.get("trending/all/day",{params:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(r){var n,t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.query,t=r.page,a={api_key:o,query:n,page:t},e.next=4,p.get("search/movie",{params:a});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:o},e.next=3,p.get("movie/".concat(r),{params:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:o},e.next=3,p.get("movie/".concat(r,"/credits"),{params:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(u().mark((function e(r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:o},e.next=3,p.get("movie/".concat(r,"/reviews"),{params:n});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();d.propTypes={query:c().string.isRequired,page:c().number.isRequired},h.propTypes={moviId:c().string.isRequired},v.propTypes={moviId:c().string.isRequired},l.propTypes={moviId:c().string.isRequired}}}]);
//# sourceMappingURL=871.4c865fe5.chunk.js.map