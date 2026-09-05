```go
package main

import (
	"fmt"

	"github.com/appwrite/sdk-for-go/account"
	"github.com/appwrite/sdk-for-go/appwrite"
)

func main() {
	client := appwrite.NewClient(
		appwrite.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1"),
		appwrite.WithProject("<YOUR_PROJECT_ID>"),
		appwrite.WithSession(""),
	)

	service := account.New(client)

	response, err := service.CreateEmailVerification(
		"https://example.com",
	)
	fmt.Println(response, err)
}
```
