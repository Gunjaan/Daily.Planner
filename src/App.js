// import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
// import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <div className="heading">
        <b> My Todo List </b>
      </div>
      <b>D a i l y P l a n n e r</b>
      <br />
      <br />
      <Todo text="Learn React" />
      <br />
      <Todo text="Drink a lot of water" />
      <br />
      <Todo text="Blogging" />
      <br />
      <Todo text="Practice Leetcode" />
      <br />
    </div>
  );
}

export default App;
