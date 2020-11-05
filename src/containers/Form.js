import { connect } from "react-redux";
import Form from "../components/Form";
import { modifyNode } from "../actions/actions";
import { changeInput } from "../store/form";

const mapStateToProps = (store) => {
  return {
    selectedNode: store.properties.selectedNode,
    formData: store.form.editForm,
    serverError: store.properties.serverErrors.edit,
  };
};

const actionCreators = {
  onInputChange: changeInput,
  onEditButtonClick: modifyNode,
};

export default connect(mapStateToProps, actionCreators)(Form);
