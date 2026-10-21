```graphql
query {
    domainsGetRecord(
        domainId: "<DOMAIN_ID>",
        recordId: "<RECORD_ID>"
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
