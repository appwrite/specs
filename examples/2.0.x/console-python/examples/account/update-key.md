```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Key
from appwrite_console.enums import AccountKeyScopes

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Key = account.update_key(
    key_id = '<KEY_ID>',
    name = '<NAME>',
    scopes = [AccountKeyScopes.ACCOUNT],
    expire = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
