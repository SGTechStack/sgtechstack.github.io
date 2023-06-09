---
sidebar_position: 2
---

# useInfiniteScrollQuery

```js
const { 
    isLoading,
    isSuccess,
    status,
    data,
    error,
    isError,
    hasNextPage,
    hasPreviousPage,
    fetchStatus,
    fetchNextPage,
    fetchPreviousPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage
} = usePaginationQuery<T>(
    {
        url,
        arg,
        size,
        sort,
        defaultPageParam,
        maxPages,
        staleTime,
        gcTime,
        retry
    }, 
    axiosConfig
)
```

**Options**
- `url: String`
    - **Required**
    - The server URL that will be used for the request
- `arg: any`
    - The parameters that will be used for the request
- `size: number`
    - Defaults to `20`
    - The page size requested
- `sort: String`
    - A collection of sort directives in the format `($propertyname,)+[asc|desc]?.`
- `defaultPageParam: TPageParam`
    - The default page param to use when fetching the first page.
- `maxPages: number | undefined`
    - The maximum number of pages to store in the infinite query data.
    - When the maximum number of pages is reached, fetching a new page will result in the removal of either the first or last page from the pages array, depending on the specified direction.
    - If `undefined` or equals `0`, the number of pages is unlimited
    - Default value is `undefined`
    - `getNextPageParam` and `getPreviousPageParam` must be properly defined if `maxPages` value is greater than `0` to allow fetching a page in both directions when needed.
- `staleTime: number | Infinity`
    - Defaults to `0`
    - The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.
    - If set to `Infinity`, the data will never be considered stale
- `gcTime: number | Infinity`
    - Defaults to `5 * 60 * 1000` (5 minutes) or `Infinity` during SSR
    - The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used.
    - If set to `Infinity`, will disable garbage collection
- `retry: boolean | number | (failureCount: number, error: TError) => boolean`
    - If `false`, failed queries will not retry by default.
    - If `true`, failed queries will retry infinitely.
    - If set to a `number`, e.g. `3`, failed queries will retry until the failed query count meets that number.
- `axiosConfig: AxiosRequestConfig`

**Returns**
- `isLoading: boolean`
    - Is `true` whenever the first fetch for a query is in-flight
- `isSuccess: boolean`
    - A derived boolean from the `status` variable, provided for convenience.
- `status: String`
    - Will be:
        - `pending` if there's no cached data and no query attempt was finished yet.
        - `error` if the query attempt resulted in an error. The corresponding `error` property has the error received from the attempted fetch
        - `success` if the query has received a response with no errors and is ready to display its data. The corresponding `data` property on the query is the data received from the successful fetch or if the query's `enabled` property is set to `false` and has not been fetched yet `data` is the first `initialData` supplied to the query on initialization.
- `data: TData`
    - Defaults to `undefined`
    - The last successfully resolved data for the query.
- `error: null | TError`
    - Defaults to `null`
    - The error object for the query, if an error was thrown.
- `isError: boolean`
    - A derived boolean from the `status` variable, provided for convenience.
- `hasNextPage: boolean`
    - This will be `true` if there is a next page to be fetched.
- `hasPreviousPage: boolean`
    - This will be `true` if there is a previous page to be fetched.
- `fetchStatus: FetchStatus`
    - `fetching`: Is `true` whenever the queryFn is executing, which includes initial `pending` as well as background refetches.
    - `paused`: The query wanted to fetch, but has been `paused`.
    - `idle`: The query is not fetching.
- `fetchNextPage: (options?: FetchNextPageOptions) => Promise<UseInfiniteQueryResult>`
    - This function allows you to fetch the next "page" of results. `getNextPageParam`.
    - `options.cancelRefetch: boolean` if set to `true`, calling `fetchNextPage` repeatedly will invoke `fetchPage` every time, whether the previous invocation has resolved or not. Also, the result from previous invocations will be ignored. If set to `false`, calling `fetchNextPage` repeatedly won't have any effect until the first invocation has resolved. Default is `true`.
- `fetchPreviousPage: (options?: FetchPreviousPageOptions) => Promise<UseInfiniteQueryResult>`
    - This function allows you to fetch the previous "page" of results.
    - `options.cancelRefetch: boolean` same as for `fetchNextPage`.
- `isFetching: boolean`
    - A derived boolean from the `fetchStatus` variable, provided for convenience.
- `isFetchingNextPage: boolean`
    - Will be `true` while fetching the next page with `fetchNextPage`.
- `isFetchingPreviousPage: boolean`
    - Will be `true` while fetching the previous page with `fetchPreviousPage`.