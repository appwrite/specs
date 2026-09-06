```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams
from appwrite_console.models import AppInstallationList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result: AppInstallationList = teams.list_installations(
    team_id = '<TEAM_ID>',
    queries = [], # optional
    total = False # optional
)

print(result.model_dump())
```
