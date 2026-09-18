```python
from appwrite_console.client import Client
from appwrite_console.services.backups import Backups
from appwrite_console.models import BackupArchive

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

backups = Backups(client)

result: BackupArchive = backups.get_archive(
    archive_id = '<ARCHIVE_ID>'
)

print(result.model_dump())
```
