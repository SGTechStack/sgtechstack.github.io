---
sidebar_position: 3
---

# Examples

## usePaginationQuery
The `usePaginationQuery` hook is used for paginated queries where you want to fetch a specific page of data. It utilizes the `useQuery` function from `@tanstack/react-query` under the hood.
```
import { useState } from 'react';
import { RecordResponse } from '../record/Record';
import { usePaginatedQuery } from '@eds-components/pagination-query';

export default function RecordResults({ recordsPerPage }: { recordsPerPage: number }) {
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
     } = usePaginatedQuery<RecordResponse>({
      url: "records",
      page: currentPage,
      size: recordsPerPage,
      sort: "age",
      staleTime: 5000,
      gcTime: 5000
    });

    if (isLoading) return <div>Loading...</div>
    if (isError && error instanceof Error) return <div>Error: {error.message}</div>
    if (data)
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
    return null;
}
```

## useInfinitePaginationQuery
`useInfinitePaginationQuery` hook is similar to `usePaginationQuery` but specifically targets infinite scroll pagination. It utilizes the `useInfiniteQuery` function from `@tanstack/react-query` under the hood.
```
import { useState } from 'react';
import { RecordResponse } from '../record/Record';
import { useInfinitePaginatedQuery } from '@eds-components/pagination-query';

export default function RecordResults({ recordsPerPage }: { recordsPerPage: number }) {
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
      url: "records",
      size: recordsPerPage,
      sort: "age",
      defaultPageParam: 0,
      maxPages: 2,
      staleTime: 5000,
      gcTime: 1000
    });

    if (isLoading) return <div>Loading...</div>
    if (isError && error instanceof Error) return <div>Error: {error.message}</div>
    if (data)
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
    return null;
}
```