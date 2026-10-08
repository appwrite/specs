```python
from appwrite_console.client import Client
from appwrite_console.services.documents_db import DocumentsDB
from appwrite_console.models import Document

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

documents_db = DocumentsDB(client)

result: Document = documents_db.increment_document_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    document_id = '<DOCUMENT_ID>',
    attribute = '<ATTRIBUTE>',
    value = 1, # optional
    max = 100, # optional
    transaction_id = '<TRANSACTION_ID>' # optional
)

print(result.model_dump())
```
