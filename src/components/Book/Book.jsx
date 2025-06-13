import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookName, author, image, tags, category, bookId } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-sm text-white border border-white-200 p-5">
                <figure className=" bg-gray-200 p-3">
                    <img
                        src={image}
                        className="w-full h-48 object-container p-4 rounded-2xl"
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3">
                        {
                            tags.map((tag, index) => <button
                                key={index} className="btn btn-sm">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By {author}</p>
                    <div className=" border-t  border-dotted"></div>
                    <div className="flex justify-between items-center ">
                        <div className="badge badge-outline mt-2">{category}</div>
                        <div className="rating">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" ></div>
                            <div className="mask mask-star" aria-label="4 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div>
                    </div>
                </div>
            </div></Link>
    );
};

export default Book;