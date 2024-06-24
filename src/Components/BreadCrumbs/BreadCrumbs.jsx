
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css"; // استيراد FontAwesome CSS

import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css'; // استيراد FontAwesome CSS
import "./../../index.css"




function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Homepage
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return index + 1 === pathnames.length ? (
            <Breadcrumb.Item active key={to}>
              {value}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
              {value}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumbs;
