import { useSelector } from 'react-redux'
import './App.css'
import Header from './components/header/Header'
import Input from './components/input/Input'
import ListContent from './components/list-content/ListContent'

function App() {
  const { todoList,todoFilter } = useSelector(state => state.todo);
  console.log(todoList,todoFilter);
  return (
    <div className="md:container md:mx-auto">
      <Header>
        <Input></Input>
        <ListContent></ListContent>
      </Header>
    </div>
  )
}

export default App
