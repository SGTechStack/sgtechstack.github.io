---
sidebar_position: 3
---

# Examples

## usePaginationQuery
The usePaginationQuery hook is used for paginated queries where you want to fetch a specific page of data. It utilizes the useQuery function from @tanstack/react-query under the hood.

```
import { useQueryClient } from '@tanstack/react-query';
import { usePaginationQuery } from '@eds-component/pagination-query';

const RecordsList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = usePaginationQuery(
    'records', // Query key
    page, // Current page number
    size, // Page size
    sort, // Sort field and direction
    (page, size, sort) => `http://localhost:8080/records?page=${page}&size=${size}&sort=${sort}`, // URL generator function
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {/* Render the records list */}
    </div>
  );
};
```

In the example above, usePaginationQuery takes the following parameters:

queryKey: A unique key for the query. It helps React Query identify and manage the query state.
page: The current page number.
size: The page
staleTime: Control the duration of data freshness before a refetch is triggered.
keepPreviousData: Specify whether the previous data should be preserved during loading and refetching operations.

## usePaginationQuery
Below is the example usage of the useInfinitePaginationQuery hook, showcasing its similarities to the usePaginationQuery hook and the additional parameters it uses:

```
import { useQueryClient } from '@tanstack/react-query';
import { useInfinitePaginationQuery } from '@eds-component/pagination-query';

const RecordsList = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError, fetchNextPage, hasNextPage } = useInfinitePaginationQuery(
    'records', // Query key
    page, // Current page number
    size, // Page size
    sort, // Sort field and direction
    (page, size, sort) => `http://localhost:8080/records?page=${page}&size=${size}&sort=${sort}`, // URL generator function
    {
      path: 'records', // Path for the query key
      staleTime: 10000, // Time in milliseconds before considering the data stale
      gcTime: 60000, // Time in milliseconds before garbage collecting old page data
      defaultPageParam: 0, // Default value for the page parameter
      maxPages: 10, // Maximum number of pages to fetch
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {/* Render the records list */}
      {data.pages.map((page) => (
        // Render each page of records
      ))}
      {hasNextPage && (
        <button onClick={fetchNextPage}>Load More</button>
      )}
    </div>
  );
};
```

In the example above, useInfinitePaginationQuery takes the same parameters as usePaginationQuery (queryKey, page, size, sort, and urlGenerator), and additional parameters specific to infinite pagination:

path: The path to be used for the query key. This allows multiple infinite queries to be differentiated.
staleTime: The time in milliseconds before considering the data stale and refetching it. If the data is refetched within this timeframe, the cached data will be used instead.
gcTime: The time in milliseconds before garbage collecting old page data. If a page is not accessed within this timeframe, it will be removed from the cache.
defaultPageParam: The default value for the page parameter. If not specified, it defaults to 0.
maxPages: The maximum number of pages to fetch. This helps prevent infinite scrolling from fetching an excessive number of pages.
The example demonstrates how to render each page of records and provide a "Load More" button to fetch the next page when available.