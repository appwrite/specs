```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/presences"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := presences.New(client)

response, error := service.List(
    presences.WithListQueries([]interface{}{}),
    presences.WithListTotal(false),
    presences.WithListTtl(0),
)
```
