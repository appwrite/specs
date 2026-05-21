```graphql
mutation {
    projectUpdateSMTP(
        host: "",
        port: 0,
        username: "<USERNAME>",
        password: "<PASSWORD>",
        senderEmail: "email@example.com",
        senderName: "<SENDER_NAME>",
        replyToEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>",
        secure: "tls",
        enabled: false
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
