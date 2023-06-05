---
sidebar_position: 3
---

# Examples

## usePaginationQuery
The `usePaginationQuery` hook is used for paginated queries where you want to fetch a specific page of data. It utilizes the `useQuery` function from `@tanstack/react-query` under the hood.
```
import { useState } from 'react';
import { Record, RecordResponse } from '../record/Record';
import { RecordCard } from '../record/RecordCard';
import { usePaginatedQuery } from '@eds-components/pagination-query';
import ReactPaginate from 'react-paginate';

export default function RecordResults({ recordsPerPage }: { recordsPerPage: number }) {
    const [currentPage, setCurrentPage] = useState(0);

    const { status, data, error, refetch, isLoading, isFetching, isError } =
        usePaginatedQuery<RecordResponse>({
            path: "records",
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
                {data._embedded.records.map((record: Record) => {
                    console.log(data)
                    return (
                        <RecordCard
                            key={record.age}
                            name={record.name}
                            age={record.age}
                            address={record.address}
                            medicalcondition={record.medicalcondition}
                        />
                    );
                })}
                <ReactPaginate
                    breakLabel="..."
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    forcePage={currentPage}
                    onPageChange={(selectedItem: { selected: number }) => setCurrentPage(selectedItem.selected)}
                    pageCount={data.page.totalPages}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div >
        );
    return null;
}
```

## useInfinitePaginationQuery
`useInfinitePaginationQuery` hook is similar to `usePaginationQuery` but specifically targets infinite scroll pagination. It utilizes the `useInfiniteQuery` function from `@tanstack/react-query` under the hood.
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