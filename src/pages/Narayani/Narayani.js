import { Link, Outlet } from "react-router-dom";

function Narayani() {
  return (
    <>
      <div>
        <h1>Cities in Narayani Zone</h1>
        <ul>
          <li>
            <Link to="/Narayani/Bara">Bara</Link>
          </li>
          <li>
            <Link to="/Narayani/Parsa">Parsa</Link>
          </li>
          <li>
            <Link to="/Narayani/Rautahat">Rautahat</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Narayani;
