```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnIndexList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnIndexList = tables_db.list_indexes(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
