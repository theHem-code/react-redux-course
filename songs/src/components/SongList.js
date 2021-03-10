import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"; // actually just an import of a normal js function

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

// function to connect with the dispatch function to change the state
                                     //action creator
export default connect(mapStateToProps, { selectSong })(SongList);

// ...could also be written like connect(mapStateToProps, {selectSong: selectSong})(SongList);
