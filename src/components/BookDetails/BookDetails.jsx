import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);
    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image } = book;
    return (
        <div>
            <h2>Books Details:{bookId}</h2>
            <img className='w-32 mx-auto' src={image} alt="" />
            <div className='mt-5 mb-5 '>
                <button className="btn btn-outline btn-accent mr-4">read</button>
                <button className="btn btn-accent">wishList</button>
            </div>
        </div>
    );
};

export default BookDetails;