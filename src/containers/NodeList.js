import { connect } from "react-redux";
import NodeList from "../components/NodeList";
import { fetchChildren } from "../actions/node";

const mapStateToProps = (store) => {
  return {
    nodes: store.nodes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTreeItemClick: (id) => {
      dispatch(fetchChildren(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
