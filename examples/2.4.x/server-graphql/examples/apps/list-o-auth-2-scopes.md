```graphql
query {
    appsListOAuth2Scopes {
        total
        scopes {
            value
            description
            type
            category
            deprecated
        }
    }
}
```
