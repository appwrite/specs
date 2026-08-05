```python
from appwrite_console.client import Client
from appwrite_console.services.tables_db import TablesDB
from appwrite_console.models import Transaction

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

tables_db = TablesDB(client)

result: Transaction = tables_db.create_operations(
    transaction_id = '<TRANSACTION_ID>',
    operations = [
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "tableId": "<TABLE_ID>",
	        "rowId": "<ROW_ID>",
	        "data": {
	            "name": "Walter O'Brien"
	        }
	    }
	] # optional
)

print(result.model_dump())
```
