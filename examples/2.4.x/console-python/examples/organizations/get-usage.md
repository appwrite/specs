```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import UsageOrganization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: UsageOrganization = organizations.get_usage(
    organization_id = '<ORGANIZATION_ID>',
    start_date = '2020-10-15T06:38:00.000+00:00', # optional
    end_date = '2020-10-15T06:38:00.000+00:00' # optional
)

print(result.model_dump())
```
