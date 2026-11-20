Jahia Maven Archetypes
======================

This repository contains [Maven Archetypes](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html) to help get started with projects. 

You can find the documentation on how to use these archetypes on the [Jahia Academy](https://academy.jahia.com).

Available archetypes
--------------------

- jahia-module-archetype : used to create a generic Jahia server module that can contain content definitions and views as well as Java code
- jahia-reactjs-admin-module-archetype : used to create a React UI extension, built with Vite, that adds a page to the Jahia administration
- jahia-templatesSet-archetype : used to create Jahia server templates sets for styling the site and the pages

All archetypes accept a `jahiaVersion` property, which sets the `jahia-modules` parent version of the generated project.
For `jahia-reactjs-admin-module-archetype`, the minimum supported value is `8.2.2.0` (it defaults to `8.2.3.0`).

The module that `jahia-reactjs-admin-module-archetype` generates needs app-shell 4.0 or later on the Jahia instance,
because app-shell 3 cannot load a module built with Vite. Version 4.x of the archetypes generates a module built with
webpack, for app-shell 3.

Quick example
-------------

```bash
mvn archetype:generate -DarchetypeGroupId=org.jahia.archetypes -DarchetypeArtifactId=jahia-reactjs-admin-module-archetype -DarchetypeVersion=5.0.0
```
