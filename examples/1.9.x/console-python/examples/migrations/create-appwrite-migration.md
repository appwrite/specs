```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import Migration
from appwrite_console.enums import AppwriteMigrationResource
from appwrite_console.enums import OnDuplicate

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: Migration = migrations.create_appwrite_migration(
    resources = [AppwriteMigrationResource.USER],
    endpoint = 'https://example.com',
    project_id = '<PROJECT_ID>',
    api_key = '<API_KEY>',
    on_duplicate = OnDuplicate.FAIL # optional
)

print(result.model_dump())
```
