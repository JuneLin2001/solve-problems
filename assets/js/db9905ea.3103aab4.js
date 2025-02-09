"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[688],{6395:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"Codewars/5 kyu Convert PascalCase string into snake_case/README","title":"[5 kyu Convert PascalCase string into snake_case](https://www.codewars.com/kata/529b418d533b76924600085d/)","description":"Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.","source":"@site/docs/Codewars/5 kyu Convert PascalCase string into snake_case/README.md","sourceDirName":"Codewars/5 kyu Convert PascalCase string into snake_case","slug":"/Codewars/5 kyu Convert PascalCase string into snake_case/","permalink":"/solve-problems/Codewars/5 kyu Convert PascalCase string into snake_case/","draft":false,"unlisted":false,"editUrl":"https://github.com/JuneLin2001/solve-problems/edit/main/docs/Codewars/5 kyu Convert PascalCase string into snake_case/README.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"[4 kyu Human readable duration format](https://www.codewars.com/kata/52742f58faf5485cae000b9a/)","permalink":"/solve-problems/Codewars/4 kyu Human readable duration format/"},"next":{"title":"[5 kyu First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)","permalink":"/solve-problems/Codewars/5 kyu First non-repeating character/"}}');var s=t(4848),n=t(8453);const o={},c="5 kyu Convert PascalCase string into snake_case",l={},i=[{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u6309\u7167\u984c\u76ee\u63cf\u8ff0\u82e5\u662f\u6578\u5b57\u7684\u8a71\u76f4\u63a5\u56de\u50b3\uff0c\u63a5\u8457\u4f7f\u7528<code>$1</code>\u5224\u65b7\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\uff0c\u628a\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u524d\u52a0<code>\u5e95\u7dda _ </code>\uff0c\u4e26\u79fb\u9664\u958b\u982d\u7684 <code>\u5e95\u7dda _ </code>\uff0c\u6700\u5f8c\u901a\u901a\u8f49\u5c0f\u5beb\u56de\u50b3\u8f49\u63db\u5f8c\u7684\u7d50\u679c\u3002",id:"\u6309\u7167\u984c\u76ee\u63cf\u8ff0\u82e5\u662f\u6578\u5b57\u7684\u8a71\u76f4\u63a5\u56de\u50b3\u63a5\u8457\u4f7f\u75281\u5224\u65b7\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u628a\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u524d\u52a0\u5e95\u7dda-_-\u4e26\u79fb\u9664\u958b\u982d\u7684-\u5e95\u7dda-_-\u6700\u5f8c\u901a\u901a\u8f49\u5c0f\u5beb\u56de\u50b3\u8f49\u63db\u5f8c\u7684\u7d50\u679c",level:3},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2},{value:"\u7df4\u7fd2\u6b63\u5247\u8868\u9054\u5f0f\u8207\u4f7f\u7528 <code>replace()</code> \u4f86\u66f4\u65b0\u5b57\u4e32\u3002<code>.replace(/([A-Z])/g, &quot;_$1&quot;)</code>\u7684<code>/g</code> \u4ee3\u8868 global\uff0c\u78ba\u4fdd\u5339\u914d\u5230\u7684\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u90fd\u6703\u88ab\u66ff\u63db\uff0c\u800c\u4e0d\u53ea\u662f\u7b2c\u4e00\u500b\uff08<code>A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the g flag</code>\uff09\u3002  <code>$1</code>\u4ee3\u8868\u7b2c\u4e00\u500b\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u3002<br></br>\u53c3\u8003\uff1aMDN.prototype.replace()",id:"\u7df4\u7fd2\u6b63\u5247\u8868\u9054\u5f0f\u8207\u4f7f\u7528-replace-\u4f86\u66f4\u65b0\u5b57\u4e32replacea-zg-_1\u7684g-\u4ee3\u8868-global\u78ba\u4fdd\u5339\u914d\u5230\u7684\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u90fd\u6703\u88ab\u66ff\u63db\u800c\u4e0d\u53ea\u662f\u7b2c\u4e00\u500ba-string-pattern-will-only-be-replaced-once-to-perform-a-global-search-and-replace-use-a-regular-expression-with-the-g-flag--1\u4ee3\u8868\u7b2c\u4e00\u500b\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u53c3\u8003mdnprototypereplace",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"5-kyu-convert-pascalcase-string-into-snake_case",children:(0,s.jsx)(a.a,{href:"https://www.codewars.com/kata/529b418d533b76924600085d/",children:"5 kyu Convert PascalCase string into snake_case"})})}),"\n",(0,s.jsx)(a.p,{children:"Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string."}),"\n",(0,s.jsx)(a.p,{children:'Examples\n"TestController"  --\x3e  "test_controller"\n"MoviesAndBooks"  --\x3e  "movies_and_books"\n"App7Test"        --\x3e  "app7_test"\n1                 --\x3e  "1"'}),"\n",(0,s.jsx)(a.h2,{id:"\u89e3\u984c\u601d\u8def",children:"\u89e3\u984c\u601d\u8def"}),"\n",(0,s.jsxs)(a.h3,{id:"\u6309\u7167\u984c\u76ee\u63cf\u8ff0\u82e5\u662f\u6578\u5b57\u7684\u8a71\u76f4\u63a5\u56de\u50b3\u63a5\u8457\u4f7f\u75281\u5224\u65b7\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u628a\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u524d\u52a0\u5e95\u7dda-_-\u4e26\u79fb\u9664\u958b\u982d\u7684-\u5e95\u7dda-_-\u6700\u5f8c\u901a\u901a\u8f49\u5c0f\u5beb\u56de\u50b3\u8f49\u63db\u5f8c\u7684\u7d50\u679c",children:["\u6309\u7167\u984c\u76ee\u63cf\u8ff0\u82e5\u662f\u6578\u5b57\u7684\u8a71\u76f4\u63a5\u56de\u50b3\uff0c\u63a5\u8457\u4f7f\u7528",(0,s.jsx)(a.code,{children:"$1"}),"\u5224\u65b7\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\uff0c\u628a\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u524d\u52a0",(0,s.jsx)(a.code,{children:"\u5e95\u7dda _ "}),"\uff0c\u4e26\u79fb\u9664\u958b\u982d\u7684 ",(0,s.jsx)(a.code,{children:"\u5e95\u7dda _ "}),"\uff0c\u6700\u5f8c\u901a\u901a\u8f49\u5c0f\u5beb\u56de\u50b3\u8f49\u63db\u5f8c\u7684\u7d50\u679c\u3002"]}),"\n",(0,s.jsx)(a.h2,{id:"\u5fc3\u5f97",children:"\u5fc3\u5f97"}),"\n",(0,s.jsxs)(a.h3,{id:"\u7df4\u7fd2\u6b63\u5247\u8868\u9054\u5f0f\u8207\u4f7f\u7528-replace-\u4f86\u66f4\u65b0\u5b57\u4e32replacea-zg-_1\u7684g-\u4ee3\u8868-global\u78ba\u4fdd\u5339\u914d\u5230\u7684\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u90fd\u6703\u88ab\u66ff\u63db\u800c\u4e0d\u53ea\u662f\u7b2c\u4e00\u500ba-string-pattern-will-only-be-replaced-once-to-perform-a-global-search-and-replace-use-a-regular-expression-with-the-g-flag--1\u4ee3\u8868\u7b2c\u4e00\u500b\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u53c3\u8003mdnprototypereplace",children:["\u7df4\u7fd2\u6b63\u5247\u8868\u9054\u5f0f\u8207\u4f7f\u7528 ",(0,s.jsx)(a.code,{children:"replace()"})," \u4f86\u66f4\u65b0\u5b57\u4e32\u3002",(0,s.jsx)(a.code,{children:'.replace(/([A-Z])/g, "_$1")'}),"\u7684",(0,s.jsx)(a.code,{children:"/g"})," \u4ee3\u8868 global\uff0c\u78ba\u4fdd\u5339\u914d\u5230\u7684\u6240\u6709\u5927\u5beb\u5b57\u6bcd\u90fd\u6703\u88ab\u66ff\u63db\uff0c\u800c\u4e0d\u53ea\u662f\u7b2c\u4e00\u500b\uff08",(0,s.jsx)(a.code,{children:"A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the g flag"}),"\uff09\u3002  ",(0,s.jsx)(a.code,{children:"$1"}),"\u4ee3\u8868\u7b2c\u4e00\u500b\u627e\u5230\u7684\u5927\u5beb\u5b57\u6bcd\u3002",(0,s.jsx)("br",{}),"\u53c3\u8003\uff1a",(0,s.jsxs)(a.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace",children:["MDN",":String",".prototype.replace()"]})]})]})}function p(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>c});var r=t(6540);const s={},n=r.createContext(s);function o(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);