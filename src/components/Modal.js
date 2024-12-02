import React, { useState } from 'react'

function Modal({ show, onClose }) {
    if (!show) {
        return null;
    }

    return (
        <div className='model-overlay' onClick={onClose}>
            <button className='model-close' onClick={onClose}>Close</button>
            <div className='model'>
                <p className='p'>This is the content of the modal.</p>
            </div>
        </div>
    )
}

export default Modal