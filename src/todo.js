import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    };
    return (
        <div>
            <input value ={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}> Add task</button>
            <ul>
                {tasks.map((t,i)=>(
                    <li key={i}>{t}</li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;