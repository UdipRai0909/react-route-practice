import { Link } from "react-router-dom";

function SettingsComponent() {
  const findFirstBtn = () => {
    let myUl = document.getElementsByClassName("toggle-setting");
    let nextUl = myUl[0];
    let prevBtn = nextUl.previousElementSibling;
    if (nextUl.style.display !== "flex") {
      nextUl.style.display = "flex";
      prevBtn.style.color = "yellowgreen";
    } else {
      nextUl.style.display = "none";
      prevBtn.style.color = "#fff";
    }
  };

  return (
    <>
      <button className="settingButton" onClick={findFirstBtn}>
        <i className="fa-solid fa-gear"></i>
      </button>
      <ul className="toggle-setting">
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/">Edit</Link>
        </li>
        <li>
          <Link to="/">Settings</Link>
        </li>
      </ul>
    </>
  );
}

export default SettingsComponent;

// const root = React.createElement("")
