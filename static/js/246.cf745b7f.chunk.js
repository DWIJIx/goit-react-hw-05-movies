"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{2419:function(n,e,t){t.d(e,{e:function(){return f}});var r,o,a=t(7689),i=t(1087),c=t(168),u=t(6444),p=u.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 25px;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n"]))),s=u.ZP.li(o||(o=(0,c.Z)(["\n  max-width: 200px;\n  height: 310px;\n  padding: 10px;\n  background-color: lightgrey;\n  border-radius: 3px;\n  overflow-wrap: break-word;\n\n  &:hover {\n    transform: scale(1.04);\n  }\n\n  h3 {\n    margin-top: 10px;\n    margin-bottom: 0;\n    color: black;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]))),l=t(8358),d=t(184),f=function(n){var e=n.movies,t=n.url,r=(0,a.TH)();return console.log(t),(0,d.jsx)(p,{children:e.map((function(n,e){return(0,d.jsx)(i.rU,{to:"".concat(t).concat(n.id),state:{from:r},children:(0,d.jsx)(s,{children:(0,d.jsxs)("div",{children:[n.poster_path?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:"movie.title",width:180,height:250}):(0,d.jsx)("img",{src:l,alt:n.title,width:180,height:250}),(0,d.jsx)("div",{children:(0,d.jsx)("h3",{children:n.title})})]})})},e)}))})}},2246:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,o,a,i,c,u,p=t(3433),s=t(9439),l=t(2419),d=t(2791),f=t(9126),h=t(9014),x=t(168),g=t(6444),m=g.ZP.header(r||(r=(0,x.Z)(["\n  padding-left: 40px;\n\n  color: #fff;\n"]))),v=g.ZP.form(o||(o=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid grey;\n"]))),b=g.ZP.button(a||(a=(0,x.Z)(["\n  padding: 5px;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),w=g.ZP.span(i||(i=(0,x.Z)(["\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n"]))),y=g.ZP.input(c||(c=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=t(184),k=function(n){var e=n.onSubmit,t=(0,d.useState)(""),r=(0,s.Z)(t,2),o=r[0],a=r[1],i=function(){a("")};return(0,Z.jsx)(m,{children:(0,Z.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==o?(e(o),i()):h.ZP.error("You need to enter something")},children:[(0,Z.jsx)(y,{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"text",value:o,onChange:function(n){a(n.currentTarget.value)}}),(0,Z.jsx)(b,{type:"submit",children:(0,Z.jsx)(w,{children:(0,Z.jsx)(f.dVI,{})})})]})})},j=g.ZP.button(u||(u=(0,x.Z)(["\n  padding: 8px 16px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  max-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),S=function(n){var e=n.onLoadMore;return(0,Z.jsx)(j,{type:"button",onClick:function(){return e()},children:"Load more"})},_=t(5243),P=function(){return(0,Z.jsx)(_.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},z=t(1066),C=t(1087),T=function(){var n,e=(0,C.lr)(""),t=(0,s.Z)(e,2),r=t[0],o=t[1],a=(0,d.useState)(""),i=(0,s.Z)(a,2),c=i[0],u=i[1],f=(0,d.useState)(1),h=(0,s.Z)(f,2),x=h[0],g=h[1],m=(0,d.useState)(1),v=(0,s.Z)(m,2),b=v[0],w=v[1],y=(0,d.useState)(!1),j=(0,s.Z)(y,2),_=j[0],T=j[1],L=null!==(n=r.get("query"))&&void 0!==n?n:"";(0,d.useEffect)((function(){""!==L&&1===x&&(T(!0),(0,z.XT)(L.trim(),x).then((function(n){u(n.results),w(n.total_pages)})).then(T(!1)))}),[x,L,b]);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(k,{onSubmit:function(n){o(""!==n?{query:n}:{}),g(1)},placeholder:L}),_&&(0,Z.jsx)(P,{}),""!==c&&(0,Z.jsx)(l.e,{movies:c,url:""}),b!==x&&(0,Z.jsx)(S,{onLoadMore:function(){(0,z.XT)(L.trim(),x+1).then((function(n){u((function(e){return[].concat((0,p.Z)(e),(0,p.Z)(n.results))})),g((function(n){return n+1}))}))}})]})}},1066:function(n,e,t){t.d(e,{Df:function(){return p},Ku:function(){return x},Pg:function(){return f},XT:function(){return l},fI:function(){return m}});var r=t(5861),o=t(7757),a=t.n(o),i=t(1243),c="https://api.themoviedb.org/3/",u="4d2e80e66c2c2de6980779cd2eee193d";function p(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(u));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"search/movie"),{params:{api_key:"".concat(u),query:"".concat(e),page:"".concat(t)}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"movie/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US"));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},8358:function(n,e,t){n.exports=t.p+"static/media/no-image.55e4847a78881b7fb299.jpg"}}]);
//# sourceMappingURL=246.cf745b7f.chunk.js.map