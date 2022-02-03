import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className="Nav-container">
      {props.navs.map((nav) => (
        <Link className="link-item" key={nav.id} to={nav.id}>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
