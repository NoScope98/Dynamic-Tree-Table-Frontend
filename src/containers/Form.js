import { connect } from "react-redux";
import Form from "../components/Form";
import { changeInput, modifyNode } from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    selectedNode: store.properties.selectedNode,
    inputNameValue: store.form.name,
    inputIPValue: store.form.IP,
    inputPortValue: store.form.port,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
