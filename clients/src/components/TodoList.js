import React, { Fragment, useState, useEffect } from 'react'
import TodoEdit from './TodoEdit';
const TodoList = () => {

    const [todos, setTodos]= useState([]);

    //delet function

    const deleteTodo = async(id)=>{
        try{
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            
            setTodos(todos.filter(todo =>todo.todo_id!==id));
        }catch(error){
            console.error(error.message);
        }
    }
    const getTodos = async () =>{
        try{
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            

            setTodos(jsonData);

        }catch(error){
            console.log(error.message);
        }
    }
    useEffect(() =>{
        getTodos();
    }, []);
    // console.log(todos);
  return (
    <Fragment>
        { " " }
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr> */}
            {todos.map(todo =>(
                <tr key = {todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><TodoEdit todo = {todo} /></td>
                    <td>
                        <button className="btn btn-danger" 
                        onClick={() =>deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                </tr>

            ))}
            </tbody>
        </table>
    </Fragment>
  );
}

export default TodoList