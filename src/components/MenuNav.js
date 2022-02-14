import { Link } from 'react-router-dom';

function MenuNav() {
  return(
    <nav>
      <Link to="/">Home</Link> | {" "}
      <Link to="/contact">Contact</Link> | {" "}
      <Link to="/project">Project</Link>
    </nav>
  );
}

export default MenuNav;