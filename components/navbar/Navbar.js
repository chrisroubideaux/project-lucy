// navbar component
import Link from 'next/link';
import { FaAlignLeft, FaAngleDown } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm mx-auto fw-normal fixed-top mt-1">
        <div className="container-fluid px-3">
          <Link className="nav-link fs-3 pb-2" href="/">
            {"Lucy's"}
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <FaAlignLeft className="social-icons" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" href="/"></Link>
                </li>
                <li className="nav-item mt-1 m-2">
                  <div className="input-group">
                    <Link
                      href="/"
                      className="nav-link dropwdown-toggle fs-4 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu
                      <span className=" m-2">
                        <FaAngleDown className="social-icons mr-1" />
                      </span>
                    </Link>
                    <ul className="dropdown-menu" style={{ width: '15rem' }}>
                      <li>
                        <Link
                          className="dropdown-item fs-4 "
                          href="/salads/Salads/"
                        >
                          Salads
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="dropdown-item fs-4 "
                          href="/appetizers/Appetizers/"
                        >
                          Appetizers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 "
                          href="/Lunch/Lunch/"
                        >
                          Lunch
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 "
                          href="/dinner/Dinner/"
                        >
                          Dinner
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-4 "
                          href="/event/Events/"
                        >
                          Sweets
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mt-1">
                  <Link
                    className="nav-link fs-4 "
                    href="/reservations/Reservations/"
                  >
                    Reservations
                  </Link>
                </li>
                <li className="nav-item mt-1 fs-4">
                  <Link className="nav-link" href="/takeout/">
                    Take out
                  </Link>
                </li>
                <li className="nav-item mt-1 fs-4">
                  <Link className="nav-link" href="/Contact/">
                    Hours
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
