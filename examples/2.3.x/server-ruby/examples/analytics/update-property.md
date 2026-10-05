```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

analytics = Analytics.new(client)

result = analytics.update_property(
    property_id: '<PROPERTY_ID>',
    name: '<NAME>', # optional
    domain: '<DOMAIN>', # optional
    timezone: '<TIMEZONE>', # optional
    enabled: false, # optional
    public: false, # optional
    allowed_origins: [] # optional
)
```
