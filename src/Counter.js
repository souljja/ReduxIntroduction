import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";

const initalState = { count: 0 };
function updateState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + action.amount };
    }
    case "DECREMENT": {
      return { count: state.count - action.amount };
    }
    case "RESET": {
      return { count: action.amount };
    }
    default: {
      return state;
    }
  }
}

function incrementAction(amount) {
  return { type: "INCREMENT", amount: amount };
}
function decrementAction(amount) {
  return { type: "DECREMENT", amount: amount };
}
function resetAction() {
  return { type: "RESET", amount: 0 };
}

const store = createStore(updateState, initalState);

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment() {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(incrementAction(amount));
  }

  decrement() {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(decrementAction(amount));
  }

  reset() {
    store.dispatch(resetAction());
  }

  render() {
    const count = store.getState().count;
    return (
      <div className="counter">
        <span className="count">{count}</span>

        <div className="buttons">
          <button className="increment" onClick={this.increment}>
            +
          </button>
          <button className="decrement" onClick={this.decrement}>
            -
          </button>
          <button className="reset" onClick={this.reset}>
            R
          </button>
        </div>

        <input type="number" ref="amount" defaultValue="1" />
      </div>
    );
  }
}

export default Counter;
