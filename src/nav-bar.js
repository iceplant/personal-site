const NavBar = (props) => (
  <nav>
  <div class='navbar'>
      <ul class='nav-list nav-list-left'>
        <li class='nav-item'>
          <button class='nav-item' onClick={() => props.setPage('Blog')}>Blog</button>
        </li>
        <li class='nav-item'>
          <button class='nav-item' onClick={() => props.setPage('Dance')}>Dance</button>
        </li>
        <li class='nav-item'>
          <button class='nav-item' onClick={() => props.setPage('PlantShop')}>Plant Shop</button>
        </li>
        <li class='nav-item'>
          <button class='nav-item' onClick={() => props.setPage('Dev')}>Home</button>
        </li>
      </ul>
      </div>
      </nav>
);

export default NavBar; 