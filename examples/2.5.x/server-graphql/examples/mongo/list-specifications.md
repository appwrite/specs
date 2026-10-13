```graphql
query {
    mongoListSpecifications {
        specifications {
            slug
            name
            price
            storageOverageRate
            bandwidthOverageRate
            replicaRate
            pitrRate
            cpu
            memory
            maxConnections
            includedStorage
            includedBandwidth
            enabled
        }
        total
    }
}
```
