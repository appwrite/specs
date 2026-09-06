```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformWindows

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: PlatformWindows = project.create_windows_platform(
    platform_id = '<PLATFORM_ID>',
    name = '<NAME>',
    package_identifier_name = '<PACKAGE_IDENTIFIER_NAME>'
)

print(result.model_dump())
```
