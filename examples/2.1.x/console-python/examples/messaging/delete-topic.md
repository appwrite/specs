```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result = messaging.delete_topic(
    topic_id = '<TOPIC_ID>'
)
```
