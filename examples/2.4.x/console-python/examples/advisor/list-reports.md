```python
from appwrite_console.client import Client
from appwrite_console.services.advisor import Advisor
from appwrite_console.models import ReportList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

advisor = Advisor(client)

result: ReportList = advisor.list_reports(
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
