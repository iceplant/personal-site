// currently not connected to anything but I feel like I should implement this


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
    </ul>
    <ul class='nav-list nav-list-right'>
      <li class='nav-item'>
        <a class='nav-item' href='#contact'>Contact</a>
      </li>
      <li class='nav-item'>
        <a class='nav-item' href='#projects'> Projects</a>
      </li>
      <li class='nav-item'>
        <a class='nav-item' href='#About' >About</a>
      </li>
    </ul>
    </div>
  </nav>
);

export default NavBar;