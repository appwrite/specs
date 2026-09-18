```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformAndroid

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: PlatformAndroid = project.update_android_platform(
    platform_id = '<PLATFORM_ID>',
    name = '<NAME>',
    application_id = '<APPLICATION_ID>'
)

print(result.model_dump())
```
