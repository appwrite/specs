```graphql
query {
    databasesListAttributes(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        queries: [],
        total: false
    ) {
        total
        attributes
    }
}
```
