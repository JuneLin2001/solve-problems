"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[149],{9837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"Codewars/4 kyu Human readable duration format/README","title":"[4 kyu Human readable duration format](https://www.codewars.com/kata/52742f58faf5485cae000b9a/)","description":"Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.","source":"@site/docs/Codewars/4 kyu Human readable duration format/README.md","sourceDirName":"Codewars/4 kyu Human readable duration format","slug":"/Codewars/4 kyu Human readable duration format/","permalink":"/solve-problems/Codewars/4 kyu Human readable duration format/","draft":false,"unlisted":false,"editUrl":"https://github.com/JuneLin2001/solve-problems/edit/main/docs/Codewars/4 kyu Human readable duration format/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u683c\u5f0f\u4ecb\u7d39","permalink":"/solve-problems/intro"},"next":{"title":"[5 kyu Convert PascalCase string into snake_case](https://www.codewars.com/kata/529b418d533b76924600085d/)","permalink":"/solve-problems/Codewars/5 kyu Convert PascalCase string into snake_case/"}}');var r=t(4848),s=t(8453);const o={},i="4 kyu Human readable duration format",d={},u=[{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u5c31\u5f88\u66b4\u529b\u7684\u904d\u6b77\u9663\u5217\u7136\u5f8c\u63db\u7b97\u6642\u9593\u55ae\u4f4d\u79d2\u3001\u5206\u3001\u6642\u3001\u5929\u3001\u5e74\uff0c\u4e26\u5132\u5b58\u5230 resultArr \u4e4b\u4e2d\uff0c\u6700\u5f8c\u628a resultArr \u91cd\u7d44\u6210\u984c\u76ee\u8981\u6c42\u7684\u5b57\u4e32\u683c\u5f0f<code>\u7528 &quot;, &quot; \u9023\u63a5\u591a\u500b\u55ae\u4f4d\uff0c\u6700\u5f8c\u4e00\u500b\u55ae\u4f4d\u524d\u52a0 &quot; and &quot;</code>\uff0c\u4e26\u56de\u50b3\u7d50\u679c",id:"\u5c31\u5f88\u66b4\u529b\u7684\u904d\u6b77\u9663\u5217\u7136\u5f8c\u63db\u7b97\u6642\u9593\u55ae\u4f4d\u79d2\u5206\u6642\u5929\u5e74\u4e26\u5132\u5b58\u5230-resultarr-\u4e4b\u4e2d\u6700\u5f8c\u628a-resultarr-\u91cd\u7d44\u6210\u984c\u76ee\u8981\u6c42\u7684\u5b57\u4e32\u683c\u5f0f\u7528---\u9023\u63a5\u591a\u500b\u55ae\u4f4d\u6700\u5f8c\u4e00\u500b\u55ae\u4f4d\u524d\u52a0--and-\u4e26\u56de\u50b3\u7d50\u679c",level:3},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2},{value:"\u5f88\u55ae\u7d14\u7684\u984c\u76ee\uff0c\u4f46\u76ee\u524d\u53ea\u60f3\u5230\u66b4\u529b\u89e3\u9084\u6c92\u60f3\u5230\u53ef\u80fd\u7684\u512a\u5316\u89e3",id:"\u5f88\u55ae\u7d14\u7684\u984c\u76ee\u4f46\u76ee\u524d\u53ea\u60f3\u5230\u66b4\u529b\u89e3\u9084\u6c92\u60f3\u5230\u53ef\u80fd\u7684\u512a\u5316\u89e3",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"4-kyu-human-readable-duration-format",children:(0,r.jsx)(n.a,{href:"https://www.codewars.com/kata/52742f58faf5485cae000b9a/",children:"4 kyu Human readable duration format"})})}),"\n",(0,r.jsx)(n.p,{children:"Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way."}),"\n",(0,r.jsx)(n.p,{children:'The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.'}),"\n",(0,r.jsx)(n.p,{children:"It is much easier to understand with an example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'For seconds = 62, your function should return\n"1 minute and 2 seconds"'}),"\n",(0,r.jsx)(n.li,{children:'For seconds = 3662, your function should return\n"1 hour, 1 minute and 2 seconds"\nFor the purpose of this Kata, a year is 365 days and a day is 24 hours.'}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note that spaces are important."}),"\n",(0,r.jsx)(n.p,{children:"Detailed rules\nThe resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1."}),"\n",(0,r.jsx)(n.p,{children:'The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.'}),"\n",(0,r.jsx)(n.p,{children:"A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is."}),"\n",(0,r.jsx)(n.p,{children:"Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second."}),"\n",(0,r.jsx)(n.p,{children:"A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute."}),"\n",(0,r.jsx)(n.p,{children:'A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.'}),"\n",(0,r.jsx)(n.h2,{id:"\u89e3\u984c\u601d\u8def",children:"\u89e3\u984c\u601d\u8def"}),"\n",(0,r.jsxs)(n.h3,{id:"\u5c31\u5f88\u66b4\u529b\u7684\u904d\u6b77\u9663\u5217\u7136\u5f8c\u63db\u7b97\u6642\u9593\u55ae\u4f4d\u79d2\u5206\u6642\u5929\u5e74\u4e26\u5132\u5b58\u5230-resultarr-\u4e4b\u4e2d\u6700\u5f8c\u628a-resultarr-\u91cd\u7d44\u6210\u984c\u76ee\u8981\u6c42\u7684\u5b57\u4e32\u683c\u5f0f\u7528---\u9023\u63a5\u591a\u500b\u55ae\u4f4d\u6700\u5f8c\u4e00\u500b\u55ae\u4f4d\u524d\u52a0--and-\u4e26\u56de\u50b3\u7d50\u679c",children:["\u5c31\u5f88\u66b4\u529b\u7684\u904d\u6b77\u9663\u5217\u7136\u5f8c\u63db\u7b97\u6642\u9593\u55ae\u4f4d\u79d2\u3001\u5206\u3001\u6642\u3001\u5929\u3001\u5e74\uff0c\u4e26\u5132\u5b58\u5230 resultArr \u4e4b\u4e2d\uff0c\u6700\u5f8c\u628a resultArr \u91cd\u7d44\u6210\u984c\u76ee\u8981\u6c42\u7684\u5b57\u4e32\u683c\u5f0f",(0,r.jsx)(n.code,{children:'\u7528 ", " \u9023\u63a5\u591a\u500b\u55ae\u4f4d\uff0c\u6700\u5f8c\u4e00\u500b\u55ae\u4f4d\u524d\u52a0 " and "'}),"\uff0c\u4e26\u56de\u50b3\u7d50\u679c"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5fc3\u5f97",children:"\u5fc3\u5f97"}),"\n",(0,r.jsx)(n.h3,{id:"\u5f88\u55ae\u7d14\u7684\u984c\u76ee\u4f46\u76ee\u524d\u53ea\u60f3\u5230\u66b4\u529b\u89e3\u9084\u6c92\u60f3\u5230\u53ef\u80fd\u7684\u512a\u5316\u89e3",children:"\u5f88\u55ae\u7d14\u7684\u984c\u76ee\uff0c\u4f46\u76ee\u524d\u53ea\u60f3\u5230\u66b4\u529b\u89e3\u9084\u6c92\u60f3\u5230\u53ef\u80fd\u7684\u512a\u5316\u89e3"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(6540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);