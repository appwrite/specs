```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Provider

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Provider = messaging.update_resend_provider(
    provider_id = '<PROVIDER_ID>',
    name = '<NAME>', # optional
    enabled = False, # optional
    api_key = '<API_KEY>', # optional
    from_name = '<FROM_NAME>', # optional
    from_email = 'email@example.com', # optional
    reply_to_name = '<REPLY_TO_NAME>', # optional
    reply_to_email = '<REPLY_TO_EMAIL>' # optional
)

print(result.model_dump())
```
