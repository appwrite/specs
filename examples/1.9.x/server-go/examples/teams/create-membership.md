```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/teams"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := teams.New(client)

response, error := service.CreateMembership(
    "<TEAM_ID>",
    []interface{}{},
    teams.WithCreateMembershipEmail("email@example.com"),
    teams.WithCreateMembershipUserId("<USER_ID>"),
    teams.WithCreateMembershipPhone("+12065550100"),
    teams.WithCreateMembershipUrl("https://example.com"),
    teams.WithCreateMembershipName("<NAME>"),
)
```
