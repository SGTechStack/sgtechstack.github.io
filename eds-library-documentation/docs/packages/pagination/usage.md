---
sidebar_position: 2
---

# Steps

Follow the steps below to use the Pagination-Query React library in your project:

## Importing the library
Import the usePaginationQuery and useInfinitePaginationQuery functions from the @eds-component/pagination-query library:

```
import { usePaginationQuery, useInfinitePaginationQuery } from '@eds-component/pagination-query'
```

## Backend Configuration
For the backend, we recommend using Spring Boot with the Spring Data REST library. Here's how you can configure it to generate the desired URL format:

1. Create a repository interface that extends PagingAndSortingRepository:
```
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "records", path = "records")
public interface RecordsRepository extends PagingAndSortingRepository<Record, Long> {
    // Additional custom query methods can be defined here if needed
}
```

2. Make sure to annotate the repository with @RepositoryRestResource and provide the desired collectionResourceRel and path values. In our case, we use "records" as both the collectionResourceRel and path values.

3. With this configuration, Spring Data REST will automatically generate the desired URL format. For example, the URL http://localhost:8080/records?page=0&size=2&sort=age,asc will return the first page of records, sorted by the age field in ascending order.

## Usage

1. Define your API endpoint path and configure the query parameters. 

For example:

```
const queryConfig = {
    path = '/api/users';
    page: 1,
    size: 10,
    sort: 'name',
    staleTime: 60000,
    keepPreviousData: true,
};
```

2. Use the usePaginationQuery hook to fetch the paginated data from the backend:

```const { data, isLoading, isError, error } = usePaginationQuery(apiPath, queryConfig);```

3. Render the fetched data in your React components:

```
if (isLoading) 
    return <div>Loading...</div>

if (isError && error instanceof Error) 
    return <div>Error: {error.message}</div>

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
        </div >
    );
```

4. Update the query parameters as needed. For example, to load the next page of results