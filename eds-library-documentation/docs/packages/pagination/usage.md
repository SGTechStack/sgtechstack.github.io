---
sidebar_position: 2
---

# Usage
To incorporate the Pagination-Query React library into your project, follow the steps below:

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
The library offers two essential hooks: `usePaginationQuery` and `useInfinitePaginationQuery`. The `useInfinitePaginationQuery` hook specifically targets infinite scroll pagination.x

1. Define the API endpoint path and configure the query parameters. For example:
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

2. Use the `usePaginationQuery` hook to fetch paginated data from the backend:
```
const { isLoading,
        isError,
        isSuccess,
        status,
        error,
        data,
        refetch,
        isFetching 
} = usePaginationQuery<T>(queryConfig, axiosConfig);
```

3. Render the fetched data in your React components:
```
if (isLoading) 
    return <div>Loading...</div>

if (isError && error instanceof Error) 
    return <div>Error: {error.message}</div>

if (data)
    return (
        // Render the fetched data here
    );

```

4. Update the query parameters as needed to load the next page of results