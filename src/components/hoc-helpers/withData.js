import React, { Component } from "react";

import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const withData = View => {
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

    updateData = () => {
      this.setState({ loading: true, hasError: false }, () => {
        this.props
          .getData(this.props.itemId)
          .then(this.onGetData)
          .catch(this.onError);
      });
    };

    componentDidMount() {
      this.updateData();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateData();
      }
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
