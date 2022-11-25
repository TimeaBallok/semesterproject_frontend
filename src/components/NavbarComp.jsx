import {NavLink} from "react-router-dom";
import nutrition from "/public/nutrition.png";

function NavbarComp() {

  //const getClass = ({isActive}) => (isActive ? "nav-active" : null)

  return (
      <header className="header">
          <img className="logo" src={nutrition}/>
        <nav>
          <NavLink to={"/"} >Food & Nutrition</NavLink>

            <div style={{textAlign: "right", paddingRight: 15}}>
            <NavLink to={"/"} >Login / Sign Up</NavLink>
            </div>
        </nav>
      </header>
  );
}

export default NavbarComp;