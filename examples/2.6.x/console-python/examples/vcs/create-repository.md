```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import ProviderRepository

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: ProviderRepository = vcs.create_repository(
    installation_id = '<INSTALLATION_ID>',
    name = '<NAME>',
    private = False,
    provider_namespace = '<PROVIDER_NAMESPACE>' # optional
)

print(result.model_dump())
```
