```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Target

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Target = account.create_push_target(
    target_id = '<TARGET_ID>',
    identifier = '<IDENTIFIER>',
    provider_id = '<PROVIDER_ID>' # optional
)

print(result.model_dump())
```
