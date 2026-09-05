```graphql
mutation {
    projectUpdateSMTP(
        host: "example.com",
        port: 587,
        username: "<USERNAME>",
        password: "password",
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
