const Item = ({ img, name, author, price, genre, stock, description }) => {
    return (
        <li>
            <div>
                <img src={img} alt={name} />
                <p><b>{name}</b></p>
                <p>Autor: {author}</p>
                <p>Precio: {price}</p>
                <p>Género: {genre}</p>
                <p>Disponibles: {stock}</p>
                <p>Descripción: {description}</p>
            </div>
        </li>
    )
}

export default Item