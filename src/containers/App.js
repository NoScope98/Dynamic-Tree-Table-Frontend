import { connect } from "react-redux";
import App from "../components/App";
import { fetchRoot, fetchAllNodes } from "../actions/actions";
import { showTree } from "../store/properties";

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
