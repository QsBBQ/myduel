import {combineReducers} from 'redux';

function todoReducer(state = {todos : []},action){
  switch(action.type){
    case "ADD_TODO":
        var {text, label} = action.payload;
        var {todos} = state;
        //[1,2,3]
        todos = [
          ...todos,
          {
            id : todos.length,
            text,
            label
          }
        ];
        return {
          todos
        };

    case "REMOVE_TODO":
      var {id} = action.payload;
      var {todos} = state;
      var index = todos.findIndex(item => item.id === id);
      todos = [
          ...todos.slice(0,index),
          ...todos.slice(index+1)
      ];
      return {
        todos
      };
    default :
      return state;
  }

    return state;
}

const notificationReducer =  function notificationReducer( state = [],action){
  switch(action.type){
     case 'ADD_TODO':
        var notification = "Todo Added";
        return [
          notification,
            ...state
        ];
    case 'REMOVE_TODO' :
      var notification = "Todo Removed";
      return [
          notification,
          ...state,
      ];
    default :
      return state;
  }
}

const rootReducer =combineReducers({
    todoReducer,
    notifications : notificationReducer
});


export default rootReducer;
