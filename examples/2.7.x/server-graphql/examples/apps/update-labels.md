```graphql
mutation {
    appsUpdateLabels(
        appId: "<APP_ID>",
        labels: []
    ) {
        _id
        _createdAt
        _updatedAt
        name
        description
        clientUri
        logoUri
        privacyPolicyUrl
        termsUrl
        contacts
        tagline
        tags
        labels
        images
        supportUrl
        dataDeletionUrl
        redirectUris
        postLogoutRedirectUris
        enabled
        type
        deviceFlow
        teamId
        userId
        installationScopes
        installationRedirectUrl
        secrets {
            _id
            _createdAt
            _updatedAt
            appId
            secret
            hint
            createdById
            createdByName
            lastAccessedAt
        }
    }
}
```
