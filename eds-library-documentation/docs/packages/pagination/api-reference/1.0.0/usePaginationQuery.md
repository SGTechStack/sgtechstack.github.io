---
sidebar_position: 1
---

# usePaginationQuery
```js
const { 
    isLoading,
    isSuccess,
    status,
    data,
    error,
    isError,
    fetchStatus,
    refetch,
    isFetching
} = usePaginationQuery<T>(
    {
        url,
        page,
        size,
        sort,
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
- `page: number`
    - **Required**
    - `0` indexed
    - Defaults to `0`
    - The page number to access
- `size: number`
    - Defaults to `20`
    - The page size requested
- `sort: String`
    - A collection of sort directives in the format `($propertyname,)+[asc|desc]?.`
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
- `fetchStatus: FetchStatus`
    - `fetching`: Is `true` whenever the queryFn is executing, which includes initial `pending` as well as background refetches.
    - `paused`: The query wanted to fetch, but has been `paused`.
    - `idle`: The query is not fetching.
- `refetch: (options: { throwOnError: boolean, cancelRefetch: boolean }) => Promise<UseQueryResult>`
    - A function to manually refetch the query.
    - If the query errors, the error will only be logged. If you want an error to be thrown, pass the `throwOnError: true` option
    - `cancelRefetch?: boolean`
        - Defaults to `true`
            - Per default, a currently running request will be cancelled before a new request is made
        - When set to `false`, no refetch will be made if there is already a request running.
- `isFetching: boolean`
    - A derived boolean from the `fetchStatus` variable, provided for convenience.
    
:::note 
prefetches the next page in advance
:::