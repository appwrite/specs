```graphql
mutation {
    presencesUpsert(
        presenceId: "<PRESENCE_ID>",
        userId: "<USER_ID>",
        status: "<STATUS>",
        permissions: ["read(\"any\")"],
        expiresAt: "2020-10-15T06:38:00.000+00:00",
        metadata: "{}"
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
mutation {
    presencesUpsert(
        presenceId: "<PRESENCE_ID>",
        userId: "<USER_ID>",
        status: "<STATUS>",
        permissions: ["read(\"any\")"],
        expiresAt: "2020-10-15T06:38:00.000+00:00",
        metadata: "{}"
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
