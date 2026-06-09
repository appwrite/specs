```graphql
mutation {
    projectUpdateEmailTemplate(
        templateId: "verification",
        locale: "af",
        subject: "<SUBJECT>",
        message: "<MESSAGE>",
        senderName: "<SENDER_NAME>",
        senderEmail: "email@example.com",
        replyToEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>"
    ) {
        templateId
        locale
        message
        senderName
        senderEmail
        replyToEmail
        replyToName
        subject
    }
}
mutation {
    projectUpdateEmailTemplate(
        templateId: "verification",
        locale: "af",
        subject: "<SUBJECT>",
        message: "<MESSAGE>",
        senderName: "<SENDER_NAME>",
        senderEmail: "email@example.com",
        replyToEmail: "email@example.com",
        replyToName: "<REPLY_TO_NAME>"
    ) {
        templateId
        locale
        message
        senderName
        senderEmail
        replyToEmail
        replyToName
        subject
    }
}
```
