```python
from appwrite_console.client import Client
from appwrite_console.services.mysql import Mysql
from appwrite_console.models import BackupPolicy

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mysql = Mysql(client)

result: BackupPolicy = mysql.create_backup_policy(
    database_id = '<DATABASE_ID>',
    policy_id = '<POLICY_ID>',
    name = '<NAME>',
    schedule = '',
    retention = 1,
    type = 'full', # optional
    enabled = False # optional
)

print(result.model_dump())
```
