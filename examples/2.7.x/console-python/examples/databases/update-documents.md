```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import DocumentList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: DocumentList = databases.update_documents(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
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
