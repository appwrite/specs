```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let functions = Functions(client)

let variable = try await functions.createVariable(
    functionId: "<FUNCTION_ID>",
    variableId: "<VARIABLE_ID>",
    key: "<KEY>",
    value: "<VALUE>",
    secret: false // optional
)

```
