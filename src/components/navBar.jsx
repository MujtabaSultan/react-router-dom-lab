import { Link } from "react-router-dom";

// src/components/NavBar.jsx
const NavBar = () => {
return (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mailboxes">MailBoxes</Link>
      </li>
      <li>
        <Link to="/new">New Mailsbox</Link>
      </li>
    </ul>
  </nav>
);
};

export default NavBar