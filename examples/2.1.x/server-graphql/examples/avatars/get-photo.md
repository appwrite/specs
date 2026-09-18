```graphql
query {
    avatarsGetPhoto(
        width: 0,
        height: 0,
        quality: 0,
        output: "png",
        rating: "g",
        userId: "current()",
        emailHash: "<EMAIL_HASH>",
        name: "<NAME>"
    ) {
        status
    }
}
```
