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

response, error := service.CreateDeployment(
    "<FUNCTION_ID>",
    file.NewInputFile("/path/to/file.png", "file.png"),
    false,
    functions.WithCreateDeploymentEntrypoint("<ENTRYPOINT>"),
    functions.WithCreateDeploymentCommands("<COMMANDS>"),
)
```
