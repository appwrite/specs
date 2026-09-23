```python
from appwrite_console.client import Client
from appwrite_console.services.console import Console
from appwrite_console.enums import QuerySuggestionResource

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

console = Console(client)

result = console.suggest_queries(
    resource = QuerySuggestionResource.ACTIVITIES,
    input = '<INPUT>',
    database_id = '<DATABASE_ID>', # optional
    table_id = '<TABLE_ID>' # optional
)
```
