import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const mainReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GREETING':
      return state.concat(action.data)
      break;
    default:
    return state
  }
}

const store = createStore(mainReducer);


const App = React.createClass({
  logState: function() {
    console.log(store.getState())
  },
  dispatchHello: function() {
    store.dispatch({type:'ADD_GREETING', data: 'hello'})
  },
  dispatchGoodbye: function() {
    store.dispatch({type:'ADD_GREETING', data: 'goodbye'})
  },
  render: function() {
    return (
      <div>
        {store.getState().map((val, indx) => <p key={indx}>{val}</p>)}
        <button onClick={this.dispatchHello}>Add Hello</button>
        <button onClick={this.dispatchGoodbye}>Add Goodbye</button>
        <button onClick={this.logState}>Log State</button>
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);