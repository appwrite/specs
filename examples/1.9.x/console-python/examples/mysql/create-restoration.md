```python
from appwrite_console.client import Client
from appwrite_console.services.mysql import Mysql
from appwrite_console.models import DedicatedDatabaseRestoration

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mysql = Mysql(client)

result: DedicatedDatabaseRestoration = mysql.create_restoration(
    database_id = '<DATABASE_ID>',
    type = 'backup', # optional
    backup_id = '<BACKUP_ID>', # optional
    target_time = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
