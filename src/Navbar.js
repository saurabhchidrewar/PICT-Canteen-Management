import restaurant from "./assets/restaurant.png";
import rest from "./assets/rest.png";
// import pict from "./assets/pict.jpg";

const Navbar = () => {
  return (
    <div id="nav">
      <img src={rest} alt="rest" id="rest1"></img>
      <div className="title">ABCD CAMTIRE MANAGEMENT SYSTEM</div>
      <img src={restaurant} alt="rest" id="rest2"></img>
    </div>
  );
};

export default Navbar;
