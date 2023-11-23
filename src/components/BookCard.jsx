import { NavLink } from 'react-router-dom';
import coverDef from '../assets/images/example.jpg';

const BookCard = ({ data, autor, jenre }) =>
{

    return (
        <div className="bookCard">
            <h3>{data.name}</h3>
            {/* <div className="avatar"><img src={data.cover_image ? data.cover_image : coverDef} alt="img" /></div> */}
            <div className="avatar">
                <NavLink to={`/admin/books/${data.id}`} state={data.id}><img src={coverDef} alt="img" /></NavLink></div>
            <p>Жанр: {jenre?.name}</p>
            {/* <p>{data.description?.length > 135 ? (data.description.slice(0, 135) + '...') : data.description}</p> */}
            {/* <p>Количкство страниц: {data.amount_pages}</p> */}
            <p>Опубликовано: {data.created_at}</p>
            <h4>Автор: {autor.first_name + " " + autor.last_name}</h4>
            {/* <button className='btn'>Редактировать</button>
            <button className='btn del'>Удалить</button> */}
            {/* <PdfViewer pdfUrl={data.short_book_file} /> */}
            {/* <div>
                    <iframe src={data.short_book_file} frameBorder={0} />
                </div> */}
        </div>

    )
}

export default BookCard