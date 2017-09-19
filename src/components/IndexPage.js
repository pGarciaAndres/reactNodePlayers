'use strict';

import React from 'react';
import PlayerPreview from './PlayerPreview';
import players from '../data/players';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="players-selector">
                    {players.map(playerData => <PlayerPreview key={playerData.id} {...playerData} />)}
                </div>
            </div>
        );
    }
}