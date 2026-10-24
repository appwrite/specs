```graphql
query {
    migrationsGetSupabaseReport(
        resources: ["user"],
        endpoint: "https://example.com",
        apiKey: "<API_KEY>",
        databaseHost: "<DATABASE_HOST>",
        username: "<USERNAME>",
        password: "password",
        port: 5432
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
