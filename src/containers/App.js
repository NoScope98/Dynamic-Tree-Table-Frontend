import { connect } from "react-redux";
import App from "../components/App";
import { fetchRoot } from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    isFetching: store.properties.isFetching,
    selectedNode: store.properties.selectedNode,
    nodes: store.nodes,
    formData: store.form,
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
