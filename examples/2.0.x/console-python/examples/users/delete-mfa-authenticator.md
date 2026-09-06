```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.enums import AuthenticatorType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result = users.delete_mfa_authenticator(
    user_id = '<USER_ID>',
    type = AuthenticatorType.TOTP
)
```
