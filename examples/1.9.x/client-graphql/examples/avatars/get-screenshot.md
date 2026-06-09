```graphql
query {
    avatarsGetScreenshot(
        url: "https://example.com",
        headers: "{\"Authorization\":\"Bearer token123\",\"X-Custom-Header\":\"value\"}",
        viewportWidth: 1920,
        viewportHeight: 1080,
        scale: 2,
        theme: "dark",
        userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15",
        fullpage: true,
        locale: "en-US",
        timezone: "America/New_York",
        latitude: 37.7749,
        longitude: -122.4194,
        accuracy: 100,
        touch: true,
        permissions: ["geolocation","notifications"],
        sleep: 3,
        width: 800,
        height: 600,
        quality: 85,
        output: "jpeg"
    ) {
        status
    }
}
```
