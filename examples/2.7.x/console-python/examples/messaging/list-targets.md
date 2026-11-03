```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import TargetList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: TargetList = messaging.list_targets(
    message_id = '<MESSAGE_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
