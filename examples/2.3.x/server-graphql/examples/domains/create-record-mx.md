```graphql
mutation {
    domainsCreateRecordMX(
        domainId: "<DOMAIN_ID>",
        name: "",
        value: "<VALUE>",
        ttl: 1,
        priority: 0,
        comment: "<COMMENT>"
    ) {
        _id
        _createdAt
        _updatedAt
        type
        name
        value
        ttl
        priority
        lock
        weight
        port
        comment
    }
}
```
