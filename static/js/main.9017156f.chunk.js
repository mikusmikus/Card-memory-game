(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(6),o=c.n(r),i=c(7),d=c(2),u=c(17),b=(c(13),c(14),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(),o=Object(d.a)(r,2),b=o[0],j=o[1],l=Object(a.useState)(!1),m=Object(d.a)(l,2),h=m[0],O=m[1],x=Object(a.useState)(!1),p=Object(d.a)(x,2),f=p[0],N=p[1],v=Object(a.useState)(""),_=Object(d.a)(v,2),g=_[0],w=_[1],k=Object(a.useState)(!1),S=Object(d.a)(k,2),y=S[0],M=S[1],C=Object(a.useState)(2),A=Object(d.a)(C,2),I=A[0],T=A[1],E=Object(a.useState)(0),R=Object(d.a)(E,2),Y=R[0],F=R[1],G=Object(a.useState)(0),J=Object(d.a)(G,2),B=J[0],L=J[1],P=Object(a.useState)(!1),q=Object(d.a)(P,2),z=q[0],D=q[1],H=Object(a.useRef)(!0);Object(a.useEffect)((function(){H.current&&(H.current=!1),z&&(h?L(B):setTimeout((function(){return L(B+1)}),1e3))}),[B,z]);var K=function(e,t){w(t),setTimeout((function(){for(var t=Math.floor(e*e/2),c=[],n=0;n<t;n++){var a={id:Object(u.a)(),image:"https://picsum.photos/id/".concat(4*n,"/200/200"),show:!1,orderNumber:Math.floor(999*Math.random())},r={id:Object(u.a)(),image:"https://picsum.photos/id/".concat(4*n,"/200/200"),show:!1,orderNumber:Math.floor(999*Math.random())};c.push(a),c.push(r)}c.sort((function(e,t){return e.orderNumber-t.orderNumber})),s(c),F(0),T(0),L(-3),D(!0)}),300)},Q=function(e){var t=Math.floor(e/60),c=e-60*t,n="";return n+="".concat(t,":").concat(c<10?"0":""),n+="".concat(c)};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"records-wrapper ".concat(f&&"active"," "),children:Object(n.jsx)("div",{className:"records ".concat(f&&"active"," ")})}),Object(n.jsx)("header",{className:"header",children:Object(n.jsxs)("div",{className:"row middle-xs",children:[Object(n.jsx)("div",{className:"col-xs-4",children:Object(n.jsx)("div",{className:"button__start-wrapper",children:Object(n.jsx)("button",{type:"button",className:"button",onClick:function(){return T(1),s([]),j(void 0),w(""),O(!1),void D(!1)},children:I?"START GAME":"PLAY AGAIN"})})}),Object(n.jsxs)("div",{className:"col-xs-6",children:[1===I&&Object(n.jsxs)("div",{className:"button__option-wrapper",children:[Object(n.jsx)("button",{type:"button",className:"button button--option",onClick:function(){return K(4,"small")},children:"4x4 easy"}),Object(n.jsx)("button",{type:"button",className:"button button--option",onClick:function(){return K(6,"medium")},children:"6x6 medium"}),Object(n.jsx)("button",{type:"button",className:"button button--option",onClick:function(){return K(10,"large")},children:"10x10 hard"})]}),0===I&&Object(n.jsxs)("div",{className:"button__option-wrapper",children:[Object(n.jsxs)("div",{className:"count",children:["steps: ",Y>0&&Y]}),Object(n.jsxs)("div",{className:"time",children:["time: ",B>0&&Q(B)]})]})]}),Object(n.jsx)("div",{className:"col-xs-2",children:Object(n.jsx)("button",{type:"button",className:"button button--option button--record",onClick:function(){return N(!0)},children:"Records"})})]})}),Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"game ".concat("medium"===g&&"medium"," ").concat("large"===g&&"large"),children:Object(n.jsx)("div",{className:"card",children:g&&c.map((function(e){return e.show?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"card__front  ".concat("medium"===g&&"card__front--medium","  ").concat("large"===g&&"card__front--large"),children:[Object(n.jsx)("div",{className:"loader"}),Object(n.jsx)("img",{src:e.image,alt:e.image,className:"card__front-image"})]},e.id),h&&Object(n.jsx)("div",{className:"winner-wrapper",children:Object(n.jsxs)("h2",{className:"winner",children:["You are the winner!!! Your time is ",Q(B)," and you made ",Y," steps"]})},e.id)]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"card__back ".concat("medium"===g&&"card__back--medium"," ").concat("large"===g&&"card__back--large"),children:Object(n.jsx)("button",{type:"button",className:"card__back-button",disabled:y,onClick:function(){return function(e){var t=Object(i.a)(c),n=c.findIndex((function(t){return t===e}));t[n].show=!t[n].show,s(t),F(Y+1),c.filter((function(e){return e.show})).length===c.length&&O(!0),b?b.image!==e.image?(M(!0),setTimeout((function(){var n=c.findIndex((function(e){return e===b})),a=c.findIndex((function(t){return t===e}));t[n].show=!1,t[a].show=!1,s(t),j(void 0),M(!1)}),1e3)):(j(void 0),s(t)):j(e)}(e)},children:"+"})},e.id),B<0&&Object(n.jsx)("div",{className:"start-counter-wrapper",children:Object(n.jsx)("p",{className:"start-counter",children:-1*B})})]})}))})})})]})});o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9017156f.chunk.js.map