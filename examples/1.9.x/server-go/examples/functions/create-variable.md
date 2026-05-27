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
    client.WithKey("<YOUR_API_KEY>")
)

service := functions.New(client)

response, error := service.CreateVariable(
    "<FUNCTION_ID>",
    "<VARIABLE_ID>",
    "<KEY>",
    "<VALUE>",
    functions.WithCreateVariableSecret(false),
)
```
