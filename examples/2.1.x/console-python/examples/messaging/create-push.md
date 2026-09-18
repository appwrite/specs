```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Message
from appwrite_console.enums import MessagePriority

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Message = messaging.create_push(
    message_id = '<MESSAGE_ID>',
    title = '<TITLE>', # optional
    body = '<BODY>', # optional
    topics = [], # optional
    users = [], # optional
    targets = [], # optional
    data = {}, # optional
    action = '<ACTION>', # optional
    image = '<ID1:ID2>', # optional
    icon = '<ICON>', # optional
    sound = '<SOUND>', # optional
    color = '<COLOR>', # optional
    tag = '<TAG>', # optional
    badge = 1, # optional
    draft = False, # optional
    scheduled_at = '2020-10-15T06:38:00.000+00:00', # optional
    content_available = False, # optional
    critical = False, # optional
    priority = MessagePriority.NORMAL # optional
)

print(result.model_dump())
```
