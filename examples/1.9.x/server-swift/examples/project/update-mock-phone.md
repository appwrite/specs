```swift
import Appwrite

let client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

let project = Project(client)

let mockNumber = try await project.updateMockPhone(
    number: "+12065550100",
    otp: "<OTP>"
)

```
