import {createRoot} from 'react-dom/client'
import React, {lazy, Suspense} from 'react'
import './Modal.module.scss'

export default function OpenModal() {

    const Modal = lazy(()=>import('./Modal'));

    const modalContainer = document.createElement('div');
    modalContainer.className = "ModalContainer";
    document.body.appendChild(modalContainer);

    const root = createRoot (modalContainer);

    root.render(
        <Suspense fallback={<div>Patienter...</div>}>
            <Modal root={root} title={'Titre de la modal'} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quaerat, laudantium aperiam repellendus eveniet eum quas eius iure facilis! Consequatur, pariatur. Quibusdam similique repudiandae odio, libero in rem tempora perferendis!</p>
            </Modal>
        </Suspense>
    )

  return (
    <div>
      
    </div>
  )
}
