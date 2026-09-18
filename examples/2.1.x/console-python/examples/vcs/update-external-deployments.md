```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result = vcs.update_external_deployments(
    installation_id = '<INSTALLATION_ID>',
    repository_id = '<REPOSITORY_ID>',
    provider_pull_request_id = '<PROVIDER_PULL_REQUEST_ID>'
)
```
