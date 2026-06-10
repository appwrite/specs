```rust
use appwrite::Client;
use appwrite::services::Sites;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    client.set_endpoint("https://<REGION>.cloud.appwrite.io/v1"); // Your API Endpoint
    client.set_project("<YOUR_PROJECT_ID>"); // Your project ID
    client.set_key("<YOUR_API_KEY>"); // Your secret API key
    client.set_impersonate_user_id(""); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

    let sites = Sites::new(&client);

    let result = sites.get_deployment_download(
        "<SITE_ID>",
        "<DEPLOYMENT_ID>",
        Some(appwrite::enums::DeploymentDownloadType::Source) // optional
    ).await?;

    let _ = result;

    Ok(())
}
```
