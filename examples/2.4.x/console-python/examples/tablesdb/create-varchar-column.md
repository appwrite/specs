```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnVarchar

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnVarchar = tables_db.create_varchar_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = '<KEY>',
    size = 1,
    required = False,
    default = 'Hello World', # optional
    array = False, # optional
    encrypt = False # optional
)

print(result.model_dump())
```
