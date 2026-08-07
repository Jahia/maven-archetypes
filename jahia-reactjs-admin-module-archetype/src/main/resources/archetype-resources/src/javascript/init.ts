import { registry } from "@jahia/ui-extender";
import { registerRoutes } from "./AdminPanel/routes.tsx";

export default function () {
  registry.add("callback", "${artifactId}", {
    targets: ["jahiaApp-init:2"],
    callback: registerRoutes,
  });
}
