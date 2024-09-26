import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Post from "./Components/Post";
import Rightbar from "./Components/Rightbar";
import { data, data2 } from "./Data";
import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("#232D3f");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(true);

  const toggleButton = () => {
    setToggle(!toggle);
    if (toggle) {
      setBgColor("rgb(255,255,255");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setBgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };

  return (
    <>
      <Navbar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle}/>
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} />
        </div>
        <div className="post_section">
          {data.map((e) => (
            <Post key={e.id} data={e} bgColor={bgColor} color={color} />
          ))}
        </div>
        <div className="right_bar">
          {data2.map((e) => (
            <Rightbar key={e.id} data2={e} bgColor={bgColor} color={color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
