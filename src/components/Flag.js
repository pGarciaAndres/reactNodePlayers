'use strict';

import React from 'react';

const data = {
    'us': {
        'name': 'United States',
        'icon': 'flag-us.png'
    },
    'es': {
        'name': 'Spain',
        'icon': 'flag-es.png'
    }
};

export default class Flag extends React.Component {
    render() {
        const name = data[this.props.code].name;
        const icon = data[this.props.code].icon;
        return (
            <span className="flag">
                <img className="icon" title={name} src={`/img/flags/${icon}`}/>
                {this.props.showName===true && <span className="name"> {name}</span>}
            </span>
        );
    }
}