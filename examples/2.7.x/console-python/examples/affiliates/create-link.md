```python
from appwrite_console.client import Client
from appwrite_console.services.affiliates import Affiliates
from appwrite_console.models import AffiliateLink

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

affiliates = Affiliates(client)

result: AffiliateLink = affiliates.create_link(
    link_id = '<LINK_ID>',
    name = '<NAME>' # optional
)

print(result.model_dump())
```
