"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[515],{515:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,c,a=t(9439),i=t(2791),s=t(7689),o=t(1087),u=t(168),p=t(6444),l=p.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 10px;\n  justify-content: center;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    padding: 15px;\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: 1280px) {\n    gap: 30px;\n  }\n"]))),d=p.ZP.div(c||(c=(0,u.Z)(["\n  margin-top: 10px;\n  margin-left: 10px;\n  margin-top: -25px;\n  margin-bottom: 20px;\n  width: fit-content;\n  padding: 7px 20px;\n  border-radius: 4px;\n  background-color: grey;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bolder;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),f=t(7692),h=t(8358),x=t(184),v=function(e){var n,t,r=e.movie,c=(0,s.TH)(),a=(0,i.useRef)(null!==(n=null===(t=c.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies"),u=new Date(r.release_date);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.rU,{to:a.current,children:(0,x.jsxs)(d,{children:[(0,x.jsx)(f.Wpx,{}),(0,x.jsx)("span",{children:"Go back"})]})}),(0,x.jsxs)(l,{children:[r.poster_path?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,width:230,height:350}):(0,x.jsx)("img",{src:h,alt:r.title,width:230,height:350}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h1",{children:[r.title," ",(0,x.jsxs)("span",{children:["(",u.getFullYear(),")"]})," "]}),(0,x.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:r.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:r.genres.map((function(e){return e.name})).join(" ")})]})]})]})},m=t(1066),g=function(e){return e.isActive?{color:"blue",borderBottom:"4px solid blue"}:{color:"black"}},j=function(){var e=(0,i.useState)(null),n=(0,a.Z)(e,2),t=n[0],r=n[1],c=(0,s.UO)().movieId;return(0,i.useEffect)((function(){document.title="About movie",(0,m.Pg)(c).then((function(e){return r(e)}))}),[c]),(0,x.jsxs)("main",{children:[t&&(0,x.jsx)(v,{movie:t}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{children:"Additional information:"}),(0,x.jsxs)("div",{children:[(0,x.jsxs)(o.OL,{to:"cast",style:g,children:[(0,x.jsx)(f.QBW,{}),"Cast"]}),(0,x.jsxs)(o.OL,{to:"reviews",style:g,children:[(0,x.jsx)(f.QBW,{}),"Reviews"]})]})]}),(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading..."}),children:(0,x.jsx)(s.j3,{})})]})}},1066:function(e,n,t){t.d(n,{Df:function(){return u},Ku:function(){return x},Pg:function(){return f},XT:function(){return l},fI:function(){return m}});var r=t(5861),c=t(7757),a=t.n(c),i=t(1243),s="https://api.themoviedb.org/3/",o="4d2e80e66c2c2de6980779cd2eee193d";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 3:return n=e.sent,e.abrupt("return",n.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n,t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"search/movie"),{params:{api_key:"".concat(o),query:"".concat(n),page:"".concat(t)}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},8358:function(e,n,t){e.exports=t.p+"static/media/no-image.55e4847a78881b7fb299.jpg"}}]);
//# sourceMappingURL=515.0d1657e5.chunk.js.map