import { useEffect, useState } from "react"
import ListContentFooter from "../list-content-footer/ListContentFooter"
import ListItem from "../list-item/ListItem"
import "./ListContent.css"
import { useSelector } from "react-redux"

const ListContent = () => {
    const { todoList, todoFilter } = useSelector(state => state.todo);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (todoFilter === "all") {
            setList(todoList);
            return
        } else if (todoFilter === "not complete") {
            setList(todoList.filter((item) => !item.complete));
            return
        }
        setList(todoList.filter((item) => item.complete));
    }, [todoList, todoFilter]);

    return (
        <div className="item-content-wrapper">
            <div className="content">
                {
                    list.length < 1 && <div className="text-xs text-gray-700 font-bold text-center">Do not have To-Do</div>
                }

                {
                    list.map((x) => {
                        return (
                            <ListItem
                                key={x.id}
                                item={x}
                                className={x.complete ? "completed" : ""}
                            />
                        )
                    })
                }
            </div>
            <ListContentFooter></ListContentFooter>
        </div>
    )
}

export default ListContent;