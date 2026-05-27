```kotlin
import io.appwrite.Client
import io.appwrite.coroutines.CoroutineCallback
import io.appwrite.services.Sites
import io.appwrite.enums.SiteFramework
import io.appwrite.enums.SiteBuildRuntime
import io.appwrite.enums.SiteAdapter

val client = Client()
    .setEndpoint("") // Your API Endpoint
    .setProject("<YOUR_PROJECT_ID>") // Your project ID
    .setKey("<YOUR_API_KEY>") // Your secret API key

val sites = Sites(client)

val response = sites.update(
    siteId = "<SITE_ID>",
    name = "<NAME>",
    framework = SiteFramework.ANALOG,
    enabled = false, // optional
    logging = false, // optional
    timeout = 1, // optional
    installCommand = "<INSTALL_COMMAND>", // optional
    buildCommand = "<BUILD_COMMAND>", // optional
    startCommand = "<START_COMMAND>", // optional
    outputDirectory = "<OUTPUT_DIRECTORY>", // optional
    buildRuntime = SiteBuildRuntime.NODE_14_5, // optional
    adapter = SiteAdapter.STATIC, // optional
    fallbackFile = "<FALLBACK_FILE>", // optional
    installationId = "<INSTALLATION_ID>", // optional
    providerRepositoryId = "<PROVIDER_REPOSITORY_ID>", // optional
    providerBranch = "<PROVIDER_BRANCH>", // optional
    providerSilentMode = false, // optional
    providerRootDirectory = "<PROVIDER_ROOT_DIRECTORY>", // optional
    providerBranches = listOf(), // optional
    providerPaths = listOf(), // optional
    buildSpecification = "", // optional
    runtimeSpecification = "", // optional
    deploymentRetention = 0 // optional
)
```
