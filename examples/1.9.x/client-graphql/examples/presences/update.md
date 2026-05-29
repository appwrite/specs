```graphql
mutation {
    presencesUpdate(
        presenceId: "<PRESENCE_ID>",
        status: "<STATUS>",
        expiresAt: "2020-10-15T06:38:00.000+00:00",
        metadata: "{}",
        permissions: ["read("any")"],
        purge: false
    ) {
        _id
        _createdAt
        _updatedAt
        _permissions
        userId
        status
        source
        expiresAt
        metadata
    }
}
```
