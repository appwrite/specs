```python
from appwrite_console.client import Client
from appwrite_console.services.analytics import Analytics
from appwrite_console.models import AnalyticsMetricList
from appwrite_console.enums import AnalyticsInterval
from appwrite_console.enums import AnalyticsDimension

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

analytics = Analytics(client)

result: AnalyticsMetricList = analytics.list_metrics(
    property_id = '<PROPERTY_ID>',
    queries = [], # optional
    interval = AnalyticsInterval.ONE_HOUR, # optional
    dimensions = [AnalyticsDimension.COUNTRY], # optional
    date_range = '<DATE_RANGE>', # optional
    start_at = '2020-10-15T06:38:00.000+00:00', # optional
    end_at = '2020-10-15T06:38:00.000+00:00', # optional
    limit = 1 # optional
)

print(result.model_dump())
```
