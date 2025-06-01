import { Link } from "react-router-dom";

// export class NavBar extends Component {
//   render() {
//     return (
const NavBar = ({ language, setLanguage }) => {
  
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
        style={{ color: "White" }}
      >
        <div className="container-fluid"><Link className="navbar-brand" to="/">LatestNews</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                <Link className="nav-link " to="/top">
                  Top
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/business">
                  Business
                </Link>
              </li>
                           <li className="nav-item">
                <Link className="nav-link " to="/domestic">
                  Domestic
                </Link>
              </li>
                  <li className="nav-item">
                <Link className="nav-link " to="/education">
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/entertainment">
                  Entertainment
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link " to="/environment">
                  Environment
                </Link>
              </li>
                 <li className="nav-item">
                <Link className="nav-link " to="/food">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/health">
                  Health
                </Link>
              </li>
                 <li className="nav-item">
                <Link className="nav-link " to="/lifestyle">
                  Lifestyle
                </Link>
              </li>
                           <li className="nav-item">
                <Link className="nav-link " to="/politics">
                  Politics
                </Link>
              </li>
                  <li className="nav-item">
                <Link className="nav-link " to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/tourism">
                  Tourism
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link " to="/world">
                  World
                </Link>
              </li>
                <li className="nav-item">
                <Link className="nav-link " to="/other">
                  Other
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1px" }}
              >
                <h6>Select Language</h6>
                <select
                value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                 // defaultValue={"hi"}
                >
               
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
// };

export default NavBar;
