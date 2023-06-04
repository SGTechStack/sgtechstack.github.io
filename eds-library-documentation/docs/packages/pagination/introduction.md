---
sidebar_position: 1
---

# Introduction

The Pagination-Query React library is designed to simplify backend queries for pagination using the @tanstack/react-query library. It provides an abstraction layer that allows developers to easily specify the path, page, size, sort, staleTime, and keepPreviousData variables when making backend queries for pagination.

 This library provides two main hooks: usePaginationQuery and useInfinitePaginationQuery. These hooks are designed to work seamlessly with the useQuery and useInfiniteQuery functions from the @tanstack/react-query library. They simplify the process of implementing pagination in your React applications by handling the page number, size, sorting, and URL generation for backend calls.

## Installation

To use our custom pagination library, you need to install the following dependencies:

@tanstack/react-query: This is a peer dependency of @eds-component/pagination-query. Make sure to install it in your project.
You can install these dependencies via npm or yarn:
```
npm install @eds-component/pagination-query
```