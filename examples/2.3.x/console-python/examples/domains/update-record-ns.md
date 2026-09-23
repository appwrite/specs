```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DnsRecord

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DnsRecord = domains.update_record_ns(
    domain_id = '<DOMAIN_ID>',
    record_id = '<RECORD_ID>',
    name = '',
    value = '<VALUE>',
    ttl = 1,
    comment = '<COMMENT>' # optional
)

print(result.model_dump())
```
