# Appwrite Specs

[![Discord](https://img.shields.io/discord/564160730845151244?label=discord&style=flat-square)](https://appwrite.io/discord)
[![X (formerly Twitter)](https://img.shields.io/badge/follow-%40appwrite-00acee?logo=x&style=flat-square)](https://x.com/appwrite)

This repository contains the official [Appwrite](https://appwrite.io) API specifications and SDK code examples for all supported versions.

## Structure

```
specs/
  {version}/
    open-api3-{version}.json               # 2.0.x and later: one document, all platforms
    open-api3-{version}-{platform}.json    # up to 1.9.x
    swagger2-{version}-{platform}.json     # up to 1.8.x
examples/
  {version}/
    {platform}-{sdk}/
      examples/
        {service}/
          {method}.md
```

### Specs

API specification files in [Swagger 2.0](https://swagger.io/specification/v2/) and [OpenAPI 3.0](https://swagger.io/specification/) formats, organized by version. From 2.0.x there is one OpenAPI 3 document per version; each operation, method alias and security scheme lists the SDK platforms it is available on under `x-appwrite.platforms`. Older versions ship one document per platform:

- **client** - Client-side APIs (web, mobile)
- **server** - Server-side APIs (backend SDKs)
- **console** - Console APIs (Appwrite dashboard)

### Examples

SDK code examples for each supported language, organized by version, platform, and SDK. Each example demonstrates how to call a specific API method using the corresponding Appwrite SDK.

## Available Versions

| Version | Specs | Examples |
|---------|-------|----------|
| latest  | [specs/latest](specs/latest) | - |
| 2.3.x   | [specs/2.3.x](specs/2.3.x) | [examples/2.3.x](examples/2.3.x) |
| 2.2.x   | [specs/2.2.x](specs/2.2.x) | [examples/2.2.x](examples/2.2.x) |
| 2.1.x   | [specs/2.1.x](specs/2.1.x) | [examples/2.1.x](examples/2.1.x) |
| 2.0.x   | [specs/2.0.x](specs/2.0.x) | [examples/2.0.x](examples/2.0.x) |
| 1.9.x   | [specs/1.9.x](specs/1.9.x) | [examples/1.9.x](examples/1.9.x) |
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
curl -O https://raw.githubusercontent.com/appwrite/specs/main/specs/2.3.x/open-api3-2.3.x.json

# The document covers every platform. Keep the operations available to one of
# them (client, server or console) by filtering on x-appwrite.platforms.
jq --arg platform server '
  .paths |= (map_values(with_entries(select(.value["x-appwrite"].platforms | index($platform))))
    | with_entries(select(.value | length > 0)))
' open-api3-2.3.x.json > open-api3-2.3.x-server.json

# Generate a client
openapi-generator generate -i open-api3-2.3.x-server.json -g python -o ./sdk
```

Or import directly into tools like [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/), or [Swagger UI](https://swagger.io/tools/swagger-ui/).

### Referencing Examples

Each example file is a Markdown document showing how to call a specific API method. You can link to them directly from documentation or use them as reference when integrating with Appwrite.

## How Specs Are Generated

Specs and examples are generated from the [appwrite/appwrite](https://github.com/appwrite/appwrite) codebase using the `specs` CLI task:

```bash
php app/cli.php specs --version=2.3.x --git=yes --message="Update specs for 2.3.x"
```

The task writes the API specification for that version, regenerates SDK examples for every supported language, and opens a PR in this repository. Releases run it through Appwrite's deployment automation rather than by hand, which is why the PRs here are authored by a bot.

Each version is generated from the code that shipped it, so a document keeps the vendor extensions of its own release. `x-appwrite.config` on an operation, for example, appears from 2.2.x onwards; earlier versions state the same binding with a `ProjectPath` security scheme.

## Contributing

All contributions are welcome! If you find issues with the specs or examples, please open an issue or submit a pull request.

For more information on contributing to Appwrite, see the [Contributing Guide](CONTRIBUTING.md).

## Security

For security issues, please email security@appwrite.io instead of posting a public issue on GitHub.

## Follow Us

Join our growing community around the world! See our official [Blog](https://medium.com/appwrite-io). Follow us on [Twitter](https://twitter.com/appwrite), [Facebook Page](https://www.facebook.com/appwrite.io), [Facebook Group](https://www.facebook.com/groups/appwrite.developers/), [Dev Community](https://dev.to/appwrite) or join our live [Discord server](https://appwrite.io/discord) for more help, ideas, and discussions.

## License

This repository is available under the [BSD 3-Clause License](LICENSE).
