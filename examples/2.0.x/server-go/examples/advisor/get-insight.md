```go
package main

import (
	"fmt"

	"github.com/appwrite/sdk-for-go/advisor"
	"github.com/appwrite/sdk-for-go/appwrite"
)

func main() {
	client := appwrite.NewClient(
		appwrite.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1"),
		appwrite.WithProject("<YOUR_PROJECT_ID>"),
		appwrite.WithKey("<YOUR_API_KEY>"),
	)

	service := advisor.New(client)

	response, err := service.GetInsight(
		"<REPORT_ID>",
		"<INSIGHT_ID>",
	)
	fmt.Println(response, err)
}
```
