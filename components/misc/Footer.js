// footer compoment
import Link from 'next/link';

import {
  FaBriefcase,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapPin,
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <div>
      <footer className="py-7 py-md-9 footer h-100">
        <div className="container px-4 mt-4">
          <div className="row gx-7">
            <div className="col-sm-4">
              <h5 className="text-xs">About Us</h5>

              <p className="mb-6">
                {"Lucy's"} is a locally owned & operated restaurant that has
                been serving the community now for 5 years. We are dedicated to
                providing the best quality food and service to our customers.
              </p>
            </div>
            <div className="col-sm-4">
              <ul className="list-unstyled mb-6">
                <h5 className="text-xs">Contact info</h5>
                <li className="d-flex mb-2">
                  <div className=" me-3">
                    <FaMapPin className="social-icons fs-6" />
                  </div>
                  1234 Any where, USA 10027-0000
                </li>
                <li className="d-flex mb-2">
                  <div className=" me-3 ">
                    <FaPhone className="social-icons fs-6" />
                  </div>
                  xxx-xxx-xxxx
                </li>
                <li className="d-flex">
                  <div className=" me-3">
                    <FaEnvelope className="social-icons fs-6" />
                  </div>
                  <Link className="text-white" href="/">
                    lucyadmin@gmail.com
                  </Link>
                </li>
                <li className="d-flex mt-1">
                  <div className=" me-3 mt-1">
                    <FaFacebookF className="social-icons fs-5" />
                  </div>
                  <div className=" me-3 mt-1">
                    <FaInstagram className="social-icons fs-5" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h5 className="text-xs">Opening hours</h5>
              <div className="mb-3">
                <div className="text-xs">Tuesday - Friday</div>
                <div className="font-serif">11:00 AM - 9:00 PM</div>
              </div>
              <div className="mb-6">
                <div className="text-xs">Saturday</div>
                <div className="font-serif">11:00 AM - 10:00 PM</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center">
                <hr className="hr-sm me-3" style={{ height: '1px' }} />
                &copy; 2024 {"Lucy's"}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
