"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[115],{115:function(e,r,t){t.r(r);var n=t(439),a=t(791),i=t(689),u=t(264),c=t(66),s=t(184);r.default=function(){var e=(0,a.useState)([]),r=(0,n.Z)(e,2),t=r[0],o=r[1],p=(0,a.useState)(!0),f=(0,n.Z)(p,2),d=f[0],h=f[1],m=(0,i.UO)().movieId;return(0,a.useEffect)((function(){try{(0,c.M1)(m).then((function(e){o(e.data.cast)})).finally((function(){h(!1)}))}catch(e){u.Notify.failure("Oops! Something in this life went wrong... Try again later.")}}),[m]),d?(0,s.jsx)("p",{children:"Loading..."}):(0,s.jsx)(s.Fragment,{children:t.length>0?(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsxs)("li",{children:[e.profile_path&&(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.profile_path),alt:"",width:"100"}),(0,s.jsx)("p",{children:e.name}),(0,s.jsxs)("p",{children:["Role: ",e.character]})]},e.id)}))}):(0,s.jsx)("p",{children:"Sorry, we have no information about the cast"})})}},66:function(e,r,t){t.d(r,{HI:function(){return h},Hg:function(){return f},M1:function(){return m},on:function(){return d},tx:function(){return l}});var n=t(861),a=t(757),i=t.n(a),u=t(912),c=t(7),s=t.n(c),o="cfdd02dd28707c6f234d1fe341252632",p=u.Z.create({baseURL:"https://api.themoviedb.org/3"}),f=function(){var e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:o},e.next=3,p.get("trending/all/day",{params:r});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.query,n=r.page,a={api_key:o,query:t,page:n},e.next=4,p.get("search/movie",{params:a});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r,"/credits"),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(r){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:o},e.next=3,p.get("movie/".concat(r,"/reviews"),{params:t});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();d.propTypes={query:s().string.isRequired,page:s().number.isRequired},h.propTypes={moviId:s().string.isRequired},m.propTypes={moviId:s().string.isRequired},l.propTypes={moviId:s().string.isRequired}}}]);
//# sourceMappingURL=115.0c6ffd58.chunk.js.map