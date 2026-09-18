```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions
from appwrite_console.models import SpecificationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result: SpecificationList = functions.list_specifications(
    type = 'runtimes' # optional
)

print(result.model_dump())
```
