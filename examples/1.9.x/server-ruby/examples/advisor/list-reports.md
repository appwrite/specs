```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

advisor = Advisor.new(client)

result = advisor.list_reports(
    queries: [], # optional
    total: false # optional
)
```
