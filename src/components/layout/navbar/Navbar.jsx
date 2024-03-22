import { BsCart } from "react-icons/bs";
export const Navbar = () => {
  return (
    <div>
      <h3>Logo</h3>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <h3>Badge</h3>
      <BsCart color="purple" size="2rem" />
    </div>
  );
};

export default Navbar;
