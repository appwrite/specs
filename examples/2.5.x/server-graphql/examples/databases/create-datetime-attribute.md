```graphql
mutation {
    databasesCreateDatetimeAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        required: false,
        default: "2020-10-15T06:38:00.000+00:00",
        array: false
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        format
        default
    }
}
```
