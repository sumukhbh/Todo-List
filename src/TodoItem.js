import React from "react"

function TodoItem (props) {
    let stylechange = {
        fontStyle : "italic",
        color: "grey",
        textDecoration: "line-through"

    }
    return (
        <div className="todo-item">
        <input type="checkbox" checked={props.item.completed}
        onClick={() => props.handleChange(props.item.id)}/>
        <p style = {props.item.completed ? stylechange:null}> {props.item.text} </p>
        </div>
    )
}

export default TodoItem