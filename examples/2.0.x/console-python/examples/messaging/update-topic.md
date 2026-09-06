```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Topic

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Topic = messaging.update_topic(
    topic_id = '<TOPIC_ID>',
    name = '<NAME>', # optional
    subscribe = ["any"] # optional
)

print(result.model_dump())
```
