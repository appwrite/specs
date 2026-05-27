```python
from appwrite.client import Client
from appwrite.services.advisor import Advisor

client = Client()
client.set_endpoint('') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID
client.set_key('<YOUR_API_KEY>') # Your secret API key

advisor = Advisor(client)

result = advisor.delete_report(
    report_id = '<REPORT_ID>'
)
```
