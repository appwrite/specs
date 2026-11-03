```graphql
mutation {
    domainsUpdateRecordSRV(
        domainId: "<DOMAIN_ID>",
        recordId: "<RECORD_ID>",
        name: "",
        value: "<VALUE>",
        ttl: 1,
        priority: 0,
        weight: 0,
        port: 0,
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
