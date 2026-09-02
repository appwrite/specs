```python
from appwrite_console.client import Client
from appwrite_console.services.project import Project
from appwrite_console.models import OAuth2Github
from appwrite_console.models import OAuth2Discord
from appwrite_console.models import OAuth2Figma
from appwrite_console.models import OAuth2Dropbox
from appwrite_console.models import OAuth2Dailymotion
from appwrite_console.models import OAuth2Bitbucket
from appwrite_console.models import OAuth2Bitly
from appwrite_console.models import OAuth2Box
from appwrite_console.models import OAuth2Autodesk
from appwrite_console.models import OAuth2Google
from appwrite_console.models import OAuth2Zoom
from appwrite_console.models import OAuth2Zoho
from appwrite_console.models import OAuth2Yandex
from appwrite_console.models import OAuth2X
from appwrite_console.models import OAuth2WordPress
from appwrite_console.models import OAuth2Twitch
from appwrite_console.models import OAuth2Stripe
from appwrite_console.models import OAuth2Spotify
from appwrite_console.models import OAuth2Slack
from appwrite_console.models import OAuth2Podio
from appwrite_console.models import OAuth2Notion
from appwrite_console.models import OAuth2Salesforce
from appwrite_console.models import OAuth2Yahoo
from appwrite_console.models import OAuth2HuggingFace
from appwrite_console.models import OAuth2Resend
from appwrite_console.models import OAuth2Cloudflare
from appwrite_console.models import OAuth2Linkedin
from appwrite_console.models import OAuth2Disqus
from appwrite_console.models import OAuth2Amazon
from appwrite_console.models import OAuth2Etsy
from appwrite_console.models import OAuth2Facebook
from appwrite_console.models import OAuth2Tradeshift
from appwrite_console.models import OAuth2Paypal
from appwrite_console.models import OAuth2Gitlab
from appwrite_console.models import OAuth2Authentik
from appwrite_console.models import OAuth2Auth0
from appwrite_console.models import OAuth2FusionAuth
from appwrite_console.models import OAuth2Keycloak
from appwrite_console.models import OAuth2Oidc
from appwrite_console.models import OAuth2Apple
from appwrite_console.models import OAuth2Okta
from appwrite_console.models import OAuth2Kick
from appwrite_console.models import OAuth2Microsoft
from typing import Union
from appwrite_console.enums import ProjectOAuthProviderId

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1') # Your API Endpoint
client.set_project('<YOUR_PROJECT_ID>') # Your project ID

project = Project(client)

result: Union[OAuth2Github, OAuth2Discord, OAuth2Figma, OAuth2Dropbox, OAuth2Dailymotion, OAuth2Bitbucket, OAuth2Bitly, OAuth2Box, OAuth2Autodesk, OAuth2Google, OAuth2Zoom, OAuth2Zoho, OAuth2Yandex, OAuth2X, OAuth2WordPress, OAuth2Twitch, OAuth2Stripe, OAuth2Spotify, OAuth2Slack, OAuth2Podio, OAuth2Notion, OAuth2Salesforce, OAuth2Yahoo, OAuth2HuggingFace, OAuth2Resend, OAuth2Cloudflare, OAuth2Linkedin, OAuth2Disqus, OAuth2Amazon, OAuth2Etsy, OAuth2Facebook, OAuth2Tradeshift, OAuth2Paypal, OAuth2Gitlab, OAuth2Authentik, OAuth2Auth0, OAuth2FusionAuth, OAuth2Keycloak, OAuth2Oidc, OAuth2Apple, OAuth2Okta, OAuth2Kick, OAuth2Microsoft] = project.get_o_auth2_provider(
    provider_id = ProjectOAuthProviderId.AMAZON
)

print(result.model_dump())
```
