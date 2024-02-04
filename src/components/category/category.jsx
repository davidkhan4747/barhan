import React from 'react'
import demodish from '../../assets/dd.jpg'
import './category.scss'
import ModalOrder from '../modal-order/modal-order'
import { useMain } from '../../context/main-context'
const Category = () => {
  const main = useMain()
  return (
    <>
    {main.modal ? <ModalOrder close={()=> main.closeModal()}/> : null }
     
        <div>
            <div className="wrap">
                  <h1 className='title'>Холодые закуски</h1>  
                  <div className="dishes">
                        <div className="dish">
                            <img src={demodish} alt="dush" />
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <button onClick={()=> main.openModal()} className={'btn'} to=''>
                                Заказать
                            </button>
                        </div>
                  </div>
            </div>
        </div>
    </>
    )
}

export default Category