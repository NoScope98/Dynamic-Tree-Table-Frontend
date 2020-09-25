import { connect } from "react-redux";
import App from "../components/App";
import { loadRoot, fetchRoot } from "../actions/node";

const mapStateToProps = (store) => {
  return {
    isFetching: store.properties.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadRootButtonClick: () => {
      dispatch(fetchRoot());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
