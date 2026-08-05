```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import MigrationReport
from appwrite_console.enums import FirebaseMigrationResource

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: MigrationReport = migrations.get_firebase_report(
    resources = [FirebaseMigrationResource.USER],
    service_account = '<SERVICE_ACCOUNT>'
)

print(result.model_dump())
```
