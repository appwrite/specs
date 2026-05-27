```python
from appwrite.client import Client
from appwrite.services.account import Account
from appwrite.models import Token

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_session('') # The user session to authenticate with

account = Account(client)

result: Token = account.create_phone_verification()

print(result.model_dump())
```
