import React from 'react'

export default function Todo(props) {
    return (
        <div className={`item${props.item.completed ? "completed" : ""}`}
            onClick={() => props.toggleTodo(props.item.id)}
            style={props.item.completed ? { textDecoration: "line-through" } : null}
        >
            <p>{props.item.task}</p>

        </div>
    )
}
