```python
from appwrite_console.client import Client
from appwrite_console.services.mongo import Mongo

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mongo = Mongo(client)

result = mongo.delete_backup_policy(
    database_id = '<DATABASE_ID>',
    policy_id = '<POLICY_ID>'
)
```
