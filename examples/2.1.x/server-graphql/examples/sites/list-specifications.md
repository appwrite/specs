```graphql
query {
    sitesListSpecifications(
        type: "runtimes"
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
