```graphql
mutation {
    projectUpdateOAuth2Google(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        prompt: [],
        nativeClientIds: [],
        enabled: false,
        nativeEnabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        prompt
        nativeEnabled
        nativeClientIds
    }
}
```
