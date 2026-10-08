```python
from appwrite_console.client import Client
from appwrite_console.services.analytics import Analytics
from appwrite_console.models import AnalyticsPropertyList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

analytics = Analytics(client)

result: AnalyticsPropertyList = analytics.list_properties(
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
