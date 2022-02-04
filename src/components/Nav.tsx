import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC<{
  navs: Array<{
    id: string;
    label: string
  }>;
}> = (props) => {
  return (
    <nav className="Nav">
      {props.navs.map((nav) => (
        <Link className="link-item" key={nav.id} to={nav.id}>
          {nav.label}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
