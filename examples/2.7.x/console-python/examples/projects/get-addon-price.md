```python
from appwrite_console.client import Client
from appwrite_console.services.projects import Projects
from appwrite_console.models import AddonPrice

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

projects = Projects(client)

result: AddonPrice = projects.get_addon_price(
    project_id = '<PROJECT_ID>',
    addon = 'baa'
)

print(result.model_dump())
```
