import { connect } from "react-redux";
import { filterNodes, resetFilter, sortNodes } from "../actions/actions";
import NodeTable from "../components/NodeTable";

const mapStateToProps = (store) => {
  return {
    tableData: store.table.data,
    sortedKey: store.table.sortedKey,
    filteredData: store.table.filteredData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTitleColumnClick: (key) => {
      dispatch(sortNodes(key));
    },
    onConfirmFilterButtonClick: (key, value) => {
      dispatch(filterNodes(key, value));
    },
    onResetFilterButtonClick: () => {
      dispatch(resetFilter());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeTable);
