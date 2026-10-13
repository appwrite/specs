```graphql
query {
    sitesListFrameworks(
        total: false
    ) {
        total
        frameworks {
            key
            name
            buildRuntime
            runtimes
            adapters {
                key
                installCommand
                buildCommand
                outputDirectory
                fallbackFile
            }
        }
    }
}
```
