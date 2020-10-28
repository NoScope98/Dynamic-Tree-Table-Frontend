import { connect } from "react-redux";
import InputFields from "../components/InputFields";

const mapStateToProps = (store) => {
  return {
    language: store.properties.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);
