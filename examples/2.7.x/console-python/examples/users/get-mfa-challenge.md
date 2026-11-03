```python
from appwrite_console.client import Client
from appwrite_console.services.users import Users
from appwrite_console.models import MfaChallengeSecret

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

users = Users(client)

result: MfaChallengeSecret = users.get_mfa_challenge(
    user_id = '<USER_ID>',
    challenge_id = '<CHALLENGE_ID>'
)

print(result.model_dump())
```
