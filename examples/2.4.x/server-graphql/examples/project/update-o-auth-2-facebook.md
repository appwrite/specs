```graphql
mutation {
    projectUpdateOAuth2Facebook(
        appId: "<APP_ID>",
        appSecret: "<APP_SECRET>",
        enabled: false
    ) {
        _id
        enabled
        appId
        appSecret
    }
}
```
