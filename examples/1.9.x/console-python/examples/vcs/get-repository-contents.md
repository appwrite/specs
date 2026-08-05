```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import VcsContentList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: VcsContentList = vcs.get_repository_contents(
    installation_id = '<INSTALLATION_ID>',
    provider_repository_id = '<PROVIDER_REPOSITORY_ID>',
    provider_root_directory = '<PROVIDER_ROOT_DIRECTORY>', # optional
    provider_reference = '<PROVIDER_REFERENCE>' # optional
)

print(result.model_dump())
```
