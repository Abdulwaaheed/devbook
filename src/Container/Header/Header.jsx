import "./Header.scss";
import HeaderLogo from "../../assets/img/header__logo.svg";
import headerRightLogo from "../../assets/img/header__right_logo.svg";
import headerRightVector from "../../assets/img/vector.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [color, setColor] = useState("");
  const [block, setBlock] = useState(false);
  return (
    <header>
      <div className="container">
        <div className="header__block">
          <img className="header__logo" src={HeaderLogo} alt="logo" />
          <nav className="header__center">
            <ul>
              <li>
                <NavLink
                  className={`header__link ${
                    color === "bosh sahifa" ? "active" : " "
                  }`}
                  onClick={() => setColor("Bosh Sahifa")}
                  to="/"
                >
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`header__link ${
                    color === "nasr" ? "active" : " "
                  }`}
                  onClick={() => setColor("Bosh Sahifa")}
                  to="/nasr"
                >
                  Nasr
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`header__link ${
                    color === "nazm" ? "active" : " "
                  }`}
                  onClick={() => setColor("nazm")}
                  to="/nazm"
                >
                  Nazm
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`header__link ${
                    color === "maqolalar" ? "active" : " "
                  }`}
                  onClick={() => setColor("maqolalar")}
                  to="/maqolar"
                >
                  Maqolalar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`header__link ${
                    color === "forum" ? "active" : " "
                  }`}
                  onClick={() => setColor("forum")}
                  to="/forum"
                >
                  Forum
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__right">
            <img src={headerRightLogo} alt="" />
            <img
              className={`header__vector ${
                block ? "header__vector" : "vector"
              }`}
              onClick={() => setBlock(!block)}
              src={headerRightVector}
              alt=""
            />
            <div className={`${block ? "header__profile" : "hide"}`}>
              <p>Sing Up</p>
              <p>Sing In</p>
            </div>
          </div>
        </div>
      </div>
      <div className="header__hr"></div>
    </header>
  );
};

export default Header;
