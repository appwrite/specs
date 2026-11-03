```graphql
query {
    localeListLanguages(
        total: false
    ) {
        total
        languages {
            name
            code
            nativeName
        }
    }
}
```
