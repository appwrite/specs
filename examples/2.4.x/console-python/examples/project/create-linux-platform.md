```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformLinux

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: PlatformLinux = project.create_linux_platform(
    platform_id = '<PLATFORM_ID>',
    name = '<NAME>',
    package_name = '<PACKAGE_NAME>'
)

print(result.model_dump())
```
