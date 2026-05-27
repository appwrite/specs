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

response, error := service.UpdateKey(
    "<KEY_ID>",
    "<NAME>",
    []interface{}{},
    organization.WithUpdateKeyExpire("2020-10-15T06:38:00.000+00:00"),
)
```
