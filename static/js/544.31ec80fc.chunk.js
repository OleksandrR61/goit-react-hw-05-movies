"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{368:function(r,e,n){var t=n(689),a=n(87),i=n(184);e.Z=function(r){var e=r.movies,n=(0,t.TH)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:e.map((function(r){var e,t,u=r.id,s=r.title,c=r.name,o=r.original_title,p=r.original_name;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(u),state:{from:n},children:null!==(e=null!==(t=null!==s&&void 0!==s?s:c)&&void 0!==t?t:o)&&void 0!==e?e:p})},u)}))})})}},544:function(r,e,n){n.r(e);var t=n(439),a=n(791),i=n(264),u=n(368),s=n(66),c=n(184);e.default=function(){var r=(0,a.useState)([]),e=(0,t.Z)(r,2),n=e[0],o=e[1];return(0,a.useEffect)((function(){try{(0,s.Hg)().then((function(r){o(r.data.results)}))}catch(r){i.Notify.failure("Oops! Something in this life went wrong... Try again later.")}}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Trending today"}),(0,c.jsx)(u.Z,{movies:n})]})}},66:function(r,e,n){n.d(e,{HI:function(){return v},Hg:function(){return f},M1:function(){return l},on:function(){return d},tx:function(){return m}});var t=n(861),a=n(757),i=n.n(a),u=n(912),s=n(7),c=n.n(s),o="cfdd02dd28707c6f234d1fe341252632",p=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),f=function(){var r=(0,t.Z)(i().mark((function r(){var e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e={api_key:o},r.next=3,p.get("trending/all/day",{params:e});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(i().mark((function r(e){var n,t,a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.query,t=e.page,a={api_key:o,query:n,page:t},r.next=4,p.get("search/movie",{params:a});case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(i().mark((function r(e){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={api_key:o},r.next=3,p.get("movie/".concat(e),{params:n});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),l=function(){var r=(0,t.Z)(i().mark((function r(e){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={api_key:o},r.next=3,p.get("movie/".concat(e,"/credits"),{params:n});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,t.Z)(i().mark((function r(e){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={api_key:o},r.next=3,p.get("movie/".concat(e,"/reviews"),{params:n});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();d.propTypes={query:c().string.isRequired,page:c().number.isRequired},v.propTypes={moviId:c().string.isRequired},l.propTypes={moviId:c().string.isRequired},m.propTypes={moviId:c().string.isRequired}}}]);
//# sourceMappingURL=544.31ec80fc.chunk.js.map