import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOne } from "../../redux/slices/bookSlice"
import { oneBookApi } from "../../api/bookApis"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import Spinner from "../../components/UI/Spinner/Spinner"
import DeleteModal from "../../components/modals/DeleteModal"

const OneBook = () =>
{
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const { loading, info, error } = useSelector(state => state.bookReducer)

    const [modal, setModal] = useState(false)
    const [editM, setEditM] = useState(false)
    useEffect(() =>
    {
        const api = oneBookApi + location.state
        dispatch(getOne(api))
    }, [])

    return (
        <div>
            {error ? <p>Error: {error.message}</p>
                : loading ? <Spinner />
                    :
                    <div className="bookPage">
                        <div className="actions">
                            <button className="goBack" onClick={() => navigate(-1)}>назад</button>
                            <button className="btn ">Редактировать</button>
                            <button className="btn del" onClick={() => setModal(true)}>Удалить</button>
                        </div>
                        the rezalts
                        <h3>{info.name}</h3>
                        <p>{info.description}</p>
                        <div><img src={info.cover_image} alt="" /></div>
                        <div><img src={info.avatar} alt="" /></div>
                        <a target="_blank" href={info.book_file}>файл книги</a>
                        {modal && <DeleteModal closeModal={setModal} />}
                    </div>
            }
        </div>
    )
}

export default OneBook