import React from 'react';
import {LayoutContent} from "@jahia/moonstone";
export const AdminPanel = () => {
    return (<LayoutContent content={(
        <>
            Hello {window.contextJsParameters.currentUser} !
        </>
    )} />);
};
