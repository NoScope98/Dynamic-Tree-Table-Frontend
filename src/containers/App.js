import { connect } from "react-redux";
import App from "../components/App";
import { showTree } from "../store/properties";
import { fetchRoot } from "../store/node";
import { fetchAllNodes } from "../store/table";

const mapStateToProps = (store) => {
  return {
    isFetching: store.properties.isFetching,
    viewTree: store.properties.viewTree,
  };
};

const actionCreators = {
  onLoadRootButtonClick: fetchRoot,
  onShowTreeButtonClick: showTree,
  onShowTableButtonClick: fetchAllNodes,
};

export default connect(mapStateToProps, actionCreators)(App);
