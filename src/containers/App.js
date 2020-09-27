import { connect } from "react-redux";
import App from "../components/App";
import { addChild, fetchRoot, destroyNode } from "../actions/actions";

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
    onAddChildButtonClick: (parentId, newChild) => {
      dispatch(addChild(parentId, newChild));
    },
    onDeleteNodeButtonClick: (id, parentId) => {
      dispatch(destroyNode(id, parentId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
