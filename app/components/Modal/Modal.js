import React from 'react'

import './Modal.scss'

function Modal({changeModalState, modalTeam}) {
    return(
        <div className="modal-externe" onClick={() => changeModalState(false)} >
            <div className="modal-interne" onClick={(e) => e.stopPropagation()} >
                <div className="close-btn" onClick={() => changeModalState(false)}>X</div>
                <img className="modal-flag" src={modalTeam.flag} alt={"Drapeau "+modalTeam.name} />
                <div className="modal-header">
                    {modalTeam.name}
                </div>
                <div className="modal-body">
                    <div className="modal-body-logo">
                        <img src={modalTeam.logo} alt="" />
                    </div>
                    <div className="modal-body-players">
                        

                    </div>
                </div>
                <div className="modal-footer">
                    <p>Ajouter au favori</p>
                </div>
            </div>
        </div>
    )
}

export default Modal