```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions
from appwrite_console.enums import DeploymentDownloadType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result = functions.get_deployment_download(
    function_id = '<FUNCTION_ID>',
    deployment_id = '<DEPLOYMENT_ID>',
    type = DeploymentDownloadType.SOURCE, # optional
    token = '<TOKEN>' # optional
)
```
