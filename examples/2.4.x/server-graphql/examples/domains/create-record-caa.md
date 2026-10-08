```graphql
mutation {
    domainsCreateRecordCAA(
        domainId: "<DOMAIN_ID>",
        name: "",
        value: "",
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
