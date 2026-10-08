```python
from appwrite_console.client import Client
from appwrite_console.services.mongo import Mongo
from appwrite_console.models import BackupPolicyList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mongo = Mongo(client)

result: BackupPolicyList = mongo.list_backup_policies(
    database_id = '<DATABASE_ID>',
    queries = [] # optional
)

print(result.model_dump())
```
