```python
from appwrite_console.client import Client
from appwrite_console.services.analytics import Analytics

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

analytics = Analytics(client)

result = analytics.delete_property(
    property_id = '<PROPERTY_ID>'
)
```
