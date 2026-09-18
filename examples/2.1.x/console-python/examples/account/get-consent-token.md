```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Oauth2ConsentToken

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Oauth2ConsentToken = account.get_consent_token(
    consent_id = '<CONSENT_ID>',
    token_id = '<TOKEN_ID>'
)

print(result.model_dump())
```
