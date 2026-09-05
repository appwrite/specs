```graphql
mutation {
    projectUpdateMFAFactorsPolicy(
        totp: false,
        email: false,
        phone: false,
        custom: false
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
        blocks
        consoleAccessedAt
        wafEnabled
    }
}
```
