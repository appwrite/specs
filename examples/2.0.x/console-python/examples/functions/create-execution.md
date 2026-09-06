```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions
from appwrite_console.models import Execution
from appwrite_console.enums import ExecutionMethod

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result: Execution = functions.create_execution(
    function_id = '<FUNCTION_ID>',
    body = '<BODY>', # optional
    async = False, # optional
    path = '<PATH>', # optional
    method = ExecutionMethod.GET, # optional
    headers = {}, # optional
    scheduled_at = '<SCHEDULED_AT>' # optional
)

print(result.model_dump())
```
