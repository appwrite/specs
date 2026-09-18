```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import ProviderRepositoryRuntimeList
from appwrite_console.models import ProviderRepositoryFrameworkList
from typing import Union
from appwrite_console.enums import VCSDetectionType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: Union[ProviderRepositoryRuntimeList, ProviderRepositoryFrameworkList] = vcs.list_repositories(
    installation_id = '<INSTALLATION_ID>',
    type = VCSDetectionType.RUNTIME,
    search = '<SEARCH>', # optional
    queries = [] # optional
)

print(result.model_dump())
```
