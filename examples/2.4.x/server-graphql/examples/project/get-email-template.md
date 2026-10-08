```graphql
query {
    projectGetEmailTemplate(
        templateId: "verification",
        locale: "af"
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
