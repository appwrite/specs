```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import MigrationReport
from appwrite_console.enums import SupabaseMigrationResource

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: MigrationReport = migrations.get_supabase_report(
    resources = [SupabaseMigrationResource.USER],
    endpoint = 'https://example.com',
    api_key = '<API_KEY>',
    database_host = '<DATABASE_HOST>',
    username = '<USERNAME>',
    password = 'password',
    port = None # optional
)

print(result.model_dump())
```
