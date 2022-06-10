import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import { useState } from "react";

function App() {
  let name = "Optimus";
  const [showEvents, setShowEvents] = useState(false);

  let forShow = () => {
    setShowEvents(true);
  };

  const [events, setEvents] = useState([
    { title: "Jones", id: 1 },
    { title: "Rex", id: 2 },
    { title: "Melvin", id: 3 },
  ]);
  console.log(showEvents);
  let counter = (id) => {
    setEvents((prevEvents) => {
      prevEvents.filter((x) => {
        return id !== x.id;
      });
    });
    console.log(id);
  };
  const subtitle = "Affordable homes for you";
  return (
    <div className="App">
      <Title title="New homes you may like" sub={subtitle} />
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            hide events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents &&
        events.map((x) => (
          <div key={x.id}>
            <h2>{x.title}</h2>
            <button
              onClick={() => {
                counter(x.id);
              }}
            >
              Delete Names
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
