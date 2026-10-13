```graphql
query {
    functionsListSpecifications(
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
