```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result = console.update_sources(
    claims = []
)
```
