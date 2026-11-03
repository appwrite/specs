```graphql
query {
    domainsListPrices(
        domains: [],
        periodYears: 0,
        registrationType: "new"
    ) {
        total
        prices {
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
}
```
