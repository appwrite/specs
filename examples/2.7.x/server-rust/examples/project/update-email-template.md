```rust
use appwrite::Client;
use appwrite::services::Project;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    client.set_endpoint("https://<REGION>.cloud.appwrite.io/v1"); // Your API Endpoint
    client.set_project("<YOUR_PROJECT_ID>"); // Your project ID
    client.set_key("<YOUR_API_KEY>"); // Your secret API key

    let project = Project::new(&client);

    let result = project.update_email_template(
        appwrite::enums::ProjectEmailTemplateId::Verification,
        Some(appwrite::enums::ProjectEmailTemplateLocale::Af), // optional
        Some("<SUBJECT>"), // optional
        Some("<MESSAGE>"), // optional
        Some("<SENDER_NAME>"), // optional
        Some("email@example.com"), // optional
        Some("email@example.com"), // optional
        Some("<REPLY_TO_NAME>") // optional
    ).await?;

    let _ = result;

    Ok(())
}
```
