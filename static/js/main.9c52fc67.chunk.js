(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(38),i=c.n(s),r=(c(43),c(8)),o=c(4),l=(c(44),c(5)),j=c(9),u=c.n(j),d=(c(45),c(36),c(0)),b=function(e){var t=e.to,c=e.title,n=e.setIsMenuOpened;return Object(d.jsx)("li",{className:"nav__item nav__item--active",children:Object(d.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return u()("nav__link",{"nav__link--active":t})},onClick:function(){return n(!1)},children:c})})},m=a.a.memo((function(e){var t=e.setIsMenuOpened;return Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("ul",{className:"nav__list",children:[Object(d.jsx)(b,{setIsMenuOpened:t,title:"home",to:"/"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Phones",to:"phones"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Tablets",to:"tablets"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Accessories",to:"accessories"})]})})})),O=(c(47),a.a.memo((function(e){var t=e.iconName,c=e.to,n=e.setIsMenuOpened,a=e.counter;return Object(d.jsx)("div",{className:"icon-block",children:Object(d.jsx)(r.c,{title:t,"aria-label":t,to:c,className:function(e){var t=e.isActive;return u()("icon-block__link",{"icon-block__link--active":t})},onClick:function(){return n(!1)},children:Object(d.jsx)("div",{className:"icon-block__icon icon-block__icon--".concat(t),children:a>0&&Object(d.jsx)("div",{className:"icon-block__counter",children:Object(d.jsx)("div",{className:"icon-block__number",children:a})})})})})}))),h=(c(48),c.p+"static/media/Logo.3c6bd188.svg"),p=Object(n.memo)((function(e){var t=e.setIsMenuOpened;return t?Object(d.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(d.jsx)("img",{src:h,className:"logo__image",alt:"NiceGadgets logo"})}):Object(d.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",children:Object(d.jsx)("img",{src:h,className:"logo__image",alt:"NiceGadgets logo"})})})),_=(c(49),a.a.createContext({cart:[],setCart:function(){},updateCart:function(){},cartLength:0,favourites:[],setFavourites:function(){},updateFavourites:function(){},favouritesLength:0})),x=function(e){var t=e.children,c=Object(n.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),a=Object(l.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("favourites")||"[]")),o=Object(l.a)(r,2),j=o[0],u=o[1],b=Object(n.useCallback)((function(e){i(e),localStorage.setItem("cart",JSON.stringify(e))}),[]),m=Object(n.useCallback)((function(e){u(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]),O=s.length,h=j.length,p=Object(n.useMemo)((function(){return{cart:s,setCart:i,updateCart:b,cartLength:O,favourites:j,setFavourites:u,updateFavourites:m,favouritesLength:h}}),[s,j]);return Object(d.jsx)(_.Provider,{value:p,children:t})},f=Object(n.memo)((function(e){var t=e.isMenuOpen,c=e.setIsMenuOpened,a=Object(n.useContext)(_),s=a.cartLength,i=a.favouritesLength;return Object(d.jsxs)("div",{className:u()("burger-menu",{"burger-menu--active":t}),children:[Object(d.jsx)(m,{setIsMenuOpened:c}),Object(d.jsxs)("div",{className:"burger-menu__icons",children:[Object(d.jsx)(O,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:c,counter:i}),Object(d.jsx)(O,{iconName:"Cart",to:"/cart",setIsMenuOpened:c,counter:s})]})]})})),g=a.a.memo((function(){var e=Object(n.useContext)(_),t=e.cartLength,c=e.favouritesLength,a=Object(n.useState)(!1),s=Object(l.a)(a,2),i=s[0],r=s[1],o=Object(n.useCallback)((function(e){e.preventDefault(),r((function(e){return!e}))}),[]);return Object(n.useEffect)((function(){return i?document.body.classList.add("page--with-menu"):document.body.classList.remove("page--with-menu")}),[i]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsxs)("div",{className:"header__links",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)(p,{setIsMenuOpened:r})}),Object(d.jsx)("div",{className:"header__nav",children:Object(d.jsx)(m,{setIsMenuOpened:r})})]}),Object(d.jsx)("div",{className:"header__menu",children:Object(d.jsx)("button",{title:"Menu","aria-label":"menu button",type:"button",className:"header__menu-opener",onClick:function(e){return o(e)},children:Object(d.jsx)("div",{className:u()("header__menu-icon",{"header__menu-icon--opened":i,"header__menu-icon--closed":!i})})})}),Object(d.jsxs)("div",{className:"header__icons",children:[Object(d.jsx)(O,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:r,counter:c}),Object(d.jsx)(O,{iconName:"Cart",to:"/cart",setIsMenuOpened:r,counter:t})]})]}),Object(d.jsx)(f,{isMenuOpen:i,setIsMenuOpened:r})]})})),v=(c(25),Object(n.memo)((function(){return Object(d.jsxs)("button",{type:"button",className:"footer__btn",onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:[Object(d.jsx)("span",{className:"footer__back-to-top",children:"Back to top"}),Object(d.jsx)("div",{className:"footer__arrow-up"})]})}))),N=Object(n.memo)((function(e){var t=e.to,c=e.text;return Object(d.jsx)("a",{href:t,className:"footer__nav-link",children:c})})),k=Object(n.memo)((function(){return Object(d.jsxs)("div",{className:"footer__nav",children:[Object(d.jsx)(N,{to:"https://github.com/fe-oct22-senior-html-developers/product_catalog",text:"github"}),Object(d.jsx)(N,{to:"#",text:"contacts"}),Object(d.jsx)(N,{to:"#",text:"rights"})]})})),C=Object(n.memo)((function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"footer__content container",children:[Object(d.jsx)(p,{}),Object(d.jsx)(k,{}),Object(d.jsx)(v,{})]})})})),y=(c(50),c(51),Object(n.memo)((function(e){var t=e.mixClass,c=e.children;return Object(d.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),I=(c(52),c(53),function(e){var t=e.total,c=void 0===t?0:t,a=e.itemsNum,s=void 0===a?0:a,i=Object(n.useContext)(_).updateCart;return Object(d.jsxs)("div",{className:" cart-total grid__item--tablet_1-12 grid__item--desktop_17-24",children:[Object(d.jsx)("div",{className:"cart-total__price",children:"$".concat(c)}),Object(d.jsx)("div",{className:"cart-total__items",children:"Total for ".concat(s," items")}),Object(d.jsx)("button",{type:"button",className:"cart-total__btn","aria-label":"Checkout button",onClick:function(){window.confirm("Checkout is not implemented yet. Do you want to clear the Cart?")&&i([])},children:"Checkout"})]})}),w=function(e){var t=e.children;return Object(d.jsx)("ul",{className:" cart__list grid__item--tablet_1-12 grid__item--desktop_1-16",children:t})},S=c(13),M=(c(54),function(e){var t=e.cartItem,c=t.quantity,a=t.product,s=a.id,i=a.name,o=a.price,j=a.image,u=Object(n.useContext)(_),b=u.cart,m=u.updateCart,O=Object(n.useState)(!1),h=Object(l.a)(O,2),p=h[0],x=h[1],f=Object(n.useState)(!1),g=Object(l.a)(f,2),v=g[0],N=g[1];Object(n.useEffect)((function(){1===c&&x(!0),c>1&&x(!1)}),[c]),Object(n.useEffect)((function(){10===c&&N(!0),c<10&&N(!1)}),[c]);return Object(d.jsxs)("article",{className:"cart-item",children:[Object(d.jsxs)("div",{className:"cart-item__container",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__close-button","aria-label":"click to remove ".concat(i," from cart"),onClick:function(){return function(){var e=b.filter((function(e){return e.product.id!==s}));m(e)}()}}),Object(d.jsx)("img",{src:j,alt:i,className:"cart-item__img"}),Object(d.jsx)(r.b,{to:"/product/:productId",className:"cart-item__title",children:"".concat(i)})]}),Object(d.jsxs)("div",{className:"cart-item__container cart-item__container__bottom ",children:[Object(d.jsxs)("div",{className:"cart-item__counter",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__counter-button-minus","aria-label":"decrease quantity by 1",onClick:function(){return function(){var e=b.map((function(e){return e.product.id===s?Object(S.a)(Object(S.a)({},e),{},{quantity:e.quantity-1}):e}));m(e)}()},disabled:p}),Object(d.jsx)("p",{className:"cart-item__counter-number",children:c}),Object(d.jsx)("button",{type:"button",className:"cart-item__counter-button-plus","aria-label":"increase quantity by 1",onClick:function(){return function(){var e=b.map((function(e){return e.product.id===s?Object(S.a)(Object(S.a)({},e),{},{quantity:e.quantity+1}):e}));m(e)}()},disabled:v})]}),Object(d.jsx)("p",{className:"cart-item__price",children:"$".concat(c*o)})]})]})}),T=function(){var e=Object(n.useContext)(_).cart,t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0),c=e.reduce((function(e,t){return e+t.quantity}),0);return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("section",{className:"cart page__cart container grid",children:[Object(d.jsx)(w,{children:e.map((function(e){return Object(d.jsx)("li",{className:"cart__list-item",children:Object(d.jsx)(M,{cartItem:e})},e.product.itemId)}))}),Object(d.jsx)(I,{total:t,itemsNum:c})]}):Object(d.jsx)("section",{className:"cart page__cart cart__empty container",children:Object(d.jsx)("p",{children:"Your cart is empty"})})})},L=(c(55),c(56),Object(n.memo)((function(e){var t=e.isAlone,c=Object(o.m)();return Object(d.jsxs)("button",{type:"button","aria-label":"click to go back",className:u()("back-button",{"page__alone-back-button":t,"page__back-button":!t}),onClick:function(){return c(-1)},children:[Object(d.jsx)("div",{className:"back-button__icon"}),"Back"]})}))),A=function(e){var t=e.pageTitle;return Object(d.jsxs)("div",{className:"cart-page",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(L,{isAlone:!0}),Object(d.jsx)(y,{mixClass:"cart-page__title",children:t})]}),Object(d.jsx)(T,{})]})},P=(c(57),c(58),Object(n.memo)((function(){var e=Object(o.k)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){var c=e[0].toUpperCase()+e.slice(1);return t+="/".concat(e),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"breadcrumbs__icon breadcrumbs__icon--arrow"}),Object(d.jsx)(r.b,{"aria-label":"click to go to the ".concat(e," page"),className:"breadcrumbs__link",to:t,children:c})]},e)}));return Object(d.jsxs)("div",{className:"breadcrumbs page__breadcrumbs",children:[Object(d.jsx)(r.b,{"aria-label":"click to go to the home page",title:"Home page",to:"/",className:"breadcrumbs__link",children:Object(d.jsx)("div",{className:"breadcrumbs__icon--home breadcrumbs__icon"})}),Object(d.jsx)(d.Fragment,{children:c})]})}))),F=c(10),B=(c(59),function(e){var t=e.phone,c=e.mixClass,a=t.image,s=t.name,i=t.price,r=t.fullPrice,o=t.screen,j=t.capacity,u=t.ram,b=Object(n.useContext)(_),m=b.cart,O=b.updateCart,h=b.favourites,p=b.updateFavourites,x=Object(n.useState)(!1),f=Object(l.a)(x,2),g=f[0],v=f[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),C=k[0],y=k[1],I=Object(F.a)(m),w=Object(F.a)(h),S=m.some((function(e){return e.product.itemId===t.itemId})),M=h.find((function(e){return e.itemId===t.itemId}));Object(n.useEffect)((function(){S&&v(!0),M&&y(!0)}),[g,C]);return Object(d.jsxs)("article",{className:"card ".concat(c),children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"card__img",src:a,alt:s}),Object(d.jsx)("h4",{className:"card__title",children:s})]}),Object(d.jsxs)("div",{className:"card__prices",children:[Object(d.jsx)("span",{className:"card__prices--price",children:"$".concat(i)}),Object(d.jsx)("span",{className:"card__prices--old-price",children:"$".concat(r)})]}),Object(d.jsxs)("div",{className:"card__specifications",children:[Object(d.jsxs)("div",{className:"card__specifications--feature",children:[Object(d.jsx)("span",{children:"Screen"}),Object(d.jsx)("span",{children:"Capacity"}),Object(d.jsx)("span",{children:"RAM"})]}),Object(d.jsxs)("div",{className:"card__specifications--feature",children:[Object(d.jsx)("span",{children:o}),Object(d.jsx)("span",{children:j}),Object(d.jsx)("span",{children:u})]})]}),Object(d.jsxs)("div",{className:"card__footer",children:[g?Object(d.jsx)("button",{type:"button",className:"card__button card__button--active",onClick:function(){var e=I.filter((function(e){return e.product.itemId!==t.itemId}));O(e),v(!1)},children:"Added to cart"}):Object(d.jsx)("button",{type:"button",className:"card__button",onClick:function(){var e;I.push({id:(e=I,e.length>0?Math.max.apply(Math,Object(F.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),O(I),v(!0)},children:"Add to cart"}),C?Object(d.jsx)("button",{type:"button",onClick:function(){return function(){var e=w.filter((function(e){return e.itemId!==t.itemId}));p(e),y(!1)}()},className:"card__fav-button",children:Object(d.jsx)("div",{className:"card__fav-icon card__fav-icon--active"})}):Object(d.jsx)("button",{type:"button",onClick:function(){return w.push(t),p(w),void y(!0)},className:"card__fav-button",children:Object(d.jsx)("div",{className:"card__fav-icon card__fav-icon--pasive"})})]})]})}),E=function(e){var t=e.favouritesItem;return Object(d.jsx)(B,{phone:t,mixClass:""})},q=function(e){var t=e.children;return Object(d.jsx)("ul",{className:"favourites__list",children:t})},G=(c(60),function(){var e=Object(n.useContext)(_),t=e.favourites,c=e.favouritesLength;return Object(d.jsxs)("section",{className:"favourites",children:[Object(d.jsx)("div",{className:"favourites__amount",children:"".concat(c," items")}),Object(d.jsx)(q,{children:t.map((function(e){return Object(d.jsx)("li",{className:"favourites__list-item",children:Object(d.jsx)(E,{favouritesItem:e})},e.itemId)}))})]})}),D=function(e){var t=e.pageTitle;return Object(d.jsx)("div",{className:"favourites-page",children:Object(d.jsxs)("div",{className:"container page__favourites",children:[Object(d.jsx)(P,{}),Object(d.jsx)(y,{mixClass:"favourites-page__title",children:t}),Object(d.jsx)(G,{})]})})},J=(c(61),c(62),c(63),function(e){var t=e.children;return Object(d.jsx)("h3",{className:"section-title",children:t})}),H=(c(64),function(e){var t=e.link,c=e.gridClasses,n=e.image,a=e.title,s=e.amount;return Object(d.jsx)("article",{className:"category-card ".concat(c),children:Object(d.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(d.jsx)("img",{className:"category-card__image",src:n,alt:"banner of ".concat(a," category")}),Object(d.jsx)("h4",{className:"category-card__title",children:a}),Object(d.jsx)("p",{className:"category-card__models-amount",children:"".concat(s," models")})]})})}),$=c.p+"static/media/category__phones.5745f0cd.jpg",R=c.p+"static/media/category__tablets.05b3d251.jpg",U=c.p+"static/media/category__accessories.3b9d45fd.jpg",W=c(94),Y=function(e){return W.a.get("".concat("https://guarded-waters-77447.herokuapp.com").concat(e))},z=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Y("/phones/amount").then((function(e){return e.data})).then(a)}),[]),Object(d.jsxs)("section",{className:"shop-by-category container",children:[Object(d.jsx)(J,{children:"Shop by category"}),Object(d.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(d.jsx)(H,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:$,title:"Mobile phones",amount:+c}),Object(d.jsx)(H,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:R,title:"Tablets",amount:24}),Object(d.jsx)(H,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:U,title:"Accessories",amount:100})]})]})},K=(c(69),function(){return Object(d.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),Q=c(33),V=c.n(Q),X=(c(85),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(d.jsx)(V.a,Object(S.a)(Object(S.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),Z=(c(86),c.p+"static/media/banner.330ccefb.jpeg"),ee=function(){return Object(d.jsx)("section",{className:"banner grid",children:Object(d.jsxs)(X,{children:[Object(d.jsx)("img",{className:"banner__image",src:Z,alt:"BannerImg"}),Object(d.jsx)("img",{className:"banner__image",src:Z,alt:"BannerImg"}),Object(d.jsx)("img",{className:"banner__image",src:Z,alt:"BannerImg"})]})})};c(87);var te=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(n.useState)(t(e)),a=Object(l.a)(c,2),s=a[0],i=a[1];function r(){i(t(e))}return Object(n.useEffect)((function(){var t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),function(){t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}}),[e]),s};function ce(e){var t=e.onClick,c=e.isDisabled,n=u()("arrow arrow-left",{disabled:c});return Object(d.jsx)("div",{onClick:c?void 0:t,className:n})}function ne(e){var t=e.onClick,c=e.isDisabled,n=u()("arrow arrow-right",{disabled:c});return Object(d.jsx)("div",{onClick:c?void 0:t,className:n})}var ae=function(e){var t=e.children,c=Object(n.useState)(0),s=Object(l.a)(c,2),i=s[0],r=s[1],o=a.a.Children.count(t),j=te("(max-width: 1024px)"),u=te("(max-width: 740px)"),b=0;b=te("(max-width: 480px)")?1.5:u?2:j?2.5:4;var m={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(d.jsx)(ne,{isDisabled:i===o-b,onClick:function(){return r(i+1)}}),prevArrow:Object(d.jsx)(ce,{isDisabled:0===i,onClick:function(){return r(i-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){r(t)}};return Object(d.jsx)(V.a,Object(S.a)(Object(S.a)({},m),{},{className:"smartphone-slider",children:t}))};ce.defaultProps={onClick:function(){}},ne.defaultProps={onClick:function(){}};c(88);var se=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Y("/phones/new").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(d.jsxs)("section",{className:"brand-new-models container",children:[Object(d.jsx)(J,{children:"Brand new models"}),Object(d.jsx)(ae,{children:c.map((function(e){return Object(d.jsx)(B,{mixClass:"card--slider",phone:e},e.id)}))})]})},ie=(c(89),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Y("/phones/discount").then((function(e){return e.data})).then(a).catch((function(e){return window.console.log(e)}))}),[]),Object(d.jsxs)("section",{className:"hot-prices container",children:[Object(d.jsx)(J,{children:"Hot prices"}),Object(d.jsx)(ae,{children:c.map((function(e){return Object(d.jsx)(B,{mixClass:"card--slider",phone:e},e.id)}))})]})}),re=function(e){var t=e.pageTitle;return Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)(K,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(y,{mixClass:"home-page__title",children:t})}),Object(d.jsx)(ee,{}),Object(d.jsx)(se,{}),Object(d.jsx)(z,{}),Object(d.jsx)(ie,{})]})},oe=(c(90),c.p+"static/media/404.748a45b2.svg"),le=function(){return Object(d.jsx)("div",{className:"container not-found-page",children:Object(d.jsxs)("section",{className:"not-found-page__content",children:[Object(d.jsxs)("div",{className:"not-found-page__text",children:[Object(d.jsx)("h1",{className:"not-found-page__title",children:"Sorry, this page could not be found"}),Object(d.jsxs)("p",{className:"not-found-page__description",children:["The link is broken or the page no longer exists. ",Object(d.jsx)("br",{className:"not-found-page__break"}),"Go to the ",Object(d.jsx)(r.b,{className:"not-found-page__link",to:"/",children:"homepage"}),"."]})]}),Object(d.jsx)("img",{src:oe,alt:"404 error",className:"not-found-page__image"})]})})},je=function(){var e=Object(o.o)().productId;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(P,{}),Object(d.jsx)(L,{}),Object(d.jsx)("div",{children:"Section title component ".concat(e)})]})},ue=(c(91),function(e){var t=e.pageTitle;return Object(d.jsxs)("div",{className:"product-page",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(P,{}),Object(d.jsx)(y,{mixClass:"product-page__title",children:t})]}),Object(d.jsx)("div",{children:"Data amount"}),Object(d.jsx)("div",{children:"Sorting"}),Object(d.jsx)("div",{children:"Datalist"}),Object(d.jsx)("div",{children:"Pagination"}),Object(d.jsx)(B,{phone:{id:"1",category:"phones",phoneId:"apple-iphone-7-32gb-black",itemId:"apple-iphone-7-32gb-black",name:"Apple iPhone 7 32GB Black",fullPrice:400,price:375,screen:"4.7' IPS",capacity:"32GB",color:"black",ram:"2GB",year:2016,image:"img/phones/apple-iphone-7/black/00.jpg"},mixClass:""})]})}),de=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)("main",{className:"page__main",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(re,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(d.jsx)(o.a,{path:"phones",element:Object(d.jsx)(ue,{pageTitle:"Mobile Phones"})}),Object(d.jsx)(o.a,{path:"tablets",element:Object(d.jsx)(ue,{pageTitle:"Tablets"})}),Object(d.jsx)(o.a,{path:"accessories",element:Object(d.jsx)(ue,{pageTitle:"Accessories"})}),Object(d.jsx)(o.a,{path:"/cart",element:Object(d.jsx)(A,{pageTitle:"Cart"})}),Object(d.jsx)(o.a,{path:"/favourites",element:Object(d.jsx)(D,{pageTitle:"Favourites"})}),Object(d.jsx)(o.a,{path:"product/:productId",element:Object(d.jsx)(je,{})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(le,{})})]})}),Object(d.jsx)(C,{})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(de,{})})})}),document.getElementById("root"))}]),[[92,1,2]]]);
//# sourceMappingURL=main.9c52fc67.chunk.js.map