```graphql
query {
    projectListEmailTemplates(
        queries: [],
        total: false
    ) {
        total
        templates {
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
}
```
