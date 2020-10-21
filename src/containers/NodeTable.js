import { connect } from "react-redux";
import { sortNodes } from "../actions/actions";
import NodeTable from "../components/NodeTable";

const mapStateToProps = (store) => {
  return {
    tableData: store.table.data,
    sortedKey: store.table.sortedKey,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleColumnClick: (key) => {
      dispatch(sortNodes(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeTable);
