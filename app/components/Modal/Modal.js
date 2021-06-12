import React from 'react'

import './Modal.scss'

function Modal({changeModalState, modalTeam}) {
    return(
        <div className="modal-externe" onClick={() => changeModalState(false)} >
            <div className="modal-interne" onClick={(e) => e.stopPropagation()} >
                <div className="close-btn" onClick={() => changeModalState(false)}>X</div>
                <div className="modal-flag">
                    <img src={modalTeam.flag} alt="" />
                </div>
                <div className="modal-header">
                    {modalTeam.name}
                </div>
                <div className="modal-body">

                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    )
}

export default Modal