import React from 'react';
import userRequest from "../hooks/useRequest";
import axios from "axios";

const TodosWithAxios = () => {
    const [todos, loading, error] = userRequest(fetchTodos)

    function fetchTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }

    if (loading) {
        return <h1>LOADING...</h1>
    }

    if (error) {
        return <h1>There was an error during loading data</h1>
    }
    return (
        <div>
            {todos && todos.map(t =>
                <div key={t.id} style={{padding: 30, border: '2px solid black'}}>
                    {t.id}. {t.title}
                </div>)}
        </div>
    );
};

export default TodosWithAxios;