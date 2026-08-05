```python
from appwrite_console.client import Client
from appwrite_console.services.backups import Backups
from appwrite_console.models import BackupArchive
from appwrite_console.enums import BackupServices

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

backups = Backups(client)

result: BackupArchive = backups.create_archive(
    services = [BackupServices.DATABASES],
    resource_id = '<RESOURCE_ID>' # optional
)

print(result.model_dump())
```
