(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],Array(25).concat([function(e,t,c){},,,,,,,,,,,function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(38),i=c.n(a),r=(c(43),c(7)),o=c(4),l=(c(44),c(5)),j=c(9),u=c.n(j),d=(c(45),c(36),c(0)),b=function(e){var t=e.to,c=e.title,n=e.setIsMenuOpened;return Object(d.jsx)("li",{className:"nav__item nav__item--active",children:Object(d.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return u()("nav__link",{"nav__link--active":t})},onClick:function(){return n(!1)},children:c})})},m=s.a.memo((function(e){var t=e.setIsMenuOpened;return Object(d.jsx)("nav",{className:"nav",children:Object(d.jsxs)("ul",{className:"nav__list",children:[Object(d.jsx)(b,{setIsMenuOpened:t,title:"home",to:"/"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Phones",to:"phones"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Tablets",to:"tablets"}),Object(d.jsx)(b,{setIsMenuOpened:t,title:"Accessories",to:"accessories"})]})})})),O=(c(47),s.a.memo((function(e){var t=e.iconName,c=e.to,n=e.setIsMenuOpened,s=e.counter;return Object(d.jsx)("div",{className:"icon-block",children:Object(d.jsx)(r.c,{title:t,"aria-label":t,to:c,className:function(e){var t=e.isActive;return u()("icon-block__link",{"icon-block__link--active":t})},onClick:function(){return n(!1)},children:Object(d.jsx)("div",{className:"icon-block__icon icon-block__icon--".concat(t),children:s>0&&Object(d.jsx)("div",{className:"icon-block__counter",children:Object(d.jsx)("div",{className:"icon-block__number",children:s})})})})})}))),_=(c(48),c.p+"static/media/Logo.3c6bd188.svg"),h=Object(n.memo)((function(e){var t=e.setIsMenuOpened;return t?Object(d.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",onClick:function(){return t(!1)},children:Object(d.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})}):Object(d.jsx)(r.b,{title:"Nice Gadgets - Home Page",className:"logo",to:"/",children:Object(d.jsx)("img",{src:_,className:"logo__image",alt:"NiceGadgets logo"})})})),x=(c(49),s.a.createContext({cart:[],setCart:function(){},updateCart:function(){},cartLength:0,favourites:[],setFavourites:function(){},updateFavourites:function(){},favouritesLength:0})),p=function(e){var t=e.children,c=Object(n.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),s=Object(l.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("favourites")||"[]")),o=Object(l.a)(r,2),j=o[0],u=o[1],b=Object(n.useCallback)((function(e){i(e),localStorage.setItem("cart",JSON.stringify(e))}),[]),m=Object(n.useCallback)((function(e){u(e),localStorage.setItem("favourites",JSON.stringify(e))}),[]),O=a.length,_=j.length,h=Object(n.useMemo)((function(){return{cart:a,setCart:i,updateCart:b,cartLength:O,favourites:j,setFavourites:u,updateFavourites:m,favouritesLength:_}}),[a,j]);return Object(d.jsx)(x.Provider,{value:h,children:t})},f=Object(n.memo)((function(e){var t=e.isMenuOpen,c=e.setIsMenuOpened,s=Object(n.useContext)(x),a=s.cartLength,i=s.favouritesLength;return Object(d.jsxs)("div",{className:u()("burger-menu",{"burger-menu--active":t}),children:[Object(d.jsx)(m,{setIsMenuOpened:c}),Object(d.jsxs)("div",{className:"burger-menu__icons",children:[Object(d.jsx)(O,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:c,counter:i}),Object(d.jsx)(O,{iconName:"Cart",to:"/cart",setIsMenuOpened:c,counter:a})]})]})})),g=s.a.memo((function(){var e=Object(n.useContext)(x),t=e.cartLength,c=e.favouritesLength,s=Object(n.useState)(!1),a=Object(l.a)(s,2),i=a[0],r=a[1],o=Object(n.useCallback)((function(e){e.preventDefault(),r((function(e){return!e}))}),[]);return Object(n.useEffect)((function(){return i?document.body.classList.add("page--with-menu"):document.body.classList.remove("page--with-menu")}),[i]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsxs)("div",{className:"header__links",children:[Object(d.jsx)("div",{className:"header__logo",children:Object(d.jsx)(h,{setIsMenuOpened:r})}),Object(d.jsx)("div",{className:"header__nav",children:Object(d.jsx)(m,{setIsMenuOpened:r})})]}),Object(d.jsx)("div",{className:"header__menu",children:Object(d.jsx)("button",{title:"Menu","aria-label":"menu button",type:"button",className:"header__menu-opener",onClick:function(e){return o(e)},children:Object(d.jsx)("div",{className:u()("header__menu-icon",{"header__menu-icon--opened":i,"header__menu-icon--closed":!i})})})}),Object(d.jsxs)("div",{className:"header__icons",children:[Object(d.jsx)(O,{iconName:"Favourites",to:"/favourites",setIsMenuOpened:r,counter:c}),Object(d.jsx)(O,{iconName:"Cart",to:"/cart",setIsMenuOpened:r,counter:t})]})]}),Object(d.jsx)(f,{isMenuOpen:i,setIsMenuOpened:r})]})})),v=(c(25),Object(n.memo)((function(){return Object(d.jsxs)("button",{type:"button",className:"footer__btn",onClick:function(){setTimeout((function(){return window.scrollTo({top:0,behavior:"smooth"})}),200)},children:[Object(d.jsx)("span",{className:"footer__back-to-top",children:"Back to top"}),Object(d.jsx)("div",{className:"footer__arrow-up"})]})}))),N=Object(n.memo)((function(e){var t=e.to,c=e.text;return Object(d.jsx)("a",{href:t,className:"footer__nav-link",children:c})})),k=Object(n.memo)((function(){return Object(d.jsxs)("div",{className:"footer__nav",children:[Object(d.jsx)(N,{to:"https://github.com/fe-oct22-senior-html-developers/product_catalog",text:"github"}),Object(d.jsx)(N,{to:"#",text:"contacts"}),Object(d.jsx)(N,{to:"#",text:"rights"})]})})),y=Object(n.memo)((function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("div",{className:"footer__content container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(k,{}),Object(d.jsx)(v,{})]})})})),C=(c(50),c(51),Object(n.memo)((function(e){var t=e.mixClass,c=e.children;return Object(d.jsx)("h2",{className:"page-title ".concat(t),children:c})}))),S=(c(52),c(53),s.a.memo((function(){return Object(d.jsx)("div",{className:"modal",children:Object(d.jsxs)("div",{className:"modal__content",children:[Object(d.jsx)("div",{className:"modal__header"}),Object(d.jsx)("p",{className:"modal__text",children:"Thank you for purchase!"})]})})}))),w=(c(54),function(e){var t=e.total,c=void 0===t?0:t,s=e.itemsNum,a=void 0===s?0:s,i=Object(n.useContext)(x).updateCart,r=Object(n.useState)(!1),j=Object(l.a)(r,2),u=j[0],b=j[1],m=Object(o.m)();return Object(d.jsxs)("div",{className:" cart-total grid__item--tablet_1-12 grid__item--desktop_17-24",children:[Object(d.jsx)("div",{className:"cart-total__price",children:"$".concat(c)}),Object(d.jsx)("div",{className:"cart-total__items",children:"Total for ".concat(a," items")}),Object(d.jsx)("button",{type:"button",className:"cart-total__btn","aria-label":"Checkout button",onClick:function(){return b(!0),void setTimeout((function(){b(!1),i([]),m("/")}),2e3)},children:"Checkout"}),u&&Object(d.jsx)(S,{})]})}),I=function(e){var t=e.children;return Object(d.jsx)("ul",{className:" cart__list grid__item--tablet_1-12 grid__item--desktop_1-16",children:t})},T=c(13),M=(c(55),function(e){var t=e.cartItem,c=t.quantity,s=t.product,a=s.id,i=s.name,o=s.price,j=s.image,u=s.phoneId,b=Object(n.useContext)(x),m=b.cart,O=b.updateCart,_=Object(n.useState)(!1),h=Object(l.a)(_,2),p=h[0],f=h[1],g=Object(n.useState)(!1),v=Object(l.a)(g,2),N=v[0],k=v[1];Object(n.useEffect)((function(){1===c&&f(!0),c>1&&f(!1)}),[c]),Object(n.useEffect)((function(){10===c&&k(!0),c<10&&k(!1)}),[c]);return Object(d.jsxs)("article",{className:"cart-item",children:[Object(d.jsxs)("div",{className:"cart-item__container",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__close-button","aria-label":"click to remove ".concat(i," from cart"),onClick:function(){return function(){var e=m.filter((function(e){return e.product.id!==a}));O(e)}()}}),Object(d.jsx)("img",{src:j,alt:i,className:"cart-item__img"}),Object(d.jsx)(r.b,{to:"/product/".concat(u),className:"cart-item__title",children:"".concat(i)})]}),Object(d.jsxs)("div",{className:"cart-item__container cart-item__container__bottom ",children:[Object(d.jsxs)("div",{className:"cart-item__counter",children:[Object(d.jsx)("button",{type:"button",className:"cart-item__counter-button-minus","aria-label":"decrease quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===a?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity-1}):e}));O(e)}()},disabled:p}),Object(d.jsx)("p",{className:"cart-item__counter-number",children:c}),Object(d.jsx)("button",{type:"button",className:"cart-item__counter-button-plus","aria-label":"increase quantity by 1",onClick:function(){return function(){var e=m.map((function(e){return e.product.id===a?Object(T.a)(Object(T.a)({},e),{},{quantity:e.quantity+1}):e}));O(e)}()},disabled:N})]}),Object(d.jsx)("p",{className:"cart-item__price",children:"$".concat(c*o)})]})]})}),L=(c(56),Object(n.memo)((function(e){var t=e.mixClass,c=e.image,n=e.btnText;return Object(d.jsxs)("section",{className:"container empty-message ".concat(t),children:[Object(d.jsxs)("div",{className:"empty-message__inner",children:[Object(d.jsx)("img",{src:c,alt:"EmptySpace",className:"empty-message__img"}),Object(d.jsx)("p",{className:"text",children:"Oopps... It is empty in here."})]}),Object(d.jsx)(r.b,{to:"/phones",className:"empty-message__btn",children:n})]})}))),A=c.p+"static/media/emptyCart.1a79597b.jpg",F=function(){var e=Object(n.useContext)(x).cart,t=e.reduce((function(e,t){return e+t.quantity*t.product.price}),0),c=e.reduce((function(e,t){return e+t.quantity}),0);return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("section",{className:"cart page__cart container grid",children:[Object(d.jsx)(I,{children:e.map((function(e){return Object(d.jsx)("li",{className:"cart__list-item",children:Object(d.jsx)(M,{cartItem:e})},e.product.itemId)}))}),Object(d.jsx)(w,{total:t,itemsNum:c})]}):Object(d.jsx)(L,{image:A,btnText:"Buy"})})},E=(c(57),c(58),Object(n.memo)((function(e){var t=e.isAlone,c=Object(o.m)();return Object(d.jsxs)("button",{type:"button","aria-label":"click to go back",className:u()("back-button",{"page__alone-back-button":t,"page__back-button":!t}),onClick:function(){return c(-1)},children:[Object(d.jsx)("div",{className:"back-button__icon"}),"Back"]})}))),P=function(e){var t=e.pageTitle;return Object(d.jsxs)("div",{className:"cart-page",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(E,{isAlone:!0}),Object(d.jsx)(C,{mixClass:"cart-page__title",children:t})]}),Object(d.jsx)(F,{})]})},q=(c(59),c(60),Object(n.memo)((function(){var e=Object(o.k)(),t="",c=e.pathname.split("/").filter((function(e){return""!==e})).map((function(e){var c=e[0].toUpperCase()+e.slice(1);return t+="/".concat(e),Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)("div",{className:"breadcrumbs__icon breadcrumbs__icon--arrow"}),Object(d.jsx)(r.b,{"aria-label":"click to go to the ".concat(e," page"),className:"breadcrumbs__link",to:t,children:c})]},e)}));return Object(d.jsxs)("div",{className:"breadcrumbs page__breadcrumbs",children:[Object(d.jsx)(r.b,{"aria-label":"click to go to the home page",title:"Home page",to:"/",className:"breadcrumbs__link",children:Object(d.jsx)("div",{className:"breadcrumbs__icon--home breadcrumbs__icon"})}),Object(d.jsx)(d.Fragment,{children:c})]})}))),B=c(10),J=(c(61),function(e){var t=e.phone,c=e.mixClass,s=t.image,a=t.name,i=t.price,r=t.fullPrice,o=t.screen,j=t.capacity,u=t.ram,b=Object(n.useContext)(x),m=b.cart,O=b.updateCart,_=b.favourites,h=b.updateFavourites,p=Object(n.useState)(!1),f=Object(l.a)(p,2),g=f[0],v=f[1],N=Object(n.useState)(!1),k=Object(l.a)(N,2),y=k[0],C=k[1],S=Object(B.a)(m),w=Object(B.a)(_),I=m.some((function(e){return e.product.itemId===t.itemId})),T=_.find((function(e){return e.itemId===t.itemId}));Object(n.useEffect)((function(){I&&v(!0),T&&C(!0)}),[g,y]);return Object(d.jsxs)("article",{className:"card ".concat(c),children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"card__img",src:s,alt:a}),Object(d.jsx)("h4",{className:"card__title",children:a})]}),Object(d.jsxs)("div",{className:"card__prices",children:[Object(d.jsx)("span",{className:"card__prices--price",children:"$".concat(i)}),Object(d.jsx)("span",{className:"card__prices--old-price",children:"$".concat(r)})]}),Object(d.jsxs)("div",{className:"card__specifications",children:[Object(d.jsxs)("div",{className:"card__specifications--feature",children:[Object(d.jsx)("span",{children:"Screen"}),Object(d.jsx)("span",{children:"Capacity"}),Object(d.jsx)("span",{children:"RAM"})]}),Object(d.jsxs)("div",{className:"card__specifications--feature",children:[Object(d.jsx)("span",{children:o}),Object(d.jsx)("span",{children:j}),Object(d.jsx)("span",{children:u})]})]}),Object(d.jsxs)("div",{className:"card__footer",children:[g?Object(d.jsx)("button",{type:"button",className:"card__button card__button--active",onClick:function(){var e=S.filter((function(e){return e.product.itemId!==t.itemId}));O(e),v(!1)},children:"Added to cart"}):Object(d.jsx)("button",{type:"button",className:"card__button",onClick:function(){var e;S.push({id:(e=S,e.length>0?Math.max.apply(Math,Object(B.a)(e.map((function(e){return e.id}))))+1:0),quantity:1,product:t}),O(S),v(!0)},children:"Add to cart"}),y?Object(d.jsx)("button",{type:"button",onClick:function(){return function(){var e=w.filter((function(e){return e.itemId!==t.itemId}));h(e),C(!1)}()},className:"card__fav-button",children:Object(d.jsx)("div",{className:"card__fav-icon card__fav-icon--active"})}):Object(d.jsx)("button",{type:"button",onClick:function(){return w.push(t),h(w),void C(!0)},className:"card__fav-button",children:Object(d.jsx)("div",{className:"card__fav-icon card__fav-icon--pasive"})})]})]})}),G=function(e){var t=e.favouritesItem;return Object(d.jsx)(J,{phone:t,mixClass:""})},D=function(e){var t=e.children;return Object(d.jsx)("ul",{className:"favourites__list",children:t})},H=(c(62),c.p+"static/media/empty-box.158a7fdc.png"),$=function(){var e=Object(n.useContext)(x),t=e.favourites,c=e.favouritesLength;return Object(d.jsx)(d.Fragment,{children:0!==c?Object(d.jsxs)("section",{className:"favourites",children:[Object(d.jsx)("div",{className:"favourites__amount",children:"".concat(c," items")}),Object(d.jsx)(D,{children:t.map((function(e){return Object(d.jsx)("li",{className:"favourites__list-item",children:Object(d.jsx)(G,{favouritesItem:e})},e.itemId)}))})]}):Object(d.jsx)(L,{mixClass:"favourites__empty-message",image:H,btnText:"Add"})})},Z=function(e){var t=e.pageTitle;return Object(d.jsx)("div",{className:"favourites-page",children:Object(d.jsxs)("div",{className:"container page__favourites",children:[Object(d.jsx)(q,{}),Object(d.jsx)(C,{mixClass:"favourites-page__title",children:t}),Object(d.jsx)($,{})]})})},R=(c(63),c(64),c(65),function(e){var t=e.children;return Object(d.jsx)("h3",{className:"section-title",children:t})}),U=(c(66),function(e){var t=e.link,c=e.gridClasses,n=e.image,s=e.title,a=e.amount;return Object(d.jsx)("article",{className:"category-card ".concat(c),children:Object(d.jsxs)(r.b,{to:t,className:"category-card__link",children:[Object(d.jsx)("img",{className:"category-card__image",src:n,alt:"banner of ".concat(s," category")}),Object(d.jsx)("h4",{className:"category-card__title",children:s}),Object(d.jsx)("p",{className:"category-card__models-amount",children:"".concat(a," models")})]})})}),W=c.p+"static/media/category__phones.5745f0cd.jpg",z=c.p+"static/media/category__tablets.05b3d251.jpg",K=c.p+"static/media/category__accessories.3b9d45fd.jpg",Q=c(97),V=function(e){return Q.a.get("".concat("https://guarded-waters-77447.herokuapp.com").concat(e))},X=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){V("/phones/amount").then((function(e){return e.data})).then(s)}),[]),Object(d.jsxs)("section",{className:"shop-by-category container",children:[Object(d.jsx)(R,{children:"Shop by category"}),Object(d.jsxs)("div",{className:"shop-by-category__categories grid",children:[Object(d.jsx)(U,{link:"/phones",gridClasses:"grid__item--tablet_1-4 grid__item--desktop_1-8",image:W,title:"Mobile phones",amount:+c}),Object(d.jsx)(U,{link:"/tablets",gridClasses:"grid__item--tablet_5-8 grid__item--desktop_9-16",image:z,title:"Tablets",amount:24}),Object(d.jsx)(U,{link:"/accessories",gridClasses:"grid__item--tablet_9-12 grid__item--desktop_17-24",image:K,title:"Accessories",amount:100})]})]})},Y=(c(71),function(){return Object(d.jsx)("h1",{className:"website-title",children:"Product Catalog"})}),ee=c(33),te=c.n(ee),ce=(c(87),function(e){var t=e.children,c={dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,autoplay:!0,draggable:!0,autoplaySpeed:3e3,customPaging:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{style:{visibility:"hidden"},children:"\u2022"})})},responsive:[{breakpoint:640,settings:{arrows:!1,slidesToShow:1,slidesToScroll:1,initialSlide:1}}]};return Object(d.jsx)(te.a,Object(T.a)(Object(T.a)({},c),{},{className:"grid__item grid__item--tablet_2-11 grid__item--desktop_2-23",children:t}))}),ne=(c(88),c.p+"static/media/banner.330ccefb.jpeg"),se=function(){return Object(d.jsx)("section",{className:"banner grid",children:Object(d.jsxs)(ce,{children:[Object(d.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"}),Object(d.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"}),Object(d.jsx)("img",{className:"banner__image",src:ne,alt:"BannerImg"})]})})};c(89);var ae=function(e){var t=function(e){return"undefined"!==typeof window&&window.matchMedia(e).matches},c=Object(n.useState)(t(e)),s=Object(l.a)(c,2),a=s[0],i=s[1];function r(){i(t(e))}return Object(n.useEffect)((function(){var t=window.matchMedia(e);return r(),t.addListener?t.addListener(r):t.addEventListener("change",r),function(){t.removeListener?t.removeListener(r):t.removeEventListener("change",r)}}),[e]),a};function ie(e){var t=e.onClick,c=e.isDisabled,n=u()("arrow arrow-left",{disabled:c});return Object(d.jsx)("div",{onClick:c?void 0:t,className:n})}function re(e){var t=e.onClick,c=e.isDisabled,n=u()("arrow arrow-right",{disabled:c});return Object(d.jsx)("div",{onClick:c?void 0:t,className:n})}var oe=function(e){var t=e.children,c=Object(n.useState)(0),a=Object(l.a)(c,2),i=a[0],r=a[1],o=s.a.Children.count(t),j=ae("(max-width: 1024px)"),u=ae("(max-width: 740px)"),b=0;b=ae("(max-width: 480px)")?1.5:u?2:j?2.5:4;var m={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,nextArrow:Object(d.jsx)(re,{isDisabled:i===o-b,onClick:function(){return r(i+1)}}),prevArrow:Object(d.jsx)(ie,{isDisabled:0===i,onClick:function(){return r(i-1)}}),responsive:[{breakpoint:1024,settings:{slidesToShow:2.5,slidesToScroll:1}},{breakpoint:740,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1.5,slidesToScroll:1}}],beforeChange:function(e,t){r(t)}};return Object(d.jsx)(te.a,Object(T.a)(Object(T.a)({},m),{},{className:"smartphone-slider",children:t}))};ie.defaultProps={onClick:function(){}},re.defaultProps={onClick:function(){}};c(90);var le=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){V("/phones/new").then((function(e){return e.data})).then(s).catch((function(e){return window.console.log(e)}))}),[]),Object(d.jsxs)("section",{className:"brand-new-models container",children:[Object(d.jsx)(R,{children:"Brand new models"}),Object(d.jsx)(oe,{children:c.map((function(e){return Object(d.jsx)(J,{mixClass:"card--slider",phone:e},e.id)}))})]})},je=(c(91),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){V("/phones/discount").then((function(e){return e.data})).then(s).catch((function(e){return window.console.log(e)}))}),[]),Object(d.jsxs)("section",{className:"hot-prices container",children:[Object(d.jsx)(R,{children:"Hot prices"}),Object(d.jsx)(oe,{children:c.map((function(e){return Object(d.jsx)(J,{mixClass:"card--slider",phone:e},e.id)}))})]})}),ue=function(e){var t=e.pageTitle;return Object(d.jsxs)("div",{className:"home-page",children:[Object(d.jsx)(Y,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(C,{mixClass:"home-page__title",children:t})}),Object(d.jsx)(se,{}),Object(d.jsx)(le,{}),Object(d.jsx)(X,{}),Object(d.jsx)(je,{})]})},de=(c(92),c.p+"static/media/404.748a45b2.svg"),be=function(){return Object(d.jsx)("div",{className:"container not-found-page",children:Object(d.jsxs)("section",{className:"not-found-page__content",children:[Object(d.jsxs)("div",{className:"not-found-page__text",children:[Object(d.jsx)("h1",{className:"not-found-page__title",children:"Sorry, this page could not be found"}),Object(d.jsxs)("p",{className:"not-found-page__description",children:["The link is broken or the page no longer exists. ",Object(d.jsx)("br",{className:"not-found-page__break"}),"Go to the ",Object(d.jsx)(r.b,{className:"not-found-page__link",to:"/",children:"homepage"}),"."]})]}),Object(d.jsx)("img",{src:de,alt:"404 error",className:"not-found-page__image"})]})})},me=function(){var e=Object(o.o)().productId;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(q,{}),Object(d.jsx)(E,{}),Object(d.jsx)("div",{children:"Section title component ".concat(e)})]})},Oe=(c(93),c.p+"static/media/dropdown.6f403b12.svg"),_e=(c(94),function(e){var t=e.title,c=e.list,s=e.current,a=e.mixClass,i=e.updater,r=Object(n.useState)(!1),o=Object(l.a)(r,2),j=o[0],b=o[1];return Object(d.jsxs)("div",{className:"custom-select ".concat(a),children:[Object(d.jsx)("p",{className:"custom-select__title",children:t}),Object(d.jsxs)("button",{type:"button",className:u()("custom-select__header",{"custom-select__header--active":j}),"aria-label":"".concat(t," dropdown menu"),onClick:function(){return b((function(e){return!e}))},children:[Object(d.jsx)("p",{className:"custom-select__current",children:s}),Object(d.jsx)("img",{className:u()("custom-select__dropdown",{"custom-select__dropdown--active":j}),src:Oe,alt:"click to ","aria-hidden":"true"})]}),Object(d.jsx)("ul",{className:u()("custom-select__list",{"custom-select__list--hidden":!j}),children:c.map((function(e){return Object(d.jsx)("li",{className:"custom-select__list-item",children:Object(d.jsx)("button",{type:"button",className:u()("custom-select__list-btn",{"custom-select__list-btn--active":s===e}),onClick:function(){return i(e),void b(!1)},children:e})},e)}))})]})}),he=["Name: A - Z","Newest","Oldest","Price: Lowest first","Price: Highest first"],xe=["8","16","32","64"],pe=function(e){var t=e.pageTitle,c=Object(n.useState)("Name: A - Z"),s=Object(l.a)(c,2),a=s[0],i=s[1],r=Object(n.useState)("16"),o=Object(l.a)(r,2),j=o[0],u=o[1],b=Object(n.useState)("1"),m=Object(l.a)(b,1)[0],O=Object(n.useState)([]),_=Object(l.a)(O,2),h=_[0],x=_[1];return Object(n.useEffect)((function(){(function(e,t,c){return V("/phones?sortBy=".concat(e,"&itemsNum=").concat(t,"&page=").concat(c))})(a,j,m).then((function(e){return e.data})).then(x)}),[a,j]),Object(d.jsxs)("div",{className:"product-page",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(q,{}),Object(d.jsx)(C,{mixClass:"product-page__title",children:t}),Object(d.jsx)("p",{className:"product-page__amount",children:"".concat(95," models")}),Object(d.jsxs)("div",{className:"product-page__filters",children:[Object(d.jsx)(_e,{title:"Sort by",list:he,current:a,mixClass:"custom-select--sort-by",updater:i}),Object(d.jsx)(_e,{title:"Items on page",list:xe,current:j,mixClass:"custom-select--items-num",updater:u})]})]}),Object(d.jsx)("div",{children:JSON.stringify(h)}),Object(d.jsx)("div",{children:"Pagination"})]})},fe=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),Object(d.jsx)("main",{className:"page__main",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",element:Object(d.jsx)(ue,{pageTitle:"Welcome to Nice Gadgets store!"})}),Object(d.jsx)(o.a,{path:"phones",element:Object(d.jsx)(pe,{pageTitle:"Mobile Phones"})}),Object(d.jsx)(o.a,{path:"tablets",element:Object(d.jsx)(pe,{pageTitle:"Tablets"})}),Object(d.jsx)(o.a,{path:"accessories",element:Object(d.jsx)(pe,{pageTitle:"Accessories"})}),Object(d.jsx)(o.a,{path:"/cart",element:Object(d.jsx)(P,{pageTitle:"Cart"})}),Object(d.jsx)(o.a,{path:"/favourites",element:Object(d.jsx)(Z,{pageTitle:"Favourites"})}),Object(d.jsx)(o.a,{path:"product/:productId",element:Object(d.jsx)(me,{})}),Object(d.jsx)(o.a,{path:"*",element:Object(d.jsx)(be,{})})]})}),Object(d.jsx)(y,{})]})};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{children:Object(d.jsx)(r.a,{children:Object(d.jsx)(fe,{})})})}),document.getElementById("root"))}]),[[95,1,2]]]);
//# sourceMappingURL=main.e749861d.chunk.js.map