```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result = teams.delete_installation(
    team_id = '<TEAM_ID>',
    installation_id = '<INSTALLATION_ID>'
)
```
