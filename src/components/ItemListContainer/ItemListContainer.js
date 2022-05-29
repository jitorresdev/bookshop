import ItemList from "../ItemList/ItemList"

const ItemListContainer = (props) =>  {
    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList />
        </div>
    )
}

export default ItemListContainer