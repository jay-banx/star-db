import React, { Component } from "react";

import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      hasError: false,
    };

    onGetData = (data) => {
      this.setState({ data, loading: false });
    };

    onError = () => {
      this.setState({
        hasError: true,
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
      if (
        this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData
      ) {
        this.updateData();
      }
    }

    render() {
      const { data, loading, hasError } = this.state;

      if (loading) {
        return <Spinner />;
      }

      if (hasError) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
