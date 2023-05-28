import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./UserBook.scss";

function UserBook() {
  const [color, setColor] = useState("");
  return (
    <div className="user__book">
      <nav className="user__book-nav">
        <ul>
          <li>
            <NavLink to="user-read">O’qilganlar</NavLink>
          </li>
          <li>
            <NavLink to="user-saved">O’qishni xohlayman</NavLink>
          </li>
          <li>
            <NavLink to="user-read">O’qilmoqda</NavLink>
          </li>
          <li>
            <NavLink to="user-writers">Adiblar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default UserBook;
