```graphql
mutation {
    tablesDBCreateRelationshipColumn(
        databaseId: "<DATABASE_ID>",
        tableId: "<TABLE_ID>",
        relatedTableId: "<RELATED_TABLE_ID>",
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
        relatedTable
        relationType
        twoWay
        twoWayKey
        onDelete
        side
    }
}
```
