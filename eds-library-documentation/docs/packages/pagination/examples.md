---
sidebar_position: 3
---

# Examples

## `usePaginationQuery` Hook
Used for paginated queries to fetch a specific page of data and render the fetched data into your React components.
```js
import { useState } from 'react';
import { RecordResponse } from '../record/Record';
import { usePaginationQuery } from '@eds-componentss/pagination-query';

export default function RecordsPage({ recordsPerPage }: { recordsPerPage: number }) {
    const [currentPage, setCurrentPage] = useState(0);
    const { 
      isLoading,
      isError,
      isSuccess,
      status,
      error,
      data,
      refetch,
      isFetching 
     } = usePaginationQuery<RecordResponse>({
      url: 'records/search/findByName',
      arg: {
        name: 'James'
      },
      page: currentPage,
      size: recordsPerPage,
      sort: 'age',
      staleTime: 5000,
      gcTime: 5000,
      retry: 3
    });

    if (isLoading) return <div>Loading...</div>
    if (isError && error instanceof Error) return <div>Error: {error.message}</div>
    if (data)
        return (
          <div>
            {data.pages.map((page) => (
              // Render each page of records here
            ))}
          </div>
        );
    return null;
}
```

## `useInfiniteScrollQuery` Hook
Used for infinite scroll queries to load more data into an existing set of data and render the fetched data into your React components.
```js
import { useState } from 'react';
import { RecordResponse } from '../record/Record';
import { useInfinitePaginatedQuery } from '@eds-componentss/pagination-query';

export default function InfiniteRecordsPage({ recordsPerPage }: { recordsPerPage: number }) {
    const [currentPage, setCurrentPage] = useState(0);

    const { 
      isLoading,
      isSuccess,
      status,
      data,
      error,
      isError,
      hasPreviousPage,
      hasNextPage,
      fetchPreviousPage,
      fetchNextPage,
      isFetching,
      isFetchingPreviousPage,
      isFetchingNextPage
     } = useInfinitePaginatedQuery<RecordResponse>({
      url: 'records',
      size: recordsPerPage,
      sort: 'age',
      defaultPageParam: 0,
      maxPages: 2,
      staleTime: 5000,
      gcTime: 1000,
      retry: 3
    });

    if (isLoading) return <div>Loading...</div>
    if (isError && error instanceof Error) return <div>Error: {error.message}</div>
    if (data)
        return (
          <div>
            {data.pages.map((page) => (
              // Render each page of records here
            ))}
            {hasNextPage && (
              <button onClick={fetchNextPage}>Load More</button>
            )}
          </div>
        );
    return null;
}
```