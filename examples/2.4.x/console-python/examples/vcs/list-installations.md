```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import InstallationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: InstallationList = vcs.list_installations(
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
