```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/databases"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := databases.New(client)

response, error := service.CreatePolygonAttribute(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    "",
    false,
    databases.WithCreatePolygonAttributeDefault(interface{}{[[1, 2], [3, 4], [5, 6], [1, 2]]}),
)
```
