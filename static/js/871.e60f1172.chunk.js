"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[871],{871:function(e,r,t){t.r(r);var n=t(439),a=t(791),u=t(689),i=t(264),s=t(66),c=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],o=r[1],p=(0,a.useState)(!0),f=(0,n.Z)(p,2),d=f[0],h=f[1],v=(0,u.UO)().movieId;return(0,a.useEffect)((function(){try{(0,s.tx)(v).then((function(e){o(e.data.results),h(!1)}))}catch(e){i.Notify.failure("Oops! Something in this life went wrong... Try again later.")}}),[v]),d?(0,c.jsx)("p",{children:"Loading..."}):(0,c.jsx)(c.Fragment,{children:t.length>0?(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{children:["Author: ",e.author]}),(0,c.jsx)("p",{children:e.content})]},e.id)}))}):(0,c.jsx)("p",{children:"We don't have reviews for this movie."})})}},66:function(e,r,t){t.d(r,{HI:function(){return h},Hg:function(){return f},M1:function(){return v},on:function(){return d},tx:function(){return m}});var n=t(861),a=t(757),u=t.n(a),i=t(912),s=t(7),c=t.n(s),o="cfdd02dd28707c6f234d1fe341252632",p=i.Z.create({baseURL:"https://api.themoviedb.org/3"}),f=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o},e.next=3,p.get("trending/all/day",{params:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.query,n=r.page,a={api_key:o,query:t,page:n},e.next=4,p.get("search/movie",{params:a});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r,"/credits"),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r,"/reviews"),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();d.propTypes={query:c().string.isRequired,page:c().number.isRequired},h.propTypes={moviId:c().string.isRequired},v.propTypes={moviId:c().string.isRequired},m.propTypes={moviId:c().string.isRequired}}}]);
//# sourceMappingURL=871.e60f1172.chunk.js.map