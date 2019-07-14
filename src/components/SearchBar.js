import React, { Component } from "react";

class SearchBar extends Component {
  state = { userQuery: "" };

  onInputChange = e => {
    this.setState({ userQuery: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    //Make sure we call callback from parent component
    this.props.onQuerySubmit(this.state.userQuery);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.userQuery}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
