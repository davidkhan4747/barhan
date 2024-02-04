import React from 'react'
import './modal-order.scss'
import { TfiClose } from "react-icons/tfi";

const ModalOrder = ({
    close
}) => {
  return (
    <>
        <div className='modal_body'>
            <div className="close">
                <button onClick={close} className='close_btn'>
                    <TfiClose/>
                </button>
            </div>
            <div className="modal_content">
                <h2>Заказ</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </>
    )

}

export default ModalOrder