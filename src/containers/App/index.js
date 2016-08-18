import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, removeTodo} from '../../actions';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text : ""
    };
  }

  handleChange(e){
    this.setState({text : e.target.value});
  }

    addTodo(){
        const {text} = this.state;
        if(text.length){
          const {dispatch} = this.props;
          dispatch(addTodo(text));
        }else{
          alert("Text cannot be empty!");
        }

    }
    removeTodo(id){
      const {dispatch} = this.props;
      dispatch(removeTodo(id));
    }
    render(){
      const {todos} = this.props;
      let view = todos.map((todo,index)=><li onClick={()=>this.removeTodo(todo.id)} key={index}>{todo.label + " -- "+ todo.text}</li>);
      return <div><h1>App</h1>
        {view}
        <input onChange={(e)=>this.handleChange(e)} value={this.state.text} />
        <button onClick={()=>this.addTodo()}> Add Todo </button>
      </div>;
    }
}

function convertReduxStateToProps(state){
  //console.log(state);
  return {
      todos : state.todoReducer.todos,
      notifications : state.notifications
  };
}


export default connect(convertReduxStateToProps)(App);
