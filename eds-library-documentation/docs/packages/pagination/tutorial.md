---
sidebar_position: 2
---

# Tutorial
To incorporate the Pagination-Query React library into your project, follow the steps below:

## Backend Configuration
For the backend setup, we recommend using Spring Boot with the Spring Data REST library. Configure it as follows to generate the desired URL format:
```js
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "records", path = "records")
public interface RecordsRepository extends PagingAndSortingRepository<Record, Long> {
    // Additional custom query methods can be defined here if needed
    Page<Record> findByName(@Param("name") String name, Pageable pageable);
}
```

1. Create a repository interface that extends `PagingAndSortingRepository`.

2. Annotate the repository with `@RepositoryRestResource` and provide the desired `collectionResourceRel` and `path` values. In this example, we use "records" for both.

3. With this configuration, Spring Data REST will automatically generate the expected URL format: 
    - `http://localhost:8080/records{?page,size,sort}`
    - `http://localhost:8080/records/search/findByName{?name,page,size,sort}`
4. Read up on Spring Data REST Projections to project only a selected fields from an entity representation.

:::info custom backend configuration
You can use the hooks as long as you configure the URL with the following params:
- `page`: page number to access
- `size`: page size requested
:::

## How To Use
1. In `App.tsx`, use the `QueryClientProvider` component from `@tanstack/react-query` to connect and provide a `QueryClient` to your application:
```js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        // Render your React Components here
    </QueryClientProvider>
  )
}
```

2. Create a `.env` file in your root directory and configure the baseurl and timeout duration for the backend query as follows:
```js
REACT_APP_BASE_URL="http://localhost:8080" // Required
REACT_APP_TIMEOUT="5000" // Optional
```

3. Define the API endpoint path and configure the query parameters. For example:
```js
const queryConfig = {
    url: 'records/search/findByName',
    arg: {
        name: 'James'
    },
    page: 0,
    size: 10,
    sort: 'age,asc',
    staleTime: 5000,
    gcTime: 5000,
    retry: 3
};
```
:::tip
Configure the `page` parameter with a `state` variable to update the query parameters as needed to load the next page of results
:::

4. Use the `usePaginationQuery` hook to fetch paginated data from the backend:
```js
const { 
    isLoading,
    isError,
    isSuccess,
    status,
    error,
    data,
    refetch,
    isFetching 
} = usePaginationQuery<T>(
    queryConfig,
    axiosConfig // Define your request configuration here
);
```

5. Render the fetched data in your React components:
```js
if (isLoading) 
    return <div>Loading...</div>

if (isError && error instanceof Error) 
    return <div>Error: {error.message}</div>

if (data)
    return (
        // Render the fetched data here
    );
```