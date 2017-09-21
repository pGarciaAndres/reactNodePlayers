'use strict';

import React from 'react';
import Flag from './Flag';

export default class PlayerDetails extends React.Component {
    render() {
        return (
          <ul className="player-details">
              <li className="player-detail">
                  <span className="team">Team: {this.props.player.team}</span>
              </li>
              <li className="player-detail">
                  <span className="position">Position: {this.props.player.position}</span>
              </li>
              <li className="player-detail">
                  <span className="dorsal">Dorsal: {this.props.player.dorsal}</span>
              </li>
              <li className="player-detail">
                  <span className="age">Age: {this.props.player.age}</span>
              </li>
              <li className="player-detail">
                  <span className="height">Height: {this.props.player.height}</span>
              </li>
              <li className="player-detail">
                  <span className="weight">Weight: {this.props.player.weight}</span>
              </li>
              <li className="player-detail">
                  <span className="country">From: <Flag code={this.props.player.nationality} showName="true"/> {this.props.player.country}</span>
              </li>
              <li className="player-detail">
                  <span className="college">College: {this.props.player.college}</span>
              </li>
          </ul>  
        );
    }
}