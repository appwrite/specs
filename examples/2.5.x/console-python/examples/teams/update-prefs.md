```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams
from appwrite_console.models import Preferences

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result: Preferences = teams.update_prefs(
    team_id = '<TEAM_ID>',
    prefs = {}
)

print(result.model_dump())
```
