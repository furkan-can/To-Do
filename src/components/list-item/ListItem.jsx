import PropTypes from "prop-types"
import "./ListItem.css"
import { deleteTodo, updateTodo } from "../../store/actions/todoActions"
import { useDispatch } from "react-redux"

const ListItem = ({ className, item }) => {
    const dispatch = useDispatch();

    return (
        <div className="list-item hover:bg-gray-200">
            <div className={className}>
                <input onChange={() => {
                    dispatch(updateTodo(item.id, !item.complete))
                }}
                    checked={item.complete}
                    type="checkbox" className="mr-4" />
                <span>{item.text}</span>
            </div>
            {!item.complete &&
                <div onClick={() => dispatch(deleteTodo(item.id))} className="remove-list-item">
                    Delete
                </div>
            }
        </div>
    )
}

ListItem.propTypes = {
    className: PropTypes.string,
    item: PropTypes.object,
};

ListItem.defaultProps = {
    className: "",
    item: {}
};

export default ListItem;