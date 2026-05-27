```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let proxy = Proxy(client)

let proxyRule = try await proxy.createFunctionRule(
    domain: "",
    functionId: "<FUNCTION_ID>",
    branch: "<BRANCH>" // optional
)

```
