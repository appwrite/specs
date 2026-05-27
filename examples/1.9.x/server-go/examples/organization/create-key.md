```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/organization"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := organization.New(client)

response, error := service.CreateKey(
    "<KEY_ID>",
    "<NAME>",
    []interface{}{},
    organization.WithCreateKeyExpire("2020-10-15T06:38:00.000+00:00"),
)
```
