import { Link } from 'react-router-dom';

const PlantShopHeader = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">Rocky's Plant Shop</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/plants">Plants</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default PlantShopHeader;
