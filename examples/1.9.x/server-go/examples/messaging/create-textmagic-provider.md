```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/messaging"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := messaging.New(client)

response, error := service.CreateTextmagicProvider(
    "<PROVIDER_ID>",
    "<NAME>",
    messaging.WithCreateTextmagicProviderFrom("+12065550100"),
    messaging.WithCreateTextmagicProviderUsername("<USERNAME>"),
    messaging.WithCreateTextmagicProviderApiKey("<API_KEY>"),
    messaging.WithCreateTextmagicProviderEnabled(false),
)
```
