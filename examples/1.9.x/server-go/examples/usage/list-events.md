```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/usage"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := usage.New(client)

response, error := service.ListEvents(
    usage.WithListEventsQueries([]interface{}{}),
    usage.WithListEventsTotal(false),
)
```
