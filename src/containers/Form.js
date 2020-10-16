import { connect } from "react-redux";
import Form from "../components/Form";
import {
  changeInput,
  modifyNode,
  addChild,
  destroyNode,
} from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    selectedNode: store.properties.selectedNode,
    inputNameValue: store.form.name,
    inputIPValue: store.form.IP,
    inputPortValue: store.form.port,
    formData: store.form,
    serverError: store.properties.serverErrors.edit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (targetName, value) => {
      dispatch(changeInput(targetName, value));
    },
    onEditButtonClick: (id, newData) => {
      dispatch(modifyNode(id, newData));
    },
    onAddChildButtonClick: (newChild) => {
      dispatch(addChild(newChild));
    },
    onDeleteNodeButtonClick: (id, parentId) => {
      dispatch(destroyNode(id, parentId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
