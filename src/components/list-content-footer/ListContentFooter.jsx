import { useDispatch, useSelector } from "react-redux";
import { setTodoFilter } from "../../store/actions/todoActions"
import "./ListContentFooter.css"

const ListContentFooter = () => {
    const { todoFilter, todoList } = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    return (
        <div className="content-footer">
            <div className={`menu-item ${todoFilter === "not complete" ? "active" : ""}`} onClick={() => {
                dispatch(setTodoFilter("not complete"))
            }}>{todoList.filter(item => !item.complete).length + " Left"}</div>

            <div className={`menu-item ${todoFilter === "all" ? "active" : ""}`} onClick={() => {
                dispatch(setTodoFilter("all"))
            }}>All</div>
            <div className={`menu-item ${todoFilter === "complete" ? "active" : ""}`} onClick={() => {
                dispatch(setTodoFilter("complete"))
            }}>Completed</div>
        </div>
    )
}

export default ListContentFooter;