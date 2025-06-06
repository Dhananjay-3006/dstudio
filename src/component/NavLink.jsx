import { Link } from "react-router-dom";

const NavLink = ({ label, href }) => {
  return (
    <Link to={href} className="px-4 py-2 hover:text-blue-500">
      {label}
    </Link>
  );
};

export default NavLink;

