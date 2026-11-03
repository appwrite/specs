```python
from appwrite_console.client import Client
from appwrite_console.services.analytics import Analytics
from appwrite_console.models import AnalyticsProperty

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

analytics = Analytics(client)

result: AnalyticsProperty = analytics.get_property(
    property_id = '<PROPERTY_ID>'
)

print(result.model_dump())
```
