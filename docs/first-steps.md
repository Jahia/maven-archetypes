---
page:
  '$path': /sites/academy/home/documentation/jahia/8_2/developer/extending-and-customizing-jahia-ui/extending-jahia-ui
  'jcr:title': 'First steps'
  'j:templateName': 'documentation'
content:
  $subpath: document-area/content
---

This page shows how to create a UI extension module from the Jahia React archetype, and how to build and deploy it. The module adds a page to the Jahia Administration. For the concepts behind a UI extension, read [Jahia UI under the hood](/cms/{mode}/{lang}/sites/academy/home/documentation/jahia/8_2/developer/extending-and-customizing-jahia-ui/jahia-ui-under-the-hood.html) and [Understanding UI extension projects](/cms/{mode}/{lang}/sites/academy/home/documentation/jahia/8_2/developer/extending-and-customizing-jahia-ui/understanding-ui-extension-projects.html).

## Requirements

The module is built with [Vite](https://vite.dev/), and it needs app-shell 4.0 or later, because app-shell 3 cannot load a module built with Vite. Your Jahia instance needs:

- Jahia 8.2.2.0 or later.
- app-shell 4.0 or later. Jahia 8.2.2 and 8.2.3 include app-shell 3, so install app-shell 4 from the [Jahia Store](https://store.jahia.com/) before you deploy the module.

Your machine needs:

- Java 17 or later.
- Maven 3.
- Node.js 20.19 or later. On Node.js 22, use 22.12 or later.
- Yarn 4.

The generated project contains a `mise.toml` file. If you use [mise](https://mise.jdx.dev/), run `mise install` in the project folder to install these tools.

## Create the module

Run this command, and answer the questions that Maven asks:

```bash
mvn archetype:generate -DarchetypeGroupId=org.jahia.archetypes -DarchetypeArtifactId=jahia-reactjs-admin-module-archetype -DarchetypeVersion=5.0.0
```

Maven asks for these properties:

- `groupId`: the Maven group of the module, for example `org.acme`.
- `artifactId`: the name of the module, for example `acme`. The generated code also uses this name for the registry keys and the translation namespace.
- `version`: the version of the module. The default value is `0.1.0-SNAPSHOT`.
- `package`: Maven asks for a Java package, but the archetype contains no Java code. Keep the default value.
- `jahiaVersion`: the version of the `jahia-modules` parent POM. Use the version of your Jahia instance. The default value is `8.2.3.0`, and the oldest supported value is `8.2.2.0`.

To skip the questions, add `-B` to the command and give each property with `-D`, for example `-DgroupId=org.acme -DartifactId=acme`. Maven creates the project in a new folder with the name of the `artifactId`.

## Project structure

The archetype creates these files:

- `pom.xml`: the Maven project of the module. During the build, it runs `yarn install` and `yarn build`. It declares `app-shell=4.0` in `<jahia-depends>`, so Jahia does not start the module on an older app-shell.
- `package.json`: the JavaScript dependencies and the build scripts.
- `vite.config.ts`: the Vite configuration. The `@jahia/vite-federation-plugin` plugin exposes `src/javascript/init.ts` to the app-shell as the `./init` entry.
- `src/javascript/init.ts`: the entry point of the module.
- `src/javascript/AdminPanel/routes.tsx`: the code that adds the page to the Administration.
- `src/javascript/AdminPanel/AdminPanel.tsx`: the React component of the page.
- `src/main/resources/javascript/locales/`: the English and French translations of the page.
- `tsconfig.json`: the TypeScript configuration.

The `@jahia/vite-federation-plugin` plugin reads the three dependency sections of `package.json`:

- `peerDependencies`: the libraries that the app-shell provides, such as `react`, `i18next` and `@jahia/ui-extender`. The build does not bundle them, and the module uses the copy of the app-shell.
- `dependencies`: the other libraries that the module uses at runtime, such as `@jahia/moonstone`. The build bundles them, and shares them with the other modules.
- `devDependencies`: the build tools, the types, and one fixed version of each peer dependency. The module builds against these versions.

If a library that the app-shell provides is in `dependencies`, the build fails and gives the name of the library.

## Build the module

In the project folder, run:

```bash
mvn clean install
```

Maven runs `yarn install`, then `yarn build`. The `yarn build` script checks the types with `tsc`, then Vite builds the JavaScript into `src/main/resources/javascript/apps/`. Maven packages the module as `target/<artifactId>-<version>.jar`, for example `target/acme-0.1.0-SNAPSHOT.jar`.

## Deploy the module

Before you deploy the module, make sure that app-shell 4.0 or later is started on your Jahia instance. On an older app-shell, Jahia does not start the module.

To deploy the module, use one of these methods:

- In Jahia, go to **Administration** > **Server** > **Modules and Extensions** > **Modules**, and upload the JAR file.
- If Jahia runs in a Docker container, copy the JAR file to `/var/jahia/modules` in the container. Jahia deploys the module from that folder.

```bash
docker cp target/acme-0.1.0-SNAPSHOT.jar <container>:/var/jahia/modules
```

## Open the new page

1. In Jahia, go to **Administration**.
2. In the **Server** accordion, select **Administration sample**.

The page shows the header "Hello root!", with the name of the current user, and a paragraph of sample text. Change `AdminPanel.tsx` to show your own content, then build and deploy the module again.

## How the module connects to Jahia

The app-shell loads the module, then the module adds its page to the registry of the Jahia UI:

1. Vite writes `remoteEntry.js` and a `package.json` file to `src/main/resources/javascript/apps/`. The app-shell reads this `package.json` file to find `remoteEntry.js`, and loads the module from it.
2. The app-shell runs the default export of `init.ts`. This function adds a `callback` item to the registry, with the target `jahiaApp-init:2`.
3. When the Jahia UI starts, it runs the `registerRoutes` callback. This callback loads the translations, then adds an `adminRoute` item with the target `administration-server:10`.
4. The `administration-server` target puts the page in the **Server** accordion of the Administration. The number after the colon sets the order of the item in the accordion.

For more about the registry and its targets, read [Understanding Jahia's component registry](/cms/{mode}/{lang}/sites/academy/home/documentation/jahia/8_2/developer/extending-and-customizing-jahia-ui/understanding-jahia-s-component-registry.html) and [Adding settings pages](/cms/{mode}/{lang}/sites/academy/home/documentation/jahia/8_2/developer/extending-and-customizing-jahia-ui/settings-pages.html).

## Modules built with webpack

Versions 4.x of the archetypes generate a module built with webpack, for app-shell 3. If your Jahia instance must keep app-shell 3, use `-DarchetypeVersion=4.8` in the command of [Create the module](#create-the-module).
