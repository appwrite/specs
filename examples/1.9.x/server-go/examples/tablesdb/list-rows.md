```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v4/client"
    "github.com/appwrite/sdk-for-go/v4/tablesdb"
)

client := client.New(
    client.WithEndpoint("")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithSession("")
)

service := tablesdb.New(client)

response, error := service.ListRows(
    "<DATABASE_ID>",
    "<TABLE_ID>",
    tablesdb.WithListRowsQueries([]interface{}{}),
    tablesdb.WithListRowsTransactionId("<TRANSACTION_ID>"),
    tablesdb.WithListRowsTotal(false),
    tablesdb.WithListRowsTtl(0),
)
```
