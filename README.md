Jahia Maven Archetypes
======================

This repository contains [Maven Archetypes](https://maven.apache.org/guides/introduction/introduction-to-archetypes.html) to help get started with projects. 

You can find the documentation on how to use these archetypes on the [Jahia Academy](https://academy.jahia.com).

Available archetypes
--------------------

- jahia-module-archetype : used to create a generic Jahia server module that can contain content definitions and views as well as Java code
- jahia-reactjs-admin-module-archetype : used to create Jahia server ReactJS Administration UI extension projects
- jahia-templatesSet-archetype : used to create Jahia server templates sets for styling the site and the pages

All archetypes accept a `jahiaVersion` property, which sets the `jahia-modules` parent version of the generated project.
For `jahia-reactjs-admin-module-archetype`, the minimum supported value is `8.2.1.0` (it defaults to `8.2.3.0`): the
generated module relies on module federation fixes that are not present in earlier Jahia releases.

Quick example
-------------

mvn archetype:generate -DarchetypeGroupId=org.jahia.archetypes -DarchetypeArtifactId=jahia-reactjs-admin-module-archetype -DarchetypeVersion=4.3
