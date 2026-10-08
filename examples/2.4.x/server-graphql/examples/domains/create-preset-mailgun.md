```graphql
mutation {
    domainsCreatePresetMailgun(
        domainId: "<DOMAIN_ID>"
    ) {
        total
        dnsRecords {
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
}
```
