```graphql
mutation {
    appsUpdate(
        appId: "<APP_ID>",
        name: "<NAME>",
        description: "<DESCRIPTION>",
        clientUri: "https://example.com",
        logoUri: "https://example.com",
        privacyPolicyUrl: "https://example.com",
        termsUrl: "https://example.com",
        contacts: [],
        tagline: "<TAGLINE>",
        tags: [],
        images: [],
        supportUrl: "https://example.com",
        dataDeletionUrl: "https://example.com",
        enabled: false,
        redirectUris: [],
        postLogoutRedirectUris: [],
        type: "public",
        deviceFlow: false,
        installationScopes: [],
        installationRedirectUrl: "https://example.com"
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
mutation {
    appsUpdate(
        appId: "<APP_ID>",
        name: "<NAME>",
        description: "<DESCRIPTION>",
        clientUri: "https://example.com",
        logoUri: "https://example.com",
        privacyPolicyUrl: "https://example.com",
        termsUrl: "https://example.com",
        contacts: [],
        tagline: "<TAGLINE>",
        tags: [],
        images: [],
        supportUrl: "https://example.com",
        dataDeletionUrl: "https://example.com",
        enabled: false,
        redirectUris: [],
        postLogoutRedirectUris: [],
        type: "public",
        deviceFlow: false,
        installationScopes: [],
        installationRedirectUrl: "https://example.com"
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
