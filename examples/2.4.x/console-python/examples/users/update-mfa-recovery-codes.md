```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import MfaRecoveryCodes

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: MfaRecoveryCodes = users.update_mfa_recovery_codes(
    user_id = '<USER_ID>'
)

print(result.model_dump())
```
