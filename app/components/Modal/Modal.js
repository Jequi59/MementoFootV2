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
                        <h3>Entraineur : </h3>
                        <p>{modalTeam.trainer} </p>
                        <h3>Gardiens : </h3>
                        {modalTeam.players.gardiens.map((gardien, index) => <p key={index} >{gardien}</p>)}
                        <h3>Défenseurs : </h3>
                        {modalTeam.players.defenseurs.map((defenseur, index) => <p key={index}>{defenseur}</p>)}
                        <h3>Milieux : </h3>
                        {modalTeam.players.milieux.map((milieu, index) => <p key={index}>{milieu}</p>)}
                        <h3>Attaquants : </h3>
                        {modalTeam.players.attaquants.map((attaquant, index) => <p key={index}>{attaquant}</p>)}

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