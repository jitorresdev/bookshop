import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav style={{display: 'flex'}}>
            <h3>Bookshop</h3>
            <div>
                <button>Best Sellers</button>
                <button>Comedia</button>
                <button>Novelas</button>
                <button>Ciencia Ficción</button>
                <button>Educativos</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar