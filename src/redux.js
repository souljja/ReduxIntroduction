export function createStore(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  const getState = () => {
    return state;
  };

  const dispatch = action => {
    state = reducer(state, action);
    callbacks.forEach(callback => callback());
  };

  const subscribe = callback => {
    callbacks.push(callback);
    return () => (callbacks = callbacks.filter(cb => cb !== callback));
  };

  dispatch({});

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}
