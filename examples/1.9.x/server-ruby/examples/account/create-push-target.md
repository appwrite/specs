```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with

account = Account.new(client)

result = account.create_push_target(
    target_id: '<TARGET_ID>',
    identifier: '<IDENTIFIER>',
    provider_id: '<PROVIDER_ID>' # optional
)
```
