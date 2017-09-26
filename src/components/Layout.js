'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        const backgroundStyle = { backgroundImage: `url(/img/background-red.png)` };
        return (
            <div className="app-container" style={backgroundStyle}>
                <header></header>
                <div className="app-content">{this.props.children}</div>
                <footer></footer>
            </div>
        );
    }
}