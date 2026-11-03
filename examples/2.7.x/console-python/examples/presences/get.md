```python
from appwrite_console.client import Client
from appwrite_console.services.presences import Presences
from appwrite_console.models import Presence

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

presences = Presences(client)

result: Presence = presences.get(
    presence_id = '<PRESENCE_ID>'
)

print(result.model_dump())
```
