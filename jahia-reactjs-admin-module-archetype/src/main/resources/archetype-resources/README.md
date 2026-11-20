# Welcome!

Your edition UI extension module was successfully created. If this is your first time creating a module, you may want to consult the [Extending and customizing Jahia UI documentation](https://academy.jahia.com/documentation/jahia-cms/jahia-8.2/developer/extending-and-customizing-jahia-ui/first-steps).

This README assumes you have a working development environment with:

- Maven 3+
- Java 17+
- NodeJS 20.19+ or 22.12+
- Yarn 4+

The module is built with Vite, so it needs app-shell 4.0 or later in your Jahia instance. Its `pom.xml` declares `app-shell=4.0` in `<jahia-depends>`, so Jahia refuses to start it on an older app-shell.

The easiest way to install and manage development tools per-project instead of globally is to use [Mise](https://mise.jdx.dev/). This project includes a `mise.toml` file, run `mise install` to get a functional development environment in a few seconds.

## Getting Started

The easiest way to get a running Jahia instance locally is by using the [Jahia Discovery Docker image](https://hub.docker.com/r/jahia/jahia-discovery):

```bash
# Pull the latest image
docker pull jahia/jahia-discovery:latest

# Run it on port 8080
docker run --name jahia-discovery -dp 8080:8080 jahia/jahia-discovery:latest

# Build your module
mvn clean verify

# Push the module to the running instance
docker cp target/${artifactId}-${version}.jar jahia-discovery:/var/jahia/modules
```

Your local Jahia instance will be running on <http://localhost:8080/start> and you can log in using the `root`/`root1234` credentials.
