```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import ProviderRepository

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: ProviderRepository = vcs.get_repository(
    installation_id = '<INSTALLATION_ID>',
    provider_repository_id = '<PROVIDER_REPOSITORY_ID>'
)

print(result.model_dump())
```
