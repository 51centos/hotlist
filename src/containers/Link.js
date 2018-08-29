import React, { Component } from 'react';
import { Redirect } from 'react-router';
import queryString from 'query-string';

import LoadingPage from '../components/LoadingPage';

class Link extends Component {
  constructor(props) {
    super(props);

    const { target } = queryString.parse(props.location.search);

    this.state = {
      target
    };
  }

  componentWillMount() {
    const { target } = this.state;

    if (target) {
      window.location.href = target;
    }
  }

  render() {
    const { target } = this.state;

    if (target) {
      return <LoadingPage />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default Link;
