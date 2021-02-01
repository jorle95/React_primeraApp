import React from 'react'; 
import logo from './logo.svg';
import './App.css';

import { todos } from "./todos.json";

import TodoForm from './components/TodoForm';


class App extends React.Component {//Esta funcion representa un componente { 
  constructor() {
    super (); //Para heredar el componente de React
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //Podemos escribir un metodo que se encargue de agregar nuevos datos a nuestras tareas
  
  handleAddTodo (todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
    
  }

  removeTodo(index) {
    if (window.confirm('¿Estas seguro de eliminar la tarea?')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => { //filter hace la funcion de filtrar los eventos uno a uno y si cumple se va
          return i !== index
        })
      })
    }
  }

  render () {
    const todos =  this.state.todos.map((todo, i)=> {  //Quiero procesar los datos antes de mostrarlos
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge rounded-pill bg-danger ms-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body"> 
              <p>{todo.description}</p>
              <hr></hr>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="bnn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="nav navbar-dark bg-dark">
          <a href="" className="text-white">
            Tarea
            <span className="badge rounded-pill bg-light ml-2 text-dark ms-2">
              { this.state.todos.length }
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 mt-4 text-center">
                <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
                <img src={logo} className="App-logo" alt="logo" />
            </div>

          <div className="col-md-8">
            <div className="row">
                {todos}
            </div>
          </div>
        </div>

        </div>
        
      </div>
    );
  }
}

export default App;
