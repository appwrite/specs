```python
from appwrite_console.client import Client
from appwrite_console.services.affiliates import Affiliates
from appwrite_console.models import AffiliateReward

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

affiliates = Affiliates(client)

result: AffiliateReward = affiliates.update_reward(
    reward_id = '<REWARD_ID>',
    status = 'claimed',
    organization_id = '<ORGANIZATION_ID>'
)

print(result.model_dump())
```
