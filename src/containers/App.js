import { connect } from "react-redux";
import App from "../components/App";
import { fetchRoot, showTree, fetchAllNodes } from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    isFetching: store.properties.isFetching,
    selectedNode: store.properties.selectedNode,
    nodes: store.nodes,
    formData: store.form,
    viewTree: store.properties.viewTree,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadRootButtonClick: () => {
      dispatch(fetchRoot());
    },
    onShowTreeButtonClick: () => {
      dispatch(showTree());
    },
    onShowTableButtonClick: () => {
      dispatch(fetchAllNodes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
