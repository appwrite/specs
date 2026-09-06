```python
from appwrite_console.client import Client
from appwrite_console.services.vectors_db import VectorsDB

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vectors_db = VectorsDB(client)

result = vectors_db.delete_transaction(
    transaction_id = '<TRANSACTION_ID>'
)
```
