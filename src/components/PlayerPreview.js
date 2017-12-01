'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PlayerPreview extends React.Component {

    render() {
        return (
            <div className="player-preview">
                <div id="playerMask" className="player-mask"></div>
                <div className="dark">
                    <span className="dorsal">{this.props.dorsal}</span>
                </div>
                <h2 className="name">{this.props.name}</h2>    
                <p className="long-position">{this.props.longPosition}</p>    
                <img id="playerImage" src={`img/game/${this.props.image}`}/>
            </div>
        );
    }
}


