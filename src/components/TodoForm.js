import React from 'react'; 

class TodoForm extends React.Component {//Esta funcion representa un componente { 
    constructor() {
        super (); //Para heredar el componente de React
        this.state={
            title:"",
            responsible:"",
            description:"",
            priority:"low"
        }
        this.handleInput = this.handleInput.bind(this); //Con esto se le dice al handle input que pertenece a este componente o sino el this falla
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) { //Metodo que en lugar de hacer que se refreste la pagina crea otra acción (e es el evento del formulario)

        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        });
        console.log("Sending...");
    }

    handleInput(e){ //Funcion creada, se va a ejecutar cada que se haga un cambio en el formulario
        const  { value, name } = e.target;
        this.setState({ //No se puede hacer this.state.title="A lo que sea" por lo cual se tiene que usar setState
            [name] : value
        })
        console.log(this.state)
        this.setState({
            [name]: value
        });
    }

    render () {
    return (
        <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                    type="text"
                    name="title"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Title"
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                    type="text"
                    name="responsible"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Responsible"
                    />
                </div>
                <div className="form-group mt-3">
                    <input
                    type="text"
                    name="description"
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Description"
                    />
                </div>
                <div className="form-group mt-3">
                    <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInput}
                    >
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                    </select>
                </div>
                <div className="form-group mt-3">
                    <button type="submit" class="btn btn-primary">
                        Guardar
                    </button>
                </div>
            </form>
        </div>
        );
    }
}

export default TodoForm;