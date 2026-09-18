```graphql
mutation {
    projectUpdateOAuth2Keycloak(
        clientId: "<CLIENT_ID>",
        clientSecret: "<CLIENT_SECRET>",
        endpoint: "<ENDPOINT>",
        realmName: "<REALM_NAME>",
        enabled: false
    ) {
        _id
        enabled
        clientId
        clientSecret
        endpoint
        realmName
    }
}
```
