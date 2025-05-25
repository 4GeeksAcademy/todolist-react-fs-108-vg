import { useState } from "react"

export const TodoList = () => {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([

    ]);

    const handleTask = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task.trim() === '') return;
        setTodos([...todos, { id: todos.length + 1, todo: task }]);
        setTask('');
    };

    const handleDelete = (tarea) => {
        setTodos(todos.filter(item => item.id !== tarea.id));
    };

    return (
        <div className="container my-3 text-start">
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 m-auto">
                    <h1 className="text-danger text-success text-center">Mi lista de tareas</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 m-auto">
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Añade una tarea"
                            value={task}
                            onChange={handleTask}
                        />
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 m-auto">
                    <ul className="list-group">
                        {todos.map((item) =>
                            <li key={item.id} className="list-group-item d-flex justify-content-between">
                                {item.todo}

                                <span onClick={() => handleDelete(item)} style={{ cursor: 'pointer' }}>
                                    <i className="fa-solid fa-xmark" style={{ color: '#e84326' }}></i>
                                </span>
                            </li>
                        )}
                        <li className="list-group-item text-end">
                            {todos.length ? todos.length + ' tareas ' : 'No hay tareas'}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}