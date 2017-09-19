'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import PlayerDetail from './PlayerDetail';
import Flag from './Flag';
import players from '../data/players';

export default class PlayerPage extends React.Component {
    render() {
        const id = this.props.params.id;
        const player = players.filter((player) => player.id === id)[0];
        if (!player) {
            return <NotFoundPage/>;
        }
        const headerStyle = { backgroundImage: 'url(/img/${player.cover})' };
        return (
            <div className="player-full">
                <div className="player">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <h2 className="name">{player.name}</h2>
                    </div>
                    <section className="details-container">
                        <PlayerDetail player={player}/>
                    </section>
                </div>
                <div className="navigateBack">
                    <Link to="/">« Back to the roster</Link>
                </div>
            </div>
        );
    }
}