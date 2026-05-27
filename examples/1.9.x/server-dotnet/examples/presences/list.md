```csharp
using Appwrite;
using Appwrite.Models;
using Appwrite.Services;

Client client = new Client()
    .SetEndPoint("") // Your API Endpoint
    .SetProject("<YOUR_PROJECT_ID>") // Your project ID
    .SetKey("<YOUR_API_KEY>"); // Your secret API key

Presences presences = new Presences(client);

PresenceList result = await presences.List(
    queries: new List<string>(), // optional
    total: false, // optional
    ttl: 0 // optional
);```
