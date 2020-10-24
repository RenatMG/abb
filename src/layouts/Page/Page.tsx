import React from 'react';
import Helmet from 'react-helmet';

interface Params {
    children: any,
    title?: string,
}

const Page = ({children, title, ...rest}: Params) => {
    return (
        <div {...rest} >
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};


export default Page;