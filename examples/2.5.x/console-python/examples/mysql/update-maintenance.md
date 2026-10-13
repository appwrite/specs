```python
from appwrite_console.client import Client
from appwrite_console.services.mysql import Mysql
from appwrite_console.models import DedicatedDatabase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mysql = Mysql(client)

result: DedicatedDatabase = mysql.update_maintenance(
    database_id = '<DATABASE_ID>',
    day = 'sun',
    hour_utc = 0
)

print(result.model_dump())
```
