```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.models import TemplateSiteList
from appwrite_console.enums import Framework
from appwrite_console.enums import SiteTemplateUseCase

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: TemplateSiteList = sites.list_templates(
    frameworks = [Framework.ANALOG], # optional
    use_cases = [SiteTemplateUseCase.PORTFOLIO], # optional
    limit = 1, # optional
    offset = 0 # optional
)

print(result.model_dump())
```
