class Store {
  constructor(updateState, state) {
    this._updateState = updateState;
    this._state = state;
  }

  get state() {
    return this._state;
  }

  update(action) {
    this.state = this._updateState(this._state, action);
  }
}

export default Store;
