import BookCard from "./BookCard"

const BooksList = ({ list, aut, jenres }) =>
{
    return (
        <div className="bookList">
            {list.map(book => <BookCard data={book} autor={aut.find(el => el.id === book.author)} jenre={jenres?.find(el => el.id === book.jenre[0])} key={book.id} />)}
        </div>
    )
}

export default BooksList