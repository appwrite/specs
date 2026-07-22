```go
package main

import (
    "fmt"
    "github.com/appwrite/sdk-for-go/v6/client"
    "github.com/appwrite/sdk-for-go/v6/waf"
)

client := client.New(
    client.WithEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    client.WithProject("<YOUR_PROJECT_ID>")
    client.WithKey("<YOUR_API_KEY>")
)

service := waf.New(client)

response, error := service.CreateRedirectRule(
    "<RULE_ID>",
    "api",
    "<NAME>",
    "<LOCATION>",
    300,
    waf.WithCreateRedirectRuleResourceId("<RESOURCE_ID>"),
    waf.WithCreateRedirectRuleDescription("<DESCRIPTION>"),
    waf.WithCreateRedirectRulePriority(-100000),
    waf.WithCreateRedirectRuleEnabled(false),
    waf.WithCreateRedirectRuleConditions(""),
)
```
