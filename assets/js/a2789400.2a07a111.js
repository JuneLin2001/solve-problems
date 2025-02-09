"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[152],{5914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"LeetCode/Is Subsequence/README","title":"392. Is Subsequence","description":"leetcode.com/problems/is-subsequence","source":"@site/docs/LeetCode/392. Is Subsequence/README.mdx","sourceDirName":"LeetCode/392. Is Subsequence","slug":"/LeetCode/Is Subsequence/","permalink":"/solve-problems/LeetCode/Is Subsequence/","draft":false,"unlisted":false,"editUrl":"https://github.com/JuneLin2001/solve-problems/edit/main/docs/LeetCode/392. Is Subsequence/README.mdx","tags":[],"version":"current","frontMatter":{"title":"392. Is Subsequence","description":"leetcode.com/problems/is-subsequence","keywords":["LeetCode","392. Is Subsequence","Easy","Two Pointers","String","Dynamic Programming"]},"sidebar":"tutorialSidebar","previous":{"title":"349. Intersection of Two Arrays","permalink":"/solve-problems/LeetCode/Intersection of Two Arrays/"},"next":{"title":"[704. Binary Search](https://leetcode.com/problems/binary-search/)","permalink":"/solve-problems/LeetCode/Binary Search/"}}');var s=n(4848),a=n(8453),o=n(5537),l=n(9329);const i={title:"392. Is Subsequence",description:"leetcode.com/problems/is-subsequence",keywords:["LeetCode","392. Is Subsequence","Easy","Two Pointers","String","Dynamic Programming"]},u="frontMatter.title",c={},d=[{value:"Description",id:"description",level:2},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Constraints:",id:"constraints",level:2},{value:"Solution",id:"solution",level:2},{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"frontmattertitle",children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/intersection-of-two-arrays/",children:i.title})})}),"\n",(0,s.jsx)(t.admonition,{title:"Easy",type:"danger"}),"\n","\n",(0,s.jsxs)(o.A,{children:[(0,s.jsxs)(l.A,{value:"description",label:"\u984c\u76ee\u63cf\u8ff0",default:!0,children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),(0,s.jsx)(t.p,{children:"Given two strings s and t, return true if s is a subsequence of t, or false otherwise."}),(0,s.jsx)(t.p,{children:'A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).'}),(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1:"}),(0,s.jsx)(t.p,{children:'Input: s = "abc", t = "ahbgdc"\nOutput: true'}),(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2:"}),(0,s.jsx)(t.p,{children:'Input: s = "axc", t = "ahbgdc"\nOutput: false'}),(0,s.jsx)(t.h2,{id:"constraints",children:"Constraints:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"0 <= s.length <= 100\n0 <= t.length <= 104\ns and t consist only of lowercase English letters.\n"})}),(0,s.jsx)(t.p,{children:"Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?"})]}),(0,s.jsxs)(l.A,{value:"solution",label:"\u89e3\u7b54",children:[(0,s.jsx)(t.h2,{id:"solution",children:"Solution"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isSubsequence = function (s, t) {\n  let pointerS = 0;\n  let pointerT = 0;\n\n  if (s.length === 0) return true;\n\n  while (pointerT <= t.length) {\n    if (s[pointerS] === t[pointerT]) {\n      pointerS++;\n    }\n    if (pointerS >= s.length) {\n      return true;\n    }\n    pointerT++;\n  }\n  return false;\n};\n\n"})})]})]}),"\n",(0,s.jsx)(t.h2,{id:"\u89e3\u984c\u601d\u8def",children:"\u89e3\u984c\u601d\u8def"}),"\n",(0,s.jsx)(t.p,{children:"\u5148\u662f\u5b9a\u7fa9\u5169\u500b Pointer\uff0c\u518d\u7528\u5176\u5224\u65b7\u5b57\u4e32\u7684\u662f\u5426\u70ba Subsequence"}),"\n",(0,s.jsx)(t.h2,{id:"\u5fc3\u5f97",children:"\u5fc3\u5f97"}),"\n",(0,s.jsxs)(t.p,{children:["\u770b\u4e86 ",(0,s.jsx)(t.a,{href:"https://www.udemy.com/course/algorithm-data-structure",children:"Wilson Ren \u7684 \u8cc7\u6599\u7d50\u69cb\u8207\u6f14\u7b97\u6cd5 (JavaScript)"})," \u4ecb\u7d39\u9019\u984c\u7d93\u5178\u984c\uff0c\u5c31\u99ac\u4e0a\u7528 Two Pointer \u505a\u6cd5\u4f86\u8a66\u8a66\u770b"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var a=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(6540),s=n(4164),a=n(5627),o=n(6347),l=n(372),i=n(604),u=n(1861),c=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),s=l[n].value;s!==r&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);