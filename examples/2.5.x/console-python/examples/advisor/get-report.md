```python
from appwrite_console.client import Client
from appwrite_console.services.advisor import Advisor
from appwrite_console.models import Report

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

advisor = Advisor(client)

result: Report = advisor.get_report(
    report_id = '<REPORT_ID>'
)

print(result.model_dump())
```
