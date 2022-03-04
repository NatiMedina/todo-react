import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';

const initialFormValues = {
    title: '',
    description: ''
}

const TodoForm = ({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit);
        } else {
            setFormValues(initialFormValues);
        }
    }, [todoEdit])

    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changedFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            setError('Debes ingresar un titulo');
            return;
        }

        if (todoEdit) {
            todoUpdate(formValues);
            setSuccessMessage('Tarea actualizada con exito');

        } else {
            todoAdd(formValues);
            setSuccessMessage('Tarea agregada con exito');
            setFormValues(initialFormValues);
        }


        setError(null);

        setTimeout(() => {
            setSuccessMessage(null);
        }, 2000);
    }

    return (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Nueva tarea'}</h1>
            {
                todoEdit &&
                <button
                    onClick={() => setTodoEdit(null)}
                    className="btn btn-warning mb-2"
                >Cancelar Edicion
                </button>
            }
            <form onSubmit={handleSubmit}
                className="my-4">
                <input
                    type='text'
                    placeholder="Titulo"
                    className="form-control"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Descripcion"
                    className="form-control mt-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                ></textarea>

                <button
                    className="btn btn-primary btn-block mt-2"
                >{todoEdit ? 'Actualizar Tarea' : 'Agregar Tarea'}
                </button>

            </form>
            {
                error &&
                <div className="alert alert-danger mt-2">
                    {error}
                </div>
            }
            {
                successMessage &&
                <div className="alert alert-success mt-2">
                    {successMessage}
                </div>
            }
        </div>
    );
}

export default TodoForm;