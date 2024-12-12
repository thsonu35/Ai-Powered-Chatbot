import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                // Backend API call
                const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
                console.log(response.data); // Debugging output
                setTasks(response.data); // Setting response data to state
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Chatbot Tasks</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.task}</li>
                ))}
            </ul>
        </div>
    );
};

export default Chatbot;
