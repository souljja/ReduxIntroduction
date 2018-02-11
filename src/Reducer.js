import Store from './Store.js';

function updateState(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

const store = new Store(updateState, 0);

const incrementAction = { type: "INCREMENT", amount: 5 };
const decrementAction = { type: "DECREMENT", amount: 3 };

store.update(incrementAction);
console.log(store.state);

store.update(decrementAction);
console.log(store.state);

store.update({});
console.log(store.state);
