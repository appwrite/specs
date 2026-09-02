```graphql
query {
    mysqlListSpecifications {
        specifications {
            slug
            name
            price
            cpu
            memory
            maxConnections
            includedStorage
            includedBandwidth
            enabled
        }
        total
        pricing {
            storageOverageRate
            bandwidthOverageRate
            replicaRate
            pitrRate
        }
    }
}
```
