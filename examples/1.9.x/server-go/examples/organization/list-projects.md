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

response, error := service.ListProjects(
    organization.WithListProjectsQueries([]interface{}{}),
    organization.WithListProjectsSearch("<SEARCH>"),
    organization.WithListProjectsTotal(false),
)
```
