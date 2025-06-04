
const Book = ({ book }) => {
    const { bookName, author, image } = book;
    return (
        <div className="card bg-base-100 w-96 shadow-sm bg-blue-200 text-black">
            <figure>
                <img
                    src={image}
                    className="  py-8 px-24"
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By {author}</p>
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
            </div>
        </div>
    );
};

export default Book;