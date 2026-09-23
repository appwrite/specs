```python
from appwrite_console.client import Client
from appwrite_console.services.webhooks import Webhooks
from appwrite_console.models import Webhook

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

webhooks = Webhooks(client)

result: Webhook = webhooks.create(
    webhook_id = '<WEBHOOK_ID>',
    url = 'https://example.com/webhook',
    name = '<NAME>',
    events = [],
    enabled = False, # optional
    tls = False, # optional
    auth_username = '<AUTH_USERNAME>', # optional
    auth_password = 'password', # optional
    secret = '<SECRET>' # optional
)

print(result.model_dump())
```
