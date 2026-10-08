```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import AggregationTeam

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: AggregationTeam = organizations.get_aggregation(
    organization_id = '<ORGANIZATION_ID>',
    aggregation_id = '<AGGREGATION_ID>',
    limit = 0, # optional
    offset = None # optional
)

print(result.model_dump())
```
