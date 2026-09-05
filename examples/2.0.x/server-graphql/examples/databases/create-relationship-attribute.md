```graphql
mutation {
    databasesCreateRelationshipAttribute(
        databaseId: "<DATABASE_ID>",
        collectionId: "<COLLECTION_ID>",
        relatedCollectionId: "<RELATED_COLLECTION_ID>",
        type: "oneToOne",
        twoWay: false,
        key: "<KEY>",
        twoWayKey: "<TWO_WAY_KEY>",
        onDelete: "cascade"
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
