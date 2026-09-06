```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import DowngradeFeedback

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: DowngradeFeedback = organizations.create_downgrade_feedback(
    organization_id = '<ORGANIZATION_ID>',
    reason = '<REASON>',
    message = '<MESSAGE>',
    from_plan_id = '<FROM_PLAN_ID>',
    to_plan_id = '<TO_PLAN_ID>'
)

print(result.model_dump())
```
