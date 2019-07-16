import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube.js";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("shirts");
  }

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

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        {/* custom event handlers can be passed as props with any name you choose when submitted */}
        <SearchBar onQuerySubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
