```ruby
require 'appwrite'

include Appwrite

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_key('<YOUR_API_KEY>') # Your secret API key

usage = Usage.new(client)

result = usage.list_gauges(
    metrics: [],
    queries: [], # optional
    interval: '1m', # optional
    dimensions: [], # optional
    start_at: '2020-10-15T06:38:00.000+00:00', # optional
    end_at: '2020-10-15T06:38:00.000+00:00', # optional
    order_by: 'time', # optional
    order_dir: 'asc', # optional
    limit: 1, # optional
    offset: 0 # optional
)
```
