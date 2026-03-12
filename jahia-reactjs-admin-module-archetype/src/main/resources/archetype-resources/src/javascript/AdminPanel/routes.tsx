import { DefaultEntry } from "@jahia/moonstone";
import { registry } from "@jahia/ui-extender";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import { AdminPanel } from "./AdminPanel.tsx";

export const registerRoutes = async () => {
  await i18n.loadNamespaces("${artifactId}");

  registry.add("adminRoute", "${artifactId}", {
    targets: ["administration-server:10"],
    icon: <DefaultEntry />,
    label: "${artifactId}:label",
    path: `*`, // Catch everything and let the app handle routing logic
    defaultPath: "",
    isSelectable: true,
    render: () => (
      <I18nextProvider i18n={i18n} defaultNS="${artifactId}">
        <AdminPanel />
      </I18nextProvider>
    ),
  });

  console.debug("%c ${artifactId} is activated", "color: #3c8cba");
};
