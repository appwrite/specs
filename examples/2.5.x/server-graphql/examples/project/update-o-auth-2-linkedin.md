```graphql
mutation {
    projectUpdateOAuth2Linkedin(
        clientId: "<CLIENT_ID>",
        primaryClientSecret: "<PRIMARY_CLIENT_SECRET>",
        enabled: false
    ) {
        _id
        enabled
        clientId
        primaryClientSecret
    }
}
```
