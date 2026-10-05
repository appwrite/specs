```graphql
query {
    localeListCountries(
        total: false
    ) {
        total
        countries {
            name
            code
        }
    }
}
```
