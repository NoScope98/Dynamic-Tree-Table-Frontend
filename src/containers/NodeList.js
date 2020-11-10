import { connect } from "react-redux";
import NodeList from "../components/NodeList";
import { selectedNode, changeModalInput, resetModalInput } from "../store/form";
import { mouseEnterNode, mouseLeaveNode } from "../store/properties";
import { fetchChildren, destroyNode, addChild } from "../store/node";

import { getTreeFromNodes } from "../selectors/index";

const mapStateToProps = (store) => {
  return {
    nodes: getTreeFromNodes(store),
    overNode: store.properties.overNode,
    serverError: store.properties.serverErrors.add,
    formData: store.form.addForm,
  };
};

const actionCreators = {
  onTreeItemClick: fetchChildren,
  onMouseEnterNode: mouseEnterNode,
  onMouseLeaveNode: mouseLeaveNode,
  onSelected: selectedNode,
  onDeleteNodeButtonClick: destroyNode,
  onAddChildButtonClick: addChild,
  onModalInputChange: changeModalInput,
  onCloseModal: resetModalInput,
};

export default connect(mapStateToProps, actionCreators)(NodeList);
