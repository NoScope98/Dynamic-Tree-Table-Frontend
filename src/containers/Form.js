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

const actionCreators = {
  onInputChange: changeInput,
  onEditButtonClick: modifyNode,
  onAddChildButtonClick: addChild,
  onDeleteNodeButtonClick: destroyNode,
};

export default connect(mapStateToProps, actionCreators)(Form);
