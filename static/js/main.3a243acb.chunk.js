(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{28:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c.n(s),n=c(31),a=c.n(n),r=(c(36),c(7)),o=c(3),l=(c(37),c(4)),j=c(6),d=c.n(j),b=(c(38),c(28),c(1)),m=function(e){var t=e.to,c=e.title,s=e.setIsOpen;return Object(b.jsx)("li",{className:"nav__item nav__item--active",children:Object(b.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return d()("nav__link",{"nav__link--active":t})},onClick:function(){return s(!1)},children:c})})},u=i.a.memo((function(e){var t=e.setIsOpen;return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__list",children:[Object(b.jsx)(m,{setIsOpen:t,title:"home",to:"/"}),Object(b.jsx)(m,{setIsOpen:t,title:"Phones",to:"phones"}),Object(b.jsx)(m,{setIsOpen:t,title:"Tablets",to:"tablets"}),Object(b.jsx)(m,{setIsOpen:t,title:"Accessories",to:"accessories"})]})})})),O=(c(40),i.a.memo((function(e){var t=e.iconName,c=e.to;return Object(b.jsx)("div",{className:"iconBlock",children:Object(b.jsx)(r.c,{to:c,className:function(e){var t=e.isActive;return d()("iconBlock__link",{"iconBlock__link--active":t})},children:Object(b.jsx)("div",{className:"iconBlock__icon iconBlock__icon--".concat(t)})})})}))),h=(c(41),c.p+"static/media/Logo.3c6bd188.svg"),x=Object(s.memo)((function(e){var t=e.setIsOpen;return t?Object(b.jsx)(r.b,{className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(b.jsx)("img",{src:h,className:"logo__image",alt:"NiceGadgets logo"})}):Object(b.jsx)(r.b,{className:"logo",to:"/",children:Object(b.jsx)("img",{src:h,className:"logo__image",alt:"NiceGadgets logo"})})})),p=i.a.memo((function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:"header page__header",children:[Object(b.jsxs)("div",{className:"header__links",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(x,{setIsOpen:i})}),Object(b.jsx)("div",{className:"header__nav",children:Object(b.jsx)(u,{setIsOpen:i})})]}),Object(b.jsx)("div",{className:"header__menu",children:Object(b.jsx)("a",{href:"#menu",className:"header__menu-opener",onClick:function(e){return function(e){return e.preventDefault(),i(!c)}(e)},children:Object(b.jsx)("div",{className:d()("header__menu-icon",{"header__menu-icon--opened":c,"header__menu-icon--closed":!c})})})}),Object(b.jsxs)("div",{className:"header__icons",children:[Object(b.jsx)(O,{iconName:"favourites",to:"/favourites"}),Object(b.jsx)(O,{iconName:"cart",to:"/cart"})]})]})})})),_=(c(42),c(43),Object(s.memo)((function(e){var t=e.mixClass,c=e.children;return Object(b.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),g=function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"cart-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(_,{mixClass:"cart-page__title",children:t})}),Object(b.jsx)("div",{children:"Products"})]})},v=(c(44),function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"favourites-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(_,{mixClass:"favourites-page__title",children:t})}),Object(b.jsx)("div",{children:"Amount"}),Object(b.jsx)("div",{children:"Favourites cards"})]})}),f=(c(45),c(46),c(47),function(e){var t=e.children;return Object(b.jsx)("h3",{className:"section-title",children:t})}),N=(c(48),function(e){var t=e.link,c=e.gridClasses,s=e.image,i=e.title,n=e.amount;return Object(b.jsx)("article",{className:"category-card ".concat(c),children:Object(b.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(b.jsx)("img",{className:"category-card__image",src:s,alt:"banner of ".concat(i," category")}),Object(b.jsx)("h4",{className:"category-card__title",children:i}),Object(b.jsx)("p",{className:"category-card__models-amount",children:"".concat(n," models")})]})})}),k=c.p+"static/media/category__phones.5745f0cd.jpg",w=c.p+"static/media/category__tablets.05b3d251.jpg",y=c.p+"static/media/category__accessories.3b9d45fd.jpg",C=function(){return Object(b.jsxs)("section",{className:"shop-by-category container",children:[Object(b.jsx)(f,{children:"Shop by category"}),Object(b.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(b.jsx)(N,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:k,title:"Mobile phones",amount:95}),Object(b.jsx)(N,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:w,title:"Tablets",amount:24}),Object(b.jsx)(N,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:y,title:"Accessories",amount:100})]})]})},S=(c(49),function(){return Object(b.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),T=(c(50),function(e){var t=e.children,c=e.className;return Object(b.jsx)("button",{className:c,type:"submit",children:t})});T.defaultProps={className:""};c(51);var B=function(e){var t=e.name,c=e.price,s=e.screen,i=e.capacity,n=e.ram,a=e.image;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{className:"card__img",src:a,alt:t}),Object(b.jsx)("h2",{className:"card__title",children:t}),Object(b.jsx)("p",{className:"card__price",children:"$".concat(c)}),Object(b.jsxs)("div",{className:"card__specifications",children:[Object(b.jsxs)("div",{className:"card__specifications--feature",children:[Object(b.jsx)("span",{children:"Screen"}),Object(b.jsx)("span",{children:"Capacity"}),Object(b.jsx)("span",{children:"RAM"})]}),Object(b.jsxs)("div",{className:"card__specifications--feature",children:[Object(b.jsx)("span",{children:s}),Object(b.jsx)("span",{children:i}),Object(b.jsx)("span",{children:n})]})]}),Object(b.jsxs)("div",{className:"card__footer",children:[Object(b.jsx)(T,{className:"button button__standard",children:"Add to cart"}),Object(b.jsx)("div",{className:"card__footer--favorites"})]})]})},I=c(15),P=c(25),A=c.n(P);c(67);var G=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(s.useState)(t(e)),i=Object(l.a)(c,2),n=i[0],a=i[1];function r(){a(t(e))}return Object(s.useEffect)((function(){var t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),function(){t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}}),[e]),n};function D(e){var t=e.onClick,c=e.isDisabled,s=d()("arrow arrow-left",{disabled:c});return Object(b.jsx)("div",{onClick:c?void 0:t,className:s})}function L(e){var t=e.onClick,c=e.isDisabled,s=d()("arrow arrow-right",{disabled:c});return Object(b.jsx)("div",{onClick:c?void 0:t,className:s})}var M=function(e){var t=e.children,c=Object(s.useState)(0),n=Object(l.a)(c,2),a=n[0],r=n[1],o=i.a.Children.count(t),j=G("(max-width: 1024px)"),d=G("(max-width: 740px)"),m=0;m=G("(max-width: 480px)")?1.5:d?2:j?2.5:4;var u={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(b.jsx)(L,{isDisabled:a===o-m,onClick:function(){return r(a+1)}}),prevArrow:Object(b.jsx)(D,{isDisabled:0===a,onClick:function(){return r(a-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){r(t)}};return Object(b.jsx)(A.a,Object(I.a)(Object(I.a)({},u),{},{className:"smartphone-slider",children:t}))};D.defaultProps={onClick:function(){}},L.defaultProps={onClick:function(){}};c(68);var F=c.p+"static/media/00.5b7ef52b.jpg",E=function(){return Object(b.jsxs)("section",{className:"brand-new-models container",children:[Object(b.jsx)(_,{mixClass:"brand-new-models__title",children:"Brand new models"}),Object(b.jsx)(M,{children:[1,2,3,4,5,6,7,8,9].map((function(e){return Object(b.jsx)(B,{name:"Apple iPhone 11 Pro Max 64GB Silver",price:1400,screen:"6.5' OLED",capacity:"64GB",ram:"4GB",image:F},e)}))})]})},J=(c(69),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(b.jsx)(A.a,Object(I.a)(Object(I.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),W=(c(70),c.p+"static/media/banner.330ccefb.jpeg"),z=function(){return Object(b.jsxs)("div",{className:"banner grid",children:[Object(b.jsx)(_,{mixClass:"banner__title grid__item grid__item--tablet_1-11 grid__item--desktop_1-24",children:"Welcome to Nice Gadgets store!"}),Object(b.jsxs)(J,{children:[Object(b.jsx)("img",{className:"banner__image",src:W,alt:"BannerImg"}),Object(b.jsx)("img",{className:"banner__image",src:W,alt:"BannerImg"}),Object(b.jsx)("img",{className:"banner__image",src:W,alt:"BannerImg"})]})]})},H=(c(71),function(){return Object(b.jsxs)("section",{className:"hot-prices container",children:[Object(b.jsx)(_,{mixClass:"hot-prices__title",children:"Hot prices"}),Object(b.jsx)(M,{children:[1,2,3,4,5,6,7,8,9].map((function(e){return Object(b.jsx)(B,{name:"Apple iPhone 11 Pro Max 64GB Silver",price:1400,screen:"6.5' OLED",capacity:"64GB",ram:"4GB",image:F},e)}))})]})}),R=function(){return Object(b.jsxs)("div",{className:"home-page",children:[Object(b.jsx)(S,{}),Object(b.jsx)(z,{}),Object(b.jsx)(E,{}),Object(b.jsx)(C,{}),Object(b.jsx)(H,{})]})},$=function(){return Object(b.jsx)("div",{children:"NotFoundPage"})},q=function(){var e=Object(o.o)().productId;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{children:"Section title component ".concat(e)})})},K=(c(72),function(e){var t=e.pageTitle;return Object(b.jsxs)("div",{className:"product-page",children:[Object(b.jsx)("div",{children:"Breadcrumbs"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(_,{mixClass:"product-page__title",children:t})}),Object(b.jsx)("div",{children:"Data amount"}),Object(b.jsx)("div",{children:"Sorting"}),Object(b.jsx)("div",{children:"Datalist"}),Object(b.jsx)("div",{children:"Pagination"})]})}),Q=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("main",{className:"page__main",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",element:Object(b.jsx)(R,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(b.jsx)(o.a,{path:"phones",element:Object(b.jsx)(K,{pageTitle:"Mobile Phones"})}),Object(b.jsx)(o.a,{path:"tablets",element:Object(b.jsx)(K,{pageTitle:"Tablets"})}),Object(b.jsx)(o.a,{path:"accessories",element:Object(b.jsx)(K,{pageTitle:"Accessories"})}),Object(b.jsx)(o.a,{path:"/cart",element:Object(b.jsx)(g,{pageTitle:"Cart"})}),Object(b.jsx)(o.a,{path:"/favourites",element:Object(b.jsx)(v,{pageTitle:"Favourites"})}),Object(b.jsx)(o.a,{path:"product/:productId",element:Object(b.jsx)(q,{})}),Object(b.jsx)(o.a,{path:"*",element:Object(b.jsx)($,{})})]})}),Object(b.jsx)("footer",{style:{fontSize:"24px"},children:"Footer"})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(Q,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.3a243acb.chunk.js.map