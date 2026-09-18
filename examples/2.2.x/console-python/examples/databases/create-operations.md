```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import Transaction

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: Transaction = databases.create_operations(
    transaction_id = '<TRANSACTION_ID>',
    operations = [
	    {
	        "action": "create",
	        "databaseId": "<DATABASE_ID>",
	        "collectionId": "<COLLECTION_ID>",
	        "documentId": "<DOCUMENT_ID>",
	        "data": {
	            "name": "Walter O'Brien"
	        }
	    }
	] # optional
)

print(result.model_dump())
```
