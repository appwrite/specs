```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result = functions.delete_variable(
    function_id = '<FUNCTION_ID>',
    variable_id = '<VARIABLE_ID>'
)
```
