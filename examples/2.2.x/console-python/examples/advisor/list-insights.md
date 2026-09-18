```python
from appwrite_console.client import Client
from appwrite_console.services.advisor import Advisor
from appwrite_console.models import InsightList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

advisor = Advisor(client)

result: InsightList = advisor.list_insights(
    report_id = '<REPORT_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
