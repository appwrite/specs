```python
from appwrite_console.client import Client
from appwrite_console.services.mysql import Mysql
from appwrite_console.models import DedicatedDatabaseExecution

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

mysql = Mysql(client)

result: DedicatedDatabaseExecution = mysql.create_execution(
    database_id = '<DATABASE_ID>',
    sql = '<SQL>',
    bindings = {}, # optional
    timeout_seconds = 1 # optional
)

print(result.model_dump())
```
