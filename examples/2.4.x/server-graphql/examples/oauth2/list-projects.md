```graphql
query {
    oauth2ListProjects(
        limit: 1,
        offset: 0,
        search: "<SEARCH>"
    ) {
        total
        projects {
            _id
            region
            endpoint
        }
    }
}
```
