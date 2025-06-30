import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../Utility/addToDb';
import { addToStoreWishList } from '../../Utility/addToWishList';

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    if (!book) {
        return <p className="text-center text-red-500">Book not found.</p>;
    }

    const { image, bookName, author, tags, category, rating } = book;

    const handleMarkAsRead = (id) => {
        addToStoreReadList(id);
    };

    const handleMarkAsWishList = (id) => {
        addToStoreWishList(id);
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Book Details: {bookName}</h2>
            <img className='w-32 mx-auto mb-4' src={image} alt={bookName} />
            <p>Author: {author}</p>
            <p>Category: {category}</p>
            <p>Rating: {rating}/5</p>
            <div className="mt-4 mb-5">
                <button onClick={() => handleMarkAsRead(id)} className="btn btn-outline btn-accent mr-4">
                    Mark as Read
                </button>
                <button onClick={() => handleMarkAsWishList(id)} className="btn btn-accent">
                    Add to WishList
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
