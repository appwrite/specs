```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DomainPricesList
from appwrite_console.enums import DomainRegistrationType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DomainPricesList = domains.list_prices(
    domains = [],
    period_years = None, # optional
    registration_type = DomainRegistrationType.NEW # optional
)

print(result.model_dump())
```
