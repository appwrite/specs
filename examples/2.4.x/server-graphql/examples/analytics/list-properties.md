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
            enabled
            public
            allowedOrigins
            accessedAt
            firstAccessedAt
        }
    }
}
```
