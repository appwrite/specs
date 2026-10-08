```python
from appwrite_console.client import Client
from appwrite_console.services.presences import Presences
from appwrite_console.models import PresenceList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

presences = Presences(client)

result: PresenceList = presences.list(
    queries = [], # optional
    total = False, # optional
    ttl = 0 # optional
)

print(result.model_dump())
```
