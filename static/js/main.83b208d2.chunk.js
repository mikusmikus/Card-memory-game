(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(6),o=c.n(r),i=c(7),d=c(2),l=c(17),u=(c(13),c(14),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(),o=Object(d.a)(r,2),u=o[0],b=o[1],j=Object(a.useState)(""),m=Object(d.a)(j,2),h=m[0],O=m[1],x=Object(a.useState)(""),p=Object(d.a)(x,2),f=p[0],_=p[1],N=Object(a.useState)(!1),v=Object(d.a)(N,2),g=v[0],w=v[1],k=Object(a.useState)(!1),S=Object(d.a)(k,2),y=S[0],M=S[1],C=function(e,t){_(t);for(var c=Math.floor(e*e/2),n=[],a=0;a<c;a++){var r={id:Object(l.a)(),image:"https://picsum.photos/id/".concat(10*a,"/200/200"),show:!1,orderNumber:Math.floor(999*Math.random())},o={id:Object(l.a)(),image:"https://picsum.photos/id/".concat(10*a,"/200/200"),show:!1,orderNumber:Math.floor(999*Math.random())};n.push(r),n.push(o)}n.sort((function(e,t){return e.orderNumber-t.orderNumber})),s(n)};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-xs-12",children:Object(n.jsx)("div",{className:"button__start-wrapper",children:Object(n.jsx)("button",{type:"button",className:"button__start",onClick:function(){return M(!0)},children:"S\u0101kt Sp\u0113li"})})})}),y&&Object(n.jsxs)("div",{className:"row center-xs",children:[Object(n.jsxs)("div",{className:"button__option-wrapper",children:[Object(n.jsx)("div",{className:"col-xs-4",children:Object(n.jsx)("button",{type:"button",className:"button__option",onClick:function(){return C(4,"small")},children:"4x4 sp\u0113le"})}),Object(n.jsx)("div",{className:"col-xs-4",children:Object(n.jsx)("button",{type:"button",className:"button__option",onClick:function(){return C(6,"medium")},children:"6x6 sp\u0113le"})}),Object(n.jsx)("div",{className:"col-xs-4",children:Object(n.jsx)("button",{type:"button",className:"button__option",onClick:function(){return C(10,"large")},children:"10x10 sp\u0113le"})})]}),Object(n.jsx)("h1",{className:"heading ".concat(h&&"heading-show"),children:h})]}),Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"game ".concat("medium"===f&&"medium"," ").concat("large"===f&&"large"),children:Object(n.jsx)("div",{className:"card",children:f&&c.map((function(e){return e.show?Object(n.jsx)("div",{className:"card__front  ".concat("medium"===f&&"card__front--medium","  ").concat("large"===f&&"card__front--large"),children:Object(n.jsx)("img",{src:e.image,alt:e.image,className:"card__image"})},e.id):Object(n.jsx)("div",{className:"card__back ".concat("medium"===f&&"card__back--medium"," ").concat("large"===f&&"card__back--large"),children:Object(n.jsx)("button",{type:"button",className:"card__backSide",disabled:g,onClick:function(){return function(e){var t=Object(i.a)(c),n=c.findIndex((function(t){return t===e}));t[n].show=!t[n].show,s(t),c.filter((function(e){return e.show})).length===c.length&&O("We Have A Winner"),u?u.image!==e.image?(w(!0),setTimeout((function(){var n=c.findIndex((function(e){return e===u})),a=c.findIndex((function(t){return t===e}));t[n].show=!1,t[a].show=!1,s(t),b(void 0),w(!1)}),1e3)):(b(void 0),s(t)):b(e)}(e)},children:"+"},e.id)})}))})})})]})});o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.83b208d2.chunk.js.map