const actions = require("./actionTypes");

function bugAdded(description) {
  return {
    type: actions.ADD_BUG,
    payload: {
      description,
    },
  };
}

function bugResolved(id) {
  return {
    type: actions.RESOLVE_BUG,
    payload: {
      id,
    },
  };
}

function bugRemoved(id) {
  return {
    type: actions.REMOVE_BUG,
    payload: {
      id,
    },
  };
}

module.exports = {
  bugAdded,
  bugRemoved,
  bugResolved,
};
