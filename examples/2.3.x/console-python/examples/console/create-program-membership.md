```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console
from appwrite_console.models import Organization

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result: Organization = console.create_program_membership(
    program_id = '<PROGRAM_ID>'
)

print(result.model_dump())
```
