# maven-archetypes Changelog

## 5.0.0

### Breaking Changes

* Update the JS archetype to use Vite instead of webpack. (#41)

### New Features

* The React UI extension archetype targets app-shell 4: the generated module declares `app-shell=4.0` in `<jahia-depends>`, sorts its libraries into `peerDependencies` and `dependencies` for `@jahia/vite-federation-plugin` 0.2, and passes its children to the Moonstone layout.

### Bug Fixes

* Added maven.jahia.com to the Maven repositories of the projects generated from the Jahia archetypes.
