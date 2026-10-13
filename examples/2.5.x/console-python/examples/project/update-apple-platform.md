```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformApple

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: PlatformApple = project.update_apple_platform(
    platform_id = '<PLATFORM_ID>',
    name = '<NAME>',
    bundle_identifier = '<BUNDLE_IDENTIFIER>'
)

print(result.model_dump())
```
