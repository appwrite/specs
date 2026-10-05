```graphql
query {
    functionsListRuntimes(
        total: false
    ) {
        total
        runtimes {
            _id
            key
            name
            version
            base
            image
            logo
            supports
        }
    }
}
```
