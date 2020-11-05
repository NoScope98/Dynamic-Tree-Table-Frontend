import { connect } from "react-redux";
import { filterNodes, resetFilter, sortNodes } from "../store/table";
import NodeTable from "../components/NodeTable";

const mapStateToProps = (store) => {
  return {
    tableData: store.table.data,
    sortedKey: store.table.sortedKey,
    filteredData: store.table.filteredData,
    filteredColumn: store.table.filteredColumn,
  };
};

const actionCreators = {
  onConfirmFilterButtonClick: filterNodes,
  onResetFilterButtonClick: resetFilter,
  onTitleColumnClick: sortNodes,
};

export default connect(mapStateToProps, actionCreators)(NodeTable);
