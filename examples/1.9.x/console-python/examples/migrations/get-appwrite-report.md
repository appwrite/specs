```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import MigrationReport
from appwrite_console.enums import AppwriteMigrationResource

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: MigrationReport = migrations.get_appwrite_report(
    resources = [AppwriteMigrationResource.USER],
    endpoint = 'https://example.com',
    project_id = '<PROJECT_ID>',
    key = '<KEY>'
)

print(result.model_dump())
```
