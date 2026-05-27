```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/functions"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := functions.New(client)

response, error := service.ListExecutions(
    "<FUNCTION_ID>",
    functions.WithListExecutionsQueries([]interface{}{}),
    functions.WithListExecutionsTotal(false),
)
```
