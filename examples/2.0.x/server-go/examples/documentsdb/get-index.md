```go
package main

import (
	"fmt"

	"github.com/appwrite/sdk-for-go/appwrite"
	"github.com/appwrite/sdk-for-go/documentsdb"
)

func main() {
	client := appwrite.NewClient(
		appwrite.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1"),
		appwrite.WithProject("<YOUR_PROJECT_ID>"),
		appwrite.WithKey("<YOUR_API_KEY>"),
	)

	service := documentsdb.New(client)

	response, err := service.GetIndex(
		"<DATABASE_ID>",
		"<COLLECTION_ID>",
		"<KEY>",
	)
	fmt.Println(response, err)
}
```
