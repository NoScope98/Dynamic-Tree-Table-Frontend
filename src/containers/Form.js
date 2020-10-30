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
    formData: store.form.editForm,
    serverError: store.properties.serverErrors.edit,
    isEditFormValid: store.validation.editForm,
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
