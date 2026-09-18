```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import VcsNamespaceList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: VcsNamespaceList = vcs.list_namespaces(
    installation_id = '<INSTALLATION_ID>',
    search = '<SEARCH>', # optional
    queries = [] # optional
)

print(result.model_dump())
```
