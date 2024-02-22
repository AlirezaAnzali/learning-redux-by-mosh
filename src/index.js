const { bugResolved, bugAdded, bugRemoved } = require("./actions");
const store = require("./store");

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));
store.dispatch(bugAdded("Bug 3"));
store.dispatch(bugRemoved(1));
store.dispatch(bugResolved(2));

unsubscribe();
