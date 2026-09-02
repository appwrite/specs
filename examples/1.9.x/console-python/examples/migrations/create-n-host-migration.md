```python
from appwrite_console.client import Client
from appwrite_console.services.migrations import Migrations
from appwrite_console.models import Migration
from appwrite_console.enums import NHostMigrationResource

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

migrations = Migrations(client)

result: Migration = migrations.create_n_host_migration(
    resources = [NHostMigrationResource.USER],
    subdomain = '<SUBDOMAIN>',
    region = '<REGION>',
    admin_secret = '<ADMIN_SECRET>',
    database = '<DATABASE>',
    username = '<USERNAME>',
    password = 'password',
    port = 5432 # optional
)

print(result.model_dump())
```
