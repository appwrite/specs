```python
from appwrite_console.client import Client
from appwrite_console.services.sites import Sites
from appwrite_console.models import TemplateSite

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

sites = Sites(client)

result: TemplateSite = sites.get_template(
    template_id = '<TEMPLATE_ID>'
)

print(result.model_dump())
```
