```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/account"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := account.New(client)

response, error := service.CreateMagicURLToken(
    "<USER_ID>",
    "email@example.com",
    account.WithCreateMagicURLTokenUrl("https://example.com"),
    account.WithCreateMagicURLTokenPhrase(false),
)
```
