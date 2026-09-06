```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Message

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Message = messaging.update_email(
    message_id = '<MESSAGE_ID>',
    topics = [], # optional
    users = [], # optional
    targets = [], # optional
    subject = '<SUBJECT>', # optional
    content = '<CONTENT>', # optional
    draft = False, # optional
    html = False, # optional
    cc = [], # optional
    bcc = [], # optional
    scheduled_at = '2020-10-15T06:38:00.000+00:00', # optional
    attachments = [] # optional
)

print(result.model_dump())
```
