import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import BooksList from "../../components/BooksList"
import AutorsList from "../../components/AutorsList"
import { getBooks } from "../../redux/slices/bookSlice"
import { booksApi } from "../../api/bookApis"
import { getAuthors } from "../../redux/slices/authorsSlice"
import { authorsApi } from "../../api/authorApis"
import { getJenres } from "../../redux/slices/jenreSlice"
import { jenreApi } from "../../api/jenreApis"

const Books = () =>
{
    const navigate = useNavigate()
    const [showBooks, setShowBooks] = useState(false)
    const [showAutors, setShowAutors] = useState(false)
    const dispatch = useDispatch()
    const { books } = useSelector(state => state.bookReducer)
    const { authors } = useSelector(state => state.authorsReducer)
    const { jenres } = useSelector(state => state.jenreReducer)

    const authorsHandler = () =>
    {
        if (showBooks) setShowBooks(false)
        setShowAutors(!showAutors)
    }
    const booksHandler = () =>
    {
        if (authors) setShowAutors(false)
        setShowBooks(!showBooks)
    }

    useEffect(() =>
    {
        if (books.length < 1) {
            dispatch(getBooks(booksApi))
            dispatch(getAuthors(authorsApi))
            dispatch(getJenres(jenreApi))
        }
    }, [books])

    return (
        <div className="booksPage">
            <div className="head">
                <button className="goBack" onClick={() => navigate(-1)}>Назад</button>
                <button className="actionsH2" onClick={booksHandler}>{showBooks ? 'Свернуть Книги' : 'Показать Книги'}</button>
                <button className="actionsH2" onClick={authorsHandler}>{showAutors ? 'Свернуть Авторов' : 'Показать Авторов'}</button>
            </div>
            <div className="bodyBooks">

                {showAutors && (authors.length > 0 ? <AutorsList list={authors} /> : <p>Авторов нету</p>)}

                {showBooks && (books.length > 0 ? <BooksList list={books} aut={authors} jenres={jenres} /> : <p>Книг нету</p>)}
            </div>
        </div>
    )
}

export default Books