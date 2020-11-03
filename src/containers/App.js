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

const actionCreators = {
  onLoadRootButtonClick: fetchRoot,
  onShowTreeButtonClick: showTree,
  onShowTableButtonClick: fetchAllNodes,
};

export default connect(mapStateToProps, actionCreators)(App);
