```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v7/client"
    "github.com/appwrite/sdk-for-go/v7/avatars"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := avatars.New(client)

response, error := service.GetPhoto(
    avatars.WithGetPhotoWidth(0),
    avatars.WithGetPhotoHeight(0),
    avatars.WithGetPhotoQuality(0),
    avatars.WithGetPhotoOutput("png"),
    avatars.WithGetPhotoRating("g"),
)
```
