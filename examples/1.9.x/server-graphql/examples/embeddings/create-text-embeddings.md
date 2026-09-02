```graphql
mutation {
    embeddingsCreateTextEmbeddings(
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
