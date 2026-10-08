```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import DatabaseMigrationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: DatabaseMigrationList = tables_db.list_migrations(
    database_id = '<DATABASE_ID>'
)

print(result.model_dump())
```
