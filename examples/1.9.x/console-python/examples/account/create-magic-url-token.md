```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Token

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Token = account.create_magic_url_token(
    user_id = '<USER_ID>',
    email = 'email@example.com',
    url = 'https://example.com', # optional
    phrase = False # optional
)

print(result.model_dump())
```
