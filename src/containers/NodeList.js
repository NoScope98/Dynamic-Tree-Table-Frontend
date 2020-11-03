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
  resetModalInput,
} from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    nodes: store.nodes,
    overNode: store.properties.overNode,
    serverError: store.properties.serverErrors.add,
    isAddFormValid: store.validation.addForm,
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
