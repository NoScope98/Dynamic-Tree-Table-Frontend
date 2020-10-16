import { connect } from "react-redux";
import NodeList from "../components/NodeList";
import {
  fetchChildren,
  mouseEnterNode,
  mouseLeaveNode,
  selectedNode,
  destroyNode,
  addChild,
  changeModalInput,
} from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    nodes: store.nodes,
    overNode: store.properties.overNode,
    serverError: store.properties.serverErrors.add,
    isAddFormValid: store.validation.addForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTreeItemClick: (id) => {
      dispatch(fetchChildren(id));
    },
    onSelected: (node) => {
      dispatch(selectedNode(node));
    },
    onMouseEnterNode: (name) => {
      dispatch(mouseEnterNode(name));
    },
    onMouseLeaveNode: () => {
      dispatch(mouseLeaveNode());
    },
    onDeleteNodeButtonClick: (id, parentId) => {
      dispatch(destroyNode(id, parentId));
    },
    onAddChildButtonClick: (newChild) => {
      dispatch(addChild(newChild));
    },
    onModalInputChange: (targetName, value) => {
      dispatch(changeModalInput(targetName, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
