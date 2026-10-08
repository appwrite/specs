```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams
from appwrite_console.models import AppInstallation

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result: AppInstallation = teams.create_installation(
    team_id = '<TEAM_ID>',
    app_id = '<APP_ID>',
    authorization_details = '<AUTHORIZATION_DETAILS>' # optional
)

print(result.model_dump())
```
