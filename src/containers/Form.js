import { connect } from "react-redux";
import Form from "../components/Form";
import {
  changeInputIP,
  changeInputName,
  changeInputPort,
} from "../actions/node";

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
    onInputNameChange: (value) => {
      dispatch(changeInputName(value));
    },
    onInputIPChange: (value) => {
      dispatch(changeInputIP(value));
    },
    onInputPortChange: (value) => {
      dispatch(changeInputPort(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
