```graphql
query {
    functionsListSpecifications(
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
