import React from 'react';
import Helmet from 'react-helmet';

interface Params {
    children: any
    title?: string
}

const Page: React.FC<Params> = ({children, title}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </>
    );
};


export default Page;