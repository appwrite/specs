```graphql
mutation {
    vectorsDBCreateTextEmbeddings(
        texts: [],
        model: "nomic-embed-text"
    ) {
        total
        embeddings {
            model
            dimension
            embedding
            error
        }
    }
}
mutation {
    vectorsDBCreateTextEmbeddings(
        texts: [],
        model: "nomic-embed-text"
    ) {
        total
        embeddings {
            model
            dimension
            embedding
            error
        }
    }
}
```
