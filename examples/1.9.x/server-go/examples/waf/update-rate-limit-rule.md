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

response, error := service.UpdateRateLimitRule(
    "<RULE_ID>",
    waf.WithUpdateRateLimitRuleResourceType("api"),
    waf.WithUpdateRateLimitRuleResourceId("<RESOURCE_ID>"),
    waf.WithUpdateRateLimitRuleName("<NAME>"),
    waf.WithUpdateRateLimitRuleDescription("<DESCRIPTION>"),
    waf.WithUpdateRateLimitRuleLimit(1),
    waf.WithUpdateRateLimitRuleInterval(1),
    waf.WithUpdateRateLimitRulePriority(-100000),
    waf.WithUpdateRateLimitRuleEnabled(false),
    waf.WithUpdateRateLimitRuleConditions(""),
)
```
