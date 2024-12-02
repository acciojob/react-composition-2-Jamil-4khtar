import React, {useState} from "react";
import './../styles/App.css';
import Modal from "./Modal";


const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <button className="show-modal" onClick={handleOpenModal}>Show Modal</button>
        <Modal 
          show={showModal} onClose={handleCloseModal}
        />

    </div>
  )
}

export default App
