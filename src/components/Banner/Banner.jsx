import BaneerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="w-full mx-auto rounded-3xl overflow-hidden m-5">
            <div className="hero-content flex-col lg:flex-row-reverse bg-gray-200">
                <img
                    src={BaneerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='text-black'>
                    <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary mt-8">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;