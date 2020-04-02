import React, { Component } from "react";

import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false
    };

    onGetData = data => {
      this.setState({ data, loading: false });
    };

    onError = () => {
      this.setState({
        hasError: true
      });
    };

    componentDidMount() {
      this.setState({ loading: true, hasError: false }, () => {
        getData()
          .then(this.onGetData)
          .catch(this.onError);
      });
    }

    render() {
      const { data, loading, hasError } = this.state;

      const hasData = !(loading || hasError);

      const errorMessage = hasError ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const view = hasData ? <View {...this.props} data={data} /> : null;
      return (
        <React.Fragment>
          {errorMessage}
          {spinner}
          {view}
        </React.Fragment>
      );
    }
  };
};

export default withData;
