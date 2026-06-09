```rust
use appwrite::Client;
use appwrite::services::Avatars;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    client.set_endpoint("https://<REGION>.cloud.appwrite.io/v1"); // Your API Endpoint
    client.set_project("<YOUR_PROJECT_ID>"); // Your project ID
    client.set_session(""); // The user session to authenticate with
    client.set_impersonate_user_id(""); // Impersonate a user by ID on an already user-authenticated request. Requires the current request to be authenticated as a user with impersonator capability; X-Appwrite-Key alone is not sufficient. Impersonator users are intentionally granted users.read so they can discover a target before impersonation begins. Internal audit logs still attribute actions to the original impersonator and record the impersonated target only in internal audit payload data.

    let avatars = Avatars::new(&client);

    let result = avatars.get_initials(
        Some("<NAME>"), // optional
        Some(0), // optional
        Some(0), // optional
        Some("") // optional
    ).await?;

    let _ = result;

    Ok(())
}
```
