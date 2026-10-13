```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import RowList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: RowList = tables_db.create_rows(
    database_id = '<DATABASE_ID>',
    table_id = '<TABLE_ID>',
    rows = [
	    {
	        "$id": "example1",
	        "username": "walter.obrien",
	        "email": "walter.obrien@example.com",
	        "fullName": "Walter O'Brien",
	        "age": 30,
	        "isAdmin": false
	    }
	],
    transaction_id = '<TRANSACTION_ID>' # optional
)

print(result.model_dump())
```
