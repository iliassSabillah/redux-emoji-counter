// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// var classNames = require('classnames');

// const counterReducer = (state = {number:0,data:[],emoji:''}, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//           number: state.number + 1,
//           data: state.data.concat(action.emoji),
//           emoji:state.emoji
//         }
//     case 'DECREMENT':
//       return {
//           number: state.number - 1,
//           data: state.data.slice(1),
//           emoji: state.emoji
//         }
//     default:
//       return state
//   }
// }


// const store = createStore(counterReducer);

// const App = React.createClass({
//   dispatchIncrement: function(e) {
//     store.dispatch({type:'INCREMENT',emoji: e.target})
//   },
//   dispatchDecrement: function(e) {
//     store.dispatch({type:'DECREMENT',emoji: e.target})
//   },
//   render: function() {
//     return (
//       <div>
//         <h1>{store.getState().number}</h1><br/>
//         {store.getState().data.map((a)=> a)}<br/>
//         <button onClick={this.dispatchIncrement}>+<br/><i className="em em-100"></i></button>
//         <button onClick={this.dispatchDecrement}>-<br/><i className="em em-100"></i></button>
//         <button onClick={this.dispatchIncrement}>+<br/><i className="em em-alien"></i></button>
//         <button onClick={this.dispatchDecrement}>-<br/><i className="em em-alien"></i></button>
//         <button onClick={this.dispatchIncrement}>+<br/><i className="em em-airplane"></i></button>
//         <button onClick={this.dispatchDecrement}>-<br/><i className="em em-airplane"></i></button>
//       </div>
//     )
//   }
// })

// const render = () => ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// render();
// store.subscribe(render);

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
// var classNames = require('classnames');

const counterReducer = (state = {number:0,data:[],emoji:''}, action) => {
 switch (action.type) {
   case 'INCREMENT':
     return {
         number:state.number + 1,
         data:state.data.concat(<i key={state.number} className={"em " +state.emoji}></i>),
         emoji: state.emoji
       }
   case 'DECREMENT':
     return {
         number:state.number - 1,
         data:state.data.slice(0,state.number),
         emoji: state.emoji
       }
    case 'CHANGE_EMOJI':
        return {number: state.number,
            data: state.data,
            emoji:action.emoji
        
        }
   default:
     return state
 }
}
const store = createStore(counterReducer);

const App = React.createClass({
 // dispatchAddEmoji(){
 //   store.dispatch({type:'ADD_EMOJI',data: <i className="em em-100"></i> })
 // },
 dispatchIncrement: function() {
     var that= this;
   store.dispatch({type:'INCREMENT'})
 },
 dispatchDecrement: function() {
     var that=this
   store.dispatch({type:'DECREMENT'})
},


changeEmoji: function (e){
    store.dispatch({type:'CHANGE_EMOJI',emoji: e.target.className.split(" ")[1]})
},


 render: function() {
     console.log(store.getState())
   return (
     <div>
       <button value="em-100" onClick={this.changeEmoji}><i className="em em-100"></i></button>
       <button onClick={this.changeEmoji}><i className="em em-alien"></i></button>
       <button onClick={this.changeEmoji}><i className="em em-baby_bottle"></i></button>
       <i className={"em " + store.getState().emoji}></i> <br/>
       <button onClick={this.dispatchIncrement}>+</button>
       <button onClick={this.dispatchDecrement}>-</button>
       <h1>{store.getState().data.map((a)=> a)}</h1><br/>
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