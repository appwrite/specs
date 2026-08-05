```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import ColumnPolygon

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: ColumnPolygon = tables_db.update_polygon_column(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    key = '',
    required = False,
    default = [[[1, 2], [3, 4], [5, 6], [1, 2]]], # optional
    new_key = '' # optional
)

print(result.model_dump())
```
