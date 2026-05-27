```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/backups"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := backups.New(client)

response, error := service.CreateRestoration(
    "<ARCHIVE_ID>",
    []interface{}{},
    backups.WithCreateRestorationNewResourceId("<NEW_RESOURCE_ID>"),
    backups.WithCreateRestorationNewResourceName("<NEW_RESOURCE_NAME>"),
)
```
