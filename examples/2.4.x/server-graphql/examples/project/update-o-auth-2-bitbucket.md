```graphql
mutation {
    projectUpdateOAuth2Bitbucket(
        key: "<KEY>",
        secret: "<SECRET>",
        enabled: false
    ) {
        _id
        enabled
        key
        secret
    }
}
```
