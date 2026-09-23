```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Provider

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Provider = messaging.update_twilio_provider(
    provider_id = '<PROVIDER_ID>',
    name = '<NAME>', # optional
    enabled = False, # optional
    account_sid = '<ACCOUNT_SID>', # optional
    auth_token = '<AUTH_TOKEN>', # optional
    from = '<FROM>' # optional
)

print(result.model_dump())
```
