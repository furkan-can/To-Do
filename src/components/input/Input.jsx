import { useState } from "react";
import "./Input.css"
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
const Input = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const addTask = (e) => {
        if (e.key === "Enter" && text.trim() !== "") {
            dispatch(addTodo({ id: new Date().getTime(), text, complete: false }))
            setText("");
        }
    }

    return (
        <div className="input-wrapper">
            <input
                value={text}
                type="text"
                onKeyDown={(e) => addTask(e)}
                onChange={(e) => setText(e.target.value)}
                placeholder="Create New Todo"
                autoFocus
            />
        </div>
    )
}

export default Input;