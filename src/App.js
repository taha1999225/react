import "./App.css";
import { useState } from "react";
import { Profile } from "./profiles/Profile";

function App() {
  const [show, setShow] = useState(false);
  const person = [
    { name: "sqsqsqssqsqsq", bio: "sqsqsqs", profession: "netflixeur" },
    { name: "dwwdd", bio: "sqsqsq", profession: "netflixeur" },
    { name: "kacha7", bio: "yfadlekch", profession: "netflixeur" },
  ];

  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>click to show profile</button>
      {show ? (
        <div className="list">
          {person.map((el) => (
            <Profile u={el} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
