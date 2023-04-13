import React from 'react';
import {LayoutContent} from "@jahia/moonstone";
import {useTranslation} from 'react-i18next';
export const AdminPanel = () => {
    const {t} = useTranslation('${artifactId}');

    return (<LayoutContent content={(
        <>
            {t('${artifactId}.hello')} {window.contextJsParameters.currentUser} !
        </>
    )} />);
};
