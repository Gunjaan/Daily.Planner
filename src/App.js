// import Backdrop from "./components/Backdrop";
import { useState } from "react";
import Todo from "./components/Todo";
// import Modal from "./components/Modal";

function App() {
  const [listTodo, setListTodo] = useState([
    "Learn React",
    "Drink a lot of water",
    "Blogging",
    "Practice Leetcode",
    "Turn off light"
  ])
  
  return (
    <div>
      <div className="heading">
        <b> My Todo List </b>
      </div>
      <b>D a i l y P l a n n e r</b>
      <br />
      <br />

      {listTodo.map(ele => <><Todo text={ele} /> <br/></>)}
      
      {/* <Todo text="Drink a lot of water" />
      <br />
      <Todo text="Blogging" />
      <br />
      <Todo text="Practice Leetcode" />
      <br /> */}
    </div>
  );
}

export default App;
