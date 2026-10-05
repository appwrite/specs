```graphql
query {
    localeListCurrencies(
        total: false
    ) {
        total
        currencies {
            symbol
            name
            symbolNative
            decimalDigits
            rounding
            code
            namePlural
        }
    }
}
```
