```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DnsRecordsList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DnsRecordsList = domains.get_preset_i_cloud(
    domain_id = '<DOMAIN_ID>'
)

print(result.model_dump())
```
