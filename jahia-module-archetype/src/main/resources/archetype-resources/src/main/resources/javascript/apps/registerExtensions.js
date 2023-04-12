window.jahia.i18n.loadNamespaces('${artifactId}');

window.jahia.uiExtender.registry.add('callback', '${artifactId}Example', {
    targets: ['jahiaApp-init:60'],
    callback: function () {
        window.jahia.uiExtender.registry.add('adminRoute', '${artifactId}Example', {
            targets: ['administration-sites:999', '${artifactId}accordion'],
            label: '${artifactId}:label.settings.title',
            icon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            isSelectable: true,
            requireModuleInstalledOnSite: '${artifactId}',
            iframeUrl: window.contextJsParameters.contextPath + '/cms/editframe/default/$lang/sites/$site-key.${artifactId}.html.ajax'
        });

        window.jahia.uiExtender.registry.add('action', '${artifactId}Example', {
            buttonIcon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            buttonLabel: '${artifactId}:label.action.title',
            targets: ['contentActions:999'],
            onClick: context => {
                window.open('https://github.com/Jahia/app-shell/blob/master/docs/declare-new-module.md', "_blank");
            }
        });

        window.jahia.uiExtender.registry.add('accordionItem', '${artifactId}Apps_Example', window.jahia.uiExtender.registry.get('accordionItem', 'renderDefaultApps'), {
            targets: ['jcontent:998'],
            label: '${artifactId}:label.appsAccordion.title',
            icon: window.jahia.moonstone.toIconComponent('<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6V5A2 2 0 0 0 17 3H15A2 2 0 0 0 13 5V6H11V5A2 2 0 0 0 9 3H7A2 2 0 0 0 5 5V6H3V20H21V6M19 18H5V8H19Z" /></svg>'),
            appsTarget: '${artifactId}accordion',
            isEnabled: function(siteKey) {
                return siteKey !== 'systemsite'
            },
            requiredSitePermission: 'additionalAccordionAccess'
        });
    }
});
