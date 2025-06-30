import { Link } from "react-router-dom";

const Book = ({ book }) => {
    console.log("BOOK DATA:", book);

    const { bookName, author, image, tags, category, bookId, rating = 0 } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-gray-800 text-white shadow-sm border p-5">
                <figure className="bg-gray-200 p-3">
                    <img
                        src={image}
                        className="w-full h-48 object-cover p-4 rounded-2xl"
                        alt={bookName}
                    />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3 flex-wrap">
                        {tags?.map((tag, index) => (
                            <button key={index} className="btn btn-sm btn-outline">{tag}</button>
                        ))}
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By {author}</p>
                    <div className="border-t border-dotted my-2"></div>
                    <div className="flex justify-between items-center">
                        <div className="badge badge-outline mt-2">{category}</div>

                        <div className="ratings">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
