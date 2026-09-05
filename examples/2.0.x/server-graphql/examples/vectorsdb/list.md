```graphql
query {
    vectorsDBList(
        queries: [],
        search: "<SEARCH>",
        total: false
    ) {
        total
        databases {
            _id
            name
            _createdAt
            _updatedAt
            enabled
            type
            status
        }
    }
}
```
