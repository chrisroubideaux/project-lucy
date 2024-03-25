// toolbar component
// toolbar component

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

function Toolbar({}) {
  return (
    <ul className="nav list-inline hstack gap-4 flex-wrap me-5 mt-2">
      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold"></h6>
      </li>
      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold"></h6>
      </li>

      <li className="nav-item ms-1">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaFacebookF className="card-icon mt-1 " />
        </h6>
      </li>
      <li className="nav-item ms-1"></li>
      <li className="nav-item ms-2">
        <h6 className=" mb-2 fs-sm fw-bold">
          <FaInstagram className="card-icon mt-1" />
        </h6>
      </li>
    </ul>
  );
}

export default Toolbar;
