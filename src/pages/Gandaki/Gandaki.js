import { Link, Outlet } from "react-router-dom";

function Gandaki() {
  return (
    <>
      <div>
        <h1>Cities in Gandaki Zone</h1>
        <ul>
          <li>
            <Link to="/Gandaki/Gorkha">Gorkha</Link>
          </li>
          <li>
            <Link to="/Gandaki/Kaski">Kaski</Link>
          </li>
          <li>
            <Link to="/Gandaki/Lamjung">Lamjung</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Gandaki;
