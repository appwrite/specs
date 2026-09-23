```graphql
mutation {
    databasesUpdateRelationshipAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        key: "<KEY>",
        onDelete: "cascade",
        newKey: "<NEW_KEY>"
    ) {
        key
        type
        status
        error
        required
        array
        _createdAt
        _updatedAt
        relatedCollection
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}
```
