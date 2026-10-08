```python
from appwrite_console.client import Client
from appwrite_console.services.activities import Activities
from appwrite_console.models import ActivityEventList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

activities = Activities(client)

result: ActivityEventList = activities.list_events(
    queries = [] # optional
)

print(result.model_dump())
```
