```python
from appwrite_console.client import Client
from appwrite_console.services.messaging import Messaging
from appwrite_console.models import Provider

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

messaging = Messaging(client)

result: Provider = messaging.update_apns_provider(
    provider_id = '<PROVIDER_ID>',
    name = '<NAME>', # optional
    enabled = False, # optional
    auth_key = '<AUTH_KEY>', # optional
    auth_key_id = '<AUTH_KEY_ID>', # optional
    team_id = '<TEAM_ID>', # optional
    bundle_id = '<BUNDLE_ID>', # optional
    sandbox = False # optional
)

print(result.model_dump())
```
