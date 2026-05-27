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

response, error := service.UpdateRelationshipAttribute(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    "",
    databases.WithUpdateRelationshipAttributeOnDelete("cascade"),
    databases.WithUpdateRelationshipAttributeNewKey(""),
)
```
