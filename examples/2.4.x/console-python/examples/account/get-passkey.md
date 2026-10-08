```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Passkey

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Passkey = account.get_passkey(
    passkey_id = '<PASSKEY_ID>'
)

print(result.model_dump())
```
