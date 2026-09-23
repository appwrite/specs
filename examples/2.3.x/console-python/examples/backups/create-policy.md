```python
from appwrite_console.client import Client
from appwrite_console.services.backups import Backups
from appwrite_console.models import BackupPolicy
from appwrite_console.enums import BackupServices

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

backups = Backups(client)

result: BackupPolicy = backups.create_policy(
    policy_id = '<POLICY_ID>',
    services = [BackupServices.DATABASES],
    retention = 1,
    schedule = '',
    name = '<NAME>', # optional
    resource_id = '<RESOURCE_ID>', # optional
    enabled = False # optional
)

print(result.model_dump())
```
