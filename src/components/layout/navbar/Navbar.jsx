import "./NavBar.css";

import { BsCart } from "react-icons/bs";

import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { blue } from "@mui/material/colors";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={4} color="success"></Badge>
      <MailIcon color="action" />
    </div>
  );
};

export const Navbar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: "10px",
      }}
    >
      <h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThycDRtdCzjtxyuEonINsqR359FIHP-fixQA&usqp=CAU"
          alt=""
        />
      </h3>

      <ul
        style={{
          width: "100%",
          display: "flex",
          textAlign: "center",
          marginTop: "30px",
          justifyContent: "center",
          gap: "40px",
          listStyle: "none",
        }}
      >
        <li>
          <a href="#">Todas</a>
        </li>
        <li>
          <a href="#">Accion</a>
        </li>
        <li>
          <a href="#">Comedia</a>
        </li>
        <li>
          <a href="#">Suspenso</a>
        </li>
        <li>
          <a href="#">Ciencia Ficcion</a>
        </li>
        <li>
          <a href="#">Terror</a>
        </li>
        <li>
          <a href="#">Drama</a>
        </li>
        <li>
          <a href="#">Animacion</a>
        </li>
        <li>
          <a href="#">Familiar</a>
        </li>
        <li>
          <a href="#">Crimen</a>
        </li>
        <li>
          <a href="#">Thriller</a>
        </li>
        <li>
          <a href="#">Aventura</a>
        </li>
        <li>
          <a href="#">Romance</a>
        </li>
        <li>
          <a href="#">Fantasia</a>
        </li>
      </ul>

      <CartWidget />
      <BsCart color="purple" size="2rem" />
    </div>
  );
};

export default Navbar;
