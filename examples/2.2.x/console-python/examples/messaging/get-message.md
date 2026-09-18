```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Message

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Message = messaging.get_message(
    message_id = '<MESSAGE_ID>'
)

print(result.model_dump())
```
