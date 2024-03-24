import { BsCart } from "react-icons/bs";
export const Navbar = () => {
  return (
    <div>
      <h3>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThycDRtdCzjtxyuEonINsqR359FIHP-fixQA&usqp=CAU"
          alt=""
        />
      </h3>
      <ul>
        <li>Todas</li>
        <li>Accion</li>
        <li>Comedia</li>
        <li>Suspenso</li>
        <li>Ciencia Ficcion</li>
        <li>Terror</li>
        <li>Drama</li>
        <li>Animacion</li>
        <li>Familiar</li>
        <li>Crimen</li>
        <li>Thriller</li>
        <li>Aventura</li>
        <li>Romance</li>
        <li>Fantasia</li>
      </ul>

      <BsCart color="purple" size="2rem" />
    </div>
  );
};

export default Navbar;
