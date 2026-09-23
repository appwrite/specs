```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.models import Deployment
from appwrite_console.enums import TemplateReferenceType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: Deployment = sites.create_template_deployment(
    site_id = '<SITE_ID>',
    repository = '<REPOSITORY>',
    owner = '<OWNER>',
    root_directory = '<ROOT_DIRECTORY>',
    type = TemplateReferenceType.BRANCH,
    reference = '<REFERENCE>',
    activate = False # optional
)

print(result.model_dump())
```
