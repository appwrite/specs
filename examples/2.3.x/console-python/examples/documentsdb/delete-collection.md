```python
from appwrite_console.client import Client
from appwrite_console.services.documents_db import DocumentsDB

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

documents_db = DocumentsDB(client)

result = documents_db.delete_collection(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>'
)
```
