```python
from appwrite_console.client import Client
from appwrite_console.services.account import Account
from appwrite_console.models import Session

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

account = Account(client)

result: Session = account.update_mfa_challenge(
    challenge_id = '<CHALLENGE_ID>',
    otp = '<OTP>'
)

print(result.model_dump())
```
