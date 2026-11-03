```graphql
mutation {
    domainsCreateRecordTXT(
        domainId: "<DOMAIN_ID>",
        name: "",
        ttl: 1,
        value: "<VALUE>",
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
