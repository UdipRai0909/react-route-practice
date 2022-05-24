import { Link, Outlet } from "react-router-dom";

function Bagmati() {
  return (
    <>
      <div>
        <h1>Cities in Bagmati Zone</h1>
        <ul>
          <li>
            <Link to="/Bagmati/Bhaktapur">Bhaktapur</Link>
          </li>
          <li>
            <Link to="/Bagmati/Dhading">Dhading</Link>
          </li>
          <li>
            <Link to="/Bagmati/Lalitpur">Lalitpur</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Bagmati;
