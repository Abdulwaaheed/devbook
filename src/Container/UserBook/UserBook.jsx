// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserBookCard from "../../Components/UserBookCard";

import "./UserBook.scss";
function UserBook() {
  const [color, setColor] = useState("");
  return (
    <div>
      <div className="user__book">
        <div className="container">
          <nav className="user__book-nav">
            <ul>
              <li>
                <NavLink
                  className={`user__book-link ${
                    color === "O’qilganlar" ? "active" : " "
                  }`}
                  onClick={() => setColor("O’qilganlar")}
                  to="/"
                >
                  O’qilganlar
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`user__book-link ${
                    color === "O’qishni xohlayman" ? "active" : " "
                  }`}
                  onClick={() => setColor("O’qishni xohlayman")}
                  to="/nima"
                >
                  O’qishni xohlayman
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`user__book-link ${
                    color === "O’qilmoqda" ? "active" : " "
                  }`}
                  onClick={() => setColor("O’qilmoqda")}
                  to="/"
                >
                  O’qilmoqda
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`user__book-link ${
                    color === "Adiblar" ? "active" : " "
                  }`}
                  onClick={() => setColor("Adiblar")}
                  to="/"
                >
                  Adiblar
                </NavLink>
              </li>
            </ul>
          </nav>
          <UserBookCard />
        </div>
      </div>
    </div>
  );
}

export default UserBook;
