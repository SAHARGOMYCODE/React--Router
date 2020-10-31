import React from "react";
import { Link } from "react-router-dom";
import { Nav, Image } from "react-bootstrap";
function Film() {
  return (
    <div>
      <Image
        src="https://fr.web.img2.acsta.net/pictures/19/11/26/09/09/5380589.jpg"
        fluid
        width="10%"
        height="10%"
      />

      <Nav defaultActiveKey="/home" className="flex-column">
        <br />
        <Link to="/BondeAnnonce">
          <h4>Bonde Annonce</h4>
        </Link>
        <Link to="/Description">
          <h4> Description</h4>
        </Link>
        <br />
      </Nav>
    </div>
  );
}
export default Film;
