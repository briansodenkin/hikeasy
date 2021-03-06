/**
 * Search Bar Component
 * Default search bar for the website.
 */

import React, { Component } from "react";
import SearchBar from "material-ui-search-bar";
import "./SearchBarComponent.css";
import styled from "styled-components";

class SearchBarComponent extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }

  render() {
    const StyledSearchBar = styled(SearchBar)`
      // max-width: 40em !important;
      // border-radius: 0.6em !important;
      // box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
      //   0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
      //   0 -6px 16px -6px hsla(0, 0%, 0%, 0.03) !important;
      // transition: all ease 200ms;
    `;

    return (
      <StyledSearchBar
        value={this.state.keyword}
        onChange={(newValue) => this.setState({ keyword: newValue })}
        onRequestSearch={() => console.log(this.state.keyword)}
        style={{
          margin: "0 auto",
          maxWidth: 800,
        }}
      />
    );
  }
}

export default SearchBarComponent;
