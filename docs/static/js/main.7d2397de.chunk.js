(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)("Welcome"),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",placeholder:"Escribe alguna palabra",value:r,onChange:function(e){o(e.target.value)}})})},j=n(6),d=n.n(j),l=n(8),b=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"KRd2DFMmJAq2pfDvOGO55aWUYQSbPQNL",n="http://api.giphy.com/v1/gifs/search?api_key=".concat("KRd2DFMmJAq2pfDvOGO55aWUYQSbPQNL","&q=").concat(encodeURI(t),"&limit=4"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.datos,n=t.title,a=t.url;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"card animate__animated animate__bounce animate__delay-2s",children:[Object(u.jsx)("img",{src:a,alt:n}),Object(u.jsx)("p",{children:n})]})})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),r&&Object(u.jsx)("p",{children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(p,{datos:e},e.id)}))})]})},O=function(e){var t=Object(a.useState)(["Welcome"]),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Gif Expert App"}),Object(u.jsx)(o,{setCategories:r,categories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:c.map((function(e){return Object(u.jsx)(f,{category:e},e)}))})]})};n(16);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7d2397de.chunk.js.map