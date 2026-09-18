```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import Domain

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: Domain = domains.update_auto_renewal(
    domain_id = '<DOMAIN_ID>',
    auto_renewal = False
)

print(result.model_dump())
```
