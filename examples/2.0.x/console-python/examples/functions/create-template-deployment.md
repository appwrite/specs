```python
from appwrite_console.client import Client
from appwrite_console.services.functions import Functions
from appwrite_console.models import Deployment
from appwrite_console.enums import TemplateReferenceType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

functions = Functions(client)

result: Deployment = functions.create_template_deployment(
    function_id = '<FUNCTION_ID>',
    repository = '<REPOSITORY>',
    owner = '<OWNER>',
    root_directory = '<ROOT_DIRECTORY>',
    type = TemplateReferenceType.COMMIT,
    reference = '<REFERENCE>',
    activate = False # optional
)

print(result.model_dump())
```
