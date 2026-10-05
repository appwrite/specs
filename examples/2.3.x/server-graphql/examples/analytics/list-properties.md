```graphql
query {
    analyticsListProperties(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        properties {
            _id
            _createdAt
            _updatedAt
            name
            domain
            timezone
            enabled
            public
            allowedOrigins
            snippetId
        }
    }
}
```
