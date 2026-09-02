```graphql
mutation {
    projectUpdateOAuth2Server(
        enabled: false,
        authorizationUrl: "https://example.com",
        scopes: [],
        authorizationDetailsTypes: [],
        accessTokenDuration: 60,
        refreshTokenDuration: 60,
        publicAccessTokenDuration: 60,
        publicRefreshTokenDuration: 60,
        installationAccessTokenDuration: 60,
        confidentialPkce: false,
        verificationUrl: "https://example.com",
        userCodeLength: 6,
        userCodeFormat: "numeric",
        deviceCodeDuration: 60,
        defaultScopes: [],
        installationScopes: []
    ) {
        _id
        _createdAt
        _updatedAt
        name
        teamId
        region
        devKeys {
            _id
            _createdAt
            _updatedAt
            name
            expire
            secret
            accessedAt
            sdks
        }
        smtpEnabled
        smtpSenderName
        smtpSenderEmail
        smtpReplyToName
        smtpReplyToEmail
        smtpHost
        smtpPort
        smtpUsername
        smtpPassword
        smtpSecure
        pingCount
        pingedAt
        labels
        status
        onboarding
        authMethods {
            _id
            enabled
        }
        services {
            _id
            enabled
        }
        protocols {
            _id
            enabled
        }
        blocks {
            _createdAt
            resourceType
            resourceId
            mode
            reason
            expiredAt
            projectName
            region
            organizationName
            organizationId
            billingPlan
        }
        consoleAccessedAt
        wafEnabled
        billingLimits {
            bandwidth
            storage
            users
            executions
            GBHours
            imageTransformations
            authPhone
            budgetLimit
        }
        oAuth2ServerEnabled
        oAuth2ServerAuthorizationUrl
        oAuth2ServerScopes
        oAuth2ServerDefaultScopes
        oAuth2ServerInstallationScopes
        oAuth2ServerAuthorizationDetailsTypes
        oAuth2ServerAccessTokenDuration
        oAuth2ServerRefreshTokenDuration
        oAuth2ServerPublicAccessTokenDuration
        oAuth2ServerPublicRefreshTokenDuration
        oAuth2ServerInstallationAccessTokenDuration
        oAuth2ServerConfidentialPkce
        oAuth2ServerVerificationUrl
        oAuth2ServerUserCodeLength
        oAuth2ServerUserCodeFormat
        oAuth2ServerDeviceCodeDuration
        oAuth2ServerDiscoveryUrl
    }
}
```
