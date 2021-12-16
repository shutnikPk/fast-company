import React from 'react';
const BookmarkComponent = ({ isFavorite, isFacoriteTogleHandler }) => {
    return (
        <button className={("btn btn-") + (isFavorite ? "secondary" : "primary")} onClick={isFacoriteTogleHandler}>
            {isFavorite ? "Discard" : "Add"}
        </button>);
}

export default BookmarkComponent;