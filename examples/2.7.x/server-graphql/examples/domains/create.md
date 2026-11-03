```graphql
mutation {
    domainsCreate(
        teamId: "<TEAM_ID>",
        domain: "example.com"
    ) {
        _id
        _createdAt
        _updatedAt
        domain
        registrar
        nameservers
        expire
        renewal
        autoRenewal
        renewalPrice
        transferStatus
        teamId
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
