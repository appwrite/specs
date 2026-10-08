```graphql
query {
    localeListCountriesPhones(
        total: false
    ) {
        total
        phones {
            code
            countryCode
            countryName
        }
    }
}
```
