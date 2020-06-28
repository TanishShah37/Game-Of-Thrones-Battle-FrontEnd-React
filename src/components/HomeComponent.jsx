
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchComponent from './SearchComponent';
import BattleTableDataComponent from './BattleTableDataComponent';


class HomeComponent extends Component {
  render() {
    return (
      <div className="container d-flex flex-column">
        <div className="headtitle align-self-center my-3">
          <h4>GAME OF THRONES BATTLE</h4>
        </div>
        <SearchComponent />
        {this.props.battles.length > 0 ? (
          <BattleTableDataComponent battles={this.props.battles} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  battles: state.battlecards.battles,
});

export default connect(mapStateToProps)(HomeComponent);
