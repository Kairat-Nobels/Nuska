import React from 'react'
import { useDispatch } from 'react-redux'

const DeleteModal = ({ api, closeModal }) =>
{
    const dispatch = useDispatch()
    const deleteHandler = () =>
    {

    }
    return (
        <div className='window' onClick={() => closeModal(false)}>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <h3>Вы уверены что хотите удалить?</h3>
                <div className="actions">
                    <button onClick={deleteHandler}>Да</button>
                    <button onClick={() => closeModal(false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal