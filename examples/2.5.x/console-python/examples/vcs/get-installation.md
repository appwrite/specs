```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import Installation

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: Installation = vcs.get_installation(
    installation_id = '<INSTALLATION_ID>'
)

print(result.model_dump())
```
