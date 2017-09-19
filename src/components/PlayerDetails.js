'use strict';

import React from 'react';
import Flag from './Flag';

export default class PlayerDetails extends React.Component {
    render() {
        return (
          <ul className="player-details">
              <li className="player-detail">
                  <span className="team">{this.props.player.team}</span>
              </li>
              <li className="player-detail">
                  <span className="position">{this.props.player.position}</span>
              </li>
              <li className="player-detail">
                  <span className="dorsal">{this.props.player.dorsal}</span>
              </li>
              <li className="player-detail">
                  <span className="age">{this.props.player.age}</span>
              </li>
              <li className="player-detail">
                  <span className="height">{this.props.player.height}</span>
              </li>
              <li className="player-detail">
                  <span className="weight">{this.props.player.weight}</span>
              </li>
              <li className="player-detail">
                  <span className="country"><Flag code={this.props.player.nationality} showName="false"/>{this.props.player.country}</span>
              </li>
              <li className="player-detail">
                  <span className="college">{this.props.player.college}</span>
              </li>
          </ul>  
        );
    }
}