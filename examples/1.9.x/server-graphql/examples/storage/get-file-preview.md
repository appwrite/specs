```graphql
query {
    storageGetFilePreview(
        bucketId: "<BUCKET_ID>",
        fileId: "<FILE_ID>",
        width: 0,
        height: 0,
        gravity: "center",
        quality: -1,
        borderWidth: 0,
        borderColor: "",
        borderRadius: 0,
        opacity: 0,
        rotation: -360,
        background: "",
        output: "jpg",
        token: "<TOKEN>"
    ) {
        status
    }
}
```
