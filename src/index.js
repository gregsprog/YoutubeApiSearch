// Says to find library called react and assign to variable React
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

//From current directory (./) go into components folder, find file search_bar
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyDyaBH5-6yUGGEdZgP44fQYDyjUEabUTBk";

// Create a new component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboard" }, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
    });
      // same as saying this.setState({ videos: videos }); (works when key & value are the same)
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        videos={this.state.videos} />
      </div>
    );
  }
}

// <VideoDetail video={this.state.videos[0]} /> old
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
//ReactDOM.render(componenent to render,location on dom)
