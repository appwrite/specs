```graphql
query {
    domainsListRecords(
        domainId: "<DOMAIN_ID>",
        queries: [],
        total: false
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
