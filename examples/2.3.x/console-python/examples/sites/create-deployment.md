```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.input_file import InputFile
from appwrite_console.models import Deployment

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: Deployment = sites.create_deployment(
    site_id = '<SITE_ID>',
    code = InputFile.from_path('file.png'),
    install_command = '<INSTALL_COMMAND>', # optional
    build_command = '<BUILD_COMMAND>', # optional
    output_directory = '<OUTPUT_DIRECTORY>', # optional
    activate = False # optional
)

print(result.model_dump())
```
