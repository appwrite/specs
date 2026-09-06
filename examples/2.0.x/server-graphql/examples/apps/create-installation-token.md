```graphql
mutation {
    appsCreateInstallationToken(
        appId: "<APP_ID>",
        installationId: "<INSTALLATION_ID>"
    ) {
        access_token
        token_type
        expires_in
        refresh_token
        scope
        authorization_details
        id_token
    }
}
```
