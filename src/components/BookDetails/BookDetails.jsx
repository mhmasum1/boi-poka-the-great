import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList } from '../../Utility/addToDb';
import { addToStoreWishList } from '../../Utility/addToWishList';

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        addToStoreReadList(id);
    }
    const handleMarkAsWishList = (id) => {
        addToStoreWishList(id);
    }
    return (
        <div>
            <h2>Books Details:{bookId}</h2>
            <img className='w-32 mx-auto' src={image} alt="" />
            <div className='mt-5 mb-5 '>
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4"> Mark as Read</button>
                <button onClick={() => handleMarkAsWishList(bookId)} className="btn btn-accent"> Add to WishList</button>
            </div>
        </div>
    );
};

export default BookDetails;