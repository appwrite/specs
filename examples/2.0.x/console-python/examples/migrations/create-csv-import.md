```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import Migration
from appwrite_console.enums import OnDuplicate

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: Migration = migrations.create_csv_import(
    bucket_id = '<BUCKET_ID>',
    file_id = '<FILE_ID>',
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    internal_file = False, # optional
    on_duplicate = OnDuplicate.FAIL # optional
)

print(result.model_dump())
```
