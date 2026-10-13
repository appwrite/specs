```graphql
mutation {
    domainsUpdateRecordHTTPS(
        domainId: "<DOMAIN_ID>",
        recordId: "<RECORD_ID>",
        name: "",
        value: "<VALUE>",
        ttl: 1,
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
