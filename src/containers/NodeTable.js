import { connect } from "react-redux";
import NodeTable from "../components/NodeTable";

const mapStateToProps = (store) => {
  return {
    tableData: store.table.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeTable);
