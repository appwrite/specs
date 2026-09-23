```graphql
query {
    domainsGetPrice(
        domain: "example.com",
        periodYears: 0,
        registrationType: "new"
    ) {
        domain
        tld
        available
        price
        periodYears
        premium
        renewalPrice
        renewalPeriodYears
    }
}
```
