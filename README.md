# Appwrite Specs

[![Discord](https://img.shields.io/discord/564160730845151244?label=discord&style=flat-square)](https://appwrite.io/discord)
[![X (formerly Twitter)](https://img.shields.io/badge/follow-%40appwrite-00acee?logo=x&style=flat-square)](https://x.com/appwrite)

This repository contains the official [Appwrite](https://appwrite.io) API specifications and SDK code examples for all supported versions.

## Structure

```
specs/
  {version}/
    swagger2-{version}-{platform}.json
    open-api3-{version}-{platform}.json
examples/
  {version}/
    {platform}-{sdk}/
      examples/
        {service}/
          {method}.md
```

### Specs

API specification files in [Swagger 2.0](https://swagger.io/specification/v2/) and [OpenAPI 3.0](https://swagger.io/specification/) formats, organized by version and platform:

- **client** - Client-side APIs (web, mobile)
- **server** - Server-side APIs (backend SDKs)
- **console** - Console APIs (Appwrite dashboard)

### Examples

SDK code examples for each supported language, organized by version, platform, and SDK. Each example demonstrates how to call a specific API method using the corresponding Appwrite SDK.

## Available Versions

| Version | Specs | Examples |
|---------|-------|----------|
| latest  | [specs/latest](specs/latest) | - |
| 1.8.x   | [specs/1.8.x](specs/1.8.x) | [examples/1.8.x](examples/1.8.x) |
| 1.7.x   | [specs/1.7.x](specs/1.7.x) | [examples/1.7.x](examples/1.7.x) |
| 1.6.x   | [specs/1.6.x](specs/1.6.x) | [examples/1.6.x](examples/1.6.x) |
| 1.5.x   | [specs/1.5.x](specs/1.5.x) | [examples/1.5.x](examples/1.5.x) |
| 1.4.x   | [specs/1.4.x](specs/1.4.x) | [examples/1.4.x](examples/1.4.x) |
| 1.3.x   | [specs/1.3.x](specs/1.3.x) | [examples/1.3.x](examples/1.3.x) |
| 1.2.x   | [specs/1.2.x](specs/1.2.x) | [examples/1.2.x](examples/1.2.x) |
| 1.1.x   | [specs/1.1.x](specs/1.1.x) | [examples/1.1.x](examples/1.1.x) |
| 1.0.x   | [specs/1.0.x](specs/1.0.x) | [examples/1.0.x](examples/1.0.x) |
| 0.15.x  | [specs/0.15.x](specs/0.15.x) | [examples/0.15.x](examples/0.15.x) |
| 0.14.x  | [specs/0.14.x](specs/0.14.x) | [examples/0.14.x](examples/0.14.x) |
| 0.13.x  | [specs/0.13.x](specs/0.13.x) | [examples/0.13.x](examples/0.13.x) |
| 0.12.x  | [specs/0.12.x](specs/0.12.x) | [examples/0.12.x](examples/0.12.x) |
| 0.11.x  | [specs/0.11.x](specs/0.11.x) | [examples/0.11.x](examples/0.11.x) |
| 0.10.x  | [specs/0.10.x](specs/0.10.x) | [examples/0.10.x](examples/0.10.x) |
| 0.9.x   | [specs/0.9.x](specs/0.9.x) | [examples/0.9.x](examples/0.9.x) |
| 0.8.x   | [specs/0.8.x](specs/0.8.x) | [examples/0.8.x](examples/0.8.x) |
| 0.7.x   | [specs/0.7.x](specs/0.7.x) | [examples/0.7.x](examples/0.7.x) |
| 0.6.x   | [specs/0.6.x](specs/0.6.x) | [examples/0.6.x](examples/0.6.x) |

## Usage

### Importing a Spec

You can use these specs with any OpenAPI-compatible tool. For example, to generate a client using [OpenAPI Generator](https://openapi-generator.tech/):

```bash
# Download the spec
curl -O https://raw.githubusercontent.com/appwrite/specs/main/specs/1.8.x/open-api3-1.8.x-server.json

# Generate a client
openapi-generator generate -i open-api3-1.8.x-server.json -g python -o ./sdk
```

Or import directly into tools like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or [Swagger UI](https://swagger.io/tools/swagger-ui/).

### Referencing Examples

Each example file is a Markdown document showing how to call a specific API method. You can link to them directly from documentation or use them as reference when integrating with Appwrite.

## How Specs Are Generated

Specs and examples are automatically generated from the [appwrite/appwrite](https://github.com/appwrite/appwrite) repository using the `specs` CLI task:

```bash
php app/cli.php specs --version=1.8.x --git=yes --message="Update specs for 1.8.x"
```

This generates the API specification files, regenerates SDK examples for all supported languages, and creates a PR in this repository.

## Contributing

All contributions are welcome! If you find issues with the specs or examples, please open an issue or submit a pull request.

For more information on contributing to Appwrite, see the [Contributing Guide](CONTRIBUTING.md).

## Security

For security issues, please email security@appwrite.io instead of posting a public issue on GitHub.

## Follow Us

Join our growing community around the world! See our official [Blog](https://medium.com/appwrite-io). Follow us on [Twitter](https://twitter.com/appwrite), [Facebook Page](https://www.facebook.com/appwrite.io), [Facebook Group](https://www.facebook.com/groups/appwrite.developers/), [Dev Community](https://dev.to/appwrite) or join our live [Discord server](https://appwrite.io/discord) for more help, ideas, and discussions.

## License

This repository is available under the [BSD 3-Clause License](LICENSE).
