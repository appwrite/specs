```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console
from appwrite_console.models import Program

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result: Program = console.get_program(
    program_id = '<PROGRAM_ID>'
)

print(result.model_dump())
```
