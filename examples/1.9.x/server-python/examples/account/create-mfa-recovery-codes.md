```python
from appwrite.client import Client
from appwrite.services.account import Account
from appwrite.models import MfaRecoveryCodes

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

account = Account(client)

result: MfaRecoveryCodes = account.create_mfa_recovery_codes()

print(result.model_dump())
```
