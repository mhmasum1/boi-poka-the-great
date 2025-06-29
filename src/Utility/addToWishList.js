const getStoreWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }

}
const addToStoreWishList = (id) => {
    const storedList = getStoreWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
    }

}
export { addToStoreWishList }