import {Link, NavLink} from "react-router-dom";
import nutrition from "/src/images/nutrition.png";

function NavbarComp(props) {

  //const getClass = ({isActive}) => (isActive ? "nav-active" : null)

  return (
      <header className="header">
          <Link to="/">
          <img className="logo" src={nutrition}/>
          </Link>
        <nav>
            <div style={{textAlign: "right", paddingRight: 15}}>
            <NavLink to={"login"}>{props.loggedIn ? "Homepage": "Login / Sign Up"}</NavLink>
            </div>
        </nav>
      </header>
  );
}

export default NavbarComp;