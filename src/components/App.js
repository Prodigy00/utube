import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  onSearchSubmit = async userQuery => {
    const KEY = "AIzaSyAsB7jWvMJcT2IMkQon-XWEOZ7-Lp8yM0E";
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        q: userQuery,
        key: KEY,
        maxResults: 5
      }
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        {/* custom event handlers can be passed as props with any name you choose when submitted */}
        <SearchBar onQuerySubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
