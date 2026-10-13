```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import RowList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: RowList = tables_db.update_rows(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    data = {
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 33,
        "isAdmin": False
    }, # optional
    queries = [], # optional
    transaction_id = '<TRANSACTION_ID>' # optional
)

print(result.model_dump())
```
