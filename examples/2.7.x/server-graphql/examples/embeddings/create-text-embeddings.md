```graphql
mutation {
    embeddingsCreateTextEmbeddings(
        texts: ["Appwrite helps developers build applications.", "Find documents with semantic search."],
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
