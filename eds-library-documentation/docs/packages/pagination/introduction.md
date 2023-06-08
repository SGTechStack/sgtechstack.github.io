---
sidebar_position: 1
---

# Overview
The Pagination-Query React library simplifies backend pagination queries in React applications by seamlessly integrating with `@tanstack/react-query` and `axios` libraries for efficient backend calls and managing page numbers, sizes and sorting.

## Get Started
Install `@eds-componentss/pagination-query` with the `npm` package:
```js
npm install @eds-componentss/pagination-query
```

## Dependencies
When you install `@eds-componentss/pagination-query`, it will automatically install the following `peer dependencies` into your project:
1. `axios`
2. `react`
3. `react-dom`
4. `@tanstack/react-query`
5. `@tanstack/react-query-devtools`

## Hooks
The library offers two essential hooks:
- `usePaginationQuery`: query and render paginated data
- `useInfiniteScrollQuery`: query and render lists that can load more data onto an existing set of data