(this["webpackJsonpsmall-math-game"]=this["webpackJsonpsmall-math-game"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(4),r=n.n(c),i=(n(10),n(1)),s=n(5),o=(n(11),n(0));var u=function(){var e,t,n=Math.ceil(10*Math.random()),c=Math.ceil(10*Math.random());switch(Math.ceil(2*Math.random())){case 1:e="+",t=n+c;break;case 2:e="-",t=n-c}var r=Object(a.useState)({num1:n,num2:c,operator:e,answer:t,score:0,incorrect:!1,warning:""}),u=Object(s.a)(r,2),h=u[0],j=u[1];function l(e){var t=parseInt(e.target.value);if("Enter"===e.key)if(t===h.answer){var n,a,c=Math.ceil(10*Math.random()),r=Math.ceil(10*Math.random());switch(Math.ceil(2*Math.random())){case 1:n="+",a=c+r;break;case 2:n="-",a=c-r}j(Object(i.a)(Object(i.a)({},h),{},{num1:c,num2:r,answer:a,operator:n,score:h.score+1,incorrect:!1,warning:""}))}else""===e.target.value?j(Object(i.a)(Object(i.a)({},h),{},{warning:"\u8acb\u8f38\u5165\u7b54\u6848"})):h.score>0?j(Object(i.a)(Object(i.a)({},h),{},{score:h.score-1,incorrect:!0,warning:""})):j(Object(i.a)(Object(i.a)({},h),{},{incorrect:!0,warning:""}))}function b(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{id:"question",className:h.incorrect?"incorrect":"",children:[h.num1,h.operator,h.num2]}),Object(o.jsx)("input",{autoFocus:!0,onKeyPress:l,placeholder:h.warning,type:"text"}),Object(o.jsxs)("div",{children:["\u5206\u6578: ",h.score]})]})}function m(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("h1",{children:"you win!!"})})}return h.score>=5?Object(o.jsx)(m,{}):Object(o.jsx)(b,{})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};r.a.render(Object(o.jsx)(u,{}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.fa3c11a6.chunk.js.map