```python
from appwrite_console.client import Client
from appwrite_console.services.webhooks import Webhooks
from appwrite_console.models import Webhook

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

webhooks = Webhooks(client)

result: Webhook = webhooks.update_secret(
    webhook_id = '<WEBHOOK_ID>',
    secret = '<SECRET>' # optional
)

print(result.model_dump())
```
