```graphql
mutation {
    projectUpdateOAuth2Gitlab(
        applicationId: "<APPLICATION_ID>",
        secret: "<SECRET>",
        endpoint: "https://example.com",
        enabled: false
    ) {
        _id
        enabled
        applicationId
        secret
        endpoint
    }
}
```
