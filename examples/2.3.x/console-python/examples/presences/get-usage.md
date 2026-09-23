```python
from appwrite_console.client import Client
from appwrite_console.services.presences import Presences
from appwrite_console.models import UsagePresence
from appwrite_console.enums import UsageRange

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

presences = Presences(client)

result: UsagePresence = presences.get_usage(
    range = UsageRange.TWENTY_FOUR_HOURS # optional
)

print(result.model_dump())
```
