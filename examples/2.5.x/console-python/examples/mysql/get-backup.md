```python
from appwrite_console.client import Client
from appwrite_console.services.mysql import Mysql
from appwrite_console.models import DedicatedDatabaseBackup

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mysql = Mysql(client)

result: DedicatedDatabaseBackup = mysql.get_backup(
    database_id = '<DATABASE_ID>',
    backup_id = '<BACKUP_ID>'
)

print(result.model_dump())
```
