'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PlayerPreview extends React.Component {
    render() {
        return (
            <Link to={'/player/${this.props.id}'}>
                <div className="player-preview">
                    <img src={'img/${this.props.image}'}/>
                    <h2 className="name">{this.props.name}</h2>
                    <span className="position">{this.props.position}</span>
                </div>
            </Link>
        );
    }
}