import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreReadList } from '../Utility/addToDb';
import Book from '../components/Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {
        const storedReadList = getStoreReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, storedReadListInt, allBooks);
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, [])
    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>

            <input type="radio" name="my_tabs_6" className="tab" aria-label="Read List" />
            <div className="tab-content bg-base-100 border-base-300 p-6">Books I read : {readList.length}
                {
                    readList.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

            <input type="radio" name="my_tabs_6" className="tab" aria-label="Wish List" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">My Wish List</div>
        </div>
    );
};

export default ListedBooks;