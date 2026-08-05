```python
from appwrite_console.client import Client
from appwrite_console.services.usage import Usage
from appwrite_console.models import UsageGaugeList
from appwrite_console.enums import UsageInterval
from appwrite_console.enums import UsageGaugeDimension
from appwrite_console.enums import UsageOrderBy
from appwrite_console.enums import UsageOrderDirection

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

usage = Usage(client)

result: UsageGaugeList = usage.list_gauges(
    metrics = [],
    queries = [], # optional
    interval = UsageInterval.ONE_MINUTE, # optional
    dimensions = [UsageGaugeDimension.RESOURCEID], # optional
    start_at = '2020-10-15T06:38:00.000+00:00', # optional
    end_at = '2020-10-15T06:38:00.000+00:00', # optional
    order_by = UsageOrderBy.TIME, # optional
    order_dir = UsageOrderDirection.ASC, # optional
    limit = 1, # optional
    offset = 0 # optional
)

print(result.model_dump())
```
