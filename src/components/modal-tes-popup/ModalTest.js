import React, { useState } from 'react'
import Modal from './Modal'


const ModalTest = () => {
  const [showModalPopup,setShowModalPopup] =useState(false)

  function hangleToggleModalPopup(){
    setShowModalPopup(!showModalPopup)
  }

  function onClose(){
    setShowModalPopup(false)
  }
   
  return (
    <div>
        <button onClick={hangleToggleModalPopup}>Open Model Popup</button>
        {
          showModalPopup && <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          id={"some-id"}
           onClose={onClose} body={<div>Customized Body</div>}/>
        }
    </div>
  )
}

export default ModalTest