```python
from appwrite_console.client import Client
from appwrite_console.services.backups import Backups
from appwrite_console.models import BackupRestoration
from appwrite_console.enums import BackupServices

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

backups = Backups(client)

result: BackupRestoration = backups.create_restoration(
    archive_id = '<ARCHIVE_ID>',
    services = [BackupServices.DATABASES],
    new_resource_id = '<NEW_RESOURCE_ID>', # optional
    new_resource_name = '<NEW_RESOURCE_NAME>' # optional
)

print(result.model_dump())
```
