import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Modal from "./Components/Modal";
import { useState } from "react";
import { findAllByTestId } from "@testing-library/react";

function App() {
  let name = "Optimus";
  const [showEvents, setShowEvents] = useState(false);
  //state to show events
  const [showModal, setShowModal] = useState(false);

  let forShow = () => {
    setShowEvents(true);
  };
  // state to handle object show
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
  //handle close modal
  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "Affordable homes for you";
  return (
    <div className="App">
      <Title title="New homes you may like" sub={subtitle} />

      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            hide events
          </button>
        </div>
      )}
      {showEvents && (
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
      {/* <Modal>
        {" "}
        <h2>10% Off Coupon Code!!</h2>
        <p>use the code BANNA001 at then checkout.</p>
        <input type="text" id="fname" placeholder="Full Name"></input>
      </Modal> */}

      <div>
        <button onClick={() => setShowModal(true)}> show modal</button>
        {showModal && (
          <Modal handleClosed={handleClose}>
            <h2>Terms and Conditions</h2>
            <p>
              Terms and Conditions is not required and it's not mandatory by
              law. Unlike Privacy Policies, which are required by laws such as
              the GDPR, CalOPPA and many others, there's no law or regulation on
              Terms and
            </p>
            <a href="#"> Find out more...</a>
            <button onClick={() => handleClose()}>close</button>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
