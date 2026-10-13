```graphql
mutation {
    projectUpdateOAuth2Kakao(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        prompt: [],
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        prompt
    }
}
```
