```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import AggregationTeamList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: AggregationTeamList = organizations.list_aggregations(
    organization_id = '<ORGANIZATION_ID>',
    queries = [] # optional
)

print(result.model_dump())
```
