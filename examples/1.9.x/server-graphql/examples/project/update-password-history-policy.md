```graphql
mutation {
    projectUpdatePasswordHistoryPolicy(
        total: 1
    ) {
        _id
        _createdAt
        _updatedAt
        name
        teamId
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
        region
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
        blocks {
            _createdAt
            resourceType
            resourceId
            reason
            expiredAt
            projectName
            region
            organizationName
            organizationId
            billingPlan
        }
        consoleAccessedAt
    }
}
```
