```python
from appwrite_console.client import Client
from appwrite_console.services.organizations import Organizations
from appwrite_console.models import EstimationUpdatePlan

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

organizations = Organizations(client)

result: EstimationUpdatePlan = organizations.estimation_update_plan(
    organization_id = '<ORGANIZATION_ID>',
    billing_plan = 'tier-0',
    invites = [], # optional
    coupon_id = '<COUPON_ID>' # optional
)

print(result.model_dump())
```
