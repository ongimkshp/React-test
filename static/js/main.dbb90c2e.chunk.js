(this["webpackJsonpshope-app"]=this["webpackJsonpshope-app"]||[]).push([[0],{57:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(21),r=c.n(s),i=c(4),l=c(7),o=c(0);var j=function(){var e=Object(l.c)((function(e){return e.handleCart}));return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(i.b,{className:"navbar-brand fw-bold fs-4",to:"/",children:"LA COLLECTION"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link ","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/products",children:"Products"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/contact",children:"Contact"})})]}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsxs)(i.b,{to:"/login",className:"btn btn-outline-dark",children:[Object(o.jsx)("i",{className:"fa fa-sign-in me-1"}),"Login"]}),Object(o.jsxs)(i.b,{to:"/register",className:"btn btn-outline-dark ms-2",children:[Object(o.jsx)("i",{className:"fa fa-user-plus me-1"}),"Register"]}),Object(o.jsxs)(i.b,{to:"/cart",className:"btn btn-outline-dark ms-2",children:[Object(o.jsx)("i",{className:"fa fa-shopping-cart me-1"}),"Cart (",e.length,")"]})]})]})]})})},d=c(14),b=c.n(d),u=c(16),h=c(11),O=c(10);c(56);var m=function(){var e=Object(l.c)((function(e){return e.handleCate})).map((function(e){return{category:e,newCategory:(t=e,t.charAt(0).toUpperCase()+t.slice(1))};var t})),t=Object(a.useState)([]),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(n),j=Object(h.a)(r,2),d=j[0],m=j[1],x=Object(a.useState)(!0),p=Object(h.a)(x,2),f=p[0],v=p[1],g=Object(a.useState)("all"),N=Object(h.a)(g,2),y=N[0],w=N[1],k=!0;Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,fetch("https://fakestoreapi.com/products");case 3:if(t=e.sent,!k){e.next=16;break}return e.t0=s,e.next=8,t.clone().json();case 8:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=m,e.next=13,t.json();case 13:e.t3=e.sent,(0,e.t2)(e.t3),v(!1);case 16:return e.abrupt("return",(function(){k=!1}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var C=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(O.a,{height:350})}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(O.a,{height:350})}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(O.a,{height:350})}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(O.a,{height:350})})]})},E=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"buttons d-flex justify-content-center mb-5 pb-5",children:[Object(o.jsx)("button",{className:"btn btn-outline-dark me-2 ".concat("all"===y?"active":""),onClick:function(){m(n),w("all")},children:"All"}),e.map((function(e,t){return Object(o.jsx)("button",{className:"btn btn-outline-dark me-2 ".concat(y===e.category?"active":""),onClick:function(){return function(e){var t=n.filter((function(t){return t.category===e}));m(t),w(e)}(e.category)},children:e.newCategory},t)}))]}),d.map((function(e,t){return Object(o.jsx)("div",{className:"col-xl-3 col-md-4 col-sm-6 mb-4",children:Object(o.jsxs)("div",{class:"card h-100 text-center p-4",children:[Object(o.jsx)("img",{src:e.image,class:"card-img-top",alt:e.title,height:"250px"}),Object(o.jsxs)("div",{class:"card-body",children:[Object(o.jsxs)("h5",{class:"card-title mb-0",children:[e.title.substring(0,12),"..."]}),Object(o.jsxs)("p",{class:"card-text lead fw-bold",children:["$",e.price]}),Object(o.jsx)(i.b,{to:"/products/".concat(e.id),class:"btn btn-outline-dark",children:"Buy now"})]})]},e.id)},t)}))]})};return Object(o.jsxs)("div",{className:"container my-5 py-5",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 mb-5",children:[Object(o.jsx)("h1",{className:"display-6 fw-bolder text-center",children:"Products"}),Object(o.jsx)("hr",{})]})}),Object(o.jsx)("div",{className:"row justify-content-center",children:f?Object(o.jsx)(C,{}):Object(o.jsx)(E,{})})]})};var x=function(){return Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("div",{className:"card bg-dark text-white border-0",children:[Object(o.jsx)("img",{src:"https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/clothing-store-wordpress-themes.jpg",className:"card-img",alt:"Background",height:"650px"}),Object(o.jsx)("div",{className:"card-img-overlay d-flex flex-column justify-content-center",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h5",{className:"card-title display-3 fw-bolder mb-0",children:"NEW SEASON"}),Object(o.jsx)("p",{className:"card-text lead fs-2",children:"CHECK OUT ALL THE TRENDS"})]})})]}),Object(o.jsx)(m,{})]})},p=c(2);c(57);function f(){var e=Object(a.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],s=function(){window.pageYOffset>300?n(!0):n(!1)};return Object(a.useEffect)((function(){window.addEventListener("scroll",s)}),[]),Object(o.jsx)("div",{className:"scroll-to-top",children:c&&Object(o.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(o.jsx)("i",{className:"fa fa-arrow-up icon-back-to-top"})})})}var v=c(39),g=c.n(v),N="ADD_ITEM",y="DELETE_ITEM",w="GET_CATEGORY",k=function(e){return{type:N,payload:e}};var C=function(){var e=Object(p.f)().id,t=Object(a.useState)([]),c=Object(h.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(!1),j=Object(h.a)(r,2),d=j[0],m=j[1],x=Object(l.b)();Object(a.useEffect)((function(){var t=function(){var t=Object(u.a)(b.a.mark((function t(){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,fetch("https://fakestoreapi.com/products/".concat(e));case 3:return c=t.sent,t.t0=s,t.next=7,c.json();case 7:t.t1=t.sent,(0,t.t0)(t.t1),m(!1);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var f=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)(O.a,{height:400})}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)(O.a,{height:50,width:200}),Object(o.jsx)(O.a,{height:100}),Object(o.jsx)(O.a,{height:25,width:150}),Object(o.jsx)(O.a,{height:50,width:150}),Object(o.jsx)(O.a,{height:200}),Object(o.jsx)(O.a,{height:50,width:300})]})]})},v=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsx)("img",{src:n.image,alt:n.title,height:"400px",width:"400px"})}),Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h4",{className:"text-uppercase text-black-50",children:n.category}),Object(o.jsx)("h1",{className:"display-5",children:n.title}),Object(o.jsxs)("p",{className:"lead fw-bolder",children:["Rating ",n.rating&&n.rating.rate,Object(o.jsx)("i",{className:"fa fa-star"})]}),Object(o.jsxs)("h3",{className:"display-6 fw-bold my-4",children:["$ ",n.price]}),Object(o.jsx)("p",{className:"lead",children:n.description}),Object(o.jsx)("button",{className:"btn btn-outline-dark px-4 py-2",onClick:function(){return function(e){x(k(e))}(n)},children:"Add to cart"}),Object(o.jsx)(i.b,{to:"/cart",className:"btn btn-dark ms-2 px-3",children:"Go to cart"})]})]})};return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsx)("div",{className:"row",children:d?Object(o.jsx)(f,{}):Object(o.jsx)(v,{})})})})};c(76);var E=function(){return Object(o.jsxs)("div",{className:"error",children:[Object(o.jsx)("img",{src:"/error.webp",className:"card-img",alt:"Error",height:"650px"}),Object(o.jsxs)("div",{className:"error-content",children:[Object(o.jsx)("h4",{children:"Hey captian! Looks like you're heading to a wrong planet!"}),Object(o.jsx)(i.b,{className:"btn btn-dark",to:"/",children:"Take me back to the homepage"})]})]})};var S=function(){var e=Object(l.c)((function(e){return e.handleCart})),t=Object(l.b)(),c=function(e){t(function(e){return{type:y,payload:e}}(e))};return Object(o.jsx)("div",{className:"container mt-5",children:Object(o.jsx)("div",{className:"row gy-5",children:e.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"col-md-4 offset-md-2",children:Object(o.jsx)("img",{src:e.image,alt:e.title,height:"200px",width:"180px"})}),Object(o.jsxs)("div",{className:"col-md-5 offset-md-1",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{className:"lead fw-bold",children:[e.qty," x $",e.price," = $",e.qty*e.price]}),Object(o.jsx)("button",{className:"btn btn-outline-dark me-4",onClick:function(){return c(e)},children:Object(o.jsx)("i",{className:"fa fa-minus"})}),Object(o.jsx)("button",{className:"btn btn-outline-dark me-4",onClick:function(){return function(e){t(k(e))}(e)},children:Object(o.jsx)("i",{className:"fa fa-plus"})})]}),Object(o.jsx)("div",{className:"border-bottom"})]})}))})})};var T=function(){return Object(l.b)()(function(){var e=Object(u.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("https://fakestoreapi.com/products/categories");case 3:c=e.sent,t({type:w,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(p.c,{children:[Object(o.jsx)(p.a,{exact:!0,path:"/",component:x}),Object(o.jsx)(p.a,{exact:!0,path:"/cart",component:S}),Object(o.jsx)(p.a,{exact:!0,path:"/products",component:m}),Object(o.jsx)(p.a,{path:"/products/:id",component:C}),Object(o.jsx)(p.a,{path:"/:somestring",component:E})]}),Object(o.jsx)(f,{})]})},L=(c(77),c(78),c(79),c(17)),_=c(23),q=c(5),A=[],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,c=t.payload;switch(t.type){case N:var a=e.find((function(e){return e.id===c.id}));return a?e.map((function(e){return e.id===c.id?Object(q.a)(Object(q.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(_.a)(e),[Object(q.a)(Object(q.a)({},c),{},{qty:1})]);case y:var n=e.find((function(e){return e.id===c.id}));return 1===n.qty?e.filter((function(e){return e.id!==n.id})):e.map((function(e){return e.id===c.id?Object(q.a)(Object(q.a)({},e),{},{qty:e.qty-1}):e}));default:return A}},F=[],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return t.type===w?Object(_.a)(t.payload):e},R=Object(L.b)({handleCart:D,handleCate:I}),H=[c(40).a],M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.c,$=Object(L.d)(R,M(L.a.apply(void 0,H)));r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(l.a,{store:$,children:Object(o.jsx)(T,{})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.dbb90c2e.chunk.js.map