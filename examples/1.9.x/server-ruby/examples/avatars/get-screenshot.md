```ruby
require 'appwrite'

include Appwrite
include Appwrite::Enums

client = Client.new
    .set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
    .set_project('<YOUR_PROJECT_ID>') # Your project ID
    .set_session('') # The user session to authenticate with
    .set_impersonate_user_id('') # Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

avatars = Avatars.new(client)

result = avatars.get_screenshot(
    url: 'https://example.com',
    headers: {
        "Authorization" => "Bearer token123",
        "X-Custom-Header" => "value"
    }, # optional
    viewport_width: 1920, # optional
    viewport_height: 1080, # optional
    scale: 2, # optional
    theme: BrowserTheme::DARK, # optional
    user_agent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15', # optional
    fullpage: true, # optional
    locale: 'en-US', # optional
    timezone: Timezone::AFRICA_ABIDJAN, # optional
    latitude: 37.7749, # optional
    longitude: -122.4194, # optional
    accuracy: 100, # optional
    touch: true, # optional
    permissions: [BrowserPermission::GEOLOCATION, BrowserPermission::NOTIFICATIONS], # optional
    sleep: 3, # optional
    width: 800, # optional
    height: 600, # optional
    quality: 85, # optional
    output: ImageFormat::JPEG # optional
)
```
