# Welcome!

Your edition UI extension module was successfully created. If this is your first time creating a module, you may want to consult the [Extending and customizing Jahia UI documentation](https://academy.jahia.com/documentation/jahia-cms/jahia-8.2/developer/extending-and-customizing-jahia-ui/first-steps).

This README assusmes you have a working development environment with:

- Maven 3+
- Java 17+
- A recent version of NodeJS
- Yarn 4+

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
