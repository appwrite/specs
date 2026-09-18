```python
from appwrite_console.client import Client
from appwrite_console.services.teams import Teams
from appwrite_console.models import MembershipList

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

teams = Teams(client)

result: MembershipList = teams.list_memberships(
    team_id = '<TEAM_ID>',
    queries = [], # optional
    search = '<SEARCH>', # optional
    total = False # optional
)

print(result.model_dump())
```
