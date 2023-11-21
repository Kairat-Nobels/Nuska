import React from 'react'
import { useSelector } from 'react-redux'

function AutorsList({ list })
{
    return (
        <div className='authorsList'>
            <ul>
                {list.map(a => <li key={a.id}>
                    <h3>{a.first_name + " " + a.last_name}</h3>
                    <div className='actions'>
                        <button className='btn'>Редактировать</button>
                        <button className='btn del'>Удалить</button>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default AutorsList