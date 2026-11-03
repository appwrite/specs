```python
from appwrite_console.client import Client
from appwrite_console.services.databases import Databases
from appwrite_console.models import AttributeBoolean
from appwrite_console.models import AttributeBigint
from appwrite_console.models import AttributeInteger
from appwrite_console.models import AttributeFloat
from appwrite_console.models import AttributeEmail
from appwrite_console.models import AttributeEnum
from appwrite_console.models import AttributeUrl
from appwrite_console.models import AttributeIp
from appwrite_console.models import AttributeDatetime
from appwrite_console.models import AttributeRelationship
from appwrite_console.models import AttributePoint
from appwrite_console.models import AttributeLine
from appwrite_console.models import AttributePolygon
from appwrite_console.models import AttributeVarchar
from appwrite_console.models import AttributeText
from appwrite_console.models import AttributeMediumtext
from appwrite_console.models import AttributeLongtext
from appwrite_console.models import AttributeString
from typing import Union

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

databases = Databases(client)

result: Union[AttributeBoolean, AttributeBigint, AttributeInteger, AttributeFloat, AttributeEmail, AttributeEnum, AttributeUrl, AttributeIp, AttributeDatetime, AttributeRelationship, AttributePoint, AttributeLine, AttributePolygon, AttributeVarchar, AttributeText, AttributeMediumtext, AttributeLongtext, AttributeString] = databases.get_attribute(
    database_id = '<DATABASE_ID>',
    collection_id = '<COLLECTION_ID>',
    key = '<KEY>'
)

print(result.model_dump())
```
