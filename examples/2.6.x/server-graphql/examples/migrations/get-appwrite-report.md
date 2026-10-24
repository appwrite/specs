```graphql
query {
    migrationsGetAppwriteReport(
        resources: [],
        endpoint: "https://example.com",
        projectID: "<PROJECT_ID>",
        key: "<KEY>"
    ) {
        user
        team
        database
        row
        file
        bucket
        function
        platform
        api-key
        project-variable
        webhook
        auth-methods
        project-protocols
        project-labels
        project-services
        policies
        smtp
        rule
        project-email-template
        project-environment
        site
        provider
        topic
        subscriber
        message
        size
        version
        oauth2-provider
        backup-policy
    }
}
```
