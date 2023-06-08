"use strict";(self.webpackChunkeds_library_documentation=self.webpackChunkeds_library_documentation||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Overview",l={unversionedId:"packages/pagination/introduction",id:"packages/pagination/introduction",title:"Overview",description:"The Pagination-Query React library simplifies backend pagination queries in React applications by seamlessly integrating with @tanstack/react-query and axios libraries for efficient backend calls and managing page numbers, sizes and sorting.",source:"@site/docs/packages/pagination/introduction.md",sourceDirName:"packages/pagination",slug:"/packages/pagination/introduction",permalink:"/docs/packages/pagination/introduction",draft:!1,editUrl:"https://github.com/SGTechStack/sgtechstack.github.io/tree/source/eds-library-documentation/docs/packages/pagination/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pagination",permalink:"/docs/category/pagination"},next:{title:"Tutorial",permalink:"/docs/packages/pagination/tutorial"}},s={},p=[{value:"Get Started",id:"get-started",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Hooks",id:"hooks",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Pagination-Query React library simplifies backend pagination queries in React applications by seamlessly integrating with ",(0,i.kt)("inlineCode",{parentName:"p"},"@tanstack/react-query")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"axios")," libraries for efficient backend calls and managing page numbers, sizes and sorting."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"@eds-componentss/pagination-query")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install @eds-componentss/pagination-query\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"When you install ",(0,i.kt)("inlineCode",{parentName:"p"},"@eds-componentss/pagination-query"),", it will automatically install the following ",(0,i.kt)("inlineCode",{parentName:"p"},"peer dependencies")," into your project:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"axios")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"react")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"react-dom")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@tanstack/react-query")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"@tanstack/react-query-devtools"))),(0,i.kt)("h2",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,"The library offers two essential hooks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usePaginationQuery"),": query and render paginated data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useInfiniteScrollQuery"),": query and render lists that can load more data onto an existing set of data")))}u.isMDXComponent=!0}}]);