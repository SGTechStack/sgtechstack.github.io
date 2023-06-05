---
sidebar_position: 2
---

# Usage

Follow the steps below to use the Pagination-Query React library in your project:

## Importing the library
Import the `usePaginationQuery` and `useInfinitePaginationQuery` functions from the `@eds-component/pagination-query`library:
```
import { usePaginationQuery, useInfinitePaginationQuery } from '@eds-component/pagination-query'
```

## Backend Configuration
For the backend setup, we recommend using Spring Boot with the Spring Data REST library. Configure it as follows to generate the desired URL format:

1. Create a repository interface that extends `PagingAndSortingRepository`:
```
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "records", path = "records")
public interface RecordsRepository extends PagingAndSortingRepository<Record, Long> {
    // Additional custom query methods can be defined here if needed
}
```

2. Annotate the repository with `@RepositoryRestResource` and provide the desired `collectionResourceRel` and `path` values. In this example, we use "records" for both.

3. With this configuration, Spring Data REST will automatically generate the expected URL format. For instance, the URL `http://localhost:8080/records?page=0&size=2&sort=age,asc` will retrieve the first page of records, sorted by the age field in ascending order.

## Hooks
The library offers two essential hooks: `usePaginationQuery` and `useInfinitePaginationQuery`. The `useInfinitePaginationQuery` hook specifically targets infinite scroll pagination.

1. Define your API endpoint path and configure the query parameters. 

For example:
```
const queryConfig = {
    path: 'records',
    page: 0,
    size: 10,
    sort: "age,asc",
    staleTime: 5000,
    gcTime: 5000
};
```
- `path`: The path to be used for the query key. This allows multiple infinite queries to be differentiated.
- `staleTime`: The time in milliseconds before considering the data stale and refetching it. If the data is refetched within this timeframe, the cached data will be used instead.
- `gcTime`: The time in milliseconds before garbage collecting old page data. If a page is not accessed within this timeframe, it will be removed from the cache.
- `defaultPageParam`: The default value for the page parameter. If not specified, it defaults to 0.
- `maxPages`: The maximum number of pages to fetch. This helps prevent infinite scrolling from fetching an excessive number of pages.

2. Use the `usePaginationQuery` hook to fetch paginated data from the backend:
```
const { status, data, error, refetch, isLoading, isFetching, isError } = usePaginationQuery<T>(queryConfig, axiosConfig);
```

3. Render the fetched data in your React components:
```
if (isLoading) 
    return <div>Loading...</div>

if (isError && error instanceof Error) 
    return <div>Error: {error.message}</div>

if (data)
    return (
        <div>
            {data._embedded.records.map((record) => (
                <RecordCard
                    key={record.age}
                    name={record.name}
                    age={record.age}
                    address={record.address}
                    medicalcondition={record.medicalcondition}
                />
            ))}
        </div>
    );

```

4. Update the query parameters as needed to load the next page of results