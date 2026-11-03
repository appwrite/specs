```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import Migration

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: Migration = migrations.create_csv_export(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    filename = '<FILENAME>',
    columns = [], # optional
    queries = [], # optional
    delimiter = '<DELIMITER>', # optional
    enclosure = '<ENCLOSURE>', # optional
    escape = '<ESCAPE>', # optional
    header = False, # optional
    notify = False # optional
)

print(result.model_dump())
```
