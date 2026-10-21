```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import PlatformWeb
from appwrite_console.models import PlatformApple
from appwrite_console.models import PlatformAndroid
from appwrite_console.models import PlatformWindows
from appwrite_console.models import PlatformLinux
from typing import Union

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: Union[PlatformWeb, PlatformApple, PlatformAndroid, PlatformWindows, PlatformLinux] = project.get_platform(
    platform_id = '<PLATFORM_ID>'
)

print(result.model_dump())
```
