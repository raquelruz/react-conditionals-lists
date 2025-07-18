import { AddFruitForm } from '../components/AddFruitForm/AddFruitForm'
import { DynamicShoppingList } from '../components/DynamicShoppingList/DynamicShoppingList'
import { EditList } from '../components/EditList/EditList'
import { NameList } from '../components/NameList/NameList'
import { OrderManager } from '../components/OrderManager/OrderManager'
import { ProductList } from '../components/ProductList/ProductList'
import { RemoveItemList } from '../components/RemoveItemList/RemoveItemList'
import { TaskList } from '../components/TaskList/TaskList'
import { ToggleItemsList } from '../components/ToggleItemsLists/ToggleItemsLists'
import { UserFilterList } from '../components/UserFilterList/UserFilterList'
import './App.css'

function App() {
  return (
    <>
    <NameList />

    <ProductList />

    <TaskList />

    <AddFruitForm />

    <RemoveItemList />

    <DynamicShoppingList />

    <ToggleItemsList />

    <EditList/>

    <OrderManager />

    <UserFilterList />
    </>
  )
}

export default App
