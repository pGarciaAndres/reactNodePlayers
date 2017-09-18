'use strict';

import React from 'react';

export default class PlayerDetails extends React.Component {
    render() {
        return (
          <ul className="player-details">
              <li className="player-detail">
                  <span className="team">{this.props.team}</span>
              </li>
              <li className="player-detail">
                  <span className="position">{this.props.position}</span>
              </li>
              <li className="player-detail">
                  <span className="dorsal">{this.props.dorsal}</span>
              </li>
              <li className="player-detail">
                  <span className="age">{this.props.age}</span>
              </li>
              <li className="player-detail">
                  <span className="height">{this.props.height}</span>
              </li>
              <li className="player-detail">
                  <span className="weight">{this.props.weight}</span>
              </li>
              <li className="player-detail">
                  <span className="country">{this.props.country}</span>
              </li>
              <li className="player-detail">
                  <span className="college">{this.props.college}</span>
              </li>
          </ul>  
        );
    }
}