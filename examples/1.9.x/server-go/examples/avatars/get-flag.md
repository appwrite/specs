```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/avatars"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := avatars.New(client)

response, error := service.GetFlag(
    "af",
    avatars.WithGetFlagWidth(0),
    avatars.WithGetFlagHeight(0),
    avatars.WithGetFlagQuality(-1),
)
```
