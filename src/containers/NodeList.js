import { connect } from "react-redux";
import NodeList from "../components/NodeList";
import {
  fetchChildren,
  mouseEnterNode,
  mouseLeaveNode,
  selectedNode,
  destroyNode,
  addChild,
} from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    nodes: store.nodes,
    overNode: store.properties.overNode,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
