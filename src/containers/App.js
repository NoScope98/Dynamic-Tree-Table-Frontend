import { connect } from "react-redux";
import App from "../components/App";
import {
  fetchRoot,
  showTree,
  fetchAllNodes,
  changeLanguage,
} from "../actions/actions";

const mapStateToProps = (store) => {
  return {
    isFetching: store.properties.isFetching,
    selectedNode: store.properties.selectedNode,
    nodes: store.nodes,
    formData: store.form,
    viewTree: store.properties.viewTree,
    language: store.properties.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadRootButtonClick: () => {
      dispatch(fetchRoot());
    },
    onShowTreeButtonClick: () => {
      dispatch(showTree());
    },
    onShowTableButtonClick: () => {
      dispatch(fetchAllNodes());
    },
    onChangeLanguageSelectClick: (language) => {
      dispatch(changeLanguage(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
