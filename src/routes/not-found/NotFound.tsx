import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';

import s from './NotFound.scss';

interface NotFoundProps {
    title: string;
}

const NotFound: React.FC<NotFoundProps> = ({ title }) => {
    useStyles(s);

    return (
        <div className={s.root}>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>Sorry, the page you were trying to view does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;
