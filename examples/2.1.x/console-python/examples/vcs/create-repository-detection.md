```python
from appwrite_console.client import Client
from appwrite_console.services.vcs import Vcs
from appwrite_console.models import DetectionRuntime
from appwrite_console.models import DetectionFramework
from typing import Union
from appwrite_console.enums import VCSDetectionType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

vcs = Vcs(client)

result: Union[DetectionRuntime, DetectionFramework] = vcs.create_repository_detection(
    installation_id = '<INSTALLATION_ID>',
    provider_repository_id = '<PROVIDER_REPOSITORY_ID>',
    type = VCSDetectionType.RUNTIME,
    provider_root_directory = '<PROVIDER_ROOT_DIRECTORY>' # optional
)

print(result.model_dump())
```
