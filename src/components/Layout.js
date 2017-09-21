'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        const backgroundStyle = { backgroundImage: `url(/img/background-red.png)` };
        return (
            <div className="app-container" style={backgroundStyle}>
                <header>
                    <Link to="/">
                        <img className="logo" src="/img/logo.png"/>
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        Select a <strong>player</strong> from the roster to view his detail.
                    </p>
                </footer>
            </div>
        );
    }
}