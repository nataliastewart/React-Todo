import React from 'react'

export default function TodoForm(props) {
    return (
        <div>
            <form>
                <input type="text" name="item" value={props.item} placeholder="Add a todo..." />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>

        </div>
    )
}
