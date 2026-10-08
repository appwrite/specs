```python
from appwrite_console.client import Client
from appwrite_console.services.backups import Backups

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

backups = Backups(client)

result = backups.delete_policy(
    policy_id = '<POLICY_ID>'
)
```
