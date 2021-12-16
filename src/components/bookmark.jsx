import React from 'react';
const BookmarkComponent = ({ isFavorite, isFacoriteTogleHandler }) => {
    return (<p style={{ cursor: "pointer" }} onClick={isFacoriteTogleHandler}>{isFavorite ? "Discard" : "Add"}</p>);
}

export default BookmarkComponent;