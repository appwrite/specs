```graphql
mutation {
    projectUpdateOAuth2Notion(
        oauthClientId: "<OAUTH_CLIENT_ID>",
        oauthClientSecret: "<OAUTH_CLIENT_SECRET>",
        enabled: false
    ) {
        _id
        enabled
        oauthClientId
        oauthClientSecret
    }
}
```
