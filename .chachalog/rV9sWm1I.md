---
# Allowed version bumps: patch, minor, major
maven-archetypes: minor
---

The React UI extension archetype targets app-shell 4: the generated module declares `app-shell=4.0` in `<jahia-depends>`, sorts its libraries into `peerDependencies` and `dependencies` for `@jahia/vite-federation-plugin` 0.2, and passes its children to the Moonstone layout.
