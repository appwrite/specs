```graphql
mutation {
    organizationCreateProject(
        projectId: "",
        name: "<NAME>",
        region: "fra"
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
mutation {
    organizationCreateProject(
        projectId: "",
        name: "<NAME>",
        region: "fra"
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
