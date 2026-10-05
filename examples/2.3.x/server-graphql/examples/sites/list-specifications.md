```graphql
query {
    sitesListSpecifications(
        type: "runtimes",
        total: false
    ) {
        total
        specifications {
            memory
            cpus
            enabled
            slug
        }
    }
}
```
