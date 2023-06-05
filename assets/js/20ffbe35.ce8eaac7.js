"use strict";(self.webpackChunkeds_library_documentation=self.webpackChunkeds_library_documentation||[]).push([[299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},l="useInfinitePaginationQuery",o={unversionedId:"packages/pagination/api-reference/useInfinitePaginationQuery",id:"packages/pagination/api-reference/useInfinitePaginationQuery",title:"useInfinitePaginationQuery",description:"Options",source:"@site/docs/packages/pagination/api-reference/useInfinitePaginationQuery.md",sourceDirName:"packages/pagination/api-reference",slug:"/packages/pagination/api-reference/useInfinitePaginationQuery",permalink:"/docs/packages/pagination/api-reference/useInfinitePaginationQuery",draft:!1,editUrl:"https://github.com/SGTechStack/sgtechstack.github.io/tree/source/eds-library-documentation/docs/packages/pagination/api-reference/useInfinitePaginationQuery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"usePaginationQuery",permalink:"/docs/packages/pagination/api-reference/usePaginationQuery"}},p={},u=[],s={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useinfinitepaginationquery"},"useInfinitePaginationQuery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const { \n    isLoading,\n    isError,\n    isSuccess,\n    status,\n    error,\n    data,\n    fetchPreviousPage,\n    fetchNextPage,\n    hasPreviousPage,\n    hasNextPage,\n    isFetching,\n    isFetchingPreviousPage,\n    isFetchingNextPage\n} = usePaginatedQuery<T>({\n    path,\n    size,\n    sort,\n    defaultPageParam,\n    maxPages,\n    staleTime,\n    gcTime\n}, axiosConfig)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url: String"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},"The server URL that will be used for the request"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," indexed"),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},"The page number to access"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size: number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"20")),(0,i.kt)("li",{parentName:"ul"},"The page size requested"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sort: String"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"A collection of sort directives in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"($propertyname,)+[asc|desc]?.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaultPageParam: TPageParam"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"The default page param to use when fetching the first page."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxPages: number | undefined"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required")),(0,i.kt)("li",{parentName:"ul"},"The maximum number of pages to store in the infinite query data."),(0,i.kt)("li",{parentName:"ul"},"When the maximum number of pages is reached, fetching a new page will result in the removal of either the first or last page from the pages array, depending on the specified direction."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")," or equals ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", the number of pages is unlimited"),(0,i.kt)("li",{parentName:"ul"},"Default value is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getNextPageParam")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam")," must be properly defined if ",(0,i.kt)("inlineCode",{parentName:"li"},"maxPages")," value is greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to allow fetching a page in both directions when needed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staleTime: number | Infinity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"0")),(0,i.kt)("li",{parentName:"ul"},"The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),", the data will never be considered stale"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcTime: number | Infinity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional")),(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"5 * 60 * 1000")," (5 minutes) or ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity")," during SSR"),(0,i.kt)("li",{parentName:"ul"},"The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used."),(0,i.kt)("li",{parentName:"ul"},"If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Infinity"),", will disable garbage collection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"axiosConfig: AxiosRequestConfig"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optional"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isLoading: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Is ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," whenever the first fetch for a query is in-flight"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isSuccess: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status: String"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pending")," if there's no cached data and no query attempt was finished yet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," if the query attempt resulted in an error. The corresponding error property has the error received from the attempted fetch"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"success")," if the query has received a response with no errors and is ready to display its data. The corresponding data property on the query is the ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," received from the successful fetch or if the query's ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," property is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," and has not been fetched yet ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," is the first ",(0,i.kt)("inlineCode",{parentName:"li"},"initialData")," supplied to the query on initialization."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data: TData"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"The last successfully resolved data for the query."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error: null | TError"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"The error object for the query, if an error was thrown."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isError: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"status")," variable, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasPreviousPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will be true if there is a previous page to be fetched (known via the ",(0,i.kt)("inlineCode",{parentName:"li"},"getPreviousPageParam")," option)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hasNextPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This will be true if there is a next page to be fetched (known via the ",(0,i.kt)("inlineCode",{parentName:"li"},"getNextPageParam")," option)."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<UseInfiniteQueryResult>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This function allows you to fetch the previous "page" of results.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options.cancelRefetch: boolean")," same as for ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'This function allows you to fetch the next "page" of results. getNextPageParam.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options.cancelRefetch: boolean")," if set to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", calling ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage")," repeatedly will invoke ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchPage")," every time, whether the previous invocation has resolved or not. Also, the result from previous invocations will be ignored. If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", calling ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage")," repeatedly won't have any effect until the first invocation has resolved. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetching: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A derived boolean from the ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchStatus")," variable, provided for convenience."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetchingPreviousPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," while fetching the previous page with ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchPreviousPage"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isFetchingNextPage: boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Will be ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," while fetching the next page with ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchNextPage"),".")))))}d.isMDXComponent=!0}}]);