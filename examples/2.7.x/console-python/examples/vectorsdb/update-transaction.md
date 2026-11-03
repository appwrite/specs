```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB
from appwrite_console.models import Transaction

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result: Transaction = vectors_db.update_transaction(
    transaction_id = '<TRANSACTION_ID>',
    commit = False, # optional
    rollback = False # optional
)

print(result.model_dump())
```
