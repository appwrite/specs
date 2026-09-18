```python
from appwrite_console.client import Client
from appwrite_console.services.domains import Domains
from appwrite_console.models import DomainSuggestionsList
from appwrite_console.enums import DomainSuggestionType

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

domains = Domains(client)

result: DomainSuggestionsList = domains.list_suggestions(
    query = '<QUERY>',
    tlds = [], # optional
    limit = None, # optional
    filter_type = DomainSuggestionType.PREMIUM, # optional
    price_max = None, # optional
    price_min = None # optional
)

print(result.model_dump())
```
