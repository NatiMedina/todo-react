import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


const Todo = ({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h3 className="card-title text-right">
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)}
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} mx-1`}>
                        {todo.completed ? 'Terminado' : 'Terminar'}
                    </button>
                </h3>
                <p className="card-text text-right">
                    {todo.description}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        onClick={() => setTodoEdit(todo)}
                        className="btn btn-sm btn-outline-primary mx-1">
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className="btn btn-sm btn-outline-danger">
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Todo;


