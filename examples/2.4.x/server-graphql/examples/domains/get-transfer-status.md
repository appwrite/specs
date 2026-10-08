```graphql
query {
    domainsGetTransferStatus(
        domainId: "<DOMAIN_ID>"
    ) {
        status
        reason
        timestamp
    }
}
```
