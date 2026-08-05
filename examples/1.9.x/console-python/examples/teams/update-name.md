```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams
from appwrite_console.models import Team

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result: Team = teams.update_name(
    team_id = '<TEAM_ID>',
    name = '<NAME>'
)

print(result.model_dump())
```
