```graphql
mutation {
    projectUpdateOAuth2Dropbox(
        appKey: "<APP_KEY>",
        appSecret: "<APP_SECRET>",
        enabled: false
    ) {
        _id
        enabled
        appKey
        appSecret
    }
}
```
