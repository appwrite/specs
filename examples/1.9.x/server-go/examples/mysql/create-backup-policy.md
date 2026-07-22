```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v6/client"
    "github.com/appwrite/sdk-for-go/v6/mysql"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := mysql.New(client)

response, error := service.CreateBackupPolicy(
    "<DATABASE_ID>",
    "<POLICY_ID>",
    "<NAME>",
    "",
    1,
    mysql.WithCreateBackupPolicyType("full"),
    mysql.WithCreateBackupPolicyEnabled(false),
)
```
