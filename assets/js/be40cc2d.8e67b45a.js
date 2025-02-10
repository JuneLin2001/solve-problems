"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44],{2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"LeetCode/Check if Array Is Sorted and Rotated/README","title":"1752. Check if Array Is Sorted and Rotated","description":"Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.","source":"@site/docs/LeetCode/1752. Check if Array Is Sorted and Rotated/README.mdx","sourceDirName":"LeetCode/1752. Check if Array Is Sorted and Rotated","slug":"/LeetCode/Check if Array Is Sorted and Rotated/","permalink":"/solve-problems/LeetCode/Check if Array Is Sorted and Rotated/","draft":false,"unlisted":false,"editUrl":"https://github.com/JuneLin2001/solve-problems/edit/main/docs/LeetCode/1752. Check if Array Is Sorted and Rotated/README.mdx","tags":[],"version":"current","frontMatter":{"title":"1752. Check if Array Is Sorted and Rotated","description":"Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.","keywords":["LeetCode","1752. Check if Array Is Sorted and Rotated","Easy","Array"]},"sidebar":"tutorialSidebar","previous":{"title":"1523. Count Odd Numbers in an Interval Range","permalink":"/solve-problems/LeetCode/Count Odd Numbers in an Interval Range/"},"next":{"title":"1790. Check if One String Swap Can Make Strings Equal","permalink":"/solve-problems/LeetCode/Check if One String Swap Can Make Strings Equal/"}}');var a=n(4848),o=n(8453),s=n(5537),i=n(9329);const l={title:"1752. Check if Array Is Sorted and Rotated",description:"Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.",keywords:["LeetCode","1752. Check if Array Is Sorted and Rotated","Easy","Array"]},u="frontMatter.title",d={},c=[{value:"Description",id:"description",level:2},{value:"Example 1:",id:"example-1",level:4},{value:"Example 2:",id:"example-2",level:4},{value:"Example 3:",id:"example-3",level:4},{value:"Constraints:",id:"constraints",level:2},{value:"Solution",id:"solution",level:2},{value:"\u89e3\u984c\u601d\u8def",id:"\u89e3\u984c\u601d\u8def",level:2},{value:"\u5fc3\u5f97",id:"\u5fc3\u5f97",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"frontmattertitle",children:(0,a.jsx)(t.a,{href:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",children:l.title})})}),"\n",(0,a.jsx)(t.admonition,{title:"Easy",type:"danger"}),"\n","\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(i.A,{value:"description",label:"\u984c\u76ee\u63cf\u8ff0",default:!0,children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),(0,a.jsx)(t.p,{children:"Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false."}),(0,a.jsx)(t.p,{children:"There may be duplicates in the original array."}),(0,a.jsx)(t.p,{children:"Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation."}),(0,a.jsx)(t.h4,{id:"example-1",children:"Example 1:"}),(0,a.jsx)(t.p,{children:"Input: nums = [3,4,5,1,2]\nOutput: true\nExplanation: [1,2,3,4,5] is the original sorted array.\nYou can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2]."}),(0,a.jsx)(t.h4,{id:"example-2",children:"Example 2:"}),(0,a.jsx)(t.p,{children:"Input: nums = [2,1,3,4]\nOutput: false\nExplanation: There is no sorted array once rotated that can make nums."}),(0,a.jsx)(t.h4,{id:"example-3",children:"Example 3:"}),(0,a.jsx)(t.p,{children:"Input: nums = [1,2,3]\nOutput: true\nExplanation: [1,2,3] is the original sorted array.\nYou can rotate the array by x = 0 positions (i.e. no rotation) to make nums."}),(0,a.jsx)(t.h2,{id:"constraints",children:"Constraints:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"1 <= nums.length <= 100\n1 <= nums[i] <= 100\n"})}),(0,a.jsx)(t.p,{children:"Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?"})]}),(0,a.jsxs)(i.A,{value:"solution",label:"\u89e3\u7b54",children:[(0,a.jsx)(t.h2,{id:"solution",children:"Solution"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar check = function (nums) {\n  let count = 0;\n\n  for (i = 0; i < nums.length; i++) {\n    if (nums[i] > nums[(i + 1) % nums.length]) {\n      count++;\n    }\n  }\n\n  return count <= 1;\n};\n\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"\u89e3\u984c\u601d\u8def",children:"\u89e3\u984c\u601d\u8def"}),"\n",(0,a.jsx)(t.p,{children:"\u60f3\u6cd5\u5c31\u662f\u66b4\u529b\u89e3\u7684\u904d\u6b77\u9663\u5217\u6bd4\u8f03\u9663\u5217\u662f\u5426\u70ba\u975e\u905e\u6e1b\uff08[3,3,3,3]\u9019\u7a2e\u5168\u90e8\u90fd\u540c\u4e00\u500b\u6578\u7684\u4e5f\u7b97\u975e\u905e\u6e1b\u6240\u4ee5\u6703\u662f true\uff09\uff0c\u4f46\u7531\u65bc\u9663\u5217\u53ef\u80fd\u662f\u65cb\u8f49\u904e\u7684\u6240\u4ee5\u67091\u6b21\u7684\u5bec\u9650\uff0c\u5982\u679c\u4e0d\u53ea1\u6b21\u7684\u8a71\u5c31\u8981\u7b97 false \u4e86"}),"\n",(0,a.jsx)(t.h2,{id:"\u5fc3\u5f97",children:"\u5fc3\u5f97"}),"\n",(0,a.jsx)(t.p,{children:"U\u9ede\u5c0f\u96e3\uff0c\u4e00\u958b\u59cb\u6c92\u770b\u61c2\u984c\u76ee Rotated \u7684\u610f\u601d\uff0c\u60f3\u8aaa\u70ba\u4f55[2,1]\u4e5f\u7b97true\uff0c\u5f8c\u4f86\u518d\u8b80\u4e00\u6b21\u4e4b\u5f8c\u628a\u908f\u8f2f\u6253\u6389\u91cd\u5beb\u4e00\u6b21\u624d\u6210\u529f"})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),a=n(4164),o=n(5627),s=n(6347),i=n(372),l=n(604),u=n(1861),d=n(8749);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:c,onClick:d,...o,className:(0,a.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(g,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,y.jsx)(j,{...e,children:c(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);