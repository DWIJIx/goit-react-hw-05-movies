"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[811],{2811:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r,a,c=t(9439),o=t(1066),u=t(7689),i=t(2791),s=t(168),p=t(6444),l=p.ZP.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n  max-width: 190px;\n  height: 270px;\n  padding: 10px;\n  background-color: lightgrey;\n  border-radius: 5px;\n  /* box-shadow: 10px 10px 17px 0px rgba(0, 0, 0, 0.75); */\n  overflow-wrap: break-word;\n\n  h4 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: black;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),f=t(184),d=function(){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,u.UO)().movieId;return(0,i.useEffect)((function(){(0,o.Ku)(a).then((function(n){r(n.cast)}))}),[a]),(0,f.jsx)(f.Fragment,{children:0===t.length?(0,f.jsx)("h3",{children:"We don't have any casts for this movie!"}):(0,f.jsx)(l,{children:t.map((function(n){return(0,f.jsxs)(h,{children:[n.profile_path?(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(n.profile_path),alt:n.name,width:160,height:210}):(0,f.jsx)("img",{src:"image",alt:n.name,width:160,height:210}),(0,f.jsx)("h4",{children:n.name})]},n.id)}))})})}},1066:function(n,e,t){t.d(e,{Df:function(){return s},Ku:function(){return v},Pg:function(){return f},XT:function(){return l},fI:function(){return m}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243),u="https://api.themoviedb.org/3/",i="4d2e80e66c2c2de6980779cd2eee193d";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"search/movie"),{params:{api_key:"".concat(i),query:"".concat(e),page:"".concat(t)}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=811.d9320481.chunk.js.map