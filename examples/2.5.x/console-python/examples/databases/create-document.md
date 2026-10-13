```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import Document
from appwrite_console.permission import Permission
from appwrite_console.role import Role

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: Document = databases.create_document(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    document_id = '<DOCUMENT_ID>',
    data = {
        "username": "walter.obrien",
        "email": "walter.obrien@example.com",
        "fullName": "Walter O'Brien",
        "age": 30,
        "isAdmin": False
    },
    permissions = [Permission.read(Role.any())], # optional
    transaction_id = '<TRANSACTION_ID>' # optional
)

print(result.model_dump())
```
