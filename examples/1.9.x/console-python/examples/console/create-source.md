```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result = console.create_source(
    ref = '<REF>', # optional
    referrer = 'https://example.com', # optional
    utm_source = '<UTM_SOURCE>', # optional
    utm_campaign = '<UTM_CAMPAIGN>', # optional
    utm_medium = '<UTM_MEDIUM>' # optional
)
```
