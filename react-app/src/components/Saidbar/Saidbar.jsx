import React from "react";
import "./Saidbar.css";
import Iframe from '../Iframe/Iframe';
import Important from "./Important/Important";

function Saidbar() {
 
//   const [addLike, setAddLike] = useState(false);


// const handleInput = (e) => {
//   setAddLike(!addLike);
// }

  return (
    <div className="saidbar">
    <Important />
    <Iframe />
    </div>
  );
}
export default Saidbar;
