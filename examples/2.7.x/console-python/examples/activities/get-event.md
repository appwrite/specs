```python
from appwrite_console.client import Client
from appwrite_console.services.activities import Activities
from appwrite_console.models import ActivityEvent

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

activities = Activities(client)

result: ActivityEvent = activities.get_event(
    event_id = '<EVENT_ID>'
)

print(result.model_dump())
```
